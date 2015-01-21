/**
 * PUPStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class PUPStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail PUPMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail PUPQuantityDetail;

    private sg.com.ccn.FSU.ReceivedFromDetail PUPReceivedFromDetail;

    public PUPStatusDetail() {
    }

    public PUPStatusDetail(
           sg.com.ccn.FSU.MovementDetail PUPMovementDetail,
           sg.com.ccn.FSU.QuantityDetail PUPQuantityDetail,
           sg.com.ccn.FSU.ReceivedFromDetail PUPReceivedFromDetail) {
           this.PUPMovementDetail = PUPMovementDetail;
           this.PUPQuantityDetail = PUPQuantityDetail;
           this.PUPReceivedFromDetail = PUPReceivedFromDetail;
    }


    /**
     * Gets the PUPMovementDetail value for this PUPStatusDetail.
     * 
     * @return PUPMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getPUPMovementDetail() {
        return PUPMovementDetail;
    }


    /**
     * Sets the PUPMovementDetail value for this PUPStatusDetail.
     * 
     * @param PUPMovementDetail
     */
    public void setPUPMovementDetail(sg.com.ccn.FSU.MovementDetail PUPMovementDetail) {
        this.PUPMovementDetail = PUPMovementDetail;
    }


    /**
     * Gets the PUPQuantityDetail value for this PUPStatusDetail.
     * 
     * @return PUPQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getPUPQuantityDetail() {
        return PUPQuantityDetail;
    }


    /**
     * Sets the PUPQuantityDetail value for this PUPStatusDetail.
     * 
     * @param PUPQuantityDetail
     */
    public void setPUPQuantityDetail(sg.com.ccn.FSU.QuantityDetail PUPQuantityDetail) {
        this.PUPQuantityDetail = PUPQuantityDetail;
    }


    /**
     * Gets the PUPReceivedFromDetail value for this PUPStatusDetail.
     * 
     * @return PUPReceivedFromDetail
     */
    public sg.com.ccn.FSU.ReceivedFromDetail getPUPReceivedFromDetail() {
        return PUPReceivedFromDetail;
    }


    /**
     * Sets the PUPReceivedFromDetail value for this PUPStatusDetail.
     * 
     * @param PUPReceivedFromDetail
     */
    public void setPUPReceivedFromDetail(sg.com.ccn.FSU.ReceivedFromDetail PUPReceivedFromDetail) {
        this.PUPReceivedFromDetail = PUPReceivedFromDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof PUPStatusDetail)) return false;
        PUPStatusDetail other = (PUPStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.PUPMovementDetail==null && other.getPUPMovementDetail()==null) || 
             (this.PUPMovementDetail!=null &&
              this.PUPMovementDetail.equals(other.getPUPMovementDetail()))) &&
            ((this.PUPQuantityDetail==null && other.getPUPQuantityDetail()==null) || 
             (this.PUPQuantityDetail!=null &&
              this.PUPQuantityDetail.equals(other.getPUPQuantityDetail()))) &&
            ((this.PUPReceivedFromDetail==null && other.getPUPReceivedFromDetail()==null) || 
             (this.PUPReceivedFromDetail!=null &&
              this.PUPReceivedFromDetail.equals(other.getPUPReceivedFromDetail())));
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
        if (getPUPMovementDetail() != null) {
            _hashCode += getPUPMovementDetail().hashCode();
        }
        if (getPUPQuantityDetail() != null) {
            _hashCode += getPUPQuantityDetail().hashCode();
        }
        if (getPUPReceivedFromDetail() != null) {
            _hashCode += getPUPReceivedFromDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(PUPStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PUPStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PUPMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PUPMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PUPQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PUPQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PUPReceivedFromDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PUPReceivedFromDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ReceivedFromDetail"));
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
