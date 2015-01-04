/**
 * SpecialHandlingRequirements.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class SpecialHandlingRequirements  implements java.io.Serializable {
    private java.lang.String specialHandlingCode;

    public SpecialHandlingRequirements() {
    }

    public SpecialHandlingRequirements(
           java.lang.String specialHandlingCode) {
           this.specialHandlingCode = specialHandlingCode;
    }


    /**
     * Gets the specialHandlingCode value for this SpecialHandlingRequirements.
     * 
     * @return specialHandlingCode
     */
    public java.lang.String getSpecialHandlingCode() {
        return specialHandlingCode;
    }


    /**
     * Sets the specialHandlingCode value for this SpecialHandlingRequirements.
     * 
     * @param specialHandlingCode
     */
    public void setSpecialHandlingCode(java.lang.String specialHandlingCode) {
        this.specialHandlingCode = specialHandlingCode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof SpecialHandlingRequirements)) return false;
        SpecialHandlingRequirements other = (SpecialHandlingRequirements) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.specialHandlingCode==null && other.getSpecialHandlingCode()==null) || 
             (this.specialHandlingCode!=null &&
              this.specialHandlingCode.equals(other.getSpecialHandlingCode())));
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
        if (getSpecialHandlingCode() != null) {
            _hashCode += getSpecialHandlingCode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(SpecialHandlingRequirements.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SpecialHandlingRequirements"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("specialHandlingCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SpecialHandlingCode"));
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
