/**
 * CommissionAmount.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class CommissionAmount  implements java.io.Serializable {
    private java.lang.String CASSSettlementFactor;

    public CommissionAmount() {
    }

    public CommissionAmount(
           java.lang.String CASSSettlementFactor) {
           this.CASSSettlementFactor = CASSSettlementFactor;
    }


    /**
     * Gets the CASSSettlementFactor value for this CommissionAmount.
     * 
     * @return CASSSettlementFactor
     */
    public java.lang.String getCASSSettlementFactor() {
        return CASSSettlementFactor;
    }


    /**
     * Sets the CASSSettlementFactor value for this CommissionAmount.
     * 
     * @param CASSSettlementFactor
     */
    public void setCASSSettlementFactor(java.lang.String CASSSettlementFactor) {
        this.CASSSettlementFactor = CASSSettlementFactor;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CommissionAmount)) return false;
        CommissionAmount other = (CommissionAmount) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.CASSSettlementFactor==null && other.getCASSSettlementFactor()==null) || 
             (this.CASSSettlementFactor!=null &&
              this.CASSSettlementFactor.equals(other.getCASSSettlementFactor())));
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
        if (getCASSSettlementFactor() != null) {
            _hashCode += getCASSSettlementFactor().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CommissionAmount.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CommissionAmount"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CASSSettlementFactor");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CASSSettlementFactor"));
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
