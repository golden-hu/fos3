INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(1, '件数包装', 'FBl', 'blPackages', NULL),
(1, '铅封号', 'FBl', 'blSealNo', NULL);

ALTER TABLE `F_BL`
	ADD COLUMN `BL_SEAL_NO` VARCHAR(500) NULL DEFAULT NULL AFTER `BL_CONTAINER_NO`;
