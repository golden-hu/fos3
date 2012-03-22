package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPCommentsDAO;
import haitai.fos.sys.entity.table.PComments;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PCommentsDAO extends GenericDAO<PComments, Integer> implements IPCommentsDAO {

	public PCommentsDAO() {
		super(PComments.class);
	}
}
