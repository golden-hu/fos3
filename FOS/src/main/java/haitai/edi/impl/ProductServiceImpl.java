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
import org.springframework.transaction.annotation.Transactional;

import org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompany;
import org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount;
import org.tempuri.IProductAPIServiceProxy;
import sg.com.ccn.util.Const;
import sg.com.ccn.util.CopyFile;
import sg.com.ccn.util.InitData;

import haitai.edi.ProductService;
import haitai.fw.util.ConfigUtil;
import haitai.fw.util.ConstUtil;

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
    @Override
    @Transactional
	public String Activate(String accountID, HashMap<String, String> keyValuePair) {		
				
		String productID=keyValuePair.get("ProductID");
		
		IProductAPIServiceProxy iproduct=new IProductAPIServiceProxy();
		try {
			//调用CCN Platform User Info
			DTOUserAccount account=iproduct.getUserAccount(accountID, productID);
			if(account!=null&&account.getUserType()!=null){
				String compCode=account.getCompanyCode();
				
				String emailAddress=account.getEmailAddress();
				String userLoginName=account.getUserID();
				
				if("A".equals(account.getUserType())){
					//调用CCN Platform Company Info
					String globalCompanyID=account.getGlobalCompanyID();
					DTOCompany company=iproduct.getCompany(globalCompanyID);
					String compName = company.getCompanyName1();
					
					if(company!=null){
						
						String sql ="call sp_active_company('"+compCode+"','"+compName+"','"+userLoginName+"','"+emailAddress+"');";
						try {
							Query queryUpdateCom = em.createNativeQuery(sql);
							queryUpdateCom.executeUpdate();
							
							
							//初始化公司和帐号脚本
							String sqlFilePathComp=ConfigUtil.getContextPath()+
									ConstUtil.DIR_SEP+Const.initDataDir+ConstUtil.DIR_SEP+Const.initSql;
							String sqlDriver=Const.mysqlDriver;
							String sqlUrl=Const.mysqlUrl;
							String sqlUserName=Const.mysqlUserName;
							String sqlPassword=Const.mysqlPassword;
							new InitData().initSqlFile(compCode, sqlFilePathComp, sqlDriver, sqlUrl, sqlUserName, sqlPassword);							
							
							CopyFile confile= new CopyFile();
							String s=ConfigUtil.getContextPath()+
									ConstUtil.DIR_SEP+Const.initDataDir+ConstUtil.DIR_SEP+"FOS"+ConstUtil.DIR_SEP;
							String t=ConfigUtil.getContextPath()+
									ConstUtil.DIR_SEP+"data"+ConstUtil.DIR_SEP+compCode+
									ConstUtil.DIR_SEP+"template"+ConstUtil.DIR_SEP;
							confile.fileCopy(s, t);
							
							return "";
						}
						catch (Exception ex) {
						  ex.printStackTrace();
						  return "Active User Account failed.";
						}
					} 
					else {
						return "Active User Account failed.";
					}
				}
				else if(account.getUserType().equals("U")){
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
					try {
						Query queryUpdateUser = em.createNativeQuery(sqlUser);
						int affectRows = queryUpdateUser.executeUpdate();
						if(affectRows==1){
							 return "";
						}
						else 
							return "Active User Account failed.";
					}
					catch (Exception ex) {
					  ex.printStackTrace();
					  return "Active User Account failed.";
					}
				}
				else
					return "Active User Account failed.UserType error";
			}
			else
				 return "Active User Account failed.";
        } 
		catch (RemoteException e) {
	        e.printStackTrace();
	        return "Active User Account failed.";
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
	public String Suspend(String accountID, HashMap<String, String> keyValuePair) {
		//String compCode=keyValuePair.get("compCode");
		String userLoginName=accountID;
		
		StringBuffer sbUser=new StringBuffer();
		sbUser.append(" update P_USER ");
		sbUser.append(" set ACTIVE=0");
		sbUser.append(" where USER_LOGIN_NAME='"+userLoginName+"' ");
		//sbUser.append(" and COMP_CODE='"+compCode+"' ");
		String sqlUser=sbUser.toString();
		try {
			Query queryUpdateUser = em.createNativeQuery(sqlUser);
			int affectRows = queryUpdateUser.executeUpdate();
			if(affectRows==1){
				return "";
			}
			else
				return "Active User Account failed.";
		}
		catch (Exception ex) {
		  ex.printStackTrace();
		  return "Active User Account failed.";
		}
	}

	/**
	 * UnSuspend company account || User
	 * @param compCode
	 * @param userLoginName
	 * @return
	 */
	@Override
	@Transactional
	public String UnSuspend(String accountID, HashMap<String, String> keyValuePair) {
		//String compCode=keyValuePair.get("compCode");
		String userLoginName=accountID;
		
		StringBuffer sbUser=new StringBuffer();
		sbUser.append(" update P_USER ");
		sbUser.append(" set ACTIVE=1");
		sbUser.append(" where USER_LOGIN_NAME='"+userLoginName+"' ");
		//sbUser.append(" and COMP_CODE='"+compCode+"' ");
		String sqlUser=sbUser.toString();
		try {
			Query queryUpdateUser = em.createNativeQuery(sqlUser);
			int affectRows = queryUpdateUser.executeUpdate();
			if(affectRows==1){
				return "";
			}
			else
				 return "UnSuspend User Account failed.";
		}
		catch (Exception ex) {
		  ex.printStackTrace();
		  return "UnSuspend User Account failed.";
		}
	}

	/**
	 * Terminate company account || User
	 * @param compCode
	 * @param userLoginName
	 * @return
	 */
	@Override
	@Transactional
	public String Terminate(String accountID, HashMap<String, String> keyValuePair) {
		//String compCode=keyValuePair.get("compCode");
		String userLoginName=accountID;
		
		StringBuffer sbUser=new StringBuffer();
		sbUser.append(" update P_USER ");
		sbUser.append(" set REMOVED=1");
		sbUser.append(" where USER_LOGIN_NAME='"+userLoginName+"' ");
		//sbUser.append(" and COMP_CODE='"+compCode+"' ");
		String sqlUser=sbUser.toString();
		try {
			Query queryUpdateUser = em.createNativeQuery(sqlUser);
			int affectRows = queryUpdateUser.executeUpdate();
			if(affectRows==1){
				return "";
			}
			else
				return "UnSuspend User Account failed.";
		}
		catch (Exception ex) {
		  ex.printStackTrace();
		  return "UnSuspend User Account failed.";
		}
	}

    @SuppressWarnings("unchecked")
    @Override
    @Transactional
	public String ValidateAccess(String accountID, HashMap<String, String> keyValuePair) {
    	IProductAPIServiceProxy iproduct=new IProductAPIServiceProxy();
    	String productID=keyValuePair.get("ProductID");
		
    	try {
			//调用CCN Platform User Info
			log.info("-->start call cnn platform account interface");
			DTOUserAccount account=iproduct.getUserAccount(accountID, productID);
			if(account!=null&&account.getUserType()!=null){								
				
				String sessionID = account.getGlobalStationID();
				iproduct.productStartLog(sessionID, accountID,productID);
				
				StringBuffer sbs = new StringBuffer();
				sbs.append(" select count(*) from P_USER ");
				sbs.append(" where USER_LOGIN_NAME='"+accountID+"' ");
				
				Query querySelectUser  = em.createNativeQuery(sbs.toString());
				List<Object> objListUser = querySelectUser.getResultList();
				if(objListUser!=null&&objListUser.size()>0){
					Integer i=Integer.parseInt(objListUser.get(0).toString());
					if(i==0){
						return "Validate Access Failed"; 
					}
					else{						
						return "";
					}
				}
				else {
					return "Validate Access Failed"; 
				}
			}
			else
				return "Validate Access Failed"; 
    	} 
		catch (RemoteException e) {
	        e.printStackTrace();
	        return "Validate Access Failed"; 
        }
	}
	
}
