package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGServiceItemDAO;
import haitai.fos.general.entity.table.GServiceItem;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GServiceItemDAO extends GenericDAO<GServiceItem, Integer> implements IGServiceItemDAO {

	public GServiceItemDAO() {
		super(GServiceItem.class);
	}
}
