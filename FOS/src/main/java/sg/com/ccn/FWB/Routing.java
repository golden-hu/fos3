/**
 * Routing.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class Routing  implements java.io.Serializable {
    private sg.com.ccn.FWB.FirstDestination firstDestination;

    private sg.com.ccn.FWB.OnwardDestination[] onwardDestination;

    public Routing() {
    }

    public Routing(
           sg.com.ccn.FWB.FirstDestination firstDestination,
           sg.com.ccn.FWB.OnwardDestination[] onwardDestination) {
           this.firstDestination = firstDestination;
           this.onwardDestination = onwardDestination;
    }


    /**
     * Gets the firstDestination value for this Routing.
     * 
     * @return firstDestination
     */
    public sg.com.ccn.FWB.FirstDestination getFirstDestination() {
        return firstDestination;
    }


    /**
     * Sets the firstDestination value for this Routing.
     * 
     * @param firstDestination
     */
    public void setFirstDestination(sg.com.ccn.FWB.FirstDestination firstDestination) {
        this.firstDestination = firstDestination;
    }


    /**
     * Gets the onwardDestination value for this Routing.
     * 
     * @return onwardDestination
     */
    public sg.com.ccn.FWB.OnwardDestination[] getOnwardDestination() {
        return onwardDestination;
    }


    /**
     * Sets the onwardDestination value for this Routing.
     * 
     * @param onwardDestination
     */
    public void setOnwardDestination(sg.com.ccn.FWB.OnwardDestination[] onwardDestination) {
        this.onwardDestination = onwardDestination;
    }

    public sg.com.ccn.FWB.OnwardDestination getOnwardDestination(int i) {
        return this.onwardDestination[i];
    }

    public void setOnwardDestination(int i, sg.com.ccn.FWB.OnwardDestination _value) {
        this.onwardDestination[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Routing)) return false;
        Routing other = (Routing) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.firstDestination==null && other.getFirstDestination()==null) || 
             (this.firstDestination!=null &&
              this.firstDestination.equals(other.getFirstDestination()))) &&
            ((this.onwardDestination==null && other.getOnwardDestination()==null) || 
             (this.onwardDestination!=null &&
              java.util.Arrays.equals(this.onwardDestination, other.getOnwardDestination())));
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
        if (getFirstDestination() != null) {
            _hashCode += getFirstDestination().hashCode();
        }
        if (getOnwardDestination() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getOnwardDestination());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getOnwardDestination(), i);
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
        new org.apache.axis.description.TypeDesc(Routing.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Routing"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("firstDestination");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FirstDestination"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FirstDestination"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("onwardDestination");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OnwardDestination"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OnwardDestination"));
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
