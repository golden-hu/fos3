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
public abstract class AbstractFCustomsDoc extends BaseDomain {

	private static final long serialVersionUID = 5760423613051103244L;
	private Integer cudoId;
	private Integer version;
	private Integer consId;
	private String consNo;
	private Integer cudeId;
	private String cudeNo;
	private Integer dotyId;
	private String dotyClass;
	private String dotyName;
	private String cudoNo;
	private Integer cudoNum;
	private Short cudoStatus;
	private Date cudoRecvDate;
	private Date cudoSendDate;
	private Integer cudoSendType;
	private String cudoSendSigner;
	private Date cudoReturnDate;
	private Date cudoBackDate;
	private Integer cudoBackType;
	private String cudoBackSigner;
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
	@Column(name = "CUDO_ID", unique = true, nullable = false)
	public Integer getCudoId() {
		return this.cudoId;
	}

	public void setCudoId(Integer cudoId) {
		this.cudoId = cudoId;
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

	@Column(name = "CONS_NO", length = 16)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "CUDE_ID", nullable = false)
	public Integer getCudeId() {
		return this.cudeId;
	}

	public void setCudeId(Integer cudeId) {
		this.cudeId = cudeId;
	}

	@Column(name = "CUDE_NO", length = 32)
	public String getCudeNo() {
		return this.cudeNo;
	}

	public void setCudeNo(String cudeNo) {
		this.cudeNo = cudeNo;
	}

	@Column(name = "DOTY_ID")
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

	@Column(name = "CUDO_NO", length = 32)
	public String getCudoNo() {
		return this.cudoNo;
	}

	public void setCudoNo(String cudoNo) {
		this.cudoNo = cudoNo;
	}

	@Column(name = "CUDO_NUM")
	public Integer getCudoNum() {
		return this.cudoNum;
	}

	public void setCudoNum(Integer cudoNum) {
		this.cudoNum = cudoNum;
	}

	@Column(name = "CUDO_STATUS")
	public Short getCudoStatus() {
		return this.cudoStatus;
	}

	public void setCudoStatus(Short cudoStatus) {
		this.cudoStatus = cudoStatus;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDO_RECV_DATE", length = 10)
	public Date getCudoRecvDate() {
		return this.cudoRecvDate;
	}

	public void setCudoRecvDate(Date cudoRecvDate) {
		this.cudoRecvDate = cudoRecvDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDO_SEND_DATE", length = 10)
	public Date getCudoSendDate() {
		return this.cudoSendDate;
	}

	public void setCudoSendDate(Date cudoSendDate) {
		this.cudoSendDate = cudoSendDate;
	}

	@Column(name = "CUDO_SEND_TYPE")
	public Integer getCudoSendType() {
		return this.cudoSendType;
	}

	public void setCudoSendType(Integer cudoSendType) {
		this.cudoSendType = cudoSendType;
	}

	@Column(name = "CUDO_SEND_SIGNER", length = 32)
	public String getCudoSendSigner() {
		return this.cudoSendSigner;
	}

	public void setCudoSendSigner(String cudoSendSigner) {
		this.cudoSendSigner = cudoSendSigner;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDO_RETURN_DATE", length = 10)
	public Date getCudoReturnDate() {
		return this.cudoReturnDate;
	}

	public void setCudoReturnDate(Date cudoReturnDate) {
		this.cudoReturnDate = cudoReturnDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDO_BACK_DATE", length = 10)
	public Date getCudoBackDate() {
		return this.cudoBackDate;
	}

	public void setCudoBackDate(Date cudoBackDate) {
		this.cudoBackDate = cudoBackDate;
	}

	@Column(name = "CUDO_BACK_TYPE")
	public Integer getCudoBackType() {
		return this.cudoBackType;
	}

	public void setCudoBackType(Integer cudoBackType) {
		this.cudoBackType = cudoBackType;
	}

	@Column(name = "CUDO_BACK_SIGNER", length = 32)
	public String getCudoBackSigner() {
		return this.cudoBackSigner;
	}

	public void setCudoBackSigner(String cudoBackSigner) {
		this.cudoBackSigner = cudoBackSigner;
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

	@Column(name = "COMP_CODE", nullable = false)
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