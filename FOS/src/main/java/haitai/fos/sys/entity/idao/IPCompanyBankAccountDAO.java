package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PCompanyBankAccount;

import java.util.List;
import java.util.Map;

public interface IPCompanyBankAccountDAO {
	public void save(PCompanyBankAccount entity);

	public List<PCompanyBankAccount> saveByRowAction(List<PCompanyBankAccount> entityList);

	public void delete(Integer id);

	public PCompanyBankAccount update(PCompanyBankAccount entity);

	public PCompanyBankAccount findById(Integer id);

	public List<PCompanyBankAccount> findByProperties(final Map<String, Object> propertyMap);
}
