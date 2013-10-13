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
import haitai.fw.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class FCustomsDeclarationService {
	@Autowired
	private IFCustomsDeclarationDAO dao;
	@Autowired
	private IFCustomsDocDAO docDao;
	@Autowired
	private IFCustomsEntryDAO entDao;
	@Autowired
	private IFConsignDAO consDao;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		Integer consId = null;
		Integer num = 0;
		Double weight = 0.0;
		Double netWeight = 0.0;
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		// handle parent first
		for (Object obj : entityList) { 
			if (obj instanceof FCustomsDeclaration) {
				FCustomsDeclaration entity = (FCustomsDeclaration) obj;
				Integer oldId = entity.getCudeId();
				if (entity.getRowAction() == RowAction.N) {
					entity.setCudeId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FCustomsDeclaration delEntity = dao.findById(entity.getCudeId());
					delEntity.setRowAction(RowAction.R);
					dao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				consId = entity.getConsId();
				num += Integer.parseInt(entity.getCudePackageNum());
				weight += Double.parseDouble(entity.getCudeGrossWeight());
				netWeight += Double.parseDouble(entity.getCudeNetWeight());
				idMap.put(oldId, entity.getCudeId());
			}
		}

		// handle child
		for (Object obj : entityList) {
			if (obj instanceof FCustomsDoc) {
				FCustomsDoc entity = (FCustomsDoc) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setCudoId(null);
					entity.setCudeId(NumberUtil.frontId2DbId(idMap, entity.getCudeId()));
					docDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(docDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FCustomsDoc delEntity = docDao.findById(entity.getCudoId());
					delEntity.setRowAction(RowAction.R);
					docDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}

			} else if (obj instanceof FCustomsEntry) {
				FCustomsEntry entity = (FCustomsEntry) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setCuenId(null);
					entity.setCudeId(NumberUtil.frontId2DbId(idMap, entity.getCudeId()));
					entDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(entDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FCustomsEntry delEntity = entDao.findById(entity.getCuenId());
					delEntity.setRowAction(RowAction.R);
					entDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		FConsign consign = consDao.findById(consId);
		consign.setConsTotalPackages(num);
		consign.setConsTotalGrossWeight(weight);
		consign.setConsTotalNetWeight(netWeight);
		consDao.update(consign);
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List query(Map queryMap) {
		List retList = new ArrayList();
		retList.addAll(dao.findByProperties(queryMap));
		if (queryMap.containsKey(ConstUtil.PARAM_EAGER)) {
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
					Short cudeDocStatus = Short.parseShort((String) queryMap.get("cudeDocStatus"));
					String cudeDocReceiver = (String) queryMap.get("cudeDocReceiver");
					entity.setCudeDocStatus(cudeDocStatus);
					entity.setCudeDocReceiver(cudeDocReceiver);
					entity.setCudeDocReleaseBy((Integer) SessionManager.getAttr(SessionKeyType.UID));
					entity.setCudeReleaseDate(new Date());

					// 还要更新委托状态
					IFConsignDAO consDao = SpringContextHolder.getBean("FConsignDAO");
					FConsign consign = consDao.findById(consId);
					consign.setConsStatusDocs(cudeDocStatus);
					consDao.update(consign);
				} else {
					Short cudeStatus = Short.parseShort((String) queryMap.get("cudeStatus"));
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
	public void updateDocStatus(Map<String, Object> queryMap) {
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
}
