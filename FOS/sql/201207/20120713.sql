INSERT INTO `P_TEMPLATE_TYPE` (`TETY_ID`, `TETY_NAME`, `TETY_CODE`, `TETY_DESC`, `TETY_ACTION`, `TETY_PARENT`, `TETY_CHILD`, `TETY_CLASS`, `TETY_TYPE`, `TETY_FORM_FLAG`, `ACTIVE`, `VERSION`, `REMOVED`) VALUES
(54, '提单十联单', 'FBL_MANIFEST', '提单十联单', 'BL_Q', 'FBl', '', 'B', 'P', 1, 1, 0, 0);

INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('提单十联单', 'B', 'xls', 54, 'FBL_MANIFEST', '提单十联单', NULL, '提单十联单', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0);


INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(54, '发货人', 'FBl', 'blShipper', NULL),
(54, '收货人', 'FBl', 'blConsignee', NULL),
(54, '通知人', 'FBl', 'blNotifyParty', NULL),
(54, '前程运输', 'FBl', 'blPrecarriage', NULL),
(54, '收货地', 'FBl', 'blReceiptPlace', NULL),
(54, '船名', 'FBl', 'blVessel', NULL),
(54, '航次', 'FBl', 'blVoyage', NULL),
(54, '装货港', 'FBl', 'blPol', NULL),
(54, '卸货港', 'FBl', 'blPod', NULL),
(54, '交货地', 'FBl', 'blDeliveryPlace', NULL),
(54, '标记唛码', 'FBl', 'blMarks', NULL),
(54, '箱型箱量', 'FBl', 'consContainersInfo', NULL),
(54, '件数包装', 'FBl', 'blPackages', NULL),
(54, '货物描述', 'FBl', 'blCargoDesc', NULL),
(54, '毛重', 'FBl', 'blGrossWeight', NULL),
(54, '尺码', 'FBl', 'blMeasurement', NULL),
(54, '付费方式', 'FBl', 'blPaymentTerm', NULL),
(54, '运输条款', 'FBl', 'blTransTerm', NULL),
(54, '签发地点', 'FBl', 'blIssuePlace', NULL),
(54, '装期', 'FBl', 'blLoadDate', NULL),
(54, '开船日期', 'FBl', 'blEtd', NULL),
(54, '提单号', 'FBl', 'blNo', NULL),
(54, '业务号', 'FBl', 'consNo', NULL),
(54, '承运人', 'FBl', 'blCarrierName', NULL),
(54, '备注', 'FBl', 'blRemarks', NULL),
(54, '大写件数', 'FBl', 'blTotalSay', NULL),
(54, '第二通知人', 'FBl', 'blNotifyParty2', NULL);