package haitai.fos.ws.entity.dao;

import haitai.fos.ws.entity.idao.IWBlMDAO;
import haitai.fos.ws.entity.table.WBlM;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class WBlMDAO extends GenericDAO<WBlM, Integer> implements
		IWBlMDAO {

	public WBlMDAO() {
		super(WBlM.class);
	}
}
