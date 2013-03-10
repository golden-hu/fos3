UPDATE `P_ACTION` SET `ACT_SERVICE`='PGroupService', `ACT_METHOD`='query' WHERE  `ACT_NAME`='GROU_Q';
UPDATE `P_ACTION` SET `ACT_SERVICE`='PGroupService', `ACT_METHOD`='save' WHERE  `ACT_NAME`='GROU_S';
UPDATE `P_ACTION` SET `ACT_SERVICE`='PGroupUserService', `ACT_METHOD`='query' WHERE  `ACT_NAME`='GRUS_Q';

INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('GRUS_S', 'PGroupUserService', 'save', '组用户保存');

ALTER TABLE `P_GROUP_USER`
	ADD COLUMN `COMP_CODE` CHAR(4) NOT NULL AFTER `USER_ID`,
	ADD COLUMN `VERSION` INT NOT NULL DEFAULT 0 AFTER `COMP_CODE`,
	ADD COLUMN `REMOVED` TINYINT NOT NULL DEFAULT 0 AFTER `VERSION`;
	
UPDATE P_GROUP_USER SET COMP_CODE='{CC}';
	
INSERT INTO `P_COMPANY_CONFIG` (`COCO_CODE`, `COCO_NAME`, `COCO_VALUE_TYPE`, `COCO_GROUP`, 
	`COCO_TYPE`, `COCO_DESC`, `COMP_CODE`) VALUES ('DEFAULT_DEPT_T', '陆运业务缺省部门', 12, 
	'业务设置', 'A', '', '{CC}');