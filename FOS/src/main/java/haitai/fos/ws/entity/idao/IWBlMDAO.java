package haitai.fos.ws.entity.idao;

import haitai.fos.ws.entity.table.WBlM;

import java.util.List;
import java.util.Map;

public interface IWBlMDAO {
	public void save(WBlM entity);

	public List<WBlM> saveByRowAction(List<WBlM> entityList);

	public void delete(Integer id);

	public WBlM update(WBlM entity);

	public WBlM findById(Integer id);

	public List<WBlM> findByProperties(final Map<String, Object> propertyMap);
}
