package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FRailwayBl;

import java.util.Map;
import java.util.List;

public interface IFRailwayBlDAO {
	public void save(FRailwayBl entity);

	public void delete(Integer id);

	public FRailwayBl update(FRailwayBl entity);

	public FRailwayBl findById(Integer id);

	public List<FRailwayBl> findByProperties(
			final Map<String, Object> propertyMap);
}
