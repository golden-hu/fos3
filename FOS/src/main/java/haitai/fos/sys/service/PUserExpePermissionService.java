package haitai.fos.sys.service;

import haitai.fos.general.entity.idao.IGChargeClassDAO;
import haitai.fos.general.entity.table.GChargeClass;
import haitai.fos.sys.entity.idao.IPUserExpePermissionDAO;
import haitai.fos.sys.entity.table.PUserExpePermission;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.RowAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class PUserExpePermissionService {
	@Autowired
	private IPUserExpePermissionDAO dao;
	@Autowired
	private IGChargeClassDAO chargeClassDao;

	@Transactional
	public List<PUserExpePermission> save(List<PUserExpePermission> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PUserExpePermission> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional(readOnly = true)
	public List<PUserExpePermission> queryIncludeNotExist(Map<String, Object> queryMap) {
		String userId = (String) queryMap.get("userId");
		Map<String, Object> map = new HashMap<String, Object>();
		List<GChargeClass> chclList = chargeClassDao.findByProperties(map);
		List<PUserExpePermission> existList = dao.findByProperties(queryMap);

		//先加入已经存在的记录
		List<PUserExpePermission> retList = new ArrayList<PUserExpePermission>();
		retList.addAll(existList);

		//现在已经存在的记录id+收付标志
		Set<String> chclSet = new HashSet<String>();
		for (PUserExpePermission item : existList) {
			chclSet.add(item.getExpeType() + item.getChclId());
		}
		//现在不存在的记录，加虚拟记录
		for (GChargeClass chargeClass : chclList) {
			// 应收
			if (!chclSet.contains(ConstUtil.PR_TYPE_RECEIVE + chargeClass.getChclId())) {
				PUserExpePermission entity = newPermission(chargeClass);
				entity.setUserId(Integer.parseInt(userId));
				entity.setExpeType(ConstUtil.PR_TYPE_RECEIVE);
				retList.add(entity);
			}
			// 应付
			if (!chclSet.contains(ConstUtil.PR_TYPE_PAY + chargeClass.getChclId())) {
				PUserExpePermission entity = newPermission(chargeClass);
				entity.setUserId(Integer.parseInt(userId));
				entity.setExpeType(ConstUtil.PR_TYPE_PAY);
				retList.add(entity);
			}
		}
		//ID=0的单条记录，表示所有费用，要同样判断
		//应收
		if (!chclSet.contains(ConstUtil.PR_TYPE_RECEIVE + "0")) {
			PUserExpePermission entity = newPermission(0, MessageUtil.getMessage("sys.usep.fee_all"));
			entity.setUserId(Integer.parseInt(userId));
			entity.setExpeType(ConstUtil.PR_TYPE_RECEIVE);
			retList.add(entity);
		}
		//应付
		if (!chclSet.contains(ConstUtil.PR_TYPE_PAY + "0")) {
			PUserExpePermission entity = newPermission(0, MessageUtil.getMessage("sys.usep.fee_all"));
			entity.setUserId(Integer.parseInt(userId));
			entity.setExpeType(ConstUtil.PR_TYPE_PAY);
			retList.add(entity);
		}
		return retList;
	}

	private PUserExpePermission newPermission(GChargeClass chargeClass) {
		return newPermission(chargeClass.getChclId(), chargeClass.getChclName());
	}

	private PUserExpePermission newPermission(Integer chclId, String chclName) {
		PUserExpePermission entity = new PUserExpePermission();
		entity.setUsepId(null);
		entity.setChclId(chclId);
		entity.setChclName(chclName);
		entity.setUsepEditable(ConstUtil.FalseShort);
		entity.setUsepViewAll(ConstUtil.FalseShort);
		entity.setUsepEditAll(ConstUtil.FalseShort);
		entity.setCompCode(SessionManager.getStringAttr(SessionKeyType.COMPCODE));
		entity.setVersion(ConstUtil.FalseInt);
		entity.setRemoved(ConstUtil.FalseShort);
		entity.setRowAction(RowAction.N);
		return entity;
	}
}
