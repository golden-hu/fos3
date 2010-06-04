package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PUser;

import java.util.List;
import java.util.Map;

public interface IPUserDAO {
	public void save(PUser entity);

	public void delete(Integer id);

	public PUser update(PUser entity);

	public PUser findById(Integer id);

	public List<PUser> findByProperties(final Map<String, Object> propertyMap);

	@SuppressWarnings("unchecked")
	public List queryFuncCode();

	public abstract List<PUser> queryByNameOrEmail(final String name,
			final String password);
}
