/**
 * FirstDestination.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class FirstDestination  implements java.io.Serializable {
    private java.lang.String airportCityCode;

    private java.lang.String carrierCode;

    public FirstDestination() {
    }

    public FirstDestination(
           java.lang.String airportCityCode,
           java.lang.String carrierCode) {
           this.airportCityCode = airportCityCode;
           this.carrierCode = carrierCode;
    }


    /**
     * Gets the airportCityCode value for this FirstDestination.
     * 
     * @return airportCityCode
     */
    public java.lang.String getAirportCityCode() {
        return airportCityCode;
    }


    /**
     * Sets the airportCityCode value for this FirstDestination.
     * 
     * @param airportCityCode
     */
    public void setAirportCityCode(java.lang.String airportCityCode) {
        this.airportCityCode = airportCityCode;
    }


    /**
     * Gets the carrierCode value for this FirstDestination.
     * 
     * @return carrierCode
     */
    public java.lang.String getCarrierCode() {
        return carrierCode;
    }


    /**
     * Sets the carrierCode value for this FirstDestination.
     * 
     * @param carrierCode
     */
    public void setCarrierCode(java.lang.String carrierCode) {
        this.carrierCode = carrierCode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FirstDestination)) return false;
        FirstDestination other = (FirstDestination) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.airportCityCode==null && other.getAirportCityCode()==null) || 
             (this.airportCityCode!=null &&
              this.airportCityCode.equals(other.getAirportCityCode()))) &&
            ((this.carrierCode==null && other.getCarrierCode()==null) || 
             (this.carrierCode!=null &&
              this.carrierCode.equals(other.getCarrierCode())));
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
        if (getAirportCityCode() != null) {
            _hashCode += getAirportCityCode().hashCode();
        }
        if (getCarrierCode() != null) {
            _hashCode += getCarrierCode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FirstDestination.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FirstDestination"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("airportCityCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirportCityCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("carrierCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CarrierCode"));
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
