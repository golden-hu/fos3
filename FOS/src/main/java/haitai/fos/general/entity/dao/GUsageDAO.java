package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGUsageDAO;
import haitai.fos.general.entity.table.GUsage;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GUsageDAO extends GenericDAO<GUsage, Integer> implements IGUsageDAO {

	public GUsageDAO() {
		super(GUsage.class);
	}
}
