package haitai.fw.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import haitai.fos.general.entity.idao.IGPaymentTermDAO;
import haitai.fos.general.entity.idao.IGTransTermDAO;
import haitai.fos.general.entity.table.GPaymentTerm;
import haitai.fos.general.entity.table.GTransTerm;
import haitai.fos.sys.entity.idao.IPUserDAO;
import haitai.fos.sys.entity.table.PUser;
import haitai.fw.log.FosLogger;

import org.springframework.beans.factory.annotation.Autowired;

public class MappingConverterUtil {
	FosLogger logger = new FosLogger(MappingConverterUtil.class);
	private IGTransTermDAO transTermDao = null;
	private IGPaymentTermDAO paymentTermDao = null;
	private IPUserDAO userDao = null;
	
	public String Bool(String str) {
		if ("1".equals(str)) {
			return "YES";
		}
		return "NO";
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

	public String getCleanBL(String flag) {
		if(ConstUtil.TrueStr.equals(flag)) {
			return "clean on board";
		}
		return "";
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
	
	public IGTransTermDAO getTransTermDao() {
		return transTermDao;
	}

	@Autowired
	public void setTransTermDao(IGTransTermDAO transTermDao) {
		this.transTermDao = transTermDao;
	}

	public IGPaymentTermDAO getPaymentTermDao() {
		return paymentTermDao;
	}

	@Autowired
	public void setPaymentTermDao(IGPaymentTermDAO paymentTermDao) {
		this.paymentTermDao = paymentTermDao;
	}

	public IPUserDAO getUserDao() {
		return userDao;
	}

	@Autowired
	public void setUserDao(IPUserDAO userDao) {
		this.userDao = userDao;
	}
	
}
