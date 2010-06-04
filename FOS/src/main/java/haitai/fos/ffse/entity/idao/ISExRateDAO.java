package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SExRate;

import java.util.Map;
import java.util.List;

/**
 * Interface for SExRateDAO.
 * 
 * @author MyEclipse Persistence Tools
 */

public interface ISExRateDAO {
	public void save(SExRate entity);

	public void delete(Integer id);

	public SExRate update(SExRate entity);

	public SExRate findById(Integer id);

	public List<SExRate> findByProperties(
			final Map<String, Object> propertyMap);
}
