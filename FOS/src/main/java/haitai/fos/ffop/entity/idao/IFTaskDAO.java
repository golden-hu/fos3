package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FTask;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface IFTaskDAO {
	public void save(FTask entity);

	public void delete(Integer id);

	public FTask update(FTask entity);

	public FTask findById(Integer id);

	public List<FTask> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<FTask> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);
}
