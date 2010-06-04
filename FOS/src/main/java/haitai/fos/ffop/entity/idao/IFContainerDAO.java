package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FContainer;

import java.util.List;
import java.util.Map;

public interface IFContainerDAO {
	public void save(FContainer entity);

	public void delete(Integer id);

	public FContainer update(FContainer entity);

	public FContainer findById(Integer id);

	public List<FContainer> findByProperties(Map<String, Object> propertyMap);

	public abstract List<Object> complexQueryByVoyaId(final Map<String, Object> propertyMap);

}