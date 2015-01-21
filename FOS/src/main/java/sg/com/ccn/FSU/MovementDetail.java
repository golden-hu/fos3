/**
 * MovementDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class MovementDetail  implements java.io.Serializable {
    private java.lang.String carrierCode;

    private java.lang.String flightNumber;

    private java.lang.String day;

    private java.lang.String month;

    private java.lang.String actualTime;

    private java.lang.String dayChangeIndicator;

    private java.lang.String arrivalAirportCode;

    private java.lang.String departureAirportCode;

    private java.lang.String airportCode;

    public MovementDetail() {
    }

    public MovementDetail(
           java.lang.String carrierCode,
           java.lang.String flightNumber,
           java.lang.String day,
           java.lang.String month,
           java.lang.String actualTime,
           java.lang.String dayChangeIndicator,
           java.lang.String arrivalAirportCode,
           java.lang.String departureAirportCode,
           java.lang.String airportCode) {
           this.carrierCode = carrierCode;
           this.flightNumber = flightNumber;
           this.day = day;
           this.month = month;
           this.actualTime = actualTime;
           this.dayChangeIndicator = dayChangeIndicator;
           this.arrivalAirportCode = arrivalAirportCode;
           this.departureAirportCode = departureAirportCode;
           this.airportCode = airportCode;
    }


    /**
     * Gets the carrierCode value for this MovementDetail.
     * 
     * @return carrierCode
     */
    public java.lang.String getCarrierCode() {
        return carrierCode;
    }


    /**
     * Sets the carrierCode value for this MovementDetail.
     * 
     * @param carrierCode
     */
    public void setCarrierCode(java.lang.String carrierCode) {
        this.carrierCode = carrierCode;
    }


    /**
     * Gets the flightNumber value for this MovementDetail.
     * 
     * @return flightNumber
     */
    public java.lang.String getFlightNumber() {
        return flightNumber;
    }


    /**
     * Sets the flightNumber value for this MovementDetail.
     * 
     * @param flightNumber
     */
    public void setFlightNumber(java.lang.String flightNumber) {
        this.flightNumber = flightNumber;
    }


    /**
     * Gets the day value for this MovementDetail.
     * 
     * @return day
     */
    public java.lang.String getDay() {
        return day;
    }


    /**
     * Sets the day value for this MovementDetail.
     * 
     * @param day
     */
    public void setDay(java.lang.String day) {
        this.day = day;
    }


    /**
     * Gets the month value for this MovementDetail.
     * 
     * @return month
     */
    public java.lang.String getMonth() {
        return month;
    }


    /**
     * Sets the month value for this MovementDetail.
     * 
     * @param month
     */
    public void setMonth(java.lang.String month) {
        this.month = month;
    }


    /**
     * Gets the actualTime value for this MovementDetail.
     * 
     * @return actualTime
     */
    public java.lang.String getActualTime() {
        return actualTime;
    }


    /**
     * Sets the actualTime value for this MovementDetail.
     * 
     * @param actualTime
     */
    public void setActualTime(java.lang.String actualTime) {
        this.actualTime = actualTime;
    }


    /**
     * Gets the dayChangeIndicator value for this MovementDetail.
     * 
     * @return dayChangeIndicator
     */
    public java.lang.String getDayChangeIndicator() {
        return dayChangeIndicator;
    }


    /**
     * Sets the dayChangeIndicator value for this MovementDetail.
     * 
     * @param dayChangeIndicator
     */
    public void setDayChangeIndicator(java.lang.String dayChangeIndicator) {
        this.dayChangeIndicator = dayChangeIndicator;
    }


    /**
     * Gets the arrivalAirportCode value for this MovementDetail.
     * 
     * @return arrivalAirportCode
     */
    public java.lang.String getArrivalAirportCode() {
        return arrivalAirportCode;
    }


    /**
     * Sets the arrivalAirportCode value for this MovementDetail.
     * 
     * @param arrivalAirportCode
     */
    public void setArrivalAirportCode(java.lang.String arrivalAirportCode) {
        this.arrivalAirportCode = arrivalAirportCode;
    }


    /**
     * Gets the departureAirportCode value for this MovementDetail.
     * 
     * @return departureAirportCode
     */
    public java.lang.String getDepartureAirportCode() {
        return departureAirportCode;
    }


    /**
     * Sets the departureAirportCode value for this MovementDetail.
     * 
     * @param departureAirportCode
     */
    public void setDepartureAirportCode(java.lang.String departureAirportCode) {
        this.departureAirportCode = departureAirportCode;
    }


    /**
     * Gets the airportCode value for this MovementDetail.
     * 
     * @return airportCode
     */
    public java.lang.String getAirportCode() {
        return airportCode;
    }


    /**
     * Sets the airportCode value for this MovementDetail.
     * 
     * @param airportCode
     */
    public void setAirportCode(java.lang.String airportCode) {
        this.airportCode = airportCode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof MovementDetail)) return false;
        MovementDetail other = (MovementDetail) obj;
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
            ((this.day==null && other.getDay()==null) || 
             (this.day!=null &&
              this.day.equals(other.getDay()))) &&
            ((this.month==null && other.getMonth()==null) || 
             (this.month!=null &&
              this.month.equals(other.getMonth()))) &&
            ((this.actualTime==null && other.getActualTime()==null) || 
             (this.actualTime!=null &&
              this.actualTime.equals(other.getActualTime()))) &&
            ((this.dayChangeIndicator==null && other.getDayChangeIndicator()==null) || 
             (this.dayChangeIndicator!=null &&
              this.dayChangeIndicator.equals(other.getDayChangeIndicator()))) &&
            ((this.arrivalAirportCode==null && other.getArrivalAirportCode()==null) || 
             (this.arrivalAirportCode!=null &&
              this.arrivalAirportCode.equals(other.getArrivalAirportCode()))) &&
            ((this.departureAirportCode==null && other.getDepartureAirportCode()==null) || 
             (this.departureAirportCode!=null &&
              this.departureAirportCode.equals(other.getDepartureAirportCode()))) &&
            ((this.airportCode==null && other.getAirportCode()==null) || 
             (this.airportCode!=null &&
              this.airportCode.equals(other.getAirportCode())));
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
        if (getDay() != null) {
            _hashCode += getDay().hashCode();
        }
        if (getMonth() != null) {
            _hashCode += getMonth().hashCode();
        }
        if (getActualTime() != null) {
            _hashCode += getActualTime().hashCode();
        }
        if (getDayChangeIndicator() != null) {
            _hashCode += getDayChangeIndicator().hashCode();
        }
        if (getArrivalAirportCode() != null) {
            _hashCode += getArrivalAirportCode().hashCode();
        }
        if (getDepartureAirportCode() != null) {
            _hashCode += getDepartureAirportCode().hashCode();
        }
        if (getAirportCode() != null) {
            _hashCode += getAirportCode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(MovementDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("carrierCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CarrierCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("flightNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FlightNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("day");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Day"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("month");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Month"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("actualTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ActualTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("dayChangeIndicator");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DayChangeIndicator"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("arrivalAirportCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ArrivalAirportCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("departureAirportCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DepartureAirportCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("airportCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirportCode"));
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
