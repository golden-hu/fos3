package haitai.fos.general.entity.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import haitai.fos.general.entity.idao.IGVoyageDAO;
import haitai.fos.general.entity.table.GVoyage;
import haitai.fw.entity.GenericDAO;

import org.springframework.orm.jpa.JpaCallback;
import org.springframework.stereotype.Component;

@Component
public class GVoyageDAO extends GenericDAO<GVoyage, Integer> implements
		IGVoyageDAO {

	public GVoyageDAO() {
		super(GVoyage.class);
	}
	
	@SuppressWarnings("unchecked")
	public void updateVessName(final Integer vessId, final String vessName,
			final String vessNameCn) {
		StringBuffer sb = new StringBuffer();
		sb.append("update GVoyage t1 set t1.vessName = ?, t1.vessNameCn = ?, t1.version = t1.version + 1 ");
		sb.append("where t1.vessId = ? and t1.removed = 0");
		final String queryString = sb.toString();
		getJpaTemplate().execute(new JpaCallback() {
			public Object doInJpa(EntityManager em) throws PersistenceException {
				Query query = em.createQuery(queryString);
				query.setParameter(1, vessName);
				query.setParameter(2, vessNameCn);
				query.setParameter(3, vessId);
				return query.executeUpdate();
			}
		});
	}
}
