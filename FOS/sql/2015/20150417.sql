update P_TEMPLATE_MAP SET TEMA_FIELD='consCargoNameCn' WHERE TETY_ID=26 AND TEMA_NAME='货物中文名称';
update P_TEMPLATE_MAP SET TEMA_FIELD='consCargoNameEn' WHERE TETY_ID=26 AND TEMA_NAME='货物英文名称';

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(26, '委托单位', 'FConsign', 'custName', NULL);