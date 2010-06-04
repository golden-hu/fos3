package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PCompanyBankAccount;

import java.util.Map;
import java.util.List;

public interface IPCompanyBankAccountDAO {
	public void save(PCompanyBankAccount entity);

	public void delete(Integer id);

	public PCompanyBankAccount update(PCompanyBankAccount entity);

	public PCompanyBankAccount findById(Integer id);

	public List<PCompanyBankAccount> findByProperties(
			final Map<String, Object> propertyMap);
}
