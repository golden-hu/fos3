/**
 * OtherParticipantInfo.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class OtherParticipantInfo  implements java.io.Serializable {
    private java.lang.String name;

    private sg.com.ccn.FWB.OthParticipantOfficeMessage otherParticipantOfficeMessage;

    private sg.com.ccn.FWB.OthParticipantOfficeFileReference otherParticipantOfficeFileReference;

    private sg.com.ccn.FWB.OthParticipantIdentification otherParticipantIdentification;

    public OtherParticipantInfo() {
    }

    public OtherParticipantInfo(
           java.lang.String name,
           sg.com.ccn.FWB.OthParticipantOfficeMessage otherParticipantOfficeMessage,
           sg.com.ccn.FWB.OthParticipantOfficeFileReference otherParticipantOfficeFileReference,
           sg.com.ccn.FWB.OthParticipantIdentification otherParticipantIdentification) {
           this.name = name;
           this.otherParticipantOfficeMessage = otherParticipantOfficeMessage;
           this.otherParticipantOfficeFileReference = otherParticipantOfficeFileReference;
           this.otherParticipantIdentification = otherParticipantIdentification;
    }


    /**
     * Gets the name value for this OtherParticipantInfo.
     * 
     * @return name
     */
    public java.lang.String getName() {
        return name;
    }


    /**
     * Sets the name value for this OtherParticipantInfo.
     * 
     * @param name
     */
    public void setName(java.lang.String name) {
        this.name = name;
    }


    /**
     * Gets the otherParticipantOfficeMessage value for this OtherParticipantInfo.
     * 
     * @return otherParticipantOfficeMessage
     */
    public sg.com.ccn.FWB.OthParticipantOfficeMessage getOtherParticipantOfficeMessage() {
        return otherParticipantOfficeMessage;
    }


    /**
     * Sets the otherParticipantOfficeMessage value for this OtherParticipantInfo.
     * 
     * @param otherParticipantOfficeMessage
     */
    public void setOtherParticipantOfficeMessage(sg.com.ccn.FWB.OthParticipantOfficeMessage otherParticipantOfficeMessage) {
        this.otherParticipantOfficeMessage = otherParticipantOfficeMessage;
    }


    /**
     * Gets the otherParticipantOfficeFileReference value for this OtherParticipantInfo.
     * 
     * @return otherParticipantOfficeFileReference
     */
    public sg.com.ccn.FWB.OthParticipantOfficeFileReference getOtherParticipantOfficeFileReference() {
        return otherParticipantOfficeFileReference;
    }


    /**
     * Sets the otherParticipantOfficeFileReference value for this OtherParticipantInfo.
     * 
     * @param otherParticipantOfficeFileReference
     */
    public void setOtherParticipantOfficeFileReference(sg.com.ccn.FWB.OthParticipantOfficeFileReference otherParticipantOfficeFileReference) {
        this.otherParticipantOfficeFileReference = otherParticipantOfficeFileReference;
    }


    /**
     * Gets the otherParticipantIdentification value for this OtherParticipantInfo.
     * 
     * @return otherParticipantIdentification
     */
    public sg.com.ccn.FWB.OthParticipantIdentification getOtherParticipantIdentification() {
        return otherParticipantIdentification;
    }


    /**
     * Sets the otherParticipantIdentification value for this OtherParticipantInfo.
     * 
     * @param otherParticipantIdentification
     */
    public void setOtherParticipantIdentification(sg.com.ccn.FWB.OthParticipantIdentification otherParticipantIdentification) {
        this.otherParticipantIdentification = otherParticipantIdentification;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof OtherParticipantInfo)) return false;
        OtherParticipantInfo other = (OtherParticipantInfo) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.name==null && other.getName()==null) || 
             (this.name!=null &&
              this.name.equals(other.getName()))) &&
            ((this.otherParticipantOfficeMessage==null && other.getOtherParticipantOfficeMessage()==null) || 
             (this.otherParticipantOfficeMessage!=null &&
              this.otherParticipantOfficeMessage.equals(other.getOtherParticipantOfficeMessage()))) &&
            ((this.otherParticipantOfficeFileReference==null && other.getOtherParticipantOfficeFileReference()==null) || 
             (this.otherParticipantOfficeFileReference!=null &&
              this.otherParticipantOfficeFileReference.equals(other.getOtherParticipantOfficeFileReference()))) &&
            ((this.otherParticipantIdentification==null && other.getOtherParticipantIdentification()==null) || 
             (this.otherParticipantIdentification!=null &&
              this.otherParticipantIdentification.equals(other.getOtherParticipantIdentification())));
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
        if (getName() != null) {
            _hashCode += getName().hashCode();
        }
        if (getOtherParticipantOfficeMessage() != null) {
            _hashCode += getOtherParticipantOfficeMessage().hashCode();
        }
        if (getOtherParticipantOfficeFileReference() != null) {
            _hashCode += getOtherParticipantOfficeFileReference().hashCode();
        }
        if (getOtherParticipantIdentification() != null) {
            _hashCode += getOtherParticipantIdentification().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(OtherParticipantInfo.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherParticipantInfo"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("name");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Name"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherParticipantOfficeMessage");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherParticipantOfficeMessage"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OthParticipantOfficeMessage"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherParticipantOfficeFileReference");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherParticipantOfficeFileReference"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OthParticipantOfficeFileReference"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherParticipantIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherParticipantIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OthParticipantIdentification"));
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
