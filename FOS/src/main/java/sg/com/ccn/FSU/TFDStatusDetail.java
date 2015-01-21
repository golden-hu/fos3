/**
 * TFDStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class TFDStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail TFDMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail TFDQuantityDetail;

    private sg.com.ccn.FSU.TransferReference TFDTransferReference;

    public TFDStatusDetail() {
    }

    public TFDStatusDetail(
           sg.com.ccn.FSU.MovementDetail TFDMovementDetail,
           sg.com.ccn.FSU.QuantityDetail TFDQuantityDetail,
           sg.com.ccn.FSU.TransferReference TFDTransferReference) {
           this.TFDMovementDetail = TFDMovementDetail;
           this.TFDQuantityDetail = TFDQuantityDetail;
           this.TFDTransferReference = TFDTransferReference;
    }


    /**
     * Gets the TFDMovementDetail value for this TFDStatusDetail.
     * 
     * @return TFDMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getTFDMovementDetail() {
        return TFDMovementDetail;
    }


    /**
     * Sets the TFDMovementDetail value for this TFDStatusDetail.
     * 
     * @param TFDMovementDetail
     */
    public void setTFDMovementDetail(sg.com.ccn.FSU.MovementDetail TFDMovementDetail) {
        this.TFDMovementDetail = TFDMovementDetail;
    }


    /**
     * Gets the TFDQuantityDetail value for this TFDStatusDetail.
     * 
     * @return TFDQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getTFDQuantityDetail() {
        return TFDQuantityDetail;
    }


    /**
     * Sets the TFDQuantityDetail value for this TFDStatusDetail.
     * 
     * @param TFDQuantityDetail
     */
    public void setTFDQuantityDetail(sg.com.ccn.FSU.QuantityDetail TFDQuantityDetail) {
        this.TFDQuantityDetail = TFDQuantityDetail;
    }


    /**
     * Gets the TFDTransferReference value for this TFDStatusDetail.
     * 
     * @return TFDTransferReference
     */
    public sg.com.ccn.FSU.TransferReference getTFDTransferReference() {
        return TFDTransferReference;
    }


    /**
     * Sets the TFDTransferReference value for this TFDStatusDetail.
     * 
     * @param TFDTransferReference
     */
    public void setTFDTransferReference(sg.com.ccn.FSU.TransferReference TFDTransferReference) {
        this.TFDTransferReference = TFDTransferReference;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof TFDStatusDetail)) return false;
        TFDStatusDetail other = (TFDStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.TFDMovementDetail==null && other.getTFDMovementDetail()==null) || 
             (this.TFDMovementDetail!=null &&
              this.TFDMovementDetail.equals(other.getTFDMovementDetail()))) &&
            ((this.TFDQuantityDetail==null && other.getTFDQuantityDetail()==null) || 
             (this.TFDQuantityDetail!=null &&
              this.TFDQuantityDetail.equals(other.getTFDQuantityDetail()))) &&
            ((this.TFDTransferReference==null && other.getTFDTransferReference()==null) || 
             (this.TFDTransferReference!=null &&
              this.TFDTransferReference.equals(other.getTFDTransferReference())));
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
        if (getTFDMovementDetail() != null) {
            _hashCode += getTFDMovementDetail().hashCode();
        }
        if (getTFDQuantityDetail() != null) {
            _hashCode += getTFDQuantityDetail().hashCode();
        }
        if (getTFDTransferReference() != null) {
            _hashCode += getTFDTransferReference().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(TFDStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TFDStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("TFDMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TFDMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("TFDQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TFDQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("TFDTransferReference");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TFDTransferReference"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TransferReference"));
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
