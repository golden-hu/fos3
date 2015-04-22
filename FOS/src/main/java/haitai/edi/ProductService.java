package haitai.edi;

import haitai.edi.jaxws.KeyValueOfstringstring;

import java.util.ArrayList;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

@WebService(targetNamespace = "http://tempuri.org/")
public interface ProductService {

	@WebMethod(operationName = "Activate", action = "urn:Activate")
	public String Activate(@WebParam(name = "accountID",targetNamespace ="http://tempuri.org/") String accountID,
			@WebParam(name = "keyValuePair",targetNamespace ="http://tempuri.org/") ArrayList<KeyValueOfstringstring> keyValuePair);
	
	@WebMethod(operationName = "Suspend", action = "urn:Suspend")
	public String Suspend(@WebParam(name = "accountID",targetNamespace ="http://tempuri.org/") String accountID,
			@WebParam(name = "keyValuePair",targetNamespace ="http://tempuri.org/") ArrayList<KeyValueOfstringstring> keyValuePair);
	
	@WebMethod(operationName = "UnSuspend", action = "urn:UnSuspend")
	public String UnSuspend(@WebParam(name = "accountID",targetNamespace ="http://tempuri.org/") String accountID,
			@WebParam(name = "keyValuePair",targetNamespace ="http://tempuri.org/") ArrayList<KeyValueOfstringstring> keyValuePair);
	
	@WebMethod(operationName = "Terminate", action = "urn:Terminate")
	public String Terminate(@WebParam(name = "accountID",targetNamespace ="http://tempuri.org/") String accountID,
			@WebParam(name = "keyValuePair",targetNamespace ="http://tempuri.org/") ArrayList<KeyValueOfstringstring> keyValuePair);
	
	@WebMethod(operationName = "ValidateAccess", action = "urn:ValidateAccess")
	String ValidateAccess(@WebParam(name = "accountID",targetNamespace ="http://tempuri.org/") String accountID,
			@WebParam(name = "keyValuePair",targetNamespace ="http://tempuri.org/") ArrayList<KeyValueOfstringstring> keyValuePair);
	
	
}
