ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CONS_POL_CN` VARCHAR(64) NULL DEFAULT NULL AFTER `CONS_POL_EN`;
ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CONS_POD_CN` VARCHAR(64) NULL DEFAULT NULL AFTER `CONS_POD_EN`;
ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CONS_POT_CN` VARCHAR(64) NULL DEFAULT NULL AFTER `CONS_POT_EN`;
ALTER TABLE `F_CUSTOMS_DECLARATION`
	ADD COLUMN `CUDE_SHIP_DATE_F` DATETIME NULL DEFAULT NULL AFTER `CUDE_TYPE`;
ALTER TABLE `F_CUSTOMS_DECLARATION`
	ADD COLUMN `CUDE_SHIP_DATE_T` DATETIME NULL DEFAULT NULL AFTER `FCON_SHIP_DATE_F`;
ALTER TABLE `F_CUSTOMS_DECLARATION`
	ADD COLUMN `CUDE_TRANS_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `CUDE_DOC_RECEIVER`;
ALTER TABLE `F_CUSTOMS_DECLARATION`
	ADD COLUMN `CUDE_PARTIAL_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `CONS_TRANS_FLAG`;
ALTER TABLE `F_TRANS`
	ADD COLUMN `TRAN_POD` VARCHAR(64) NULL DEFAULT NULL AFTER `TRAN_POL`
	
INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(1, '装运方式', 'FBl', 'consShipType', NULL);
