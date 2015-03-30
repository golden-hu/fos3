package haitai.edi;

import java.util.HashMap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService
public interface ProductService {

	@WebMethod(operationName = "Activate", action = "urn:Activate")
	public String Activate(@WebParam(name = "arg0") String accountID,@WebParam(name = "arg1") HashMap<String,String> keyValuePair);
	
	@WebMethod(operationName = "Suspend", action = "urn:Suspend")
	public String Suspend(@WebParam(name = "arg0") String accountID,@WebParam(name = "arg1") HashMap<String,String> keyValuePair);
	
	@WebMethod(operationName = "UnSuspend", action = "urn:UnSuspend")
	public String UnSuspend(@WebParam(name = "arg0") String accountID,@WebParam(name = "arg1") HashMap<String,String> keyValuePair);
	
	@WebMethod(operationName = "Terminate", action = "urn:Terminate")
	public String Terminate(@WebParam(name = "arg0") String accountID,@WebParam(name = "arg1") HashMap<String,String> keyValuePair);
	
	@WebMethod(operationName = "ValidateAccess", action = "urn:ValidateAccess")
	String ValidateAccess(@WebParam(name = "arg0") String accountID,@WebParam(name = "arg1") HashMap<String,String> keyValuePair);
	
	
}
