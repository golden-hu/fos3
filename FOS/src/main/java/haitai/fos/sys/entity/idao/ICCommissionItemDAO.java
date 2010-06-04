package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CCommissionItem;

import java.util.Map;
import java.util.List;

public interface ICCommissionItemDAO {
	public void save(CCommissionItem entity);

	public void delete(Integer id);

	public CCommissionItem update(CCommissionItem entity);

	public CCommissionItem findById(Integer id);

	public List<CCommissionItem> findByProperties(
			final Map<String, Object> propertyMap);
}
