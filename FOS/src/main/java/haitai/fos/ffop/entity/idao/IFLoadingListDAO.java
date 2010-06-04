package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FLoadingList;
import haitai.fw.entity.FosQuery;

import java.util.Date;
import java.util.Map;
import java.util.List;

public interface IFLoadingListDAO {
	public void save(FLoadingList entity);

	public void delete(Integer id);

	public FLoadingList update(FLoadingList entity);

	public FLoadingList findById(Integer id);

	public List<FLoadingList> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<Object> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract void updateSailDate(final Integer voyaId, final Date voyaSailDate,
			final Date voyaShipDateF, final Date voyaShipDateT);

	public abstract void updateConsNoByConsId(final Integer consId, final String consNo);

	public abstract void updateVoyaName(final Integer voyaId, final String voyaName);

	public abstract void updateVessName(final Integer vessId, final String vessName, final String vessNameCn);

	public abstract void updateVessName(final Integer vessId, final Integer newVessId,
			final String vessName, final String vessNameCn);
}
