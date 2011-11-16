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
import haitai.fw.util.ObjectUtil;
import haitai.fw.util.RowAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class GVesselService {
	@Autowired
	private IGVesselDAO dao;
	@Autowired
	private IGVoyageDAO voyageDao;
	@Autowired
	private IFPackingListDAO packingListDao;
	@Autowired
	private IFLoadingListDAO loadingListDao;
	@Autowired
	private IFConsignDAO consignDao;
	@Autowired
	private ICPriceSheetDAO priceSheetDao;
	@Autowired
	private FContractService contractService;

	@Transactional
	public List<GVessel> save(List<GVessel> itemList) {
		List<GVessel> retList = new ArrayList<GVessel>();
		for (GVessel entity : itemList) {
			if (entity.getRowAction() == RowAction.N) {
				entity.setVessId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (entity.getRowAction() == RowAction.M) {
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
			} else if (entity.getRowAction() == RowAction.R) {
				GVessel delEntity = dao.findById(entity.getVessId());
				delEntity.setRowAction(RowAction.R);
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
	public List<GVessel> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
