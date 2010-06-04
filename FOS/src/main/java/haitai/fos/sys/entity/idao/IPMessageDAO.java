package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PMessage;

import java.util.Map;
import java.util.List;

public interface IPMessageDAO {
	public void save(PMessage entity);

	public void delete(Long id);

	public PMessage update(PMessage entity);

	public PMessage findById(Long id);

	public List<PMessage> findByProperties(
			final Map<String, Object> propertyMap);
	
	public PMessage updateSendFlag(PMessage entity);

	public abstract List<PMessage> queryOwn(Map<String, Object> propertyMap);
}
