/**
 * AWBOriginAndDestination.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class AWBOriginAndDestination  implements java.io.Serializable {
    private java.lang.String airportCodeOfOrigin;

    private java.lang.String airportCodeOfDestination;

    public AWBOriginAndDestination() {
    }

    public AWBOriginAndDestination(
           java.lang.String airportCodeOfOrigin,
           java.lang.String airportCodeOfDestination) {
           this.airportCodeOfOrigin = airportCodeOfOrigin;
           this.airportCodeOfDestination = airportCodeOfDestination;
    }


    /**
     * Gets the airportCodeOfOrigin value for this AWBOriginAndDestination.
     * 
     * @return airportCodeOfOrigin
     */
    public java.lang.String getAirportCodeOfOrigin() {
        return airportCodeOfOrigin;
    }


    /**
     * Sets the airportCodeOfOrigin value for this AWBOriginAndDestination.
     * 
     * @param airportCodeOfOrigin
     */
    public void setAirportCodeOfOrigin(java.lang.String airportCodeOfOrigin) {
        this.airportCodeOfOrigin = airportCodeOfOrigin;
    }


    /**
     * Gets the airportCodeOfDestination value for this AWBOriginAndDestination.
     * 
     * @return airportCodeOfDestination
     */
    public java.lang.String getAirportCodeOfDestination() {
        return airportCodeOfDestination;
    }


    /**
     * Sets the airportCodeOfDestination value for this AWBOriginAndDestination.
     * 
     * @param airportCodeOfDestination
     */
    public void setAirportCodeOfDestination(java.lang.String airportCodeOfDestination) {
        this.airportCodeOfDestination = airportCodeOfDestination;
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
            ((this.airportCodeOfOrigin==null && other.getAirportCodeOfOrigin()==null) || 
             (this.airportCodeOfOrigin!=null &&
              this.airportCodeOfOrigin.equals(other.getAirportCodeOfOrigin()))) &&
            ((this.airportCodeOfDestination==null && other.getAirportCodeOfDestination()==null) || 
             (this.airportCodeOfDestination!=null &&
              this.airportCodeOfDestination.equals(other.getAirportCodeOfDestination())));
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
        if (getAirportCodeOfOrigin() != null) {
            _hashCode += getAirportCodeOfOrigin().hashCode();
        }
        if (getAirportCodeOfDestination() != null) {
            _hashCode += getAirportCodeOfDestination().hashCode();
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
        elemField.setFieldName("airportCodeOfOrigin");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirportCodeOfOrigin"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("airportCodeOfDestination");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirportCodeOfDestination"));
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
