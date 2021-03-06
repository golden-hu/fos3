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
    CREATE_BY    INT,
    CREATE_TIME   DATETIME       NULL,
	COMP_CODE VARCHAR(32) NOT NULL,
	VERSION INT NOT NULL default '0',
	REMOVED TINYINT(4) NOT NULL default '0',
    PRIMARY KEY NONCLUSTERED (ANNO_ID)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO P_ACTION (ACT_NAME, ACT_SERVICE, ACT_METHOD, ACT_REMARK) VALUES
('ANNO_S', 'OAnnouncementService', 'save', '公告保存'),
('ANNO_Q', 'OAnnouncementService', 'query', '公告查询');

INSERT INTO P_FUNCTION (FUNC_CODE, FUNC_NAME, FUNC_TYPE, ACTIVE) VALUES
('001106', '公告管理', 'M', 1),
('00110601', '查看', 'F', 1),
('00110602', '编辑', 'F', 1),
('00110603', '删除', 'F', 1);


