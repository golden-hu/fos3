package haitai.fos.exp.service;

import haitai.fos.exp.entity.idao.ITVoucherDAO;
import haitai.fos.exp.entity.table.TVoucher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class TVoucherService {

	@Autowired
	private ITVoucherDAO dao;

	@Transactional
	public List<TVoucher> save(List<TVoucher> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<TVoucher> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

}
