package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FTrans;

import java.util.List;
import java.util.Map;

public interface IFTransDAO {
	public void save(FTrans entity);

	public void delete(Integer id);

	public FTrans update(FTrans entity);

	public FTrans findById(Integer id);

	public List<FTrans> findByProperties(final Map<String, Object> propertyMap);
}