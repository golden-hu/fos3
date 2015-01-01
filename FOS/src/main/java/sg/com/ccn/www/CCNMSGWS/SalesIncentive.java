/**
 * SalesIncentive.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class SalesIncentive  implements java.io.Serializable {
    private sg.com.ccn.www.CCNMSGWS.SalesIncentiveDetail salesIncentiveDetail;

    private sg.com.ccn.www.CCNMSGWS.SalesIncentiveIndication salesIncentiveIndication;

    public SalesIncentive() {
    }

    public SalesIncentive(
           sg.com.ccn.www.CCNMSGWS.SalesIncentiveDetail salesIncentiveDetail,
           sg.com.ccn.www.CCNMSGWS.SalesIncentiveIndication salesIncentiveIndication) {
           this.salesIncentiveDetail = salesIncentiveDetail;
           this.salesIncentiveIndication = salesIncentiveIndication;
    }


    /**
     * Gets the salesIncentiveDetail value for this SalesIncentive.
     * 
     * @return salesIncentiveDetail
     */
    public sg.com.ccn.www.CCNMSGWS.SalesIncentiveDetail getSalesIncentiveDetail() {
        return salesIncentiveDetail;
    }


    /**
     * Sets the salesIncentiveDetail value for this SalesIncentive.
     * 
     * @param salesIncentiveDetail
     */
    public void setSalesIncentiveDetail(sg.com.ccn.www.CCNMSGWS.SalesIncentiveDetail salesIncentiveDetail) {
        this.salesIncentiveDetail = salesIncentiveDetail;
    }


    /**
     * Gets the salesIncentiveIndication value for this SalesIncentive.
     * 
     * @return salesIncentiveIndication
     */
    public sg.com.ccn.www.CCNMSGWS.SalesIncentiveIndication getSalesIncentiveIndication() {
        return salesIncentiveIndication;
    }


    /**
     * Sets the salesIncentiveIndication value for this SalesIncentive.
     * 
     * @param salesIncentiveIndication
     */
    public void setSalesIncentiveIndication(sg.com.ccn.www.CCNMSGWS.SalesIncentiveIndication salesIncentiveIndication) {
        this.salesIncentiveIndication = salesIncentiveIndication;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof SalesIncentive)) return false;
        SalesIncentive other = (SalesIncentive) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.salesIncentiveDetail==null && other.getSalesIncentiveDetail()==null) || 
             (this.salesIncentiveDetail!=null &&
              this.salesIncentiveDetail.equals(other.getSalesIncentiveDetail()))) &&
            ((this.salesIncentiveIndication==null && other.getSalesIncentiveIndication()==null) || 
             (this.salesIncentiveIndication!=null &&
              this.salesIncentiveIndication.equals(other.getSalesIncentiveIndication())));
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
        if (getSalesIncentiveDetail() != null) {
            _hashCode += getSalesIncentiveDetail().hashCode();
        }
        if (getSalesIncentiveIndication() != null) {
            _hashCode += getSalesIncentiveIndication().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(SalesIncentive.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SalesIncentive"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("salesIncentiveDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SalesIncentiveDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SalesIncentiveDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("salesIncentiveIndication");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SalesIncentiveIndication"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SalesIncentiveIndication"));
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
