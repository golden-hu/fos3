/**
 * DensityGroup.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FSU;

public class DensityGroup  implements java.io.Serializable {
    private java.lang.String densityIndicator;

    private java.lang.String densityGroup;

    public DensityGroup() {
    }

    public DensityGroup(
           java.lang.String densityIndicator,
           java.lang.String densityGroup) {
           this.densityIndicator = densityIndicator;
           this.densityGroup = densityGroup;
    }


    /**
     * Gets the densityIndicator value for this DensityGroup.
     * 
     * @return densityIndicator
     */
    public java.lang.String getDensityIndicator() {
        return densityIndicator;
    }


    /**
     * Sets the densityIndicator value for this DensityGroup.
     * 
     * @param densityIndicator
     */
    public void setDensityIndicator(java.lang.String densityIndicator) {
        this.densityIndicator = densityIndicator;
    }


    /**
     * Gets the densityGroup value for this DensityGroup.
     * 
     * @return densityGroup
     */
    public java.lang.String getDensityGroup() {
        return densityGroup;
    }


    /**
     * Sets the densityGroup value for this DensityGroup.
     * 
     * @param densityGroup
     */
    public void setDensityGroup(java.lang.String densityGroup) {
        this.densityGroup = densityGroup;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DensityGroup)) return false;
        DensityGroup other = (DensityGroup) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.densityIndicator==null && other.getDensityIndicator()==null) || 
             (this.densityIndicator!=null &&
              this.densityIndicator.equals(other.getDensityIndicator()))) &&
            ((this.densityGroup==null && other.getDensityGroup()==null) || 
             (this.densityGroup!=null &&
              this.densityGroup.equals(other.getDensityGroup())));
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
        if (getDensityIndicator() != null) {
            _hashCode += getDensityIndicator().hashCode();
        }
        if (getDensityGroup() != null) {
            _hashCode += getDensityGroup().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DensityGroup.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DensityGroup"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("densityIndicator");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DensityIndicator"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("densityGroup");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DensityGroup"));
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
