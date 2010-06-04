package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFCustomsDocDAO;
import haitai.fos.ffop.entity.table.FCustomsDoc;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FCustomsDocDAO extends GenericDAO<FCustomsDoc, Integer> implements
		IFCustomsDocDAO {

	public FCustomsDocDAO() {
		super(FCustomsDoc.class);
	}
}
