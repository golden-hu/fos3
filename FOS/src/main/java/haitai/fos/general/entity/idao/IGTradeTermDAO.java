package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GTradeTerm;

import java.util.List;
import java.util.Map;

public interface IGTradeTermDAO {
	public void save(GTradeTerm entity);

	public List<GTradeTerm> saveByRowAction(List<GTradeTerm> entityList);

	public void delete(Integer id);

	public GTradeTerm update(GTradeTerm entity);

	public GTradeTerm findById(Integer id);

	public List<GTradeTerm> findByProperties(final Map<String, Object> propertyMap);
}
