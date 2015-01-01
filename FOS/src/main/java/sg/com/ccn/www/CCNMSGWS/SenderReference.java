/**
 * SenderReference.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class SenderReference  implements java.io.Serializable {
    private sg.com.ccn.www.CCNMSGWS.SenderOfficeMessageAddress senderOfficeMessageAddress;

    private sg.com.ccn.www.CCNMSGWS.SenderOfficeFileReference senderOfficeFileReference;

    private sg.com.ccn.www.CCNMSGWS.SenderParticipantIdentification senderParticipantIdentification;

    public SenderReference() {
    }

    public SenderReference(
           sg.com.ccn.www.CCNMSGWS.SenderOfficeMessageAddress senderOfficeMessageAddress,
           sg.com.ccn.www.CCNMSGWS.SenderOfficeFileReference senderOfficeFileReference,
           sg.com.ccn.www.CCNMSGWS.SenderParticipantIdentification senderParticipantIdentification) {
           this.senderOfficeMessageAddress = senderOfficeMessageAddress;
           this.senderOfficeFileReference = senderOfficeFileReference;
           this.senderParticipantIdentification = senderParticipantIdentification;
    }


    /**
     * Gets the senderOfficeMessageAddress value for this SenderReference.
     * 
     * @return senderOfficeMessageAddress
     */
    public sg.com.ccn.www.CCNMSGWS.SenderOfficeMessageAddress getSenderOfficeMessageAddress() {
        return senderOfficeMessageAddress;
    }


    /**
     * Sets the senderOfficeMessageAddress value for this SenderReference.
     * 
     * @param senderOfficeMessageAddress
     */
    public void setSenderOfficeMessageAddress(sg.com.ccn.www.CCNMSGWS.SenderOfficeMessageAddress senderOfficeMessageAddress) {
        this.senderOfficeMessageAddress = senderOfficeMessageAddress;
    }


    /**
     * Gets the senderOfficeFileReference value for this SenderReference.
     * 
     * @return senderOfficeFileReference
     */
    public sg.com.ccn.www.CCNMSGWS.SenderOfficeFileReference getSenderOfficeFileReference() {
        return senderOfficeFileReference;
    }


    /**
     * Sets the senderOfficeFileReference value for this SenderReference.
     * 
     * @param senderOfficeFileReference
     */
    public void setSenderOfficeFileReference(sg.com.ccn.www.CCNMSGWS.SenderOfficeFileReference senderOfficeFileReference) {
        this.senderOfficeFileReference = senderOfficeFileReference;
    }


    /**
     * Gets the senderParticipantIdentification value for this SenderReference.
     * 
     * @return senderParticipantIdentification
     */
    public sg.com.ccn.www.CCNMSGWS.SenderParticipantIdentification getSenderParticipantIdentification() {
        return senderParticipantIdentification;
    }


    /**
     * Sets the senderParticipantIdentification value for this SenderReference.
     * 
     * @param senderParticipantIdentification
     */
    public void setSenderParticipantIdentification(sg.com.ccn.www.CCNMSGWS.SenderParticipantIdentification senderParticipantIdentification) {
        this.senderParticipantIdentification = senderParticipantIdentification;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof SenderReference)) return false;
        SenderReference other = (SenderReference) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.senderOfficeMessageAddress==null && other.getSenderOfficeMessageAddress()==null) || 
             (this.senderOfficeMessageAddress!=null &&
              this.senderOfficeMessageAddress.equals(other.getSenderOfficeMessageAddress()))) &&
            ((this.senderOfficeFileReference==null && other.getSenderOfficeFileReference()==null) || 
             (this.senderOfficeFileReference!=null &&
              this.senderOfficeFileReference.equals(other.getSenderOfficeFileReference()))) &&
            ((this.senderParticipantIdentification==null && other.getSenderParticipantIdentification()==null) || 
             (this.senderParticipantIdentification!=null &&
              this.senderParticipantIdentification.equals(other.getSenderParticipantIdentification())));
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
        if (getSenderOfficeMessageAddress() != null) {
            _hashCode += getSenderOfficeMessageAddress().hashCode();
        }
        if (getSenderOfficeFileReference() != null) {
            _hashCode += getSenderOfficeFileReference().hashCode();
        }
        if (getSenderParticipantIdentification() != null) {
            _hashCode += getSenderParticipantIdentification().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(SenderReference.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SenderReference"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("senderOfficeMessageAddress");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SenderOfficeMessageAddress"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SenderOfficeMessageAddress"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("senderOfficeFileReference");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SenderOfficeFileReference"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SenderOfficeFileReference"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("senderParticipantIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SenderParticipantIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SenderParticipantIdentification"));
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
