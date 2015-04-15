package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GServiceItem;

import java.util.List;
import java.util.Map;

public interface IGServiceItemDAO {
	public void save(GServiceItem entity);

	public List<GServiceItem> saveByRowAction(List<GServiceItem> entityList);

	public void delete(Integer id);

	public GServiceItem update(GServiceItem entity);

	public GServiceItem findById(Integer id);

	public List<GServiceItem> findByProperties(final Map<String, Object> propertyMap);
}
