/**
 * 
 */
package haitai.fw.entity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author guo
 * 
 */
public class FosRequest {
	@SuppressWarnings({"rawtypes"})
	private List data = new ArrayList();
	private Map<String, String> param = new HashMap<String, String>();

	@SuppressWarnings({"rawtypes"})
	public List getData() {
		return data;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public void setData(List serviceData) {
		this.data.addAll(serviceData);
	}

	public Map<String, String> getParam() {
		if(param == null){
			param = new HashMap<String, String>();
		}
		return param;
	}

	public void setParam(Map<String, String> param) {
		if(this.param == null){
			this.param = new HashMap<String, String>();
		}
		this.param.putAll(param);
	}
}
