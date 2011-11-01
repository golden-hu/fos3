package haitai.fos.ffse.service;

import haitai.fos.ffse.entity.idao.ISExRateDAO;
import haitai.fos.ffse.entity.table.SExRate;
import haitai.fos.general.entity.table.GCurrency;
import haitai.fos.general.service.GCurrencyService;
import haitai.fw.exception.BusinessException;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.SpringContextHolder;
import haitai.fw.util.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class SExRateService {
	@Autowired
	private ISExRateDAO dao;

	@Transactional
	public List<SExRate> save(List<SExRate> entityList) {
		List<SExRate> retList = new ArrayList<SExRate>();
		for (SExRate entity : entityList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				//查一下是否该汇率已经存在, 存在就update, 否则insert
				Map<String, Object> queryMap = new HashMap<String, Object>();
				queryMap.put("exraBaseCurrency", entity.getExraBaseCurrency());
				queryMap.put("exraExCurrency", entity.getExraExCurrency());
				queryMap.put(ConstUtil.Removed, entity.getRemoved());
				queryMap.put(ConstUtil.CompCode, entity.getCompCode());
				queryMap.put(ConstUtil.Active, ConstUtil.TrueShort);
				List<SExRate> hasList = dao.findByProperties(queryMap);
				if (hasList.size() == 0) {
					entity.setExraId(null);
					entity.setActive(ConstUtil.TrueShort);
					dao.save(entity);
					retList.add(entity);
				} else {
					SExRate updateEntity = dao.findById(entity.getExraId());
					updateEntity.setExraRate(entity.getExraRate());
					dao.update(updateEntity);
					retList.add(updateEntity);
				}
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				//备份老记录
				SExRate delEntity = dao.findById(entity.getExraId());
				delEntity.setExraEndDate(TimeUtil.getNow());
				delEntity.setActive(ConstUtil.FalseShort);
				dao.update(delEntity);
				//增加新纪录
				entity.setExraId(null);
				entity.setExraStartDate(TimeUtil.getNow());
				entity.setActive(ConstUtil.TrueShort);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				SExRate delEntity = dao.findById(entity.getExraId());
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
	public List<SExRate> query(Map queryMap) {
		Map<String, SExRate> rateMap = new HashMap<String, SExRate>();

		//获取已有汇率
		List<SExRate> hasList = dao.findByProperties(queryMap);
		for (SExRate exRate : hasList) {
			rateMap.put(exRate.getExraBaseCurrency() + ConstUtil.STRING_SHARP + exRate.getExraExCurrency(), exRate);
		}

		if (ConstUtil.FalseShort.equals(queryMap.get(ConstUtil.Active))) {
			return hasList;
		}

		//获取币种
		ApplicationContext ctx = SpringContextHolder.getContext();
		GCurrencyService currService = (GCurrencyService) ctx.getBean("GCurrencyService");
		List<GCurrency> currList = currService.query(queryMap);

		//其他币种和本位币排列组合, -1是因为要去掉本位币(人民币)
		String[][] currArray = new String[(currList.size() - 1) * 2][3];
		int i = 0;
		for (GCurrency currency : currList) {
			if (!ConstUtil.CURRENCY_BASE_DEFAULT.equals(currency.getCurrCode())) {
				currArray[i][0] = currency.getCurrCode() + ConstUtil.STRING_SHARP + ConstUtil.CURRENCY_BASE_DEFAULT;
				currArray[i][1] = currency.getCurrCode();
				currArray[i][2] = ConstUtil.CURRENCY_BASE_DEFAULT;
				currArray[i + 1][0] = ConstUtil.CURRENCY_BASE_DEFAULT + ConstUtil.STRING_SHARP
						+ currency.getCurrCode();
				currArray[i + 1][1] = ConstUtil.CURRENCY_BASE_DEFAULT;
				currArray[i + 1][2] = currency.getCurrCode();
				i += 2;
			}
		}

		//如果已有汇率表中没有, 新增一个汇率对象
		for (String[] aCurrArray : currArray) {
			String key = aCurrArray[0];
			if (!rateMap.containsKey(key)) {
				SExRate rate = new SExRate();
				rate.setCompCode(SessionManager.getStringAttr(SessionKeyType.COMPCODE));
				rate.setExraBaseCurrency(aCurrArray[1]);
				rate.setExraExCurrency(aCurrArray[2]);
				rate.setExraStartDate(new Date());
				rate.setRemoved(ConstUtil.FalseShort);
				rate.setRowAction(ConstUtil.ROW_N);
				rate.setVersion(0);
				rateMap.put(key, rate);
			}
		}

		//返回所有
		List<SExRate> retList = new ArrayList<SExRate>();
		retList.addAll(rateMap.values());
		return retList;
	}

}
