/**
 * PODStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class PODStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail PODMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail PODQuantityDetail;

    private sg.com.ccn.FSU.ReceivedFromDetail PODReceivedFromDetail;

    public PODStatusDetail() {
    }

    public PODStatusDetail(
           sg.com.ccn.FSU.MovementDetail PODMovementDetail,
           sg.com.ccn.FSU.QuantityDetail PODQuantityDetail,
           sg.com.ccn.FSU.ReceivedFromDetail PODReceivedFromDetail) {
           this.PODMovementDetail = PODMovementDetail;
           this.PODQuantityDetail = PODQuantityDetail;
           this.PODReceivedFromDetail = PODReceivedFromDetail;
    }


    /**
     * Gets the PODMovementDetail value for this PODStatusDetail.
     * 
     * @return PODMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getPODMovementDetail() {
        return PODMovementDetail;
    }


    /**
     * Sets the PODMovementDetail value for this PODStatusDetail.
     * 
     * @param PODMovementDetail
     */
    public void setPODMovementDetail(sg.com.ccn.FSU.MovementDetail PODMovementDetail) {
        this.PODMovementDetail = PODMovementDetail;
    }


    /**
     * Gets the PODQuantityDetail value for this PODStatusDetail.
     * 
     * @return PODQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getPODQuantityDetail() {
        return PODQuantityDetail;
    }


    /**
     * Sets the PODQuantityDetail value for this PODStatusDetail.
     * 
     * @param PODQuantityDetail
     */
    public void setPODQuantityDetail(sg.com.ccn.FSU.QuantityDetail PODQuantityDetail) {
        this.PODQuantityDetail = PODQuantityDetail;
    }


    /**
     * Gets the PODReceivedFromDetail value for this PODStatusDetail.
     * 
     * @return PODReceivedFromDetail
     */
    public sg.com.ccn.FSU.ReceivedFromDetail getPODReceivedFromDetail() {
        return PODReceivedFromDetail;
    }


    /**
     * Sets the PODReceivedFromDetail value for this PODStatusDetail.
     * 
     * @param PODReceivedFromDetail
     */
    public void setPODReceivedFromDetail(sg.com.ccn.FSU.ReceivedFromDetail PODReceivedFromDetail) {
        this.PODReceivedFromDetail = PODReceivedFromDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof PODStatusDetail)) return false;
        PODStatusDetail other = (PODStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.PODMovementDetail==null && other.getPODMovementDetail()==null) || 
             (this.PODMovementDetail!=null &&
              this.PODMovementDetail.equals(other.getPODMovementDetail()))) &&
            ((this.PODQuantityDetail==null && other.getPODQuantityDetail()==null) || 
             (this.PODQuantityDetail!=null &&
              this.PODQuantityDetail.equals(other.getPODQuantityDetail()))) &&
            ((this.PODReceivedFromDetail==null && other.getPODReceivedFromDetail()==null) || 
             (this.PODReceivedFromDetail!=null &&
              this.PODReceivedFromDetail.equals(other.getPODReceivedFromDetail())));
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
        if (getPODMovementDetail() != null) {
            _hashCode += getPODMovementDetail().hashCode();
        }
        if (getPODQuantityDetail() != null) {
            _hashCode += getPODQuantityDetail().hashCode();
        }
        if (getPODReceivedFromDetail() != null) {
            _hashCode += getPODReceivedFromDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(PODStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PODStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PODMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PODMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PODQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PODQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PODReceivedFromDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PODReceivedFromDetail"));
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
