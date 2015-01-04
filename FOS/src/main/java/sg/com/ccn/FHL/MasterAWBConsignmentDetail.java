/**
 * MasterAWBConsignmentDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class MasterAWBConsignmentDetail  implements java.io.Serializable {
    private sg.com.ccn.FHL.MasterAWBIdentification masterAWBIdentification;

    private sg.com.ccn.FHL.AWBOriginAndDestination AWBOriginAndDestination;

    private sg.com.ccn.FHL.QuantityDetail quantityDetail;

    public MasterAWBConsignmentDetail() {
    }

    public MasterAWBConsignmentDetail(
           sg.com.ccn.FHL.MasterAWBIdentification masterAWBIdentification,
           sg.com.ccn.FHL.AWBOriginAndDestination AWBOriginAndDestination,
           sg.com.ccn.FHL.QuantityDetail quantityDetail) {
           this.masterAWBIdentification = masterAWBIdentification;
           this.AWBOriginAndDestination = AWBOriginAndDestination;
           this.quantityDetail = quantityDetail;
    }


    /**
     * Gets the masterAWBIdentification value for this MasterAWBConsignmentDetail.
     * 
     * @return masterAWBIdentification
     */
    public sg.com.ccn.FHL.MasterAWBIdentification getMasterAWBIdentification() {
        return masterAWBIdentification;
    }


    /**
     * Sets the masterAWBIdentification value for this MasterAWBConsignmentDetail.
     * 
     * @param masterAWBIdentification
     */
    public void setMasterAWBIdentification(sg.com.ccn.FHL.MasterAWBIdentification masterAWBIdentification) {
        this.masterAWBIdentification = masterAWBIdentification;
    }


    /**
     * Gets the AWBOriginAndDestination value for this MasterAWBConsignmentDetail.
     * 
     * @return AWBOriginAndDestination
     */
    public sg.com.ccn.FHL.AWBOriginAndDestination getAWBOriginAndDestination() {
        return AWBOriginAndDestination;
    }


    /**
     * Sets the AWBOriginAndDestination value for this MasterAWBConsignmentDetail.
     * 
     * @param AWBOriginAndDestination
     */
    public void setAWBOriginAndDestination(sg.com.ccn.FHL.AWBOriginAndDestination AWBOriginAndDestination) {
        this.AWBOriginAndDestination = AWBOriginAndDestination;
    }


    /**
     * Gets the quantityDetail value for this MasterAWBConsignmentDetail.
     * 
     * @return quantityDetail
     */
    public sg.com.ccn.FHL.QuantityDetail getQuantityDetail() {
        return quantityDetail;
    }


    /**
     * Sets the quantityDetail value for this MasterAWBConsignmentDetail.
     * 
     * @param quantityDetail
     */
    public void setQuantityDetail(sg.com.ccn.FHL.QuantityDetail quantityDetail) {
        this.quantityDetail = quantityDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof MasterAWBConsignmentDetail)) return false;
        MasterAWBConsignmentDetail other = (MasterAWBConsignmentDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.masterAWBIdentification==null && other.getMasterAWBIdentification()==null) || 
             (this.masterAWBIdentification!=null &&
              this.masterAWBIdentification.equals(other.getMasterAWBIdentification()))) &&
            ((this.AWBOriginAndDestination==null && other.getAWBOriginAndDestination()==null) || 
             (this.AWBOriginAndDestination!=null &&
              this.AWBOriginAndDestination.equals(other.getAWBOriginAndDestination()))) &&
            ((this.quantityDetail==null && other.getQuantityDetail()==null) || 
             (this.quantityDetail!=null &&
              this.quantityDetail.equals(other.getQuantityDetail())));
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
        if (getMasterAWBIdentification() != null) {
            _hashCode += getMasterAWBIdentification().hashCode();
        }
        if (getAWBOriginAndDestination() != null) {
            _hashCode += getAWBOriginAndDestination().hashCode();
        }
        if (getQuantityDetail() != null) {
            _hashCode += getQuantityDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(MasterAWBConsignmentDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MasterAWBConsignmentDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("masterAWBIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MasterAWBIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MasterAWBIdentification"));
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
