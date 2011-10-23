package haitai.fos.exp.entity.dao;

import haitai.fos.exp.entity.idao.ITExportHistoryDAO;
import haitai.fos.exp.entity.table.TExportHistory;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class TExportHistoryDAO extends GenericDAO<TExportHistory, Integer> implements ITExportHistoryDAO {

	public TExportHistoryDAO() {
		super(TExportHistory.class);
	}
}
