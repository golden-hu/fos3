package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FBl;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IFBlDAO {
	public void save(FBl entity);

	public void delete(Integer id);

	public FBl update(FBl entity);

	public FBl findById(Integer id);

	public List<FBl> findByProperties(Map<String, Object> propertyMap);
	
	public void updateStatusById(final Integer id, final Short blStatus);

	public abstract List<FBl> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	void updateConsNoByConsId(Integer consId, String consNo);

	public abstract List<FBl> complexQueryForWs(final List<FosQuery> conditions, final Map<String, Object> propertyMap);

}