/**
 * ChargeDeclarations.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class ChargeDeclarations  implements java.io.Serializable {
    private java.lang.String ISOCurrencyCode;

    private sg.com.ccn.FHL.PrepaidCollectChargeDeclarations prepaidCollectChargeDeclarations;

    private sg.com.ccn.FHL.ValueForCarriageDeclaration valueForCarriageDeclaration;

    private sg.com.ccn.FHL.ValueForCustomsDeclaration valueForCustomsDeclaration;

    private sg.com.ccn.FHL.ValueForInsuranceDeclaration valueForInsuranceDeclaration;

    public ChargeDeclarations() {
    }

    public ChargeDeclarations(
           java.lang.String ISOCurrencyCode,
           sg.com.ccn.FHL.PrepaidCollectChargeDeclarations prepaidCollectChargeDeclarations,
           sg.com.ccn.FHL.ValueForCarriageDeclaration valueForCarriageDeclaration,
           sg.com.ccn.FHL.ValueForCustomsDeclaration valueForCustomsDeclaration,
           sg.com.ccn.FHL.ValueForInsuranceDeclaration valueForInsuranceDeclaration) {
           this.ISOCurrencyCode = ISOCurrencyCode;
           this.prepaidCollectChargeDeclarations = prepaidCollectChargeDeclarations;
           this.valueForCarriageDeclaration = valueForCarriageDeclaration;
           this.valueForCustomsDeclaration = valueForCustomsDeclaration;
           this.valueForInsuranceDeclaration = valueForInsuranceDeclaration;
    }


    /**
     * Gets the ISOCurrencyCode value for this ChargeDeclarations.
     * 
     * @return ISOCurrencyCode
     */
    public java.lang.String getISOCurrencyCode() {
        return ISOCurrencyCode;
    }


    /**
     * Sets the ISOCurrencyCode value for this ChargeDeclarations.
     * 
     * @param ISOCurrencyCode
     */
    public void setISOCurrencyCode(java.lang.String ISOCurrencyCode) {
        this.ISOCurrencyCode = ISOCurrencyCode;
    }


    /**
     * Gets the prepaidCollectChargeDeclarations value for this ChargeDeclarations.
     * 
     * @return prepaidCollectChargeDeclarations
     */
    public sg.com.ccn.FHL.PrepaidCollectChargeDeclarations getPrepaidCollectChargeDeclarations() {
        return prepaidCollectChargeDeclarations;
    }


    /**
     * Sets the prepaidCollectChargeDeclarations value for this ChargeDeclarations.
     * 
     * @param prepaidCollectChargeDeclarations
     */
    public void setPrepaidCollectChargeDeclarations(sg.com.ccn.FHL.PrepaidCollectChargeDeclarations prepaidCollectChargeDeclarations) {
        this.prepaidCollectChargeDeclarations = prepaidCollectChargeDeclarations;
    }


    /**
     * Gets the valueForCarriageDeclaration value for this ChargeDeclarations.
     * 
     * @return valueForCarriageDeclaration
     */
    public sg.com.ccn.FHL.ValueForCarriageDeclaration getValueForCarriageDeclaration() {
        return valueForCarriageDeclaration;
    }


    /**
     * Sets the valueForCarriageDeclaration value for this ChargeDeclarations.
     * 
     * @param valueForCarriageDeclaration
     */
    public void setValueForCarriageDeclaration(sg.com.ccn.FHL.ValueForCarriageDeclaration valueForCarriageDeclaration) {
        this.valueForCarriageDeclaration = valueForCarriageDeclaration;
    }


    /**
     * Gets the valueForCustomsDeclaration value for this ChargeDeclarations.
     * 
     * @return valueForCustomsDeclaration
     */
    public sg.com.ccn.FHL.ValueForCustomsDeclaration getValueForCustomsDeclaration() {
        return valueForCustomsDeclaration;
    }


    /**
     * Sets the valueForCustomsDeclaration value for this ChargeDeclarations.
     * 
     * @param valueForCustomsDeclaration
     */
    public void setValueForCustomsDeclaration(sg.com.ccn.FHL.ValueForCustomsDeclaration valueForCustomsDeclaration) {
        this.valueForCustomsDeclaration = valueForCustomsDeclaration;
    }


    /**
     * Gets the valueForInsuranceDeclaration value for this ChargeDeclarations.
     * 
     * @return valueForInsuranceDeclaration
     */
    public sg.com.ccn.FHL.ValueForInsuranceDeclaration getValueForInsuranceDeclaration() {
        return valueForInsuranceDeclaration;
    }


    /**
     * Sets the valueForInsuranceDeclaration value for this ChargeDeclarations.
     * 
     * @param valueForInsuranceDeclaration
     */
    public void setValueForInsuranceDeclaration(sg.com.ccn.FHL.ValueForInsuranceDeclaration valueForInsuranceDeclaration) {
        this.valueForInsuranceDeclaration = valueForInsuranceDeclaration;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ChargeDeclarations)) return false;
        ChargeDeclarations other = (ChargeDeclarations) obj;
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
            ((this.prepaidCollectChargeDeclarations==null && other.getPrepaidCollectChargeDeclarations()==null) || 
             (this.prepaidCollectChargeDeclarations!=null &&
              this.prepaidCollectChargeDeclarations.equals(other.getPrepaidCollectChargeDeclarations()))) &&
            ((this.valueForCarriageDeclaration==null && other.getValueForCarriageDeclaration()==null) || 
             (this.valueForCarriageDeclaration!=null &&
              this.valueForCarriageDeclaration.equals(other.getValueForCarriageDeclaration()))) &&
            ((this.valueForCustomsDeclaration==null && other.getValueForCustomsDeclaration()==null) || 
             (this.valueForCustomsDeclaration!=null &&
              this.valueForCustomsDeclaration.equals(other.getValueForCustomsDeclaration()))) &&
            ((this.valueForInsuranceDeclaration==null && other.getValueForInsuranceDeclaration()==null) || 
             (this.valueForInsuranceDeclaration!=null &&
              this.valueForInsuranceDeclaration.equals(other.getValueForInsuranceDeclaration())));
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
        if (getPrepaidCollectChargeDeclarations() != null) {
            _hashCode += getPrepaidCollectChargeDeclarations().hashCode();
        }
        if (getValueForCarriageDeclaration() != null) {
            _hashCode += getValueForCarriageDeclaration().hashCode();
        }
        if (getValueForCustomsDeclaration() != null) {
            _hashCode += getValueForCustomsDeclaration().hashCode();
        }
        if (getValueForInsuranceDeclaration() != null) {
            _hashCode += getValueForInsuranceDeclaration().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ChargeDeclarations.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeDeclarations"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ISOCurrencyCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ISOCurrencyCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("prepaidCollectChargeDeclarations");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PrepaidCollectChargeDeclarations"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PrepaidCollectChargeDeclarations"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("valueForCarriageDeclaration");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ValueForCarriageDeclaration"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ValueForCarriageDeclaration"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("valueForCustomsDeclaration");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ValueForCustomsDeclaration"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ValueForCustomsDeclaration"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("valueForInsuranceDeclaration");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ValueForInsuranceDeclaration"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ValueForInsuranceDeclaration"));
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
