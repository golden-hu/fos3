package haitai.fosws.service;

import haitai.fosws.entity.idao.IWInquiryDAO;
import haitai.fosws.entity.table.WInquiry;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class WInquiryService {
	@Autowired
	private IWInquiryDAO dao;
	
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
