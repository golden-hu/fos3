/**
 * AAITSPDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class AAITSPDetail  implements java.io.Serializable {
    private java.lang.String shippingBillNumber;

    public AAITSPDetail() {
    }

    public AAITSPDetail(
           java.lang.String shippingBillNumber) {
           this.shippingBillNumber = shippingBillNumber;
    }


    /**
     * Gets the shippingBillNumber value for this AAITSPDetail.
     * 
     * @return shippingBillNumber
     */
    public java.lang.String getShippingBillNumber() {
        return shippingBillNumber;
    }


    /**
     * Sets the shippingBillNumber value for this AAITSPDetail.
     * 
     * @param shippingBillNumber
     */
    public void setShippingBillNumber(java.lang.String shippingBillNumber) {
        this.shippingBillNumber = shippingBillNumber;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof AAITSPDetail)) return false;
        AAITSPDetail other = (AAITSPDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.shippingBillNumber==null && other.getShippingBillNumber()==null) || 
             (this.shippingBillNumber!=null &&
              this.shippingBillNumber.equals(other.getShippingBillNumber())));
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
        if (getShippingBillNumber() != null) {
            _hashCode += getShippingBillNumber().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(AAITSPDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AAITSPDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shippingBillNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShippingBillNumber"));
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
