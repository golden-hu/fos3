/**
 * OSIDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class OSIDetail  implements java.io.Serializable {
    private java.lang.String otherServiceInformation;

    public OSIDetail() {
    }

    public OSIDetail(
           java.lang.String otherServiceInformation) {
           this.otherServiceInformation = otherServiceInformation;
    }


    /**
     * Gets the otherServiceInformation value for this OSIDetail.
     * 
     * @return otherServiceInformation
     */
    public java.lang.String getOtherServiceInformation() {
        return otherServiceInformation;
    }


    /**
     * Sets the otherServiceInformation value for this OSIDetail.
     * 
     * @param otherServiceInformation
     */
    public void setOtherServiceInformation(java.lang.String otherServiceInformation) {
        this.otherServiceInformation = otherServiceInformation;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof OSIDetail)) return false;
        OSIDetail other = (OSIDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.otherServiceInformation==null && other.getOtherServiceInformation()==null) || 
             (this.otherServiceInformation!=null &&
              this.otherServiceInformation.equals(other.getOtherServiceInformation())));
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
        if (getOtherServiceInformation() != null) {
            _hashCode += getOtherServiceInformation().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(OSIDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OSIDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherServiceInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherServiceInformation"));
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
