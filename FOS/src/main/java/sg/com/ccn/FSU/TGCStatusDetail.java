/**
 * TGCStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class TGCStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail TGCMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail TGCQuantityDetail;

    public TGCStatusDetail() {
    }

    public TGCStatusDetail(
           sg.com.ccn.FSU.MovementDetail TGCMovementDetail,
           sg.com.ccn.FSU.QuantityDetail TGCQuantityDetail) {
           this.TGCMovementDetail = TGCMovementDetail;
           this.TGCQuantityDetail = TGCQuantityDetail;
    }


    /**
     * Gets the TGCMovementDetail value for this TGCStatusDetail.
     * 
     * @return TGCMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getTGCMovementDetail() {
        return TGCMovementDetail;
    }


    /**
     * Sets the TGCMovementDetail value for this TGCStatusDetail.
     * 
     * @param TGCMovementDetail
     */
    public void setTGCMovementDetail(sg.com.ccn.FSU.MovementDetail TGCMovementDetail) {
        this.TGCMovementDetail = TGCMovementDetail;
    }


    /**
     * Gets the TGCQuantityDetail value for this TGCStatusDetail.
     * 
     * @return TGCQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getTGCQuantityDetail() {
        return TGCQuantityDetail;
    }


    /**
     * Sets the TGCQuantityDetail value for this TGCStatusDetail.
     * 
     * @param TGCQuantityDetail
     */
    public void setTGCQuantityDetail(sg.com.ccn.FSU.QuantityDetail TGCQuantityDetail) {
        this.TGCQuantityDetail = TGCQuantityDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof TGCStatusDetail)) return false;
        TGCStatusDetail other = (TGCStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.TGCMovementDetail==null && other.getTGCMovementDetail()==null) || 
             (this.TGCMovementDetail!=null &&
              this.TGCMovementDetail.equals(other.getTGCMovementDetail()))) &&
            ((this.TGCQuantityDetail==null && other.getTGCQuantityDetail()==null) || 
             (this.TGCQuantityDetail!=null &&
              this.TGCQuantityDetail.equals(other.getTGCQuantityDetail())));
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
        if (getTGCMovementDetail() != null) {
            _hashCode += getTGCMovementDetail().hashCode();
        }
        if (getTGCQuantityDetail() != null) {
            _hashCode += getTGCQuantityDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(TGCStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TGCStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("TGCMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TGCMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("TGCQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TGCQuantityDetail"));
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
