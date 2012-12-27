package haitai.fos.sys.entity.idao;

import java.util.Map;

public interface IPSerialNoDAO {
	public void init();

	public Long getNextSerialNo(final Map<String, Object> propertyMap);
	
	public Long getNextSerialNoByDate(final Map<String, Object> propertyMap);
}
