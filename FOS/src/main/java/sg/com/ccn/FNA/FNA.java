/**
 * FNA.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FNA;

public class FNA  implements java.io.Serializable {
    private sg.com.ccn.FNA.StandardMessageIdentification standardMessageIdentification;

    private sg.com.ccn.FNA.Reason[] reasonForRejectionError;

    private sg.com.ccn.FNA.SubMessageTypeIdentification subMessageTypeIdentification;

    private sg.com.ccn.FNA.ReceivedMessageDetail receivedMessageDetail;

    public FNA() {
    }

    public FNA(
           sg.com.ccn.FNA.StandardMessageIdentification standardMessageIdentification,
           sg.com.ccn.FNA.Reason[] reasonForRejectionError,
           sg.com.ccn.FNA.SubMessageTypeIdentification subMessageTypeIdentification,
           sg.com.ccn.FNA.ReceivedMessageDetail receivedMessageDetail) {
           this.standardMessageIdentification = standardMessageIdentification;
           this.reasonForRejectionError = reasonForRejectionError;
           this.subMessageTypeIdentification = subMessageTypeIdentification;
           this.receivedMessageDetail = receivedMessageDetail;
    }


    /**
     * Gets the standardMessageIdentification value for this FNA.
     * 
     * @return standardMessageIdentification
     */
    public sg.com.ccn.FNA.StandardMessageIdentification getStandardMessageIdentification() {
        return standardMessageIdentification;
    }


    /**
     * Sets the standardMessageIdentification value for this FNA.
     * 
     * @param standardMessageIdentification
     */
    public void setStandardMessageIdentification(sg.com.ccn.FNA.StandardMessageIdentification standardMessageIdentification) {
        this.standardMessageIdentification = standardMessageIdentification;
    }


    /**
     * Gets the reasonForRejectionError value for this FNA.
     * 
     * @return reasonForRejectionError
     */
    public sg.com.ccn.FNA.Reason[] getReasonForRejectionError() {
        return reasonForRejectionError;
    }


    /**
     * Sets the reasonForRejectionError value for this FNA.
     * 
     * @param reasonForRejectionError
     */
    public void setReasonForRejectionError(sg.com.ccn.FNA.Reason[] reasonForRejectionError) {
        this.reasonForRejectionError = reasonForRejectionError;
    }

    public sg.com.ccn.FNA.Reason getReasonForRejectionError(int i) {
        return this.reasonForRejectionError[i];
    }

    public void setReasonForRejectionError(int i, sg.com.ccn.FNA.Reason _value) {
        this.reasonForRejectionError[i] = _value;
    }


    /**
     * Gets the subMessageTypeIdentification value for this FNA.
     * 
     * @return subMessageTypeIdentification
     */
    public sg.com.ccn.FNA.SubMessageTypeIdentification getSubMessageTypeIdentification() {
        return subMessageTypeIdentification;
    }


    /**
     * Sets the subMessageTypeIdentification value for this FNA.
     * 
     * @param subMessageTypeIdentification
     */
    public void setSubMessageTypeIdentification(sg.com.ccn.FNA.SubMessageTypeIdentification subMessageTypeIdentification) {
        this.subMessageTypeIdentification = subMessageTypeIdentification;
    }


    /**
     * Gets the receivedMessageDetail value for this FNA.
     * 
     * @return receivedMessageDetail
     */
    public sg.com.ccn.FNA.ReceivedMessageDetail getReceivedMessageDetail() {
        return receivedMessageDetail;
    }


    /**
     * Sets the receivedMessageDetail value for this FNA.
     * 
     * @param receivedMessageDetail
     */
    public void setReceivedMessageDetail(sg.com.ccn.FNA.ReceivedMessageDetail receivedMessageDetail) {
        this.receivedMessageDetail = receivedMessageDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FNA)) return false;
        FNA other = (FNA) obj;
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
            ((this.reasonForRejectionError==null && other.getReasonForRejectionError()==null) || 
             (this.reasonForRejectionError!=null &&
              java.util.Arrays.equals(this.reasonForRejectionError, other.getReasonForRejectionError()))) &&
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
        if (getReasonForRejectionError() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getReasonForRejectionError());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getReasonForRejectionError(), i);
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
        new org.apache.axis.description.TypeDesc(FNA.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FNA"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("standardMessageIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "StandardMessageIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StandardMessageIdentification"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("reasonForRejectionError");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ReasonForRejectionError"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Reason"));
        elemField.setNillable(false);
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
