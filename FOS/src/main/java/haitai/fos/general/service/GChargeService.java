package haitai.fos.general.service;

import haitai.fos.ffse.service.SExpenseService;
import haitai.fos.general.entity.idao.IGChargeDAO;
import haitai.fos.general.entity.table.GCharge;
import haitai.fos.sys.entity.table.PUserExpePermission;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.CompanyConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.SpringContextHolder;
import haitai.fw.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class GChargeService implements IGeneralService<GCharge> {
	@Autowired
	private IGChargeDAO dao;
	@Autowired
	private SExpenseService expenseService;

	@Transactional
	public List<GCharge> save(List<GCharge> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCharge> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCharge> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public List<GCharge> queryChargeCommission(Map<String, Object> queryMap) {
		List<GCharge> retList = new ArrayList<GCharge>();
		String commissionCNY = CompanyConfigUtil.getCompanyConfig("COMMISSION_CHAR_CNY");
		String commissionUSD = CompanyConfigUtil.getCompanyConfig("COMMISSION_CHAR_USD");
		ApplicationContext ctx = SpringContextHolder.getContext();
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
		List<GCharge> oriList = query(queryMap);
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
