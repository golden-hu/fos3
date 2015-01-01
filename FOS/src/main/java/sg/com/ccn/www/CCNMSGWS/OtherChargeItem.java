/**
 * OtherChargeItem.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class OtherChargeItem  implements java.io.Serializable {
    private java.lang.String otherChargeCode;

    private java.lang.String entitlementCode;

    private java.lang.String chargeAmount;

    public OtherChargeItem() {
    }

    public OtherChargeItem(
           java.lang.String otherChargeCode,
           java.lang.String entitlementCode,
           java.lang.String chargeAmount) {
           this.otherChargeCode = otherChargeCode;
           this.entitlementCode = entitlementCode;
           this.chargeAmount = chargeAmount;
    }


    /**
     * Gets the otherChargeCode value for this OtherChargeItem.
     * 
     * @return otherChargeCode
     */
    public java.lang.String getOtherChargeCode() {
        return otherChargeCode;
    }


    /**
     * Sets the otherChargeCode value for this OtherChargeItem.
     * 
     * @param otherChargeCode
     */
    public void setOtherChargeCode(java.lang.String otherChargeCode) {
        this.otherChargeCode = otherChargeCode;
    }


    /**
     * Gets the entitlementCode value for this OtherChargeItem.
     * 
     * @return entitlementCode
     */
    public java.lang.String getEntitlementCode() {
        return entitlementCode;
    }


    /**
     * Sets the entitlementCode value for this OtherChargeItem.
     * 
     * @param entitlementCode
     */
    public void setEntitlementCode(java.lang.String entitlementCode) {
        this.entitlementCode = entitlementCode;
    }


    /**
     * Gets the chargeAmount value for this OtherChargeItem.
     * 
     * @return chargeAmount
     */
    public java.lang.String getChargeAmount() {
        return chargeAmount;
    }


    /**
     * Sets the chargeAmount value for this OtherChargeItem.
     * 
     * @param chargeAmount
     */
    public void setChargeAmount(java.lang.String chargeAmount) {
        this.chargeAmount = chargeAmount;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof OtherChargeItem)) return false;
        OtherChargeItem other = (OtherChargeItem) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.otherChargeCode==null && other.getOtherChargeCode()==null) || 
             (this.otherChargeCode!=null &&
              this.otherChargeCode.equals(other.getOtherChargeCode()))) &&
            ((this.entitlementCode==null && other.getEntitlementCode()==null) || 
             (this.entitlementCode!=null &&
              this.entitlementCode.equals(other.getEntitlementCode()))) &&
            ((this.chargeAmount==null && other.getChargeAmount()==null) || 
             (this.chargeAmount!=null &&
              this.chargeAmount.equals(other.getChargeAmount())));
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
        if (getOtherChargeCode() != null) {
            _hashCode += getOtherChargeCode().hashCode();
        }
        if (getEntitlementCode() != null) {
            _hashCode += getEntitlementCode().hashCode();
        }
        if (getChargeAmount() != null) {
            _hashCode += getChargeAmount().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(OtherChargeItem.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherChargeItem"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherChargeCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherChargeCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("entitlementCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "EntitlementCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("chargeAmount");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ChargeAmount"));
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
