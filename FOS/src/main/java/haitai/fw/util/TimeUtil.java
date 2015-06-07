package haitai.fw.util;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TimeUtil {

	public static long getMillis() {
		return System.currentTimeMillis();
	}
	
	public static Date getNow() {
		return new Timestamp(getMillis());
	}
	
	public static Date getTodayStartTime() {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.HOUR_OF_DAY, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.SECOND, 0);
		return cal.getTime();
	}
	
	public static Date getTodayEndTime() {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.HOUR_OF_DAY, 23);
		cal.set(Calendar.MINUTE, 59);
		cal.set(Calendar.SECOND, 59);
		return cal.getTime();
	}

	public static String addDate(int n) {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, n);
		return StringUtil.date2String(cal.getTime());
	}

	public static Date addDate(Date d, int n) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(d);
		cal.add(Calendar.DAY_OF_MONTH, n);
		return cal.getTime();
	}
	
	public static long getDiffDays(Date from, Date to) {
		return (to.getTime() - from.getTime()) / (24 * 60 * 60 * 1000);
	}

	public static int getYearNum() {
		return Calendar.getInstance().get(Calendar.YEAR);
	}

	public static String getYear() {
		return "" + getYearNum();
	}

	public static int getMonthNum() {
		return Calendar.getInstance().get(Calendar.MONTH) + 1;
	}

	public static String getMonth() {
		int m = getMonthNum();
		return m < 10 ? "0" + m : "" + m;
	}

	public static int getDayNum(){
		return Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
	}
	
	public static String getDay(){
		return "" + getDayNum();
	}
	public static void main(String[] args) {
		System.out.println(getYear());
		System.out.println(getMonth());
	}
	
	 /** 
     * 得到UTC时间，类型为字符串，格式为"yyyy-MM-dd HH:mm"<br /> 
     * 如果获取失败，返回null 
     * @return 
     */  
    public static String getUTCTimeStr() {  
    	
    	DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm") ; 
    	
        StringBuffer UTCTimeBuffer = new StringBuffer();  
        // 1、取得本地时间：  
        Calendar cal = Calendar.getInstance() ;  
        // 2、取得时间偏移量：  
        int zoneOffset = cal.get(java.util.Calendar.ZONE_OFFSET);  
        // 3、取得夏令时差：  
        int dstOffset = cal.get(java.util.Calendar.DST_OFFSET);  
        // 4、从本地时间里扣除这些差量，即可以取得UTC时间：  
        cal.add(java.util.Calendar.MILLISECOND, -(zoneOffset + dstOffset));  
        int year = cal.get(Calendar.YEAR);  
        int month = cal.get(Calendar.MONTH)+1;  
        int day = cal.get(Calendar.DAY_OF_MONTH);  
        int hour = cal.get(Calendar.HOUR_OF_DAY);  
        int minute = cal.get(Calendar.MINUTE);   
        UTCTimeBuffer.append(year).append("-").append(month).append("-").append(day) ;  
        UTCTimeBuffer.append(" ").append(hour).append(":").append(minute) ;  
        try{  
            format.parse(UTCTimeBuffer.toString()) ;  
            return UTCTimeBuffer.toString() ;  
        }
        catch(ParseException e)  
        {  
            e.printStackTrace();  
        }  
        return "" ;  
    }  
}
