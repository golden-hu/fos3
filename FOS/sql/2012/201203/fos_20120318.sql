ALTER TABLE `F_CUSTOMS_DECLARATION`
	CHANGE COLUMN `USAG_ID` `USAG_NAME` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `EXSE_CODE`;
ALTER TABLE `F_BL`
	ADD COLUMN `MBL_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `BL_NO`;