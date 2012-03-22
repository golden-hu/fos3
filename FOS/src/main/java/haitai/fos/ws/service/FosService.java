package haitai.fos.ws.service;

import java.util.List;
import java.util.Map;

import haitai.fos.ffop.entity.idao.IFBlDAO;
import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.idao.IFTaskDAO;
import haitai.fos.ffop.entity.table.FBl;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FTask;
import haitai.fos.ffse.entity.idao.ISBillDAO;
import haitai.fos.ffse.entity.idao.ISBillItemDAO;
import haitai.fos.ffse.entity.table.SBill;
import haitai.fos.ffse.entity.table.SBillItem;
import haitai.fos.general.entity.idao.IGVoyageDAO;
import haitai.fos.general.entity.table.GVoyage;
import haitai.fw.entity.FosQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FosService {
	@Autowired
	private IFConsignDAO consignDao;
	
	@Autowired
	private IFBlDAO blDao;
	
	@Autowired
	private IGVoyageDAO voyageDao;
	
	@Autowired
	private ISBillDAO billDao;
	
	@Autowired
	private ISBillItemDAO billItemDao;
	
	@Autowired
	private IFTaskDAO taskDao;

	@Transactional(readOnly = true)
	public List<FConsign> complexQueryConsign(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return consignDao.complexQueryForWs(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public List<FBl> complexQueryBl(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return blDao.complexQueryForWs(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public List<GVoyage> complexQueryVoyage(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return voyageDao.complexQuery(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public List<SBill> complexQueryBill(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return billDao.complexQuery(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public List<SBillItem> queryBillItem(Map<String, Object> queryMap) {
		return billItemDao.findByProperties(queryMap);
	}
	
	@Transactional(readOnly = true)
	public List<FTask> queryTask(Map<String, Object> queryMap) {
		return taskDao.findByProperties(queryMap);
	}
}
