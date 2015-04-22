package haitai.edi.impl;

import haitai.edi.ProductService;
import haitai.edi.jaxws.KeyValueOfstringstring;

import java.math.BigInteger;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.jws.WebService;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOCompany;
import org.datacontract.schemas._2004._07.CCN_ProductAPI_Component_BussinessEntity.DTOUserAccount;
import org.springframework.transaction.annotation.Transactional;
import org.tempuri.IProductAPIServiceProxy;

//(targetNamespace = "http://impl.edi.haitai/", endpointInterface = "haitai.edi.ProductService", portName = "ProductServiceImplPort", serviceName = "ProductServiceImplService")
@WebService(targetNamespace = "http://tempuri.org/", endpointInterface = "haitai.edi.ProductService")
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
    @SuppressWarnings("unchecked")
	public String Activate(String accountID, ArrayList<KeyValueOfstringstring> keyValuePair) {		
				
		//String productID=keyValuePair.get("ProductID");
		
		IProductAPIServiceProxy iproduct=new IProductAPIServiceProxy();
		try {
			//调用CCN Platform User Info
			DTOUserAccount account=iproduct.getUserAccount(accountID, "FOS_FMS");
			if(account!=null&&account.getUserType()!=null){
				String compCode=account.getCompanyCode();
				
				String emailAddress=account.getEmailAddress();
				String userLoginName=account.getUserID();
				
				if("A".equals(account.getUserType())){
					//调用CCN Platform Company Info
					String globalCompanyID=account.getGlobalCompanyID();
					DTOCompany company=iproduct.getCompany(globalCompanyID);					
					if(company!=null){				
						String compName = company.getCompanyName1();
						
						//检查是否激活过
						
						String sql1 = " select count(*) from P_COMPANY  where COMP_CODE ='"+compCode+"' ";
						
						Query query1  = em.createNativeQuery(sql1);
						List<Object> objList = query1.getResultList();
						if(objList!=null && objList.size()>0){
							BigInteger count = (BigInteger)objList.get(0);
							if(count.intValue()>0){
								return "Company already exist."; 
							}
						}
						
						String sql2 = " select count(*) from P_USER  where USER_LOGIN_NAME ='"+userLoginName+"' ";
						
						Query query2  = em.createNativeQuery(sql2);
						List<Object> objList2 = query2.getResultList();
						if(objList2!=null && objList2.size()>0){
							BigInteger count2 = (BigInteger)objList2.get(0);
							if(count2.intValue()>0){
								return "User already exist."; 
							}
						}
						
						String sql ="call sp_active_company('"+compCode+"','"+compName+"','"+accountID+"','"+userLoginName+"','"+emailAddress+"');";
						try {
							Query queryUpdateCom = em.createNativeQuery(sql);
							queryUpdateCom.executeUpdate();											
							
							/*String sourceDir = ConfigUtil.getContextPath()+ConstUtil.DIR_SEP+Const.initDataDir+ConstUtil.DIR_SEP+"FOS"+ConstUtil.DIR_SEP;
							
							String targetDir = ConfigUtil.getContextPath()+
									ConstUtil.DIR_SEP+"data"+ConstUtil.DIR_SEP+compCode+
									ConstUtil.DIR_SEP+"template"+ConstUtil.DIR_SEP;
							
							FileUtil.copyDirectiory(sourceDir, targetDir);*/
							
							return "";
						}
						catch (Exception ex) {
						  ex.printStackTrace();
						  return "Active User Account failed.";
						}
					} 
					else 
						return "Active User Account failed.";
				}
				else if(account.getUserType().equals("U")){
					StringBuffer sbUser=new StringBuffer();
					sbUser.append("insert into P_USER (");
					sbUser.append("USER_NAME,USER_LOGIN_NAME,USER_EMAIL,USER_PASSWORD,");
					sbUser.append("USER_PASSWORD_MODIFY_DATE,UUID,ACTIVE,COMP_CODE,VERSION,REMOVED");
					sbUser.append(")");
					sbUser.append("values(");
					sbUser.append("'"+userLoginName+"','"+userLoginName+"','"+emailAddress+"',");
					sbUser.append("'e10adc3949ba59abbe56e057f20f883e',now(),accountID,1,'"+compCode+"',0,0");
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
	public String Suspend(String accountID, ArrayList<KeyValueOfstringstring> keyValuePair) {		
		StringBuffer sbUser=new StringBuffer();
		sbUser.append(" update P_USER ");
		sbUser.append(" set ACTIVE=0");
		sbUser.append(" where UUID='"+accountID+"' ");
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
	public String UnSuspend(String accountID, ArrayList<KeyValueOfstringstring> keyValuePair) {		
		StringBuffer sbUser=new StringBuffer();
		sbUser.append(" update P_USER ");
		sbUser.append(" set ACTIVE=1");
		sbUser.append(" where UUID='"+accountID+"' ");
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
	public String Terminate(String accountID, ArrayList<KeyValueOfstringstring> keyValuePair) {		
		StringBuffer sbUser=new StringBuffer();
		sbUser.append(" update P_USER ");
		sbUser.append(" set REMOVED=1");
		sbUser.append(" where UUID ='"+accountID+"' ");
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
	public String ValidateAccess(String accountID, ArrayList<KeyValueOfstringstring> keyValuePair) {
    	IProductAPIServiceProxy iproduct=new IProductAPIServiceProxy();
    	//String productID=keyValuePair.get("ProductID");
		
    	try {
			//调用CCN Platform User Info
			DTOUserAccount account=iproduct.getUserAccount(accountID, "FOS_FMS");
			if(account!=null&&account.getUserType()!=null){								
				
				String sessionID = account.getGlobalStationID();
				iproduct.productStartLog(sessionID, accountID,"FOS_FMS");
				
				StringBuffer sbs = new StringBuffer();
				sbs.append(" select count(*) from P_USER ");
				sbs.append(" where ACTIVE=1 and REMOVED=0 and UUID='"+accountID+"' ");
				
				Query querySelectUser  = em.createNativeQuery(sbs.toString());
				List<Object> objList = querySelectUser.getResultList();
				if(objList!=null && objList.size()>0){
					BigInteger count = (BigInteger)objList.get(0);
					if(count.intValue()==1){
						return "";
					}
					else
						return "Validate Access Failed."; 
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
