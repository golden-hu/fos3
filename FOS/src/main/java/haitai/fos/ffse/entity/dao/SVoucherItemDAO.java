package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISVoucherItemDAO;
import haitai.fos.ffse.entity.table.SVoucher;
import haitai.fos.ffse.entity.table.SVoucherItem;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.TimeUtil;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

@Component
public class SVoucherItemDAO extends GenericDAO<SVoucherItem, Integer>
		implements ISVoucherItemDAO {

	public SVoucherItemDAO() {
		super(SVoucherItem.class);
	}

	@SuppressWarnings("unchecked")
	public List<SVoucherItem> complexQueryByParent(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = SVoucherItem.class;
		final Class t2 = SVoucher.class;
		String joinSql = "t1.voucId = t2.voucId";
		List retList = complexQuery(conditions, propertyMap, "t1", joinSql, t1,
				t2);
		return retList;
	}

	@SuppressWarnings("unchecked")
	public List complexQueryCust(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		StringBuffer sb = new StringBuffer();
		sb.append("select t1.custId, max(t2.consSailDate) ");
		sb.append("from SVoucherItem t1, FConsign t2 ");
		sb.append("where t1.createTime >= :fromTime and t1.createTime <= :toTime ");
		sb.append("and t1.compCode = :compCode ");
		sb.append("and t1.removed = 0 and t1.voitCancelFlag = 0");
		sb.append("group by t1.custId ");
		final String queryString = sb.toString();
		List retList = getJpaTemplate().executeFind(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter("fromTime", TimeUtil.getTodayStartTime());
				query.setParameter("toTime", TimeUtil.getTodayEndTime());
				query.setParameter("compCode", SessionManager
						.getStringAttr(SessionKeyType.COMPCODE));
				return query.getResultList();
			}
		});
		return retList;
	}

}
