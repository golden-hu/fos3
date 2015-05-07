package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GPaymentWay;

import java.util.List;
import java.util.Map;

public interface IGPaymentWayDAO {
	public void save(GPaymentWay entity);

	public List<GPaymentWay> saveByRowAction(List<GPaymentWay> entityList);

	public void delete(Integer id);

	public GPaymentWay update(GPaymentWay entity);

	public GPaymentWay findById(Integer id);

	public List<GPaymentWay> findByProperties(final Map<String, Object> propertyMap);
}
