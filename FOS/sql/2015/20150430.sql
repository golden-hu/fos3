-- add by yinyulong
ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CONS_CONTAINER_SEAL_NO` VARCHAR(500) NULL DEFAULT NULL AFTER `CONS_SEAL_NO`;
