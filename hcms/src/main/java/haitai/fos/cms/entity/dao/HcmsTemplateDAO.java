package haitai.fos.cms.entity.dao;

import haitai.fos.cms.entity.idao.IHcmsTemplateDAO;
import haitai.fos.cms.entity.table.HcmsTemplate;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class HcmsTemplateDAO extends GenericDAO<HcmsTemplate, Integer>
		implements IHcmsTemplateDAO {

	public HcmsTemplateDAO() {
		super(HcmsTemplate.class);
	}
}
