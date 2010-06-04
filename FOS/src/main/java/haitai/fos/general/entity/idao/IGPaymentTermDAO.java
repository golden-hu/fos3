package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GPaymentTerm;

import java.util.Map;
import java.util.List;

public interface IGPaymentTermDAO {
	public void save(GPaymentTerm entity);

	public void delete(Integer id);

	public GPaymentTerm update(GPaymentTerm entity);

	public GPaymentTerm findById(Integer id);

	public List<GPaymentTerm> findByProperties(
			final Map<String, Object> propertyMap);
}
