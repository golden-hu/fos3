package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICSalesQuotaDAO;
import haitai.fos.sys.entity.table.CSalesQuota;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CSalesQuotaService {
	private ICSalesQuotaDAO dao = null;

	@Transactional
	public List<CSalesQuota> save(List<CSalesQuota> vedCatList) {

		List<CSalesQuota> retList = new ArrayList<CSalesQuota>();

		for (CSalesQuota entity : vedCatList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setSaquId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				CSalesQuota delEntity = dao.findById(entity.getSaquId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CSalesQuota> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public ICSalesQuotaDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICSalesQuotaDAO dao) {
		this.dao = dao;
	}
}
