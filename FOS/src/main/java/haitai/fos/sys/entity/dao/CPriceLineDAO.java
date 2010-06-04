package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICPriceLineDAO;
import haitai.fos.sys.entity.table.CPriceLine;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class CPriceLineDAO extends GenericDAO<CPriceLine, Integer> implements
		ICPriceLineDAO {

	public CPriceLineDAO() {
		super(CPriceLine.class);
	}
}
