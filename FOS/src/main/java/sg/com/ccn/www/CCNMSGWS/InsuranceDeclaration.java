/**
 * InsuranceDeclaration.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class InsuranceDeclaration  implements java.io.Serializable {
    private java.lang.String amountInsurance;

    private java.lang.String noValue;

    public InsuranceDeclaration() {
    }

    public InsuranceDeclaration(
           java.lang.String amountInsurance,
           java.lang.String noValue) {
           this.amountInsurance = amountInsurance;
           this.noValue = noValue;
    }


    /**
     * Gets the amountInsurance value for this InsuranceDeclaration.
     * 
     * @return amountInsurance
     */
    public java.lang.String getAmountInsurance() {
        return amountInsurance;
    }


    /**
     * Sets the amountInsurance value for this InsuranceDeclaration.
     * 
     * @param amountInsurance
     */
    public void setAmountInsurance(java.lang.String amountInsurance) {
        this.amountInsurance = amountInsurance;
    }


    /**
     * Gets the noValue value for this InsuranceDeclaration.
     * 
     * @return noValue
     */
    public java.lang.String getNoValue() {
        return noValue;
    }


    /**
     * Sets the noValue value for this InsuranceDeclaration.
     * 
     * @param noValue
     */
    public void setNoValue(java.lang.String noValue) {
        this.noValue = noValue;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof InsuranceDeclaration)) return false;
        InsuranceDeclaration other = (InsuranceDeclaration) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.amountInsurance==null && other.getAmountInsurance()==null) || 
             (this.amountInsurance!=null &&
              this.amountInsurance.equals(other.getAmountInsurance()))) &&
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
        if (getAmountInsurance() != null) {
            _hashCode += getAmountInsurance().hashCode();
        }
        if (getNoValue() != null) {
            _hashCode += getNoValue().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(InsuranceDeclaration.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "InsuranceDeclaration"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("amountInsurance");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AmountInsurance"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("noValue");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NoValue"));
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
