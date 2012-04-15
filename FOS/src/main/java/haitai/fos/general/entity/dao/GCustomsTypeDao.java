package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGCustomsTypeDao;
import haitai.fos.general.entity.table.GCustomsType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GCustomsTypeDao extends GenericDAO<GCustomsType, Integer> implements IGCustomsTypeDao {

	public GCustomsTypeDao() {
		super(GCustomsType.class);
	}
}
