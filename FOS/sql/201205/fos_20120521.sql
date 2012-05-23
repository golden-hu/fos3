ALTER TABLE`F_TRANS_CARGO`
    ADD COLUMN `CONS_MBL_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `PACK_NAME`;
    
INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES    
(20, 'MBL/NO', 'FTransCargo', 'consMblNo', NULL),
(20, '货物品名', 'FTransCargo', 'trcaCargoName', NULL),
(20, '货物件数', 'FTransCargo', 'trcaPackageNum', NULL),
(20, '货物毛重', 'FTransCargo', 'trcaGrossWeight', NULL),
(20, '货物体积', 'FTransCargo', 'trcaMeasurement', NULL),
(20, '货物备注', 'FTransCargo', 'trcaRemarks', NULL);

INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('TRAN_QWC', 'FTransService', 'queryWithCargo', '运输查询(包含货物列表）');
UPDATE P_TEMPLATE_TYPE SET TETY_ACTION='TRAN_QWC' WHERE TETY_CODE='TRAN';

INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES    
(20, '送货联系人', 'FTrans', 'tranDeliveryContact', NULL),
(20, '送货联系电话', 'FTrans', 'tranDeliveryTel', NULL),
(20, '送货地点', 'FTrans', 'tranDeliveryPlace', NULL),
(20, '送货日期', 'FTrans', 'tranDeliveryDate', NULL),
(20, '送货地址', 'FTrans', 'tranDeliveryAddress', NULL);