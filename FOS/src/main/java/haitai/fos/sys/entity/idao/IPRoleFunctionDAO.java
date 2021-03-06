package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PRoleFunction;

import java.util.List;
import java.util.Map;

public interface IPRoleFunctionDAO {
	public void save(PRoleFunction entity);

	public List<PRoleFunction> saveByRowAction(List<PRoleFunction> entityList);

	public void delete(Integer id);

	public PRoleFunction update(PRoleFunction entity);

	public PRoleFunction findById(Integer id);

	public List<PRoleFunction> findByProperties(final Map<String, Object> propertyMap);
}
