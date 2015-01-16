package sg.com.ccn;

import java.util.List;

import javax.persistence.PersistenceContext;
import javax.persistence.EntityManager;
import javax.persistence.Query;

import haitai.fw.util.ConfigUtil;
import haitai.fw.util.ConstUtil;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import sg.com.ccn.util.Const;
import sg.com.ccn.util.CopyFile;
import sg.com.ccn.util.InitData;

@Service
public class CNNFwbService {
	@PersistenceContext(unitName="FOSPU")
	 private EntityManager em;
	
	/**
	 * Activate User
	 * @param compCode
	 * @param userLoginName
	 * @return
	 */
	@Transactional
	public boolean activeUser(String compCode,String userLoginName) {
		/*StringBuffer sbUser=new StringBuffer();
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
				return true;
			}
		}catch (Exception ex) {
		  ex.printStackTrace();
		}*/
		return false;
	}
	
}
