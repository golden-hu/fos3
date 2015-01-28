package sg.com.ccn;

import java.rmi.RemoteException;

import haitai.fos.ffop.entity.table.FConsign;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sg.com.ccn.FMA.*;

@Service
public class CNNFmaService {
	
	/*@Transactional
	public boolean sendFhl(FConsign fcon) {
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
		FMA fma=new FMA();
		
		String StandardMessageIdentification_standardMessageIdentification="";
		String StandardMessageIdentification_messageTypeVersionNumber="";
		fma.setStandardMessageIdentification(new StandardMessageIdentification(
				StandardMessageIdentification_standardMessageIdentification,
				StandardMessageIdentification_messageTypeVersionNumber
		));
		
		String [] reasonForAcknowledgement={""};
		fma.setReasonForAcknowledgement(reasonForAcknowledgement);
		
		String SubMessageTypeIdentification_subMessageTypeIdentification="";
		fma.setSubMessageTypeIdentification(new SubMessageTypeIdentification(
				SubMessageTypeIdentification_subMessageTypeIdentification
		));
		
		String ReceivedMessageDetail_receivedMessageDetail="";
		fma.setReceivedMessageDetail(new ReceivedMessageDetail(
				ReceivedMessageDetail_receivedMessageDetail
		));
		
		MsgBody msgBody=new MsgBody(fma);
		
		bool=true;
		try {
			CCNMSGSoapProxy msg=new CCNMSGSoapProxy();
	        msg.airWaybillData(new CCNMSG(msgEnvelope,msgBody));
	        
        } catch (RemoteException e) {
	        e.printStackTrace();
        }
		return bool;
	}*/
	
	@Transactional
	public boolean receiveFhl(FConsign fcon) {
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
		FMA fma=new FMA();
		
		String StandardMessageIdentification_standardMessageIdentification="";
		String StandardMessageIdentification_messageTypeVersionNumber="";
		fma.setStandardMessageIdentification(new StandardMessageIdentification(
				StandardMessageIdentification_standardMessageIdentification,
				StandardMessageIdentification_messageTypeVersionNumber
		));
		
		String [] reasonForAcknowledgement={""};
		fma.setReasonForAcknowledgement(reasonForAcknowledgement);
		
		String SubMessageTypeIdentification_subMessageTypeIdentification="";
		fma.setSubMessageTypeIdentification(new SubMessageTypeIdentification(
				SubMessageTypeIdentification_subMessageTypeIdentification
		));
		
		String ReceivedMessageDetail_receivedMessageDetail="";
		fma.setReceivedMessageDetail(new ReceivedMessageDetail(
				ReceivedMessageDetail_receivedMessageDetail
		));
		
		MsgBody msgBody=new MsgBody(fma);
		
		bool=true;
		CCNMSGSoapProxy msg=new CCNMSGSoapProxy();
		CCNMSGSoap soap=msg.getCCNMSGSoap();
		
		return bool;
	}
}
