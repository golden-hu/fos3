/**
 * ValueForCustomsDeclaration.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class ValueForCustomsDeclaration  implements java.io.Serializable {
    private java.lang.String declaredValueForCustoms;

    private java.lang.String noCustomsValue;

    public ValueForCustomsDeclaration() {
    }

    public ValueForCustomsDeclaration(
           java.lang.String declaredValueForCustoms,
           java.lang.String noCustomsValue) {
           this.declaredValueForCustoms = declaredValueForCustoms;
           this.noCustomsValue = noCustomsValue;
    }


    /**
     * Gets the declaredValueForCustoms value for this ValueForCustomsDeclaration.
     * 
     * @return declaredValueForCustoms
     */
    public java.lang.String getDeclaredValueForCustoms() {
        return declaredValueForCustoms;
    }


    /**
     * Sets the declaredValueForCustoms value for this ValueForCustomsDeclaration.
     * 
     * @param declaredValueForCustoms
     */
    public void setDeclaredValueForCustoms(java.lang.String declaredValueForCustoms) {
        this.declaredValueForCustoms = declaredValueForCustoms;
    }


    /**
     * Gets the noCustomsValue value for this ValueForCustomsDeclaration.
     * 
     * @return noCustomsValue
     */
    public java.lang.String getNoCustomsValue() {
        return noCustomsValue;
    }


    /**
     * Sets the noCustomsValue value for this ValueForCustomsDeclaration.
     * 
     * @param noCustomsValue
     */
    public void setNoCustomsValue(java.lang.String noCustomsValue) {
        this.noCustomsValue = noCustomsValue;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ValueForCustomsDeclaration)) return false;
        ValueForCustomsDeclaration other = (ValueForCustomsDeclaration) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.declaredValueForCustoms==null && other.getDeclaredValueForCustoms()==null) || 
             (this.declaredValueForCustoms!=null &&
              this.declaredValueForCustoms.equals(other.getDeclaredValueForCustoms()))) &&
            ((this.noCustomsValue==null && other.getNoCustomsValue()==null) || 
             (this.noCustomsValue!=null &&
              this.noCustomsValue.equals(other.getNoCustomsValue())));
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
        if (getDeclaredValueForCustoms() != null) {
            _hashCode += getDeclaredValueForCustoms().hashCode();
        }
        if (getNoCustomsValue() != null) {
            _hashCode += getNoCustomsValue().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ValueForCustomsDeclaration.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ValueForCustomsDeclaration"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("declaredValueForCustoms");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DeclaredValueForCustoms"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("noCustomsValue");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NoCustomsValue"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
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
