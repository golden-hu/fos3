package haitai.test;

import javax.xml.ws.Endpoint;

import sg.com.ccn.service.IProductService;
import sg.com.ccn.service.impl.CPProductService;

public class TestProductService {

    public static void main(String[] args) {  
        System.out.println("Server is starting...");  
        IProductService service = new CPProductService();  
        Endpoint.publish("http://localhost:7080/FOS/IProductService",service);  
        System.out.println("Server is started...");  
    }  
}
