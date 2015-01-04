/**
 * FreeTextDescriptionOfGoods.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class FreeTextDescriptionOfGoods  implements java.io.Serializable {
    private java.lang.String freeText;

    public FreeTextDescriptionOfGoods() {
    }

    public FreeTextDescriptionOfGoods(
           java.lang.String freeText) {
           this.freeText = freeText;
    }


    /**
     * Gets the freeText value for this FreeTextDescriptionOfGoods.
     * 
     * @return freeText
     */
    public java.lang.String getFreeText() {
        return freeText;
    }


    /**
     * Sets the freeText value for this FreeTextDescriptionOfGoods.
     * 
     * @param freeText
     */
    public void setFreeText(java.lang.String freeText) {
        this.freeText = freeText;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FreeTextDescriptionOfGoods)) return false;
        FreeTextDescriptionOfGoods other = (FreeTextDescriptionOfGoods) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.freeText==null && other.getFreeText()==null) || 
             (this.freeText!=null &&
              this.freeText.equals(other.getFreeText())));
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
        if (getFreeText() != null) {
            _hashCode += getFreeText().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FreeTextDescriptionOfGoods.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FreeTextDescriptionOfGoods"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("freeText");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FreeText"));
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
