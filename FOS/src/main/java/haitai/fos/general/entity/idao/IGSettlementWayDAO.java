package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GSettlementWay;

import java.util.List;
import java.util.Map;

public interface IGSettlementWayDAO {
	public void save(GSettlementWay entity);

	public List<GSettlementWay> saveByRowAction(List<GSettlementWay> entityList);

	public void delete(Integer id);

	public GSettlementWay update(GSettlementWay entity);

	public GSettlementWay findById(Integer id);

	public List<GSettlementWay> findByProperties(final Map<String, Object> propertyMap);
}
