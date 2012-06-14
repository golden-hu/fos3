ALTER TABLE `P_USER`
	ADD COLUMN `USER_SYSTEM_USER_FLAG` TINYINT(4) NULL DEFAULT NULL DEFAULT '1' AFTER `USER_OPERATOR_FLAG`,
	ADD COLUMN `USER_GROU_VIEW_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `USER_SYSTEM_USER_FLAG`,
	ADD COLUMN `USER_GROU_EDIT_FLAG` TINYINT(4) NULL DEFAULT '0' AFTER `USER_GROU_VIEW_FLAG`;
	
INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
	('CONS_MODIFY_NO', 'FConsignService', 'updateConsNo', '修改业务号');
	
INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('0001020120', '修改业务号', 'F', 1),
('0001030120', '修改业务号', 'F', 1),
('0001050120', '修改业务号', 'F', 1),
('0001060120', '修改业务号', 'F', 1),
('0002020120', '修改业务号', 'F', 1),
('0002030120', '修改业务号', 'F', 1),
('0003020120', '修改业务号', 'F', 1),
('0003030120', '修改业务号', 'F', 1),
('00040120', '修改业务号', 'F', 1),
('00050120', '修改业务号', 'F', 1),
('00130120', '修改业务号', 'F', 1),
('00140120', '修改业务号', 'F', 1),
('00150120', '修改业务号', 'F', 1);
