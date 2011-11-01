package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GPackage;

import java.util.List;
import java.util.Map;

public interface IGPackageDAO {
	public void save(GPackage entity);

	public List<GPackage> saveByRowAction(List<GPackage> entityList);

	public void delete(Integer id);

	public GPackage update(GPackage entity);

	public GPackage findById(Integer id);

	public List<GPackage> findByProperties(final Map<String, Object> propertyMap);
}
