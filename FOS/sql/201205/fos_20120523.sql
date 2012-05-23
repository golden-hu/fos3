ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CONS_DO_AGENCY_ADDRESS` VARCHAR(64) NULL DEFAULT NULL AFTER `CONS_DO_AGENCY_NAME`,
	ADD COLUMN `CONS_CARRIER_CONTACT` VARCHAR(64) NULL DEFAULT NULL AFTER `CONS_CARRIER_NAME`,
	ADD COLUMN `CONS_CARRIER_TEL` VARCHAR(64) NULL DEFAULT NULL AFTER `CONS_CARRIER_CONTACT`,
	ADD COLUMN `CONS_THC_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `CONS_TRANSFERRING_FLAG`,
	ADD COLUMN `CONS_PRESSURE_BOX_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `CONS_THC_FLAG`;
	
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
(53, '承运单位', 'FConsign', 'consCarrierName', NULL),
(53, '承运联系人', 'FConsign', 'consCarrierContact', NULL),
(53, '承运电话', 'FConsign', 'consCarrierTel', NULL),
(53, '到港日期', 'FConsign', 'consEta', NULL),
(53, '操作员', 'FConsign', 'consOperatorName', NULL),
(53, '业务员', 'FConsign', 'consSalesRepName', NULL),
(53, '换单地址', 'FConsign', 'consDoAgencyAddress', NULL),
(53, '是否有THC', 'FConsign', 'consThcFlag', 'bool'),
(53, '是否压箱', 'FConsign', 'consPressBoxFlag', 'bool'),
(53, '备注', 'FConsign', 'consRemarks', NULL)
;