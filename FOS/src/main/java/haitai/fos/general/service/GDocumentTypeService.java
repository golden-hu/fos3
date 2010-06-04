package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGDocumentTypeDAO;
import haitai.fos.general.entity.table.GDocumentType;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GDocumentTypeService implements IGeneralService<GDocumentType> {
	private IGDocumentTypeDAO dao = null;

	@Transactional
	public List<GDocumentType> save(List<GDocumentType> itemList) {
		List<GDocumentType> retList = new ArrayList<GDocumentType>();
		for (GDocumentType entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setDotyId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GDocumentType delEntity = dao.findById(entity.getDotyId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GDocumentType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGDocumentTypeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGDocumentTypeDAO dao) {
		this.dao = dao;
	}

	public List<GDocumentType> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
