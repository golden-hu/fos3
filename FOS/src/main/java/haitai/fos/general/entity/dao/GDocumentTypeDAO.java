package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGDocumentTypeDAO;
import haitai.fos.general.entity.table.GDocumentType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GDocumentTypeDAO extends GenericDAO<GDocumentType, Integer> implements IGDocumentTypeDAO {

	public GDocumentTypeDAO() {
		super(GDocumentType.class);
	}
}
