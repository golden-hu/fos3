/**
 * CustomDeclaration.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class CustomDeclaration  implements java.io.Serializable {
    private java.lang.String declaredValueCustoms;

    private java.lang.String noCustomValue;

    public CustomDeclaration() {
    }

    public CustomDeclaration(
           java.lang.String declaredValueCustoms,
           java.lang.String noCustomValue) {
           this.declaredValueCustoms = declaredValueCustoms;
           this.noCustomValue = noCustomValue;
    }


    /**
     * Gets the declaredValueCustoms value for this CustomDeclaration.
     * 
     * @return declaredValueCustoms
     */
    public java.lang.String getDeclaredValueCustoms() {
        return declaredValueCustoms;
    }


    /**
     * Sets the declaredValueCustoms value for this CustomDeclaration.
     * 
     * @param declaredValueCustoms
     */
    public void setDeclaredValueCustoms(java.lang.String declaredValueCustoms) {
        this.declaredValueCustoms = declaredValueCustoms;
    }


    /**
     * Gets the noCustomValue value for this CustomDeclaration.
     * 
     * @return noCustomValue
     */
    public java.lang.String getNoCustomValue() {
        return noCustomValue;
    }


    /**
     * Sets the noCustomValue value for this CustomDeclaration.
     * 
     * @param noCustomValue
     */
    public void setNoCustomValue(java.lang.String noCustomValue) {
        this.noCustomValue = noCustomValue;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CustomDeclaration)) return false;
        CustomDeclaration other = (CustomDeclaration) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.declaredValueCustoms==null && other.getDeclaredValueCustoms()==null) || 
             (this.declaredValueCustoms!=null &&
              this.declaredValueCustoms.equals(other.getDeclaredValueCustoms()))) &&
            ((this.noCustomValue==null && other.getNoCustomValue()==null) || 
             (this.noCustomValue!=null &&
              this.noCustomValue.equals(other.getNoCustomValue())));
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
        if (getDeclaredValueCustoms() != null) {
            _hashCode += getDeclaredValueCustoms().hashCode();
        }
        if (getNoCustomValue() != null) {
            _hashCode += getNoCustomValue().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CustomDeclaration.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CustomDeclaration"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("declaredValueCustoms");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DeclaredValueCustoms"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("noCustomValue");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NoCustomValue"));
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
