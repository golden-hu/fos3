package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SPr;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

/**
 * Interface for SPrDAO.
 * 
 * @author MyEclipse Persistence Tools
 */

public interface ISPrDAO {
	public void save(SPr entity);

	public void delete(Integer id);

	public SPr update(SPr entity);

	public SPr findById(Integer id);

	public List<SPr> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<SPr> complexQuery(final List<FosQuery> conditions, 
			final Map<String, Object> propertyMap);
}
