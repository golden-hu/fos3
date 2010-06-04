package haitai.fw.entity;

import javax.persistence.Transient;

public abstract class BaseDomain implements java.io.Serializable {

	private static final long serialVersionUID = -6152033119960533449L;
	private String rowAction;
	private String id;

	@Transient
	public String getRowAction() {
		return rowAction;
	}

	public void setRowAction(String rowAction) {
		this.rowAction = rowAction;
	}

	@Transient
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}
