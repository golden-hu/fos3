package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGIssueTypeDAO;
import haitai.fos.general.entity.table.GIssueType;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GIssueTypeService implements IGeneralService<GIssueType> {
	private IGIssueTypeDAO dao = null;

	@Transactional
	public List<GIssueType> save(List<GIssueType> itemList) {
		List<GIssueType> retList = new ArrayList<GIssueType>();
		for (GIssueType entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setIstyId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GIssueType delEntity = dao.findById(entity.getIstyId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GIssueType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGIssueTypeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGIssueTypeDAO dao) {
		this.dao = dao;
	}

	public List<GIssueType> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
