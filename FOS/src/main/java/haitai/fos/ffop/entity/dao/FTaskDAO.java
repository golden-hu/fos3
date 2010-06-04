package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFTaskDAO;
import haitai.fos.ffop.entity.table.FTask;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class FTaskDAO extends GenericDAO<FTask, Integer> implements IFTaskDAO {

	public FTaskDAO() {
		super(FTask.class);
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public List<FTask> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FTask.class;
		String joinSql = "";
		List<FTask> retList = complexQuery(conditions, propertyMap,
				"t1", joinSql, t1);
		return retList;
	}
}
