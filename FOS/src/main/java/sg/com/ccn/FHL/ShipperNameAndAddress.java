/**
 * ShipperNameAndAddress.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class ShipperNameAndAddress  implements java.io.Serializable {
    private java.lang.String SHPName;

    private sg.com.ccn.FHL.StreetAddress SHPStreetAddress;

    private sg.com.ccn.FHL.Location SHPLocation;

    private sg.com.ccn.FHL.CodedLocation SHPCodedLocation;

    private sg.com.ccn.FHL.ContactDetail[] SHPContactDetail;

    public ShipperNameAndAddress() {
    }

    public ShipperNameAndAddress(
           java.lang.String SHPName,
           sg.com.ccn.FHL.StreetAddress SHPStreetAddress,
           sg.com.ccn.FHL.Location SHPLocation,
           sg.com.ccn.FHL.CodedLocation SHPCodedLocation,
           sg.com.ccn.FHL.ContactDetail[] SHPContactDetail) {
           this.SHPName = SHPName;
           this.SHPStreetAddress = SHPStreetAddress;
           this.SHPLocation = SHPLocation;
           this.SHPCodedLocation = SHPCodedLocation;
           this.SHPContactDetail = SHPContactDetail;
    }


    /**
     * Gets the SHPName value for this ShipperNameAndAddress.
     * 
     * @return SHPName
     */
    public java.lang.String getSHPName() {
        return SHPName;
    }


    /**
     * Sets the SHPName value for this ShipperNameAndAddress.
     * 
     * @param SHPName
     */
    public void setSHPName(java.lang.String SHPName) {
        this.SHPName = SHPName;
    }


    /**
     * Gets the SHPStreetAddress value for this ShipperNameAndAddress.
     * 
     * @return SHPStreetAddress
     */
    public sg.com.ccn.FHL.StreetAddress getSHPStreetAddress() {
        return SHPStreetAddress;
    }


    /**
     * Sets the SHPStreetAddress value for this ShipperNameAndAddress.
     * 
     * @param SHPStreetAddress
     */
    public void setSHPStreetAddress(sg.com.ccn.FHL.StreetAddress SHPStreetAddress) {
        this.SHPStreetAddress = SHPStreetAddress;
    }


    /**
     * Gets the SHPLocation value for this ShipperNameAndAddress.
     * 
     * @return SHPLocation
     */
    public sg.com.ccn.FHL.Location getSHPLocation() {
        return SHPLocation;
    }


    /**
     * Sets the SHPLocation value for this ShipperNameAndAddress.
     * 
     * @param SHPLocation
     */
    public void setSHPLocation(sg.com.ccn.FHL.Location SHPLocation) {
        this.SHPLocation = SHPLocation;
    }


    /**
     * Gets the SHPCodedLocation value for this ShipperNameAndAddress.
     * 
     * @return SHPCodedLocation
     */
    public sg.com.ccn.FHL.CodedLocation getSHPCodedLocation() {
        return SHPCodedLocation;
    }


    /**
     * Sets the SHPCodedLocation value for this ShipperNameAndAddress.
     * 
     * @param SHPCodedLocation
     */
    public void setSHPCodedLocation(sg.com.ccn.FHL.CodedLocation SHPCodedLocation) {
        this.SHPCodedLocation = SHPCodedLocation;
    }


    /**
     * Gets the SHPContactDetail value for this ShipperNameAndAddress.
     * 
     * @return SHPContactDetail
     */
    public sg.com.ccn.FHL.ContactDetail[] getSHPContactDetail() {
        return SHPContactDetail;
    }


    /**
     * Sets the SHPContactDetail value for this ShipperNameAndAddress.
     * 
     * @param SHPContactDetail
     */
    public void setSHPContactDetail(sg.com.ccn.FHL.ContactDetail[] SHPContactDetail) {
        this.SHPContactDetail = SHPContactDetail;
    }

    public sg.com.ccn.FHL.ContactDetail getSHPContactDetail(int i) {
        return this.SHPContactDetail[i];
    }

    public void setSHPContactDetail(int i, sg.com.ccn.FHL.ContactDetail _value) {
        this.SHPContactDetail[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ShipperNameAndAddress)) return false;
        ShipperNameAndAddress other = (ShipperNameAndAddress) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.SHPName==null && other.getSHPName()==null) || 
             (this.SHPName!=null &&
              this.SHPName.equals(other.getSHPName()))) &&
            ((this.SHPStreetAddress==null && other.getSHPStreetAddress()==null) || 
             (this.SHPStreetAddress!=null &&
              this.SHPStreetAddress.equals(other.getSHPStreetAddress()))) &&
            ((this.SHPLocation==null && other.getSHPLocation()==null) || 
             (this.SHPLocation!=null &&
              this.SHPLocation.equals(other.getSHPLocation()))) &&
            ((this.SHPCodedLocation==null && other.getSHPCodedLocation()==null) || 
             (this.SHPCodedLocation!=null &&
              this.SHPCodedLocation.equals(other.getSHPCodedLocation()))) &&
            ((this.SHPContactDetail==null && other.getSHPContactDetail()==null) || 
             (this.SHPContactDetail!=null &&
              java.util.Arrays.equals(this.SHPContactDetail, other.getSHPContactDetail())));
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
        if (getSHPName() != null) {
            _hashCode += getSHPName().hashCode();
        }
        if (getSHPStreetAddress() != null) {
            _hashCode += getSHPStreetAddress().hashCode();
        }
        if (getSHPLocation() != null) {
            _hashCode += getSHPLocation().hashCode();
        }
        if (getSHPCodedLocation() != null) {
            _hashCode += getSHPCodedLocation().hashCode();
        }
        if (getSHPContactDetail() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getSHPContactDetail());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getSHPContactDetail(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ShipperNameAndAddress.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ShipperNameAndAddress"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("SHPName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SHPName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("SHPStreetAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SHPStreetAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StreetAddress"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("SHPLocation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SHPLocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Location"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("SHPCodedLocation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SHPCodedLocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CodedLocation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("SHPContactDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SHPContactDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ContactDetail"));
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
