/**
 * CCChargeDestinationCurrency.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class CCChargeDestinationCurrency  implements java.io.Serializable {
    private sg.com.ccn.www.CCNMSGWS.DestinationCurrency destinationCurrency;

    private sg.com.ccn.www.CCNMSGWS.CurrencyConversionRate currencyConversionRate;

    private sg.com.ccn.www.CCNMSGWS.ChargeDestinationCurrency chargeDestinationCurrency;

    private sg.com.ccn.www.CCNMSGWS.ChargeDestination chargeDestination;

    private sg.com.ccn.www.CCNMSGWS.TotalCollectCharge totalCollectCharge;

    public CCChargeDestinationCurrency() {
    }

    public CCChargeDestinationCurrency(
           sg.com.ccn.www.CCNMSGWS.DestinationCurrency destinationCurrency,
           sg.com.ccn.www.CCNMSGWS.CurrencyConversionRate currencyConversionRate,
           sg.com.ccn.www.CCNMSGWS.ChargeDestinationCurrency chargeDestinationCurrency,
           sg.com.ccn.www.CCNMSGWS.ChargeDestination chargeDestination,
           sg.com.ccn.www.CCNMSGWS.TotalCollectCharge totalCollectCharge) {
           this.destinationCurrency = destinationCurrency;
           this.currencyConversionRate = currencyConversionRate;
           this.chargeDestinationCurrency = chargeDestinationCurrency;
           this.chargeDestination = chargeDestination;
           this.totalCollectCharge = totalCollectCharge;
    }


    /**
     * Gets the destinationCurrency value for this CCChargeDestinationCurrency.
     * 
     * @return destinationCurrency
     */
    public sg.com.ccn.www.CCNMSGWS.DestinationCurrency getDestinationCurrency() {
        return destinationCurrency;
    }


    /**
     * Sets the destinationCurrency value for this CCChargeDestinationCurrency.
     * 
     * @param destinationCurrency
     */
    public void setDestinationCurrency(sg.com.ccn.www.CCNMSGWS.DestinationCurrency destinationCurrency) {
        this.destinationCurrency = destinationCurrency;
    }


    /**
     * Gets the currencyConversionRate value for this CCChargeDestinationCurrency.
     * 
     * @return currencyConversionRate
     */
    public sg.com.ccn.www.CCNMSGWS.CurrencyConversionRate getCurrencyConversionRate() {
        return currencyConversionRate;
    }


    /**
     * Sets the currencyConversionRate value for this CCChargeDestinationCurrency.
     * 
     * @param currencyConversionRate
     */
    public void setCurrencyConversionRate(sg.com.ccn.www.CCNMSGWS.CurrencyConversionRate currencyConversionRate) {
        this.currencyConversionRate = currencyConversionRate;
    }


    /**
     * Gets the chargeDestinationCurrency value for this CCChargeDestinationCurrency.
     * 
     * @return chargeDestinationCurrency
     */
    public sg.com.ccn.www.CCNMSGWS.ChargeDestinationCurrency getChargeDestinationCurrency() {
        return chargeDestinationCurrency;
    }


    /**
     * Sets the chargeDestinationCurrency value for this CCChargeDestinationCurrency.
     * 
     * @param chargeDestinationCurrency
     */
    public void setChargeDestinationCurrency(sg.com.ccn.www.CCNMSGWS.ChargeDestinationCurrency chargeDestinationCurrency) {
        this.chargeDestinationCurrency = chargeDestinationCurrency;
    }


    /**
     * Gets the chargeDestination value for this CCChargeDestinationCurrency.
     * 
     * @return chargeDestination
     */
    public sg.com.ccn.www.CCNMSGWS.ChargeDestination getChargeDestination() {
        return chargeDestination;
    }


    /**
     * Sets the chargeDestination value for this CCChargeDestinationCurrency.
     * 
     * @param chargeDestination
     */
    public void setChargeDestination(sg.com.ccn.www.CCNMSGWS.ChargeDestination chargeDestination) {
        this.chargeDestination = chargeDestination;
    }


    /**
     * Gets the totalCollectCharge value for this CCChargeDestinationCurrency.
     * 
     * @return totalCollectCharge
     */
    public sg.com.ccn.www.CCNMSGWS.TotalCollectCharge getTotalCollectCharge() {
        return totalCollectCharge;
    }


    /**
     * Sets the totalCollectCharge value for this CCChargeDestinationCurrency.
     * 
     * @param totalCollectCharge
     */
    public void setTotalCollectCharge(sg.com.ccn.www.CCNMSGWS.TotalCollectCharge totalCollectCharge) {
        this.totalCollectCharge = totalCollectCharge;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CCChargeDestinationCurrency)) return false;
        CCChargeDestinationCurrency other = (CCChargeDestinationCurrency) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.destinationCurrency==null && other.getDestinationCurrency()==null) || 
             (this.destinationCurrency!=null &&
              this.destinationCurrency.equals(other.getDestinationCurrency()))) &&
            ((this.currencyConversionRate==null && other.getCurrencyConversionRate()==null) || 
             (this.currencyConversionRate!=null &&
              this.currencyConversionRate.equals(other.getCurrencyConversionRate()))) &&
            ((this.chargeDestinationCurrency==null && other.getChargeDestinationCurrency()==null) || 
             (this.chargeDestinationCurrency!=null &&
              this.chargeDestinationCurrency.equals(other.getChargeDestinationCurrency()))) &&
            ((this.chargeDestination==null && other.getChargeDestination()==null) || 
             (this.chargeDestination!=null &&
              this.chargeDestination.equals(other.getChargeDestination()))) &&
            ((this.totalCollectCharge==null && other.getTotalCollectCharge()==null) || 
             (this.totalCollectCharge!=null &&
              this.totalCollectCharge.equals(other.getTotalCollectCharge())));
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
        if (getDestinationCurrency() != null) {
            _hashCode += getDestinationCurrency().hashCode();
        }
        if (getCurrencyConversionRate() != null) {
            _hashCode += getCurrencyConversionRate().hashCode();
        }
        if (getChargeDestinationCurrency() != null) {
            _hashCode += getChargeDestinationCurrency().hashCode();
        }
        if (getChargeDestination() != null) {
            _hashCode += getChargeDestination().hashCode();
        }
        if (getTotalCollectCharge() != null) {
            _hashCode += getTotalCollectCharge().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CCChargeDestinationCurrency.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CCChargeDestinationCurrency"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("destinationCurrency");
        elemField.setXmlName(new javax.xml.namespace.QName("", "DestinationCurrency"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DestinationCurrency"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("currencyConversionRate");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CurrencyConversionRate"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CurrencyConversionRate"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("chargeDestinationCurrency");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ChargeDestinationCurrency"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeDestinationCurrency"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("chargeDestination");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ChargeDestination"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeDestination"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("totalCollectCharge");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TotalCollectCharge"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "TotalCollectCharge"));
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
