/**
 * PREStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class PREStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail PREMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail PREQuantityDetail;

    private sg.com.ccn.FSU.TimeInformation PREDepartureTime;

    private sg.com.ccn.FSU.TimeInformation PREArrivalTime;

    public PREStatusDetail() {
    }

    public PREStatusDetail(
           sg.com.ccn.FSU.MovementDetail PREMovementDetail,
           sg.com.ccn.FSU.QuantityDetail PREQuantityDetail,
           sg.com.ccn.FSU.TimeInformation PREDepartureTime,
           sg.com.ccn.FSU.TimeInformation PREArrivalTime) {
           this.PREMovementDetail = PREMovementDetail;
           this.PREQuantityDetail = PREQuantityDetail;
           this.PREDepartureTime = PREDepartureTime;
           this.PREArrivalTime = PREArrivalTime;
    }


    /**
     * Gets the PREMovementDetail value for this PREStatusDetail.
     * 
     * @return PREMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getPREMovementDetail() {
        return PREMovementDetail;
    }


    /**
     * Sets the PREMovementDetail value for this PREStatusDetail.
     * 
     * @param PREMovementDetail
     */
    public void setPREMovementDetail(sg.com.ccn.FSU.MovementDetail PREMovementDetail) {
        this.PREMovementDetail = PREMovementDetail;
    }


    /**
     * Gets the PREQuantityDetail value for this PREStatusDetail.
     * 
     * @return PREQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getPREQuantityDetail() {
        return PREQuantityDetail;
    }


    /**
     * Sets the PREQuantityDetail value for this PREStatusDetail.
     * 
     * @param PREQuantityDetail
     */
    public void setPREQuantityDetail(sg.com.ccn.FSU.QuantityDetail PREQuantityDetail) {
        this.PREQuantityDetail = PREQuantityDetail;
    }


    /**
     * Gets the PREDepartureTime value for this PREStatusDetail.
     * 
     * @return PREDepartureTime
     */
    public sg.com.ccn.FSU.TimeInformation getPREDepartureTime() {
        return PREDepartureTime;
    }


    /**
     * Sets the PREDepartureTime value for this PREStatusDetail.
     * 
     * @param PREDepartureTime
     */
    public void setPREDepartureTime(sg.com.ccn.FSU.TimeInformation PREDepartureTime) {
        this.PREDepartureTime = PREDepartureTime;
    }


    /**
     * Gets the PREArrivalTime value for this PREStatusDetail.
     * 
     * @return PREArrivalTime
     */
    public sg.com.ccn.FSU.TimeInformation getPREArrivalTime() {
        return PREArrivalTime;
    }


    /**
     * Sets the PREArrivalTime value for this PREStatusDetail.
     * 
     * @param PREArrivalTime
     */
    public void setPREArrivalTime(sg.com.ccn.FSU.TimeInformation PREArrivalTime) {
        this.PREArrivalTime = PREArrivalTime;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof PREStatusDetail)) return false;
        PREStatusDetail other = (PREStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.PREMovementDetail==null && other.getPREMovementDetail()==null) || 
             (this.PREMovementDetail!=null &&
              this.PREMovementDetail.equals(other.getPREMovementDetail()))) &&
            ((this.PREQuantityDetail==null && other.getPREQuantityDetail()==null) || 
             (this.PREQuantityDetail!=null &&
              this.PREQuantityDetail.equals(other.getPREQuantityDetail()))) &&
            ((this.PREDepartureTime==null && other.getPREDepartureTime()==null) || 
             (this.PREDepartureTime!=null &&
              this.PREDepartureTime.equals(other.getPREDepartureTime()))) &&
            ((this.PREArrivalTime==null && other.getPREArrivalTime()==null) || 
             (this.PREArrivalTime!=null &&
              this.PREArrivalTime.equals(other.getPREArrivalTime())));
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
        if (getPREMovementDetail() != null) {
            _hashCode += getPREMovementDetail().hashCode();
        }
        if (getPREQuantityDetail() != null) {
            _hashCode += getPREQuantityDetail().hashCode();
        }
        if (getPREDepartureTime() != null) {
            _hashCode += getPREDepartureTime().hashCode();
        }
        if (getPREArrivalTime() != null) {
            _hashCode += getPREArrivalTime().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(PREStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PREStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PREMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PREMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PREQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PREQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PREDepartureTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PREDepartureTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TimeInformation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PREArrivalTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PREArrivalTime"));
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
