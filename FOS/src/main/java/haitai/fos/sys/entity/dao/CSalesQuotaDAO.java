package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICSalesQuotaDAO;
import haitai.fos.sys.entity.table.CSalesQuota;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class CSalesQuotaDAO extends GenericDAO<CSalesQuota, Integer> implements
		ICSalesQuotaDAO {

	public CSalesQuotaDAO() {
		super(CSalesQuota.class);
	}
}
