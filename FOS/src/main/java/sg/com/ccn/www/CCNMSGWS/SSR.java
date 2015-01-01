/**
 * SSR.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class SSR  implements java.io.Serializable {
    private java.lang.String specialServiceRequest1;

    private java.lang.String specialServiceRequest2;

    private java.lang.String specialServiceRequest3;

    public SSR() {
    }

    public SSR(
           java.lang.String specialServiceRequest1,
           java.lang.String specialServiceRequest2,
           java.lang.String specialServiceRequest3) {
           this.specialServiceRequest1 = specialServiceRequest1;
           this.specialServiceRequest2 = specialServiceRequest2;
           this.specialServiceRequest3 = specialServiceRequest3;
    }


    /**
     * Gets the specialServiceRequest1 value for this SSR.
     * 
     * @return specialServiceRequest1
     */
    public java.lang.String getSpecialServiceRequest1() {
        return specialServiceRequest1;
    }


    /**
     * Sets the specialServiceRequest1 value for this SSR.
     * 
     * @param specialServiceRequest1
     */
    public void setSpecialServiceRequest1(java.lang.String specialServiceRequest1) {
        this.specialServiceRequest1 = specialServiceRequest1;
    }


    /**
     * Gets the specialServiceRequest2 value for this SSR.
     * 
     * @return specialServiceRequest2
     */
    public java.lang.String getSpecialServiceRequest2() {
        return specialServiceRequest2;
    }


    /**
     * Sets the specialServiceRequest2 value for this SSR.
     * 
     * @param specialServiceRequest2
     */
    public void setSpecialServiceRequest2(java.lang.String specialServiceRequest2) {
        this.specialServiceRequest2 = specialServiceRequest2;
    }


    /**
     * Gets the specialServiceRequest3 value for this SSR.
     * 
     * @return specialServiceRequest3
     */
    public java.lang.String getSpecialServiceRequest3() {
        return specialServiceRequest3;
    }


    /**
     * Sets the specialServiceRequest3 value for this SSR.
     * 
     * @param specialServiceRequest3
     */
    public void setSpecialServiceRequest3(java.lang.String specialServiceRequest3) {
        this.specialServiceRequest3 = specialServiceRequest3;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof SSR)) return false;
        SSR other = (SSR) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.specialServiceRequest1==null && other.getSpecialServiceRequest1()==null) || 
             (this.specialServiceRequest1!=null &&
              this.specialServiceRequest1.equals(other.getSpecialServiceRequest1()))) &&
            ((this.specialServiceRequest2==null && other.getSpecialServiceRequest2()==null) || 
             (this.specialServiceRequest2!=null &&
              this.specialServiceRequest2.equals(other.getSpecialServiceRequest2()))) &&
            ((this.specialServiceRequest3==null && other.getSpecialServiceRequest3()==null) || 
             (this.specialServiceRequest3!=null &&
              this.specialServiceRequest3.equals(other.getSpecialServiceRequest3())));
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
        if (getSpecialServiceRequest1() != null) {
            _hashCode += getSpecialServiceRequest1().hashCode();
        }
        if (getSpecialServiceRequest2() != null) {
            _hashCode += getSpecialServiceRequest2().hashCode();
        }
        if (getSpecialServiceRequest3() != null) {
            _hashCode += getSpecialServiceRequest3().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(SSR.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SSR"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("specialServiceRequest1");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SpecialServiceRequest1"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("specialServiceRequest2");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SpecialServiceRequest2"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("specialServiceRequest3");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SpecialServiceRequest3"));
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
