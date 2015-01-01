/**
 * Envelope.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class Envelope  implements java.io.Serializable {
    /* Priority Code */
    private java.lang.String priority;

    private java.lang.String recipientPimaAddress;

    private java.lang.String senderPimaAddress;

    private java.lang.String GMT;

    private java.lang.String senderOriginalCode;

    private java.lang.String messageSequenceNumber;

    public Envelope() {
    }

    public Envelope(
           java.lang.String priority,
           java.lang.String recipientPimaAddress,
           java.lang.String senderPimaAddress,
           java.lang.String GMT,
           java.lang.String senderOriginalCode,
           java.lang.String messageSequenceNumber) {
           this.priority = priority;
           this.recipientPimaAddress = recipientPimaAddress;
           this.senderPimaAddress = senderPimaAddress;
           this.GMT = GMT;
           this.senderOriginalCode = senderOriginalCode;
           this.messageSequenceNumber = messageSequenceNumber;
    }


    /**
     * Gets the priority value for this Envelope.
     * 
     * @return priority   * Priority Code
     */
    public java.lang.String getPriority() {
        return priority;
    }


    /**
     * Sets the priority value for this Envelope.
     * 
     * @param priority   * Priority Code
     */
    public void setPriority(java.lang.String priority) {
        this.priority = priority;
    }


    /**
     * Gets the recipientPimaAddress value for this Envelope.
     * 
     * @return recipientPimaAddress
     */
    public java.lang.String getRecipientPimaAddress() {
        return recipientPimaAddress;
    }


    /**
     * Sets the recipientPimaAddress value for this Envelope.
     * 
     * @param recipientPimaAddress
     */
    public void setRecipientPimaAddress(java.lang.String recipientPimaAddress) {
        this.recipientPimaAddress = recipientPimaAddress;
    }


    /**
     * Gets the senderPimaAddress value for this Envelope.
     * 
     * @return senderPimaAddress
     */
    public java.lang.String getSenderPimaAddress() {
        return senderPimaAddress;
    }


    /**
     * Sets the senderPimaAddress value for this Envelope.
     * 
     * @param senderPimaAddress
     */
    public void setSenderPimaAddress(java.lang.String senderPimaAddress) {
        this.senderPimaAddress = senderPimaAddress;
    }


    /**
     * Gets the GMT value for this Envelope.
     * 
     * @return GMT
     */
    public java.lang.String getGMT() {
        return GMT;
    }


    /**
     * Sets the GMT value for this Envelope.
     * 
     * @param GMT
     */
    public void setGMT(java.lang.String GMT) {
        this.GMT = GMT;
    }


    /**
     * Gets the senderOriginalCode value for this Envelope.
     * 
     * @return senderOriginalCode
     */
    public java.lang.String getSenderOriginalCode() {
        return senderOriginalCode;
    }


    /**
     * Sets the senderOriginalCode value for this Envelope.
     * 
     * @param senderOriginalCode
     */
    public void setSenderOriginalCode(java.lang.String senderOriginalCode) {
        this.senderOriginalCode = senderOriginalCode;
    }


    /**
     * Gets the messageSequenceNumber value for this Envelope.
     * 
     * @return messageSequenceNumber
     */
    public java.lang.String getMessageSequenceNumber() {
        return messageSequenceNumber;
    }


    /**
     * Sets the messageSequenceNumber value for this Envelope.
     * 
     * @param messageSequenceNumber
     */
    public void setMessageSequenceNumber(java.lang.String messageSequenceNumber) {
        this.messageSequenceNumber = messageSequenceNumber;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Envelope)) return false;
        Envelope other = (Envelope) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.priority==null && other.getPriority()==null) || 
             (this.priority!=null &&
              this.priority.equals(other.getPriority()))) &&
            ((this.recipientPimaAddress==null && other.getRecipientPimaAddress()==null) || 
             (this.recipientPimaAddress!=null &&
              this.recipientPimaAddress.equals(other.getRecipientPimaAddress()))) &&
            ((this.senderPimaAddress==null && other.getSenderPimaAddress()==null) || 
             (this.senderPimaAddress!=null &&
              this.senderPimaAddress.equals(other.getSenderPimaAddress()))) &&
            ((this.GMT==null && other.getGMT()==null) || 
             (this.GMT!=null &&
              this.GMT.equals(other.getGMT()))) &&
            ((this.senderOriginalCode==null && other.getSenderOriginalCode()==null) || 
             (this.senderOriginalCode!=null &&
              this.senderOriginalCode.equals(other.getSenderOriginalCode()))) &&
            ((this.messageSequenceNumber==null && other.getMessageSequenceNumber()==null) || 
             (this.messageSequenceNumber!=null &&
              this.messageSequenceNumber.equals(other.getMessageSequenceNumber())));
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
        if (getPriority() != null) {
            _hashCode += getPriority().hashCode();
        }
        if (getRecipientPimaAddress() != null) {
            _hashCode += getRecipientPimaAddress().hashCode();
        }
        if (getSenderPimaAddress() != null) {
            _hashCode += getSenderPimaAddress().hashCode();
        }
        if (getGMT() != null) {
            _hashCode += getGMT().hashCode();
        }
        if (getSenderOriginalCode() != null) {
            _hashCode += getSenderOriginalCode().hashCode();
        }
        if (getMessageSequenceNumber() != null) {
            _hashCode += getMessageSequenceNumber().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Envelope.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Envelope"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("priority");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Priority"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("recipientPimaAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RecipientPimaAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("senderPimaAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SenderPimaAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("GMT");
        elemField.setXmlName(new javax.xml.namespace.QName("", "GMT"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("senderOriginalCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SenderOriginalCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("messageSequenceNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MessageSequenceNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
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
