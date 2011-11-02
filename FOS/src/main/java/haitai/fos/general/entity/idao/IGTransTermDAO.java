package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GTransTerm;

import java.util.List;
import java.util.Map;

public interface IGTransTermDAO {
	public void save(GTransTerm entity);

	public List<GTransTerm> saveByRowAction(List<GTransTerm> entityList);

	public void delete(Integer id);

	public GTransTerm update(GTransTerm entity);

	public GTransTerm findById(Integer id);

	public List<GTransTerm> findByProperties(final Map<String, Object> propertyMap);
}
