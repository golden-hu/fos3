package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICPriceSheetDAO;
import haitai.fos.sys.entity.table.CPriceLine;
import haitai.fos.sys.entity.table.CPriceRecord;
import haitai.fos.sys.entity.table.CPriceSheet;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;
import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;
import java.util.List;
import java.util.Map;

@Component
public class CPriceSheetDAO extends GenericDAO<CPriceSheet, Integer> implements ICPriceSheetDAO {

	public CPriceSheetDAO() {
		super(CPriceSheet.class);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<CPriceSheet> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = CPriceSheet.class;
		final Class t2 = CPriceLine.class;
		final Class t3 = CPriceRecord.class;
		String joinSql = "t1.prshId = t2.prshId and t2.prliId = t3.prliId "
				+ "and t1.removed = 0 and t2.removed = 0 and t3.removed = 0";
		List retList = complexQuery(conditions, propertyMap, "t1,t2,t3",
				joinSql, t1, t2, t3);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t3", joinSql, t1, t2, t3));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateVoyaName(final Integer voyaId, final String voyaName) {
		StringBuffer sb = new StringBuffer();
		sb.append("update CPriceSheet t1 set t1.voyaName = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.voyaId = ? and t1.removed = 0");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, voyaName);
				query.setParameter(2, voyaId);
				return query.executeUpdate();
			}
		});
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateVessName(final Integer vessId, final String vessName) {
		StringBuffer sb = new StringBuffer();
		sb.append("update CPriceSheet t1 set t1.vessName = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.vessId = ? and t1.removed = 0");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, vessName);
				query.setParameter(2, vessId);
				return query.executeUpdate();
			}
		});
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateVessName(final Integer voyaId, final Integer newVessId,
			final String newVessName) {
		StringBuffer sb = new StringBuffer();
		sb.append("update CPriceSheet t1 set t1.vessId = ?, t1.vessName = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.voyaId = ? and t1.removed = 0");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, newVessId);
				query.setParameter(2, newVessName);
				query.setParameter(3, voyaId);
				return query.executeUpdate();
			}
		});
	}

}
