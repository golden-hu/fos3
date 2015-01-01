/**
 * AgtAccountDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class AgtAccountDetail  implements java.io.Serializable {
    private java.lang.String accountNumber;

    private java.lang.String agentNumericCode;

    private java.lang.String agentCASSAddress;

    private java.lang.String participantIdentifier;

    public AgtAccountDetail() {
    }

    public AgtAccountDetail(
           java.lang.String accountNumber,
           java.lang.String agentNumericCode,
           java.lang.String agentCASSAddress,
           java.lang.String participantIdentifier) {
           this.accountNumber = accountNumber;
           this.agentNumericCode = agentNumericCode;
           this.agentCASSAddress = agentCASSAddress;
           this.participantIdentifier = participantIdentifier;
    }


    /**
     * Gets the accountNumber value for this AgtAccountDetail.
     * 
     * @return accountNumber
     */
    public java.lang.String getAccountNumber() {
        return accountNumber;
    }


    /**
     * Sets the accountNumber value for this AgtAccountDetail.
     * 
     * @param accountNumber
     */
    public void setAccountNumber(java.lang.String accountNumber) {
        this.accountNumber = accountNumber;
    }


    /**
     * Gets the agentNumericCode value for this AgtAccountDetail.
     * 
     * @return agentNumericCode
     */
    public java.lang.String getAgentNumericCode() {
        return agentNumericCode;
    }


    /**
     * Sets the agentNumericCode value for this AgtAccountDetail.
     * 
     * @param agentNumericCode
     */
    public void setAgentNumericCode(java.lang.String agentNumericCode) {
        this.agentNumericCode = agentNumericCode;
    }


    /**
     * Gets the agentCASSAddress value for this AgtAccountDetail.
     * 
     * @return agentCASSAddress
     */
    public java.lang.String getAgentCASSAddress() {
        return agentCASSAddress;
    }


    /**
     * Sets the agentCASSAddress value for this AgtAccountDetail.
     * 
     * @param agentCASSAddress
     */
    public void setAgentCASSAddress(java.lang.String agentCASSAddress) {
        this.agentCASSAddress = agentCASSAddress;
    }


    /**
     * Gets the participantIdentifier value for this AgtAccountDetail.
     * 
     * @return participantIdentifier
     */
    public java.lang.String getParticipantIdentifier() {
        return participantIdentifier;
    }


    /**
     * Sets the participantIdentifier value for this AgtAccountDetail.
     * 
     * @param participantIdentifier
     */
    public void setParticipantIdentifier(java.lang.String participantIdentifier) {
        this.participantIdentifier = participantIdentifier;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof AgtAccountDetail)) return false;
        AgtAccountDetail other = (AgtAccountDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.accountNumber==null && other.getAccountNumber()==null) || 
             (this.accountNumber!=null &&
              this.accountNumber.equals(other.getAccountNumber()))) &&
            ((this.agentNumericCode==null && other.getAgentNumericCode()==null) || 
             (this.agentNumericCode!=null &&
              this.agentNumericCode.equals(other.getAgentNumericCode()))) &&
            ((this.agentCASSAddress==null && other.getAgentCASSAddress()==null) || 
             (this.agentCASSAddress!=null &&
              this.agentCASSAddress.equals(other.getAgentCASSAddress()))) &&
            ((this.participantIdentifier==null && other.getParticipantIdentifier()==null) || 
             (this.participantIdentifier!=null &&
              this.participantIdentifier.equals(other.getParticipantIdentifier())));
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
        if (getAccountNumber() != null) {
            _hashCode += getAccountNumber().hashCode();
        }
        if (getAgentNumericCode() != null) {
            _hashCode += getAgentNumericCode().hashCode();
        }
        if (getAgentCASSAddress() != null) {
            _hashCode += getAgentCASSAddress().hashCode();
        }
        if (getParticipantIdentifier() != null) {
            _hashCode += getParticipantIdentifier().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(AgtAccountDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AgtAccountDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("accountNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AccountNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("agentNumericCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AgentNumericCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("agentCASSAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AgentCASSAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("participantIdentifier");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ParticipantIdentifier"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
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
