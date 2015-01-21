/**
 * ULDPositionInformation.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class ULDPositionInformation  implements java.io.Serializable {
    private java.lang.String ULDLoadingIndicator;

    public ULDPositionInformation() {
    }

    public ULDPositionInformation(
           java.lang.String ULDLoadingIndicator) {
           this.ULDLoadingIndicator = ULDLoadingIndicator;
    }


    /**
     * Gets the ULDLoadingIndicator value for this ULDPositionInformation.
     * 
     * @return ULDLoadingIndicator
     */
    public java.lang.String getULDLoadingIndicator() {
        return ULDLoadingIndicator;
    }


    /**
     * Sets the ULDLoadingIndicator value for this ULDPositionInformation.
     * 
     * @param ULDLoadingIndicator
     */
    public void setULDLoadingIndicator(java.lang.String ULDLoadingIndicator) {
        this.ULDLoadingIndicator = ULDLoadingIndicator;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ULDPositionInformation)) return false;
        ULDPositionInformation other = (ULDPositionInformation) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.ULDLoadingIndicator==null && other.getULDLoadingIndicator()==null) || 
             (this.ULDLoadingIndicator!=null &&
              this.ULDLoadingIndicator.equals(other.getULDLoadingIndicator())));
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
        if (getULDLoadingIndicator() != null) {
            _hashCode += getULDLoadingIndicator().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ULDPositionInformation.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ULDPositionInformation"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ULDLoadingIndicator");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ULDLoadingIndicator"));
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
