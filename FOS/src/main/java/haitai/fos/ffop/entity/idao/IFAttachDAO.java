package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FAttach;

import java.util.List;
import java.util.Map;

public interface IFAttachDAO {
	public void save(FAttach entity);

	public List<FAttach> saveByRowAction(List<FAttach> entityList);

	public void delete(Integer id);

	public FAttach update(FAttach entity);

	public FAttach findById(Integer id);

	public List<FAttach> findByProperties(final Map<String, Object> propertyMap);
}
