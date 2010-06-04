package haitai.fos.ws.entity.idao;

import haitai.fos.ws.entity.table.WUser;

import java.util.Map;
import java.util.List;

public interface IWUserDAO {
	public void save(WUser entity);

	public void delete(Integer id);

	public WUser update(WUser entity);

	public WUser findById(Integer id);

	public List<WUser> findByProperties(
			final Map<String, Object> propertyMap);
}
