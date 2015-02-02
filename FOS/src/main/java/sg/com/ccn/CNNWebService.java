package sg.com.ccn;

import haitai.fw.util.StringUtil;

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
public class CNNWebService {
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
	 * Activate Company Account && User
	 * key=ActivateCompany 公司帐号
	 * @param accountID
	 * @param keyValuePair
	 * @return
	 */
	public String Activate(String accountID,Map<String,String> keyValuePair){
		String rtStr="";
		String compCode=keyValuePair.get("compCode");
		String userLoginName=accountID;
		boolean accountBoolean=Boolean.valueOf(keyValuePair.get("accountBoolean"));
		String key="";
		if(accountBoolean){
			key="ActivateCompany";
		}else{
			key="ActivateUser";
		}
		if(StringUtil.isNotBlank(compCode)){
			String path = "http://localhost:8080/FOS/edi/?";
			String param="key="+key+"&compCode="+compCode+
					"&userLoginName="+userLoginName;
			rtStr=this.getBackValue(path,param);
		}
		return rtStr;
	}
	
	/**
	 * Suspend Company Account || User
	 * key=Suspend
	 * @param accountID
	 * @param keyValuePair
	 * @return
	 */
	public String Suspend(String accountID,Map<String,String> keyValuePair){
		String rtStr="";
		String compCode=keyValuePair.get("compCode");
		String userLoginName=accountID;
		if(StringUtil.isNotBlank(compCode)){
			String path = "http://localhost:8080/FOS/edi/?";
			String param="key=Suspend&compCode="+compCode+
					"&userLoginName="+userLoginName;
			rtStr=this.getBackValue(path,param);
		}
		return rtStr;
	}
	
	/**
	 * UnSuspend Company Account || User
	 * key=Suspend
	 * @param accountID
	 * @param keyValuePair
	 * @return
	 */
	public String UnSuspend(String accountID,Map<String,String> keyValuePair){
		String rtStr="";
		String compCode=keyValuePair.get("compCode");
		String userLoginName=accountID;
		if(StringUtil.isNotBlank(compCode)){
			String path = "http://localhost:8080/FOS/edi/?";
			String param="key=UnSuspend&compCode="+compCode+
					"&userLoginName="+userLoginName;
			rtStr=this.getBackValue(path,param);
		}
		return rtStr;
	}
	
	/**
	 * Terminate Account || User
	 * key=Suspend
	 * @param accountID
	 * @param keyValuePair
	 * @return
	 */
	public String Terminate(String accountID,Map<String,String> keyValuePair){
		String rtStr="";
		String compCode=keyValuePair.get("compCode");
		String userLoginName=accountID;
		if(StringUtil.isNotBlank(compCode)){
			String path = "http://localhost:8080/FOS/edi/?";
			String param="key=Terminate&compCode="+compCode+
					"&userLoginName="+userLoginName;
			rtStr=this.getBackValue(path,param);
		}
		return rtStr;
	}
	
	
	/**
	 * 本地测试接口主方法
	 * @param args
	 */
	public static void main(String[] args){
		CNNWebService e=new CNNWebService();
		String accountID="cnn01";
		Map<String,String> keyValuePair=new HashMap <String,String>();
		keyValuePair.put("compCode","cnn01");
		keyValuePair.put("accountBoolean","true");
		//e.Activate(accountID, keyValuePair);
		//e.Suspend(accountID, keyValuePair);
		//e.UnSuspend(accountID, keyValuePair);
		//e.Terminate(accountID, keyValuePair);
	}
}
