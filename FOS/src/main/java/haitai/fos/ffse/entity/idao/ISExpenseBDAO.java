package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SExpenseB;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface ISExpenseBDAO {
	public void save(SExpenseB entity);

	public void delete(Integer id);

	public SExpenseB update(SExpenseB entity);

	public SExpenseB findById(Integer id);

	public List<SExpenseB> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<SExpenseB> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);
}
