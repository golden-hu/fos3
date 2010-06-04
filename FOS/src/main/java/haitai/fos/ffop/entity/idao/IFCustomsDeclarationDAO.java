package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FCustomsDeclaration;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface IFCustomsDeclarationDAO {
	public void save(FCustomsDeclaration entity);

	public void delete(Integer id);

	public FCustomsDeclaration update(FCustomsDeclaration entity);

	public FCustomsDeclaration findById(Integer id);

	public List<FCustomsDeclaration> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<FCustomsDeclaration> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
