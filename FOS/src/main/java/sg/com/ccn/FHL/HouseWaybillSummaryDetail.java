/**
 * HouseWaybillSummaryDetail.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class HouseWaybillSummaryDetail  implements java.io.Serializable {
    private java.lang.String HWBSerialNumber;

    private sg.com.ccn.FHL.HouseWaybillOriginAndDestination houseWaybillOriginAndDestination;

    private sg.com.ccn.FHL.HouseWaybillTotals houseWaybillTotals;

    private sg.com.ccn.FHL.NatureOfGoods natureOfGoods;

    private sg.com.ccn.FHL.SpecialHandlingRequirements[] specialHandlingRequirements;

    public HouseWaybillSummaryDetail() {
    }

    public HouseWaybillSummaryDetail(
           java.lang.String HWBSerialNumber,
           sg.com.ccn.FHL.HouseWaybillOriginAndDestination houseWaybillOriginAndDestination,
           sg.com.ccn.FHL.HouseWaybillTotals houseWaybillTotals,
           sg.com.ccn.FHL.NatureOfGoods natureOfGoods,
           sg.com.ccn.FHL.SpecialHandlingRequirements[] specialHandlingRequirements) {
           this.HWBSerialNumber = HWBSerialNumber;
           this.houseWaybillOriginAndDestination = houseWaybillOriginAndDestination;
           this.houseWaybillTotals = houseWaybillTotals;
           this.natureOfGoods = natureOfGoods;
           this.specialHandlingRequirements = specialHandlingRequirements;
    }


    /**
     * Gets the HWBSerialNumber value for this HouseWaybillSummaryDetail.
     * 
     * @return HWBSerialNumber
     */
    public java.lang.String getHWBSerialNumber() {
        return HWBSerialNumber;
    }


    /**
     * Sets the HWBSerialNumber value for this HouseWaybillSummaryDetail.
     * 
     * @param HWBSerialNumber
     */
    public void setHWBSerialNumber(java.lang.String HWBSerialNumber) {
        this.HWBSerialNumber = HWBSerialNumber;
    }


    /**
     * Gets the houseWaybillOriginAndDestination value for this HouseWaybillSummaryDetail.
     * 
     * @return houseWaybillOriginAndDestination
     */
    public sg.com.ccn.FHL.HouseWaybillOriginAndDestination getHouseWaybillOriginAndDestination() {
        return houseWaybillOriginAndDestination;
    }


    /**
     * Sets the houseWaybillOriginAndDestination value for this HouseWaybillSummaryDetail.
     * 
     * @param houseWaybillOriginAndDestination
     */
    public void setHouseWaybillOriginAndDestination(sg.com.ccn.FHL.HouseWaybillOriginAndDestination houseWaybillOriginAndDestination) {
        this.houseWaybillOriginAndDestination = houseWaybillOriginAndDestination;
    }


    /**
     * Gets the houseWaybillTotals value for this HouseWaybillSummaryDetail.
     * 
     * @return houseWaybillTotals
     */
    public sg.com.ccn.FHL.HouseWaybillTotals getHouseWaybillTotals() {
        return houseWaybillTotals;
    }


    /**
     * Sets the houseWaybillTotals value for this HouseWaybillSummaryDetail.
     * 
     * @param houseWaybillTotals
     */
    public void setHouseWaybillTotals(sg.com.ccn.FHL.HouseWaybillTotals houseWaybillTotals) {
        this.houseWaybillTotals = houseWaybillTotals;
    }


    /**
     * Gets the natureOfGoods value for this HouseWaybillSummaryDetail.
     * 
     * @return natureOfGoods
     */
    public sg.com.ccn.FHL.NatureOfGoods getNatureOfGoods() {
        return natureOfGoods;
    }


    /**
     * Sets the natureOfGoods value for this HouseWaybillSummaryDetail.
     * 
     * @param natureOfGoods
     */
    public void setNatureOfGoods(sg.com.ccn.FHL.NatureOfGoods natureOfGoods) {
        this.natureOfGoods = natureOfGoods;
    }


    /**
     * Gets the specialHandlingRequirements value for this HouseWaybillSummaryDetail.
     * 
     * @return specialHandlingRequirements
     */
    public sg.com.ccn.FHL.SpecialHandlingRequirements[] getSpecialHandlingRequirements() {
        return specialHandlingRequirements;
    }


    /**
     * Sets the specialHandlingRequirements value for this HouseWaybillSummaryDetail.
     * 
     * @param specialHandlingRequirements
     */
    public void setSpecialHandlingRequirements(sg.com.ccn.FHL.SpecialHandlingRequirements[] specialHandlingRequirements) {
        this.specialHandlingRequirements = specialHandlingRequirements;
    }

    public sg.com.ccn.FHL.SpecialHandlingRequirements getSpecialHandlingRequirements(int i) {
        return this.specialHandlingRequirements[i];
    }

    public void setSpecialHandlingRequirements(int i, sg.com.ccn.FHL.SpecialHandlingRequirements _value) {
        this.specialHandlingRequirements[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof HouseWaybillSummaryDetail)) return false;
        HouseWaybillSummaryDetail other = (HouseWaybillSummaryDetail) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.HWBSerialNumber==null && other.getHWBSerialNumber()==null) || 
             (this.HWBSerialNumber!=null &&
              this.HWBSerialNumber.equals(other.getHWBSerialNumber()))) &&
            ((this.houseWaybillOriginAndDestination==null && other.getHouseWaybillOriginAndDestination()==null) || 
             (this.houseWaybillOriginAndDestination!=null &&
              this.houseWaybillOriginAndDestination.equals(other.getHouseWaybillOriginAndDestination()))) &&
            ((this.houseWaybillTotals==null && other.getHouseWaybillTotals()==null) || 
             (this.houseWaybillTotals!=null &&
              this.houseWaybillTotals.equals(other.getHouseWaybillTotals()))) &&
            ((this.natureOfGoods==null && other.getNatureOfGoods()==null) || 
             (this.natureOfGoods!=null &&
              this.natureOfGoods.equals(other.getNatureOfGoods()))) &&
            ((this.specialHandlingRequirements==null && other.getSpecialHandlingRequirements()==null) || 
             (this.specialHandlingRequirements!=null &&
              java.util.Arrays.equals(this.specialHandlingRequirements, other.getSpecialHandlingRequirements())));
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
        if (getHWBSerialNumber() != null) {
            _hashCode += getHWBSerialNumber().hashCode();
        }
        if (getHouseWaybillOriginAndDestination() != null) {
            _hashCode += getHouseWaybillOriginAndDestination().hashCode();
        }
        if (getHouseWaybillTotals() != null) {
            _hashCode += getHouseWaybillTotals().hashCode();
        }
        if (getNatureOfGoods() != null) {
            _hashCode += getNatureOfGoods().hashCode();
        }
        if (getSpecialHandlingRequirements() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getSpecialHandlingRequirements());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getSpecialHandlingRequirements(), i);
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
        new org.apache.axis.description.TypeDesc(HouseWaybillSummaryDetail.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "HouseWaybillSummaryDetail"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("HWBSerialNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "HWBSerialNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("houseWaybillOriginAndDestination");
        elemField.setXmlName(new javax.xml.namespace.QName("", "HouseWaybillOriginAndDestination"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "HouseWaybillOriginAndDestination"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("houseWaybillTotals");
        elemField.setXmlName(new javax.xml.namespace.QName("", "HouseWaybillTotals"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "HouseWaybillTotals"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("natureOfGoods");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NatureOfGoods"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "NatureOfGoods"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("specialHandlingRequirements");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SpecialHandlingRequirements"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SpecialHandlingRequirements"));
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
