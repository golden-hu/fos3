package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SInvoiceNo;

import java.util.Map;
import java.util.List;

public interface ISInvoiceNoDAO {
	public void save(SInvoiceNo entity);

	public void delete(Integer id);

	public SInvoiceNo update(SInvoiceNo entity);

	public SInvoiceNo findById(Integer id);

	public List<SInvoiceNo> findByProperties(
			final Map<String, Object> propertyMap);
}
