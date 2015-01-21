/**
 * AWRStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class AWRStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail AWRMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail AWRQuantityDetail;

    private sg.com.ccn.FSU.TimeInformation AWRDepartureTime;

    private sg.com.ccn.FSU.TimeInformation AWRArrivalTime;

    public AWRStatusDetail() {
    }

    public AWRStatusDetail(
           sg.com.ccn.FSU.MovementDetail AWRMovementDetail,
           sg.com.ccn.FSU.QuantityDetail AWRQuantityDetail,
           sg.com.ccn.FSU.TimeInformation AWRDepartureTime,
           sg.com.ccn.FSU.TimeInformation AWRArrivalTime) {
           this.AWRMovementDetail = AWRMovementDetail;
           this.AWRQuantityDetail = AWRQuantityDetail;
           this.AWRDepartureTime = AWRDepartureTime;
           this.AWRArrivalTime = AWRArrivalTime;
    }


    /**
     * Gets the AWRMovementDetail value for this AWRStatusDetail.
     * 
     * @return AWRMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getAWRMovementDetail() {
        return AWRMovementDetail;
    }


    /**
     * Sets the AWRMovementDetail value for this AWRStatusDetail.
     * 
     * @param AWRMovementDetail
     */
    public void setAWRMovementDetail(sg.com.ccn.FSU.MovementDetail AWRMovementDetail) {
        this.AWRMovementDetail = AWRMovementDetail;
    }


    /**
     * Gets the AWRQuantityDetail value for this AWRStatusDetail.
     * 
     * @return AWRQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getAWRQuantityDetail() {
        return AWRQuantityDetail;
    }


    /**
     * Sets the AWRQuantityDetail value for this AWRStatusDetail.
     * 
     * @param AWRQuantityDetail
     */
    public void setAWRQuantityDetail(sg.com.ccn.FSU.QuantityDetail AWRQuantityDetail) {
        this.AWRQuantityDetail = AWRQuantityDetail;
    }


    /**
     * Gets the AWRDepartureTime value for this AWRStatusDetail.
     * 
     * @return AWRDepartureTime
     */
    public sg.com.ccn.FSU.TimeInformation getAWRDepartureTime() {
        return AWRDepartureTime;
    }


    /**
     * Sets the AWRDepartureTime value for this AWRStatusDetail.
     * 
     * @param AWRDepartureTime
     */
    public void setAWRDepartureTime(sg.com.ccn.FSU.TimeInformation AWRDepartureTime) {
        this.AWRDepartureTime = AWRDepartureTime;
    }


    /**
     * Gets the AWRArrivalTime value for this AWRStatusDetail.
     * 
     * @return AWRArrivalTime
     */
    public sg.com.ccn.FSU.TimeInformation getAWRArrivalTime() {
        return AWRArrivalTime;
    }


    /**
     * Sets the AWRArrivalTime value for this AWRStatusDetail.
     * 
     * @param AWRArrivalTime
     */
    public void setAWRArrivalTime(sg.com.ccn.FSU.TimeInformation AWRArrivalTime) {
        this.AWRArrivalTime = AWRArrivalTime;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof AWRStatusDetail)) return false;
        AWRStatusDetail other = (AWRStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.AWRMovementDetail==null && other.getAWRMovementDetail()==null) || 
             (this.AWRMovementDetail!=null &&
              this.AWRMovementDetail.equals(other.getAWRMovementDetail()))) &&
            ((this.AWRQuantityDetail==null && other.getAWRQuantityDetail()==null) || 
             (this.AWRQuantityDetail!=null &&
              this.AWRQuantityDetail.equals(other.getAWRQuantityDetail()))) &&
            ((this.AWRDepartureTime==null && other.getAWRDepartureTime()==null) || 
             (this.AWRDepartureTime!=null &&
              this.AWRDepartureTime.equals(other.getAWRDepartureTime()))) &&
            ((this.AWRArrivalTime==null && other.getAWRArrivalTime()==null) || 
             (this.AWRArrivalTime!=null &&
              this.AWRArrivalTime.equals(other.getAWRArrivalTime())));
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
        if (getAWRMovementDetail() != null) {
            _hashCode += getAWRMovementDetail().hashCode();
        }
        if (getAWRQuantityDetail() != null) {
            _hashCode += getAWRQuantityDetail().hashCode();
        }
        if (getAWRDepartureTime() != null) {
            _hashCode += getAWRDepartureTime().hashCode();
        }
        if (getAWRArrivalTime() != null) {
            _hashCode += getAWRArrivalTime().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(AWRStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWRStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWRMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWRMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWRQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWRQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWRDepartureTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWRDepartureTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TimeInformation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWRArrivalTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWRArrivalTime"));
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
