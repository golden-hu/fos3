package haitai.fos.exp.service;

import haitai.fos.exp.entity.idao.*;
import haitai.fos.exp.entity.table.*;
import haitai.fos.ffse.entity.idao.ISInvoiceDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceItemDAO;
import haitai.fos.ffse.entity.idao.ISVoucherDAO;
import haitai.fos.ffse.entity.idao.ISVoucherItemDAO;
import haitai.fos.ffse.entity.table.SInvoice;
import haitai.fos.ffse.entity.table.SInvoiceItem;
import haitai.fos.ffse.entity.table.SVoucher;
import haitai.fos.ffse.entity.table.SVoucherItem;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.*;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.FileOutputStream;
import java.util.*;

@Service
public class TExportHistoryService {

	@Autowired
	private ITExportHistoryDAO dao;
	@Autowired
	private ITInvoiceDAO expInvoDao;
	@Autowired
	private ITInvoiceItemDAO expInitDao;
	@Autowired
	private ISInvoiceDAO realInvoDao;
	@Autowired
	private ISInvoiceItemDAO realInitDao;
	@Autowired
	private ITVoucherDAO expVoucDao;
	@Autowired
	private ITVoucherItemDAO expVoitDao;
	@Autowired
	private ISVoucherDAO realVoucDao;
	@Autowired
	private ISVoucherItemDAO realVoitDao;

	@Transactional
	public List<TExportHistory> save(List<TExportHistory> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	public TExportHistory copy2Middle(Map<String, Object> queryMap, List parentList, List childList) {
		String exhiType = (String) queryMap.get("exhiType");
		Short type = Short.parseShort(exhiType);
		String dateF = (String) queryMap.get("exhiCheckDateF");
		String dateT = (String) queryMap.get("exhiCheckDateT");
		queryMap.remove(dateF);
		queryMap.remove(dateT);
		TExportHistory history;

		List<FosQuery> conditions = new ArrayList<FosQuery>();
		//根据查询条件,查询需要导入的发票或核销单
		if (type == ConstUtil.HIST_TYPE_AR_INVOICE || type == ConstUtil.HIST_TYPE_AP_INVOICE) {
			prepareInvoiceConditions(type, dateF, dateT, conditions);
			List<SInvoice> list = realInvoDao.complexQuery(conditions, queryMap);
			if (list.size() > 0) {
				history = saveExportHistory(type, dateF, dateT);
				saveExpInvo(list, history, parentList);
				saveExpInit(conditions, queryMap, history, childList);
				// 更新发票的上传标志
				for (SInvoice item : list) {
					item.setInvoUploadFlag(ConstUtil.TrueShort);
					realInvoDao.update(item);
				}
			} else {
				throw new BusinessException("exp.no_data");
			}
		} else {
			prepareVoucherConditions(type, dateF, dateT, conditions);
			List<SVoucher> list = realVoucDao.complexQuery(conditions, queryMap);
			if (list.size() > 0) {
				history = saveExportHistory(type, dateF, dateT);
				saveExpVouc(list, history, parentList);
				saveExpVoit(conditions, queryMap, history, childList);
				// 更新收款单的上传标志
				for (SVoucher item : list) {
					item.setVoucUploadFlag(ConstUtil.TrueShort);
					realVoucDao.update(item);
				}
			} else {
				throw new BusinessException("exp.no_data");
			}
		}
		return history;
	}

	private void prepareVoucherConditions(Short type, String dateF, String dateT, List<FosQuery> conditions) {
		conditions.add(new FosQuery("voucStatus", ConstUtil.SQL_OP_EQUAL, "1"));
		conditions.add(new FosQuery("voucUploadFlag", ConstUtil.SQL_OP_EQUAL, "0"));
		conditions.add(new FosQuery("voucCheckDate", ConstUtil.SQL_OP_MOREEQUAL, dateF));
		conditions.add(new FosQuery("voucCheckDate", ConstUtil.SQL_OP_LESSEQUAL, dateT));
		if (type == ConstUtil.HIST_TYPE_AR_RECEIPT) {
			conditions.add(new FosQuery("voucType", ConstUtil.SQL_OP_EQUAL, "R"));
		} else {
			conditions.add(new FosQuery("voucType", ConstUtil.SQL_OP_EQUAL, "P"));
		}
	}

	private void prepareInvoiceConditions(Short type, String dateF, String dateT, List<FosQuery> conditions) {
		conditions.add(new FosQuery("invoStatus", ConstUtil.SQL_OP_EQUAL, "1"));
		conditions.add(new FosQuery("invoUploadFlag", ConstUtil.SQL_OP_EQUAL, "0"));
		conditions.add(new FosQuery("invoSailDate", ConstUtil.SQL_OP_MOREEQUAL, dateF));
		conditions.add(new FosQuery("invoSailDate", ConstUtil.SQL_OP_LESSEQUAL, dateT));
		if (type == ConstUtil.HIST_TYPE_AR_INVOICE) {
			conditions.add(new FosQuery("invoType", ConstUtil.SQL_OP_EQUAL, "R"));
		} else {
			conditions.add(new FosQuery("invoType", ConstUtil.SQL_OP_EQUAL, "P"));
		}
	}

	private TExportHistory saveExportHistory(Short type, String dateF, String dateT) {
		TExportHistory history;
		history = new TExportHistory();
		history.setExhiType(type);
		history.setRowAction(RowAction.N);
		history.setExhiCheckDateF(StringUtil.string2Date(dateF));
		history.setExhiCheckDateT(StringUtil.string2Date(dateT));
		history.setExhiFileName("");
		dao.save(history);
		return history;
	}

	private void saveExpInvo(List<SInvoice> list, TExportHistory history, List<TInvoice> parentList) {
		for (SInvoice realItem : list) {
			TInvoice expItem = new TInvoice();
			BeanUtils.copyProperties(realItem, expItem);
			expItem.setExhiId(history.getExhiId());
			expItem.setExhiFlag(ConstUtil.TrueShort);
			expInvoDao.save(expItem);
			parentList.add(expItem);
		}
	}

	private void saveExpVouc(List<SVoucher> list, TExportHistory history, List<TVoucher> parentList) {
		for (SVoucher realItem : list) {
			TVoucher expItem = new TVoucher();
			BeanUtils.copyProperties(realItem, expItem);
			expItem.setExhiId(history.getExhiId());
			expItem.setExhiFlag(ConstUtil.TrueShort);
			expVoucDao.save(expItem);
			parentList.add(expItem);
		}
	}

	private void saveExpInit(List<FosQuery> conditions, Map<String, Object> queryMap, TExportHistory history,
							 List<TInvoiceItem> childList) {
		List<SInvoiceItem> itemList = realInitDao.complexQueryByParent(
				conditions, queryMap);
		Map<Integer, Integer> lineNoMap = new HashMap<Integer, Integer>();
		for (SInvoiceItem realItem : itemList) {
			TInvoiceItem expItem = new TInvoiceItem();
			BeanUtils.copyProperties(realItem, expItem);
			expItem.setExhiId(history.getExhiId());
			expItem.setExhiFlag(ConstUtil.TrueShort);
			int currentNo = 20;
			if (lineNoMap.containsKey(realItem.getInvoId())) {
				currentNo = lineNoMap.get(realItem.getInvoId());
				currentNo += 20;
			}
			lineNoMap.put(realItem.getInvoId(), currentNo);
			expItem.setExhiLine(currentNo);
			expInitDao.save(expItem);
			childList.add(expItem);
		}
	}

	private void saveExpVoit(List<FosQuery> conditions, Map<String, Object> queryMap, TExportHistory history,
							 List<TVoucherItem> childList) {
		List<SVoucherItem> itemList = realVoitDao.complexQueryByParent(
				conditions, queryMap);
		Map<Integer, Integer> lineNoMap = new HashMap<Integer, Integer>();
		for (SVoucherItem realItem : itemList) {
			TVoucherItem expItem = new TVoucherItem();
			BeanUtils.copyProperties(realItem, expItem);
			expItem.setExhiId(history.getExhiId());
			expItem.setExhiFlag(ConstUtil.TrueShort);
			int currentNo = 20;
			if (lineNoMap.containsKey(realItem.getInvoId())) {
				currentNo = lineNoMap.get(realItem.getInvoId());
				currentNo += 20;
			}
			lineNoMap.put(realItem.getInvoId(), currentNo);
			expItem.setExhiLine(currentNo);
			expVoitDao.save(expItem);
			childList.add(expItem);
		}
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public void dump(Map<String, Object> queryMap) {
		List parentList = new ArrayList();
		List childList = new ArrayList();
		TExportHistory history = copy2Middle(queryMap, parentList, childList);
		if (history == null) {
			return;
		}
		Workbook wb = null;
		switch (history.getExhiType()) {
			case ConstUtil.HIST_TYPE_AR_INVOICE:
				wb = writeArInvoice(parentList, childList);
				break;
			case ConstUtil.HIST_TYPE_AP_INVOICE:
				wb = writeApInvoice(parentList, childList);
				break;
			case ConstUtil.HIST_TYPE_AR_RECEIPT:
				wb = writeApReceipt(parentList, childList);
				break;
			case ConstUtil.HIST_TYPE_AP_PAYMENT:
				wb = writeApPayment(parentList, childList);
				break;
			default:
				break;
		}
		String tempFileName;
		if (history.getExhiType() == ConstUtil.HIST_TYPE_AR_INVOICE
				|| history.getExhiType() == ConstUtil.HIST_TYPE_AP_INVOICE) {
			tempFileName = "Invoice";
		} else {
			tempFileName = "Voucher";
		}
		tempFileName += ConstUtil.STRING_UNDERLINE + history.getExhiId() + ConstUtil.STRING_UNDERLINE
				+ StringUtil.date2String(TimeUtil.getNow()) + ConstUtil.STRING_DOT + ConstUtil.TEMP_SUFFIX_EXCEL;
		try {
			String dir = ConfigUtil.getRealExportDir();
			FileUtil.createDirs(dir);
			FileOutputStream f = new FileOutputStream(ConfigUtil.getRealExportDir() + ConstUtil.DIR_SEP
					+ tempFileName);
			assert wb != null;
			wb.write(f);
			f.close();
		} catch (Exception e) {
			throw new BusinessException("fw.unknown", e);
		}

		tempFileName = ConfigUtil.getExportDir() + ConstUtil.DIR_SEP + tempFileName;
		history.setExhiFileName(tempFileName);
		dao.update(history);
	}

	/**
	 * 应收发票
	 *
	 * @param invoiceList	 invoice list
	 * @param invoiceItemList invoice item list
	 * @return workbook
	 */
	private Workbook writeArInvoice(List<TInvoice> invoiceList, List<TInvoiceItem> invoiceItemList) {
		Workbook wb = new HSSFWorkbook();
		Sheet sheet = wb.createSheet("Invoices");
		List<Object[]> rowList = new ArrayList<Object[]>();
		Object[] rowData = new Object[]{"CNTBTCH", "CNTITEM", "IDCUST",
				"CODECURN", "BASETAX1", "AMTTAXTOT", "INVCDESC",
				"IDINVC", "DATEINVC", "EXCHRATEHC", "TEXTTRX", "AMTTAX1"};
		rowList.add(rowData);
		for (TInvoice item : invoiceList) {
			rowData = new Object[]{item.getExhiId(), item.getInvoId(), item.getCustId(),
					item.getCurrCode(), item.getInvoAmount(), "0", item.getInvoBlNo(),
					item.getInvoNo(), item.getInvoDate(), item.getInvoExRate(), "1", 0};
			rowList.add(rowData);
		}
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Invoice_Details");
		rowData = new Object[]{"CNTBTCH", "CNTITEM", "CNTLINE", "AMTEXTN",
				"AMTTXBL", "TOTTAX", "BASETAX1", "IDACCTREV", "TEXTDESC"};
		rowList.clear();
		rowList.add(rowData);
		for (TInvoiceItem item : invoiceItemList) {
			rowData = new Object[]{
					item.getExhiId(),
					item.getInvoId(),
					item.getExhiLine(),
					item.getInitInvoiceAmount(),
					item.getInitInvoiceAmount(),
					"0",
					item.getInitInvoiceAmount(),
					getChargeMapping(item.getInvoCurrCode(), item.getExpeType()),
					item.getConsNo()};
			rowList.add(rowData);
		}
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Invoice_Payment_Schedules");
		rowData = new Object[]{"CNTBTCH", "CNTITEM", "CNTPAYM", "DATEDUE", "AMTDUE"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Invoice_Optional_Fields");
		rowData = new Object[]{"CNTBTCH", "CNTITEM", "OPTFIELD", "VALUE",
				"TYPE", "LENGTH", "DECIMALS", "ALLOWNULL", "VALIDATE", "SWSET",
				"VALINDEX", "VALIFTEXT", "VALIFMONEY", "VALIFNUM", "VALIFLONG",
				"VALIFBOOL", "VALIFDATE", "VALIFTIME", "FDESC", "VDESC"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Invoice_Detail_Optional_Fields");
		rowData = new Object[]{"CNTBTCH", "CNTITEM", "CNTLINE", "OPTFIELD",
				"VALUE", "TYPE", "LENGTH", "DECIMALS", "ALLOWNULL", "VALIDATE",
				"SWSET", "VALINDEX", "VALIFTEXT", "VALIFMONEY", "VALIFNUM",
				"VALIFLONG", "VALIFBOOL", "VALIFDATE", "VALIFTIME", "FDESC",
				"VDESC"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		return wb;
	}

	/**
	 * 应付发票
	 *
	 * @param invoiceList	 invoice list
	 * @param invoiceItemList invoice item list
	 * @return workbook
	 */
	private Workbook writeApInvoice(List<TInvoice> invoiceList, List<TInvoiceItem> invoiceItemList) {
		Workbook wb = new HSSFWorkbook();
		Sheet sheet = wb.createSheet("Invoices");
		List<Object[]> rowList = new ArrayList<Object[]>();
		Object[] rowData = new Object[]{"CNTBTCH", "CNTITEM", "IDVEND", "IDINVC",
				"TEXTTRX", "IDTRX", "ORDRNBR", "PONBR", "INVCDESC",
				"IDACCTSET", "DATEINVC", "DATEASOF", "FISCYR", "FISCPER",
				"CODECURN", "RATETYPE", "EXCHRATEHC", "TERMCODE", "CODETAXGRP",
				"CODETAX1", "TAXCLASS1", "BASETAX1", "AMTTAX1", "AMTGROSTOT"};
		rowList.add(rowData);
		for (TInvoice item : invoiceList) {
			rowData = new Object[]{item.getExhiId(), item.getInvoId(),
					item.getCustId(), item.getInvoTaxNo(), "1", "12",
					item.getInvoTaxNo(), item.getInvoConsNo(),
					item.getInvoBlNo(), "", item.getCreateTime(),
					item.getInvoDate(), TimeUtil.getYear(),
					TimeUtil.getMonth(), item.getCurrCode(), "AV",
					item.getInvoExRate(), "30D", "", "", "", "", "",
					item.getInvoAmount()};
			rowList.add(rowData);
		}
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Invoice_Details");
		rowData = new Object[]{"CNTBTCH", "CNTITEM", "CNTLINE", "IDDIST",
				"TEXTDESC", "AMTTOTTAX", "BASETAX1", "TAXCLASS1", "SWTAXINCL1",
				"RATETAX1", "AMTTAX1", "IDGLACCT", "IDACCTTAX", "AMTDIST",
				"COMMENT"};
		rowList.clear();
		rowList.add(rowData);
		for (TInvoiceItem item : invoiceItemList) {
			rowData = new Object[]{
					item.getExhiId(),
					item.getInvoId(),
					item.getExhiLine(),
					"AP",
					item.getConsNo(),
					"",
					"",
					"",
					"",
					"",
					"",
					getChargeMapping(item.getInvoCurrCode(), item.getExpeType()),
					"", item.getInitInvoiceAmount(), ""};
			rowList.add(rowData);
		}
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Invoice_Payment_Schedules");
		rowData = new Object[]{"CNTBTCH", "CNTITEM", "CNTPAYM", "DATEDUE",
				"AMTDUE", "DATEDISC", "AMTDISC", "AMTDUEHC", "AMTDISCHC"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Invoice_Optional_Fields");
		rowData = new Object[]{"CNTBTCH", "CNTITEM", "OPTFIELD", "VALUE",
				"TYPE", "LENGTH", "DECIMALS", "ALLOWNULL", "VALIDATE", "SWSET",
				"VALINDEX", "VALIFTEXT", "VALIFMONEY", "VALIFNUM", "VALIFLONG",
				"VALIFBOOL", "VALIFDATE", "VALIFTIME", "FDESC", "VDESC"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Invoice_Detail_Optional_Fields");
		rowData = new Object[]{"CNTBTCH", "CNTITEM", "CNTLINE", "OPTFIELD",
				"VALUE", "TYPE", "LENGTH", "DECIMALS", "ALLOWNULL", "VALIDATE",
				"SWSET", "VALINDEX", "VALIFTEXT", "VALIFMONEY", "VALIFNUM",
				"VALIFLONG", "VALIFBOOL", "VALIFDATE", "VALIFTIME", "FDESC",
				"VDESC"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		return wb;
	}

	/**
	 * 收款单
	 *
	 * @param voucList voucher list
	 * @param voitList voucher item list
	 * @return workbook
	 */
	private Workbook writeApReceipt(List<TVoucher> voucList, List<TVoucherItem> voitList) {
		Workbook wb = new HSSFWorkbook();
		Sheet sheet = wb.createSheet("Receipts_Adjustments");
		List<Object[]> rowList = new ArrayList<Object[]>();
		Object[] rowData = new Object[]{"CODEPYMTYP", "CNTBTCH", "CNTITEM",
				"IDRMIT", "IDCUST", "DATERMIT", "TEXTRMIT", "TXTRMITREF",
				"AMTRMIT", "AMTRMITTC", "RATEEXCHTC", "AMTPAYMTC", "CODEPAYM",
				"CODECURN", "RATETYPEHC", "RMITTYPE", "DOCTYPE", "FISCYR",
				"FISCPER", "PAYMTYPE", "AMTRMITHC", "DOCNBR", "IDBANK",
				"CODECURNBC"};
		rowList.add(rowData);
		boolean isCash = false;
		for (TVoucher item : voucList) {
			if (item.getVoucPaymentType() == null || 6 == item.getVoucPaymentType()) {
				isCash = true;
			}
			rowData = new Object[]{"CA", item.getExhiId(), item.getVoucId(),
					item.getVoucCheckNo(), item.getCustId(),
					item.getVoucDate(), item.getVoucMblNo(),
					item.getVoucConsNo(), item.getVoucAmount(),
					item.getVoucAmount(), item.getVoucExRate(),
					item.getVoucAmount(), isCash ? "CASH" : "CHECK",
					item.getCurrCode(), "AV", "1", "1", TimeUtil.getYear(),
					TimeUtil.getMonth(), isCash ? "1" : "2",
					item.getVoucAmount() * item.getVoucExRate(),
					item.getVoucNo(), item.getVoucBank(), item.getCurrCode()};
			rowList.add(rowData);
		}
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Applied_Receipts_Adjustments");
		rowData = new Object[]{"CODEPAYM", "CNTBTCH", "CNTITEM", "CNTLINE",
				"IDCUST", "IDINVC", "AMTPAYM", "TEXTADJ", "GLREF",
				"EXCHRATEHC", "DATEINVC", "AMTPAYMHC"};
		rowList.clear();
		rowList.add(rowData);
		for (TVoucherItem item : voitList) {
			rowData = new Object[]{"CA", item.getExhiId(), item.getVoucId(),
					item.getExhiLine(), item.getCustId(),
					item.getInvoNo(), "0", "", "",
					item.getVoucExRate(), item.getVoucDate(),
					item.getVoitAmountVoucW() * item.getVoucExRate()};
			rowList.add(rowData);
		}
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Advance_Credits");
		rowData = new Object[]{"CODEPAYM", "CNTBTCH", "CNTITEM", "CNTLINE",
				"DOCNBR", "TEXTDESC", "TEXTREF", "AMTACCTC", "AMTACCHC"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Miscellaneous_Receipts");
		rowData = new Object[]{"CODEPAYM", "CNTBTCH", "CNTITEM", "CNTLINE",
				"IDDISTCODE", "IDACCT", "GLREF", "GLDESC", "TAXCLASS1",
				"TAXCLASS2", "TAXCLASS3", "TAXCLASS4", "TAXCLASS5",
				"SWTAXINCL1", "SWTAXINCL2", "SWTAXINCL3", "SWTAXINCL4",
				"SWTAXINCL5", "TXBSE1TC", "TXBSE2TC", "TXBSE3TC", "TXBSE4TC",
				"TXBSE5TC", "RATETAX1", "RATETAX2", "RATETAX3", "RATETAX4",
				"RATETAX5", "TXAMT1TC", "TXAMT2TC", "TXAMT3TC", "TXAMT4TC",
				"TXAMT5TC", "TXTOTTC", "AMTDISTTC", "AMTNETTC", "AMTDISTHC",
				"AMTNETHC", "AMTCOGS", "ALTBASETAX", "TXAMT1RC", "TXAMT2RC",
				"TXAMT3RC", "TXAMT4RC", "TXAMT5RC", "TXTOTRC", "TXBSE1HC",
				"TXBSE2HC", "TXBSE3HC", "TXBSE4HC", "TXBSE5HC", "TXAMT1HC",
				"TXAMT2HC", "TXAMT3HC", "TXAMT4HC", "TXAMT5HC", "TXTOTHC",
				"CONTRACT", "PROJECT", "CATEGORY", "RESOURCE", "COSTCLASS",
				"BILLDATE"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Adjustment_G_L_Distributions");
		rowData = new Object[]{"CODEPAYM", "CNTBTCH", "CNTITEM", "CNTLINE",
				"CNTSEQ", "CODTRXTYPE", "AMTDIST", "IDDISTCODE", "IDACCT",
				"CONTRACT", "PROJECT", "CATEGORY", "RESOURCE", "TRANSNBR",
				"COSTCLASS", "AMTDISC", "AMTPAYM", "IDITEM", "UNITMEAS",
				"QTYINVC", "AMTCOST", "BILLDATE", "RTGAMT", "RTGDATEDUE",
				"SWRTG", "AMTDISTHC", "AMTDISCHC", "AMTPAYMHC", "RTGAMTHC",
				"TEXTDESC", "TEXTREF", "DOCLINE", "AMTDUETC"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Receipt_Adjustment_Optional_Fie");
		rowData = new Object[]{"CODEPYMTYP", "CNTBTCH", "CNTITEM",
				"OPTFIELD", "VALUE", "TYPE", "LENGTH", "DECIMALS", "ALLOWNULL",
				"VALIDATE", "SWSET", "VALINDEX", "VALIFTEXT", "VALIFMONEY",
				"VALIFNUM", "VALIFLONG", "VALIFBOOL", "VALIFDATE", "VALIFTIME",
				"FDESC", "VDESC"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		return wb;
	}

	/**
	 * 付款单
	 *
	 * @param voucList voucher list
	 * @param voitList voucher item list
	 * @return workbook
	 */
	private Workbook writeApPayment(List<TVoucher> voucList, List<TVoucherItem> voitList) {
		Workbook wb = new HSSFWorkbook();
		Sheet sheet = wb.createSheet("Payments_Adjustments");
		List<Object[]> rowList = new ArrayList<Object[]>();
		Object[] rowData = new Object[]{"BTCHTYPE", "CNTBTCH", "CNTENTR",
				"IDRMIT", "IDVEND", "DATERMIT", "TEXTRMIT", "AMTRMIT",
				"AMTRMITTC", "RATEEXCHTC", "PAYMCODE", "CODECURN",
				"RATETYPEHC", "RMITTYPE", "DOCTYPE", "FISCYR", "FISCPER",
				"AMTRMITHC", "DOCNBR", "DATEACTVPP", "SRCEAPPL", "IDBANK",
				"CODECURNBC", "PAYMTYPE"};
		rowList.add(rowData);
		boolean isCash = false;
		for (TVoucher item : voucList) {
			if (item.getVoucPaymentType() == null || 6 == item.getVoucPaymentType()) {
				isCash = true;
			}
			rowData = new Object[]{"PY", item.getExhiId(), item.getVoucId(),
					item.getVoucCheckNo(), item.getCustId(),
					item.getVoucDate(), item.getVoucMblNo(),
					item.getVoucAmount(), item.getVoucAmount(),
					item.getVoucExRate(), isCash ? "CASH" : "CHECK",
					item.getCurrCode(), "AV", "1", "1", TimeUtil.getYear(),
					TimeUtil.getMonth(),
					item.getVoucAmount() * item.getVoucExRate(),
					item.getVoucNo(), item.getVoucDate(), "AP",
					item.getVoucBank(), item.getCurrCode(), isCash ? "1" : "2"};
			rowList.add(rowData);
		}
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Applied_Payments");
		rowData = new Object[]{"BATCHTYPE", "CNTBTCH", "CNTRMIT", "CNTLINE",
				"IDVEND", "IDINVC", "CNTPAYM", "TRXTYPE", "PYMTRESL",
				"AMTPAYM", "TEXTADJ", "GLREF", "UNAPLPAYM", "UNAPLDISC",
				"CODECURN", "DATERMIT", "DOCTYPE", "RMITTYPE", "SWRTG",
				"RTGBAL", "RTGAPPLYTO", "AMTADJNET", "EXCHRATEHC", "DATEINVC",
				"AMTPAYMHC", "AMTDISCHC", "AMTADJHC", "RTGAMTHC", "APVERSION"};
		rowList.clear();
		rowList.add(rowData);
		Map<String, Integer> invoiceNoMap = new HashMap<String, Integer>();
		for (TVoucherItem item : voitList) {
			String invoTaxNo = item.getInvoTaxNo();
			if(invoTaxNo != null){
				int count = 1;
				if (invoiceNoMap.containsKey(invoTaxNo)) {
					count = invoiceNoMap.get(invoTaxNo) + 1;
				}
				invoiceNoMap.put(invoTaxNo, count);
				invoTaxNo += "_" + count;
			}
			rowData = new Object[]{"PY", item.getExhiId(), item.getVoucId(),
					item.getExhiLine(), item.getCustId(), invoTaxNo,
					"1", "51", "03", item.getVoitAmountVoucW(),
					item.getConsNo(), item.getVoitWriteOffNo(),
					item.getVoitAmountVoucW(), "0", item.getVoucCurrCode(),
					item.getVoucDate(), "1", "1", "0", "0", "", "0", "1",
					item.getInvoDate(), item.getVoitAmountVoucW(), "0", "0",
					"0", "54A"};
			rowList.add(rowData);
		}
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Miscellaneous_Payments");
		rowData = new Object[]{"BATCHTYPE", "CNTBTCH", "CNTRMIT", "CNTLINE",
				"IDDISTCODE", "IDACCT", "GLREF", "GLDESC", "TAXCLASS1",
				"TAXCLASS2", "TAXCLASS3", "TAXCLASS4", "TAXCLASS5",
				"SWTAXINCL1", "SWTAXINCL2", "SWTAXINCL3", "SWTAXINCL4",
				"SWTAXINCL5", "TXBSE1TC", "TXBSE2TC", "TXBSE3TC", "TXBSE4TC",
				"TXBSE5TC", "RATETAX1", "RATETAX2", "RATETAX3", "RATETAX4",
				"RATETAX5", "TXAMT1TC", "TXAMT2TC", "TXAMT3TC", "TXAMT4TC",
				"TXAMT5TC", "TXTOTTC", "AMTDISTTC", "AMTNETTC", "AMTDISTHC",
				"AMTNETHC", "TXALLTC", "TXALL1TC", "TXALL2TC", "TXALL3TC",
				"TXALL4TC", "TXALL5TC", "TXREC1TC", "TXREC2TC", "TXREC3TC",
				"TXREC4TC", "TXREC5TC", "TXEXP1TC", "TXEXP2TC", "TXEXP3TC",
				"TXEXP4TC", "TXEXP5TC", "TXAMT1RC", "TXAMT2RC", "TXAMT3RC",
				"TXAMT4RC", "TXAMT5RC", "TXTOTRC", "TXALLRC", "TXREC1RC",
				"TXREC2RC", "TXREC3RC", "TXREC4RC", "TXREC5RC", "TXEXP1RC",
				"TXEXP2RC", "TXEXP3RC", "TXEXP4RC", "TXEXP5RC", "TXBSE1HC",
				"TXBSE2HC", "TXBSE3HC", "TXBSE4HC", "TXBSE5HC", "TXAMT1HC",
				"TXAMT2HC", "TXAMT3HC", "TXAMT4HC", "TXAMT5HC", "TXALLHC",
				"TXALL1HC", "TXALL2HC", "TXALL3HC", "TXALL4HC", "TXALL5HC",
				"TXREC1HC", "TXREC2HC", "TXREC3HC", "TXREC4HC", "TXREC5HC",
				"TXEXP1HC", "TXEXP2HC", "TXEXP3HC", "TXEXP4HC", "TXEXP5HC",
				"TXTOTHC", "CONTRACT", "PROJECT", "CATEGORY", "RESOURCE",
				"COSTCLASS", "BILLTYPE", "IDITEM", "UNITMEAS", "QTYINVC",
				"AMTCOST", "BILLDATE", "BILLRATE", "BILLCURN"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Adjustment_G_L_Distributions");
		rowData = new Object[]{"BATCHTYPE", "CNTBTCH", "CNTRMIT", "CNTLINE",
				"CNTSEQ", "CODTRXTYPE", "AMTDIST", "IDDISTCODE", "IDACCT",
				"CONTRACT", "PROJECT", "CATEGORY", "RESOURCE", "TRANSNBR",
				"COSTCLASS", "BILLTYPE", "AMTDISC", "AMTPAYM", "IDITEM",
				"UNITMEAS", "QTYINVC", "AMTCOST", "BILLDATE", "BILLRATE",
				"BILLCURN", "RTGAMT", "RTGDATEDUE", "SWRTG", "AMTDISTHC",
				"AMTDISCHC", "AMTPAYMHC", "RTGAMTHC", "TEXTDESC", "TEXTREF",
				"DOCLINE", "AMTDUETC"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		sheet = wb.createSheet("Payment_Adjustment_Optional_Fie");
		rowData = new Object[]{"BTCHTYPE", "CNTBTCH", "CNTENTR", "OPTFIELD",
				"VALUE", "TYPE", "LENGTH", "DECIMALS", "ALLOWNULL", "VALIDATE",
				"SWSET", "VALINDEX", "VALIFTEXT", "VALIFMONEY", "VALIFNUM",
				"VALIFLONG", "VALIFBOOL", "VALIFDATE", "VALIFTIME", "FDESC",
				"VDESC"};
		rowList.clear();
		rowList.add(rowData);
		fillSheet(sheet, rowList);

		return wb;
	}

	private void fillSheet(Sheet sheet, List<Object[]> rowList) {
		CreationHelper createHelper = sheet.getWorkbook().getCreationHelper();
		CellStyle cellStyle = sheet.getWorkbook().createCellStyle();
		cellStyle.setDataFormat(createHelper.createDataFormat().getFormat("yyyy-mm-dd"));
		int i = 0;
		for (Object[] r : rowList) {
			Row row = sheet.createRow(i);
			int j = 0;
			for (Object value : r) {
				if (value == null) {
					row.createCell(j).setCellValue("");
				} else if (value instanceof String) {
					row.createCell(j).setCellValue((String) value);
				} else if (value instanceof Date) {
					Cell cell = row.createCell(j);
					cell.setCellValue((Date) value);
					cell.setCellStyle(cellStyle);
				} else if (value instanceof Number) {
					row.createCell(j).setCellValue(((Number) value).doubleValue());
				} else {
					row.createCell(j).setCellValue(value.toString());
				}
				j++;
			}
			i++;
		}
	}

	private String getChargeMapping(String currCode, String type) {
		String s = "";
		if ("CNY".endsWith(currCode) && "R".equals(type)) {
			s = "501\\02";
		} else if ("CNY".endsWith(currCode) && "P".equals(type)) {
			s = "502\\02";
		} else if ("USD".endsWith(currCode) && "R".equals(type)) {
			s = "501\\01";
		} else if ("USD".endsWith(currCode) && "P".equals(type)) {
			s = "502\\01";
		}
		return s;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<TExportHistory> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
