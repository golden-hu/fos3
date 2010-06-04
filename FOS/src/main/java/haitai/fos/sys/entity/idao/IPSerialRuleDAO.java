package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PSerialRule;

import java.util.Map;
import java.util.List;

public interface IPSerialRuleDAO {
	public List<PSerialRule> findByProperties(
			final Map<String, Object> propertyMap);
}
