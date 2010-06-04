package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCurrency;

import java.util.Map;
import java.util.List;

public interface IGCurrencyDAO {
	public void save(GCurrency entity);

	public void delete(Integer id);

	public GCurrency update(GCurrency entity);

	public GCurrency findById(Integer id);

	public List<GCurrency> findByProperties(
			final Map<String, Object> propertyMap);
}
