package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFSecondShipDAO;
import haitai.fos.ffop.entity.table.FSecondShip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class FSecondShipService {
	@Autowired
	private IFSecondShipDAO dao;

	@Transactional
	public List<FSecondShip> save(List<FSecondShip> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FSecondShip> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

}
