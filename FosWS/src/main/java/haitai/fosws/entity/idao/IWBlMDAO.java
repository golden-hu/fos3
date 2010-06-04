package haitai.fosws.entity.idao;

import haitai.fosws.entity.table.WBlM;

import java.util.Map;
import java.util.List;

public interface IWBlMDAO {
	public void save(WBlM entity);

	public void delete(Integer id);

	public WBlM update(WBlM entity);

	public WBlM findById(Integer id);

	public List<WBlM> findByProperties(
			final Map<String, Object> propertyMap);
}
