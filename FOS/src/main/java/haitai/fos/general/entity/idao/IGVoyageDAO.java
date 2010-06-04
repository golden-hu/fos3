package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GVoyage;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IGVoyageDAO {
	public void save(GVoyage entity);

	public void delete(Integer id);

	public GVoyage update(GVoyage entity);

	public GVoyage findById(Integer id);

	public List<GVoyage> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<GVoyage> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract void updateVessName(final Integer vessId,
			final String vessName, final String vessNameCn);
}
