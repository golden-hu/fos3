package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GTransTerm;

import java.util.Map;
import java.util.List;

public interface IGTransTermDAO {
	public void save(GTransTerm entity);

	public void delete(Integer id);

	public GTransTerm update(GTransTerm entity);

	public GTransTerm findById(Integer id);

	public List<GTransTerm> findByProperties(
			final Map<String, Object> propertyMap);
}
