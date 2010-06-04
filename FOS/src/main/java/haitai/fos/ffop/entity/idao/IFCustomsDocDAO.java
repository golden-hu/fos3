package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FCustomsDoc;

import java.util.Map;
import java.util.List;

public interface IFCustomsDocDAO {
	public void save(FCustomsDoc entity);

	public void delete(Integer id);

	public FCustomsDoc update(FCustomsDoc entity);

	public FCustomsDoc findById(Integer id);

	public List<FCustomsDoc> findByProperties(
			final Map<String, Object> propertyMap);
}
