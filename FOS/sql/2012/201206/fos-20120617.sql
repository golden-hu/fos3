 CREATE TABLE F_CONTAINER_TRACE(
     COTR_ID                 INT               AUTO_INCREMENT,
     CONS_ID                 INT,
     CONS_NO                 VARCHAR(32),
     CONT_NO                 VARCHAR(32),
     CONT_OWNER              VARCHAR(64),
     CONT_OWNER_ID           INT,
     CONT_NUM                INT               DEFAULT 1,
     CONT_TYPE               VARCHAR(32),
     CONS_ETA                DATE,
     CONS_EXPIRY_DATE        DATE,
     CUST_FREE_DAY           TINYINT,
     CUST_EXTENDED_RATE      DECIMAL(9, 4),
     CUST_EXTENDED_FEE       DECIMAL(9, 4),
     CUST_EXTENDED_DAY       TINYINT,
     TENANT_FREE_DAY         TINYINT,
     TENANT_EXTENDED_RATE    DECIMAL(9, 4),
     TENANT_EXTENDED_FEE     DECIMAL(9, 4),
     TENANT_EXTENDED_DAY     TINYINT,
     CONT_REMARKS            VARCHAR(200),
     CREATE_BY               INT,
     CREATE_TIME             DATETIME,
     MODIFY_BY               INT,
     MODIFY_TIME             DATETIME,
     COMP_CODE               CHAR(4)           NOT NULL,
     VERSION                 INT               DEFAULT 0 NOT NULL,
     REMOVED                 TINYINT           DEFAULT 0 NOT NULL,
     PRIMARY KEY (COTR_ID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `G_TRAIN_STATION` (
	`TRAIN_ID` INT(11) NOT NULL AUTO_INCREMENT,
	`TRAIN_CODE` VARCHAR(16) NOT NULL,
	`TRAIN_NAME_CN` VARCHAR(64) NULL DEFAULT NULL,
	`TRAIN_NAME_EN` VARCHAR(64) NULL DEFAULT NULL,
	`TRAIN_TYPE` TINYINT(4) NULL DEFAULT '0',
	`TRAIN_TYPE_FLAG` TINYINT(4) NULL DEFAULT '1',
	`ACTIVE` TINYINT(4) NULL DEFAULT NULL,
	`COUN_CODE` CHAR(2) NOT NULL,
	`COMP_CODE` CHAR(4) NOT NULL,
	`REMOVED` TINYINT(4) NOT NULL DEFAULT '0',
	`VERSION` INT(11) NOT NULL DEFAULT '0',
	PRIMARY KEY (`TRAIN_ID`),
	INDEX `COUN_CODE` (`COUN_CODE`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='火车站';


INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('COTR_Q', 'FContainerTraceService', 'query', '集装箱管理查询'),
('COTR_S', 'FContainerTraceService', 'save', '集装箱管理保存'),
('TRAIN_Q', 'GTrainStationService', 'query', '火车站管理查询'),
('TRAIN_X', 'GTrainStationService', 'complexQuery', '火车站复杂查询'),
('TRAIN_S', 'GTrainStationService', 'save', '火车站管理保存');
/* 北京永顺   END*/
