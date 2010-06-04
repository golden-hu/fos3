package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGIssueTypeDAO;
import haitai.fos.general.entity.table.GIssueType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GIssueTypeDAO extends GenericDAO<GIssueType, Integer> implements
		IGIssueTypeDAO {

	public GIssueTypeDAO() {
		super(GIssueType.class);
	}
}
