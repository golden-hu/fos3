package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFContainerDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FContainer;
import haitai.fos.general.entity.table.GVoyage;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class FContainerDAO extends GenericDAO<FContainer, Integer> implements
		IFContainerDAO {

	public FContainerDAO() {
		super(FContainer.class);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<Object> complexQueryByVoyaId(
			final Map<String, Object> propertyMap) {
		final List<FosQuery> conditions = new ArrayList<FosQuery>();
		for (String key : propertyMap.keySet()) {
			FosQuery query = new FosQuery(key, ConstUtil.SQL_OP_EQUAL,
					(String) propertyMap.get(key));
			conditions.add(query);
		}
		final Class t1 = FConsign.class;
		final Class t2 = FContainer.class;
		final Class t3 = GVoyage.class;
		String joinSql = "t1.consId = t2.consId and t1.voyaId = t3.voyaId";
		List objList = complexQuery(conditions, propertyMap, "t1,t2,t3", joinSql, t1,
				t2, t3);
		List retList = new ArrayList();
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				FConsign consign = (FConsign) objArray[0];
				FContainer container = (FContainer) objArray[1];
				GVoyage voyage = (GVoyage) objArray[2];
				//导出的报表, 需要箱子上有这两个临时字段, 从委托上复制过来
				container.setConsPodEn(consign.getConsPodEn());
				container.setConsMblNo(consign.getConsMblNo());
				retList.add(container);
				if(!retList.contains(voyage)){
					retList.add(voyage);
				}
			}
		}
		
		return retList;
	}
}