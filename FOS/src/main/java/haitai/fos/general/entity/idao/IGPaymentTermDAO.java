package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GPaymentTerm;

import java.util.List;
import java.util.Map;

public interface IGPaymentTermDAO {
	public void save(GPaymentTerm entity);

	public List<GPaymentTerm> saveByRowAction(List<GPaymentTerm> entityList);

	public void delete(Integer id);

	public GPaymentTerm update(GPaymentTerm entity);

	public GPaymentTerm findById(Integer id);

	public List<GPaymentTerm> findByProperties(final Map<String, Object> propertyMap);
}
