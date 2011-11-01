package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGContainerTypeDAO;
import haitai.fos.general.entity.idao.IGUnitDAO;
import haitai.fos.general.entity.table.GContainerType;
import haitai.fos.general.entity.table.GUnit;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class GUnitService implements IGeneralService<GUnit> {
	@Autowired
	private IGUnitDAO dao;
	@Autowired
	private IGContainerTypeDAO containerTypeDao;

	@Transactional
	public List<GUnit> save(List<GUnit> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GUnit> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GUnit> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}

	/**
	 * 把ContainerType转换成Unit, 跟Unit拼起来返回
	 *
	 * @param queryMap the query map
	 * @return the unit list
	 */
	@Transactional(readOnly = true)
	public List<GUnit> queryUnitPlusContType(Map<String, Object> queryMap) {
		List<GUnit> retList = new ArrayList<GUnit>();
		retList.addAll(dao.findByProperties(queryMap));
		List<GContainerType> contList = containerTypeDao.findByProperties(queryMap);
		Integer id = -1;
		for (GContainerType item : contList) {
			GUnit unit = new GUnit();
			unit.setUnitId(id);
			unit.setUnitCode(item.getCotyCode());
			unit.setUnitName(item.getCotyCode());
			id--;
			retList.add(unit);
		}
		return retList;
	}
}
