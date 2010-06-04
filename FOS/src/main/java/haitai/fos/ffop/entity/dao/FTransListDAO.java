package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFTransListDAO;
import haitai.fos.ffop.entity.table.FTransList;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FTransListDAO extends GenericDAO<FTransList, Integer> implements
		IFTransListDAO {

	public FTransListDAO() {
		super(FTransList.class);
	}
}
