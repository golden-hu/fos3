/**
 * PrepaidCollectChargeDeclarations.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class PrepaidCollectChargeDeclarations  implements java.io.Serializable {
    private java.lang.String PCIndWeightValuation;

    private java.lang.String PCIndOtherCharges;

    public PrepaidCollectChargeDeclarations() {
    }

    public PrepaidCollectChargeDeclarations(
           java.lang.String PCIndWeightValuation,
           java.lang.String PCIndOtherCharges) {
           this.PCIndWeightValuation = PCIndWeightValuation;
           this.PCIndOtherCharges = PCIndOtherCharges;
    }


    /**
     * Gets the PCIndWeightValuation value for this PrepaidCollectChargeDeclarations.
     * 
     * @return PCIndWeightValuation
     */
    public java.lang.String getPCIndWeightValuation() {
        return PCIndWeightValuation;
    }


    /**
     * Sets the PCIndWeightValuation value for this PrepaidCollectChargeDeclarations.
     * 
     * @param PCIndWeightValuation
     */
    public void setPCIndWeightValuation(java.lang.String PCIndWeightValuation) {
        this.PCIndWeightValuation = PCIndWeightValuation;
    }


    /**
     * Gets the PCIndOtherCharges value for this PrepaidCollectChargeDeclarations.
     * 
     * @return PCIndOtherCharges
     */
    public java.lang.String getPCIndOtherCharges() {
        return PCIndOtherCharges;
    }


    /**
     * Sets the PCIndOtherCharges value for this PrepaidCollectChargeDeclarations.
     * 
     * @param PCIndOtherCharges
     */
    public void setPCIndOtherCharges(java.lang.String PCIndOtherCharges) {
        this.PCIndOtherCharges = PCIndOtherCharges;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof PrepaidCollectChargeDeclarations)) return false;
        PrepaidCollectChargeDeclarations other = (PrepaidCollectChargeDeclarations) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.PCIndWeightValuation==null && other.getPCIndWeightValuation()==null) || 
             (this.PCIndWeightValuation!=null &&
              this.PCIndWeightValuation.equals(other.getPCIndWeightValuation()))) &&
            ((this.PCIndOtherCharges==null && other.getPCIndOtherCharges()==null) || 
             (this.PCIndOtherCharges!=null &&
              this.PCIndOtherCharges.equals(other.getPCIndOtherCharges())));
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
        if (getPCIndWeightValuation() != null) {
            _hashCode += getPCIndWeightValuation().hashCode();
        }
        if (getPCIndOtherCharges() != null) {
            _hashCode += getPCIndOtherCharges().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(PrepaidCollectChargeDeclarations.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PrepaidCollectChargeDeclarations"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PCIndWeightValuation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PCIndWeightValuation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PCIndOtherCharges");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PCIndOtherCharges"));
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
