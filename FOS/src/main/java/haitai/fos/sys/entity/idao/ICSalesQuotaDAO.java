package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CSalesQuota;

import java.util.List;
import java.util.Map;

public interface ICSalesQuotaDAO {
	public void save(CSalesQuota entity);

	public List<CSalesQuota> saveByRowAction(List<CSalesQuota> entityList);

	public void delete(Integer id);

	public CSalesQuota update(CSalesQuota entity);

	public CSalesQuota findById(Integer id);

	public List<CSalesQuota> findByProperties(final Map<String, Object> propertyMap);
}
