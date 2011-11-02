package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFCargoDAO;
import haitai.fos.ffop.entity.table.FCargo;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class FCargoService {
	@Autowired
	private IFCargoDAO dao;

	@Transactional
	public List<FCargo> save(List<FCargo> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FCargo> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryCargoByConsMasterId(Map queryMap) {
		List retList = new ArrayList();
		List<FosQuery> conditions = new ArrayList<FosQuery>();
		List objList = dao.complexQuery(conditions, queryMap);
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				FConsign consign = (FConsign) objArray[0];
				FCargo cargo = (FCargo) objArray[1];
				cargo.setConsMblNo(consign.getConsMblNo());
				cargo.setConsHblNo(consign.getConsHblNo());
				cargo.setCustName(consign.getCustName());
				retList.add(cargo);
			}
		}
		return retList;
	}
}
