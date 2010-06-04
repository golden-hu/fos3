package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SInvoice;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface ISInvoiceDAO {
	public void save(SInvoice entity);

	public void delete(Integer id);

	public SInvoice update(SInvoice entity);

	public SInvoice findById(Integer id);

	public List<SInvoice> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract void checkStatusById(final Integer id, final Short status);

	public abstract List<SInvoice> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);
}
