package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCharge;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IGChargeDAO {
	public void save(GCharge entity);

	public List<GCharge> saveByRowAction(List<GCharge> entityList);

	public void delete(Integer id);

	public GCharge update(GCharge entity);

	public GCharge findById(Integer id);

	public List<GCharge> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<GCharge> complexQuery(final List<FosQuery> conditions,
											   final Map<String, Object> propertyMap);
}
