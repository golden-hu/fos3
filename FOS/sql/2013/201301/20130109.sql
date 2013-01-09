INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES 
(1, 'MBLNO3', 'FBL', 'mblNo', 'getBlNo3'),
(1, '会计信息', 'FBl', 'blAccountingInfo', NULL),
(1, 'IATA', 'FBl', 'blAgentIataCode', NULL),
(1, '付费方式', 'FBl', 'blValuePayment', 'overridePP'),
(1, '付款方式', 'FBl', 'blValuePayment', NULL),
(1, '其他付款方式', 'FBl', 'blOtherPayment', NULL),
(1, '预付其他费用', 'FBl', 'blOtherDcPp', NULL),
(1, '到付其他费用', 'FBl', 'blOtherDcCc', NULL);

UPDATE `P_TEMPLATE_MAP` SET `TEMA_CONVERTER`='getBlNo' WHERE  `TEMA_ID`=7 LIMIT 1;