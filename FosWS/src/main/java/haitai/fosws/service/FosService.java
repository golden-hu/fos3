package haitai.fosws.service;

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
	private IFConsignDAO consignDao = null;
	private IFBlDAO blDao = null;
	private IGVoyageDAO voyageDao = null;
	private ISBillDAO billDao = null;
	private ISBillItemDAO billItemDao = null;
	private IFTaskDAO taskDao = null;

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

	public IFConsignDAO getConsignDao() {
		return consignDao;
	}

	@Autowired
	public void setConsignDao(IFConsignDAO consignDao) {
		this.consignDao = consignDao;
	}

	public IFBlDAO getBlDao() {
		return blDao;
	}

	@Autowired
	public void setBlDao(IFBlDAO blDao) {
		this.blDao = blDao;
	}

	public IGVoyageDAO getVoyageDao() {
		return voyageDao;
	}

	@Autowired
	public void setVoyageDao(IGVoyageDAO voyageDao) {
		this.voyageDao = voyageDao;
	}

	public ISBillDAO getBillDao() {
		return billDao;
	}

	@Autowired
	public void setBillDao(ISBillDAO billDao) {
		this.billDao = billDao;
	}

	public ISBillItemDAO getBillItemDao() {
		return billItemDao;
	}

	@Autowired
	public void setBillItemDao(ISBillItemDAO billItemDao) {
		this.billItemDao = billItemDao;
	}

	public IFTaskDAO getTaskDao() {
		return taskDao;
	}

	@Autowired
	public void setTaskDao(IFTaskDAO taskDao) {
		this.taskDao = taskDao;
	}

}
