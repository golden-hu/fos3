/**
 * RoleCompanyAirline.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class RoleCompanyAirline  extends sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.ProfileCompanyRole  implements java.io.Serializable {
    private java.lang.String AWBPrefix;

    private java.lang.Integer advBookingLimit;

    private java.lang.String basePIMA;

    private java.lang.String carrierCode;

    private java.lang.Boolean eAWB;

    public RoleCompanyAirline() {
    }

    public RoleCompanyAirline(
           java.lang.String companyCode,
           java.lang.String companyName1,
           java.lang.String companyName2,
           java.lang.String globalCompanyID,
           java.lang.String AWBPrefix,
           java.lang.Integer advBookingLimit,
           java.lang.String basePIMA,
           java.lang.String carrierCode,
           java.lang.Boolean eAWB) {
        super(
            companyCode,
            companyName1,
            companyName2,
            globalCompanyID);
        this.AWBPrefix = AWBPrefix;
        this.advBookingLimit = advBookingLimit;
        this.basePIMA = basePIMA;
        this.carrierCode = carrierCode;
        this.eAWB = eAWB;
    }


    /**
     * Gets the AWBPrefix value for this RoleCompanyAirline.
     * 
     * @return AWBPrefix
     */
    public java.lang.String getAWBPrefix() {
        return AWBPrefix;
    }


    /**
     * Sets the AWBPrefix value for this RoleCompanyAirline.
     * 
     * @param AWBPrefix
     */
    public void setAWBPrefix(java.lang.String AWBPrefix) {
        this.AWBPrefix = AWBPrefix;
    }


    /**
     * Gets the advBookingLimit value for this RoleCompanyAirline.
     * 
     * @return advBookingLimit
     */
    public java.lang.Integer getAdvBookingLimit() {
        return advBookingLimit;
    }


    /**
     * Sets the advBookingLimit value for this RoleCompanyAirline.
     * 
     * @param advBookingLimit
     */
    public void setAdvBookingLimit(java.lang.Integer advBookingLimit) {
        this.advBookingLimit = advBookingLimit;
    }


    /**
     * Gets the basePIMA value for this RoleCompanyAirline.
     * 
     * @return basePIMA
     */
    public java.lang.String getBasePIMA() {
        return basePIMA;
    }


    /**
     * Sets the basePIMA value for this RoleCompanyAirline.
     * 
     * @param basePIMA
     */
    public void setBasePIMA(java.lang.String basePIMA) {
        this.basePIMA = basePIMA;
    }


    /**
     * Gets the carrierCode value for this RoleCompanyAirline.
     * 
     * @return carrierCode
     */
    public java.lang.String getCarrierCode() {
        return carrierCode;
    }


    /**
     * Sets the carrierCode value for this RoleCompanyAirline.
     * 
     * @param carrierCode
     */
    public void setCarrierCode(java.lang.String carrierCode) {
        this.carrierCode = carrierCode;
    }


    /**
     * Gets the eAWB value for this RoleCompanyAirline.
     * 
     * @return eAWB
     */
    public java.lang.Boolean getEAWB() {
        return eAWB;
    }


    /**
     * Sets the eAWB value for this RoleCompanyAirline.
     * 
     * @param eAWB
     */
    public void setEAWB(java.lang.Boolean eAWB) {
        this.eAWB = eAWB;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof RoleCompanyAirline)) return false;
        RoleCompanyAirline other = (RoleCompanyAirline) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.AWBPrefix==null && other.getAWBPrefix()==null) || 
             (this.AWBPrefix!=null &&
              this.AWBPrefix.equals(other.getAWBPrefix()))) &&
            ((this.advBookingLimit==null && other.getAdvBookingLimit()==null) || 
             (this.advBookingLimit!=null &&
              this.advBookingLimit.equals(other.getAdvBookingLimit()))) &&
            ((this.basePIMA==null && other.getBasePIMA()==null) || 
             (this.basePIMA!=null &&
              this.basePIMA.equals(other.getBasePIMA()))) &&
            ((this.carrierCode==null && other.getCarrierCode()==null) || 
             (this.carrierCode!=null &&
              this.carrierCode.equals(other.getCarrierCode()))) &&
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
        int _hashCode = super.hashCode();
        if (getAWBPrefix() != null) {
            _hashCode += getAWBPrefix().hashCode();
        }
        if (getAdvBookingLimit() != null) {
            _hashCode += getAdvBookingLimit().hashCode();
        }
        if (getBasePIMA() != null) {
            _hashCode += getBasePIMA().hashCode();
        }
        if (getCarrierCode() != null) {
            _hashCode += getCarrierCode().hashCode();
        }
        if (getEAWB() != null) {
            _hashCode += getEAWB().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(RoleCompanyAirline.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "RoleCompanyAirline"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWBPrefix");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "AWBPrefix"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("advBookingLimit");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "AdvBookingLimit"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
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
