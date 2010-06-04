package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CSalesQuota;

import java.util.Map;
import java.util.List;

public interface ICSalesQuotaDAO {
	public void save(CSalesQuota entity);

	public void delete(Integer id);

	public CSalesQuota update(CSalesQuota entity);

	public CSalesQuota findById(Integer id);

	public List<CSalesQuota> findByProperties(
			final Map<String, Object> propertyMap);
}
