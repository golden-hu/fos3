package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FCustomesType;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IFCustomsTypeDao {
	public void save(FCustomesType entity);

	public List<FCustomesType> saveByRowAction(List<FCustomesType> entityList);

	public void delete(Integer id);

	public FCustomesType update(FCustomesType entity);

	public FCustomesType findById(Integer id);

	public List<FCustomesType> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<FCustomesType> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
