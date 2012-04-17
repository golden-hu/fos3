CREATE TABLE C_CUSTOMER_SITE(
    CUSI_ID        INT             AUTO_INCREMENT,
    CUST_ID        INT             NOT NULL,
    CUSI_NAME      VARCHAR(200),
    CUSI_TEL varchar(32) collate utf8_unicode_ci default NULL,
    CUSI_CONTACT varchar(32) collate utf8_unicode_ci default NULL,
    CUSI_ADDRESS varchar(200) collate utf8_unicode_ci default NULL,
    CUSI_TYPE      INT,    
    CREATE_BY      INT,
    CREATE_TIME    DATETIME,
    MODIFY_BY      INT,
    MODIFY_TIME    DATETIME,
    COMP_CODE      CHAR(4)         NOT NULL,
    VERSION        INT             DEFAULT 0 NOT NULL,
    REMOVED        TINYINT         DEFAULT 0 NOT NULL,
    PRIMARY KEY (CUSI_ID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('CUSI_S', 'CCustomerSiteService', 'save', '客户地点保存'),
('CUSI_Q', 'CCustomerSiteService', 'query', '客户地点查询');