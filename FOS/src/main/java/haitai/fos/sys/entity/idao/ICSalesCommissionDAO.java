package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CSalesCommission;

import java.util.List;
import java.util.Map;

public interface ICSalesCommissionDAO {
	public void save(CSalesCommission entity);

	public List<CSalesCommission> saveByRowAction(List<CSalesCommission> entityList);

	public void delete(Integer id);

	public CSalesCommission update(CSalesCommission entity);

	public CSalesCommission findById(Integer id);

	public List<CSalesCommission> findByProperties(final Map<String, Object> propertyMap);

	@SuppressWarnings("unchecked")
	public abstract List queryAllCommission(final Map<String, Object> propertyMap);

	@SuppressWarnings("unchecked")
	public abstract List queryCommissionDetail(final Map<String, Object> propertyMap);
}
