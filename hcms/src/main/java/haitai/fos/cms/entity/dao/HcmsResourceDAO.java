package haitai.fos.cms.entity.dao;

import haitai.fos.cms.entity.idao.IHcmsResourceDAO;
import haitai.fos.cms.entity.table.HcmsResource;
import haitai.fw.entity.GenericDAO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class HcmsResourceDAO extends GenericDAO<HcmsResource, Integer> implements
		IHcmsResourceDAO {

	public HcmsResourceDAO() {
		super(HcmsResource.class);
	}
	
	@SuppressWarnings("unchecked")
	public List<HcmsResource> complexQueryByPid(Integer pid) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		String joinSql = "(t1.PIds like '%/" + pid + "' or t1.PIds like '%/"
				+ pid + "/%')";
		return complexQuery(null, queryMap, "t1", joinSql, HcmsResource.class);	
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public List<HcmsResource> queryCategoryAndArticle(Map<String, Object> queryMap) {
		String joinSql = "(t1.type = 'C' or t1.type = 'A')";
		return complexQuery(null, queryMap, "t1", joinSql, HcmsResource.class);	
	}
}
