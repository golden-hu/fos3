package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PGroupUser;

import java.util.Map;
import java.util.List;

public interface IPGroupUserDAO {
	public void save(PGroupUser entity);

	public void delete(Integer id);

	public PGroupUser update(PGroupUser entity);

	public PGroupUser findById(Integer id);

	public List<PGroupUser> findByProperties(
			final Map<String, Object> propertyMap);
}
