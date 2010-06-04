package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SPrItem;

import java.util.Map;
import java.util.List;

/**
 * Interface for SPrItemDAO.
 * 
 * @author MyEclipse Persistence Tools
 */

public interface ISPrItemDAO {
	public void save(SPrItem entity);

	public void delete(Integer id);

	public SPrItem update(SPrItem entity);

	public SPrItem findById(Integer id);

	public List<SPrItem> findByProperties(
			final Map<String, Object> propertyMap);
}
