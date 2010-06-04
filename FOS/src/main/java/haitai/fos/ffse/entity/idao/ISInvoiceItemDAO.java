package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SInvoiceItem;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface ISInvoiceItemDAO {
	public void save(SInvoiceItem entity);

	public void delete(Integer id);

	public SInvoiceItem update(SInvoiceItem entity);

	public SInvoiceItem findById(Integer id);

	public List<SInvoiceItem> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<SInvoiceItem> complexQueryByPrId(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract List<SInvoiceItem> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract List<SInvoiceItem> complexQueryByParent(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);
}
