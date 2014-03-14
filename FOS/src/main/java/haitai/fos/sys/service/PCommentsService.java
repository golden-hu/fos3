package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPCommentsDAO;
import haitai.fos.sys.entity.table.PComments;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.RowAction;
import haitai.fw.util.StringUtil;
import haitai.fw.util.TimeUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PCommentsService {
	@Autowired
	private IPCommentsDAO dao;

	@Transactional
	public List<PComments> save(List<PComments> entityList) {
		for(PComments c : entityList){
			String wusrName = SessionManager.getStringAttr("WUSERNAME");
			if(StringUtil.isNotBlank(wusrName)){
				c.setCommBy(wusrName);
			}
			else
				c.setCommBy(SessionManager.getStringAttr(SessionKeyType.USERNAME));
			
			c.setCompCode(SessionManager.getStringAttr("CompCode"));
			c.setRowAction(RowAction.N);
			c.setCreateTime(TimeUtil.getNow());
		}
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PComments> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
