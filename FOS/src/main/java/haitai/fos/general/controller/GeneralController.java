package haitai.fos.general.controller;

import haitai.fos.ffse.service.SExpenseService;
import haitai.fos.general.entity.idao.IGChargeDAO;
import haitai.fos.general.entity.idao.IGContainerTypeDAO;
import haitai.fos.general.entity.idao.IGUnitDAO;
import haitai.fos.general.entity.table.GCharge;
import haitai.fos.general.entity.table.GContainerType;
import haitai.fos.general.entity.table.GPort;
import haitai.fos.general.entity.table.GUnit;
import haitai.fos.general.entity.table.GVessel;
import haitai.fos.general.entity.table.GVoyage;
import haitai.fos.general.service.IGeneralService;
import haitai.fos.sys.entity.table.PUserExpePermission;
import haitai.fw.entity.FosQuery;
import haitai.fw.platform.ActionManager;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.CompanyConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.SpringContextUtil;
import haitai.fw.util.StringUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("GeneralController")
public class GeneralController<T> {
	@Transactional
	public List<T> save(List<T> entityList) {
		String actName = (String) SessionManager
				.getAttr(SessionKeyType.ACTNAME);
		String serviceBeanName = ActionManager.getAction(actName)
				.getActService();
		IGeneralService<T> service = SpringContextUtil.getBean(serviceBeanName);
		return service.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<T> query(Map<String, Object> queryMap) {
		String actName = (String) SessionManager
				.getAttr(SessionKeyType.ACTNAME);
		String serviceBeanName = ActionManager.getAction(actName)
				.getActService();
		IGeneralService<T> service = SpringContextUtil.getBean(serviceBeanName);
		return service.query(queryMap);
	}

	@Transactional(readOnly = true)
	public List<T> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		String actName = (String) SessionManager
				.getAttr(SessionKeyType.ACTNAME);
		String serviceBeanName = ActionManager.getAction(actName)
				.getActService();
		IGeneralService<T> service = SpringContextUtil.getBean(serviceBeanName);
		return service.complexQuery(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public List<GVoyage> getVoyageByVessel(Map<String, Object> queryMap) {
		IGeneralService<GVoyage> service = SpringContextUtil
				.getBean("GVoyageService");
		return service.query(queryMap);
	}

	@Transactional(readOnly = true)
	public List<GPort> getPortByCountry(Map<String, Object> queryMap) {
		IGeneralService<GPort> service = SpringContextUtil
				.getBean("GPortService");
		return service.query(queryMap);
	}

	@Transactional(readOnly = true)
	public List<GVessel> complexQueryVessel(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		IGeneralService<GVessel> service = SpringContextUtil
				.getBean("GVesselService");
		return service.complexQuery(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public List<GPort> complexQueryPort(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		IGeneralService<GPort> service = SpringContextUtil
				.getBean("GPortService");
		return service.complexQuery(conditions, queryMap);
	}

	/**
	 * 把ContainerType转换成Unit, 跟Unit拼起来返回
	 * 
	 * @param queryMap
	 * @return
	 */
	@Transactional(readOnly = true)
	public List<GUnit> queryUnitPlusContType(Map<String, Object> queryMap) {
		IGUnitDAO dao = SpringContextUtil.getBean("GUnitDAO");
		IGContainerTypeDAO containerTypeDao = SpringContextUtil
				.getBean("GContainerTypeDAO");

		List<GUnit> retList = new ArrayList<GUnit>();
		retList.addAll(dao.findByProperties(queryMap));
		List<GContainerType> contList = containerTypeDao
				.findByProperties(queryMap);
		Integer id = -1;
		for (GContainerType item : contList) {
			GUnit unit = new GUnit();
			unit.setUnitId(id);
			unit.setUnitCode(item.getCotyCode());
			unit.setUnitName(item.getCotyCode());
			id--;
			retList.add(unit);
		}
		return retList;
	}

	@Transactional(readOnly = true)
	public List<GCharge> queryChargeCommission(Map<String, Object> queryMap) {
		List<GCharge> retList = new ArrayList<GCharge>();
		String commissionCNY = CompanyConfigUtil
				.getCompanyConfig("COMMISSION_CHAR_CNY");
		String commissionUSD = CompanyConfigUtil
				.getCompanyConfig("COMMISSION_CHAR_USD");
		ApplicationContext ctx = SpringContextUtil.getContext();
		IGChargeDAO dao = (IGChargeDAO) ctx.getBean("GChargeDAO");
		if (StringUtil.isNotBlank(commissionUSD)) {
			GCharge usd = dao.findById(Integer.parseInt(commissionUSD));
			if (usd != null) {
				retList.add(usd);
			}
		}
		if (StringUtil.isNotBlank(commissionCNY)) {
			GCharge cny = dao.findById(Integer.parseInt(commissionCNY));
			if (cny != null) {
				retList.add(cny);
			}
		}
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCharge> queryChargeFilted(Map<String, Object> queryMap) {
		String expeType = (String) queryMap.get("expeType");
		List<GCharge> retList = new ArrayList<GCharge>();
		List<GCharge> oriList = (List<GCharge>) query(queryMap);
		SExpenseService expenseService = SpringContextUtil.getBean("SExpenseService");
		Map<String, PUserExpePermission> permMap = expenseService.getExpePermissionMap();
		String key = expeType + ConstUtil.USEP_CHCL_ALL;
		if (permMap.containsKey(key) && isEdit(permMap.get(key))) {
			retList.addAll(oriList);
		} else {
			for (GCharge charge : oriList) {
				key = expeType + charge.getChclId();
				if (permMap.containsKey(key) && isEdit(permMap.get(key))) {
					retList.add(charge);
				}
			}
		}
		
		return retList;
	}

	private boolean isEdit(PUserExpePermission perm) {
		return ConstUtil.TrueShort.equals(perm.getUsepEditable())
				|| ConstUtil.TrueShort.equals(perm.getUsepEditAll());
	}
}
