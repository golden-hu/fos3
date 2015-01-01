/**
 * FlightIdentification.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class FlightIdentification  implements java.io.Serializable {
    private java.lang.String carrierCode;

    private java.lang.String flightNumber;

    private java.lang.String dayOfScheduledDeparture;

    public FlightIdentification() {
    }

    public FlightIdentification(
           java.lang.String carrierCode,
           java.lang.String flightNumber,
           java.lang.String dayOfScheduledDeparture) {
           this.carrierCode = carrierCode;
           this.flightNumber = flightNumber;
           this.dayOfScheduledDeparture = dayOfScheduledDeparture;
    }


    /**
     * Gets the carrierCode value for this FlightIdentification.
     * 
     * @return carrierCode
     */
    public java.lang.String getCarrierCode() {
        return carrierCode;
    }


    /**
     * Sets the carrierCode value for this FlightIdentification.
     * 
     * @param carrierCode
     */
    public void setCarrierCode(java.lang.String carrierCode) {
        this.carrierCode = carrierCode;
    }


    /**
     * Gets the flightNumber value for this FlightIdentification.
     * 
     * @return flightNumber
     */
    public java.lang.String getFlightNumber() {
        return flightNumber;
    }


    /**
     * Sets the flightNumber value for this FlightIdentification.
     * 
     * @param flightNumber
     */
    public void setFlightNumber(java.lang.String flightNumber) {
        this.flightNumber = flightNumber;
    }


    /**
     * Gets the dayOfScheduledDeparture value for this FlightIdentification.
     * 
     * @return dayOfScheduledDeparture
     */
    public java.lang.String getDayOfScheduledDeparture() {
        return dayOfScheduledDeparture;
    }


    /**
     * Sets the dayOfScheduledDeparture value for this FlightIdentification.
     * 
     * @param dayOfScheduledDeparture
     */
    public void setDayOfScheduledDeparture(java.lang.String dayOfScheduledDeparture) {
        this.dayOfScheduledDeparture = dayOfScheduledDeparture;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FlightIdentification)) return false;
        FlightIdentification other = (FlightIdentification) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.carrierCode==null && other.getCarrierCode()==null) || 
             (this.carrierCode!=null &&
              this.carrierCode.equals(other.getCarrierCode()))) &&
            ((this.flightNumber==null && other.getFlightNumber()==null) || 
             (this.flightNumber!=null &&
              this.flightNumber.equals(other.getFlightNumber()))) &&
            ((this.dayOfScheduledDeparture==null && other.getDayOfScheduledDeparture()==null) || 
             (this.dayOfScheduledDeparture!=null &&
              this.dayOfScheduledDeparture.equals(other.getDayOfScheduledDeparture())));
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
        if (getCarrierCode() != null) {
            _hashCode += getCarrierCode().hashCode();
        }
        if (getFlightNumber() != null) {
            _hashCode += getFlightNumber().hashCode();
        }
        if (getDayOfScheduledDeparture() != null) {
            _hashCode += getDayOfScheduledDeparture().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FlightIdentification.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FlightIdentification"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("carrierCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CarrierCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("flightNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FlightNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("dayOfScheduledDeparture");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DayOfScheduledDeparture"));
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
