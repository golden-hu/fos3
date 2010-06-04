package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CCommission;

import java.util.Map;
import java.util.List;

public interface ICCommissionDAO {
	public void save(CCommission entity);

	public void delete(Integer id);

	public CCommission update(CCommission entity);

	public CCommission findById(Integer id);

	public List<CCommission> findByProperties(
			final Map<String, Object> propertyMap);
}
