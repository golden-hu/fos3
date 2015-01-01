/**
 * CarrierExection.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class CarrierExection  implements java.io.Serializable {
    private sg.com.ccn.www.CCNMSGWS.AWBIssueDetail AWBIssueDetail;

    private sg.com.ccn.www.CCNMSGWS.Authorisation authorisation;

    public CarrierExection() {
    }

    public CarrierExection(
           sg.com.ccn.www.CCNMSGWS.AWBIssueDetail AWBIssueDetail,
           sg.com.ccn.www.CCNMSGWS.Authorisation authorisation) {
           this.AWBIssueDetail = AWBIssueDetail;
           this.authorisation = authorisation;
    }


    /**
     * Gets the AWBIssueDetail value for this CarrierExection.
     * 
     * @return AWBIssueDetail
     */
    public sg.com.ccn.www.CCNMSGWS.AWBIssueDetail getAWBIssueDetail() {
        return AWBIssueDetail;
    }


    /**
     * Sets the AWBIssueDetail value for this CarrierExection.
     * 
     * @param AWBIssueDetail
     */
    public void setAWBIssueDetail(sg.com.ccn.www.CCNMSGWS.AWBIssueDetail AWBIssueDetail) {
        this.AWBIssueDetail = AWBIssueDetail;
    }


    /**
     * Gets the authorisation value for this CarrierExection.
     * 
     * @return authorisation
     */
    public sg.com.ccn.www.CCNMSGWS.Authorisation getAuthorisation() {
        return authorisation;
    }


    /**
     * Sets the authorisation value for this CarrierExection.
     * 
     * @param authorisation
     */
    public void setAuthorisation(sg.com.ccn.www.CCNMSGWS.Authorisation authorisation) {
        this.authorisation = authorisation;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CarrierExection)) return false;
        CarrierExection other = (CarrierExection) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.AWBIssueDetail==null && other.getAWBIssueDetail()==null) || 
             (this.AWBIssueDetail!=null &&
              this.AWBIssueDetail.equals(other.getAWBIssueDetail()))) &&
            ((this.authorisation==null && other.getAuthorisation()==null) || 
             (this.authorisation!=null &&
              this.authorisation.equals(other.getAuthorisation())));
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
        if (getAWBIssueDetail() != null) {
            _hashCode += getAWBIssueDetail().hashCode();
        }
        if (getAuthorisation() != null) {
            _hashCode += getAuthorisation().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CarrierExection.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CarrierExection"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWBIssueDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWBIssueDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AWBIssueDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("authorisation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Authorisation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Authorisation"));
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
