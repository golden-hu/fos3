/**
 * HarmonisedCommodity.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class HarmonisedCommodity  implements java.io.Serializable {
    private java.lang.String harmonisedCommodityCode;

    public HarmonisedCommodity() {
    }

    public HarmonisedCommodity(
           java.lang.String harmonisedCommodityCode) {
           this.harmonisedCommodityCode = harmonisedCommodityCode;
    }


    /**
     * Gets the harmonisedCommodityCode value for this HarmonisedCommodity.
     * 
     * @return harmonisedCommodityCode
     */
    public java.lang.String getHarmonisedCommodityCode() {
        return harmonisedCommodityCode;
    }


    /**
     * Sets the harmonisedCommodityCode value for this HarmonisedCommodity.
     * 
     * @param harmonisedCommodityCode
     */
    public void setHarmonisedCommodityCode(java.lang.String harmonisedCommodityCode) {
        this.harmonisedCommodityCode = harmonisedCommodityCode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof HarmonisedCommodity)) return false;
        HarmonisedCommodity other = (HarmonisedCommodity) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.harmonisedCommodityCode==null && other.getHarmonisedCommodityCode()==null) || 
             (this.harmonisedCommodityCode!=null &&
              this.harmonisedCommodityCode.equals(other.getHarmonisedCommodityCode())));
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
        if (getHarmonisedCommodityCode() != null) {
            _hashCode += getHarmonisedCommodityCode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(HarmonisedCommodity.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "HarmonisedCommodity"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("harmonisedCommodityCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "HarmonisedCommodityCode"));
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
