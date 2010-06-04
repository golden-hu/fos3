package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SBulkExpense;

import java.util.Map;
import java.util.List;

public interface ISBulkExpenseDAO {
	public void save(SBulkExpense entity);

	public void delete(Integer id);

	public SBulkExpense update(SBulkExpense entity);

	public SBulkExpense findById(Integer id);

	public List<SBulkExpense> findByProperties(
			final Map<String, Object> propertyMap);
}
