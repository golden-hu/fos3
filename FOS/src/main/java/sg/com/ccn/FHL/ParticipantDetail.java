/**
 * ParticipantDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class ParticipantDetail  implements java.io.Serializable {
    private java.lang.String recipientOfMessage;

    private java.lang.String carrierCodeBased;

    private java.lang.String totalChargeableWeight;

    public ParticipantDetail() {
    }

    public ParticipantDetail(
           java.lang.String recipientOfMessage,
           java.lang.String carrierCodeBased,
           java.lang.String totalChargeableWeight) {
           this.recipientOfMessage = recipientOfMessage;
           this.carrierCodeBased = carrierCodeBased;
           this.totalChargeableWeight = totalChargeableWeight;
    }


    /**
     * Gets the recipientOfMessage value for this ParticipantDetail.
     * 
     * @return recipientOfMessage
     */
    public java.lang.String getRecipientOfMessage() {
        return recipientOfMessage;
    }


    /**
     * Sets the recipientOfMessage value for this ParticipantDetail.
     * 
     * @param recipientOfMessage
     */
    public void setRecipientOfMessage(java.lang.String recipientOfMessage) {
        this.recipientOfMessage = recipientOfMessage;
    }


    /**
     * Gets the carrierCodeBased value for this ParticipantDetail.
     * 
     * @return carrierCodeBased
     */
    public java.lang.String getCarrierCodeBased() {
        return carrierCodeBased;
    }


    /**
     * Sets the carrierCodeBased value for this ParticipantDetail.
     * 
     * @param carrierCodeBased
     */
    public void setCarrierCodeBased(java.lang.String carrierCodeBased) {
        this.carrierCodeBased = carrierCodeBased;
    }


    /**
     * Gets the totalChargeableWeight value for this ParticipantDetail.
     * 
     * @return totalChargeableWeight
     */
    public java.lang.String getTotalChargeableWeight() {
        return totalChargeableWeight;
    }


    /**
     * Sets the totalChargeableWeight value for this ParticipantDetail.
     * 
     * @param totalChargeableWeight
     */
    public void setTotalChargeableWeight(java.lang.String totalChargeableWeight) {
        this.totalChargeableWeight = totalChargeableWeight;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ParticipantDetail)) return false;
        ParticipantDetail other = (ParticipantDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.recipientOfMessage==null && other.getRecipientOfMessage()==null) || 
             (this.recipientOfMessage!=null &&
              this.recipientOfMessage.equals(other.getRecipientOfMessage()))) &&
            ((this.carrierCodeBased==null && other.getCarrierCodeBased()==null) || 
             (this.carrierCodeBased!=null &&
              this.carrierCodeBased.equals(other.getCarrierCodeBased()))) &&
            ((this.totalChargeableWeight==null && other.getTotalChargeableWeight()==null) || 
             (this.totalChargeableWeight!=null &&
              this.totalChargeableWeight.equals(other.getTotalChargeableWeight())));
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
        if (getRecipientOfMessage() != null) {
            _hashCode += getRecipientOfMessage().hashCode();
        }
        if (getCarrierCodeBased() != null) {
            _hashCode += getCarrierCodeBased().hashCode();
        }
        if (getTotalChargeableWeight() != null) {
            _hashCode += getTotalChargeableWeight().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ParticipantDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ParticipantDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("recipientOfMessage");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RecipientOfMessage"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("carrierCodeBased");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CarrierCodeBased"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("totalChargeableWeight");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TotalChargeableWeight"));
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
