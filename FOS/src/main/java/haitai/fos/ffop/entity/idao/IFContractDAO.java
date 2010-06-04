package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FContract;
import haitai.fw.entity.FosQuery;

import java.util.Date;
import java.util.List;
import java.util.Map;

public interface IFContractDAO {
	public void save(FContract entity);

	public void delete(Integer id);

	public FContract update(FContract entity);

	public FContract findById(Integer id);

	public List<FContract> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<FContract> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract void updateSailDate(final Integer voyaId, final Date voyaSailDate,
			final Date voyaShipDateF, final Date voyaShipDateT);

	public abstract void updateConsNoByConsId(final Integer consId, final String consNo);

	public abstract void updateSailedFlag(final Integer voyaId, final Short voyaSailedFlag);

	public abstract List<FContract> queryByVoyaId(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract List<Object> queryByVoyaIdAndCustId(final Integer fconId, final Integer custId);
}
