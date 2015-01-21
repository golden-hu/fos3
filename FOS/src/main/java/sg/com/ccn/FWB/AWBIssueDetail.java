/**
 * AWBIssueDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class AWBIssueDetail  implements java.io.Serializable {
    private java.lang.String day;

    private java.lang.String month;

    private java.lang.String year;

    private java.lang.String place;

    private java.lang.String airportCityCode;

    public AWBIssueDetail() {
    }

    public AWBIssueDetail(
           java.lang.String day,
           java.lang.String month,
           java.lang.String year,
           java.lang.String place,
           java.lang.String airportCityCode) {
           this.day = day;
           this.month = month;
           this.year = year;
           this.place = place;
           this.airportCityCode = airportCityCode;
    }


    /**
     * Gets the day value for this AWBIssueDetail.
     * 
     * @return day
     */
    public java.lang.String getDay() {
        return day;
    }


    /**
     * Sets the day value for this AWBIssueDetail.
     * 
     * @param day
     */
    public void setDay(java.lang.String day) {
        this.day = day;
    }


    /**
     * Gets the month value for this AWBIssueDetail.
     * 
     * @return month
     */
    public java.lang.String getMonth() {
        return month;
    }


    /**
     * Sets the month value for this AWBIssueDetail.
     * 
     * @param month
     */
    public void setMonth(java.lang.String month) {
        this.month = month;
    }


    /**
     * Gets the year value for this AWBIssueDetail.
     * 
     * @return year
     */
    public java.lang.String getYear() {
        return year;
    }


    /**
     * Sets the year value for this AWBIssueDetail.
     * 
     * @param year
     */
    public void setYear(java.lang.String year) {
        this.year = year;
    }


    /**
     * Gets the place value for this AWBIssueDetail.
     * 
     * @return place
     */
    public java.lang.String getPlace() {
        return place;
    }


    /**
     * Sets the place value for this AWBIssueDetail.
     * 
     * @param place
     */
    public void setPlace(java.lang.String place) {
        this.place = place;
    }


    /**
     * Gets the airportCityCode value for this AWBIssueDetail.
     * 
     * @return airportCityCode
     */
    public java.lang.String getAirportCityCode() {
        return airportCityCode;
    }


    /**
     * Sets the airportCityCode value for this AWBIssueDetail.
     * 
     * @param airportCityCode
     */
    public void setAirportCityCode(java.lang.String airportCityCode) {
        this.airportCityCode = airportCityCode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof AWBIssueDetail)) return false;
        AWBIssueDetail other = (AWBIssueDetail) obj;
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
            ((this.year==null && other.getYear()==null) || 
             (this.year!=null &&
              this.year.equals(other.getYear()))) &&
            ((this.place==null && other.getPlace()==null) || 
             (this.place!=null &&
              this.place.equals(other.getPlace()))) &&
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
        if (getDay() != null) {
            _hashCode += getDay().hashCode();
        }
        if (getMonth() != null) {
            _hashCode += getMonth().hashCode();
        }
        if (getYear() != null) {
            _hashCode += getYear().hashCode();
        }
        if (getPlace() != null) {
            _hashCode += getPlace().hashCode();
        }
        if (getAirportCityCode() != null) {
            _hashCode += getAirportCityCode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(AWBIssueDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWBIssueDetail"));
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
        elemField.setFieldName("year");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Year"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("place");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Place"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("airportCityCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirportCityCode"));
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
