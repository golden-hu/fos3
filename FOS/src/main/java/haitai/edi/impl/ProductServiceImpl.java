package haitai.edi.impl;

import java.util.HashMap;



import javax.jws.WebService;

import haitai.edi.ProductService;

@WebService(targetNamespace = "http://impl.edi.haitai/", endpointInterface = "haitai.edi.ProductService", portName = "ProductServiceImplPort", serviceName = "ProductServiceImplService")
public class ProductServiceImpl implements ProductService {

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
