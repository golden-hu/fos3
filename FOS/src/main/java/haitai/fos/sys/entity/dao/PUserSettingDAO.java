package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPUserSettingDAO;
import haitai.fos.sys.entity.table.PUserSetting;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PUserSettingDAO extends GenericDAO<PUserSetting, Integer> implements IPUserSettingDAO {

	public PUserSettingDAO() {
		super(PUserSetting.class);
	}
}
