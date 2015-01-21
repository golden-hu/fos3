/**
 * ChargeDeclaration.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class ChargeDeclaration  implements java.io.Serializable {
    private java.lang.String ISOCurrencyCode;

    private java.lang.String chargeCode;

    private sg.com.ccn.FWB.PCChargeDeclaration PCChargeDeclaration;

    private sg.com.ccn.FWB.CarriageDeclaration carriageDeclaration;

    private sg.com.ccn.FWB.CustomDeclaration customDeclaration;

    private sg.com.ccn.FWB.InsuranceDeclaration insuranceDeclaration;

    public ChargeDeclaration() {
    }

    public ChargeDeclaration(
           java.lang.String ISOCurrencyCode,
           java.lang.String chargeCode,
           sg.com.ccn.FWB.PCChargeDeclaration PCChargeDeclaration,
           sg.com.ccn.FWB.CarriageDeclaration carriageDeclaration,
           sg.com.ccn.FWB.CustomDeclaration customDeclaration,
           sg.com.ccn.FWB.InsuranceDeclaration insuranceDeclaration) {
           this.ISOCurrencyCode = ISOCurrencyCode;
           this.chargeCode = chargeCode;
           this.PCChargeDeclaration = PCChargeDeclaration;
           this.carriageDeclaration = carriageDeclaration;
           this.customDeclaration = customDeclaration;
           this.insuranceDeclaration = insuranceDeclaration;
    }


    /**
     * Gets the ISOCurrencyCode value for this ChargeDeclaration.
     * 
     * @return ISOCurrencyCode
     */
    public java.lang.String getISOCurrencyCode() {
        return ISOCurrencyCode;
    }


    /**
     * Sets the ISOCurrencyCode value for this ChargeDeclaration.
     * 
     * @param ISOCurrencyCode
     */
    public void setISOCurrencyCode(java.lang.String ISOCurrencyCode) {
        this.ISOCurrencyCode = ISOCurrencyCode;
    }


    /**
     * Gets the chargeCode value for this ChargeDeclaration.
     * 
     * @return chargeCode
     */
    public java.lang.String getChargeCode() {
        return chargeCode;
    }


    /**
     * Sets the chargeCode value for this ChargeDeclaration.
     * 
     * @param chargeCode
     */
    public void setChargeCode(java.lang.String chargeCode) {
        this.chargeCode = chargeCode;
    }


    /**
     * Gets the PCChargeDeclaration value for this ChargeDeclaration.
     * 
     * @return PCChargeDeclaration
     */
    public sg.com.ccn.FWB.PCChargeDeclaration getPCChargeDeclaration() {
        return PCChargeDeclaration;
    }


    /**
     * Sets the PCChargeDeclaration value for this ChargeDeclaration.
     * 
     * @param PCChargeDeclaration
     */
    public void setPCChargeDeclaration(sg.com.ccn.FWB.PCChargeDeclaration PCChargeDeclaration) {
        this.PCChargeDeclaration = PCChargeDeclaration;
    }


    /**
     * Gets the carriageDeclaration value for this ChargeDeclaration.
     * 
     * @return carriageDeclaration
     */
    public sg.com.ccn.FWB.CarriageDeclaration getCarriageDeclaration() {
        return carriageDeclaration;
    }


    /**
     * Sets the carriageDeclaration value for this ChargeDeclaration.
     * 
     * @param carriageDeclaration
     */
    public void setCarriageDeclaration(sg.com.ccn.FWB.CarriageDeclaration carriageDeclaration) {
        this.carriageDeclaration = carriageDeclaration;
    }


    /**
     * Gets the customDeclaration value for this ChargeDeclaration.
     * 
     * @return customDeclaration
     */
    public sg.com.ccn.FWB.CustomDeclaration getCustomDeclaration() {
        return customDeclaration;
    }


    /**
     * Sets the customDeclaration value for this ChargeDeclaration.
     * 
     * @param customDeclaration
     */
    public void setCustomDeclaration(sg.com.ccn.FWB.CustomDeclaration customDeclaration) {
        this.customDeclaration = customDeclaration;
    }


    /**
     * Gets the insuranceDeclaration value for this ChargeDeclaration.
     * 
     * @return insuranceDeclaration
     */
    public sg.com.ccn.FWB.InsuranceDeclaration getInsuranceDeclaration() {
        return insuranceDeclaration;
    }


    /**
     * Sets the insuranceDeclaration value for this ChargeDeclaration.
     * 
     * @param insuranceDeclaration
     */
    public void setInsuranceDeclaration(sg.com.ccn.FWB.InsuranceDeclaration insuranceDeclaration) {
        this.insuranceDeclaration = insuranceDeclaration;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ChargeDeclaration)) return false;
        ChargeDeclaration other = (ChargeDeclaration) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.ISOCurrencyCode==null && other.getISOCurrencyCode()==null) || 
             (this.ISOCurrencyCode!=null &&
              this.ISOCurrencyCode.equals(other.getISOCurrencyCode()))) &&
            ((this.chargeCode==null && other.getChargeCode()==null) || 
             (this.chargeCode!=null &&
              this.chargeCode.equals(other.getChargeCode()))) &&
            ((this.PCChargeDeclaration==null && other.getPCChargeDeclaration()==null) || 
             (this.PCChargeDeclaration!=null &&
              this.PCChargeDeclaration.equals(other.getPCChargeDeclaration()))) &&
            ((this.carriageDeclaration==null && other.getCarriageDeclaration()==null) || 
             (this.carriageDeclaration!=null &&
              this.carriageDeclaration.equals(other.getCarriageDeclaration()))) &&
            ((this.customDeclaration==null && other.getCustomDeclaration()==null) || 
             (this.customDeclaration!=null &&
              this.customDeclaration.equals(other.getCustomDeclaration()))) &&
            ((this.insuranceDeclaration==null && other.getInsuranceDeclaration()==null) || 
             (this.insuranceDeclaration!=null &&
              this.insuranceDeclaration.equals(other.getInsuranceDeclaration())));
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
        if (getISOCurrencyCode() != null) {
            _hashCode += getISOCurrencyCode().hashCode();
        }
        if (getChargeCode() != null) {
            _hashCode += getChargeCode().hashCode();
        }
        if (getPCChargeDeclaration() != null) {
            _hashCode += getPCChargeDeclaration().hashCode();
        }
        if (getCarriageDeclaration() != null) {
            _hashCode += getCarriageDeclaration().hashCode();
        }
        if (getCustomDeclaration() != null) {
            _hashCode += getCustomDeclaration().hashCode();
        }
        if (getInsuranceDeclaration() != null) {
            _hashCode += getInsuranceDeclaration().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ChargeDeclaration.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeDeclaration"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ISOCurrencyCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ISOCurrencyCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("chargeCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ChargeCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PCChargeDeclaration");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PCChargeDeclaration"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PCChargeDeclaration"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("carriageDeclaration");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CarriageDeclaration"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CarriageDeclaration"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("customDeclaration");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CustomDeclaration"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CustomDeclaration"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("insuranceDeclaration");
        elemField.setXmlName(new javax.xml.namespace.QName("", "InsuranceDeclaration"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "InsuranceDeclaration"));
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
