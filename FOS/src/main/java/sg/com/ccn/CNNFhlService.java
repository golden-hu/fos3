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

import sg.com.ccn.FHL.AWBOriginAndDestination;
import sg.com.ccn.FHL.CCNMSG;
import sg.com.ccn.FHL.CCNMSGSoapProxy;
import sg.com.ccn.FHL.ChargeDeclarations;
import sg.com.ccn.FHL.CodedLocation;
import sg.com.ccn.FHL.ConsigneeNameAndAddress;
import sg.com.ccn.FHL.ContactDetail;
import sg.com.ccn.FHL.Envelope;
import sg.com.ccn.FHL.FHL;
import sg.com.ccn.FHL.FreeTextDescriptionOfGoods;
import sg.com.ccn.FHL.HarmonisedTariffScheduleInformation;
import sg.com.ccn.FHL.HouseAndFreeTextGroup;
import sg.com.ccn.FHL.HouseWaybillOriginAndDestination;
import sg.com.ccn.FHL.HouseWaybillSummaryDetail;
import sg.com.ccn.FHL.HouseWaybillTotals;
import sg.com.ccn.FHL.Location;
import sg.com.ccn.FHL.MasterAWBConsignmentDetail;
import sg.com.ccn.FHL.MasterAWBIdentification;
import sg.com.ccn.FHL.MsgBody;
import sg.com.ccn.FHL.NatureOfGoods;
import sg.com.ccn.FHL.OtherCustomsInfo;
import sg.com.ccn.FHL.ParticipantDetail;
import sg.com.ccn.FHL.PrepaidCollectChargeDeclarations;
import sg.com.ccn.FHL.QuantityDetail;
import sg.com.ccn.FHL.ShipperNameAndAddress;
import sg.com.ccn.FHL.SpecialHandlingRequirements;
import sg.com.ccn.FHL.StandardMessageIdentification;
import sg.com.ccn.FHL.StandardMessageIdentifierBase;
import sg.com.ccn.FHL.StreetAddress;
import sg.com.ccn.FHL.TSPDetail;
import sg.com.ccn.FHL.ValueForCarriageDeclaration;
import sg.com.ccn.FHL.ValueForCustomsDeclaration;
import sg.com.ccn.FHL.ValueForInsuranceDeclaration;
import sg.com.ccn.util.Const;
import sg.com.ccn.util.CopyFile;
import sg.com.ccn.util.InitData;

@Service
public class CNNFhlService {
	@PersistenceContext(unitName="FOSPU")
	 private EntityManager em;
	
	@Transactional
	public boolean sendFhl() {
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
		FHL fhl=new FHL();
		
		String messageTypeVersionNumber="";
		fhl.setStandardMessageIdentification(new StandardMessageIdentification(
				new StandardMessageIdentifierBase("FHL"),
				messageTypeVersionNumber
		));
		
		String airlinePrefix="";
		String AWBSerialNumber="";
		String airportccnyCodeOfOrigin="";
		String airportccnyCodeOfDestination="";
		String shipmentDescriptionCode="";
		String numberOfPieces="";
		String weightCode="";
		String weight="";
		fhl.setMasterAWBConsignmentDetail(new MasterAWBConsignmentDetail(
				new MasterAWBIdentification(airlinePrefix,AWBSerialNumber),
				new AWBOriginAndDestination(airportccnyCodeOfOrigin,airportccnyCodeOfDestination),
				new QuantityDetail(shipmentDescriptionCode,numberOfPieces,weightCode,weight)
		));
		
		String house_HWBSerialNumber="";
		String house_airportccnyCodeOfDeparture="";
		String house_airportccnyCodeOfDestination="";
		String house_numberOfPieces="";
		String house_weightCode="";
		String house_weight="";
		String house_SLAC="";
		String house_manifestDescriptionOfGoods="";
		String house_specialHandlingCode="";
		String house_freeText="";
		String house_harmonisedCommodityCode="";
		String house_ISOCountryCode="";
		String house_informationIdentifier="";
		String house_customsInformationIdentifier="";
		String house_supplementCustomInformation="";
		fhl.setHouseAndFreeTextGroup(new HouseAndFreeTextGroup(
				new HouseWaybillSummaryDetail(
						house_HWBSerialNumber,
							new HouseWaybillOriginAndDestination(house_airportccnyCodeOfDeparture,
									house_airportccnyCodeOfDestination),
							new HouseWaybillTotals(house_numberOfPieces,house_weightCode,house_weight,house_SLAC),
							new NatureOfGoods(house_manifestDescriptionOfGoods),
							new SpecialHandlingRequirements[]{
								new SpecialHandlingRequirements(house_specialHandlingCode)
							}
				),
				new FreeTextDescriptionOfGoods[]{
					new FreeTextDescriptionOfGoods(house_freeText)
				},
				new HarmonisedTariffScheduleInformation[]{
					new HarmonisedTariffScheduleInformation(house_harmonisedCommodityCode)
				},
				new OtherCustomsInfo[]{
					new OtherCustomsInfo(house_ISOCountryCode,house_informationIdentifier,
							house_customsInformationIdentifier,house_supplementCustomInformation)
				}
		));
		
		String shipper_SHPName="";
		String shipper_streetAddress="";
		String shipper_place="";
		String shipper_stateProvince="";
		String shipper_ISOCountryCode="";
		String shipper_postCode="";
		String shipper_contactIdentifier="";
		String shipper_contactNumber="";
		fhl.setShipperNameAndAddress(new ShipperNameAndAddress(
				shipper_SHPName,
				new StreetAddress(shipper_streetAddress),
				new Location(shipper_place,shipper_stateProvince),
				new CodedLocation(shipper_ISOCountryCode,shipper_postCode),
				new ContactDetail[]{
					new ContactDetail(shipper_contactIdentifier,shipper_contactNumber)
			}
		));
		
		String consignee_CNEName="";
		String consignee_streetAddress="";
		String consignee_place="";
		String consignee_stateProvince="";
		String consignee_ISOCountryCode="";
		String consignee_postCode="";
		String consignee_contactIdentifier="";
		String consignee_contactNumber="";
		fhl.setConsigneeNameAndAddress(new ConsigneeNameAndAddress(
				consignee_CNEName,
				new StreetAddress(consignee_streetAddress),
				new Location(consignee_place,consignee_stateProvince),
				new CodedLocation(consignee_ISOCountryCode,consignee_postCode),
				new ContactDetail[]{
					new ContactDetail (consignee_contactIdentifier,consignee_contactNumber)
				}
		));
		
		String ISOCurrencyCode="";
		String PCIndWeightValuation="";
		String PCIndOtherCharges="";
		String declaredValueForCarriage="";
		String noValueDeclared="";
		String declaredValueForCustoms="";
		String noCustomsValue="";
		String declaredValueForInsurance="";
		String noValue="";
		fhl.setChargeDeclarations(new ChargeDeclarations(
				ISOCurrencyCode,
				new PrepaidCollectChargeDeclarations(PCIndWeightValuation,PCIndOtherCharges),
				new ValueForCarriageDeclaration(declaredValueForCarriage,noValueDeclared),
				new ValueForCustomsDeclaration(declaredValueForCustoms,noCustomsValue),
				new ValueForInsuranceDeclaration(declaredValueForInsurance,noValue)
		));
		
		String recipientOfMessage="";
		String carrierCodeBased="";
		String totalChargeableWeight="";
		fhl.setAAIParticipantDetail(new ParticipantDetail(
				recipientOfMessage,carrierCodeBased,totalChargeableWeight
		));
		
		String shippingBillNumber="";
		fhl.setAAITSPDetail(new TSPDetail(shippingBillNumber));
		
		MsgBody msgBody=new MsgBody(fhl);
		
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
