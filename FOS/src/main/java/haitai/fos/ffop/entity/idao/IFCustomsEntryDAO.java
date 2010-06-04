package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FCustomsEntry;

import java.util.Map;
import java.util.List;

public interface IFCustomsEntryDAO {
	public void save(FCustomsEntry entity);

	public void delete(Integer id);

	public FCustomsEntry update(FCustomsEntry entity);

	public FCustomsEntry findById(Integer id);

	public List<FCustomsEntry> findByProperties(
			final Map<String, Object> propertyMap);
}
