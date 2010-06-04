package haitai.fos.exp.entity.idao;

import java.util.Map;

import haitai.fos.exp.entity.table.TVoucher;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface ITVoucherDAO {
	public void save(TVoucher entity);

	public void delete(Integer id);

	public TVoucher update(TVoucher entity);

	public TVoucher findById(Integer id);

	public List<TVoucher> findByProperties(final Map<String, Object> propertyMap);

	public List<TVoucher> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
