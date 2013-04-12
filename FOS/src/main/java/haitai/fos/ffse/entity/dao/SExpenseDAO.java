package haitai.fos.ffse.entity.dao;

import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffse.entity.idao.ISExpenseDAO;
import haitai.fos.ffse.entity.table.SExpense;
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
public class SExpenseDAO extends GenericDAO<SExpense, Integer> implements ISExpenseDAO {

	public SExpenseDAO() {
		super(SExpense.class);
	}

	@SuppressWarnings("unchecked")
	public List complexQueryInvoiceCreate(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = SExpense.class;
		StringBuffer sb = new StringBuffer();
		sb.append(" t1.expeInvoiceStatus != 2 ");
		String joinSql = sb.toString();
		List retList = complexQuery(conditions, propertyMap, "t1", joinSql, t1);
		return retList;
	}

	@SuppressWarnings("unchecked")
	public List complexQueryWriteOff(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = SExpense.class;
		StringBuffer sb = new StringBuffer();
		sb.append(" (t1.expeWriteOffStatus = '0'  or ");
		sb.append("t1.expeWriteOffStatus = '1') and ");
		sb.append(" (t1.expeInvoiceStatus = '1'  or ");
		sb.append("t1.expeInvoiceStatus = '2') ");
		String joinSql = sb.toString();
		List retList = complexQuery(conditions, propertyMap, "t1", joinSql, t1);
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	public List<SExpense> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FConsign.class;
		final Class t2 = SExpense.class;
		String joinSql = "t1.consId = t2.consId and t2.removed=0";
		List retList = complexQuery(conditions, propertyMap, "t2", joinSql, t1,
				t2);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t2", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	public List<SExpense> complexQuerySingle(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = SExpense.class;
		List retList = complexQuery(conditions, propertyMap, "t1","", t1);
		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t1", "", t1));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	public List<SExpense> complexQueryRelease(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = SExpense.class;
		final Class t2 = FConsign.class;
		String joinSql = "t1.consId = t2.consId";
		List retList = complexQuery(conditions, propertyMap, "t1", joinSql, t1,
				t2);
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public void updateConsNoByConsId(final Integer consId, final String consNo) {
		StringBuffer sb = new StringBuffer();
		sb.append("update SExpense t1 set ");
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
