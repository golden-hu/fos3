package sg.com.ccn;

import java.util.List;

import javax.persistence.PersistenceContext;
import javax.persistence.EntityManager;
import javax.persistence.Query;

import haitai.fos.sys.entity.idao.IPRoleDAO;
import haitai.fos.sys.entity.idao.IPUserDAO;
import haitai.fos.sys.entity.table.PUser;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.SpringContextHolder;
import haitai.fw.util.TimeUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sg.com.ccn.util.Const;
import sg.com.ccn.util.InitData;

@Service
public class ExMessageService {
	/*@Autowired
	private IPUserDAO userDao;*/
	@Autowired
	private ConfigUtil configUtil;
	@PersistenceContext(unitName="FOSPU")
	 private EntityManager em;
	
	@SuppressWarnings("unchecked")
    @Transactional
    /**
     * Activate Company Account
     * @param compCode
     * @param userLoginName
     */
	public void activeCompany(String compCode,String userLoginName) {
		StringBuffer sbUser=new StringBuffer();
		sbUser.append("insert into P_USER (");
		sbUser.append("USER_NAME,USER_LOGIN_NAME,USER_EMAIL,USER_PASSWORD,USER_PASSWORD_MODIFY_DATE,ACTIVE,COMP_CODE,VERSION,REMOVED");
		sbUser.append(")");
		sbUser.append("values(");
		sbUser.append("'"+userLoginName+"','"+userLoginName+"','{$email}', 'e10adc3949ba59abbe56e057f20f883e',now(),1,'"+compCode+"',0,0");
		sbUser.append(");");
		String sqlUser=sbUser.toString();
		
		StringBuffer sbRole=new StringBuffer();
		sbRole.append("insert into P_ROLE (");
		sbRole.append("ROLE_NAME,ACTIVE,COMP_CODE,VERSION,REMOVED");
		sbRole.append(")");
		sbRole.append("values(");
		sbRole.append("'系统管理员', 1, '"+compCode+"',0,0");
		sbRole.append(");");
		String sqlRole=sbRole.toString();
		
		try {
			Integer userId=0;
			Integer roleId=0;
			Query queryUpdateUser = em.createNativeQuery(sqlUser);
			int affectRows = queryUpdateUser.executeUpdate();
			
			Query queryUpdaterRole = em.createNativeQuery(sqlRole);
			queryUpdaterRole.executeUpdate();
			if(affectRows==1){
				StringBuffer sbs = new StringBuffer();
				sbs.append(" select max(USER_ID) from P_USER ");
				sbs.append(" where USER_NAME='"+userLoginName+"' ");
				sbs.append(" and USER_LOGIN_NAME='"+userLoginName+"' ");
				sbs.append(" and COMP_CODE='"+compCode+"' ");
				Query querySelectUser  = em.createNativeQuery(sbs.toString());
				List<Object> objListUser = querySelectUser.getResultList();
				for(Object objUser : objListUser){
					userId=Integer.parseInt(objUser.toString());
				}
				
				StringBuffer sbs2 = new StringBuffer();
				sbs2.append(" select max(ROLE_ID) from P_ROLE ");
				sbs2.append(" where ROLE_NAME='系统管理员'");
				sbs2.append(" and COMP_CODE='"+compCode+"' ");
				Query querySelectRole  = em.createNativeQuery(sbs2.toString());
				List<Object> objListRole = querySelectRole.getResultList();
				for(Object objRole : objListRole){
					roleId=Integer.parseInt(objRole.toString());
				}
			}
			if(userId>0&&roleId>0){
				String sqlFilePath=ConfigUtil.getContextPath()+ConstUtil.DIR_SEP+Const.initDataDir+ConstUtil.DIR_SEP+Const.initSql;
				String sqlDriver=Const.mysqlDriver;
				String sqlUrl=Const.mysqlUrl;
				String sqlUserName=Const.mysqlUserName;
				String sqlPassword=Const.mysqlPassword;
				new InitData().initSqlFile(compCode, sqlFilePath, sqlDriver, sqlUrl, sqlUserName, sqlPassword, userId, roleId);
			}
			
		}
		catch (Exception ex) {
			  ex.printStackTrace();
			}
		
	}
}
