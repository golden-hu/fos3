package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GTradeType;

import java.util.Map;
import java.util.List;

public interface IGTradeTypeDAO {
	public void save(GTradeType entity);

	public void delete(Integer id);

	public GTradeType update(GTradeType entity);

	public GTradeType findById(Integer id);

	public List<GTradeType> findByProperties(
			final Map<String, Object> propertyMap);
}
