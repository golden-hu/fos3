package haitai.fos.ffop.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;

import haitai.fw.entity.BaseDomain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractFInspectionDoc extends BaseDomain {

	private static final long serialVersionUID = 5180153508260395016L;
	private Integer indoId;
	private Integer version;
	private Integer consId;
	private String consNo;
	private Integer inspId;
	private String inspNo;
	private Integer dotyId;
	private String dotyClass;
	private String dotyName;
	private String indoNo;
	private Integer indoOriginalNum;
	private Integer indoCopyNum;
	private Short indoStatus;
	private Date indoRecvDate;
	private String indoSendDate;
	private Integer indoSendType;
	private String indoSendSigner;
	private Date indoReturnDate;
	private Date indoBackDate;
	private Integer indoBackType;
	private String indoBackSigner;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "INDO_ID", unique = true, nullable = false)
	public Integer getIndoId() {
		return this.indoId;
	}

	public void setIndoId(Integer indoId) {
		this.indoId = indoId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CONS_ID", nullable = false)
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "CONS_NO", length = 32)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "INSP_ID", nullable = false)
	public Integer getInspId() {
		return this.inspId;
	}

	public void setInspId(Integer inspId) {
		this.inspId = inspId;
	}

	@Column(name = "INSP_NO", length = 32)
	public String getInspNo() {
		return this.inspNo;
	}

	public void setInspNo(String inspNo) {
		this.inspNo = inspNo;
	}

	@Column(name = "DOTY_ID", nullable = false)
	public Integer getDotyId() {
		return this.dotyId;
	}

	public void setDotyId(Integer dotyId) {
		this.dotyId = dotyId;
	}

	@Column(name = "DOTY_CLASS", length = 4)
	public String getDotyClass() {
		return this.dotyClass;
	}

	public void setDotyClass(String dotyClass) {
		this.dotyClass = dotyClass;
	}

	@Column(name = "DOTY_NAME", length = 200)
	public String getDotyName() {
		return this.dotyName;
	}

	public void setDotyName(String dotyName) {
		this.dotyName = dotyName;
	}

	@Column(name = "INDO_NO", length = 32)
	public String getIndoNo() {
		return this.indoNo;
	}

	public void setIndoNo(String indoNo) {
		this.indoNo = indoNo;
	}

	@Column(name = "INDO_ORIGINAL_NUM")
	public Integer getIndoOriginalNum() {
		return this.indoOriginalNum;
	}

	public void setIndoOriginalNum(Integer indoOriginalNum) {
		this.indoOriginalNum = indoOriginalNum;
	}

	@Column(name = "INDO_COPY_NUM")
	public Integer getIndoCopyNum() {
		return this.indoCopyNum;
	}

	public void setIndoCopyNum(Integer indoCopyNum) {
		this.indoCopyNum = indoCopyNum;
	}

	@Column(name = "INDO_STATUS")
	public Short getIndoStatus() {
		return this.indoStatus;
	}

	public void setIndoStatus(Short indoStatus) {
		this.indoStatus = indoStatus;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INDO_RECV_DATE", length = 10)
	public Date getIndoRecvDate() {
		return this.indoRecvDate;
	}

	public void setIndoRecvDate(Date indoRecvDate) {
		this.indoRecvDate = indoRecvDate;
	}

	@Column(name = "INDO_SEND_DATE", length = 32)
	public String getIndoSendDate() {
		return this.indoSendDate;
	}

	public void setIndoSendDate(String indoSendDate) {
		this.indoSendDate = indoSendDate;
	}

	@Column(name = "INDO_SEND_TYPE")
	public Integer getIndoSendType() {
		return this.indoSendType;
	}

	public void setIndoSendType(Integer indoSendType) {
		this.indoSendType = indoSendType;
	}

	@Column(name = "INDO_SEND_SIGNER", length = 32)
	public String getIndoSendSigner() {
		return this.indoSendSigner;
	}

	public void setIndoSendSigner(String indoSendSigner) {
		this.indoSendSigner = indoSendSigner;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INDO_RETURN_DATE", length = 10)
	public Date getIndoReturnDate() {
		return this.indoReturnDate;
	}

	public void setIndoReturnDate(Date indoReturnDate) {
		this.indoReturnDate = indoReturnDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INDO_BACK_DATE", length = 10)
	public Date getIndoBackDate() {
		return this.indoBackDate;
	}

	public void setIndoBackDate(Date indoBackDate) {
		this.indoBackDate = indoBackDate;
	}

	@Column(name = "INDO_BACK_TYPE")
	public Integer getIndoBackType() {
		return this.indoBackType;
	}

	public void setIndoBackType(Integer indoBackType) {
		this.indoBackType = indoBackType;
	}

	@Column(name = "INDO_BACK_SIGNER", length = 32)
	public String getIndoBackSigner() {
		return this.indoBackSigner;
	}

	public void setIndoBackSigner(String indoBackSigner) {
		this.indoBackSigner = indoBackSigner;
	}

	@Column(name = "USER_ID")
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "GROU_ID")
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "CREATE_BY")
	public Integer getCreateBy() {
		return this.createBy;
	}

	public void setCreateBy(Integer createBy) {
		this.createBy = createBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_TIME", length = 19)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Column(name = "MODIFY_BY")
	public Integer getModifyBy() {
		return this.modifyBy;
	}

	public void setModifyBy(Integer modifyBy) {
		this.modifyBy = modifyBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFY_TIME", length = 19)
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	@Column(name = "COMP_CODE")
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}

}