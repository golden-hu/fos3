ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CONS_TRACK_LOAD_TIME` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_TRACK_LOAD_DATE`,
	ADD COLUMN `CONS_BOOKING_AGENCY_CONTACT` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_BOOKING_AGENCY_SNAME`,
	ADD COLUMN `CONS_BOOKING_AGENCY_TEL` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_BOOKING_AGENCY_CONTACT`;