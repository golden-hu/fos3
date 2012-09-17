/**
 * 
 */
package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

/**
 * @author Gordon
 *
 */
@MappedSuperclass
public abstract class AbstractPBranch extends BaseDomain {

	private static final long serialVersionUID = -7160314421219444969L;
	private Integer branchId;
	private Integer version;
	private String branchName;
	private String compCode;
	private Short removed;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "BRANCH_ID", unique = true, nullable = false)
	public Integer getBranchId() {
		return branchId;
	}
	public void setBranchId(Integer branchId) {
		this.branchId = branchId;
	}
	
	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return version;
	}
	public void setVersion(Integer version) {
		this.version = version;
	}
	
	@Column(name = "BRANCH_NAME", length = 32)
	public String getBranchName() {
		return branchName;
	}
	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}
	
	@Column(name = "COMP_CODE", nullable = false, length = 4)
	public String getCompCode() {
		return compCode;
	}
	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}
	
	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return removed;
	}
	public void setRemoved(Short removed) {
		this.removed = removed;
	}
	
}