package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPCompanyDAO;
import haitai.fos.sys.entity.table.PCompany;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.FileUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Service
public class PCompanyService {
	@Autowired
	private IPCompanyDAO dao;

	@Transactional
	public List<PCompany> save(List<PCompany> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@PersistenceContext(unitName="FOSPU")
	 private EntityManager em;
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PCompany> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
	
	@Transactional(readOnly = true)
	public void initialData(Map<String, Object> queryMap) {
		String compCode = (String) queryMap.get("compCode");
		
		String sql ="call sp_active_company('"+compCode+"');";
		try {
			Query queryUpdateCom = em.createNativeQuery(sql);
			queryUpdateCom.executeUpdate();		
		}
		catch (Exception ex) {
		  ex.printStackTrace();
		}
	}
	
	@Transactional(readOnly = true)
	public void initialTemplates(Map<String, Object> queryMap) {
		//String compCode = (String) queryMap.get("compCode");
		String compCode = SessionManager.getStringAttr(SessionKeyType.COMPCODE);
		String s = ConfigUtil.getContextPath()+ConstUtil.DIR_SEP+"initData"+ConstUtil.DIR_SEP+"template"+ConstUtil.DIR_SEP;		
		String t=ConfigUtil.getContextPath()+ConstUtil.DIR_SEP+"data"+ConstUtil.DIR_SEP+compCode+ConstUtil.DIR_SEP+"template"+ConstUtil.DIR_SEP;
		try{
			FileUtil.copyDirectiory(s,t);
			
			List<PCompany> list = dao.findByProperties(queryMap);
			if(list.size()>0){
				PCompany c = list.get(0);
				c.setCompInitialFlag(ConstUtil.FalseShort);
				dao.update(c);
			}
		}
		catch(IOException e){
			e.printStackTrace();
		}
	}
}
