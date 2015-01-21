/**
 * RCFStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class RCFStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail RCFMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail RCFQuantityDetail;

    private sg.com.ccn.FSU.TimeInformation RCFDepartureTime;

    private sg.com.ccn.FSU.TimeInformation RCFArrivalTime;

    public RCFStatusDetail() {
    }

    public RCFStatusDetail(
           sg.com.ccn.FSU.MovementDetail RCFMovementDetail,
           sg.com.ccn.FSU.QuantityDetail RCFQuantityDetail,
           sg.com.ccn.FSU.TimeInformation RCFDepartureTime,
           sg.com.ccn.FSU.TimeInformation RCFArrivalTime) {
           this.RCFMovementDetail = RCFMovementDetail;
           this.RCFQuantityDetail = RCFQuantityDetail;
           this.RCFDepartureTime = RCFDepartureTime;
           this.RCFArrivalTime = RCFArrivalTime;
    }


    /**
     * Gets the RCFMovementDetail value for this RCFStatusDetail.
     * 
     * @return RCFMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getRCFMovementDetail() {
        return RCFMovementDetail;
    }


    /**
     * Sets the RCFMovementDetail value for this RCFStatusDetail.
     * 
     * @param RCFMovementDetail
     */
    public void setRCFMovementDetail(sg.com.ccn.FSU.MovementDetail RCFMovementDetail) {
        this.RCFMovementDetail = RCFMovementDetail;
    }


    /**
     * Gets the RCFQuantityDetail value for this RCFStatusDetail.
     * 
     * @return RCFQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getRCFQuantityDetail() {
        return RCFQuantityDetail;
    }


    /**
     * Sets the RCFQuantityDetail value for this RCFStatusDetail.
     * 
     * @param RCFQuantityDetail
     */
    public void setRCFQuantityDetail(sg.com.ccn.FSU.QuantityDetail RCFQuantityDetail) {
        this.RCFQuantityDetail = RCFQuantityDetail;
    }


    /**
     * Gets the RCFDepartureTime value for this RCFStatusDetail.
     * 
     * @return RCFDepartureTime
     */
    public sg.com.ccn.FSU.TimeInformation getRCFDepartureTime() {
        return RCFDepartureTime;
    }


    /**
     * Sets the RCFDepartureTime value for this RCFStatusDetail.
     * 
     * @param RCFDepartureTime
     */
    public void setRCFDepartureTime(sg.com.ccn.FSU.TimeInformation RCFDepartureTime) {
        this.RCFDepartureTime = RCFDepartureTime;
    }


    /**
     * Gets the RCFArrivalTime value for this RCFStatusDetail.
     * 
     * @return RCFArrivalTime
     */
    public sg.com.ccn.FSU.TimeInformation getRCFArrivalTime() {
        return RCFArrivalTime;
    }


    /**
     * Sets the RCFArrivalTime value for this RCFStatusDetail.
     * 
     * @param RCFArrivalTime
     */
    public void setRCFArrivalTime(sg.com.ccn.FSU.TimeInformation RCFArrivalTime) {
        this.RCFArrivalTime = RCFArrivalTime;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof RCFStatusDetail)) return false;
        RCFStatusDetail other = (RCFStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.RCFMovementDetail==null && other.getRCFMovementDetail()==null) || 
             (this.RCFMovementDetail!=null &&
              this.RCFMovementDetail.equals(other.getRCFMovementDetail()))) &&
            ((this.RCFQuantityDetail==null && other.getRCFQuantityDetail()==null) || 
             (this.RCFQuantityDetail!=null &&
              this.RCFQuantityDetail.equals(other.getRCFQuantityDetail()))) &&
            ((this.RCFDepartureTime==null && other.getRCFDepartureTime()==null) || 
             (this.RCFDepartureTime!=null &&
              this.RCFDepartureTime.equals(other.getRCFDepartureTime()))) &&
            ((this.RCFArrivalTime==null && other.getRCFArrivalTime()==null) || 
             (this.RCFArrivalTime!=null &&
              this.RCFArrivalTime.equals(other.getRCFArrivalTime())));
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
        if (getRCFMovementDetail() != null) {
            _hashCode += getRCFMovementDetail().hashCode();
        }
        if (getRCFQuantityDetail() != null) {
            _hashCode += getRCFQuantityDetail().hashCode();
        }
        if (getRCFDepartureTime() != null) {
            _hashCode += getRCFDepartureTime().hashCode();
        }
        if (getRCFArrivalTime() != null) {
            _hashCode += getRCFArrivalTime().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(RCFStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "RCFStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCFMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCFMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCFQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCFQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCFDepartureTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCFDepartureTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TimeInformation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("RCFArrivalTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RCFArrivalTime"));
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
