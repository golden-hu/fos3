package haitai.fos.exp.entity.dao;

import haitai.fos.exp.entity.idao.ITVoucherDAO;
import haitai.fos.exp.entity.table.TVoucher;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class TVoucherDAO extends GenericDAO<TVoucher, Integer> implements ITVoucherDAO {

	public TVoucherDAO() {
		super(TVoucher.class);
	}
}
