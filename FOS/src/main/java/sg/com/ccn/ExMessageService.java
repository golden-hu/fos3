package sg.com.ccn;

import haitai.fos.sys.entity.idao.IPRoleDAO;
import haitai.fos.sys.entity.idao.IPUserDAO;
import haitai.fw.util.ConfigUtil;
import haitai.fw.util.SpringContextHolder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExMessageService {
	@Autowired
	private ConfigUtil configUtil;
	
	@Transactional
	public void activeAccount(String orgCode,String userName,String userPassword) {
		IPUserDAO userDao=SpringContextHolder.getBean(IPUserDAO.class);
		
		
		IPRoleDAO roleDao=SpringContextHolder.getBean(IPRoleDAO.class);
	}
}
