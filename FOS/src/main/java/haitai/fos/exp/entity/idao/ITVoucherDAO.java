package haitai.fos.exp.entity.idao;

import haitai.fos.exp.entity.table.TVoucher;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface ITVoucherDAO {
	public void save(TVoucher entity);

	public List<TVoucher> saveByRowAction(List<TVoucher> entityList);

	public void delete(Integer id);

	public TVoucher update(TVoucher entity);

	public TVoucher findById(Integer id);

	public List<TVoucher> findByProperties(final Map<String, Object> propertyMap);

	public List<TVoucher> complexQuery(final List<FosQuery> conditions,
									   final Map<String, Object> propertyMap);

}
