package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGShippingLineDAO;
import haitai.fos.general.entity.table.GShippingLine;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GShippingLineDAO extends GenericDAO<GShippingLine, Integer> implements IGShippingLineDAO {

	public GShippingLineDAO() {
		super(GShippingLine.class);
	}
}
