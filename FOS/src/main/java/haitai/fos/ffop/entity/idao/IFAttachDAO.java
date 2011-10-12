package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FAttach;

import java.util.Map;
import java.util.List;

public interface IFAttachDAO {
	public void save(FAttach entity);

	public void delete(Integer id);

	public FAttach update(FAttach entity);

	public FAttach findById(Integer id);

	public List<FAttach> findByProperties(final Map<String, Object> propertyMap);
}
