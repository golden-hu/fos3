package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFTransDAO;
import haitai.fos.ffop.entity.table.FTrans;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FTransDAO extends GenericDAO<FTrans, Integer> implements
		IFTransDAO {

	public FTransDAO() {
		super(FTrans.class);
	}
}