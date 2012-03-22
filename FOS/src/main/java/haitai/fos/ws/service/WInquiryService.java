package haitai.fos.ws.service;

import haitai.fos.ws.entity.idao.IWInquiryDAO;
import haitai.fos.ws.entity.table.WInquiry;
import haitai.fos.ws.entity.table.WUser;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class WInquiryService {
	@Autowired
	private IWInquiryDAO dao;

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<WInquiry> complexQuery(List<FosQuery> conditions, Map queryMap) {
		List<WInquiry> retList = new ArrayList<WInquiry>();
		List<Object> objList = dao.complexQuery(conditions, queryMap);
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				WInquiry inquiry = (WInquiry) objArray[0];
				WUser user = (WUser) objArray[1];
				inquiry.setWusrName(user.getWusrName());
				inquiry.setWusrFirstName(user.getWusrFirstName());
				inquiry.setWusrMobile(user.getWusrMobile());
				inquiry.setWusrEmail(user.getWusrEmail());
				inquiry.setWusrCompanyName(user.getWusrCompanyName());
				inquiry.setWusrTel(user.getWusrTel());
				retList.add(inquiry);
			}
		}
		return retList;
	}
	
	@Transactional
	public List<WInquiry> save(List<WInquiry> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<WInquiry> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
