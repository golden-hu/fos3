package haitai.fw.entity;

import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public class GenericDAO<T extends BaseDomain, PK extends Serializable> extends FosJpaDao {
	protected final FosLogger logger = new FosLogger(getClass());
	private Class<T> persistentClass;

	public GenericDAO(final Class<T> persistentClass) {
		this.persistentClass = persistentClass;
	}

	@SuppressWarnings("unchecked")
	public List<T> findAll() {
		return getJpaTemplate().find("from " + this.persistentClass.getName());
	}

	@SuppressWarnings("unchecked")
	public List<T> findByProperties(final Map<String, Object> propertyMap) {
		List retList = query(propertyMap, this.persistentClass);
		String rowCount = String.valueOf(querySize(propertyMap, this.persistentClass));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	@SuppressWarnings("unchecked")
	public List<T> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap) {
		List retList = complexQuery(conditions, propertyMap, this.persistentClass);
		String rowCount = String.valueOf(complexQuerySize(conditions, propertyMap, this.persistentClass));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	public T findById(PK id) {
		T entity = getJpaTemplate().find(this.persistentClass, id);
		if (entity == null) {
			String msg = "Uh oh, '" + this.persistentClass + "' object with id '" + id + "' not found...";
			logger.warn(msg);
			throw new BusinessException(msg);
		}
		return entity;
	}

	public boolean exists(PK id) {
		T entity = getJpaTemplate().find(this.persistentClass, id);
		return entity != null;
	}

	public void save(T object) {
		getJpaTemplate().persist(object);
	}

	public T update(T object) {
		return getJpaTemplate().merge(object);
	}

	public void delete(PK id) {
		getJpaTemplate().remove(this.findById(id));
	}
}
