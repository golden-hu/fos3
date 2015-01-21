/**
 * FOHStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class FOHStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.FOHMovementDetail FOHMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail FOHQuantityDetail;

    private sg.com.ccn.FSU.ReceivedFromDetail FOHReceivedFromDetail;

    private sg.com.ccn.FSU.VolumeDetail FOHVolumeDetail;

    private sg.com.ccn.FSU.DensityGroup FOHDensityGroup;

    public FOHStatusDetail() {
    }

    public FOHStatusDetail(
           sg.com.ccn.FSU.FOHMovementDetail FOHMovementDetail,
           sg.com.ccn.FSU.QuantityDetail FOHQuantityDetail,
           sg.com.ccn.FSU.ReceivedFromDetail FOHReceivedFromDetail,
           sg.com.ccn.FSU.VolumeDetail FOHVolumeDetail,
           sg.com.ccn.FSU.DensityGroup FOHDensityGroup) {
           this.FOHMovementDetail = FOHMovementDetail;
           this.FOHQuantityDetail = FOHQuantityDetail;
           this.FOHReceivedFromDetail = FOHReceivedFromDetail;
           this.FOHVolumeDetail = FOHVolumeDetail;
           this.FOHDensityGroup = FOHDensityGroup;
    }


    /**
     * Gets the FOHMovementDetail value for this FOHStatusDetail.
     * 
     * @return FOHMovementDetail
     */
    public sg.com.ccn.FSU.FOHMovementDetail getFOHMovementDetail() {
        return FOHMovementDetail;
    }


    /**
     * Sets the FOHMovementDetail value for this FOHStatusDetail.
     * 
     * @param FOHMovementDetail
     */
    public void setFOHMovementDetail(sg.com.ccn.FSU.FOHMovementDetail FOHMovementDetail) {
        this.FOHMovementDetail = FOHMovementDetail;
    }


    /**
     * Gets the FOHQuantityDetail value for this FOHStatusDetail.
     * 
     * @return FOHQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getFOHQuantityDetail() {
        return FOHQuantityDetail;
    }


    /**
     * Sets the FOHQuantityDetail value for this FOHStatusDetail.
     * 
     * @param FOHQuantityDetail
     */
    public void setFOHQuantityDetail(sg.com.ccn.FSU.QuantityDetail FOHQuantityDetail) {
        this.FOHQuantityDetail = FOHQuantityDetail;
    }


    /**
     * Gets the FOHReceivedFromDetail value for this FOHStatusDetail.
     * 
     * @return FOHReceivedFromDetail
     */
    public sg.com.ccn.FSU.ReceivedFromDetail getFOHReceivedFromDetail() {
        return FOHReceivedFromDetail;
    }


    /**
     * Sets the FOHReceivedFromDetail value for this FOHStatusDetail.
     * 
     * @param FOHReceivedFromDetail
     */
    public void setFOHReceivedFromDetail(sg.com.ccn.FSU.ReceivedFromDetail FOHReceivedFromDetail) {
        this.FOHReceivedFromDetail = FOHReceivedFromDetail;
    }


    /**
     * Gets the FOHVolumeDetail value for this FOHStatusDetail.
     * 
     * @return FOHVolumeDetail
     */
    public sg.com.ccn.FSU.VolumeDetail getFOHVolumeDetail() {
        return FOHVolumeDetail;
    }


    /**
     * Sets the FOHVolumeDetail value for this FOHStatusDetail.
     * 
     * @param FOHVolumeDetail
     */
    public void setFOHVolumeDetail(sg.com.ccn.FSU.VolumeDetail FOHVolumeDetail) {
        this.FOHVolumeDetail = FOHVolumeDetail;
    }


    /**
     * Gets the FOHDensityGroup value for this FOHStatusDetail.
     * 
     * @return FOHDensityGroup
     */
    public sg.com.ccn.FSU.DensityGroup getFOHDensityGroup() {
        return FOHDensityGroup;
    }


    /**
     * Sets the FOHDensityGroup value for this FOHStatusDetail.
     * 
     * @param FOHDensityGroup
     */
    public void setFOHDensityGroup(sg.com.ccn.FSU.DensityGroup FOHDensityGroup) {
        this.FOHDensityGroup = FOHDensityGroup;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FOHStatusDetail)) return false;
        FOHStatusDetail other = (FOHStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.FOHMovementDetail==null && other.getFOHMovementDetail()==null) || 
             (this.FOHMovementDetail!=null &&
              this.FOHMovementDetail.equals(other.getFOHMovementDetail()))) &&
            ((this.FOHQuantityDetail==null && other.getFOHQuantityDetail()==null) || 
             (this.FOHQuantityDetail!=null &&
              this.FOHQuantityDetail.equals(other.getFOHQuantityDetail()))) &&
            ((this.FOHReceivedFromDetail==null && other.getFOHReceivedFromDetail()==null) || 
             (this.FOHReceivedFromDetail!=null &&
              this.FOHReceivedFromDetail.equals(other.getFOHReceivedFromDetail()))) &&
            ((this.FOHVolumeDetail==null && other.getFOHVolumeDetail()==null) || 
             (this.FOHVolumeDetail!=null &&
              this.FOHVolumeDetail.equals(other.getFOHVolumeDetail()))) &&
            ((this.FOHDensityGroup==null && other.getFOHDensityGroup()==null) || 
             (this.FOHDensityGroup!=null &&
              this.FOHDensityGroup.equals(other.getFOHDensityGroup())));
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
        if (getFOHMovementDetail() != null) {
            _hashCode += getFOHMovementDetail().hashCode();
        }
        if (getFOHQuantityDetail() != null) {
            _hashCode += getFOHQuantityDetail().hashCode();
        }
        if (getFOHReceivedFromDetail() != null) {
            _hashCode += getFOHReceivedFromDetail().hashCode();
        }
        if (getFOHVolumeDetail() != null) {
            _hashCode += getFOHVolumeDetail().hashCode();
        }
        if (getFOHDensityGroup() != null) {
            _hashCode += getFOHDensityGroup().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FOHStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FOHStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("FOHMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FOHMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FOHMovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("FOHQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FOHQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("FOHReceivedFromDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FOHReceivedFromDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ReceivedFromDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("FOHVolumeDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FOHVolumeDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "VolumeDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("FOHDensityGroup");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FOHDensityGroup"));
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
