package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PGroup;

import java.util.Map;
import java.util.List;

public interface IPGroupDAO {
	public void save(PGroup entity);

	public List<PGroup> saveByRowAction(List<PGroup> entityList);
	
	public void delete(Integer id);

	public PGroup update(PGroup entity);

	public PGroup findById(Integer id);

	public List<PGroup> findByProperties(final Map<String, Object> propertyMap);
}
