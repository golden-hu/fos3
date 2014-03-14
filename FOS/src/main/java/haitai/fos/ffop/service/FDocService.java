package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFDocDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FDoc;
import haitai.fos.ffse.entity.idao.ISExpenseDAO;
import haitai.fos.ffse.entity.idao.ISVoucherItemDAO;
import haitai.fos.ffse.entity.table.SExpense;
import haitai.fos.sys.entity.idao.IPCompanyConfigDAO;
import haitai.fos.sys.entity.table.PCompanyConfig;
import haitai.fos.sys.entity.table.PMessageSubscribe;
import haitai.fos.sys.entity.table.PMessageTopic;
import haitai.fos.sys.service.PMessageService;
import haitai.fw.entity.FosQuery;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class FDocService {
	@Autowired
	private IFDocDAO dao;
	@Autowired
	private ISExpenseDAO expenseDao;
	@Autowired
	private ISVoucherItemDAO voucherItemDao;
	@Autowired
	private IPCompanyConfigDAO companyConfigDao;
	@Autowired
	private PMessageService messageService;
	
	@Transactional
	public List<FDoc> save(List<FDoc> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FDoc> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
	
	@Transactional
	public void updateStatus(Map<String, Object> queryMap) {
		Short status = Short.valueOf((String) queryMap.get("fdocStatus"));
		String ids = (String) queryMap.get("fdocId");
		String[] idArray = ids.split(",");
		for (String strId : idArray) {
			if (StringUtil.isNotBlank(strId)) {
				Integer id = Integer.valueOf(strId);
				FDoc entity = dao.findById(id);
				entity.setFdocStatus(status);
				dao.update(entity);
			}
		}
	}
	
	@Transactional
	public void updateReleasableFlag() {
		SessionManager.regSession(new MockHttpSession());
		SessionManager.setAttr(SessionKeyType.ACTNAME, ConstUtil.ACT_DAEMON);
		SessionManager.setAttr(SessionKeyType.UID, 0);
		SessionManager.setAttr(SessionKeyType.USERNAME, "daemon");
		//这个公司是否需要自动放单
		List<FosQuery> conditionList = new ArrayList<FosQuery>();
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put(ConstUtil.COMCF_KEY, ConstUtil.COMCF_CONS_LOCK_DAYS);
		List<PCompanyConfig> list = companyConfigDao.findByProperties(queryMap);
		for (PCompanyConfig companyConfig : list) {
			if ("N".equalsIgnoreCase(companyConfig.getCocoValue())) {
				return;
			}
			SessionManager.setAttr(SessionKeyType.COMPCODE, companyConfig.getCompCode());
			//根据当天的核销明细VoucherItem, 查到客户ID和此客户今天核销的委托最晚开航时间
			conditionList.clear();
			queryMap.clear();
			List<Object> objList = voucherItemDao.complexQueryCust(conditionList, queryMap);
			for (Object obj : objList) {
				if (obj instanceof Object[]) {
					Object[] objArray = (Object[]) obj;
					Integer custId = (Integer) objArray[0];
					Date consSailDate = (Date) objArray[1];
					conditionList.clear();
					conditionList.add(new FosQuery("custId", ConstUtil.SQL_OP_EQUAL, "" + custId));
					conditionList.add(new FosQuery("expeType", ConstUtil.SQL_OP_EQUAL, "R"));
					conditionList.add(new FosQuery("t2.consSailDate", ConstUtil.SQL_OP_LESSEQUAL,
					StringUtil.date2String(consSailDate)));
					queryMap.clear();
					//然后查此客户, 这个开航时间之前的所有委托的费用是否已经核销
					List<SExpense> expenseList = expenseDao.complexQueryRelease(conditionList, queryMap);
					boolean isPayed = false;
					for (SExpense expense : expenseList) {
						//如果有一个没有核销, 直接跳过
						if (!ConstUtil.EXPENSE_INVOICE_STATUS_FULL.equals(expense.getExpeWriteoffStatus())) {
							isPayed = false;
							break;
						}
						isPayed = true;
					}
					//如果全部核销, 这个客户的所有委托的所有需要放单的单证, 把放单状态更新一下
					if(isPayed) {
						queryMap.clear();
						conditionList.clear();
						queryMap.put("custId", "" + custId);
						List<FDoc> docList = dao.complexQueryNeedRelease(conditionList, queryMap);
						for (FDoc doc : docList) {
							doc.setFdocReleasableFlag(ConstUtil.TrueShort);
							dao.update(doc);
						}					
					}
				}
			}
		}
		SessionManager.unregSession();
	}
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FDoc> complexQuery(List<FosQuery> conditions, Map queryMap) {
		List retList = new ArrayList<FDoc>();
		List objList = dao.complexQuery(conditions, queryMap);
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				FDoc doc = (FDoc) objArray[0];
				FConsign consign = (FConsign) objArray[1];
				doc.setVessName(consign.getVessName());
				doc.setVoyaName(consign.getVoyaName());
				doc.setConsMblNo(consign.getConsMblNo());
				doc.setCustName(consign.getCustName());
				doc.setConsSailDate(consign.getConsSailDate());
				doc.setConsCargoOwnerName(consign.getConsCargoOwnerName());
				doc.setConsSalesRepName(consign.getConsSalesRepName());
				doc.setConsOperatorName(consign.getConsOperatorName());
				retList.add(doc);
			}
		}
		return retList;
	}	

	@Transactional
	public void alertWriteOffDoc(PMessageTopic topic, PMessageSubscribe subscribe, FDoc doc) {
		messageService.buildMsg(topic, subscribe, doc);
		doc.setAlertFlag(ConstUtil.TrueShort);
		dao.update(doc);
	}
}
