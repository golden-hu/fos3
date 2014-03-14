package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCommissionItemDAO;
import haitai.fos.sys.entity.table.CCommissionItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class CCommissionItemService {
	@Autowired
	private ICCommissionItemDAO dao;

	@Transactional
	public List<CCommissionItem> save(List<CCommissionItem> vedCatList) {
		return dao.saveByRowAction(vedCatList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<CCommissionItem> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

}
