package haitai.fos.exp.service;

import haitai.fos.exp.entity.idao.ITVoucherItemDAO;
import haitai.fos.exp.entity.table.TVoucherItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class TVoucherItemService {

	@Autowired
	private ITVoucherItemDAO dao;

	@Transactional
	public List<TVoucherItem> save(List<TVoucherItem> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<TVoucherItem> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

}
