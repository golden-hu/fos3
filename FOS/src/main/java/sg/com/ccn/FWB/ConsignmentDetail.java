/**
 * ConsignmentDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class ConsignmentDetail  implements java.io.Serializable {
    private sg.com.ccn.FWB.AWBIdentification AWBIdentification;

    private sg.com.ccn.FWB.AWBOriginAndDestination AWBOriginAndDestination;

    private sg.com.ccn.FWB.QuantityDetail quantityDetail;

    private sg.com.ccn.FWB.Volume volumeDetail;

    private sg.com.ccn.FWB.DensityGroup densityGroup;

    public ConsignmentDetail() {
    }

    public ConsignmentDetail(
           sg.com.ccn.FWB.AWBIdentification AWBIdentification,
           sg.com.ccn.FWB.AWBOriginAndDestination AWBOriginAndDestination,
           sg.com.ccn.FWB.QuantityDetail quantityDetail,
           sg.com.ccn.FWB.Volume volumeDetail,
           sg.com.ccn.FWB.DensityGroup densityGroup) {
           this.AWBIdentification = AWBIdentification;
           this.AWBOriginAndDestination = AWBOriginAndDestination;
           this.quantityDetail = quantityDetail;
           this.volumeDetail = volumeDetail;
           this.densityGroup = densityGroup;
    }


    /**
     * Gets the AWBIdentification value for this ConsignmentDetail.
     * 
     * @return AWBIdentification
     */
    public sg.com.ccn.FWB.AWBIdentification getAWBIdentification() {
        return AWBIdentification;
    }


    /**
     * Sets the AWBIdentification value for this ConsignmentDetail.
     * 
     * @param AWBIdentification
     */
    public void setAWBIdentification(sg.com.ccn.FWB.AWBIdentification AWBIdentification) {
        this.AWBIdentification = AWBIdentification;
    }


    /**
     * Gets the AWBOriginAndDestination value for this ConsignmentDetail.
     * 
     * @return AWBOriginAndDestination
     */
    public sg.com.ccn.FWB.AWBOriginAndDestination getAWBOriginAndDestination() {
        return AWBOriginAndDestination;
    }


    /**
     * Sets the AWBOriginAndDestination value for this ConsignmentDetail.
     * 
     * @param AWBOriginAndDestination
     */
    public void setAWBOriginAndDestination(sg.com.ccn.FWB.AWBOriginAndDestination AWBOriginAndDestination) {
        this.AWBOriginAndDestination = AWBOriginAndDestination;
    }


    /**
     * Gets the quantityDetail value for this ConsignmentDetail.
     * 
     * @return quantityDetail
     */
    public sg.com.ccn.FWB.QuantityDetail getQuantityDetail() {
        return quantityDetail;
    }


    /**
     * Sets the quantityDetail value for this ConsignmentDetail.
     * 
     * @param quantityDetail
     */
    public void setQuantityDetail(sg.com.ccn.FWB.QuantityDetail quantityDetail) {
        this.quantityDetail = quantityDetail;
    }


    /**
     * Gets the volumeDetail value for this ConsignmentDetail.
     * 
     * @return volumeDetail
     */
    public sg.com.ccn.FWB.Volume getVolumeDetail() {
        return volumeDetail;
    }


    /**
     * Sets the volumeDetail value for this ConsignmentDetail.
     * 
     * @param volumeDetail
     */
    public void setVolumeDetail(sg.com.ccn.FWB.Volume volumeDetail) {
        this.volumeDetail = volumeDetail;
    }


    /**
     * Gets the densityGroup value for this ConsignmentDetail.
     * 
     * @return densityGroup
     */
    public sg.com.ccn.FWB.DensityGroup getDensityGroup() {
        return densityGroup;
    }


    /**
     * Sets the densityGroup value for this ConsignmentDetail.
     * 
     * @param densityGroup
     */
    public void setDensityGroup(sg.com.ccn.FWB.DensityGroup densityGroup) {
        this.densityGroup = densityGroup;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ConsignmentDetail)) return false;
        ConsignmentDetail other = (ConsignmentDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.AWBIdentification==null && other.getAWBIdentification()==null) || 
             (this.AWBIdentification!=null &&
              this.AWBIdentification.equals(other.getAWBIdentification()))) &&
            ((this.AWBOriginAndDestination==null && other.getAWBOriginAndDestination()==null) || 
             (this.AWBOriginAndDestination!=null &&
              this.AWBOriginAndDestination.equals(other.getAWBOriginAndDestination()))) &&
            ((this.quantityDetail==null && other.getQuantityDetail()==null) || 
             (this.quantityDetail!=null &&
              this.quantityDetail.equals(other.getQuantityDetail()))) &&
            ((this.volumeDetail==null && other.getVolumeDetail()==null) || 
             (this.volumeDetail!=null &&
              this.volumeDetail.equals(other.getVolumeDetail()))) &&
            ((this.densityGroup==null && other.getDensityGroup()==null) || 
             (this.densityGroup!=null &&
              this.densityGroup.equals(other.getDensityGroup())));
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
        if (getAWBIdentification() != null) {
            _hashCode += getAWBIdentification().hashCode();
        }
        if (getAWBOriginAndDestination() != null) {
            _hashCode += getAWBOriginAndDestination().hashCode();
        }
        if (getQuantityDetail() != null) {
            _hashCode += getQuantityDetail().hashCode();
        }
        if (getVolumeDetail() != null) {
            _hashCode += getVolumeDetail().hashCode();
        }
        if (getDensityGroup() != null) {
            _hashCode += getDensityGroup().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ConsignmentDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ConsignmentDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWBIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWBIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWBIdentification"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWBOriginAndDestination");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWBOriginAndDestination"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWBOriginAndDestination"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("quantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "QuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("volumeDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "VolumeDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Volume"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("densityGroup");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DensityGroup"));
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
