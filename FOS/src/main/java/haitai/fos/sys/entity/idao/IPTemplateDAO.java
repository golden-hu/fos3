package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PTemplate;

import java.util.Map;
import java.util.List;

public interface IPTemplateDAO {
	public void save(PTemplate entity);

	public void delete(Integer id);

	public PTemplate update(PTemplate entity);

	public PTemplate findById(Integer id);

	public List<PTemplate> findByProperties(
			final Map<String, Object> propertyMap);
}
