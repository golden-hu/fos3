package haitai.fos.sys.entity.idao;

import java.util.Map;

import haitai.fos.sys.entity.table.PTableInfo;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface IPTableInfoDAO {
	public void save(PTableInfo entity);

	public void delete(Integer id);

	public PTableInfo update(PTableInfo entity);

	public PTableInfo findById(Integer id);

	public List<PTableInfo> findAll();

	public List<PTableInfo> findByProperties(
			final Map<String, Object> propertyMap);

	public List<PTableInfo> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
