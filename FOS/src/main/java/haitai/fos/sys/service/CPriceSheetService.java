package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICPriceLineDAO;
import haitai.fos.sys.entity.idao.ICPriceRecordDAO;
import haitai.fos.sys.entity.idao.ICPriceSheetDAO;
import haitai.fos.sys.entity.table.CPriceLine;
import haitai.fos.sys.entity.table.CPriceRecord;
import haitai.fos.sys.entity.table.CPriceSheet;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;
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
public class CPriceSheetService {
	private ICPriceSheetDAO dao = null;
	private ICPriceLineDAO lineDao = null;
	private ICPriceRecordDAO recordDao = null;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		Map<Integer, Integer> idMap2 = new HashMap<Integer, Integer>();
		// handle parent first
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof CPriceSheet) {
				CPriceSheet entity = (CPriceSheet) obj;
				Integer oldId = entity.getPrshId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setPrshId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(dao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					CPriceSheet delEntity = dao.findById(entity.getPrshId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				idMap.put(oldId, entity.getPrshId());
			}
		}

		// handle child
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof CPriceLine) {
				CPriceLine entity = (CPriceLine) obj;
				Integer oldId = entity.getPrliId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setPrliId(null);
					entity.setPrshId(NumberUtil.frontId2DbId(idMap, entity
							.getPrshId()));
					lineDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(lineDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					CPriceLine delEntity = lineDao.findById(entity.getPrliId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					lineDao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}			
				idMap2.put(oldId, entity.getPrliId());
			}
		}
		
		// handle child's child
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof CPriceRecord) {
				CPriceRecord entity = (CPriceRecord) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setPrreId(null);
					entity.setPrshId(NumberUtil.frontId2DbId(idMap, entity
							.getPrshId()));
					entity.setPrliId(NumberUtil.frontId2DbId(idMap2, entity
							.getPrliId()));
					recordDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(recordDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					CPriceRecord delEntity = recordDao.findById(entity.getPrreId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					recordDao.update(delEntity);
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
	public List<CPriceSheet> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQuery(List<FosQuery> conditions, Map queryMap) {
		List<CPriceRecord> retList = new ArrayList<CPriceRecord>();
		List objList = dao.complexQuery(conditions, queryMap);
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				CPriceSheet sheet = (CPriceSheet) objArray[0];
				CPriceLine line = (CPriceLine) objArray[1];
				CPriceRecord record = (CPriceRecord) objArray[2];
				//需要把两个主表的字段, 复制到子表record上
				//sheet -> record
				record.setPrshVendorName(sheet.getPrshVendorName());
				record.setPrshCarrierName(sheet.getPrshCarrierName());
				record.setPrshBizType(sheet.getPrshBizType());
				record.setPrshContractNo(sheet.getPrshContractNo());
				record.setPrshPolEn(sheet.getPrshPolEn());
				record.setShliName(sheet.getShliName());
				record.setVessName(sheet.getVessName());
				record.setVoyaName(sheet.getVoyaName());
				if(sheet.getPrshStartDate() != null){
					record.setPrshStartDate((Date) sheet.getPrshStartDate().clone());
				}
				if(sheet.getPrshEndDate() != null){
					record.setPrshEndDate((Date) sheet.getPrshEndDate().clone());
				}
				record.setPrshRemarks(sheet.getPrshRemarks());
				record.setPrshStatus(sheet.getPrshStatus());
				//line -> record
				record.setPrliCountryDName(line.getPrliCountryDName());
				record.setPrliPodEn(line.getPrliPodEn());
				record.setPrliCountryTName(line.getPrliCountryTName());
				record.setPrliPotEn(line.getPrliPotEn());
				record.setCaclName(line.getCaclName());
				record.setPateName(line.getPateName());
				record.setTranName(line.getTranName());
				record.setPrliShipDate(line.getPrliShipDate());
				record.setPrliCompositeFlag(line.getPrliCompositeFlag());
				record.setPrliDuration(line.getPrliDuration());
				record.setPrliRemarks(line.getPrliRemarks());
								
				retList.add(record);
			}
		}
		return retList;
	}	
	
	public void updateStatus(Map<String, Object> queryMap){
		String ids = (String) queryMap.get("prshId");
		String[] idArray = ids.split(",");
		Short status = Short.valueOf((String) queryMap.get("prshStatus"));
		for (String id : idArray) {
			if(StringUtil.isNotBlank(id)){
				CPriceSheet sheet = dao.findById(Integer.parseInt(id));
				sheet.setPrshStatus(status);
				dao.update(sheet);
			}
		}		
	}
	
	public ICPriceSheetDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICPriceSheetDAO dao) {
		this.dao = dao;
	}

	public ICPriceLineDAO getLineDao() {
		return lineDao;
	}

	@Autowired
	public void setLineDao(ICPriceLineDAO lineDao) {
		this.lineDao = lineDao;
	}

	public ICPriceRecordDAO getRecordDao() {
		return recordDao;
	}

	@Autowired
	public void setRecordDao(ICPriceRecordDAO recordDao) {
		this.recordDao = recordDao;
	}
}
