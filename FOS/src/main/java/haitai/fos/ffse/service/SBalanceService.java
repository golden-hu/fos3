package haitai.fos.ffse.service;

import haitai.fos.ffse.entity.idao.ISBalanceDAO;
import haitai.fos.ffse.entity.table.SBalance;
import haitai.fw.util.RowAction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class SBalanceService {
	@Autowired
	private ISBalanceDAO dao;

	@Transactional
	public List<SBalance> save(List<SBalance> entityList) {
		for(SBalance b : entityList){
			b.setRowAction(RowAction.M);
		}
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SBalance> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
