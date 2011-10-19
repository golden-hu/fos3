package haitai.fw.message;

import haitai.fos.sys.entity.idao.IPMessageDAO;
import haitai.fos.sys.entity.table.PMessage;
import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.FileUtil;
import haitai.fw.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;
import java.io.File;
import java.io.UnsupportedEncodingException;

@Component
public class MailManager {
	@Autowired
	private JavaMailSender sender;
	@Autowired
	private IPMessageDAO dao;
	private static FosLogger logger = new FosLogger(MailManager.class);

	@Transactional
	public void sendEmail(PMessage message) {
		SessionManager.setAttr(SessionKeyType.COMPCODE, message.getCompCode());
		send(message);
		message.setMessSendFlag(ConstUtil.TrueShort);
		dao.updateSendFlag(message);
		logger.info("message id = " + message.getMessId() + ", send flag update success!");
	}

	public void send(PMessage pmsg) {
		MimeMessage message = sender.createMimeMessage();
		MimeMessageHelper helper;
		try {
			helper = new MimeMessageHelper(message, true, ConstUtil.XML_ENCODING_UTF8);
			String[] to = splitEmailAddress(pmsg.getMessTo());
			String[] cc = splitEmailAddress(pmsg.getMessCc());
			String[] bcc = splitEmailAddress(pmsg.getMessBcc());
			helper.setTo(to);
			if (cc != null) {
				helper.setCc(cc);
			}
			if (bcc != null) {
				helper.setBcc(bcc);
			}
			String subject = pmsg.getMessSubject();
			if (StringUtil.isBlank(subject)) {
				subject = "no subject";
			}
			helper.setFrom("fos");
			helper.setReplyTo(pmsg.getMessFrom());
			helper.setSubject(subject);
			helper.setText(pmsg.getMessBody(), pmsg.getMessType() != ConstUtil.MESS_TYPE_FAX);
			if (StringUtil.isNotBlank(pmsg.getMessAttachment())) {
				String fileName = pmsg.getMessAttachment();
				FileUtil.createDirs(ConfigUtil.getRealTempDir());
				fileName = ConfigUtil.getRealTempDir() + ConstUtil.DIR_SEP + fileName;
				FileSystemResource file = new FileSystemResource(new File(fileName));
				helper.addAttachment(MimeUtility.encodeWord(file.getFilename()), file);
			}
		} catch (MessagingException e) {
			logger.error("mail id = " + pmsg.getMessId() + ", send failed", e);
			throw new BusinessException("mail send failed", e);
		} catch (UnsupportedEncodingException e) {
			logger.error("mail id = " + pmsg.getMessId() + ", send failed", e);
			throw new BusinessException("unsupported Encoding", e);
		}
		sender.send(message);
	}

	private String[] splitEmailAddress(String s) {
		if (StringUtil.isBlank(s)) {
			return null;
		}
		s = s.replaceAll(",", ";");
		s = s.replaceAll("，", ";");
		s = s.replaceAll("；", ";");
		return s.split(";");
	}

}
