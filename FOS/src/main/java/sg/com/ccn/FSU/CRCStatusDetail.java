/**
 * CRCStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class CRCStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail CRCMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail CRCQuantityDetail;

    public CRCStatusDetail() {
    }

    public CRCStatusDetail(
           sg.com.ccn.FSU.MovementDetail CRCMovementDetail,
           sg.com.ccn.FSU.QuantityDetail CRCQuantityDetail) {
           this.CRCMovementDetail = CRCMovementDetail;
           this.CRCQuantityDetail = CRCQuantityDetail;
    }


    /**
     * Gets the CRCMovementDetail value for this CRCStatusDetail.
     * 
     * @return CRCMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getCRCMovementDetail() {
        return CRCMovementDetail;
    }


    /**
     * Sets the CRCMovementDetail value for this CRCStatusDetail.
     * 
     * @param CRCMovementDetail
     */
    public void setCRCMovementDetail(sg.com.ccn.FSU.MovementDetail CRCMovementDetail) {
        this.CRCMovementDetail = CRCMovementDetail;
    }


    /**
     * Gets the CRCQuantityDetail value for this CRCStatusDetail.
     * 
     * @return CRCQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getCRCQuantityDetail() {
        return CRCQuantityDetail;
    }


    /**
     * Sets the CRCQuantityDetail value for this CRCStatusDetail.
     * 
     * @param CRCQuantityDetail
     */
    public void setCRCQuantityDetail(sg.com.ccn.FSU.QuantityDetail CRCQuantityDetail) {
        this.CRCQuantityDetail = CRCQuantityDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CRCStatusDetail)) return false;
        CRCStatusDetail other = (CRCStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.CRCMovementDetail==null && other.getCRCMovementDetail()==null) || 
             (this.CRCMovementDetail!=null &&
              this.CRCMovementDetail.equals(other.getCRCMovementDetail()))) &&
            ((this.CRCQuantityDetail==null && other.getCRCQuantityDetail()==null) || 
             (this.CRCQuantityDetail!=null &&
              this.CRCQuantityDetail.equals(other.getCRCQuantityDetail())));
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
        if (getCRCMovementDetail() != null) {
            _hashCode += getCRCMovementDetail().hashCode();
        }
        if (getCRCQuantityDetail() != null) {
            _hashCode += getCRCQuantityDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CRCStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CRCStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CRCMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CRCMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CRCQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CRCQuantityDetail"));
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
