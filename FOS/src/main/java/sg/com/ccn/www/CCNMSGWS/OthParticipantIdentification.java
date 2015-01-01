/**
 * OthParticipantIdentification.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class OthParticipantIdentification  implements java.io.Serializable {
    private java.lang.String participantIdentifier;

    private java.lang.String participantCode;

    private java.lang.String airportCityCode;

    public OthParticipantIdentification() {
    }

    public OthParticipantIdentification(
           java.lang.String participantIdentifier,
           java.lang.String participantCode,
           java.lang.String airportCityCode) {
           this.participantIdentifier = participantIdentifier;
           this.participantCode = participantCode;
           this.airportCityCode = airportCityCode;
    }


    /**
     * Gets the participantIdentifier value for this OthParticipantIdentification.
     * 
     * @return participantIdentifier
     */
    public java.lang.String getParticipantIdentifier() {
        return participantIdentifier;
    }


    /**
     * Sets the participantIdentifier value for this OthParticipantIdentification.
     * 
     * @param participantIdentifier
     */
    public void setParticipantIdentifier(java.lang.String participantIdentifier) {
        this.participantIdentifier = participantIdentifier;
    }


    /**
     * Gets the participantCode value for this OthParticipantIdentification.
     * 
     * @return participantCode
     */
    public java.lang.String getParticipantCode() {
        return participantCode;
    }


    /**
     * Sets the participantCode value for this OthParticipantIdentification.
     * 
     * @param participantCode
     */
    public void setParticipantCode(java.lang.String participantCode) {
        this.participantCode = participantCode;
    }


    /**
     * Gets the airportCityCode value for this OthParticipantIdentification.
     * 
     * @return airportCityCode
     */
    public java.lang.String getAirportCityCode() {
        return airportCityCode;
    }


    /**
     * Sets the airportCityCode value for this OthParticipantIdentification.
     * 
     * @param airportCityCode
     */
    public void setAirportCityCode(java.lang.String airportCityCode) {
        this.airportCityCode = airportCityCode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof OthParticipantIdentification)) return false;
        OthParticipantIdentification other = (OthParticipantIdentification) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.participantIdentifier==null && other.getParticipantIdentifier()==null) || 
             (this.participantIdentifier!=null &&
              this.participantIdentifier.equals(other.getParticipantIdentifier()))) &&
            ((this.participantCode==null && other.getParticipantCode()==null) || 
             (this.participantCode!=null &&
              this.participantCode.equals(other.getParticipantCode()))) &&
            ((this.airportCityCode==null && other.getAirportCityCode()==null) || 
             (this.airportCityCode!=null &&
              this.airportCityCode.equals(other.getAirportCityCode())));
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
        if (getParticipantIdentifier() != null) {
            _hashCode += getParticipantIdentifier().hashCode();
        }
        if (getParticipantCode() != null) {
            _hashCode += getParticipantCode().hashCode();
        }
        if (getAirportCityCode() != null) {
            _hashCode += getAirportCityCode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(OthParticipantIdentification.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OthParticipantIdentification"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("participantIdentifier");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ParticipantIdentifier"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("participantCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ParticipantCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("airportCityCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirportCityCode"));
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
