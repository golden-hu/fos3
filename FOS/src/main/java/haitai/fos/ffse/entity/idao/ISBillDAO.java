package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SBill;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface ISBillDAO {
	public void save(SBill entity);

	public void delete(Integer id);

	public SBill update(SBill entity);

	public SBill findById(Integer id);

	public List<SBill> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<SBill> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
