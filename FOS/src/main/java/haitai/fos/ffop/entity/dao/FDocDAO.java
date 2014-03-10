package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFDocDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FDoc;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;
import haitai.fw.util.CompanyConfigUtil;
import haitai.fw.util.ConstUtil;
import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;
import java.util.List;
import java.util.Map;

@Component
public class FDocDAO extends GenericDAO<FDoc, Integer> implements IFDocDAO {

	public FDocDAO() {
		super(FDoc.class);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap) {
		final Class t1 = FDoc.class;
		final Class t2 = FConsign.class;
		String joinSql = "t1.consId = t2.consId";
		List retList = complexQuery(conditions, propertyMap, "t1,t2", joinSql, t1, t2);

		String rowCount = String.valueOf(complexQuerySize(conditions, propertyMap, "distinct t1", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<FDoc> complexQueryNeedRelease(final List<FosQuery> conditions, final Map<String,
			Object> propertyMap) {
		final Class t1 = FDoc.class;
		final Class t2 = FConsign.class;
		String blId = CompanyConfigUtil.getCompanyConfig(ConstUtil.COMCF_FDOC_BL);
		String ccId = CompanyConfigUtil.getCompanyConfig(ConstUtil.COMCF_FDOC_CC);
		String joinSql = "t1.consId = t2.consId and (t1.dotyId = " + blId + " or t1.dotyId = " + ccId + ")";
		return complexQuery(conditions, propertyMap, "t1", joinSql, t1, t2);
	}

	@SuppressWarnings("unchecked")
	public List<FDoc> complexQueryNeedAlert(final List<FosQuery> conditions, final Map<String, Object> propertyMap) {
		final Class<FDoc> t1 = FDoc.class;
		final Class<FConsign> t2 = FConsign.class;
		String joinSql = "t1.consId = t2.consId and (t1.alertFlag is null or t1.alertFlag = '0')";
		return complexQuery(conditions, propertyMap, "t1", joinSql, t1, t2);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Override
	public void updateConsNoByConsId(final Integer consId, final String consNo) {
		StringBuilder sb = new StringBuilder();
		sb.append("update FDoc t1 set ");
		sb.append("t1.consNo = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.consId = ? and t1.removed = 0");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, consNo);
				query.setParameter(2, consId);
				return query.executeUpdate();
			}
		});
	}

}
