package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SInterestRate;

import java.util.Map;
import java.util.List;

public interface ISInterestRateDAO {
	public void save(SInterestRate entity);

	public void delete(Integer id);

	public SInterestRate update(SInterestRate entity);

	public SInterestRate findById(Integer id);

	public List<SInterestRate> findByProperties(
			final Map<String, Object> propertyMap);
}
