package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FContainerTrace;

import java.util.List;
import java.util.Map;

public interface IFContainerTraceDAO {
	public void save(FContainerTrace entity);

	public List<FContainerTrace> saveByRowAction(List<FContainerTrace> entityList);

	public void delete(Integer id);

	public FContainerTrace update(FContainerTrace entity);

	public FContainerTrace findById(Integer id);

	public List<FContainerTrace> findByProperties(final Map<String, Object> propertyMap);

}
