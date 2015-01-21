/**
 * DLVStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class DLVStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail DLVMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail DLVQuantityDetail;

    private sg.com.ccn.FSU.DeliveryToDetail DLVDeliveryToDetail;

    public DLVStatusDetail() {
    }

    public DLVStatusDetail(
           sg.com.ccn.FSU.MovementDetail DLVMovementDetail,
           sg.com.ccn.FSU.QuantityDetail DLVQuantityDetail,
           sg.com.ccn.FSU.DeliveryToDetail DLVDeliveryToDetail) {
           this.DLVMovementDetail = DLVMovementDetail;
           this.DLVQuantityDetail = DLVQuantityDetail;
           this.DLVDeliveryToDetail = DLVDeliveryToDetail;
    }


    /**
     * Gets the DLVMovementDetail value for this DLVStatusDetail.
     * 
     * @return DLVMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getDLVMovementDetail() {
        return DLVMovementDetail;
    }


    /**
     * Sets the DLVMovementDetail value for this DLVStatusDetail.
     * 
     * @param DLVMovementDetail
     */
    public void setDLVMovementDetail(sg.com.ccn.FSU.MovementDetail DLVMovementDetail) {
        this.DLVMovementDetail = DLVMovementDetail;
    }


    /**
     * Gets the DLVQuantityDetail value for this DLVStatusDetail.
     * 
     * @return DLVQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getDLVQuantityDetail() {
        return DLVQuantityDetail;
    }


    /**
     * Sets the DLVQuantityDetail value for this DLVStatusDetail.
     * 
     * @param DLVQuantityDetail
     */
    public void setDLVQuantityDetail(sg.com.ccn.FSU.QuantityDetail DLVQuantityDetail) {
        this.DLVQuantityDetail = DLVQuantityDetail;
    }


    /**
     * Gets the DLVDeliveryToDetail value for this DLVStatusDetail.
     * 
     * @return DLVDeliveryToDetail
     */
    public sg.com.ccn.FSU.DeliveryToDetail getDLVDeliveryToDetail() {
        return DLVDeliveryToDetail;
    }


    /**
     * Sets the DLVDeliveryToDetail value for this DLVStatusDetail.
     * 
     * @param DLVDeliveryToDetail
     */
    public void setDLVDeliveryToDetail(sg.com.ccn.FSU.DeliveryToDetail DLVDeliveryToDetail) {
        this.DLVDeliveryToDetail = DLVDeliveryToDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DLVStatusDetail)) return false;
        DLVStatusDetail other = (DLVStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.DLVMovementDetail==null && other.getDLVMovementDetail()==null) || 
             (this.DLVMovementDetail!=null &&
              this.DLVMovementDetail.equals(other.getDLVMovementDetail()))) &&
            ((this.DLVQuantityDetail==null && other.getDLVQuantityDetail()==null) || 
             (this.DLVQuantityDetail!=null &&
              this.DLVQuantityDetail.equals(other.getDLVQuantityDetail()))) &&
            ((this.DLVDeliveryToDetail==null && other.getDLVDeliveryToDetail()==null) || 
             (this.DLVDeliveryToDetail!=null &&
              this.DLVDeliveryToDetail.equals(other.getDLVDeliveryToDetail())));
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
        if (getDLVMovementDetail() != null) {
            _hashCode += getDLVMovementDetail().hashCode();
        }
        if (getDLVQuantityDetail() != null) {
            _hashCode += getDLVQuantityDetail().hashCode();
        }
        if (getDLVDeliveryToDetail() != null) {
            _hashCode += getDLVDeliveryToDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DLVStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DLVStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DLVMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DLVMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DLVQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DLVQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DLVDeliveryToDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DLVDeliveryToDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DeliveryToDetail"));
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
