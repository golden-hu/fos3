package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISPrItemDAO;
import haitai.fos.ffse.entity.table.SPrItem;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class SPrItemDAO extends GenericDAO<SPrItem, Integer> implements
		ISPrItemDAO {

	public SPrItemDAO() {
		super(SPrItem.class);
	}
}
