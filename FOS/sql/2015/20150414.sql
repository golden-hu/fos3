CREATE TABLE IF NOT EXISTS G_SERVICE_ITEM (
  SEIT_ID INT NOT NULL auto_increment,
  SEIT_NAME VARCHAR(32) NOT NULL,
  ACTIVE TINYINT(4) default '1',
  COMP_CODE char(8) NOT NULL,
  VERSION INT default '0',
  REMOVED TINYINT(4) NOT NULL default '0',
  PRIMARY KEY  (SEIT_ID)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('SEIT_S', 'GServiceItemService', 'save', '服务项目保存'),
('SEIT_Q', 'GServiceItemService', 'query', '服务项目查询');

update P_TEMPLATE_MAP set TEMA_NAME='联系电话' where TETY_ID=34 and TEMA_NAME='客户联系人';

UPDATE P_TEMPLATE_MAP SET TEMA_NAME='卸货港' WHERE TETY_ID=34 AND TEMA_NAME='目的港';

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(34, '目的港', 'FConsign', 'consDeliveryPlace', NULL);