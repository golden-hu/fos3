package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPTemplateMapDAO;
import haitai.fos.sys.entity.table.PTemplateMap;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class PTemplateMapDAO extends GenericDAO<PTemplateMap, Integer> implements IPTemplateMapDAO {

	public PTemplateMapDAO() {
		super(PTemplateMap.class);
	}
}
