package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GDocumentType;

import java.util.List;
import java.util.Map;

public interface IGDocumentTypeDAO {
	public void save(GDocumentType entity);

	public List<GDocumentType> saveByRowAction(List<GDocumentType> entityList);

	public void delete(Integer id);

	public GDocumentType update(GDocumentType entity);

	public GDocumentType findById(Integer id);

	public List<GDocumentType> findByProperties(final Map<String, Object> propertyMap);
}
