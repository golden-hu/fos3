package sg.com.ccn;

import haitai.fw.util.SpringContextHolder;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
@Service
public class ExMeWebService {
	/**
	 * @author
	 * 解析返回值
	 */
	@SuppressWarnings("deprecation")
    public String getBackValue(String sendUrl,String param){
		String temp="",str="";
		 try {
		      URL httpurl = new URL(sendUrl);
		      URLConnection connection = (URLConnection) httpurl.openConnection();
		      connection.setDoOutput(true);
		      OutputStreamWriter out = new OutputStreamWriter(connection.
		          getOutputStream(), "utf-8");
		      out.write(param);
		      out.flush();
		      out.close();
		      DataInputStream in = new DataInputStream(connection.getInputStream());
		      while((temp=in.readLine())!=null){
	            	str+=temp+"\r\n";
	            }
		      in.close();
		    }
		    catch (IOException ex2) {
		      System.out.println(" exe IOException:" + ex2.toString());
		    }
		try {
	        str = new String (str.getBytes("ISO-8859-1"),"utf-8");
        } catch (UnsupportedEncodingException e) {
	        e.printStackTrace();
        }
		return str;
	}
	
	/**
	 * cnn active Suspend
	 * 
	 */
	/*public String Suspend(String compCode){
		String path = "http://localhost:8080/FOS/edi/?";
		String param="action=send&key=Suspend&compCode="+compCode;
		return this.getBackValue(path,param);
	}*/
	
	/**
	 * Activate Company Account && User
	 * key=ActivateCompany 公司帐号
	 * @param accountID
	 * @param keyValuePair
	 * @return
	 */
	public String Activate(String accountID,Map<String,String> keyValuePair){
		String compCode=keyValuePair.get("compCode");
		String userLoginName=accountID;
		boolean accountBoolean=Boolean.valueOf(keyValuePair.get("accountBoolean"));
		if(accountBoolean){
			String path = "http://localhost:8080/FOS/edi/?";
			String param="action=send&key=ActivateCompany&compCode="+compCode+"&userLoginName="+userLoginName;
			return this.getBackValue(path,param);
		}
		return "";
	}
	
	/**
	 * 本地测试接口主方法
	 * @param args
	 */
	public static void main(String[] args){
		ExMeWebService e=new ExMeWebService();
		String accountID="loginNN11";
		Map<String,String> keyValuePair=new HashMap <String,String>();
		keyValuePair.put("compCode","NN11");
		keyValuePair.put("accountBoolean","true");
		e.Activate(accountID, keyValuePair);
	}
}
