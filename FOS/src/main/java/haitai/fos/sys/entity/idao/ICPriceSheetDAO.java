package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CPriceSheet;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface ICPriceSheetDAO {
	public void save(CPriceSheet entity);

	public void delete(Integer id);

	public CPriceSheet update(CPriceSheet entity);

	public CPriceSheet findById(Integer id);

	public List<CPriceSheet> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<CPriceSheet> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);

	public abstract void updateVoyaName(final Integer voyaId, final String voyaName);

	public abstract void updateVessName(final Integer vessId, final String vessName);

	public abstract void updateVessName(final Integer vessId, final Integer newVessId, final String newVessName);
}
