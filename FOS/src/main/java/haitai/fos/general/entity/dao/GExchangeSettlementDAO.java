package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGExchangeSettlementDAO;
import haitai.fos.general.entity.table.GExchangeSettlement;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GExchangeSettlementDAO extends GenericDAO<GExchangeSettlement, Integer>
		implements IGExchangeSettlementDAO {

	public GExchangeSettlementDAO() {
		super(GExchangeSettlement.class);
	}
}
