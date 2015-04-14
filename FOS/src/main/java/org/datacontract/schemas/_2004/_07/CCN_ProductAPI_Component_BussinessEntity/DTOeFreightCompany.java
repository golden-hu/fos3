/**
 * DTOeFreightCompany.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class DTOeFreightCompany  implements java.io.Serializable {
    private java.lang.String city;

    private java.lang.String companyCode;

    private java.lang.String companyName1;

    private java.lang.String companyName2;

    private java.lang.String globalCompanyId;

    public DTOeFreightCompany() {
    }

    public DTOeFreightCompany(
           java.lang.String city,
           java.lang.String companyCode,
           java.lang.String companyName1,
           java.lang.String companyName2,
           java.lang.String globalCompanyId) {
           this.city = city;
           this.companyCode = companyCode;
           this.companyName1 = companyName1;
           this.companyName2 = companyName2;
           this.globalCompanyId = globalCompanyId;
    }


    /**
     * Gets the city value for this DTOeFreightCompany.
     * 
     * @return city
     */
    public java.lang.String getCity() {
        return city;
    }


    /**
     * Sets the city value for this DTOeFreightCompany.
     * 
     * @param city
     */
    public void setCity(java.lang.String city) {
        this.city = city;
    }


    /**
     * Gets the companyCode value for this DTOeFreightCompany.
     * 
     * @return companyCode
     */
    public java.lang.String getCompanyCode() {
        return companyCode;
    }


    /**
     * Sets the companyCode value for this DTOeFreightCompany.
     * 
     * @param companyCode
     */
    public void setCompanyCode(java.lang.String companyCode) {
        this.companyCode = companyCode;
    }


    /**
     * Gets the companyName1 value for this DTOeFreightCompany.
     * 
     * @return companyName1
     */
    public java.lang.String getCompanyName1() {
        return companyName1;
    }


    /**
     * Sets the companyName1 value for this DTOeFreightCompany.
     * 
     * @param companyName1
     */
    public void setCompanyName1(java.lang.String companyName1) {
        this.companyName1 = companyName1;
    }


    /**
     * Gets the companyName2 value for this DTOeFreightCompany.
     * 
     * @return companyName2
     */
    public java.lang.String getCompanyName2() {
        return companyName2;
    }


    /**
     * Sets the companyName2 value for this DTOeFreightCompany.
     * 
     * @param companyName2
     */
    public void setCompanyName2(java.lang.String companyName2) {
        this.companyName2 = companyName2;
    }


    /**
     * Gets the globalCompanyId value for this DTOeFreightCompany.
     * 
     * @return globalCompanyId
     */
    public java.lang.String getGlobalCompanyId() {
        return globalCompanyId;
    }


    /**
     * Sets the globalCompanyId value for this DTOeFreightCompany.
     * 
     * @param globalCompanyId
     */
    public void setGlobalCompanyId(java.lang.String globalCompanyId) {
        this.globalCompanyId = globalCompanyId;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DTOeFreightCompany)) return false;
        DTOeFreightCompany other = (DTOeFreightCompany) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.city==null && other.getCity()==null) || 
             (this.city!=null &&
              this.city.equals(other.getCity()))) &&
            ((this.companyCode==null && other.getCompanyCode()==null) || 
             (this.companyCode!=null &&
              this.companyCode.equals(other.getCompanyCode()))) &&
            ((this.companyName1==null && other.getCompanyName1()==null) || 
             (this.companyName1!=null &&
              this.companyName1.equals(other.getCompanyName1()))) &&
            ((this.companyName2==null && other.getCompanyName2()==null) || 
             (this.companyName2!=null &&
              this.companyName2.equals(other.getCompanyName2()))) &&
            ((this.globalCompanyId==null && other.getGlobalCompanyId()==null) || 
             (this.globalCompanyId!=null &&
              this.globalCompanyId.equals(other.getGlobalCompanyId())));
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
        if (getCity() != null) {
            _hashCode += getCity().hashCode();
        }
        if (getCompanyCode() != null) {
            _hashCode += getCompanyCode().hashCode();
        }
        if (getCompanyName1() != null) {
            _hashCode += getCompanyName1().hashCode();
        }
        if (getCompanyName2() != null) {
            _hashCode += getCompanyName2().hashCode();
        }
        if (getGlobalCompanyId() != null) {
            _hashCode += getGlobalCompanyId().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DTOeFreightCompany.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "DTOeFreightCompany"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("city");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "City"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("companyCode");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CompanyCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("companyName1");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CompanyName1"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("companyName2");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CompanyName2"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("globalCompanyId");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "GlobalCompanyId"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
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
