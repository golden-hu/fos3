package haitai.fos.ws.entity.idao;

import haitai.fos.ws.entity.table.WInquiry;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface IWInquiryDAO {
	public void save(WInquiry entity);

	public void delete(Integer id);

	public WInquiry update(WInquiry entity);

	public WInquiry findById(Integer id);

	public List<WInquiry> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<Object> complexQuery(
			final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
