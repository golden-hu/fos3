package haitai.fos.cms.entity.idao;

import java.util.Map;

import haitai.fos.cms.entity.table.HcmsResource;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface IHcmsResourceDAO {
	public void save(HcmsResource entity);

	public void delete(Integer id);

	public HcmsResource update(HcmsResource entity);

	public HcmsResource findById(Integer id);

	public List<HcmsResource> findByProperties(
			final Map<String, Object> propertyMap);

	public List<HcmsResource> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract List<HcmsResource> complexQueryByPid(Integer pid);

	public abstract List<HcmsResource> queryCategoryAndArticle(Map<String, Object> queryMap);

}
