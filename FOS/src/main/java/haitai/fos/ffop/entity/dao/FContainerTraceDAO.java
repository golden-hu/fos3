package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFContainerTraceDAO;
import haitai.fos.ffop.entity.table.FContainerTrace;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;
@Component
public class FContainerTraceDAO extends GenericDAO<FContainerTrace, Integer> implements IFContainerTraceDAO {

	public FContainerTraceDAO() {
		super(FContainerTrace.class);
	}
}