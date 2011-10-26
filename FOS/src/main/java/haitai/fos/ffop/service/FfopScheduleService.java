package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.idao.IFDocDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FDoc;
import haitai.fos.sys.entity.idao.IPMessageSubscribeDAO;
import haitai.fos.sys.entity.idao.IPMessageTopicDAO;
import haitai.fos.sys.entity.table.PMessageSubscribe;
import haitai.fos.sys.entity.table.PMessageTopic;
import haitai.fos.sys.service.PMessageService;
import haitai.fw.entity.FosQuery;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.CompanyConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.StringUtil;
import haitai.fw.util.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class FfopScheduleService {

	@Autowired
	private IFDocDAO docDao;
	@Autowired
	private IPMessageTopicDAO topicDao;
	@Autowired
	private IPMessageSubscribeDAO subscribeDao;
	@Autowired
	private FDocService docService;
	@Autowired
	private PMessageService messageService;
	@Autowired
	private IFConsignDAO consignDao;

	public void alertSalesOverdue() {
		SessionManager.regSession(new MockHttpSession());
		SessionManager.setAttr(SessionKeyType.ACTNAME, ConstUtil.ACT_DAEMON);
		SessionManager.setAttr(SessionKeyType.UID, 0);
		SessionManager.setAttr(SessionKeyType.USERNAME, "daemon");
		//查询有客户超期严重的业务员
		//(委托从开船日期算,超过公司配置的最大应收账款天数,应收没有完全核销的)
		List<PMessageTopic> topicList = getTopics(ConstUtil.QUARTZ_CONS_ALERT_SALES);
		for (PMessageTopic topic : topicList) {
			SessionManager.setAttr(SessionKeyType.COMPCODE, topic.getCompCode());
			List<PMessageSubscribe> subscribeList = getSubscribe(topic.getMetoId());
			if (subscribeList.size() <= 0) continue;
			List<FConsign> consignList = getNeedAlertSales();
			for (PMessageSubscribe subscribe : subscribeList) {
				for (FConsign consign : consignList) {
					messageService.buildMsg(topic, subscribe, consign);
				}
			}
		}
		SessionManager.unregSession();
	}

	public List<FConsign> getNeedAlertSales() {
		int dateDue = 30;
		String strDateDue = CompanyConfigUtil.getCompanyConfig(ConstUtil.COMCF_CONS_AR_OVERDUE_DAYS);
		if (StringUtil.isNotBlank(strDateDue))
			dateDue = Integer.parseInt(strDateDue);
		List<Object> objList = consignDao.complexQueryOverDueSales(dateDue);
		Map<Integer, String> blNoMap = new HashMap<Integer, String>();
		Map<Integer, String> salesMap = new HashMap<Integer, String>();
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				Integer salesId = (Integer) objArray[0];
				String salesName = (String) objArray[1];
				String blNo = (String) objArray[2];
				String oldNo = blNoMap.get(salesId);
				if (oldNo != null)
					blNo = oldNo + ConstUtil.COMMA + blNo;
				blNoMap.put(salesId, blNo);
				if (StringUtil.isNotBlank(salesMap.get(salesId)))
					salesMap.put(salesId, salesName);
			}
		}
		//该业务员的所有客户的提单
		List<FConsign> retList = new ArrayList<FConsign>();
		for (Integer salesId : blNoMap.keySet()) {
			String blNo = blNoMap.get(salesId);
			String salesName = salesMap.get(salesId);
			FConsign consign = new FConsign();
			consign.setConsSalesRepId(salesId);
			consign.setConsSalesRepName(salesName);
			consign.setConsMblNo(blNo);
			retList.add(consign);
		}
		return retList;
	}

	public void alertWriteOffDoc() {
		SessionManager.regSession(new MockHttpSession());
		SessionManager.setAttr(SessionKeyType.ACTNAME, ConstUtil.ACT_DAEMON);
		SessionManager.setAttr(SessionKeyType.UID, 0);
		SessionManager.setAttr(SessionKeyType.USERNAME, "daemon");
		//找到核销单提醒的消息主题
		List<PMessageTopic> topicList = getTopics(ConstUtil.QUARTZ_FDOC_ALERT_WRITEOFF);
		for (PMessageTopic topic : topicList) {
			SessionManager.setAttr(SessionKeyType.COMPCODE, topic.getCompCode());
			//找到该消息主题的订阅人列表
			List<PMessageSubscribe> subscribeList = getSubscribe(topic.getMetoId());
			//找到所有开航30天，未退的核销单
			List<FDoc> docList = getNeedAlertDocs();
			//循环核销单列表，根据每个核销单&消息主题&订阅人，生成消息
			for (PMessageSubscribe subscribe : subscribeList) {
				for (FDoc doc : docList) {
					docService.alertWriteOffDoc(topic, subscribe, doc);
				}
			}
		}
		SessionManager.unregSession();
	}

	private List<PMessageTopic> getTopics(String code) {
		Map<String, Object> querymap = new HashMap<String, Object>();
		querymap.put("actName", code);
		return topicDao.findByProperties(querymap);
	}

	private List<PMessageSubscribe> getSubscribe(Integer topicId) {
		Map<String, Object> querymap = new HashMap<String, Object>();
		querymap.put("metoId", "" + topicId);
		return subscribeDao.findByProperties(querymap);
	}

	private List<FDoc> getNeedAlertDocs() {
		String ccId = CompanyConfigUtil.getCompanyConfig(ConstUtil.COMCF_FDOC_CC);
		List<FosQuery> conditions = new ArrayList<FosQuery>();
		conditions.add(new FosQuery("dotyId", ConstUtil.SQL_OP_IN, ccId));
		conditions.add(new FosQuery("fdocBackFlag", ConstUtil.SQL_OP_EQUAL, ConstUtil.FalseStr));
		conditions.add(new FosQuery("consSailDate", ConstUtil.SQL_OP_LESSEQUAL, TimeUtil.addDate(-30)));
		return docDao.complexQueryNeedAlert(conditions, null);
	}
}
