package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCustomsType;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IGCustomsTypeDao {
	public void save(GCustomsType entity);

	public List<GCustomsType> saveByRowAction(List<GCustomsType> entityList);

	public void delete(Integer id);

	public GCustomsType update(GCustomsType entity);

	public GCustomsType findById(Integer id);

	public List<GCustomsType> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<GCustomsType> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
