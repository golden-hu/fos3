package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SBulkExpense;

import java.util.List;
import java.util.Map;

public interface ISBulkExpenseDAO {
	public void save(SBulkExpense entity);

	public List<SBulkExpense> saveByRowAction(List<SBulkExpense> entityList);

	public void delete(Integer id);

	public SBulkExpense update(SBulkExpense entity);

	public SBulkExpense findById(Integer id);

	public List<SBulkExpense> findByProperties(final Map<String, Object> propertyMap);
}
