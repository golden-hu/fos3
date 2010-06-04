package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SVoucher;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface ISVoucherDAO {
	public void save(SVoucher entity);

	public void delete(Integer id);

	public SVoucher update(SVoucher entity);

	public SVoucher findById(Integer id);

	public List<SVoucher> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<SVoucher> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract Double getBalance(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);
}
