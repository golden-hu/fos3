ALTER TABLE `F_CONSIGN`
	CHANGE COLUMN `CONS_CONTRACT_NO` `CONS_CONTRACT_NO` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_REF_NO`;
INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('EXPE_X_S', 'SExpenseService', 'complexQuerySingle', '费用单表复杂查询');

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(18, '装箱备注', 'FConsign', 'consTrackRemarks', NULL);

ALTER TABLE `F_DOC`
	ADD COLUMN `FDOC_RETURN_WAY` TINYINT NULL DEFAULT NULL AFTER `FDOC_COMPANY`,
	ADD COLUMN `FDOC_EXPRESS_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `FDOC_RETURN_WAY`,
	ADD COLUMN `FDOC_CUSTOMS_FLAG` TINYINT NULL DEFAULT NULL AFTER `FDOC_EXPRESS_NO`;


UPDATE `P_TEMPLATE_MAP` SET `TEMA_FIELD` = "consCarrierName" WHERE `TETY_ID`=15 AND `TEMA_NAME`="承运人";