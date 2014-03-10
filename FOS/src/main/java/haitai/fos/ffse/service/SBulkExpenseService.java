package haitai.fos.ffse.service;

import haitai.fos.ffse.entity.idao.ISBulkExpenseDAO;
import haitai.fos.ffse.entity.table.SBulkExpense;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class SBulkExpenseService {
	@Autowired
	private ISBulkExpenseDAO dao;

	@Transactional
	public List<SBulkExpense> save(List<SBulkExpense> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<SBulkExpense> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

}
