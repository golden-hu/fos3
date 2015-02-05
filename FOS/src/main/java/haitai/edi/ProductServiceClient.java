
/**
 * Please modify this class to meet your needs
 * This class is not complete
 */

package haitai.edi;
import java.util.HashMap;
import java.util.Map;

import javax.xml.namespace.QName;
import javax.xml.ws.Service;
import javax.xml.ws.soap.SOAPBinding;

import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;

/**
 * This class was generated by Apache CXF 2.7.14
 * 2015-01-26T15:49:39.089+08:00
 * Generated source version: 2.7.14
 * 
 */
public class ProductServiceClient {

    public static void main(String[] args) throws Exception {
       /* QName serviceName = new QName("http://impl.edi.haitai/", "ProductServiceImplService");
        QName portName = new QName("http://impl.edi.haitai/", "ProductServiceImplPort");

        Service service = Service.create(serviceName);
        service.addPort(portName, SOAPBinding.SOAP11HTTP_BINDING,
                        "http://localhost:9090/ProductServiceImplPort"); 
        haitai.edi.ProductService client = service.getPort(portName,  haitai.edi.ProductService.class);*/
        
        // Insert code to invoke methods on the client here
    	
    	JaxWsProxyFactoryBean svr = new JaxWsProxyFactoryBean();
        svr.setServiceClass(ProductService.class);
        svr.setAddress("http://localhost:8080/FOS/services/productService");
        ProductService ps = (ProductService) svr.create();
        System.out.println(ps.sayHi("******"));
        
        /*String accountId="cnn02-01";
        HashMap<String,String> keyValuePair=new HashMap <String,String>();
		keyValuePair.put("compCode","cnn02");
		keyValuePair.put("accountFlag","U");
		ps.Activate(accountId, keyValuePair);*/
        
        String accountId="cnn02-02";
        HashMap<String,String> keyValuePair=new HashMap <String,String>();
		keyValuePair.put("compCode","cnn02");
		keyValuePair.put("accountFlag","U");
		ps.ValidateAccess(accountId, keyValuePair);
    }

}