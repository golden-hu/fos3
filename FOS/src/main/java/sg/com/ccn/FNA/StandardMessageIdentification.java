/**
 * StandardMessageIdentification.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FNA;

public class StandardMessageIdentification  implements java.io.Serializable {
    private java.lang.String standardMessageIdentification;

    private java.lang.String messageTypeVersionNumber;

    public StandardMessageIdentification() {
    }

    public StandardMessageIdentification(
           java.lang.String standardMessageIdentification,
           java.lang.String messageTypeVersionNumber) {
           this.standardMessageIdentification = standardMessageIdentification;
           this.messageTypeVersionNumber = messageTypeVersionNumber;
    }


    /**
     * Gets the standardMessageIdentification value for this StandardMessageIdentification.
     * 
     * @return standardMessageIdentification
     */
    public java.lang.String getStandardMessageIdentification() {
        return standardMessageIdentification;
    }


    /**
     * Sets the standardMessageIdentification value for this StandardMessageIdentification.
     * 
     * @param standardMessageIdentification
     */
    public void setStandardMessageIdentification(java.lang.String standardMessageIdentification) {
        this.standardMessageIdentification = standardMessageIdentification;
    }


    /**
     * Gets the messageTypeVersionNumber value for this StandardMessageIdentification.
     * 
     * @return messageTypeVersionNumber
     */
    public java.lang.String getMessageTypeVersionNumber() {
        return messageTypeVersionNumber;
    }


    /**
     * Sets the messageTypeVersionNumber value for this StandardMessageIdentification.
     * 
     * @param messageTypeVersionNumber
     */
    public void setMessageTypeVersionNumber(java.lang.String messageTypeVersionNumber) {
        this.messageTypeVersionNumber = messageTypeVersionNumber;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof StandardMessageIdentification)) return false;
        StandardMessageIdentification other = (StandardMessageIdentification) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.standardMessageIdentification==null && other.getStandardMessageIdentification()==null) || 
             (this.standardMessageIdentification!=null &&
              this.standardMessageIdentification.equals(other.getStandardMessageIdentification()))) &&
            ((this.messageTypeVersionNumber==null && other.getMessageTypeVersionNumber()==null) || 
             (this.messageTypeVersionNumber!=null &&
              this.messageTypeVersionNumber.equals(other.getMessageTypeVersionNumber())));
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
        if (getStandardMessageIdentification() != null) {
            _hashCode += getStandardMessageIdentification().hashCode();
        }
        if (getMessageTypeVersionNumber() != null) {
            _hashCode += getMessageTypeVersionNumber().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(StandardMessageIdentification.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StandardMessageIdentification"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("standardMessageIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "StandardMessageIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("messageTypeVersionNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MessageTypeVersionNumber"));
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
