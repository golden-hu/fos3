/**
 * Notify.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class Notify  implements java.io.Serializable {
    private sg.com.ccn.www.CCNMSGWS.Name notifyName;

    private sg.com.ccn.www.CCNMSGWS.StreetAddress notifyStreetAddress;

    private sg.com.ccn.www.CCNMSGWS.Location notifyLocation;

    private sg.com.ccn.www.CCNMSGWS.CodedLocation notifyCodedLocation;

    private sg.com.ccn.www.CCNMSGWS.ContactDetail[] notifyContactDetail;

    public Notify() {
    }

    public Notify(
           sg.com.ccn.www.CCNMSGWS.Name notifyName,
           sg.com.ccn.www.CCNMSGWS.StreetAddress notifyStreetAddress,
           sg.com.ccn.www.CCNMSGWS.Location notifyLocation,
           sg.com.ccn.www.CCNMSGWS.CodedLocation notifyCodedLocation,
           sg.com.ccn.www.CCNMSGWS.ContactDetail[] notifyContactDetail) {
           this.notifyName = notifyName;
           this.notifyStreetAddress = notifyStreetAddress;
           this.notifyLocation = notifyLocation;
           this.notifyCodedLocation = notifyCodedLocation;
           this.notifyContactDetail = notifyContactDetail;
    }


    /**
     * Gets the notifyName value for this Notify.
     * 
     * @return notifyName
     */
    public sg.com.ccn.www.CCNMSGWS.Name getNotifyName() {
        return notifyName;
    }


    /**
     * Sets the notifyName value for this Notify.
     * 
     * @param notifyName
     */
    public void setNotifyName(sg.com.ccn.www.CCNMSGWS.Name notifyName) {
        this.notifyName = notifyName;
    }


    /**
     * Gets the notifyStreetAddress value for this Notify.
     * 
     * @return notifyStreetAddress
     */
    public sg.com.ccn.www.CCNMSGWS.StreetAddress getNotifyStreetAddress() {
        return notifyStreetAddress;
    }


    /**
     * Sets the notifyStreetAddress value for this Notify.
     * 
     * @param notifyStreetAddress
     */
    public void setNotifyStreetAddress(sg.com.ccn.www.CCNMSGWS.StreetAddress notifyStreetAddress) {
        this.notifyStreetAddress = notifyStreetAddress;
    }


    /**
     * Gets the notifyLocation value for this Notify.
     * 
     * @return notifyLocation
     */
    public sg.com.ccn.www.CCNMSGWS.Location getNotifyLocation() {
        return notifyLocation;
    }


    /**
     * Sets the notifyLocation value for this Notify.
     * 
     * @param notifyLocation
     */
    public void setNotifyLocation(sg.com.ccn.www.CCNMSGWS.Location notifyLocation) {
        this.notifyLocation = notifyLocation;
    }


    /**
     * Gets the notifyCodedLocation value for this Notify.
     * 
     * @return notifyCodedLocation
     */
    public sg.com.ccn.www.CCNMSGWS.CodedLocation getNotifyCodedLocation() {
        return notifyCodedLocation;
    }


    /**
     * Sets the notifyCodedLocation value for this Notify.
     * 
     * @param notifyCodedLocation
     */
    public void setNotifyCodedLocation(sg.com.ccn.www.CCNMSGWS.CodedLocation notifyCodedLocation) {
        this.notifyCodedLocation = notifyCodedLocation;
    }


    /**
     * Gets the notifyContactDetail value for this Notify.
     * 
     * @return notifyContactDetail
     */
    public sg.com.ccn.www.CCNMSGWS.ContactDetail[] getNotifyContactDetail() {
        return notifyContactDetail;
    }


    /**
     * Sets the notifyContactDetail value for this Notify.
     * 
     * @param notifyContactDetail
     */
    public void setNotifyContactDetail(sg.com.ccn.www.CCNMSGWS.ContactDetail[] notifyContactDetail) {
        this.notifyContactDetail = notifyContactDetail;
    }

    public sg.com.ccn.www.CCNMSGWS.ContactDetail getNotifyContactDetail(int i) {
        return this.notifyContactDetail[i];
    }

    public void setNotifyContactDetail(int i, sg.com.ccn.www.CCNMSGWS.ContactDetail _value) {
        this.notifyContactDetail[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Notify)) return false;
        Notify other = (Notify) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.notifyName==null && other.getNotifyName()==null) || 
             (this.notifyName!=null &&
              this.notifyName.equals(other.getNotifyName()))) &&
            ((this.notifyStreetAddress==null && other.getNotifyStreetAddress()==null) || 
             (this.notifyStreetAddress!=null &&
              this.notifyStreetAddress.equals(other.getNotifyStreetAddress()))) &&
            ((this.notifyLocation==null && other.getNotifyLocation()==null) || 
             (this.notifyLocation!=null &&
              this.notifyLocation.equals(other.getNotifyLocation()))) &&
            ((this.notifyCodedLocation==null && other.getNotifyCodedLocation()==null) || 
             (this.notifyCodedLocation!=null &&
              this.notifyCodedLocation.equals(other.getNotifyCodedLocation()))) &&
            ((this.notifyContactDetail==null && other.getNotifyContactDetail()==null) || 
             (this.notifyContactDetail!=null &&
              java.util.Arrays.equals(this.notifyContactDetail, other.getNotifyContactDetail())));
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
        if (getNotifyName() != null) {
            _hashCode += getNotifyName().hashCode();
        }
        if (getNotifyStreetAddress() != null) {
            _hashCode += getNotifyStreetAddress().hashCode();
        }
        if (getNotifyLocation() != null) {
            _hashCode += getNotifyLocation().hashCode();
        }
        if (getNotifyCodedLocation() != null) {
            _hashCode += getNotifyCodedLocation().hashCode();
        }
        if (getNotifyContactDetail() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getNotifyContactDetail());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getNotifyContactDetail(), i);
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
        new org.apache.axis.description.TypeDesc(Notify.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Notify"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("notifyName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NotifyName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Name"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("notifyStreetAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NotifyStreetAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StreetAddress"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("notifyLocation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NotifyLocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Location"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("notifyCodedLocation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NotifyCodedLocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CodedLocation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("notifyContactDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NotifyContactDetail"));
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
