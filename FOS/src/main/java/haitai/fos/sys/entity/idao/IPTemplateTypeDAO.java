package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PTemplateType;

import java.util.List;
import java.util.Map;

public interface IPTemplateTypeDAO {
	public void save(PTemplateType entity);

	public List<PTemplateType> saveByRowAction(List<PTemplateType> entityList);

	public void delete(Integer id);

	public PTemplateType update(PTemplateType entity);

	public PTemplateType findById(Integer id);

	public List<PTemplateType> findByProperties(final Map<String, Object> propertyMap);
}
