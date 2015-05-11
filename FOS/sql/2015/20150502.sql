ALTER TABLE `F_INSPECTION`
	ADD COLUMN `INSP_TYPE` VARCHAR(200) NULL DEFAULT NULL AFTER `INSP_CHECK_FLAG`,
	ADD COLUMN `INSP_CARGO_SAMPLE_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `INSP_TYPE`,
	ADD COLUMN `INSP_PACKAGE_CHECK_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `INSP_CARGO_SAMPLE_FLAG`,
	ADD COLUMN `INSP_CARGO_SEND_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `INSP_PACKAGE_CHECK_FLAG`,
	ADD COLUMN `INSP_CARGO_CHECK_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `INSP_CARGO_SEND_FLAG`,
	ADD COLUMN `INSP_CERTIFICATION_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `INSP_CARGO_CHECK_FLAG`,
	ADD COLUMN `INSP_CERTIFICATION_CHECK_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `INSP_CERTIFICATION_FLAG`,
	ADD COLUMN `INSP_CARGO_SAMPLE_DATE` DATE NULL DEFAULT NULL AFTER `INSP_CERTIFICATION_CHECK_FLAG`,
	ADD COLUMN `INSP_PACKAGE_CHECK_DATE` DATE NULL DEFAULT NULL AFTER `INSP_CARGO_SAMPLE_DATE`,
	ADD COLUMN `INSP_CARGO_SEND_DATE` DATE NULL DEFAULT NULL AFTER `INSP_PACKAGE_CHECK_DATE`,
	ADD COLUMN `INSP_CARGO_CHECK_DATE` DATE NULL DEFAULT NULL AFTER `INSP_CARGO_SEND_DATE`,
	ADD COLUMN `INSP_CERTIFICATION_DATE` DATE NULL DEFAULT NULL AFTER `INSP_CARGO_CHECK_DATE`,
	ADD COLUMN `INSP_CERTIFICATION_CHECK_DATE` DATE NULL DEFAULT NULL AFTER `INSP_CERTIFICATION_DATE`;

ALTER TABLE `F_INSPECTION`
	ADD COLUMN `INSP_TS_FLAG` TINYINT NULL DEFAULT '0' AFTER `INSP_CERTIFICATION_CHECK_DATE`,
	ADD COLUMN `INSP_TS_TYPE` VARCHAR(64) NULL DEFAULT NULL AFTER `INSP_TS_FLAG`,
	ADD COLUMN `INSP_TS_NO` VARCHAR(64) NULL DEFAULT NULL AFTER `INSP_TS_TYPE`,
	ADD COLUMN `INSP_TS_APPLY_DATE` DATE NULL DEFAULT NULL AFTER `INSP_TS_NO`,
	ADD COLUMN `INSP_TS_OPERATION_DATE` DATE NULL DEFAULT NULL AFTER `INSP_TS_APPLY_DATE`,
	ADD COLUMN `INSP_TS_END_DATE` DATE NULL DEFAULT NULL AFTER `INSP_TS_OPERATION_DATE`,
	ADD COLUMN `INSP_TS_OBJECT` VARCHAR(64) NULL DEFAULT NULL AFTER `INSP_TS_END_DATE`,
	ADD COLUMN `INSP_TS_REMARK` TEXT NULL DEFAULT NULL AFTER `INSP_TS_OBJECT`;
	
ALTER TABLE `F_INSPECTION`
	ADD COLUMN `INSP_CS_FLAG` TINYINT NULL DEFAULT '0' AFTER `INSP_TS_REMARK`,
	ADD COLUMN `INSP_CS_DATE` DATE NULL DEFAULT NULL AFTER `INSP_CS_FLAG`,
	ADD COLUMN `INSP_CS_NO` VARCHAR(64) NULL DEFAULT NULL AFTER `INSP_CS_DATE`,
	ADD COLUMN `INSP_CS_CHECK_FLAG` TINYINT NULL DEFAULT '0' AFTER `INSP_CS_NO`,
	ADD COLUMN `INSP_CS_REMARK` TEXT NULL AFTER `INSP_CS_CHECK_FLAG`,
	ADD COLUMN `INSP_CL_FLAG` TINYINT NULL DEFAULT '0' AFTER `INSP_CS_REMARK`,
	ADD COLUMN `INSP_CL_APPLY_DATE` DATE NULL DEFAULT NULL AFTER `INSP_CL_FLAG`,
	ADD COLUMN `INSP_CL_DATE` DATE NULL DEFAULT NULL AFTER `INSP_CL_APPLY_DATE`,
	ADD COLUMN `INSP_CL_NO` VARCHAR(64) NULL DEFAULT NULL AFTER `INSP_CL_DATE`,
	ADD COLUMN `INSP_CL_CONTAINER_NO` VARCHAR(64) NULL DEFAULT NULL AFTER `INSP_CL_NO`,
	ADD COLUMN `INSP_CL_REMARK` TEXT NULL AFTER `INSP_CL_CONTAINER_NO`;
	
ALTER TABLE `F_INSPECTION`
	ADD COLUMN `INSP_LC_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `INSP_CL_REMARK`,
	ADD COLUMN `INSP_LC_APPLY_DATE` DATE NULL DEFAULT NULL AFTER `INSP_LC_FLAG`,
	ADD COLUMN `INSP_LC_TYPE` VARCHAR(64) NULL DEFAULT NULL AFTER `INSP_LC_APPLY_DATE`,
	ADD COLUMN `INSP_LC_OPERATION_DATE` DATE NULL DEFAULT NULL AFTER `INSP_LC_TYPE`,
	ADD COLUMN `INSP_LC_END_DATE` DATE NULL DEFAULT NULL AFTER `INSP_LC_OPERATION_DATE`,
	ADD COLUMN `INSP_LC_OBJECT` VARCHAR(64) NULL DEFAULT NULL AFTER `INSP_LC_END_DATE`,
	ADD COLUMN `INSP_LC_REMARK` TEXT NULL AFTER `INSP_LC_OBJECT`;