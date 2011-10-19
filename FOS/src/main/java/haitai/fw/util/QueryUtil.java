package haitai.fw.util;

import haitai.fw.entity.FosQuery;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class QueryUtil implements InitializingBean {
	private static Map<String, String> opMap = new ConcurrentHashMap<String, String>();

	@Override
	public void afterPropertiesSet() throws Exception {
		opMap.put(ConstUtil.SQL_OP_EQUAL, ConstUtil.SQL_REAL_EQUAL);
		opMap.put(ConstUtil.SQL_OP_LESS, ConstUtil.SQL_REAL_LESS);
		opMap.put(ConstUtil.SQL_OP_LESSEQUAL, ConstUtil.SQL_REAL_LESSEQUAL);
		opMap.put(ConstUtil.SQL_OP_MORE, ConstUtil.SQL_REAL_MORE);
		opMap.put(ConstUtil.SQL_OP_MOREEQUAL, ConstUtil.SQL_REAL_MOREEQUAL);
		opMap.put(ConstUtil.SQL_OP_NOT_EQUAL, ConstUtil.SQL_REAL_NOT_EQUAL);
		opMap.put(ConstUtil.SQL_OP_LIKE, ConstUtil.SQL_REAL_LIKE);
		opMap.put(ConstUtil.SQL_OP_IN, ConstUtil.SQL_REAL_IN);
	}

	public static FosQuery compCodeCondition() {
		return new FosQuery(ConstUtil.CompCode, ConstUtil.SQL_OP_EQUAL,
				SessionManager.getStringAttr(SessionKeyType.COMPCODE));
	}

	public static FosQuery removedCondition() {
		return new FosQuery(ConstUtil.Removed, ConstUtil.SQL_OP_EQUAL, ConstUtil.FalseStr);
	}

	/**
	 * 给查询条件加括号
	 *
	 * @param s origin string
	 * @return handled string
	 */
	public static String addBracket(String s) {
		return "(" + s + ")";
	}

	/**
	 * 把in字符串格式化一下 ,a,b,c => 'a','b','c'
	 *
	 * @param s origin string
	 * @return handled string
	 */
	public static String addSingleQuote(String s) {
		String ret = "";
		if (StringUtil.isBlank(s) || ",".equals(s.trim())) {
			return ret;
		}
		StringTokenizer token = new StringTokenizer(s, ",");
		while (token.hasMoreTokens()) {
			String tmp = (String) token.nextToken();
			if (StringUtil.isNotBlank(tmp)) {
				ret += "'" + tmp + "',";
			}
		}
		// 去除最后个逗号
		ret = ret.substring(0, ret.length() - 1);
		return ret;
	}

	/**
	 * 如果字符串不包含%, 在最右边加%
	 * 如果包含%, 直接返回
	 *
	 * @param s origin string
	 * @return handled string
	 */
	public static String addFuzzSymbol(String s) {
		if (StringUtil.contains(s, ConstUtil.STRING_PERCENT)) {
			return s;
		}
		return ConstUtil.STRING_PERCENT + s + ConstUtil.STRING_PERCENT;
	}

	/**
	 * 把查询条件的操作符从数字转换成实际操作符, 并且格式化in查询条件
	 *
	 * @param conditions the query conditions
	 */
	public static void formatOpAndValue(List<FosQuery> conditions) {
		for (FosQuery item : conditions) {
			item.setOp(translateOp(item.getOp()));
			if (ConstUtil.SQL_REAL_LIKE.equals(item.getOp())) {
				item.setValue(addFuzzSymbol(item.getValue()));
			}
		}
	}

	public static String translateOp(String option) {
		if (StringUtil.isBlank(option)) {
			return option;
		}
		try {
			Short.parseShort(option);
		} catch (NumberFormatException e) {
			return option;
		}
		return opMap.get(option);
	}

	public static FosQuery getFosQueryByKey(List<FosQuery> conditions, String key) {
		for (FosQuery item : conditions) {
			if (key.equalsIgnoreCase(item.getKey())) {
				return item;
			}
		}
		return null;
	}

}
