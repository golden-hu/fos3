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
import haitai.fw.util.RowAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class GVoyageService {
	@Autowired
	private IGVoyageDAO dao;
	@Autowired
	private IFPackingListDAO packingListDao;
	@Autowired
	private IFLoadingListDAO loadingListDao;
	@Autowired
	private IFConsignDAO consignDao;
	@Autowired
	private ICPriceSheetDAO priceSheetDao;
	@Autowired
	private IFContractDAO contractDao;
	@Autowired
	private FContractService contractService;

	@Transactional
	public List<GVoyage> save(List<GVoyage> itemList) {
		List<GVoyage> retList = new ArrayList<GVoyage>();
		for (GVoyage entity : itemList) {
			if (entity.getRowAction() == RowAction.N) {
				entity.setVoyaId(null);
				dao.save(entity);
				retList.add(entity);
				packingListDao.updateSailedFlag(entity.getVoyaId(), entity.getVoyaSailedFlag());
			} else if (entity.getRowAction() == RowAction.M) {
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
				if (ConstUtil.FalseShort.equals(voyaSailedFlag) && ConstUtil.TrueShort.equals(newVoyaSailedFlag)) {
					contractDao.updateSailedFlag(voyaId, ConstUtil.TrueShort);
				}
				if (ObjectUtil.isNotEqual(voyaId, newVessId)) {
					priceSheetDao.updateVessName(voyaId, newVessId, newVessName);
					consignDao.updateVessName(voyaId, newVessId, newVessName, newVessNameCn);
					packingListDao.updateVessName(voyaId, newVessId, newVessName, newVessNameCn);
					loadingListDao.updateVessName(voyaId, newVessId, newVessName, newVessNameCn);
					contractService.updateVessName(voyaId, newVessId);
				}
			} else if (entity.getRowAction() == RowAction.R) {
				GVoyage delEntity = dao.findById(entity.getVoyaId());
				delEntity.setRowAction(RowAction.R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GVoyage> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GVoyage> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
