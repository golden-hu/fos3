package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGTradeTermDAO;
import haitai.fos.general.entity.table.GTradeTerm;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GTradeTermDAO extends GenericDAO<GTradeTerm, Integer> implements
		IGTradeTermDAO {

	public GTradeTermDAO() {
		super(GTradeTerm.class);
	}
}
