package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PCompanyConfig;

import java.util.List;
import java.util.Map;

public interface IPCompanyConfigDAO {
	public void save(PCompanyConfig entity);

	public List<PCompanyConfig> saveByRowAction(List<PCompanyConfig> entityList);

	public void delete(Integer id);

	public PCompanyConfig update(PCompanyConfig entity);

	public PCompanyConfig findById(Integer id);

	public List<PCompanyConfig> findByProperties(
			final Map<String, Object> propertyMap);
}
