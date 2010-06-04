package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICSalesCommissionDAO;
import haitai.fos.sys.entity.table.CSalesCommission;
import haitai.fw.entity.GenericDAO;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

@Component
public class CSalesCommissionDAO extends GenericDAO<CSalesCommission, Integer>
		implements ICSalesCommissionDAO {

	public CSalesCommissionDAO() {
		super(CSalesCommission.class);
	}

	@SuppressWarnings("unchecked")
	public List queryAllCommission(final Map<String, Object> propertyMap) {
		final String year = (String) propertyMap.get("Y");
		final String month = (String) propertyMap.get("M");
		StringBuffer sb = new StringBuffer();
		sb.append("select t2.cons_sales_rep_id, ");
		sb.append("sum(if(t1.expe_type = 'R', t1.expe_total_amount * t1.expe_ex_rate, ");
		sb.append("-1 * t1.expe_total_amount * t1.expe_ex_rate)) as amount ");
		sb.append("from S_EXPENSE t1, F_CONSIGN t2 where ");
		sb.append("t1.cons_id = t2.cons_id  ");
		sb.append("and t2.cons_status_ar = 2  ");
		sb.append("and year(t2.cons_ar_write_off_date) = :year ");
		sb.append("and month(t2.cons_ar_write_off_date) = :month ");
		sb.append("group by t2.cons_sales_rep_id ");
		final String queryString = sb.toString();
		List retList = getJpaTemplate().executeFind(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createNativeQuery(queryString);
				query.setParameter("year", Integer.parseInt(year));
				query.setParameter("month", Integer.parseInt(month));
				return query.getResultList();
			}
		});
		return retList;
	}

	@SuppressWarnings("unchecked")
	public List queryCommissionDetail(final Map<String, Object> propertyMap) {
		final String year = (String) propertyMap.get("Y");
		final String month = (String) propertyMap.get("M");
		final String salesId = (String) propertyMap.get("sacoSalesId");
		StringBuffer sb = new StringBuffer();
		sb.append("select t2.cons_id, t2.cons_no, t2.cust_sname, t2.cons_sail_date, ");
		sb.append("sum(if(t1.expe_type = 'R', t1.expe_total_amount * t1.expe_ex_rate, ");
		sb.append("-1 * t1.expe_total_amount * t1.expe_ex_rate)) as amount ");
		sb.append("from S_EXPENSE t1, F_CONSIGN t2 where ");
		sb.append("t1.cons_id = t2.cons_id  ");
		sb.append("and t2.cons_status_ar = 2  ");
		sb.append("and year(t2.cons_ar_write_off_date) = :year ");
		sb.append("and month(t2.cons_ar_write_off_date) = :month ");
		sb.append("and t2.cons_sales_rep_id = :salesId ");
		sb.append("group by t2.cons_id, t2.cons_no, t2.cust_sname, t2.cons_sail_date ");
		final String queryString = sb.toString();
		List retList = getJpaTemplate().executeFind(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createNativeQuery(queryString);
				query.setParameter("year", Integer.parseInt(year));
				query.setParameter("month", Integer.parseInt(month));
				query.setParameter("salesId", Integer.parseInt(salesId));
				return query.getResultList();
			}
		});
		return retList;
	}
}
