package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGPaymentTermDAO;
import haitai.fos.general.entity.table.GPaymentTerm;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GPaymentTermService {
	@Autowired
	private IGPaymentTermDAO dao;

	@Transactional
	public List<GPaymentTerm> save(List<GPaymentTerm> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GPaymentTerm> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GPaymentTerm> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
