package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFContainerCargoDAO;
import haitai.fos.ffop.entity.table.FContainerCargo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class FContainerCargoService {
	@Autowired
	private IFContainerCargoDAO dao;

	@Transactional
	public List<FContainerCargo> save(List<FContainerCargo> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FContainerCargo> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
