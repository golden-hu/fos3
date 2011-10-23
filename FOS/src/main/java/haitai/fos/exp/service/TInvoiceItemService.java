package haitai.fos.exp.service;

import haitai.fos.exp.entity.idao.ITInvoiceItemDAO;
import haitai.fos.exp.entity.table.TInvoiceItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class TInvoiceItemService {
	
	@Autowired
	private ITInvoiceItemDAO dao;
	
	@Transactional
	public List<TInvoiceItem> save(List<TInvoiceItem> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<TInvoiceItem> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	
	
}
