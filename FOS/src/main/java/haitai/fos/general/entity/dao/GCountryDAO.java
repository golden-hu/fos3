package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGCountryDAO;
import haitai.fos.general.entity.table.GCountry;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GCountryDAO extends GenericDAO<GCountry, Integer> implements IGCountryDAO {

	public GCountryDAO() {
		super(GCountry.class);
	}
}
