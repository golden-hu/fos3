package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICPriceLineDAO;
import haitai.fos.sys.entity.idao.ICPriceRecordDAO;
import haitai.fos.sys.entity.idao.ICPriceSheetDAO;
import haitai.fos.sys.entity.table.CPriceLine;
import haitai.fos.sys.entity.table.CPriceRecord;
import haitai.fos.sys.entity.table.CPriceSheet;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.RowAction;
import haitai.fw.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class CPriceSheetService {
	@Autowired
	private ICPriceSheetDAO dao;
	@Autowired
	private ICPriceLineDAO lineDao;
	@Autowired
	private ICPriceRecordDAO recordDao;

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		Map<Integer, Integer> idMap2 = new HashMap<Integer, Integer>();
		// handle parent first
		for (Object obj : entityList) {
			if (obj instanceof CPriceSheet) {
				CPriceSheet entity = (CPriceSheet) obj;
				Integer oldId = entity.getPrshId();
				if (entity.getRowAction() == RowAction.N) {
					entity.setPrshId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					CPriceSheet delEntity = dao.findById(entity.getPrshId());
					delEntity.setRowAction(RowAction.R);
					dao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				idMap.put(oldId, entity.getPrshId());
			}
		}

		// handle child
		for (Object obj : entityList) {
			if (obj instanceof CPriceLine) {
				CPriceLine entity = (CPriceLine) obj;
				Integer oldId = entity.getPrliId();
				if (entity.getRowAction() == RowAction.N) {
					entity.setPrliId(null);
					entity.setPrshId(NumberUtil.frontId2DbId(idMap, entity.getPrshId()));
					lineDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(lineDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					CPriceLine delEntity = lineDao.findById(entity.getPrliId());
					delEntity.setRowAction(RowAction.R);
					lineDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				idMap2.put(oldId, entity.getPrliId());
			}
		}

		// handle child's child
		for (Object obj : entityList) {
			if (obj instanceof CPriceRecord) {
				CPriceRecord entity = (CPriceRecord) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setPrreId(null);
					entity.setPrshId(NumberUtil.frontId2DbId(idMap, entity.getPrshId()));
					entity.setPrliId(NumberUtil.frontId2DbId(idMap2, entity.getPrliId()));
					recordDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(recordDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					CPriceRecord delEntity = recordDao.findById(entity.getPrreId());
					delEntity.setRowAction(RowAction.R);
					recordDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<CPriceSheet> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
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
				if (sheet.getPrshStartDate() != null) {
					record.setPrshStartDate((Date) sheet.getPrshStartDate().clone());
				}
				if (sheet.getPrshEndDate() != null) {
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

	public void updateStatus(Map<String, Object> queryMap) {
		String ids = (String) queryMap.get("prshId");
		String[] idArray = ids.split(",");
		Short status = Short.valueOf((String) queryMap.get("prshStatus"));
		for (String id : idArray) {
			if (StringUtil.isNotBlank(id)) {
				CPriceSheet sheet = dao.findById(Integer.parseInt(id));
				sheet.setPrshStatus(status);
				dao.update(sheet);
			}
		}
	}
}
