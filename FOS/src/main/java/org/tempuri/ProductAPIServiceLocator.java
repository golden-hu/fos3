/**
 * ProductAPIServiceLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.tempuri;

import haitai.fw.util.EncryptUtil;
import haitai.fw.util.TimeUtil;

import org.apache.axis.message.SOAPHeaderElement;

public class ProductAPIServiceLocator extends org.apache.axis.client.Service implements org.tempuri.ProductAPIService {

    public ProductAPIServiceLocator() {
    }


    public ProductAPIServiceLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public ProductAPIServiceLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for BasicHttpBinding_IProductAPIService
    private java.lang.String BasicHttpBinding_IProductAPIService_address = "http://epouchservicesdev.ccnhub.com/ProductAPIService/ProductAPIService.svc";

    public java.lang.String getBasicHttpBinding_IProductAPIServiceAddress() {
        return BasicHttpBinding_IProductAPIService_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String BasicHttpBinding_IProductAPIServiceWSDDServiceName = "BasicHttpBinding_IProductAPIService";

    public java.lang.String getBasicHttpBinding_IProductAPIServiceWSDDServiceName() {
        return BasicHttpBinding_IProductAPIServiceWSDDServiceName;
    }

    public void setBasicHttpBinding_IProductAPIServiceWSDDServiceName(java.lang.String name) {
        BasicHttpBinding_IProductAPIServiceWSDDServiceName = name;
    }

    public org.tempuri.IProductAPIService getBasicHttpBinding_IProductAPIService() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(BasicHttpBinding_IProductAPIService_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getBasicHttpBinding_IProductAPIService(endpoint);
    }

    public org.tempuri.IProductAPIService getBasicHttpBinding_IProductAPIService(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            org.tempuri.BasicHttpBinding_IProductAPIServiceStub _stub = new org.tempuri.BasicHttpBinding_IProductAPIServiceStub(portAddress, this);
            _stub.setPortName(getBasicHttpBinding_IProductAPIServiceWSDDServiceName());
            
            try{
            	SOAPHeaderElement headerElement = new SOAPHeaderElement("", "RequestSOAPHeader");
            	String ts = TimeUtil.getUTCTimeStr();
            	String key = "amuio5hyKd6jjgTFasdad768asMNHiyasd";
            	String productKey = EncryptUtil.Encrypt3DES("FOS_FMS"+ts, key);
                headerElement.addChildElement("ProductKey").setValue(productKey);            
                _stub.setHeader(headerElement);
            }
            catch (Exception e) {
                e.printStackTrace();
            }
            
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
       
    }

    public void setBasicHttpBinding_IProductAPIServiceEndpointAddress(java.lang.String address) {
        BasicHttpBinding_IProductAPIService_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (org.tempuri.IProductAPIService.class.isAssignableFrom(serviceEndpointInterface)) {
                org.tempuri.BasicHttpBinding_IProductAPIServiceStub _stub = new org.tempuri.BasicHttpBinding_IProductAPIServiceStub(new java.net.URL(BasicHttpBinding_IProductAPIService_address), this);
                _stub.setPortName(getBasicHttpBinding_IProductAPIServiceWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("BasicHttpBinding_IProductAPIService".equals(inputPortName)) {
            return getBasicHttpBinding_IProductAPIService();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://tempuri.org/", "ProductAPIService");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://tempuri.org/", "BasicHttpBinding_IProductAPIService"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("BasicHttpBinding_IProductAPIService".equals(portName)) {
            setBasicHttpBinding_IProductAPIServiceEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}
