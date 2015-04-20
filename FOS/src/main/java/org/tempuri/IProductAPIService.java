/**
 * IProductAPIService.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.tempuri;

public interface IProductAPIService extends java.rmi.Remote {
    public java.lang.String isSessionActive(java.lang.String sessionID, java.lang.String productID) throws java.rmi.RemoteException;
    public java.lang.Long productStartLog(java.lang.String sessionID, java.lang.String accountID, java.lang.String productID) throws java.rmi.RemoteException;
    public java.lang.Boolean productEndLog(java.lang.String sessionID, java.lang.String accountID, java.lang.String productID) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompanyHierarchy[] getCompanyHierarchy(java.lang.String globalCompanyID) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompany getCompany(java.lang.String globalCompanyID) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompanyCity getStation(java.lang.String globalCompanyID, java.lang.String city) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount[] getUserAccounts(java.lang.String globalStationID) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount getUserAccount(java.lang.String accountID, java.lang.String productID) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.ProfileCompanyRole[] getCompanyRoles(java.lang.String globalCompanyID) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.ProfileCityRole[] getStationRoles(java.lang.String globalCompanyID, java.lang.String city) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOPima[] getCompanyPima(java.lang.String globalCompanyID, java.lang.String city, java.lang.String productID) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOPima[] getPima(java.lang.String pima, java.lang.String origin) throws java.rmi.RemoteException;
    public java.lang.Boolean saveProductConfigSetting(org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOProductConfigSetting cpProductConfig) throws java.rmi.RemoteException;
    public java.lang.String createUserAccount(org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOAccount userAccount) throws java.rmi.RemoteException;
    public java.lang.Boolean saveUserAccount(org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount userAccount) throws java.rmi.RemoteException;
    public java.lang.Boolean deleteUserAccount(java.lang.String accountId, java.lang.String configBy) throws java.rmi.RemoteException;
    public java.lang.Boolean updatePassword(java.lang.String accountID, java.lang.String newPassword) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount[] getUserAccountsByEmail(java.lang.String email) throws java.rmi.RemoteException;
    public java.lang.String updateStation(org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompanyCity companyCity, java.lang.String productID, org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity_Enum.RoleCodes role, java.lang.String configBy) throws java.rmi.RemoteException;
    public java.lang.Boolean updateVerifiedEmailAddress(java.lang.String userEmail) throws java.rmi.RemoteException;
    public java.lang.Boolean isEmailVerified(java.lang.String userEmail) throws java.rmi.RemoteException;
    public java.lang.Boolean isPasswordValid(java.lang.String accountId, java.lang.String password) throws java.rmi.RemoteException;
    public org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOeFreightCompany[] getEfreightCompanyList(org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity_Enum.RoleCodes role, java.lang.String productId) throws java.rmi.RemoteException;
    public java.lang.Boolean deleteUserAccountProduct(java.lang.String accountID, java.lang.String productID, java.lang.String configBy) throws java.rmi.RemoteException;
}
