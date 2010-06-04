package haitai.fos.sys.service;

import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.sys.entity.idao.ICCommissionDAO;
import haitai.fos.sys.entity.idao.ICCommissionItemDAO;
import haitai.fos.sys.entity.idao.ICSalesCommissionDAO;
import haitai.fos.sys.entity.table.CCommissionItem;
import haitai.fos.sys.entity.table.CSalesCommission;
import haitai.fw.util.ConstUtil;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CSalesCommissionService {
	private ICSalesCommissionDAO dao = null;
	private ICCommissionDAO commissionDao = null;
	private ICCommissionItemDAO commissionItemDao = null;

	@Transactional
	public List<CSalesCommission> save(List<CSalesCommission> vedCatList) {

		List<CSalesCommission> retList = new ArrayList<CSalesCommission>();

		for (CSalesCommission entity : vedCatList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setSacoId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				CSalesCommission delEntity = dao.findById(entity.getSacoId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CSalesCommission> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	/**
	 * 业务员提成统计明细
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<FConsign> querySalesCommissionDetail(Map<String, Object> queryMap){
		List<Object[]> objList = dao.queryCommissionDetail(queryMap);
		Map<Integer, FConsign> consignMap = new HashMap<Integer, FConsign>();
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				Integer consId = (Integer) objArray[0];
				FConsign consign = new FConsign();
					consign.setConsId(consId);
					consign.setConsNo((String) objArray[1]);
					consign.setCustSname((String) objArray[2]);
					consign.setConsSailDate((Date) objArray[3]);
					Double amount = ((BigDecimal) objArray[4]).doubleValue();
					consign.setGrossProfit(amount);
					consignMap.put(consId, consign);
			}
		}
		List<FConsign> retList = new ArrayList<FConsign>();
		retList.addAll(consignMap.values());
		return retList;
	}
	
	/**
	 * 业务员提成统计
	 * @param queryMap
	 * @return
	 */
	public List<CSalesCommission> calculate(Map<String, Object> queryMap) {
		// 方案明细
		Map<Integer, List<CCommissionItem>> itemMap = sortCommissionItem();
		// 把业务员业绩并入业务员方案配置
		List<CSalesCommission> salesList = getSalesCommission(queryMap);
		// 对于每一个业务员方案配置, 根据方案明细计算
		for (CSalesCommission sales : salesList) {
			List<CCommissionItem> itemList = itemMap.get(sales.getCommId());
			Double commission = new Double(0);
			if (itemList != null && itemList.size() > 0) {
				Double baseAmount = sales.getBaseAmount();
				for (CCommissionItem item : itemList) {
					double frag = 0;
					if (baseAmount >= item.getCoitLimit()) {
						frag = item.getCoitLimit() - item.getCoitLower();
					} else if (baseAmount >= item.getCoitLower()) {
						frag = baseAmount - item.getCoitLower();
					}
					commission += frag * item.getCoitRate();
				}
			}
			sales.setCommission(commission);
		}
		return salesList;
	}

	/**
	 * 把业务员业绩并入业务员方案配置
	 * @param amountList
	 * @return
	 */
	private List<CSalesCommission> getSalesCommission(Map<String, Object> queryMap) {
		Map<Integer, Double> amountList = getTotalAmount(queryMap);
		Map<String, Object> map = new HashMap<String, Object>();
		List<CSalesCommission> salesList = dao.findByProperties(map);
		for (CSalesCommission salesCommission : salesList) {
			Double amount = amountList.get(salesCommission.getSacoSalesId());
			if(amount == null) amount = new Double(0);
			salesCommission.setBaseAmount(amount);
		}
		return salesList;
	}

	/**
	 * 当月业务员业绩, 并预处理成userId -> amount
	 * @param queryMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	private Map<Integer, Double> getTotalAmount(Map<String, Object> queryMap) {
		//当月业务员业绩
		List<Object[]> objList = dao.queryAllCommission(queryMap);
		//业务员业绩预处理
		Map<Integer, Double> amountList = new HashMap<Integer, Double>();
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				Integer salesId = (Integer) objArray[0];
				Double amount = ((BigDecimal) objArray[1]).doubleValue();
				amountList.put(salesId, amount);
			}
		}
		return amountList;
	}

	/**
	 * 业务员分成方案明细, 按照方案分组, 并排序
	 * @return
	 */
	private Map<Integer, List<CCommissionItem>> sortCommissionItem() {
		Map<Integer, List<CCommissionItem>> itemMap = new HashMap<Integer, List<CCommissionItem>>();

		Map<String, Object> queryMap = new HashMap<String, Object>();
		List<CCommissionItem> itemList = commissionItemDao
				.findByProperties(queryMap);
		for (CCommissionItem item : itemList) {
			List<CCommissionItem> list = itemMap.get(item.getCommId());
			if (list == null) {
				list = new ArrayList<CCommissionItem>();
				itemMap.put(item.getCommId(), list);
			}
			list.add(item);
			Collections.sort(list);
		}
		return itemMap;
	}
	
	public ICSalesCommissionDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICSalesCommissionDAO dao) {
		this.dao = dao;
	}

	public ICCommissionDAO getCommissionDao() {
		return commissionDao;
	}

	@Autowired
	public void setCommissionDao(ICCommissionDAO commissionDao) {
		this.commissionDao = commissionDao;
	}

	public ICCommissionItemDAO getCommissionItemDao() {
		return commissionItemDao;
	}

	@Autowired
	public void setCommissionItemDao(ICCommissionItemDAO commissionItemDao) {
		this.commissionItemDao = commissionItemDao;
	}
	
}
