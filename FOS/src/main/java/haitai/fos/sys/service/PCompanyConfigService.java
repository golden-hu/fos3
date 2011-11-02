package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPCompanyConfigDAO;
import haitai.fos.sys.entity.table.PCompanyConfig;
import haitai.fw.util.ConstUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PCompanyConfigService {
	@Autowired
	private IPCompanyConfigDAO dao;

	@Transactional
	public List<PCompanyConfig> save(List<PCompanyConfig> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PCompanyConfig> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional(readOnly = true)
	public String queryByCode(String code) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put(ConstUtil.COMCF_KEY, code);
		List<PCompanyConfig> list = query(queryMap);
		if (list.size() == 1) {
			return list.get(0).getCocoValue();
		}
		return null;
	}
}
