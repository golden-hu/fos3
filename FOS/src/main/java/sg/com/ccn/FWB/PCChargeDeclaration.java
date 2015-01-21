/**
 * PCChargeDeclaration.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class PCChargeDeclaration  implements java.io.Serializable {
    private java.lang.String weightValuation;

    private java.lang.String otherCharges;

    public PCChargeDeclaration() {
    }

    public PCChargeDeclaration(
           java.lang.String weightValuation,
           java.lang.String otherCharges) {
           this.weightValuation = weightValuation;
           this.otherCharges = otherCharges;
    }


    /**
     * Gets the weightValuation value for this PCChargeDeclaration.
     * 
     * @return weightValuation
     */
    public java.lang.String getWeightValuation() {
        return weightValuation;
    }


    /**
     * Sets the weightValuation value for this PCChargeDeclaration.
     * 
     * @param weightValuation
     */
    public void setWeightValuation(java.lang.String weightValuation) {
        this.weightValuation = weightValuation;
    }


    /**
     * Gets the otherCharges value for this PCChargeDeclaration.
     * 
     * @return otherCharges
     */
    public java.lang.String getOtherCharges() {
        return otherCharges;
    }


    /**
     * Sets the otherCharges value for this PCChargeDeclaration.
     * 
     * @param otherCharges
     */
    public void setOtherCharges(java.lang.String otherCharges) {
        this.otherCharges = otherCharges;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof PCChargeDeclaration)) return false;
        PCChargeDeclaration other = (PCChargeDeclaration) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.weightValuation==null && other.getWeightValuation()==null) || 
             (this.weightValuation!=null &&
              this.weightValuation.equals(other.getWeightValuation()))) &&
            ((this.otherCharges==null && other.getOtherCharges()==null) || 
             (this.otherCharges!=null &&
              this.otherCharges.equals(other.getOtherCharges())));
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
        if (getWeightValuation() != null) {
            _hashCode += getWeightValuation().hashCode();
        }
        if (getOtherCharges() != null) {
            _hashCode += getOtherCharges().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(PCChargeDeclaration.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PCChargeDeclaration"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("weightValuation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "WeightValuation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherCharges");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherCharges"));
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
