package haitai.fw.util;

import haitai.fw.entity.FosQuery;
import haitai.fw.entity.HttpHeader;
import haitai.fw.log.FosLogger;

import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collection;
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
	@SuppressWarnings({"rawtypes"})
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
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public static void setParameters(List<FosQuery> conditions,
			final Map<String, Object> propertyMap, Query query, boolean isRowCount,
			Class... clazz) {		
		List<Map<String, Field>> fieldMaps = new ArrayList<Map<String,Field>>();
		for (int i = 0; i < clazz.length; i++) {
			fieldMaps.add(getCachedFieldMap(clazz[i]));
		}
		
		Set<String> conditionSet = new HashSet<String>();		
		
		if(conditions == null){
			conditions = plusMap2Conditions(conditions, propertyMap);
		}
		
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
	@SuppressWarnings({"rawtypes"})
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
	
	public static List<FosQuery> plusMap2Conditions(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final List<FosQuery> finalConditions;
		if (conditions == null) {
			finalConditions = new ArrayList<FosQuery>();
		} else {
			finalConditions = conditions;
		}
		if (propertyMap != null) {
			for (Map.Entry<String, Object> entry : propertyMap.entrySet()) {
				FosQuery field = new FosQuery(entry.getKey(), ConstUtil.SQL_REAL_EQUAL, ""+entry.getValue());
				if (!finalConditions.contains(field)) {
					finalConditions.add(field);
				}
			}
		}
		return finalConditions;
	}
	
	@SuppressWarnings({"rawtypes"})
	public static void buildSql(List<FosQuery> conditions,
			Map<String, Object> propertyMap, StringBuffer sb,
			boolean isRowCount, Class... clazz) {
		
		List<Map<String, Field>> fieldMaps = new ArrayList<Map<String, Field>>();
		for (int i = 0; i < clazz.length; i++) {
			fieldMaps.add(getCachedFieldMap(clazz[i]));
		}
		Set<String> parsedSet = new HashSet<String>();
		if(conditions == null){
			conditions = plusMap2Conditions(conditions, propertyMap);
		}
		
		QueryUtil.formatOpAndValue(conditions);
		
		List<FosQuery> noGroupList = new ArrayList<FosQuery>();
		
		//如果有orGroup的查询条件，根据orGroup分组
		Map<String,List<FosQuery>> orGroupMap = new HashMap<String,List<FosQuery>>();
				
		
		if(conditions.size()>0)
			appendSqlWhere(sb);
		
		for (FosQuery q : conditions) {			
			if(StringUtil.isNotBlank(q.getOrGroup())){
				List<FosQuery> qList = orGroupMap.get(q.getOrGroup());
				if(qList!=null){
					qList.add(q);
				}
				else{
					qList = new ArrayList<FosQuery>();
					qList.add(q);
					orGroupMap.put(q.getOrGroup(), qList);
				}
			}			
			else{
				noGroupList.add(q);
			}
		}
		
		buildAndSql(noGroupList,sb,fieldMaps,parsedSet,0);
		
		Collection<List<FosQuery>> orList =   orGroupMap.values();
		for(List<FosQuery> list : orList){
			appendSqlAnd(sb);
			sb.append(" ( ");
			buildAndSql(list,sb,fieldMaps,parsedSet,1);
			sb.append(" ) ");
		}
				
		removeSqlWhere(sb);
		
		if (isRowCount)
			return;

		if (propertyMap != null && propertyMap.containsKey(HttpHeader.ORDERBY)) {
			
			int intTableSeq = 1;
			for (Map<String, Field> fieldMap : fieldMaps) {
				if (fieldMap.containsKey(propertyMap.get(HttpHeader.ORDERBY))) {
					sb.append(" order by ").append("t").append(intTableSeq).append(".")
							.append(propertyMap.get(HttpHeader.ORDERBY));
					break;
				}
				intTableSeq++;
			}
			if (propertyMap != null && propertyMap.containsKey(HttpHeader.ORDERDIR)) {
				if(clazz.length>0){
					sb.append(" ");
					sb.append(propertyMap.get(HttpHeader.ORDERDIR));
				}
				
			}
		}
	}

	/**
	 * 给sql语句加上where和and
	 * @param sb
	 * @param i
	 *//*
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
	
	*//**
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
	@SuppressWarnings({"rawtypes"})
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
	
	
	public static void buildAndSql(List<FosQuery> conditions, StringBuffer sb,
			List<Map<String, Field>> fieldMaps,Set<String> parsedSet,int groupType){
		for (FosQuery htQuery : conditions) {
			// 有些查询字段, 不按照这个类的缺省顺序, 里面已经有了(t?.)
			// 可能包括t1.
			String key = htQuery.getKey();
			String realKey = htQuery.getKey();
			Map<String, Field> foundMap = null;
			int intTableSeq = 1;
			if (StringUtil.contains(key, ConstUtil.STRING_DOT)) {
				realKey = key.substring(key.indexOf(ConstUtil.STRING_DOT) + 1);
				intTableSeq = Integer.parseInt(key.substring(1, 2));
				foundMap = fieldMaps.get(intTableSeq - 1);
			} 
			else {
				for (Map<String, Field> fieldMap : fieldMaps) {
					if (fieldMap.containsKey(realKey)) {
						foundMap = fieldMap;
						break;
					}
					intTableSeq++;
				}
			}
			if (foundMap != null) {
				if(groupType==1)
					appendSqlOr(sb);
				else
					appendSqlAnd(sb);
				
				if (!StringUtil.contains(key, ConstUtil.STRING_DOT))
					sb.append("t").append(intTableSeq).append(ConstUtil.STRING_DOT);
				sb.append(key).append(" ").append(htQuery.getOp()).append(" ");
				
				if (htQuery.getOp().equals(ConstUtil.SQL_OP_IN) || htQuery.getOp().equals(ConstUtil.SQL_OP_NOT_IN))
					sb.append("(");
				
				sb.append(":");
				
				while (parsedSet.contains(realKey)) {
					realKey += "_1";
				}
				parsedSet.add(realKey);
				sb.append(realKey);
				
				if (htQuery.getOp().equals(ConstUtil.SQL_OP_IN) || htQuery.getOp().equals(ConstUtil.SQL_OP_NOT_IN))
					sb.append(")");
				
			}
		}
	}
	
	
	/**
	 * 给sql语句加上where和and
	 * 
	 * @param sb
	 * @param i
	 */
	private static void appendSqlAnd(StringBuffer sb, int i) {
		if (i == 0 && sb.lastIndexOf("where") == -1) {
			sb.append(" where ");
		}
		if (i > 0) {
			sb.append(" and ");
		} else {
			String s = sb.toString().trim().toLowerCase();
			if (!s.endsWith(" and") && !s.endsWith(" where")) {
				sb.append(" and ");
			}
		}
	}

	/**
	 * 给sql语句加上where
	 * 
	 * @param sb
	 * @param i
	 */
	private static void appendSqlWhere(StringBuffer sb) {
		if (sb.lastIndexOf("where") == -1) {
			sb.append(" where ");
		}
	}
	
	/**
	 * 给sql语句加上and
	 * 
	 * @param sb
	 * @param i
	 */
	private static void appendSqlAnd(StringBuffer sb) {		
		String s = sb.toString().trim().toLowerCase();
		if (!s.endsWith(" and") && !s.endsWith(" where") && !s.endsWith(" !(")) {
			sb.append(" and ");
		}
	}
	
	/**
	 * 给sql语句加上or
	 * 
	 * @param sb
	 * @param i
	 */
	private static void appendSqlOr(StringBuffer sb) {		
		String s = sb.toString().trim().toLowerCase();
		if (!s.endsWith(" or") && !s.endsWith("(")) {
			sb.append(" or ");
		}
	}
	
	
	
	/**
	 * 如果没有条件, 要去掉sql最后的where
	 * 
	 * @param sb
	 * @param i
	 */
	private static void removeSqlWhere(StringBuffer sb) {
		if (sb.toString().trim().toLowerCase().endsWith(" where")) {
			sb.delete(sb.lastIndexOf(" where"), sb.length());
		}
	}

}
