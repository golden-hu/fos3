/**
 * NFDStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class NFDStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail NFDMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail NFDQuantityDetail;

    private sg.com.ccn.FSU.NotificationToDetail NFDNotificationToDetail;

    public NFDStatusDetail() {
    }

    public NFDStatusDetail(
           sg.com.ccn.FSU.MovementDetail NFDMovementDetail,
           sg.com.ccn.FSU.QuantityDetail NFDQuantityDetail,
           sg.com.ccn.FSU.NotificationToDetail NFDNotificationToDetail) {
           this.NFDMovementDetail = NFDMovementDetail;
           this.NFDQuantityDetail = NFDQuantityDetail;
           this.NFDNotificationToDetail = NFDNotificationToDetail;
    }


    /**
     * Gets the NFDMovementDetail value for this NFDStatusDetail.
     * 
     * @return NFDMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getNFDMovementDetail() {
        return NFDMovementDetail;
    }


    /**
     * Sets the NFDMovementDetail value for this NFDStatusDetail.
     * 
     * @param NFDMovementDetail
     */
    public void setNFDMovementDetail(sg.com.ccn.FSU.MovementDetail NFDMovementDetail) {
        this.NFDMovementDetail = NFDMovementDetail;
    }


    /**
     * Gets the NFDQuantityDetail value for this NFDStatusDetail.
     * 
     * @return NFDQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getNFDQuantityDetail() {
        return NFDQuantityDetail;
    }


    /**
     * Sets the NFDQuantityDetail value for this NFDStatusDetail.
     * 
     * @param NFDQuantityDetail
     */
    public void setNFDQuantityDetail(sg.com.ccn.FSU.QuantityDetail NFDQuantityDetail) {
        this.NFDQuantityDetail = NFDQuantityDetail;
    }


    /**
     * Gets the NFDNotificationToDetail value for this NFDStatusDetail.
     * 
     * @return NFDNotificationToDetail
     */
    public sg.com.ccn.FSU.NotificationToDetail getNFDNotificationToDetail() {
        return NFDNotificationToDetail;
    }


    /**
     * Sets the NFDNotificationToDetail value for this NFDStatusDetail.
     * 
     * @param NFDNotificationToDetail
     */
    public void setNFDNotificationToDetail(sg.com.ccn.FSU.NotificationToDetail NFDNotificationToDetail) {
        this.NFDNotificationToDetail = NFDNotificationToDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof NFDStatusDetail)) return false;
        NFDStatusDetail other = (NFDStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.NFDMovementDetail==null && other.getNFDMovementDetail()==null) || 
             (this.NFDMovementDetail!=null &&
              this.NFDMovementDetail.equals(other.getNFDMovementDetail()))) &&
            ((this.NFDQuantityDetail==null && other.getNFDQuantityDetail()==null) || 
             (this.NFDQuantityDetail!=null &&
              this.NFDQuantityDetail.equals(other.getNFDQuantityDetail()))) &&
            ((this.NFDNotificationToDetail==null && other.getNFDNotificationToDetail()==null) || 
             (this.NFDNotificationToDetail!=null &&
              this.NFDNotificationToDetail.equals(other.getNFDNotificationToDetail())));
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
        if (getNFDMovementDetail() != null) {
            _hashCode += getNFDMovementDetail().hashCode();
        }
        if (getNFDQuantityDetail() != null) {
            _hashCode += getNFDQuantityDetail().hashCode();
        }
        if (getNFDNotificationToDetail() != null) {
            _hashCode += getNFDNotificationToDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(NFDStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "NFDStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("NFDMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NFDMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("NFDQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NFDQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("NFDNotificationToDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NFDNotificationToDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "NotificationToDetail"));
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
