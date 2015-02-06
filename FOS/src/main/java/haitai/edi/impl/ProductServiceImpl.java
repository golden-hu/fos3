package haitai.edi.impl;

import java.util.HashMap;
import java.util.List;



import javax.jws.WebService;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.transaction.annotation.Transactional;

import sg.com.ccn.util.Const;
import sg.com.ccn.util.CopyFile;
import sg.com.ccn.util.InitData;

import haitai.edi.ProductService;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.StringUtil;

@WebService(targetNamespace = "http://impl.edi.haitai/", endpointInterface = "haitai.edi.ProductService", portName = "ProductServiceImplPort", serviceName = "ProductServiceImplService")
public class ProductServiceImpl implements ProductService {
	@PersistenceContext(unitName="FOSPU")
	 private EntityManager em;
	
	/**
     * Activate Company Account or User
     * @param compCode
     * @param userLoginName
     */
	@SuppressWarnings("unchecked")
    @Override
    @Transactional
	public void Activate(String accountId, HashMap<String, String> keyValuePair) {
		// TODO Auto-generated method stub
		String compCode=keyValuePair.get("compCode");
		String accountFlag=keyValuePair.get("accountFlag");
		String userLoginName=accountId;
		
		if(StringUtil.isNotBlank(compCode)&&accountFlag.equals("A")){
			boolean bool=false;
			StringBuffer sbUser=new StringBuffer();
			sbUser.append("insert into P_USER (");
			sbUser.append("USER_NAME,USER_LOGIN_NAME,USER_EMAIL,USER_PASSWORD,");
			sbUser.append("USER_PASSWORD_MODIFY_DATE,ACTIVE,COMP_CODE,VERSION,REMOVED");
			sbUser.append(")");
			sbUser.append("values(");
			sbUser.append("'"+userLoginName+"','"+userLoginName+"','{$email}',");
			sbUser.append("'e10adc3949ba59abbe56e057f20f883e',now(),1,'"+compCode+"',0,0");
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
					//初始化公司和帐号脚本
					String sqlFilePathComp=ConfigUtil.getContextPath()+
							ConstUtil.DIR_SEP+Const.initDataDir+ConstUtil.DIR_SEP+Const.initSql;
					String sqlDriver=Const.mysqlDriver;
					String sqlUrl=Const.mysqlUrl;
					String sqlUserName=Const.mysqlUserName;
					String sqlPassword=Const.mysqlPassword;
					new InitData().initSqlFile(compCode, 
							sqlFilePathComp, sqlDriver, sqlUrl, sqlUserName, sqlPassword, userId, roleId);
					bool=true;
					if(bool){
						//初始化港口
						String sqlFilePathPort=ConfigUtil.getContextPath()+
								ConstUtil.DIR_SEP+Const.initDataDir+ConstUtil.DIR_SEP+Const.initSqlPort;
						new InitData().initSqlFile(compCode, 
								sqlFilePathPort, sqlDriver, sqlUrl, sqlUserName, sqlPassword, userId, roleId);
					}
				}
				if(bool){
					CopyFile confile= new CopyFile();
					String s=ConfigUtil.getContextPath()+
							ConstUtil.DIR_SEP+Const.initDataDir+ConstUtil.DIR_SEP+"FOS"+ConstUtil.DIR_SEP;
					String t=ConfigUtil.getContextPath()+
							ConstUtil.DIR_SEP+"data"+ConstUtil.DIR_SEP+compCode+
							ConstUtil.DIR_SEP+"template"+ConstUtil.DIR_SEP;
					confile.fileCopy(s, t);
					bool=true;
				}
			}catch (Exception ex) {
				 ex.printStackTrace();
			}
		}
		else if(StringUtil.isNotBlank(compCode)&&accountFlag.equals("U")){
			StringBuffer sbUser=new StringBuffer();
			sbUser.append("insert into P_USER (");
			sbUser.append("USER_NAME,USER_LOGIN_NAME,USER_EMAIL,USER_PASSWORD,");
			sbUser.append("USER_PASSWORD_MODIFY_DATE,ACTIVE,COMP_CODE,VERSION,REMOVED");
			sbUser.append(")");
			sbUser.append("values(");
			sbUser.append("'"+userLoginName+"','"+userLoginName+"','{$email}',");
			sbUser.append("'e10adc3949ba59abbe56e057f20f883e',now(),1,'"+compCode+"',0,0");
			sbUser.append(");");
			String sqlUser=sbUser.toString();
			try {
				Query queryUpdateUser = em.createNativeQuery(sqlUser);
				int affectRows = queryUpdateUser.executeUpdate();
				if(affectRows==1){
					//return true;
				}
			}catch (Exception ex) {
			  ex.printStackTrace();
			}
			//return false;
		}
	}

	/**
	 * Suspend company account || User
	 * @param compCode
	 * @param userLoginName
	 * @return
	 */
	@Override
	@Transactional
	public void Suspend(String accountId, HashMap<String, String> keyValuePair) {
		// TODO Auto-generated method stub
		String compCode=keyValuePair.get("compCode");
		String userLoginName=accountId;
		
		StringBuffer sbUser=new StringBuffer();
		sbUser.append(" update P_USER ");
		sbUser.append(" set ACTIVE=0");
		sbUser.append(" where USER_NAME='"+userLoginName+"' ");
		sbUser.append(" and USER_LOGIN_NAME='"+userLoginName+"' ");
		sbUser.append(" and COMP_CODE='"+compCode+"' ");
		String sqlUser=sbUser.toString();
		try {
			Query queryUpdateUser = em.createNativeQuery(sqlUser);
			int affectRows = queryUpdateUser.executeUpdate();
			if(affectRows==1){
				//return true;
			}
		}catch (Exception ex) {
		  ex.printStackTrace();
		}
		//return false;
	}

	/**
	 * UnSuspend company account || User
	 * @param compCode
	 * @param userLoginName
	 * @return
	 */
	@Override
	@Transactional
	public void UnSuspend(String accountId, HashMap<String, String> keyValuePair) {
		// TODO Auto-generated method stub
		String compCode=keyValuePair.get("compCode");
		String userLoginName=accountId;
		
		StringBuffer sbUser=new StringBuffer();
		sbUser.append(" update P_USER ");
		sbUser.append(" set ACTIVE=1");
		sbUser.append(" where USER_NAME='"+userLoginName+"' ");
		sbUser.append(" and USER_LOGIN_NAME='"+userLoginName+"' ");
		sbUser.append(" and COMP_CODE='"+compCode+"' ");
		String sqlUser=sbUser.toString();
		try {
			Query queryUpdateUser = em.createNativeQuery(sqlUser);
			int affectRows = queryUpdateUser.executeUpdate();
			if(affectRows==1){
				//return true;
			}
		}catch (Exception ex) {
		  ex.printStackTrace();
		}
		//return false;
	}

	/**
	 * Terminate company account || User
	 * @param compCode
	 * @param userLoginName
	 * @return
	 */
	@Override
	@Transactional
	public void Terminate(String accountId, HashMap<String, String> keyValuePair) {
		// TODO Auto-generated method stub
		String compCode=keyValuePair.get("compCode");
		String userLoginName=accountId;
		
		StringBuffer sbUser=new StringBuffer();
		sbUser.append(" update P_USER ");
		sbUser.append(" set REMOVED=1");
		sbUser.append(" where USER_NAME='"+userLoginName+"' ");
		sbUser.append(" and USER_LOGIN_NAME='"+userLoginName+"' ");
		sbUser.append(" and COMP_CODE='"+compCode+"' ");
		String sqlUser=sbUser.toString();
		try {
			Query queryUpdateUser = em.createNativeQuery(sqlUser);
			int affectRows = queryUpdateUser.executeUpdate();
			if(affectRows==1){
				//return true;
			}
		}catch (Exception ex) {
		  ex.printStackTrace();
		}
		//return false;
	}

    @Override
    @Transactional
	public String ValidateAccess(String accountId) {
		// TODO Auto-generated method stub
		/*String rtStr="";
		StringBuffer sbs = new StringBuffer();
		sbs.append(" select count(*) from P_USER ");
		sbs.append(" where USER_LOGIN_NAME='"+accountId+"' ");
		//sbs.append(" and COMP_CODE='"+compCode+"' ");
		Query querySelectUser  = em.createNativeQuery(sbs.toString());
		List<Object> objListUser = querySelectUser.getResultList();
		if(objListUser!=null&&objListUser.size()>0){
			Integer i=Integer.parseInt(objListUser.get(0).toString());
			if(i==0){
				rtStr="Validate Access Fail"; 
			}
		}else {
			throw new BusinessException("fw.login.fail");
		}
		System.out.println("========"+rtStr);
		return rtStr; */
		return "Validate Access Fail";
	}

	@Override
	public String sayHi(String text) {
        System.out.println("sayHi called");
        return "Hello " + text;
    }
	
}
