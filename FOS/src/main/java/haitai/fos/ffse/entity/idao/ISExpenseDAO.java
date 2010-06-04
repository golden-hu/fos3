package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SExpense;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

/**
 * Interface for SExpenseDAO.
 * 
 * @author MyEclipse Persistence Tools
 */

public interface ISExpenseDAO {
	public void save(SExpense entity);

	public void delete(Integer id);

	public SExpense update(SExpense entity);

	public SExpense findById(Integer id);

	public List<SExpense> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<SExpense> complexQueryInvoiceCreate(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract List<SExpense> complexQueryWriteOff(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract List<SExpense> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract List<SExpense> complexQueryRelease(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	void updateConsNoByConsId(Integer consId, String consNo);
}
