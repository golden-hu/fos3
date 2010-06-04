package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGPaymentTermDAO;
import haitai.fos.general.entity.table.GPaymentTerm;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GPaymentTermService implements IGeneralService<GPaymentTerm> {
	private IGPaymentTermDAO dao = null;

	@Transactional
	public List<GPaymentTerm> save(List<GPaymentTerm> itemList) {
		List<GPaymentTerm> retList = new ArrayList<GPaymentTerm>();
		for (GPaymentTerm entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setPateId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GPaymentTerm delEntity = dao.findById(entity.getPateId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GPaymentTerm> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGPaymentTermDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGPaymentTermDAO dao) {
		this.dao = dao;
	}

	public List<GPaymentTerm> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
