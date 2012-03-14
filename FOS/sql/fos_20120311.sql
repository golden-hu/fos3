ALTER TABLE `F_CUSTOMS_DECLARATION`
	ADD COLUMN `CUDE_TOTAL_AMOUNT` DECIMAL(9,2) NULL DEFAULT NULL AFTER `CUDE_CHARGE`,
	ADD COLUMN `CUDE_TOTAL_SAY` VARCHAR(200) NULL DEFAULT NULL AFTER `CUDE_TOTAL_AMOUNT`;
	
ALTER TABLE `F_CUSTOMS_ENTRY`
	CHANGE COLUMN `CUEN_NO` `CUEN_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CARG_ID`;

ALTER TABLE `F_CUSTOMS_ENTRY`
	ADD COLUMN `CUEN_PACKAGE_NUM` DECIMAL(9,2) NULL DEFAULT NULL AFTER `CUEN_CARGO_SPEC`,
	ADD COLUMN `PACK_CODE` VARCHAR(64) NULL DEFAULT NULL AFTER `CUEN_PACKAGE_NUM`;
	
ALTER TABLE `F_CONSIGN`
	CHANGE COLUMN `CONS_CARGO_MARKS` `CONS_CARGO_MARKS` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_CARGO_DESC`,
	CHANGE COLUMN `CONS_CARGO_NAME_EN` `CONS_CARGO_NAME_EN` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_CARGO_MEASUREMENT`,
	CHANGE COLUMN `CONS_CARGO_SPECIAL` `CONS_CARGO_SPECIAL` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `CONS_CARGO_NAME_CN`,
	CHANGE COLUMN `ATTR9` `ATTR9` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `ATTR8`,
	CHANGE COLUMN `ATTR10` `ATTR10` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci' AFTER `ATTR9`;
	
ALTER TABLE `F_CONSIGN`
	ADD COLUMN CONS_VERIFICATION_FLAG TINYINT DEFAULT 0 AFTER `CONS_CUSTOMS_DECLEAR_DATE`,
    ADD COLUMN CONS_BULKY_CARRIER  DECIMAL(10, 4) AFTER `CONS_VERIFICATION_FLAG`,
    ADD COLUMN CONS_BULKY_CUSTOMER 	  		DECIMAL(10, 4) AFTER `CONS_BULKY_CARRIER`,
    ADD COLUMN CONS_CHARGE_WEIGHT_CARRIER      DECIMAL(10, 4) AFTER `CONS_BULKY_CUSTOMER`,
    ADD COLUMN CONS_CHARGE_WEIGHT_CUSTOMER 	DECIMAL(10, 4) AFTER `CONS_CHARGE_WEIGHT_CARRIER`,
    ADD COLUMN CONS_TOTAL_GROSS_WEIGHT_CUSTOMER      DECIMAL(10, 4) AFTER `CONS_CHARGE_WEIGHT_CUSTOMER`,
    ADD COLUMN CONS_TOTAL_MEASUREMENT_CUSTOMER 	  DECIMAL(10, 4) AFTER `CONS_TOTAL_GROSS_WEIGHT_CUSTOMER`;
	
INSERT INTO `P_TEMPLATE_TYPE` (`TETY_ID`, `TETY_NAME`, `TETY_CODE`, `TETY_DESC`, `TETY_ACTION`, `TETY_PARENT`, `TETY_CHILD`, `TETY_CLASS`, `TETY_TYPE`, `TETY_FORM_FLAG`, `ACTIVE`, `VERSION`, `REMOVED`) VALUES
(49, '商业发票', 'CUDE_INVOICE', NULL, 'CUDE_Q', 'FCustomsDeclaration', 'FCustomsEntry', 'B', 'P', 1, 1, 1, 0),
(50, '报关装箱单', 'CUDE_PACKING', NULL, 'CUDE_Q', 'FCustomsDeclaration', 'FCustomsEntry', 'B', 'P', 1, 1, 1, 0)
;

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(1, '发货人', 'FBl', 'blShipper', NULL),
(1, '收货人', 'FBl', 'blConsignee', NULL),
(1, '通知人', 'FBl', 'blNotifyParty', NULL),
(1, '第二通知人', 'FBl', 'blNotifyParty2', NULL),
(1, '提单号', 'FBl', 'blNo', NULL),
(1, '贸易合同号', 'FBl', 'consTradeContractNo', NULL),
(1, '业务号', 'FBl', 'consNo', NULL),
(1, '目的港代理', 'FBl', 'blOverseaAgency', NULL),
(1, '收货地', 'FBl', 'blReceiptPlace', NULL),
(1, '前程运输', 'FBl', 'blPrecarriage', NULL),
(1, '船名', 'FBl', 'blVessel', NULL),
(1, '航次', 'FBl', 'blVoyage', NULL),
(1, '航班号', 'FBl', 'blVoyage', NULL),
(1, '装货港', 'FBl', 'blPol', NULL),
(1, '卸货港', 'FBl', 'blPod', NULL),
(1, '交货地', 'FBl', 'blDeliveryPlace', NULL),
(1, '标记唛码', 'FBl', 'blMarks', NULL),
(1, '件数', 'FBl', 'blPackages', NULL),
(1, '包装', 'FBl', 'packName', NULL),
(1, '货物描述', 'FBl', 'blCargoDesc', NULL),
(1, '毛重', 'FBl', 'blGrossWeight', NULL),
(1, '体积', 'FBl', 'blMeasurement', NULL),
(1, '合计大写', 'FBl', 'blTotalSay', NULL),
(1, '运费条款', 'FBl', 'blPaymentTerm', NULL),
(1, '付费地点', 'FBl', 'blPaidAt', NULL),
(1, '附加条款', 'FBl', 'consChargeRemarks', NULL),
(1, '运输条款', 'FBl', 'blTransTerm', NULL),
(1, '正本份数', 'FBl', 'blOriginalNum', NULL),
(1, '签发人', 'FBl', 'blIssueBy', NULL),
(1, '签发地点', 'FBl', 'blIssuePlace', NULL),
(1, '签发日期', 'FBl', 'blIssueDate', NULL),
(1, '装运方式', 'FBl', 'consShipType', NULL),
(1, '箱型箱量', 'FBl', 'blContainerInfo', NULL),
(1, '箱号', 'FBl', 'blContainerNo', NULL),
(1, '清洁提单', 'FBl', 'blCleanFlag', 'getCleanBL'),
(1, '承运人', 'FBl', 'blCarrierName', NULL),
(1, '备注', 'FBl', 'blRemarks', NULL),
(1, '装船日期', 'FBl', 'blLoadDate', NULL),
(1, '到港日期', 'FBl', 'blEta', NULL),
(1, '第一中转港代码', 'FBl', 'blToFirst', NULL),
(1, '第二中转港代码', 'FBl', 'blToSecond', NULL),
(1, '第三中转港代码', 'FBl', 'blToThird', NULL),
(1, '头程承运人代码', 'FBl', 'blByFirst', NULL),
(1, '二程承运人代码', 'FBl', 'blBySecond', NULL),
(1, '三程承运人代码', 'FBl', 'blByThird', NULL),
(1, '币种', 'FBl', 'currCode', NULL),
(1, '从价从量运费条款', 'FBl', 'blWeightPayment', NULL),
(1, '其它费用条款', 'FBl', 'blOtherPanyment', NULL),
(1, '承运申报价值', 'FBl', 'blDvCarriage', NULL),
(1, '海关申报价值', 'FBl', 'blDvCustoms', NULL),
(1, '保险金额', 'FBl', 'blAmountInvoice', NULL),
(1, '其它操作信息', 'FBl', 'blHandlingInfo', NULL),
(1, '费率等级', 'FBl', 'blRateClass', NULL),
(1, '商品代码', 'FBl', 'blRateClass', NULL),
(1, '付费重量', 'FBl', 'blChargeWeight', NULL),
(1, '费率', 'FBl', 'blChargeRate', NULL),
(1, '运费总额', 'FBl', 'blTotalCharge', NULL),
(1, '从量运费预付额', 'FBl', 'blWeightChargePp', NULL),
(1, '从量运费到付额', 'FBl', 'blWeightChargeCc', NULL),
(1, '从价运费预付额', 'FBl', 'blValuationChargePp', NULL),
(1, '从价运费到付额', 'FBl', 'blValuationChargeCc', NULL),
(1, '其它费用', 'FBl', 'consChargeRemarks', NULL),
(1, '预付总额', 'FBl', 'blTotalPp', NULL),
(1, '到付总额', 'FBl', 'blTotalCc', NULL)
;

