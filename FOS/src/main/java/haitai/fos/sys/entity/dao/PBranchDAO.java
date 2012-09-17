/**
 * 
 */
package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPBranchDAO;
import haitai.fos.sys.entity.table.PBranch;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;


/**
 * @author Gordon
 *
 */
@Component
public class PBranchDAO extends GenericDAO<PBranch, Integer> implements IPBranchDAO {

	public PBranchDAO() {
		super(PBranch.class);
	}
}