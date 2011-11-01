package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCurrencyDAO;
import haitai.fos.general.entity.table.GCurrency;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GCurrencyService {
	@Autowired
	private IGCurrencyDAO dao;

	@Transactional
	public List<GCurrency> save(List<GCurrency> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCurrency> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCurrency> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
