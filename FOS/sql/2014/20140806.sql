INSERT INTO `P_TEMPLATE_TYPE` (`TETY_ID`, `TETY_NAME`, `TETY_CODE`, `TETY_DESC`, `TETY_ACTION`, `TETY_PARENT`, `TETY_CHILD`, `TETY_CLASS`, `TETY_TYPE`, `TETY_FORM_FLAG`, `ACTIVE`, `VERSION`, `REMOVED`) VALUES
(60, '费用列表', 'EXPE_LIST', '费用列表导出模板', 'EXPE_X_S', NULL, 'SExpense', 'A', 'P', 1, 1, 1, 0);

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(60, '委托号', 'SExpense', 'consNo', NULL),
(60, 'MBLNo', 'SExpense', 'consMblNo', NULL),
(60, 'HBLNo', 'SExpense', 'consHblNo', NULL),
(60, '船名', 'SExpense', 'consVessel', NULL),
(60, '航次', 'SExpense', 'consVoyage', NULL),
(60, '开航日期', 'SExpense', 'consSailDate', NULL),
(60, '结算单位', 'SExpense', 'custName', NULL),
(60, '费用名称', 'SExpense', 'charName', NULL),
(60, '币种', 'SExpense', 'currCode', NULL),
(60, '单价', 'SExpense', 'expeUnitPrice', NULL),
(60, '数量', 'SExpense', 'expeNum', NULL),
(60, '金额', 'SExpense', 'expeTotalAmount', NULL),
(60, '账单号', 'SExpense', 'expeInvoiceNo', NULL),
(60, '税务发票号', 'SExpense', 'expeTaxInvoiceNo', NULL),
(60, '已开票金额', 'SExpense', 'expeInvoiceAmount', NULL),
(60, '已核销金额', 'SExpense', 'expeWriteOffAmount', NULL),
(60, '备注', 'FConsign', 'expeRemarks', NULL);

-- 需要替换{CC}
INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('费用列表', 'B', 'xls', 60, 'EXPE_LIST', '费用列表', NULL, '费用列表导出模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0)
;