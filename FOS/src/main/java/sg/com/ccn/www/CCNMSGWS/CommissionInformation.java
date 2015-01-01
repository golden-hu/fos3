/**
 * CommissionInformation.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class CommissionInformation  implements java.io.Serializable {
    private sg.com.ccn.www.CCNMSGWS.NoCommissionIndication noCommissionIndication;

    private sg.com.ccn.www.CCNMSGWS.CommissionAmount commissionAmount;

    private sg.com.ccn.www.CCNMSGWS.CommissionPercentage commissionPercentage;

    public CommissionInformation() {
    }

    public CommissionInformation(
           sg.com.ccn.www.CCNMSGWS.NoCommissionIndication noCommissionIndication,
           sg.com.ccn.www.CCNMSGWS.CommissionAmount commissionAmount,
           sg.com.ccn.www.CCNMSGWS.CommissionPercentage commissionPercentage) {
           this.noCommissionIndication = noCommissionIndication;
           this.commissionAmount = commissionAmount;
           this.commissionPercentage = commissionPercentage;
    }


    /**
     * Gets the noCommissionIndication value for this CommissionInformation.
     * 
     * @return noCommissionIndication
     */
    public sg.com.ccn.www.CCNMSGWS.NoCommissionIndication getNoCommissionIndication() {
        return noCommissionIndication;
    }


    /**
     * Sets the noCommissionIndication value for this CommissionInformation.
     * 
     * @param noCommissionIndication
     */
    public void setNoCommissionIndication(sg.com.ccn.www.CCNMSGWS.NoCommissionIndication noCommissionIndication) {
        this.noCommissionIndication = noCommissionIndication;
    }


    /**
     * Gets the commissionAmount value for this CommissionInformation.
     * 
     * @return commissionAmount
     */
    public sg.com.ccn.www.CCNMSGWS.CommissionAmount getCommissionAmount() {
        return commissionAmount;
    }


    /**
     * Sets the commissionAmount value for this CommissionInformation.
     * 
     * @param commissionAmount
     */
    public void setCommissionAmount(sg.com.ccn.www.CCNMSGWS.CommissionAmount commissionAmount) {
        this.commissionAmount = commissionAmount;
    }


    /**
     * Gets the commissionPercentage value for this CommissionInformation.
     * 
     * @return commissionPercentage
     */
    public sg.com.ccn.www.CCNMSGWS.CommissionPercentage getCommissionPercentage() {
        return commissionPercentage;
    }


    /**
     * Sets the commissionPercentage value for this CommissionInformation.
     * 
     * @param commissionPercentage
     */
    public void setCommissionPercentage(sg.com.ccn.www.CCNMSGWS.CommissionPercentage commissionPercentage) {
        this.commissionPercentage = commissionPercentage;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CommissionInformation)) return false;
        CommissionInformation other = (CommissionInformation) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.noCommissionIndication==null && other.getNoCommissionIndication()==null) || 
             (this.noCommissionIndication!=null &&
              this.noCommissionIndication.equals(other.getNoCommissionIndication()))) &&
            ((this.commissionAmount==null && other.getCommissionAmount()==null) || 
             (this.commissionAmount!=null &&
              this.commissionAmount.equals(other.getCommissionAmount()))) &&
            ((this.commissionPercentage==null && other.getCommissionPercentage()==null) || 
             (this.commissionPercentage!=null &&
              this.commissionPercentage.equals(other.getCommissionPercentage())));
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
        if (getNoCommissionIndication() != null) {
            _hashCode += getNoCommissionIndication().hashCode();
        }
        if (getCommissionAmount() != null) {
            _hashCode += getCommissionAmount().hashCode();
        }
        if (getCommissionPercentage() != null) {
            _hashCode += getCommissionPercentage().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CommissionInformation.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CommissionInformation"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("noCommissionIndication");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NoCommissionIndication"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "NoCommissionIndication"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("commissionAmount");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CommissionAmount"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CommissionAmount"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("commissionPercentage");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CommissionPercentage"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CommissionPercentage"));
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
