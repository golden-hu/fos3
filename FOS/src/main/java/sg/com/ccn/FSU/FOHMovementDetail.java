/**
 * FOHMovementDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class FOHMovementDetail  implements java.io.Serializable {
    private java.lang.String day;

    private java.lang.String month;

    private java.lang.String actualTime;

    private java.lang.String airportCode;

    public FOHMovementDetail() {
    }

    public FOHMovementDetail(
           java.lang.String day,
           java.lang.String month,
           java.lang.String actualTime,
           java.lang.String airportCode) {
           this.day = day;
           this.month = month;
           this.actualTime = actualTime;
           this.airportCode = airportCode;
    }


    /**
     * Gets the day value for this FOHMovementDetail.
     * 
     * @return day
     */
    public java.lang.String getDay() {
        return day;
    }


    /**
     * Sets the day value for this FOHMovementDetail.
     * 
     * @param day
     */
    public void setDay(java.lang.String day) {
        this.day = day;
    }


    /**
     * Gets the month value for this FOHMovementDetail.
     * 
     * @return month
     */
    public java.lang.String getMonth() {
        return month;
    }


    /**
     * Sets the month value for this FOHMovementDetail.
     * 
     * @param month
     */
    public void setMonth(java.lang.String month) {
        this.month = month;
    }


    /**
     * Gets the actualTime value for this FOHMovementDetail.
     * 
     * @return actualTime
     */
    public java.lang.String getActualTime() {
        return actualTime;
    }


    /**
     * Sets the actualTime value for this FOHMovementDetail.
     * 
     * @param actualTime
     */
    public void setActualTime(java.lang.String actualTime) {
        this.actualTime = actualTime;
    }


    /**
     * Gets the airportCode value for this FOHMovementDetail.
     * 
     * @return airportCode
     */
    public java.lang.String getAirportCode() {
        return airportCode;
    }


    /**
     * Sets the airportCode value for this FOHMovementDetail.
     * 
     * @param airportCode
     */
    public void setAirportCode(java.lang.String airportCode) {
        this.airportCode = airportCode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FOHMovementDetail)) return false;
        FOHMovementDetail other = (FOHMovementDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.day==null && other.getDay()==null) || 
             (this.day!=null &&
              this.day.equals(other.getDay()))) &&
            ((this.month==null && other.getMonth()==null) || 
             (this.month!=null &&
              this.month.equals(other.getMonth()))) &&
            ((this.actualTime==null && other.getActualTime()==null) || 
             (this.actualTime!=null &&
              this.actualTime.equals(other.getActualTime()))) &&
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
        if (getDay() != null) {
            _hashCode += getDay().hashCode();
        }
        if (getMonth() != null) {
            _hashCode += getMonth().hashCode();
        }
        if (getActualTime() != null) {
            _hashCode += getActualTime().hashCode();
        }
        if (getAirportCode() != null) {
            _hashCode += getAirportCode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FOHMovementDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FOHMovementDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("day");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Day"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("month");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Month"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("actualTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ActualTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("airportCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirportCode"));
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
