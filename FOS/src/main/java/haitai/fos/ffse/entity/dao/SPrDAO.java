package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISPrDAO;
import haitai.fos.ffse.entity.table.SPr;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class SPrDAO extends GenericDAO<SPr, Integer> implements ISPrDAO {

	public SPrDAO() {
		super(SPr.class);
	}
}
