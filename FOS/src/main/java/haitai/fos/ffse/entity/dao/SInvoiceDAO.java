package haitai.fos.ffse.entity.dao;

import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffse.entity.idao.ISInvoiceDAO;
import haitai.fos.ffse.entity.table.SInvoice;
import haitai.fos.ffse.entity.table.SInvoiceItem;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;
import haitai.fw.exception.BusinessException;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.TimeUtil;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class SInvoiceDAO extends GenericDAO<SInvoice, Integer> implements
		ISInvoiceDAO {

	public SInvoiceDAO() {
		super(SInvoice.class);
	}

	@SuppressWarnings("unchecked")
	public void checkStatusById(final Integer id, final Short status) {
		StringBuffer sb = new StringBuffer();
		sb.append("update SInvoice t1 set t1.version = t1.version + 1, t1.invoStatus = :invoStatus ");
		if(ConstUtil.TrueShort.equals(status)) {
			sb.append(", t1.invoChecker = :invoChecker ");
			sb.append(", t1.invoCheckDate = :invoCheckDate ");
		}
		sb.append("where t1.invoId = :invoId and t1.compCode= :compCode");
		final String queryString = sb.toString();
		Integer affectRows = (Integer) getJpaTemplate().execute(
				new JpaCallback() {
					public Object doInJpa(EntityManager em)
							throws PersistenceException {
						Query query = em.createQuery(queryString);
						query.setParameter("invoStatus", status);
						query.setParameter("invoId", id);
						query.setParameter("compCode", SessionManager
								.getStringAttr(SessionKeyType.COMPCODE));
						if (ConstUtil.TrueShort.equals(status)) {
							query.setParameter("invoChecker", SessionManager
									.getStringAttr(SessionKeyType.USERNAME));
							query.setParameter("invoCheckDate", TimeUtil
									.getNow());
						}
						return Integer.valueOf(query.executeUpdate());
					}
				});
		if (affectRows != 1) {
			throw new BusinessException("record " + id + " not found");
		}
	}

	@SuppressWarnings("unchecked")
	public List<SInvoice> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		Class clazz = SInvoice.class;
		Class clazz2 = FConsign.class;
		Class clazz3 = SInvoiceItem.class;
		List retList = complexQuery(conditions, propertyMap, "distinct t1",
				"t1.invoId=t3.invoId and t2.consId=t3.consId", clazz, clazz2,
				clazz3);
		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "distinct t1",
				"t1.invoId=t3.invoId and t2.consId=t3.consId", clazz, clazz2,
				clazz3));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

}
