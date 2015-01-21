/**
 * RCSStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class RCSStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail RCSMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail RCSQuantityDetail;

    private sg.com.ccn.FSU.ReceivedFromDetail RCSReceivedFromDetail;

    private sg.com.ccn.FSU.VolumeDetail RCSVolumeDetail;

    private sg.com.ccn.FSU.DensityGroup RCSDensityGroupDetail;

    public RCSStatusDetail() {
    }

    public RCSStatusDetail(
           sg.com.ccn.FSU.MovementDetail RCSMovementDetail,
           sg.com.ccn.FSU.QuantityDetail RCSQuantityDetail,
           sg.com.ccn.FSU.ReceivedFromDetail RCSReceivedFromDetail,
           sg.com.ccn.FSU.VolumeDetail RCSVolumeDetail,
           sg.com.ccn.FSU.DensityGroup RCSDensityGroupDetail) {
           this.RCSMovementDetail = RCSMovementDetail;
           this.RCSQuantityDetail = RCSQuantityDetail;
           this.RCSReceivedFromDetail = RCSReceivedFromDetail;
           this.RCSVolumeDetail = RCSVolumeDetail;
           this.RCSDensityGroupDetail = RCSDensityGroupDetail;
    }


    /**
     * Gets the RCSMovementDetail value for this RCSStatusDetail.
     * 
     * @return RCSMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getRCSMovementDetail() {
        return RCSMovementDetail;
    }


    /**
     * Sets the RCSMovementDetail value for this RCSStatusDetail.
     * 
     * @param RCSMovementDetail
     */
    public void setRCSMovementDetail(sg.com.ccn.FSU.MovementDetail RCSMovementDetail) {
        this.RCSMovementDetail = RCSMovementDetail;
    }


    /**
     * Gets the RCSQuantityDetail value for this RCSStatusDetail.
     * 
     * @return RCSQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getRCSQuantityDetail() {
        return RCSQuantityDetail;
    }


    /**
     * Sets the RCSQuantityDetail value for this RCSStatusDetail.
     * 
     * @param RCSQuantityDetail
     */
    public void setRCSQuantityDetail(sg.com.ccn.FSU.QuantityDetail RCSQuantityDetail) {
        this.RCSQuantityDetail = RCSQuantityDetail;
    }


    /**
     * Gets the RCSReceivedFromDetail value for this RCSStatusDetail.
     * 
     * @return RCSReceivedFromDetail
     */
    public sg.com.ccn.FSU.ReceivedFromDetail getRCSReceivedFromDetail() {
        return RCSReceivedFromDetail;
    }


    /**
     * Sets the RCSReceivedFromDetail value for this RCSStatusDetail.
     * 
     * @param RCSReceivedFromDetail
     */
    public void setRCSReceivedFromDetail(sg.com.ccn.FSU.ReceivedFromDetail RCSReceivedFromDetail) {
        this.RCSReceivedFromDetail = RCSReceivedFromDetail;
    }


    /**
     * Gets the RCSVolumeDetail value for this RCSStatusDetail.
     * 
     * @return RCSVolumeDetail
     */
    public sg.com.ccn.FSU.VolumeDetail getRCSVolumeDetail() {
        return RCSVolumeDetail;
    }


    /**
     * Sets the RCSVolumeDetail value for this RCSStatusDetail.
     * 
     * @param RCSVolumeDetail
     */
    public void setRCSVolumeDetail(sg.com.ccn.FSU.VolumeDetail RCSVolumeDetail) {
        this.RCSVolumeDetail = RCSVolumeDetail;
    }


    /**
     * Gets the RCSDensityGroupDetail value for this RCSStatusDetail.
     * 
     * @return RCSDensityGroupDetail
     */
    public sg.com.ccn.FSU.DensityGroup getRCSDensityGroupDetail() {
        return RCSDensityGroupDetail;
    }


    /**
     * Sets the RCSDensityGroupDetail value for this RCSStatusDetail.
     * 
     * @param RCSDensityGroupDetail
     */
    public void setRCSDensityGroupDetail(sg.com.ccn.FSU.DensityGroup RCSDensityGroupDetail) {
        this.RCSDensityGroupDetail = RCSDensityGroupDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof RCSStatusDetail)) return false;
        RCSStatusDetail other = (RCSStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.RCSMovementDetail==null && other.getRCSMovementDetail()==null) || 
             (this.RCSMovementDetail!=null &&
              this.RCSMovementDetail.equals(other.getRCSMovementDetail()))) &&
            ((this.RCSQuantityDetail==null && other.getRCSQuantityDetail()==null) || 
             (this.RCSQuantityDetail!=null &&
              this.RCSQuantityDetail.equals(other.getRCSQuantityDetail()))) &&
            ((this.RCSReceivedFromDetail==null && other.getRCSReceivedFromDetail()==null) || 
             (this.RCSReceivedFromDetail!=null &&
              this.RCSReceivedFromDetail.equals(other.getRCSReceivedFromDetail()))) &&
            ((this.RCSVolumeDetail==null && other.getRCSVolumeDetail()==null) || 
             (this.RCSVolumeDetail!=null &&
              this.RCSVolumeDetail.equals(other.getRCSVolumeDetail()))) &&
            ((this.RCSDensityGroupDetail==null && other.getRCSDensityGroupDetail()==null) || 
             (this.RCSDensityGroupDetail!=null &&
              this.RCSDensityGroupDetail.equals(other.getRCSDensityGroupDetail())));
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
        if (getRCSMovementDetail() != null) {
            _hashCode += getRCSMovementDetail().hashCode();
        }
        if (getRCSQuantityDetail() != null) {
            _hashCode += getRCSQuantityDetail().hashCode();
        }
        if (getRCSReceivedFromDetail() != null) {
            _hashCode += getRCSReceivedFromDetail().hashCode();
        }
        if (getRCSVolumeDetail() != null) {
            _hashCode += getRCSVolumeDetail().hashCode();
        }
        if (getRCSDensityGroupDetail() != null) {
            _hashCode += getRCSDensityGroupDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(RCSStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "RCSStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCSMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCSMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCSQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCSQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCSReceivedFromDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCSReceivedFromDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ReceivedFromDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCSVolumeDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCSVolumeDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "VolumeDetail"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCSDensityGroupDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCSDensityGroupDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DensityGroup"));
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
