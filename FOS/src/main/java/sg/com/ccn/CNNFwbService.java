package sg.com.ccn;

import java.rmi.RemoteException;
import java.util.List;

import javax.persistence.PersistenceContext;
import javax.persistence.EntityManager;
import javax.persistence.Query;

import haitai.fw.util.ConfigUtil;
import haitai.fw.util.ConstUtil;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sg.com.ccn.www.CCNMSGWS.*;

@Service
public class CNNFwbService {
	@PersistenceContext(unitName="FOSPU")
	 private EntityManager em;
	
	@Transactional
	public boolean sendFwb() {
		boolean bool=false;
		//msgEnvelope
		Envelope msgEnvelope=new Envelope();
		String priority="QK";
		String recipientPimaAddress="CSGAGT85GHASQFWBSIN";
		String senderPimaAddress="CSGAGT01XSPHOSQ/SIN81";
		String GMT="225422";
		String senderOriginalCode="";
		String messageSequenceNumber="";
		msgEnvelope.setPriority(priority);
		msgEnvelope.setRecipientPimaAddress(recipientPimaAddress);
		msgEnvelope.setSenderPimaAddress(senderPimaAddress);
		msgEnvelope.setGMT(GMT);
		msgEnvelope.setSenderOriginalCode(senderOriginalCode);
		msgEnvelope.setMessageSequenceNumber(messageSequenceNumber);
		
		//msgBody
		FWB fwb=new FWB();
		
		String messageTypeVersionNumber="";
		fwb.setStandardMessageIdentification(new StandardMessageIdentification(
				new StandardMessageIdentifierBase("FWB"),
				messageTypeVersionNumber
		));
		
		String consignment_airlinePrefix="";
		String consignment_AWBSerialNumber="";
		String consignment_airportCodeOfOrigin="";
		String consignment_airportCodeOfDestination="";
		String consignment_shipmentDescriptionCode="";
		String consignment_numberOfPieces="";
		String consignment_weightCode="";
		String consignment_weight="";
		String consignment_volumeCode="";
		String consignment_volumeAmount="";
		String consignment_densityIndicator="";
		String consignment_densityGroup="";
		fwb.setConsignmentDetail(new ConsignmentDetail(
				new AWBIdentification(consignment_airlinePrefix,consignment_AWBSerialNumber),
				new AWBOriginAndDestination(consignment_airportCodeOfOrigin,consignment_airportCodeOfDestination),
				new QuantityDetail(consignment_shipmentDescriptionCode,consignment_numberOfPieces,
						consignment_weightCode,consignment_weight),
				new Volume(consignment_volumeCode,consignment_volumeAmount),
				new DensityGroup(consignment_densityIndicator,consignment_densityGroup)
		));
		
		String carrierCode="";
		String flightNumber="";
		String dayOfScheduledDeparture="";
		fwb.setFlightBooking(new FlightIdentification[]{
				new FlightIdentification(carrierCode,flightNumber,dayOfScheduledDeparture)
		});
		
		String FirstDestination_airportCityCode="";
		String FirstDestination_carrierCode="";
		String OnwardDestination_airportCityCode="";
		String OnwardDestination_carrierCode="";
		fwb.setRouting(new Routing(
				new FirstDestination(FirstDestination_airportCityCode,FirstDestination_carrierCode),
				new OnwardDestination[]{
					new OnwardDestination(OnwardDestination_airportCityCode,OnwardDestination_carrierCode)
				}
		));
		
		String shipper_accountNumber="";
		String shipper_name="";
		String shipper_streetAddress="";
		String shipper_place="";
		String shipper_stateProvince="";
		String shipper_ISOCountryCode="";
		String shipper_postCode="";
		String shipper_contactIdentifier="";
		String shipper_contactNumber="";
		fwb.setShipper(new Shipper(
				new AccountDetail(shipper_accountNumber),
				new Name(shipper_name),
				new StreetAddress(shipper_streetAddress),
				new Location(shipper_place,shipper_stateProvince),
				new CodedLocation(shipper_ISOCountryCode,shipper_postCode),
				new ContactDetail[]{
					new ContactDetail(shipper_contactIdentifier,shipper_contactNumber)
				}
		));
		
		String consignee_accountNumber="";
		String consignee_name="";
		String consignee_streetAddress="";
		String consignee_place="";
		String consignee_stateProvince="";
		String consignee_ISOCountryCode="";
		String consignee_postCode="";
		String consignee_contactIdentifier="";
		String consignee_contactNumber="";
		fwb.setConsignee(new Consignee(
				new AccountDetail(consignee_accountNumber),
				new Name(consignee_name),
				new StreetAddress(consignee_streetAddress),
				new Location(consignee_place,consignee_stateProvince),
				new CodedLocation(consignee_ISOCountryCode,consignee_postCode),
				new ContactDetail[]{
					new ContactDetail(consignee_contactIdentifier,consignee_contactNumber)
				}
		));
		
		String agent_accountNumber="";
		String agent_agentNumericCode="";
		String agent_agentCASSAddress="";
		String agent_participantIdentifier="";
		String agent_name="";
		String agent_place="";
		fwb.setAgent(new Agent(
				new AgtAccountDetail(agent_accountNumber,agent_agentNumericCode,
						agent_agentCASSAddress,agent_participantIdentifier),
				new Name(agent_name),
				new Place(agent_place)
		));
		
		String ssr_specialServiceRequest1="";
		String ssr_specialServiceRequest2="";
		String ssr_specialServiceRequest3="";
		fwb.setSpecialServiceRequest(new SSR(
				ssr_specialServiceRequest1,ssr_specialServiceRequest2,ssr_specialServiceRequest3
		));
	
		String nofify_name="";
		String nofify_streetAddress="";
		String nofify_place="";
		String nofify_stateProvince="";
		String nofify_ISOCountryCode="";
		String nofify_postCode="";
		String nofify_contactIdentifier="";
		String nofify_contactNumber="";
		fwb.setAlsoNotify(new Notify(
				new Name(nofify_name),
				new StreetAddress(nofify_streetAddress),
				new Location(nofify_place,nofify_stateProvince),
				new CodedLocation(nofify_ISOCountryCode,nofify_postCode),
				new ContactDetail[]{
					new ContactDetail(nofify_contactIdentifier,nofify_contactNumber)
				}
		));
		
		String account_accountInformationIdentifier="";
		String account_accountInformation="";
		fwb.setAccountingInformation(new AccountingDetail[]{
				new AccountingDetail(account_accountInformationIdentifier,account_accountInformation)
		});
		
		String charge_ISOCurrencyCode="";
		String charg_chargeCode="";
		String charg_weightValuation="";
		String charg_otherCharges="";
		String charg_declaredValueCarriage="";
		String charg_noValueDeclared="";
		String charg_declaredValueCustoms="";
		String charg_noCustomValue="";
		String charg_amountInsurance="";
		String charg_noValue="";
		fwb.setChargeDeclaration(new ChargeDeclaration(
				charge_ISOCurrencyCode,
				charg_chargeCode,
				new PCChargeDeclaration(charg_weightValuation,charg_otherCharges),
				new CarriageDeclaration(charg_declaredValueCarriage,charg_noValueDeclared),
				new CustomDeclaration(charg_declaredValueCustoms,charg_noCustomValue),
				new InsuranceDeclaration(charg_amountInsurance,charg_noValue)
		));
		
		String rate_AWBRateLineNumber="";
		String rate_numberOfPieces="";
		String rate_rateCombinationPoint="";
		String rate_weightCode="";
		String rate_weight="";
		String rate_rateClassCode="";
		String rate_commodityItemNumber="";
		String rate_ULDRateClass="";
		String rate_rateClassCodeBasis="";
		String rate_classRatePercentage="";
		String ChargeableWeight_weight="";
		String rate_Discount="";
		String rate_charge_Discount="";
		String GoodsDescription_natureQuantityGoods="";
		String Consolidation_natureQuantityGoods="";
		String Dimension_weightCode="";
		String Dimension_weight="";
		String Dimension_measurementUnitCode="";
		String Dimension_lengthDimension="";
		String Dimension_widthDimension="";
		String Dimension_heightDimension="";
		String Dimension_numberOfPieces="";
		String Volume_volumeCode="";
		String Volume_volumeAmount="";
		String ULDNumber_ULDType="";
		String ULDNumber_ULDSerialNumber="";
		String ULDNumber_ULDOwnerCode="";
		String ShipperLoadCount_SLAC="";
		String rate_harmonisedCommodityCode="";
		String rate_ISOCountryCode="";
		String rate_serviceCode="";
		fwb.setRateDescription(new RateDescription(
				new ChargeLineCount(
						rate_AWBRateLineNumber,
						new PiecesRCP(rate_numberOfPieces,rate_rateCombinationPoint),
						new GrossWeight(rate_weightCode,rate_weight),
						new RateClass(rate_rateClassCode),
						new CommodityItem(rate_commodityItemNumber,rate_ULDRateClass,
								rate_rateClassCodeBasis,rate_classRatePercentage),
						new ChargeableWeight(ChargeableWeight_weight),
						new RateCharge(rate_Discount),
						new Total(rate_charge_Discount),
						new GoodsDescription(GoodsDescription_natureQuantityGoods),
						new Consolidation(Consolidation_natureQuantityGoods),
						new Dimension(Dimension_weightCode,Dimension_weight,Dimension_measurementUnitCode,
								Dimension_lengthDimension,
								Dimension_widthDimension,Dimension_heightDimension,Dimension_numberOfPieces),
						new Volume(Volume_volumeCode,Volume_volumeAmount),
						new ULDNumber(ULDNumber_ULDType,ULDNumber_ULDSerialNumber,ULDNumber_ULDOwnerCode),
						new ShipperLoadCount(ShipperLoadCount_SLAC),
						new HarmonisedCommodity(rate_harmonisedCommodityCode),
						new CountryOrigin(rate_ISOCountryCode),
						new ServiceCode(rate_serviceCode)
				)
		));
		
		String otherChar_PCIndicator="";
		String otherChar_otherChargeCode="";
		String otherChar_entitlementCode="";
		String otherChar_chargeAmount="";
		fwb.setOtherCharge(new OtherCharge(
				new ChargeLine(
						otherChar_PCIndicator,
						new OtherChargeItem[]{
								new OtherChargeItem(otherChar_otherChargeCode,otherChar_entitlementCode,
										otherChar_chargeAmount)
						}
				)
		));
		
		String TotalWeightCharge_chargeAmount="";
		String ValuationCharge_chargeAmount="";
		String Taxes_chargeAmount="";
		String OthChargeDueAgent_chargeAmount="";
		String OthChargeDueCarrier_chargeAmount="";
		String ChargeSummary_chargeAmount="";
		fwb.setPrepaidChargeSummary(new PrepaidChargeSummary(
				new TotalWeightCharge(TotalWeightCharge_chargeAmount),
				new ValuationCharge(ValuationCharge_chargeAmount),
				new Taxes(Taxes_chargeAmount),
				new OthChargeDueAgent(OthChargeDueAgent_chargeAmount),
				new OthChargeDueCarrier(OthChargeDueCarrier_chargeAmount),
				new ChargeSummary(ChargeSummary_chargeAmount)
		));
		
		String Collect_TotalWeightCharge_chargeAmount="";
		String Collect_ValuationCharge_chargeAmount="";
		String Collect_Taxes_chargeAmount="";
		String Collect_OthChargeDueAgent_chargeAmount="";
		String Collect_OthChargeDueCarrier_chargeAmount="";
		String Collect_ChargeSummary_chargeAmount="";
		fwb.setCollectChargeSummary(new CollectChargeSummary(
				new TotalWeightCharge(Collect_TotalWeightCharge_chargeAmount),
				new ValuationCharge(Collect_ValuationCharge_chargeAmount),
				new Taxes(Collect_Taxes_chargeAmount),
				new OthChargeDueAgent(Collect_OthChargeDueAgent_chargeAmount),
				new OthChargeDueCarrier(Collect_OthChargeDueCarrier_chargeAmount),
				new ChargeSummary(Collect_ChargeSummary_chargeAmount)
		));
		
		String ShipperCertification_signature="";
		fwb.setShipperCertification(new ShipperCertification(ShipperCertification_signature));
		
		String AWBIssueDetail_day="";
		String AWBIssueDetail_month="";
		String AWBIssueDetail_year="";
		String AWBIssueDetail_place="";
		String AWBIssueDetail_airportCityCode="";
		String Authorisation_signature="";
		fwb.setCarrierExection(new CarrierExection(
				new AWBIssueDetail(AWBIssueDetail_day,AWBIssueDetail_month,
						AWBIssueDetail_year,AWBIssueDetail_place,AWBIssueDetail_airportCityCode),
				new Authorisation(Authorisation_signature)
		));
		
		
		String OtherServiceInfo_otherServiceInformation1="";
		String OtherServiceInfo_otherServiceInformation2="";
		String OtherServiceInfo_otherServiceInformation3="";
		fwb.setOtherServiceInformation(new OtherServiceInfo(
				OtherServiceInfo_otherServiceInformation1,OtherServiceInfo_otherServiceInformation2,
				OtherServiceInfo_otherServiceInformation3
		));
		
		String CCCharg_ISOCurrencyCode="";
		String CCCharg_rateExchange="";
		String CCCharg_chargeAmount="";
		String CCCharg_Total_chargeAmount="";
		fwb.setCCChargeDestinationCurrency(new CCChargeDestinationCurrency(
				new DestinationCurrency(CCCharg_ISOCurrencyCode),
				new CurrencyConversionRate(CCCharg_rateExchange),
				new ChargeDestinationCurrency(),
				new ChargeDestination(CCCharg_chargeAmount),
				new TotalCollectCharge(CCCharg_Total_chargeAmount)
		));
		
		String Sender_SenderOffice_airportCityCode="";
		String Sender_SenderOffice_officeFunctionDesignator="";
		String Sender_SenderOffice_companyDesignator="";
		String Sender_SenderOffice_fileReference="";
		String Sender_SenderParticipant_participantIdentifier="";
		String Sender_SenderParticipant_participantCode="";
		String Sender_SenderParticipant_airportCityCode="";
		fwb.setSenderReference(new SenderReference(
				new SenderOfficeMessageAddress(Sender_SenderOffice_airportCityCode,
						Sender_SenderOffice_officeFunctionDesignator,
						Sender_SenderOffice_companyDesignator),
				new SenderOfficeFileReference(Sender_SenderOffice_fileReference),
				new SenderParticipantIdentification(Sender_SenderParticipant_participantIdentifier,
						Sender_SenderParticipant_participantCode,Sender_SenderParticipant_airportCityCode)
		));
		
		String customsOriginCode="";
		fwb.setCustomsOrigin(new CustomsOrigin(
				customsOriginCode
		));
		
		String CASSIndicator="";
		String CommissionAmount_CASSSettlementFactor="";
		String CommissionPercentage_CASSSettlementFactor="";
		fwb.setCommissionInformation(new CommissionInformation(
				new NoCommissionIndication(CASSIndicator),
				new CommissionAmount(CommissionAmount_CASSSettlementFactor),
				new CommissionPercentage(CommissionPercentage_CASSSettlementFactor)
		));
		
		String SalesIncentiveDetail_chargeAmount="";
		String SalesIncentiveIndication_CASSIndicator="";
		fwb.setSalesIncentiveInformation(new SalesIncentive(
				new SalesIncentiveDetail(SalesIncentiveDetail_chargeAmount),
				new SalesIncentiveIndication(SalesIncentiveIndication_CASSIndicator)
		));
		
		String AgentReference_fileReference="";
		fwb.setAgentReferenceData(new AgentReferenceData(
				new AgentReference(AgentReference_fileReference)
		));
		
		String specialHandlingCode="";
		fwb.setSpecialHandlingData(new SpecialHandlingRequirement[]{
				new SpecialHandlingRequirement(specialHandlingCode)
		});
		
		String NominatedHandlingParty_name="";
		String NominatedHandlingParty_palce="";
		fwb.setNominatedHandlingParty(new NominatedHandlingParty(
				NominatedHandlingParty_name,NominatedHandlingParty_palce
		));
		
		String ShipmentReference_referenceNumber="";
		String ShipmentReference_supplementaryShipmentInfo1="";
		String ShipmentReference_supplementaryShipmentInfo2="";
		fwb.setShipmentReferenceInformation(new ShipmentReference(
				ShipmentReference_referenceNumber,ShipmentReference_supplementaryShipmentInfo1,
				ShipmentReference_supplementaryShipmentInfo2
		));
		
		String OtherParticipantInfo_name="";
		String OthParticipantOfficeMessage_airportCityCode="";
		String OthParticipantOfficeMessage_officeFunctionDesignator="";
		String OthParticipantOfficeMessage_companyDesignator="";
		String OthParticipantOfficeFileReference_fileReference="";
		String OthParticipantIdentification_participantIdentifier="";
		String OthParticipantIdentification_participantCode="";
		String OthParticipantIdentification_airportCityCode="";
		fwb.setOtherParticipantInformation(new OtherParticipantInfo(
				OtherParticipantInfo_name,
				new OthParticipantOfficeMessage(OthParticipantOfficeMessage_airportCityCode,
						OthParticipantOfficeMessage_officeFunctionDesignator,OthParticipantOfficeMessage_companyDesignator),
				new OthParticipantOfficeFileReference(OthParticipantOfficeFileReference_fileReference),
				new OthParticipantIdentification(OthParticipantIdentification_participantIdentifier,
						OthParticipantIdentification_participantCode,OthParticipantIdentification_airportCityCode)
		));
		
		String OtherCustomsInfo_ISOCountryCode="";
		String OtherCustomsInfo_informationIdentifier="";
		String OtherCustomsInfo_customsInformationIdentifier="";
		String OtherCustomsInfo_supplementCustomInformation="";
		fwb.setOtherCustomsInformation(new OtherCustomsInfo[]{
				new OtherCustomsInfo(OtherCustomsInfo_ISOCountryCode,OtherCustomsInfo_informationIdentifier,
						OtherCustomsInfo_customsInformationIdentifier,OtherCustomsInfo_supplementCustomInformation)
		});
		
		String AAIParticipantDetail_recipientOfMessage="";
		String AAIParticipantDetail_carrierCodeBased="";
		String AAIParticipantDetail_totalChargeableWeight="";
		fwb.setAAIParticipantDetail(new AAIParticipantDetail(
				AAIParticipantDetail_recipientOfMessage,AAIParticipantDetail_carrierCodeBased,
				AAIParticipantDetail_totalChargeableWeight
		));
		
		String AAITSPDetail_shippingBillNumber="";
		fwb.setAAITSPDetail(new AAITSPDetail(
				AAITSPDetail_shippingBillNumber
		));
		
		String DimensionDetail_length="";
		String DimensionDetail_breadth="";
		String DimensionDetail_height="";
		String DimensionDetail_numberOfPackages="";
		fwb.setAAIDimensionDetail(new DimensionDetail[]{
				new DimensionDetail(DimensionDetail_length,DimensionDetail_breadth,
						DimensionDetail_height,DimensionDetail_numberOfPackages)
		});
		
		String CommodityDetail_commodity="";
		String CommodityDetail_numberOfPackages="";
		String CommodityDetail_grossWeight="";
		String CommodityDetail_chargeableWeight="";
		fwb.setAAICommodityDetail(new AAICommodityDetail(
				new CommodityDetail(CommodityDetail_commodity,CommodityDetail_numberOfPackages,
						CommodityDetail_grossWeight,CommodityDetail_chargeableWeight)
		));
		
		MsgBody msgBody=new MsgBody(fwb);
		
		bool=true;
		try {
			CCNMSGSoapProxy msg=new CCNMSGSoapProxy();
	        msg.airWaybillData(new CCNMSG(msgEnvelope,msgBody));
	        
        } catch (RemoteException e) {
	        e.printStackTrace();
        }
		return bool;
	}
	
}
