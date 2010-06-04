package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFDoDAO;
import haitai.fos.ffop.entity.table.FDo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FDoService {
	private IFDoDAO dao = null;

	public IFDoDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFDoDAO dao) {
		this.dao = dao;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FDo> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
	
	@Transactional
	public void updateStatus(Map<String, Object> queryMap){
		Integer id = Integer.valueOf((String) queryMap.get("doId"));
		Short doStatus = Short.valueOf((String) queryMap.get("doStatus"));
		FDo entity = dao.findById(id);
		entity.setDoStatus(doStatus);
		dao.update(entity);
	}
}
