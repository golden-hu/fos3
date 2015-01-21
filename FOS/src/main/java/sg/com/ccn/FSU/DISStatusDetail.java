/**
 * DISStatusDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class DISStatusDetail  implements java.io.Serializable {
    private sg.com.ccn.FSU.MovementDetail DISMovementDetail;

    private sg.com.ccn.FSU.DiscrepancyDetail DISDiscrepancyDetail;

    private sg.com.ccn.FSU.QuantityDetail DISQuantityDetail;

    public DISStatusDetail() {
    }

    public DISStatusDetail(
           sg.com.ccn.FSU.MovementDetail DISMovementDetail,
           sg.com.ccn.FSU.DiscrepancyDetail DISDiscrepancyDetail,
           sg.com.ccn.FSU.QuantityDetail DISQuantityDetail) {
           this.DISMovementDetail = DISMovementDetail;
           this.DISDiscrepancyDetail = DISDiscrepancyDetail;
           this.DISQuantityDetail = DISQuantityDetail;
    }


    /**
     * Gets the DISMovementDetail value for this DISStatusDetail.
     * 
     * @return DISMovementDetail
     */
    public sg.com.ccn.FSU.MovementDetail getDISMovementDetail() {
        return DISMovementDetail;
    }


    /**
     * Sets the DISMovementDetail value for this DISStatusDetail.
     * 
     * @param DISMovementDetail
     */
    public void setDISMovementDetail(sg.com.ccn.FSU.MovementDetail DISMovementDetail) {
        this.DISMovementDetail = DISMovementDetail;
    }


    /**
     * Gets the DISDiscrepancyDetail value for this DISStatusDetail.
     * 
     * @return DISDiscrepancyDetail
     */
    public sg.com.ccn.FSU.DiscrepancyDetail getDISDiscrepancyDetail() {
        return DISDiscrepancyDetail;
    }


    /**
     * Sets the DISDiscrepancyDetail value for this DISStatusDetail.
     * 
     * @param DISDiscrepancyDetail
     */
    public void setDISDiscrepancyDetail(sg.com.ccn.FSU.DiscrepancyDetail DISDiscrepancyDetail) {
        this.DISDiscrepancyDetail = DISDiscrepancyDetail;
    }


    /**
     * Gets the DISQuantityDetail value for this DISStatusDetail.
     * 
     * @return DISQuantityDetail
     */
    public sg.com.ccn.FSU.QuantityDetail getDISQuantityDetail() {
        return DISQuantityDetail;
    }


    /**
     * Sets the DISQuantityDetail value for this DISStatusDetail.
     * 
     * @param DISQuantityDetail
     */
    public void setDISQuantityDetail(sg.com.ccn.FSU.QuantityDetail DISQuantityDetail) {
        this.DISQuantityDetail = DISQuantityDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DISStatusDetail)) return false;
        DISStatusDetail other = (DISStatusDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.DISMovementDetail==null && other.getDISMovementDetail()==null) || 
             (this.DISMovementDetail!=null &&
              this.DISMovementDetail.equals(other.getDISMovementDetail()))) &&
            ((this.DISDiscrepancyDetail==null && other.getDISDiscrepancyDetail()==null) || 
             (this.DISDiscrepancyDetail!=null &&
              this.DISDiscrepancyDetail.equals(other.getDISDiscrepancyDetail()))) &&
            ((this.DISQuantityDetail==null && other.getDISQuantityDetail()==null) || 
             (this.DISQuantityDetail!=null &&
              this.DISQuantityDetail.equals(other.getDISQuantityDetail())));
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
        if (getDISMovementDetail() != null) {
            _hashCode += getDISMovementDetail().hashCode();
        }
        if (getDISDiscrepancyDetail() != null) {
            _hashCode += getDISDiscrepancyDetail().hashCode();
        }
        if (getDISQuantityDetail() != null) {
            _hashCode += getDISQuantityDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DISStatusDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DISStatusDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DISMovementDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DISMovementDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MovementDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DISDiscrepancyDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DISDiscrepancyDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DiscrepancyDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("DISQuantityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DISQuantityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
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
