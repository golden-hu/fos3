/**
 * ChargeLine.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class ChargeLine  implements java.io.Serializable {
    private java.lang.String PCIndicator;

    private sg.com.ccn.FWB.OtherChargeItem[] otherChargeItem;

    public ChargeLine() {
    }

    public ChargeLine(
           java.lang.String PCIndicator,
           sg.com.ccn.FWB.OtherChargeItem[] otherChargeItem) {
           this.PCIndicator = PCIndicator;
           this.otherChargeItem = otherChargeItem;
    }


    /**
     * Gets the PCIndicator value for this ChargeLine.
     * 
     * @return PCIndicator
     */
    public java.lang.String getPCIndicator() {
        return PCIndicator;
    }


    /**
     * Sets the PCIndicator value for this ChargeLine.
     * 
     * @param PCIndicator
     */
    public void setPCIndicator(java.lang.String PCIndicator) {
        this.PCIndicator = PCIndicator;
    }


    /**
     * Gets the otherChargeItem value for this ChargeLine.
     * 
     * @return otherChargeItem
     */
    public sg.com.ccn.FWB.OtherChargeItem[] getOtherChargeItem() {
        return otherChargeItem;
    }


    /**
     * Sets the otherChargeItem value for this ChargeLine.
     * 
     * @param otherChargeItem
     */
    public void setOtherChargeItem(sg.com.ccn.FWB.OtherChargeItem[] otherChargeItem) {
        this.otherChargeItem = otherChargeItem;
    }

    public sg.com.ccn.FWB.OtherChargeItem getOtherChargeItem(int i) {
        return this.otherChargeItem[i];
    }

    public void setOtherChargeItem(int i, sg.com.ccn.FWB.OtherChargeItem _value) {
        this.otherChargeItem[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ChargeLine)) return false;
        ChargeLine other = (ChargeLine) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.PCIndicator==null && other.getPCIndicator()==null) || 
             (this.PCIndicator!=null &&
              this.PCIndicator.equals(other.getPCIndicator()))) &&
            ((this.otherChargeItem==null && other.getOtherChargeItem()==null) || 
             (this.otherChargeItem!=null &&
              java.util.Arrays.equals(this.otherChargeItem, other.getOtherChargeItem())));
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
        if (getPCIndicator() != null) {
            _hashCode += getPCIndicator().hashCode();
        }
        if (getOtherChargeItem() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getOtherChargeItem());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getOtherChargeItem(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ChargeLine.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeLine"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("PCIndicator");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PCIndicator"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherChargeItem");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherChargeItem"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherChargeItem"));
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
