/**
 * RoleCityForwarder.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class RoleCityForwarder  extends org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.ProfileCityRole  implements java.io.Serializable {
    private java.lang.String CASSCode;

    private java.lang.String IATACode;

    public RoleCityForwarder() {
    }

    public RoleCityForwarder(
           java.lang.String address1,
           java.lang.String address2,
           java.lang.String bizRegistrationNo,
           java.lang.String city,
           java.lang.String companyName1,
           java.lang.String companyName2,
           java.lang.String contactEmail,
           java.lang.String contactFax,
           java.lang.String contactFirstName,
           java.lang.String contactLastName,
           java.lang.String contactMobile,
           java.lang.String contactTel,
           java.lang.String countryCode,
           java.lang.String globalCompanyID,
           java.lang.String place,
           java.lang.String postalCode,
           java.lang.String stateProvince,
           java.lang.String taxRegistrationNo,
           java.lang.String CASSCode,
           java.lang.String IATACode) {
        super(
            address1,
            address2,
            bizRegistrationNo,
            city,
            companyName1,
            companyName2,
            contactEmail,
            contactFax,
            contactFirstName,
            contactLastName,
            contactMobile,
            contactTel,
            countryCode,
            globalCompanyID,
            place,
            postalCode,
            stateProvince,
            taxRegistrationNo);
        this.CASSCode = CASSCode;
        this.IATACode = IATACode;
    }


    /**
     * Gets the CASSCode value for this RoleCityForwarder.
     * 
     * @return CASSCode
     */
    public java.lang.String getCASSCode() {
        return CASSCode;
    }


    /**
     * Sets the CASSCode value for this RoleCityForwarder.
     * 
     * @param CASSCode
     */
    public void setCASSCode(java.lang.String CASSCode) {
        this.CASSCode = CASSCode;
    }


    /**
     * Gets the IATACode value for this RoleCityForwarder.
     * 
     * @return IATACode
     */
    public java.lang.String getIATACode() {
        return IATACode;
    }


    /**
     * Sets the IATACode value for this RoleCityForwarder.
     * 
     * @param IATACode
     */
    public void setIATACode(java.lang.String IATACode) {
        this.IATACode = IATACode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof RoleCityForwarder)) return false;
        RoleCityForwarder other = (RoleCityForwarder) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.CASSCode==null && other.getCASSCode()==null) || 
             (this.CASSCode!=null &&
              this.CASSCode.equals(other.getCASSCode()))) &&
            ((this.IATACode==null && other.getIATACode()==null) || 
             (this.IATACode!=null &&
              this.IATACode.equals(other.getIATACode())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = super.hashCode();
        if (getCASSCode() != null) {
            _hashCode += getCASSCode().hashCode();
        }
        if (getIATACode() != null) {
            _hashCode += getIATACode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(RoleCityForwarder.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "RoleCityForwarder"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CASSCode");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CASSCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("IATACode");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "IATACode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
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
