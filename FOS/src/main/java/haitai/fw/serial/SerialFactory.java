package haitai.fw.serial;

import haitai.fos.sys.entity.idao.IPSerialNoDAO;
import haitai.fos.sys.entity.idao.IPSerialRuleDAO;
import haitai.fos.sys.entity.table.PSerialRule;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.SpringContextHolder;
import haitai.fw.util.StringUtil;
import haitai.fw.util.TimeUtil;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class SerialFactory {
//	private static final Short LOOP_NONE = 0;
	private static final Short LOOP_PER_DAY = 1;
	private static final Short LOOP_PER_MONTH = 2;
	private static final Short LOOP_PER_YEAR = 3;
	private static final String RULE_YEAR_FULL = "<YYYY>";
	private static final String RULE_YEAR_SHORT = "<YY>";
	private static final String RULE_MONTH = "<MM>";
	private static final String RULE_DAY = "<DD>";
	private static final String RULE_SERIAL = "<SN>";
	public static final String RULE_COMP = "<COMP>";
	public static final String RULE_USER = "<USER>";
	public static final String RULE_CURRENCY = "<CUR>";
	public static final String RULE_RP = "<RP>";
	public static final String RULE_CONS_TYPE = "<CONS_TYPE>";
	public static final String RULE_CUST_CODE = "<CUST_CODE>";

	/**
	 * 获取序列号
	 * code: 对应的序列号生成规则名称
	 * @param code rule code
	 * @return the generated serial no
	 */
	public static String getSerial(String code){
		return getSerial(code, new HashMap<String, String>());
	}
	
	
	/**
	 * 获取序列号 code: 对应的序列号生成规则名称 paramMap: 提供的替换变量 公司简称: SerialFactory.RULE_COMP,
	 * 如果不提供, 自动取当前公司 用户简称: SerialFactory.RULE_USER, 如果不提供, 自动取当前用户 币种简称:
	 * SerialFactory.RULE_CURRENCY
	 *
	 * @param code
	 * @param paramMap
	 * @return
	 */
	public static String getConsignSerial(String code, Map<String, String> paramMap,Date consDate) {
		/**
		 * 1.获取需要的变量 
		 * 2.根据rule code和company code找到对应的p_serial_rule
		 * 3.seru_uniq_suffix, 用对应的变量替换之后, 得到seno_suffix 
		 * 4.根据seru_code,comp_code, seno_suffix三个参数, 从p_serial_no表获取流水号 1)获取到就+1 2)未获取到,
		 *   插入一条新记录 
		 * 5.把取到的流水号, 根据设定的长度seru_sn_length, 补0 
		 * 6.根据seru_rule, 替换每个变量,包括流水号 
		 * 7.返回替换之后的最终serial
		 */
		// get all parameter
		buildParamMap(paramMap);
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("seruCode", code);
		queryMap.put("compCode", paramMap.get(RULE_COMP));

		// find the rule using PSerialRuleDAO
		PSerialRule rule = getSerialRule(queryMap);

		// get unique suffix
		// use real value of variable to replace the variable symbol
		String senoSuffix = fillRuleByDate(rule.getSeruUniqSuffix(), paramMap,consDate);

		// insert fields of serial no
		queryMap.put("seruId", "" + rule.getId());
		queryMap.put("senoSuffix", senoSuffix);
		queryMap.put("senoCurrentNo", "1");
		queryMap.put("seruCode", code);
		// expire time of serial no
		Byte seruLoopPeriod = rule.getSeruLoopPeriod();
		//Calendar expire = getExpireTime(seruLoopPeriod);
		Calendar expire = getExpireTimeByDate(seruLoopPeriod,consDate);
		queryMap.put("senoExpire", StringUtil.date2String(expire.getTime()));

		// get the next NO using PSerialNoDAO
		Long sn = getNextNoByDate(queryMap);

		// format the serial no, add 0 to the leading
		String strSN = formatSN(sn, rule.getSeruSnLength());

		// get final serial no
		// use real value of variable to replace the variable symbol
		paramMap.put(RULE_SERIAL, strSN);
		String serialNo = fillRuleByDate(rule.getSeruRule(), paramMap,consDate);
		return serialNo;
	}
	
	/**
	 * 获取序列号
	 * code: 对应的序列号生成规则名称
	 * paramMap: 提供的替换变量
	 *   公司简称: SerialFactory.RULE_COMP, 如果不提供, 自动取当前公司
	 *   用户简称: SerialFactory.RULE_USER, 如果不提供, 自动取当前用户
	 *   币种简称: SerialFactory.RULE_CURRENCY
	 * @param code serial rule code
	 * @param paramMap parameter map
	 * @return the generated serial no
	 */
	public static String getSerial(String code, Map<String, String> paramMap) {
		/**
		 * 1.获取需要的变量 
		 * 2.根据rule code和company code找到对应的p_serial_rule
		 * 3.seru_uniq_suffix, 用对应的变量替换之后, 得到seno_suffix 
		 * 4.根据seru_code, comp_code, seno_suffix三个参数, 从p_serial_no表获取流水号 
		 * 	1)获取到就+1 
		 * 	2)未获取到, 插入一条新记录 
		 * 5.把取到的流水号, 根据设定的长度seru_sn_length, 补0 
		 * 6.根据seru_rule, 替换每个变量, 包括流水号 
		 * 7.返回替换之后的最终serial
		 */
		//get all parameter
		buildParamMap(paramMap);
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("seruCode", code);
		queryMap.put("compCode", paramMap.get(RULE_COMP));
		
		//find the rule using PSerialRuleDAO
		PSerialRule rule = getSerialRule(queryMap);
		
		//get unique suffix
		//use real value of variable to replace the variable symbol
		String senoSuffix = fillRule(rule.getSeruUniqSuffix(), paramMap);
		
		//insert fields of serial no 
		queryMap.put("seruId", rule.getSeruId());
		queryMap.put("senoSuffix", senoSuffix);
		queryMap.put("senoCurrentNo", (long) 1);
		queryMap.put("seruCode", code);
		//expire time of serial no
		Byte seruLoopPeriod = rule.getSeruLoopPeriod();
		Calendar expire = getExpireTime(seruLoopPeriod);
		queryMap.put("senoExpire", expire.getTime());
		
		//get the next NO using PSerialNoDAO
		Long sn = getNextNo(queryMap);
		
		//format the serial no, add 0 to the leading
		String strSN = formatSN(sn, rule.getSeruSnLength());
		
		//get final serial no
		//use real value of variable to replace the variable symbol
		paramMap.put(RULE_SERIAL, strSN);
		return fillRule(rule.getSeruRule(), paramMap);
	}

	/**
	 * 计算规则的过期时间
	 * @param seruLoopPeriod calculate loop period
	 * @return the expire time
	 */
	private static Calendar getExpireTime(Byte seruLoopPeriod) {
		Calendar expire = Calendar.getInstance();
		if (LOOP_PER_YEAR.equals(seruLoopPeriod)) {
			expire.set(expire.get(Calendar.YEAR) + 1, Calendar.JANUARY, 1, 0,
					0, 0);
		} else if (LOOP_PER_MONTH.equals(seruLoopPeriod)) {
			expire.add(Calendar.MONTH, 1);
			expire.set(expire.get(Calendar.YEAR), expire.get(Calendar.MONTH),
					1, 0, 0, 0);
		} else if (LOOP_PER_DAY.equals(seruLoopPeriod)) {
			expire.add(Calendar.DAY_OF_MONTH, 1);
			expire.set(expire.get(Calendar.YEAR), expire.get(Calendar.MONTH),
					expire.get(Calendar.DAY_OF_MONTH), 0, 0, 0);
		}
		return expire;
	}

	/**
	 * 查询条件
	 * @param propertyMap param map
	 */
	private static void buildParamMap(
			Map<String, String> propertyMap) {
		if(!propertyMap.containsKey(RULE_COMP)){
			propertyMap.put(RULE_COMP, getCompCode());
		}
//		if(!propertyMap.containsKey(RULE_USER)){
//			propertyMap.put(RULE_USER, getUserCode());
//		}
	}

	/**
	 * 查询规则
	 * @param querymap query map
	 * @return all matching rules
	 */
	@Transactional(readOnly=true)
	private static PSerialRule getSerialRule(Map<String, Object> querymap) {
		IPSerialRuleDAO dao = SpringContextHolder.getBean("PSerialRuleDAO");
		return dao.findByProperties(querymap).get(0);
	}

	/**
	 * 替换规则中的变量
	 * @param rule rule code
	 * @param paramMap param map
	 * @return the serial number after replaced variable
	 */
	private static String fillRule(String rule, Map<String, String> paramMap) {
		Date now = TimeUtil.getNow();
		String strNow = StringUtil.date2String(now);
		
		//year month day 
		rule = rule.replaceAll(RULE_YEAR_FULL, strNow.substring(0, 4));
		rule = rule.replaceAll(RULE_YEAR_SHORT, strNow.substring(2, 4));
		rule = rule.replaceAll(RULE_MONTH, strNow.substring(5, 7));
		rule = rule.replaceAll(RULE_DAY, strNow.substring(8, 10));
		
		//company code, user code, currency code, serial no
		for (String key : paramMap.keySet()) {
			rule = rule.replaceAll(key, paramMap.get(key));			
		}
		return rule;
	}

	/**
	 * 从流水号表中查询到最新流水号
	 * @param paramMap the param map
	 * @return the next serial number
	 */
	@Transactional
	private static Long getNextNo(Map<String, Object> paramMap) {
		IPSerialNoDAO dao = SpringContextHolder.getBean("PSerialNoDAO");
		return dao.getNextSerialNo(paramMap);
	}

	
	/**
	 * 从流水号表中查询到最新流水号
	 * @param paramMap the param map
	 * @return the next serial number
	 */
	@Transactional
	private static Long getNextNoByDate(Map<String, Object> paramMap) {
		IPSerialNoDAO dao = SpringContextHolder.getBean("PSerialNoDAO");
		return dao.getNextSerialNoByDate(paramMap);
	}

	
	/**
	 * 流水号补0
	 * @param sn the number
	 * @param length target length
	 * @return the number in target length
	 */
	private static String formatSN(Long sn, Integer length) {
		BigInteger i = new BigInteger("10");
		i = i.pow(length);
		String temp = Long.toString(i.longValue()) + sn;
		return temp.substring(temp.length() - length);
	}

//	private static String getUserCode() {
//		return "gg";
//	}

	private static String getCompCode() {
		return SessionManager.getStringAttr(SessionKeyType.COMPCODE);
	}
	
	/**
	 * 初始化, 凌晨执行, 删除过期的号
	 * delete the expired record
	 */
	@Transactional
	public static void initSerial() {
		IPSerialNoDAO dao = SpringContextHolder.getBean("PSerialNoDAO");
		dao.init();
	}
	
	/**
	 * 替换规则中的变量
	 *
	 * @param rule
	 * @param paramMap
	 * @return
	 */
	private static String fillRuleByDate(String rule, Map<String, String> paramMap,Date consDate) {
		Date now = TimeUtil.getNow();
		if(consDate!=null){
			now = consDate;
		}		
		String strNow = StringUtil.date2String(now);
		
		// year month day
		rule = rule.replaceAll(RULE_YEAR_FULL, strNow.substring(0, 4));
		rule = rule.replaceAll(RULE_YEAR_SHORT, strNow.substring(2, 4));
		rule = rule.replaceAll(RULE_MONTH, strNow.substring(5, 7));
		rule = rule.replaceAll(RULE_DAY, strNow.substring(8, 10));

		// company code, user code, currency code, serial no
		for (String key : paramMap.keySet()) {
			rule = rule.replaceAll(key, paramMap.get(key));
		}
		return rule;
	}
	
	/**
	 * 计算规则的过期时间
	 *
	 * @param seruLoopPeriod
	 * @return
	 */
	private static Calendar getExpireTimeByDate(Byte seruLoopPeriod,Date consDate) {
		Calendar expire = Calendar.getInstance();
		expire.setTime(consDate);
		if (LOOP_PER_YEAR.equals(seruLoopPeriod)) {
			expire.set(expire.get(Calendar.YEAR) + 1, Calendar.JANUARY, 1, 0, 0, 0);
		} else if (LOOP_PER_MONTH.equals(seruLoopPeriod)) {
			expire.add(Calendar.MONTH, 1);
			expire.set(expire.get(Calendar.YEAR), expire.get(Calendar.MONTH), 1, 0, 0, 0);
		} else if (LOOP_PER_DAY.equals(seruLoopPeriod)) {
			expire.add(Calendar.DAY_OF_MONTH, 1);
			expire.set(expire.get(Calendar.YEAR), expire.get(Calendar.MONTH), expire.get(Calendar.DAY_OF_MONTH), 0, 0,
					0);
		}
		return expire;
	}
}
