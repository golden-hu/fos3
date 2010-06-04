package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PRole;

import java.util.Map;
import java.util.List;

public interface IPRoleDAO {
	public void save(PRole entity);

	public void delete(Integer id);

	public PRole update(PRole entity);

	public PRole findById(Integer id);

	public List<PRole> findByProperties(final Map<String, Object> propertyMap);
}
