package sg.com.ccn.service;

import java.util.HashMap;
import java.util.Map;

import javax.jws.WebService;

@WebService 
public interface IProductService {

	public void Activate(String accountId,HashMap<String,String> keyValuePair);
	public void Suspend(String accountId,HashMap<String,String> keyValuePair);
	public void UnSuspend(String accountId,HashMap<String,String> keyValuePair);
	public void Terminate(String accountId,HashMap<String,String> keyValuePair);
	public void ValidateAccess(String accountId,HashMap<String,String> keyValuePair);	
	
	String sayHi(String text);
	
}
