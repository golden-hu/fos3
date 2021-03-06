package sg.com.ccn.FNA;

public class CCNMSGSoapProxy implements sg.com.ccn.FNA.CCNMSGSoap {
  private String _endpoint = null;
  private sg.com.ccn.FNA.CCNMSGSoap cCNMSGSoap = null;
  
  public CCNMSGSoapProxy() {
    _initCCNMSGSoapProxy();
  }
  
  public CCNMSGSoapProxy(String endpoint) {
    _endpoint = endpoint;
    _initCCNMSGSoapProxy();
  }
  
  private void _initCCNMSGSoapProxy() {
    try {
      cCNMSGSoap = (new sg.com.ccn.FNA.CCNMSGServiceLocator()).getCCNMSG();
      if (cCNMSGSoap != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)cCNMSGSoap)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)cCNMSGSoap)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (cCNMSGSoap != null)
      ((javax.xml.rpc.Stub)cCNMSGSoap)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public sg.com.ccn.FNA.CCNMSGSoap getCCNMSGSoap() {
    if (cCNMSGSoap == null)
      _initCCNMSGSoapProxy();
    return cCNMSGSoap;
  }
  
  public void airWaybillData(sg.com.ccn.FNA.CCNMSG parameter) throws java.rmi.RemoteException{
    if (cCNMSGSoap == null)
      _initCCNMSGSoapProxy();
    cCNMSGSoap.airWaybillData(parameter);
  }
  
  
}