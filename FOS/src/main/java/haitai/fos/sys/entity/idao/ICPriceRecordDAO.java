package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CPriceRecord;

import java.util.Map;
import java.util.List;

public interface ICPriceRecordDAO {
	public void save(CPriceRecord entity);

	public void delete(Integer id);

	public CPriceRecord update(CPriceRecord entity);

	public CPriceRecord findById(Integer id);

	public List<CPriceRecord> findByProperties(
			final Map<String, Object> propertyMap);
}
