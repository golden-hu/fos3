--
-- 表报检类型的结构 G_INSPECTION_TYPE 
--

CREATE TABLE G_INSPECTION_TYPE(
     INTY_ID         INT             AUTO_INCREMENT,
     INTY_NAME       VARCHAR(32) NOT NULL,
     INTY_CODE       VARCHAR(32),
     ACTIVE          TINYINT NOT NULL default '1',
     CREATE_BY       INT,
     CREATE_TIME     DATETIME,
     MODIFY_BY       INT,
     MODIFY_TIME     DATETIME,
     COMP_CODE       CHAR(8)    NOT NULL,
     VERSION         INT  NOT NULL default '0',
     REMOVED         TINYINT  NOT NULL default '0',
     PRIMARY KEY (INTY_ID)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表货物属性的结构 G_CARGO_PROPERTY
--

CREATE TABLE IF NOT EXISTS G_CARGO_PROPERTY (
  CAPR_ID INT NOT NULL auto_increment,
  CAPR_NAME VARCHAR(200),
  ACTIVE TINYINT(4) default '1',
  COMP_CODE char(8),
  VERSION INT NOT NULL default '0',
  REMOVED TINYINT(4) default '0',
  PRIMARY KEY  (CAPR_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------


INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('INTY_S', 'GInspectionTypeService', 'save', '报检类型保存'),
('INTY_Q', 'GInspectionTypeService', 'query', '报检类型查询');

INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('001030', '服务项目', 'M', 1),
('00103001', '查看', 'F', 1),
('00103002', '编辑', 'F', 1),
('00103003', '删除', 'F', 1),
('001031', '报检类型', 'M', 1),
('00103101', '查看', 'F', 1),
('00103102', '编辑', 'F', 1),
('00103103', '删除', 'F', 1);


INSERT INTO `G_CARGO_PROPERTY` (`CAPR_NAME`,`COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('普货', '{CC}', 0, 0),
('危品','{CC}', 0, 0),
('展品','{CC}', 0, 0),
('个人行李物品','{CC}', 0, 0),
('吉柜','{CC}', 0, 0),
('机械配件','{CC}', 0, 0),
('暂时进出境物品','{CC}', 0, 0),
('过境物品','{CC}', 0, 0),
('冷藏品','{CC}', 0, 0),
('生鲜果品','{CC}', 0, 0),
('其他','{CC}', 0, 0);

INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('CAPR_S', 'GCargoPropertyService', 'save', '货物属性保存'),
('CAPR_Q', 'GCargoPropertyService', 'query', '货物属性查询');


INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('001032', '货物属性', 'M', 1),
('00103201', '查看', 'F', 1),
('00103202', '编辑', 'F', 1),
('00103203', '删除', 'F', 1);

