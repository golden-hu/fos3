/**
 * NatureOfGoods.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class NatureOfGoods  implements java.io.Serializable {
    private java.lang.String manifestDescriptionOfGoods;

    public NatureOfGoods() {
    }

    public NatureOfGoods(
           java.lang.String manifestDescriptionOfGoods) {
           this.manifestDescriptionOfGoods = manifestDescriptionOfGoods;
    }


    /**
     * Gets the manifestDescriptionOfGoods value for this NatureOfGoods.
     * 
     * @return manifestDescriptionOfGoods
     */
    public java.lang.String getManifestDescriptionOfGoods() {
        return manifestDescriptionOfGoods;
    }


    /**
     * Sets the manifestDescriptionOfGoods value for this NatureOfGoods.
     * 
     * @param manifestDescriptionOfGoods
     */
    public void setManifestDescriptionOfGoods(java.lang.String manifestDescriptionOfGoods) {
        this.manifestDescriptionOfGoods = manifestDescriptionOfGoods;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof NatureOfGoods)) return false;
        NatureOfGoods other = (NatureOfGoods) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.manifestDescriptionOfGoods==null && other.getManifestDescriptionOfGoods()==null) || 
             (this.manifestDescriptionOfGoods!=null &&
              this.manifestDescriptionOfGoods.equals(other.getManifestDescriptionOfGoods())));
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
        if (getManifestDescriptionOfGoods() != null) {
            _hashCode += getManifestDescriptionOfGoods().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(NatureOfGoods.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "NatureOfGoods"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("manifestDescriptionOfGoods");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ManifestDescriptionOfGoods"));
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
