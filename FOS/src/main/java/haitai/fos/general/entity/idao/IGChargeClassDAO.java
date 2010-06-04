package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GChargeClass;

import java.util.Map;
import java.util.List;

public interface IGChargeClassDAO {
	public void save(GChargeClass entity);

	public void delete(Integer id);

	public GChargeClass update(GChargeClass entity);

	public GChargeClass findById(Integer id);

	public List<GChargeClass> findByProperties(
			final Map<String, Object> propertyMap);
}
