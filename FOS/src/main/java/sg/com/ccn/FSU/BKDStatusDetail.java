/**
 * BKDStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class BKDStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail BKDMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail BKDQuantityDetail;

    private sg.com.ccn.FSU.TimeInformation BKDDepartureTime;

    private sg.com.ccn.FSU.TimeInformation BKDArrivalTime;

    private sg.com.ccn.FSU.VolumeDetail BKDVolumeDetail;

    private sg.com.ccn.FSU.DensityGroup BKDDensityGroup;

    public BKDStatusDetail() {
    }

    public BKDStatusDetail(
           sg.com.ccn.FSU.MovementDetail BKDMovementDetail,
           sg.com.ccn.FSU.QuantityDetail BKDQuantityDetail,
           sg.com.ccn.FSU.TimeInformation BKDDepartureTime,
           sg.com.ccn.FSU.TimeInformation BKDArrivalTime,
           sg.com.ccn.FSU.VolumeDetail BKDVolumeDetail,
           sg.com.ccn.FSU.DensityGroup BKDDensityGroup) {
           this.BKDMovementDetail = BKDMovementDetail;
           this.BKDQuantityDetail = BKDQuantityDetail;
           this.BKDDepartureTime = BKDDepartureTime;
           this.BKDArrivalTime = BKDArrivalTime;
           this.BKDVolumeDetail = BKDVolumeDetail;
           this.BKDDensityGroup = BKDDensityGroup;
    }


    /**
     * Gets the BKDMovementDetail value for this BKDStatusDetail.
     * 
     * @return BKDMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getBKDMovementDetail() {
        return BKDMovementDetail;
    }


    /**
     * Sets the BKDMovementDetail value for this BKDStatusDetail.
     * 
     * @param BKDMovementDetail
     */
    public void setBKDMovementDetail(sg.com.ccn.FSU.MovementDetail BKDMovementDetail) {
        this.BKDMovementDetail = BKDMovementDetail;
    }


    /**
     * Gets the BKDQuantityDetail value for this BKDStatusDetail.
     * 
     * @return BKDQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getBKDQuantityDetail() {
        return BKDQuantityDetail;
    }


    /**
     * Sets the BKDQuantityDetail value for this BKDStatusDetail.
     * 
     * @param BKDQuantityDetail
     */
    public void setBKDQuantityDetail(sg.com.ccn.FSU.QuantityDetail BKDQuantityDetail) {
        this.BKDQuantityDetail = BKDQuantityDetail;
    }


    /**
     * Gets the BKDDepartureTime value for this BKDStatusDetail.
     * 
     * @return BKDDepartureTime
     */
    public sg.com.ccn.FSU.TimeInformation getBKDDepartureTime() {
        return BKDDepartureTime;
    }


    /**
     * Sets the BKDDepartureTime value for this BKDStatusDetail.
     * 
     * @param BKDDepartureTime
     */
    public void setBKDDepartureTime(sg.com.ccn.FSU.TimeInformation BKDDepartureTime) {
        this.BKDDepartureTime = BKDDepartureTime;
    }


    /**
     * Gets the BKDArrivalTime value for this BKDStatusDetail.
     * 
     * @return BKDArrivalTime
     */
    public sg.com.ccn.FSU.TimeInformation getBKDArrivalTime() {
        return BKDArrivalTime;
    }


    /**
     * Sets the BKDArrivalTime value for this BKDStatusDetail.
     * 
     * @param BKDArrivalTime
     */
    public void setBKDArrivalTime(sg.com.ccn.FSU.TimeInformation BKDArrivalTime) {
        this.BKDArrivalTime = BKDArrivalTime;
    }


    /**
     * Gets the BKDVolumeDetail value for this BKDStatusDetail.
     * 
     * @return BKDVolumeDetail
     */
    public sg.com.ccn.FSU.VolumeDetail getBKDVolumeDetail() {
        return BKDVolumeDetail;
    }


    /**
     * Sets the BKDVolumeDetail value for this BKDStatusDetail.
     * 
     * @param BKDVolumeDetail
     */
    public void setBKDVolumeDetail(sg.com.ccn.FSU.VolumeDetail BKDVolumeDetail) {
        this.BKDVolumeDetail = BKDVolumeDetail;
    }


    /**
     * Gets the BKDDensityGroup value for this BKDStatusDetail.
     * 
     * @return BKDDensityGroup
     */
    public sg.com.ccn.FSU.DensityGroup getBKDDensityGroup() {
        return BKDDensityGroup;
    }


    /**
     * Sets the BKDDensityGroup value for this BKDStatusDetail.
     * 
     * @param BKDDensityGroup
     */
    public void setBKDDensityGroup(sg.com.ccn.FSU.DensityGroup BKDDensityGroup) {
        this.BKDDensityGroup = BKDDensityGroup;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof BKDStatusDetail)) return false;
        BKDStatusDetail other = (BKDStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.BKDMovementDetail==null && other.getBKDMovementDetail()==null) || 
             (this.BKDMovementDetail!=null &&
              this.BKDMovementDetail.equals(other.getBKDMovementDetail()))) &&
            ((this.BKDQuantityDetail==null && other.getBKDQuantityDetail()==null) || 
             (this.BKDQuantityDetail!=null &&
              this.BKDQuantityDetail.equals(other.getBKDQuantityDetail()))) &&
            ((this.BKDDepartureTime==null && other.getBKDDepartureTime()==null) || 
             (this.BKDDepartureTime!=null &&
              this.BKDDepartureTime.equals(other.getBKDDepartureTime()))) &&
            ((this.BKDArrivalTime==null && other.getBKDArrivalTime()==null) || 
             (this.BKDArrivalTime!=null &&
              this.BKDArrivalTime.equals(other.getBKDArrivalTime()))) &&
            ((this.BKDVolumeDetail==null && other.getBKDVolumeDetail()==null) || 
             (this.BKDVolumeDetail!=null &&
              this.BKDVolumeDetail.equals(other.getBKDVolumeDetail()))) &&
            ((this.BKDDensityGroup==null && other.getBKDDensityGroup()==null) || 
             (this.BKDDensityGroup!=null &&
              this.BKDDensityGroup.equals(other.getBKDDensityGroup())));
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
        if (getBKDMovementDetail() != null) {
            _hashCode += getBKDMovementDetail().hashCode();
        }
        if (getBKDQuantityDetail() != null) {
            _hashCode += getBKDQuantityDetail().hashCode();
        }
        if (getBKDDepartureTime() != null) {
            _hashCode += getBKDDepartureTime().hashCode();
        }
        if (getBKDArrivalTime() != null) {
            _hashCode += getBKDArrivalTime().hashCode();
        }
        if (getBKDVolumeDetail() != null) {
            _hashCode += getBKDVolumeDetail().hashCode();
        }
        if (getBKDDensityGroup() != null) {
            _hashCode += getBKDDensityGroup().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(BKDStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "BKDStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("BKDMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "BKDMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("BKDQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "BKDQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("BKDDepartureTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "BKDDepartureTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TimeInformation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("BKDArrivalTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "BKDArrivalTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TimeInformation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("BKDVolumeDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "BKDVolumeDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "VolumeDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("BKDDensityGroup");
        elemField.setXmlName(new javax.xml.namespace.QName("", "BKDDensityGroup"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DensityGroup"));
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
