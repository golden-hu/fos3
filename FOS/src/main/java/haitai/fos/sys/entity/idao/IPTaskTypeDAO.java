package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PTaskType;

import java.util.List;
import java.util.Map;

public interface IPTaskTypeDAO {
	public void save(PTaskType entity);

	public List<PTaskType> saveByRowAction(List<PTaskType> entityList);

	public void delete(Integer id);

	public PTaskType update(PTaskType entity);

	public PTaskType findById(Integer id);

	public List<PTaskType> findByProperties(final Map<String, Object> propertyMap);
}
