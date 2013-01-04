ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CONS_DO_AGENCY_ADDRESS` VARCHAR(64) NULL DEFAULT NULL AFTER `CONS_DO_AGENCY_NAME`,
	ADD COLUMN `CONS_CARRIER_CONTACT` VARCHAR(64) NULL DEFAULT NULL AFTER `CONS_CARRIER_NAME`,
	ADD COLUMN `CONS_CARRIER_TEL` VARCHAR(64) NULL DEFAULT NULL AFTER `CONS_CARRIER_CONTACT`,
	ADD COLUMN `CONS_THC_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `CONS_TRANSFERRING_FLAG`,
	ADD COLUMN `CONS_PRESSURE_BOX_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `CONS_THC_FLAG`;

INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('进口业务流程表', 'B', 'xls', 53, 'BUSINESS_PROCESS', '业务流程表', NULL, '进口业务流程表', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0);

INSERT INTO `P_TEMPLATE_TYPE` (`TETY_ID`, `TETY_NAME`, `TETY_CODE`, `TETY_DESC`, `TETY_ACTION`, `TETY_PARENT`, `TETY_CHILD`, `TETY_CLASS`, `TETY_TYPE`, `TETY_FORM_FLAG`, `ACTIVE`, `VERSION`, `REMOVED`) VALUES
(53, '业务流程表', 'BUSINESS_PROCESS', '业务流程表', 'CONS_QWT', 'FConsign', 'FTask', 'B', 'P', 1, 1, 0, 0);
-- 进口业务流程
INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(53, '业务号', 'FConsign', 'consNo', NULL),
(53, '业务类型', 'FConsign', 'consBizType', 'getBizType'),
(53, '委托单位', 'FConsign', 'custName', NULL),
(53, '委托联系人', 'FConsign', 'custContact', NULL),
(53, '委托电话', 'FConsign', 'custTel', NULL),
(53, '委托传真', 'FConsign', 'custFax', NULL),
(53, '船名', 'FConsign', 'vessName', NULL),
(53, '航次', 'FConsign', 'voyaName', NULL),
(53, '起运港', 'FConsign', 'consPolEn', NULL),
(53, '起运国', 'FConsign', 'consTradeCountry', NULL),
(53, '目的港', 'FConsign', 'consPodEn', NULL),
(53, '卸货港', 'FConsign', 'consPodEn', NULL),
(53, '件数', 'FConsign', 'consTotalPackages', NULL),
(53, '包装', 'FConsign', 'packName', NULL),
(53, '毛重', 'FConsign', 'consTotalGrossWeight', NULL),
(53, '体积', 'FConsign', 'consTotalMeasurement', NULL),
(53, 'MBL', 'FConsign', 'consMblNo', NULL),
(53, 'HBL', 'FConsign', 'consHblNo', NULL),
(53, '合同号', 'FConsign', 'consContractNo', NULL),
(53, '箱型箱量', 'FConsign', 'consContainersInfo', NULL),
(53, '承运人', 'FConsign', 'consCarrierName', NULL),
(53, '承运联系人', 'FConsign', 'consCarrierContact', NULL),
(53, '承运电话', 'FConsign', 'consCarrierTel', NULL),
(53, '到港日期', 'FConsign', 'consEta', NULL),
(53, '操作员', 'FConsign', 'consOperatorName', NULL),
(53, '业务员', 'FConsign', 'consSalesRepName', NULL),
(53, '换单地址', 'FConsign', 'consDoAgencyAddress', NULL),
(53, '是否有THC', 'FConsign', 'consThcFlag', 'Bool'),
(53, '是否压箱', 'FConsign', 'consPressBoxFlag', 'Bool'),
(53, '备注', 'FConsign', 'consRemarks', NULL),
(53, '起运国', 'FConsign', 'consTradeCountry', NULL),
(53, '拖车公司', 'FConsign', 'consTrackVendorName', NULL),
(53, '拖车公司联系人', 'FConsign', 'consTrackContact', NULL),
(53, '拖车公司电话', 'FConsign', 'consTrackTel', NULL),
(53, '提货日期', 'FConsign', 'consTrackLoadDate', NULL),
(53, '提货时间', 'FConsign', 'consTrackLoadTime', NULL),
(53, '报关行', 'FConsign', 'consCustomsVendorName', NULL),
(53, '报关公司联系人', 'FConsign', 'consCustomsContact', NULL),
(53, '报关公司电话', 'FConsign', 'consCustomsTel', NULL),
(53, '中文品名', 'FConsign', 'consCargoNameCn', NULL),
(53, '换单费', 'FConsign', 'sumExchangesFee', NULL),
(53, '任务时间', 'FTask', 'consPressBoxFlag', NULL),
(53, '任务名称', 'FTask', 'consPressBoxFlag', NULL),
(53, '任务事项', 'FTask', 'consPressBoxFlag', NULL)
;


INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('CONS_QWT', 'FConsignService', 'queryWithTask', '查询委托和对应的任务');