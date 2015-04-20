package org.tempuri;

public class IProductAPIServiceProxy implements org.tempuri.IProductAPIService {
  private String _endpoint = null;
  private org.tempuri.IProductAPIService iProductAPIService = null;
  
  public IProductAPIServiceProxy() {
    _initIProductAPIServiceProxy();
  }
  
  public IProductAPIServiceProxy(String endpoint) {
    _endpoint = endpoint;
    _initIProductAPIServiceProxy();
  }
  
  private void _initIProductAPIServiceProxy() {
    try {
      iProductAPIService = (new org.tempuri.ProductAPIServiceLocator()).getBasicHttpBinding_IProductAPIService();
      if (iProductAPIService != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)iProductAPIService)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)iProductAPIService)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (iProductAPIService != null)
      ((javax.xml.rpc.Stub)iProductAPIService)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public org.tempuri.IProductAPIService getIProductAPIService() {
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService;
  }
  
  public java.lang.String isSessionActive(java.lang.String sessionID, java.lang.String productID) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.isSessionActive(sessionID, productID);
  }
  
  public java.lang.Long productStartLog(java.lang.String sessionID, java.lang.String accountID, java.lang.String productID) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.productStartLog(sessionID, accountID, productID);
  }
  
  public java.lang.Boolean productEndLog(java.lang.String sessionID, java.lang.String accountID, java.lang.String productID) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.productEndLog(sessionID, accountID, productID);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompanyHierarchy[] getCompanyHierarchy(java.lang.String globalCompanyID) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getCompanyHierarchy(globalCompanyID);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompany getCompany(java.lang.String globalCompanyID) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getCompany(globalCompanyID);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompanyCity getStation(java.lang.String globalCompanyID, java.lang.String city) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getStation(globalCompanyID, city);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount[] getUserAccounts(java.lang.String globalStationID) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getUserAccounts(globalStationID);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount getUserAccount(java.lang.String accountID, java.lang.String productID) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getUserAccount(accountID, productID);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.ProfileCompanyRole[] getCompanyRoles(java.lang.String globalCompanyID) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getCompanyRoles(globalCompanyID);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.ProfileCityRole[] getStationRoles(java.lang.String globalCompanyID, java.lang.String city) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getStationRoles(globalCompanyID, city);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOPima[] getCompanyPima(java.lang.String globalCompanyID, java.lang.String city, java.lang.String productID) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getCompanyPima(globalCompanyID, city, productID);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOPima[] getPima(java.lang.String pima, java.lang.String origin) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getPima(pima, origin);
  }
  
  public java.lang.Boolean saveProductConfigSetting(org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOProductConfigSetting cpProductConfig) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.saveProductConfigSetting(cpProductConfig);
  }
  
  public java.lang.String createUserAccount(org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOAccount userAccount) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.createUserAccount(userAccount);
  }
  
  public java.lang.Boolean saveUserAccount(org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount userAccount) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.saveUserAccount(userAccount);
  }
  
  public java.lang.Boolean deleteUserAccount(java.lang.String accountId, java.lang.String configBy) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.deleteUserAccount(accountId, configBy);
  }
  
  public java.lang.Boolean updatePassword(java.lang.String accountID, java.lang.String newPassword) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.updatePassword(accountID, newPassword);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount[] getUserAccountsByEmail(java.lang.String email) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getUserAccountsByEmail(email);
  }
  
  public java.lang.String updateStation(org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompanyCity companyCity, java.lang.String productID, org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity_Enum.RoleCodes role, java.lang.String configBy) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.updateStation(companyCity, productID, role, configBy);
  }
  
  public java.lang.Boolean updateVerifiedEmailAddress(java.lang.String userEmail) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.updateVerifiedEmailAddress(userEmail);
  }
  
  public java.lang.Boolean isEmailVerified(java.lang.String userEmail) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.isEmailVerified(userEmail);
  }
  
  public java.lang.Boolean isPasswordValid(java.lang.String accountId, java.lang.String password) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.isPasswordValid(accountId, password);
  }
  
  public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOeFreightCompany[] getEfreightCompanyList(org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity_Enum.RoleCodes role, java.lang.String productId) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.getEfreightCompanyList(role, productId);
  }
  
  public java.lang.Boolean deleteUserAccountProduct(java.lang.String accountID, java.lang.String productID, java.lang.String configBy) throws java.rmi.RemoteException{
    if (iProductAPIService == null)
      _initIProductAPIServiceProxy();
    return iProductAPIService.deleteUserAccountProduct(accountID, productID, configBy);
  }
  
  
}