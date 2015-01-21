/**
 * OtherCustomsInfo.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class OtherCustomsInfo  implements java.io.Serializable {
    private java.lang.String ISOCountryCode;

    private java.lang.String informationIdentifier;

    private java.lang.String customsInformationIdentifier;

    private java.lang.String supplementCustomInformation;

    public OtherCustomsInfo() {
    }

    public OtherCustomsInfo(
           java.lang.String ISOCountryCode,
           java.lang.String informationIdentifier,
           java.lang.String customsInformationIdentifier,
           java.lang.String supplementCustomInformation) {
           this.ISOCountryCode = ISOCountryCode;
           this.informationIdentifier = informationIdentifier;
           this.customsInformationIdentifier = customsInformationIdentifier;
           this.supplementCustomInformation = supplementCustomInformation;
    }


    /**
     * Gets the ISOCountryCode value for this OtherCustomsInfo.
     * 
     * @return ISOCountryCode
     */
    public java.lang.String getISOCountryCode() {
        return ISOCountryCode;
    }


    /**
     * Sets the ISOCountryCode value for this OtherCustomsInfo.
     * 
     * @param ISOCountryCode
     */
    public void setISOCountryCode(java.lang.String ISOCountryCode) {
        this.ISOCountryCode = ISOCountryCode;
    }


    /**
     * Gets the informationIdentifier value for this OtherCustomsInfo.
     * 
     * @return informationIdentifier
     */
    public java.lang.String getInformationIdentifier() {
        return informationIdentifier;
    }


    /**
     * Sets the informationIdentifier value for this OtherCustomsInfo.
     * 
     * @param informationIdentifier
     */
    public void setInformationIdentifier(java.lang.String informationIdentifier) {
        this.informationIdentifier = informationIdentifier;
    }


    /**
     * Gets the customsInformationIdentifier value for this OtherCustomsInfo.
     * 
     * @return customsInformationIdentifier
     */
    public java.lang.String getCustomsInformationIdentifier() {
        return customsInformationIdentifier;
    }


    /**
     * Sets the customsInformationIdentifier value for this OtherCustomsInfo.
     * 
     * @param customsInformationIdentifier
     */
    public void setCustomsInformationIdentifier(java.lang.String customsInformationIdentifier) {
        this.customsInformationIdentifier = customsInformationIdentifier;
    }


    /**
     * Gets the supplementCustomInformation value for this OtherCustomsInfo.
     * 
     * @return supplementCustomInformation
     */
    public java.lang.String getSupplementCustomInformation() {
        return supplementCustomInformation;
    }


    /**
     * Sets the supplementCustomInformation value for this OtherCustomsInfo.
     * 
     * @param supplementCustomInformation
     */
    public void setSupplementCustomInformation(java.lang.String supplementCustomInformation) {
        this.supplementCustomInformation = supplementCustomInformation;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof OtherCustomsInfo)) return false;
        OtherCustomsInfo other = (OtherCustomsInfo) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.ISOCountryCode==null && other.getISOCountryCode()==null) || 
             (this.ISOCountryCode!=null &&
              this.ISOCountryCode.equals(other.getISOCountryCode()))) &&
            ((this.informationIdentifier==null && other.getInformationIdentifier()==null) || 
             (this.informationIdentifier!=null &&
              this.informationIdentifier.equals(other.getInformationIdentifier()))) &&
            ((this.customsInformationIdentifier==null && other.getCustomsInformationIdentifier()==null) || 
             (this.customsInformationIdentifier!=null &&
              this.customsInformationIdentifier.equals(other.getCustomsInformationIdentifier()))) &&
            ((this.supplementCustomInformation==null && other.getSupplementCustomInformation()==null) || 
             (this.supplementCustomInformation!=null &&
              this.supplementCustomInformation.equals(other.getSupplementCustomInformation())));
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
        if (getISOCountryCode() != null) {
            _hashCode += getISOCountryCode().hashCode();
        }
        if (getInformationIdentifier() != null) {
            _hashCode += getInformationIdentifier().hashCode();
        }
        if (getCustomsInformationIdentifier() != null) {
            _hashCode += getCustomsInformationIdentifier().hashCode();
        }
        if (getSupplementCustomInformation() != null) {
            _hashCode += getSupplementCustomInformation().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(OtherCustomsInfo.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherCustomsInfo"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ISOCountryCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ISOCountryCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("informationIdentifier");
        elemField.setXmlName(new javax.xml.namespace.QName("", "InformationIdentifier"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("customsInformationIdentifier");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CustomsInformationIdentifier"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("supplementCustomInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SupplementCustomInformation"));
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
