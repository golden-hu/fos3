package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PUserExpePermission;

import java.util.List;
import java.util.Map;

public interface IPUserExpePermissionDAO {
	public void save(PUserExpePermission entity);

	public List<PUserExpePermission> saveByRowAction(List<PUserExpePermission> entityList);

	public void delete(Integer id);

	public PUserExpePermission update(PUserExpePermission entity);

	public PUserExpePermission findById(Integer id);

	public List<PUserExpePermission> findByProperties(final Map<String, Object> propertyMap);
}
