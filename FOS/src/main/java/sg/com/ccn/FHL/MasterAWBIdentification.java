/**
 * MasterAWBIdentification.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class MasterAWBIdentification  implements java.io.Serializable {
    private java.lang.String airlinePrefix;

    private java.lang.String AWBSerialNumber;

    public MasterAWBIdentification() {
    }

    public MasterAWBIdentification(
           java.lang.String airlinePrefix,
           java.lang.String AWBSerialNumber) {
           this.airlinePrefix = airlinePrefix;
           this.AWBSerialNumber = AWBSerialNumber;
    }


    /**
     * Gets the airlinePrefix value for this MasterAWBIdentification.
     * 
     * @return airlinePrefix
     */
    public java.lang.String getAirlinePrefix() {
        return airlinePrefix;
    }


    /**
     * Sets the airlinePrefix value for this MasterAWBIdentification.
     * 
     * @param airlinePrefix
     */
    public void setAirlinePrefix(java.lang.String airlinePrefix) {
        this.airlinePrefix = airlinePrefix;
    }


    /**
     * Gets the AWBSerialNumber value for this MasterAWBIdentification.
     * 
     * @return AWBSerialNumber
     */
    public java.lang.String getAWBSerialNumber() {
        return AWBSerialNumber;
    }


    /**
     * Sets the AWBSerialNumber value for this MasterAWBIdentification.
     * 
     * @param AWBSerialNumber
     */
    public void setAWBSerialNumber(java.lang.String AWBSerialNumber) {
        this.AWBSerialNumber = AWBSerialNumber;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof MasterAWBIdentification)) return false;
        MasterAWBIdentification other = (MasterAWBIdentification) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.airlinePrefix==null && other.getAirlinePrefix()==null) || 
             (this.airlinePrefix!=null &&
              this.airlinePrefix.equals(other.getAirlinePrefix()))) &&
            ((this.AWBSerialNumber==null && other.getAWBSerialNumber()==null) || 
             (this.AWBSerialNumber!=null &&
              this.AWBSerialNumber.equals(other.getAWBSerialNumber())));
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
        if (getAirlinePrefix() != null) {
            _hashCode += getAirlinePrefix().hashCode();
        }
        if (getAWBSerialNumber() != null) {
            _hashCode += getAWBSerialNumber().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(MasterAWBIdentification.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MasterAWBIdentification"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("airlinePrefix");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirlinePrefix"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWBSerialNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWBSerialNumber"));
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
