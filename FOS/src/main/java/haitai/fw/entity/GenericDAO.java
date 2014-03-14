package haitai.fw.entity;

import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MethodUtil;
import haitai.fw.util.RowAction;

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

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<T> findByProperties(final Map<String, Object> propertyMap) {
		List retList = query(propertyMap, this.persistentClass);
		String rowCount = String.valueOf(querySize(propertyMap, this.persistentClass));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<T> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap) {
		List retList = complexQuery(conditions, propertyMap, this.persistentClass);
		String rowCount = String.valueOf(complexQuerySize(conditions, propertyMap, this.persistentClass));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	public T findById(PK id) {
		T entity = getJpaTemplate().find(this.persistentClass, id);
		if (entity == null) {
			String msg = this.persistentClass + "' object with id '" + id + "' not found...";
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
				T newEntity = saveSingleByRowAction(entity);
				if (newEntity != null) {
					retList.add(newEntity);
				}
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	public T saveSingleByRowAction(T entity) {
		Method getPkMethod = MethodUtil.getPkMethod(entity);
		T retEntity = null;
		if (entity.getRowAction() == RowAction.N) {
			MethodUtil.doSetMethodNull(entity, getPkMethod.getName().substring(3));
			save(entity);
			retEntity = entity;
		} else if (entity.getRowAction() == RowAction.M) {
			retEntity = update(entity);
		} else if (entity.getRowAction() == RowAction.R) {
			T delEntity;
			try {
				delEntity = findById((PK) getPkMethod.invoke(entity));
			} catch (IllegalAccessException e) {
				throw new BusinessException("fw.unknown", e);
			} catch (InvocationTargetException e) {
				throw new BusinessException("fw.unknown", e);
			}
			delEntity.setRowAction(RowAction.R);
			MethodUtil.doSetMethod(delEntity, "Removed", Short.class, ConstUtil.TrueShort);
			update(delEntity);
		} else {
			throw new BusinessException("fw.row_action_null");
		}
		return retEntity;
	}
}
