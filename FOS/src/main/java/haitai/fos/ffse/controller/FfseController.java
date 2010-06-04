package haitai.fos.ffse.controller;

import haitai.fos.ffop.service.FConsignService;
import haitai.fos.ffse.entity.table.SBill;
import haitai.fos.ffse.entity.table.SBulkExpense;
import haitai.fos.ffse.entity.table.SExRate;
import haitai.fos.ffse.entity.table.SExpense;
import haitai.fos.ffse.entity.table.SInterestRate;
import haitai.fos.ffse.entity.table.SInvoice;
import haitai.fos.ffse.entity.table.SInvoiceEntry;
import haitai.fos.ffse.entity.table.SInvoiceItem;
import haitai.fos.ffse.entity.table.SPr;
import haitai.fos.ffse.entity.table.SVoucher;
import haitai.fos.ffse.service.SBalanceService;
import haitai.fos.ffse.service.SBillService;
import haitai.fos.ffse.service.SBulkExpenseService;
import haitai.fos.ffse.service.SExRateService;
import haitai.fos.ffse.service.SExpenseService;
import haitai.fos.ffse.service.SInterestRateService;
import haitai.fos.ffse.service.SInvoiceNoService;
import haitai.fos.ffse.service.SInvoiceService;
import haitai.fos.ffse.service.SPrService;
import haitai.fos.ffse.service.SVoucherService;
import haitai.fw.entity.FosQuery;

import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("FfseController")
public class FfseController {
	private SExpenseService expenseService;
	private SInvoiceService invoiceService;
	private FConsignService consignService;
	private SExRateService exRateService;
	private SVoucherService voucherService;
	private SPrService prService;
	private SBillService billService;
	private SInvoiceNoService invoiceNoService;
	private SInterestRateService interestRateService;
	private SBulkExpenseService bulkExpenseService;
	private SBalanceService balanceService;

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveBill(List<SBill> entityList) {
		return billService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryBill(Map<String, Object> queryMap) {
		return billService.query(queryMap);
	}

	@Transactional
	public void cancelBill(Map<String, Object> queryMap){
		billService.cancel(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryBillItem(Map<String, Object> queryMap) {
		return billService.queryItem(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveExpense(List<SExpense> entityList) throws IllegalAccessException, InvocationTargetException {
		return expenseService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryExpense(Map<String, Object> queryMap) {
		return expenseService.query(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveInvoice(List<SInvoice> entityList) {
		return invoiceService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryInvoice(Map<String, Object> queryMap) {
		return invoiceService.query(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List invoiceCreateQuery(Map<String, Object> queryMap) {
		return expenseService.invoiceCreateQuery(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveExRate(List<SExRate> entityList) {
		return exRateService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryExRate(Map<String, Object> queryMap) {
		return exRateService.query(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveInterestRate(List<SInterestRate> entityList) {
		return interestRateService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryInterestRate(Map<String, Object> queryMap) {
		return interestRateService.query(queryMap);
	}
	
	@Transactional
	public List<SBulkExpense> saveBulkExpense(List<SBulkExpense> entityList) {
		return bulkExpenseService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<SBulkExpense> queryBulkExpense(Map<String, Object> queryMap) {
		return bulkExpenseService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List writeOffQuery(Map<String, Object> queryMap) {
		return expenseService.queryWriteOff(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryExpenseFilted(Map<String, Object> queryMap) {
		return expenseService.queryAndFilted(queryMap);
	}


	@Transactional(readOnly = true)
	public List<SInvoiceEntry> queryInvoiceEntry(Map<String, Object> queryMap) {
		return invoiceService.queryEntry(queryMap);
	}
	

	@Transactional(readOnly = true)
	public List<SInvoiceItem> queryInvoiceItem(Map<String, Object> queryMap) {
		return invoiceService.queryItem(queryMap);
	}
	
	@Transactional
	public void checkInvoice(Map<String, Object> queryMap){
		invoiceService.checkInvoice(queryMap);
	}

	@Transactional
	public void cancelInvoice(Map<String, Object> queryMap){
		invoiceService.cancelInvoice(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveVoucher(List entityList) {
		return voucherService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryVoucher(Map<String, Object> queryMap) {
		return voucherService.query(queryMap);
	}

	@Transactional(readOnly = true)
	public void cancelVoucher(Map<String, Object> queryMap) {
		voucherService.cancelVoucher(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveInvoiceNo(List entityList) {
		return invoiceNoService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryInvoiceNo(Map<String, Object> queryMap) {
		return invoiceNoService.query(queryMap);
	}
	
	@Transactional
	public void updateInvoiceNoActiveFlag(Map<String, Object> queryMap) {
		invoiceNoService.updateActiveFlag(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List savePr(List entityList) {
		return prService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryPr(Map<String, Object> queryMap) {
		return prService.query(queryMap);
	}


	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryPrItem(Map<String, Object> queryMap) {
		return prService.queryItem(queryMap);
	}

	@Transactional
	public void updatePrStatus(Map<String, Object> queryMap) {
		prService.updateStatus(queryMap);
	}

	@Transactional
	public void updateVoucherStatus(Map<String, Object> queryMap) {
		voucherService.updateStatus(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryVoucherItem(Map<String, Object> queryMap) {
		return voucherService.queryItem(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryBalance(Map<String, Object> queryMap) {
		return balanceService.query(queryMap);
	}

	/**
	 * 发票综合查询
	 * @param conditions
	 * @param queryMap
	 * @return
	 */
	@Transactional(readOnly = true)
	public List<SInvoice> complexQueryInvoice(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return invoiceService.complexQuery(conditions, queryMap);
	}
	@Transactional(readOnly = true)
	public List<SInvoiceItem> complexQueryInvoiceItem(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return invoiceService.complexQueryInvoiceItem(conditions, queryMap);
	}

	/**
	 * 托收单/付款单 综合查询
	 * @param conditions
	 * @param queryMap
	 * @return
	 */
	@Transactional(readOnly = true)
	public List<SPr> complexQueryPr(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return prService.complexQuery(conditions, queryMap);
	}
	
	/**
	 * 收款单综合查询
	 * @param conditions
	 * @param queryMap
	 * @return
	 */
	@Transactional(readOnly = true)
	public List<SVoucher> complexQueryVoucher(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return voucherService.complexQuery(conditions, queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryExpense(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return expenseService.complexQuery(conditions, queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryExpenseB(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return expenseService.complexQueryExpenseB(conditions, queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryBill(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return billService.complexQuery(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryInvoiceItemByPrId(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return invoiceService.complexQueryInvoiceItemByPrId(conditions, queryMap);
	}

	public SExpenseService getExpenseService() {
		return expenseService;
	}

	@Autowired
	public void setExpenseService(SExpenseService expenseService) {
		this.expenseService = expenseService;
	}

	public SInvoiceService getInvoiceService() {
		return invoiceService;
	}

	@Autowired
	public void setInvoiceService(SInvoiceService invoiceService) {
		this.invoiceService = invoiceService;
	}

	public FConsignService getConsignService() {
		return consignService;
	}

	@Autowired
	public void setConsignService(FConsignService consignService) {
		this.consignService = consignService;
	}

	public SExRateService getExRateService() {
		return exRateService;
	}

	@Autowired
	public void setExRateService(SExRateService exRateService) {
		this.exRateService = exRateService;
	}

	public SVoucherService getVoucherService() {
		return voucherService;
	}

	@Autowired
	public void setVoucherService(SVoucherService voucherService) {
		this.voucherService = voucherService;
	}

	public SPrService getPrService() {
		return prService;
	}

	@Autowired
	public void setPrService(SPrService prService) {
		this.prService = prService;
	}

	public SBillService getBillService() {
		return billService;
	}

	@Autowired
	public void setBillService(SBillService billService) {
		this.billService = billService;
	}

	public SInvoiceNoService getInvoiceNoService() {
		return invoiceNoService;
	}

	@Autowired
	public void setInvoiceNoService(SInvoiceNoService invoiceNoService) {
		this.invoiceNoService = invoiceNoService;
	}

	public SInterestRateService getInterestRateService() {
		return interestRateService;
	}

	@Autowired
	public void setInterestRateService(SInterestRateService interestRateService) {
		this.interestRateService = interestRateService;
	}

	public SBulkExpenseService getBulkExpenseService() {
		return bulkExpenseService;
	}

	@Autowired
	public void setBulkExpenseService(SBulkExpenseService bulkExpenseService) {
		this.bulkExpenseService = bulkExpenseService;
	}

	public SBalanceService getBalanceService() {
		return balanceService;
	}

	@Autowired
	public void setBalanceService(SBalanceService balanceService) {
		this.balanceService = balanceService;
	}

}
