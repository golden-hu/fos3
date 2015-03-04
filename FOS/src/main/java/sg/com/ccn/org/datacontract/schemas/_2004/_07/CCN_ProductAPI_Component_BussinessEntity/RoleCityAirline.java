/**
 * RoleCityAirline.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity;

public class RoleCityAirline  extends sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.ProfileCityRole  implements java.io.Serializable {
    private java.lang.String GHA;

    private java.lang.Boolean eAWB;

    public RoleCityAirline() {
    }

    public RoleCityAirline(
           java.lang.String address1,
           java.lang.String address2,
           java.lang.String bizRegistrationNo,
           java.lang.String city,
           java.lang.String companyName1,
           java.lang.String companyName2,
           java.lang.String contactEmail,
           java.lang.String contactFax,
           java.lang.String contactFirstName,
           java.lang.String contactLastName,
           java.lang.String contactMobile,
           java.lang.String contactTel,
           java.lang.String countryCode,
           java.lang.String globalCompanyID,
           java.lang.String place,
           java.lang.String postalCode,
           java.lang.String stateProvince,
           java.lang.String taxRegistrationNo,
           java.lang.String GHA,
           java.lang.Boolean eAWB) {
        super(
            address1,
            address2,
            bizRegistrationNo,
            city,
            companyName1,
            companyName2,
            contactEmail,
            contactFax,
            contactFirstName,
            contactLastName,
            contactMobile,
            contactTel,
            countryCode,
            globalCompanyID,
            place,
            postalCode,
            stateProvince,
            taxRegistrationNo);
        this.GHA = GHA;
        this.eAWB = eAWB;
    }


    /**
     * Gets the GHA value for this RoleCityAirline.
     * 
     * @return GHA
     */
    public java.lang.String getGHA() {
        return GHA;
    }


    /**
     * Sets the GHA value for this RoleCityAirline.
     * 
     * @param GHA
     */
    public void setGHA(java.lang.String GHA) {
        this.GHA = GHA;
    }


    /**
     * Gets the eAWB value for this RoleCityAirline.
     * 
     * @return eAWB
     */
    public java.lang.Boolean getEAWB() {
        return eAWB;
    }


    /**
     * Sets the eAWB value for this RoleCityAirline.
     * 
     * @param eAWB
     */
    public void setEAWB(java.lang.Boolean eAWB) {
        this.eAWB = eAWB;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof RoleCityAirline)) return false;
        RoleCityAirline other = (RoleCityAirline) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.GHA==null && other.getGHA()==null) || 
             (this.GHA!=null &&
              this.GHA.equals(other.getGHA()))) &&
            ((this.eAWB==null && other.getEAWB()==null) || 
             (this.eAWB!=null &&
              this.eAWB.equals(other.getEAWB())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = super.hashCode();
        if (getGHA() != null) {
            _hashCode += getGHA().hashCode();
        }
        if (getEAWB() != null) {
            _hashCode += getEAWB().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(RoleCityAirline.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "RoleCityAirline"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("GHA");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "GHA"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("EAWB");
        elemField.setXmlName(new javax.xml.namespace.QName("http://schemas.datacontract.org/2004/07/CCN.ProductAPI.Component.BussinessEntity", "eAWB"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
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
