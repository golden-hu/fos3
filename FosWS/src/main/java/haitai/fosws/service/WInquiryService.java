package haitai.fosws.service;

import haitai.fosws.entity.idao.IWInquiryDAO;
import haitai.fosws.entity.table.WInquiry;
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
public class WInquiryService {
	private IWInquiryDAO dao = null;
	
	@Transactional
	public List<WInquiry> save(List<WInquiry> entityList) {
		List<WInquiry> retList = new ArrayList<WInquiry>();
		for (WInquiry entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setWinqId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				WInquiry delEntity = dao.findById(entity.getWinqId());
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
	public List<WInquiry> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IWInquiryDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IWInquiryDAO dao) {
		this.dao = dao;
	}
}
