package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CPriceLine;

import java.util.List;
import java.util.Map;

public interface ICPriceLineDAO {
	public void save(CPriceLine entity);

	public List<CPriceLine> saveByRowAction(List<CPriceLine> entityList);

	public void delete(Integer id);

	public CPriceLine update(CPriceLine entity);

	public CPriceLine findById(Integer id);

	public List<CPriceLine> findByProperties(final Map<String, Object> propertyMap);
}
