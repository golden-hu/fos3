/**
 * CCDStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class CCDStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail CCDMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail CCDQuantityDetail;

    public CCDStatusDetail() {
    }

    public CCDStatusDetail(
           sg.com.ccn.FSU.MovementDetail CCDMovementDetail,
           sg.com.ccn.FSU.QuantityDetail CCDQuantityDetail) {
           this.CCDMovementDetail = CCDMovementDetail;
           this.CCDQuantityDetail = CCDQuantityDetail;
    }


    /**
     * Gets the CCDMovementDetail value for this CCDStatusDetail.
     * 
     * @return CCDMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getCCDMovementDetail() {
        return CCDMovementDetail;
    }


    /**
     * Sets the CCDMovementDetail value for this CCDStatusDetail.
     * 
     * @param CCDMovementDetail
     */
    public void setCCDMovementDetail(sg.com.ccn.FSU.MovementDetail CCDMovementDetail) {
        this.CCDMovementDetail = CCDMovementDetail;
    }


    /**
     * Gets the CCDQuantityDetail value for this CCDStatusDetail.
     * 
     * @return CCDQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getCCDQuantityDetail() {
        return CCDQuantityDetail;
    }


    /**
     * Sets the CCDQuantityDetail value for this CCDStatusDetail.
     * 
     * @param CCDQuantityDetail
     */
    public void setCCDQuantityDetail(sg.com.ccn.FSU.QuantityDetail CCDQuantityDetail) {
        this.CCDQuantityDetail = CCDQuantityDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CCDStatusDetail)) return false;
        CCDStatusDetail other = (CCDStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.CCDMovementDetail==null && other.getCCDMovementDetail()==null) || 
             (this.CCDMovementDetail!=null &&
              this.CCDMovementDetail.equals(other.getCCDMovementDetail()))) &&
            ((this.CCDQuantityDetail==null && other.getCCDQuantityDetail()==null) || 
             (this.CCDQuantityDetail!=null &&
              this.CCDQuantityDetail.equals(other.getCCDQuantityDetail())));
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
        if (getCCDMovementDetail() != null) {
            _hashCode += getCCDMovementDetail().hashCode();
        }
        if (getCCDQuantityDetail() != null) {
            _hashCode += getCCDQuantityDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CCDStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CCDStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CCDMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CCDMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CCDQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CCDQuantityDetail"));
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
