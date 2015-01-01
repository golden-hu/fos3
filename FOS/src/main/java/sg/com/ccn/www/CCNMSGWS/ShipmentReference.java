/**
 * ShipmentReference.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class ShipmentReference  implements java.io.Serializable {
    private java.lang.String referenceNumber;

    private java.lang.String supplementaryShipmentInfo1;

    private java.lang.String supplementaryShipmentInfo2;

    public ShipmentReference() {
    }

    public ShipmentReference(
           java.lang.String referenceNumber,
           java.lang.String supplementaryShipmentInfo1,
           java.lang.String supplementaryShipmentInfo2) {
           this.referenceNumber = referenceNumber;
           this.supplementaryShipmentInfo1 = supplementaryShipmentInfo1;
           this.supplementaryShipmentInfo2 = supplementaryShipmentInfo2;
    }


    /**
     * Gets the referenceNumber value for this ShipmentReference.
     * 
     * @return referenceNumber
     */
    public java.lang.String getReferenceNumber() {
        return referenceNumber;
    }


    /**
     * Sets the referenceNumber value for this ShipmentReference.
     * 
     * @param referenceNumber
     */
    public void setReferenceNumber(java.lang.String referenceNumber) {
        this.referenceNumber = referenceNumber;
    }


    /**
     * Gets the supplementaryShipmentInfo1 value for this ShipmentReference.
     * 
     * @return supplementaryShipmentInfo1
     */
    public java.lang.String getSupplementaryShipmentInfo1() {
        return supplementaryShipmentInfo1;
    }


    /**
     * Sets the supplementaryShipmentInfo1 value for this ShipmentReference.
     * 
     * @param supplementaryShipmentInfo1
     */
    public void setSupplementaryShipmentInfo1(java.lang.String supplementaryShipmentInfo1) {
        this.supplementaryShipmentInfo1 = supplementaryShipmentInfo1;
    }


    /**
     * Gets the supplementaryShipmentInfo2 value for this ShipmentReference.
     * 
     * @return supplementaryShipmentInfo2
     */
    public java.lang.String getSupplementaryShipmentInfo2() {
        return supplementaryShipmentInfo2;
    }


    /**
     * Sets the supplementaryShipmentInfo2 value for this ShipmentReference.
     * 
     * @param supplementaryShipmentInfo2
     */
    public void setSupplementaryShipmentInfo2(java.lang.String supplementaryShipmentInfo2) {
        this.supplementaryShipmentInfo2 = supplementaryShipmentInfo2;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ShipmentReference)) return false;
        ShipmentReference other = (ShipmentReference) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.referenceNumber==null && other.getReferenceNumber()==null) || 
             (this.referenceNumber!=null &&
              this.referenceNumber.equals(other.getReferenceNumber()))) &&
            ((this.supplementaryShipmentInfo1==null && other.getSupplementaryShipmentInfo1()==null) || 
             (this.supplementaryShipmentInfo1!=null &&
              this.supplementaryShipmentInfo1.equals(other.getSupplementaryShipmentInfo1()))) &&
            ((this.supplementaryShipmentInfo2==null && other.getSupplementaryShipmentInfo2()==null) || 
             (this.supplementaryShipmentInfo2!=null &&
              this.supplementaryShipmentInfo2.equals(other.getSupplementaryShipmentInfo2())));
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
        if (getReferenceNumber() != null) {
            _hashCode += getReferenceNumber().hashCode();
        }
        if (getSupplementaryShipmentInfo1() != null) {
            _hashCode += getSupplementaryShipmentInfo1().hashCode();
        }
        if (getSupplementaryShipmentInfo2() != null) {
            _hashCode += getSupplementaryShipmentInfo2().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ShipmentReference.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ShipmentReference"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("referenceNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ReferenceNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("supplementaryShipmentInfo1");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SupplementaryShipmentInfo1"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("supplementaryShipmentInfo2");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SupplementaryShipmentInfo2"));
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
