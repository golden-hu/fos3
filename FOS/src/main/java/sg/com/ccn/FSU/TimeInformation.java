/**
 * TimeInformation.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class TimeInformation  implements java.io.Serializable {
    private java.lang.String ofTimeIndicator;

    private java.lang.String time;

    private java.lang.String dayChangeIndicator;

    public TimeInformation() {
    }

    public TimeInformation(
           java.lang.String ofTimeIndicator,
           java.lang.String time,
           java.lang.String dayChangeIndicator) {
           this.ofTimeIndicator = ofTimeIndicator;
           this.time = time;
           this.dayChangeIndicator = dayChangeIndicator;
    }


    /**
     * Gets the ofTimeIndicator value for this TimeInformation.
     * 
     * @return ofTimeIndicator
     */
    public java.lang.String getOfTimeIndicator() {
        return ofTimeIndicator;
    }


    /**
     * Sets the ofTimeIndicator value for this TimeInformation.
     * 
     * @param ofTimeIndicator
     */
    public void setOfTimeIndicator(java.lang.String ofTimeIndicator) {
        this.ofTimeIndicator = ofTimeIndicator;
    }


    /**
     * Gets the time value for this TimeInformation.
     * 
     * @return time
     */
    public java.lang.String getTime() {
        return time;
    }


    /**
     * Sets the time value for this TimeInformation.
     * 
     * @param time
     */
    public void setTime(java.lang.String time) {
        this.time = time;
    }


    /**
     * Gets the dayChangeIndicator value for this TimeInformation.
     * 
     * @return dayChangeIndicator
     */
    public java.lang.String getDayChangeIndicator() {
        return dayChangeIndicator;
    }


    /**
     * Sets the dayChangeIndicator value for this TimeInformation.
     * 
     * @param dayChangeIndicator
     */
    public void setDayChangeIndicator(java.lang.String dayChangeIndicator) {
        this.dayChangeIndicator = dayChangeIndicator;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof TimeInformation)) return false;
        TimeInformation other = (TimeInformation) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.ofTimeIndicator==null && other.getOfTimeIndicator()==null) || 
             (this.ofTimeIndicator!=null &&
              this.ofTimeIndicator.equals(other.getOfTimeIndicator()))) &&
            ((this.time==null && other.getTime()==null) || 
             (this.time!=null &&
              this.time.equals(other.getTime()))) &&
            ((this.dayChangeIndicator==null && other.getDayChangeIndicator()==null) || 
             (this.dayChangeIndicator!=null &&
              this.dayChangeIndicator.equals(other.getDayChangeIndicator())));
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
        if (getOfTimeIndicator() != null) {
            _hashCode += getOfTimeIndicator().hashCode();
        }
        if (getTime() != null) {
            _hashCode += getTime().hashCode();
        }
        if (getDayChangeIndicator() != null) {
            _hashCode += getDayChangeIndicator().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(TimeInformation.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TimeInformation"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ofTimeIndicator");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OfTimeIndicator"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("time");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Time"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("dayChangeIndicator");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DayChangeIndicator"));
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
