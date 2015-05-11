ALTER TABLE `F_CONSIGN`
	CHANGE COLUMN `CONS_SHIPPER` `CONS_SHIPPER` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_OVERSEA_AGENCY_NAME`,
	CHANGE COLUMN `CONS_CONSIGNEE` `CONS_CONSIGNEE` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_SHIPPER`,
	CHANGE COLUMN `CONS_NOTIFY_PARTY` `CONS_NOTIFY_PARTY` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_CONSIGNEE`,
	CHANGE COLUMN `CONS_NOTIFY_PARTY2` `CONS_NOTIFY_PARTY2` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_NOTIFY_PARTY`,
	CHANGE COLUMN `CONS_F_SHIPPER` `CONS_F_SHIPPER` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_NOTIFY_PARTY2`,
	CHANGE COLUMN `CONS_F_CONSIGNEE` `CONS_F_CONSIGNEE` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_F_SHIPPER`,
	CHANGE COLUMN `CONS_F_NOTIFY_PARTY` `CONS_F_NOTIFY_PARTY` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_F_CONSIGNEE`;


ALTER TABLE `F_CONSIGN`
	ADD COLUMN `TRTY_NAME` VARCHAR(32) NULL DEFAULT NULL AFTER `TRTY_ID`;
	
ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CUDE_BIZ_TYPE` VARCHAR(32) NULL DEFAULT NULL AFTER `SETTLEMENT_OBJECT_NAME`;
	
ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CUDE_TITLE` VARCHAR(32) NULL DEFAULT NULL AFTER `CUDE_BIZ_TYPE`;