package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGCurrencyDAO;
import haitai.fos.general.entity.table.GCurrency;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GCurrencyDAO extends GenericDAO<GCurrency, Integer> implements IGCurrencyDAO {

	public GCurrencyDAO() {
		super(GCurrency.class);
	}
}
