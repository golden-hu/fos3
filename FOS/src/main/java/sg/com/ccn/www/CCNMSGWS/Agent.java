/**
 * Agent.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class Agent  implements java.io.Serializable {
    private sg.com.ccn.www.CCNMSGWS.AgtAccountDetail agentAccountDetail;

    private sg.com.ccn.www.CCNMSGWS.Name agentName;

    private sg.com.ccn.www.CCNMSGWS.Place agentPlace;

    public Agent() {
    }

    public Agent(
           sg.com.ccn.www.CCNMSGWS.AgtAccountDetail agentAccountDetail,
           sg.com.ccn.www.CCNMSGWS.Name agentName,
           sg.com.ccn.www.CCNMSGWS.Place agentPlace) {
           this.agentAccountDetail = agentAccountDetail;
           this.agentName = agentName;
           this.agentPlace = agentPlace;
    }


    /**
     * Gets the agentAccountDetail value for this Agent.
     * 
     * @return agentAccountDetail
     */
    public sg.com.ccn.www.CCNMSGWS.AgtAccountDetail getAgentAccountDetail() {
        return agentAccountDetail;
    }


    /**
     * Sets the agentAccountDetail value for this Agent.
     * 
     * @param agentAccountDetail
     */
    public void setAgentAccountDetail(sg.com.ccn.www.CCNMSGWS.AgtAccountDetail agentAccountDetail) {
        this.agentAccountDetail = agentAccountDetail;
    }


    /**
     * Gets the agentName value for this Agent.
     * 
     * @return agentName
     */
    public sg.com.ccn.www.CCNMSGWS.Name getAgentName() {
        return agentName;
    }


    /**
     * Sets the agentName value for this Agent.
     * 
     * @param agentName
     */
    public void setAgentName(sg.com.ccn.www.CCNMSGWS.Name agentName) {
        this.agentName = agentName;
    }


    /**
     * Gets the agentPlace value for this Agent.
     * 
     * @return agentPlace
     */
    public sg.com.ccn.www.CCNMSGWS.Place getAgentPlace() {
        return agentPlace;
    }


    /**
     * Sets the agentPlace value for this Agent.
     * 
     * @param agentPlace
     */
    public void setAgentPlace(sg.com.ccn.www.CCNMSGWS.Place agentPlace) {
        this.agentPlace = agentPlace;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Agent)) return false;
        Agent other = (Agent) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.agentAccountDetail==null && other.getAgentAccountDetail()==null) || 
             (this.agentAccountDetail!=null &&
              this.agentAccountDetail.equals(other.getAgentAccountDetail()))) &&
            ((this.agentName==null && other.getAgentName()==null) || 
             (this.agentName!=null &&
              this.agentName.equals(other.getAgentName()))) &&
            ((this.agentPlace==null && other.getAgentPlace()==null) || 
             (this.agentPlace!=null &&
              this.agentPlace.equals(other.getAgentPlace())));
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
        if (getAgentAccountDetail() != null) {
            _hashCode += getAgentAccountDetail().hashCode();
        }
        if (getAgentName() != null) {
            _hashCode += getAgentName().hashCode();
        }
        if (getAgentPlace() != null) {
            _hashCode += getAgentPlace().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Agent.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Agent"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("agentAccountDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AgentAccountDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AgtAccountDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("agentName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AgentName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Name"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("agentPlace");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AgentPlace"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Place"));
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
