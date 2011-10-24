package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CCustomerContact;

import java.util.List;
import java.util.Map;

public interface ICCustomerContactDAO {
	public void save(CCustomerContact entity);

	public List<CCustomerContact> saveByRowAction(List<CCustomerContact> entityList);

	public void delete(Integer id);

	public CCustomerContact update(CCustomerContact entity);

	public CCustomerContact findById(Integer id);

	public List<CCustomerContact> findByProperties(
			final Map<String, Object> propertyMap);
}
