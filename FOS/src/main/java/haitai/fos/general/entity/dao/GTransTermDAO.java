package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGTransTermDAO;
import haitai.fos.general.entity.table.GTransTerm;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GTransTermDAO extends GenericDAO<GTransTerm, Integer> implements IGTransTermDAO {

	public GTransTermDAO() {
		super(GTransTerm.class);
	}
}
