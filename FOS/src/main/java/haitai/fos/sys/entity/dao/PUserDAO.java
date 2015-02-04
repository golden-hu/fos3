package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPUserDAO;
import haitai.fos.sys.entity.table.PUser;
import haitai.fw.entity.GenericDAO;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;
import java.util.List;

@Component
public class PUserDAO extends GenericDAO<PUser, Integer> implements IPUserDAO {

	public PUserDAO() {
		super(PUser.class);
	}

	@SuppressWarnings({"rawtypes"})
	public List queryFuncCode() {
		StringBuilder sb = new StringBuilder();
		sb.append("select distinct rf.funcCode from PUserRole u, PRoleFunction rf ");
		sb.append("where u.roleId = rf.roleId ");
		sb.append("and u.userId = :userId ");
		final String queryString = sb.toString();
		return getJpaTemplate().executeFind(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter("userId", SessionManager
						.getAttr(SessionKeyType.UID));
				return query.getResultList();
			}
		});
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	public List<PUser> queryByNameOrEmail(final String name, final String password) {
		StringBuilder sb = new StringBuilder();
		sb.append("select t1 from PUser t1 ");
		sb.append("where t1.removed = 0 ");
		sb.append("and t1.userPassword = :password ");
		sb.append("and (t1.userLoginName = :loginName or t1.userName = :userName) ");
		final String queryString = sb.toString();
		return getJpaTemplate().executeFind(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter("password", password);
				query.setParameter("loginName", name);
				query.setParameter("userName", name);
				return query.getResultList();
			}
		});
	}
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
    public List <PUser> findByAccountId(final String name) {
		StringBuilder sb = new StringBuilder();
		sb.append("select t1 from PUser t1 ");
		sb.append("where t1.removed = 0 ");
		sb.append("and (t1.userLoginName = :loginName) ");
		final String queryString = sb.toString();
		return getJpaTemplate().executeFind(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter("loginName", name);
				return query.getResultList();
			}
		});
	}
}
