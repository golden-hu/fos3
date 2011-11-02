package haitai.fos.ffse.service;

import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffse.entity.idao.ISExpenseBDAO;
import haitai.fos.ffse.entity.idao.ISExpenseDAO;
import haitai.fos.ffse.entity.table.SExpense;
import haitai.fos.ffse.entity.table.SExpenseB;
import haitai.fos.sys.entity.idao.IPUserExpePermissionDAO;
import haitai.fos.sys.entity.table.PUserExpePermission;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.TimeUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SExpenseService {
	@Autowired
	private ISExpenseDAO dao;
	@Autowired
	private ISExpenseBDAO bakDao;
	@Autowired
	private IPUserExpePermissionDAO permDao;
	@Autowired
	private IFConsignDAO consignDao;

	@Transactional
	public List<SExpense> save(List<SExpense> entityList) throws IllegalAccessException, InvocationTargetException {
		List<SExpense> retList = new ArrayList<SExpense>();
		for (SExpense entity : entityList) {
			entity.setExpeUpdateBy(SessionManager.getStringAttr(SessionKeyType.USERNAME));
			entity.setExpeUpdateTime(TimeUtil.getNow());
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setExpeId(null);
				dao.save(entity);
				entity.setEditable(ConstUtil.TrueShort);
				retList.add(entity);
				backupExpense(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				SExpense retEntity = dao.update(entity);
				retEntity.setEditable(ConstUtil.TrueShort);
				backupExpense(retEntity);
				retList.add(retEntity);
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				SExpense delEntity = dao.findById(entity.getExpeId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
				backupExpense(delEntity);
				//被分摊的费用, 在删除的时候, 同时要删除分摊的费用
				if (ConstUtil.TrueShort.equals(delEntity.getExpeAllocationFlag())) {
					Map<String, Object> queryMap = new HashMap<String, Object>();
					queryMap.put("expeIdM", delEntity.getExpeId());
					queryMap.put("expeAllocatedFlag", ConstUtil.TrueShort);
					List<SExpense> allocatedList = dao.findByProperties(queryMap);
					for (SExpense expense : allocatedList) {
						expense.setRowAction(ConstUtil.ROW_R);
						dao.update(expense);
						backupExpense(expense);
					}
				}
			} else {
				throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
		}
		return retList;
	}

	private void backupExpense(SExpense bakEntity) throws IllegalAccessException, InvocationTargetException {
		SExpenseB bakEntityB = new SExpenseB();
		BeanUtils.copyProperties(bakEntity, bakEntityB);
		bakDao.save(bakEntityB);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SExpense> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional(readOnly = true)
	public List<SExpense> queryAndFilted(Map<String, Object> queryMap) {
		List<SExpense> retList = new ArrayList<SExpense>();
		//查询出所有的费用
		List<SExpense> oriList = dao.findByProperties(queryMap);
		//得到当前用户的费用权限列表
		Map<String, PUserExpePermission> permMap = getExpePermissionMap();
		boolean editOwnerR = false;
		boolean editOwnerP = false;
		boolean viewR = false;
		boolean viewP = false;
		boolean editR = false;
		boolean editP = false;
		if (permMap.containsKey(ConstUtil.PR_TYPE_RECEIVE + ConstUtil.USEP_CHCL_ALL)) {
			PUserExpePermission perm = permMap.get(ConstUtil.PR_TYPE_RECEIVE + ConstUtil.USEP_CHCL_ALL);
			if (ConstUtil.TrueShort.equals(perm.getUsepEditable())) {
				editOwnerR = true;
			}
			if (ConstUtil.TrueShort.equals(perm.getUsepViewAll())) {
				viewR = true;
			}
			if (ConstUtil.TrueShort.equals(perm.getUsepEditAll())) {
				editR = true;
			}
		}
		if (permMap.containsKey(ConstUtil.PR_TYPE_PAY + ConstUtil.USEP_CHCL_ALL)) {
			PUserExpePermission perm = permMap.get(ConstUtil.PR_TYPE_PAY + ConstUtil.USEP_CHCL_ALL);
			if (ConstUtil.TrueShort.equals(perm.getUsepEditable())) {
				editOwnerP = true;
			}
			if (ConstUtil.TrueShort.equals(perm.getUsepViewAll())) {
				viewP = true;
			}
			if (ConstUtil.TrueShort.equals(perm.getUsepEditAll())) {
				editP = true;
			}
		}
		//循环每一条费用, 根据费用权限列表, 判断是否可以查看, 编辑(设置可编辑字段)
		//有全部编辑的权限, 直接设置可编辑
		//是否有全部查看的权限, 加入返回列表
		//查询对应委托, 判断当前用户是否此委托的owner
		//owner可以查看, 根据edit字段判断是否可编辑
		//不是owner, 看viewAll, editAll字段
		Map<Integer, Boolean> consignMap = new HashMap<Integer, Boolean>();
		for (SExpense expense : oriList) {
			expense.setEditable(ConstUtil.FalseShort);
			if (ConstUtil.PR_TYPE_RECEIVE.equals(expense.getExpeType())) {
				checkPerm(retList, permMap, editOwnerR, viewR, editR, consignMap, expense);
			} else {
				checkPerm(retList, permMap, editOwnerP, viewP, editP, consignMap, expense);
			}
		}
		return retList;
	}

	public Map<String, PUserExpePermission> getExpePermissionMap() {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", "" + SessionManager.getAttr(SessionKeyType.UID));
		List<PUserExpePermission> permList = permDao.findByProperties(map);
		Map<String, PUserExpePermission> permMap = new HashMap<String, PUserExpePermission>();
		for (PUserExpePermission perm : permList) {
			permMap.put(perm.getExpeType() + perm.getChclId(), perm);
		}
		return permMap;
	}

	private void checkPerm(List<SExpense> retList, Map<String, PUserExpePermission> permMap, boolean editOwnerAll,
						   boolean viewAll, boolean editAll, Map<Integer, Boolean> consignMap, SExpense expense) {
		if (editAll) {
			expense.setEditable(ConstUtil.TrueShort);
		}
		if (viewAll) {
			retList.add(expense);
		}
		Integer consId = expense.getConsId();
		String key = expense.getExpeType() + expense.getChclId();
		//如果当前用户是费用的创建人, 默认有权限
		//否则看是不是委托的owner
		//再否则看具体的费用权限配置
		Integer uid = (Integer) SessionManager.getAttr(SessionKeyType.UID);
		if (uid.equals(expense.getCreateBy())) {
			expense.setEditable(ConstUtil.TrueShort);
			if (!retList.contains(expense)) {
				retList.add(expense);
			}
		} else if (isOwner(consignMap, consId)) {
			if (editOwnerAll
					|| (permMap.containsKey(key) && ConstUtil.TrueShort.equals(permMap.get(key).getUsepEditable()))) {
				expense.setEditable(ConstUtil.TrueShort);
			}
			if (!retList.contains(expense))
				retList.add(expense);
		} else if (permMap.containsKey(key)) {// 不是owner,并有此费用类别的权限记录
			PUserExpePermission perm = permMap.get(key);
			if (ConstUtil.TrueShort.equals(perm.getUsepEditAll())) {
				expense.setEditable(ConstUtil.TrueShort);
			}
			if (ConstUtil.TrueShort.equals(perm.getUsepViewAll())) {
				if (!retList.contains(expense)) {
					retList.add(expense);
				}
			}
		}
	}

	private boolean isOwner(Map<Integer, Boolean> consignMap, Integer consId) {
		boolean isOwner = false;
		Integer uid = (Integer) SessionManager.getAttr(SessionKeyType.UID);
		if (consignMap.containsKey(consId)) {
			isOwner = consignMap.get(consId);
		} else {
			FConsign consign = consignDao.findById(consId);
			if (uid.equals(consign.getCreateBy()) || uid.equals(consign.getConsSalesRepId())) {
				isOwner = true;
			}
			consignMap.put(consId, isOwner);
		}
		return isOwner;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SExpense> invoiceCreateQuery(Map queryMap) {
		return dao.complexQueryInvoiceCreate(null, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SExpense> complexQuery(List<FosQuery> conditions, Map queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SExpenseB> complexQueryExpenseB(List<FosQuery> conditions, Map queryMap) {
		return bakDao.complexQuery(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SExpense> queryWriteOff(Map queryMap) {
		return dao.complexQueryWriteOff(null, queryMap);
	}
}
