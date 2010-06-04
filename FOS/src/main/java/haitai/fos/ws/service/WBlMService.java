package haitai.fos.ws.service;

import haitai.fos.ws.entity.idao.IWBlMDAO;
import haitai.fos.ws.entity.table.WBlM;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class WBlMService {
	private IWBlMDAO dao = null;
	
	@Transactional
	public List<WBlM> save(List<WBlM> entityList) {
		List<WBlM> retList = new ArrayList<WBlM>();
		for (WBlM entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setWblmId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				WBlM delEntity = dao.findById(entity.getWblmId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			} else {
				throw new BusinessException(
						MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<WBlM> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IWBlMDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IWBlMDAO dao) {
		this.dao = dao;
	}
}
