package haitai.fw.util;

import haitai.fw.entity.FosQuery;
import haitai.fw.entity.HttpHeader;
import haitai.fw.log.FosLogger;

import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;
import java.util.concurrent.ConcurrentHashMap;

import javax.persistence.Query;

public class DaoUtil {
	private static FosLogger logger = new FosLogger(DaoUtil.class);
	private static final Map<String, Map<String, Field>> classMap 
			= new ConcurrentHashMap<String, Map<String, Field>>();

	/**
	 * 简单查询: 设置绑定变量的值
	 * @param propertyMap
	 * @param clazz
	 * @param query
	 * @param isRowCount
	 * @param 
	 */
	@SuppressWarnings("unchecked")
	public static void setParameters(final Map<String, Object> propertyMap,
			Class clazz, Query query, boolean isRowCount) {
		Map<String, Field> fieldMap;
		fieldMap = getCachedFieldMap(clazz);
		
		for (String propertyName : propertyMap.keySet()) {
			if (fieldMap.containsKey(propertyName)) {
				query.setParameter(propertyName, propertyMap.get(propertyName));
			}
		}
		if (isRowCount)
			return;

		if (propertyMap != null && propertyMap.containsKey(HttpHeader.START)) {
			int start = Integer.valueOf((String) propertyMap
					.get(HttpHeader.START));
			int rowStartIdx = Math.max(0, start);
			if (rowStartIdx > 0) {
				query.setFirstResult(rowStartIdx);
			}
		}
		if (propertyMap != null && propertyMap.containsKey(HttpHeader.LIMIT)) {
			int limit = Integer.valueOf((String) propertyMap
					.get(HttpHeader.LIMIT));
			int rowCount = Math.max(0, limit);
			if (rowCount > 0) {
				query.setMaxResults(rowCount);
			}
		}

	}
	
	@SuppressWarnings("unchecked")
	public static void setParameters(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap, Query query, boolean isRowCount,
			Class... clazz) {		
		List<Map<String, Field>> fieldMaps = new ArrayList<Map<String,Field>>();
		for (int i = 0; i < clazz.length; i++) {
			fieldMaps.add(getCachedFieldMap(clazz[i]));
		}
		
		Set<String> conditionSet = new HashSet<String>();		
		for (FosQuery fosQuery : conditions) {
			//可能包括t1.
			String key = fosQuery.getKey();
			String realKey = fosQuery.getKey();
			Map<String, Field> foundMap = null;
			if (StringUtil.contains(key, ConstUtil.STRING_DOT)) {
				realKey = key.substring(key.indexOf(ConstUtil.STRING_DOT) + 1);
				foundMap = fieldMaps.get(Integer.parseInt(key.substring(1, 2)) - 1);
			} else {
				for (Map<String, Field> fieldMap : fieldMaps) {
					if (fieldMap.containsKey(realKey)) {
						foundMap = fieldMap;
						break;
					}
				}
			}
			if (foundMap != null) {
				Type fieldType = foundMap.get(realKey).getType();
				while (conditionSet.contains(realKey)) {
					realKey += "_1";
				}
				conditionSet.add(realKey);
				String value = fosQuery.getValue();
				Object objValue = null;
				if (ConstUtil.SQL_REAL_IN.equalsIgnoreCase(fosQuery.getOp())) {
					if (StringUtil.isBlank(value) || ",".equals(value.trim())) {
						objValue = "";
					} else {
						List inItems = new ArrayList();
						StringTokenizer token = new StringTokenizer(value, ",");
						while (token.hasMoreTokens()) {
							String tmp = (String) token.nextToken();
							if (StringUtil.isNotBlank(tmp)) {
								inItems.add(StringUtil.parseValue(fieldType,
										tmp));
							}
						}
						objValue = inItems;
					}
				} else {
					objValue = StringUtil.parseValue(fieldType, value);
				}
				query.setParameter(realKey, objValue);
				logger.debug("sql param: " + realKey + " = " + objValue );
			}
		}
		if (isRowCount)
			return;
		if (propertyMap != null && propertyMap.containsKey(HttpHeader.START)) {
			int start = Integer.valueOf((String) propertyMap
					.get(HttpHeader.START));
			int rowStartIdx = Math.max(0, start);
			if (rowStartIdx > 0) {
				query.setFirstResult(rowStartIdx);
			}
		}
		if (propertyMap != null && propertyMap.containsKey(HttpHeader.LIMIT)) {
			int limit = Integer.valueOf((String) propertyMap
					.get(HttpHeader.LIMIT));
			int rowCount = Math.max(0, limit);
			if (rowCount > 0) {
				query.setMaxResults(rowCount);
			}
		}
	}

	/**
	 * 简单查询: 拼查询条件
	 * @param propertyMap
	 * @param sb
	 */
	@SuppressWarnings("unchecked")
	public static void buildSql(final Map<String, Object> propertyMap,
			Class clazz, StringBuffer sb, boolean isRowCount) {
		Map<String, Field> fieldMap;
		fieldMap = getCachedFieldMap(clazz);
		int i = 0;
		for (String propertyName : propertyMap.keySet()) {
			if (fieldMap.containsKey(propertyName)) {
				appendSqlAnd(sb, i);
				Type fieldType = fieldMap.get(propertyName).getType();
				if (propertyMap.get(propertyName) instanceof String) {
					propertyMap.put(propertyName, StringUtil.parseValue(
							fieldType, (String) propertyMap
									.get(propertyName)));
				}
				sb.append("t1.").append(propertyName).append("= :").append(
						propertyName);
				i++;
			}
		}
		removeSqlWhere(sb, i);
		if (isRowCount)
			return;
		if (propertyMap.containsKey(HttpHeader.ORDERBY)
				&& StringUtil.isNotBlank((String) propertyMap
						.get(HttpHeader.ORDERBY))) {
			sb.append(" order by t1.").append(
					(String) propertyMap.get(HttpHeader.ORDERBY));
		}
		if (propertyMap.containsKey(HttpHeader.ORDERDIR)
				&& StringUtil.isNotBlank((String) propertyMap
						.get(HttpHeader.ORDERDIR))) {
			sb.append(" ");
			sb.append((String) propertyMap.get(HttpHeader.ORDERDIR));
		}
	}
	
	@SuppressWarnings("unchecked")
	public static void buildSql(List<FosQuery> conditions,
			Map<String, Object> propertyMap, StringBuffer sb,
			boolean isRowCount, Class... clazz) {
		QueryUtil.formatOpAndValue(conditions);
		List<Map<String, Field>> fieldMaps = new ArrayList<Map<String,Field>>();
		for (int i = 0; i < clazz.length; i++) {
			fieldMaps.add(getCachedFieldMap(clazz[i]));
		}
		Set<String> conditionSet = new HashSet<String>();
		int i = 0;
		for (FosQuery fosQuery : conditions) {
			//有些查询字段, 不按照这个类的缺省顺序, 里面已经有了(t?.)
			//可能包括t1.
			String key = fosQuery.getKey();
			String realKey = fosQuery.getKey();
			Map<String, Field> foundMap = null;
			int intTableSeq = 1;
			if (StringUtil.contains(key, ConstUtil.STRING_DOT)) {
				realKey = key.substring(key.indexOf(ConstUtil.STRING_DOT) + 1);
				intTableSeq = Integer.parseInt(key.substring(1, 2));
				foundMap = fieldMaps.get(intTableSeq - 1);
			} else {
				for (Map<String, Field> fieldMap : fieldMaps) {
					if (fieldMap.containsKey(realKey)) {
						foundMap = fieldMap;
						break;
					}
					intTableSeq++;
				}
			}
			if (foundMap != null) {
				appendSqlAnd(sb, i);
				if (!StringUtil.contains(key, ConstUtil.STRING_DOT))
					sb.append("t").append(intTableSeq).append(ConstUtil.STRING_DOT);
				sb.append(key).append(" ").append(fosQuery.getOp()).append(" ");
				if (ConstUtil.SQL_REAL_IN.equalsIgnoreCase(fosQuery.getOp()))
					sb.append("(");
				sb.append(":");
				while (conditionSet.contains(realKey)) {
					realKey += "_1";
				}
				conditionSet.add(realKey);
				sb.append(realKey);
				if (ConstUtil.SQL_REAL_IN.equalsIgnoreCase(fosQuery.getOp()))
					sb.append(")");
				i++;
			}
		}
		
		removeSqlWhere(sb, i);
		
		if (isRowCount)
			return;
		
		if (propertyMap != null && propertyMap.containsKey(HttpHeader.ORDERBY)) {
			int intTableSeq = 1;
			for (Map<String, Field> fieldMap : fieldMaps) {
				if (fieldMap.containsKey(propertyMap.get(HttpHeader.ORDERBY))) {
					sb.append(" order by ").append("t").append(intTableSeq)
							.append(".").append((String) propertyMap
											.get(HttpHeader.ORDERBY));
					break;
				}
				intTableSeq++;
			}
		}
		if (propertyMap != null && propertyMap.containsKey(HttpHeader.ORDERDIR)) {
			sb.append(" ");
			sb.append((String) propertyMap.get(HttpHeader.ORDERDIR));
		}
	}

	/**
	 * 给sql语句加上where和and
	 * @param sb
	 * @param i
	 */
	private static void appendSqlAnd(StringBuffer sb, int i) {
		if(i == 0 && sb.lastIndexOf("where") == -1){
			sb.append(" where ");
		}
		if (i > 0){
			sb.append(" and ");
		}else{
			String s = sb.toString().trim().toLowerCase();
			if(!s.endsWith(" and") && !s.endsWith(" where")){
				sb.append(" and ");
			}
		}
	}
	
	/**
	 * 如果没有条件, 要去掉sql最后的where
	 * @param sb
	 * @param i
	 */
	private static void removeSqlWhere(StringBuffer sb, int i) {
		if (i == 0 && sb.toString().trim().toLowerCase().endsWith(" where")) {
			sb.delete(sb.lastIndexOf(" where"), sb.length());
		}
	}

	/**
	 * 获取类的属性信息
	 * @param clazz
	 * @return
	 */
	@SuppressWarnings("unchecked")
	private static Map<String, Field> getCachedFieldMap(Class clazz) {
		Map<String, Field> fieldMap;
		boolean hasParent = true;
		if(!clazz.getSuperclass().getSimpleName().startsWith("Abstract")){
			hasParent = false;
		}
		
		if (hasParent) {
			fieldMap = classMap.get(clazz.getSuperclass().getSimpleName());
		} else {
			fieldMap = classMap.get(clazz.getSimpleName());
		}

		if (fieldMap == null) {
			fieldMap = new HashMap<String, Field>();
			Field[] fields = null;
			String fieldName = null;
			if(hasParent){
				fields = clazz.getSuperclass().getDeclaredFields();
				fieldName = clazz.getSuperclass().getSimpleName();
			}else{
				fields = clazz.getDeclaredFields();
				fieldName = clazz.getSimpleName();
			}
			for (Field field : fields) {
				fieldMap.put(field.getName(), field);
			}
			classMap.put(fieldName, fieldMap);
		}
		return fieldMap;
	}

}
