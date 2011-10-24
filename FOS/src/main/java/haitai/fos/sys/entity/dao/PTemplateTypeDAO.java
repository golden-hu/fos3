package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPTemplateTypeDAO;
import haitai.fos.sys.entity.table.PTemplateType;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PTemplateTypeDAO extends GenericDAO<PTemplateType, Integer> implements IPTemplateTypeDAO {

	public PTemplateTypeDAO() {
		super(PTemplateType.class);
	}
}
