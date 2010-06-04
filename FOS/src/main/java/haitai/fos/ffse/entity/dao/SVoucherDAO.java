package haitai.fos.ffse.entity.dao;

import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffse.entity.idao.ISVoucherDAO;
import haitai.fos.ffse.entity.table.SVoucher;
import haitai.fos.ffse.entity.table.SVoucherItem;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class SVoucherDAO extends GenericDAO<SVoucher, Integer> implements
		ISVoucherDAO {

	public SVoucherDAO() {
		super(SVoucher.class);
	}

	@SuppressWarnings("unchecked")
	public List<SVoucher> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		Class clazz = SVoucher.class;
		Class clazz2 = FConsign.class;
		Class clazz3 = SVoucherItem.class;
		List retList = complexQuery(conditions, propertyMap, "distinct t1",
				"t1.voucId=t3.voucId and t2.consId=t3.consId", clazz, clazz2,
				clazz3);
		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "distinct t1",
				"t1.voucId=t3.voucId and t2.consId=t3.consId", clazz, clazz2,
				clazz3));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	public Double getBalance(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		List retList = complexQuery(conditions, propertyMap, "sum(t1.voucFixAmount)",
				null, SVoucher.class);
		Double amount = new Double(0);
		if(retList.size() == 1) {
			amount = (Double) retList.get(0);
		}
		return amount;
	}
}
