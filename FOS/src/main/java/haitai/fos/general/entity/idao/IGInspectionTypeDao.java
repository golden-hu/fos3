package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GInspectionType;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IGInspectionTypeDao {
	public void save(GInspectionType entity);

	public List<GInspectionType> saveByRowAction(List<GInspectionType> entityList);

	public void delete(Integer id);

	public GInspectionType update(GInspectionType entity);

	public GInspectionType findById(Integer id);

	public List<GInspectionType> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<GInspectionType> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
