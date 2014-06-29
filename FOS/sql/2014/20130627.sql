CREATE TABLE SHIP_SCHEDULE( 
	SHSC_ID        INT             AUTO_INCREMENT,
    VESSEL_NAME      	VARCHAR(200),
    VESSEL_NAME_CN      VARCHAR(200),
    VOYAGE      		VARCHAR(32),
    PLANNING_UNBERTHING      	VARCHAR(32), -- 计划离港
    ACTUAL_UNBERTHING      	VARCHAR(32), -- 实际离港
    PLANNING_BERTHING      	VARCHAR(32), -- 计划到港
    ACTUAL_BERTHING      	VARCHAR(32), -- 实际到港
    PLANNING_BERTH      	VARCHAR(32), -- 计划泊位
    ACTUAL_BERTH      		VARCHAR(32), -- 实际泊位
    LOADING_TIME      		VARCHAR(32), -- 开港时间
    CUT_DATE      			VARCHAR(32), -- 开港日期
    PORT_AREA      			VARCHAR(32), -- 港区
    SHIPPING_AGENCY      	VARCHAR(32), -- 船代
    
    IS_EXPORT      		VARCHAR(16), -- 是否出口
    IS_LATE      		VARCHAR(16), -- 是否延期
    CUT_OFF      		VARCHAR(16), -- 是否已截港
   	SOURCE      		VARCHAR(16), -- 来源
   	STATUS     		VARCHAR(16) , -- 状态       	
    PRIMARY KEY (SHSC_ID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('SHSC_Q', 'shipScheduleService', 'query', 'ShipSchedule查询'),
('SHSC_X', 'shipScheduleService', 'complexQuery', 'ShipSchedule复杂查询'),
('SHSC_XV', 'shipScheduleService', 'queryVessel', 'ShipSchedule查询船名')
;

ALTER TABLE `F_CONSIGN`
	ADD COLUMN `HARBOUR_OPEN_TIME` VARCHAR(32) NULL DEFAULT NULL AFTER `CONS_SAIL_DATE`,
	ADD COLUMN `HARBOUR_CLOSE_TIME` VARCHAR(32) NULL DEFAULT NULL AFTER `HARBOUR_OPEN_TIME`;
	
	