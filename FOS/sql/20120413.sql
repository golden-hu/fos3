CREATE TABLE G_CUSTOMS_TYPE(
     CUTY_ID         INT             AUTO_INCREMENT,
     CUTY_NAME       VARCHAR(32) NOT NULL,
     CUTY_CODE       VARCHAR(32) NOT NULL,
     ACTIVE          TINYINT NOT NULL default '1',
     CREATE_BY       INT,
     CREATE_TIME     DATETIME,
     MODIFY_BY       INT,
     MODIFY_TIME     DATETIME,
     COMP_CODE       CHAR(4)    NOT NULL,
     VERSION         INT  NOT NULL default '0',
     REMOVED         TINYINT  NOT NULL default '0',
     PRIMARY KEY (ID)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('CUTY_S', 'GCustomsTypeService', 'save', '报关类型保存'),
('CUTY_Q', 'GCustomsTypeService', 'query', '报关类型查询');

INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('001029', '报关类型', 'M', 1),
('00102901', '查看', 'F', 1),
('00102902', '编辑', 'F', 1),
('00102903', '删除', 'F', 1);

ALTER TABLE `f_customs_declaration`
	CHANGE COLUMN `CUDE_TYPE` `CUDE_TYPE` VARCHAR(32) NULL DEFAULT NULL AFTER `CUDE_PARTIAL_FLAG`;
