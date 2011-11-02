package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGExchangeSettlementDAO;
import haitai.fos.general.entity.table.GExchangeSettlement;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GExchangeSettlementService implements IGeneralService<GExchangeSettlement> {
	@Autowired
	private IGExchangeSettlementDAO dao;

	@Transactional
	public List<GExchangeSettlement> save(List<GExchangeSettlement> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GExchangeSettlement> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GExchangeSettlement> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
