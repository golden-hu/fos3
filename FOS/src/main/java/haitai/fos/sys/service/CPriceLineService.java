package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICPriceLineDAO;
import haitai.fos.sys.entity.table.CPriceLine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class CPriceLineService {
	@Autowired
	private ICPriceLineDAO dao;

	@Transactional
	public List<CPriceLine> save(List<CPriceLine> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<CPriceLine> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
