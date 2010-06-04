package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FTransTask;

import java.util.List;
import java.util.Map;

public interface IFTransTaskDAO {
	public void save(FTransTask entity);

	public void delete(Integer id);

	public FTransTask update(FTransTask entity);

	public FTransTask findById(Integer id);

	public List<FTransTask> findByProperties(final Map<String, Object> propertyMap);
}