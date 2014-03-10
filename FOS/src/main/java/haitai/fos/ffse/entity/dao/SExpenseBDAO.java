package haitai.fos.ffse.entity.dao;

import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffse.entity.idao.ISExpenseBDAO;
import haitai.fos.ffse.entity.table.SExpenseB;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class SExpenseBDAO extends GenericDAO<SExpenseB, Integer> implements
		ISExpenseBDAO {

	public SExpenseBDAO() {
		super(SExpenseB.class);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<SExpenseB> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FConsign.class;
		final Class t2 = SExpenseB.class;
		String joinSql = "t1.consId = t2.consId";
		List retList = complexQuery(conditions, propertyMap, "t2", joinSql, t1,
				t2);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t2", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
}
