package sg.com.ccn;

import java.rmi.RemoteException;

import haitai.fos.ffop.entity.table.FConsign;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sg.com.ccn.FSU.*;

@Service
public class CNNFsuService {
	
	/*@Transactional
	public boolean sendFsu(FConsign fcon) {
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
		FSU fsu=new FSU();
		
		String StandardMessageIdentification_standardMessageIdentification="";
		String StandardMessageIdentification_messageTypeVersionNumber="";
		fsu.setStandardMessageIdentification(new StandardMessageIdentification(
				StandardMessageIdentification_standardMessageIdentification,
				StandardMessageIdentification_messageTypeVersionNumber
		));
		
		String AWBIdentification_airlinePrefix="";
		String AWBIdentification_AWBSerialNumber="";
		String AWBOriginAndDestination_airportCodeOfOrigin="";
		String AWBOriginAndDestination_airportCodeOfDestination="";
		String QuantityDetail_shipmentDescriptionCode="";
		String QuantityDetail_numberOfPieces="";
		String QuantityDetail_weightCode="";
		String QuantityDetail_weight="";
		String TotalConsignmentPieces_shipmentDescriptionCode="";
		String TotalConsignmentPieces_numberOfPieces="";
		fsu.setConsignmentDetail(new ConsignmentDetail(
				new AWBIdentification(AWBIdentification_airlinePrefix,AWBIdentification_AWBSerialNumber),
				new AWBOriginAndDestination(AWBOriginAndDestination_airportCodeOfOrigin,
						AWBOriginAndDestination_airportCodeOfDestination),
				new QuantityDetail(QuantityDetail_shipmentDescriptionCode,QuantityDetail_numberOfPieces,
						QuantityDetail_weightCode,QuantityDetail_weight),
				new TotalConsignmentPieces(TotalConsignmentPieces_shipmentDescriptionCode,
						TotalConsignmentPieces_numberOfPieces)
		));
		
		String MovementDetail_carrierCode="";
		String MovementDetail_flightNumber="";
		String MovementDetail_day="";
		String MovementDetail_month="";
		String MovementDetail_actualTime="";
		String MovementDetail_dayChangeIndicator="";
		String MovementDetail_arrivalAirportCode="";
		String MovementDetail_departureAirportCode="";
		String MovementDetail_airportCode="";
		String RCS_QuantityDetail_shipmentDescriptionCode="";
		String RCS_QuantityDetail_numberOfPieces="";
		String RCS_QuantityDetail_weightCode="";
		String RCS_QuantityDetail_weight="";
		String ReceivedFromDetail_name="";
		String VolumeDetail_volumeCode="";
		String VolumeDetail_volumeAmount="";
		String DensityGroup_densityIndicator="";
		String DensityGroup_densityGroup="";
		fsu.setRCSStatusDetail(new RCSStatusDetail(
				new MovementDetail(MovementDetail_carrierCode,MovementDetail_flightNumber,
						MovementDetail_day,MovementDetail_month,MovementDetail_actualTime,
						MovementDetail_dayChangeIndicator,
						MovementDetail_arrivalAirportCode,MovementDetail_departureAirportCode,
						MovementDetail_airportCode),
				new QuantityDetail(RCS_QuantityDetail_shipmentDescriptionCode,
						RCS_QuantityDetail_numberOfPieces,RCS_QuantityDetail_weightCode,
						RCS_QuantityDetail_weight),
				new ReceivedFromDetail(ReceivedFromDetail_name),
				new VolumeDetail(VolumeDetail_volumeCode,VolumeDetail_volumeAmount),
				new DensityGroup(DensityGroup_densityIndicator,DensityGroup_densityGroup)
		));
		
		
		String RCT_MovementDetail_carrierCode="";
		String RCT_MovementDetail_flightNumber="";
		String RCT_MovementDetail_day="";
		String RCT_MovementDetail_month="";
		String RCT_MovementDetail_actualTime="";
		String RCT_MovementDetail_dayChangeIndicator="";
		String RCT_MovementDetail_arrivalAirportCode="";
		String RCT_MovementDetail_departureAirportCode="";
		String RCT_MovementDetail_airportCode="";
		String RCT_QuantityDetail_shipmentDescriptionCode="";
		String RCT_QuantityDetail_numberOfPieces="";
		String RCT_QuantityDetail_weightCode="";
		String RCT_QuantityDetail_weight="";
		fsu.setRCTStatusDetail(new RCTStatusDetail(
				new MovementDetail(RCT_MovementDetail_carrierCode,RCT_MovementDetail_flightNumber,
						RCT_MovementDetail_day,RCT_MovementDetail_month,RCT_MovementDetail_actualTime,
						RCT_MovementDetail_dayChangeIndicator,RCT_MovementDetail_arrivalAirportCode,
						RCT_MovementDetail_departureAirportCode,RCT_MovementDetail_airportCode),
				new QuantityDetail(RCT_QuantityDetail_shipmentDescriptionCode,
						RCT_QuantityDetail_numberOfPieces,RCT_QuantityDetail_weightCode,
						RCT_QuantityDetail_weight)
		));
		
		String RCF_MovementDetail_carrierCode="";
		String RCF_MovementDetail_flightNumber="";
		String RCF_MovementDetail_day="";
		String RCF_MovementDetail_month="";
		String RCF_MovementDetail_actualTime="";
		String RCF_MovementDetail_dayChangeIndicator="";
		String RCF_MovementDetail_arrivalAirportCode="";
		String RCF_MovementDetail_departureAirportCode="";
		String RCF_MovementDetail_airportCode="";
		String RCF_QuantityDetail_shipmentDescriptionCode="";
		String RCF_QuantityDetail_numberOfPieces="";
		String RCF_QuantityDetail_weightCode="";
		String RCF_QuantityDetail_weight="";
		String TimeInformation_ofTimeIndicator="";
		String TimeInformation_time="";
		String TimeInformation_dayChangeIndicator="";
		String Arrival_TimeInformation_ofTimeIndicator="";
		String Arrival_TimeInformation_time="";
		String Arrival_TimeInformation_dayChangeIndicator="";
		fsu.setRCFStatusDetail(new RCFStatusDetail(
				new MovementDetail(RCF_MovementDetail_carrierCode,RCF_MovementDetail_flightNumber,
						RCF_MovementDetail_day,RCF_MovementDetail_month,RCF_MovementDetail_actualTime,
						RCF_MovementDetail_dayChangeIndicator,RCF_MovementDetail_arrivalAirportCode,
						RCF_MovementDetail_departureAirportCode,RCF_MovementDetail_airportCode),
				new QuantityDetail(RCF_QuantityDetail_shipmentDescriptionCode,
						RCF_QuantityDetail_numberOfPieces,RCF_QuantityDetail_weightCode,
						RCF_QuantityDetail_weight),
				new TimeInformation(TimeInformation_ofTimeIndicator,TimeInformation_time,
						TimeInformation_dayChangeIndicator),
				new TimeInformation(Arrival_TimeInformation_ofTimeIndicator,
						Arrival_TimeInformation_time,Arrival_TimeInformation_dayChangeIndicator)
		));
		
		fsu.setBKDStatusDetail(BKDStatusDetail);
		
		fsu.setMANStatusDetail(MANStatusDetail);
		
		fsu.setDEPStatusDetail(DEPStatusDetail);
		
		fsu.setPREStatusDetail(PREStatusDetail);
		
		fsu.setTRMStatusDetail(TRMStatusDetail);
		
		fsu.setTFDStatusDetail(TFDStatusDetail);
		
		fsu.setNFDStatusDetail(NFDStatusDetail);
		
		fsu.setAWDStatusDetail(AWDStatusDetail);
		
		fsu.setCCDStatusDetail(CCDStatusDetail);
		
		fsu.setDLVStatusDetail(DLVStatusDetail);
		
		fsu.setDISStatusDetail(DISStatusDetail);
		
		fsu.setCRCStatusDetail(CRCStatusDetail);
		
		fsu.setDDLStatusDetail(DDLStatusDetail);
		
		fsu.setTGCStatusDetail(TGCStatusDetail);
		
		fsu.setARRStatusDetail(ARRStatusDetail);
		
		fsu.setAWRStatusDetail(AWRStatusDetail);
		
		fsu.setFOHStatusDetail(FOHStatusDetail);
		
		fsu.setPUPStatusDetail(PUPStatusDetail);
		
		fsu.setPODStatusDetail(PODStatusDetail);
		
		fsu.setULDDescription(ULDDescription);
		
		MsgBody msgBody=new MsgBody(fsu);
		
		bool=true;
		try {
			CCNMSGSoapProxy msg=new CCNMSGSoapProxy();
	        msg.processMessage(new CCNMSG(msgEnvelope,msgBody));
	        
        } catch (RemoteException e) {
	        e.printStackTrace();
        }
		return bool;
	}*/
	
}
