/**
 * CollectChargeSummary.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class CollectChargeSummary  implements java.io.Serializable {
    private sg.com.ccn.FWB.TotalWeightCharge collectTotalWeightCharge;

    private sg.com.ccn.FWB.ValuationCharge collectValuationCharge;

    private sg.com.ccn.FWB.Taxes collectTaxes;

    private sg.com.ccn.FWB.OthChargeDueAgent collectTotalOthChargesDueAgent;

    private sg.com.ccn.FWB.OthChargeDueCarrier collectTotalOthChargesDueCarrier;

    private sg.com.ccn.FWB.ChargeSummary collectChargeSummaryTotal;

    public CollectChargeSummary() {
    }

    public CollectChargeSummary(
           sg.com.ccn.FWB.TotalWeightCharge collectTotalWeightCharge,
           sg.com.ccn.FWB.ValuationCharge collectValuationCharge,
           sg.com.ccn.FWB.Taxes collectTaxes,
           sg.com.ccn.FWB.OthChargeDueAgent collectTotalOthChargesDueAgent,
           sg.com.ccn.FWB.OthChargeDueCarrier collectTotalOthChargesDueCarrier,
           sg.com.ccn.FWB.ChargeSummary collectChargeSummaryTotal) {
           this.collectTotalWeightCharge = collectTotalWeightCharge;
           this.collectValuationCharge = collectValuationCharge;
           this.collectTaxes = collectTaxes;
           this.collectTotalOthChargesDueAgent = collectTotalOthChargesDueAgent;
           this.collectTotalOthChargesDueCarrier = collectTotalOthChargesDueCarrier;
           this.collectChargeSummaryTotal = collectChargeSummaryTotal;
    }


    /**
     * Gets the collectTotalWeightCharge value for this CollectChargeSummary.
     * 
     * @return collectTotalWeightCharge
     */
    public sg.com.ccn.FWB.TotalWeightCharge getCollectTotalWeightCharge() {
        return collectTotalWeightCharge;
    }


    /**
     * Sets the collectTotalWeightCharge value for this CollectChargeSummary.
     * 
     * @param collectTotalWeightCharge
     */
    public void setCollectTotalWeightCharge(sg.com.ccn.FWB.TotalWeightCharge collectTotalWeightCharge) {
        this.collectTotalWeightCharge = collectTotalWeightCharge;
    }


    /**
     * Gets the collectValuationCharge value for this CollectChargeSummary.
     * 
     * @return collectValuationCharge
     */
    public sg.com.ccn.FWB.ValuationCharge getCollectValuationCharge() {
        return collectValuationCharge;
    }


    /**
     * Sets the collectValuationCharge value for this CollectChargeSummary.
     * 
     * @param collectValuationCharge
     */
    public void setCollectValuationCharge(sg.com.ccn.FWB.ValuationCharge collectValuationCharge) {
        this.collectValuationCharge = collectValuationCharge;
    }


    /**
     * Gets the collectTaxes value for this CollectChargeSummary.
     * 
     * @return collectTaxes
     */
    public sg.com.ccn.FWB.Taxes getCollectTaxes() {
        return collectTaxes;
    }


    /**
     * Sets the collectTaxes value for this CollectChargeSummary.
     * 
     * @param collectTaxes
     */
    public void setCollectTaxes(sg.com.ccn.FWB.Taxes collectTaxes) {
        this.collectTaxes = collectTaxes;
    }


    /**
     * Gets the collectTotalOthChargesDueAgent value for this CollectChargeSummary.
     * 
     * @return collectTotalOthChargesDueAgent
     */
    public sg.com.ccn.FWB.OthChargeDueAgent getCollectTotalOthChargesDueAgent() {
        return collectTotalOthChargesDueAgent;
    }


    /**
     * Sets the collectTotalOthChargesDueAgent value for this CollectChargeSummary.
     * 
     * @param collectTotalOthChargesDueAgent
     */
    public void setCollectTotalOthChargesDueAgent(sg.com.ccn.FWB.OthChargeDueAgent collectTotalOthChargesDueAgent) {
        this.collectTotalOthChargesDueAgent = collectTotalOthChargesDueAgent;
    }


    /**
     * Gets the collectTotalOthChargesDueCarrier value for this CollectChargeSummary.
     * 
     * @return collectTotalOthChargesDueCarrier
     */
    public sg.com.ccn.FWB.OthChargeDueCarrier getCollectTotalOthChargesDueCarrier() {
        return collectTotalOthChargesDueCarrier;
    }


    /**
     * Sets the collectTotalOthChargesDueCarrier value for this CollectChargeSummary.
     * 
     * @param collectTotalOthChargesDueCarrier
     */
    public void setCollectTotalOthChargesDueCarrier(sg.com.ccn.FWB.OthChargeDueCarrier collectTotalOthChargesDueCarrier) {
        this.collectTotalOthChargesDueCarrier = collectTotalOthChargesDueCarrier;
    }


    /**
     * Gets the collectChargeSummaryTotal value for this CollectChargeSummary.
     * 
     * @return collectChargeSummaryTotal
     */
    public sg.com.ccn.FWB.ChargeSummary getCollectChargeSummaryTotal() {
        return collectChargeSummaryTotal;
    }


    /**
     * Sets the collectChargeSummaryTotal value for this CollectChargeSummary.
     * 
     * @param collectChargeSummaryTotal
     */
    public void setCollectChargeSummaryTotal(sg.com.ccn.FWB.ChargeSummary collectChargeSummaryTotal) {
        this.collectChargeSummaryTotal = collectChargeSummaryTotal;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CollectChargeSummary)) return false;
        CollectChargeSummary other = (CollectChargeSummary) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.collectTotalWeightCharge==null && other.getCollectTotalWeightCharge()==null) || 
             (this.collectTotalWeightCharge!=null &&
              this.collectTotalWeightCharge.equals(other.getCollectTotalWeightCharge()))) &&
            ((this.collectValuationCharge==null && other.getCollectValuationCharge()==null) || 
             (this.collectValuationCharge!=null &&
              this.collectValuationCharge.equals(other.getCollectValuationCharge()))) &&
            ((this.collectTaxes==null && other.getCollectTaxes()==null) || 
             (this.collectTaxes!=null &&
              this.collectTaxes.equals(other.getCollectTaxes()))) &&
            ((this.collectTotalOthChargesDueAgent==null && other.getCollectTotalOthChargesDueAgent()==null) || 
             (this.collectTotalOthChargesDueAgent!=null &&
              this.collectTotalOthChargesDueAgent.equals(other.getCollectTotalOthChargesDueAgent()))) &&
            ((this.collectTotalOthChargesDueCarrier==null && other.getCollectTotalOthChargesDueCarrier()==null) || 
             (this.collectTotalOthChargesDueCarrier!=null &&
              this.collectTotalOthChargesDueCarrier.equals(other.getCollectTotalOthChargesDueCarrier()))) &&
            ((this.collectChargeSummaryTotal==null && other.getCollectChargeSummaryTotal()==null) || 
             (this.collectChargeSummaryTotal!=null &&
              this.collectChargeSummaryTotal.equals(other.getCollectChargeSummaryTotal())));
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
        if (getCollectTotalWeightCharge() != null) {
            _hashCode += getCollectTotalWeightCharge().hashCode();
        }
        if (getCollectValuationCharge() != null) {
            _hashCode += getCollectValuationCharge().hashCode();
        }
        if (getCollectTaxes() != null) {
            _hashCode += getCollectTaxes().hashCode();
        }
        if (getCollectTotalOthChargesDueAgent() != null) {
            _hashCode += getCollectTotalOthChargesDueAgent().hashCode();
        }
        if (getCollectTotalOthChargesDueCarrier() != null) {
            _hashCode += getCollectTotalOthChargesDueCarrier().hashCode();
        }
        if (getCollectChargeSummaryTotal() != null) {
            _hashCode += getCollectChargeSummaryTotal().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CollectChargeSummary.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CollectChargeSummary"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("collectTotalWeightCharge");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CollectTotalWeightCharge"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TotalWeightCharge"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("collectValuationCharge");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CollectValuationCharge"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ValuationCharge"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("collectTaxes");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CollectTaxes"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Taxes"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("collectTotalOthChargesDueAgent");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CollectTotalOthChargesDueAgent"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OthChargeDueAgent"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("collectTotalOthChargesDueCarrier");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CollectTotalOthChargesDueCarrier"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OthChargeDueCarrier"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("collectChargeSummaryTotal");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CollectChargeSummaryTotal"));
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
