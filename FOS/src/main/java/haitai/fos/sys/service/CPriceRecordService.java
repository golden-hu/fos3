package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICPriceRecordDAO;
import haitai.fos.sys.entity.table.CPriceRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class CPriceRecordService {
	@Autowired
	private ICPriceRecordDAO dao;

	@Transactional
	public List<CPriceRecord> save(List<CPriceRecord> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CPriceRecord> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
