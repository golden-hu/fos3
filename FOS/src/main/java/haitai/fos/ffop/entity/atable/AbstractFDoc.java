package haitai.fos.ffop.entity.atable;

import haitai.fw.entity.BaseDomain;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractFDoc extends BaseDomain {

	private static final long serialVersionUID = 483597298627866573L;
	private Integer fdocId;
	private Integer version;
	private String fdocNo;
	private Integer consId;
	private String consNo;
	private String consBizClass;
	private String consShipType;
	private Integer dotyId;
	private String dotyClass;
	private String dotyName;
	private Integer fdocOriginalNum;
	private Integer fdocCopyNum;
	private Short fdocStatus;
	private Date fdocRecvDate;
	private Date fdocSendDate;
	private Integer fdocSendTo;
	private Integer fdocSendType;
	private String fdocSendSigner;
	private Date fdocReturnDate;
	private Date fdocBackDate;
	private Integer fdocBackType;
	private String fdocBackSigner;
	private Short fdocReturnFlag;
	private Short fdocBackFlag;
	private Short fdocReleasableFlag;
	private Short alertFlag;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	private String fdocCompany;
	private String fdocRemark;
	private Short fdocReturnWay;
	private String fdocExpressNo;
	private Short fdocCustomsFlag;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "FDOC_ID", unique = true, nullable = false)
	public Integer getFdocId() {
		return this.fdocId;
	}

	public void setFdocId(Integer fdocId) {
		this.fdocId = fdocId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "FDOC_NO", length = 32)
	public String getFdocNo() {
		return this.fdocNo;
	}

	public void setFdocNo(String fdocNo) {
		this.fdocNo = fdocNo;
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

	@Column(name = "CONS_BIZ_CLASS", length = 1)
	public String getConsBizClass() {
		return this.consBizClass;
	}

	public void setConsBizClass(String consBizClass) {
		this.consBizClass = consBizClass;
	}

	@Column(name = "CONS_SHIP_TYPE", length = 4)
	public String getConsShipType() {
		return this.consShipType;
	}

	public void setConsShipType(String consShipType) {
		this.consShipType = consShipType;
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

	@Column(name = "FDOC_ORIGINAL_NUM")
	public Integer getFdocOriginalNum() {
		return this.fdocOriginalNum;
	}

	public void setFdocOriginalNum(Integer fdocOriginalNum) {
		this.fdocOriginalNum = fdocOriginalNum;
	}

	@Column(name = "FDOC_COPY_NUM")
	public Integer getFdocCopyNum() {
		return this.fdocCopyNum;
	}

	public void setFdocCopyNum(Integer fdocCopyNum) {
		this.fdocCopyNum = fdocCopyNum;
	}

	@Column(name = "FDOC_STATUS")
	public Short getFdocStatus() {
		return this.fdocStatus;
	}

	public void setFdocStatus(Short fdocStatus) {
		this.fdocStatus = fdocStatus;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FDOC_RECV_DATE", length = 10)
	public Date getFdocRecvDate() {
		return this.fdocRecvDate;
	}

	public void setFdocRecvDate(Date fdocRecvDate) {
		this.fdocRecvDate = fdocRecvDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FDOC_SEND_DATE", length = 10)
	public Date getFdocSendDate() {
		return this.fdocSendDate;
	}

	public void setFdocSendDate(Date fdocSendDate) {
		this.fdocSendDate = fdocSendDate;
	}

	@Column(name = "FDOC_SEND_TO")
	public Integer getFdocSendTo() {
		return this.fdocSendTo;
	}

	public void setFdocSendTo(Integer fdocSendTo) {
		this.fdocSendTo = fdocSendTo;
	}

	@Column(name = "FDOC_SEND_TYPE")
	public Integer getFdocSendType() {
		return this.fdocSendType;
	}

	public void setFdocSendType(Integer fdocSendType) {
		this.fdocSendType = fdocSendType;
	}

	@Column(name = "FDOC_SEND_SIGNER", length = 32)
	public String getFdocSendSigner() {
		return this.fdocSendSigner;
	}

	public void setFdocSendSigner(String fdocSendSigner) {
		this.fdocSendSigner = fdocSendSigner;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FDOC_RETURN_DATE", length = 10)
	public Date getFdocReturnDate() {
		return this.fdocReturnDate;
	}

	public void setFdocReturnDate(Date fdocReturnDate) {
		this.fdocReturnDate = fdocReturnDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FDOC_BACK_DATE", length = 10)
	public Date getFdocBackDate() {
		return this.fdocBackDate;
	}

	public void setFdocBackDate(Date fdocBackDate) {
		this.fdocBackDate = fdocBackDate;
	}

	@Column(name = "FDOC_BACK_TYPE")
	public Integer getFdocBackType() {
		return this.fdocBackType;
	}

	public void setFdocBackType(Integer fdocBackType) {
		this.fdocBackType = fdocBackType;
	}

	@Column(name = "FDOC_BACK_SIGNER", length = 32)
	public String getFdocBackSigner() {
		return this.fdocBackSigner;
	}

	public void setFdocBackSigner(String fdocBackSigner) {
		this.fdocBackSigner = fdocBackSigner;
	}

	@Column(name = "FDOC_RETURN_FLAG")
	public Short getFdocReturnFlag() {
		return this.fdocReturnFlag;
	}

	public void setFdocReturnFlag(Short fdocReturnFlag) {
		this.fdocReturnFlag = fdocReturnFlag;
	}

	@Column(name = "FDOC_BACK_FLAG")
	public Short getFdocBackFlag() {
		return this.fdocBackFlag;
	}

	public void setFdocBackFlag(Short fdocBackFlag) {
		this.fdocBackFlag = fdocBackFlag;
	}

	@Column(name = "FDOC_RELEASABLE_FLAG")
	public Short getFdocReleasableFlag() {
		return this.fdocReleasableFlag;
	}

	public void setFdocReleasableFlag(Short fdocReleasableFlag) {
		this.fdocReleasableFlag = fdocReleasableFlag;
	}

	@Column(name = "ALERT_FLAG")
	public Short getAlertFlag() {
		return alertFlag;
	}

	public void setAlertFlag(Short alertFlag) {
		this.alertFlag = alertFlag;
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
	
	@Column(name = "FDOC_COMPANY", length = 200)
	public String getFdocCompany() {
		return this.fdocCompany;
	}

	public void setFdocCompany(String fdocCompany) {
		this.fdocCompany = fdocCompany;
	}

	@Column(name = "FDOC_REMARK", length = 200)
	public String getFdocRemark() {
		return this.fdocRemark;
	}

	public void setFdocRemark(String fdocRemark) {
		this.fdocRemark = fdocRemark;
	}
	
	@Column(name = "FDOC_RETURN_WAY", length = 4)
	public Short getFdocReturnWay() {
		return fdocReturnWay;
	}
	public void setFdocReturnWay(Short fdocReturnWay) {
		this.fdocReturnWay = fdocReturnWay;
	}
	
	@Column(name = "FDOC_EXPRESS_NO", length = 32)
	public String getFdocExpressNo() {
		return fdocExpressNo;
	}
	public void setFdocExpressNo(String fdocExpressNo) {
		this.fdocExpressNo = fdocExpressNo;
	}
	
	@Column(name = "FDOC_CUSTOMS_FLAG", length = 4)
	public Short getFdocCustomsFlag() {
		return fdocCustomsFlag;
	}
	public void setFdocCustomsFlag(Short fdocCustomsFlag) {
		this.fdocCustomsFlag = fdocCustomsFlag;
	}
	
	
}