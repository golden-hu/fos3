package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GTradeType;

import java.util.List;
import java.util.Map;

public interface IGTradeTypeDAO {
	public void save(GTradeType entity);

	public List<GTradeType> saveByRowAction(List<GTradeType> entityList);

	public void delete(Integer id);

	public GTradeType update(GTradeType entity);

	public GTradeType findById(Integer id);

	public List<GTradeType> findByProperties(final Map<String, Object> propertyMap);
}
