package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PCompanyConfig;

import java.util.Map;
import java.util.List;

public interface IPCompanyConfigDAO {
	public void save(PCompanyConfig entity);

	public void delete(Integer id);

	public PCompanyConfig update(PCompanyConfig entity);

	public PCompanyConfig findById(Integer id);

	public List<PCompanyConfig> findByProperties(
			final Map<String, Object> propertyMap);
}
