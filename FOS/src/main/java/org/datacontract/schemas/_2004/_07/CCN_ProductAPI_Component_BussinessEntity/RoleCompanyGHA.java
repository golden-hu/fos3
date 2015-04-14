/**
 * RoleCompanyGHA.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class RoleCompanyGHA  extends org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.ProfileCompanyRole  implements java.io.Serializable {
    private java.lang.String basePIMA;

    public RoleCompanyGHA() {
    }

    public RoleCompanyGHA(
           java.lang.String companyCode,
           java.lang.String companyName1,
           java.lang.String companyName2,
           java.lang.String globalCompanyID,
           java.lang.String basePIMA) {
        super(
            companyCode,
            companyName1,
            companyName2,
            globalCompanyID);
        this.basePIMA = basePIMA;
    }


    /**
     * Gets the basePIMA value for this RoleCompanyGHA.
     * 
     * @return basePIMA
     */
    public java.lang.String getBasePIMA() {
        return basePIMA;
    }


    /**
     * Sets the basePIMA value for this RoleCompanyGHA.
     * 
     * @param basePIMA
     */
    public void setBasePIMA(java.lang.String basePIMA) {
        this.basePIMA = basePIMA;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof RoleCompanyGHA)) return false;
        RoleCompanyGHA other = (RoleCompanyGHA) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.basePIMA==null && other.getBasePIMA()==null) || 
             (this.basePIMA!=null &&
              this.basePIMA.equals(other.getBasePIMA())));
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
        if (getBasePIMA() != null) {
            _hashCode += getBasePIMA().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(RoleCompanyGHA.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "RoleCompanyGHA"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("basePIMA");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "BasePIMA"));
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
