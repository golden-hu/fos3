package haitai.fos.exp.entity.dao;

import haitai.fos.exp.entity.idao.ITVoucherItemDAO;
import haitai.fos.exp.entity.table.TVoucherItem;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class TVoucherItemDAO extends GenericDAO<TVoucherItem, Integer> implements ITVoucherItemDAO {

	public TVoucherItemDAO() {
		super(TVoucherItem.class);
	}
}
