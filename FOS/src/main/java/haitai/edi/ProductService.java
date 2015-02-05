package haitai.edi;

import java.util.HashMap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService(name = "ProductService", targetNamespace = "http://edi.haitai/")
public interface ProductService {

	@WebMethod(operationName = "Activate", action = "urn:Activate")
	public void Activate(@WebParam(name = "arg0") String accountId,@WebParam(name = "arg1") HashMap<String,String> keyValuePair);
	@WebMethod(operationName = "Suspend", action = "urn:Suspend")
	public void Suspend(@WebParam(name = "arg0") String accountId,@WebParam(name = "arg1") HashMap<String,String> keyValuePair);
	@WebMethod(operationName = "UnSuspend", action = "urn:UnSuspend")
	public void UnSuspend(@WebParam(name = "arg0") String accountId,@WebParam(name = "arg1") HashMap<String,String> keyValuePair);
	@WebMethod(operationName = "Terminate", action = "urn:Terminate")
	public void Terminate(@WebParam(name = "arg0") String accountId,@WebParam(name = "arg1") HashMap<String,String> keyValuePair);
	@WebMethod(operationName = "ValidateAccess", action = "urn:ValidateAccess")
	public String ValidateAccess(@WebParam(name = "arg0") String accountId,@WebParam(name = "arg1") HashMap<String,String> keyValuePair);	
	
	@WebMethod(operationName = "sayHi", action = "urn:SayHi")
	String sayHi(@WebParam(name = "arg0") String text);
	
}
