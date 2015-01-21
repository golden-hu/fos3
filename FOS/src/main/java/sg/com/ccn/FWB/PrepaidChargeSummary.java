/**
 * PrepaidChargeSummary.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class PrepaidChargeSummary  implements java.io.Serializable {
    private sg.com.ccn.FWB.TotalWeightCharge prepaidTotalWeightCharge;

    private sg.com.ccn.FWB.ValuationCharge prepaidValuationCharge;

    private sg.com.ccn.FWB.Taxes prepaidTaxes;

    private sg.com.ccn.FWB.OthChargeDueAgent prepaidTotalOthChargesDueAgent;

    private sg.com.ccn.FWB.OthChargeDueCarrier prepaidTotalOthChargesDueCarrier;

    private sg.com.ccn.FWB.ChargeSummary prepaidChargeSummaryTotal;

    public PrepaidChargeSummary() {
    }

    public PrepaidChargeSummary(
           sg.com.ccn.FWB.TotalWeightCharge prepaidTotalWeightCharge,
           sg.com.ccn.FWB.ValuationCharge prepaidValuationCharge,
           sg.com.ccn.FWB.Taxes prepaidTaxes,
           sg.com.ccn.FWB.OthChargeDueAgent prepaidTotalOthChargesDueAgent,
           sg.com.ccn.FWB.OthChargeDueCarrier prepaidTotalOthChargesDueCarrier,
           sg.com.ccn.FWB.ChargeSummary prepaidChargeSummaryTotal) {
           this.prepaidTotalWeightCharge = prepaidTotalWeightCharge;
           this.prepaidValuationCharge = prepaidValuationCharge;
           this.prepaidTaxes = prepaidTaxes;
           this.prepaidTotalOthChargesDueAgent = prepaidTotalOthChargesDueAgent;
           this.prepaidTotalOthChargesDueCarrier = prepaidTotalOthChargesDueCarrier;
           this.prepaidChargeSummaryTotal = prepaidChargeSummaryTotal;
    }


    /**
     * Gets the prepaidTotalWeightCharge value for this PrepaidChargeSummary.
     * 
     * @return prepaidTotalWeightCharge
     */
    public sg.com.ccn.FWB.TotalWeightCharge getPrepaidTotalWeightCharge() {
        return prepaidTotalWeightCharge;
    }


    /**
     * Sets the prepaidTotalWeightCharge value for this PrepaidChargeSummary.
     * 
     * @param prepaidTotalWeightCharge
     */
    public void setPrepaidTotalWeightCharge(sg.com.ccn.FWB.TotalWeightCharge prepaidTotalWeightCharge) {
        this.prepaidTotalWeightCharge = prepaidTotalWeightCharge;
    }


    /**
     * Gets the prepaidValuationCharge value for this PrepaidChargeSummary.
     * 
     * @return prepaidValuationCharge
     */
    public sg.com.ccn.FWB.ValuationCharge getPrepaidValuationCharge() {
        return prepaidValuationCharge;
    }


    /**
     * Sets the prepaidValuationCharge value for this PrepaidChargeSummary.
     * 
     * @param prepaidValuationCharge
     */
    public void setPrepaidValuationCharge(sg.com.ccn.FWB.ValuationCharge prepaidValuationCharge) {
        this.prepaidValuationCharge = prepaidValuationCharge;
    }


    /**
     * Gets the prepaidTaxes value for this PrepaidChargeSummary.
     * 
     * @return prepaidTaxes
     */
    public sg.com.ccn.FWB.Taxes getPrepaidTaxes() {
        return prepaidTaxes;
    }


    /**
     * Sets the prepaidTaxes value for this PrepaidChargeSummary.
     * 
     * @param prepaidTaxes
     */
    public void setPrepaidTaxes(sg.com.ccn.FWB.Taxes prepaidTaxes) {
        this.prepaidTaxes = prepaidTaxes;
    }


    /**
     * Gets the prepaidTotalOthChargesDueAgent value for this PrepaidChargeSummary.
     * 
     * @return prepaidTotalOthChargesDueAgent
     */
    public sg.com.ccn.FWB.OthChargeDueAgent getPrepaidTotalOthChargesDueAgent() {
        return prepaidTotalOthChargesDueAgent;
    }


    /**
     * Sets the prepaidTotalOthChargesDueAgent value for this PrepaidChargeSummary.
     * 
     * @param prepaidTotalOthChargesDueAgent
     */
    public void setPrepaidTotalOthChargesDueAgent(sg.com.ccn.FWB.OthChargeDueAgent prepaidTotalOthChargesDueAgent) {
        this.prepaidTotalOthChargesDueAgent = prepaidTotalOthChargesDueAgent;
    }


    /**
     * Gets the prepaidTotalOthChargesDueCarrier value for this PrepaidChargeSummary.
     * 
     * @return prepaidTotalOthChargesDueCarrier
     */
    public sg.com.ccn.FWB.OthChargeDueCarrier getPrepaidTotalOthChargesDueCarrier() {
        return prepaidTotalOthChargesDueCarrier;
    }


    /**
     * Sets the prepaidTotalOthChargesDueCarrier value for this PrepaidChargeSummary.
     * 
     * @param prepaidTotalOthChargesDueCarrier
     */
    public void setPrepaidTotalOthChargesDueCarrier(sg.com.ccn.FWB.OthChargeDueCarrier prepaidTotalOthChargesDueCarrier) {
        this.prepaidTotalOthChargesDueCarrier = prepaidTotalOthChargesDueCarrier;
    }


    /**
     * Gets the prepaidChargeSummaryTotal value for this PrepaidChargeSummary.
     * 
     * @return prepaidChargeSummaryTotal
     */
    public sg.com.ccn.FWB.ChargeSummary getPrepaidChargeSummaryTotal() {
        return prepaidChargeSummaryTotal;
    }


    /**
     * Sets the prepaidChargeSummaryTotal value for this PrepaidChargeSummary.
     * 
     * @param prepaidChargeSummaryTotal
     */
    public void setPrepaidChargeSummaryTotal(sg.com.ccn.FWB.ChargeSummary prepaidChargeSummaryTotal) {
        this.prepaidChargeSummaryTotal = prepaidChargeSummaryTotal;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof PrepaidChargeSummary)) return false;
        PrepaidChargeSummary other = (PrepaidChargeSummary) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.prepaidTotalWeightCharge==null && other.getPrepaidTotalWeightCharge()==null) || 
             (this.prepaidTotalWeightCharge!=null &&
              this.prepaidTotalWeightCharge.equals(other.getPrepaidTotalWeightCharge()))) &&
            ((this.prepaidValuationCharge==null && other.getPrepaidValuationCharge()==null) || 
             (this.prepaidValuationCharge!=null &&
              this.prepaidValuationCharge.equals(other.getPrepaidValuationCharge()))) &&
            ((this.prepaidTaxes==null && other.getPrepaidTaxes()==null) || 
             (this.prepaidTaxes!=null &&
              this.prepaidTaxes.equals(other.getPrepaidTaxes()))) &&
            ((this.prepaidTotalOthChargesDueAgent==null && other.getPrepaidTotalOthChargesDueAgent()==null) || 
             (this.prepaidTotalOthChargesDueAgent!=null &&
              this.prepaidTotalOthChargesDueAgent.equals(other.getPrepaidTotalOthChargesDueAgent()))) &&
            ((this.prepaidTotalOthChargesDueCarrier==null && other.getPrepaidTotalOthChargesDueCarrier()==null) || 
             (this.prepaidTotalOthChargesDueCarrier!=null &&
              this.prepaidTotalOthChargesDueCarrier.equals(other.getPrepaidTotalOthChargesDueCarrier()))) &&
            ((this.prepaidChargeSummaryTotal==null && other.getPrepaidChargeSummaryTotal()==null) || 
             (this.prepaidChargeSummaryTotal!=null &&
              this.prepaidChargeSummaryTotal.equals(other.getPrepaidChargeSummaryTotal())));
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
        if (getPrepaidTotalWeightCharge() != null) {
            _hashCode += getPrepaidTotalWeightCharge().hashCode();
        }
        if (getPrepaidValuationCharge() != null) {
            _hashCode += getPrepaidValuationCharge().hashCode();
        }
        if (getPrepaidTaxes() != null) {
            _hashCode += getPrepaidTaxes().hashCode();
        }
        if (getPrepaidTotalOthChargesDueAgent() != null) {
            _hashCode += getPrepaidTotalOthChargesDueAgent().hashCode();
        }
        if (getPrepaidTotalOthChargesDueCarrier() != null) {
            _hashCode += getPrepaidTotalOthChargesDueCarrier().hashCode();
        }
        if (getPrepaidChargeSummaryTotal() != null) {
            _hashCode += getPrepaidChargeSummaryTotal().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(PrepaidChargeSummary.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PrepaidChargeSummary"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("prepaidTotalWeightCharge");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PrepaidTotalWeightCharge"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TotalWeightCharge"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("prepaidValuationCharge");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PrepaidValuationCharge"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ValuationCharge"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("prepaidTaxes");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PrepaidTaxes"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Taxes"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("prepaidTotalOthChargesDueAgent");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PrepaidTotalOthChargesDueAgent"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OthChargeDueAgent"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("prepaidTotalOthChargesDueCarrier");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PrepaidTotalOthChargesDueCarrier"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OthChargeDueCarrier"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("prepaidChargeSummaryTotal");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PrepaidChargeSummaryTotal"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeSummary"));
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
