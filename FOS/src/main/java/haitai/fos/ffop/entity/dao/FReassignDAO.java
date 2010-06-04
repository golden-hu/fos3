package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFReassignDAO;
import haitai.fos.ffop.entity.table.FReassign;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FReassignDAO extends GenericDAO<FReassign, Integer> implements
		IFReassignDAO {

	public FReassignDAO() {
		super(FReassign.class);
	}
}
