package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPMessageSubscribeDAO;
import haitai.fos.sys.entity.idao.IPMessageTopicDAO;
import haitai.fos.sys.entity.table.PMessageSubscribe;
import haitai.fos.sys.entity.table.PMessageTopic;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.RowAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PMessageTopicService {
	@Autowired
	private IPMessageTopicDAO dao;
	@Autowired
	private IPMessageSubscribeDAO subscribeDao;
	@Autowired
	private PMessageService messageService;

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		for (Object obj : entityList) {
			if (obj instanceof PMessageTopic) {
				PMessageTopic entity = (PMessageTopic) obj;
				Integer oldId = entity.getMetoId();
				if (entity.getRowAction() == RowAction.N) {
					entity.setMetoId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					PMessageTopic delEntity = dao.findById(entity.getMetoId());
					delEntity.setRowAction(RowAction.R);
					dao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				idMap.put(oldId, entity.getMetoId());
			}
		}
		for (Object obj : entityList) {
			if (obj instanceof PMessageSubscribe) {
				PMessageSubscribe entity = (PMessageSubscribe) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setMesuId(null);
					//前台传的id(负数)->后台生成id
					entity.setMetoId(NumberUtil.frontId2DbId(idMap, entity.getMetoId()));
					subscribeDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(subscribeDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					PMessageSubscribe delEntity = subscribeDao.findById(entity.getMesuId());
					delEntity.setRowAction(RowAction.R);
					subscribeDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		messageService.clearSubscribeMap();
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PMessageTopic> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
