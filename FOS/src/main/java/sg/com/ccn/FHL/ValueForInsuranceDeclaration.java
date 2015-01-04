/**
 * ValueForInsuranceDeclaration.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class ValueForInsuranceDeclaration  implements java.io.Serializable {
    private java.lang.String declaredValueForInsurance;

    private java.lang.String noValue;

    public ValueForInsuranceDeclaration() {
    }

    public ValueForInsuranceDeclaration(
           java.lang.String declaredValueForInsurance,
           java.lang.String noValue) {
           this.declaredValueForInsurance = declaredValueForInsurance;
           this.noValue = noValue;
    }


    /**
     * Gets the declaredValueForInsurance value for this ValueForInsuranceDeclaration.
     * 
     * @return declaredValueForInsurance
     */
    public java.lang.String getDeclaredValueForInsurance() {
        return declaredValueForInsurance;
    }


    /**
     * Sets the declaredValueForInsurance value for this ValueForInsuranceDeclaration.
     * 
     * @param declaredValueForInsurance
     */
    public void setDeclaredValueForInsurance(java.lang.String declaredValueForInsurance) {
        this.declaredValueForInsurance = declaredValueForInsurance;
    }


    /**
     * Gets the noValue value for this ValueForInsuranceDeclaration.
     * 
     * @return noValue
     */
    public java.lang.String getNoValue() {
        return noValue;
    }


    /**
     * Sets the noValue value for this ValueForInsuranceDeclaration.
     * 
     * @param noValue
     */
    public void setNoValue(java.lang.String noValue) {
        this.noValue = noValue;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ValueForInsuranceDeclaration)) return false;
        ValueForInsuranceDeclaration other = (ValueForInsuranceDeclaration) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.declaredValueForInsurance==null && other.getDeclaredValueForInsurance()==null) || 
             (this.declaredValueForInsurance!=null &&
              this.declaredValueForInsurance.equals(other.getDeclaredValueForInsurance()))) &&
            ((this.noValue==null && other.getNoValue()==null) || 
             (this.noValue!=null &&
              this.noValue.equals(other.getNoValue())));
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
        if (getDeclaredValueForInsurance() != null) {
            _hashCode += getDeclaredValueForInsurance().hashCode();
        }
        if (getNoValue() != null) {
            _hashCode += getNoValue().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ValueForInsuranceDeclaration.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ValueForInsuranceDeclaration"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("declaredValueForInsurance");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DeclaredValueForInsurance"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("noValue");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NoValue"));
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
