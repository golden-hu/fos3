package haitai.fw.entity;

import haitai.fw.util.RowAction;

import javax.persistence.Transient;

public abstract class BaseDomain implements java.io.Serializable {

	private static final long serialVersionUID = -6152033119960533449L;
	private RowAction rowAction;
	private String id;

	@Transient
	public RowAction getRowAction() {
		return rowAction;
	}

	public void setRowAction(RowAction rowAction) {
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
