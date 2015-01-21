/**
 * AccountingDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class AccountingDetail  implements java.io.Serializable {
    private java.lang.String accountInformationIdentifier;

    private java.lang.String accountInformation;

    public AccountingDetail() {
    }

    public AccountingDetail(
           java.lang.String accountInformationIdentifier,
           java.lang.String accountInformation) {
           this.accountInformationIdentifier = accountInformationIdentifier;
           this.accountInformation = accountInformation;
    }


    /**
     * Gets the accountInformationIdentifier value for this AccountingDetail.
     * 
     * @return accountInformationIdentifier
     */
    public java.lang.String getAccountInformationIdentifier() {
        return accountInformationIdentifier;
    }


    /**
     * Sets the accountInformationIdentifier value for this AccountingDetail.
     * 
     * @param accountInformationIdentifier
     */
    public void setAccountInformationIdentifier(java.lang.String accountInformationIdentifier) {
        this.accountInformationIdentifier = accountInformationIdentifier;
    }


    /**
     * Gets the accountInformation value for this AccountingDetail.
     * 
     * @return accountInformation
     */
    public java.lang.String getAccountInformation() {
        return accountInformation;
    }


    /**
     * Sets the accountInformation value for this AccountingDetail.
     * 
     * @param accountInformation
     */
    public void setAccountInformation(java.lang.String accountInformation) {
        this.accountInformation = accountInformation;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof AccountingDetail)) return false;
        AccountingDetail other = (AccountingDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.accountInformationIdentifier==null && other.getAccountInformationIdentifier()==null) || 
             (this.accountInformationIdentifier!=null &&
              this.accountInformationIdentifier.equals(other.getAccountInformationIdentifier()))) &&
            ((this.accountInformation==null && other.getAccountInformation()==null) || 
             (this.accountInformation!=null &&
              this.accountInformation.equals(other.getAccountInformation())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getAccountInformationIdentifier() != null) {
            _hashCode += getAccountInformationIdentifier().hashCode();
        }
        if (getAccountInformation() != null) {
            _hashCode += getAccountInformation().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(AccountingDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AccountingDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("accountInformationIdentifier");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AccountInformationIdentifier"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("accountInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AccountInformation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
