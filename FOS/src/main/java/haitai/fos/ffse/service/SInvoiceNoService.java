package haitai.fos.ffse.service;

import haitai.fos.ffse.entity.idao.ISInvoiceNoDAO;
import haitai.fos.ffse.entity.table.SInvoiceNo;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class SInvoiceNoService {
	@Autowired
	private ISInvoiceNoDAO dao;

	@Transactional
	public List<SInvoiceNo> save(List<SInvoiceNo> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SInvoiceNo> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	/**
	 * 更新记录的启用标志, 同时把其他记录从启用状态->未启用状态
	 *
	 * @param queryMap the query map
	 */
	public void updateActiveFlag(Map<String, Object> queryMap) {
		Integer id = Integer.parseInt((String) queryMap.get("innoId"));
		queryMap.clear();
		queryMap.put("active", ConstUtil.TrueStr);
		List<SInvoiceNo> list = dao.findByProperties(queryMap);
		for (SInvoiceNo item : list) {
			item.setActive(ConstUtil.FalseShort);
			dao.update(item);
		}
		SInvoiceNo entity = dao.findById(id);
		entity.setActive(ConstUtil.TrueShort);
		entity.setInnoStartDate(TimeUtil.getNow());
		dao.update(entity);
	}
}
