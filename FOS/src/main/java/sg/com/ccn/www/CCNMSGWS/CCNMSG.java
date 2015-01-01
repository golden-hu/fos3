/**
 * CCNMSG.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class CCNMSG  implements java.io.Serializable {
    private sg.com.ccn.www.CCNMSGWS.Envelope msgEnvelope;

    private sg.com.ccn.www.CCNMSGWS.MsgBody msgBody;

    public CCNMSG() {
    }

    public CCNMSG(
           sg.com.ccn.www.CCNMSGWS.Envelope msgEnvelope,
           sg.com.ccn.www.CCNMSGWS.MsgBody msgBody) {
           this.msgEnvelope = msgEnvelope;
           this.msgBody = msgBody;
    }


    /**
     * Gets the msgEnvelope value for this CCNMSG.
     * 
     * @return msgEnvelope
     */
    public sg.com.ccn.www.CCNMSGWS.Envelope getMsgEnvelope() {
        return msgEnvelope;
    }


    /**
     * Sets the msgEnvelope value for this CCNMSG.
     * 
     * @param msgEnvelope
     */
    public void setMsgEnvelope(sg.com.ccn.www.CCNMSGWS.Envelope msgEnvelope) {
        this.msgEnvelope = msgEnvelope;
    }


    /**
     * Gets the msgBody value for this CCNMSG.
     * 
     * @return msgBody
     */
    public sg.com.ccn.www.CCNMSGWS.MsgBody getMsgBody() {
        return msgBody;
    }


    /**
     * Sets the msgBody value for this CCNMSG.
     * 
     * @param msgBody
     */
    public void setMsgBody(sg.com.ccn.www.CCNMSGWS.MsgBody msgBody) {
        this.msgBody = msgBody;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CCNMSG)) return false;
        CCNMSG other = (CCNMSG) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.msgEnvelope==null && other.getMsgEnvelope()==null) || 
             (this.msgEnvelope!=null &&
              this.msgEnvelope.equals(other.getMsgEnvelope()))) &&
            ((this.msgBody==null && other.getMsgBody()==null) || 
             (this.msgBody!=null &&
              this.msgBody.equals(other.getMsgBody())));
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
        if (getMsgEnvelope() != null) {
            _hashCode += getMsgEnvelope().hashCode();
        }
        if (getMsgBody() != null) {
            _hashCode += getMsgBody().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CCNMSG.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CCN.MSG"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("msgEnvelope");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MsgEnvelope"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Envelope"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("msgBody");
        elemField.setXmlName(new javax.xml.namespace.QName("", "MsgBody"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "MsgBody"));
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
