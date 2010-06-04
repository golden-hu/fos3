/**
 * 
 */
package haitai.fw.entity;

import java.util.ArrayList;
import java.util.List;

/**
 * @author guo
 * 
 */
public class FosResponse {
	private int code;
	private String msg;
	private String rowCount;
	private String success;
	private List<Object> data = new ArrayList<Object>();

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public List<Object> getData() {
		return data;
	}

	public void setData(List<?> list) {
		this.data.addAll(list);
	}

	public void addData(Object aData) {
		this.data.add(aData);
	}

	public String getRowCount() {
		return rowCount;
	}

	public void setRowCount(String rowCount) {
		this.rowCount = rowCount;
	}

	public String getSuccess() {
		return success;
	}

	public void setSuccess(String success) {
		this.success = success;
	}
	
}
