package haitai.fw.util;

import haitai.fos.general.entity.idao.IGContainerTypeDAO;
import haitai.fos.general.entity.idao.IGPaymentTermDAO;
import haitai.fos.general.entity.idao.IGTransTermDAO;
import haitai.fos.general.entity.table.GContainerType;
import haitai.fos.general.entity.table.GPaymentTerm;
import haitai.fos.general.entity.table.GTransTerm;
import haitai.fos.sys.entity.idao.IPUserDAO;
import haitai.fos.sys.entity.table.PUser;
import haitai.fw.log.FosLogger;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MappingConverterUtil {
	FosLogger logger = new FosLogger(MappingConverterUtil.class);
	@Autowired
	private IGTransTermDAO transTermDao;
	@Autowired
	private IGPaymentTermDAO paymentTermDao;
	@Autowired
	private IGContainerTypeDAO cotyDao;
	@Autowired
	private IPUserDAO userDao;
	
	public String Bool(String str) {
		if ("1".equals(str)) {
			return "YES";
		}
		return "NO";
	}
	
	public String Allowed(String str) {
		if ("1".equals(str)) {
			return "Allowed";
		}
		return "Not Allowed";
	}
	
	public String subString8(String s) {
		if (StringUtil.isBlank(s)) {
			return s;
		}
		if (s.length() <= 8) {
			return s;
		}
		return s.substring(0, 8);
	}
	
	public String getFirstLine(String str){
		if(StringUtil.contains(str, ConstUtil.STRING_RETURN_WIN)){
			str = str.substring(0, str.indexOf(ConstUtil.STRING_RETURN_WIN));
		}else if(StringUtil.contains(str, ConstUtil.STRING_RETURN_UNIX)){
			str = str.substring(0, str.indexOf(ConstUtil.STRING_RETURN_UNIX));
		}
		return str;
	}
	
	public String toLocalDate(String strDate){
		String from = "yyyy-MM-dd";
		String to = "yyyy年MM月dd日";
		SimpleDateFormat fromFormat = new SimpleDateFormat(from);
		SimpleDateFormat toFormat = new SimpleDateFormat(to);
		String targetDate = null;
		try {
			Date date = fromFormat.parse(strDate);
			targetDate = toFormat.format(date);
		} catch (ParseException e) {
			logger.error("convert date (" + strDate + ") from " + from + " to "
					+ to + " failed!");
		}
		return targetDate;
	}
	
	/**
	 * 将日期字符串转为特定格式英文日期
	 * 08-APR-2015
	 * 
	 * @param strDate
	 * @return
	 */
	public String toEnDate(String strDate){
		String from = "yyyy-MM-dd";
		SimpleDateFormat fromFormat = new SimpleDateFormat(from);
		String targetDate = "";
		try {
			Date date = fromFormat.parse(strDate);
			
			targetDate = String.format(Locale.ENGLISH, "%te", date);
			targetDate += "-" + String.format(Locale.ENGLISH, "%tb", date);
			targetDate += "-" + String.format(Locale.ENGLISH, "%tY", date);
			targetDate = targetDate.toUpperCase();
		} catch (ParseException e) {
			logger.error("convert date (" + strDate + ") from " + from + " failed!");
		}
		return targetDate;
	}
	
	public static void main(String[] args) {
		MappingConverterUtil util = new MappingConverterUtil();
		String d = util.toLocalDate("2008-10-27");
		System.out.println(d);
		System.out.print("aaa\nbbb\nccc");
		String s = util.getFirstLine("aaa\nbbb\nccc");
		System.out.print(s);
		System.out.println("end");
	}
	
	public String getTranCode(String strId){
		if(StringUtil.isBlank(strId)){
			return "";
		}
		Integer id = Integer.parseInt(strId);
		GTransTerm entity = transTermDao.findById(id);
		return entity.getTranCode();
	}
	
	public String getCotyCode(String strId){
		if(StringUtil.isBlank(strId)){
			return "";
		}
		Integer id = Integer.parseInt(strId);
		GContainerType entity = cotyDao.findById(id);
		return entity.getCotyCode();
	}
	
	public String getCotyLength(String strId){
		if(StringUtil.isBlank(strId)){
			return "";
		}
		Integer id = Integer.parseInt(strId);
		GContainerType entity = cotyDao.findById(id);
		return entity.getCotyLength();
	}
	
	public String getCoclCode(String strId){
		if(StringUtil.isBlank(strId)){
			return "";
		}
		Integer id = Integer.parseInt(strId);
		GContainerType entity = cotyDao.findById(id);
		return entity.getCoclCode();
	}
	
	public String getCotyIsoCode(String strId){
		if(StringUtil.isBlank(strId)){
			return "";
		}
		Integer id = Integer.parseInt(strId);
		GContainerType entity = cotyDao.findById(id);
		return entity.getCotyIsoCode();
	}
	
	public String getPateName(String strId){
		if(StringUtil.isBlank(strId)){
			return "";
		}
		Integer id = Integer.parseInt(strId);
		GPaymentTerm entity = paymentTermDao.findById(id);
		return entity.getPateName();
	}
	
	public String getUserName(String strId){
		if(StringUtil.isBlank(strId)){
			return "";
		}
		Integer id = Integer.parseInt(strId);
		PUser entity = userDao.findById(id);
		return entity.getUserName();
	}

	public String getUserTel(String strId){
		if(StringUtil.isBlank(strId)){
			return "";
		}
		Integer id = Integer.parseInt(strId);
		PUser entity = userDao.findById(id);
		return entity.getUserTel();
	}
	
	public String getCleanBL(String flag) {
		if(ConstUtil.TrueStr.equals(flag)) {
			return "clean on board";
		}
		return "";
	}
	
	public String getCudeType(String strId){
		if("0".equals(strId)){
			return "客户自报关";
		}else if ("1".equals(strId)){
			return "代报";
		}
		else
			return "";
	}
	
	public String getAmountCap(String num){
		return NumberUtil.NumberToCapital(Double.parseDouble(num));
	}
	
	public String getEnAmountCap(String num){
		return NumberUtil.num2EnWords(Double.parseDouble(num));
	}
	
	public String invoStatus(String code){
		String status = "";
		if("0".equals(code)){
			status = "未审核";
		}else if ("1".equals(code)){
			status = "已审核";
		}else if ("2".equals(code)){
			status = "已作废";
		}
		return status;
	}
	
	public String writeoffStatus(String code){
		String status = "";
		if("0".equals(code)){
			status = "未核销";
		}else if ("1".equals(code)){
			status = "部分核销";
		}else if ("2".equals(code)){
			status = "已核销";
		}
		return status;
	}
	
	public String getBizClass(String code){
		String status = "";
		if("E".equals(code)){
			status = "出口";
		}else if ("I".equals(code)){
			status = "进口";
		}
		return status;
	}
	public String getBizType(String code){
		String status = "";
		if("C".equals(code)){
			status = "集装箱";
		}else if ("P".equals(code)){
			status = "集装箱";
		}else if ("B".equals(code)){
			status = "散货";
		}else if ("A".equals(code)){
			status = "空运";
		}else if ("G".equals(code)){
			status = "报关";
		}else if ("I".equals(code)){
			status = "报检";
		}else if ("M".equals(code)){
			status = "加工贸易";
		}else if ("F".equals(code)){
			status = "减免税";
		}else if ("R".equals(code)){
			status = "企业注册";
		}
		return status;
	}
	public String getExpeType(String code){
		String status = "";
		if ("R".equals(code)) {
			status = "应收";
		} else if ("P".equals(code)) {
			status = "应付";
		}
		return status;
	}
	
	public String getBlNo3(String s) {
		if (StringUtil.isBlank(s)) {
			return s;
		}
		if (s.length() <= 3) {
			return s;
		}
		return s.substring(0, 3);
	}

	public String getBlNo(String s) {
		if (StringUtil.isBlank(s)) {
			return s;
		}
		return s.substring(4);
	}

	public String overridePP(String s) {
		String n = "";
		if (StringUtil.isBlank(s)) {
			return s;
		}
		if (s.equals("PP")) {
			n = "FREIGHT PREPAID";
		} else if (s.equals("CC")) {
			n = "FREIGHT COLLECT";
		}
		return n;
	}
	
	public String getOperatorName(String userId){
		if(StringUtil.isBlank(userId)){
			return "";
		}
		Integer id = Integer.parseInt(userId);
		PUser user = userDao.findById(id);
		return user.getUserName();
	}
	public String getBillofLadingWay(String istyId){
		String n = "";
		if(StringUtil.isBlank(istyId)){
			return "";
		}
		Integer id = Integer.parseInt(istyId);
		if(id==2){
			n = "是";
		}else{
			n = "否";
		}
		return n;
	}
}
