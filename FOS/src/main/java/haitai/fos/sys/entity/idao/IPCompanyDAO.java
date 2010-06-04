package haitai.fos.sys.entity.idao;

import java.util.Map;

import haitai.fos.sys.entity.table.PCompany;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface IPCompanyDAO {
	public void save(PCompany entity);

	public void delete(Integer id);

	public PCompany update(PCompany entity);

	public PCompany findById(Integer id);

	public List<PCompany> findByProperties(final Map<String, Object> propertyMap);

	public List<PCompany> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
