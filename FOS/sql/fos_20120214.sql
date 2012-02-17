update p_function set func_code='00070107' where func_code='00070106';
update p_function set func_code='00070106' where func_code='00070105';
update p_role_function set func_code='00070107' where func_code='00070106';
update p_role_function set func_code='00070106' where func_code='00070105';
INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(27, '业务号', 'FConsign', 'consNo', NULL),
(27, '品名', 'FConsign', 'consCargoNameEn', NULL),
(26, '箱型箱量', 'FConsign', 'consContainersInfo', NULL),
(41, '包装', 'FConsign', 'packName', NULL);