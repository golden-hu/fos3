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
		String senderPimaAddress="CSGAGT01XSPHOSQ";
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
		
		String HWBSerialNumber="";
		String airportccnyCodeOfDeparture="";
		String airportccnyCodeOfDestination2="";
		String numberOfPieces2="";
		String weightCode2="";
		String weight2="";
		String SLAC="";
		String manifestDescriptionOfGoods="";
		String specialHandlingCode="";
		String freeText="";
		String harmonisedCommodityCode="";
		String ISOCountryCode="";
		String informationIdentifier="";
		String customsInformationIdentifier="";
		String supplementCustomInformation="";
		fhl.setHouseAndFreeTextGroup(new HouseAndFreeTextGroup(
				new HouseWaybillSummaryDetail(
							HWBSerialNumber,
							new HouseWaybillOriginAndDestination(airportccnyCodeOfDeparture,
									airportccnyCodeOfDestination2),
							new HouseWaybillTotals(numberOfPieces2,weightCode2,weight2,SLAC),
							new NatureOfGoods(manifestDescriptionOfGoods),
							new SpecialHandlingRequirements[]{
								new SpecialHandlingRequirements(specialHandlingCode)
							}
				),
				new FreeTextDescriptionOfGoods[]{
					new FreeTextDescriptionOfGoods(freeText)
				},
				new HarmonisedTariffScheduleInformation[]{
					new HarmonisedTariffScheduleInformation(harmonisedCommodityCode)
				},
				new OtherCustomsInfo[]{
					new OtherCustomsInfo(ISOCountryCode,informationIdentifier,
							customsInformationIdentifier,supplementCustomInformation)
				}
		));
		
		String SHPName="";
		String streetAddress="";
		String place="";
		String stateProvince="";
		String ISOCountryCode2="";
		String postCode="";
		String contactIdentifier="";
		String contactNumber="";
		fhl.setShipperNameAndAddress(new ShipperNameAndAddress(
				SHPName,
				new StreetAddress(streetAddress),
				new Location(place,stateProvince),
				new CodedLocation(ISOCountryCode2,postCode),
				new ContactDetail[]{
					new ContactDetail(contactIdentifier,contactNumber)
			}
		));
		
		String CNEName="";
		String streetAddress2="";
		String place2="";
		String stateProvince2="";
		String ISOCountryCode3="";
		String postCode2="";
		String contactIdentifier2="";
		String contactNumber2="";
		fhl.setConsigneeNameAndAddress(new ConsigneeNameAndAddress(
				CNEName,
				new StreetAddress(streetAddress2),
				new Location(place2,stateProvince2),
				new CodedLocation(ISOCountryCode3,postCode2),
				new ContactDetail[]{
					new ContactDetail (contactIdentifier2,contactNumber2)
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
