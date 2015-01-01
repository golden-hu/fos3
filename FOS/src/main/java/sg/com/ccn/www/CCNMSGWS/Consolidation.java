/**
 * Consolidation.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class Consolidation  implements java.io.Serializable {
    private java.lang.String natureQuantityGoods;

    public Consolidation() {
    }

    public Consolidation(
           java.lang.String natureQuantityGoods) {
           this.natureQuantityGoods = natureQuantityGoods;
    }


    /**
     * Gets the natureQuantityGoods value for this Consolidation.
     * 
     * @return natureQuantityGoods
     */
    public java.lang.String getNatureQuantityGoods() {
        return natureQuantityGoods;
    }


    /**
     * Sets the natureQuantityGoods value for this Consolidation.
     * 
     * @param natureQuantityGoods
     */
    public void setNatureQuantityGoods(java.lang.String natureQuantityGoods) {
        this.natureQuantityGoods = natureQuantityGoods;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Consolidation)) return false;
        Consolidation other = (Consolidation) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.natureQuantityGoods==null && other.getNatureQuantityGoods()==null) || 
             (this.natureQuantityGoods!=null &&
              this.natureQuantityGoods.equals(other.getNatureQuantityGoods())));
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
        if (getNatureQuantityGoods() != null) {
            _hashCode += getNatureQuantityGoods().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Consolidation.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Consolidation"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("natureQuantityGoods");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NatureQuantityGoods"));
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
