/**
 * ConsignmentDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class ConsignmentDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.AWBIdentification AWBIdentification;

    private sg.com.ccn.FSU.AWBOriginAndDestination AWBOriginAndDestination;

    private sg.com.ccn.FSU.QuantityDetail quantityDetail;

    private sg.com.ccn.FSU.TotalConsignmentPieces totalConsignmentPieces;

    public ConsignmentDetail() {
    }

    public ConsignmentDetail(
           sg.com.ccn.FSU.AWBIdentification AWBIdentification,
           sg.com.ccn.FSU.AWBOriginAndDestination AWBOriginAndDestination,
           sg.com.ccn.FSU.QuantityDetail quantityDetail,
           sg.com.ccn.FSU.TotalConsignmentPieces totalConsignmentPieces) {
           this.AWBIdentification = AWBIdentification;
           this.AWBOriginAndDestination = AWBOriginAndDestination;
           this.quantityDetail = quantityDetail;
           this.totalConsignmentPieces = totalConsignmentPieces;
    }


    /**
     * Gets the AWBIdentification value for this ConsignmentDetail.
     * 
     * @return AWBIdentification
     */
    public sg.com.ccn.FSU.AWBIdentification getAWBIdentification() {
        return AWBIdentification;
    }


    /**
     * Sets the AWBIdentification value for this ConsignmentDetail.
     * 
     * @param AWBIdentification
     */
    public void setAWBIdentification(sg.com.ccn.FSU.AWBIdentification AWBIdentification) {
        this.AWBIdentification = AWBIdentification;
    }


    /**
     * Gets the AWBOriginAndDestination value for this ConsignmentDetail.
     * 
     * @return AWBOriginAndDestination
     */
    public sg.com.ccn.FSU.AWBOriginAndDestination getAWBOriginAndDestination() {
        return AWBOriginAndDestination;
    }


    /**
     * Sets the AWBOriginAndDestination value for this ConsignmentDetail.
     * 
     * @param AWBOriginAndDestination
     */
    public void setAWBOriginAndDestination(sg.com.ccn.FSU.AWBOriginAndDestination AWBOriginAndDestination) {
        this.AWBOriginAndDestination = AWBOriginAndDestination;
    }


    /**
     * Gets the quantityDetail value for this ConsignmentDetail.
     * 
     * @return quantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getQuantityDetail() {
        return quantityDetail;
    }


    /**
     * Sets the quantityDetail value for this ConsignmentDetail.
     * 
     * @param quantityDetail
     */
    public void setQuantityDetail(sg.com.ccn.FSU.QuantityDetail quantityDetail) {
        this.quantityDetail = quantityDetail;
    }


    /**
     * Gets the totalConsignmentPieces value for this ConsignmentDetail.
     * 
     * @return totalConsignmentPieces
     */
    public sg.com.ccn.FSU.TotalConsignmentPieces getTotalConsignmentPieces() {
        return totalConsignmentPieces;
    }


    /**
     * Sets the totalConsignmentPieces value for this ConsignmentDetail.
     * 
     * @param totalConsignmentPieces
     */
    public void setTotalConsignmentPieces(sg.com.ccn.FSU.TotalConsignmentPieces totalConsignmentPieces) {
        this.totalConsignmentPieces = totalConsignmentPieces;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ConsignmentDetail)) return false;
        ConsignmentDetail other = (ConsignmentDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.AWBIdentification==null && other.getAWBIdentification()==null) || 
             (this.AWBIdentification!=null &&
              this.AWBIdentification.equals(other.getAWBIdentification()))) &&
            ((this.AWBOriginAndDestination==null && other.getAWBOriginAndDestination()==null) || 
             (this.AWBOriginAndDestination!=null &&
              this.AWBOriginAndDestination.equals(other.getAWBOriginAndDestination()))) &&
            ((this.quantityDetail==null && other.getQuantityDetail()==null) || 
             (this.quantityDetail!=null &&
              this.quantityDetail.equals(other.getQuantityDetail()))) &&
            ((this.totalConsignmentPieces==null && other.getTotalConsignmentPieces()==null) || 
             (this.totalConsignmentPieces!=null &&
              this.totalConsignmentPieces.equals(other.getTotalConsignmentPieces())));
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
        if (getAWBIdentification() != null) {
            _hashCode += getAWBIdentification().hashCode();
        }
        if (getAWBOriginAndDestination() != null) {
            _hashCode += getAWBOriginAndDestination().hashCode();
        }
        if (getQuantityDetail() != null) {
            _hashCode += getQuantityDetail().hashCode();
        }
        if (getTotalConsignmentPieces() != null) {
            _hashCode += getTotalConsignmentPieces().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ConsignmentDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ConsignmentDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWBIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWBIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWBIdentification"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWBOriginAndDestination");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWBOriginAndDestination"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWBOriginAndDestination"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("quantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "QuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("totalConsignmentPieces");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TotalConsignmentPieces"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TotalConsignmentPieces"));
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
