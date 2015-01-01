/**
 * ChargeLineCount.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.www.CCNMSGWS;

public class ChargeLineCount  implements java.io.Serializable {
    private java.lang.String AWBRateLineNumber;

    private sg.com.ccn.www.CCNMSGWS.PiecesRCP piecesRCPDetail;

    private sg.com.ccn.www.CCNMSGWS.GrossWeight grossWeight;

    private sg.com.ccn.www.CCNMSGWS.RateClass rateClassDetail;

    private sg.com.ccn.www.CCNMSGWS.CommodityItem commodityItemDetail;

    private sg.com.ccn.www.CCNMSGWS.ChargeableWeight chargeableWeightDetail;

    private sg.com.ccn.www.CCNMSGWS.RateCharge rateChargeDetail;

    private sg.com.ccn.www.CCNMSGWS.Total totalDetail;

    private sg.com.ccn.www.CCNMSGWS.GoodsDescription goodsDescription;

    private sg.com.ccn.www.CCNMSGWS.Consolidation consolidation;

    private sg.com.ccn.www.CCNMSGWS.Dimension dimension;

    private sg.com.ccn.www.CCNMSGWS.Volume volume;

    private sg.com.ccn.www.CCNMSGWS.ULDNumber ULDNumber;

    private sg.com.ccn.www.CCNMSGWS.ShipperLoadCount shipperLoadCount;

    private sg.com.ccn.www.CCNMSGWS.HarmonisedCommodity harmonisedCommodityCode;

    private sg.com.ccn.www.CCNMSGWS.CountryOrigin countryOriginGoods;

    private sg.com.ccn.www.CCNMSGWS.ServiceCode serviceCode;

    public ChargeLineCount() {
    }

    public ChargeLineCount(
           java.lang.String AWBRateLineNumber,
           sg.com.ccn.www.CCNMSGWS.PiecesRCP piecesRCPDetail,
           sg.com.ccn.www.CCNMSGWS.GrossWeight grossWeight,
           sg.com.ccn.www.CCNMSGWS.RateClass rateClassDetail,
           sg.com.ccn.www.CCNMSGWS.CommodityItem commodityItemDetail,
           sg.com.ccn.www.CCNMSGWS.ChargeableWeight chargeableWeightDetail,
           sg.com.ccn.www.CCNMSGWS.RateCharge rateChargeDetail,
           sg.com.ccn.www.CCNMSGWS.Total totalDetail,
           sg.com.ccn.www.CCNMSGWS.GoodsDescription goodsDescription,
           sg.com.ccn.www.CCNMSGWS.Consolidation consolidation,
           sg.com.ccn.www.CCNMSGWS.Dimension dimension,
           sg.com.ccn.www.CCNMSGWS.Volume volume,
           sg.com.ccn.www.CCNMSGWS.ULDNumber ULDNumber,
           sg.com.ccn.www.CCNMSGWS.ShipperLoadCount shipperLoadCount,
           sg.com.ccn.www.CCNMSGWS.HarmonisedCommodity harmonisedCommodityCode,
           sg.com.ccn.www.CCNMSGWS.CountryOrigin countryOriginGoods,
           sg.com.ccn.www.CCNMSGWS.ServiceCode serviceCode) {
           this.AWBRateLineNumber = AWBRateLineNumber;
           this.piecesRCPDetail = piecesRCPDetail;
           this.grossWeight = grossWeight;
           this.rateClassDetail = rateClassDetail;
           this.commodityItemDetail = commodityItemDetail;
           this.chargeableWeightDetail = chargeableWeightDetail;
           this.rateChargeDetail = rateChargeDetail;
           this.totalDetail = totalDetail;
           this.goodsDescription = goodsDescription;
           this.consolidation = consolidation;
           this.dimension = dimension;
           this.volume = volume;
           this.ULDNumber = ULDNumber;
           this.shipperLoadCount = shipperLoadCount;
           this.harmonisedCommodityCode = harmonisedCommodityCode;
           this.countryOriginGoods = countryOriginGoods;
           this.serviceCode = serviceCode;
    }


    /**
     * Gets the AWBRateLineNumber value for this ChargeLineCount.
     * 
     * @return AWBRateLineNumber
     */
    public java.lang.String getAWBRateLineNumber() {
        return AWBRateLineNumber;
    }


    /**
     * Sets the AWBRateLineNumber value for this ChargeLineCount.
     * 
     * @param AWBRateLineNumber
     */
    public void setAWBRateLineNumber(java.lang.String AWBRateLineNumber) {
        this.AWBRateLineNumber = AWBRateLineNumber;
    }


    /**
     * Gets the piecesRCPDetail value for this ChargeLineCount.
     * 
     * @return piecesRCPDetail
     */
    public sg.com.ccn.www.CCNMSGWS.PiecesRCP getPiecesRCPDetail() {
        return piecesRCPDetail;
    }


    /**
     * Sets the piecesRCPDetail value for this ChargeLineCount.
     * 
     * @param piecesRCPDetail
     */
    public void setPiecesRCPDetail(sg.com.ccn.www.CCNMSGWS.PiecesRCP piecesRCPDetail) {
        this.piecesRCPDetail = piecesRCPDetail;
    }


    /**
     * Gets the grossWeight value for this ChargeLineCount.
     * 
     * @return grossWeight
     */
    public sg.com.ccn.www.CCNMSGWS.GrossWeight getGrossWeight() {
        return grossWeight;
    }


    /**
     * Sets the grossWeight value for this ChargeLineCount.
     * 
     * @param grossWeight
     */
    public void setGrossWeight(sg.com.ccn.www.CCNMSGWS.GrossWeight grossWeight) {
        this.grossWeight = grossWeight;
    }


    /**
     * Gets the rateClassDetail value for this ChargeLineCount.
     * 
     * @return rateClassDetail
     */
    public sg.com.ccn.www.CCNMSGWS.RateClass getRateClassDetail() {
        return rateClassDetail;
    }


    /**
     * Sets the rateClassDetail value for this ChargeLineCount.
     * 
     * @param rateClassDetail
     */
    public void setRateClassDetail(sg.com.ccn.www.CCNMSGWS.RateClass rateClassDetail) {
        this.rateClassDetail = rateClassDetail;
    }


    /**
     * Gets the commodityItemDetail value for this ChargeLineCount.
     * 
     * @return commodityItemDetail
     */
    public sg.com.ccn.www.CCNMSGWS.CommodityItem getCommodityItemDetail() {
        return commodityItemDetail;
    }


    /**
     * Sets the commodityItemDetail value for this ChargeLineCount.
     * 
     * @param commodityItemDetail
     */
    public void setCommodityItemDetail(sg.com.ccn.www.CCNMSGWS.CommodityItem commodityItemDetail) {
        this.commodityItemDetail = commodityItemDetail;
    }


    /**
     * Gets the chargeableWeightDetail value for this ChargeLineCount.
     * 
     * @return chargeableWeightDetail
     */
    public sg.com.ccn.www.CCNMSGWS.ChargeableWeight getChargeableWeightDetail() {
        return chargeableWeightDetail;
    }


    /**
     * Sets the chargeableWeightDetail value for this ChargeLineCount.
     * 
     * @param chargeableWeightDetail
     */
    public void setChargeableWeightDetail(sg.com.ccn.www.CCNMSGWS.ChargeableWeight chargeableWeightDetail) {
        this.chargeableWeightDetail = chargeableWeightDetail;
    }


    /**
     * Gets the rateChargeDetail value for this ChargeLineCount.
     * 
     * @return rateChargeDetail
     */
    public sg.com.ccn.www.CCNMSGWS.RateCharge getRateChargeDetail() {
        return rateChargeDetail;
    }


    /**
     * Sets the rateChargeDetail value for this ChargeLineCount.
     * 
     * @param rateChargeDetail
     */
    public void setRateChargeDetail(sg.com.ccn.www.CCNMSGWS.RateCharge rateChargeDetail) {
        this.rateChargeDetail = rateChargeDetail;
    }


    /**
     * Gets the totalDetail value for this ChargeLineCount.
     * 
     * @return totalDetail
     */
    public sg.com.ccn.www.CCNMSGWS.Total getTotalDetail() {
        return totalDetail;
    }


    /**
     * Sets the totalDetail value for this ChargeLineCount.
     * 
     * @param totalDetail
     */
    public void setTotalDetail(sg.com.ccn.www.CCNMSGWS.Total totalDetail) {
        this.totalDetail = totalDetail;
    }


    /**
     * Gets the goodsDescription value for this ChargeLineCount.
     * 
     * @return goodsDescription
     */
    public sg.com.ccn.www.CCNMSGWS.GoodsDescription getGoodsDescription() {
        return goodsDescription;
    }


    /**
     * Sets the goodsDescription value for this ChargeLineCount.
     * 
     * @param goodsDescription
     */
    public void setGoodsDescription(sg.com.ccn.www.CCNMSGWS.GoodsDescription goodsDescription) {
        this.goodsDescription = goodsDescription;
    }


    /**
     * Gets the consolidation value for this ChargeLineCount.
     * 
     * @return consolidation
     */
    public sg.com.ccn.www.CCNMSGWS.Consolidation getConsolidation() {
        return consolidation;
    }


    /**
     * Sets the consolidation value for this ChargeLineCount.
     * 
     * @param consolidation
     */
    public void setConsolidation(sg.com.ccn.www.CCNMSGWS.Consolidation consolidation) {
        this.consolidation = consolidation;
    }


    /**
     * Gets the dimension value for this ChargeLineCount.
     * 
     * @return dimension
     */
    public sg.com.ccn.www.CCNMSGWS.Dimension getDimension() {
        return dimension;
    }


    /**
     * Sets the dimension value for this ChargeLineCount.
     * 
     * @param dimension
     */
    public void setDimension(sg.com.ccn.www.CCNMSGWS.Dimension dimension) {
        this.dimension = dimension;
    }


    /**
     * Gets the volume value for this ChargeLineCount.
     * 
     * @return volume
     */
    public sg.com.ccn.www.CCNMSGWS.Volume getVolume() {
        return volume;
    }


    /**
     * Sets the volume value for this ChargeLineCount.
     * 
     * @param volume
     */
    public void setVolume(sg.com.ccn.www.CCNMSGWS.Volume volume) {
        this.volume = volume;
    }


    /**
     * Gets the ULDNumber value for this ChargeLineCount.
     * 
     * @return ULDNumber
     */
    public sg.com.ccn.www.CCNMSGWS.ULDNumber getULDNumber() {
        return ULDNumber;
    }


    /**
     * Sets the ULDNumber value for this ChargeLineCount.
     * 
     * @param ULDNumber
     */
    public void setULDNumber(sg.com.ccn.www.CCNMSGWS.ULDNumber ULDNumber) {
        this.ULDNumber = ULDNumber;
    }


    /**
     * Gets the shipperLoadCount value for this ChargeLineCount.
     * 
     * @return shipperLoadCount
     */
    public sg.com.ccn.www.CCNMSGWS.ShipperLoadCount getShipperLoadCount() {
        return shipperLoadCount;
    }


    /**
     * Sets the shipperLoadCount value for this ChargeLineCount.
     * 
     * @param shipperLoadCount
     */
    public void setShipperLoadCount(sg.com.ccn.www.CCNMSGWS.ShipperLoadCount shipperLoadCount) {
        this.shipperLoadCount = shipperLoadCount;
    }


    /**
     * Gets the harmonisedCommodityCode value for this ChargeLineCount.
     * 
     * @return harmonisedCommodityCode
     */
    public sg.com.ccn.www.CCNMSGWS.HarmonisedCommodity getHarmonisedCommodityCode() {
        return harmonisedCommodityCode;
    }


    /**
     * Sets the harmonisedCommodityCode value for this ChargeLineCount.
     * 
     * @param harmonisedCommodityCode
     */
    public void setHarmonisedCommodityCode(sg.com.ccn.www.CCNMSGWS.HarmonisedCommodity harmonisedCommodityCode) {
        this.harmonisedCommodityCode = harmonisedCommodityCode;
    }


    /**
     * Gets the countryOriginGoods value for this ChargeLineCount.
     * 
     * @return countryOriginGoods
     */
    public sg.com.ccn.www.CCNMSGWS.CountryOrigin getCountryOriginGoods() {
        return countryOriginGoods;
    }


    /**
     * Sets the countryOriginGoods value for this ChargeLineCount.
     * 
     * @param countryOriginGoods
     */
    public void setCountryOriginGoods(sg.com.ccn.www.CCNMSGWS.CountryOrigin countryOriginGoods) {
        this.countryOriginGoods = countryOriginGoods;
    }


    /**
     * Gets the serviceCode value for this ChargeLineCount.
     * 
     * @return serviceCode
     */
    public sg.com.ccn.www.CCNMSGWS.ServiceCode getServiceCode() {
        return serviceCode;
    }


    /**
     * Sets the serviceCode value for this ChargeLineCount.
     * 
     * @param serviceCode
     */
    public void setServiceCode(sg.com.ccn.www.CCNMSGWS.ServiceCode serviceCode) {
        this.serviceCode = serviceCode;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ChargeLineCount)) return false;
        ChargeLineCount other = (ChargeLineCount) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.AWBRateLineNumber==null && other.getAWBRateLineNumber()==null) || 
             (this.AWBRateLineNumber!=null &&
              this.AWBRateLineNumber.equals(other.getAWBRateLineNumber()))) &&
            ((this.piecesRCPDetail==null && other.getPiecesRCPDetail()==null) || 
             (this.piecesRCPDetail!=null &&
              this.piecesRCPDetail.equals(other.getPiecesRCPDetail()))) &&
            ((this.grossWeight==null && other.getGrossWeight()==null) || 
             (this.grossWeight!=null &&
              this.grossWeight.equals(other.getGrossWeight()))) &&
            ((this.rateClassDetail==null && other.getRateClassDetail()==null) || 
             (this.rateClassDetail!=null &&
              this.rateClassDetail.equals(other.getRateClassDetail()))) &&
            ((this.commodityItemDetail==null && other.getCommodityItemDetail()==null) || 
             (this.commodityItemDetail!=null &&
              this.commodityItemDetail.equals(other.getCommodityItemDetail()))) &&
            ((this.chargeableWeightDetail==null && other.getChargeableWeightDetail()==null) || 
             (this.chargeableWeightDetail!=null &&
              this.chargeableWeightDetail.equals(other.getChargeableWeightDetail()))) &&
            ((this.rateChargeDetail==null && other.getRateChargeDetail()==null) || 
             (this.rateChargeDetail!=null &&
              this.rateChargeDetail.equals(other.getRateChargeDetail()))) &&
            ((this.totalDetail==null && other.getTotalDetail()==null) || 
             (this.totalDetail!=null &&
              this.totalDetail.equals(other.getTotalDetail()))) &&
            ((this.goodsDescription==null && other.getGoodsDescription()==null) || 
             (this.goodsDescription!=null &&
              this.goodsDescription.equals(other.getGoodsDescription()))) &&
            ((this.consolidation==null && other.getConsolidation()==null) || 
             (this.consolidation!=null &&
              this.consolidation.equals(other.getConsolidation()))) &&
            ((this.dimension==null && other.getDimension()==null) || 
             (this.dimension!=null &&
              this.dimension.equals(other.getDimension()))) &&
            ((this.volume==null && other.getVolume()==null) || 
             (this.volume!=null &&
              this.volume.equals(other.getVolume()))) &&
            ((this.ULDNumber==null && other.getULDNumber()==null) || 
             (this.ULDNumber!=null &&
              this.ULDNumber.equals(other.getULDNumber()))) &&
            ((this.shipperLoadCount==null && other.getShipperLoadCount()==null) || 
             (this.shipperLoadCount!=null &&
              this.shipperLoadCount.equals(other.getShipperLoadCount()))) &&
            ((this.harmonisedCommodityCode==null && other.getHarmonisedCommodityCode()==null) || 
             (this.harmonisedCommodityCode!=null &&
              this.harmonisedCommodityCode.equals(other.getHarmonisedCommodityCode()))) &&
            ((this.countryOriginGoods==null && other.getCountryOriginGoods()==null) || 
             (this.countryOriginGoods!=null &&
              this.countryOriginGoods.equals(other.getCountryOriginGoods()))) &&
            ((this.serviceCode==null && other.getServiceCode()==null) || 
             (this.serviceCode!=null &&
              this.serviceCode.equals(other.getServiceCode())));
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
        if (getAWBRateLineNumber() != null) {
            _hashCode += getAWBRateLineNumber().hashCode();
        }
        if (getPiecesRCPDetail() != null) {
            _hashCode += getPiecesRCPDetail().hashCode();
        }
        if (getGrossWeight() != null) {
            _hashCode += getGrossWeight().hashCode();
        }
        if (getRateClassDetail() != null) {
            _hashCode += getRateClassDetail().hashCode();
        }
        if (getCommodityItemDetail() != null) {
            _hashCode += getCommodityItemDetail().hashCode();
        }
        if (getChargeableWeightDetail() != null) {
            _hashCode += getChargeableWeightDetail().hashCode();
        }
        if (getRateChargeDetail() != null) {
            _hashCode += getRateChargeDetail().hashCode();
        }
        if (getTotalDetail() != null) {
            _hashCode += getTotalDetail().hashCode();
        }
        if (getGoodsDescription() != null) {
            _hashCode += getGoodsDescription().hashCode();
        }
        if (getConsolidation() != null) {
            _hashCode += getConsolidation().hashCode();
        }
        if (getDimension() != null) {
            _hashCode += getDimension().hashCode();
        }
        if (getVolume() != null) {
            _hashCode += getVolume().hashCode();
        }
        if (getULDNumber() != null) {
            _hashCode += getULDNumber().hashCode();
        }
        if (getShipperLoadCount() != null) {
            _hashCode += getShipperLoadCount().hashCode();
        }
        if (getHarmonisedCommodityCode() != null) {
            _hashCode += getHarmonisedCommodityCode().hashCode();
        }
        if (getCountryOriginGoods() != null) {
            _hashCode += getCountryOriginGoods().hashCode();
        }
        if (getServiceCode() != null) {
            _hashCode += getServiceCode().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ChargeLineCount.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeLineCount"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AWBRateLineNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AWBRateLineNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("piecesRCPDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PiecesRCPDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PiecesRCP"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("grossWeight");
        elemField.setXmlName(new javax.xml.namespace.QName("", "GrossWeight"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "GrossWeight"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("rateClassDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RateClassDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "RateClass"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("commodityItemDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CommodityItemDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CommodityItem"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("chargeableWeightDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ChargeableWeightDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeableWeight"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("rateChargeDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RateChargeDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "RateCharge"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("totalDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "TotalDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Total"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("goodsDescription");
        elemField.setXmlName(new javax.xml.namespace.QName("", "GoodsDescription"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "GoodsDescription"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consolidation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Consolidation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Consolidation"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("dimension");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Dimension"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Dimension"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("volume");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Volume"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Volume"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ULDNumber");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ULDNumber"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ULDNumber"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipperLoadCount");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipperLoadCount"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ShipperLoadCount"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("harmonisedCommodityCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "HarmonisedCommodityCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "HarmonisedCommodity"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("countryOriginGoods");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CountryOriginGoods"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CountryOrigin"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("serviceCode");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ServiceCode"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ServiceCode"));
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
