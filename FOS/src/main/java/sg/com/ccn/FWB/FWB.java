/**
 * FWB.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package sg.com.ccn.FWB;

public class FWB  implements java.io.Serializable {
    private sg.com.ccn.FWB.StandardMessageIdentification standardMessageIdentification;

    private sg.com.ccn.FWB.ConsignmentDetail consignmentDetail;

    private sg.com.ccn.FWB.FlightIdentification[] flightBooking;

    private sg.com.ccn.FWB.Routing routing;

    private sg.com.ccn.FWB.Shipper shipper;

    private sg.com.ccn.FWB.Consignee consignee;

    private sg.com.ccn.FWB.Agent agent;

    private sg.com.ccn.FWB.SSR specialServiceRequest;

    private sg.com.ccn.FWB.Notify alsoNotify;

    private sg.com.ccn.FWB.AccountingDetail[] accountingInformation;

    private sg.com.ccn.FWB.ChargeDeclaration chargeDeclaration;

    private sg.com.ccn.FWB.RateDescription rateDescription;

    private sg.com.ccn.FWB.OtherCharge otherCharge;

    private sg.com.ccn.FWB.PrepaidChargeSummary prepaidChargeSummary;

    private sg.com.ccn.FWB.CollectChargeSummary collectChargeSummary;

    private sg.com.ccn.FWB.ShipperCertification shipperCertification;

    private sg.com.ccn.FWB.CarrierExection carrierExection;

    private sg.com.ccn.FWB.OtherServiceInfo otherServiceInformation;

    private sg.com.ccn.FWB.CCChargeDestinationCurrency CCChargeDestinationCurrency;

    private sg.com.ccn.FWB.SenderReference senderReference;

    private sg.com.ccn.FWB.CustomsOrigin customsOrigin;

    private sg.com.ccn.FWB.CommissionInformation commissionInformation;

    private sg.com.ccn.FWB.SalesIncentive salesIncentiveInformation;

    private sg.com.ccn.FWB.AgentReferenceData agentReferenceData;

    private sg.com.ccn.FWB.SpecialHandlingRequirement[] specialHandlingData;

    private sg.com.ccn.FWB.NominatedHandlingParty nominatedHandlingParty;

    private sg.com.ccn.FWB.ShipmentReference shipmentReferenceInformation;

    private sg.com.ccn.FWB.OtherParticipantInfo otherParticipantInformation;

    private sg.com.ccn.FWB.OtherCustomsInfo[] otherCustomsInformation;

    private sg.com.ccn.FWB.AAIParticipantDetail AAIParticipantDetail;

    private sg.com.ccn.FWB.AAITSPDetail AAITSPDetail;

    private sg.com.ccn.FWB.DimensionDetail[] AAIDimensionDetail;

    private sg.com.ccn.FWB.AAICommodityDetail AAICommodityDetail;

    public FWB() {
    }

    public FWB(
           sg.com.ccn.FWB.StandardMessageIdentification standardMessageIdentification,
           sg.com.ccn.FWB.ConsignmentDetail consignmentDetail,
           sg.com.ccn.FWB.FlightIdentification[] flightBooking,
           sg.com.ccn.FWB.Routing routing,
           sg.com.ccn.FWB.Shipper shipper,
           sg.com.ccn.FWB.Consignee consignee,
           sg.com.ccn.FWB.Agent agent,
           sg.com.ccn.FWB.SSR specialServiceRequest,
           sg.com.ccn.FWB.Notify alsoNotify,
           sg.com.ccn.FWB.AccountingDetail[] accountingInformation,
           sg.com.ccn.FWB.ChargeDeclaration chargeDeclaration,
           sg.com.ccn.FWB.RateDescription rateDescription,
           sg.com.ccn.FWB.OtherCharge otherCharge,
           sg.com.ccn.FWB.PrepaidChargeSummary prepaidChargeSummary,
           sg.com.ccn.FWB.CollectChargeSummary collectChargeSummary,
           sg.com.ccn.FWB.ShipperCertification shipperCertification,
           sg.com.ccn.FWB.CarrierExection carrierExection,
           sg.com.ccn.FWB.OtherServiceInfo otherServiceInformation,
           sg.com.ccn.FWB.CCChargeDestinationCurrency CCChargeDestinationCurrency,
           sg.com.ccn.FWB.SenderReference senderReference,
           sg.com.ccn.FWB.CustomsOrigin customsOrigin,
           sg.com.ccn.FWB.CommissionInformation commissionInformation,
           sg.com.ccn.FWB.SalesIncentive salesIncentiveInformation,
           sg.com.ccn.FWB.AgentReferenceData agentReferenceData,
           sg.com.ccn.FWB.SpecialHandlingRequirement[] specialHandlingData,
           sg.com.ccn.FWB.NominatedHandlingParty nominatedHandlingParty,
           sg.com.ccn.FWB.ShipmentReference shipmentReferenceInformation,
           sg.com.ccn.FWB.OtherParticipantInfo otherParticipantInformation,
           sg.com.ccn.FWB.OtherCustomsInfo[] otherCustomsInformation,
           sg.com.ccn.FWB.AAIParticipantDetail AAIParticipantDetail,
           sg.com.ccn.FWB.AAITSPDetail AAITSPDetail,
           sg.com.ccn.FWB.DimensionDetail[] AAIDimensionDetail,
           sg.com.ccn.FWB.AAICommodityDetail AAICommodityDetail) {
           this.standardMessageIdentification = standardMessageIdentification;
           this.consignmentDetail = consignmentDetail;
           this.flightBooking = flightBooking;
           this.routing = routing;
           this.shipper = shipper;
           this.consignee = consignee;
           this.agent = agent;
           this.specialServiceRequest = specialServiceRequest;
           this.alsoNotify = alsoNotify;
           this.accountingInformation = accountingInformation;
           this.chargeDeclaration = chargeDeclaration;
           this.rateDescription = rateDescription;
           this.otherCharge = otherCharge;
           this.prepaidChargeSummary = prepaidChargeSummary;
           this.collectChargeSummary = collectChargeSummary;
           this.shipperCertification = shipperCertification;
           this.carrierExection = carrierExection;
           this.otherServiceInformation = otherServiceInformation;
           this.CCChargeDestinationCurrency = CCChargeDestinationCurrency;
           this.senderReference = senderReference;
           this.customsOrigin = customsOrigin;
           this.commissionInformation = commissionInformation;
           this.salesIncentiveInformation = salesIncentiveInformation;
           this.agentReferenceData = agentReferenceData;
           this.specialHandlingData = specialHandlingData;
           this.nominatedHandlingParty = nominatedHandlingParty;
           this.shipmentReferenceInformation = shipmentReferenceInformation;
           this.otherParticipantInformation = otherParticipantInformation;
           this.otherCustomsInformation = otherCustomsInformation;
           this.AAIParticipantDetail = AAIParticipantDetail;
           this.AAITSPDetail = AAITSPDetail;
           this.AAIDimensionDetail = AAIDimensionDetail;
           this.AAICommodityDetail = AAICommodityDetail;
    }


    /**
     * Gets the standardMessageIdentification value for this FWB.
     * 
     * @return standardMessageIdentification
     */
    public sg.com.ccn.FWB.StandardMessageIdentification getStandardMessageIdentification() {
        return standardMessageIdentification;
    }


    /**
     * Sets the standardMessageIdentification value for this FWB.
     * 
     * @param standardMessageIdentification
     */
    public void setStandardMessageIdentification(sg.com.ccn.FWB.StandardMessageIdentification standardMessageIdentification) {
        this.standardMessageIdentification = standardMessageIdentification;
    }


    /**
     * Gets the consignmentDetail value for this FWB.
     * 
     * @return consignmentDetail
     */
    public sg.com.ccn.FWB.ConsignmentDetail getConsignmentDetail() {
        return consignmentDetail;
    }


    /**
     * Sets the consignmentDetail value for this FWB.
     * 
     * @param consignmentDetail
     */
    public void setConsignmentDetail(sg.com.ccn.FWB.ConsignmentDetail consignmentDetail) {
        this.consignmentDetail = consignmentDetail;
    }


    /**
     * Gets the flightBooking value for this FWB.
     * 
     * @return flightBooking
     */
    public sg.com.ccn.FWB.FlightIdentification[] getFlightBooking() {
        return flightBooking;
    }


    /**
     * Sets the flightBooking value for this FWB.
     * 
     * @param flightBooking
     */
    public void setFlightBooking(sg.com.ccn.FWB.FlightIdentification[] flightBooking) {
        this.flightBooking = flightBooking;
    }


    /**
     * Gets the routing value for this FWB.
     * 
     * @return routing
     */
    public sg.com.ccn.FWB.Routing getRouting() {
        return routing;
    }


    /**
     * Sets the routing value for this FWB.
     * 
     * @param routing
     */
    public void setRouting(sg.com.ccn.FWB.Routing routing) {
        this.routing = routing;
    }


    /**
     * Gets the shipper value for this FWB.
     * 
     * @return shipper
     */
    public sg.com.ccn.FWB.Shipper getShipper() {
        return shipper;
    }


    /**
     * Sets the shipper value for this FWB.
     * 
     * @param shipper
     */
    public void setShipper(sg.com.ccn.FWB.Shipper shipper) {
        this.shipper = shipper;
    }


    /**
     * Gets the consignee value for this FWB.
     * 
     * @return consignee
     */
    public sg.com.ccn.FWB.Consignee getConsignee() {
        return consignee;
    }


    /**
     * Sets the consignee value for this FWB.
     * 
     * @param consignee
     */
    public void setConsignee(sg.com.ccn.FWB.Consignee consignee) {
        this.consignee = consignee;
    }


    /**
     * Gets the agent value for this FWB.
     * 
     * @return agent
     */
    public sg.com.ccn.FWB.Agent getAgent() {
        return agent;
    }


    /**
     * Sets the agent value for this FWB.
     * 
     * @param agent
     */
    public void setAgent(sg.com.ccn.FWB.Agent agent) {
        this.agent = agent;
    }


    /**
     * Gets the specialServiceRequest value for this FWB.
     * 
     * @return specialServiceRequest
     */
    public sg.com.ccn.FWB.SSR getSpecialServiceRequest() {
        return specialServiceRequest;
    }


    /**
     * Sets the specialServiceRequest value for this FWB.
     * 
     * @param specialServiceRequest
     */
    public void setSpecialServiceRequest(sg.com.ccn.FWB.SSR specialServiceRequest) {
        this.specialServiceRequest = specialServiceRequest;
    }


    /**
     * Gets the alsoNotify value for this FWB.
     * 
     * @return alsoNotify
     */
    public sg.com.ccn.FWB.Notify getAlsoNotify() {
        return alsoNotify;
    }


    /**
     * Sets the alsoNotify value for this FWB.
     * 
     * @param alsoNotify
     */
    public void setAlsoNotify(sg.com.ccn.FWB.Notify alsoNotify) {
        this.alsoNotify = alsoNotify;
    }


    /**
     * Gets the accountingInformation value for this FWB.
     * 
     * @return accountingInformation
     */
    public sg.com.ccn.FWB.AccountingDetail[] getAccountingInformation() {
        return accountingInformation;
    }


    /**
     * Sets the accountingInformation value for this FWB.
     * 
     * @param accountingInformation
     */
    public void setAccountingInformation(sg.com.ccn.FWB.AccountingDetail[] accountingInformation) {
        this.accountingInformation = accountingInformation;
    }


    /**
     * Gets the chargeDeclaration value for this FWB.
     * 
     * @return chargeDeclaration
     */
    public sg.com.ccn.FWB.ChargeDeclaration getChargeDeclaration() {
        return chargeDeclaration;
    }


    /**
     * Sets the chargeDeclaration value for this FWB.
     * 
     * @param chargeDeclaration
     */
    public void setChargeDeclaration(sg.com.ccn.FWB.ChargeDeclaration chargeDeclaration) {
        this.chargeDeclaration = chargeDeclaration;
    }


    /**
     * Gets the rateDescription value for this FWB.
     * 
     * @return rateDescription
     */
    public sg.com.ccn.FWB.RateDescription getRateDescription() {
        return rateDescription;
    }


    /**
     * Sets the rateDescription value for this FWB.
     * 
     * @param rateDescription
     */
    public void setRateDescription(sg.com.ccn.FWB.RateDescription rateDescription) {
        this.rateDescription = rateDescription;
    }


    /**
     * Gets the otherCharge value for this FWB.
     * 
     * @return otherCharge
     */
    public sg.com.ccn.FWB.OtherCharge getOtherCharge() {
        return otherCharge;
    }


    /**
     * Sets the otherCharge value for this FWB.
     * 
     * @param otherCharge
     */
    public void setOtherCharge(sg.com.ccn.FWB.OtherCharge otherCharge) {
        this.otherCharge = otherCharge;
    }


    /**
     * Gets the prepaidChargeSummary value for this FWB.
     * 
     * @return prepaidChargeSummary
     */
    public sg.com.ccn.FWB.PrepaidChargeSummary getPrepaidChargeSummary() {
        return prepaidChargeSummary;
    }


    /**
     * Sets the prepaidChargeSummary value for this FWB.
     * 
     * @param prepaidChargeSummary
     */
    public void setPrepaidChargeSummary(sg.com.ccn.FWB.PrepaidChargeSummary prepaidChargeSummary) {
        this.prepaidChargeSummary = prepaidChargeSummary;
    }


    /**
     * Gets the collectChargeSummary value for this FWB.
     * 
     * @return collectChargeSummary
     */
    public sg.com.ccn.FWB.CollectChargeSummary getCollectChargeSummary() {
        return collectChargeSummary;
    }


    /**
     * Sets the collectChargeSummary value for this FWB.
     * 
     * @param collectChargeSummary
     */
    public void setCollectChargeSummary(sg.com.ccn.FWB.CollectChargeSummary collectChargeSummary) {
        this.collectChargeSummary = collectChargeSummary;
    }


    /**
     * Gets the shipperCertification value for this FWB.
     * 
     * @return shipperCertification
     */
    public sg.com.ccn.FWB.ShipperCertification getShipperCertification() {
        return shipperCertification;
    }


    /**
     * Sets the shipperCertification value for this FWB.
     * 
     * @param shipperCertification
     */
    public void setShipperCertification(sg.com.ccn.FWB.ShipperCertification shipperCertification) {
        this.shipperCertification = shipperCertification;
    }


    /**
     * Gets the carrierExection value for this FWB.
     * 
     * @return carrierExection
     */
    public sg.com.ccn.FWB.CarrierExection getCarrierExection() {
        return carrierExection;
    }


    /**
     * Sets the carrierExection value for this FWB.
     * 
     * @param carrierExection
     */
    public void setCarrierExection(sg.com.ccn.FWB.CarrierExection carrierExection) {
        this.carrierExection = carrierExection;
    }


    /**
     * Gets the otherServiceInformation value for this FWB.
     * 
     * @return otherServiceInformation
     */
    public sg.com.ccn.FWB.OtherServiceInfo getOtherServiceInformation() {
        return otherServiceInformation;
    }


    /**
     * Sets the otherServiceInformation value for this FWB.
     * 
     * @param otherServiceInformation
     */
    public void setOtherServiceInformation(sg.com.ccn.FWB.OtherServiceInfo otherServiceInformation) {
        this.otherServiceInformation = otherServiceInformation;
    }


    /**
     * Gets the CCChargeDestinationCurrency value for this FWB.
     * 
     * @return CCChargeDestinationCurrency
     */
    public sg.com.ccn.FWB.CCChargeDestinationCurrency getCCChargeDestinationCurrency() {
        return CCChargeDestinationCurrency;
    }


    /**
     * Sets the CCChargeDestinationCurrency value for this FWB.
     * 
     * @param CCChargeDestinationCurrency
     */
    public void setCCChargeDestinationCurrency(sg.com.ccn.FWB.CCChargeDestinationCurrency CCChargeDestinationCurrency) {
        this.CCChargeDestinationCurrency = CCChargeDestinationCurrency;
    }


    /**
     * Gets the senderReference value for this FWB.
     * 
     * @return senderReference
     */
    public sg.com.ccn.FWB.SenderReference getSenderReference() {
        return senderReference;
    }


    /**
     * Sets the senderReference value for this FWB.
     * 
     * @param senderReference
     */
    public void setSenderReference(sg.com.ccn.FWB.SenderReference senderReference) {
        this.senderReference = senderReference;
    }


    /**
     * Gets the customsOrigin value for this FWB.
     * 
     * @return customsOrigin
     */
    public sg.com.ccn.FWB.CustomsOrigin getCustomsOrigin() {
        return customsOrigin;
    }


    /**
     * Sets the customsOrigin value for this FWB.
     * 
     * @param customsOrigin
     */
    public void setCustomsOrigin(sg.com.ccn.FWB.CustomsOrigin customsOrigin) {
        this.customsOrigin = customsOrigin;
    }


    /**
     * Gets the commissionInformation value for this FWB.
     * 
     * @return commissionInformation
     */
    public sg.com.ccn.FWB.CommissionInformation getCommissionInformation() {
        return commissionInformation;
    }


    /**
     * Sets the commissionInformation value for this FWB.
     * 
     * @param commissionInformation
     */
    public void setCommissionInformation(sg.com.ccn.FWB.CommissionInformation commissionInformation) {
        this.commissionInformation = commissionInformation;
    }


    /**
     * Gets the salesIncentiveInformation value for this FWB.
     * 
     * @return salesIncentiveInformation
     */
    public sg.com.ccn.FWB.SalesIncentive getSalesIncentiveInformation() {
        return salesIncentiveInformation;
    }


    /**
     * Sets the salesIncentiveInformation value for this FWB.
     * 
     * @param salesIncentiveInformation
     */
    public void setSalesIncentiveInformation(sg.com.ccn.FWB.SalesIncentive salesIncentiveInformation) {
        this.salesIncentiveInformation = salesIncentiveInformation;
    }


    /**
     * Gets the agentReferenceData value for this FWB.
     * 
     * @return agentReferenceData
     */
    public sg.com.ccn.FWB.AgentReferenceData getAgentReferenceData() {
        return agentReferenceData;
    }


    /**
     * Sets the agentReferenceData value for this FWB.
     * 
     * @param agentReferenceData
     */
    public void setAgentReferenceData(sg.com.ccn.FWB.AgentReferenceData agentReferenceData) {
        this.agentReferenceData = agentReferenceData;
    }


    /**
     * Gets the specialHandlingData value for this FWB.
     * 
     * @return specialHandlingData
     */
    public sg.com.ccn.FWB.SpecialHandlingRequirement[] getSpecialHandlingData() {
        return specialHandlingData;
    }


    /**
     * Sets the specialHandlingData value for this FWB.
     * 
     * @param specialHandlingData
     */
    public void setSpecialHandlingData(sg.com.ccn.FWB.SpecialHandlingRequirement[] specialHandlingData) {
        this.specialHandlingData = specialHandlingData;
    }


    /**
     * Gets the nominatedHandlingParty value for this FWB.
     * 
     * @return nominatedHandlingParty
     */
    public sg.com.ccn.FWB.NominatedHandlingParty getNominatedHandlingParty() {
        return nominatedHandlingParty;
    }


    /**
     * Sets the nominatedHandlingParty value for this FWB.
     * 
     * @param nominatedHandlingParty
     */
    public void setNominatedHandlingParty(sg.com.ccn.FWB.NominatedHandlingParty nominatedHandlingParty) {
        this.nominatedHandlingParty = nominatedHandlingParty;
    }


    /**
     * Gets the shipmentReferenceInformation value for this FWB.
     * 
     * @return shipmentReferenceInformation
     */
    public sg.com.ccn.FWB.ShipmentReference getShipmentReferenceInformation() {
        return shipmentReferenceInformation;
    }


    /**
     * Sets the shipmentReferenceInformation value for this FWB.
     * 
     * @param shipmentReferenceInformation
     */
    public void setShipmentReferenceInformation(sg.com.ccn.FWB.ShipmentReference shipmentReferenceInformation) {
        this.shipmentReferenceInformation = shipmentReferenceInformation;
    }


    /**
     * Gets the otherParticipantInformation value for this FWB.
     * 
     * @return otherParticipantInformation
     */
    public sg.com.ccn.FWB.OtherParticipantInfo getOtherParticipantInformation() {
        return otherParticipantInformation;
    }


    /**
     * Sets the otherParticipantInformation value for this FWB.
     * 
     * @param otherParticipantInformation
     */
    public void setOtherParticipantInformation(sg.com.ccn.FWB.OtherParticipantInfo otherParticipantInformation) {
        this.otherParticipantInformation = otherParticipantInformation;
    }


    /**
     * Gets the otherCustomsInformation value for this FWB.
     * 
     * @return otherCustomsInformation
     */
    public sg.com.ccn.FWB.OtherCustomsInfo[] getOtherCustomsInformation() {
        return otherCustomsInformation;
    }


    /**
     * Sets the otherCustomsInformation value for this FWB.
     * 
     * @param otherCustomsInformation
     */
    public void setOtherCustomsInformation(sg.com.ccn.FWB.OtherCustomsInfo[] otherCustomsInformation) {
        this.otherCustomsInformation = otherCustomsInformation;
    }

    public sg.com.ccn.FWB.OtherCustomsInfo getOtherCustomsInformation(int i) {
        return this.otherCustomsInformation[i];
    }

    public void setOtherCustomsInformation(int i, sg.com.ccn.FWB.OtherCustomsInfo _value) {
        this.otherCustomsInformation[i] = _value;
    }


    /**
     * Gets the AAIParticipantDetail value for this FWB.
     * 
     * @return AAIParticipantDetail
     */
    public sg.com.ccn.FWB.AAIParticipantDetail getAAIParticipantDetail() {
        return AAIParticipantDetail;
    }


    /**
     * Sets the AAIParticipantDetail value for this FWB.
     * 
     * @param AAIParticipantDetail
     */
    public void setAAIParticipantDetail(sg.com.ccn.FWB.AAIParticipantDetail AAIParticipantDetail) {
        this.AAIParticipantDetail = AAIParticipantDetail;
    }


    /**
     * Gets the AAITSPDetail value for this FWB.
     * 
     * @return AAITSPDetail
     */
    public sg.com.ccn.FWB.AAITSPDetail getAAITSPDetail() {
        return AAITSPDetail;
    }


    /**
     * Sets the AAITSPDetail value for this FWB.
     * 
     * @param AAITSPDetail
     */
    public void setAAITSPDetail(sg.com.ccn.FWB.AAITSPDetail AAITSPDetail) {
        this.AAITSPDetail = AAITSPDetail;
    }


    /**
     * Gets the AAIDimensionDetail value for this FWB.
     * 
     * @return AAIDimensionDetail
     */
    public sg.com.ccn.FWB.DimensionDetail[] getAAIDimensionDetail() {
        return AAIDimensionDetail;
    }


    /**
     * Sets the AAIDimensionDetail value for this FWB.
     * 
     * @param AAIDimensionDetail
     */
    public void setAAIDimensionDetail(sg.com.ccn.FWB.DimensionDetail[] AAIDimensionDetail) {
        this.AAIDimensionDetail = AAIDimensionDetail;
    }


    /**
     * Gets the AAICommodityDetail value for this FWB.
     * 
     * @return AAICommodityDetail
     */
    public sg.com.ccn.FWB.AAICommodityDetail getAAICommodityDetail() {
        return AAICommodityDetail;
    }


    /**
     * Sets the AAICommodityDetail value for this FWB.
     * 
     * @param AAICommodityDetail
     */
    public void setAAICommodityDetail(sg.com.ccn.FWB.AAICommodityDetail AAICommodityDetail) {
        this.AAICommodityDetail = AAICommodityDetail;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FWB)) return false;
        FWB other = (FWB) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.standardMessageIdentification==null && other.getStandardMessageIdentification()==null) || 
             (this.standardMessageIdentification!=null &&
              this.standardMessageIdentification.equals(other.getStandardMessageIdentification()))) &&
            ((this.consignmentDetail==null && other.getConsignmentDetail()==null) || 
             (this.consignmentDetail!=null &&
              this.consignmentDetail.equals(other.getConsignmentDetail()))) &&
            ((this.flightBooking==null && other.getFlightBooking()==null) || 
             (this.flightBooking!=null &&
              java.util.Arrays.equals(this.flightBooking, other.getFlightBooking()))) &&
            ((this.routing==null && other.getRouting()==null) || 
             (this.routing!=null &&
              this.routing.equals(other.getRouting()))) &&
            ((this.shipper==null && other.getShipper()==null) || 
             (this.shipper!=null &&
              this.shipper.equals(other.getShipper()))) &&
            ((this.consignee==null && other.getConsignee()==null) || 
             (this.consignee!=null &&
              this.consignee.equals(other.getConsignee()))) &&
            ((this.agent==null && other.getAgent()==null) || 
             (this.agent!=null &&
              this.agent.equals(other.getAgent()))) &&
            ((this.specialServiceRequest==null && other.getSpecialServiceRequest()==null) || 
             (this.specialServiceRequest!=null &&
              this.specialServiceRequest.equals(other.getSpecialServiceRequest()))) &&
            ((this.alsoNotify==null && other.getAlsoNotify()==null) || 
             (this.alsoNotify!=null &&
              this.alsoNotify.equals(other.getAlsoNotify()))) &&
            ((this.accountingInformation==null && other.getAccountingInformation()==null) || 
             (this.accountingInformation!=null &&
              java.util.Arrays.equals(this.accountingInformation, other.getAccountingInformation()))) &&
            ((this.chargeDeclaration==null && other.getChargeDeclaration()==null) || 
             (this.chargeDeclaration!=null &&
              this.chargeDeclaration.equals(other.getChargeDeclaration()))) &&
            ((this.rateDescription==null && other.getRateDescription()==null) || 
             (this.rateDescription!=null &&
              this.rateDescription.equals(other.getRateDescription()))) &&
            ((this.otherCharge==null && other.getOtherCharge()==null) || 
             (this.otherCharge!=null &&
              this.otherCharge.equals(other.getOtherCharge()))) &&
            ((this.prepaidChargeSummary==null && other.getPrepaidChargeSummary()==null) || 
             (this.prepaidChargeSummary!=null &&
              this.prepaidChargeSummary.equals(other.getPrepaidChargeSummary()))) &&
            ((this.collectChargeSummary==null && other.getCollectChargeSummary()==null) || 
             (this.collectChargeSummary!=null &&
              this.collectChargeSummary.equals(other.getCollectChargeSummary()))) &&
            ((this.shipperCertification==null && other.getShipperCertification()==null) || 
             (this.shipperCertification!=null &&
              this.shipperCertification.equals(other.getShipperCertification()))) &&
            ((this.carrierExection==null && other.getCarrierExection()==null) || 
             (this.carrierExection!=null &&
              this.carrierExection.equals(other.getCarrierExection()))) &&
            ((this.otherServiceInformation==null && other.getOtherServiceInformation()==null) || 
             (this.otherServiceInformation!=null &&
              this.otherServiceInformation.equals(other.getOtherServiceInformation()))) &&
            ((this.CCChargeDestinationCurrency==null && other.getCCChargeDestinationCurrency()==null) || 
             (this.CCChargeDestinationCurrency!=null &&
              this.CCChargeDestinationCurrency.equals(other.getCCChargeDestinationCurrency()))) &&
            ((this.senderReference==null && other.getSenderReference()==null) || 
             (this.senderReference!=null &&
              this.senderReference.equals(other.getSenderReference()))) &&
            ((this.customsOrigin==null && other.getCustomsOrigin()==null) || 
             (this.customsOrigin!=null &&
              this.customsOrigin.equals(other.getCustomsOrigin()))) &&
            ((this.commissionInformation==null && other.getCommissionInformation()==null) || 
             (this.commissionInformation!=null &&
              this.commissionInformation.equals(other.getCommissionInformation()))) &&
            ((this.salesIncentiveInformation==null && other.getSalesIncentiveInformation()==null) || 
             (this.salesIncentiveInformation!=null &&
              this.salesIncentiveInformation.equals(other.getSalesIncentiveInformation()))) &&
            ((this.agentReferenceData==null && other.getAgentReferenceData()==null) || 
             (this.agentReferenceData!=null &&
              this.agentReferenceData.equals(other.getAgentReferenceData()))) &&
            ((this.specialHandlingData==null && other.getSpecialHandlingData()==null) || 
             (this.specialHandlingData!=null &&
              java.util.Arrays.equals(this.specialHandlingData, other.getSpecialHandlingData()))) &&
            ((this.nominatedHandlingParty==null && other.getNominatedHandlingParty()==null) || 
             (this.nominatedHandlingParty!=null &&
              this.nominatedHandlingParty.equals(other.getNominatedHandlingParty()))) &&
            ((this.shipmentReferenceInformation==null && other.getShipmentReferenceInformation()==null) || 
             (this.shipmentReferenceInformation!=null &&
              this.shipmentReferenceInformation.equals(other.getShipmentReferenceInformation()))) &&
            ((this.otherParticipantInformation==null && other.getOtherParticipantInformation()==null) || 
             (this.otherParticipantInformation!=null &&
              this.otherParticipantInformation.equals(other.getOtherParticipantInformation()))) &&
            ((this.otherCustomsInformation==null && other.getOtherCustomsInformation()==null) || 
             (this.otherCustomsInformation!=null &&
              java.util.Arrays.equals(this.otherCustomsInformation, other.getOtherCustomsInformation()))) &&
            ((this.AAIParticipantDetail==null && other.getAAIParticipantDetail()==null) || 
             (this.AAIParticipantDetail!=null &&
              this.AAIParticipantDetail.equals(other.getAAIParticipantDetail()))) &&
            ((this.AAITSPDetail==null && other.getAAITSPDetail()==null) || 
             (this.AAITSPDetail!=null &&
              this.AAITSPDetail.equals(other.getAAITSPDetail()))) &&
            ((this.AAIDimensionDetail==null && other.getAAIDimensionDetail()==null) || 
             (this.AAIDimensionDetail!=null &&
              java.util.Arrays.equals(this.AAIDimensionDetail, other.getAAIDimensionDetail()))) &&
            ((this.AAICommodityDetail==null && other.getAAICommodityDetail()==null) || 
             (this.AAICommodityDetail!=null &&
              this.AAICommodityDetail.equals(other.getAAICommodityDetail())));
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
        if (getStandardMessageIdentification() != null) {
            _hashCode += getStandardMessageIdentification().hashCode();
        }
        if (getConsignmentDetail() != null) {
            _hashCode += getConsignmentDetail().hashCode();
        }
        if (getFlightBooking() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getFlightBooking());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getFlightBooking(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getRouting() != null) {
            _hashCode += getRouting().hashCode();
        }
        if (getShipper() != null) {
            _hashCode += getShipper().hashCode();
        }
        if (getConsignee() != null) {
            _hashCode += getConsignee().hashCode();
        }
        if (getAgent() != null) {
            _hashCode += getAgent().hashCode();
        }
        if (getSpecialServiceRequest() != null) {
            _hashCode += getSpecialServiceRequest().hashCode();
        }
        if (getAlsoNotify() != null) {
            _hashCode += getAlsoNotify().hashCode();
        }
        if (getAccountingInformation() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getAccountingInformation());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getAccountingInformation(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getChargeDeclaration() != null) {
            _hashCode += getChargeDeclaration().hashCode();
        }
        if (getRateDescription() != null) {
            _hashCode += getRateDescription().hashCode();
        }
        if (getOtherCharge() != null) {
            _hashCode += getOtherCharge().hashCode();
        }
        if (getPrepaidChargeSummary() != null) {
            _hashCode += getPrepaidChargeSummary().hashCode();
        }
        if (getCollectChargeSummary() != null) {
            _hashCode += getCollectChargeSummary().hashCode();
        }
        if (getShipperCertification() != null) {
            _hashCode += getShipperCertification().hashCode();
        }
        if (getCarrierExection() != null) {
            _hashCode += getCarrierExection().hashCode();
        }
        if (getOtherServiceInformation() != null) {
            _hashCode += getOtherServiceInformation().hashCode();
        }
        if (getCCChargeDestinationCurrency() != null) {
            _hashCode += getCCChargeDestinationCurrency().hashCode();
        }
        if (getSenderReference() != null) {
            _hashCode += getSenderReference().hashCode();
        }
        if (getCustomsOrigin() != null) {
            _hashCode += getCustomsOrigin().hashCode();
        }
        if (getCommissionInformation() != null) {
            _hashCode += getCommissionInformation().hashCode();
        }
        if (getSalesIncentiveInformation() != null) {
            _hashCode += getSalesIncentiveInformation().hashCode();
        }
        if (getAgentReferenceData() != null) {
            _hashCode += getAgentReferenceData().hashCode();
        }
        if (getSpecialHandlingData() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getSpecialHandlingData());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getSpecialHandlingData(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getNominatedHandlingParty() != null) {
            _hashCode += getNominatedHandlingParty().hashCode();
        }
        if (getShipmentReferenceInformation() != null) {
            _hashCode += getShipmentReferenceInformation().hashCode();
        }
        if (getOtherParticipantInformation() != null) {
            _hashCode += getOtherParticipantInformation().hashCode();
        }
        if (getOtherCustomsInformation() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getOtherCustomsInformation());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getOtherCustomsInformation(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getAAIParticipantDetail() != null) {
            _hashCode += getAAIParticipantDetail().hashCode();
        }
        if (getAAITSPDetail() != null) {
            _hashCode += getAAITSPDetail().hashCode();
        }
        if (getAAIDimensionDetail() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getAAIDimensionDetail());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getAAIDimensionDetail(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getAAICommodityDetail() != null) {
            _hashCode += getAAICommodityDetail().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FWB.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FWB"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("standardMessageIdentification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "StandardMessageIdentification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "StandardMessageIdentification"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consignmentDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ConsignmentDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ConsignmentDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("flightBooking");
        elemField.setXmlName(new javax.xml.namespace.QName("", "FlightBooking"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "FlightIdentification"));
        elemField.setNillable(false);
        elemField.setItemQName(new javax.xml.namespace.QName("", "FlightIdentification"));
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("routing");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Routing"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Routing"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipper");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Shipper"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Shipper"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("consignee");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Consignee"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Consignee"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("agent");
        elemField.setXmlName(new javax.xml.namespace.QName("", "Agent"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Agent"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("specialServiceRequest");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SpecialServiceRequest"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SSR"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("alsoNotify");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AlsoNotify"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "Notify"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("accountingInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AccountingInformation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AccountingDetail"));
        elemField.setNillable(false);
        elemField.setItemQName(new javax.xml.namespace.QName("", "AccountingDetail"));
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("chargeDeclaration");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ChargeDeclaration"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ChargeDeclaration"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("rateDescription");
        elemField.setXmlName(new javax.xml.namespace.QName("", "RateDescription"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "RateDescription"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherCharge");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherCharge"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherCharge"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("prepaidChargeSummary");
        elemField.setXmlName(new javax.xml.namespace.QName("", "PrepaidChargeSummary"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "PrepaidChargeSummary"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("collectChargeSummary");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CollectChargeSummary"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CollectChargeSummary"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipperCertification");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipperCertification"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ShipperCertification"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("carrierExection");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CarrierExection"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CarrierExection"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherServiceInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherServiceInformation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherServiceInfo"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("CCChargeDestinationCurrency");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CCChargeDestinationCurrency"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CCChargeDestinationCurrency"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("senderReference");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SenderReference"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SenderReference"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("customsOrigin");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CustomsOrigin"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CustomsOrigin"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("commissionInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "CommissionInformation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "CommissionInformation"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("salesIncentiveInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SalesIncentiveInformation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SalesIncentive"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("agentReferenceData");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AgentReferenceData"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AgentReferenceData"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("specialHandlingData");
        elemField.setXmlName(new javax.xml.namespace.QName("", "SpecialHandlingData"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "SpecialHandlingRequirement"));
        elemField.setNillable(false);
        elemField.setItemQName(new javax.xml.namespace.QName("", "SpecialHandlingRequirement"));
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("nominatedHandlingParty");
        elemField.setXmlName(new javax.xml.namespace.QName("", "NominatedHandlingParty"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "NominatedHandlingParty"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("shipmentReferenceInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "ShipmentReferenceInformation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "ShipmentReference"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherParticipantInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherParticipantInformation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherParticipantInfo"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("otherCustomsInformation");
        elemField.setXmlName(new javax.xml.namespace.QName("", "OtherCustomsInformation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "OtherCustomsInfo"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AAIParticipantDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AAIParticipantDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AAIParticipantDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AAITSPDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AAITSPDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AAITSPDetail"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AAIDimensionDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AAIDimensionDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "DimensionDetail"));
        elemField.setNillable(false);
        elemField.setItemQName(new javax.xml.namespace.QName("", "DimensionDetail"));
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("AAICommodityDetail");
        elemField.setXmlName(new javax.xml.namespace.QName("", "AAICommodityDetail"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ccn.com.sg/CCNMSGWS", "AAICommodityDetail"));
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
