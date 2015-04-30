INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('COMP_S', 'PCompanyService', 'save', '公司保存'),
('COMP_Q', 'PCompanyService', 'query', '公司查询'),
('COMP_I', 'PCompanyService', 'initialData', '公司基础数据初始化'),
('COMP_IT', 'PCompanyService', 'initialTemplates', '公司基础数据初始化模板');

ALTER TABLE `P_COMPANY`
	ADD COLUMN `COMP_INITIAL_FLAG` TINYINT(4) NOT NULL DEFAULT '0' AFTER `COMP_ACTIVE`;
	
ALTER TABLE `F_CUSTOMS_DECLARATION`
	ADD COLUMN `CUDE_CONTAINER_FREE_DAYS` INT NULL DEFAULT NULL AFTER `CUDE_SHIP_DATE_T`,
	ADD COLUMN `CUDE_EXPIRE_DECLAR_DATE` DATE NULL DEFAULT NULL AFTER `CUDE_CONTAINER_FREE_DAYS`,
	ADD COLUMN `CUDE_EXPIRE_CONTAINER_DATE` DATE NULL DEFAULT NULL AFTER `CUDE_EXPIRE_DECLAR_DATE`,
	ADD COLUMN `CUDE_INSPECTION_DATE` DATE NULL DEFAULT NULL AFTER `CUDE_EXPIRE_CONTAINER_DATE`;