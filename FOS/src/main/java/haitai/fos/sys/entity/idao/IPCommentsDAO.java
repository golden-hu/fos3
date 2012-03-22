package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PComments;

import java.util.Map;
import java.util.List;

public interface IPCommentsDAO {
	public void save(PComments entity);

	public List<PComments> saveByRowAction(List<PComments> entityList);
	
	public void delete(Integer id);

	public PComments update(PComments entity);

	public PComments findById(Integer id);

	public List<PComments> findByProperties(final Map<String, Object> propertyMap);
}
