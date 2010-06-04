package haitai.fos.general.service;

import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.idao.IFLoadingListDAO;
import haitai.fos.ffop.entity.idao.IFPackingListDAO;
import haitai.fos.ffop.service.FContractService;
import haitai.fos.general.entity.idao.IGVesselDAO;
import haitai.fos.general.entity.idao.IGVoyageDAO;
import haitai.fos.general.entity.table.GVessel;
import haitai.fos.sys.entity.idao.ICPriceSheetDAO;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.ObjectUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GVesselService implements IGeneralService<GVessel> {
	private IGVesselDAO dao = null;
	private IGVoyageDAO voyageDao = null;
	private IFPackingListDAO packingListDao = null;
	private IFLoadingListDAO loadingListDao = null;
	private IFConsignDAO consignDao = null;
	private ICPriceSheetDAO priceSheetDao = null;
	private FContractService contractService = null;

	@Transactional
	public List<GVessel> save(List<GVessel> itemList) {
		List<GVessel> retList = new ArrayList<GVessel>();
		for (GVessel entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setVessId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				Integer vessId = entity.getVessId();
				GVessel oldEntity = dao.findById(vessId);
				String vessName = oldEntity.getVessNameEn();
				String vessNameCn = oldEntity.getVessNameCn();
				entity = dao.update(entity);
				String newVessName = entity.getVessNameEn();
				String newVessNameCn = entity.getVessNameCn();
				if (ObjectUtil.isNotEqual(vessName, newVessName)
						|| ObjectUtil.isNotEqual(vessNameCn, newVessNameCn)) {
					//voyage, priceSheet,consign, loadingList, packingList, contract
					voyageDao.updateVessName(vessId, newVessName, newVessNameCn);
					priceSheetDao.updateVessName(vessId, newVessName);
					consignDao.updateVessName(vessId, newVessName, newVessNameCn);
					packingListDao.updateVessName(vessId, newVessName, newVessNameCn);
					loadingListDao.updateVessName(vessId, newVessName, newVessNameCn);
					contractService.updateVessName(vessId);
				}
				retList.add(entity);
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GVessel delEntity = dao.findById(entity.getVessId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GVessel> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional(readOnly = true)
	public List<GVessel> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}

	public IGVesselDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGVesselDAO dao) {
		this.dao = dao;
	}

	public IGVoyageDAO getVoyageDao() {
		return voyageDao;
	}

	@Autowired
	public void setVoyageDao(IGVoyageDAO voyageDao) {
		this.voyageDao = voyageDao;
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

	public FContractService getContractService() {
		return contractService;
	}

	@Autowired
	public void setContractService(FContractService contractService) {
		this.contractService = contractService;
	}
	
}
