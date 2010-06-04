package haitai.fos.ws.entity.dao;

import java.util.List;
import java.util.Map;

import haitai.fos.ws.entity.idao.IWConsignDAO;
import haitai.fos.ws.entity.table.WConsign;
import haitai.fos.ws.entity.table.WUser;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;

import org.springframework.stereotype.Component;

@Component
public class WConsignDAO extends GenericDAO<WConsign, Integer> implements
		IWConsignDAO {

	public WConsignDAO() {
		super(WConsign.class);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = WConsign.class;
		final Class t2 = WUser.class;
		String joinSql = "t1.wusrId = t2.wusrId";
		List retList = complexQuery(conditions, propertyMap, "t1,t2", joinSql, t1,
				t2);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t1", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

}
