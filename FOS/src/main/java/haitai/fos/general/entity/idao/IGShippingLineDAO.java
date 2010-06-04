package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GShippingLine;

import java.util.Map;
import java.util.List;

public interface IGShippingLineDAO {
	public void save(GShippingLine entity);

	public void delete(Integer id);

	public GShippingLine update(GShippingLine entity);

	public GShippingLine findById(Integer id);

	public List<GShippingLine> findByProperties(
			final Map<String, Object> propertyMap);
}
