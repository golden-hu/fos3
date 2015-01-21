/**
 * DimensionDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class DimensionDetail  implements java.io.Serializable {
    private java.lang.String length;

    private java.lang.String breadth;

    private java.lang.String height;

    private java.lang.String numberOfPackages;

    public DimensionDetail() {
    }

    public DimensionDetail(
           java.lang.String length,
           java.lang.String breadth,
           java.lang.String height,
           java.lang.String numberOfPackages) {
           this.length = length;
           this.breadth = breadth;
           this.height = height;
           this.numberOfPackages = numberOfPackages;
    }


    /**
     * Gets the length value for this DimensionDetail.
     * 
     * @return length
     */
    public java.lang.String getLength() {
        return length;
    }


    /**
     * Sets the length value for this DimensionDetail.
     * 
     * @param length
     */
    public void setLength(java.lang.String length) {
        this.length = length;
    }


    /**
     * Gets the breadth value for this DimensionDetail.
     * 
     * @return breadth
     */
    public java.lang.String getBreadth() {
        return breadth;
    }


    /**
     * Sets the breadth value for this DimensionDetail.
     * 
     * @param breadth
     */
    public void setBreadth(java.lang.String breadth) {
        this.breadth = breadth;
    }


    /**
     * Gets the height value for this DimensionDetail.
     * 
     * @return height
     */
    public java.lang.String getHeight() {
        return height;
    }


    /**
     * Sets the height value for this DimensionDetail.
     * 
     * @param height
     */
    public void setHeight(java.lang.String height) {
        this.height = height;
    }


    /**
     * Gets the numberOfPackages value for this DimensionDetail.
     * 
     * @return numberOfPackages
     */
    public java.lang.String getNumberOfPackages() {
        return numberOfPackages;
    }


    /**
     * Sets the numberOfPackages value for this DimensionDetail.
     * 
     * @param numberOfPackages
     */
    public void setNumberOfPackages(java.lang.String numberOfPackages) {
        this.numberOfPackages = numberOfPackages;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof DimensionDetail)) return false;
        DimensionDetail other = (DimensionDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.length==null && other.getLength()==null) || 
             (this.length!=null &&
              this.length.equals(other.getLength()))) &&
            ((this.breadth==null && other.getBreadth()==null) || 
             (this.breadth!=null &&
              this.breadth.equals(other.getBreadth()))) &&
            ((this.height==null && other.getHeight()==null) || 
             (this.height!=null &&
              this.height.equals(other.getHeight()))) &&
            ((this.numberOfPackages==null && other.getNumberOfPackages()==null) || 
             (this.numberOfPackages!=null &&
              this.numberOfPackages.equals(other.getNumberOfPackages())));
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
        if (getLength() != null) {
            _hashCode += getLength().hashCode();
        }
        if (getBreadth() != null) {
            _hashCode += getBreadth().hashCode();
        }
        if (getHeight() != null) {
            _hashCode += getHeight().hashCode();
        }
        if (getNumberOfPackages() != null) {
            _hashCode += getNumberOfPackages().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(DimensionDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DimensionDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("length");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Length"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("breadth");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Breadth"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("height");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Height"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("numberOfPackages");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NumberOfPackages"));
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
