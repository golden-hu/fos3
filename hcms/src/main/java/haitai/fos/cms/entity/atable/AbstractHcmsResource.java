package haitai.fos.cms.entity.atable;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public abstract class AbstractHcmsResource extends BaseDomain {

	private static final long serialVersionUID = -5237480380386588208L;
	private Integer no;
	private Integer version;
	private String code;
	private String name;
	private String type;
	private String channeltype;
	private String url;
	private String lurl;
	private String purl;
	private String icon;
	private Integer pno;
	private String pcode;
	private String pname;
	private String pnos;
	private String title;
	private String summary;
	private String body;
	private String author;
	private Date addtime;
	private String source;
	private String publisher;
	private Date publishtime;
	private Short audit;
	private Integer words;
	private String keywords;
	private Integer pv;
	private Integer rate;
	private Integer ratenum;
	private Integer comments;
	private String auditor;
	private Date audittime;
	private Integer tempc;
	private Integer templ;
	private Integer tempa;
	private Integer rank;
	private String ext;
	private Short filetype;
	private Integer width;
	private Integer height;
	private Integer size;
	private String path;
	private Short imgflag;
	private Short movieflag;
	private Short active;
	private Integer userId;
	private String userName;
	private Integer grouId;
	private String grouName;
	private Integer createBy;
	private String createByName;
	private Date createTime;
	private Integer modifyBy;
	private String modifyByName;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "NO", unique = true, nullable = false)
	public Integer getNo() {
		return this.no;
	}

	public void setNo(Integer no) {
		this.no = no;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CODE", length = 16)
	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	@Column(name = "NAME", nullable = false, length = 200)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "TYPE", length = 1)
	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Column(name = "CHANNELTYPE", length = 1)
	public String getChanneltype() {
		return this.channeltype;
	}

	public void setChanneltype(String channeltype) {
		this.channeltype = channeltype;
	}

	@Column(name = "URL", length = 500)
	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Column(name = "LURL", length = 200)
	public String getLurl() {
		return this.lurl;
	}

	public void setLurl(String lurl) {
		this.lurl = lurl;
	}

	@Column(name = "PURL", length = 200)
	public String getPurl() {
		return this.purl;
	}

	public void setPurl(String purl) {
		this.purl = purl;
	}

	@Column(name = "ICON", length = 200)
	public String getIcon() {
		return this.icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	@Column(name = "PNO", nullable = false)
	public Integer getPno() {
		return this.pno;
	}

	public void setPno(Integer pno) {
		this.pno = pno;
	}

	@Column(name = "PCODE", length = 1000)
	public String getPcode() {
		return this.pcode;
	}

	public void setPcode(String pcode) {
		this.pcode = pcode;
	}

	@Column(name = "PNAME", length = 200)
	public String getPname() {
		return this.pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	@Column(name = "PNOS", length = 200)
	public String getPnos() {
		return this.pnos;
	}

	public void setPnos(String pnos) {
		this.pnos = pnos;
	}

	@Column(name = "TITLE", length = 500)
	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Column(name = "SUMMARY", length = 2000)
	public String getSummary() {
		return this.summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	@Column(name = "BODY", length = 65535)
	public String getBody() {
		return this.body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	@Column(name = "AUTHOR", length = 64)
	public String getAuthor() {
		return this.author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ADDTIME", length = 19)
	public Date getAddtime() {
		return this.addtime;
	}

	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	@Column(name = "SOURCE", length = 500)
	public String getSource() {
		return this.source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	@Column(name = "PUBLISHER", length = 16)
	public String getPublisher() {
		return this.publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "PUBLISHTIME", length = 19)
	public Date getPublishtime() {
		return this.publishtime;
	}

	public void setPublishtime(Date publishtime) {
		this.publishtime = publishtime;
	}

	@Column(name = "AUDIT")
	public Short getAudit() {
		return this.audit;
	}

	public void setAudit(Short audit) {
		this.audit = audit;
	}

	@Column(name = "WORDS")
	public Integer getWords() {
		return this.words;
	}

	public void setWords(Integer words) {
		this.words = words;
	}

	@Column(name = "KEYWORDS", length = 2000)
	public String getKeywords() {
		return this.keywords;
	}

	public void setKeywords(String keywords) {
		this.keywords = keywords;
	}

	@Column(name = "PV")
	public Integer getPv() {
		return this.pv;
	}

	public void setPv(Integer pv) {
		this.pv = pv;
	}

	@Column(name = "RATE")
	public Integer getRate() {
		return this.rate;
	}

	public void setRate(Integer rate) {
		this.rate = rate;
	}

	@Column(name = "RATENUM")
	public Integer getRatenum() {
		return this.ratenum;
	}

	public void setRatenum(Integer ratenum) {
		this.ratenum = ratenum;
	}

	@Column(name = "COMMENTS")
	public Integer getComments() {
		return this.comments;
	}

	public void setComments(Integer comments) {
		this.comments = comments;
	}

	@Column(name = "AUDITOR", length = 32)
	public String getAuditor() {
		return this.auditor;
	}

	public void setAuditor(String auditor) {
		this.auditor = auditor;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "AUDITTIME", length = 19)
	public Date getAudittime() {
		return this.audittime;
	}

	public void setAudittime(Date audittime) {
		this.audittime = audittime;
	}

	@Column(name = "TEMPC")
	public Integer getTempc() {
		return this.tempc;
	}

	public void setTempc(Integer tempc) {
		this.tempc = tempc;
	}

	@Column(name = "TEMPL")
	public Integer getTempl() {
		return this.templ;
	}

	public void setTempl(Integer templ) {
		this.templ = templ;
	}

	@Column(name = "TEMPA")
	public Integer getTempa() {
		return this.tempa;
	}

	public void setTempa(Integer tempa) {
		this.tempa = tempa;
	}

	@Column(name = "RANK")
	public Integer getRank() {
		return this.rank;
	}

	public void setRank(Integer rank) {
		this.rank = rank;
	}

	@Column(name = "EXT", length = 16)
	public String getExt() {
		return this.ext;
	}

	public void setExt(String ext) {
		this.ext = ext;
	}

	@Column(name = "FILETYPE")
	public Short getFiletype() {
		return this.filetype;
	}

	public void setFiletype(Short filetype) {
		this.filetype = filetype;
	}

	@Column(name = "WIDTH")
	public Integer getWidth() {
		return this.width;
	}

	public void setWidth(Integer width) {
		this.width = width;
	}

	@Column(name = "HEIGHT")
	public Integer getHeight() {
		return this.height;
	}

	public void setHeight(Integer height) {
		this.height = height;
	}

	@Column(name = "SIZE")
	public Integer getSize() {
		return this.size;
	}

	public void setSize(Integer size) {
		this.size = size;
	}

	@Column(name = "PATH", length = 200)
	public String getPath() {
		return this.path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	@Column(name = "IMGFLAG")
	public Short getImgflag() {
		return this.imgflag;
	}

	public void setImgflag(Short imgflag) {
		this.imgflag = imgflag;
	}

	@Column(name = "MOVIEFLAG")
	public Short getMovieflag() {
		return this.movieflag;
	}

	public void setMovieflag(Short movieflag) {
		this.movieflag = movieflag;
	}

	@Column(name = "ACTIVE")
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
	}

	@Column(name = "USER_ID")
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "USER_NAME", length = 32)
	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Column(name = "GROU_ID")
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "GROU_NAME", length = 32)
	public String getGrouName() {
		return this.grouName;
	}

	public void setGrouName(String grouName) {
		this.grouName = grouName;
	}

	@Column(name = "CREATE_BY")
	public Integer getCreateBy() {
		return this.createBy;
	}

	public void setCreateBy(Integer createBy) {
		this.createBy = createBy;
	}

	@Column(name = "CREATE_BY_NAME", length = 32)
	public String getCreateByName() {
		return this.createByName;
	}

	public void setCreateByName(String createByName) {
		this.createByName = createByName;
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

	@Column(name = "MODIFY_BY_NAME", length = 32)
	public String getModifyByName() {
		return this.modifyByName;
	}

	public void setModifyByName(String modifyByName) {
		this.modifyByName = modifyByName;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFY_TIME", length = 19)
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	@Column(name = "COMP_CODE", length = 8)
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
