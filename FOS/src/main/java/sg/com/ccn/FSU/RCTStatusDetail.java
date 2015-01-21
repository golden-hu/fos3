/**
 * RCTStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class RCTStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail RCTMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail RCTQuantityDetail;

    public RCTStatusDetail() {
    }

    public RCTStatusDetail(
           sg.com.ccn.FSU.MovementDetail RCTMovementDetail,
           sg.com.ccn.FSU.QuantityDetail RCTQuantityDetail) {
           this.RCTMovementDetail = RCTMovementDetail;
           this.RCTQuantityDetail = RCTQuantityDetail;
    }


    /**
     * Gets the RCTMovementDetail value for this RCTStatusDetail.
     * 
     * @return RCTMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getRCTMovementDetail() {
        return RCTMovementDetail;
    }


    /**
     * Sets the RCTMovementDetail value for this RCTStatusDetail.
     * 
     * @param RCTMovementDetail
     */
    public void setRCTMovementDetail(sg.com.ccn.FSU.MovementDetail RCTMovementDetail) {
        this.RCTMovementDetail = RCTMovementDetail;
    }


    /**
     * Gets the RCTQuantityDetail value for this RCTStatusDetail.
     * 
     * @return RCTQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getRCTQuantityDetail() {
        return RCTQuantityDetail;
    }


    /**
     * Sets the RCTQuantityDetail value for this RCTStatusDetail.
     * 
     * @param RCTQuantityDetail
     */
    public void setRCTQuantityDetail(sg.com.ccn.FSU.QuantityDetail RCTQuantityDetail) {
        this.RCTQuantityDetail = RCTQuantityDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof RCTStatusDetail)) return false;
        RCTStatusDetail other = (RCTStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.RCTMovementDetail==null && other.getRCTMovementDetail()==null) || 
             (this.RCTMovementDetail!=null &&
              this.RCTMovementDetail.equals(other.getRCTMovementDetail()))) &&
            ((this.RCTQuantityDetail==null && other.getRCTQuantityDetail()==null) || 
             (this.RCTQuantityDetail!=null &&
              this.RCTQuantityDetail.equals(other.getRCTQuantityDetail())));
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
        if (getRCTMovementDetail() != null) {
            _hashCode += getRCTMovementDetail().hashCode();
        }
        if (getRCTQuantityDetail() != null) {
            _hashCode += getRCTQuantityDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(RCTStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "RCTStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCTMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCTMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCTQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCTQuantityDetail"));
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
