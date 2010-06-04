package haitai.fosws.entity.atable;

import java.io.Serializable;
import javax.persistence.*;

import java.util.Date;


@MappedSuperclass
public class AbstractWBlM extends haitai.fw.entity.BaseDomain implements Serializable {

	private static final long serialVersionUID = 8942345496648777087L;
	private Integer wblmId;
	private Integer blId;
	private String blNo;
	private String compCode;
	private Integer consId;
	private String consNo;
	private Date createTime;
	private Integer custId;
	private String custName;
	private Date modifyTime;
	private Short removed;
	private Date replyTime;
	private Integer version;
	private String wblmField;
	private String wblmReason;
	private String wblmRejectReason;
	private String wblmReplyBy;
	private Short wblmStatus;
	private String wblmValueNew;
	private String wblmValueOld;
	private Integer wusrId;

    public AbstractWBlM() {
    }


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="WBLM_ID")
	public Integer getWblmId() {
		return this.wblmId;
	}

	public void setWblmId(Integer wblmId) {
		this.wblmId = wblmId;
	}


	@Column(name="BL_ID")
	public Integer getBlId() {
		return this.blId;
	}

	public void setBlId(Integer blId) {
		this.blId = blId;
	}


	@Column(name="BL_NO")
	public String getBlNo() {
		return this.blNo;
	}

	public void setBlNo(String blNo) {
		this.blNo = blNo;
	}


	@Column(name="COMP_CODE")
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}


	@Column(name="CONS_ID")
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}


	@Column(name="CONS_NO")
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}


    @Temporal( TemporalType.TIMESTAMP)
	@Column(name="CREATE_TIME")
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}


	@Column(name="CUST_ID")
	public Integer getCustId() {
		return this.custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
	}


	@Column(name="CUST_NAME")
	public String getCustName() {
		return this.custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}


    @Temporal( TemporalType.TIMESTAMP)
	@Column(name="MODIFY_TIME")
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}


	@Column(name="REMOVED")
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}


    @Temporal( TemporalType.TIMESTAMP)
	@Column(name="REPLY_TIME")
	public Date getReplyTime() {
		return this.replyTime;
	}

	public void setReplyTime(Date replyTime) {
		this.replyTime = replyTime;
	}


	@Column(name="VERSION")
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}


	@Column(name="WBLM_FIELD")
	public String getWblmField() {
		return this.wblmField;
	}

	public void setWblmField(String wblmField) {
		this.wblmField = wblmField;
	}


	@Column(name="WBLM_REASON")
	public String getWblmReason() {
		return this.wblmReason;
	}

	public void setWblmReason(String wblmReason) {
		this.wblmReason = wblmReason;
	}


	@Column(name="WBLM_REJECT_REASON")
	public String getWblmRejectReason() {
		return this.wblmRejectReason;
	}

	public void setWblmRejectReason(String wblmRejectReason) {
		this.wblmRejectReason = wblmRejectReason;
	}


	@Column(name="WBLM_REPLY_BY")
	public String getWblmReplyBy() {
		return this.wblmReplyBy;
	}

	public void setWblmReplyBy(String wblmReplyBy) {
		this.wblmReplyBy = wblmReplyBy;
	}


	@Column(name="WBLM_STATUS")
	public Short getWblmStatus() {
		return this.wblmStatus;
	}

	public void setWblmStatus(Short wblmStatus) {
		this.wblmStatus = wblmStatus;
	}


	@Column(name="WBLM_VALUE_NEW")
	public String getWblmValueNew() {
		return this.wblmValueNew;
	}

	public void setWblmValueNew(String wblmValueNew) {
		this.wblmValueNew = wblmValueNew;
	}


	@Column(name="WBLM_VALUE_OLD")
	public String getWblmValueOld() {
		return this.wblmValueOld;
	}

	public void setWblmValueOld(String wblmValueOld) {
		this.wblmValueOld = wblmValueOld;
	}


	@Column(name="WUSR_ID")
	public Integer getWusrId() {
		return this.wusrId;
	}

	public void setWusrId(Integer wusrId) {
		this.wusrId = wusrId;
	}

}