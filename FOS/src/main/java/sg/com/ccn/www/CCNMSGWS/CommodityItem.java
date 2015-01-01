/**
 * CommodityItem.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class CommodityItem  implements java.io.Serializable {
    private java.lang.String commodityItemNumber;

    private java.lang.String ULDRateClass;

    private java.lang.String rateClassCodeBasis;

    private java.lang.String classRatePercentage;

    public CommodityItem() {
    }

    public CommodityItem(
           java.lang.String commodityItemNumber,
           java.lang.String ULDRateClass,
           java.lang.String rateClassCodeBasis,
           java.lang.String classRatePercentage) {
           this.commodityItemNumber = commodityItemNumber;
           this.ULDRateClass = ULDRateClass;
           this.rateClassCodeBasis = rateClassCodeBasis;
           this.classRatePercentage = classRatePercentage;
    }


    /**
     * Gets the commodityItemNumber value for this CommodityItem.
     * 
     * @return commodityItemNumber
     */
    public java.lang.String getCommodityItemNumber() {
        return commodityItemNumber;
    }


    /**
     * Sets the commodityItemNumber value for this CommodityItem.
     * 
     * @param commodityItemNumber
     */
    public void setCommodityItemNumber(java.lang.String commodityItemNumber) {
        this.commodityItemNumber = commodityItemNumber;
    }


    /**
     * Gets the ULDRateClass value for this CommodityItem.
     * 
     * @return ULDRateClass
     */
    public java.lang.String getULDRateClass() {
        return ULDRateClass;
    }


    /**
     * Sets the ULDRateClass value for this CommodityItem.
     * 
     * @param ULDRateClass
     */
    public void setULDRateClass(java.lang.String ULDRateClass) {
        this.ULDRateClass = ULDRateClass;
    }


    /**
     * Gets the rateClassCodeBasis value for this CommodityItem.
     * 
     * @return rateClassCodeBasis
     */
    public java.lang.String getRateClassCodeBasis() {
        return rateClassCodeBasis;
    }


    /**
     * Sets the rateClassCodeBasis value for this CommodityItem.
     * 
     * @param rateClassCodeBasis
     */
    public void setRateClassCodeBasis(java.lang.String rateClassCodeBasis) {
        this.rateClassCodeBasis = rateClassCodeBasis;
    }


    /**
     * Gets the classRatePercentage value for this CommodityItem.
     * 
     * @return classRatePercentage
     */
    public java.lang.String getClassRatePercentage() {
        return classRatePercentage;
    }


    /**
     * Sets the classRatePercentage value for this CommodityItem.
     * 
     * @param classRatePercentage
     */
    public void setClassRatePercentage(java.lang.String classRatePercentage) {
        this.classRatePercentage = classRatePercentage;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CommodityItem)) return false;
        CommodityItem other = (CommodityItem) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.commodityItemNumber==null && other.getCommodityItemNumber()==null) || 
             (this.commodityItemNumber!=null &&
              this.commodityItemNumber.equals(other.getCommodityItemNumber()))) &&
            ((this.ULDRateClass==null && other.getULDRateClass()==null) || 
             (this.ULDRateClass!=null &&
              this.ULDRateClass.equals(other.getULDRateClass()))) &&
            ((this.rateClassCodeBasis==null && other.getRateClassCodeBasis()==null) || 
             (this.rateClassCodeBasis!=null &&
              this.rateClassCodeBasis.equals(other.getRateClassCodeBasis()))) &&
            ((this.classRatePercentage==null && other.getClassRatePercentage()==null) || 
             (this.classRatePercentage!=null &&
              this.classRatePercentage.equals(other.getClassRatePercentage())));
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
        if (getCommodityItemNumber() != null) {
            _hashCode += getCommodityItemNumber().hashCode();
        }
        if (getULDRateClass() != null) {
            _hashCode += getULDRateClass().hashCode();
        }
        if (getRateClassCodeBasis() != null) {
            _hashCode += getRateClassCodeBasis().hashCode();
        }
        if (getClassRatePercentage() != null) {
            _hashCode += getClassRatePercentage().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CommodityItem.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CommodityItem"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("commodityItemNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CommodityItemNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ULDRateClass");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ULDRateClass"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("rateClassCodeBasis");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RateClassCodeBasis"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("classRatePercentage");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ClassRatePercentage"));
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
