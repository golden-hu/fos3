/**
 * Consignee.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class Consignee  implements java.io.Serializable {
    private sg.com.ccn.FWB.AccountDetail consigneeAccountDetail;

    private sg.com.ccn.FWB.Name consigneeName;

    private sg.com.ccn.FWB.StreetAddress consigneeStreetAddress;

    private sg.com.ccn.FWB.Location consigneeLocation;

    private sg.com.ccn.FWB.CodedLocation consigneeCodedLocation;

    private sg.com.ccn.FWB.ContactDetail[] consigneeContactDetail;

    public Consignee() {
    }

    public Consignee(
           sg.com.ccn.FWB.AccountDetail consigneeAccountDetail,
           sg.com.ccn.FWB.Name consigneeName,
           sg.com.ccn.FWB.StreetAddress consigneeStreetAddress,
           sg.com.ccn.FWB.Location consigneeLocation,
           sg.com.ccn.FWB.CodedLocation consigneeCodedLocation,
           sg.com.ccn.FWB.ContactDetail[] consigneeContactDetail) {
           this.consigneeAccountDetail = consigneeAccountDetail;
           this.consigneeName = consigneeName;
           this.consigneeStreetAddress = consigneeStreetAddress;
           this.consigneeLocation = consigneeLocation;
           this.consigneeCodedLocation = consigneeCodedLocation;
           this.consigneeContactDetail = consigneeContactDetail;
    }


    /**
     * Gets the consigneeAccountDetail value for this Consignee.
     * 
     * @return consigneeAccountDetail
     */
    public sg.com.ccn.FWB.AccountDetail getConsigneeAccountDetail() {
        return consigneeAccountDetail;
    }


    /**
     * Sets the consigneeAccountDetail value for this Consignee.
     * 
     * @param consigneeAccountDetail
     */
    public void setConsigneeAccountDetail(sg.com.ccn.FWB.AccountDetail consigneeAccountDetail) {
        this.consigneeAccountDetail = consigneeAccountDetail;
    }


    /**
     * Gets the consigneeName value for this Consignee.
     * 
     * @return consigneeName
     */
    public sg.com.ccn.FWB.Name getConsigneeName() {
        return consigneeName;
    }


    /**
     * Sets the consigneeName value for this Consignee.
     * 
     * @param consigneeName
     */
    public void setConsigneeName(sg.com.ccn.FWB.Name consigneeName) {
        this.consigneeName = consigneeName;
    }


    /**
     * Gets the consigneeStreetAddress value for this Consignee.
     * 
     * @return consigneeStreetAddress
     */
    public sg.com.ccn.FWB.StreetAddress getConsigneeStreetAddress() {
        return consigneeStreetAddress;
    }


    /**
     * Sets the consigneeStreetAddress value for this Consignee.
     * 
     * @param consigneeStreetAddress
     */
    public void setConsigneeStreetAddress(sg.com.ccn.FWB.StreetAddress consigneeStreetAddress) {
        this.consigneeStreetAddress = consigneeStreetAddress;
    }


    /**
     * Gets the consigneeLocation value for this Consignee.
     * 
     * @return consigneeLocation
     */
    public sg.com.ccn.FWB.Location getConsigneeLocation() {
        return consigneeLocation;
    }


    /**
     * Sets the consigneeLocation value for this Consignee.
     * 
     * @param consigneeLocation
     */
    public void setConsigneeLocation(sg.com.ccn.FWB.Location consigneeLocation) {
        this.consigneeLocation = consigneeLocation;
    }


    /**
     * Gets the consigneeCodedLocation value for this Consignee.
     * 
     * @return consigneeCodedLocation
     */
    public sg.com.ccn.FWB.CodedLocation getConsigneeCodedLocation() {
        return consigneeCodedLocation;
    }


    /**
     * Sets the consigneeCodedLocation value for this Consignee.
     * 
     * @param consigneeCodedLocation
     */
    public void setConsigneeCodedLocation(sg.com.ccn.FWB.CodedLocation consigneeCodedLocation) {
        this.consigneeCodedLocation = consigneeCodedLocation;
    }


    /**
     * Gets the consigneeContactDetail value for this Consignee.
     * 
     * @return consigneeContactDetail
     */
    public sg.com.ccn.FWB.ContactDetail[] getConsigneeContactDetail() {
        return consigneeContactDetail;
    }


    /**
     * Sets the consigneeContactDetail value for this Consignee.
     * 
     * @param consigneeContactDetail
     */
    public void setConsigneeContactDetail(sg.com.ccn.FWB.ContactDetail[] consigneeContactDetail) {
        this.consigneeContactDetail = consigneeContactDetail;
    }

    public sg.com.ccn.FWB.ContactDetail getConsigneeContactDetail(int i) {
        return this.consigneeContactDetail[i];
    }

    public void setConsigneeContactDetail(int i, sg.com.ccn.FWB.ContactDetail _value) {
        this.consigneeContactDetail[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Consignee)) return false;
        Consignee other = (Consignee) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.consigneeAccountDetail==null && other.getConsigneeAccountDetail()==null) || 
             (this.consigneeAccountDetail!=null &&
              this.consigneeAccountDetail.equals(other.getConsigneeAccountDetail()))) &&
            ((this.consigneeName==null && other.getConsigneeName()==null) || 
             (this.consigneeName!=null &&
              this.consigneeName.equals(other.getConsigneeName()))) &&
            ((this.consigneeStreetAddress==null && other.getConsigneeStreetAddress()==null) || 
             (this.consigneeStreetAddress!=null &&
              this.consigneeStreetAddress.equals(other.getConsigneeStreetAddress()))) &&
            ((this.consigneeLocation==null && other.getConsigneeLocation()==null) || 
             (this.consigneeLocation!=null &&
              this.consigneeLocation.equals(other.getConsigneeLocation()))) &&
            ((this.consigneeCodedLocation==null && other.getConsigneeCodedLocation()==null) || 
             (this.consigneeCodedLocation!=null &&
              this.consigneeCodedLocation.equals(other.getConsigneeCodedLocation()))) &&
            ((this.consigneeContactDetail==null && other.getConsigneeContactDetail()==null) || 
             (this.consigneeContactDetail!=null &&
              java.util.Arrays.equals(this.consigneeContactDetail, other.getConsigneeContactDetail())));
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
        if (getConsigneeAccountDetail() != null) {
            _hashCode += getConsigneeAccountDetail().hashCode();
        }
        if (getConsigneeName() != null) {
            _hashCode += getConsigneeName().hashCode();
        }
        if (getConsigneeStreetAddress() != null) {
            _hashCode += getConsigneeStreetAddress().hashCode();
        }
        if (getConsigneeLocation() != null) {
            _hashCode += getConsigneeLocation().hashCode();
        }
        if (getConsigneeCodedLocation() != null) {
            _hashCode += getConsigneeCodedLocation().hashCode();
        }
        if (getConsigneeContactDetail() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getConsigneeContactDetail());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getConsigneeContactDetail(), i);
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
        new org.apache.axis.description.TypeDesc(Consignee.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Consignee"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consigneeAccountDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ConsigneeAccountDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AccountDetail"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consigneeName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ConsigneeName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Name"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consigneeStreetAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ConsigneeStreetAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StreetAddress"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consigneeLocation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ConsigneeLocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Location"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consigneeCodedLocation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ConsigneeCodedLocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CodedLocation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consigneeContactDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ConsigneeContactDetail"));
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
