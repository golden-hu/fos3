package haitai.fw.util;

import haitai.fw.log.FosLogger;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Type;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.util.StringUtils;

public class StringUtil {
	private static final FosLogger logger = new FosLogger(StringUtil.class);
	private static DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	private static DateFormat timeFormat = new SimpleDateFormat(
			"yyyy-MM-dd HH:mm:ss");

	public static Date string2Date(String str) {
		Date aDate = null;
		try {
			if (StringUtil.contains(str, ConstUtil.STRING_COLON)) {
				aDate = timeFormat.parse(str);
			} else {
				aDate = dateFormat.parse(str);
			}
		} catch (ParseException e) {
			logger.error("xtream date converte failed: " + str);
		}
		return aDate;
	}

	public static String date2String(Date date) {
		return dateFormat.format(date);
	}

	public static String time2String(Date date) {
		return timeFormat.format(date);
	}

	public static boolean isBlank(String s) {
		if (s == null) {
			return true;
		}
		if (s.trim().length() == 0) {
			return true;
		}
		return false;
	}

	public static boolean isNotBlank(String s) {
		return !isBlank(s);
	}

	 public static boolean isDate(String value){          
        SimpleDateFormat sdf = null;  
        ParsePosition pos = new ParsePosition(0);
          
        if(value == null){  
            return false;  
        }  
        try {  
            sdf = new SimpleDateFormat("yyyy-MM-dd");  
            sdf.setLenient(false);  
            Date date = sdf.parse(value,pos);  
            if(date == null){  
                return false;  
            }else{  
                if(pos.getIndex() > sdf.format(date).length()){  
                    return false;  
                }  
                return true;  
            }  
        } catch (Exception e) {  
            e.printStackTrace();  
            return false;  
        }  
    }  
	 
	public static boolean isNumeric(String str){
	   String s = str.substring(0,1);
	   if(s.equals("-"))
		   s = str.substring(1);
	   if(s.indexOf("-")>0){
		   return false;
	   }
	   Pattern pattern = Pattern.compile("[0-9]*");
	   Matcher isNum = pattern.matcher(s);
	   if( !isNum.matches() ){
	       return false;
	   }
	   return true;
	}
	
	public static String capitalize(String s) {
		return StringUtils.capitalize(s);
	}

	public static String uncapitalize(String s) {
		return StringUtils.uncapitalize(s);
	}

	public static String utf82ascii(String s) {
		try {
			return new String(s.getBytes("UTF-8"), "ISO8859-1");
		} catch (UnsupportedEncodingException e) {
		}
		return null;
	}

	public static String ascii2utf8(String s) {
		try {
			return new String(s.getBytes("ISO8859-1"), "UTF-8");
		} catch (UnsupportedEncodingException e) {
		}
		return null;
	}

	public static String formatTwoNumber(int n) {
		if (n < 10)
			return "0" + n;
		return "" + n;
	}

	public static Object parseValue(Type fieldType, String value) {
		Object objValue = value;
		if (!fieldType.equals(String.class)) {
			if (fieldType.equals(Integer.class)) {
				objValue = Integer.parseInt(value);
			} else if (fieldType.equals(Long.class)) {
				objValue = Long.parseLong(value);
			} else if (fieldType.equals(Short.class)) {
				objValue = Short.parseShort(value);
			} else if (fieldType.equals(Float.class)) {
				objValue = Float.parseFloat(value);
			} else if (fieldType.equals(Double.class)) {
				objValue = Double.parseDouble(value);
			} else if (fieldType.equals(Date.class)) {
				objValue = string2Date(value);
			}
		}
		return objValue;
	}

	public static boolean contains(String s, String needle) {
		if (isNotBlank(s) && s.indexOf(needle) > -1) {
			return true;
		}
		return false;
	}

	public static boolean isEqual(String s, String t) {
		return s == null ? t == null : s.equals(t);
	}

	public static String unescape(String s) {
		if (isBlank(s))
			return "";

		s = s.replaceAll("&amp;", "&");
		s = s.replaceAll("&lt;", "<");
		s = s.replaceAll("&gt", ">;");
		return s;
	}
}
