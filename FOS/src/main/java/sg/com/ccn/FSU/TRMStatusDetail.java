/**
 * TRMStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class TRMStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail TRMMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail TRMQuantityDetail;

    public TRMStatusDetail() {
    }

    public TRMStatusDetail(
           sg.com.ccn.FSU.MovementDetail TRMMovementDetail,
           sg.com.ccn.FSU.QuantityDetail TRMQuantityDetail) {
           this.TRMMovementDetail = TRMMovementDetail;
           this.TRMQuantityDetail = TRMQuantityDetail;
    }


    /**
     * Gets the TRMMovementDetail value for this TRMStatusDetail.
     * 
     * @return TRMMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getTRMMovementDetail() {
        return TRMMovementDetail;
    }


    /**
     * Sets the TRMMovementDetail value for this TRMStatusDetail.
     * 
     * @param TRMMovementDetail
     */
    public void setTRMMovementDetail(sg.com.ccn.FSU.MovementDetail TRMMovementDetail) {
        this.TRMMovementDetail = TRMMovementDetail;
    }


    /**
     * Gets the TRMQuantityDetail value for this TRMStatusDetail.
     * 
     * @return TRMQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getTRMQuantityDetail() {
        return TRMQuantityDetail;
    }


    /**
     * Sets the TRMQuantityDetail value for this TRMStatusDetail.
     * 
     * @param TRMQuantityDetail
     */
    public void setTRMQuantityDetail(sg.com.ccn.FSU.QuantityDetail TRMQuantityDetail) {
        this.TRMQuantityDetail = TRMQuantityDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof TRMStatusDetail)) return false;
        TRMStatusDetail other = (TRMStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.TRMMovementDetail==null && other.getTRMMovementDetail()==null) || 
             (this.TRMMovementDetail!=null &&
              this.TRMMovementDetail.equals(other.getTRMMovementDetail()))) &&
            ((this.TRMQuantityDetail==null && other.getTRMQuantityDetail()==null) || 
             (this.TRMQuantityDetail!=null &&
              this.TRMQuantityDetail.equals(other.getTRMQuantityDetail())));
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
        if (getTRMMovementDetail() != null) {
            _hashCode += getTRMMovementDetail().hashCode();
        }
        if (getTRMQuantityDetail() != null) {
            _hashCode += getTRMQuantityDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(TRMStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TRMStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("TRMMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TRMMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("TRMQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TRMQuantityDetail"));
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
