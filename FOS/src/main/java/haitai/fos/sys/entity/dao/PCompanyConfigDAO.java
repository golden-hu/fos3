package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPCompanyConfigDAO;
import haitai.fos.sys.entity.table.PCompanyConfig;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class PCompanyConfigDAO extends GenericDAO<PCompanyConfig, Integer>
		implements IPCompanyConfigDAO {

	public PCompanyConfigDAO() {
		super(PCompanyConfig.class);
	}
}
