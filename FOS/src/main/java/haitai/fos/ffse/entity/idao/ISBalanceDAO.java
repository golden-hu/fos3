package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SBalance;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface ISBalanceDAO {
	public void save(SBalance entity);

	public List<SBalance> saveByRowAction(List<SBalance> entityList);

	public void delete(Integer id);

	public SBalance update(SBalance entity);

	public SBalance findById(Integer id);

	public List<SBalance> findByProperties(final Map<String, Object> propertyMap);

	public List<SBalance> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
