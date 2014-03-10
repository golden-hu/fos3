package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICSalesQuotaDAO;
import haitai.fos.sys.entity.table.CSalesQuota;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class CSalesQuotaService {
	@Autowired
	private ICSalesQuotaDAO dao;

	@Transactional
	public List<CSalesQuota> save(List<CSalesQuota> vedCatList) {
		return dao.saveByRowAction(vedCatList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<CSalesQuota> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
