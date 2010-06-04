package haitai.fos.sys.entity.idao;

import java.util.Map;

import haitai.fos.sys.entity.table.PUserSetting;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface IPUserSettingDAO {
	public void save(PUserSetting entity);

	public void delete(Integer id);

	public PUserSetting update(PUserSetting entity);

	public PUserSetting findById(Integer id);

	public List<PUserSetting> findByProperties(
			final Map<String, Object> propertyMap);

	public List<PUserSetting> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
