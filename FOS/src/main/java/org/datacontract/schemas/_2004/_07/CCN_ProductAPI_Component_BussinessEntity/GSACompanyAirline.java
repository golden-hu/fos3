/**
 * GSACompanyAirline.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class GSACompanyAirline  implements java.io.Serializable {
    private java.lang.String AWBPrefix;

    private java.lang.String basePIMA;

    private java.lang.String carrierCode;

    private java.lang.String carrierName;

    private java.lang.String PIMA;

    private java.lang.Boolean eAWB;

    public GSACompanyAirline() {
    }

    public GSACompanyAirline(
           java.lang.String AWBPrefix,
           java.lang.String basePIMA,
           java.lang.String carrierCode,
           java.lang.String carrierName,
           java.lang.String PIMA,
           java.lang.Boolean eAWB) {
           this.AWBPrefix = AWBPrefix;
           this.basePIMA = basePIMA;
           this.carrierCode = carrierCode;
           this.carrierName = carrierName;
           this.PIMA = PIMA;
           this.eAWB = eAWB;
    }


    /**
     * Gets the AWBPrefix value for this GSACompanyAirline.
     * 
     * @return AWBPrefix
     */
    public java.lang.String getAWBPrefix() {
        return AWBPrefix;
    }


    /**
     * Sets the AWBPrefix value for this GSACompanyAirline.
     * 
     * @param AWBPrefix
     */
    public void setAWBPrefix(java.lang.String AWBPrefix) {
        this.AWBPrefix = AWBPrefix;
    }


    /**
     * Gets the basePIMA value for this GSACompanyAirline.
     * 
     * @return basePIMA
     */
    public java.lang.String getBasePIMA() {
        return basePIMA;
    }


    /**
     * Sets the basePIMA value for this GSACompanyAirline.
     * 
     * @param basePIMA
     */
    public void setBasePIMA(java.lang.String basePIMA) {
        this.basePIMA = basePIMA;
    }


    /**
     * Gets the carrierCode value for this GSACompanyAirline.
     * 
     * @return carrierCode
     */
    public java.lang.String getCarrierCode() {
        return carrierCode;
    }


    /**
     * Sets the carrierCode value for this GSACompanyAirline.
     * 
     * @param carrierCode
     */
    public void setCarrierCode(java.lang.String carrierCode) {
        this.carrierCode = carrierCode;
    }


    /**
     * Gets the carrierName value for this GSACompanyAirline.
     * 
     * @return carrierName
     */
    public java.lang.String getCarrierName() {
        return carrierName;
    }


    /**
     * Sets the carrierName value for this GSACompanyAirline.
     * 
     * @param carrierName
     */
    public void setCarrierName(java.lang.String carrierName) {
        this.carrierName = carrierName;
    }


    /**
     * Gets the PIMA value for this GSACompanyAirline.
     * 
     * @return PIMA
     */
    public java.lang.String getPIMA() {
        return PIMA;
    }


    /**
     * Sets the PIMA value for this GSACompanyAirline.
     * 
     * @param PIMA
     */
    public void setPIMA(java.lang.String PIMA) {
        this.PIMA = PIMA;
    }


    /**
     * Gets the eAWB value for this GSACompanyAirline.
     * 
     * @return eAWB
     */
    public java.lang.Boolean getEAWB() {
        return eAWB;
    }


    /**
     * Sets the eAWB value for this GSACompanyAirline.
     * 
     * @param eAWB
     */
    public void setEAWB(java.lang.Boolean eAWB) {
        this.eAWB = eAWB;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof GSACompanyAirline)) return false;
        GSACompanyAirline other = (GSACompanyAirline) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.AWBPrefix==null && other.getAWBPrefix()==null) || 
             (this.AWBPrefix!=null &&
              this.AWBPrefix.equals(other.getAWBPrefix()))) &&
            ((this.basePIMA==null && other.getBasePIMA()==null) || 
             (this.basePIMA!=null &&
              this.basePIMA.equals(other.getBasePIMA()))) &&
            ((this.carrierCode==null && other.getCarrierCode()==null) || 
             (this.carrierCode!=null &&
              this.carrierCode.equals(other.getCarrierCode()))) &&
            ((this.carrierName==null && other.getCarrierName()==null) || 
             (this.carrierName!=null &&
              this.carrierName.equals(other.getCarrierName()))) &&
            ((this.PIMA==null && other.getPIMA()==null) || 
             (this.PIMA!=null &&
              this.PIMA.equals(other.getPIMA()))) &&
            ((this.eAWB==null && other.getEAWB()==null) || 
             (this.eAWB!=null &&
              this.eAWB.equals(other.getEAWB())));
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
        if (getAWBPrefix() != null) {
            _hashCode += getAWBPrefix().hashCode();
        }
        if (getBasePIMA() != null) {
            _hashCode += getBasePIMA().hashCode();
        }
        if (getCarrierCode() != null) {
            _hashCode += getCarrierCode().hashCode();
        }
        if (getCarrierName() != null) {
            _hashCode += getCarrierName().hashCode();
        }
        if (getPIMA() != null) {
            _hashCode += getPIMA().hashCode();
        }
        if (getEAWB() != null) {
            _hashCode += getEAWB().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(GSACompanyAirline.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "GSACompanyAirline"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWBPrefix");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "AWBPrefix"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("basePIMA");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "BasePIMA"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("carrierCode");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CarrierCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("carrierName");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "CarrierName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PIMA");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "PIMA"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("EAWB");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "eAWB"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
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
