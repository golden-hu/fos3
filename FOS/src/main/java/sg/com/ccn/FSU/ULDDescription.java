/**
 * ULDDescription.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class ULDDescription  implements java.io.Serializable {
    private sg.com.ccn.FSU.ULDIdentification ULDIdentification;

    public ULDDescription() {
    }

    public ULDDescription(
           sg.com.ccn.FSU.ULDIdentification ULDIdentification) {
           this.ULDIdentification = ULDIdentification;
    }


    /**
     * Gets the ULDIdentification value for this ULDDescription.
     * 
     * @return ULDIdentification
     */
    public sg.com.ccn.FSU.ULDIdentification getULDIdentification() {
        return ULDIdentification;
    }


    /**
     * Sets the ULDIdentification value for this ULDDescription.
     * 
     * @param ULDIdentification
     */
    public void setULDIdentification(sg.com.ccn.FSU.ULDIdentification ULDIdentification) {
        this.ULDIdentification = ULDIdentification;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ULDDescription)) return false;
        ULDDescription other = (ULDDescription) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.ULDIdentification==null && other.getULDIdentification()==null) || 
             (this.ULDIdentification!=null &&
              this.ULDIdentification.equals(other.getULDIdentification())));
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
        if (getULDIdentification() != null) {
            _hashCode += getULDIdentification().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ULDDescription.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ULDDescription"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ULDIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ULDIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ULDIdentification"));
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
