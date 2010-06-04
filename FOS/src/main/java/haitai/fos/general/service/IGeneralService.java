package haitai.fos.general.service;

import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IGeneralService<T> {

	public List<T> save(List<T> entityList);

	public List<T> query(Map<String, ?> queryMap);

	public List<T> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap);

}
