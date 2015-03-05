package haitai.edi.impl;

import java.rmi.RemoteException;
import java.util.HashMap;
import java.util.List;



import javax.jws.WebService;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;
import org.springframework.transaction.annotation.Transactional;

import sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompany;
import sg.com.ccn.org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount;
import sg.com.ccn.org.tempuri.IProductAPIServiceProxy;
import sg.com.ccn.util.Const;
import sg.com.ccn.util.CopyFile;
import sg.com.ccn.util.InitData;

import haitai.edi.ProductService;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.StringUtil;

//(targetNamespace = "http://impl.edi.haitai/", endpointInterface = "haitai.edi.ProductService", portName = "ProductServiceImplPort", serviceName = "ProductServiceImplService")
@WebService
public class ProductServiceImpl implements ProductService {
	protected final Log log = LogFactory.getLog(getClass());
	
	@PersistenceContext(unitName="FOSPU")
	 private EntityManager em;
	
	/**
     * Activate Company Account or User
     * @param accountId
     * @param keyValuePair
     * {"ProductID",item.ProductID},
		{"GlobalCompanyID",item.GlobalCompanyID.ToString()},
		{"City",item.City}
     */
	@SuppressWarnings("unchecked")
    @Override
    @Transactional
	public void Activate(String accountId, HashMap<String, String> keyValuePair) {
		// TODO Auto-generated method stub
		/*JaxWsProxyFactoryBean svr = new JaxWsProxyFactoryBean();
        svr.setServiceClass(ProductService.class);
        svr.setAddress("http://localhost:8080/FOS/services/productService");
        ProductService ps = (ProductService) svr.create();
        System.out.println(ps.sayHi("******"));*/
		
		String productID=keyValuePair.get("ProductID");
		String uuid=accountId;
		
		IProductAPIServiceProxy iproduct=new IProductAPIServiceProxy();
		try {
			//调用CCN Platform User Info
			log.info("-->start call cnn platform account interface");
			DTOUserAccount account=iproduct.getUserAccount(accountId, productID);
			if(account!=null&&account.getUserType()!=null){
				String compCode=account.getCompanyCode();
				String emailAddress=account.getEmailAddress();
				String userLoginName=account.getUserID();
				
				if("A".equals(account.getUserType())){
					//调用CCN Platform Company Info
					String globalCompanyID=account.getGlobalCompanyID();
					log.info("-->start call cnn platform company interface");
					DTOCompany company=iproduct.getCompany(globalCompanyID);
					
					if(company!=null){
						StringBuffer sbCom=new StringBuffer();
						sbCom.append("insert into P_COMPANY (");
						sbCom.append("COMP_CODE,COMP_NAME_CN,COMP_NAME_EN,COMP_ACTIVE,");
						sbCom.append("COMP_START_DATE,COMP_END_DATE,COMP_EMAIL,COMP_TEL,");
						sbCom.append("COMP_FAX,COMP_ADDRESS,COMP_CONTACT");
						sbCom.append(")");
						sbCom.append("values(");
						sbCom.append(" '"+compCode+"','"+company.getCompanyName1()+"','"+company.getCompanyName2()+"',1, ");
						sbCom.append(" now(),'','','', ");
						sbCom.append(" '','','' ");
						sbCom.append(");");
						String sqlCom=sbCom.toString();
						try {
							log.info("-->start execute insert company table");
							Query queryUpdateCom = em.createNativeQuery(sqlCom);
							queryUpdateCom.executeUpdate();
						}catch (Exception ex) {
						  ex.printStackTrace();
						}
					}
					
					boolean bool=false;
					StringBuffer sbUser=new StringBuffer();
					sbUser.append("insert into P_USER (");
					sbUser.append("USER_NAME,USER_LOGIN_NAME,USER_EMAIL,USER_PASSWORD,");
					sbUser.append("USER_PASSWORD_MODIFY_DATE,ACTIVE,COMP_CODE,VERSION,REMOVED");
					sbUser.append(")");
					sbUser.append("values(");
					sbUser.append("'"+userLoginName+"','"+userLoginName+"','"+emailAddress+"',");
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
						log.info("-->start execute insert user table");
						Query queryUpdateUser = em.createNativeQuery(sqlUser);
						int affectRows = queryUpdateUser.executeUpdate();
						
						log.info("-->start execute insert role table");
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
				else if(account.getUserType().equals("U")){
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
        } catch (RemoteException e) {
	        // TODO Auto-generated catch block
	        e.printStackTrace();
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

    @SuppressWarnings("unchecked")
    @Override
    @Transactional
	public String ValidateAccess(String accountId) {
		// TODO Auto-generated method stub
		String rtStr="";
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
		return rtStr; 
	}

	@Override
	public String sayHi(String text) {
        System.out.println("sayHi called");
        return "Hello " + text;
    }
	
}
