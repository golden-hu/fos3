package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GChargeClass;

import java.util.List;
import java.util.Map;

public interface IGChargeClassDAO {
	public void save(GChargeClass entity);

	public List<GChargeClass> saveByRowAction(List<GChargeClass> entityList);

	public void delete(Integer id);

	public GChargeClass update(GChargeClass entity);

	public GChargeClass findById(Integer id);

	public List<GChargeClass> findByProperties(final Map<String, Object> propertyMap);
}
