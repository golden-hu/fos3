package haitai.fos.sys.entity.atable;

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
public abstract class AbstractCPriceRecord  extends BaseDomain {

	private static final long serialVersionUID = 1194284243590099110L;
	private Integer prreId;
	private Integer version;
	private Integer prshId;
	private Integer prliId;
	private String currCode;
	private Integer charId;
	private String charName;
	private Double prreCommissionRate;
	private Double prrePriceP20;
	private Double prrePriceB20;
	private Double prrePriceS20;
	private Double prrePriceP40;
	private Double prrePriceB40;
	private Double prrePriceS40;
	private Double prrePriceP40h;
	private Double prrePriceB40h;
	private Double prrePriceS40h;
	private Double prrePricePCbm;
	private Double prrePriceBCbm;
	private Double prrePriceSCbm;
	private Double prrePricePKgs;
	private Double prrePriceBKgs;
	private Double prrePriceSKgs;
	private Double prrePricePTon;
	private Double prrePriceBTon;
	private Double prrePriceSTon;
	private Double prrePricePB1;
	private Double prrePriceBB1;
	private Double prrePriceSB1;
	private Double prrePricePB2;
	private Double prrePriceBB2;
	private Double prrePriceSB2;
	private Double prrePricePB3;
	private Double prrePriceBB3;
	private Double prrePriceSB3;
	private Double prrePricePB4;
	private Double prrePriceBB4;
	private Double prrePriceSB4;
	private Double prrePricePB5;
	private Double prrePriceBB5;
	private Double prrePriceSB5;
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
	@Column(name = "PRRE_ID", unique = true, nullable = false)
	public Integer getPrreId() {
		return this.prreId;
	}

	public void setPrreId(Integer prreId) {
		this.prreId = prreId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "PRSH_ID", nullable = false)
	public Integer getPrshId() {
		return this.prshId;
	}

	public void setPrshId(Integer prshId) {
		this.prshId = prshId;
	}

	@Column(name = "PRLI_ID", nullable = false)
	public Integer getPrliId() {
		return this.prliId;
	}

	public void setPrliId(Integer prliId) {
		this.prliId = prliId;
	}

	@Column(name = "CURR_CODE", length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "CHAR_ID")
	public Integer getCharId() {
		return this.charId;
	}

	public void setCharId(Integer charId) {
		this.charId = charId;
	}

	@Column(name = "CHAR_NAME", length = 32)
	public String getCharName() {
		return this.charName;
	}

	public void setCharName(String charName) {
		this.charName = charName;
	}

	@Column(name = "PRRE_COMMISSION_RATE", precision = 9, scale = 4)
	public Double getPrreCommissionRate() {
		return this.prreCommissionRate;
	}

	public void setPrreCommissionRate(Double prreCommissionRate) {
		this.prreCommissionRate = prreCommissionRate;
	}

	@Column(name = "PRRE_PRICE_P_20", precision = 12, scale = 4)
	public Double getPrrePriceP20() {
		return this.prrePriceP20;
	}

	public void setPrrePriceP20(Double prrePriceP20) {
		this.prrePriceP20 = prrePriceP20;
	}

	@Column(name = "PRRE_PRICE_B_20", precision = 12, scale = 4)
	public Double getPrrePriceB20() {
		return this.prrePriceB20;
	}

	public void setPrrePriceB20(Double prrePriceB20) {
		this.prrePriceB20 = prrePriceB20;
	}

	@Column(name = "PRRE_PRICE_S_20", precision = 12, scale = 4)
	public Double getPrrePriceS20() {
		return this.prrePriceS20;
	}

	public void setPrrePriceS20(Double prrePriceS20) {
		this.prrePriceS20 = prrePriceS20;
	}

	@Column(name = "PRRE_PRICE_P_40", precision = 12, scale = 4)
	public Double getPrrePriceP40() {
		return this.prrePriceP40;
	}

	public void setPrrePriceP40(Double prrePriceP40) {
		this.prrePriceP40 = prrePriceP40;
	}

	@Column(name = "PRRE_PRICE_B_40", precision = 12, scale = 4)
	public Double getPrrePriceB40() {
		return this.prrePriceB40;
	}

	public void setPrrePriceB40(Double prrePriceB40) {
		this.prrePriceB40 = prrePriceB40;
	}

	@Column(name = "PRRE_PRICE_S_40", precision = 12, scale = 4)
	public Double getPrrePriceS40() {
		return this.prrePriceS40;
	}

	public void setPrrePriceS40(Double prrePriceS40) {
		this.prrePriceS40 = prrePriceS40;
	}

	@Column(name = "PRRE_PRICE_P_40H", precision = 12, scale = 4)
	public Double getPrrePriceP40h() {
		return this.prrePriceP40h;
	}

	public void setPrrePriceP40h(Double prrePriceP40h) {
		this.prrePriceP40h = prrePriceP40h;
	}

	@Column(name = "PRRE_PRICE_B_40H", precision = 12, scale = 4)
	public Double getPrrePriceB40h() {
		return this.prrePriceB40h;
	}

	public void setPrrePriceB40h(Double prrePriceB40h) {
		this.prrePriceB40h = prrePriceB40h;
	}

	@Column(name = "PRRE_PRICE_S_40H", precision = 12, scale = 4)
	public Double getPrrePriceS40h() {
		return this.prrePriceS40h;
	}

	public void setPrrePriceS40h(Double prrePriceS40h) {
		this.prrePriceS40h = prrePriceS40h;
	}

	@Column(name = "PRRE_PRICE_P_CBM", precision = 12, scale = 4)
	public Double getPrrePricePCbm() {
		return this.prrePricePCbm;
	}

	public void setPrrePricePCbm(Double prrePricePCbm) {
		this.prrePricePCbm = prrePricePCbm;
	}

	@Column(name = "PRRE_PRICE_B_CBM", precision = 12, scale = 4)
	public Double getPrrePriceBCbm() {
		return this.prrePriceBCbm;
	}

	public void setPrrePriceBCbm(Double prrePriceBCbm) {
		this.prrePriceBCbm = prrePriceBCbm;
	}

	@Column(name = "PRRE_PRICE_S_CBM", precision = 12, scale = 4)
	public Double getPrrePriceSCbm() {
		return this.prrePriceSCbm;
	}

	public void setPrrePriceSCbm(Double prrePriceSCbm) {
		this.prrePriceSCbm = prrePriceSCbm;
	}

	@Column(name = "PRRE_PRICE_P_KGS", precision = 12, scale = 4)
	public Double getPrrePricePKgs() {
		return this.prrePricePKgs;
	}

	public void setPrrePricePKgs(Double prrePricePKgs) {
		this.prrePricePKgs = prrePricePKgs;
	}

	@Column(name = "PRRE_PRICE_B_KGS", precision = 12, scale = 4)
	public Double getPrrePriceBKgs() {
		return this.prrePriceBKgs;
	}

	public void setPrrePriceBKgs(Double prrePriceBKgs) {
		this.prrePriceBKgs = prrePriceBKgs;
	}

	@Column(name = "PRRE_PRICE_S_KGS", precision = 12, scale = 4)
	public Double getPrrePriceSKgs() {
		return this.prrePriceSKgs;
	}

	public void setPrrePriceSKgs(Double prrePriceSKgs) {
		this.prrePriceSKgs = prrePriceSKgs;
	}

	@Column(name = "PRRE_PRICE_P_TON", precision = 12, scale = 4)
	public Double getPrrePricePTon() {
		return this.prrePricePTon;
	}

	public void setPrrePricePTon(Double prrePricePTon) {
		this.prrePricePTon = prrePricePTon;
	}

	@Column(name = "PRRE_PRICE_B_TON", precision = 12, scale = 4)
	public Double getPrrePriceBTon() {
		return this.prrePriceBTon;
	}

	public void setPrrePriceBTon(Double prrePriceBTon) {
		this.prrePriceBTon = prrePriceBTon;
	}

	@Column(name = "PRRE_PRICE_S_TON", precision = 12, scale = 4)
	public Double getPrrePriceSTon() {
		return this.prrePriceSTon;
	}

	public void setPrrePriceSTon(Double prrePriceSTon) {
		this.prrePriceSTon = prrePriceSTon;
	}

	@Column(name = "PRRE_PRICE_P_B1", precision = 12, scale = 4)
	public Double getPrrePricePB1() {
		return this.prrePricePB1;
	}

	public void setPrrePricePB1(Double prrePricePB1) {
		this.prrePricePB1 = prrePricePB1;
	}

	@Column(name = "PRRE_PRICE_B_B1", precision = 12, scale = 4)
	public Double getPrrePriceBB1() {
		return this.prrePriceBB1;
	}

	public void setPrrePriceBB1(Double prrePriceBB1) {
		this.prrePriceBB1 = prrePriceBB1;
	}

	@Column(name = "PRRE_PRICE_S_B1", precision = 12, scale = 4)
	public Double getPrrePriceSB1() {
		return this.prrePriceSB1;
	}

	public void setPrrePriceSB1(Double prrePriceSB1) {
		this.prrePriceSB1 = prrePriceSB1;
	}

	@Column(name = "PRRE_PRICE_P_B2", precision = 12, scale = 4)
	public Double getPrrePricePB2() {
		return this.prrePricePB2;
	}

	public void setPrrePricePB2(Double prrePricePB2) {
		this.prrePricePB2 = prrePricePB2;
	}

	@Column(name = "PRRE_PRICE_B_B2", precision = 12, scale = 4)
	public Double getPrrePriceBB2() {
		return this.prrePriceBB2;
	}

	public void setPrrePriceBB2(Double prrePriceBB2) {
		this.prrePriceBB2 = prrePriceBB2;
	}

	@Column(name = "PRRE_PRICE_S_B2", precision = 12, scale = 4)
	public Double getPrrePriceSB2() {
		return this.prrePriceSB2;
	}

	public void setPrrePriceSB2(Double prrePriceSB2) {
		this.prrePriceSB2 = prrePriceSB2;
	}

	@Column(name = "PRRE_PRICE_P_B3", precision = 12, scale = 4)
	public Double getPrrePricePB3() {
		return this.prrePricePB3;
	}

	public void setPrrePricePB3(Double prrePricePB3) {
		this.prrePricePB3 = prrePricePB3;
	}

	@Column(name = "PRRE_PRICE_B_B3", precision = 12, scale = 4)
	public Double getPrrePriceBB3() {
		return this.prrePriceBB3;
	}

	public void setPrrePriceBB3(Double prrePriceBB3) {
		this.prrePriceBB3 = prrePriceBB3;
	}

	@Column(name = "PRRE_PRICE_S_B3", precision = 12, scale = 4)
	public Double getPrrePriceSB3() {
		return this.prrePriceSB3;
	}

	public void setPrrePriceSB3(Double prrePriceSB3) {
		this.prrePriceSB3 = prrePriceSB3;
	}

	@Column(name = "PRRE_PRICE_P_B4", precision = 12, scale = 4)
	public Double getPrrePricePB4() {
		return this.prrePricePB4;
	}

	public void setPrrePricePB4(Double prrePricePB4) {
		this.prrePricePB4 = prrePricePB4;
	}

	@Column(name = "PRRE_PRICE_B_B4", precision = 12, scale = 4)
	public Double getPrrePriceBB4() {
		return this.prrePriceBB4;
	}

	public void setPrrePriceBB4(Double prrePriceBB4) {
		this.prrePriceBB4 = prrePriceBB4;
	}

	@Column(name = "PRRE_PRICE_S_B4", precision = 12, scale = 4)
	public Double getPrrePriceSB4() {
		return this.prrePriceSB4;
	}

	public void setPrrePriceSB4(Double prrePriceSB4) {
		this.prrePriceSB4 = prrePriceSB4;
	}

	@Column(name = "PRRE_PRICE_P_B5", precision = 12, scale = 4)
	public Double getPrrePricePB5() {
		return this.prrePricePB5;
	}

	public void setPrrePricePB5(Double prrePricePB5) {
		this.prrePricePB5 = prrePricePB5;
	}

	@Column(name = "PRRE_PRICE_B_B5", precision = 12, scale = 4)
	public Double getPrrePriceBB5() {
		return this.prrePriceBB5;
	}

	public void setPrrePriceBB5(Double prrePriceBB5) {
		this.prrePriceBB5 = prrePriceBB5;
	}

	@Column(name = "PRRE_PRICE_S_B5", precision = 12, scale = 4)
	public Double getPrrePriceSB5() {
		return this.prrePriceSB5;
	}

	public void setPrrePriceSB5(Double prrePriceSB5) {
		this.prrePriceSB5 = prrePriceSB5;
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