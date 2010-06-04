package haitai.fos.cms.entity.idao;

import java.util.Map;

import haitai.fos.cms.entity.table.HcmsTemplate;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface IHcmsTemplateDAO {
	public void save(HcmsTemplate entity);

	public void delete(Integer id);

	public HcmsTemplate update(HcmsTemplate entity);

	public HcmsTemplate findById(Integer id);

	public List<HcmsTemplate> findByProperties(
			final Map<String, Object> propertyMap);

	public List<HcmsTemplate> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
