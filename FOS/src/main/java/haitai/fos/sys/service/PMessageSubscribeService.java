package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPMessageSubscribeDAO;
import haitai.fos.sys.entity.table.PMessageSubscribe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PMessageSubscribeService {
	@Autowired
	private IPMessageSubscribeDAO dao;
	@Autowired
	private PMessageService messageService;

	@Transactional
	public List<PMessageSubscribe> save(List<PMessageSubscribe> entityList) {
		List<PMessageSubscribe> retList = dao.saveByRowAction(entityList);
		messageService.clearSubscribeMap();
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PMessageSubscribe> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
