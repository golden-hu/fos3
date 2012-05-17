ALTER TABLE `F_CONSIGN`
	ADD COLUMN `CONS_TRACK_LOAD_TIME` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_TRACK_LOAD_DATE`,
	ADD COLUMN `CONS_BOOKING_AGENCY_CONTACT` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_BOOKING_AGENCY_SNAME`,
	ADD COLUMN `CONS_BOOKING_AGENCY_TEL` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_BOOKING_AGENCY_CONTACT`,
	ADD COLUMN `CONS_CONTAINER_LOAD_TIME` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_CONTAINER_LOAD_DATE`;
	
INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(15, '我司发票号','FConsign', 'attr2',NULL),
(18, '装货时间', 'FConsign', 'consTrackLoadTime', NULL),
(18, '进仓日期', 'FConsign', 'consContainerLoadDate', NULL),
(18, '进仓时间', 'FConsign', 'consContainerLoadTime', NULL),
(26, '订舱代理联系人', 'FConsign', 'consBookingAgencyContact', NULL),
(26, '订舱代理电话', 'FConsign', 'consBookingAgencyTel', NULL),
(18, '业务号', 'FConsign', 'consNo', NULL),
(18, '业务员', 'FConsign', 'consSalesRepId', 'getUserName'),
(18, '业务员电话', 'FConsign', 'consSalesRepId', 'getUserTel'),
(18, '主单号', 'FConsign', 'consMblNo', NULL),
(18, '分单号', 'FConsign', 'consHblNo', NULL);
