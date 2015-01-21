/**
 * OtherServiceInfo.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class OtherServiceInfo  implements java.io.Serializable {
    private java.lang.String otherServiceInformation1;

    private java.lang.String otherServiceInformation2;

    private java.lang.String otherServiceInformation3;

    public OtherServiceInfo() {
    }

    public OtherServiceInfo(
           java.lang.String otherServiceInformation1,
           java.lang.String otherServiceInformation2,
           java.lang.String otherServiceInformation3) {
           this.otherServiceInformation1 = otherServiceInformation1;
           this.otherServiceInformation2 = otherServiceInformation2;
           this.otherServiceInformation3 = otherServiceInformation3;
    }


    /**
     * Gets the otherServiceInformation1 value for this OtherServiceInfo.
     * 
     * @return otherServiceInformation1
     */
    public java.lang.String getOtherServiceInformation1() {
        return otherServiceInformation1;
    }


    /**
     * Sets the otherServiceInformation1 value for this OtherServiceInfo.
     * 
     * @param otherServiceInformation1
     */
    public void setOtherServiceInformation1(java.lang.String otherServiceInformation1) {
        this.otherServiceInformation1 = otherServiceInformation1;
    }


    /**
     * Gets the otherServiceInformation2 value for this OtherServiceInfo.
     * 
     * @return otherServiceInformation2
     */
    public java.lang.String getOtherServiceInformation2() {
        return otherServiceInformation2;
    }


    /**
     * Sets the otherServiceInformation2 value for this OtherServiceInfo.
     * 
     * @param otherServiceInformation2
     */
    public void setOtherServiceInformation2(java.lang.String otherServiceInformation2) {
        this.otherServiceInformation2 = otherServiceInformation2;
    }


    /**
     * Gets the otherServiceInformation3 value for this OtherServiceInfo.
     * 
     * @return otherServiceInformation3
     */
    public java.lang.String getOtherServiceInformation3() {
        return otherServiceInformation3;
    }


    /**
     * Sets the otherServiceInformation3 value for this OtherServiceInfo.
     * 
     * @param otherServiceInformation3
     */
    public void setOtherServiceInformation3(java.lang.String otherServiceInformation3) {
        this.otherServiceInformation3 = otherServiceInformation3;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof OtherServiceInfo)) return false;
        OtherServiceInfo other = (OtherServiceInfo) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.otherServiceInformation1==null && other.getOtherServiceInformation1()==null) || 
             (this.otherServiceInformation1!=null &&
              this.otherServiceInformation1.equals(other.getOtherServiceInformation1()))) &&
            ((this.otherServiceInformation2==null && other.getOtherServiceInformation2()==null) || 
             (this.otherServiceInformation2!=null &&
              this.otherServiceInformation2.equals(other.getOtherServiceInformation2()))) &&
            ((this.otherServiceInformation3==null && other.getOtherServiceInformation3()==null) || 
             (this.otherServiceInformation3!=null &&
              this.otherServiceInformation3.equals(other.getOtherServiceInformation3())));
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
        if (getOtherServiceInformation1() != null) {
            _hashCode += getOtherServiceInformation1().hashCode();
        }
        if (getOtherServiceInformation2() != null) {
            _hashCode += getOtherServiceInformation2().hashCode();
        }
        if (getOtherServiceInformation3() != null) {
            _hashCode += getOtherServiceInformation3().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(OtherServiceInfo.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherServiceInfo"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherServiceInformation1");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherServiceInformation1"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherServiceInformation2");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherServiceInformation2"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherServiceInformation3");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherServiceInformation3"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
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
