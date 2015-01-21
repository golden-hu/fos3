/**
 * PiecesRCP.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class PiecesRCP  implements java.io.Serializable {
    private java.lang.String numberOfPieces;

    private java.lang.String rateCombinationPoint;

    public PiecesRCP() {
    }

    public PiecesRCP(
           java.lang.String numberOfPieces,
           java.lang.String rateCombinationPoint) {
           this.numberOfPieces = numberOfPieces;
           this.rateCombinationPoint = rateCombinationPoint;
    }


    /**
     * Gets the numberOfPieces value for this PiecesRCP.
     * 
     * @return numberOfPieces
     */
    public java.lang.String getNumberOfPieces() {
        return numberOfPieces;
    }


    /**
     * Sets the numberOfPieces value for this PiecesRCP.
     * 
     * @param numberOfPieces
     */
    public void setNumberOfPieces(java.lang.String numberOfPieces) {
        this.numberOfPieces = numberOfPieces;
    }


    /**
     * Gets the rateCombinationPoint value for this PiecesRCP.
     * 
     * @return rateCombinationPoint
     */
    public java.lang.String getRateCombinationPoint() {
        return rateCombinationPoint;
    }


    /**
     * Sets the rateCombinationPoint value for this PiecesRCP.
     * 
     * @param rateCombinationPoint
     */
    public void setRateCombinationPoint(java.lang.String rateCombinationPoint) {
        this.rateCombinationPoint = rateCombinationPoint;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof PiecesRCP)) return false;
        PiecesRCP other = (PiecesRCP) obj;
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
            ((this.rateCombinationPoint==null && other.getRateCombinationPoint()==null) || 
             (this.rateCombinationPoint!=null &&
              this.rateCombinationPoint.equals(other.getRateCombinationPoint())));
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
        if (getRateCombinationPoint() != null) {
            _hashCode += getRateCombinationPoint().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(PiecesRCP.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PiecesRCP"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("numberOfPieces");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NumberOfPieces"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("rateCombinationPoint");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RateCombinationPoint"));
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
