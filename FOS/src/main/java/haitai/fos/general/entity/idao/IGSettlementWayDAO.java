package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GSettlementWay;

import java.util.Map;
import java.util.List;

public interface IGSettlementWayDAO {
	public void save(GSettlementWay entity);

	public void delete(Integer id);

	public GSettlementWay update(GSettlementWay entity);

	public GSettlementWay findById(Integer id);

	public List<GSettlementWay> findByProperties(
			final Map<String, Object> propertyMap);
}
