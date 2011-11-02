package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CCommissionItem;

import java.util.List;
import java.util.Map;

public interface ICCommissionItemDAO {
	public void save(CCommissionItem entity);

	public List<CCommissionItem> saveByRowAction(List<CCommissionItem> entityList);

	public void delete(Integer id);

	public CCommissionItem update(CCommissionItem entity);

	public CCommissionItem findById(Integer id);

	public List<CCommissionItem> findByProperties(
			final Map<String, Object> propertyMap);
}
