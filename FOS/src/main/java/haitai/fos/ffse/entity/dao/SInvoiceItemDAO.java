package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISInvoiceItemDAO;
import haitai.fos.ffse.entity.table.SInvoice;
import haitai.fos.ffse.entity.table.SInvoiceItem;
import haitai.fos.ffse.entity.table.SPrItem;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class SInvoiceItemDAO extends GenericDAO<SInvoiceItem, Integer>
		implements ISInvoiceItemDAO {

	public SInvoiceItemDAO() {
		super(SInvoiceItem.class);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<SInvoiceItem> complexQueryByPrId(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = SInvoiceItem.class;
		final Class t2 = SPrItem.class;
		String joinSql = "t1.invoId = t2.invoId";
		List retList = complexQuery(conditions, propertyMap, "distinct t1",
				joinSql, t1, t2);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "distinct t1", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<SInvoiceItem> complexQueryByParent(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = SInvoiceItem.class;
		final Class t2 = SInvoice.class;
		String joinSql = "t1.invoId = t2.invoId";
		List retList = complexQuery(conditions, propertyMap, "t1",
				joinSql, t1, t2);
		return retList;
	}
}
