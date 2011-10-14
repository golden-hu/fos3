package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFCargoDAO;
import haitai.fos.ffop.entity.table.FCargo;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class FCargoDAO extends GenericDAO<FCargo, Integer> implements
		IFCargoDAO {

	public FCargoDAO() {
		super(FCargo.class);
	}

	@SuppressWarnings("unchecked")
	public List<FCargo> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		Class t1 = FConsign.class;
		Class t2 = FCargo.class;
		String fieldSql = "t1,t2";
		String joinSql = "t1.consId = t2.consId";
		List retList = complexQuery(conditions, propertyMap, fieldSql, joinSql,
				t1, t2);
		return retList;
	}
}
