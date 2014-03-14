package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFPackingListDAO;
import haitai.fos.ffop.entity.table.FContract;
import haitai.fos.ffop.entity.table.FPackingList;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

@Component
public class FPackingListDAO extends GenericDAO<FPackingList, Integer>
		implements IFPackingListDAO {

	public FPackingListDAO() {
		super(FPackingList.class);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<FPackingList> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FPackingList.class;
		final Class t2 = FContract.class;
		String joinSql = "t1.fconId = t2.fconId";
		List<FPackingList> retList = complexQuery(conditions, propertyMap,
				"t1,t2", joinSql, t1, t2);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t1", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateSailedFlag(final Integer voyaId, final Short voyaSailedFlag) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FPackingList t1 set t1.voyaSailedFlag = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.voyaId = ? and t1.removed = 0");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, voyaSailedFlag);
				query.setParameter(2, voyaId);
				return query.executeUpdate();
			}
		});
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateVoyaName(final Integer voyaId, final String voyaName) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FPackingList t1 set t1.voyaName = ?, t1.version = t1.version + 1 ");
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
		sb.append("update FPackingList t1 set t1.vessName = ?, t1.vessNameCn = ?, t1.version = t1.version + 1 ");
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
	public void updateConsNoByConsId(final Integer consId, final String consNo) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FPackingList t1 set ");
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
	public void updateVessName(final Integer voyaId, final Integer newVessId,
			final String vessName, final String vessNameCn) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FPackingList t1 set t1.vessId = ?, t1.vessName = ?, ");
		sb.append("t1.vessNameCn = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.voyaId = ? and t1.removed = 0");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, newVessId);
				query.setParameter(2, vessName);
				query.setParameter(3, vessNameCn);
				query.setParameter(4, voyaId);
				return query.executeUpdate();
			}
		});
	}

}
