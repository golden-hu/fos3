-- add by yinyulong
INSERT INTO `P_TEMPLATE_MAP` (`TETY_ID`, `TEMA_NAME`, `TEMA_TABLE`, `TEMA_FIELD`, `TEMA_CONVERTER`) VALUES
(18, '箱公司', 'FConsign', 'consContainerCompanyName', NULL),
(18, '委托日期', 'FConsign', 'consDate', NULL),
(18, '港区', 'FConsign', 'consHarbour', NULL),
(18, 'MBLNo', 'FConsign', 'consMblNo', NULL);

-- add by hqw
CREATE TABLE IF NOT EXISTS O_ANNOUNCEMENT(
    ANNO_ID    INT            NOT NULL auto_increment, 
    ANNO_TITLE      VARCHAR(64)    NULL,
    ANNO_TYPE		VARCHAR(16)	   NULL,
 	ANNO_DATE		DATETIME	   NULL,
 	ANNO_CONTENT	VARCHAR(2000)  NULL,
    FILE_NAME	VARCHAR(200)   NULL,
    CREATE_BY   VARCHAR(32)    NULL,
    CREATE_TIME   DATETIME       NULL,
	COMP_CODE VARCHAR(32) NOT NULL,
	VERSION INT NOT NULL default '0',
	REMOVED TINYINT(4) NOT NULL default '0',
    PRIMARY KEY NONCLUSTERED (ANNO_ID)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

