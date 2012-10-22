INSERT INTO `P_TEMPLATE_TYPE` (`TETY_ID`, `TETY_NAME`, `TETY_CODE`, `TETY_DESC`, `TETY_ACTION`, `TETY_PARENT`, `TETY_CHILD`, `TETY_CLASS`, `TETY_TYPE`, `TETY_FORM_FLAG`, `ACTIVE`, `VERSION`, `REMOVED`) VALUES
(55, 'CREATE NOTE', 'CREATE_NOTE', NULL, 'INVO_Q', 'SInvoice', 'SinvoiceItem', 'B', 'P', 1, 1, 1, 0);



-- CREATE NOTE
INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(55, '账单号', 'SInvoice', 'invoNo', NULL),
(55, '税务发票号', 'SInvoice', 'invoTaxNo', NULL),
(55, '银行', 'SInvoice', 'invoBank', NULL),
(55, '账号', 'SInvoice', 'invoAccount', NULL),
(55, '结算单位', 'SInvoice', 'invoTitle', NULL),
(55, '账单日期', 'SInvoice', 'invoDate', NULL),
(55, '船名', 'SInvoice', 'invoVessel', NULL),
(55, '航次', 'SInvoice', 'invoVoyage', NULL),
(55, '业务号', 'SInvoice', 'invoConsNo', NULL),
(55, '开航日期', 'SInvoice', 'invoSailDate', NULL),
(55, '到港日期', 'SInvoice', 'invoSailDate', NULL),
(55, '起运港', 'SInvoice', 'invoPol', NULL),
(55, '卸货港', 'SInvoice', 'invoPod', NULL),
(55, '目的港', 'SInvoice', 'invoDeliveryPlace', NULL),
(55, '提单号', 'SInvoice', 'invoBlNo', NULL),
(55, '货物名称', 'SInvoice', 'invoCargoName', NULL),
(55, '件数包装', 'SInvoice', 'invoCargoPackages', NULL),
(55, '重量', 'SInvoice', 'invoCargoGrossWeight', NULL),
(55, '体积', 'SInvoice', 'invoCargoMeasurement', NULL),
(55, '合同号', 'SInvoice', 'invoContractNo', NULL),
(55, '箱型箱量', 'SInvoice', 'invoContainersInfo', NULL),
(55, '币种', 'SInvoice', 'currCode', NULL),
(55, '费用名称', 'SInvoiceItem', 'charName', NULL),
(55, '费用英文名称', 'SInvoiceItem', 'charNameEn', NULL),
(55, '数量', 'SInvoiceItem', 'expeNum', NULL),
(55, '币种', 'SInvoiceItem', 'expeCurrCode', NULL),
(55, '单价', 'SInvoiceItem', 'expeUnitPrice', NULL),
(55, '金额', 'SInvoiceItem', 'initInvoiceAmountOri', NULL),
(55, '合计金额大写', 'SInvoice', 'invoAmountCapital', NULL),
(55, '合计金额英文', 'SInvoice', 'invoAmountCapitalEn', NULL),
(55, '合计金额', 'SInvoice', 'invoAmount', NULL),
(55, '付款期限', 'SInvoice', 'invoDueDate', NULL),
(55, '制单人', 'SInvoice', 'invoIssuer', NULL),
(55, '复核人', 'SInvoice', 'invoChecker', NULL),
(55, '操作员', 'SInvoice', 'invoOperator', NULL),
(55, '备注', 'SInvoice', 'invoRemarks', NULL);

INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('CREATE NOTE', 'B', 'xls', 55, 'CREATE_NOTE', 'CREATE NOTE', NULL, 'CREATE NOTE', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0);