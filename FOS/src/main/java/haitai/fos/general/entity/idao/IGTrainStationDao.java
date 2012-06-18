package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GTrainStation;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IGTrainStationDao {
	public void save(GTrainStation entity);

	public List<GTrainStation> saveByRowAction(List<GTrainStation> entityList);

	public void delete(Integer id);

	public GTrainStation update(GTrainStation entity);

	public GTrainStation findById(Integer id);

	public List<GTrainStation> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<GTrainStation> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
