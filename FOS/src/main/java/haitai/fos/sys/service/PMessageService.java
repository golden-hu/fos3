package haitai.fos.sys.service;

import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.sys.entity.idao.*;
import haitai.fos.sys.entity.table.*;
import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.message.MailManager;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Service("PMessageService")
public class PMessageService {
	@Autowired
	private IPMessageDAO dao;
	@Autowired
	private IPMessageTopicDAO topicDao;
	@Autowired
	private IPMessageSubscribeDAO subscribeDao;
	@Autowired
	private IPTemplateMapDAO mapDao;
	@Autowired
	private IPUserDAO userDao;
	@Autowired
	private MailManager mailManager;
	@Autowired
	private PTableInfoService tableInfoService;
	@Autowired
	private PTemplateService templateService;
	@Autowired
	@Qualifier(value = "appConfig")
	private Properties appConfig;
	private FosLogger logger = new FosLogger(PMessageService.class);
	private Map<String, List<PMessageTopic>> topicMap = new ConcurrentHashMap<String, List<PMessageTopic>>();
	private Map<Integer, List<PMessageSubscribe>> subscMap = new ConcurrentHashMap<Integer,
			List<PMessageSubscribe>>();

	@Transactional
	public List<PMessage> save(List<PMessage> entityList, Map<String, String> queryMap) throws Exception {
		List<PMessage> retList = new ArrayList<PMessage>();
		for (PMessage entity : entityList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setMessId(null);
				entity.setMessCreateTime(new Date());
				if (entity.getMessType() == ConstUtil.MESS_TYPE_EMAIL
						|| entity.getMessType() == ConstUtil.MESS_TYPE_FAX) {
					entity.setMessSendFlag(ConstUtil.FalseShort);
					PUser user = (PUser) SessionManager.getAttr(SessionKeyType.USER);
					//发件人
					if (StringUtil.isNotBlank(user.getUserEmail())) {
						entity.setMessFrom(user.getUserEmail());
					} else {
						String sender = appConfig.getProperty(ConstUtil.CONFIG_DEFAULT_EMAIL_SENDER);
						if (StringUtil.isBlank(sender)) {
							sender = "fos2008";
						}
						entity.setMessFrom(sender);
					}
					//传真收件人=传真号码<传真邮件账号>
					if (entity.getMessType() == ConstUtil.MESS_TYPE_FAX) {
						String sender = appConfig.getProperty(ConstUtil.CONFIG_FAX_SENDER);
						sender = entity.getMessTo() + "<" + sender + ">";
						entity.setMessTo(sender);
					}
					//附件
					if (queryMap.containsKey(ConstUtil.TEMP_PARAM_ID)) {
						String fileName = templateService.exportTemplate(null, queryMap);
						if (StringUtil.isNotBlank(fileName)) {
							entity.setMessAttachment(StringUtil.ascii2utf8(fileName));
						}
					}
					entity.setMessFromUserId(user.getUserId());
					entity.setMessFromUserName(user.getUserName());
				}
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				PMessage delEntity = dao.findById(entity.getMessId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			} else {
				throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PMessage> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PMessage> queryOwn(Map queryMap) {
		return dao.queryOwn(queryMap);
	}

	public void send() {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		SessionManager.regSession(new MockHttpSession());
		SessionManager.setAttr(SessionKeyType.ACTNAME, ConstUtil.ACT_DAEMON);
		queryMap.put("messSendFlag", ConstUtil.FalseShort);
		// email
		queryMap.put("messType", ConstUtil.MESS_TYPE_EMAIL);
		send(queryMap);
		// fax
		queryMap.put("messType", ConstUtil.MESS_TYPE_FAX);
		send(queryMap);
		SessionManager.unregSession();
	}

	private void send(Map<String, Object> queryMap) {
		List<PMessage> messList = dao.findByProperties(queryMap);
		logger.info("get queue messages");
		for (PMessage message : messList) {
			try {
				mailManager.sendEmail(message);
			} catch (BusinessException e) {
				logger.error("mail send failed!");
			}
		}
	}

	public void clearSubscribeMap() {
		subscMap.clear();
	}

	@Transactional
	public void triggerMessage(Object entity) {
		String actName = SessionManager.getStringAttr(SessionKeyType.ACTNAME);
		String compCode = SessionManager.getStringAttr(SessionKeyType.COMPCODE);
		if (topicMap.size() == 0)
			initTopicMap();
		if (subscMap.size() == 0)
			initSubscribeMap();

		if (topicMap.containsKey(actName)) {
			List<PMessageTopic> list = topicMap.get(actName);
			for (PMessageTopic topic : list) {
				List<PMessageSubscribe> mailList = new ArrayList<PMessageSubscribe>();
				if (compCode.equals(topic.getCompCode())) {
					List<PMessageSubscribe> list2 = subscMap.get(topic.getMetoId());
					// 循环订阅列表
					if (list2 != null) {
						for (PMessageSubscribe subscribe : list2) {
							if (subscribe.getMesuSubscriberType() == ConstUtil.MESU_TYPE_USER
									&& subscribe.getMesuMailFlag() == ConstUtil.True) {
								mailList.add(subscribe);
							} else {
								buildMsg(topic, subscribe, entity);
							}
						}
						//如果是邮件, 要合并成一条邮件, 用户可以回复所有
						if (mailList.size() > 1) {
							buildMsg(topic, mailList, entity);
						} else if (mailList.size() == 1) {
							buildMsg(topic, mailList.get(0), entity);
						}
					}
				}
			}
		}
	}

	/**
	 * 配船通知
	 *
	 * @param topic the message topic
	 * @param mailList the email list
	 * @param entity the business object
	 */
	@Transactional
	public void buildMsg(PMessageTopic topic, List<PMessageSubscribe> mailList, Object entity) {
		FConsign consign = (FConsign) entity;
		String template = getBody(topic, entity);
		String email = "";
		for (PMessageSubscribe subscribe : mailList) {
			email += subscribe.getMesuSubscriberEmail() + ",";
		}
		String subject = "配船信息 -- " + consign.getVessName() + " " + consign.getVoyaName() + " ("
				+ consign.getConsCarrierName() + ") -- " + consign.getConsDeliveryPlace();
		PUser user = (PUser) SessionManager.getAttr(SessionKeyType.USER);
		String fromEmail = user.getUserEmail();
		PMessage msg = new PMessage();
		msg.setId(null);
		msg.setMessType(ConstUtil.MESS_TYPE_EMAIL);
		msg.setMessTo(email);
		msg.setMessSubject(subject);
		msg.setMessBody(template);
		msg.setMessFrom(fromEmail);
		msg.setMessCreateTime(TimeUtil.getNow());
		msg.setMessSendFlag(ConstUtil.FalseShort);
		msg.setMessFromUserId(user.getUserId());
		msg.setMessFromUserName(user.getUserName());
		msg.setMessToUserId(mailList.get(0).getMesuSubscriberId());
		msg.setMessToUserName(mailList.get(0).getMesuSubscriberName());
		dao.save(msg);
	}

	@Transactional
	public void buildMsg(PMessageTopic topic, PMessageSubscribe subscribe, Object entity) {
		//把模板中的变量替换
		String template = getBody(topic, entity);
		short type = subscribe.getMesuSubscriberType();
		short mail = subscribe.getMesuMailFlag();
		short im = subscribe.getMesuImFlag();
		Integer id = subscribe.getMesuSubscriberId();
		String name = subscribe.getMesuSubscriberName();
		String email = subscribe.getMesuSubscriberEmail();
		String subject = topic.getMetoName();
		if (type == ConstUtil.MESU_TYPE_USER) {
			if (mail == ConstUtil.True) {
				buildMsg(subject, template, email, id, name, ConstUtil.MESS_TYPE_EMAIL);
			}
			if (im == ConstUtil.True) {
				buildMsg(subject, template, name, id, name, ConstUtil.MESS_TYPE_IM);
			}
		} else if (type == ConstUtil.MESU_TYPE_ROLE) {
			String clazz = entity.getClass().getSimpleName();
			String fieldName = getFieldName(clazz, id);
			//有这个字段
			if (StringUtil.isNotBlank(fieldName)) {
				Integer userId = (Integer) MethodUtil.doGetMethod(entity, fieldName);
				PUser user = userDao.findById(userId);
				name = user.getUserName();
				email = user.getUserEmail();
				if (mail == ConstUtil.True) {
					buildMsg(subject, template, email, userId, name, ConstUtil.MESS_TYPE_EMAIL);
				}
				if (im == ConstUtil.True) {
					buildMsg(subject, template, name, userId, name, ConstUtil.MESS_TYPE_IM);
				}
			}
		} else {
			//外部客户
		}
	}

	private String getFieldName(String clazz, Integer id) {
		String fieldType = null;
		if (id == ConstUtil.ROLE_OP) {
			fieldType = ConstUtil.TABLE_FIELD_TYPE_OP;
		} else if (id == ConstUtil.ROLE_SALES) {
			fieldType = ConstUtil.TABLE_FIELD_TYPE_SALES;
		} else if (id == ConstUtil.ROLE_DISPATCHER) {
			fieldType = ConstUtil.TABLE_FIELD_TYPE_DISPATCHER;
		}
		return tableInfoService.getFieldName(clazz, fieldType);
	}

	private void buildMsg(String subject, String template, String messTo,
						  Integer userId, String userName, Short messType) {
		//如果是邮件,必须有接收地址
		if (StringUtil.isNotBlank(messTo) || messType != ConstUtil.MESS_TYPE_EMAIL) {
			PMessage msg = new PMessage();
			msg.setId(null);
			msg.setMessType(messType);
			msg.setMessTo(messTo);
			msg.setMessSubject(subject);
			msg.setMessBody(template);
			msg.setMessFrom("fos");
			msg.setMessCreateTime(TimeUtil.getNow());
			msg.setMessSendFlag(ConstUtil.FalseShort);
			msg.setMessFromUserId(ConstUtil.FalseInt);
			msg.setMessFromUserName("fos");
			msg.setMessToUserId(userId);
			msg.setMessToUserName(userName);
			dao.save(msg);
		}
	}

	private String getBody(PMessageTopic topic, Object entity) {
		String template = topic.getMetoTemplate();
		Integer tetyId = topic.getTetyId();
		if (tetyId == null) return template;
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("tetyId", tetyId);
		List<PTemplateMap> temaList = mapDao.findByProperties(queryMap);
		Map<String, PTemplateMap> temaMap = new HashMap<String, PTemplateMap>();
		for (PTemplateMap templateMap : temaList) {
			temaMap.put(templateMap.getTemaName(), templateMap);
		}
		while (StringUtil.contains(template, ConstUtil.STRING_LEFT_BRACE)) {
			int prefix = template.indexOf(ConstUtil.STRING_LEFT_BRACE);
			int suffix = template.indexOf(ConstUtil.STRING_RIGHT_BRACE);
			String key = template.substring(prefix + 1, suffix);
			PTemplateMap tema = temaMap.get(key);
			if (tema != null) {
				String field = tema.getTemaField();
				template = template.replaceAll("\\{" + key + "\\}",
						toString(MethodUtil.doGetMethod(entity, field)));
			} else {
				template = template.substring(0, prefix)
						+ template.substring(suffix + 1);
			}
		}
		return template;
	}

	private void initSubscribeMap() {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		List<PMessageSubscribe> subscribeList = subscribeDao.findByProperties(queryMap);
		for (PMessageSubscribe messageSubscribe : subscribeList) {
			List<PMessageSubscribe> list = subscMap.get(messageSubscribe.getMetoId());
			if (list == null) {
				list = new ArrayList<PMessageSubscribe>();
				subscMap.put(messageSubscribe.getMetoId(), list);
			}
			list.add(messageSubscribe);
		}
	}

	private void initTopicMap() {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		List<PMessageTopic> topics = topicDao.findByProperties(queryMap);
		for (PMessageTopic topic : topics) {
			List<PMessageTopic> list = topicMap.get(topic.getActName());
			if (list == null) {
				list = new ArrayList<PMessageTopic>();
				topicMap.put(topic.getActName(), list);
			}
			list.add(topic);
		}
	}

	@SuppressWarnings("unused")
	private boolean checkRules(Object entity, String strRules) {
		String[] rules = strRules.split(ConstUtil.COMMA);
		for (String rule : rules) {
			String key = rule.substring(0, rule.indexOf("="));
			String value = rule.substring(rule.indexOf("=") + 1);
			if ("className".equals(key)) {
				if (!entity.getClass().getSimpleName().equals(value))
					return false;
			} else {
				Object retObj = MethodUtil.doGetMethod(entity, key);
				String strObj = toString(retObj);
				if (!value.equals(strObj)) {
					return false;
				}
			}
		}
		return true;
	}

	private String toString(Object retObj) {
		String strObj;
		if (retObj == null) {
			strObj = "";
		} else if (retObj instanceof String) {
			strObj = (String) retObj;
		} else if (retObj instanceof Short) {
			strObj = "" + retObj;
		} else if (retObj instanceof Integer) {
			strObj = "" + retObj;
		} else if (retObj instanceof Date) {
			strObj = StringUtil.date2String((Date) retObj);
		} else {
			strObj = retObj.toString();
		}
		return strObj;
	}
}
