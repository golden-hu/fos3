package sg.com.ccn.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.jws.WebService;

import sg.com.ccn.service.IProductService;

@WebService(endpointInterface = "sg.com.ccn.service.IProductService", serviceName = "IProductService",portName="IProductService")  
public class CPProductService implements IProductService {

	@Override
	public void Activate(String accountId, HashMap<String, String> keyValuePair) {
		// TODO Auto-generated method stub

	}

	@Override
	public void Suspend(String accountId, HashMap<String, String> keyValuePair) {
		// TODO Auto-generated method stub

	}

	@Override
	public void UnSuspend(String accountId, HashMap<String, String> keyValuePair) {
		// TODO Auto-generated method stub

	}

	@Override
	public void Terminate(String accountId, HashMap<String, String> keyValuePair) {
		// TODO Auto-generated method stub

	}

	@Override
	public void ValidateAccess(String accountId,HashMap<String, String> keyValuePair) {
		// TODO Auto-generated method stub

	}

	@Override
	public String sayHi(String text) {
        System.out.println("sayHi called");
        return "Hello " + text;
    }
}
