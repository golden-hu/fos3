/**
 * MANStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class MANStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail MANMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail MANQuantityDetail;

    private sg.com.ccn.FSU.TimeInformation MANDepartureTime;

    private sg.com.ccn.FSU.TimeInformation MANArrivalTime;

    public MANStatusDetail() {
    }

    public MANStatusDetail(
           sg.com.ccn.FSU.MovementDetail MANMovementDetail,
           sg.com.ccn.FSU.QuantityDetail MANQuantityDetail,
           sg.com.ccn.FSU.TimeInformation MANDepartureTime,
           sg.com.ccn.FSU.TimeInformation MANArrivalTime) {
           this.MANMovementDetail = MANMovementDetail;
           this.MANQuantityDetail = MANQuantityDetail;
           this.MANDepartureTime = MANDepartureTime;
           this.MANArrivalTime = MANArrivalTime;
    }


    /**
     * Gets the MANMovementDetail value for this MANStatusDetail.
     * 
     * @return MANMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getMANMovementDetail() {
        return MANMovementDetail;
    }


    /**
     * Sets the MANMovementDetail value for this MANStatusDetail.
     * 
     * @param MANMovementDetail
     */
    public void setMANMovementDetail(sg.com.ccn.FSU.MovementDetail MANMovementDetail) {
        this.MANMovementDetail = MANMovementDetail;
    }


    /**
     * Gets the MANQuantityDetail value for this MANStatusDetail.
     * 
     * @return MANQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getMANQuantityDetail() {
        return MANQuantityDetail;
    }


    /**
     * Sets the MANQuantityDetail value for this MANStatusDetail.
     * 
     * @param MANQuantityDetail
     */
    public void setMANQuantityDetail(sg.com.ccn.FSU.QuantityDetail MANQuantityDetail) {
        this.MANQuantityDetail = MANQuantityDetail;
    }


    /**
     * Gets the MANDepartureTime value for this MANStatusDetail.
     * 
     * @return MANDepartureTime
     */
    public sg.com.ccn.FSU.TimeInformation getMANDepartureTime() {
        return MANDepartureTime;
    }


    /**
     * Sets the MANDepartureTime value for this MANStatusDetail.
     * 
     * @param MANDepartureTime
     */
    public void setMANDepartureTime(sg.com.ccn.FSU.TimeInformation MANDepartureTime) {
        this.MANDepartureTime = MANDepartureTime;
    }


    /**
     * Gets the MANArrivalTime value for this MANStatusDetail.
     * 
     * @return MANArrivalTime
     */
    public sg.com.ccn.FSU.TimeInformation getMANArrivalTime() {
        return MANArrivalTime;
    }


    /**
     * Sets the MANArrivalTime value for this MANStatusDetail.
     * 
     * @param MANArrivalTime
     */
    public void setMANArrivalTime(sg.com.ccn.FSU.TimeInformation MANArrivalTime) {
        this.MANArrivalTime = MANArrivalTime;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof MANStatusDetail)) return false;
        MANStatusDetail other = (MANStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.MANMovementDetail==null && other.getMANMovementDetail()==null) || 
             (this.MANMovementDetail!=null &&
              this.MANMovementDetail.equals(other.getMANMovementDetail()))) &&
            ((this.MANQuantityDetail==null && other.getMANQuantityDetail()==null) || 
             (this.MANQuantityDetail!=null &&
              this.MANQuantityDetail.equals(other.getMANQuantityDetail()))) &&
            ((this.MANDepartureTime==null && other.getMANDepartureTime()==null) || 
             (this.MANDepartureTime!=null &&
              this.MANDepartureTime.equals(other.getMANDepartureTime()))) &&
            ((this.MANArrivalTime==null && other.getMANArrivalTime()==null) || 
             (this.MANArrivalTime!=null &&
              this.MANArrivalTime.equals(other.getMANArrivalTime())));
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
        if (getMANMovementDetail() != null) {
            _hashCode += getMANMovementDetail().hashCode();
        }
        if (getMANQuantityDetail() != null) {
            _hashCode += getMANQuantityDetail().hashCode();
        }
        if (getMANDepartureTime() != null) {
            _hashCode += getMANDepartureTime().hashCode();
        }
        if (getMANArrivalTime() != null) {
            _hashCode += getMANArrivalTime().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(MANStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MANStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("MANMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MANMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("MANQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MANQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("MANDepartureTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MANDepartureTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TimeInformation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("MANArrivalTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MANArrivalTime"));
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
