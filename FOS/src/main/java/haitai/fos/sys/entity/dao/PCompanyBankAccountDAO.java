package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPCompanyBankAccountDAO;
import haitai.fos.sys.entity.table.PCompanyBankAccount;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class PCompanyBankAccountDAO extends
		GenericDAO<PCompanyBankAccount, Integer> implements
		IPCompanyBankAccountDAO {

	public PCompanyBankAccountDAO() {
		super(PCompanyBankAccount.class);
	}
}
