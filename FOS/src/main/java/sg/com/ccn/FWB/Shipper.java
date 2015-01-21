/**
 * Shipper.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class Shipper  implements java.io.Serializable {
    private sg.com.ccn.FWB.AccountDetail shipperAccountDetail;

    private sg.com.ccn.FWB.Name shipperName;

    private sg.com.ccn.FWB.StreetAddress shipperStreetAddress;

    private sg.com.ccn.FWB.Location shipperLocation;

    private sg.com.ccn.FWB.CodedLocation shipperCodedLocation;

    private sg.com.ccn.FWB.ContactDetail[] shipperContactDetail;

    public Shipper() {
    }

    public Shipper(
           sg.com.ccn.FWB.AccountDetail shipperAccountDetail,
           sg.com.ccn.FWB.Name shipperName,
           sg.com.ccn.FWB.StreetAddress shipperStreetAddress,
           sg.com.ccn.FWB.Location shipperLocation,
           sg.com.ccn.FWB.CodedLocation shipperCodedLocation,
           sg.com.ccn.FWB.ContactDetail[] shipperContactDetail) {
           this.shipperAccountDetail = shipperAccountDetail;
           this.shipperName = shipperName;
           this.shipperStreetAddress = shipperStreetAddress;
           this.shipperLocation = shipperLocation;
           this.shipperCodedLocation = shipperCodedLocation;
           this.shipperContactDetail = shipperContactDetail;
    }


    /**
     * Gets the shipperAccountDetail value for this Shipper.
     * 
     * @return shipperAccountDetail
     */
    public sg.com.ccn.FWB.AccountDetail getShipperAccountDetail() {
        return shipperAccountDetail;
    }


    /**
     * Sets the shipperAccountDetail value for this Shipper.
     * 
     * @param shipperAccountDetail
     */
    public void setShipperAccountDetail(sg.com.ccn.FWB.AccountDetail shipperAccountDetail) {
        this.shipperAccountDetail = shipperAccountDetail;
    }


    /**
     * Gets the shipperName value for this Shipper.
     * 
     * @return shipperName
     */
    public sg.com.ccn.FWB.Name getShipperName() {
        return shipperName;
    }


    /**
     * Sets the shipperName value for this Shipper.
     * 
     * @param shipperName
     */
    public void setShipperName(sg.com.ccn.FWB.Name shipperName) {
        this.shipperName = shipperName;
    }


    /**
     * Gets the shipperStreetAddress value for this Shipper.
     * 
     * @return shipperStreetAddress
     */
    public sg.com.ccn.FWB.StreetAddress getShipperStreetAddress() {
        return shipperStreetAddress;
    }


    /**
     * Sets the shipperStreetAddress value for this Shipper.
     * 
     * @param shipperStreetAddress
     */
    public void setShipperStreetAddress(sg.com.ccn.FWB.StreetAddress shipperStreetAddress) {
        this.shipperStreetAddress = shipperStreetAddress;
    }


    /**
     * Gets the shipperLocation value for this Shipper.
     * 
     * @return shipperLocation
     */
    public sg.com.ccn.FWB.Location getShipperLocation() {
        return shipperLocation;
    }


    /**
     * Sets the shipperLocation value for this Shipper.
     * 
     * @param shipperLocation
     */
    public void setShipperLocation(sg.com.ccn.FWB.Location shipperLocation) {
        this.shipperLocation = shipperLocation;
    }


    /**
     * Gets the shipperCodedLocation value for this Shipper.
     * 
     * @return shipperCodedLocation
     */
    public sg.com.ccn.FWB.CodedLocation getShipperCodedLocation() {
        return shipperCodedLocation;
    }


    /**
     * Sets the shipperCodedLocation value for this Shipper.
     * 
     * @param shipperCodedLocation
     */
    public void setShipperCodedLocation(sg.com.ccn.FWB.CodedLocation shipperCodedLocation) {
        this.shipperCodedLocation = shipperCodedLocation;
    }


    /**
     * Gets the shipperContactDetail value for this Shipper.
     * 
     * @return shipperContactDetail
     */
    public sg.com.ccn.FWB.ContactDetail[] getShipperContactDetail() {
        return shipperContactDetail;
    }


    /**
     * Sets the shipperContactDetail value for this Shipper.
     * 
     * @param shipperContactDetail
     */
    public void setShipperContactDetail(sg.com.ccn.FWB.ContactDetail[] shipperContactDetail) {
        this.shipperContactDetail = shipperContactDetail;
    }

    public sg.com.ccn.FWB.ContactDetail getShipperContactDetail(int i) {
        return this.shipperContactDetail[i];
    }

    public void setShipperContactDetail(int i, sg.com.ccn.FWB.ContactDetail _value) {
        this.shipperContactDetail[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Shipper)) return false;
        Shipper other = (Shipper) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.shipperAccountDetail==null && other.getShipperAccountDetail()==null) || 
             (this.shipperAccountDetail!=null &&
              this.shipperAccountDetail.equals(other.getShipperAccountDetail()))) &&
            ((this.shipperName==null && other.getShipperName()==null) || 
             (this.shipperName!=null &&
              this.shipperName.equals(other.getShipperName()))) &&
            ((this.shipperStreetAddress==null && other.getShipperStreetAddress()==null) || 
             (this.shipperStreetAddress!=null &&
              this.shipperStreetAddress.equals(other.getShipperStreetAddress()))) &&
            ((this.shipperLocation==null && other.getShipperLocation()==null) || 
             (this.shipperLocation!=null &&
              this.shipperLocation.equals(other.getShipperLocation()))) &&
            ((this.shipperCodedLocation==null && other.getShipperCodedLocation()==null) || 
             (this.shipperCodedLocation!=null &&
              this.shipperCodedLocation.equals(other.getShipperCodedLocation()))) &&
            ((this.shipperContactDetail==null && other.getShipperContactDetail()==null) || 
             (this.shipperContactDetail!=null &&
              java.util.Arrays.equals(this.shipperContactDetail, other.getShipperContactDetail())));
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
        if (getShipperAccountDetail() != null) {
            _hashCode += getShipperAccountDetail().hashCode();
        }
        if (getShipperName() != null) {
            _hashCode += getShipperName().hashCode();
        }
        if (getShipperStreetAddress() != null) {
            _hashCode += getShipperStreetAddress().hashCode();
        }
        if (getShipperLocation() != null) {
            _hashCode += getShipperLocation().hashCode();
        }
        if (getShipperCodedLocation() != null) {
            _hashCode += getShipperCodedLocation().hashCode();
        }
        if (getShipperContactDetail() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getShipperContactDetail());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getShipperContactDetail(), i);
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
        new org.apache.axis.description.TypeDesc(Shipper.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Shipper"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipperAccountDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipperAccountDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AccountDetail"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipperName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipperName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Name"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipperStreetAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipperStreetAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StreetAddress"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipperLocation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipperLocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Location"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipperCodedLocation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipperCodedLocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CodedLocation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipperContactDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipperContactDetail"));
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
