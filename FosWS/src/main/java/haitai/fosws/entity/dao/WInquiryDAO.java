package haitai.fosws.entity.dao;

import haitai.fosws.entity.idao.IWInquiryDAO;
import haitai.fosws.entity.table.WInquiry;
import haitai.fosws.entity.table.WUser;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class WInquiryDAO extends GenericDAO<WInquiry, Integer> implements
		IWInquiryDAO {

	public WInquiryDAO() {
		super(WInquiry.class);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = WInquiry.class;
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
