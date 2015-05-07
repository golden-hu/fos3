package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGPaymentWayDAO;
import haitai.fos.general.entity.table.GPaymentWay;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GPaymentWayService {
	@Autowired
	private IGPaymentWayDAO dao;

	@Transactional
	public List<GPaymentWay> save(List<GPaymentWay> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GPaymentWay> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GPaymentWay> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
