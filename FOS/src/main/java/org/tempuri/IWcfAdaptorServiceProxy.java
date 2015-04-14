package org.tempuri;

public class IWcfAdaptorServiceProxy implements org.tempuri.IWcfAdaptorService {
  private String _endpoint = null;
  private org.tempuri.IWcfAdaptorService iWcfAdaptorService = null;
  
  public IWcfAdaptorServiceProxy() {
    _initIWcfAdaptorServiceProxy();
  }
  
  public IWcfAdaptorServiceProxy(String endpoint) {
    _endpoint = endpoint;
    _initIWcfAdaptorServiceProxy();
  }
  
  private void _initIWcfAdaptorServiceProxy() {
    try {
      iWcfAdaptorService = (new org.tempuri.WcfAdaptorServiceLocator()).getBasicHttpBinding_IWcfAdaptorService();
      if (iWcfAdaptorService != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)iWcfAdaptorService)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)iWcfAdaptorService)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (iWcfAdaptorService != null)
      ((javax.xml.rpc.Stub)iWcfAdaptorService)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public org.tempuri.IWcfAdaptorService getIWcfAdaptorService() {
    if (iWcfAdaptorService == null)
      _initIWcfAdaptorServiceProxy();
    return iWcfAdaptorService;
  }
  
  public void publishDocument(java.lang.String document, javax.xml.rpc.holders.BooleanWrapperHolder publishDocumentResult, javax.xml.rpc.holders.StringHolder errorMessage) throws java.rmi.RemoteException{
    if (iWcfAdaptorService == null)
      _initIWcfAdaptorServiceProxy();
    iWcfAdaptorService.publishDocument(document, publishDocumentResult, errorMessage);
  }
  
  
}