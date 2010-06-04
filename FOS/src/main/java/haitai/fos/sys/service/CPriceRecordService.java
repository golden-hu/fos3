package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICPriceRecordDAO;
import haitai.fos.sys.entity.table.CPriceRecord;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CPriceRecordService {
	private ICPriceRecordDAO dao = null;

	@Transactional
	public List<CPriceRecord> save(List<CPriceRecord> entityList) {

		List<CPriceRecord> retList = new ArrayList<CPriceRecord>();

		for (CPriceRecord entity : entityList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setPrreId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				CPriceRecord delEntity = dao.findById(entity.getPrreId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CPriceRecord> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public ICPriceRecordDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICPriceRecordDAO dao) {
		this.dao = dao;
	}
}
