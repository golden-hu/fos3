package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPCompanyBankAccountDAO;
import haitai.fos.sys.entity.table.PCompanyBankAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PCompanyBankAccountService {
	@Autowired
	private IPCompanyBankAccountDAO dao;

	@Transactional
	public List<PCompanyBankAccount> save(List<PCompanyBankAccount> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PCompanyBankAccount> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
