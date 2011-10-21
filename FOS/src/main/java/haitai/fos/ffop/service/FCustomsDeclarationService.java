package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.idao.IFCustomsDeclarationDAO;
import haitai.fos.ffop.entity.idao.IFCustomsDocDAO;
import haitai.fos.ffop.entity.idao.IFCustomsEntryDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FCustomsDeclaration;
import haitai.fos.ffop.entity.table.FCustomsDoc;
import haitai.fos.ffop.entity.table.FCustomsEntry;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.SpringContextHolder;
import haitai.fw.util.StringUtil;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FCustomsDeclarationService {
	private IFCustomsDeclarationDAO dao = null;
	private IFCustomsDocDAO docDao = null;
	private IFCustomsEntryDAO entDao = null;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		// handle parent first
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FCustomsDeclaration) {
				FCustomsDeclaration entity = (FCustomsDeclaration) obj;
				Integer oldId = entity.getCudeId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setCudeId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(dao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					FCustomsDeclaration delEntity = dao.findById(entity.getCudeId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				idMap.put(oldId, entity.getCudeId());
			}
		}

		// handle child
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FCustomsDoc) {
				FCustomsDoc entity = (FCustomsDoc) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setCudoId(null);
					entity.setCudeId(NumberUtil.frontId2DbId(idMap, entity
							.getCudeId()));
					docDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(docDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					FCustomsDoc delEntity = docDao.findById(entity.getCudoId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					docDao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}

			}else if (obj instanceof FCustomsEntry) {
				FCustomsEntry entity = (FCustomsEntry) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setCuenId(null);
					entity.setCudeId(NumberUtil.frontId2DbId(idMap, entity
							.getCudeId()));
					entDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(entDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					FCustomsEntry delEntity = entDao.findById(entity.getCuenId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					entDao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}

			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List query(Map queryMap) {
		List retList = new ArrayList();
		retList.addAll(dao.findByProperties(queryMap));
		if(queryMap.containsKey(ConstUtil.PARAM_EAGER)){
			retList.addAll(queryDoc(queryMap));
			retList.addAll(queryEntry(queryMap));
		}
		return retList;
	}

	@Transactional
	public void updateStatus(Map<String, Object> queryMap) {
		Integer consId = Integer.parseInt((String) queryMap.get("consId"));
		String ids = (String) queryMap.get("cudeId");
		String[] idArray = ids.split(",");
		for (String id : idArray) {
			if (StringUtil.isNotBlank(id)) {
				FCustomsDeclaration entity = dao.findById(Integer.valueOf(id));
				if (queryMap.get("cudeStatus") == null) {
					Short cudeDocStatus = Short.parseShort((String) queryMap
							.get("cudeDocStatus"));
					String cudeDocReceiver = (String) queryMap
							.get("cudeDocReceiver");
					entity.setCudeDocStatus(cudeDocStatus);
					entity.setCudeDocReceiver(cudeDocReceiver);
					entity.setCudeDocReleaseBy((Integer) SessionManager
							.getAttr(SessionKeyType.UID));
					entity.setCudeReleaseDate(new Date());

					// 还要更新委托状态
					IFConsignDAO consDao = SpringContextHolder
							.getBean("FConsignDAO");
					FConsign consign = consDao.findById(consId);
					consign.setConsStatusDocs(cudeDocStatus);
					consDao.update(consign);
				} else {
					Short cudeStatus = Short.parseShort((String) queryMap
							.get("cudeStatus"));
					entity.setCudeStatus(cudeStatus);
				}
				dao.update(entity);
			}
		}
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FCustomsDoc> queryDoc(Map queryMap) {
		return docDao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FCustomsEntry> queryEntry(Map queryMap) {
		return entDao.findByProperties(queryMap);
	}

	@Transactional
	public void updateDocStatus(Map<String, Object> queryMap){
		Integer id = Integer.valueOf((String) queryMap.get("cudoId"));
		Short status = Short.valueOf((String) queryMap.get("cudoStatus"));
		FCustomsDoc entity = docDao.findById(id);
		entity.setCudoStatus(status);
		docDao.update(entity);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FCustomsDeclaration> complexQuery(List<FosQuery> conditions, Map queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}	

	public IFCustomsDeclarationDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFCustomsDeclarationDAO dao) {
		this.dao = dao;
	}

	public IFCustomsDocDAO getDocDao() {
		return docDao;
	}

	@Autowired
	public void setDocDao(IFCustomsDocDAO docDao) {
		this.docDao = docDao;
	}

	public IFCustomsEntryDAO getEntDao() {
		return entDao;
	}

	@Autowired
	public void setEntDao(IFCustomsEntryDAO entDao) {
		this.entDao = entDao;
	}

}
