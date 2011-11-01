package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCurrency;

import java.util.List;
import java.util.Map;

public interface IGCurrencyDAO {
	public void save(GCurrency entity);

	public List<GCurrency> saveByRowAction(List<GCurrency> entityList);

	public void delete(Integer id);

	public GCurrency update(GCurrency entity);

	public GCurrency findById(Integer id);

	public List<GCurrency> findByProperties(final Map<String, Object> propertyMap);
}
