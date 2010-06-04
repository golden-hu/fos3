package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPTemplateDAO;
import haitai.fos.sys.entity.table.PTemplate;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class PTemplateDAO extends GenericDAO<PTemplate, Integer> implements
		IPTemplateDAO {

	public PTemplateDAO() {
		super(PTemplate.class);
	}
}
