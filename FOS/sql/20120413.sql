CREATE TABLE F_CUSTOMS_TYPE(
     ID              INT             AUTO_INCREMENT,
     CUTY_NAME       VARCHAR(32),
     CUTY_CODE       INT,
     ACTIVE          TINYINT,
     CREATE_BY       INT,
     CREATE_TIME     DATETIME,
     MODIFY_BY       INT,
     MODIFY_TIME     DATETIME,
     COMP_CODE       CHAR(4)    NOT NULL,
     VERSION         INT  NOT NULL default '0',
     REMOVED         TINYINT  NOT NULL default '0',
     PRIMARY KEY (ID)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;