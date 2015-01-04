/**
 * HouseWaybillTotals.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class HouseWaybillTotals  implements java.io.Serializable {
    private java.lang.String numberOfPieces;

    private java.lang.String weightCode;

    private java.lang.String weight;

    private java.lang.String SLAC;

    public HouseWaybillTotals() {
    }

    public HouseWaybillTotals(
           java.lang.String numberOfPieces,
           java.lang.String weightCode,
           java.lang.String weight,
           java.lang.String SLAC) {
           this.numberOfPieces = numberOfPieces;
           this.weightCode = weightCode;
           this.weight = weight;
           this.SLAC = SLAC;
    }


    /**
     * Gets the numberOfPieces value for this HouseWaybillTotals.
     * 
     * @return numberOfPieces
     */
    public java.lang.String getNumberOfPieces() {
        return numberOfPieces;
    }


    /**
     * Sets the numberOfPieces value for this HouseWaybillTotals.
     * 
     * @param numberOfPieces
     */
    public void setNumberOfPieces(java.lang.String numberOfPieces) {
        this.numberOfPieces = numberOfPieces;
    }


    /**
     * Gets the weightCode value for this HouseWaybillTotals.
     * 
     * @return weightCode
     */
    public java.lang.String getWeightCode() {
        return weightCode;
    }


    /**
     * Sets the weightCode value for this HouseWaybillTotals.
     * 
     * @param weightCode
     */
    public void setWeightCode(java.lang.String weightCode) {
        this.weightCode = weightCode;
    }


    /**
     * Gets the weight value for this HouseWaybillTotals.
     * 
     * @return weight
     */
    public java.lang.String getWeight() {
        return weight;
    }


    /**
     * Sets the weight value for this HouseWaybillTotals.
     * 
     * @param weight
     */
    public void setWeight(java.lang.String weight) {
        this.weight = weight;
    }


    /**
     * Gets the SLAC value for this HouseWaybillTotals.
     * 
     * @return SLAC
     */
    public java.lang.String getSLAC() {
        return SLAC;
    }


    /**
     * Sets the SLAC value for this HouseWaybillTotals.
     * 
     * @param SLAC
     */
    public void setSLAC(java.lang.String SLAC) {
        this.SLAC = SLAC;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof HouseWaybillTotals)) return false;
        HouseWaybillTotals other = (HouseWaybillTotals) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.numberOfPieces==null && other.getNumberOfPieces()==null) || 
             (this.numberOfPieces!=null &&
              this.numberOfPieces.equals(other.getNumberOfPieces()))) &&
            ((this.weightCode==null && other.getWeightCode()==null) || 
             (this.weightCode!=null &&
              this.weightCode.equals(other.getWeightCode()))) &&
            ((this.weight==null && other.getWeight()==null) || 
             (this.weight!=null &&
              this.weight.equals(other.getWeight()))) &&
            ((this.SLAC==null && other.getSLAC()==null) || 
             (this.SLAC!=null &&
              this.SLAC.equals(other.getSLAC())));
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
        if (getNumberOfPieces() != null) {
            _hashCode += getNumberOfPieces().hashCode();
        }
        if (getWeightCode() != null) {
            _hashCode += getWeightCode().hashCode();
        }
        if (getWeight() != null) {
            _hashCode += getWeight().hashCode();
        }
        if (getSLAC() != null) {
            _hashCode += getSLAC().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(HouseWaybillTotals.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "HouseWaybillTotals"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
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
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("SLAC");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SLAC"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
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
