package haitai.fos.exp.controller;

import haitai.fos.exp.entity.table.TExportHistory;
import haitai.fos.exp.entity.table.TInvoice;
import haitai.fos.exp.entity.table.TInvoiceItem;
import haitai.fos.exp.service.TExportHistoryService;
import haitai.fos.exp.service.TInvoiceItemService;
import haitai.fos.exp.service.TInvoiceService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("ExpController")
public class ExpController {
	private TExportHistoryService historyService;
	private TInvoiceService invoiceService;
	private TInvoiceItemService invoiceItemService;

	@Transactional
	public List<TExportHistory> saveExportHistory(
			List<TExportHistory> entityList) {
		return historyService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<TExportHistory> queryExportHistory(Map<String, Object> queryMap) {
		return historyService.query(queryMap);
	}

	@Transactional
	public void dumpExportHistory(
			Map<String, Object> queryMap) {
		historyService.dump(queryMap);
	}

	@Transactional
	public List<TInvoice> saveInvoice(List<TInvoice> entityList) {
		return invoiceService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<TInvoice> queryInvoice(Map<String, Object> queryMap) {
		return invoiceService.query(queryMap);
	}

	@Transactional
	public List<TInvoiceItem> saveInvoiceItem(List<TInvoiceItem> entityList) {
		return invoiceItemService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<TInvoiceItem> queryInvoiceItem(Map<String, Object> queryMap) {
		return invoiceItemService.query(queryMap);
	}

	public TExportHistoryService getHistoryService() {
		return historyService;
	}

	@Autowired
	public void setHistoryService(TExportHistoryService historyService) {
		this.historyService = historyService;
	}

	public TInvoiceService getInvoiceService() {
		return invoiceService;
	}

	@Autowired
	public void setInvoiceService(TInvoiceService invoiceService) {
		this.invoiceService = invoiceService;
	}

	public TInvoiceItemService getInvoiceItemService() {
		return invoiceItemService;
	}

	@Autowired
	public void setInvoiceItemService(TInvoiceItemService invoiceItemService) {
		this.invoiceItemService = invoiceItemService;
	}

}
