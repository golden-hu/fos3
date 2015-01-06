package sg.com.ccn;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLConnection;

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
	 * cnn active account
	 * 
	 */
	public String Activate(String compCode,String account,String password){
		String path = "http://localhost:8080/FOS/edi/?";
		String param="action=send&key=Activate&compCode="+compCode+"&account="+account+
				"&password="+password;
		return this.getBackValue(path,param);
	}
	
	/**
	 * cnn active Suspend
	 * 
	 */
	public String Suspend(String compCode){
		String path = "http://localhost:8080/FOS/edi/?";
		String param="action=send&key=Suspend&compCode="+compCode;
		return this.getBackValue(path,param);
	}
	
	/**
	 * 本地测试接口主方法
	 * @param args
	 */
	public static void main(String[] args){
		ExMeWebService m=new ExMeWebService();
		
	}
}
