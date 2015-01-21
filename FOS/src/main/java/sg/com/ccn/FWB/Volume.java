/**
 * Volume.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class Volume  implements java.io.Serializable {
    private java.lang.String volumeCode;

    private java.lang.String volumeAmount;

    public Volume() {
    }

    public Volume(
           java.lang.String volumeCode,
           java.lang.String volumeAmount) {
           this.volumeCode = volumeCode;
           this.volumeAmount = volumeAmount;
    }


    /**
     * Gets the volumeCode value for this Volume.
     * 
     * @return volumeCode
     */
    public java.lang.String getVolumeCode() {
        return volumeCode;
    }


    /**
     * Sets the volumeCode value for this Volume.
     * 
     * @param volumeCode
     */
    public void setVolumeCode(java.lang.String volumeCode) {
        this.volumeCode = volumeCode;
    }


    /**
     * Gets the volumeAmount value for this Volume.
     * 
     * @return volumeAmount
     */
    public java.lang.String getVolumeAmount() {
        return volumeAmount;
    }


    /**
     * Sets the volumeAmount value for this Volume.
     * 
     * @param volumeAmount
     */
    public void setVolumeAmount(java.lang.String volumeAmount) {
        this.volumeAmount = volumeAmount;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Volume)) return false;
        Volume other = (Volume) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.volumeCode==null && other.getVolumeCode()==null) || 
             (this.volumeCode!=null &&
              this.volumeCode.equals(other.getVolumeCode()))) &&
            ((this.volumeAmount==null && other.getVolumeAmount()==null) || 
             (this.volumeAmount!=null &&
              this.volumeAmount.equals(other.getVolumeAmount())));
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
        if (getVolumeCode() != null) {
            _hashCode += getVolumeCode().hashCode();
        }
        if (getVolumeAmount() != null) {
            _hashCode += getVolumeAmount().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Volume.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Volume"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("volumeCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "VolumeCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("volumeAmount");
        elemField.setXmlName(new javax.xml.namespace.QName("", "VolumeAmount"));
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
