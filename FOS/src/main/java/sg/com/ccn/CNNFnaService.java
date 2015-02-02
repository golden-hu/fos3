package sg.com.ccn;

import java.rmi.RemoteException;

import haitai.fos.ffop.entity.table.FConsign;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sg.com.ccn.FNA.*;

@Service
public class CNNFnaService {
	
	@Transactional
	public boolean sendFna(FConsign fcon) {
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
		FNA fna=new FNA();
		
		String StandardMessageIdentification_standardMessageIdentification="";
		String StandardMessageIdentification_messageTypeVersionNumber="";
		fna.setStandardMessageIdentification(new StandardMessageIdentification(
				StandardMessageIdentification_standardMessageIdentification,
				StandardMessageIdentification_messageTypeVersionNumber
		));
		
		String Reason_reasonForRejectionError="";
		fna.setReasonForRejectionError(new Reason[]{
				new Reason(Reason_reasonForRejectionError)
		});
		
		String SubMessageTypeIdentification_subMessageTypeIdentification="";
		fna.setSubMessageTypeIdentification(new SubMessageTypeIdentification(
				SubMessageTypeIdentification_subMessageTypeIdentification
		));
		
		String ReceivedMessageDetail_receivedMessageDetail="";
		fna.setReceivedMessageDetail(new ReceivedMessageDetail(
				ReceivedMessageDetail_receivedMessageDetail
		));
		
		MsgBody msgBody=new MsgBody(fna);
		
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
