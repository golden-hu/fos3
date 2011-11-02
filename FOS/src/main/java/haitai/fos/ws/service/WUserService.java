package haitai.fos.ws.service;

import haitai.fos.sys.entity.table.CCustomer;
import haitai.fos.sys.service.CCustomerService;
import haitai.fos.ws.entity.idao.IWUserDAO;
import haitai.fos.ws.entity.table.WUser;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class WUserService {
	@Autowired
	private IWUserDAO dao;
	@Autowired
	private CCustomerService customerService;

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<WUser> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<CCustomer> saveCustomer(List<CCustomer> entityList, Map<String, Object> queryMap) {
		List<CCustomer> retList = customerService.save(entityList);
		String wusrId = (String) queryMap.get("wusrId");
		if (StringUtil.isNotBlank(wusrId)) {
			WUser user = dao.findById(Integer.parseInt(wusrId));
			Integer custId = retList.get(0).getCustId();
			user.setCustId(custId);
			user.setWusrStatus(ConstUtil.TrueShort);
			dao.update(user);
		}
		return retList;
	}
}
