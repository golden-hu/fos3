package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPMessageSubscribeDAO;
import haitai.fos.sys.entity.idao.IPMessageTopicDAO;
import haitai.fos.sys.entity.table.PMessageSubscribe;
import haitai.fos.sys.entity.table.PMessageTopic;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;
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

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		for (Object obj : entityList) {
			if (obj instanceof PMessageTopic) {
				PMessageTopic entity = (PMessageTopic) obj;
				Integer oldId = entity.getMetoId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setMetoId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(dao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					PMessageTopic delEntity = dao.findById(entity.getMetoId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
				} else {
					throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				idMap.put(oldId, entity.getMetoId());
			}
		}
		for (Object obj : entityList) {
			if (obj instanceof PMessageSubscribe) {
				PMessageSubscribe entity = (PMessageSubscribe) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setMesuId(null);
					//前台传的id(负数)->后台生成id
					entity.setMetoId(NumberUtil.frontId2DbId(idMap, entity.getMetoId()));
					subscribeDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(subscribeDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					PMessageSubscribe delEntity = subscribeDao.findById(entity.getMesuId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					subscribeDao.update(delEntity);
				} else {
					throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
			}
		}
		messageService.clearSubscribeMap();
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PMessageTopic> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
