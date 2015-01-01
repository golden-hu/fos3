/**
 * SenderOfficeMessageAddress.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class SenderOfficeMessageAddress  implements java.io.Serializable {
    private java.lang.String airportCityCode;

    private java.lang.String officeFunctionDesignator;

    private java.lang.String companyDesignator;

    public SenderOfficeMessageAddress() {
    }

    public SenderOfficeMessageAddress(
           java.lang.String airportCityCode,
           java.lang.String officeFunctionDesignator,
           java.lang.String companyDesignator) {
           this.airportCityCode = airportCityCode;
           this.officeFunctionDesignator = officeFunctionDesignator;
           this.companyDesignator = companyDesignator;
    }


    /**
     * Gets the airportCityCode value for this SenderOfficeMessageAddress.
     * 
     * @return airportCityCode
     */
    public java.lang.String getAirportCityCode() {
        return airportCityCode;
    }


    /**
     * Sets the airportCityCode value for this SenderOfficeMessageAddress.
     * 
     * @param airportCityCode
     */
    public void setAirportCityCode(java.lang.String airportCityCode) {
        this.airportCityCode = airportCityCode;
    }


    /**
     * Gets the officeFunctionDesignator value for this SenderOfficeMessageAddress.
     * 
     * @return officeFunctionDesignator
     */
    public java.lang.String getOfficeFunctionDesignator() {
        return officeFunctionDesignator;
    }


    /**
     * Sets the officeFunctionDesignator value for this SenderOfficeMessageAddress.
     * 
     * @param officeFunctionDesignator
     */
    public void setOfficeFunctionDesignator(java.lang.String officeFunctionDesignator) {
        this.officeFunctionDesignator = officeFunctionDesignator;
    }


    /**
     * Gets the companyDesignator value for this SenderOfficeMessageAddress.
     * 
     * @return companyDesignator
     */
    public java.lang.String getCompanyDesignator() {
        return companyDesignator;
    }


    /**
     * Sets the companyDesignator value for this SenderOfficeMessageAddress.
     * 
     * @param companyDesignator
     */
    public void setCompanyDesignator(java.lang.String companyDesignator) {
        this.companyDesignator = companyDesignator;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof SenderOfficeMessageAddress)) return false;
        SenderOfficeMessageAddress other = (SenderOfficeMessageAddress) obj;
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
            ((this.officeFunctionDesignator==null && other.getOfficeFunctionDesignator()==null) || 
             (this.officeFunctionDesignator!=null &&
              this.officeFunctionDesignator.equals(other.getOfficeFunctionDesignator()))) &&
            ((this.companyDesignator==null && other.getCompanyDesignator()==null) || 
             (this.companyDesignator!=null &&
              this.companyDesignator.equals(other.getCompanyDesignator())));
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
        if (getOfficeFunctionDesignator() != null) {
            _hashCode += getOfficeFunctionDesignator().hashCode();
        }
        if (getCompanyDesignator() != null) {
            _hashCode += getCompanyDesignator().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(SenderOfficeMessageAddress.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SenderOfficeMessageAddress"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("airportCityCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AirportCityCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("officeFunctionDesignator");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OfficeFunctionDesignator"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("companyDesignator");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CompanyDesignator"));
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
