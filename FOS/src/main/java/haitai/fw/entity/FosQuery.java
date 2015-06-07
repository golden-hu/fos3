package haitai.fw.entity;

public class FosQuery {

	private String key;
	private String value;
	private String op;
	private String orGroup;
	
	public FosQuery() {
		super();
	}

	public FosQuery(String key, String op, String value) {
		super();
		this.key = key;
		this.value = value;
		this.op = op;
	}

	public FosQuery(String key, String op, String value,String orGroup) {
		super();
		this.key = key;
		this.value = value;
		this.op = op;
		this.orGroup = orGroup;
	}
	
	
	@Override
	public String toString() {
		return super.toString() + "[" + key + " " + op + " " + value + "]";
	}

	@Override
	public boolean equals(Object obj) {
		if (obj instanceof FosQuery) {
			FosQuery q = (FosQuery) obj;
			if (key.equals(q.getKey()) && op.equals(q.getOp()) && value.equals(q.getValue())) {
				return true;
			}
		}
		return super.equals(obj);
	}

	
	
	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getOp() {
		return op;
	}

	public void setOp(String op) {
		this.op = op;
	}
	
	public String getOrGroup() {
		return orGroup;
	}

	public void setOrGroup(String orGroup) {
		this.orGroup = orGroup;
	}
}
