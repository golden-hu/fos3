package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FDoc;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IFDocDAO {
	public void save(FDoc entity);

	public List<FDoc> saveByRowAction(List<FDoc> entityList);

	public void delete(Integer id);

	public FDoc update(FDoc entity);

	public FDoc findById(Integer id);

	public List<FDoc> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<FDoc> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);

	public abstract List<FDoc> complexQueryNeedRelease(final List<FosQuery> conditions,
													   final Map<String, Object> propertyMap);

	public abstract List<FDoc> complexQueryNeedAlert(final List<FosQuery> conditions,
													 final Map<String, Object> propertyMap);

	public abstract void updateConsNoByConsId(final Integer consId, final String consNo);
}
