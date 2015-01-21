/**
 * CustomsOrigin.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class CustomsOrigin  implements java.io.Serializable {
    private java.lang.String customsOriginCode;

    public CustomsOrigin() {
    }

    public CustomsOrigin(
           java.lang.String customsOriginCode) {
           this.customsOriginCode = customsOriginCode;
    }


    /**
     * Gets the customsOriginCode value for this CustomsOrigin.
     * 
     * @return customsOriginCode
     */
    public java.lang.String getCustomsOriginCode() {
        return customsOriginCode;
    }


    /**
     * Sets the customsOriginCode value for this CustomsOrigin.
     * 
     * @param customsOriginCode
     */
    public void setCustomsOriginCode(java.lang.String customsOriginCode) {
        this.customsOriginCode = customsOriginCode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CustomsOrigin)) return false;
        CustomsOrigin other = (CustomsOrigin) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.customsOriginCode==null && other.getCustomsOriginCode()==null) || 
             (this.customsOriginCode!=null &&
              this.customsOriginCode.equals(other.getCustomsOriginCode())));
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
        if (getCustomsOriginCode() != null) {
            _hashCode += getCustomsOriginCode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CustomsOrigin.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CustomsOrigin"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("customsOriginCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CustomsOriginCode"));
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
