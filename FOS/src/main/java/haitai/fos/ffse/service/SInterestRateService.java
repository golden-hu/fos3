package haitai.fos.ffse.service;

import haitai.fos.ffse.entity.idao.ISInterestRateDAO;
import haitai.fos.ffse.entity.table.SInterestRate;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class SInterestRateService {
	@Autowired
	private ISInterestRateDAO dao;

	@Transactional
	public List<SInterestRate> save(List<SInterestRate> entityList) {
		List<SInterestRate> retList = new ArrayList<SInterestRate>();
		for (SInterestRate entity : entityList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				//查一下是否该汇率已经存在, 存在就update, 否则insert
				Map<String, Object> queryMap = new HashMap<String, Object>();
				queryMap.put("inraCurrency", entity.getInraCurrency());
				queryMap.put(ConstUtil.Removed, entity.getRemoved());
				queryMap.put(ConstUtil.CompCode, entity.getCompCode());
				queryMap.put(ConstUtil.Active, ConstUtil.TrueShort);
				List<SInterestRate> hasList = dao.findByProperties(queryMap);
				if (hasList.size() == 0) {
					entity.setInraId(null);
					entity.setActive(ConstUtil.TrueShort);
					dao.save(entity);
					retList.add(entity);
				} else {
					SInterestRate updateEntity = dao.findById(entity.getInraId());
					updateEntity.setInraRate(entity.getInraRate());
					dao.update(updateEntity);
					retList.add(updateEntity);
				}
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				//备份老记录
				SInterestRate delEntity = dao.findById(entity.getInraId());
				delEntity.setInraEndDate(new Date());
				delEntity.setActive(ConstUtil.FalseShort);
				dao.update(delEntity);
				//增加新纪录
				entity.setInraId(null);
				entity.setActive(ConstUtil.TrueShort);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				SInterestRate delEntity = dao.findById(entity.getInraId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			} else {
				throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SInterestRate> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
