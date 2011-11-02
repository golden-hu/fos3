package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SInvoiceNo;

import java.util.List;
import java.util.Map;

public interface ISInvoiceNoDAO {
	public void save(SInvoiceNo entity);

	public List<SInvoiceNo> saveByRowAction(List<SInvoiceNo> entityList);

	public void delete(Integer id);

	public SInvoiceNo update(SInvoiceNo entity);

	public SInvoiceNo findById(Integer id);

	public List<SInvoiceNo> findByProperties(final Map<String, Object> propertyMap);
}
