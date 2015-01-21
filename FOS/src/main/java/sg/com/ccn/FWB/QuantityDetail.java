/**
 * QuantityDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class QuantityDetail  implements java.io.Serializable {
    private java.lang.String shipmentDescriptionCode;

    private java.lang.String numberOfPieces;

    private java.lang.String weightCode;

    private java.lang.String weight;

    public QuantityDetail() {
    }

    public QuantityDetail(
           java.lang.String shipmentDescriptionCode,
           java.lang.String numberOfPieces,
           java.lang.String weightCode,
           java.lang.String weight) {
           this.shipmentDescriptionCode = shipmentDescriptionCode;
           this.numberOfPieces = numberOfPieces;
           this.weightCode = weightCode;
           this.weight = weight;
    }


    /**
     * Gets the shipmentDescriptionCode value for this QuantityDetail.
     * 
     * @return shipmentDescriptionCode
     */
    public java.lang.String getShipmentDescriptionCode() {
        return shipmentDescriptionCode;
    }


    /**
     * Sets the shipmentDescriptionCode value for this QuantityDetail.
     * 
     * @param shipmentDescriptionCode
     */
    public void setShipmentDescriptionCode(java.lang.String shipmentDescriptionCode) {
        this.shipmentDescriptionCode = shipmentDescriptionCode;
    }


    /**
     * Gets the numberOfPieces value for this QuantityDetail.
     * 
     * @return numberOfPieces
     */
    public java.lang.String getNumberOfPieces() {
        return numberOfPieces;
    }


    /**
     * Sets the numberOfPieces value for this QuantityDetail.
     * 
     * @param numberOfPieces
     */
    public void setNumberOfPieces(java.lang.String numberOfPieces) {
        this.numberOfPieces = numberOfPieces;
    }


    /**
     * Gets the weightCode value for this QuantityDetail.
     * 
     * @return weightCode
     */
    public java.lang.String getWeightCode() {
        return weightCode;
    }


    /**
     * Sets the weightCode value for this QuantityDetail.
     * 
     * @param weightCode
     */
    public void setWeightCode(java.lang.String weightCode) {
        this.weightCode = weightCode;
    }


    /**
     * Gets the weight value for this QuantityDetail.
     * 
     * @return weight
     */
    public java.lang.String getWeight() {
        return weight;
    }


    /**
     * Sets the weight value for this QuantityDetail.
     * 
     * @param weight
     */
    public void setWeight(java.lang.String weight) {
        this.weight = weight;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof QuantityDetail)) return false;
        QuantityDetail other = (QuantityDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.shipmentDescriptionCode==null && other.getShipmentDescriptionCode()==null) || 
             (this.shipmentDescriptionCode!=null &&
              this.shipmentDescriptionCode.equals(other.getShipmentDescriptionCode()))) &&
            ((this.numberOfPieces==null && other.getNumberOfPieces()==null) || 
             (this.numberOfPieces!=null &&
              this.numberOfPieces.equals(other.getNumberOfPieces()))) &&
            ((this.weightCode==null && other.getWeightCode()==null) || 
             (this.weightCode!=null &&
              this.weightCode.equals(other.getWeightCode()))) &&
            ((this.weight==null && other.getWeight()==null) || 
             (this.weight!=null &&
              this.weight.equals(other.getWeight())));
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
        if (getShipmentDescriptionCode() != null) {
            _hashCode += getShipmentDescriptionCode().hashCode();
        }
        if (getNumberOfPieces() != null) {
            _hashCode += getNumberOfPieces().hashCode();
        }
        if (getWeightCode() != null) {
            _hashCode += getWeightCode().hashCode();
        }
        if (getWeight() != null) {
            _hashCode += getWeight().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(QuantityDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "QuantityDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipmentDescriptionCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipmentDescriptionCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("numberOfPieces");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NumberOfPieces"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("weightCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "WeightCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("weight");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Weight"));
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
