ALTER TABLE`F_TRANS`
    ADD COLUMN `TRAN_DELIVERY_DATE` DATE default NULL  AFTER `TRAN_LOAD_TIME`,
    ADD COLUMN `TRAN_DELIVERY_TIME` VARCHAR(16) NULL DEFAULT NULL  AFTER `TRAN_DELIVERY_DATE`;
    
ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CONS_CUSTOMS_TYPE` TINYINT(4) NULL DEFAULT NULL AFTER `CONS_CUDE_TYPE`;
	
INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(34, '英文品名', 'FConsign', 'consCargoNameEn', NULL),
(34, '中文品名', 'FConsign', 'consCargoNameCn', NULL),
(34, '运费条款', 'FConsign', 'pateName', NULL),
(34, '报关方式', 'FConsign', 'consCudeType', 'getCudeType'),
(34, '装箱地点', 'FConsign', 'consWarehouseAddress', NULL),
(34, '人民币合计大写', 'FConsign', 'sumRCny', 'getAmountCap'),
(34, '美元合计大写', 'FConsign', 'sumRUsd', 'getAmountCap'),
(34, '委托日期', 'FConsign', 'consDate', NULL),
(34, '体积', 'FConsign', 'consTotalMeasurement', NULL),
(34, '备注', 'SExpense', 'expeRemarks', NULL);