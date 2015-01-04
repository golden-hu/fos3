/**
 * AWBOriginAndDestination.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class AWBOriginAndDestination  implements java.io.Serializable {
    private java.lang.String airportccnyCodeOfOrigin;

    private java.lang.String airportccnyCodeOfDestination;

    public AWBOriginAndDestination() {
    }

    public AWBOriginAndDestination(
           java.lang.String airportccnyCodeOfOrigin,
           java.lang.String airportccnyCodeOfDestination) {
           this.airportccnyCodeOfOrigin = airportccnyCodeOfOrigin;
           this.airportccnyCodeOfDestination = airportccnyCodeOfDestination;
    }


    /**
     * Gets the airportccnyCodeOfOrigin value for this AWBOriginAndDestination.
     * 
     * @return airportccnyCodeOfOrigin
     */
    public java.lang.String getAirportccnyCodeOfOrigin() {
        return airportccnyCodeOfOrigin;
    }


    /**
     * Sets the airportccnyCodeOfOrigin value for this AWBOriginAndDestination.
     * 
     * @param airportccnyCodeOfOrigin
     */
    public void setAirportccnyCodeOfOrigin(java.lang.String airportccnyCodeOfOrigin) {
        this.airportccnyCodeOfOrigin = airportccnyCodeOfOrigin;
    }


    /**
     * Gets the airportccnyCodeOfDestination value for this AWBOriginAndDestination.
     * 
     * @return airportccnyCodeOfDestination
     */
    public java.lang.String getAirportccnyCodeOfDestination() {
        return airportccnyCodeOfDestination;
    }


    /**
     * Sets the airportccnyCodeOfDestination value for this AWBOriginAndDestination.
     * 
     * @param airportccnyCodeOfDestination
     */
    public void setAirportccnyCodeOfDestination(java.lang.String airportccnyCodeOfDestination) {
        this.airportccnyCodeOfDestination = airportccnyCodeOfDestination;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof AWBOriginAndDestination)) return false;
        AWBOriginAndDestination other = (AWBOriginAndDestination) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.airportccnyCodeOfOrigin==null && other.getAirportccnyCodeOfOrigin()==null) || 
             (this.airportccnyCodeOfOrigin!=null &&
              this.airportccnyCodeOfOrigin.equals(other.getAirportccnyCodeOfOrigin()))) &&
            ((this.airportccnyCodeOfDestination==null && other.getAirportccnyCodeOfDestination()==null) || 
             (this.airportccnyCodeOfDestination!=null &&
              this.airportccnyCodeOfDestination.equals(other.getAirportccnyCodeOfDestination())));
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
        if (getAirportccnyCodeOfOrigin() != null) {
            _hashCode += getAirportccnyCodeOfOrigin().hashCode();
        }
        if (getAirportccnyCodeOfDestination() != null) {
            _hashCode += getAirportccnyCodeOfDestination().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(AWBOriginAndDestination.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWBOriginAndDestination"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("airportccnyCodeOfOrigin");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirportccnyCodeOfOrigin"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("airportccnyCodeOfDestination");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirportccnyCodeOfDestination"));
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
