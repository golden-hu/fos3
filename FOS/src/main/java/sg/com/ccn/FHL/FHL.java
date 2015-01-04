/**
 * FHL.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class FHL  implements java.io.Serializable {
    private sg.com.ccn.FHL.StandardMessageIdentification standardMessageIdentification;

    private sg.com.ccn.FHL.MasterAWBConsignmentDetail masterAWBConsignmentDetail;

    private sg.com.ccn.FHL.HouseAndFreeTextGroup houseAndFreeTextGroup;

    private sg.com.ccn.FHL.ShipperNameAndAddress shipperNameAndAddress;

    private sg.com.ccn.FHL.ConsigneeNameAndAddress consigneeNameAndAddress;

    private sg.com.ccn.FHL.ChargeDeclarations chargeDeclarations;

    private sg.com.ccn.FHL.ParticipantDetail AAIParticipantDetail;

    private sg.com.ccn.FHL.TSPDetail AAITSPDetail;

    public FHL() {
    }

    public FHL(
           sg.com.ccn.FHL.StandardMessageIdentification standardMessageIdentification,
           sg.com.ccn.FHL.MasterAWBConsignmentDetail masterAWBConsignmentDetail,
           sg.com.ccn.FHL.HouseAndFreeTextGroup houseAndFreeTextGroup,
           sg.com.ccn.FHL.ShipperNameAndAddress shipperNameAndAddress,
           sg.com.ccn.FHL.ConsigneeNameAndAddress consigneeNameAndAddress,
           sg.com.ccn.FHL.ChargeDeclarations chargeDeclarations,
           sg.com.ccn.FHL.ParticipantDetail AAIParticipantDetail,
           sg.com.ccn.FHL.TSPDetail AAITSPDetail) {
           this.standardMessageIdentification = standardMessageIdentification;
           this.masterAWBConsignmentDetail = masterAWBConsignmentDetail;
           this.houseAndFreeTextGroup = houseAndFreeTextGroup;
           this.shipperNameAndAddress = shipperNameAndAddress;
           this.consigneeNameAndAddress = consigneeNameAndAddress;
           this.chargeDeclarations = chargeDeclarations;
           this.AAIParticipantDetail = AAIParticipantDetail;
           this.AAITSPDetail = AAITSPDetail;
    }


    /**
     * Gets the standardMessageIdentification value for this FHL.
     * 
     * @return standardMessageIdentification
     */
    public sg.com.ccn.FHL.StandardMessageIdentification getStandardMessageIdentification() {
        return standardMessageIdentification;
    }


    /**
     * Sets the standardMessageIdentification value for this FHL.
     * 
     * @param standardMessageIdentification
     */
    public void setStandardMessageIdentification(sg.com.ccn.FHL.StandardMessageIdentification standardMessageIdentification) {
        this.standardMessageIdentification = standardMessageIdentification;
    }


    /**
     * Gets the masterAWBConsignmentDetail value for this FHL.
     * 
     * @return masterAWBConsignmentDetail
     */
    public sg.com.ccn.FHL.MasterAWBConsignmentDetail getMasterAWBConsignmentDetail() {
        return masterAWBConsignmentDetail;
    }


    /**
     * Sets the masterAWBConsignmentDetail value for this FHL.
     * 
     * @param masterAWBConsignmentDetail
     */
    public void setMasterAWBConsignmentDetail(sg.com.ccn.FHL.MasterAWBConsignmentDetail masterAWBConsignmentDetail) {
        this.masterAWBConsignmentDetail = masterAWBConsignmentDetail;
    }


    /**
     * Gets the houseAndFreeTextGroup value for this FHL.
     * 
     * @return houseAndFreeTextGroup
     */
    public sg.com.ccn.FHL.HouseAndFreeTextGroup getHouseAndFreeTextGroup() {
        return houseAndFreeTextGroup;
    }


    /**
     * Sets the houseAndFreeTextGroup value for this FHL.
     * 
     * @param houseAndFreeTextGroup
     */
    public void setHouseAndFreeTextGroup(sg.com.ccn.FHL.HouseAndFreeTextGroup houseAndFreeTextGroup) {
        this.houseAndFreeTextGroup = houseAndFreeTextGroup;
    }


    /**
     * Gets the shipperNameAndAddress value for this FHL.
     * 
     * @return shipperNameAndAddress
     */
    public sg.com.ccn.FHL.ShipperNameAndAddress getShipperNameAndAddress() {
        return shipperNameAndAddress;
    }


    /**
     * Sets the shipperNameAndAddress value for this FHL.
     * 
     * @param shipperNameAndAddress
     */
    public void setShipperNameAndAddress(sg.com.ccn.FHL.ShipperNameAndAddress shipperNameAndAddress) {
        this.shipperNameAndAddress = shipperNameAndAddress;
    }


    /**
     * Gets the consigneeNameAndAddress value for this FHL.
     * 
     * @return consigneeNameAndAddress
     */
    public sg.com.ccn.FHL.ConsigneeNameAndAddress getConsigneeNameAndAddress() {
        return consigneeNameAndAddress;
    }


    /**
     * Sets the consigneeNameAndAddress value for this FHL.
     * 
     * @param consigneeNameAndAddress
     */
    public void setConsigneeNameAndAddress(sg.com.ccn.FHL.ConsigneeNameAndAddress consigneeNameAndAddress) {
        this.consigneeNameAndAddress = consigneeNameAndAddress;
    }


    /**
     * Gets the chargeDeclarations value for this FHL.
     * 
     * @return chargeDeclarations
     */
    public sg.com.ccn.FHL.ChargeDeclarations getChargeDeclarations() {
        return chargeDeclarations;
    }


    /**
     * Sets the chargeDeclarations value for this FHL.
     * 
     * @param chargeDeclarations
     */
    public void setChargeDeclarations(sg.com.ccn.FHL.ChargeDeclarations chargeDeclarations) {
        this.chargeDeclarations = chargeDeclarations;
    }


    /**
     * Gets the AAIParticipantDetail value for this FHL.
     * 
     * @return AAIParticipantDetail
     */
    public sg.com.ccn.FHL.ParticipantDetail getAAIParticipantDetail() {
        return AAIParticipantDetail;
    }


    /**
     * Sets the AAIParticipantDetail value for this FHL.
     * 
     * @param AAIParticipantDetail
     */
    public void setAAIParticipantDetail(sg.com.ccn.FHL.ParticipantDetail AAIParticipantDetail) {
        this.AAIParticipantDetail = AAIParticipantDetail;
    }


    /**
     * Gets the AAITSPDetail value for this FHL.
     * 
     * @return AAITSPDetail
     */
    public sg.com.ccn.FHL.TSPDetail getAAITSPDetail() {
        return AAITSPDetail;
    }


    /**
     * Sets the AAITSPDetail value for this FHL.
     * 
     * @param AAITSPDetail
     */
    public void setAAITSPDetail(sg.com.ccn.FHL.TSPDetail AAITSPDetail) {
        this.AAITSPDetail = AAITSPDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FHL)) return false;
        FHL other = (FHL) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.standardMessageIdentification==null && other.getStandardMessageIdentification()==null) || 
             (this.standardMessageIdentification!=null &&
              this.standardMessageIdentification.equals(other.getStandardMessageIdentification()))) &&
            ((this.masterAWBConsignmentDetail==null && other.getMasterAWBConsignmentDetail()==null) || 
             (this.masterAWBConsignmentDetail!=null &&
              this.masterAWBConsignmentDetail.equals(other.getMasterAWBConsignmentDetail()))) &&
            ((this.houseAndFreeTextGroup==null && other.getHouseAndFreeTextGroup()==null) || 
             (this.houseAndFreeTextGroup!=null &&
              this.houseAndFreeTextGroup.equals(other.getHouseAndFreeTextGroup()))) &&
            ((this.shipperNameAndAddress==null && other.getShipperNameAndAddress()==null) || 
             (this.shipperNameAndAddress!=null &&
              this.shipperNameAndAddress.equals(other.getShipperNameAndAddress()))) &&
            ((this.consigneeNameAndAddress==null && other.getConsigneeNameAndAddress()==null) || 
             (this.consigneeNameAndAddress!=null &&
              this.consigneeNameAndAddress.equals(other.getConsigneeNameAndAddress()))) &&
            ((this.chargeDeclarations==null && other.getChargeDeclarations()==null) || 
             (this.chargeDeclarations!=null &&
              this.chargeDeclarations.equals(other.getChargeDeclarations()))) &&
            ((this.AAIParticipantDetail==null && other.getAAIParticipantDetail()==null) || 
             (this.AAIParticipantDetail!=null &&
              this.AAIParticipantDetail.equals(other.getAAIParticipantDetail()))) &&
            ((this.AAITSPDetail==null && other.getAAITSPDetail()==null) || 
             (this.AAITSPDetail!=null &&
              this.AAITSPDetail.equals(other.getAAITSPDetail())));
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
        if (getStandardMessageIdentification() != null) {
            _hashCode += getStandardMessageIdentification().hashCode();
        }
        if (getMasterAWBConsignmentDetail() != null) {
            _hashCode += getMasterAWBConsignmentDetail().hashCode();
        }
        if (getHouseAndFreeTextGroup() != null) {
            _hashCode += getHouseAndFreeTextGroup().hashCode();
        }
        if (getShipperNameAndAddress() != null) {
            _hashCode += getShipperNameAndAddress().hashCode();
        }
        if (getConsigneeNameAndAddress() != null) {
            _hashCode += getConsigneeNameAndAddress().hashCode();
        }
        if (getChargeDeclarations() != null) {
            _hashCode += getChargeDeclarations().hashCode();
        }
        if (getAAIParticipantDetail() != null) {
            _hashCode += getAAIParticipantDetail().hashCode();
        }
        if (getAAITSPDetail() != null) {
            _hashCode += getAAITSPDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FHL.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FHL"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("standardMessageIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "StandardMessageIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StandardMessageIdentification"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("masterAWBConsignmentDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MasterAWBConsignmentDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MasterAWBConsignmentDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("houseAndFreeTextGroup");
        elemField.setXmlName(new javax.xml.namespace.QName("", "HouseAndFreeTextGroup"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "HouseAndFreeTextGroup"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipperNameAndAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipperNameAndAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ShipperNameAndAddress"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consigneeNameAndAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ConsigneeNameAndAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ConsigneeNameAndAddress"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("chargeDeclarations");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ChargeDeclarations"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeDeclarations"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AAIParticipantDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AAIParticipantDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ParticipantDetail"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AAITSPDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AAITSPDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TSPDetail"));
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
