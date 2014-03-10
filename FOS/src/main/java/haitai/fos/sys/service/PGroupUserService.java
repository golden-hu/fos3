package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPGroupUserDAO;
import haitai.fos.sys.entity.table.PGroupUser;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PGroupUserService {
	@Autowired
	private IPGroupUserDAO dao;

	@Transactional
	public List<PGroupUser> save(List<PGroupUser> entityList) {
		/*List<PGroupUser> retList = new ArrayList<PGroupUser>();
		for(PGroupUser entity : entityList){
			if (entity.getRowAction() == RowAction.N) {
				entity.setGrusId(null);				
				dao.save(entity);
				retList.add(entity);
			} else if (entity.getRowAction() == RowAction.M) {
				retList.add(dao.update(entity));
			} else if (entity.getRowAction() == RowAction.R) {
				dao.delete(entity.getGrusId());
			} else {
				throw new BusinessException("fw.row_action_null");
			}
		}
		return retList;		*/
		
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PGroupUser> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
