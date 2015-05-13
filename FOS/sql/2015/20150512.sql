
CREATE TABLE IF NOT EXISTS G_CARGO_CHECK_TYPE (
  CCTY_ID INT NOT NULL auto_increment,
  CCTY_NAME VARCHAR(16) NOT NULL,
  ACTIVE TINYINT(4) default '1',
  COMP_CODE VARCHAR(32) NOT NULL,
  VERSION INT NOT NULL default '0',
  REMOVED TINYINT(4) NOT NULL default '0',
  PRIMARY KEY  (CCTY_ID)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('CCTY_S', 'GCargoCheckTypeService', 'save', '货物查验类型保存'),
('CCTY_Q', 'GCargoCheckTypeService', 'query', '货物查验类型查询');

INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('001034', '货物查验类型', 'M', 1),
('00103401', '查看', 'F', 1),
('00103402', '编辑', 'F', 1),
('00103403', '删除', 'F', 1);