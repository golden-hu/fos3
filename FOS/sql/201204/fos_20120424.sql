INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(15, '报检号', 'FConsign', 'consCustomsDeclearationNo', NULL),
(15, '进出口', 'FConsign', 'consBizClass', 'getBizClass'),
(15, '报检企业', 'FConsign', 'consCompany', NULL),
(15, '报检日期', 'FConsign', 'consCustomsDeclearDate', NULL),
(15, '品名', 'FConsign', 'consCargoNameCn', NULL),
(15, '合同号', 'FConsign', 'consContractNo', NULL),
(15, '申请号', 'FConsign', 'consBookingDeclareNoUs', NULL),
(15, '商检发票号', 'FConsign', 'consTradeContractNo', NULL),
(15, '我司发票号', 'FConsign', 'consMasterNo', NULL),
(15, '应收合计', 'FConsign', 'sumR', NULL),
(15, '贸易方式', 'FConsign', 'attr1', NULL),
(15, '手册号', 'FConsign', 'consManualNo', NULL),
(15, '产地证号', 'FConsign', 'consCertNo', NULL),
(15, '报关日期', 'FConsign', 'consCustomsDeclearDate', NULL),
(15, '报关类型', 'FConsign', 'consCertNo', NULL);

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(26, '操作员电话', 'FConsign', 'consOperatorId', 'getUserTel');

update p_template_type set TETY_ACTION ="CONS_CHECK_X"where TETY_ID=15;

INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('报关委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '报关委托列表', 1, NULL, NULL, NULL, NULL, '{CC}', 0, 0),
('报检委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '报检委托列表', 1, NULL, NULL, NULL, NULL, '{CC}', 0, 0),
('加工贸易列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '加工贸易列表', 1, NULL, NULL, NULL, NULL, '{CC}', 0, 0),
('产地证列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '产地证列表', 1, NULL, NULL, NULL, NULL, '{CC}', 0, 0);