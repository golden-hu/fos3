package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FInspection;

import java.util.List;
import java.util.Map;

public interface IFInspectionDAO {
	public void save(FInspection entity);

	public void delete(Integer id);

	public FInspection update(FInspection entity);

	public FInspection findById(Integer id);

	public List<FInspection> findByProperties(final Map<String, Object> propertyMap);
}