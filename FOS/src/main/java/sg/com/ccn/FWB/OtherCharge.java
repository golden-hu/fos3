/**
 * OtherCharge.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class OtherCharge  implements java.io.Serializable {
    private sg.com.ccn.FWB.ChargeLine chargeLine;

    public OtherCharge() {
    }

    public OtherCharge(
           sg.com.ccn.FWB.ChargeLine chargeLine) {
           this.chargeLine = chargeLine;
    }


    /**
     * Gets the chargeLine value for this OtherCharge.
     * 
     * @return chargeLine
     */
    public sg.com.ccn.FWB.ChargeLine getChargeLine() {
        return chargeLine;
    }


    /**
     * Sets the chargeLine value for this OtherCharge.
     * 
     * @param chargeLine
     */
    public void setChargeLine(sg.com.ccn.FWB.ChargeLine chargeLine) {
        this.chargeLine = chargeLine;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof OtherCharge)) return false;
        OtherCharge other = (OtherCharge) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.chargeLine==null && other.getChargeLine()==null) || 
             (this.chargeLine!=null &&
              this.chargeLine.equals(other.getChargeLine())));
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
        if (getChargeLine() != null) {
            _hashCode += getChargeLine().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(OtherCharge.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherCharge"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("chargeLine");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ChargeLine"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeLine"));
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
