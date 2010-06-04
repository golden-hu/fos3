package haitai.fos.exp.entity.idao;

import java.util.Map;

import haitai.fos.exp.entity.table.TInvoice;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface ITInvoiceDAO {
	public void save(TInvoice entity);

	public void delete(Integer id);

	public TInvoice update(TInvoice entity);

	public TInvoice findById(Integer id);

	public List<TInvoice> findByProperties(final Map<String, Object> propertyMap);

	public List<TInvoice> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
