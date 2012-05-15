ALTER TABLE `C_CUSTOMER`
	ADD COLUMN `CUST_ORG_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `CUST_SALES_NAME`,
	ADD COLUMN `CUST_TAX_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `CUST_ORG_NO`,
	ADD COLUMN `CUST_REG_ADDRESS` VARCHAR(200) NULL DEFAULT NULL AFTER `CUST_TAX_NO`,
	ADD COLUMN `CUST_EX_CODE` VARCHAR(32) NULL DEFAULT NULL AFTER `CUST_REG_ADDRESS`;

INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('费用结算单', 'B', 'xls', 52, 'EXPE_SETTLEMENT', '费用结算单', NULL, '费用结算单', 1, 3, '2009-02-16 14:05:57', 3, '2009-02-16 14:05:57', '{CC}', 0, 0),
	
INSERT INTO `P_TEMPLATE_TYPE` (`TETY_ID`, `TETY_NAME`, `TETY_CODE`, `TETY_DESC`, `TETY_ACTION`, `TETY_PARENT`, `TETY_CHILD`, `TETY_CLASS`, `TETY_TYPE`, `TETY_FORM_FLAG`, `ACTIVE`, `VERSION`, `REMOVED`) VALUES
(52, '费用结算单', 'EXPE_SETTLEMENT', '费用结算单', 'CONS_CHECK_X', 'FConsign', 'SExpense', 'B', 'P', 1, 1, 0, 0);
-- 费用结算单
INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(52, '业务号', 'FConsign', 'consNo', NULL),
(52, '业务类型', 'FConsign', 'consBizType', 'getBizType'),
(52, '订舱客户', 'FConsign', 'custName', NULL),
(52, '联系人', 'FConsign', 'custContact', NULL),
(52, '客户联系人', 'FConsign', 'custContact', NULL),
(52, '客户联系电话', 'FConsign', 'custTel', NULL),
(52, '客户传真', 'FConsign', 'custFax', NULL),
(52, '船名', 'FConsign', 'vessName', NULL),
(52, '航次', 'FConsign', 'voyaName', NULL),
(52, '起运港', 'FConsign', 'consPolEn', NULL),
(52, '目的港', 'FConsign', 'consPodEn', NULL),
(52, '件数包装', 'FConsign', 'consCargoPackages', NULL),
(52, '件数', 'FConsign', 'consTotalPackages', NULL),
(52, '包装', 'FConsign', 'packName', NULL),
(52, '毛重', 'FConsign', 'consTotalGrossWeight', NULL),
(52, '尺码', 'FConsign', 'consTotalMeasurement', NULL),
(52, '体积', 'FConsign', 'consTotalMeasurement', NULL),
(52, 'MBL', 'FConsign', 'consMblNo', NULL),
(52, 'HBL', 'FConsign', 'consHblNo', NULL),
(52, '合同号', 'FConsign', 'consContractNo', NULL),
(52, '箱型箱量', 'FConsign', 'consContainersInfo', NULL),
(52, '开航日期', 'FConsign', 'consSailDate', NULL),
(52, '进仓编号', 'FConsign', 'consNo', NULL),
(52, '核销单号', 'FConsign', 'consVerificationNo', NULL),
(52, '经营单位', 'FConsign', 'consCompany', NULL),
(52, '应收人民币合计', 'FConsign', 'sumRCny', NULL),
(52, '应付人民币合计', 'FConsign', 'sumPCny', NULL),
(52, '人民币利润', 'FConsign', 'cnyGrossProfit', NULL),
(52, '应收美元合计', 'FConsign', 'sumRUsd', NULL),
(52, '应付美元合计', 'FConsign', 'sumPUsd', NULL),
(52, '美元利润', 'FConsign', 'usdGrossProfit', NULL),
(52, '其它币种应收合计', 'FConsign', 'sumROther', NULL),
(52, '其它币种应付合计', 'FConsign', 'sumPOther', NULL),
(52, '其它币种利润', 'FConsign', 'otherGrossProfit', NULL),
(52, '折算人民币应收合计', 'FConsign', 'sumR', NULL),
(52, '折算人民币应付合计', 'FConsign', 'sumP', NULL),
(52, '折算人民币利润', 'FConsign', 'grossProfit', NULL),
(52, '操作员', 'FConsign', 'consOperatorName', NULL),
(52, '业务员', 'FConsign', 'consSalesRepName', NULL),
(52, '费用类型', 'SExpense', 'expeType', 'getExpeType'),
(52, '结算对象', 'SExpense', 'custName', NULL),
(52, '发票抬头', 'SExpense', 'custName', NULL),
(52, '币种', 'SExpense', 'currCode', NULL),
(52, '费用名称', 'SExpense', 'charName', NULL),
(52, '数量', 'SExpense', 'expeNum', NULL),
(52, '单价', 'SExpense', 'expeUnitPrice', NULL),
(52, '金额', 'SExpense', 'expeTotalAmount', NULL),
(52, '汇率', 'SExpense', 'expeExRate', NULL),
(52, '发票号', 'SExpense', 'expeInvoiceNo', NULL),
(52, '备注', 'SExpense', 'expeRemarks', NULL)
;


