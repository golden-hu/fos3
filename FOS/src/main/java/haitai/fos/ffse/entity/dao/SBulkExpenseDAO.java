package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISBulkExpenseDAO;
import haitai.fos.ffse.entity.table.SBulkExpense;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class SBulkExpenseDAO extends GenericDAO<SBulkExpense, Integer>
		implements ISBulkExpenseDAO {

	public SBulkExpenseDAO() {
		super(SBulkExpense.class);
	}
}
