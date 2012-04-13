package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFCustomsTypeDao;
import haitai.fos.ffop.entity.table.FCustomesType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FCustomsTypeDao extends GenericDAO<FCustomesType, Integer> implements IFCustomsTypeDao {

	public FCustomsTypeDao() {
		super(FCustomesType.class);
	}
}
