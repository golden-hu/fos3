/**
 * ContactDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class ContactDetail  implements java.io.Serializable {
    private java.lang.String contactIdentifier;

    private java.lang.String contactNumber;

    public ContactDetail() {
    }

    public ContactDetail(
           java.lang.String contactIdentifier,
           java.lang.String contactNumber) {
           this.contactIdentifier = contactIdentifier;
           this.contactNumber = contactNumber;
    }


    /**
     * Gets the contactIdentifier value for this ContactDetail.
     * 
     * @return contactIdentifier
     */
    public java.lang.String getContactIdentifier() {
        return contactIdentifier;
    }


    /**
     * Sets the contactIdentifier value for this ContactDetail.
     * 
     * @param contactIdentifier
     */
    public void setContactIdentifier(java.lang.String contactIdentifier) {
        this.contactIdentifier = contactIdentifier;
    }


    /**
     * Gets the contactNumber value for this ContactDetail.
     * 
     * @return contactNumber
     */
    public java.lang.String getContactNumber() {
        return contactNumber;
    }


    /**
     * Sets the contactNumber value for this ContactDetail.
     * 
     * @param contactNumber
     */
    public void setContactNumber(java.lang.String contactNumber) {
        this.contactNumber = contactNumber;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ContactDetail)) return false;
        ContactDetail other = (ContactDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.contactIdentifier==null && other.getContactIdentifier()==null) || 
             (this.contactIdentifier!=null &&
              this.contactIdentifier.equals(other.getContactIdentifier()))) &&
            ((this.contactNumber==null && other.getContactNumber()==null) || 
             (this.contactNumber!=null &&
              this.contactNumber.equals(other.getContactNumber())));
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
        if (getContactIdentifier() != null) {
            _hashCode += getContactIdentifier().hashCode();
        }
        if (getContactNumber() != null) {
            _hashCode += getContactNumber().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ContactDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ContactDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("contactIdentifier");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ContactIdentifier"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("contactNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ContactNumber"));
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
