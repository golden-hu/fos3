package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GPackage;

import java.util.Map;
import java.util.List;

public interface IGPackageDAO {
	public void save(GPackage entity);

	public void delete(Integer id);

	public GPackage update(GPackage entity);

	public GPackage findById(Integer id);

	public List<GPackage> findByProperties(
			final Map<String, Object> propertyMap);
}
