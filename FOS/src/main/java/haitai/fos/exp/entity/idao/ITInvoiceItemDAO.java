package haitai.fos.exp.entity.idao;

import haitai.fos.exp.entity.table.TInvoiceItem;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface ITInvoiceItemDAO {
	public void save(TInvoiceItem entity);

	public List<TInvoiceItem> saveByRowAction(List<TInvoiceItem> entityList);

	public void delete(Integer id);

	public TInvoiceItem update(TInvoiceItem entity);

	public TInvoiceItem findById(Integer id);

	public List<TInvoiceItem> findByProperties(
			final Map<String, Object> propertyMap);

	public List<TInvoiceItem> complexQuery(final List<FosQuery> conditions,
										   final Map<String, Object> propertyMap);

}
