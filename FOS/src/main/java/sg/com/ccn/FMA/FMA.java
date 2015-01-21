/**
 * FMA.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FMA;

public class FMA  implements java.io.Serializable {
    private sg.com.ccn.FMA.StandardMessageIdentification standardMessageIdentification;

    private java.lang.String[] reasonForAcknowledgement;

    private sg.com.ccn.FMA.SubMessageTypeIdentification subMessageTypeIdentification;

    private sg.com.ccn.FMA.ReceivedMessageDetail receivedMessageDetail;

    public FMA() {
    }

    public FMA(
           sg.com.ccn.FMA.StandardMessageIdentification standardMessageIdentification,
           java.lang.String[] reasonForAcknowledgement,
           sg.com.ccn.FMA.SubMessageTypeIdentification subMessageTypeIdentification,
           sg.com.ccn.FMA.ReceivedMessageDetail receivedMessageDetail) {
           this.standardMessageIdentification = standardMessageIdentification;
           this.reasonForAcknowledgement = reasonForAcknowledgement;
           this.subMessageTypeIdentification = subMessageTypeIdentification;
           this.receivedMessageDetail = receivedMessageDetail;
    }


    /**
     * Gets the standardMessageIdentification value for this FMA.
     * 
     * @return standardMessageIdentification
     */
    public sg.com.ccn.FMA.StandardMessageIdentification getStandardMessageIdentification() {
        return standardMessageIdentification;
    }


    /**
     * Sets the standardMessageIdentification value for this FMA.
     * 
     * @param standardMessageIdentification
     */
    public void setStandardMessageIdentification(sg.com.ccn.FMA.StandardMessageIdentification standardMessageIdentification) {
        this.standardMessageIdentification = standardMessageIdentification;
    }


    /**
     * Gets the reasonForAcknowledgement value for this FMA.
     * 
     * @return reasonForAcknowledgement
     */
    public java.lang.String[] getReasonForAcknowledgement() {
        return reasonForAcknowledgement;
    }


    /**
     * Sets the reasonForAcknowledgement value for this FMA.
     * 
     * @param reasonForAcknowledgement
     */
    public void setReasonForAcknowledgement(java.lang.String[] reasonForAcknowledgement) {
        this.reasonForAcknowledgement = reasonForAcknowledgement;
    }


    /**
     * Gets the subMessageTypeIdentification value for this FMA.
     * 
     * @return subMessageTypeIdentification
     */
    public sg.com.ccn.FMA.SubMessageTypeIdentification getSubMessageTypeIdentification() {
        return subMessageTypeIdentification;
    }


    /**
     * Sets the subMessageTypeIdentification value for this FMA.
     * 
     * @param subMessageTypeIdentification
     */
    public void setSubMessageTypeIdentification(sg.com.ccn.FMA.SubMessageTypeIdentification subMessageTypeIdentification) {
        this.subMessageTypeIdentification = subMessageTypeIdentification;
    }


    /**
     * Gets the receivedMessageDetail value for this FMA.
     * 
     * @return receivedMessageDetail
     */
    public sg.com.ccn.FMA.ReceivedMessageDetail getReceivedMessageDetail() {
        return receivedMessageDetail;
    }


    /**
     * Sets the receivedMessageDetail value for this FMA.
     * 
     * @param receivedMessageDetail
     */
    public void setReceivedMessageDetail(sg.com.ccn.FMA.ReceivedMessageDetail receivedMessageDetail) {
        this.receivedMessageDetail = receivedMessageDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FMA)) return false;
        FMA other = (FMA) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.standardMessageIdentification==null && other.getStandardMessageIdentification()==null) || 
             (this.standardMessageIdentification!=null &&
              this.standardMessageIdentification.equals(other.getStandardMessageIdentification()))) &&
            ((this.reasonForAcknowledgement==null && other.getReasonForAcknowledgement()==null) || 
             (this.reasonForAcknowledgement!=null &&
              java.util.Arrays.equals(this.reasonForAcknowledgement, other.getReasonForAcknowledgement()))) &&
            ((this.subMessageTypeIdentification==null && other.getSubMessageTypeIdentification()==null) || 
             (this.subMessageTypeIdentification!=null &&
              this.subMessageTypeIdentification.equals(other.getSubMessageTypeIdentification()))) &&
            ((this.receivedMessageDetail==null && other.getReceivedMessageDetail()==null) || 
             (this.receivedMessageDetail!=null &&
              this.receivedMessageDetail.equals(other.getReceivedMessageDetail())));
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
        if (getStandardMessageIdentification() != null) {
            _hashCode += getStandardMessageIdentification().hashCode();
        }
        if (getReasonForAcknowledgement() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getReasonForAcknowledgement());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getReasonForAcknowledgement(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getSubMessageTypeIdentification() != null) {
            _hashCode += getSubMessageTypeIdentification().hashCode();
        }
        if (getReceivedMessageDetail() != null) {
            _hashCode += getReceivedMessageDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FMA.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FMA"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("standardMessageIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "StandardMessageIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StandardMessageIdentification"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("reasonForAcknowledgement");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ReasonForAcknowledgement"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ReasonForAcknowledgementBase"));
        elemField.setNillable(false);
        elemField.setItemQName(new javax.xml.namespace.QName("", "ReasonForAcknowledgement"));
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("subMessageTypeIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SubMessageTypeIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SubMessageTypeIdentification"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("receivedMessageDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ReceivedMessageDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ReceivedMessageDetail"));
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
