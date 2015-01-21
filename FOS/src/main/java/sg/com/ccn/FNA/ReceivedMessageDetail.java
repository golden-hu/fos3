/**
 * ReceivedMessageDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FNA;

public class ReceivedMessageDetail  implements java.io.Serializable {
    private java.lang.String receivedMessageDetail;

    public ReceivedMessageDetail() {
    }

    public ReceivedMessageDetail(
           java.lang.String receivedMessageDetail) {
           this.receivedMessageDetail = receivedMessageDetail;
    }


    /**
     * Gets the receivedMessageDetail value for this ReceivedMessageDetail.
     * 
     * @return receivedMessageDetail
     */
    public java.lang.String getReceivedMessageDetail() {
        return receivedMessageDetail;
    }


    /**
     * Sets the receivedMessageDetail value for this ReceivedMessageDetail.
     * 
     * @param receivedMessageDetail
     */
    public void setReceivedMessageDetail(java.lang.String receivedMessageDetail) {
        this.receivedMessageDetail = receivedMessageDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ReceivedMessageDetail)) return false;
        ReceivedMessageDetail other = (ReceivedMessageDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.receivedMessageDetail==null && other.getReceivedMessageDetail()==null) || 
             (this.receivedMessageDetail!=null &&
              this.receivedMessageDetail.equals(other.getReceivedMessageDetail())));
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
        if (getReceivedMessageDetail() != null) {
            _hashCode += getReceivedMessageDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ReceivedMessageDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ReceivedMessageDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("receivedMessageDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ReceivedMessageDetail"));
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
