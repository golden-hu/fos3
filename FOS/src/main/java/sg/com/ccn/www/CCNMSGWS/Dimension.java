/**
 * Dimension.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class Dimension  implements java.io.Serializable {
    private java.lang.String weightCode;

    private java.lang.String weight;

    private java.lang.String measurementUnitCode;

    private java.lang.String lengthDimension;

    private java.lang.String widthDimension;

    private java.lang.String heightDimension;

    private java.lang.String numberOfPieces;

    public Dimension() {
    }

    public Dimension(
           java.lang.String weightCode,
           java.lang.String weight,
           java.lang.String measurementUnitCode,
           java.lang.String lengthDimension,
           java.lang.String widthDimension,
           java.lang.String heightDimension,
           java.lang.String numberOfPieces) {
           this.weightCode = weightCode;
           this.weight = weight;
           this.measurementUnitCode = measurementUnitCode;
           this.lengthDimension = lengthDimension;
           this.widthDimension = widthDimension;
           this.heightDimension = heightDimension;
           this.numberOfPieces = numberOfPieces;
    }


    /**
     * Gets the weightCode value for this Dimension.
     * 
     * @return weightCode
     */
    public java.lang.String getWeightCode() {
        return weightCode;
    }


    /**
     * Sets the weightCode value for this Dimension.
     * 
     * @param weightCode
     */
    public void setWeightCode(java.lang.String weightCode) {
        this.weightCode = weightCode;
    }


    /**
     * Gets the weight value for this Dimension.
     * 
     * @return weight
     */
    public java.lang.String getWeight() {
        return weight;
    }


    /**
     * Sets the weight value for this Dimension.
     * 
     * @param weight
     */
    public void setWeight(java.lang.String weight) {
        this.weight = weight;
    }


    /**
     * Gets the measurementUnitCode value for this Dimension.
     * 
     * @return measurementUnitCode
     */
    public java.lang.String getMeasurementUnitCode() {
        return measurementUnitCode;
    }


    /**
     * Sets the measurementUnitCode value for this Dimension.
     * 
     * @param measurementUnitCode
     */
    public void setMeasurementUnitCode(java.lang.String measurementUnitCode) {
        this.measurementUnitCode = measurementUnitCode;
    }


    /**
     * Gets the lengthDimension value for this Dimension.
     * 
     * @return lengthDimension
     */
    public java.lang.String getLengthDimension() {
        return lengthDimension;
    }


    /**
     * Sets the lengthDimension value for this Dimension.
     * 
     * @param lengthDimension
     */
    public void setLengthDimension(java.lang.String lengthDimension) {
        this.lengthDimension = lengthDimension;
    }


    /**
     * Gets the widthDimension value for this Dimension.
     * 
     * @return widthDimension
     */
    public java.lang.String getWidthDimension() {
        return widthDimension;
    }


    /**
     * Sets the widthDimension value for this Dimension.
     * 
     * @param widthDimension
     */
    public void setWidthDimension(java.lang.String widthDimension) {
        this.widthDimension = widthDimension;
    }


    /**
     * Gets the heightDimension value for this Dimension.
     * 
     * @return heightDimension
     */
    public java.lang.String getHeightDimension() {
        return heightDimension;
    }


    /**
     * Sets the heightDimension value for this Dimension.
     * 
     * @param heightDimension
     */
    public void setHeightDimension(java.lang.String heightDimension) {
        this.heightDimension = heightDimension;
    }


    /**
     * Gets the numberOfPieces value for this Dimension.
     * 
     * @return numberOfPieces
     */
    public java.lang.String getNumberOfPieces() {
        return numberOfPieces;
    }


    /**
     * Sets the numberOfPieces value for this Dimension.
     * 
     * @param numberOfPieces
     */
    public void setNumberOfPieces(java.lang.String numberOfPieces) {
        this.numberOfPieces = numberOfPieces;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Dimension)) return false;
        Dimension other = (Dimension) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.weightCode==null && other.getWeightCode()==null) || 
             (this.weightCode!=null &&
              this.weightCode.equals(other.getWeightCode()))) &&
            ((this.weight==null && other.getWeight()==null) || 
             (this.weight!=null &&
              this.weight.equals(other.getWeight()))) &&
            ((this.measurementUnitCode==null && other.getMeasurementUnitCode()==null) || 
             (this.measurementUnitCode!=null &&
              this.measurementUnitCode.equals(other.getMeasurementUnitCode()))) &&
            ((this.lengthDimension==null && other.getLengthDimension()==null) || 
             (this.lengthDimension!=null &&
              this.lengthDimension.equals(other.getLengthDimension()))) &&
            ((this.widthDimension==null && other.getWidthDimension()==null) || 
             (this.widthDimension!=null &&
              this.widthDimension.equals(other.getWidthDimension()))) &&
            ((this.heightDimension==null && other.getHeightDimension()==null) || 
             (this.heightDimension!=null &&
              this.heightDimension.equals(other.getHeightDimension()))) &&
            ((this.numberOfPieces==null && other.getNumberOfPieces()==null) || 
             (this.numberOfPieces!=null &&
              this.numberOfPieces.equals(other.getNumberOfPieces())));
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
        if (getWeightCode() != null) {
            _hashCode += getWeightCode().hashCode();
        }
        if (getWeight() != null) {
            _hashCode += getWeight().hashCode();
        }
        if (getMeasurementUnitCode() != null) {
            _hashCode += getMeasurementUnitCode().hashCode();
        }
        if (getLengthDimension() != null) {
            _hashCode += getLengthDimension().hashCode();
        }
        if (getWidthDimension() != null) {
            _hashCode += getWidthDimension().hashCode();
        }
        if (getHeightDimension() != null) {
            _hashCode += getHeightDimension().hashCode();
        }
        if (getNumberOfPieces() != null) {
            _hashCode += getNumberOfPieces().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Dimension.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Dimension"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("weightCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "WeightCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("weight");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Weight"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("measurementUnitCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MeasurementUnitCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("lengthDimension");
        elemField.setXmlName(new javax.xml.namespace.QName("", "LengthDimension"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("widthDimension");
        elemField.setXmlName(new javax.xml.namespace.QName("", "WidthDimension"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("heightDimension");
        elemField.setXmlName(new javax.xml.namespace.QName("", "HeightDimension"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("numberOfPieces");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NumberOfPieces"));
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
