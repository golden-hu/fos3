package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFCustomsDeclarationDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FCustomsDeclaration;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class FCustomsDeclarationDAO extends
		GenericDAO<FCustomsDeclaration, Integer> implements
		IFCustomsDeclarationDAO {

	public FCustomsDeclarationDAO() {
		super(FCustomsDeclaration.class);
	}

	@SuppressWarnings("unchecked")
	public List<FCustomsDeclaration> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FConsign.class;
		final Class t2 = FCustomsDeclaration.class;
		String joinSql = "t1.consId = t2.consId";
		List retList = complexQuery(conditions, propertyMap, "t2", joinSql, t1,
				t2);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "t2", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
}
