package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPSerialNoDAO;
import haitai.fos.sys.entity.table.PSerialNo;
import haitai.fw.entity.GenericDAO;
import haitai.fw.util.DaoUtil;

import java.math.BigInteger;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

@Component("PSerialNoDAO")
public class PSerialNoDAO extends GenericDAO<PSerialNo, Integer> implements
		IPSerialNoDAO {

	public PSerialNoDAO() {
		super(PSerialNo.class);
	}
	
	@SuppressWarnings("unchecked")
	public List<PSerialNo> findByProperties(
			final Map<String, Object> propertyMap) {
		List retList = query(propertyMap, PSerialNo.class);
		return retList;
	}

	@SuppressWarnings("unchecked")
	public Long getNextSerialNo(final Map<String, Object> propertyMap) {
		StringBuffer sb = new StringBuffer();
		sb.append("insert into P_SERIAL_NO");
		sb.append(" (seru_id, seru_code, comp_code,");
		sb.append(" seno_suffix,seno_current_no, seno_expire)");
		sb.append(" values(:seruId, :seruCode, :compCode,");
		sb.append(" :senoSuffix, :senoCurrentNo, :senoExpire)");
		sb.append(" on duplicate key update");
		sb.append(" seno_current_no = last_insert_id(seno_current_no + 1) ");
		final String queryString = sb.toString();
		return (Long) getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createNativeQuery(queryString);
				DaoUtil.setParameters(propertyMap, PSerialNo.class, query, false);
				int affectRows = query.executeUpdate();
				Long id = null;
				// add new record(not update), affectRows = 1; update the
				// record, affectRows=3
				if (affectRows == 1) {
					id = (Long) propertyMap.get("senoCurrentNo");
				} else {
					query = em.createNativeQuery("select last_insert_id()");
					BigInteger bigId = (BigInteger) query.getSingleResult();
					id = bigId.longValue();
				}
				return id;
			}
		});
	}

	@SuppressWarnings("unchecked")
	public void init() {
		StringBuffer sb = new StringBuffer();
		sb.append("delete from P_SERIAL_NO p");
		sb.append(" where p.seno_expire <= now()");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createNativeQuery(queryString);
				query.executeUpdate();
				return null;
			}
		});
	}
}
