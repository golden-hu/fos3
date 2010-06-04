package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FReassign;

import java.util.Map;
import java.util.List;

public interface IFReassignDAO {
	public void save(FReassign entity);

	public void delete(Integer id);

	public FReassign update(FReassign entity);

	public FReassign findById(Integer id);

	public List<FReassign> findByProperties(
			final Map<String, Object> propertyMap);
}
