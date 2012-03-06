ALTER TABLE `F_TRANS`
	ADD COLUMN `CONS_MBL_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_NO`,
	ADD COLUMN `CONS_HBL_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_MBL_NO`,
	ADD COLUMN `TRAN_DELIVERY_PLACE` VARCHAR(64) NULL DEFAULT NULL AFTER `TRAN_DELIVERY_ADDRESS`,
	ADD COLUMN `TRAN_DELIVERY_CONTACT` VARCHAR(32) NULL DEFAULT NULL AFTER `TRAN_DELIVERY_PLACE`,
	ADD COLUMN `TRAN_DELIVERY_TEL` VARCHAR(32) NULL DEFAULT NULL AFTER `TRAN_DELIVERY_CONTACT`;
ALTER TABLE `F_TRANS`
	CHANGE COLUMN `TRAN_LOAD_DATE` `TRAN_LOAD_TIME` VARCHAR(16) NULL DEFAULT NULL AFTER `TRAN_COMPLETE_DATE`;
ALTER TABLE `S_EXPENSE`
	ADD COLUMN `SECTION` VARCHAR(16) NULL DEFAULT 'CONS' AFTER `CONS_NO`;
ALTER TABLE `S_EXPENSE`
	CHANGE COLUMN `PATE_CODE` `PATE_CODE` CHAR(16) NOT NULL COLLATE 'utf8_unicode_ci' AFTER `PATE_ID`;
ALTER TABLE `S_EXPENSE_B`
	CHANGE COLUMN `PATE_CODE` `PATE_CODE` CHAR(16) NOT NULL COLLATE 'utf8_unicode_ci' AFTER `PATE_ID`;