package haitai.fos.sys.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;

import haitai.fw.entity.BaseDomain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@MappedSuperclass
public abstract class AbstractPMessage extends BaseDomain {

	private static final long serialVersionUID = 3947258556494742598L;
	private Long messId;
	private Short messType;
	private String messTo;
	private String messCc;
	private String messBcc;
	private String messSubject;
	private String messBody;
	private String messAttachment;
	private String messFrom;
	private Date messCreateTime;
	private Short messSendFlag;
	private Integer messFromUserId;
	private String messFromUserName;
	private Integer messToUserId;
	private String messToUserName;
	private String compCode;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "mess_id", unique = true, nullable = false)
	public Long getMessId() {
		return this.messId;
	}

	public void setMessId(Long messId) {
		this.messId = messId;
	}

	@Column(name = "mess_type", nullable = false)
	public Short getMessType() {
		return this.messType;
	}

	public void setMessType(Short messType) {
		this.messType = messType;
	}

	@Column(name = "mess_to", nullable = false)
	public String getMessTo() {
		return this.messTo;
	}

	public void setMessTo(String messTo) {
		this.messTo = messTo;
	}

	@Column(name = "mess_cc")
	public String getMessCc() {
		return this.messCc;
	}

	public void setMessCc(String messCc) {
		this.messCc = messCc;
	}

	@Column(name = "mess_bcc")
	public String getMessBcc() {
		return this.messBcc;
	}

	public void setMessBcc(String messBcc) {
		this.messBcc = messBcc;
	}

	@Column(name = "mess_subject")
	public String getMessSubject() {
		return this.messSubject;
	}

	public void setMessSubject(String messSubject) {
		this.messSubject = messSubject;
	}

	@Column(name = "mess_body", nullable = false, length = 65535)
	public String getMessBody() {
		return this.messBody;
	}

	public void setMessBody(String messBody) {
		this.messBody = messBody;
	}

	@Column(name = "mess_attachment", length = 100)
	public String getMessAttachment() {
		return this.messAttachment;
	}

	public void setMessAttachment(String messAttachment) {
		this.messAttachment = messAttachment;
	}

	@Column(name = "mess_from", nullable = false)
	public String getMessFrom() {
		return this.messFrom;
	}

	public void setMessFrom(String messFrom) {
		this.messFrom = messFrom;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "mess_create_time", nullable = false, length = 19)
	public Date getMessCreateTime() {
		return this.messCreateTime;
	}

	public void setMessCreateTime(Date messCreateTime) {
		this.messCreateTime = messCreateTime;
	}

	@Column(name = "mess_send_flag", nullable = false)
	public Short getMessSendFlag() {
		return this.messSendFlag;
	}

	public void setMessSendFlag(Short messSendFlag) {
		this.messSendFlag = messSendFlag;
	}

	@Column(name = "mess_from_user_id")
	public Integer getMessFromUserId() {
		return this.messFromUserId;
	}

	public void setMessFromUserId(Integer messFromUserId) {
		this.messFromUserId = messFromUserId;
	}

	@Column(name = "mess_from_user_name", length = 32)
	public String getMessFromUserName() {
		return this.messFromUserName;
	}

	public void setMessFromUserName(String messFromUserName) {
		this.messFromUserName = messFromUserName;
	}

	@Column(name = "mess_to_user_id")
	public Integer getMessToUserId() {
		return this.messToUserId;
	}

	public void setMessToUserId(Integer messToUserId) {
		this.messToUserId = messToUserId;
	}

	@Column(name = "mess_to_user_name", length = 32)
	public String getMessToUserName() {
		return this.messToUserName;
	}

	public void setMessToUserName(String messToUserName) {
		this.messToUserName = messToUserName;
	}

	@Column(name = "comp_code", nullable = false, length = 4)
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

}