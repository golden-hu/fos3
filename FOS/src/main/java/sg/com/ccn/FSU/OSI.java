/**
 * OSI.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class OSI  implements java.io.Serializable {
    private sg.com.ccn.FSU.OSIDetail OSIDetail1;

    private sg.com.ccn.FSU.OSIDetail OSIDetail2;

    public OSI() {
    }

    public OSI(
           sg.com.ccn.FSU.OSIDetail OSIDetail1,
           sg.com.ccn.FSU.OSIDetail OSIDetail2) {
           this.OSIDetail1 = OSIDetail1;
           this.OSIDetail2 = OSIDetail2;
    }


    /**
     * Gets the OSIDetail1 value for this OSI.
     * 
     * @return OSIDetail1
     */
    public sg.com.ccn.FSU.OSIDetail getOSIDetail1() {
        return OSIDetail1;
    }


    /**
     * Sets the OSIDetail1 value for this OSI.
     * 
     * @param OSIDetail1
     */
    public void setOSIDetail1(sg.com.ccn.FSU.OSIDetail OSIDetail1) {
        this.OSIDetail1 = OSIDetail1;
    }


    /**
     * Gets the OSIDetail2 value for this OSI.
     * 
     * @return OSIDetail2
     */
    public sg.com.ccn.FSU.OSIDetail getOSIDetail2() {
        return OSIDetail2;
    }


    /**
     * Sets the OSIDetail2 value for this OSI.
     * 
     * @param OSIDetail2
     */
    public void setOSIDetail2(sg.com.ccn.FSU.OSIDetail OSIDetail2) {
        this.OSIDetail2 = OSIDetail2;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof OSI)) return false;
        OSI other = (OSI) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.OSIDetail1==null && other.getOSIDetail1()==null) || 
             (this.OSIDetail1!=null &&
              this.OSIDetail1.equals(other.getOSIDetail1()))) &&
            ((this.OSIDetail2==null && other.getOSIDetail2()==null) || 
             (this.OSIDetail2!=null &&
              this.OSIDetail2.equals(other.getOSIDetail2())));
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
        if (getOSIDetail1() != null) {
            _hashCode += getOSIDetail1().hashCode();
        }
        if (getOSIDetail2() != null) {
            _hashCode += getOSIDetail2().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(OSI.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OSI"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("OSIDetail1");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OSIDetail1"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OSIDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("OSIDetail2");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OSIDetail2"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OSIDetail"));
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
