package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PFunction;

import java.util.List;
import java.util.Map;

public interface IPFunctionDAO {
	public void save(PFunction entity);

	public List<PFunction> saveByRowAction(List<PFunction> entityList);

	public void delete(Integer id);

	public PFunction update(PFunction entity);

	public List<PFunction> findByProperties(
			final Map<String, Object> propertyMap);
}
