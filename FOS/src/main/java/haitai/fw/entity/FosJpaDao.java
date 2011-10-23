package haitai.fw.entity;

import haitai.fw.util.ConstUtil;
import haitai.fw.util.DaoUtil;
import haitai.fw.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.JpaCallback;
import org.springframework.orm.jpa.support.JpaDaoSupport;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceException;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public abstract class FosJpaDao extends JpaDaoSupport {
	@SuppressWarnings("unchecked")
	protected List query(final Map<String, Object> propertyMap, final Class clazz) {
		StringBuffer sb = new StringBuffer();
		sb.append("select t1 from ").append(clazz.getSimpleName()).append(" t1 where ");
		DaoUtil.buildSql(propertyMap, clazz, sb, false);
		final String queryString = sb.toString();
		return getJpaTemplate().executeFind(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				DaoUtil.setParameters(propertyMap, clazz, query, false);
				return query.getResultList();
			}
		});
	}

	@SuppressWarnings("unchecked")
	protected Long querySize(final Map<String, Object> propertyMap, final Class clazz) {
		StringBuffer sb = new StringBuffer();
		sb.append("select count(t1) from ").append(clazz.getSimpleName()).append(" t1 where ");
		DaoUtil.buildSql(propertyMap, clazz, sb, true);
		final String queryString = sb.toString();
		return (Long) getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				DaoUtil.setParameters(propertyMap, clazz, query, true);
				return query.getSingleResult();
			}
		});
	}

	@SuppressWarnings("unchecked")
	protected List complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap,
								final Class clazz) {
		return complexQuery(conditions, propertyMap, "t1", "", clazz);
	}

	@SuppressWarnings("unchecked")
	protected Long complexQuerySize(final List<FosQuery> conditions, final Map<String, Object> propertyMap,
									final Class clazz) {
		return complexQuerySize(conditions, propertyMap, "t1", "", clazz);
	}

	@SuppressWarnings("unchecked")
	protected List complexQuery(final Map<String, Object> propertyMap, String fieldSql, String joinSql,
								final Class... clazz) {
		return complexQuery(null, propertyMap, fieldSql, joinSql, clazz);
	}

	@SuppressWarnings("unchecked")
	protected Long complexQuerySize(final Map<String, Object> propertyMap, String fieldSql, String joinSql,
									final Class... clazz) {
		return complexQuerySize(null, propertyMap, fieldSql, joinSql, clazz);
	}

	@SuppressWarnings("unchecked")
	protected List complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap,
								String fieldSql, String joinSql, final Class... clazz) {
		final List<FosQuery> finalConditions;
		finalConditions = plusMap2Conditions(conditions, propertyMap);
		StringBuffer sb = new StringBuffer();
		int i = 1;
		if (StringUtil.isBlank(fieldSql)) {
			fieldSql = "t1";
		}
		if (joinSql == null) {
			joinSql = "";
		}
		sb.append("select ").append(fieldSql).append(" from ");
		for (Class t : clazz) {
			sb.append(t.getSimpleName()).append(" t").append(i).append(",");
			i++;
		}
		sb.deleteCharAt(sb.length() - 1);
		sb.append(" where ").append(joinSql);
		DaoUtil.buildSql(finalConditions, propertyMap, sb, false, clazz);

		final String queryString = sb.toString();
		return getJpaTemplate().executeFind(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				DaoUtil.setParameters(finalConditions, propertyMap, query, false, clazz);
				return query.getResultList();
			}
		});
	}

	@SuppressWarnings("unchecked")
	protected Long complexQuerySize(final List<FosQuery> conditions, final Map<String, Object> propertyMap,
									String fieldSql, String joinSql, final Class... clazz) {
		final List<FosQuery> finalConditions;
		finalConditions = plusMap2Conditions(conditions, propertyMap);
		StringBuffer sb = new StringBuffer();
		int i = 1;
		if (StringUtil.isBlank(fieldSql)) {
			fieldSql = "t1";
		}
		if (joinSql == null) {
			fieldSql = "";
		}
		sb.append("select count(").append(fieldSql).append(") from ");
		for (Class t : clazz) {
			sb.append(t.getSimpleName()).append(" t").append(i).append(",");
			i++;
		}
		sb.deleteCharAt(sb.length() - 1);
		sb.append(" where ").append(joinSql);
		DaoUtil.buildSql(finalConditions, propertyMap, sb, true, clazz);

		final String queryString = sb.toString();
		return (Long) getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				DaoUtil.setParameters(finalConditions, propertyMap, query, true, clazz);
				return query.getSingleResult();
			}
		});
	}

	private List<FosQuery> plusMap2Conditions(final List<FosQuery> conditions, final Map<String,
			Object> propertyMap) {
		final List<FosQuery> finalConditions;
		if (conditions == null) {
			finalConditions = new ArrayList<FosQuery>();
		} else {
			finalConditions = conditions;
		}
		if (propertyMap != null) {
			for (String key : propertyMap.keySet()) {
				FosQuery field = new FosQuery(key, ConstUtil.SQL_OP_EQUAL, propertyMap
						.get(key).toString());
				if (!finalConditions.contains(field)) {
					finalConditions.add(field);
				}
			}
		}
		return finalConditions;
	}

	@Autowired
	public void setEmf(EntityManagerFactory emf) {
		setEntityManagerFactory(emf);
	}
}
