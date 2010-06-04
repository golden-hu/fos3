package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICPriceRecordDAO;
import haitai.fos.sys.entity.table.CPriceRecord;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class CPriceRecordDAO extends GenericDAO<CPriceRecord, Integer>
		implements ICPriceRecordDAO {

	public CPriceRecordDAO() {
		super(CPriceRecord.class);
	}
}
