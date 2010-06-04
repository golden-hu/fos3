package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICPriceLineDAO;
import haitai.fos.sys.entity.table.CPriceLine;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CPriceLineService {
	private ICPriceLineDAO dao = null;

	@Transactional
	public List<CPriceLine> save(List<CPriceLine> entityList) {

		List<CPriceLine> retList = new ArrayList<CPriceLine>();

		for (CPriceLine entity : entityList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setPrliId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				CPriceLine delEntity = dao.findById(entity.getPrliId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CPriceLine> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public ICPriceLineDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICPriceLineDAO dao) {
		this.dao = dao;
	}
}
