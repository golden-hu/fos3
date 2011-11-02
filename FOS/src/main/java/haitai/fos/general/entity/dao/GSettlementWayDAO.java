package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGSettlementWayDAO;
import haitai.fos.general.entity.table.GSettlementWay;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GSettlementWayDAO extends GenericDAO<GSettlementWay, Integer> implements IGSettlementWayDAO {

	public GSettlementWayDAO() {
		super(GSettlementWay.class);
	}
}
