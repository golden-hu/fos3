package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FPackingList;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface IFPackingListDAO {
	public void save(FPackingList entity);

	public void delete(Integer id);

	public FPackingList update(FPackingList entity);

	public FPackingList findById(Integer id);

	public List<FPackingList> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<FPackingList> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract void updateSailedFlag(final Integer voyaId,
			final Short voyaSailedFlag);

	public abstract void updateConsNoByConsId(final Integer consId, final String consNo);

	public abstract void updateVoyaName(final Integer voyaId, final String voyaName);

	public abstract void updateVessName(final Integer vessId, final String vessName, final String vessNameCn);

	public abstract void updateVessName(final Integer vessId, final Integer newVessId,
			final String vessName, final String vessNameCn);
}
