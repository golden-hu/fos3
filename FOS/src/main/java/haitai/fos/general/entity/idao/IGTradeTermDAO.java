package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GTradeTerm;

import java.util.Map;
import java.util.List;

public interface IGTradeTermDAO {
	public void save(GTradeTerm entity);

	public void delete(Integer id);

	public GTradeTerm update(GTradeTerm entity);

	public GTradeTerm findById(Integer id);

	public List<GTradeTerm> findByProperties(
			final Map<String, Object> propertyMap);
}
