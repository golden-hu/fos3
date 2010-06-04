package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GDocumentType;

import java.util.Map;
import java.util.List;

public interface IGDocumentTypeDAO {
	public void save(GDocumentType entity);

	public void delete(Integer id);

	public GDocumentType update(GDocumentType entity);

	public GDocumentType findById(Integer id);

	public List<GDocumentType> findByProperties(
			final Map<String, Object> propertyMap);
}
