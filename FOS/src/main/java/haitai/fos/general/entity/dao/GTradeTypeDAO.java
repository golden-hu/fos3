package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGTradeTypeDAO;
import haitai.fos.general.entity.table.GTradeType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GTradeTypeDAO extends GenericDAO<GTradeType, Integer> implements
		IGTradeTypeDAO {

	public GTradeTypeDAO() {
		super(GTradeType.class);
	}
}
