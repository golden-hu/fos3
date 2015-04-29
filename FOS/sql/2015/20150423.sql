
delete from P_TEMPLATE_MAP where TETY_ID=31;

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(31, '结算单位', 'SVoucher', 'custName', NULL),
(31, '收款单号', 'SVoucher', 'voucNo', NULL),
(31, '核销号', 'SVoucher', 'voucWriteOffNo', NULL),
(31, '付款币别', 'SVoucher', 'currCode', NULL),
(31, '金额', 'SVoucher', 'voucAmount', NULL),
(31, '核销金额', 'SVoucher', 'voucWriteOffAmount', NULL),
(31, '订舱客户', 'SVoucherItem', 'custName', NULL),
(31, '船名', 'SVoucherItem', 'consVessel', NULL),
(31, '航次', 'SVoucherItem', 'consVoyage', NULL),
(31, '提单号', 'SVoucherItem', 'consMblNo', NULL),
(31, '开航日期', 'SVoucherItem', 'consSailDate', NULL),
(31, '业务号', 'SVoucherItem', 'consNo', NULL),
(31, '账单号', 'SVoucherItem', 'invoNo', NULL),
(31, '税务发票号', 'SVoucherItem', 'invoTaxNo', NULL),
(31, '费用类别', 'SVoucherItem', 'charName', NULL),
(31, '原币种', 'SVoucherItem', 'expeCurrCode', NULL),
(31, '开票币种', 'SVoucherItem', 'invoCurrCode', NULL),
(31, '开票金额', 'SVoucherItem', 'initInvoiceAmountOri', NULL),
(31, '付款金额', 'SVoucherItem', 'voitAmountOriW', NULL),
(31, '汇率', 'SVoucherItem', 'initExRate', NULL),
(31, '折算金额', 'SVoucherItem', 'voitAmountVoucW', NULL);

update P_TEMPLATE_MAP set TEMA_FIELD='blPaymentTerm', TEMA_CONVERTER = NULL where tety_id=1 and tema_name='付费方式' and TEMA_FIELD='blValuePayment';

