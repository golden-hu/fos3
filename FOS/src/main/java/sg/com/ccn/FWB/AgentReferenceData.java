/**
 * AgentReferenceData.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class AgentReferenceData  implements java.io.Serializable {
    private sg.com.ccn.FWB.AgentReference agentReference;

    public AgentReferenceData() {
    }

    public AgentReferenceData(
           sg.com.ccn.FWB.AgentReference agentReference) {
           this.agentReference = agentReference;
    }


    /**
     * Gets the agentReference value for this AgentReferenceData.
     * 
     * @return agentReference
     */
    public sg.com.ccn.FWB.AgentReference getAgentReference() {
        return agentReference;
    }


    /**
     * Sets the agentReference value for this AgentReferenceData.
     * 
     * @param agentReference
     */
    public void setAgentReference(sg.com.ccn.FWB.AgentReference agentReference) {
        this.agentReference = agentReference;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof AgentReferenceData)) return false;
        AgentReferenceData other = (AgentReferenceData) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.agentReference==null && other.getAgentReference()==null) || 
             (this.agentReference!=null &&
              this.agentReference.equals(other.getAgentReference())));
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
        if (getAgentReference() != null) {
            _hashCode += getAgentReference().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(AgentReferenceData.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AgentReferenceData"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("agentReference");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AgentReference"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AgentReference"));
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
