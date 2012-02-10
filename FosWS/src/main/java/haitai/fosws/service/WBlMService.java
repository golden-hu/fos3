package haitai.fosws.service;

import haitai.fosws.entity.idao.IWBlMDAO;
import haitai.fosws.entity.table.WBlM;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class WBlMService {	
	@Autowired
	private IWBlMDAO dao;
	
	@Transactional
	public List<WBlM> save(List<WBlM> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<WBlM> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

}
