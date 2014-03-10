package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFContractDAO;
import haitai.fos.ffop.entity.table.FContract;
import haitai.fos.ffop.entity.table.FLoadingList;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

@Component
public class FContractDAO extends GenericDAO<FContract, Integer> implements
		IFContractDAO {

	public FContractDAO() {
		super(FContract.class);
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateSailDate(final Integer voyaId, final Date voyaSailDate,
			final Date voyaShipDateF, final Date voyaShipDateT) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FContract t1 set t1.voyaSailDate = ? ,");
		sb.append("t1.voyaShipDateF = ? ,");
		sb.append("t1.voyaShipDateT = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.removed = 0 and t1.fconId in (");
		sb.append("select t2.fconId from FLoadingList t2 ");
		sb.append("where t2.removed = 0 and t2.voyaId = ? and t2.loliId in (");
		sb.append("select max(t3.loliId) from FLoadingList t3 ");
		sb.append("where t3.removed = 0 and t3.fconId in (");
		sb.append("select t4.fconId from FLoadingList t4 ");
		sb.append("where t4.removed = 0 and t4.voyaId = ?");
		sb.append(") group by t3.fconId");
		sb.append("))");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, voyaSailDate);
				query.setParameter(2, voyaShipDateF);
				query.setParameter(3, voyaShipDateT);
				query.setParameter(4, voyaId);
				query.setParameter(5, voyaId);
				return query.executeUpdate();
			}
		});
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	public void updateConsNoByConsId(final Integer consId, final String consNo) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FContract t1 set ");
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
	public void updateSailedFlag(final Integer voyaId, final Short voyaSailedFlag) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FContract t1 set t1.voyaSailedFlag = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.fconId in (select t2.fconId from FLoadingList t2 where t2.voyaId = ?) ");
		sb.append("and t1.removed = 0");
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
	public List<FContract> queryByVoyaId(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FContract.class;
		final Class t2 = FLoadingList.class;
		String joinSql = "t1.fconId = t2.fconId";
		List retList = complexQuery(conditions, propertyMap, "distinct t1",
				joinSql, t1, t2);
		return retList;
	}

	@Override
	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<Object> queryByVoyaIdAndCustId(final Integer voyaId, final Integer custId) {
		final Class t1 = FContract.class;
		final Class t2 = FLoadingList.class;
		String joinSql = "t1.fconId = t2.fconId";
		Map<String, Object> propertyMap = new HashMap<String, Object>();
		propertyMap.put("voyaId", voyaId);
		propertyMap.put("custId", custId);
		List retList = complexQuery(null, propertyMap, "t1.fconContractNo", joinSql, t1, t2);
		return retList;
	}
}
