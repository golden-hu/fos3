/**
 * ULDIdentification.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class ULDIdentification  implements java.io.Serializable {
    private java.lang.String ULDType;

    private java.lang.String ULDSerialNumber;

    private java.lang.String ULDOwnerCode;

    private sg.com.ccn.FSU.ULDPositionInformation ULDPositionInformation;

    public ULDIdentification() {
    }

    public ULDIdentification(
           java.lang.String ULDType,
           java.lang.String ULDSerialNumber,
           java.lang.String ULDOwnerCode,
           sg.com.ccn.FSU.ULDPositionInformation ULDPositionInformation) {
           this.ULDType = ULDType;
           this.ULDSerialNumber = ULDSerialNumber;
           this.ULDOwnerCode = ULDOwnerCode;
           this.ULDPositionInformation = ULDPositionInformation;
    }


    /**
     * Gets the ULDType value for this ULDIdentification.
     * 
     * @return ULDType
     */
    public java.lang.String getULDType() {
        return ULDType;
    }


    /**
     * Sets the ULDType value for this ULDIdentification.
     * 
     * @param ULDType
     */
    public void setULDType(java.lang.String ULDType) {
        this.ULDType = ULDType;
    }


    /**
     * Gets the ULDSerialNumber value for this ULDIdentification.
     * 
     * @return ULDSerialNumber
     */
    public java.lang.String getULDSerialNumber() {
        return ULDSerialNumber;
    }


    /**
     * Sets the ULDSerialNumber value for this ULDIdentification.
     * 
     * @param ULDSerialNumber
     */
    public void setULDSerialNumber(java.lang.String ULDSerialNumber) {
        this.ULDSerialNumber = ULDSerialNumber;
    }


    /**
     * Gets the ULDOwnerCode value for this ULDIdentification.
     * 
     * @return ULDOwnerCode
     */
    public java.lang.String getULDOwnerCode() {
        return ULDOwnerCode;
    }


    /**
     * Sets the ULDOwnerCode value for this ULDIdentification.
     * 
     * @param ULDOwnerCode
     */
    public void setULDOwnerCode(java.lang.String ULDOwnerCode) {
        this.ULDOwnerCode = ULDOwnerCode;
    }


    /**
     * Gets the ULDPositionInformation value for this ULDIdentification.
     * 
     * @return ULDPositionInformation
     */
    public sg.com.ccn.FSU.ULDPositionInformation getULDPositionInformation() {
        return ULDPositionInformation;
    }


    /**
     * Sets the ULDPositionInformation value for this ULDIdentification.
     * 
     * @param ULDPositionInformation
     */
    public void setULDPositionInformation(sg.com.ccn.FSU.ULDPositionInformation ULDPositionInformation) {
        this.ULDPositionInformation = ULDPositionInformation;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ULDIdentification)) return false;
        ULDIdentification other = (ULDIdentification) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.ULDType==null && other.getULDType()==null) || 
             (this.ULDType!=null &&
              this.ULDType.equals(other.getULDType()))) &&
            ((this.ULDSerialNumber==null && other.getULDSerialNumber()==null) || 
             (this.ULDSerialNumber!=null &&
              this.ULDSerialNumber.equals(other.getULDSerialNumber()))) &&
            ((this.ULDOwnerCode==null && other.getULDOwnerCode()==null) || 
             (this.ULDOwnerCode!=null &&
              this.ULDOwnerCode.equals(other.getULDOwnerCode()))) &&
            ((this.ULDPositionInformation==null && other.getULDPositionInformation()==null) || 
             (this.ULDPositionInformation!=null &&
              this.ULDPositionInformation.equals(other.getULDPositionInformation())));
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
        if (getULDType() != null) {
            _hashCode += getULDType().hashCode();
        }
        if (getULDSerialNumber() != null) {
            _hashCode += getULDSerialNumber().hashCode();
        }
        if (getULDOwnerCode() != null) {
            _hashCode += getULDOwnerCode().hashCode();
        }
        if (getULDPositionInformation() != null) {
            _hashCode += getULDPositionInformation().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ULDIdentification.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ULDIdentification"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ULDType");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ULDType"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ULDSerialNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ULDSerialNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ULDOwnerCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ULDOwnerCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ULDPositionInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ULDPositionInformation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ULDPositionInformation"));
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
