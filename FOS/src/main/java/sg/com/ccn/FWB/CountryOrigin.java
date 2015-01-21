/**
 * CountryOrigin.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class CountryOrigin  implements java.io.Serializable {
    private java.lang.String ISOCountryCode;

    public CountryOrigin() {
    }

    public CountryOrigin(
           java.lang.String ISOCountryCode) {
           this.ISOCountryCode = ISOCountryCode;
    }


    /**
     * Gets the ISOCountryCode value for this CountryOrigin.
     * 
     * @return ISOCountryCode
     */
    public java.lang.String getISOCountryCode() {
        return ISOCountryCode;
    }


    /**
     * Sets the ISOCountryCode value for this CountryOrigin.
     * 
     * @param ISOCountryCode
     */
    public void setISOCountryCode(java.lang.String ISOCountryCode) {
        this.ISOCountryCode = ISOCountryCode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CountryOrigin)) return false;
        CountryOrigin other = (CountryOrigin) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.ISOCountryCode==null && other.getISOCountryCode()==null) || 
             (this.ISOCountryCode!=null &&
              this.ISOCountryCode.equals(other.getISOCountryCode())));
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
        if (getISOCountryCode() != null) {
            _hashCode += getISOCountryCode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CountryOrigin.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CountryOrigin"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ISOCountryCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ISOCountryCode"));
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
