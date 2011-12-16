INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('BILL_EQ', 'SBillService', 'queryForExport', '对帐单导出查询');

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(17, '装货港', 'SBillItem', 'consPodEn', NULL),
(17, '卸货港', 'SBillItem', 'consPolEn', NULL),
(17, '品名', 'SBillItem', 'consCargoNameCn', NULL),
(17, '包装', 'SBillItem', 'consPackName', NULL),
(17, '件数', 'SBillItem', 'consTotalPackages', NULL),
(17, '毛重', 'SBillItem', 'consTotalGrossWeight', NULL),
(17, '净重', 'SBillItem', 'consTotalNetWeight', NULL),
(17, '体积', 'SBillItem', 'consTotalMeasurement', NULL),
(17, '箱型箱量', 'SBillItem', 'consContainersInfo', NULL),
(17, '开航日期', 'SBillItem', 'consSailDate', NULL)
;

UPDATE `P_TEMPLATE_TYPE` SET `TETY_ACTION`='BILL_EQ' WHERE TETY_ID=17;
