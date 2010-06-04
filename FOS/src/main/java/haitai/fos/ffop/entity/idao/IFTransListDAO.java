package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FTransList;

import java.util.Map;
import java.util.List;

public interface IFTransListDAO {
	public void save(FTransList entity);

	public void delete(Integer id);

	public FTransList update(FTransList entity);

	public FTransList findById(Integer id);

	public List<FTransList> findByProperties(
			final Map<String, Object> propertyMap);
}
