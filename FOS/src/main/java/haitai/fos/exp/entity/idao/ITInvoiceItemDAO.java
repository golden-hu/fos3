package haitai.fos.exp.entity.idao;

import java.util.Map;

import haitai.fos.exp.entity.table.TInvoiceItem;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface ITInvoiceItemDAO {
	public void save(TInvoiceItem entity);

	public void delete(Integer id);

	public TInvoiceItem update(TInvoiceItem entity);

	public TInvoiceItem findById(Integer id);

	public List<TInvoiceItem> findByProperties(
			final Map<String, Object> propertyMap);

	public List<TInvoiceItem> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
