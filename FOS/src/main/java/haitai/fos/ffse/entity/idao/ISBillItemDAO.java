package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SBillItem;

import java.util.Map;
import java.util.List;

public interface ISBillItemDAO {
	public void save(SBillItem entity);

	public void delete(Integer id);

	public SBillItem update(SBillItem entity);

	public SBillItem findById(Integer id);

	public List<SBillItem> findByProperties(
			final Map<String, Object> propertyMap);
}
