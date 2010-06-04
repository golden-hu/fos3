package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FConsign;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IFConsignDAO {
	public void save(FConsign entity);

	public void delete(Integer id);

	public FConsign update(FConsign entity);

	public FConsign findById(Integer id);

	public List<FConsign> findByProperties(Map<String, Object> propertyMap);

	public void updateStatusById(final Integer id, String statusName,
			final Short statusValue);

	public void updateStatusBookById(final Integer id, final Short status);

	public void updateMblStatusById(final Integer id, final Short mbl);

	public void updateFblStatusById(final Integer id, final Short fbl);

	public abstract List<FConsign> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract List<FConsign> complexQueryByContNo(final List<FosQuery> conditions, 
			final Map<String, Object> propertyMap);

	public abstract List<FConsign> complexQueryCheck(final List<FosQuery> conditions, 
			final Map<String, Object> propertyMap);

	public abstract List<FConsign> complexQueryStatusLock(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract void updateVoyaName(final Integer voyaId, final String voyaName);

	public abstract void updateVessName(final Integer vessId, final String vessName, final String vessNameCn);

	public abstract void updateVessName(final Integer vessId, final Integer newVessId,
			final String vessName, final String vessNameCn);

	public abstract List<Object> complexQueryOverDueSales(int dateNum);

	public abstract List<FConsign> complexQueryTask(final List<FosQuery> conditions, final Map<String, Object> propertyMap);

	public abstract List<FConsign> complexQueryForWs(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
	
}