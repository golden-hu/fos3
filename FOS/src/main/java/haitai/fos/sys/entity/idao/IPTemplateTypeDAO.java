package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PTemplateType;

import java.util.Map;
import java.util.List;

public interface IPTemplateTypeDAO {
	public void save(PTemplateType entity);

	public void delete(Integer id);

	public PTemplateType update(PTemplateType entity);

	public PTemplateType findById(Integer id);

	public List<PTemplateType> findByProperties(
			final Map<String, Object> propertyMap);
}
