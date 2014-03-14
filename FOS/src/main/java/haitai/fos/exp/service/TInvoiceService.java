package haitai.fos.exp.service;

import haitai.fos.exp.entity.idao.ITInvoiceDAO;
import haitai.fos.exp.entity.table.TInvoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class TInvoiceService {

	@Autowired
	private ITInvoiceDAO dao;

	@Transactional
	public List<TInvoice> save(List<TInvoice> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<TInvoice> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

}
