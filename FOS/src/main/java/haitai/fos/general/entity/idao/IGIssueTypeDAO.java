package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GIssueType;

import java.util.Map;
import java.util.List;

public interface IGIssueTypeDAO {
	public void save(GIssueType entity);

	public void delete(Integer id);

	public GIssueType update(GIssueType entity);

	public GIssueType findById(Integer id);

	public List<GIssueType> findByProperties(
			final Map<String, Object> propertyMap);
}
