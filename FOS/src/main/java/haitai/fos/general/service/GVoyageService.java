package haitai.fos.general.service;

import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.idao.IFContractDAO;
import haitai.fos.ffop.entity.idao.IFLoadingListDAO;
import haitai.fos.ffop.entity.idao.IFPackingListDAO;
import haitai.fos.ffop.service.FContractService;
import haitai.fos.general.entity.idao.IGVoyageDAO;
import haitai.fos.general.entity.table.GVoyage;
import haitai.fos.sys.entity.idao.ICPriceSheetDAO;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.ObjectUtil;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GVoyageService implements IGeneralService<GVoyage> {
	private IGVoyageDAO dao = null;
	private IFPackingListDAO packingListDao = null;
	private IFLoadingListDAO loadingListDao = null;
	private IFConsignDAO consignDao = null;
	private ICPriceSheetDAO priceSheetDao = null;
	private IFContractDAO contractDao = null;
	private FContractService contractService = null;

	@Transactional
	public List<GVoyage> save(List<GVoyage> itemList) {
		List<GVoyage> retList = new ArrayList<GVoyage>();
		for (GVoyage entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setVoyaId(null);
				dao.save(entity);
				retList.add(entity);
				packingListDao.updateSailedFlag(entity.getVoyaId(), entity.getVoyaSailedFlag());
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				// 取得数据库中的对象, 记录几个可能修改的字段的旧值
				Integer voyaId = entity.getVoyaId();
				GVoyage oldEntity = dao.findById(voyaId);
				Date d = oldEntity.getVoyaSailDate();
				Date f = oldEntity.getVoyaShipDateF();
				Date t = oldEntity.getVoyaShipDateT();
				String voyaName = oldEntity.getVoyaName();
				Short voyaSailedFlag = oldEntity.getVoyaSailedFlag();
				// 更新数据库中的对象
				GVoyage newEntity = dao.update(entity);
				retList.add(newEntity);
				// 判断几个字段有没有修改
				Date newD = newEntity.getVoyaSailDate();
				Date newF = newEntity.getVoyaShipDateF();
				Date newT = newEntity.getVoyaShipDateT();
				String newVoyaName = newEntity.getVoyaName();
				Short newVoyaSailedFlag = newEntity.getVoyaSailedFlag();
				Integer newVessId = newEntity.getVessId();
				String newVessName = newEntity.getVessName();
				String newVessNameCn = newEntity.getVessNameCn();
				if (ObjectUtil.isNotEqual(voyaName, newVoyaName)) {
					// priceSheet,consign, loadingList, packingList, contract
					priceSheetDao.updateVoyaName(voyaId, newVoyaName);
					consignDao.updateVoyaName(voyaId, newVoyaName);
					packingListDao.updateVoyaName(voyaId, newVoyaName);
					loadingListDao.updateVoyaName(voyaId, newVoyaName);
					contractService.updateVoyaName(voyaId);
				}
				if (ObjectUtil.isNotEqual(d, newD) || ObjectUtil.isNotEqual(f, newF)
						|| ObjectUtil.isNotEqual(t, newT)) {
					loadingListDao.updateSailDate(voyaId, newD, newF, newT);
					contractDao.updateSailDate(voyaId, newD, newF, newT);
				}
				if (ObjectUtil.isNotEqual(voyaSailedFlag, newVoyaSailedFlag)) {
					packingListDao.updateSailedFlag(voyaId, newEntity.getVoyaSailedFlag());
				}
				if (ConstUtil.FalseShort.equals(voyaSailedFlag)
						&& ConstUtil.TrueShort.equals(newVoyaSailedFlag)) {
					contractDao.updateSailedFlag(voyaId, ConstUtil.TrueShort);
				}
				if (ObjectUtil.isNotEqual(voyaId, newVessId)) {
					priceSheetDao.updateVessName(voyaId, newVessId, newVessName);
					consignDao.updateVessName(voyaId, newVessId, newVessName, newVessNameCn);
					packingListDao.updateVessName(voyaId, newVessId, newVessName, newVessNameCn);
					loadingListDao.updateVessName(voyaId, newVessId, newVessName, newVessNameCn);
					contractService.updateVessName(voyaId, newVessId);
				}
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GVoyage delEntity = dao.findById(entity.getVoyaId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GVoyage> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGVoyageDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGVoyageDAO dao) {
		this.dao = dao;
	}

	public List<GVoyage> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}

	public IFPackingListDAO getPackingListDao() {
		return packingListDao;
	}

	@Autowired
	public void setPackingListDao(IFPackingListDAO packingListDao) {
		this.packingListDao = packingListDao;
	}

	public IFLoadingListDAO getLoadingListDao() {
		return loadingListDao;
	}

	@Autowired
	public void setLoadingListDao(IFLoadingListDAO loadingListDao) {
		this.loadingListDao = loadingListDao;
	}

	public IFConsignDAO getConsignDao() {
		return consignDao;
	}

	@Autowired
	public void setConsignDao(IFConsignDAO consignDao) {
		this.consignDao = consignDao;
	}

	public ICPriceSheetDAO getPriceSheetDao() {
		return priceSheetDao;
	}

	@Autowired
	public void setPriceSheetDao(ICPriceSheetDAO priceSheetDao) {
		this.priceSheetDao = priceSheetDao;
	}

	public IFContractDAO getContractDao() {
		return contractDao;
	}

	@Autowired
	public void setContractDao(IFContractDAO contractDao) {
		this.contractDao = contractDao;
	}

	public FContractService getContractService() {
		return contractService;
	}

	@Autowired
	public void setContractService(FContractService contractService) {
		this.contractService = contractService;
	}

}
