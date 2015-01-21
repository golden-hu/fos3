/**
 * AWDStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class AWDStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail AWDMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail AWDQuantityDetail;

    private sg.com.ccn.FSU.DeliveryToDetail AWDDeliveryToDetail;

    public AWDStatusDetail() {
    }

    public AWDStatusDetail(
           sg.com.ccn.FSU.MovementDetail AWDMovementDetail,
           sg.com.ccn.FSU.QuantityDetail AWDQuantityDetail,
           sg.com.ccn.FSU.DeliveryToDetail AWDDeliveryToDetail) {
           this.AWDMovementDetail = AWDMovementDetail;
           this.AWDQuantityDetail = AWDQuantityDetail;
           this.AWDDeliveryToDetail = AWDDeliveryToDetail;
    }


    /**
     * Gets the AWDMovementDetail value for this AWDStatusDetail.
     * 
     * @return AWDMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getAWDMovementDetail() {
        return AWDMovementDetail;
    }


    /**
     * Sets the AWDMovementDetail value for this AWDStatusDetail.
     * 
     * @param AWDMovementDetail
     */
    public void setAWDMovementDetail(sg.com.ccn.FSU.MovementDetail AWDMovementDetail) {
        this.AWDMovementDetail = AWDMovementDetail;
    }


    /**
     * Gets the AWDQuantityDetail value for this AWDStatusDetail.
     * 
     * @return AWDQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getAWDQuantityDetail() {
        return AWDQuantityDetail;
    }


    /**
     * Sets the AWDQuantityDetail value for this AWDStatusDetail.
     * 
     * @param AWDQuantityDetail
     */
    public void setAWDQuantityDetail(sg.com.ccn.FSU.QuantityDetail AWDQuantityDetail) {
        this.AWDQuantityDetail = AWDQuantityDetail;
    }


    /**
     * Gets the AWDDeliveryToDetail value for this AWDStatusDetail.
     * 
     * @return AWDDeliveryToDetail
     */
    public sg.com.ccn.FSU.DeliveryToDetail getAWDDeliveryToDetail() {
        return AWDDeliveryToDetail;
    }


    /**
     * Sets the AWDDeliveryToDetail value for this AWDStatusDetail.
     * 
     * @param AWDDeliveryToDetail
     */
    public void setAWDDeliveryToDetail(sg.com.ccn.FSU.DeliveryToDetail AWDDeliveryToDetail) {
        this.AWDDeliveryToDetail = AWDDeliveryToDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof AWDStatusDetail)) return false;
        AWDStatusDetail other = (AWDStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.AWDMovementDetail==null && other.getAWDMovementDetail()==null) || 
             (this.AWDMovementDetail!=null &&
              this.AWDMovementDetail.equals(other.getAWDMovementDetail()))) &&
            ((this.AWDQuantityDetail==null && other.getAWDQuantityDetail()==null) || 
             (this.AWDQuantityDetail!=null &&
              this.AWDQuantityDetail.equals(other.getAWDQuantityDetail()))) &&
            ((this.AWDDeliveryToDetail==null && other.getAWDDeliveryToDetail()==null) || 
             (this.AWDDeliveryToDetail!=null &&
              this.AWDDeliveryToDetail.equals(other.getAWDDeliveryToDetail())));
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
        if (getAWDMovementDetail() != null) {
            _hashCode += getAWDMovementDetail().hashCode();
        }
        if (getAWDQuantityDetail() != null) {
            _hashCode += getAWDQuantityDetail().hashCode();
        }
        if (getAWDDeliveryToDetail() != null) {
            _hashCode += getAWDDeliveryToDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(AWDStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWDStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWDMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWDMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWDQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWDQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWDDeliveryToDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWDDeliveryToDetail"));
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
