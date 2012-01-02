ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CONS_COMPANY` VARCHAR(64) NULL DEFAULT NULL AFTER `CONS_WS_ACCEPT_FLAG`,
	ADD COLUMN `CONS_CLOSE_DATE` DATE NULL DEFAULT NULL AFTER `CONS_COMPANY`,
	ADD COLUMN `CONS_VERIFICATION_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_CLOSE_DATE`,
	ADD COLUMN `CONS_MANUAL_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_VERIFICATION_NO`,
	ADD COLUMN `CONS_MANUAL_EXPIRATION_DATE` DATE NULL DEFAULT NULL AFTER `CONS_MANUAL_NO`,
	ADD COLUMN `CONS_FREE_TABLE_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_MANUAL_EXPIRATION_DATE`,
	ADD COLUMN `CONS_TAX` DECIMAL(11,2) NULL AFTER `CONS_FREE_TABLE_NO`,
	ADD COLUMN `CONS_RELIEF_TARIFF` DECIMAL(11,2) NULL AFTER `CONS_TAX`,
	ADD COLUMN `CONS_RELIEF_VAT` DECIMAL(11,2) NULL AFTER `CONS_RELIEF_TARIFF`,
	ADD COLUMN `CONS_AUDIT_DATE` DATE NULL AFTER `CONS_RELIEF_VAT`,
	ADD COLUMN `CONS_AUDIT_DATE2` DATE NULL AFTER `CONS_AUDIT_DATE`,
	ADD COLUMN `CONS_CUSTOM_REG_NO` VARCHAR(32) NULL AFTER `CONS_AUDIT_DATE2`,
	ADD COLUMN `CONS_CUSTOM_REG_DATE` DATE NULL AFTER `CONS_CUSTOM_REG_NO`,
	ADD COLUMN `CONS_BUSINESS_LICENSE_DATE` DATE NULL AFTER `CONS_CUSTOM_REG_DATE`,
	ADD COLUMN `CONS_ORG_DATE` DATE NULL AFTER `CONS_BUSINESS_LICENSE_DATE`,
	ADD COLUMN `CONS_EPORT_REG` TINYINT NULL AFTER `CONS_ORG_DATE`,
	ADD COLUMN `CONS_INSP_REG` TINYINT NULL AFTER `CONS_EPORT_REG`,
	ADD COLUMN `CARG_HS_CODE` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_INSP_REG`,
	ADD COLUMN `CONS_MARGIN` DECIMAL(11,2) NULL DEFAULT NULL AFTER `CARG_HS_CODE`,
	ADD COLUMN `CONS_CUSTOMS_DECLEARATION_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_MARGIN`,
	ADD COLUMN `CONS_REQUIRE_VERIFICATION` TINYINT NULL AFTER `CONS_CUSTOMS_DECLEARATION_NO`,
	ADD COLUMN `CONS_REQUIRE_RELIEF` TINYINT NULL AFTER `CONS_REQUIRE_VERIFICATION`,
	ADD COLUMN `CONS_CUSTOMS_DECLEAR_DATE` DATE NULL AFTER `CONS_REQUIRE_RELIEF`
	;
	
INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('0013', '加工贸易', 'M', 1),
('001301', '委托', 'M', 1),
('00130101', '查看委托', 'F', 1),
('00130102', '编辑委托', 'F', 1),
('00130103', '删除委托', 'F', 1),
('00130104', '输出', 'F', 1),
('00130105', '作废委托', 'F', 1),
('00130113', '解锁', 'F', 1),
('001302', '单证', 'M', 1),
('00130201', '查看单证', 'F', 1),
('00130202', '修改单证', 'F', 1),
('00130203', '删除单证', 'F', 1),
('001303', '费用', 'M', 1),
('00130301', '应收费用', 'M', 1),
('0013030101', '查看应收费用', 'F', 1),
('0013030102', '编辑应收费用', 'F', 1),
('0013030103', '删除应收费用', 'F', 1),
('00130302', '应付费用', 'M', 1),
('0013030201', '查看应付费用', 'F', 1),
('0013030202', '编辑应付费用', 'F', 1),
('0013030203', '删除应付费用', 'F', 1),
('00130304', '业务确认', 'F', 1);

INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('0014', '减免税', 'M', 1),
('001401', '委托', 'M', 1),
('00140101', '查看委托', 'F', 1),
('00140102', '编辑委托', 'F', 1),
('00140103', '删除委托', 'F', 1),
('00140104', '输出', 'F', 1),
('00140105', '作废委托', 'F', 1),
('00140113', '解锁', 'F', 1),
('001402', '单证', 'M', 1),
('00140201', '查看单证', 'F', 1),
('00140202', '修改单证', 'F', 1),
('00140203', '删除单证', 'F', 1),
('001403', '费用', 'M', 1),
('00140301', '应收费用', 'M', 1),
('0014030101', '查看应收费用', 'F', 1),
('0014030102', '编辑应收费用', 'F', 1),
('0014030103', '删除应收费用', 'F', 1),
('00140302', '应付费用', 'M', 1),
('0014030201', '查看应付费用', 'F', 1),
('0014030202', '编辑应付费用', 'F', 1),
('0014030203', '删除应付费用', 'F', 1),
('00140304', '业务确认', 'F', 1);

INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('0015', '企业注册', 'M', 1),
('001501', '委托', 'M', 1),
('00150101', '查看委托', 'F', 1),
('00150102', '编辑委托', 'F', 1),
('00150103', '删除委托', 'F', 1),
('00150104', '输出', 'F', 1),
('00150105', '作废委托', 'F', 1),
('00150113', '解锁', 'F', 1),
('001502', '单证', 'M', 1),
('00150201', '查看单证', 'F', 1),
('00150202', '修改单证', 'F', 1),
('00150203', '删除单证', 'F', 1),
('001503', '费用', 'M', 1),
('00150301', '应收费用', 'M', 1),
('0015030101', '查看应收费用', 'F', 1),
('0015030102', '编辑应收费用', 'F', 1),
('0015030103', '删除应收费用', 'F', 1),
('00150302', '应付费用', 'M', 1),
('0015030201', '查看应付费用', 'F', 1),
('0015030202', '编辑应付费用', 'F', 1),
('0015030203', '删除应付费用', 'F', 1),
('00150304', '业务确认', 'F', 1);

INSERT INTO `P_TEMPLATE_TYPE` (`TETY_ID`, `TETY_NAME`, `TETY_CODE`, `TETY_DESC`, `TETY_ACTION`, `TETY_PARENT`, `TETY_CHILD`, `TETY_CLASS`, `TETY_TYPE`, `TETY_FORM_FLAG`, `ACTIVE`, `VERSION`, `REMOVED`) VALUES
(46, '减免税统计表', 'RELIEF_TAX_STAT', '减免税统计表', 'CONS_X', NULL,'FConsign',  'B', 'M', 1, 1, 0, 0)
;
INSERT INTO `P_TEMPLATE_TYPE` (`TETY_ID`, `TETY_NAME`, `TETY_CODE`, `TETY_DESC`, `TETY_ACTION`, `TETY_PARENT`, `TETY_CHILD`, `TETY_CLASS`, `TETY_TYPE`, `TETY_FORM_FLAG`, `ACTIVE`, `VERSION`, `REMOVED`) VALUES
(47, '加工贸易催核表', 'TRADE_STAT', '加工贸易催核表', 'CONS_X', NULL, 'FConsign', 'B', 'M', 1, 1, 0, 0)
;
INSERT INTO `P_TEMPLATE_TYPE` (`TETY_ID`, `TETY_NAME`, `TETY_CODE`, `TETY_DESC`, `TETY_ACTION`, `TETY_PARENT`, `TETY_CHILD`, `TETY_CLASS`, `TETY_TYPE`, `TETY_FORM_FLAG`, `ACTIVE`, `VERSION`, `REMOVED`) VALUES
(48, '退单申请表', 'CUSTOMS_DOC_STAT', '退单申请表', 'CONS_X', NULL, 'FConsign', 'B', 'M', 1, 1, 0, 0)
;

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(46, '业务号', 'FConsign', 'consNo', NULL),
(46, '委托单位', 'FConsign', 'custName', NULL),
(46, '委托日期', 'FConsign', 'consDate', NULL),
(46, '合同号', 'FConsign', 'consDate', NULL),
(46, '免表号', 'FConsign', 'consFreeTableNo', NULL),
(46, '项目号', 'FConsign', 'consCustomRegNo', NULL),
(46, '经营单位', 'FConsign', 'consCompany', NULL),
(46, '品名', 'FConsign', 'consCargoNameCn', NULL),
(46, '数量', 'FConsign', 'consTotalPackages', NULL),
(46, '金额', 'FConsign', 'consTax', NULL),
(46, '市审结日期', 'FConsign', 'consAuditDate', NULL),
(46, '省审结日期', 'FConsign', 'consAuditDate2', NULL)
;

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(47, '业务号', 'FConsign', 'consNo', NULL),
(47, '委托单位', 'FConsign', 'custName', NULL),
(47, '委托日期', 'FConsign', 'consDate', NULL),
(47, '结单日期', 'FConsign', 'consCloseDate', NULL),
(47, '合同号', 'FConsign', 'consDate', NULL),
(47, '手册号', 'FConsign', 'consManualNo', NULL),
(47, '手册有效期', 'FConsign', 'consManualExpirationDate', NULL),
(47, '扩展字段1', 'FConsign', 'attr1', NULL),
(47, '扩展字段2', 'FConsign', 'attr2', NULL),
(47, '扩展字段3', 'FConsign', 'attr3', NULL),
(47, '扩展字段4', 'FConsign', 'attr4', NULL),
(47, '经营单位', 'FConsign', 'consCompany', NULL),
(47, '保证金', 'FConsign', 'consCargoNameCn', NULL)
;

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(48, '报关行', 'FConsign', 'consCustomsVendorName', NULL),
(48, '业务号', 'FConsign', 'consNo', NULL),
(48, '品名', 'FConsign', 'cargNameCn', NULL),
(48, '委托单位', 'FConsign', 'custName', NULL),
(48, '提单号', 'FConsign', 'consMblNo', NULL),
(48, '报关单号', 'FConsign', 'consCustomsDeclearationNo', NULL),
(48, '核销单号', 'FConsign', 'consVerificationNo', NULL),
(48, '核销联', 'FConsign', 'consRequireVerification', 'Bool'),
(48, '退税联', 'FConsign', 'consRequireRelief', 'Bool'),
(48, '备注', 'FConsign', 'consRemarks', NULL)
;
