package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGShippingLineDAO;
import haitai.fos.general.entity.table.GShippingLine;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GShippingLineService implements IGeneralService<GShippingLine> {
	private IGShippingLineDAO dao = null;

	@Transactional
	public List<GShippingLine> save(List<GShippingLine> itemList) {
		List<GShippingLine> retList = new ArrayList<GShippingLine>();
		for (GShippingLine entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setShliId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GShippingLine delEntity = dao.findById(entity.getShliId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GShippingLine> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGShippingLineDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGShippingLineDAO dao) {
		this.dao = dao;
	}

	public List<GShippingLine> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
