ALTER TABLE `F_CARGO`
	ADD COLUMN `PACK_CODE` VARCHAR(16) NULL DEFAULT NULL AFTER `PACK_ID`;
ALTER TABLE `F_CONTAINER`
	ADD COLUMN `COTY_CODE` VARCHAR(16) NULL DEFAULT NULL AFTER `COTY_ID`;