/**
 * 
 */
package haitai.fos.sys.entity.idao;

import java.util.Map;

import haitai.fos.sys.entity.table.PBranch;

import java.util.List;

/**
 * @author Gordon
 *
 */
public interface IPBranchDAO {

	public void delete(Integer id);

	public PBranch update(PBranch entity);

	public List<PBranch> saveByRowAction(List<PBranch> entityList);
	
	public PBranch findById(Integer id);

	public List<PBranch> findByProperties(
			final Map<String, Object> propertyMap);
	
}
