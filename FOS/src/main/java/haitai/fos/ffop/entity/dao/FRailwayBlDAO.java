package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFRailwayBlDAO;
import haitai.fos.ffop.entity.table.FRailwayBl;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FRailwayBlDAO extends GenericDAO<FRailwayBl, Integer> implements
		IFRailwayBlDAO {

	public FRailwayBlDAO() {
		super(FRailwayBl.class);
	}
}
