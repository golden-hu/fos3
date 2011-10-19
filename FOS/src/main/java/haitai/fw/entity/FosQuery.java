package haitai.fw.entity;

public class FosQuery {

	public FosQuery() {
		super();
	}

	public FosQuery(String key, String op, String value) {
		super();
		this.key = key;
		this.value = value;
		this.op = op;
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

	private String key;
	private String value;
	private String op;

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
}
