package haitai.fos.ws.service;

import haitai.fos.ws.entity.idao.IWBlMDAO;
import haitai.fos.ws.entity.table.WBlM;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class WBlMService {
	@Autowired
	private IWBlMDAO dao;

	@Transactional
	public List<WBlM> save(List<WBlM> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<WBlM> query(Map queryMap) {
		//queryMap.put("wusrId", SessionManager.getStringAttr("WUID"));
		return dao.findByProperties(queryMap);
	}
}
