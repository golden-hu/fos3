package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SInvoiceEntry;

import java.util.Map;
import java.util.List;

public interface ISInvoiceEntryDAO {
	public void save(SInvoiceEntry entity);

	public void delete(Integer id);

	public SInvoiceEntry update(SInvoiceEntry entity);

	public SInvoiceEntry findById(Integer id);

	public List<SInvoiceEntry> findByProperties(
			final Map<String, Object> propertyMap);
}
