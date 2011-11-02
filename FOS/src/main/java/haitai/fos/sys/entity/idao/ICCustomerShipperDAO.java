package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CCustomerShipper;

import java.util.List;
import java.util.Map;

public interface ICCustomerShipperDAO {
	public void save(CCustomerShipper entity);

	public List<CCustomerShipper> saveByRowAction(List<CCustomerShipper> entityList);

	public void delete(Integer id);

	public CCustomerShipper update(CCustomerShipper entity);

	public CCustomerShipper findById(Integer id);

	public List<CCustomerShipper> findByProperties(
			final Map<String, Object> propertyMap);
}
