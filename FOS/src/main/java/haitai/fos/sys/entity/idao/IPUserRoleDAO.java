package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PUserRole;

import java.util.Map;
import java.util.List;

public interface IPUserRoleDAO {
	public void save(PUserRole entity);

	public void delete(Integer id);

	public PUserRole update(PUserRole entity);

	public PUserRole findById(Integer id);

	public List<PUserRole> findByProperties(
			final Map<String, Object> propertyMap);
}
