/**
 * CommodityDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class CommodityDetail  implements java.io.Serializable {
    private java.lang.String commodity;

    private java.lang.String numberOfPackages;

    private java.lang.String grossWeight;

    private java.lang.String chargeableWeight;

    public CommodityDetail() {
    }

    public CommodityDetail(
           java.lang.String commodity,
           java.lang.String numberOfPackages,
           java.lang.String grossWeight,
           java.lang.String chargeableWeight) {
           this.commodity = commodity;
           this.numberOfPackages = numberOfPackages;
           this.grossWeight = grossWeight;
           this.chargeableWeight = chargeableWeight;
    }


    /**
     * Gets the commodity value for this CommodityDetail.
     * 
     * @return commodity
     */
    public java.lang.String getCommodity() {
        return commodity;
    }


    /**
     * Sets the commodity value for this CommodityDetail.
     * 
     * @param commodity
     */
    public void setCommodity(java.lang.String commodity) {
        this.commodity = commodity;
    }


    /**
     * Gets the numberOfPackages value for this CommodityDetail.
     * 
     * @return numberOfPackages
     */
    public java.lang.String getNumberOfPackages() {
        return numberOfPackages;
    }


    /**
     * Sets the numberOfPackages value for this CommodityDetail.
     * 
     * @param numberOfPackages
     */
    public void setNumberOfPackages(java.lang.String numberOfPackages) {
        this.numberOfPackages = numberOfPackages;
    }


    /**
     * Gets the grossWeight value for this CommodityDetail.
     * 
     * @return grossWeight
     */
    public java.lang.String getGrossWeight() {
        return grossWeight;
    }


    /**
     * Sets the grossWeight value for this CommodityDetail.
     * 
     * @param grossWeight
     */
    public void setGrossWeight(java.lang.String grossWeight) {
        this.grossWeight = grossWeight;
    }


    /**
     * Gets the chargeableWeight value for this CommodityDetail.
     * 
     * @return chargeableWeight
     */
    public java.lang.String getChargeableWeight() {
        return chargeableWeight;
    }


    /**
     * Sets the chargeableWeight value for this CommodityDetail.
     * 
     * @param chargeableWeight
     */
    public void setChargeableWeight(java.lang.String chargeableWeight) {
        this.chargeableWeight = chargeableWeight;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CommodityDetail)) return false;
        CommodityDetail other = (CommodityDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.commodity==null && other.getCommodity()==null) || 
             (this.commodity!=null &&
              this.commodity.equals(other.getCommodity()))) &&
            ((this.numberOfPackages==null && other.getNumberOfPackages()==null) || 
             (this.numberOfPackages!=null &&
              this.numberOfPackages.equals(other.getNumberOfPackages()))) &&
            ((this.grossWeight==null && other.getGrossWeight()==null) || 
             (this.grossWeight!=null &&
              this.grossWeight.equals(other.getGrossWeight()))) &&
            ((this.chargeableWeight==null && other.getChargeableWeight()==null) || 
             (this.chargeableWeight!=null &&
              this.chargeableWeight.equals(other.getChargeableWeight())));
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
        if (getCommodity() != null) {
            _hashCode += getCommodity().hashCode();
        }
        if (getNumberOfPackages() != null) {
            _hashCode += getNumberOfPackages().hashCode();
        }
        if (getGrossWeight() != null) {
            _hashCode += getGrossWeight().hashCode();
        }
        if (getChargeableWeight() != null) {
            _hashCode += getChargeableWeight().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CommodityDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CommodityDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("commodity");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Commodity"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("numberOfPackages");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NumberOfPackages"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("grossWeight");
        elemField.setXmlName(new javax.xml.namespace.QName("", "GrossWeight"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("chargeableWeight");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ChargeableWeight"));
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
