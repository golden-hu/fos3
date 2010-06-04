package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FDo;

import java.util.Map;
import java.util.List;

public interface IFDoDAO {
	public void save(FDo entity);

	public void delete(Integer id);

	public FDo update(FDo entity);

	public FDo findById(Integer id);

	public List<FDo> findByProperties(final Map<String, Object> propertyMap);
}
