package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GIssueType;

import java.util.List;
import java.util.Map;

public interface IGIssueTypeDAO {
	public void save(GIssueType entity);

	public List<GIssueType> saveByRowAction(List<GIssueType> entityList);

	public void delete(Integer id);

	public GIssueType update(GIssueType entity);

	public GIssueType findById(Integer id);

	public List<GIssueType> findByProperties(final Map<String, Object> propertyMap);
}
