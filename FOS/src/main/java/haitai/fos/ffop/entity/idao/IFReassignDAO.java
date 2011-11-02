package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FReassign;

import java.util.List;
import java.util.Map;

public interface IFReassignDAO {
	public void save(FReassign entity);

	public List<FReassign> saveByRowAction(List<FReassign> entityList);

	public void delete(Integer id);

	public FReassign update(FReassign entity);

	public FReassign findById(Integer id);

	public List<FReassign> findByProperties(final Map<String, Object> propertyMap);
}
