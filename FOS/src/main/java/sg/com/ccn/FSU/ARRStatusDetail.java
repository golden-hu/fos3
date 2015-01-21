/**
 * ARRStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class ARRStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail ARRMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail ARRQuantityDetail;

    private sg.com.ccn.FSU.TimeInformation ARRDepartureTime;

    private sg.com.ccn.FSU.TimeInformation ARRArrivalTime;

    public ARRStatusDetail() {
    }

    public ARRStatusDetail(
           sg.com.ccn.FSU.MovementDetail ARRMovementDetail,
           sg.com.ccn.FSU.QuantityDetail ARRQuantityDetail,
           sg.com.ccn.FSU.TimeInformation ARRDepartureTime,
           sg.com.ccn.FSU.TimeInformation ARRArrivalTime) {
           this.ARRMovementDetail = ARRMovementDetail;
           this.ARRQuantityDetail = ARRQuantityDetail;
           this.ARRDepartureTime = ARRDepartureTime;
           this.ARRArrivalTime = ARRArrivalTime;
    }


    /**
     * Gets the ARRMovementDetail value for this ARRStatusDetail.
     * 
     * @return ARRMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getARRMovementDetail() {
        return ARRMovementDetail;
    }


    /**
     * Sets the ARRMovementDetail value for this ARRStatusDetail.
     * 
     * @param ARRMovementDetail
     */
    public void setARRMovementDetail(sg.com.ccn.FSU.MovementDetail ARRMovementDetail) {
        this.ARRMovementDetail = ARRMovementDetail;
    }


    /**
     * Gets the ARRQuantityDetail value for this ARRStatusDetail.
     * 
     * @return ARRQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getARRQuantityDetail() {
        return ARRQuantityDetail;
    }


    /**
     * Sets the ARRQuantityDetail value for this ARRStatusDetail.
     * 
     * @param ARRQuantityDetail
     */
    public void setARRQuantityDetail(sg.com.ccn.FSU.QuantityDetail ARRQuantityDetail) {
        this.ARRQuantityDetail = ARRQuantityDetail;
    }


    /**
     * Gets the ARRDepartureTime value for this ARRStatusDetail.
     * 
     * @return ARRDepartureTime
     */
    public sg.com.ccn.FSU.TimeInformation getARRDepartureTime() {
        return ARRDepartureTime;
    }


    /**
     * Sets the ARRDepartureTime value for this ARRStatusDetail.
     * 
     * @param ARRDepartureTime
     */
    public void setARRDepartureTime(sg.com.ccn.FSU.TimeInformation ARRDepartureTime) {
        this.ARRDepartureTime = ARRDepartureTime;
    }


    /**
     * Gets the ARRArrivalTime value for this ARRStatusDetail.
     * 
     * @return ARRArrivalTime
     */
    public sg.com.ccn.FSU.TimeInformation getARRArrivalTime() {
        return ARRArrivalTime;
    }


    /**
     * Sets the ARRArrivalTime value for this ARRStatusDetail.
     * 
     * @param ARRArrivalTime
     */
    public void setARRArrivalTime(sg.com.ccn.FSU.TimeInformation ARRArrivalTime) {
        this.ARRArrivalTime = ARRArrivalTime;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ARRStatusDetail)) return false;
        ARRStatusDetail other = (ARRStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.ARRMovementDetail==null && other.getARRMovementDetail()==null) || 
             (this.ARRMovementDetail!=null &&
              this.ARRMovementDetail.equals(other.getARRMovementDetail()))) &&
            ((this.ARRQuantityDetail==null && other.getARRQuantityDetail()==null) || 
             (this.ARRQuantityDetail!=null &&
              this.ARRQuantityDetail.equals(other.getARRQuantityDetail()))) &&
            ((this.ARRDepartureTime==null && other.getARRDepartureTime()==null) || 
             (this.ARRDepartureTime!=null &&
              this.ARRDepartureTime.equals(other.getARRDepartureTime()))) &&
            ((this.ARRArrivalTime==null && other.getARRArrivalTime()==null) || 
             (this.ARRArrivalTime!=null &&
              this.ARRArrivalTime.equals(other.getARRArrivalTime())));
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
        if (getARRMovementDetail() != null) {
            _hashCode += getARRMovementDetail().hashCode();
        }
        if (getARRQuantityDetail() != null) {
            _hashCode += getARRQuantityDetail().hashCode();
        }
        if (getARRDepartureTime() != null) {
            _hashCode += getARRDepartureTime().hashCode();
        }
        if (getARRArrivalTime() != null) {
            _hashCode += getARRArrivalTime().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ARRStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ARRStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ARRMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ARRMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ARRQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ARRQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ARRDepartureTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ARRDepartureTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TimeInformation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ARRArrivalTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ARRArrivalTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TimeInformation"));
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
