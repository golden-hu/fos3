/**
 * HouseAndFreeTextGroup.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FHL;

public class HouseAndFreeTextGroup  implements java.io.Serializable {
    private sg.com.ccn.FHL.HouseWaybillSummaryDetail houseWaybillSummaryDetail;

    private sg.com.ccn.FHL.FreeTextDescriptionOfGoods[] freeTextDescriptionOfGoods;

    private sg.com.ccn.FHL.HarmonisedTariffScheduleInformation[] harmonisedTariffScheduleInformation;

    private sg.com.ccn.FHL.OtherCustomsInfo[] otherCustomsInfo;

    public HouseAndFreeTextGroup() {
    }

    public HouseAndFreeTextGroup(
           sg.com.ccn.FHL.HouseWaybillSummaryDetail houseWaybillSummaryDetail,
           sg.com.ccn.FHL.FreeTextDescriptionOfGoods[] freeTextDescriptionOfGoods,
           sg.com.ccn.FHL.HarmonisedTariffScheduleInformation[] harmonisedTariffScheduleInformation,
           sg.com.ccn.FHL.OtherCustomsInfo[] otherCustomsInfo) {
           this.houseWaybillSummaryDetail = houseWaybillSummaryDetail;
           this.freeTextDescriptionOfGoods = freeTextDescriptionOfGoods;
           this.harmonisedTariffScheduleInformation = harmonisedTariffScheduleInformation;
           this.otherCustomsInfo = otherCustomsInfo;
    }


    /**
     * Gets the houseWaybillSummaryDetail value for this HouseAndFreeTextGroup.
     * 
     * @return houseWaybillSummaryDetail
     */
    public sg.com.ccn.FHL.HouseWaybillSummaryDetail getHouseWaybillSummaryDetail() {
        return houseWaybillSummaryDetail;
    }


    /**
     * Sets the houseWaybillSummaryDetail value for this HouseAndFreeTextGroup.
     * 
     * @param houseWaybillSummaryDetail
     */
    public void setHouseWaybillSummaryDetail(sg.com.ccn.FHL.HouseWaybillSummaryDetail houseWaybillSummaryDetail) {
        this.houseWaybillSummaryDetail = houseWaybillSummaryDetail;
    }


    /**
     * Gets the freeTextDescriptionOfGoods value for this HouseAndFreeTextGroup.
     * 
     * @return freeTextDescriptionOfGoods
     */
    public sg.com.ccn.FHL.FreeTextDescriptionOfGoods[] getFreeTextDescriptionOfGoods() {
        return freeTextDescriptionOfGoods;
    }


    /**
     * Sets the freeTextDescriptionOfGoods value for this HouseAndFreeTextGroup.
     * 
     * @param freeTextDescriptionOfGoods
     */
    public void setFreeTextDescriptionOfGoods(sg.com.ccn.FHL.FreeTextDescriptionOfGoods[] freeTextDescriptionOfGoods) {
        this.freeTextDescriptionOfGoods = freeTextDescriptionOfGoods;
    }

    public sg.com.ccn.FHL.FreeTextDescriptionOfGoods getFreeTextDescriptionOfGoods(int i) {
        return this.freeTextDescriptionOfGoods[i];
    }

    public void setFreeTextDescriptionOfGoods(int i, sg.com.ccn.FHL.FreeTextDescriptionOfGoods _value) {
        this.freeTextDescriptionOfGoods[i] = _value;
    }


    /**
     * Gets the harmonisedTariffScheduleInformation value for this HouseAndFreeTextGroup.
     * 
     * @return harmonisedTariffScheduleInformation
     */
    public sg.com.ccn.FHL.HarmonisedTariffScheduleInformation[] getHarmonisedTariffScheduleInformation() {
        return harmonisedTariffScheduleInformation;
    }


    /**
     * Sets the harmonisedTariffScheduleInformation value for this HouseAndFreeTextGroup.
     * 
     * @param harmonisedTariffScheduleInformation
     */
    public void setHarmonisedTariffScheduleInformation(sg.com.ccn.FHL.HarmonisedTariffScheduleInformation[] harmonisedTariffScheduleInformation) {
        this.harmonisedTariffScheduleInformation = harmonisedTariffScheduleInformation;
    }

    public sg.com.ccn.FHL.HarmonisedTariffScheduleInformation getHarmonisedTariffScheduleInformation(int i) {
        return this.harmonisedTariffScheduleInformation[i];
    }

    public void setHarmonisedTariffScheduleInformation(int i, sg.com.ccn.FHL.HarmonisedTariffScheduleInformation _value) {
        this.harmonisedTariffScheduleInformation[i] = _value;
    }


    /**
     * Gets the otherCustomsInfo value for this HouseAndFreeTextGroup.
     * 
     * @return otherCustomsInfo
     */
    public sg.com.ccn.FHL.OtherCustomsInfo[] getOtherCustomsInfo() {
        return otherCustomsInfo;
    }


    /**
     * Sets the otherCustomsInfo value for this HouseAndFreeTextGroup.
     * 
     * @param otherCustomsInfo
     */
    public void setOtherCustomsInfo(sg.com.ccn.FHL.OtherCustomsInfo[] otherCustomsInfo) {
        this.otherCustomsInfo = otherCustomsInfo;
    }

    public sg.com.ccn.FHL.OtherCustomsInfo getOtherCustomsInfo(int i) {
        return this.otherCustomsInfo[i];
    }

    public void setOtherCustomsInfo(int i, sg.com.ccn.FHL.OtherCustomsInfo _value) {
        this.otherCustomsInfo[i] = _value;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof HouseAndFreeTextGroup)) return false;
        HouseAndFreeTextGroup other = (HouseAndFreeTextGroup) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.houseWaybillSummaryDetail==null && other.getHouseWaybillSummaryDetail()==null) || 
             (this.houseWaybillSummaryDetail!=null &&
              this.houseWaybillSummaryDetail.equals(other.getHouseWaybillSummaryDetail()))) &&
            ((this.freeTextDescriptionOfGoods==null && other.getFreeTextDescriptionOfGoods()==null) || 
             (this.freeTextDescriptionOfGoods!=null &&
              java.util.Arrays.equals(this.freeTextDescriptionOfGoods, other.getFreeTextDescriptionOfGoods()))) &&
            ((this.harmonisedTariffScheduleInformation==null && other.getHarmonisedTariffScheduleInformation()==null) || 
             (this.harmonisedTariffScheduleInformation!=null &&
              java.util.Arrays.equals(this.harmonisedTariffScheduleInformation, other.getHarmonisedTariffScheduleInformation()))) &&
            ((this.otherCustomsInfo==null && other.getOtherCustomsInfo()==null) || 
             (this.otherCustomsInfo!=null &&
              java.util.Arrays.equals(this.otherCustomsInfo, other.getOtherCustomsInfo())));
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
        if (getHouseWaybillSummaryDetail() != null) {
            _hashCode += getHouseWaybillSummaryDetail().hashCode();
        }
        if (getFreeTextDescriptionOfGoods() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getFreeTextDescriptionOfGoods());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getFreeTextDescriptionOfGoods(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getHarmonisedTariffScheduleInformation() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getHarmonisedTariffScheduleInformation());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getHarmonisedTariffScheduleInformation(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getOtherCustomsInfo() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getOtherCustomsInfo());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getOtherCustomsInfo(), i);
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
        new org.apache.axis.description.TypeDesc(HouseAndFreeTextGroup.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "HouseAndFreeTextGroup"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("houseWaybillSummaryDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "HouseWaybillSummaryDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "HouseWaybillSummaryDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("freeTextDescriptionOfGoods");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FreeTextDescriptionOfGoods"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FreeTextDescriptionOfGoods"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("harmonisedTariffScheduleInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "HarmonisedTariffScheduleInformation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "HarmonisedTariffScheduleInformation"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherCustomsInfo");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherCustomsInfo"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherCustomsInfo"));
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
