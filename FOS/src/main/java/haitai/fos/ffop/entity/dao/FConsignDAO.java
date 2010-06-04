package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.table.FBl;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FContainer;
import haitai.fos.sys.entity.table.PUser;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;
import haitai.fw.exception.BusinessException;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.TimeUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

@Component
public class FConsignDAO extends GenericDAO<FConsign, Integer> implements
		IFConsignDAO {

	public FConsignDAO() {
		super(FConsign.class);
	}

	@SuppressWarnings("unchecked")
	public void updateStatusById(final Integer id, final Short status) {
		StringBuffer sb = new StringBuffer();
		sb
				.append("update FConsign t1 set t1.consStatus = :consStatus, t1.version = t1.version + 1 where ");
		sb.append("t1.consId = :consId and t1.compCode= :compCode");
		final String queryString = sb.toString();
		Integer affectRows = (Integer) getJpaTemplate().execute(
				new JpaCallback() {
					public Object doInJpa(EntityManager em)
							throws PersistenceException {
						Query query = em.createQuery(queryString);
						query.setParameter("consStatus", status);
						query.setParameter("consId", id);
						query.setParameter("compCode", SessionManager
								.getStringAttr(SessionKeyType.COMPCODE));
						return Integer.valueOf(query.executeUpdate());
					}
				});
		if (affectRows != 1) {
			throw new BusinessException("record " + id + " not found");
		}
	}

	@SuppressWarnings("unchecked")
	public void updateStatusById(final Integer id, String statusName,
			final Short statusValue) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FConsign t1 set t1.");
		sb.append(statusName);
		sb.append(" = :consStatus, t1.version = t1.version + 1 where ");
		sb.append("t1.consId = :consId and t1.compCode= :compCode");
		final String queryString = sb.toString();
		Integer affectRows = (Integer) getJpaTemplate().execute(
				new JpaCallback() {
					public Object doInJpa(EntityManager em)
							throws PersistenceException {
						Query query = em.createQuery(queryString);
						query.setParameter("consStatus", statusValue);
						query.setParameter("consId", id);
						query.setParameter("compCode", SessionManager
								.getStringAttr(SessionKeyType.COMPCODE));
						return Integer.valueOf(query.executeUpdate());
					}
				});
		if (affectRows != 1) {
			throw new BusinessException("record " + id + " not found");
		}
	}

	@SuppressWarnings("unchecked")
	public void updateStatusBookById(final Integer id, final Short status) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FConsign t1 ");
		sb.append("set t1.consStatusBook = :consStatusBook, t1.version = t1.version + 1 where ");
		sb.append("t1.consId = :consId and t1.compCode= :compCode");
		final String queryString = sb.toString();
		Integer affectRows = (Integer) getJpaTemplate().execute(
				new JpaCallback() {
					public Object doInJpa(EntityManager em)
							throws PersistenceException {
						Query query = em.createQuery(queryString);
						query.setParameter("consStatusBook", status);
						query.setParameter("consId", id);
						query.setParameter("compCode", SessionManager
								.getStringAttr(SessionKeyType.COMPCODE));
						return Integer.valueOf(query.executeUpdate());
					}
				});
		if (affectRows != 1) {
			throw new BusinessException("record " + id + " not found");
		}
	}

	@SuppressWarnings("unchecked")
	public void updateMblStatusById(final Integer id, final Short mbl) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FConsign t1 ");
		sb.append("set t1.consStatusMbl = :consStatusMbl, t1.version = t1.version + 1");
		sb.append("where ");
		sb.append("t1.consId = :consId and t1.compCode= :compCode");
		final String queryString = sb.toString();
		Integer affectRows = (Integer) getJpaTemplate().execute(
				new JpaCallback() {
					public Object doInJpa(EntityManager em)
							throws PersistenceException {
						Query query = em.createQuery(queryString);
						query.setParameter("consStatusMbl", mbl);
						query.setParameter("consId", id);
						query.setParameter("compCode", SessionManager
								.getStringAttr(SessionKeyType.COMPCODE));
						return Integer.valueOf(query.executeUpdate());
					}
				});
		if (affectRows != 1) {
			throw new BusinessException("record " + id + " not found");
		}
	}

	@SuppressWarnings("unchecked")
	public void updateFblStatusById(final Integer id, final Short fbl) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FConsign t1 ");
		sb.append("set t1.consStatusFbl = :consStatusFbl, t1.version = t1.version + 1 where ");
		sb.append("t1.consId = :consId and t1.compCode= :compCode");
		final String queryString = sb.toString();
		Integer affectRows = (Integer) getJpaTemplate().execute(
				new JpaCallback() {
					public Object doInJpa(EntityManager em)
							throws PersistenceException {
						Query query = em.createQuery(queryString);
						query.setParameter("consStatusFbl", fbl);
						query.setParameter("consId", id);
						query.setParameter("compCode", SessionManager
								.getStringAttr(SessionKeyType.COMPCODE));
						return Integer.valueOf(query.executeUpdate());
					}
				});
		if (affectRows != 1) {
			throw new BusinessException("record " + id + " not found");
		}
	}

	@SuppressWarnings("unchecked")
	public List<FConsign> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		//权限管理
		String joinSql = "";
		PUser myself = (PUser) SessionManager.getAttr(SessionKeyType.USER);
		String uid = SessionManager.getAttr(SessionKeyType.UID).toString();
		if (ConstUtil.TrueShort.equals(myself.getUserAllViewFlag())) {
			;
		} else if (ConstUtil.TrueShort.equals(myself.getUserSalesFlag())
				&& ConstUtil.TrueShort.equals(myself.getUserOperatorFlag())) {
			joinSql += "(t1.consSalesRepId = " + uid
					+ " or t1.consOperatorId = " + uid + ") ";
		} else if (ConstUtil.TrueShort.equals(myself.getUserSalesFlag())) {
			joinSql += "t1.consSalesRepId = " + uid;
		} else if (ConstUtil.TrueShort.equals(myself.getUserOperatorFlag())) {
			joinSql += "t1.consOperatorId = " + uid;
		} else {
			joinSql += "t1.createBy = " + uid;	
		}
		Class clazz = FConsign.class;
		List retList = complexQuery(conditions, propertyMap, "t1", joinSql, clazz);
		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t1", joinSql, clazz));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<FConsign> complexQueryForWs(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		Class clazz = FConsign.class;
		List retList = complexQuery(conditions, propertyMap, "t1", "", clazz);
		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t1", "", clazz));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<FConsign> complexQueryTask(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		String sailedFlag = (String) propertyMap.get("voyaSailedFlag");
		String joinSql = "";
		if(ConstUtil.TrueStr.equals(sailedFlag)){
			joinSql += "t1.consSailDate < '" + TimeUtil.getDay() + "'";
		}else{
			joinSql += "(t1.consSailDate >= '" + TimeUtil.getDay()
					+ "' or t1.consSailDate is null)";
		}
		Class clazz = FConsign.class;
		List retList = complexQuery(conditions, propertyMap, "t1", joinSql, clazz);
		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t1", joinSql, clazz));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	@SuppressWarnings("unchecked")
	public List<FConsign> complexQueryCheck(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FConsign.class;
		StringBuffer sb = new StringBuffer();
		sb.append("t1");
		sb.append(", (select sum(e.expeTotalAmount*e.expeExRate)");
		sb.append(" from SExpense e where e.consId=t1.consId");
		sb.append(" and e.expeType='R' and e.removed='0') as sumR");
		sb.append(", (select sum(e.expeTotalAmount*e.expeExRate)");
		sb.append(" from SExpense e where e.consId=t1.consId");
		sb.append(" and e.expeType='P' and e.removed='0') as sumP");
		sb.append(", (select sum(e.expeTotalAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='R' and e.currCode='USD') as sumRUsd");
		sb.append(", (select sum(e.expeTotalAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='R' and e.currCode='CNY') as sumRCny");
		sb.append(", (select sum(e.expeTotalAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='P' and e.currCode='USD') as sumPUsd");
		sb.append(", (select sum(e.expeTotalAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='P' and e.currCode='CNY') as sumPCny");
		sb.append(", (select sum(e.expeInvoiceAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='R' and e.currCode='USD') as sumRUsdInvoice");
		sb.append(", (select sum(e.expeInvoiceAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='R' and e.currCode='CNY') as sumRCnyInvoice");
		sb.append(", (select sum(e.expeInvoiceAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='P' and e.currCode='USD') as sumPUsdInvoice");
		sb.append(", (select sum(e.expeInvoiceAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='P' and e.currCode='CNY') as sumPCnyInvoice");
		sb.append(", (select sum(e.expeWriteOffAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='R' and e.currCode='USD') as sumRUsdWriteOff");
		sb.append(", (select sum(e.expeWriteOffAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='R' and e.currCode='CNY') as sumRCnyWriteOff");
		sb.append(", (select sum(e.expeWriteOffAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='P' and e.currCode='USD') as sumPUsdWriteOff");
		sb.append(", (select sum(e.expeWriteOffAmount)");
		sb.append(" from SExpense e where e.consId=t1.consId and e.removed='0'");
		sb.append(" and e.expeType='P' and e.currCode='CNY') as sumPCnyWriteOff");
		String fieldSql = sb.toString();
		List retList = complexQuery(conditions, propertyMap, fieldSql,
				"", t1);
		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "distinct t1", "", t1));
		propertyMap.put(HttpHeader.ROWCOUNT, String.valueOf(rowCount));
		return retList;
	}

	/**
	 * 根据箱号查询委托
	 * 
	 * @param conditions
	 * @param propertyMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<FConsign> complexQueryByContNo(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FConsign.class;
		final Class t2 = FContainer.class;
		String joinSql = "t1.consId = t2.consId";
		List retList = complexQuery(conditions, propertyMap, "distinct t1",
				joinSql, t1, t2);
		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "count(distinct t1)", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, String.valueOf(rowCount));
		return retList;
	}

	@SuppressWarnings("unchecked")
	public List<FConsign> complexQueryStatusLock(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		Class clazz = FConsign.class;
		List retList = complexQuery(conditions, propertyMap, "t1", "", clazz);
		return retList;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Object> complexQueryOverDueSales(int dateNum) {
		String compCode = SessionManager.getStringAttr(SessionKeyType.COMPCODE);
		String dateDue = TimeUtil.addDate(-1 * dateNum);
		final Class t1 = FConsign.class;
		final Class t2 = FBl.class;
		StringBuffer sb = new StringBuffer();
		sb.append("t1.consId = t2.consId ");
		sb.append("and t1.consSalesRepId in (");
		sb.append("select distinct t3.consSalesRepId from FConsign t3 ");
		sb.append("where t3.consSailDate < '").append(dateDue).append("' ");
		sb.append("and t3.consStatusAr < 2 ");
		sb.append("and t3.compCode = '").append(compCode).append("' ");
		sb.append("and t3.removed = 0");
		sb.append(")");
		List retList = complexQuery(new ArrayList<FosQuery>(),
				new HashMap<String, Object>(),
				"t1.consSalesRepId, t1.consSalesRepName, t2.blNo", sb
						.toString(), t1, t2);
		return retList;
	}

	@SuppressWarnings("unchecked")
	public void updateVoyaName(final Integer voyaId, final String voyaName) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FConsign t1 set t1.voyaName = ?, t1.version = t1.version + 1 ");
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
	
	@SuppressWarnings("unchecked")
	public void updateVessName(final Integer vessId, final String vessName,
			final String vessNameCn) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FConsign t1 set t1.vessName = ?, t1.vessNameCn = ?, t1.version = t1.version + 1 ");
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
	
	@SuppressWarnings("unchecked")
	public void updateVessName(final Integer voyaId, final Integer newVessId,
			final String vessName, final String vessNameCn) {
		StringBuffer sb = new StringBuffer();
		sb.append("update FConsign t1 set t1.vessId = ?, t1.vessName = ?, ");
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