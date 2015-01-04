/**
 * ValueForCarriageDeclaration.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class ValueForCarriageDeclaration  implements java.io.Serializable {
    private java.lang.String declaredValueForCarriage;

    private java.lang.String noValueDeclared;

    public ValueForCarriageDeclaration() {
    }

    public ValueForCarriageDeclaration(
           java.lang.String declaredValueForCarriage,
           java.lang.String noValueDeclared) {
           this.declaredValueForCarriage = declaredValueForCarriage;
           this.noValueDeclared = noValueDeclared;
    }


    /**
     * Gets the declaredValueForCarriage value for this ValueForCarriageDeclaration.
     * 
     * @return declaredValueForCarriage
     */
    public java.lang.String getDeclaredValueForCarriage() {
        return declaredValueForCarriage;
    }


    /**
     * Sets the declaredValueForCarriage value for this ValueForCarriageDeclaration.
     * 
     * @param declaredValueForCarriage
     */
    public void setDeclaredValueForCarriage(java.lang.String declaredValueForCarriage) {
        this.declaredValueForCarriage = declaredValueForCarriage;
    }


    /**
     * Gets the noValueDeclared value for this ValueForCarriageDeclaration.
     * 
     * @return noValueDeclared
     */
    public java.lang.String getNoValueDeclared() {
        return noValueDeclared;
    }


    /**
     * Sets the noValueDeclared value for this ValueForCarriageDeclaration.
     * 
     * @param noValueDeclared
     */
    public void setNoValueDeclared(java.lang.String noValueDeclared) {
        this.noValueDeclared = noValueDeclared;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ValueForCarriageDeclaration)) return false;
        ValueForCarriageDeclaration other = (ValueForCarriageDeclaration) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.declaredValueForCarriage==null && other.getDeclaredValueForCarriage()==null) || 
             (this.declaredValueForCarriage!=null &&
              this.declaredValueForCarriage.equals(other.getDeclaredValueForCarriage()))) &&
            ((this.noValueDeclared==null && other.getNoValueDeclared()==null) || 
             (this.noValueDeclared!=null &&
              this.noValueDeclared.equals(other.getNoValueDeclared())));
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
        if (getDeclaredValueForCarriage() != null) {
            _hashCode += getDeclaredValueForCarriage().hashCode();
        }
        if (getNoValueDeclared() != null) {
            _hashCode += getNoValueDeclared().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ValueForCarriageDeclaration.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ValueForCarriageDeclaration"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("declaredValueForCarriage");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DeclaredValueForCarriage"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("noValueDeclared");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NoValueDeclared"));
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
