package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFLoadingListDAO;
import haitai.fos.ffop.entity.table.FContract;
import haitai.fos.ffop.entity.table.FLoadingList;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

@Component
public class FLoadingListDAO extends GenericDAO<FLoadingList, Integer>
		implements IFLoadingListDAO {

	public FLoadingListDAO() {
		super(FLoadingList.class);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FLoadingList.class;
		final Class t2 = FContract.class;
		String joinSql = "t1.fconId = t2.fconId";
		List retList = complexQuery(conditions, propertyMap, "t1,t2", joinSql,
				t1, t2);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t1", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateSailDate(final Integer voyaId, final Date voyaSailDate,
			final Date voyaShipDateF, final Date voyaShipDateT) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FLoadingList t1 set t1.voyaSailDate = ? ,");
		sb.append("t1.voyaShipDateF = ? ,");
		sb.append("t1.voyaShipDateT = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.voyaId = ? and t1.removed = 0");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, voyaSailDate);
				query.setParameter(2, voyaShipDateF);
				query.setParameter(3, voyaShipDateT);
				query.setParameter(4, voyaId);
				return query.executeUpdate();
			}
		});
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateConsNoByConsId(final Integer consId, final String consNo) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FLoadingList t1 set ");
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
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateVoyaName(final Integer voyaId, final String voyaName) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FLoadingList t1 set t1.voyaName = ?, t1.version = t1.version + 1 ");
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
	public void updateVessName(final Integer vessId, final String vessName,
			final String vessNameCn) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FLoadingList t1 set t1.vessName = ?, t1.vessNameCn = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.vessId = ? and t1.removed = 0");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, vessName);
				query.setParameter(2, vessNameCn);
				query.setParameter(3, vessId);
				return query.executeUpdate();
			}
		});
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateVessName(final Integer vessId, final Integer newVessId,
			final String vessName, final String vessNameCn) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FLoadingList t1 set t1.vessId = ?, t1.vessName = ?, ");
		sb.append("t1.vessNameCn = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.vessId = ? and t1.removed = 0");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, newVessId);
				query.setParameter(2, vessName);
				query.setParameter(3, vessNameCn);
				query.setParameter(4, vessId);
				return query.executeUpdate();
			}
		});
	}

}
