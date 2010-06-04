package haitai.fosws.entity.dao;

import haitai.fosws.entity.idao.IWBlMDAO;
import haitai.fosws.entity.table.WBlM;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class WBlMDAO extends GenericDAO<WBlM, Integer> implements
		IWBlMDAO {

	public WBlMDAO() {
		super(WBlM.class);
	}
}
