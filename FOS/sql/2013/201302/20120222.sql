update P_TEMPLATE_MAP set TEMA_FIELD = "consPolEn" where TEMA_NAME = "装货港" and TETY_ID = "17";
update P_TEMPLATE_MAP set TEMA_FIELD = "consPodEn" where TEMA_NAME = "卸货港" and TETY_ID = "17";

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(17, '目的港', 'SBillItem', 'consPotEn', NULL),
(17, '到港日期', 'SBillItem', 'consSailDate', NULL);
