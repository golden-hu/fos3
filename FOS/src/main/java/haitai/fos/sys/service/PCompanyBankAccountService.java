package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPCompanyBankAccountDAO;
import haitai.fos.sys.entity.table.PCompanyBankAccount;
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
public class PCompanyBankAccountService {
	
	private IPCompanyBankAccountDAO dao = null;
	
	@Transactional
	public List<PCompanyBankAccount> save(List<PCompanyBankAccount> entityList) {
		List<PCompanyBankAccount> retList = new ArrayList<PCompanyBankAccount>();
		for (PCompanyBankAccount entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCobaId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				PCompanyBankAccount delEntity = dao.findById(entity.getCobaId());
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
	public List<PCompanyBankAccount> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	

	public IPCompanyBankAccountDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IPCompanyBankAccountDAO dao) {
		this.dao = dao;
	}
}
