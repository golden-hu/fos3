package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PFunction;

import java.util.Map;
import java.util.List;

public interface IPFunctionDAO {
	public void save(PFunction entity);

	public void delete(Integer id);

	public PFunction update(PFunction entity);

	public List<PFunction> findByProperties(
			final Map<String, Object> propertyMap);
}
