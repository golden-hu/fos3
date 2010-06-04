package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FInspectionDoc;

import java.util.List;
import java.util.Map;

public interface IFInspectionDocDAO {
	public void save(FInspectionDoc entity);

	public void delete(Integer id);

	public FInspectionDoc update(FInspectionDoc entity);

	public FInspectionDoc findById(Integer id);

	public List<FInspectionDoc> findByProperties(final Map<String, Object> propertyMap);
}