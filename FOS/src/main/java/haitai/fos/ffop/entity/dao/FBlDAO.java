package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFBlDAO;
import haitai.fos.ffop.entity.table.FBl;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;
import haitai.fw.exception.BusinessException;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

@Component
public class FBlDAO extends GenericDAO<FBl, Integer> implements IFBlDAO {

	public FBlDAO() {
		super(FBl.class);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateStatusById(final Integer id, final Short blStatus) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FBl t1 set t1.blStatus = :blStatus, t1.version = t1.version + 1 where ");
		sb.append("t1.blId = :blId and t1.compCode= :compCode");
		final String queryString = sb.toString();
		Integer affectRows = (Integer) getJpaTemplate().execute(
				new JpaCallback() {
					public Object doInJpa(EntityManager em)
							throws PersistenceException {
						Query query = em.createQuery(queryString);
						query.setParameter("blStatus", blStatus);
						query.setParameter("blId", id);
						query.setParameter("compCode", SessionManager
								.getStringAttr(SessionKeyType.COMPCODE));
						return Integer.valueOf(query.executeUpdate());
					}
				});
		if (affectRows != 1) {
			throw new BusinessException("record " + id + " not found");
		}
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<FBl> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FConsign.class;
		final Class t2 = FBl.class;
		String joinSql = "t1.consId = t2.consId";
		List retList = complexQuery(conditions, propertyMap, "t2", joinSql, t1,
				t2);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t2", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	@Override
	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<FBl> complexQueryForWs(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FBl.class;
		List retList = complexQuery(conditions, propertyMap, "t1", "", t1);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t1", "", t1));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	@Override
	public void updateConsNoByConsId(final Integer consId, final String consNo) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FBl t1 set ");
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