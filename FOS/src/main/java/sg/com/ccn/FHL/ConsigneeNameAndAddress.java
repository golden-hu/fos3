/**
 * ConsigneeNameAndAddress.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class ConsigneeNameAndAddress  implements java.io.Serializable {
    private java.lang.String CNEName;

    private sg.com.ccn.FHL.StreetAddress CNEStreetAddress;

    private sg.com.ccn.FHL.Location CNELocation;

    private sg.com.ccn.FHL.CodedLocation CNECodedLocation;

    private sg.com.ccn.FHL.ContactDetail[] CNEContactDetail;

    public ConsigneeNameAndAddress() {
    }

    public ConsigneeNameAndAddress(
           java.lang.String CNEName,
           sg.com.ccn.FHL.StreetAddress CNEStreetAddress,
           sg.com.ccn.FHL.Location CNELocation,
           sg.com.ccn.FHL.CodedLocation CNECodedLocation,
           sg.com.ccn.FHL.ContactDetail[] CNEContactDetail) {
           this.CNEName = CNEName;
           this.CNEStreetAddress = CNEStreetAddress;
           this.CNELocation = CNELocation;
           this.CNECodedLocation = CNECodedLocation;
           this.CNEContactDetail = CNEContactDetail;
    }


    /**
     * Gets the CNEName value for this ConsigneeNameAndAddress.
     * 
     * @return CNEName
     */
    public java.lang.String getCNEName() {
        return CNEName;
    }


    /**
     * Sets the CNEName value for this ConsigneeNameAndAddress.
     * 
     * @param CNEName
     */
    public void setCNEName(java.lang.String CNEName) {
        this.CNEName = CNEName;
    }


    /**
     * Gets the CNEStreetAddress value for this ConsigneeNameAndAddress.
     * 
     * @return CNEStreetAddress
     */
    public sg.com.ccn.FHL.StreetAddress getCNEStreetAddress() {
        return CNEStreetAddress;
    }


    /**
     * Sets the CNEStreetAddress value for this ConsigneeNameAndAddress.
     * 
     * @param CNEStreetAddress
     */
    public void setCNEStreetAddress(sg.com.ccn.FHL.StreetAddress CNEStreetAddress) {
        this.CNEStreetAddress = CNEStreetAddress;
    }


    /**
     * Gets the CNELocation value for this ConsigneeNameAndAddress.
     * 
     * @return CNELocation
     */
    public sg.com.ccn.FHL.Location getCNELocation() {
        return CNELocation;
    }


    /**
     * Sets the CNELocation value for this ConsigneeNameAndAddress.
     * 
     * @param CNELocation
     */
    public void setCNELocation(sg.com.ccn.FHL.Location CNELocation) {
        this.CNELocation = CNELocation;
    }


    /**
     * Gets the CNECodedLocation value for this ConsigneeNameAndAddress.
     * 
     * @return CNECodedLocation
     */
    public sg.com.ccn.FHL.CodedLocation getCNECodedLocation() {
        return CNECodedLocation;
    }


    /**
     * Sets the CNECodedLocation value for this ConsigneeNameAndAddress.
     * 
     * @param CNECodedLocation
     */
    public void setCNECodedLocation(sg.com.ccn.FHL.CodedLocation CNECodedLocation) {
        this.CNECodedLocation = CNECodedLocation;
    }


    /**
     * Gets the CNEContactDetail value for this ConsigneeNameAndAddress.
     * 
     * @return CNEContactDetail
     */
    public sg.com.ccn.FHL.ContactDetail[] getCNEContactDetail() {
        return CNEContactDetail;
    }


    /**
     * Sets the CNEContactDetail value for this ConsigneeNameAndAddress.
     * 
     * @param CNEContactDetail
     */
    public void setCNEContactDetail(sg.com.ccn.FHL.ContactDetail[] CNEContactDetail) {
        this.CNEContactDetail = CNEContactDetail;
    }

    public sg.com.ccn.FHL.ContactDetail getCNEContactDetail(int i) {
        return this.CNEContactDetail[i];
    }

    public void setCNEContactDetail(int i, sg.com.ccn.FHL.ContactDetail _value) {
        this.CNEContactDetail[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ConsigneeNameAndAddress)) return false;
        ConsigneeNameAndAddress other = (ConsigneeNameAndAddress) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.CNEName==null && other.getCNEName()==null) || 
             (this.CNEName!=null &&
              this.CNEName.equals(other.getCNEName()))) &&
            ((this.CNEStreetAddress==null && other.getCNEStreetAddress()==null) || 
             (this.CNEStreetAddress!=null &&
              this.CNEStreetAddress.equals(other.getCNEStreetAddress()))) &&
            ((this.CNELocation==null && other.getCNELocation()==null) || 
             (this.CNELocation!=null &&
              this.CNELocation.equals(other.getCNELocation()))) &&
            ((this.CNECodedLocation==null && other.getCNECodedLocation()==null) || 
             (this.CNECodedLocation!=null &&
              this.CNECodedLocation.equals(other.getCNECodedLocation()))) &&
            ((this.CNEContactDetail==null && other.getCNEContactDetail()==null) || 
             (this.CNEContactDetail!=null &&
              java.util.Arrays.equals(this.CNEContactDetail, other.getCNEContactDetail())));
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
        if (getCNEName() != null) {
            _hashCode += getCNEName().hashCode();
        }
        if (getCNEStreetAddress() != null) {
            _hashCode += getCNEStreetAddress().hashCode();
        }
        if (getCNELocation() != null) {
            _hashCode += getCNELocation().hashCode();
        }
        if (getCNECodedLocation() != null) {
            _hashCode += getCNECodedLocation().hashCode();
        }
        if (getCNEContactDetail() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getCNEContactDetail());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getCNEContactDetail(), i);
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
        new org.apache.axis.description.TypeDesc(ConsigneeNameAndAddress.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ConsigneeNameAndAddress"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CNEName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CNEName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CNEStreetAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CNEStreetAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StreetAddress"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CNELocation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CNELocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Location"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CNECodedLocation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CNECodedLocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CodedLocation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CNEContactDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CNEContactDetail"));
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
