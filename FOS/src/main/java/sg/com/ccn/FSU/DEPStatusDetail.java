/**
 * DEPStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class DEPStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail DEPMovementDetail;

    private sg.com.ccn.FSU.QuantityDetail DEPQuantityDetail;

    private sg.com.ccn.FSU.TimeInformation DEPDepartureTime;

    private sg.com.ccn.FSU.TimeInformation DEPArrivalTime;

    public DEPStatusDetail() {
    }

    public DEPStatusDetail(
           sg.com.ccn.FSU.MovementDetail DEPMovementDetail,
           sg.com.ccn.FSU.QuantityDetail DEPQuantityDetail,
           sg.com.ccn.FSU.TimeInformation DEPDepartureTime,
           sg.com.ccn.FSU.TimeInformation DEPArrivalTime) {
           this.DEPMovementDetail = DEPMovementDetail;
           this.DEPQuantityDetail = DEPQuantityDetail;
           this.DEPDepartureTime = DEPDepartureTime;
           this.DEPArrivalTime = DEPArrivalTime;
    }


    /**
     * Gets the DEPMovementDetail value for this DEPStatusDetail.
     * 
     * @return DEPMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getDEPMovementDetail() {
        return DEPMovementDetail;
    }


    /**
     * Sets the DEPMovementDetail value for this DEPStatusDetail.
     * 
     * @param DEPMovementDetail
     */
    public void setDEPMovementDetail(sg.com.ccn.FSU.MovementDetail DEPMovementDetail) {
        this.DEPMovementDetail = DEPMovementDetail;
    }


    /**
     * Gets the DEPQuantityDetail value for this DEPStatusDetail.
     * 
     * @return DEPQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getDEPQuantityDetail() {
        return DEPQuantityDetail;
    }


    /**
     * Sets the DEPQuantityDetail value for this DEPStatusDetail.
     * 
     * @param DEPQuantityDetail
     */
    public void setDEPQuantityDetail(sg.com.ccn.FSU.QuantityDetail DEPQuantityDetail) {
        this.DEPQuantityDetail = DEPQuantityDetail;
    }


    /**
     * Gets the DEPDepartureTime value for this DEPStatusDetail.
     * 
     * @return DEPDepartureTime
     */
    public sg.com.ccn.FSU.TimeInformation getDEPDepartureTime() {
        return DEPDepartureTime;
    }


    /**
     * Sets the DEPDepartureTime value for this DEPStatusDetail.
     * 
     * @param DEPDepartureTime
     */
    public void setDEPDepartureTime(sg.com.ccn.FSU.TimeInformation DEPDepartureTime) {
        this.DEPDepartureTime = DEPDepartureTime;
    }


    /**
     * Gets the DEPArrivalTime value for this DEPStatusDetail.
     * 
     * @return DEPArrivalTime
     */
    public sg.com.ccn.FSU.TimeInformation getDEPArrivalTime() {
        return DEPArrivalTime;
    }


    /**
     * Sets the DEPArrivalTime value for this DEPStatusDetail.
     * 
     * @param DEPArrivalTime
     */
    public void setDEPArrivalTime(sg.com.ccn.FSU.TimeInformation DEPArrivalTime) {
        this.DEPArrivalTime = DEPArrivalTime;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DEPStatusDetail)) return false;
        DEPStatusDetail other = (DEPStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.DEPMovementDetail==null && other.getDEPMovementDetail()==null) || 
             (this.DEPMovementDetail!=null &&
              this.DEPMovementDetail.equals(other.getDEPMovementDetail()))) &&
            ((this.DEPQuantityDetail==null && other.getDEPQuantityDetail()==null) || 
             (this.DEPQuantityDetail!=null &&
              this.DEPQuantityDetail.equals(other.getDEPQuantityDetail()))) &&
            ((this.DEPDepartureTime==null && other.getDEPDepartureTime()==null) || 
             (this.DEPDepartureTime!=null &&
              this.DEPDepartureTime.equals(other.getDEPDepartureTime()))) &&
            ((this.DEPArrivalTime==null && other.getDEPArrivalTime()==null) || 
             (this.DEPArrivalTime!=null &&
              this.DEPArrivalTime.equals(other.getDEPArrivalTime())));
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
        if (getDEPMovementDetail() != null) {
            _hashCode += getDEPMovementDetail().hashCode();
        }
        if (getDEPQuantityDetail() != null) {
            _hashCode += getDEPQuantityDetail().hashCode();
        }
        if (getDEPDepartureTime() != null) {
            _hashCode += getDEPDepartureTime().hashCode();
        }
        if (getDEPArrivalTime() != null) {
            _hashCode += getDEPArrivalTime().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DEPStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DEPStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DEPMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DEPMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DEPQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DEPQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DEPDepartureTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DEPDepartureTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TimeInformation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DEPArrivalTime");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DEPArrivalTime"));
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
