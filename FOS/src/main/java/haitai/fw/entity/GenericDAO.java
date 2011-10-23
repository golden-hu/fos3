package haitai.fw.entity;

import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.MethodUtil;

import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
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

	public List<T> saveByRowAction(List<T> entityList) {
		List<T> retList = new ArrayList<T>();
		if (entityList != null) {
			for (T entity : entityList) {
				T newEntity = saveByRowAction(entity);
				if (newEntity != null) {
					retList.add(newEntity);
				}
			}
		}
		return retList;
	}

	public T saveByRowAction(T entity) {
		Method pkMethod = MethodUtil.getPkMethod(entity);
		T retEntity = null;
		if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
			save(entity);
			retEntity = entity;
		} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
			retEntity = update(entity);
		} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
			T delEntity;
			try {
				delEntity = findById((PK) pkMethod.invoke(entity));
			} catch (IllegalAccessException e) {
				throw new BusinessException(MessageUtil.FW_ERROR_UNKNOWN, e);
			} catch (InvocationTargetException e) {
				throw new BusinessException(MessageUtil.FW_ERROR_UNKNOWN, e);
			}
			delEntity.setRowAction(ConstUtil.ROW_R);
			update(delEntity);
		} else {
			throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
		}
		return retEntity;
	}
}
