/**
 * CCNMSGService.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public interface CCNMSGService extends javax.xml.rpc.Service {
    public java.lang.String getCCNMSGAddress();

    public sg.com.ccn.www.CCNMSGWS.CCNMSGSoap getCCNMSG() throws javax.xml.rpc.ServiceException;

    public sg.com.ccn.www.CCNMSGWS.CCNMSGSoap getCCNMSG(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}
