/**
 * SubMessageTypeIdentification.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FMA;

public class SubMessageTypeIdentification  implements java.io.Serializable {
    private java.lang.String subMessageTypeIdentification;

    public SubMessageTypeIdentification() {
    }

    public SubMessageTypeIdentification(
           java.lang.String subMessageTypeIdentification) {
           this.subMessageTypeIdentification = subMessageTypeIdentification;
    }


    /**
     * Gets the subMessageTypeIdentification value for this SubMessageTypeIdentification.
     * 
     * @return subMessageTypeIdentification
     */
    public java.lang.String getSubMessageTypeIdentification() {
        return subMessageTypeIdentification;
    }


    /**
     * Sets the subMessageTypeIdentification value for this SubMessageTypeIdentification.
     * 
     * @param subMessageTypeIdentification
     */
    public void setSubMessageTypeIdentification(java.lang.String subMessageTypeIdentification) {
        this.subMessageTypeIdentification = subMessageTypeIdentification;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof SubMessageTypeIdentification)) return false;
        SubMessageTypeIdentification other = (SubMessageTypeIdentification) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.subMessageTypeIdentification==null && other.getSubMessageTypeIdentification()==null) || 
             (this.subMessageTypeIdentification!=null &&
              this.subMessageTypeIdentification.equals(other.getSubMessageTypeIdentification())));
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
        if (getSubMessageTypeIdentification() != null) {
            _hashCode += getSubMessageTypeIdentification().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(SubMessageTypeIdentification.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SubMessageTypeIdentification"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("subMessageTypeIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SubMessageTypeIdentification"));
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
