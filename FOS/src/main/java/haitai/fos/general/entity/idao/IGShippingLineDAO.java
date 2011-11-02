package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GShippingLine;

import java.util.List;
import java.util.Map;

public interface IGShippingLineDAO {
	public void save(GShippingLine entity);

	public List<GShippingLine> saveByRowAction(List<GShippingLine> entityList);

	public void delete(Integer id);

	public GShippingLine update(GShippingLine entity);

	public GShippingLine findById(Integer id);

	public List<GShippingLine> findByProperties(final Map<String, Object> propertyMap);
}
