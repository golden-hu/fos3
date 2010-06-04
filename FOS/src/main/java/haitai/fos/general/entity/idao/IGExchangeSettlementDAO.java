package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GExchangeSettlement;

import java.util.Map;
import java.util.List;

public interface IGExchangeSettlementDAO {
	public void save(GExchangeSettlement entity);

	public void delete(Integer id);

	public GExchangeSettlement update(GExchangeSettlement entity);

	public GExchangeSettlement findById(Integer id);

	public List<GExchangeSettlement> findByProperties(
			final Map<String, Object> propertyMap);
}
