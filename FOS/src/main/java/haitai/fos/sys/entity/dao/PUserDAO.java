package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPUserDAO;
import haitai.fos.sys.entity.table.PUser;
import haitai.fw.entity.GenericDAO;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

@Component
public class PUserDAO extends GenericDAO<PUser, Integer> implements IPUserDAO {

	public PUserDAO() {
		super(PUser.class);
	}

	@SuppressWarnings({ "rawtypes" })
	public List queryFuncCode() {
		StringBuffer sb = new StringBuffer();
		sb.append("select distinct rf.funcCode from PUserRole u, PRoleFunction rf ");
		sb.append("where u.roleId = rf.roleId ");
		sb.append("and u.userId = :userId ");
		final String queryString = sb.toString();
		List retList = getJpaTemplate().executeFind(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter("userId", SessionManager
						.getAttr(SessionKeyType.UID));
				return query.getResultList();
			}
		});
		return retList;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<PUser> queryByNameOrEmail(final String name, final String password) {
		StringBuffer sb = new StringBuffer();
		sb.append("select t1 from PUser t1 ");
		sb.append("where t1.removed = 0 ");
		sb.append("and t1.userPassword = :password ");
		sb.append("and t1.userLoginName = :loginname ");
		final String queryString = sb.toString();
		List retList = getJpaTemplate().executeFind(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter("password", password);
				query.setParameter("loginname", name);
				return query.getResultList();
			}
		});
		return retList;
	}
}
