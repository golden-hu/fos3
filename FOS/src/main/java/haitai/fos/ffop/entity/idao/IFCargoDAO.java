package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FCargo;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IFCargoDAO {
	public void save(FCargo entity);

	public List<FCargo> saveByRowAction(List<FCargo> entityList);

	public void delete(Integer id);

	public FCargo update(FCargo entity);

	public FCargo findById(Integer id);

	public List<FCargo> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<FCargo> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
