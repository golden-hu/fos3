/**
 * DDLStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class DDLStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail DDLMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail DDLQuantityDetail;

    private sg.com.ccn.FSU.DeliveryToDetail DDLDeliveryToDetail;

    public DDLStatusDetail() {
    }

    public DDLStatusDetail(
           sg.com.ccn.FSU.MovementDetail DDLMovementDetail,
           sg.com.ccn.FSU.QuantityDetail DDLQuantityDetail,
           sg.com.ccn.FSU.DeliveryToDetail DDLDeliveryToDetail) {
           this.DDLMovementDetail = DDLMovementDetail;
           this.DDLQuantityDetail = DDLQuantityDetail;
           this.DDLDeliveryToDetail = DDLDeliveryToDetail;
    }


    /**
     * Gets the DDLMovementDetail value for this DDLStatusDetail.
     * 
     * @return DDLMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getDDLMovementDetail() {
        return DDLMovementDetail;
    }


    /**
     * Sets the DDLMovementDetail value for this DDLStatusDetail.
     * 
     * @param DDLMovementDetail
     */
    public void setDDLMovementDetail(sg.com.ccn.FSU.MovementDetail DDLMovementDetail) {
        this.DDLMovementDetail = DDLMovementDetail;
    }


    /**
     * Gets the DDLQuantityDetail value for this DDLStatusDetail.
     * 
     * @return DDLQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getDDLQuantityDetail() {
        return DDLQuantityDetail;
    }


    /**
     * Sets the DDLQuantityDetail value for this DDLStatusDetail.
     * 
     * @param DDLQuantityDetail
     */
    public void setDDLQuantityDetail(sg.com.ccn.FSU.QuantityDetail DDLQuantityDetail) {
        this.DDLQuantityDetail = DDLQuantityDetail;
    }


    /**
     * Gets the DDLDeliveryToDetail value for this DDLStatusDetail.
     * 
     * @return DDLDeliveryToDetail
     */
    public sg.com.ccn.FSU.DeliveryToDetail getDDLDeliveryToDetail() {
        return DDLDeliveryToDetail;
    }


    /**
     * Sets the DDLDeliveryToDetail value for this DDLStatusDetail.
     * 
     * @param DDLDeliveryToDetail
     */
    public void setDDLDeliveryToDetail(sg.com.ccn.FSU.DeliveryToDetail DDLDeliveryToDetail) {
        this.DDLDeliveryToDetail = DDLDeliveryToDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DDLStatusDetail)) return false;
        DDLStatusDetail other = (DDLStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.DDLMovementDetail==null && other.getDDLMovementDetail()==null) || 
             (this.DDLMovementDetail!=null &&
              this.DDLMovementDetail.equals(other.getDDLMovementDetail()))) &&
            ((this.DDLQuantityDetail==null && other.getDDLQuantityDetail()==null) || 
             (this.DDLQuantityDetail!=null &&
              this.DDLQuantityDetail.equals(other.getDDLQuantityDetail()))) &&
            ((this.DDLDeliveryToDetail==null && other.getDDLDeliveryToDetail()==null) || 
             (this.DDLDeliveryToDetail!=null &&
              this.DDLDeliveryToDetail.equals(other.getDDLDeliveryToDetail())));
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
        if (getDDLMovementDetail() != null) {
            _hashCode += getDDLMovementDetail().hashCode();
        }
        if (getDDLQuantityDetail() != null) {
            _hashCode += getDDLQuantityDetail().hashCode();
        }
        if (getDDLDeliveryToDetail() != null) {
            _hashCode += getDDLDeliveryToDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DDLStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DDLStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DDLMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DDLMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DDLQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DDLQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DDLDeliveryToDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DDLDeliveryToDetail"));
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
