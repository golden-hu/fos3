-- phpMyAdmin SQL Dump
-- version 3.3.0
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2010 年 05 月 30 日 20:11
-- 服务器版本: 5.0.67
-- PHP 版本: 5.2.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

create database fos;
use fos;
grant all privileges on fos.* to fos@localhost identified by 'fos';
flush privileges;

--
-- 数据库: `fos`
--

-- --------------------------------------------------------

CREATE TABLE C_CUSTOMER_SHIPPER(
    CUSH_ID        INT             AUTO_INCREMENT,
    CUST_ID        INT             NOT NULL,
    CUSH_NAME      VARCHAR(200),
    CUSH_TYPE      INT,
    CREATE_BY      INT,
    CREATE_TIME    DATETIME,
    MODIFY_BY      INT,
    MODIFY_TIME    DATETIME,
    COMP_CODE      CHAR(4)         NOT NULL,
    VERSION        INT             DEFAULT 0 NOT NULL,
    REMOVED        TINYINT         DEFAULT 0 NOT NULL,
    PRIMARY KEY (CUSH_ID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE F_ATTACH(
    ATTACH_ID           INT             AUTO_INCREMENT,
    ATTACH_NAME         VARCHAR(64),
    ATTACH_FILE_NAME    VARCHAR(200),
    ATTACH_DESC         VARCHAR(200),
    CONS_ID             INT,
    CONS_NO             VARCHAR(32),
    CREATE_BY           INT,
    CREATE_TIME         DATETIME,
    MODIFY_BY           INT,
    MODIFY_TIME         DATETIME,
    COMP_CODE           CHAR(4)         NOT NULL,
    VERSION             INT             DEFAULT 0 NOT NULL,
    REMOVED             TINYINT         DEFAULT 0 NOT NULL,
    PRIMARY KEY (ATTACH_ID)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE IF NOT EXISTS `C_COMMISSION` (
  `COMM_ID` int(11) NOT NULL auto_increment,
  `COMM_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(11) NOT NULL default '0',
  PRIMARY KEY  (`COMM_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `C_COMMISSION_ITEM`
--

CREATE TABLE IF NOT EXISTS `C_COMMISSION_ITEM` (
  `COIT_ID` int(11) NOT NULL auto_increment,
  `COMM_ID` int(11) NOT NULL,
  `COIT_LOWER` int(11) default NULL,
  `COIT_LIMIT` int(11) NOT NULL,
  `COIT_RATE` decimal(12,2) NOT NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(32) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`COIT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `C_CUSTOMER`
--

CREATE TABLE IF NOT EXISTS `C_CUSTOMER` (
  `CUST_ID` int(11) NOT NULL auto_increment,
  `CUST_CODE` varchar(32) collate utf8_unicode_ci NOT NULL,
  `CUST_CLASS` char(1) collate utf8_unicode_ci default NULL,
  `CUST_NAME_CN` varchar(64) collate utf8_unicode_ci NOT NULL,
  `CUST_SNAME_CN` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_NAME_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME_EN` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ZIP` varchar(16) collate utf8_unicode_ci default NULL,
  `CUST_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_TEL2` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_FAX` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_FAX2` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_EMAIL` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_URL` varchar(200) collate utf8_unicode_ci default NULL,
  `CUST_CONTACT` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ADDRESS` varchar(200) collate utf8_unicode_ci default NULL,
  `CUST_ADDRESS2` varchar(200) collate utf8_unicode_ci default NULL,
  `CUST_ADDRESS3` varchar(200) collate utf8_unicode_ci default NULL,
  `CUST_INDUSTRY` int(11) default NULL,
  `CUST_TYPE` int(11) default NULL,
  `CUST_INVOICE_HEADER` varchar(255) collate utf8_unicode_ci default NULL,
  `CUST_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `CUST_BANK_CNY` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ACCOUNT_CNY` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_BANK_USD` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ACCOUNT_USD` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_SHIP_TO` varchar(200) collate utf8_unicode_ci default NULL,
  `CUST_CHARGE_TO` varchar(200) collate utf8_unicode_ci default NULL,
  `CUST_SHIPPER` varchar(500) collate utf8_unicode_ci default NULL,
  `CUST_CREDIT_DAY` int(11) default NULL,
  `CUST_CREDIT_AMOUNT` int(11) default NULL,
  `CUST_ACTIVE` char(1) collate utf8_unicode_ci default NULL,
  `CUCA_ID` int(11) default NULL,
  `COUN_CODE` char(2) collate utf8_unicode_ci default NULL,
  `CUST_PROVINCE` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_CITY` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_AR_FLAG` tinyint(4) default NULL,
  `CUST_AP_FLAG` tinyint(4) default NULL,
  `CUST_CARRIER_FLAG` tinyint(4) default NULL,
  `CUST_BOOKING_AGENCY_FLAG` tinyint(4) default NULL,
  `CUST_CFS_FLAG` tinyint(4) default NULL,
  `CUST_WAREHOUSE_FLAG` tinyint(4) default NULL,
  `CUST_TRACK_FLAG` tinyint(4) default NULL,
  `CUST_INSPECTION_FLAG` tinyint(4) default NULL,
  `CUST_CUSTOM_FLAG` tinyint(4) default NULL,
  `CUST_INSURANCE_FLAG` tinyint(4) default NULL,
  `CUST_CONTAINER_FLAG` tinyint(4) default NULL,
  `CUST_OVERSEA_AGENCY_FLAG` tinyint(4) default NULL,
  `CUST_DO_AGENCY_FLAG` tinyint(4) default NULL,
  `CUST_BOOKER_FLAG` tinyint(4) default NULL,
  `CUST_SHIPPER_FLAG` tinyint(4) default NULL,
  `CUST_CONSIGNEE_FLAG` tinyint(4) default NULL,
  `CUST_NOTIFY_FLAG` tinyint(4) default NULL,
  `CUST_AIR_FLAG` tinyint(4) default NULL,
  `CUST_EXPRESS_FLAG` tinyint(4) default NULL,
  `CUST_SALES_ID` tinyint(4) default NULL,
  `CUST_SALES_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `GROU_ID` int(11) default NULL,
  `USER_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL,
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(2000) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(2000) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(2000) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`CUST_ID`),
  KEY `CUST_CODE` (`CUST_CODE`),
  KEY `CUST_CLASS` (`CUST_CLASS`),
  KEY `CUST_CARRIER_FLAG` (`CUST_CARRIER_FLAG`),
  KEY `CUST_BOOKING_AGENCY_FLAG` (`CUST_BOOKING_AGENCY_FLAG`),
  KEY `CUST_CFS_FLAG` (`CUST_CFS_FLAG`),
  KEY `CUST_WAREHOUSE_FLAG` (`CUST_WAREHOUSE_FLAG`),
  KEY `CUST_TRACK_FLAG` (`CUST_TRACK_FLAG`),
  KEY `CUST_INSPECTION_FLAG` (`CUST_INSPECTION_FLAG`),
  KEY `CUST_CUSTOM_FLAG` (`CUST_CUSTOM_FLAG`),
  KEY `CUST_INSURANCE_FLAG` (`CUST_INSURANCE_FLAG`),
  KEY `CUST_CONTAINER_FLAG` (`CUST_CONTAINER_FLAG`),
  KEY `CUST_OVERSEA_AGENCY_FLAG` (`CUST_OVERSEA_AGENCY_FLAG`),
  KEY `CUST_DO_AGENCY_FLAG` (`CUST_DO_AGENCY_FLAG`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- 表的结构 `C_CUSTOMER_CATEGORY`
--

CREATE TABLE IF NOT EXISTS `C_CUSTOMER_CATEGORY` (
  `CUCA_ID` int(11) NOT NULL auto_increment,
  `CUCA_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`CUCA_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `C_CUSTOMER_CONTACT`
--

CREATE TABLE IF NOT EXISTS `C_CUSTOMER_CONTACT` (
  `CUCO_ID` int(11) NOT NULL auto_increment,
  `CUST_ID` int(11) NOT NULL,
  `CUCO_NAME` varchar(64) collate utf8_unicode_ci NOT NULL,
  `CUCO_TITLE` varchar(32) collate utf8_unicode_ci default NULL,
  `CUCO_ADDRESS1` varchar(200) collate utf8_unicode_ci default NULL,
  `CUCO_ADDRESS2` varchar(200) collate utf8_unicode_ci default NULL,
  `CUCO_TEL` varchar(16) collate utf8_unicode_ci default NULL,
  `CUCO_HOME_TEL` varchar(16) collate utf8_unicode_ci default NULL,
  `CUCO_MOBILE` varchar(16) collate utf8_unicode_ci default NULL,
  `CUCO_EMAIL` varchar(64) collate utf8_unicode_ci default NULL,
  `CUCO_GENDER` char(1) collate utf8_unicode_ci default NULL,
  `CUCO_MSN` varchar(32) collate utf8_unicode_ci default NULL,
  `CUCO_QQ` varchar(32) collate utf8_unicode_ci default NULL,
  `CUCO_FAX` varchar(16) collate utf8_unicode_ci default NULL,
  `CUCO_ZIP` varchar(6) collate utf8_unicode_ci default NULL,
  `CUCO_BIRTHDAY` date default NULL,
  `CUCO_REMARKS` varchar(1000) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`CUCO_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `C_PRICE_LINE`
--

CREATE TABLE IF NOT EXISTS `C_PRICE_LINE` (
  `PRLI_ID` int(11) NOT NULL auto_increment,
  `PRSH_ID` int(11) NOT NULL,
  `PRLI_COUNTRY_D` char(2) collate utf8_unicode_ci default NULL,
  `PRLI_COUNTRY_D_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `PRLI_POD` int(11) default NULL,
  `PRLI_POD_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `PRLI_COUNTRY_T` char(2) collate utf8_unicode_ci default NULL,
  `PRLI_COUNTRY_T_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `PRLI_POT` int(11) default NULL,
  `PRLI_POT_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `PRLI_POD_HARBOUR` varchar(200) collate utf8_unicode_ci default NULL,
  `CACL_ID` int(11) default NULL,
  `CACL_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `PATE_ID` int(11) default NULL,
  `PATE_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_ID` int(11) default NULL,
  `TRAN_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `PRLI_SHIP_DATE` varchar(32) collate utf8_unicode_ci default NULL,
  `PRLI_COMPOSITE_FLAG` tinyint(4) default NULL,
  `PRLI_DURATION` int(11) default NULL,
  `PRLI_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`PRLI_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `C_PRICE_RECORD`
--

CREATE TABLE IF NOT EXISTS `C_PRICE_RECORD` (
  `PRRE_ID` int(11) NOT NULL auto_increment,
  `PRSH_ID` int(11) NOT NULL,
  `PRLI_ID` int(11) NOT NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `CHAR_ID` int(11) default NULL,
  `CHAR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `PRRE_COMMISSION_RATE` decimal(9,4) default NULL,
  `PRRE_PRICE_P_20` decimal(12,4) default NULL,
  `PRRE_PRICE_B_20` decimal(12,4) default NULL,
  `PRRE_PRICE_S_20` decimal(12,4) default NULL,
  `PRRE_PRICE_P_40` decimal(12,4) default NULL,
  `PRRE_PRICE_B_40` decimal(12,4) default NULL,
  `PRRE_PRICE_S_40` decimal(12,4) default NULL,
  `PRRE_PRICE_P_40H` decimal(12,4) default NULL,
  `PRRE_PRICE_B_40H` decimal(12,4) default NULL,
  `PRRE_PRICE_S_40H` decimal(12,4) default NULL,
  `PRRE_PRICE_P_CBM` decimal(12,4) default NULL,
  `PRRE_PRICE_B_CBM` decimal(12,4) default NULL,
  `PRRE_PRICE_S_CBM` decimal(12,4) default NULL,
  `PRRE_PRICE_P_KGS` decimal(12,4) default NULL,
  `PRRE_PRICE_B_KGS` decimal(12,4) default NULL,
  `PRRE_PRICE_S_KGS` decimal(12,4) default NULL,
  `PRRE_PRICE_P_TON` decimal(12,4) default NULL,
  `PRRE_PRICE_B_TON` decimal(12,4) default NULL,
  `PRRE_PRICE_S_TON` decimal(12,4) default NULL,
  `PRRE_PRICE_P_B1` decimal(12,4) default NULL,
  `PRRE_PRICE_B_B1` decimal(12,4) default NULL,
  `PRRE_PRICE_S_B1` decimal(12,4) default NULL,
  `PRRE_PRICE_P_B2` decimal(12,4) default NULL,
  `PRRE_PRICE_B_B2` decimal(12,4) default NULL,
  `PRRE_PRICE_S_B2` decimal(12,4) default NULL,
  `PRRE_PRICE_P_B3` decimal(12,4) default NULL,
  `PRRE_PRICE_B_B3` decimal(12,4) default NULL,
  `PRRE_PRICE_S_B3` decimal(12,4) default NULL,
  `PRRE_PRICE_P_B4` decimal(12,4) default NULL,
  `PRRE_PRICE_B_B4` decimal(12,4) default NULL,
  `PRRE_PRICE_S_B4` decimal(12,4) default NULL,
  `PRRE_PRICE_P_B5` decimal(12,4) default NULL,
  `PRRE_PRICE_B_B5` decimal(12,4) default NULL,
  `PRRE_PRICE_S_B5` decimal(12,4) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`PRRE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `C_PRICE_SHEET`
--

CREATE TABLE IF NOT EXISTS `C_PRICE_SHEET` (
  `PRSH_ID` int(11) NOT NULL auto_increment,
  `PRSH_VENDOR_ID` int(11) default NULL,
  `PRSH_VENDOR_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `PRSH_CARRIER` int(11) default NULL,
  `PRSH_CARRIER_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `PRSH_BIZ_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `PRSH_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `PRSH_POL` int(11) default NULL,
  `PRSH_POL_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `PRSH_POL_HARBOUR` varchar(200) collate utf8_unicode_ci default NULL,
  `SHLI_ID` int(11) default NULL,
  `SHLI_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `VESS_ID` int(11) default NULL,
  `VESS_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `VOYA_ID` int(11) default NULL,
  `VOYA_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `PRSH_START_DATE` date default NULL,
  `PRSH_END_DATE` date default NULL,
  `PRSH_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `PRSH_STATUS` tinyint(4) default '0',
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`PRSH_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `C_SALES_COMMISSION`
--

CREATE TABLE IF NOT EXISTS `C_SALES_COMMISSION` (
  `SACO_ID` int(11) NOT NULL auto_increment,
  `SACO_SALES_ID` int(11) NOT NULL,
  `SACO_SALES_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `COMM_ID` int(11) NOT NULL,
  `COMM_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(32) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  PRIMARY KEY  (`SACO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `C_SALES_QUOTA`
--

CREATE TABLE IF NOT EXISTS `C_SALES_QUOTA` (
  `SAQU_ID` int(11) NOT NULL auto_increment,
  `SAQU_SALES_ID` int(11) NOT NULL,
  `SAQU_SALES_NAME` varchar(64) collate utf8_unicode_ci NOT NULL,
  `SAQU_YEAR` char(4) collate utf8_unicode_ci default NULL,
  `SAQU_MONTH` char(2) collate utf8_unicode_ci default NULL,
  `SAQU_BASE_PROFIT` decimal(12,2) default NULL,
  `SAQU_COMMISSION_RATE` decimal(9,4) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`SAQU_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `C_VENDOR_CATEGORY`
--

CREATE TABLE IF NOT EXISTS `C_VENDOR_CATEGORY` (
  `VECA_ID` int(11) NOT NULL auto_increment,
  `VECA_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`VECA_ID`),
  UNIQUE KEY `UK_VECA` (`VECA_NAME`,`COMP_CODE`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_BL`
--

CREATE TABLE IF NOT EXISTS `F_BL` (
  `BL_ID` int(11) NOT NULL auto_increment,
  `BL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_TYPE` char(4) collate utf8_unicode_ci NOT NULL,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MASTER_ID` int(11) default NULL,
  `CONS_MASTER_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_BIZ_CLASS` char(1) collate utf8_unicode_ci default NULL,
  `CONS_BIZ_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CONS_SHIP_TYPE` char(4) collate utf8_unicode_ci default NULL,
  `CONS_TRADE_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_CHARGE_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `BL_SHIPPER` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_CONSIGNEE` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_NOTIFY_PARTY` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_NOTIFY_PARTY2` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_OVERSEA_AGENCY` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_PRECARRIAGE` varchar(64) collate utf8_unicode_ci default NULL,
  `BL_CARRIER` int(11) default NULL,
  `BL_CARRIER_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `BL_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `BL_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_POL` varchar(200) collate utf8_unicode_ci default NULL,
  `BL_POD` varchar(200) collate utf8_unicode_ci default NULL,
  `BL_POT` varchar(200) collate utf8_unicode_ci default NULL,
  `BL_LOAD_DATE` date default NULL,
  `BL_ETD` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_ETA` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_RECEIPT_PLACE` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_DELIVERY_PLACE` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_CONTAINER_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_PACKAGES` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_CARGO_DESC` varchar(5000) collate utf8_unicode_ci default NULL,
  `BL_GROSS_WEIGHT` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_NET_WEIGHT` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_MEASUREMENT` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_TOTAL_SAY` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_MARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `UNIT_ID` int(11) default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_GROSS_WEIGHT` decimal(14,6) default NULL,
  `CARG_NET_WEIGHT` decimal(14,6) default NULL,
  `CARG_MEASUREMENT` decimal(14,6) default NULL,
  `CARG_PACKAGES` int(11) default NULL,
  `BL_PAYMENT_TERM` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_PAID_AT` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_TRANS_TERM` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_CONTAINER_INFO` varchar(200) collate utf8_unicode_ci default NULL,
  `BL_ORIGINAL_NUM` varchar(16) collate utf8_unicode_ci default NULL,
  `ISTY_ID` int(11) default NULL,
  `BL_ISSUE_DATE` date default NULL,
  `BL_ISSUE_BY` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_ISSUE_PLACE` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_RECEIVER` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_THIRD_PLACE_FLAG` tinyint(4) default NULL,
  `BL_ADVANCED_FLAG` tinyint(4) default NULL,
  `BL_BACK_FLAG` tinyint(4) default NULL,
  `BL_CLEAN_FLAG` tinyint(4) default NULL,
  `BL_500_FLAG` tinyint(4) default NULL,
  `BL_RELEASE_BY` int(11) default NULL,
  `BL_RELEASE_DATE` date default NULL,
  `BL_RELEASE_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_STATUS` tinyint(4) default NULL,
  `BL_AGENT_IATA_CODE` varchar(16) collate utf8_unicode_ci default NULL,
  `BL_ACCOUNT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_ACCOUNTING_INFO` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_TO_FIRST` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_BY_FIRST` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_TO_SECOND` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_BY_SECOND` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_TO_THIRD` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_BY_THIRD` varchar(32) collate utf8_unicode_ci default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `BL_WEIGHT_PAYMENT` varchar(16) collate utf8_unicode_ci default NULL,
  `BL_VALUE_PAYMENT` varchar(16) collate utf8_unicode_ci default NULL,
  `BL_OTHER_PAYMENT` varchar(16) collate utf8_unicode_ci default NULL,
  `BL_DV_CARRIAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_DV_CUSTOMS` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_AMOUNT_INSURANCE` varchar(32) collate utf8_unicode_ci default NULL,
  `BL_TS_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `BL_DIMENSION` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_HANDLING_INFO` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_BOOKING_REQUIREMENT` varchar(500) collate utf8_unicode_ci default NULL,
  `BL_RATE_CLASS` varchar(16) collate utf8_unicode_ci default NULL,
  `BL_CHARGE_WEIGHT` decimal(12,4) default NULL,
  `BL_CHARGE_RATE` decimal(12,4) default NULL,
  `BL_TOTAL_CHARGE` decimal(12,2) default NULL,
  `BL_WEIGHT_CHARGE_PP` decimal(12,2) default NULL,
  `BL_WEIGHT_CHARGE_CC` decimal(12,2) default NULL,
  `BL_VALUATION_CHARGE_PP` decimal(12,2) default NULL,
  `BL_VALUATION_CHARGE_CC` decimal(12,2) default NULL,
  `BL_TAX_PP` decimal(12,2) default NULL,
  `BL_TAX_CC` decimal(12,2) default NULL,
  `BL_OTHER_DA_PP` decimal(12,2) default NULL,
  `BL_OTHER_DA_CC` decimal(12,2) default NULL,
  `BL_OTHER_DC_PP` decimal(12,2) default NULL,
  `BL_OTHER_DC_CC` decimal(12,2) default NULL,
  `BL_TOTAL_PP` decimal(12,2) default NULL,
  `BL_TOTAL_CC` decimal(12,2) default NULL,
  `BL_MERGE_FLAG` tinyint(4) default '0',
  `BL_SPLIT_FLAG` tinyint(4) default '0',
  `BL_MASTER_FLAG` tinyint(4) default '0',
  `BL_M_BL_ID` int(11) default NULL,
  `BL_M_BL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `FCON_ID` int(11) default NULL,
  `FCON_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(500) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(500) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`BL_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `F_CARGO`
--

CREATE TABLE IF NOT EXISTS `F_CARGO` (
  `CARG_ID` int(11) NOT NULL auto_increment,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(16) collate utf8_unicode_ci default NULL,
  `CONS_MASTER_ID` int(11) default NULL,
  `CONS_MASTER_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_MARKS` varchar(1000) collate utf8_unicode_ci default NULL,
  `CARG_NAME_EN` varchar(2000) collate utf8_unicode_ci default NULL,
  `CARG_NAME_CN` varchar(200) collate utf8_unicode_ci default NULL,
  `CARG_MANU_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_SPEC` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_PACKAGE_NUM` int(11) default NULL,
  `PACK_S_ID` int(11) default NULL,
  `CARG_PACKAGE_S_NUM` decimal(9,2) default NULL,
  `UNIT_ID` int(11) default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_NET_WEIGHT` decimal(14,6) default NULL,
  `CARG_GROSS_WEIGHT` decimal(14,6) default NULL,
  `CARG_MEASUREMENT` decimal(14,6) default NULL,
  `CARG_BIG_FLAG` char(1) collate utf8_unicode_ci default NULL,
  `CARG_LENGTH` decimal(9,2) default NULL,
  `CARG_WIDTH` decimal(9,2) default NULL,
  `CARG_HIGH` decimal(9,2) default NULL,
  `CARG_REETER_FLAG` char(1) collate utf8_unicode_ci default NULL,
  `CARG_TEMPERATURE` decimal(9,2) default NULL,
  `CARG_TEMPERATURE_UNIT` char(1) collate utf8_unicode_ci default NULL,
  `CARG_TEMPERATURE_LOW` decimal(9,2) default NULL,
  `CARG_TEMPERATURE_HIGH` decimal(9,2) default NULL,
  `CARG_HUMIDITY` decimal(9,2) default NULL,
  `CARG_VENT_OUTLET` varchar(64) collate utf8_unicode_ci default NULL,
  `CARG_DANAGER_FLAG` char(1) collate utf8_unicode_ci default NULL,
  `CARG_DANAGER_CLASS` varchar(16) collate utf8_unicode_ci default NULL,
  `CARG_POLLUTION_FLAG` char(1) collate utf8_unicode_ci default NULL,
  `CARG_DANAGER_PROPERTY` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_IMDG_PAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_SUB_LABEL` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_UN_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_FLASH_POINT` varchar(16) collate utf8_unicode_ci default NULL,
  `CARG_MFAG_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_EMS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_PKG_GROUP` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_EMG_TEL` varchar(16) collate utf8_unicode_ci default NULL,
  `CARG_QUIT_FLAG` tinyint(4) default '0',
  `CARG_CUDE_TYPE` tinyint(4) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`CARG_ID`),
  KEY `CONS_ID` (`CONS_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `F_CONSIGN`
--

CREATE TABLE `F_CONSIGN` (
	`CONS_ID` INT(11) NOT NULL AUTO_INCREMENT,
	`CONS_NO` VARCHAR(32) NOT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TYPE` CHAR(1) NOT NULL DEFAULT 'A' COLLATE 'utf8_unicode_ci',
	`CONS_SHIP_TYPE` VARCHAR(4) NULL DEFAULT 'FCL' COLLATE 'utf8_unicode_ci',
	`CONS_LCL_TYPE` CHAR(1) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_ACTION_TYPE` CHAR(1) NULL DEFAULT 'A' COLLATE 'utf8_unicode_ci',
	`CONS_BIZ_CLASS` CHAR(1) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_BIZ_TYPE` CHAR(1) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_MASTER_FLAG` TINYINT(4) NULL DEFAULT NULL,
	`CONS_MASTER_ID` INT(11) NULL DEFAULT NULL,
	`CONS_MASTER_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_MERGE_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_MERGE_ID` INT(11) NULL DEFAULT NULL,
	`CONS_MERGE_NO` INT(11) NULL DEFAULT NULL,
	`CONS_REF_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CONTRACT_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SOURCE` CHAR(1) NULL DEFAULT '1' COLLATE 'utf8_unicode_ci',
	`CONS_DATE` DATE NULL DEFAULT NULL,
	`CONS_SALES_REP_ID` INT(11) NULL DEFAULT NULL,
	`CONS_SALES_REP_NAME` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_OPERATOR_ID` INT(11) NULL DEFAULT NULL,
	`CONS_OPERATOR_NAME` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TRADE_CONTRACT_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CREDIT_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_INSURANCE_FEE` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CUST_ID` INT(11) NOT NULL,
	`CUST_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CUST_SNAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CUST_CONTACT` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CUST_TEL` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CUST_FAX` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CUST_SALES_ID` INT(11) NULL DEFAULT NULL,
	`CUST_SALES_NAME` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_OVERSEA_AGENCY` INT(11) NULL DEFAULT NULL,
	`CONS_OVERSEA_AGENCY_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SHIPPER` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CONSIGNEE` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_NOTIFY_PARTY` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_NOTIFY_PARTY2` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_F_SHIPPER` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_F_CONSIGNEE` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_F_NOTIFY_PARTY` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_POL` INT(11) NULL DEFAULT NULL,
	`CONS_POL_EN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_POL_CN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_RECEIPT_PLACE` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_POD` INT(11) NULL DEFAULT NULL,
	`CONS_POD_EN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_POD_CN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_POT` INT(11) NULL DEFAULT NULL,
	`CONS_POT_EN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_POT_CN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_DELIVERY_PLACE` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_DESTINATION` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TRAN_COUNTRY` CHAR(2) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TRADE_COUNTRY` CHAR(2) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`FCON_HARBOUR_ID` INT(11) NULL DEFAULT NULL,
	`CONS_HARBOUR` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARGO_OWNER` INT(11) NULL DEFAULT NULL,
	`CONS_CARGO_OWNER_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CFS` INT(11) NULL DEFAULT NULL,
	`CONS_CFS_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_WAREHOUSE` INT(11) NULL DEFAULT NULL,
	`CONS_WAREHOUSE_CONTACT` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_WAREHOUSE_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_WAREHOUSE_TEL` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_WAREHOUSE_ADDRESS` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_WAREHOUSE_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_WAREHOUSE_REMARKS` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CONTAINER_LOAD_DATE` DATE NULL DEFAULT NULL,
	`CONS_CONTAINER_COMPANY` INT(11) NULL DEFAULT NULL,
	`CONS_CONTAINER_COMPANY_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CUSTOMS_VENDOR` INT(11) NULL DEFAULT NULL,
	`CONS_CUSTOMS_VENDOR_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CUSTOMS_CONTACT` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CUSTOMS_TEL` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_INSPECTION_VENDOR` INT(11) NULL DEFAULT NULL,
	`CONS_INSPECTION_VENDOR_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TRACK_VENDOR` INT(11) NULL DEFAULT NULL,
	`CONS_TRACK_VENDOR_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TRACK_CONTACT` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TRACK_LOAD_DATE` DATE NULL DEFAULT NULL,
	`CONS_TRACK_LOAD_ADDRESS` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TRACK_REMARKS` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TRACK_TEL` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_LOAD_FACTORY` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_LOAD_CONTACT` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_LOAD_TEL` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_DO_AGENCY` INT(11) NULL DEFAULT NULL,
	`CONS_DO_AGENCY_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_BOOKING_AGENCY` INT(11) NULL DEFAULT NULL,
	`CONS_BOOKING_AGENCY_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_BOOKING_AGENCY_SNAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_BOOKING_DATE` DATE NULL DEFAULT NULL,
	`CONS_BOOKING_CONTRACT_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SO_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_PRECARRIAGE` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARRIER` INT(11) NULL DEFAULT NULL,
	`CONS_CARRIER_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`VESS_ID` INT(11) NULL DEFAULT NULL,
	`VESS_NAME` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`VESS_NAME_CN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`VOYA_ID` INT(11) NULL DEFAULT NULL,
	`VOYA_NAME` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_ETD` DATE NULL DEFAULT NULL,
	`CONS_ETA` DATE NULL DEFAULT NULL,
	`CONS_RECV_DATE` DATE NULL DEFAULT NULL,
	`CONS_LOAD_DATE` DATE NULL DEFAULT NULL,
	`CONS_EXPIRY_DATE` DATE NULL DEFAULT NULL,
	`CONS_DELIVERY_DATE` DATE NULL DEFAULT NULL,
	`CONS_SAIL_DATE` DATE NULL DEFAULT NULL,
	`CONS_BL_ISSUE_DATE` DATE NULL DEFAULT NULL,
	`CONS_MBL_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_HBL_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SCAC_CODE` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CONTAINER_NO` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SEAL_NO` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARGO_DESC` TEXT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARGO_MARKS` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARGO_PACKAGES` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARGO_NET_WEIGHT` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARGO_GROSS_WEIGHT` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARGO_MEASUREMENT` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARGO_NAME_EN` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARGO_NAME_CN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CARGO_SPECIAL` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TOTAL_PACKAGES` INT(11) NULL DEFAULT NULL,
	`CONS_TOTAL_PACKAGES_IN_WORD` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TOTAL_GROSS_WEIGHT` DECIMAL(14,6) NULL DEFAULT NULL,
	`CONS_TOTAL_NET_WEIGHT` DECIMAL(14,6) NULL DEFAULT NULL,
	`CONS_TOTAL_MEASUREMENT` DECIMAL(14,6) NULL DEFAULT NULL,
	`CONS_TOTAL_CONTAINERS` INT(11) NULL DEFAULT NULL,
	`CONS_TOTAL_CHARGE_WEIGHT` DECIMAL(14,6) NULL DEFAULT NULL,
	`BL_CARGO_PACKAGES` INT(11) NULL DEFAULT NULL,
	`BL_CARGO_GROSS_WEIGHT` DECIMAL(14,6) NULL DEFAULT NULL,
	`BL_CARGO_NET_WEIGHT` DECIMAL(14,6) NULL DEFAULT NULL,
	`BL_CARGO_MEASUREMENT` DECIMAL(14,6) NULL DEFAULT NULL,
	`CONS_SHIPPED_PACKAGES` INT(11) NULL DEFAULT NULL,
	`CONS_SHIPPED_GROSS_WEIGHT` DECIMAL(14,6) NULL DEFAULT NULL,
	`CONS_SHIPPED_NET_WEIGHT` DECIMAL(14,6) NULL DEFAULT NULL,
	`CONS_SHIPPED_MEASUREMENT` DECIMAL(14,6) NULL DEFAULT NULL,
	`CARG_BIG_FLAG` CHAR(1) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_LENGTH` DECIMAL(9,2) NULL DEFAULT NULL,
	`CARG_WIDTH` DECIMAL(9,2) NULL DEFAULT NULL,
	`CARG_HIGH` DECIMAL(9,2) NULL DEFAULT NULL,
	`CARG_REETER_FLAG` CHAR(1) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_TEMPERATURE` DECIMAL(9,2) NULL DEFAULT NULL,
	`CARG_TEMPERATURE_UNIT` CHAR(1) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_TEMPERATURE_LOW` DECIMAL(9,2) NULL DEFAULT NULL,
	`CARG_TEMPERATURE_HIGH` DECIMAL(9,2) NULL DEFAULT NULL,
	`CARG_HUMIDITY` DECIMAL(9,2) NULL DEFAULT NULL,
	`CARG_VENT_OUTLET` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_DANAGER_FLAG` CHAR(1) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_DANAGER_CLASS` VARCHAR(16) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_POLLUTION_FLAG` CHAR(1) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_DANAGER_PROPERTY` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_IMDG_PAGE` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_SUB_LABEL` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_UN_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_FLASH_POINT` VARCHAR(16) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_MFAG_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_EMS_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_PKG_GROUP` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_EMG_TEL` VARCHAR(16) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CARG_QUIT_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CARG_CUDE_TYPE` TINYINT(4) NULL DEFAULT NULL,
	`UNIT_ID` INT(11) NULL DEFAULT NULL,
	`UNIT_CODE` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`UNIT_ID_M` INT(11) NULL DEFAULT NULL,
	`UNIT_CODE_M` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CUST_PACKAGES` INT(11) NULL DEFAULT NULL,
	`CONS_CUST_GROSS_WEIGHT` DECIMAL(14,6) NULL DEFAULT NULL,
	`CONS_CUST_MEASUREMENT` DECIMAL(14,6) NULL DEFAULT NULL,
	`CONS_CUST_CHARGE_WEIGHT` DECIMAL(14,6) NULL DEFAULT NULL,
	`CONS_CONTAINERS_20` INT(11) NULL DEFAULT NULL,
	`CONS_CONTAINERS_40` INT(11) NULL DEFAULT NULL,
	`CONS_CONTAINERS_40H` INT(11) NULL DEFAULT NULL,
	`CONS_CONTAINERS_45` INT(11) NULL DEFAULT NULL,
	`CONS_CONTAINERS_TEU` INT(11) NULL DEFAULT NULL,	
	`CONS_CONTAINERS_INFO` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`PACK_ID` INT(11) NULL DEFAULT NULL,
	`PACK_NAME` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`COCL_ID` INT(11) NULL DEFAULT NULL,
	`COCL_NAME` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CACL_ID` INT(11) NULL DEFAULT NULL,
	`CACL_NAME` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`TRTE_ID` INT(11) NULL DEFAULT NULL,
	`TRTY_ID` INT(11) NULL DEFAULT NULL,
	`TRAN_ID` INT(11) NULL DEFAULT NULL,
	`TRAN_CODE` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`TRAN_ID_CARRIER` INT(11) NULL DEFAULT NULL,
	`TRAN_CODE_CARRIER` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`PATE_ID` INT(11) NULL DEFAULT NULL,
	`PATE_NAME` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`PATE_ID_P` INT(11) NULL DEFAULT NULL,
	`PATE_NAME_P` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`ISTY_ID` INT(11) NULL DEFAULT NULL,
	`SHLI_ID` INT(11) NULL DEFAULT NULL,
	`SHLI_CODE` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`SWITH_ID` INT(11) NULL DEFAULT NULL,
	`CONS_BL_ISSUE_PLACE` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_BL_REMARKS` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_PAID_AT` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TRANS_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_PARTIAL_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_FUMIGATE_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_QUARANTINE_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_TRANSFERRING_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_ORIGINAL_BL_NUM` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_COPY_BL_NUM` INT(11) NULL DEFAULT NULL,
	`CONS_REMARKS` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_BOOK_REMARKS` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SERVICE_REQUIRED` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SERVICE_SPEC` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_VESSEL_ID` INT(11) NULL DEFAULT NULL,
	`CONS_B_VESSEL` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_VOYAGE_ID` INT(11) NULL DEFAULT NULL,
	`CONS_B_VOYAGE` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_ETD` DATE NULL DEFAULT NULL,
	`CONS_B_ETA` DATE NULL DEFAULT NULL,
	`CONS_B_POL` INT(11) NULL DEFAULT NULL,
	`CONS_B_POL_EN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_COUNTRY_D` CHAR(2) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_COUNTRY_T` CHAR(2) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_POD` INT(11) NULL DEFAULT NULL,
	`CONS_B_POD_EN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_POT` INT(11) NULL DEFAULT NULL,
	`CONS_B_POT_EN` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_SHIPPER` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_CONSIGNEE` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_BOOKING_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_BOOKING_DATE` DATE NULL DEFAULT NULL,
	`CONS_B_CARRIER_ID` INT(11) NULL DEFAULT NULL,
	`CONS_B_CARRIER` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_HARBOUR` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_B_HK_FLAG` TINYINT(4) NULL DEFAULT NULL,
	`CONS_B_INTERNATIONAL_FLAG` TINYINT(4) NULL DEFAULT NULL,
	`CONS_B_REMARKS` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_LOADING_LIST_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SPLIT_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SHIP_CODE` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SPLIT_CONTACT` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SPLIT_TEL` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SPLIT_CONSIGNEE` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SPLIT_CONSIGNEE_TEL` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_SPLIT_CREATE_TIME` DATETIME NULL DEFAULT NULL,
	`CONS_SPLIT_CREATE_BY` INT(11) NULL DEFAULT NULL,
	`CONS_STATUS` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_BOOKING` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_SWITCH_BL` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_CLEARANCE` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_SPLIT` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_INSP` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_CONT` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_CARG` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_MBL` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_HBL` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_B_BOOK` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_DEPA` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_DOCS` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_EXP` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_AR` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_AP` TINYINT(4) NULL DEFAULT '0',
	`CONS_AR_WRITE_OFF_DATE` DATE NULL DEFAULT NULL,
	`CONS_AP_WRITE_OFF_DATE` DATE NULL DEFAULT NULL,
	`CONS_STATUS_INVO_R` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_INVO_P` TINYINT(4) NULL DEFAULT '0',
	`CONS_INVO_R_DATE` DATE NULL DEFAULT NULL,
	`CONS_INVO_P_DATE` DATE NULL DEFAULT NULL,
	`CONS_STATUS_AUD` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_IN_CY` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_IN_CFS` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_ON_BOARD` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_EIR` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_SEND_CONT` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_LOCK` TINYINT(4) NULL DEFAULT '0',
	`CONS_REBOOK_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_CHARGE_REMARKS` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_NOT_ON_BOARD_REASON` VARCHAR(16) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_NOT_ON_BOARD_REMARKS` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_BOOKING_DECLARE_NO_US` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_US_FULL_SHIP` TINYINT(4) NULL DEFAULT '0',
	`CONS_STATUS_SETTLEMENT` TINYINT(4) NULL DEFAULT '0',
	`CONS_SETTLEMENT_DATE` DATE NULL DEFAULT NULL,
	`CONS_CANCEL_REASON` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_BOOKING_CANCEL_REASON` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_PACKING_LIST_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`FCON_ID` INT(11) NULL DEFAULT NULL,
	`FCON_SHIP_DATE_F` DATE NULL DEFAULT NULL,
	`FCON_SHIP_DATE_T` DATE NULL DEFAULT NULL,
	`VOYA_SHIP_DATE_F` DATE NULL DEFAULT NULL,
	`VOYA_SHIP_DATE_T` DATE NULL DEFAULT NULL,
	`LOLI_ID` INT(11) NULL DEFAULT NULL,
	`DEPT_ID` INT(11) NOT NULL,
	`CONS_EXTERNAL_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_CUDE_TYPE` TINYINT(4) NULL DEFAULT NULL,
	`CONS_INVOICE_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_INSPECTION_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_WS_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_WS_ACCEPT_FLAG` TINYINT(4) NULL DEFAULT '0',
	`CONS_COMPANY` VARCHAR(64) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CLOSE_DATE` DATE NULL DEFAULT NULL,
	`CONS_VERIFICATION_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_MANUAL_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_MANUAL_EXPIRATION_DATE` DATE NULL DEFAULT NULL,
	`CONS_FREE_TABLE_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_TAX` DECIMAL(11,2) NULL DEFAULT NULL,
	`CONS_RELIEF_TARIFF` DECIMAL(11,2) NULL DEFAULT NULL,
	`CONS_RELIEF_VAT` DECIMAL(11,2) NULL DEFAULT NULL,
	`CONS_AUDIT_DATE` DATE NULL DEFAULT NULL,
	`CONS_AUDIT_DATE2` DATE NULL DEFAULT NULL,
	`CONS_CUSTOM_REG_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_CUSTOM_REG_DATE` DATE NULL DEFAULT NULL,
	`CONS_BUSINESS_LICENSE_DATE` DATE NULL DEFAULT NULL,
	`CONS_ORG_DATE` DATE NULL DEFAULT NULL,
	`CONS_EPORT_REG` TINYINT(4) NULL DEFAULT NULL,
	`CARG_HS_CODE` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_MARGIN` DECIMAL(11,2) NULL DEFAULT NULL,
	`CONS_INSP_REG` TINYINT(4) NULL DEFAULT NULL,
	`CONS_CUSTOMS_DECLEARATION_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`CONS_REQUIRE_VERIFICATION` TINYINT(4) NULL DEFAULT NULL,
	`CONS_REQUIRE_RELIEF` TINYINT(4) NULL DEFAULT NULL,
	`CONS_CUSTOMS_DECLEAR_DATE` DATE NULL DEFAULT NULL,
	`CONS_VERIFICATION_FLAG` TINYINT DEFAULT 0,
	`CONS_BULKY_CARRIER` DECIMAL(10, 4) NULL DEFAULT NULL,
	`CONS_BULKY_CUSTOMER` DECIMAL(10, 4) NULL DEFAULT NULL,
	`CONS_CHARGE_WEIGHT_CARRIER` DECIMAL(10, 4) NULL DEFAULT NULL,
	`CONS_CHARGE_WEIGHT_CUSTOMER` DECIMAL(10, 4) NULL DEFAULT NULL,
	`CONS_TOTAL_GROSS_WEIGHT_CUSTOMER` DECIMAL(10, 4) NULL DEFAULT NULL,
	`CONS_TOTAL_MEASUREMENT_CUSTOMER` DECIMAL(10, 4) NULL DEFAULT NULL,
	`USER_ID` INT(11) NULL DEFAULT NULL,
	`GROU_ID` INT(11) NULL DEFAULT NULL,
	`CREATE_BY` INT(11) NULL DEFAULT NULL,
	`CREATE_TIME` DATETIME NULL DEFAULT NULL,
	`MODIFY_BY` INT(11) NULL DEFAULT NULL,
	`MODIFY_TIME` DATETIME NULL DEFAULT NULL,
	`COMP_CODE` CHAR(4) NOT NULL COLLATE 'utf8_unicode_ci',
	`VERSION` INT(11) NOT NULL DEFAULT '0',
	`REMOVED` TINYINT(4) NOT NULL DEFAULT '0',
	`ATTR1` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`ATTR2` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`ATTR3` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`ATTR4` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`ATTR5` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`ATTR6` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`ATTR7` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`ATTR8` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`ATTR9` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`ATTR10` TEXT NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	PRIMARY KEY (`CONS_ID`),
	INDEX `CONS_DATE` (`CONS_DATE`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_CONTAINER`
--

CREATE TABLE IF NOT EXISTS `F_CONTAINER` (
  `CONT_ID` int(11) NOT NULL auto_increment,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONT_PRE_FLAG` char(1) collate utf8_unicode_ci default NULL,
  `CONT_PART_OF_FLAG` char(1) collate utf8_unicode_ci default NULL,
  `CONT_M_CONS_ID` int(11) default NULL,
  `CONT_M_CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONT_NUM` int(11) default '1',
  `CONT_SEAL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONT_SEAL_NO2` varchar(32) collate utf8_unicode_ci default NULL,
  `CONT_SEAL_NO3` varchar(32) collate utf8_unicode_ci default NULL,
  `COTY_ID` int(11) default NULL,
  `CONT_FL` char(3) collate utf8_unicode_ci default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CONT_PACKAGE_NUM` int(11) default NULL,
  `CONT_CARGO_NAME_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `CONT_CARGO_NAME_CN` varchar(64) collate utf8_unicode_ci default NULL,
  `CONT_GROSS_WEIGHT` decimal(9,2) default NULL,
  `CONT_MEASUREMENT` decimal(9,2) default NULL,
  `CONT_SOC_FLAG` tinyint(4) default '0',
  `CONT_LOAD_DATE` date default NULL,
  `CONT_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `CARG_TEMPERATURE` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_DANAGER_CLASS` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_FLASH_POINT` varchar(16) collate utf8_unicode_ci default NULL,
  `CARG_IMDG_PAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_UN_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONT_VESSEL` varchar(32) collate utf8_unicode_ci default NULL,
  `CONT_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `CONT_POL` varchar(64) collate utf8_unicode_ci default NULL,
  `CONT_POD` varchar(64) collate utf8_unicode_ci default NULL,
  `CONT_DELIVERY_PLACE` varchar(64) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`CONT_ID`),
  KEY `CONS_ID` (`CONS_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_CONTAINER_CARGO`
--

CREATE TABLE IF NOT EXISTS `F_CONTAINER_CARGO` (
  `COCA_ID` int(11) NOT NULL auto_increment,
  `CONS_ID` int(11) NOT NULL,
  `CONT_ID` int(11) NOT NULL,
  `CARG_ID` int(11) default NULL,
  `CONT_NO` varchar(16) collate utf8_unicode_ci default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `COCA_MARKS` varchar(64) collate utf8_unicode_ci default NULL,
  `COCA_CARGO_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `COCA_PACKAGE_NUM` int(16) default NULL,
  `COCA_GROSS_WEIGHT` decimal(14,6) default NULL,
  `COCA_MEASUREMENT` decimal(14,6) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '1',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`COCA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_CONTRACT`
--

CREATE TABLE IF NOT EXISTS `F_CONTRACT` (
  `FCON_ID` int(11) NOT NULL auto_increment,
  `FCON_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CHARTER_ID` int(11) default NULL,
  `CHARTER_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CHARTER_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_CONTACT` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_FAX` varchar(32) collate utf8_unicode_ci default NULL,
  `FCON_CONTRACT_NO` varchar(32) collate utf8_unicode_ci NOT NULL,
  `FCON_CONTRACT_QUANTITY` decimal(14,6) default NULL,
  `FCON_FORCAST_QUANTITY` decimal(14,6) default NULL,
  `FCON_SHIPPED_QUANTITY` decimal(14,6) default NULL,
  `FCON_FACT_QUANTITY` decimal(14,6) default NULL,
  `FCON_FORCAST_CBM` decimal(14,6) default NULL,
  `FCON_SHIPPED_CBM` decimal(14,6) default NULL,
  `FCON_FACT_CBM` decimal(14,6) default NULL,
  `FCON_TOTAL_PACKAGES` int(11) default NULL,
  `FCON_TOTAL_GROSS_WEIGHT` decimal(14,6) default NULL,
  `FCON_ARRIVED_GROSS_WEIGHT` decimal(14,6) default NULL,
  `FCON_ARRIVED_PACKAGES` int(11) default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `UNIT_ID` int(11) default NULL,
  `UNIT_ID_CARRIER` int(11) default NULL,
  `UNIT_NAME_CARRIER` varchar(32) collate utf8_unicode_ci default NULL,
  `FCON_SHIPPER` varchar(500) collate utf8_unicode_ci default NULL,
  `FCON_CONSIGNEE` varchar(500) collate utf8_unicode_ci default NULL,
  `FCON_NOTIFY_PARTY` varchar(500) collate utf8_unicode_ci default NULL,
  `FCON_POL` int(11) default NULL,
  `FCON_POL_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `FCON_POD` int(11) default NULL,
  `FCON_POD_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `FCON_CARGO_DESC` varchar(500) collate utf8_unicode_ci default NULL,
  `TRAN_ID` int(11) default NULL,
  `TRAN_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_NAME_CARRIER` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_ID_CARRIER` int(11) default NULL,
  `SHLI_ID` int(11) default NULL,
  `SHLI_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `PATE_ID_R` int(11) default NULL,
  `PATE_NAME_R` varchar(32) collate utf8_unicode_ci default NULL,
  `PATE_ID_P` int(11) default NULL,
  `PATE_NAME_P` varchar(32) collate utf8_unicode_ci default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CARG_NAME_CN` varchar(200) collate utf8_unicode_ci default NULL,
  `CARG_NAME_EN` varchar(200) collate utf8_unicode_ci default NULL,
  `FCON_UNIT_PRICE_R` decimal(12,4) default NULL,
  `FCON_TOTAL_PRICE_R` decimal(12,2) default NULL,
  `FCON_UNIT_PRICE_P` decimal(12,4) default NULL,
  `FCON_TOTAL_PRICE_P` decimal(12,2) default NULL,
  `FCON_LOAD_DATE` date default NULL,
  `FCON_SHIP_DATE_F` date default NULL,
  `FCON_SHIP_DATE_T` date default NULL,
  `VOYA_SHIP_DATE_F` date default NULL,
  `VOYA_SHIP_DATE_T` date default NULL,
  `VOYA_SAIL_DATE` date default NULL,
  `VOYA_SAILED_FLAG` tinyint(4) default '0',
  `FCON_VESSEL_VOYAGE` varchar(1000) collate utf8_unicode_ci default NULL,
  `FCON_VESS_NAME_CN` varchar(1000) collate utf8_unicode_ci default NULL,
  `FCON_CARRIER` varchar(1000) collate utf8_unicode_ci default NULL,
  `FCON_REMARKS` varchar(1000) collate utf8_unicode_ci default NULL,
  `FCON_SERVICE_SPEC` varchar(500) collate utf8_unicode_ci default NULL,
  `FCON_STATUS` tinyint(4) default NULL,
  `FCON_OPERATOR_ID` int(11) default NULL,
  `FCON_OPERATOR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `FCON_SALES_REP_ID` int(11) default NULL,
  `FCON_SALES_REP_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `FCON_INVOICE_FLAG` tinyint(4) default '0',
  `FCON_INSPECTION_FLAG` tinyint(4) default '0',
  `FCON_CUDE_TYPE` tinyint(4) default '0',
  `FCON_INWARE_GROSS_WEIGHT` decimal(14,6) default NULL,
  `FCON_SUM_LIST_FLAG` tinyint(4) default '0',
  `FCON_COPY_FLAG` tinyint(4) default '0',
  `FCON_EXPE_CONFIRM_FLAG` tinyint(4) default '0',
  `FCON_CUDE_DOC_FLAG` tinyint(4) default '0',
  `FCON_PHOTO_FLAG` tinyint(4) default '0',
  `FCON_MATES_RECEIPT_FLAG` tinyint(4) default '0',
  `BL_CARGO_PACKAGES` int(11) default NULL,
  `BL_CARGO_GROSS_WEIGHT` decimal(14,6) default NULL,
  `BL_CARGO_NET_WEIGHT` decimal(14,6) default NULL,
  `BL_CARGO_MEASUREMENT` decimal(14,6) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`FCON_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `F_CUSTOMS_DECLARATION`
--

CREATE TABLE IF NOT EXISTS `F_CUSTOMS_DECLARATION` (
  `CUDE_ID` int(11) NOT NULL auto_increment,
  `CUDE_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MASTER_ID` int(11) default NULL,
  `CONS_MASTER_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_BIZ_CLASS` char(1) collate utf8_unicode_ci default NULL,
  `CONS_BIZ_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUDE_VENDOR_ID` int(11) default NULL,
  `CUDE_VENDOR_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUDE_VENDOR_CONTACT` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_VENDOR_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_PRE_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_CUSTOMS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_PORT_DOMESTIC` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_PORT_DOMESTIC_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `CUDE_RECORD_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_ENTRY_DATE` date default NULL,
  `CUDE_DECLAR_DATE` date default NULL,
  `CUDE_CUSTOMER` varchar(200) collate utf8_unicode_ci default NULL,
  `CUDE_CARGO_COMPANY` varchar(200) collate utf8_unicode_ci default NULL,
  `CUDE_SHIPPER` varchar(500) collate utf8_unicode_ci default NULL,
  `CUDE_CONSIGNEE` varchar(500) collate utf8_unicode_ci default NULL,
  `TRAT_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_CONVEYANCE` varchar(64) collate utf8_unicode_ci default NULL,
  `CUDE_BL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `TRTY_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `LETY_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `EXSE_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `EXSE_CODE_EN` varchar(32) collate utf8_unicode_ci default NULL,
  `USAG_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_CERTIFICATE_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_LEVY_PERCENT` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_APPROVAL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_CONTAINER_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `CUDE_COUNTRY` varchar(64) collate utf8_unicode_ci default NULL,
  `CUDE_PORT_FOREIGN` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_PLACE` varchar(32) collate utf8_unicode_ci default NULL,
  `TRTE_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `TRTE_CODE_EN` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_FREIGHT` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_INSURANCE` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_CHARGE` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_TOTAL_AMOUNT` DECIMAL(9,2) NULL DEFAULT NULL,
  `CUDE_TOTAL_AMOUNT_CAP` varchar(32) NULL DEFAULT NULL,
  `CUDE_TOTAL_SAY` VARCHAR(200) NULL DEFAULT NULL,
  `CUDE_PACKAGE_NUM` varchar(32) collate utf8_unicode_ci default NULL,
  `PACK_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `PACK_CODE_EN` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_GROSS_WEIGHT` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_NET_WEIGHT` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_MANU` varchar(500) collate utf8_unicode_ci default NULL,
  `CUDE_MARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `CUDE_ATTACHMENT` varchar(500) collate utf8_unicode_ci default NULL,
  `CUDE_TAX_LEVY` varchar(500) collate utf8_unicode_ci default NULL,
  `CUDE_CREATOR` varchar(16) collate utf8_unicode_ci default NULL,
  `CUDE_COMPANY` varchar(64) collate utf8_unicode_ci default NULL,
  `CUDE_COMPANY_ADDRESS` varchar(200) collate utf8_unicode_ci default NULL,
  `CUDE_COMPANY_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_COMPANY_ZIP` varchar(16) collate utf8_unicode_ci default NULL,
  `CUDE_DECLARENT` varchar(16) collate utf8_unicode_ci default NULL,
  `CUDE_CREATE_DATE` date default NULL,
  `CUDE_DOC_SEND_DATE` date default NULL,
  `CUDE_DOC_RECV_DATE` date default NULL,
  `CUDE_REFUND_DATE` date default NULL,
  `CUDE_RELEASE_DATE` date default NULL,
  `CUDE_SHUTOUT_DATE` date default NULL,
  `CUDE_DOC_NUM` int(11) default NULL,
  `CUDE_DOC_COLOR` char(1) collate utf8_unicode_ci default NULL,
  `CUDE_REFUND_DOC_NUM` int(11) default NULL,
  `CUDE_TRANSITED_FLAG` tinyint(4) default '0',
  `CUDE_REFUND_FLAG` tinyint(4) default '0',
  `CUDE_INSPECTION_FLAG` tinyint(4) default '0',
  `CUDE_OPEN_FLAG` tinyint(4) default '0',
  `CUDE_INVOICE_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_INVOICE_DATE` date default NULL,
  `CUDE_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `CUDE_STATUS` tinyint(4) default '0',
  `CUDE_DOC_STATUS` tinyint(4) default NULL,
  `CUDE_DOC_RELEASE_BY` int(11) default NULL,
  `CUDE_DOC_RELEASE_TIME` datetime default NULL,
  `CUDE_DOC_RECEIVER` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDE_TRANS_FLAG` TINYINT(4) NULL DEFAULT '0',
  `CUDE_PARTIAL_FLAG` TINYINT(4) NULL DEFAULT '0',
  `CUDE_TYPE` tinyint(4) default '0',
  `CUDE_SHIP_DATE_F` DATE NULL DEFAULT NULL,
  `CUDE_SHIP_DATE_T` DATE NULL DEFAULT NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(500) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(500) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`CUDE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_CUSTOMS_DOC`
--

CREATE TABLE IF NOT EXISTS `F_CUSTOMS_DOC` (
  `CUDO_ID` int(11) NOT NULL auto_increment,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(16) collate utf8_unicode_ci default NULL,
  `CUDE_ID` int(11) NOT NULL,
  `CUDE_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `DOTY_ID` int(11) default NULL,
  `DOTY_CLASS` char(4) collate utf8_unicode_ci default NULL,
  `DOTY_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `CUDO_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDO_NUM` int(11) default NULL,
  `CUDO_STATUS` tinyint(4) default NULL,
  `CUDO_RECV_DATE` date default NULL,
  `CUDO_SEND_DATE` date default NULL,
  `CUDO_SEND_TYPE` int(11) default NULL,
  `CUDO_SEND_SIGNER` varchar(32) collate utf8_unicode_ci default NULL,
  `CUDO_RETURN_DATE` date default NULL,
  `CUDO_BACK_DATE` date default NULL,
  `CUDO_BACK_TYPE` int(11) default NULL,
  `CUDO_BACK_SIGNER` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`CUDO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `F_CUSTOMS_ENTRY`
--

CREATE TABLE IF NOT EXISTS `F_CUSTOMS_ENTRY` (
  `CUEN_ID` int(11) NOT NULL auto_increment,
  `CUDE_ID` int(11) NOT NULL,
  `CONS_ID` int(11) NOT NULL,
  `CARG_ID` int(11) default NULL,
  `CUEN_NO` VARCHAR(32) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
  `CUEN_CARGO_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUEN_MANU_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUEN_CARGO_NAME_EN` varchar(1000) collate utf8_unicode_ci default NULL,
  `CUEN_CARGO_NAME_CN` varchar(200) collate utf8_unicode_ci default NULL,
  `CUEN_CARGO_SPEC` varchar(64) collate utf8_unicode_ci default NULL,
  `CUEN_PACKAGE_NUM` DECIMAL(9,2) NULL DEFAULT NULL,
  `PACK_CODE` VARCHAR(64) NULL DEFAULT NULL,
  `CUEN_CARGO_NUM` decimal(9,2) default NULL,
  `CUEN_CARGO_UNIT` varchar(32) collate utf8_unicode_ci default NULL,
  `CUEN_CARGO_GROSS_WEIGHT` decimal(9,2) default NULL,
  `CUEN_CARGO_NET_WEIGHT` decimal(9,2) default NULL,
  `CUEN_CARGO_MEASUREMENT` decimal(9,2) default NULL,
  `CUEN_COUNTRY` varchar(64) collate utf8_unicode_ci default NULL,
  `CUEN_UNIT_PRICE` decimal(9,2) default NULL,
  `CUEN_TOTAL_PRICE` decimal(12,2) default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `CUEN_LEVY_TYPE` varchar(32) collate utf8_unicode_ci default NULL,
  `CUEN_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `CUEN_VERSION` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`CUEN_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_DO`
--

CREATE TABLE IF NOT EXISTS `F_DO` (
  `DO_ID` int(11) NOT NULL auto_increment,
  `DO_NO` varchar(16) collate utf8_unicode_ci default NULL,
  `BL_ID` int(32) default NULL,
  `HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `DO_CONSIGNEE` varchar(64) collate utf8_unicode_ci default NULL,
  `DO_PORT` varchar(32) collate utf8_unicode_ci default NULL,
  `DO_HARBOUR` varchar(32) collate utf8_unicode_ci default NULL,
  `DO_ARRIVE_DATE` date default NULL,
  `DO_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `DO_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `DO_WAREHOUSE_ID` int(11) default NULL,
  `DO_WAREHOUSE_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `DO_WAREHOUSE_CONTACT` varchar(32) collate utf8_unicode_ci default NULL,
  `DO_WAREHOUSE_TEL` varchar(16) collate utf8_unicode_ci default NULL,
  `DO_WAREHOUSE_ADDRESS` varchar(500) collate utf8_unicode_ci default NULL,
  `DO_IN_DATE` date default NULL,
  `DO_OUT_DATE` date default NULL,
  `DO_CONTAINER_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `DO_MARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `DO_CARGO_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `DO_CARGO_DIRECTION` varchar(32) collate utf8_unicode_ci default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `DO_PACKAGES` decimal(9,2) default NULL,
  `DO_GROSS_WEIGHT` decimal(9,2) default NULL,
  `DO_NET_WEIGHT` decimal(9,2) default NULL,
  `DO_MEASUREMENT` decimal(9,2) default NULL,
  `DO_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `DO_STATUS` tinyint(4) default '0',
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(500) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(500) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`DO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_DOC`
--

CREATE TABLE IF NOT EXISTS `F_DOC` (
  `FDOC_ID` int(11) NOT NULL auto_increment,
  `FDOC_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_BIZ_CLASS` char(1) collate utf8_unicode_ci default NULL,
  `CONS_SHIP_TYPE` char(4) collate utf8_unicode_ci default NULL,
  `DOTY_ID` int(11) NOT NULL,
  `DOTY_CLASS` varchar(4) collate utf8_unicode_ci default NULL,
  `DOTY_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `FDOC_ORIGINAL_NUM` int(11) default NULL,
  `FDOC_COPY_NUM` int(11) default NULL,
  `FDOC_STATUS` tinyint(4) default '0',
  `FDOC_RECV_DATE` date default NULL,
  `FDOC_SEND_DATE` date default NULL,
  `FDOC_SEND_TO` int(11) default NULL,
  `FDOC_SEND_TYPE` int(11) default NULL,
  `FDOC_SEND_SIGNER` varchar(32) collate utf8_unicode_ci default NULL,
  `FDOC_RETURN_DATE` date default NULL,
  `FDOC_BACK_DATE` date default NULL,
  `FDOC_BACK_TYPE` int(11) default NULL,
  `FDOC_BACK_SIGNER` varchar(32) collate utf8_unicode_ci default NULL,
  `FDOC_RETURN_FLAG` tinyint(4) default NULL,
  `FDOC_BACK_FLAG` tinyint(4) default NULL,
  `FDOC_RELEASABLE_FLAG` tinyint(4) default '0',
  `FDOC_COMPANY` varchar(200) collate utf8_unicode_ci default NULL,
  `FDOC_REMARK` varchar(2000) collate utf8_unicode_ci default NULL,
  `ALERT_FLAG` tinyint(4) default '0',
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`FDOC_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `F_INSPECTION`
--

CREATE TABLE IF NOT EXISTS `F_INSPECTION` (
  `INSP_ID` int(11) NOT NULL auto_increment,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_REF_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_VENDOR_ID` int(11) default NULL,
  `INSP_VENDOR_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `INSP_VENDOR_CONTACT` varchar(16) collate utf8_unicode_ci default NULL,
  `INSP_VENDOR_TEL` varchar(16) collate utf8_unicode_ci default NULL,
  `INSP_DATE` date default NULL,
  `INSP_SHIPPER_EN` varchar(200) collate utf8_unicode_ci default NULL,
  `INSP_SHIPPER_CN` varchar(200) collate utf8_unicode_ci default NULL,
  `INSP_CONSIGNEE_EN` varchar(200) collate utf8_unicode_ci default NULL,
  `INSP_CONSIGNEE_CN` varchar(200) collate utf8_unicode_ci default NULL,
  `INSP_CARGO_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `INSP_HS_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `INSP_MADE_IN` varchar(200) collate utf8_unicode_ci default NULL,
  `INSP_NUM` varchar(200) collate utf8_unicode_ci default NULL,
  `INSP_VALUE` varchar(200) collate utf8_unicode_ci default NULL,
  `INSP_PACKAGES` varchar(200) collate utf8_unicode_ci default NULL,
  `INSP_CONVEYANCE` varchar(64) collate utf8_unicode_ci default NULL,
  `INSP_TRADE_TYPE` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_CARGO_ADDRESS` varchar(64) collate utf8_unicode_ci default NULL,
  `INSP_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_CREDIT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_USAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_SHIPPING_DATE` date default NULL,
  `INSP_CLAIM_DATE` date default NULL,
  `INSP_TRADE_COUNTRY` varchar(64) collate utf8_unicode_ci default NULL,
  `INSP_CERTIFICATE_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_POL` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_POT` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_POD` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_REGISTER_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_CONTAINER_INFO` varchar(1000) collate utf8_unicode_ci default NULL,
  `INSP_SPECIAL_TERM` varchar(1000) collate utf8_unicode_ci default NULL,
  `INSP_MARKS` varchar(1000) collate utf8_unicode_ci default NULL,
  `INSP_RECEIVE_DATE` date default NULL,
  `INSP_RECEIVER` varchar(16) collate utf8_unicode_ci default NULL,
  `INSP_STATUS` tinyint(4) default NULL,
  `INSP_PASS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_NOTE_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_START_DATE` date default NULL,
  `INSP_COMPLETE_DATE` date default NULL,
  `INSP_CHECK_FLAG` tinyint(4) default '0',
  `INSP_REMARKS` varchar(1000) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(500) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(500) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`INSP_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_INSPECTION_DOC`
--

CREATE TABLE IF NOT EXISTS `F_INSPECTION_DOC` (
  `INDO_ID` int(11) NOT NULL auto_increment,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INSP_ID` int(11) NOT NULL,
  `INSP_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `DOTY_ID` int(11) NOT NULL,
  `DOTY_CLASS` varchar(4) collate utf8_unicode_ci default NULL,
  `DOTY_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `INDO_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INDO_ORIGINAL_NUM` int(11) default NULL,
  `INDO_COPY_NUM` int(11) default NULL,
  `INDO_STATUS` tinyint(4) default '0',
  `INDO_RECV_DATE` date default NULL,
  `INDO_SEND_DATE` date default NULL,
  `INDO_SEND_TYPE` int(11) default NULL,
  `INDO_SEND_SIGNER` varchar(32) collate utf8_unicode_ci default NULL,
  `INDO_RETURN_DATE` date default NULL,
  `INDO_BACK_DATE` date default NULL,
  `INDO_BACK_TYPE` int(11) default NULL,
  `INDO_BACK_SIGNER` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`INDO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `F_LOADING_LIST`
--

CREATE TABLE IF NOT EXISTS `F_LOADING_LIST` (
  `LOLI_ID` int(11) NOT NULL auto_increment,
  `FCON_ID` int(11) NOT NULL,
  `FCON_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `FCON_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CARRIER_ID` int(11) default NULL,
  `CARRIER_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `VESS_ID` int(11) NOT NULL,
  `VESS_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `VESS_NAME_CN` varchar(32) collate utf8_unicode_ci default NULL,
  `VOYA_ID` int(11) NOT NULL,
  `VOYA_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `VOYA_SHIP_DATE_F` date default NULL,
  `VOYA_SHIP_DATE_T` date default NULL,
  `VOYA_SAIL_DATE` date default NULL,
  `UNIT_ID` int(11) default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `FCON_FORCAST_QUANTITY` decimal(14,6) default NULL,
  `FCON_SHIPPED_QUANTITY` decimal(14,6) default NULL,
  `LOLI_SHIPPED_QUANTITY` decimal(14,6) default NULL,
  `LOLI_FACT_QUANTITY` decimal(14,6) default NULL,
  `FCON_FORCAST_CBM` decimal(14,6) default NULL,
  `FCON_SHIPPED_CBM` decimal(14,6) default NULL,
  `LOLI_SHIPPED_CBM` decimal(14,6) default NULL,
  `LOLI_FACT_CBM` decimal(14,6) default NULL,
  `LOLI_STATUS` tinyint(4) default NULL,
  `LOLI_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`LOLI_ID`),
  KEY `FCON_ID` (`FCON_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_PACKING_LIST`
--

CREATE TABLE IF NOT EXISTS `F_PACKING_LIST` (
  `PALI_ID` int(11) NOT NULL auto_increment,
  `FCON_ID` int(11) NOT NULL,
  `FCON_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `FCON_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_LABEL` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_TRACK_TYPE` int(11) default NULL,
  `PALI_TRACK_TYPE_P` int(11) default NULL,
  `PALI_TRANS_TIMES` int(11) default NULL,
  `PALI_TRACK_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_LINE_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_SPEC` varchar(200) collate utf8_unicode_ci default NULL,
  `PALI_PACKAGES` int(11) default NULL,
  `PALI_GROSS_WEIGHT` decimal(14,6) default NULL,
  `PALI_CBM` decimal(14,6) default NULL,
  `PALI_CBM_C` decimal(14,6) default NULL,
  `PALI_PIECES` int(11) default NULL,
  `PALI_LENGTH` decimal(14,4) default NULL,
  `PALI_TOTAL_LENGTH` decimal(14,4) default NULL,
  `UNIT_ID_LEN` int(11) default NULL,
  `UNIT_NAME_LEN` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_LOAD_DATE` date default NULL,
  `PALI_ARRIVE_DATE` date default NULL,
  `PALI_HARBOUR_ID` int(11) default NULL,
  `PALI_HARBOUR_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `PALI_STATION_ID` int(11) default NULL,
  `PALI_STATION_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `PALI_LOCATION` varchar(1000) collate utf8_unicode_ci default NULL,
  `PALI_STATION_ID_NOW` int(11) default NULL,
  `PALI_STATION_NAME_NOW` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_LOCATION_NOW` varchar(1000) collate utf8_unicode_ci default NULL,
  `PALI_TRANS_FLAG` tinyint(4) default NULL,
  `PALI_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `PALI_STATUS` tinyint(4) default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CARG_NAME_CN` varchar(200) collate utf8_unicode_ci default NULL,
  `CARG_NAME_EN` varchar(200) collate utf8_unicode_ci default NULL,
  `VESS_ID` int(11) default NULL,
  `VESS_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `VESS_NAME_CN` varchar(32) collate utf8_unicode_ci default NULL,
  `VOYA_ID` int(11) default NULL,
  `VOYA_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `VOYA_SAILED_FLAG` tinyint(4) default '0',
  `LOLI_ID` int(11) default NULL,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`PALI_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_RAILWAY_BL`
--

CREATE TABLE IF NOT EXISTS `F_RAILWAY_BL` (
  `RABL_ID` int(11) NOT NULL auto_increment,
  `RABL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `RABL_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `RABL_SHIPPER` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_CONSIGNEE` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_NOTIFY_PARTY` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_SHIPPER_NOTES` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_AGENCY_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `RABL_DELIVERY_PLACE` varchar(200) collate utf8_unicode_ci default NULL,
  `RABL_STATION_D` varchar(200) collate utf8_unicode_ci default NULL,
  `RABL_STATION_T` varchar(200) collate utf8_unicode_ci default NULL,
  `RABL_ETD` date default NULL,
  `RABL_CONTAINER_NO` varchar(16) collate utf8_unicode_ci default NULL,
  `RABL_CONTAINER_NO_O` varchar(16) collate utf8_unicode_ci default NULL,
  `RABL_CONTAINER_TYPE` varchar(16) collate utf8_unicode_ci default NULL,
  `RABL_CONTAINER_DESC` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_CONTAINER_WEIGHT` varchar(32) collate utf8_unicode_ci default NULL,
  `RABL_CHARGE_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_SEAL_NO` varchar(64) collate utf8_unicode_ci default NULL,
  `RABL_SEAL_NO2` varchar(64) collate utf8_unicode_ci default NULL,
  `RABL_RAILWAY_NOTES` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_HS_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `RABL_SOC_FLAG` tinyint(4) default NULL,
  `RABL_INVOICE_PRICE` varchar(32) collate utf8_unicode_ci default NULL,
  `RABL_CARGO_NAME_CN` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_CARGO_NAME_EN` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_BULK_FLAG` tinyint(4) default NULL,
  `RABL_CONTAINER_STATUS` tinyint(4) default '0',
  `RABL_RETURN_PLACE` varchar(64) collate utf8_unicode_ci default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `RABL_COUNTRY` char(2) collate utf8_unicode_ci default NULL,
  `RABL_PACKAGES` varchar(64) collate utf8_unicode_ci default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `RABL_CARGO_MARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_GROSS_WEIGHT` varchar(64) collate utf8_unicode_ci default NULL,
  `RABL_MEASUREMENT` varchar(64) collate utf8_unicode_ci default NULL,
  `RABL_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `RABL_STATUS` tinyint(4) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(500) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(500) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`RABL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_REASSIGN`
--

CREATE TABLE IF NOT EXISTS `F_REASSIGN` (
  `REAS_ID` int(11) NOT NULL auto_increment,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `REAS_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `REAS_VESS_ID_O` int(11) NOT NULL,
  `REAS_VESS_NAME_O` varchar(64) collate utf8_unicode_ci default NULL,
  `REAS_VOYA_ID_O` int(11) default NULL,
  `REAS_VOYA_NAME_O` int(11) default NULL,
  `REAS_VESS_ID_N` int(11) NOT NULL,
  `REAS_VESS_NAME_N` varchar(64) collate utf8_unicode_ci default NULL,
  `REAS_VOYA_ID_N` int(11) default NULL,
  `REAS_VOYA_NAME_N` int(11) default NULL,
  `REAS_DESC` varchar(500) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`REAS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `F_SECOND_SHIP`
--

CREATE TABLE IF NOT EXISTS `F_SECOND_SHIP` (
  `SESH_ID` int(11) NOT NULL auto_increment,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `SESH_CARRIER` varchar(64) collate utf8_unicode_ci default NULL,
  `SESH_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `SESH_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `SESH_BL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `SESH_POT` varchar(64) collate utf8_unicode_ci default NULL,
  `SESH_POT_AGENCY` varchar(64) collate utf8_unicode_ci default NULL,
  `SESH_ETA` date default NULL,
  `SESH_ETD` date default NULL,
  `SESH_TRANS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `SESH_SEAL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `SESH_REMARKS` varchar(1000) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`SESH_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_TASK`
--

CREATE TABLE IF NOT EXISTS `F_TASK` (
  `TASK_ID` int(11) NOT NULL auto_increment,
  `TATY_ID` int(11) NOT NULL,
  `TATY_NAME` varchar(64) collate utf8_unicode_ci NOT NULL,
  `TATY_D_ID` int(11) default NULL,
  `TATY_D_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `TATY_ORDER` int(11) default NULL,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MASTER_ID` int(11) default NULL,
  `CONS_MASTER_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `TASK_OWNER` int(11) default NULL,
  `TASK_OWNER_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `TASK_ESTIMATED_DATE` date default NULL,
  `TASK_FINISHED_DATE` date default NULL,
  `TASK_FINISHED_FLAG` tinyint(4) NOT NULL default '0',
  `TATY_BIZ_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `TATY_BIZ_CLASS` char(1) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TASK_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_TRANS`
--

CREATE TABLE IF NOT EXISTS `F_TRANS` (
  `TRAN_ID` int(11) NOT NULL auto_increment,
  `TRAN_NO` varchar(32) collate utf8_unicode_ci NOT NULL,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` VARCHAR(32) DEFAULT NULL,
  `CONS_HBL_NO` VARCHAR(32)  DEFAULT NULL,
  `TRAN_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_DATE` date default NULL,
  `TRAN_VENDOR_ID` int(11) default NULL,
  `TRAN_VENDOR_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `TRAN_VENDOR_CONTACT` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_VENDOR_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_VENDOR_FAX` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_EXPIRY_DATE` date default NULL,
  `TRAN_TYPE` int(11) default NULL,
  `TRAN_OPERATION_TYPE` int(11) default NULL,
  `TRAN_VEHICLE_TYPE` int(11) default NULL,
  `TRAN_IC_FLAG` tinyint(4) default NULL,
  `TRAN_IC_DAYS` int(11) default NULL,
  `TRAN_PRE_FLAG` tinyint(4) default NULL,
  `TRAN_INSP_FLAG` tinyint(4) default NULL,
  `TRAN_REAR_FLAG` tinyint(4) default NULL,
  `TRAN_CONT_FLAG` tinyint(4) default NULL,
  `TRAN_LOAD_FACTORY` varchar(64) collate utf8_unicode_ci default NULL,
  `TRAN_LOAD_CONTACT` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_LOAD_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_LOAD_PLACE` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_LOAD_ADDRESS` varchar(200) collate utf8_unicode_ci default NULL,
  `TRAN_START_DATE` date default NULL,
  `TRAN_COMPLETE_DATE` date default NULL,
  `TRAN_LOAD_TIME` VARCHAR(16) NULL DEFAULT NULL,
  `TRAN_DELIVERY_ADDRESS` varchar(200) collate utf8_unicode_ci default NULL,
  `TRAN_DELIVERY_PLACE` VARCHAR(64)  DEFAULT NULL,
  `TRAN_DELIVERY_CONTACT` VARCHAR(32)  DEFAULT NULL,
  `TRAN_DELIVERY_TEL` VARCHAR(32)   DEFAULT NULL,
  `TRAN_CUSTOMS_BROKER` int(11) default NULL,
  `TRAN_CUSTOMS_BROKER_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `TRAN_CUSTOMS_CONTACT` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_CUSTOMS_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_CUSTOMS_ADDRESS` varchar(200) collate utf8_unicode_ci default NULL,
  `TRAN_CONTAINER_COMPANY` int(11) default NULL,
  `TRAN_CONTAINER_COMPANY_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `TRAN_CONTAINER_INFO` varchar(200) collate utf8_unicode_ci default NULL,
  `TRAN_VESSEL` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_ETD` date default NULL,
  `TRAN_SO_NO` varchar(16) collate utf8_unicode_ci default NULL,
  `TRAN_POL` varchar(64) collate utf8_unicode_ci default NULL,
  `TRAN_CY_DRAW` varchar(64) collate utf8_unicode_ci default NULL,
  `TRAN_DRAW_DATE` date default NULL,
  `TRAN_CY_BACK` varchar(64) collate utf8_unicode_ci default NULL,
  `TRAN_BACK_DATE` date default NULL,
  `TRAN_EMPTY_MILES` decimal(9,2) default NULL,
  `TRAN_HEAVY_MILES` decimal(9,2) default NULL,
  `TRAN_TOTAL_PACKAGES` int(11) default NULL,
  `TRAN_TOTAL_GROSS_WEIGHT` decimal(9,2) default NULL,
  `TRAN_TOTAL_MEASUREMENT` decimal(9,2) default NULL,
  `PACK_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `TRAN_REMARKS` varchar(1000) collate utf8_unicode_ci default NULL,
  `TRAN_STATUS` int(11) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) default NULL,
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(500) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(500) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`TRAN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_TRANS_CARGO`
--

CREATE TABLE IF NOT EXISTS `F_TRANS_CARGO` (
  `TRCA_ID` int(11) NOT NULL auto_increment,
  `TRAN_ID` int(11) NOT NULL,
  `CONS_ID` int(11) NOT NULL,
  `CARG_ID` int(11) default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `TRCA_CARGO_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `TRCA_PACKAGE_NUM` int(11) default NULL,
  `TRCA_GROSS_WEIGHT` decimal(9,2) default NULL,
  `TRCA_MEASUREMENT` decimal(9,2) default NULL,
  `TRCA_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) default '0',
  PRIMARY KEY  (`TRCA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_TRANS_LIST`
--

CREATE TABLE IF NOT EXISTS `F_TRANS_LIST` (
  `TRLI_ID` int(11) NOT NULL auto_increment,
  `FCON_ID` int(11) NOT NULL,
  `PALI_ID` int(11) default NULL,
  `TRLI_TRACK_TYPE` int(11) default NULL,
  `TRLI_TRAN_DATE` date default NULL,
  `TRLI_ARRIVE_DATE` date default NULL,
  `TRLI_STATION_ID` int(11) default NULL,
  `TRLI_STATION_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `TRLI_LOCATION` varchar(1000) collate utf8_unicode_ci default NULL,
  `TRLI_STATION_ID_O` int(11) default NULL,
  `TRLI_STATION_NAME_O` varchar(64) collate utf8_unicode_ci default NULL,
  `TRLI_LOCATION_O` varchar(1000) collate utf8_unicode_ci default NULL,
  `TRLI_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TRLI_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_TRANS_TASK`
--

CREATE TABLE IF NOT EXISTS `F_TRANS_TASK` (
  `TRTA_ID` int(11) NOT NULL auto_increment,
  `TRAN_ID` int(11) NOT NULL,
  `CONS_ID` int(11) NOT NULL,
  `COTY_ID` int(11) default NULL,
  `TRTA_VEHICLE_TYPE` int(11) default NULL,
  `TRTA_CONTAINER_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `TRTA_SEAL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `TRTA_ARRIVE_TIME_DEMAND` datetime default NULL,
  `TRTA_ARRIVE_TIME` datetime default NULL,
  `TRTA_LOAD_TIME` datetime default NULL,
  `TRTA_LEAVE_TIME` datetime default NULL,
  `TRTA_BACK_TIME` datetime default NULL,
  `TRTA_DRIVER` varchar(16) collate utf8_unicode_ci default NULL,
  `TRTA_DRIVER_TEL` varchar(16) collate utf8_unicode_ci default NULL,
  `TRTA_TRACK_NO` varchar(16) collate utf8_unicode_ci default NULL,
  `TRTA_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TRTA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_WAREHOUSE`
--

CREATE TABLE IF NOT EXISTS `F_WAREHOUSE` (
  `WARE_ID` int(11) NOT NULL auto_increment,
  `WARE_NO` varchar(32) collate utf8_unicode_ci NOT NULL,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `WARE_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_TOTAL_PACKAGES` int(11) default NULL,
  `WARE_TOTAL_GROSS_WEIGHT` decimal(9,2) default NULL,
  `WARE_TOTAL_MEASUREMENT` decimal(9,2) default NULL,
  `PACK_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `WARE_DATE` date default NULL,
  `WARE_BOOK_DATE` date default NULL,
  `WARE_VENDOR_ID` int(11) default NULL,
  `WARE_VENDOR_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `WARE_VENDOR_CONTACT` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_VENDOR_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_VENDOR_FAX` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_OPERATOR` int(11) default NULL,
  `WARE_OPERATOR_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_OPERATOR_FAX` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_CUSTOMER_CONTACT` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_CUSTOMER_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_CUSTOMER_FAX` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_ACCEPT_STATUS` tinyint(4) default '0',
  `WARE_ACCEPT_DATE` date default NULL,
  `WARE_REF_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `WARE_TRANS_VENDOR` int(11) default NULL,
  `WARE_TRANS_VENDOR_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `WARE_TRACK_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `WARE_LOAD_FLAG` char(1) collate utf8_unicode_ci default NULL,
  `WARE_CONTAINER_NO` varchar(1000) collate utf8_unicode_ci default NULL,
  `WARE_REMARKS` varchar(1000) collate utf8_unicode_ci default NULL,
  `WARE_PACKAGES_NUM` int(11) default NULL,
  `WARE_CARGO_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `WARE_GROSS_WEIGHT` decimal(9,2) default NULL,
  `WARE_NET_WEIGHT` decimal(9,2) default NULL,
  `WARE_MEASUREMENT` decimal(9,2) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ARRT1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(500) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(500) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`WARE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `F_WAREHOUSE_CARGO`
--

CREATE TABLE IF NOT EXISTS `F_WAREHOUSE_CARGO` (
  `WACA_ID` int(11) NOT NULL auto_increment,
  `WARE_ID` int(11) NOT NULL,
  `CONS_ID` int(11) NOT NULL,
  `CARG_ID` int(11) default NULL,
  `WACA_CARGO_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `WACA_CARGO_MARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `WACA_PACKAGES_NUM` int(11) default NULL,
  `WACA_GROSS_WEIGHT` decimal(9,2) default NULL,
  `WACA_NET_WEIGHT` decimal(9,2) default NULL,
  `WACA_MEASUREMENT` decimal(9,2) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`WACA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_CARGO_CLASS`
--

CREATE TABLE IF NOT EXISTS `G_CARGO_CLASS` (
  `CACL_ID` int(11) NOT NULL auto_increment,
  `CACL_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `CACL_NAME_CN` varchar(200) collate utf8_unicode_ci default NULL,
  `CACL_NAME_EN` varchar(200) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) default '0',
  PRIMARY KEY  (`CACL_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_CARGO_TYPE`
--

CREATE TABLE IF NOT EXISTS `G_CARGO_TYPE` (
  `CATY_ID` int(11) NOT NULL auto_increment,
  `CACL_ID` int(11) default NULL,
  `CATY_CODE` varchar(16) collate utf8_unicode_ci default NULL,
  `CATY_NAME_CN` varchar(200) collate utf8_unicode_ci default NULL,
  `CATY_NAME_EN` varchar(200) collate utf8_unicode_ci default NULL,
  `CATY_DANAGER_FLAG` tinyint(4) default '0',
  `CATY_DANAGE_NO` varchar(16) collate utf8_unicode_ci default NULL,
  `CATY_DANAGER_PROPERTY` varchar(200) collate utf8_unicode_ci default NULL,
  `CATY_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) default '0',
  PRIMARY KEY  (`CATY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_CHARGE`
--

CREATE TABLE IF NOT EXISTS `G_CHARGE` (
  `CHAR_ID` int(11) NOT NULL auto_increment,
  `CHAR_CODE` varchar(32) collate utf8_unicode_ci NOT NULL,
  `CHAR_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `CHAR_NAME_EN` varchar(32) collate utf8_unicode_ci default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `UNIT_ID` int(11) default NULL,
  `CHCL_ID` int(11) default NULL,
  `CHAR_CNY_P` varchar(32) collate utf8_unicode_ci default NULL,
  `CHAR_CNY_R` varchar(32) collate utf8_unicode_ci default NULL,
  `CHAR_USD_P` varchar(32) collate utf8_unicode_ci default NULL,
  `CHAR_USD_R` varchar(32) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(200) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(200) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`CHAR_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_CHARGE_CLASS`
--

CREATE TABLE IF NOT EXISTS `G_CHARGE_CLASS` (
  `CHCL_ID` int(11) NOT NULL auto_increment,
  `CHCL_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `CHCL_NAME` varchar(16) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`CHCL_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_CONTAINER_CLASS`
--

CREATE TABLE IF NOT EXISTS `G_CONTAINER_CLASS` (
  `COCL_ID` int(11) NOT NULL auto_increment,
  `COCL_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `COCL_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`COCL_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_CONTAINER_TYPE`
--

CREATE TABLE IF NOT EXISTS `G_CONTAINER_TYPE` (
  `COTY_ID` int(11) NOT NULL auto_increment,
  `COTY_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `COTY_LENGTH` char(2) collate utf8_unicode_ci NOT NULL,
  `COCL_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `COTY_TEU` int(11) default NULL,
  `COTY_ISO_CODE` varchar(8) collate utf8_unicode_ci default NULL,
  `COTY_UN_CODE` varchar(8) collate utf8_unicode_ci default NULL,
  `COTY_TARE_WEIGHT` decimal(9,2) default NULL,
  `COTY_MAX_WEIGHT` decimal(9,2) default NULL,
  `COTY_MAX_MEASUREMENT` decimal(9,2) default NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL,
  PRIMARY KEY  (`COTY_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_COUNTRY`
--

CREATE TABLE IF NOT EXISTS `G_COUNTRY` (
  `COUN_ID` int(11) NOT NULL auto_increment,
  `COUN_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `COUN_NAME_CN` varchar(32) collate utf8_unicode_ci NOT NULL,
  `COUN_NAME_EN` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  PRIMARY KEY  (`COUN_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_CURRENCY`
--

CREATE TABLE IF NOT EXISTS `G_CURRENCY` (
  `CURR_ID` int(11) NOT NULL auto_increment,
  `CURR_CODE` char(3) collate utf8_unicode_ci NOT NULL,
  `CURR_NAME` varchar(16) collate utf8_unicode_ci NOT NULL,
  `CURR_SYMBOL` char(1) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`CURR_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_DOCUMENT_TYPE`
--

CREATE TABLE IF NOT EXISTS `G_DOCUMENT_TYPE` (
  `DOTY_ID` int(11) NOT NULL auto_increment,
  `DOTY_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `DOTY_NAME` varchar(64) collate utf8_unicode_ci NOT NULL,
  `DOTY_CLASS` varchar(4) collate utf8_unicode_ci NOT NULL,
  `DOTY_RETURN_FLAG` tinyint(4) default '0',
  `DOTY_BACK_FLAG` tinyint(4) NOT NULL default '0',
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`DOTY_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_EXCHANGE_SETTLEMENT`
--

CREATE TABLE IF NOT EXISTS `G_EXCHANGE_SETTLEMENT` (
  `EXSE_ID` int(11) NOT NULL auto_increment,
  `EXSE_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `EXSE_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`EXSE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_ISSUE_TYPE`
--

CREATE TABLE IF NOT EXISTS `G_ISSUE_TYPE` (
  `ISTY_ID` int(11) NOT NULL auto_increment,
  `ISTY_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `ISTY_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL,
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`ISTY_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_LEVY_TYPE`
--

CREATE TABLE IF NOT EXISTS `G_LEVY_TYPE` (
  `LETY_ID` int(11) NOT NULL auto_increment,
  `LETY_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `LETY_NAME` varchar(16) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`LETY_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_LINE_PORT`
--

CREATE TABLE IF NOT EXISTS `G_LINE_PORT` (
  `LIPO_ID` int(11) NOT NULL auto_increment,
  `SHLI_ID` int(11) NOT NULL,
  `PORT_ID` int(11) NOT NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`LIPO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_PACKAGE`
--

CREATE TABLE IF NOT EXISTS `G_PACKAGE` (
  `PACK_ID` int(11) NOT NULL auto_increment,
  `PACK_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `PACK_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`PACK_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_PAYMENT_TERM`
--

CREATE TABLE IF NOT EXISTS `G_PAYMENT_TERM` (
  `PATE_ID` int(11) NOT NULL auto_increment,
  `PATE_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `PATE_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`PATE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_PLACE`
--

CREATE TABLE IF NOT EXISTS `G_PLACE` (
  `PLAC_ID` int(11) NOT NULL auto_increment,
  `PLAC_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `PLAC_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `PLAC_NAME_EN` varchar(32) collate utf8_unicode_ci default NULL,
  `PLAC_TYPE` tinyint(4) default NULL,
  `PLAC_DESC` varchar(2000) collate utf8_unicode_ci default NULL,
  `COUN_CODE` char(2) collate utf8_unicode_ci default NULL,
  `PLAC_PROVINCE_ID` int(11) default NULL,
  `PLAC_PROVINCE_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `PLAC_CITY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(32) collate utf8_unicode_ci default NULL,
  `PLAC_ADDRESS` varchar(2000) collate utf8_unicode_ci default NULL,
  `PLAC_STATION` varchar(2000) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) NOT NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`PLAC_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_PORT`
--

CREATE TABLE IF NOT EXISTS `G_PORT` (
  `PORT_ID` int(11) NOT NULL auto_increment,
  `PORT_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `PORT_NAME_EN` varchar(32) collate utf8_unicode_ci NOT NULL,
  `PORT_NAME_CN` varchar(32) collate utf8_unicode_ci default NULL,
  `PORT_TYPE` tinyint(4) default '0',
  `PORT_AREA` varchar(32) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default '1',
  `PORT_TRANS_FLAG` tinyint(4) default NULL,
  `COUN_CODE` char(2) collate utf8_unicode_ci NOT NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`PORT_ID`),
  KEY `COUN_CODE` (`COUN_CODE`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_SETTLEMENT_WAY`
--

CREATE TABLE IF NOT EXISTS `G_SETTLEMENT_WAY` (
  `SEWA_ID` int(11) NOT NULL auto_increment,
  `SEWA_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `SEWA_NAME` varchar(16) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`SEWA_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_SHIPPING_LINE`
--

CREATE TABLE IF NOT EXISTS `G_SHIPPING_LINE` (
  `SHLI_ID` int(11) NOT NULL auto_increment,
  `SHLI_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `SHLI_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `SHLI_NAME_EN` varchar(32) collate utf8_unicode_ci default NULL,
  `SHLI_BULK_FLAG` tinyint(4) default '1',
  `SHLI_CONT_FLAG` tinyint(4) default '1',
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`SHLI_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_TRADE_TERM`
--

CREATE TABLE IF NOT EXISTS `G_TRADE_TERM` (
  `TRTE_ID` int(11) NOT NULL auto_increment,
  `TRTE_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `TRTE_NAME` varchar(16) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TRTE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_TRADE_TYPE`
--

CREATE TABLE IF NOT EXISTS `G_TRADE_TYPE` (
  `TRTY_ID` int(11) NOT NULL auto_increment,
  `TRTY_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `TRTY_NAME` varchar(64) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TRTY_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_TRANS_TERM`
--

CREATE TABLE IF NOT EXISTS `G_TRANS_TERM` (
  `TRAN_ID` int(11) NOT NULL auto_increment,
  `TRAN_CODE` varchar(32) collate utf8_unicode_ci NOT NULL,
  `TRAN_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `TRAN_BULK_FLAG` tinyint(4) default '1',
  `TRAN_CONT_FLAG` tinyint(4) default '1',
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TRAN_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_TRANS_TYPE`
--

CREATE TABLE IF NOT EXISTS `G_TRANS_TYPE` (
  `TRAT_ID` int(11) NOT NULL auto_increment,
  `TRAT_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `TRAT_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TRAT_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_UNIT`
--

CREATE TABLE IF NOT EXISTS `G_UNIT` (
  `UNIT_ID` int(11) NOT NULL auto_increment,
  `UNIT_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`UNIT_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_USAGE`
--

CREATE TABLE IF NOT EXISTS `G_USAGE` (
  `USAG_ID` int(11) NOT NULL auto_increment,
  `USAG_CODE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `USAG_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`USAG_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_VEHICLE_TYPE`
--

CREATE TABLE IF NOT EXISTS `G_VEHICLE_TYPE` (
  `VEHT_ID` int(11) NOT NULL auto_increment,
  `VEHT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) default '0',
  PRIMARY KEY  (`VEHT_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_VESSEL`
--

CREATE TABLE IF NOT EXISTS `G_VESSEL` (
  `VESS_ID` int(11) NOT NULL auto_increment,
  `VESS_NAME_EN` varchar(64) collate utf8_unicode_ci NOT NULL,
  `VESS_NAME_CN` varchar(64) collate utf8_unicode_ci default NULL,
  `VESS_CODE` varchar(16) collate utf8_unicode_ci default NULL,
  `VESS_LINER` varchar(64) collate utf8_unicode_ci default NULL,
  `VESS_DESC` varchar(200) collate utf8_unicode_ci default NULL,
  `COUN_CODE` char(2) collate utf8_unicode_ci default NULL,
  `VESS_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`VESS_ID`),
  KEY `VESS_NAME_EN` (`VESS_NAME_EN`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `G_VOYAGE`
--

CREATE TABLE IF NOT EXISTS `G_VOYAGE` (
  `VOYA_ID` int(11) NOT NULL auto_increment,
  `VOYA_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `VESS_ID` int(11) NOT NULL,
  `VESS_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `VESS_NAME_CN` varchar(32) collate utf8_unicode_ci default NULL,
  `VOYA_CLASS` char(1) collate utf8_unicode_ci default NULL,
  `VOYA_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `VOYA_CARRIER` int(11) default NULL,
  `VOYA_CARRIER_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `VOYA_HARBOUR_ID` int(11) default NULL,
  `VOYA_HARBOUR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `VOYA_PORTS` varchar(500) collate utf8_unicode_ci default NULL,
  `SHLI_ID` int(11) default NULL,
  `SHLI_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `VOYA_CARRIER_LINE` varchar(32) collate utf8_unicode_ci default NULL,
  `VOYA_QUANTITY` decimal(12,4) default NULL,
  `VOYA_SHIPPED_QUANTITY` decimal(12,4) default NULL,
  `VOYA_FACT_QUANTITY` decimal(12,4) default NULL,
  `VOYA_SHIP_DATE_F` date default NULL,
  `VOYA_SHIP_DATE_T` date default NULL,
  `VOYA_LOAD_DATE_F` date default NULL,
  `VOYA_LOAD_DATE_T` date default NULL,
  `VOYA_ETD` date default NULL,
  `VOYA_ETD_T` varchar(16) collate utf8_unicode_ci default NULL,
  `VOYA_ETA` date default NULL,
  `VOYA_ETA_T` varchar(16) collate utf8_unicode_ci default NULL,
  `VOYA_BERTHING_DATE` date default NULL,
  `VOYA_BERTHING_DATE_T` varchar(16) collate utf8_unicode_ci default NULL,
  `VOYA_SAIL_DATE` date default NULL,
  `VOYA_SAIL_DATE_T` varchar(16) collate utf8_unicode_ci default NULL,
  `VOYA_SHIP_MAP_FLAG` tinyint(4) default '0',
  `VOYA_SAILED_FLAG` tinyint(4) default '0',
  `VOYA_DISPATCHER_ID` int(11) default NULL,
  `VOYA_DISPATCHER_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `VOYA_OPERATOR_ID` int(11) default NULL,
  `VOYA_OPERATOR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`VOYA_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `HCMS_ARTICLE`
--

CREATE TABLE IF NOT EXISTS `HCMS_ARTICLE` (
  `R_ID` int(11) NOT NULL auto_increment,
  `R_CODE` varchar(16) collate utf8_unicode_ci default NULL,
  `R_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `R_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `P_ID` int(11) NOT NULL,
  `P_CODE` varchar(1000) collate utf8_unicode_ci default NULL,
  `P_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `P_Ids` varchar(200) collate utf8_unicode_ci default NULL,
  `PRIVATE_FLAG` tinyint(4) default '0',
  `ARTI_SUB_TITLE` varchar(500) collate utf8_unicode_ci default NULL,
  `ARTI_SUMMARY` varchar(2000) collate utf8_unicode_ci default NULL,
  `ARTI_BODY` text collate utf8_unicode_ci,
  `ARTI_AUTHOR` varchar(64) collate utf8_unicode_ci default NULL,
  `ARTI_SOURCE` varchar(500) collate utf8_unicode_ci default NULL,
  `ARTI_PUBLISH_DATE` datetime default NULL,
  `ARTI_AUDIT_FLAG` tinyint(4) NOT NULL default '0',
  `ARTI_KEYWORDS` varchar(2000) collate utf8_unicode_ci default NULL,
  `ARTI_PV` int(11) default '0',
  `ARTI_RATE_SCORE` int(11) default NULL,
  `ARTI_RATE_NUM` int(11) default '0',
  `ARTI_COMMENTS_NUM` int(11) default '0',
  `AUDIT_BY` int(11) default NULL,
  `AUDIT_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `AUDIT_TIME` datetime default NULL,
  `ACTIVE` tinyint(4) default NULL,
  `USER_ID` int(11) default NULL,
  `USER_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `GROU_ID` int(11) default NULL,
  `GROU_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` varchar(8) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`R_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `HCMS_CATEGORY`
--

CREATE TABLE IF NOT EXISTS `HCMS_CATEGORY` (
  `R_ID` int(11) NOT NULL auto_increment,
  `R_CODE` varchar(16) collate utf8_unicode_ci default NULL,
  `R_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `R_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `P_ID` int(11) default NULL,
  `P_CODE` varchar(1000) collate utf8_unicode_ci default NULL,
  `P_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `P_Ids` varchar(200) collate utf8_unicode_ci default NULL,
  `PRIVATE_FLAG` tinyint(4) default '0',
  `CATE_DESC` varchar(2000) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default NULL,
  `USER_ID` int(11) default NULL,
  `USER_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `GROU_ID` int(11) default NULL,
  `GROU_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` varchar(8) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`R_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `HCMS_CHANNEL`
--

CREATE TABLE IF NOT EXISTS `HCMS_CHANNEL` (
  `CHAN_ID` int(11) NOT NULL auto_increment,
  `SITE_ID` int(11) NOT NULL,
  `CHAN_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `CHAN_DESC` varchar(500) collate utf8_unicode_ci default NULL,
  `CHAN_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CHAN_URL` varchar(200) collate utf8_unicode_ci default NULL,
  `CATE_ID` int(11) default NULL,
  `CATE_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `TEMP_ID_M` int(11) default NULL,
  `TEMP_ID_L` int(11) default NULL,
  `TEMP_ID_A` int(11) default NULL,
  `ORDER_WEIGHT` int(11) default NULL,
  `ACTIVE` tinyint(4) default NULL,
  `USER_ID` int(11) default NULL,
  `USER_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `GROU_ID` int(11) default NULL,
  `GROU_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` varchar(8) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`CHAN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `HCMS_DIRECTORY`
--

CREATE TABLE IF NOT EXISTS `HCMS_DIRECTORY` (
  `R_ID` int(11) NOT NULL auto_increment,
  `R_CODE` varchar(16) collate utf8_unicode_ci default NULL,
  `R_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `P_ID` int(11) default NULL,
  `R_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `P_CODE` varchar(1000) collate utf8_unicode_ci default NULL,
  `P_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `P_Ids` varchar(200) collate utf8_unicode_ci default NULL,
  `PRIVATE_FLAG` tinyint(4) default '0',
  `ACTIVE` tinyint(4) default NULL,
  `USER_ID` int(11) default NULL,
  `USER_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `GROU_ID` int(11) default NULL,
  `GROU_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` varchar(8) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`R_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `HCMS_FILE`
--

CREATE TABLE IF NOT EXISTS `HCMS_FILE` (
  `R_ID` int(11) NOT NULL auto_increment,
  `R_CODE` varchar(16) collate utf8_unicode_ci default NULL,
  `R_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `R_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `P_ID` int(11) default NULL,
  `P_CODE` varchar(1000) collate utf8_unicode_ci default NULL,
  `P_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `P_Ids` varchar(200) collate utf8_unicode_ci default NULL,
  `PRIVATE_FLAG` tinyint(4) default '0',
  `FILE_EXT_NAME` varchar(16) collate utf8_unicode_ci default NULL,
  `FILE_IMAGE_FLAG` tinyint(4) default NULL,
  `FILE_IMAGE_WIDTH` int(11) default NULL,
  `FILE_IMAGE_HEIGHT` int(11) default NULL,
  `FILE_SIZE` int(11) default NULL,
  `FILE_PATH` varchar(200) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default NULL,
  `USER_ID` int(11) default NULL,
  `USER_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `GROU_ID` int(11) default NULL,
  `GROU_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` varchar(8) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`R_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `HCMS_SITE`
--

CREATE TABLE IF NOT EXISTS `HCMS_SITE` (
  `SITE_ID` int(11) NOT NULL auto_increment,
  `SITE_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `SITE_URL` varchar(200) collate utf8_unicode_ci default NULL,
  `SITE_DOC_ROOT` varchar(200) collate utf8_unicode_ci default NULL,
  `SITE_TEMP_ID` int(11) default NULL,
  `USER_ID` int(11) default NULL,
  `USER_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `GROU_ID` int(11) default NULL,
  `GROU_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` varchar(8) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`SITE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `HCMS_TEMPLATE`
--

CREATE TABLE IF NOT EXISTS `HCMS_TEMPLATE` (
  `TEMP_ID` int(11) NOT NULL auto_increment,
  `TEMP_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `TEMP_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `TEMP_CONTENT` text collate utf8_unicode_ci,
  `USER_ID` int(11) default NULL,
  `USER_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `GROU_ID` int(11) default NULL,
  `GROU_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_BY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` varchar(8) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TEMP_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_ACTION`
--

CREATE TABLE IF NOT EXISTS `P_ACTION` (
  `ACT_ID` int(11) NOT NULL auto_increment,
  `ACT_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACT_SERVICE` varchar(50) collate utf8_unicode_ci default NULL,
  `ACT_METHOD` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACT_REMARK` varchar(100) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`ACT_ID`),
  UNIQUE KEY `ACT_NAME` (`ACT_NAME`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_ACTION_LOG`
--

CREATE TABLE IF NOT EXISTS `P_ACTION_LOG` (
  `ACLO_ID` int(11) NOT NULL auto_increment,
  `ACLO_ACT_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `ACLO_ACT_REMARK` varchar(100) collate utf8_unicode_ci default NULL,
  `ACLO_TABLE` varchar(32) collate utf8_unicode_ci default NULL,
  `ACLO_TID` int(11) default NULL,
  `ACLO_TNO` varchar(32) collate utf8_unicode_ci default NULL,
  `ACLO_USER_ID` int(11) default NULL,
  `ACLO_USER_NAME` varchar(16) collate utf8_unicode_ci default NULL,
  `ACLO_IP` varchar(32) collate utf8_unicode_ci default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `CREATE_TIME` datetime NOT NULL,
  PRIMARY KEY  (`ACLO_ID`),
  KEY `CREATE_TIME` (`CREATE_TIME`),
  KEY `ACLO_USER_NAME` (`ACLO_USER_NAME`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_COMPANY`
--

CREATE TABLE IF NOT EXISTS `P_COMPANY` (
  `COMP_ID` int(11) NOT NULL auto_increment,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `COMP_NAME_CN` varchar(32) collate utf8_unicode_ci NOT NULL,
  `COMP_NAME_EN` varchar(32) collate utf8_unicode_ci default NULL,
  `COMP_ACTIVE` tinyint(4) NOT NULL default '0',
  `COMP_START_DATE` date default NULL,
  `COMP_END_DATE` date default NULL,
  `COMP_SERVICE_LEVEL` tinyint(4) default '0',
  `COMP_EMAIL` varchar(64) collate utf8_unicode_ci default NULL,
  `COMP_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `COMP_FAX` varchar(32) collate utf8_unicode_ci default NULL,
  `COMP_ADDRESS` varchar(200) collate utf8_unicode_ci default NULL,
  `COMP_BANK` varchar(32) collate utf8_unicode_ci default NULL,
  `COMP_ACCOUNT` varchar(32) collate utf8_unicode_ci default NULL,
  `COMP_CONTACT` varchar(32) collate utf8_unicode_ci default NULL,
  `COMP_ALI_BUYER_ID` varchar(32) collate utf8_unicode_ci default NULL,
  `COMP_ALI_APP_ID` varchar(64) collate utf8_unicode_ci default NULL,
  `COMP_ALI_USER_AMOUNT` int(11) default NULL,
  `COMP_LICENSE_NUMBER` int(11) NOT NULL default '5',
  `CREATE_TIME` datetime default NULL,
  `MODIFY_TIME` datetime default NULL,
  PRIMARY KEY  (`COMP_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_COMPANY_BANK_ACCOUNT`
--

CREATE TABLE IF NOT EXISTS `P_COMPANY_BANK_ACCOUNT` (
  `COBA_ID` int(11) NOT NULL auto_increment,
  `COBA_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `COBA_BANK` varchar(32) collate utf8_unicode_ci NOT NULL,
  `COBA_ACCOUNT` varchar(64) collate utf8_unicode_ci NOT NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`COBA_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_COMPANY_CONFIG`
--

CREATE TABLE IF NOT EXISTS `P_COMPANY_CONFIG` (
  `COCO_ID` int(11) NOT NULL auto_increment,
  `COCO_CODE` varchar(32) collate utf8_unicode_ci NOT NULL,
  `COCO_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `COCO_VALUE` varchar(1000) collate utf8_unicode_ci default NULL,
  `COCO_VALUE_TYPE` tinyint(4) default NULL,
  `COCO_VALUE_OPTIONS` varchar(200) collate utf8_unicode_ci default NULL,
  `COCO_GROUP` varchar(32) collate utf8_unicode_ci default NULL,
  `COCO_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `COCO_DESC` varchar(200) collate utf8_unicode_ci default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  PRIMARY KEY  (`COCO_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_FUNCTION`
--

CREATE TABLE IF NOT EXISTS `P_FUNCTION` (
  `FUNC_CODE` varchar(32) collate utf8_unicode_ci NOT NULL,
  `FUNC_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `FUNC_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`FUNC_CODE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_GROUP`
--

CREATE TABLE IF NOT EXISTS `P_GROUP` (
  `GROU_ID` int(11) NOT NULL auto_increment,
  `GROU_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `GROU_DESC` varchar(200) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default '0',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`GROU_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_GROUP_USER`
--

CREATE TABLE IF NOT EXISTS `P_GROUP_USER` (
  `GRUS_ID` int(11) NOT NULL auto_increment,
  `GROU_ID` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  PRIMARY KEY  (`GRUS_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_LOGGING_EVENT`
--

CREATE TABLE IF NOT EXISTS `P_LOGGING_EVENT` (
  `event_id` int(11) NOT NULL auto_increment,
  `userid` int(11) NOT NULL,
  `compcode` char(4) collate utf8_unicode_ci NOT NULL,
  `level_string` varchar(254) collate utf8_unicode_ci NOT NULL,
  `timestmp` datetime NOT NULL,
  `thread_name` varchar(254) collate utf8_unicode_ci default NULL,
  `logger_name` varchar(254) collate utf8_unicode_ci NOT NULL,
  `caller_method` varchar(254) collate utf8_unicode_ci NOT NULL,
  `caller_line` char(6) collate utf8_unicode_ci NOT NULL,
  `formatted_message` text collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_MESSAGE`
--

CREATE TABLE IF NOT EXISTS `P_MESSAGE` (
  `mess_id` bigint(20) NOT NULL auto_increment,
  `mess_type` tinyint(4) NOT NULL default '0',
  `mess_to` varchar(255) collate utf8_unicode_ci NOT NULL,
  `mess_cc` varchar(255) collate utf8_unicode_ci default NULL,
  `mess_bcc` varchar(255) collate utf8_unicode_ci default NULL,
  `mess_subject` varchar(255) collate utf8_unicode_ci default NULL,
  `mess_body` text collate utf8_unicode_ci NOT NULL,
  `mess_attachment` varchar(100) collate utf8_unicode_ci default NULL,
  `mess_from` varchar(255) collate utf8_unicode_ci NOT NULL,
  `mess_create_time` datetime NOT NULL,
  `mess_send_flag` tinyint(4) NOT NULL default '0',
  `mess_from_user_id` int(11) default NULL,
  `mess_from_user_name` varchar(32) collate utf8_unicode_ci default NULL,
  `mess_to_user_id` int(11) default NULL,
  `mess_to_user_name` varchar(32) collate utf8_unicode_ci default NULL,
  `comp_code` char(4) collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`mess_id`),
  KEY `mess_send_flag` (`mess_send_flag`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_MESSAGE_SUBSCRIBE`
--

CREATE TABLE IF NOT EXISTS `P_MESSAGE_SUBSCRIBE` (
  `MESU_ID` int(11) NOT NULL auto_increment,
  `METO_ID` int(11) default NULL,
  `MESU_MAIL_FLAG` tinyint(4) default '0',
  `MESU_IM_FLAG` tinyint(4) default '0',
  `MESU_SM_FLAG` tinyint(4) default '0',
  `MESU_SUBSCRIBER_TYPE` tinyint(4) default '1',
  `MESU_SUBSCRIBER_ID` int(11) default NULL,
  `MESU_SUBSCRIBER_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `MESU_SUBSCRIBER_EMAIL` varchar(200) collate utf8_unicode_ci default NULL,
  `MESU_SUBSCRIBER_MOBILE` varchar(32) collate utf8_unicode_ci default NULL,
  `MESU_CUSTOMER_TYPE` tinyint(4) default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`MESU_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_MESSAGE_TOPIC`
--

CREATE TABLE IF NOT EXISTS `P_MESSAGE_TOPIC` (
  `METO_ID` int(11) NOT NULL auto_increment,
  `METO_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `METO_DESC` varchar(200) collate utf8_unicode_ci default NULL,
  `METO_TEMPLATE` longtext collate utf8_unicode_ci,
  `METO_RULE` varchar(2000) collate utf8_unicode_ci default NULL,
  `ACT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `TETY_ID` int(11) default NULL,
  `ACTIVE` tinyint(4) default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`METO_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_ROLE`
--

CREATE TABLE IF NOT EXISTS `P_ROLE` (
  `ROLE_ID` int(11) NOT NULL auto_increment,
  `ROLE_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `ROLE_DESC` varchar(200) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`ROLE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_ROLE_FUNCTION`
--

CREATE TABLE IF NOT EXISTS `P_ROLE_FUNCTION` (
  `ROFU_ID` int(11) NOT NULL auto_increment,
  `ROLE_ID` int(11) NOT NULL,
  `FUNC_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`ROFU_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_SERIAL_NO`
--

CREATE TABLE IF NOT EXISTS `P_SERIAL_NO` (
  `seno_id` int(11) NOT NULL auto_increment,
  `seru_id` int(11) NOT NULL,
  `seru_code` varchar(30) collate utf8_unicode_ci NOT NULL,
  `comp_code` varchar(4) collate utf8_unicode_ci NOT NULL,
  `seno_suffix` varchar(30) collate utf8_unicode_ci NOT NULL,
  `seno_current_no` bigint(20) NOT NULL,
  `seno_expire` datetime NOT NULL,
  PRIMARY KEY  (`seno_id`),
  UNIQUE KEY `seru_code` (`seru_code`,`comp_code`,`seno_suffix`),
  KEY `seru_id` (`seru_id`),
  KEY `seno_expire` (`seno_expire`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_SERIAL_RULE`
--

CREATE TABLE IF NOT EXISTS `P_SERIAL_RULE` (
  `seru_id` int(11) NOT NULL auto_increment COMMENT '主键',
  `seru_code` varchar(30) collate utf8_unicode_ci NOT NULL,
  `seru_name` varchar(50) collate utf8_unicode_ci NOT NULL,
  `comp_code` varchar(4) collate utf8_unicode_ci NOT NULL,
  `seru_rule` varchar(30) collate utf8_unicode_ci NOT NULL,
  `seru_sn_length` int(11) NOT NULL,
  `seru_uniq_suffix` varchar(30) collate utf8_unicode_ci NOT NULL,
  `seru_loop_period` tinyint(4) NOT NULL,
  PRIMARY KEY  (`seru_id`),
  KEY `seru_loop_period` (`seru_loop_period`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_TABLE_INFO`
--

CREATE TABLE IF NOT EXISTS `P_TABLE_INFO` (
  `TAIN_ID` int(11) NOT NULL auto_increment,
  `TAIN_TABLE_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `TAIN_FIELD_TYPE` varchar(16) collate utf8_unicode_ci NOT NULL,
  `TAIN_FIELD_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`TAIN_ID`),
  UNIQUE KEY `TAIN_FIELD_TYPE` (`TAIN_FIELD_TYPE`,`TAIN_TABLE_NAME`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_TASK_TYPE`
--

CREATE TABLE IF NOT EXISTS `P_TASK_TYPE` (
  `TATY_ID` int(11) NOT NULL auto_increment,
  `TATY_NAME` varchar(64) collate utf8_unicode_ci NOT NULL,
  `TATY_D_ID` int(11) default NULL,
  `TATY_D_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `TATY_ORDER` int(11) default NULL,
  `TATY_DESC` varchar(200) collate utf8_unicode_ci default NULL,
  `TATY_DATE_TYPE` varchar(32) collate utf8_unicode_ci default NULL,
  `TATY_DATE_ESTIMATED` int(11) default NULL,
  `TATY_ACTION` varchar(32) collate utf8_unicode_ci default NULL,
  `TATY_CLASS` varchar(200) collate utf8_unicode_ci default NULL,
  `TATY_PROPERTY` varchar(62) collate utf8_unicode_ci default NULL,
  `TATY_DEFAULT_OWNER` int(11) default NULL,
  `TATY_BIZ_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `TATY_BIZ_CLASS` char(1) collate utf8_unicode_ci NOT NULL,
  `ACTIVE` tinyint(4) default '1',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TATY_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_TEMPLATE`
--

CREATE TABLE IF NOT EXISTS `P_TEMPLATE` (
  `TEMP_ID` int(11) NOT NULL auto_increment,
  `TEMP_NAME` varchar(64) collate utf8_unicode_ci NOT NULL,
  `TEMP_CLASS` char(1) collate utf8_unicode_ci NOT NULL,
  `TEMP_TYPE` varchar(6) collate utf8_unicode_ci default 'xls',
  `TETY_ID` int(11) default NULL,
  `TETY_CODE` varchar(16) collate utf8_unicode_ci default NULL,
  `TETY_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `TEMP_FILE_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `TEMP_DESC` varchar(200) collate utf8_unicode_ci default NULL,
  `ACTIVE` tinyint(4) default '1',
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TEMP_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_TEMPLATE_MAP`
--

CREATE TABLE IF NOT EXISTS `P_TEMPLATE_MAP` (
  `TEMA_ID` int(11) NOT NULL auto_increment,
  `TETY_ID` int(11) NOT NULL,
  `TEMA_NAME` varchar(64) collate utf8_unicode_ci NOT NULL,
  `TEMA_TABLE` varchar(32) collate utf8_unicode_ci default NULL,
  `TEMA_FIELD` varchar(32) collate utf8_unicode_ci NOT NULL,
  `TEMA_CONVERTER` varchar(64) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`TEMA_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_TEMPLATE_TYPE`
--

CREATE TABLE IF NOT EXISTS `P_TEMPLATE_TYPE` (
  `TETY_ID` int(11) NOT NULL auto_increment,
  `TETY_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `TETY_CODE` varchar(16) collate utf8_unicode_ci default NULL,
  `TETY_DESC` varchar(200) collate utf8_unicode_ci default NULL,
  `TETY_ACTION` varchar(32) collate utf8_unicode_ci default NULL,
  `TETY_PARENT` varchar(32) collate utf8_unicode_ci default NULL,
  `TETY_CHILD` varchar(32) collate utf8_unicode_ci default NULL,
  `TETY_CLASS` char(1) collate utf8_unicode_ci default NULL,
  `TETY_TYPE` char(1) collate utf8_unicode_ci default 'P',
  `TETY_FORM_FLAG` tinyint(4) default '1',
  `ACTIVE` tinyint(4) default '1',
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`TETY_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_USER`
--

CREATE TABLE IF NOT EXISTS `P_USER` (
  `USER_ID` int(11) NOT NULL auto_increment,
  `USER_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `USER_LOGIN_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `USER_PASSWORD` varchar(64) collate utf8_unicode_ci default NULL,
  `USER_TEL` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_MOBILE` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_EMAIL` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_MSN` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_QQ` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_DEFAULT_GROUP` int(11) default NULL,
  `USER_DEFAULT_ROLE` int(11) default NULL,
  `USER_SALES_FLAG` tinyint(4) default NULL,
  `USER_OPERATOR_FLAG` tinyint(4) default NULL,
  `USER_ALL_VIEW_FLAG` tinyint(4) default '0',
  `USER_ALL_EDIT_FLAG` tinyint(4) default '0',
  `USER_PASSWORD_MODIFY_DATE` date default NULL,
  `ACTIVE` tinyint(4) default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`USER_ID`),
  UNIQUE KEY `USER_LOGIN_NAME` (`USER_LOGIN_NAME`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_USER_EXPE_PERMISSION`
--

CREATE TABLE IF NOT EXISTS `P_USER_EXPE_PERMISSION` (
  `USEP_ID` int(11) NOT NULL auto_increment,
  `USER_ID` int(11) NOT NULL,
  `CHCL_ID` int(11) NOT NULL,
  `CHCL_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `USEP_EDITABLE` tinyint(4) NOT NULL default '0',
  `USEP_VIEW_ALL` tinyint(4) default '0',
  `USEP_EDIT_ALL` tinyint(4) default '0',
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`USEP_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_USER_ROLE`
--

CREATE TABLE IF NOT EXISTS `P_USER_ROLE` (
  `USRO_ID` int(11) NOT NULL auto_increment,
  `USER_ID` int(11) NOT NULL,
  `ROLE_ID` int(11) NOT NULL,
  PRIMARY KEY  (`USRO_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `P_USER_SETTING`
--

CREATE TABLE IF NOT EXISTS `P_USER_SETTING` (
  `USSE_ID` int(11) NOT NULL auto_increment,
  `USER_ID` int(11) NOT NULL,
  `USSE_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `USSE_VALUE` text collate utf8_unicode_ci,
  PRIMARY KEY  (`USSE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_BALANCE`
--

CREATE TABLE IF NOT EXISTS `S_BALANCE` (
  `BALA_ID` int(11) NOT NULL auto_increment,
  `CUST_ID` int(11) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci NOT NULL,
  `BALA_AMOUNT` decimal(9,2) NOT NULL,
  `REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  PRIMARY KEY  (`BALA_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_BILL`
--

CREATE TABLE IF NOT EXISTS `S_BILL` (
  `BILL_ID` int(11) NOT NULL auto_increment,
  `BILL_NO` varchar(32) collate utf8_unicode_ci NOT NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `BILL_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `BILL_DATE` date default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `BILL_AMOUNT` decimal(12,2) default NULL,
  `BILL_AMOUNT_CNY` decimal(12,2) default NULL,
  `BILL_AMOUNT_USD` decimal(12,2) default NULL,
  `BILL_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `BILL_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `BILL_BL_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `BILL_SAIL_DATE` date default NULL,
  `BILL_POL` varchar(32) collate utf8_unicode_ci default NULL,
  `BILL_POD` varchar(32) collate utf8_unicode_ci default NULL,
  `BILL_DELIVERY_PLACE` varchar(32) collate utf8_unicode_ci default NULL,
  `BILL_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `BILL_ISSUER` varchar(32) collate utf8_unicode_ci default NULL,
  `BILL_ISSUE_DATE` date default NULL,
  `BILL_CONS_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `BILL_CARGO_NAME` varchar(200) collate utf8_unicode_ci default NULL,
  `BILL_CARGO_QWM` varchar(64) collate utf8_unicode_ci default NULL,
  `BILL_CONTAINERS_INFO` varchar(500) collate utf8_unicode_ci default NULL,
  `BILL_STATUS` tinyint(4) default '0',
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(200) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(200) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`BILL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_BILL_ITEM`
--

CREATE TABLE IF NOT EXISTS `S_BILL_ITEM` (
  `BIIT_ID` int(11) NOT NULL auto_increment,
  `BILL_ID` int(11) NOT NULL,
  `EXPE_ID` int(11) NOT NULL,
  `CUST_ID` int(11) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CHAR_ID` int(11) default NULL,
  `CHAR_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `UNIT_ID` int(11) default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `EXPE_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `EXPE_PAYMENT_TYPE` int(11) default NULL,
  `EXPE_DATE` date default NULL,
  `EXPE_UNIT_PRICE` decimal(12,4) default NULL,
  `EXPE_NUM` decimal(12,4) default NULL,
  `EXPE_COMMISSION` decimal(12,4) default NULL,
  `EXPE_COMMISSION_RATE` decimal(12,4) default NULL,
  `EXPE_TOTAL_AMOUNT` decimal(12,4) default NULL,
  `EXPE_EX_RATE` decimal(9,4) default NULL,
  `EXPE_STATUS` tinyint(4) default NULL,
  `EXPE_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `EXPE_FORWARD_FLAG` tinyint(4) default '0',
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`BIIT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_BULK_EXPENSE`
--

CREATE TABLE IF NOT EXISTS `S_BULK_EXPENSE` (
  `BUEX_ID` int(11) NOT NULL auto_increment,
  `FCON_ID` int(11) NOT NULL,
  `FCON_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `FCON_CONTRACT_NO` varchar(32) collate utf8_unicode_ci NOT NULL,
  `PALI_ID` int(11) default NULL,
  `PALI_LABEL` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_TRACK_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CHAR_ID` int(11) NOT NULL,
  `CHAR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `UNIT_ID` int(11) default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci NOT NULL,
  `BUEX_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `PATE_ID` int(11) default NULL,
  `PATE_CODE` char(1) collate utf8_unicode_ci default NULL,
  `BUEX_DATE` date default NULL,
  `BUEX_UNIT_PRICE` decimal(12,4) default NULL,
  `BUEX_NUM` decimal(14,6) default '1.000000',
  `BUEX_NUM2` decimal(14,6) default '1.000000',
  `BUEX_TOTAL_AMOUNT` decimal(12,2) NOT NULL,
  `BUEX_EX_RATE` decimal(9,4) default NULL,
  `BUEX_STATUS` tinyint(4) default '0',
  `BUEX_EXPORT_FLAG` tinyint(4) default '0',
  `BUEX_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`BUEX_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_EXPENSE`
--

CREATE TABLE IF NOT EXISTS `S_EXPENSE` (
  `EXPE_ID` int(11) NOT NULL auto_increment,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(16) collate utf8_unicode_ci default NULL,
  `SECTION` VARCHAR(16) NULL DEFAULT 'CONS',
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_SAIL_DATE` date default NULL,
  `CONS_BIZ_CLASS` char(1) collate utf8_unicode_ci default NULL,
  `CONS_BIZ_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CONS_SHIP_TYPE` char(4) collate utf8_unicode_ci default NULL,
  `CONS_CUST_ID` int(11) default NULL,
  `CONS_CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CHCL_ID` int(11) default NULL,
  `CHAR_ID` int(11) NOT NULL,
  `CHAR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CHAR_NAME_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `UNIT_ID` int(11) default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci NOT NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `EXPE_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `PATE_ID` CHAR(16) NOT NULL,
  `PATE_CODE` CHAR(16) NOT NULL,
  `EXPE_DATE` date default NULL,
  `EXPE_UNIT_PRICE` decimal(12,4) default NULL,
  `EXPE_NUM` decimal(14,6) default '1.000000',
  `EXPE_NUM2` decimal(14,6) default '1.000000',
  `EXPE_INNER_PRICE` decimal(12,4) default NULL,
  `EXPE_INNER_AMOUNT` decimal(12,4) default NULL,
  `EXPE_COMMISSION` decimal(12,4) default NULL,
  `EXPE_COMMISSION_RATE` decimal(12,4) default NULL,
  `EXPE_TOTAL_AMOUNT` decimal(12,4) NOT NULL,
  `EXPE_EX_RATE` decimal(9,4) default NULL,
  `EXPE_RC_AMOUNT` decimal(12,4) default NULL,
  `EXPE_BILL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_BILL_STATUS` tinyint(4) default NULL,
  `EXPE_INVOICE_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `EXPE_TAX_INVOICE_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `EXPE_INVOICE_DATE` date default NULL,
  `EXPE_INVOICE_AMOUNT` decimal(12,4) default NULL,
  `EXPE_INVOICE_STATUS` tinyint(4) default NULL,
  `EXPE_WRITE_OFF_AMOUNT` decimal(12,4) default NULL,
  `EXPE_WRITE_OFF_RC_AMOUNT` decimal(12,4) default NULL,
  `EXPE_WRITE_OFF_DATE` date default NULL,
  `EXPE_STATUS` tinyint(4) default '0',
  `EXPE_WRITEOFF_STATUS` tinyint(4) default NULL,
  `EXPE_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `EXPE_FORWARD_FLAG` tinyint(4) default '0',
  `FCON_ID` int(11) default NULL,
  `FCON_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `FCON_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_ID` int(11) default NULL,
  `PALI_LABEL` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_TRACK_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `BUEX_ID` int(11) default NULL,
  `EXPE_UPDATE_BY` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_UPDATE_TIME` datetime default NULL,
  `EXPE_INVOICE_BY` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_WRITE_OFF_BY` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_ALLOCATION_FLAG` tinyint(4) default '0',
  `EXPE_ALLOCATED_FLAG` tinyint(4) default '0',
  `EXPE_ID_M` int(11) default NULL,
  `CONS_ID_M` int(11) default NULL,
  `CONS_NO_M` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`EXPE_ID`),
  KEY `CONS_ID` (`CONS_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_EXPENSE_B`
--

CREATE TABLE IF NOT EXISTS `S_EXPENSE_B` (
  `EXPB_ID` int(11) NOT NULL auto_increment,
  `EXPE_ID` int(11) NOT NULL,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(16) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_SAIL_DATE` date default NULL,
  `CONS_BIZ_CLASS` char(1) collate utf8_unicode_ci default NULL,
  `CONS_BIZ_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CONS_SHIP_TYPE` char(4) collate utf8_unicode_ci default NULL,
  `CONS_CUST_ID` int(11) default NULL,
  `CONS_CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CHCL_ID` int(11) default NULL,
  `CHAR_ID` int(11) NOT NULL,
  `CHAR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CHAR_NAME_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `UNIT_ID` int(11) default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci NOT NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `EXPE_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `PATE_ID` int(11) default NULL,
  `PATE_CODE` CHAR(16) NOT NULL,
  `EXPE_DATE` date default NULL,
  `EXPE_UNIT_PRICE` decimal(12,4) default NULL,
  `EXPE_NUM` decimal(14,6) default '1.000000',
  `EXPE_NUM2` decimal(14,6) default '1.000000',
  `EXPE_INNER_PRICE` decimal(12,4) default NULL,
  `EXPE_INNER_AMOUNT` decimal(12,4) default NULL,
  `EXPE_COMMISSION` decimal(12,4) default NULL,
  `EXPE_COMMISSION_RATE` decimal(12,4) default NULL,
  `EXPE_TOTAL_AMOUNT` decimal(12,4) NOT NULL,
  `EXPE_EX_RATE` decimal(9,4) default NULL,
  `EXPE_RC_AMOUNT` decimal(12,4) default NULL,
  `EXPE_BILL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_BILL_STATUS` tinyint(4) default NULL,
  `EXPE_INVOICE_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `EXPE_TAX_INVOICE_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `EXPE_INVOICE_DATE` date default NULL,
  `EXPE_INVOICE_AMOUNT` decimal(12,4) default NULL,
  `EXPE_INVOICE_STATUS` tinyint(4) default NULL,
  `EXPE_WRITE_OFF_AMOUNT` decimal(12,4) default NULL,
  `EXPE_WRITE_OFF_RC_AMOUNT` decimal(12,4) default NULL,
  `EXPE_WRITE_OFF_DATE` date default NULL,
  `EXPE_STATUS` tinyint(4) default '0',
  `EXPE_WRITEOFF_STATUS` tinyint(4) default NULL,
  `EXPE_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `EXPE_FORWARD_FLAG` tinyint(4) default '0',
  `FCON_ID` int(11) default NULL,
  `FCON_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `FCON_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_ID` int(11) default NULL,
  `PALI_LABEL` varchar(32) collate utf8_unicode_ci default NULL,
  `PALI_TRACK_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `BUEX_ID` int(11) default NULL,
  `EXPE_UPDATE_BY` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_UPDATE_TIME` datetime default NULL,
  `EXPE_INVOICE_BY` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_WRITE_OFF_BY` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_ALLOCATION_FLAG` tinyint(4) default '0',
  `EXPE_ALLOCATED_FLAG` tinyint(4) default '0',
  `EXPE_ID_M` int(11) default NULL,
  `CONS_ID_M` int(11) default NULL,
  `CONS_NO_M` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`EXPB_ID`),
  KEY `CONS_ID` (`CONS_ID`),
  KEY `EXPE_ID` (`EXPE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_EX_RATE`
--

CREATE TABLE IF NOT EXISTS `S_EX_RATE` (
  `EXRA_ID` int(11) NOT NULL auto_increment,
  `EXRA_BASE_CURRENCY` char(3) collate utf8_unicode_ci NOT NULL,
  `EXRA_EX_CURRENCY` char(3) collate utf8_unicode_ci NOT NULL,
  `EXRA_START_DATE` date NOT NULL,
  `EXRA_END_DATE` date default NULL,
  `EXRA_RATE` decimal(9,4) NOT NULL,
  `ACTIVE` tinyint(4) NOT NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`EXRA_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_INTEREST_RATE`
--

CREATE TABLE IF NOT EXISTS `S_INTEREST_RATE` (
  `INRA_ID` int(11) NOT NULL auto_increment,
  `INRA_CURRENCY` char(3) collate utf8_unicode_ci NOT NULL,
  `INRA_START_DATE` date NOT NULL,
  `INRA_END_DATE` date default NULL,
  `INRA_RATE` decimal(9,4) NOT NULL,
  `INRA_TYPE` tinyint(4) default '1',
  `ACTIVE` tinyint(4) NOT NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`INRA_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_INVOICE`
--

CREATE TABLE IF NOT EXISTS `S_INVOICE` (
  `INVO_ID` int(11) NOT NULL auto_increment,
  `INVO_NO` varchar(32) collate utf8_unicode_ci NOT NULL,
  `INVO_TAX_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `INVO_PAYMENT_TYPE` tinyint(4) default NULL,
  `INVO_TITLE` varchar(64) collate utf8_unicode_ci NOT NULL,
  `INVO_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `INVO_CHECK_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_DATE` date default NULL,
  `INVO_DUE_DATE` date default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `INVO_EX_RATE` decimal(9,4) default NULL,
  `INVO_AMOUNT` decimal(12,2) default NULL,
  `INVO_AMOUNT_CAPITAL` varchar(200) collate utf8_unicode_ci default NULL,
  `INVO_AMOUNT_CAPITAL_EN` varchar(200) collate utf8_unicode_ci default NULL,
  `INVO_AMOUNT_WRITE_OFF` decimal(12,2) default NULL,
  `INVO_BANK` varchar(64) collate utf8_unicode_ci default NULL,
  `INVO_ACCOUNT` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_BIZ_CLASS` char(1) collate utf8_unicode_ci default NULL,
  `INVO_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `INVO_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_BL_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `INVO_SAIL_DATE` date default NULL,
  `INVO_POL` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_POD` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_DELIVERY_PLACE` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_OPERATOR` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `INVO_ISSUER` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_ISSUE_DATE` date default NULL,
  `INVO_CHECKER` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_CHECK_DATE` date default NULL,
  `INVO_SIGNER` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_SING_DATE` date default NULL,
  `INVO_CONS_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `INVO_CARGO_NAME` varchar(2000) collate utf8_unicode_ci default NULL,
  `INVO_CARGO_PACKAGES` varchar(64) collate utf8_unicode_ci default NULL,
  `INVO_CARGO_GROSS_WEIGHT` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_CARGO_MEASUREMENT` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_CONTAINERS_INFO` varchar(500) collate utf8_unicode_ci default NULL,
  `INVO_ENTRUST_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_PRINT_TIMES` int(11) default '0',
  `INVO_STATUS` tinyint(4) default '0',
  `INVO_WRITE_OFF_STATUS` tinyint(4) default '0',
  `INVO_PR_FLAG` tinyint(4) default '0',
  `INVO_WRITE_OFF_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `INVO_WRITE_OFF_BY` int(11) default NULL,
  `INVO_WRITE_OFF_DATE` date default NULL,
  `VOUC_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `INVO_DEBITNOTE_FLAG` tinyint(4) default '0',
  `INVO_UPLOAD_FLAG` tinyint(4) NOT NULL default '0',
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(200) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(200) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`INVO_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_INVOICE_ENTRY`
--

CREATE TABLE IF NOT EXISTS `S_INVOICE_ENTRY` (
  `INEN_ID` int(11) NOT NULL auto_increment,
  `INVO_ID` int(11) NOT NULL,
  `CHAR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CHAR_NAME_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `INEN_UNIT_PRICE` decimal(12,4) default NULL,
  `INEN_NUM` decimal(12,4) default '1.0000',
  `INEN_TOTAL_AMOUNT` decimal(12,4) default '0.0000',
  `INEN_EX_RATE` decimal(9,4) default NULL,
  `EXPE_COMMISSION` decimal(12,4) default NULL,
  `EXPE_COMMISSION_RATE` decimal(12,4) default NULL,
  `INEN_INVOICE_AMOUNT` decimal(12,4) default NULL,
  `INEN_PAYMENT_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `EXPE_ID` int(11) default NULL,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`INEN_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_INVOICE_ITEM`
--

CREATE TABLE IF NOT EXISTS `S_INVOICE_ITEM` (
  `INIT_ID` int(11) NOT NULL auto_increment,
  `INVO_ID` int(11) NOT NULL,
  `INVO_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_TAX_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_DATE` date default NULL,
  `EXPE_ID` int(11) NOT NULL,
  `EXPE_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_SAIL_DATE` date default NULL,
  `CUST_ID` int(11) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CHAR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CHAR_NAME_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `EXPE_UNIT_PRICE` decimal(12,4) default NULL,
  `EXPE_NUM` decimal(12,4) default NULL,
  `EXPE_COMMISSION` decimal(12,4) default NULL,
  `EXPE_COMMISSION_RATE` decimal(12,4) default NULL,
  `EXPE_TOTAL_AMOUNT` decimal(12,4) default NULL,
  `EXPE_INVOICE_AMOUNT` decimal(12,4) default NULL,
  `EXPE_EX_RATE` decimal(9,4) default NULL,
  `EXPE_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `INIT_INVOICE_AMOUNT_ORI` decimal(12,4) default NULL,
  `INIT_INVOICE_AMOUNT` decimal(12,4) default NULL,
  `INIT_INVOICE_AMOUNT_ORI_W` decimal(12,4) default NULL,
  `INIT_INVOICE_AMOUNT_W` decimal(12,4) default NULL,
  `INVO_CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `INIT_EX_RATE` decimal(9,4) default NULL,
  `INVO_EX_RATE` decimal(9,4) default NULL,
  `VOUC_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `INIT_WRITE_OFF_STATUS` tinyint(4) default '0',
  `INIT_WRITE_OFF_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `INIT_WRITE_OFF_BY` int(11) default NULL,
  `INIT_WRITE_OFF_DATE` date default NULL,
  `INIT_CANCEL_FLAG` tinyint(4) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`INIT_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_INVOICE_NO`
--

CREATE TABLE IF NOT EXISTS `S_INVOICE_NO` (
  `INNO_ID` int(11) NOT NULL auto_increment,
  `INNO_PREFIX` varchar(16) collate utf8_unicode_ci default NULL,
  `INNO_START_NO` bigint(20) NOT NULL,
  `INNO_END_NO` bigint(20) NOT NULL,
  `INNO_NEXT_NO` bigint(20) default NULL,
  `INNO_NUM_LEN` int(11) default NULL,
  `INNO_START_DATE` date default NULL,
  `ACTIVE` tinyint(4) NOT NULL default '0',
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`INNO_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `S_PR`
--

CREATE TABLE IF NOT EXISTS `S_PR` (
  `PR_ID` int(11) NOT NULL auto_increment,
  `PR_NO` varchar(32) collate utf8_unicode_ci NOT NULL,
  `PR_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_BANK` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ACCOUNT` varchar(32) collate utf8_unicode_ci default NULL,
  `PR_AMOUNT` decimal(12,2) NOT NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci NOT NULL,
  `PR_EX_RATE` decimal(9,4) default NULL,
  `PR_PAY_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `PR_PAYMENT_TYPE` int(11) default NULL,
  `PR_BANK` varchar(32) collate utf8_unicode_ci default NULL,
  `PR_ACCOUNT` varchar(32) collate utf8_unicode_ci default NULL,
  `PR_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `PR_FIN_APPROVE_BY` int(11) default NULL,
  `PR_FIN_APPROVE_DATE` date default NULL,
  `PR_APPROVE_BY` int(11) default NULL,
  `PR_APPROVE_DATE` date default NULL,
  `PR_STATUS` tinyint(4) default NULL,
  `PR_DATE` date default NULL,
  `PR_PRINT_FLAG` tinyint(4) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(200) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(200) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`PR_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `S_PR_ITEM`
--

CREATE TABLE IF NOT EXISTS `S_PR_ITEM` (
  `PRIT_ID` int(11) NOT NULL auto_increment,
  `PR_ID` int(11) NOT NULL,
  `INVO_ID` int(11) NOT NULL,
  `INVO_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_TAX_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_DATE` date default NULL,
  `INVO_DUE_DATE` date default NULL,
  `INVO_AMOUNT` decimal(12,4) default NULL,
  `INVO_AMOUNT_WRITE_OFF` decimal(12,4) default NULL,
  `PR_AMOUNT` decimal(12,4) default NULL,
  `INVO_BANK` varchar(64) collate utf8_unicode_ci default NULL,
  `INOV_ACCOUNT` varchar(32) collate utf8_unicode_ci default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `INVO_EX_RATE` decimal(9,4) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `INVO_ISSUER` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_ISSUE_DATE` date default NULL,
  `INVO_CHECKER` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_CHECK_DATE` date default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`PRIT_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `S_VOUCHER`
--

CREATE TABLE IF NOT EXISTS `S_VOUCHER` (
  `VOUC_ID` int(11) NOT NULL auto_increment,
  `VOUC_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_BANK` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ACCOUNT` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_CHECK_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_BANK` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_ACCOUNT` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_AMOUNT` decimal(12,2) default NULL,
  `VOUC_WRITE_OFF_AMOUNT` decimal(12,2) default NULL,
  `VOUC_CARRY_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `VOUC_CARRY_AMOUNT` decimal(12,2) default NULL,
  `VOUC_FIX_AMOUNT` decimal(12,2) default NULL,
  `VOUC_DATE` date default NULL,
  `VOUC_GL_DATE` date default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `VOUC_EX_RATE` decimal(9,2) default NULL,
  `VOUC_BANK_RECIPT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_BANK_RECIPT_DATE` date default NULL,
  `VOUC_PAYMENT_TYPE` INT(11) NULL DEFAULT NULL,
  `VOUC_INVOICE_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `VOUC_TAX_INVOICE_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `VOUC_INVOICE_DATE` date default NULL,
  `VOUC_CONS_NO` varchar(5000) collate utf8_unicode_ci default NULL,
  `VOUC_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `VOUC_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_SAIL_DATE` date default NULL,
  `VOUC_CHECKER` int(11) default NULL,
  `VOUC_CHECK_DATE` date default NULL,
  `VOUC_STATUS` tinyint(4) default '0',
  `VOUC_WRITE_OFF_STATUS` int(11) NOT NULL,
  `VOUC_WRITE_OFF_NO` varchar(200) collate utf8_unicode_ci default NULL,
  `VOUC_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `VOUC_UPLOAD_FLAG` tinyint(4) NOT NULL default '0',
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  `ATTR1` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR2` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR3` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR4` varchar(4) collate utf8_unicode_ci default NULL,
  `ATTR5` varchar(5) collate utf8_unicode_ci default NULL,
  `ATTR6` varchar(6) collate utf8_unicode_ci default NULL,
  `ATTR7` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR8` varchar(32) collate utf8_unicode_ci default NULL,
  `ATTR9` varchar(200) collate utf8_unicode_ci default NULL,
  `ATTR10` varchar(200) collate utf8_unicode_ci default NULL,
  PRIMARY KEY  (`VOUC_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `S_VOUCHER_ITEM`
--

CREATE TABLE IF NOT EXISTS `S_VOUCHER_ITEM` (
  `VOIT_ID` int(11) NOT NULL auto_increment,
  `INIT_ID` int(11) NOT NULL,
  `INVO_ID` int(11) NOT NULL,
  `INVO_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_TAX_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_DATE` date default NULL,
  `EXPE_ID` int(11) NOT NULL,
  `EXPE_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_VESSEL` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_VOYAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_SAIL_DATE` date default NULL,
  `CUST_ID` int(11) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CHAR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `EXPE_UNIT_PRICE` decimal(12,4) default NULL,
  `EXPE_EX_RATE` decimal(9,4) default NULL,
  `EXPE_NUM` decimal(12,4) default NULL,
  `EXPE_COMMISSION` decimal(12,4) default NULL,
  `EXPE_COMMISSION_RATE` decimal(12,4) default NULL,
  `EXPE_TOTAL_AMOUNT` decimal(12,4) default NULL,
  `INIT_INVOICE_AMOUNT_ORI` decimal(12,4) default NULL,
  `INIT_INVOICE_AMOUNT` decimal(12,4) default NULL,
  `INIT_INVOICE_AMOUNT_ORI_W` decimal(12,4) default NULL,
  `INIT_INVOICE_AMOUNT_W` decimal(12,4) default NULL,
  `INVO_CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `INIT_EX_RATE` decimal(9,4) default NULL,
  `INVO_EX_RATE` decimal(9,4) default NULL,
  `VOIT_WRITE_OFF_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_ID` int(11) default NULL,
  `VOUC_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_DATE` date default NULL,
  `VOIT_AMOUNT_ORI_W` decimal(12,4) default NULL,
  `VOIT_AMOUNT_W` decimal(12,4) default NULL,
  `VOUC_CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `VOIT_EX_RATE` decimal(9,4) default NULL,
  `VOUC_EX_RATE` decimal(9,4) default NULL,
  `VOIT_AMOUNT_VOUC_W` decimal(12,4) default NULL,
  `VOIT_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `VOIT_CANCEL_FLAG` tinyint(4) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`VOIT_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `T_EXPORT_HISTORY`
--

CREATE TABLE IF NOT EXISTS `T_EXPORT_HISTORY` (
  `EXHI_ID` int(11) NOT NULL auto_increment,
  `EXHI_TYPE` tinyint(4) NOT NULL default '0',
  `EXHI_CHECK_DATE_F` date NOT NULL,
  `EXHI_CHECK_DATE_T` date NOT NULL,
  `EXHI_FILE_NAME` varchar(64) collate utf8_unicode_ci NOT NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`EXHI_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `T_INVOICE`
--

CREATE TABLE IF NOT EXISTS `T_INVOICE` (
  `INVO_ID` int(11) NOT NULL,
  `EXHI_ID` int(11) NOT NULL,
  `EXHI_FLAG` tinyint(4) NOT NULL default '0',
  `INVO_NO` varchar(32) collate utf8_unicode_ci NOT NULL,
  `INVO_TAX_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `INVO_TITLE` varchar(64) collate utf8_unicode_ci NOT NULL,
  `INVO_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `INVO_DATE` date default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `INVO_EX_RATE` decimal(9,4) default NULL,
  `INVO_AMOUNT` decimal(12,2) default NULL,
  `INVO_BL_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `INVO_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `INVO_CONS_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`INVO_ID`),
  KEY `EXHI_ID` (`EXHI_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `T_INVOICE_ITEM`
--

CREATE TABLE IF NOT EXISTS `T_INVOICE_ITEM` (
  `INIT_ID` int(11) NOT NULL,
  `EXHI_ID` int(11) NOT NULL,
  `EXHI_FLAG` tinyint(4) NOT NULL default '0',
  `EXHI_LINE` int(11) NOT NULL,
  `INVO_ID` int(11) NOT NULL,
  `INVO_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CHAR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CHAR_NAME_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `INIT_INVOICE_AMOUNT_ORI` decimal(12,2) default NULL,
  `INIT_INVOICE_AMOUNT` decimal(12,2) default NULL,
  `INVO_CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `INIT_EX_RATE` decimal(9,4) default NULL,
  `INVO_EX_RATE` decimal(9,4) default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`INIT_ID`),
  KEY `EXHI_ID` (`EXHI_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `T_VOUCHER`
--

CREATE TABLE IF NOT EXISTS `T_VOUCHER` (
  `VOUC_ID` int(11) NOT NULL,
  `EXHI_ID` int(11) NOT NULL,
  `EXHI_FLAG` tinyint(4) NOT NULL default '0',
  `VOUC_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_TYPE` char(1) collate utf8_unicode_ci NOT NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `VOUC_CHECK_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_BANK` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_ACCOUNT` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_AMOUNT` decimal(12,2) default NULL,
  `VOUC_WRITE_OFF_AMOUNT` decimal(12,2) default NULL,
  `VOUC_DATE` date default NULL,
  `VOUC_GL_DATE` date default NULL,
  `CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `VOUC_EX_RATE` decimal(9,2) default NULL,
  `VOUC_BANK_RECIPT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_BANK_RECIPT_DATE` date default NULL,
  `VOUC_PAYMENT_TYPE` tinyint(4) default NULL,
  `VOUC_INVOICE_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `VOUC_TAX_INVOICE_NO` varchar(500) collate utf8_unicode_ci default NULL,
  `VOUC_INVOICE_DATE` date default NULL,
  `VOUC_CONS_NO` varchar(5000) collate utf8_unicode_ci default NULL,
  `VOUC_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_SAIL_DATE` date default NULL,
  `VOUC_CHECKER` int(11) default NULL,
  `VOUC_CHECK_DATE` date default NULL,
  `VOUC_STATUS` tinyint(4) default '0',
  `VOUC_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `VOUC_UPLOAD_FLAG` tinyint(4) NOT NULL default '0',
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`VOUC_ID`),
  KEY `EXHI_ID` (`EXHI_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `T_VOUCHER_ITEM`
--

CREATE TABLE IF NOT EXISTS `T_VOUCHER_ITEM` (
  `VOIT_ID` int(11) NOT NULL,
  `EXHI_ID` int(11) NOT NULL,
  `EXHI_FLAG` tinyint(4) NOT NULL default '0',
  `EXHI_LINE` int(11) NOT NULL,
  `INIT_ID` int(11) NOT NULL,
  `INVO_ID` int(11) NOT NULL,
  `INVO_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_TAX_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `INVO_DATE` date default NULL,
  `EXPE_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_HBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CUST_SNAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CHAR_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `UNIT_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `EXPE_CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `EXPE_EX_RATE` decimal(9,4) default NULL,
  `EXPE_TOTAL_AMOUNT` decimal(12,2) default NULL,
  `VOIT_WRITE_OFF_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_ID` int(11) default NULL,
  `VOUC_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `VOUC_DATE` date default NULL,
  `VOUC_CURR_CODE` char(3) collate utf8_unicode_ci default NULL,
  `VOUC_EX_RATE` decimal(9,4) default NULL,
  `VOIT_AMOUNT_VOUC_W` decimal(12,2) default NULL,
  `VOIT_REMARKS` varchar(200) collate utf8_unicode_ci default NULL,
  `USER_ID` int(11) default NULL,
  `GROU_ID` int(11) default NULL,
  `CREATE_BY` int(11) default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_BY` int(11) default NULL,
  `MODIFY_TIME` datetime default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`VOIT_ID`),
  KEY `EXHI_ID` (`EXHI_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `W_BL_M`
--

CREATE TABLE IF NOT EXISTS `W_BL_M` (
  `WBLM_ID` int(11) NOT NULL auto_increment,
  `BL_ID` int(11) NOT NULL,
  `BL_NO` varchar(32) collate utf8_unicode_ci NOT NULL,
  `CONS_ID` int(11) NOT NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CUST_ID` int(11) NOT NULL,
  `CUST_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `WBLM_FIELD` varchar(32) collate utf8_unicode_ci NOT NULL,
  `WBLM_VALUE_OLD` varchar(5000) collate utf8_unicode_ci default NULL,
  `WBLM_VALUE_NEW` varchar(5000) collate utf8_unicode_ci default NULL,
  `WBLM_REASON` varchar(2000) collate utf8_unicode_ci default NULL,
  `WBLM_STATUS` tinyint(4) NOT NULL default '0',
  `WBLM_REJECT_REASON` varchar(2000) collate utf8_unicode_ci default NULL,
  `WBLM_REPLY_BY` varchar(32) collate utf8_unicode_ci default NULL,
  `REPLY_TIME` datetime default NULL,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_TIME` datetime default NULL,
  `WUSR_ID` int(11) default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci default NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`WBLM_ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `W_CONSIGN`
--

CREATE TABLE IF NOT EXISTS `W_CONSIGN` (
  `WCON_ID` int(11) NOT NULL auto_increment,
  `WCON_NO` varchar(32) collate utf8_unicode_ci NOT NULL,
  `CONS_ID` int(11) default NULL,
  `CONS_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_SHIP_TYPE` varchar(4) collate utf8_unicode_ci default 'FCL',
  `CONS_BIZ_CLASS` char(1) collate utf8_unicode_ci default NULL,
  `CONS_BIZ_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `CONS_REF_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_CONTRACT_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_DATE` date default NULL,
  `CUST_ID` int(11) default NULL,
  `CUST_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_SHIPPER` varchar(500) collate utf8_unicode_ci default NULL,
  `CONS_CONSIGNEE` varchar(500) collate utf8_unicode_ci default NULL,
  `CONS_NOTIFY_PARTY` varchar(500) collate utf8_unicode_ci default NULL,
  `CONS_NOTIFY_PARTY2` varchar(500) collate utf8_unicode_ci default NULL,
  `CONS_POL` int(11) default NULL,
  `CONS_POL_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_RECEIPT_PLACE` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_POD` int(11) default NULL,
  `CONS_POD_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_POT` int(11) default NULL,
  `CONS_POT_EN` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_DELIVERY_PLACE` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_DESTINATION` varchar(64) collate utf8_unicode_ci default NULL,
  `CONS_TRADE_COUNTRY` char(2) collate utf8_unicode_ci default NULL,
  `CONS_PRECARRIAGE` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_CARRIER` int(11) default NULL,
  `CONS_CARRIER_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `VESS_ID` int(11) default NULL,
  `VESS_NAME` varchar(64) collate utf8_unicode_ci default NULL,
  `VESS_NAME_CN` varchar(64) collate utf8_unicode_ci default NULL,
  `VOYA_ID` int(11) default NULL,
  `VOYA_NAME` varchar(16) collate utf8_unicode_ci default NULL,
  `CONS_MBL_NO` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_CARGO_DESC` varchar(1000) collate utf8_unicode_ci default NULL,
  `CONS_CARGO_MARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `CONS_TOTAL_PACKAGES` int(11) default NULL,
  `CONS_TOTAL_GROSS_WEIGHT` decimal(14,6) default NULL,
  `CONS_TOTAL_MEASUREMENT` decimal(14,6) default NULL,
  `CARG_BIG_FLAG` char(1) collate utf8_unicode_ci default NULL,
  `CARG_REETER_FLAG` char(1) collate utf8_unicode_ci default NULL,
  `CARG_DANAGER_FLAG` char(1) collate utf8_unicode_ci default NULL,
  `CONS_CONTAINERS_INFO` varchar(500) collate utf8_unicode_ci default NULL,
  `PACK_ID` int(11) default NULL,
  `PACK_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `TRAN_ID` int(11) default NULL,
  `TRAN_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `PATE_ID` int(11) default NULL,
  `PATE_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_TRANS_FLAG` tinyint(4) default '0',
  `CONS_PARTIAL_FLAG` tinyint(4) default '0',
  `CONS_ORIGINAL_BL_NUM` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_REMARKS` varchar(500) collate utf8_unicode_ci default NULL,
  `CONS_SERVICE_REQUIRED` varchar(32) collate utf8_unicode_ci default NULL,
  `CONS_STATUS` tinyint(4) default '0',
  `CREATE_TIME` datetime default NULL,
  `MODIFY_TIME` datetime default NULL,
  `WUSR_ID` int(11) default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`WCON_ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `W_INQUIRY`
--

CREATE TABLE IF NOT EXISTS `W_INQUIRY` (
  `WINQ_ID` int(11) NOT NULL auto_increment,
  `WINQ_CARGO_DESC` text collate utf8_unicode_ci,
  `WINQ_CARGO_PACKAGES` int(11) default NULL,
  `WINQ_CARGO_GW` decimal(14,6) default NULL,
  `WINQ_CARGO_MEASUREMENT` decimal(14,6) default NULL,
  `WINQ_RECEIPT_PLACE` varchar(200) collate utf8_unicode_ci default NULL,
  `WINQ_DELIVERY_PLACE` varchar(200) collate utf8_unicode_ci default NULL,
  `WINQ_POL` int(11) default NULL,
  `WINQ_POL_EN` varchar(200) collate utf8_unicode_ci default NULL,
  `WINQ_POD` int(11) default NULL,
  `WINQ_POD_EN` varchar(200) collate utf8_unicode_ci default NULL,
  `TRAN_ID` int(11) default NULL,
  `TRAN_CODE` varchar(32) collate utf8_unicode_ci default NULL,
  `PATE_ID` int(11) default NULL,
  `PATE_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `WINQ_BIZ_TYPE` char(1) collate utf8_unicode_ci default NULL,
  `WINQ_REMARKS` text collate utf8_unicode_ci,
  `CREATE_TIME` datetime default NULL,
  `MODIFY_TIME` datetime default NULL,
  `WINQ_STATUS` tinyint(4) default '0',
  `WUSR_ID` int(11) NOT NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`WINQ_ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `W_USER`
--

CREATE TABLE IF NOT EXISTS `W_USER` (
  `WUSR_ID` int(11) NOT NULL auto_increment,
  `WUSR_NAME` varchar(32) collate utf8_unicode_ci NOT NULL,
  `WUSR_PASSWORD` varchar(32) collate utf8_unicode_ci NOT NULL,
  `WUSR_FIRST_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `WUSR_LAST_NAME` varchar(32) collate utf8_unicode_ci default NULL,
  `WUSR_TITLE` varchar(32) collate utf8_unicode_ci default NULL,
  `WUSR_DEPT` varchar(32) collate utf8_unicode_ci default NULL,
  `WUSR_MOBILE` varchar(32) collate utf8_unicode_ci default NULL,
  `WUSR_EMAIL` varchar(200) collate utf8_unicode_ci NOT NULL,
  `WUSR_COMPANY_NAME` varchar(200) collate utf8_unicode_ci NOT NULL,
  `WUSR_ADDRESS` varchar(200) collate utf8_unicode_ci default NULL,
  `WUSR_CITY` varchar(32) collate utf8_unicode_ci default NULL,
  `WUSR_PROVINCE` varchar(32) collate utf8_unicode_ci default NULL,
  `WUSR_ZIP` varchar(16) collate utf8_unicode_ci default NULL,
  `WUSR_COUNTRY` varchar(200) collate utf8_unicode_ci default NULL,
  `WUSR_TEL` varchar(32) collate utf8_unicode_ci NOT NULL,
  `WUSR_FAX` varchar(32) collate utf8_unicode_ci default NULL,
  `WUSR_URL` varchar(200) collate utf8_unicode_ci default NULL,
  `WUSR_STATUS` tinyint(4) default '0',
  `WUSR_LAST_LOGIN_TIME` datetime default NULL,
  `CREATE_TIME` datetime default NULL,
  `CUST_ID` int(11) default NULL,
  `COMP_CODE` char(4) collate utf8_unicode_ci NOT NULL,
  `VERSION` int(11) NOT NULL default '0',
  `REMOVED` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`WUSR_ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- phpMyAdmin SQL Dump
-- version 3.3.0
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2010 年 05 月 30 日 20:04
-- 服务器版本: 5.0.67
-- PHP 版本: 5.2.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `fos`
--

--
-- 转存表中的数据 `P_TABLE_INFO`
--

INSERT INTO `P_TABLE_INFO` (`TAIN_ID`, `TAIN_TABLE_NAME`, `TAIN_FIELD_TYPE`, `TAIN_FIELD_NAME`) VALUES
(1, 'FConsign', 'id', 'consId'),
(2, 'FBl', 'id', 'blId'),
(3, 'FContract', 'id', 'fconId'),
(4, 'SExpense', 'id', 'expeId'),
(5, 'SInvoice', 'id', 'invoId'),
(6, 'SVoucher', 'id', 'voucId'),
(7, 'SPr', 'id', 'prId'),
(8, 'FConsign', 'no', 'consNo'),
(9, 'FBl', 'no', 'blNo'),
(10, 'FContract', 'no', 'fconNo'),
(11, 'SExpense', 'no', 'expeId'),
(12, 'SInvoice', 'no', 'invoNo'),
(13, 'SVoucher', 'no', 'voucNo'),
(14, 'SPr', 'no', 'prNo'),
(15, 'FConsign', 'op', 'consOperatorId'),
(16, 'FConsign', 'sales', 'consSalesRepId');

--
-- 转存表中的数据 `P_ACTION`
--

INSERT INTO `P_ACTION` (`ACT_NAME`, `ACT_SERVICE`, `ACT_METHOD`, `ACT_REMARK`) VALUES
('COUN_S', 'GCountryService', 'save', '国家保存'),
('COUN_Q', 'GCountryService', 'query', '国家查询'),
('UNIT_S', 'GUnitService', 'save', '单位保存'),
('UNIT_Q', 'GUnitService', 'query', '单位查询'),
('UNIT_C', 'GUnitService', 'queryUnitPlusContType', '单位加箱型查询'),
('CHAR_S', 'GChargeService', 'save', '费用项目保存'),
('CHAR_Q', 'GChargeService', 'query', '费用项目查询'),
('CHAR_C', 'GChargeService', 'queryChargeCommission', '代理费费用项目查询'),
('CHAR_X', 'GChargeService', 'complexQuery', '费用项目复杂查询'),
('CHAR_PERM_Q', 'GChargeService', 'queryChargeFilted', '费用项目查询(根据用户费用权限过滤)'),
('CHCL_S', 'GChargeClassService', 'save', '费用类别保存'),
('CHCL_Q', 'GChargeClassService', 'query', '费用类别查询'),
('COTY_S', 'GContainerTypeService', 'save', '箱型保存'),
('COTY_Q', 'GContainerTypeService', 'query', '箱型查询'),
('CURR_S', 'GCurrencyService', 'save', '币别保存'),
('CURR_Q', 'GCurrencyService', 'query', '币别查询'),
('DOTY_S', 'GDocumentTypeService', 'save', '文档类型保存'),
('DOTY_Q', 'GDocumentTypeService', 'query', '文档类型查询'),
('EXSE_S', 'GExchangeSettlementService', 'save', '结汇方式保存'),
('EXSE_Q', 'GExchangeSettlementService', 'query', '结汇方式查询'),
('ISTY_S', 'GIssueTypeService', 'save', '签单方式保存'),
('ISTY_Q', 'GIssueTypeService', 'query', '签单方式查询'),
('LETY_S', 'GLevyTypeService', 'save', '征免方式保存'),
('LETY_Q', 'GLevyTypeService', 'query', '征免方式查询'),
('LIPO_S', 'GLinePortService', 'save', '港口保存'),
('LIPO_Q', 'GLinePortService', 'query', '港口查询'),
('PORT_S', 'GPortService', 'save', '港口保存'),
('PORT_Q', 'GPortService', 'query', '港口查询'),
('COUN_PORT_S', 'GPortService', 'query', '国家查询港口'),
('PORT_X', 'GPortService', 'complexQuery', '港口复杂查询'),
('PACK_S', 'GPackageService', 'save', '包装种类保存'),
('PACK_Q', 'GPackageService', 'query', '包装种类查询'),
('PATE_S', 'GPaymentTermService', 'save', '支付条款保存'),
('PATE_Q', 'GPaymentTermService', 'query', '支付条款查询'),
('SEWA_S', 'GSettlementWayService', 'save', '结算方式保存'),
('SEWA_Q', 'GSettlementWayService', 'query', '结算方式查询'),
('SHLI_S', 'GShippingLineService', 'save', '航线保存'),
('SHLI_Q', 'GShippingLineService', 'query', '航线查询'),
('TRTE_S', 'GTradeTermService', 'save', '贸易条款保存'),
('TRTE_Q', 'GTradeTermService', 'query', '贸易条款查询'),
('TRTY_S', 'GTradeTypeService', 'save', '贸易类型保存'),
('TRTY_Q', 'GTradeTypeService', 'query', '贸易类型查询'),
('TTER_S', 'GTransTermService', 'save', '运输条款保存'),
('TTER_Q', 'GTransTermService', 'query', '运输条款查询'),
('TRAT_S', 'GTransTypeService', 'save', '运输类型保存'),
('TRAT_Q', 'GTransTypeService', 'query', '运输类型查询'),
('USAG_S', 'GUsageService', 'save', '用途保存'),
('USAG_Q', 'GUsageService', 'query', '用途查询'),
('VESS_S', 'GVesselService', 'save', '船名保存'),
('VESS_Q', 'GVesselService', 'query', '船名查询'),
('VESS_X', 'GVesselService', 'complexQuery', '船名复杂查询'),
('VOYA_S', 'GVoyageService', 'save', '航次保存'),
('VOYA_Q', 'GVoyageService', 'query', '航次查询'),
('VOYA_X', 'GVoyageService', 'complexQuery', '船期复杂查询'),
('VESS_VOYA_S', 'GVoyageService', 'query', '船名查询航次'),
('COCL_S', 'GContainerClassService', 'save', '箱类保存'),
('COCL_Q', 'GContainerClassService', 'query', '箱类查询'),
('CACL_S', 'GCargoClassService', 'save', '货物分类保存'),
('CACL_Q', 'GCargoClassService', 'query', '货物分类查询'),
('CATY_S', 'GCargoTypeService', 'save', '货物类型保存'),
('CATY_Q', 'GCargoTypeService', 'query', '货物类型查询'),
('VEHT_S', 'GVehicleTypeService', 'save', '车辆类型保存'),
('VEHT_Q', 'GVehicleTypeService', 'query', '车辆类型查询'),
('PLAC_S', 'GPlaceService', 'save', '港区保存'),
('PLAC_Q', 'GPlaceService', 'query', '港区查询'),

('CUCA_S', 'CCustomerCategoryService', 'save', '客户类型保存'),
('CUCA_Q', 'CCustomerCategoryService', 'query', '客户类型查询'),
('VECA_S', 'CVendorCategoryService', 'save', '供应商类型保存'),
('VECA_Q', 'CVendorCategoryService', 'query', '供应商类型查询'),
('CUST_S', 'CCustomerService', 'save', '客户保存'),
('CUST_Q', 'CCustomerService', 'query', '客户查询'),
('CUST_X', 'CCustomerService', 'complexQuery', '客户复杂查询'),
('CUST_M', 'CCustomerService', 'mergeCust', '客户供应商归并'),
('VEND_S', 'CVendorService', 'save', '供应商保存'),
('VEND_Q', 'CVendorService', 'query', '供应商查询'),
('COCO_S', 'PCompanyConfigService', 'save', '公司配置保存'),
('COCO_Q', 'PCompanyConfigService', 'query', '公司配置查询'),
('COBA_S', 'PCompanyBankAccountService', 'save', '公司银行账号保存'),
('COBA_Q', 'PCompanyBankAccountService', 'query', '公司银行账号查询'),
('USER_S', 'PUserService', 'save', '用户保存'),
('USER_Q', 'PUserService', 'query', '用户查询'),
('GROU_S', 'PUserService', 'saveGroup', '组保存'),
('GROU_Q', 'PUserService', 'queryGroup', '组查询'),
('ROLE_S', 'PUserService', 'saveRole', '角色保存'),
('ROLE_Q', 'PUserService', 'queryRole', '角色查询'),
('GRUS_Q', 'PUserService', 'queryGroupUser', '组用户查询'),
('USRO_Q', 'PUserService', 'queryUserRole', '用户角色查询'),
('USER_U', 'PUserService', 'updatePassword', '用户密码修改'),
('USER_UA', 'PUserService', 'updatePasswordByAdmin', '用户密码修改(管理员)'),
('LOGIN', 'PUserService', 'login', '登录'),
('USER_MY_Q', 'PUserService', 'queryCurrentUser', '获取当前用户信息'),
('LOGOUT', 'PUserService', 'logout', '退出登录'),
('USER_L', 'PUserService', 'listOnlineUsers', '在线用户查询'),
('USER_K', 'PUserService', 'killOnlineUser', '在线用户清理'),
('FUNC_S', 'PFunctionService', 'save', '功能点保存'),
('FUNC_Q', 'PFunctionService', 'query', '功能点查询'),
('ROFU_S', 'PRoleFunctionService', 'save', '角色功能点保存'),
('ROFU_Q', 'PRoleFunctionService', 'query', '角色功能点查询'),
('TETY_S', 'PTemplateTypeService', 'save', '打印模板类型保存'),
('TETY_Q', 'PTemplateTypeService', 'query', '打印模板类型查询'),
('TEMP_S', 'PTemplateService', 'save', '打印模板保存'),
('TEMP_Q', 'PTemplateService', 'query', '打印模板查询'),
('TEMP_D', 'PTemplateService', 'downTemplate', '下载打印模板'),
('TEMP_U', 'PTemplateService', 'uploadTemplate', '上传打印模板'),
('TEMP_E', 'PTemplateService', 'exportTemplate', '导出打印模板'),
('TEMP_I', 'PTemplateService', 'importTemplate', '模板导入数据'),
('TEMA_S', 'PTemplateMapService', 'save', '打印模板映射保存'),
('TEMA_Q', 'PTemplateMapService', 'query', '打印模板映射查询'),
('MESS_S', 'PMessageService', 'save', '消息保存'),
('MESS_Q', 'PMessageService', 'query', '消息查询'),
('MESS_X', 'PMessageService', 'queryOwn', '消息历史查询'),
('PRSH_S', 'CPriceSheetService', 'save', '价格单保存'),
('PRSH_Q', 'CPriceSheetService', 'query', '价格单查询'),
('PRLI_Q', 'CPriceLineService', 'query', '价格单行查询'),
('PRRE_Q', 'CPriceRecordService', 'query', '价格单行的记录查询'),
('PRSH_X', 'CPriceSheetService', 'complexQuery', '价格单复杂查询'),
('PRSH_U', 'CPriceSheetService', 'updateStatus', '更新价格单状态'),
('CUCO_Q', 'CCustomerContactService', 'query', '客户联系人查询'),
('SAQU_S', 'CSalesQuotaService', 'save', '业务员提成保存'),
('SAQU_Q', 'CSalesQuotaService', 'query', '业务员提成查询'),
('TATY_S', 'PTaskTypeService', 'save', '任务类型保存'),
('TATY_Q', 'PTaskTypeService', 'query', '任务类型查询'),
('ACLO_X', 'PActionLogService', 'complexQuery', '操作日志复杂查询'),
('MESU_S', 'PMessageSubscribeService', 'save', '消息订阅保存'),
('MESU_Q', 'PMessageSubscribeService', 'query', '消息订阅查询'),
('METO_S', 'PMessageTopicService', 'save', '消息主题保存'),
('METO_Q', 'PMessageTopicService', 'query', '消息主题查询'),
('USSE_S', 'PUserSettingService', 'save', '用户设置保存'),
('USSE_G', 'PUserSettingService', 'query', '用户设置查询'),
('USEP_S', 'PUserExpePermissionService', 'save', '用户费用权限保存'),
('USEP_Q', 'PUserExpePermissionService', 'query', '用户费用权限查询'),
('USEP_ALL_Q', 'PUserExpePermissionService', 'queryIncludeNotExist', '用户费用权限查询(所有)'),
('COMM_Q', 'CCommissionService', 'query', '业务员提成方案查询'),
('COMM_S', 'CCommissionService', 'save', '业务员提成方案保存'),
('COIT_Q', 'CCommissionItemService', 'query', '业务员提成方案明细查询'),
('COIT_S', 'CCommissionItemService', 'save', '业务员提成方案明细保存'),
('SACO_Q', 'CSalesCommissionService', 'query', '业务员提成方案设置查询'),
('SACO_S', 'CSalesCommissionService', 'save', '业务员提成方案设置保存'),
('SACO_R', 'CSalesCommissionService', 'calculate', '业务员提成统计'),
('SACO_D_R', 'CSalesCommissionService', 'querySalesCommissionDetail', '业务员提成明细查询'),
('CUSH_Q', 'CCustomerShipperService', 'query', '查询客户发货人'),
('CUSH_S', 'CCustomerShipperService', 'save', '保存客户发货人'),

('CONS_S', 'FConsignService', 'save', '委托保存'),
('CONS_Q', 'FConsignService', 'query', '委托查询'),
('CONS_U', 'FConsignService', 'updateStatusById', '委托状态修改'),
('CONS_X', 'FConsignService', 'complexQuery', '委托综合查询'),
('CONT_S', 'FContainerService', 'save', '箱保存'),
('CONT_Q', 'FContainerService', 'query', '箱查询'),
('CONS_CARGO_Q', 'FConsignService', 'queryByCargoId', '根据货物id查询委托'),
('CONS_BL_Q', 'FConsignService', 'queryByBlId', '根据提单id查询委托'),
('CONS_T_X', 'FConsignService', 'complexQueryTask', '查询委托和对应的任务'),
('CONS_CONTNO_X', 'FConsignService', 'complexQueryByContNo', '箱号查询委托'),
('CONS_CHECK_X', 'FConsignService', 'complexQueryCheck', '委托审核综合查询'),
('CONS_MNO_U', 'FConsignService', 'updateConsMasterNo', '主单号修改'),
('BOOK_U', 'FConsignService', 'updateStatusBookById', '定舱状态修改'),
('VOYA_U', 'FConsignService', 'updateSailDate', '更新开船日期和开船状态'),
('CONT_X', 'FContainerService', 'complexQueryByVoyaId', '根据航次id查询箱'),
('BL_S', 'FBlService', 'save', '提单保存'),
('BL_Q', 'FBlService', 'query', '提单查询'),
('BL_U', 'FBlService', 'updateStatusById', '提单状态修改'),
('BL_X', 'FBlService', 'complexQuery', '提单综合查询'),
('BL_M', 'FBlService', 'merge', '提单并单'),
('BL_M_C', 'FBlService', 'cancelMerge', '提单并单撤销'),
('BL_SP_C', 'FBlService', 'cancelSplit', '提单拆单撤销'),
('TRAN_S', 'FTransService', 'save', '运输保存'),
('TRAN_Q', 'FTransService', 'query', '运输查询'),
('TRTA_Q', 'FTransService', 'queryTask', '运输任务查询'),
('TRCA_Q', 'FTransService', 'queryCargo', '箱货物查询'),
('TRAN_U', 'FTransService', 'updateStatus', '运输修改'),
('WARE_S', 'FWarehouseService', 'save', '仓储保存'),
('WARE_Q', 'FWarehouseService', 'query', '仓储查询'),
('WACA_Q', 'FWarehouseService', 'queryCargo', '仓储货物查询'),
('INSP_S', 'FInspectionService', 'save', '报检保存'),
('INSP_Q', 'FInspectionService', 'query', '报检查询'),
('INSP_U', 'FInspectionService', 'updateStatus', '报检修改'),
('INDO_Q', 'FInspectionService', 'queryDoc', '报检单据查询'),
('INDO_U', 'FInspectionService', 'updateDocStatus', '报检单据修改'),
('CUDE_S', 'FCustomsDeclarationService', 'save', '报关单保存'),
('CUDE_Q', 'FCustomsDeclarationService', 'query', '报关单查询'),
('CUDE_U', 'FCustomsDeclarationService', 'updateStatus', '报关单状态更新'),
('CUDO_Q', 'FCustomsDeclarationService', 'queryDoc', '报关单据查询'),
('CUEN_Q', 'FCustomsDeclarationService', 'queryEntry', '报关货物查询'),
('CUDO_U', 'FCustomsDeclarationService', 'updateDocStatus', '报关单据修改'),
('CUDE_X', 'FCustomsDeclarationService', 'complexQuery', '报关综合查询'),
('CARG_S', 'FCargoService', 'save', '货物保存'),
('CARG_Q', 'FCargoService', 'query', '货物查询'),
('CARG_MID_Q', 'FCargoService', 'queryCargoByConsMasterId', '根据并单主单号查询货物列表'),
('DO_Q', 'FDoService', 'query', '提货单查询'),
('DO_U', 'FDoService', 'updateStatus', '提货单修改'),
('COCA_S', 'FContainerCargoService', 'save', '箱货物保存'),
('COCA_Q', 'FContainerCargoService', 'query', '箱货物查询'),
('SESH_S', 'FSecondShipService', 'save', '二程船保存'),
('SESH_Q', 'FSecondShipService', 'query', '二程船查询'),
('RABL_S', 'FRailwayBlService', 'save', '铁路运单保存'),
('RABL_Q', 'FRailwayBlService', 'query', '铁路运单查询'),
('RABL_U', 'FRailwayBlService', 'updateStatus', '铁路运单修改'),
('FDOC_S', 'FDocService', 'save', '单证保存'),
('FDOC_Q', 'FDocService', 'query', '单证查询'),
('FDOC_U', 'FDocService', 'updateStatus', '单证状态修改'),
('FDOC_X', 'FDocService', 'complexQuery', '单据复杂查询'),
('REAS_S', 'FReassignService', 'save', '改配漏装保存'),
('REAS_Q', 'FReassignService', 'query', '改配漏装查询'),
('FCON_S', 'FContractService', 'save', '合同保存'),
('FCON_Q', 'FContractService', 'query', '合同查询'),
('FCON_X', 'FContractService', 'complexQuery', '合同复杂查询'),
('PLAC_E', 'FContractService', 'complexQueryPlace', '根据合同导出地点列表'),
('FCON_V', 'FContractService', 'complexQueryByVoyaId', '根据航次id查询合同'),
('LOLI_S', 'FLoadingListService', 'save', '货物配船保存'),
('LOLI_Q', 'FLoadingListService', 'query', '货物配船查询'),
('VOYA_LOLI_Q', 'FLoadingListService', 'queryVoyageAndLoadingList', '航次和货物配船查询'),
('PALI_S', 'FPackingListService', 'save', '发货清单保存'),
('PALI_Q', 'FPackingListService', 'query', '发货清单查询'),
('PALI_X', 'FPackingListService', 'complexQuery', '发货清单复杂查询'),
('TRLI_S', 'FTransListService', 'save', '发货转运清单保存'),
('TRLI_Q', 'FTransListService', 'query', '发货转运清单查询'),
('TASK_S', 'FTaskService', 'save', '任务保存'),
('TASK_Q', 'FTaskService', 'query', '任务查询'),
('ATTACH_D', 'FAttachService', 'downAttach', '下载文档'),
('ATTACH_U', 'FAttachService', 'uploadAttach', '上传文档'),
('ATTACH_Q', 'FAttachService', 'query', '查询文档'),
('ATTACH_R', 'FAttachService', 'removeAttach', '删除文档'),

('EXPE_S', 'SExpenseService', 'save', '费用保存'),
('EXPE_Q', 'SExpenseService', 'query', '费用查询'),
('EXPE_X', 'SExpenseService', 'complexQuery', '费用综合查询'),
('EXPB_X', 'SExpenseService', 'complexQueryExpenseB', '费用修改历史综合查询'),
('EXPE_INV_Q', 'SExpenseService', 'invoiceCreateQuery', '费用生成发票查询'),
('EXPE_WROF_Q', 'SExpenseService', 'queryWriteOff', '费用已开票未核销查询'),
('EXPE_PERM_Q', 'SExpenseService', 'queryAndFilted', '费用查询(根据费用权限过滤)'),
('INVO_S', 'SInvoiceService', 'save', '发票保存'),
('INVO_Q', 'SInvoiceService', 'query', '发票查询'),
('INVO_U', 'SInvoiceService', 'checkInvoice', '发票审核'),
('INVO_C', 'SInvoiceService', 'cancelInvoice', '作废发票'),
('INVO_X', 'SInvoiceService', 'complexQuery', '发票综合查询'),
('INIT_Q', 'SInvoiceService', 'queryItem', '发票费用明细查询'),
('INIT_X', 'SInvoiceService', 'complexQueryInvoiceItem', '发票费用明细复杂查询'),
('INIT_PR_X', 'SInvoiceService', 'complexQueryInvoiceItemByPrId', '根据付款申请id查询发票费用明细'),
('INEN_Q', 'SInvoiceService', 'queryEntry', '发票打印明细查询'),
('EXRA_S', 'SExRateService', 'save', '汇率保存'),
('EXRA_Q', 'SExRateService', 'query', '汇率查询'),
('VOUC_S', 'SVoucherService', 'save', '收款单保存'),
('VOUC_Q', 'SVoucherService', 'query', '收款单查询'),
('VOUC_X', 'SVoucherService', 'complexQuery', '收款单综合查询'),
('VOUC_U', 'SVoucherService', 'updateStatus', '收款单状态修改'),
('VOIT_Q', 'SVoucherService', 'queryItem', '核销单明细查询'),
('VOUC_C', 'SVoucherService', 'cancelVoucher', '作废核销单'),
('PR_S', 'SPrService', 'save', '托收单/付款申请保存'),
('PR_Q', 'SPrService', 'query', '托收单/付款申请查询'),
('PR_U', 'SPrService', 'updateStatus', '托收单/付款申请状态修改'),
('PRIT_Q', 'SPrService', 'queryItem', '托收单/付款申请明细查询'),
('PR_X', 'SPrService', 'complexQuery', '托收单/付款申请综合查询'),
('BILL_S', 'SBillService', 'save', '对帐单保存'),
('BILL_Q', 'SBillService', 'query', '对帐单查询'),
('BILL_EQ', 'SBillService', 'queryForExport', '对帐单导出查询'),
('BILL_X', 'SBillService', 'complexQuery', '对帐单复杂查询'),
('BILL_U', 'SBillService', 'updateStatus', '对帐单状态更新'),
('BIIT_Q', 'SBillService', 'queryItem', '对帐单明细查询'),
('INNO_S', 'SInvoiceNoService', 'save', '税务发票编号保存'),
('INNO_Q', 'SInvoiceNoService', 'query', '税务发票编号查询'),
('INNO_U', 'SInvoiceNoService', 'updateActiveFlag', '税务发票编号启用'),
('INRA_S', 'SInterestRateService', 'save', '利息保存'),
('INRA_Q', 'SInterestRateService', 'query', '利息查询'),
('BUEX_S', 'SBulkExpenseService', 'save', '调度费用保存'),
('BUEX_Q', 'SBulkExpenseService', 'query', '调度费用查询'),
('BALA_Q', 'SBalanceService', 'query', '客户余额查询'),
('BALA_S', 'SBalanceService', 'save', '客户余额保存'),
('EXHI_S', 'TExportHistoryService', 'save', '导出历史保存'),
('EXHI_Q', 'TExportHistoryService', 'query', '导出历史查询'),
('EXHI_E', 'TExportHistoryService', 'dump', '导出财务数据'),

('EXPE_CONFIRM', 'FConsignService', 'queryForBill', '导出费用确认'),

('WCON_S', 'WConsignService', 'saveRealConsign', '(网上服务)临时委托转正式委托'),
('WS_CUST_S', 'WUserService', 'saveCustomer', '(网上服务)用户转正式客户'),
('WINQ_X', 'WInquiryService', 'complexQuery', '(网上服务)询价复杂查询'),
('WUSR_Q', 'WUserService', 'query', '(网上服务)用户查询'),
('WCON_X', 'WConsignService', 'complexQuery', '(网上服务)临时委托复杂查询'),
('WBLM_S', 'WBlMService', 'save', '(网上服务)提单修改申请保存'),
('WBLM_Q', 'WBlMService', 'query', '(网上服务)提单修改申请查询'),

('HCRE_S', 'CmsController', 'saveResource', '资源保存'),
('HCRE_Q', 'CmsController', 'queryResource', '资源查询'),
('FILE_U', 'CmsController', 'uploadFile', '文件上传'),
('CHAN_S', 'CmsController', 'saveChannel', '频道保存'),
('CHAN_Q', 'CmsController', 'queryChannel', '频道查询'),
('SITE_S', 'CmsController', 'saveSite', '站点保存'),
('SITE_Q', 'CmsController', 'querySite', '站点查询'),
('HCTE_S', 'CmsController', 'saveTemplate', '模板保存'),
('HCTE_Q', 'CmsController', 'queryTemplate', '模板查询'),
('HCAR_PV', 'CmsController', 'previewArticle', '文章预览'),
('HCAR_PB', 'CmsController', 'publish', '文章发布'),
('CHAN_PV', 'CmsController', 'previewChannel', '频道预览'),
('CHAN_PB', 'CmsController', 'publish', '频道发布'),

('WS_LOGIN', 'WUserService', 'login', '网上服务-登录'),
('WS_REG', 'WUserService', 'save', '网上服务-注册'),
('WS_WINQ_S', 'WInquiryService', 'save', '网上服务-询价保存'),
('WS_WINQ_Q', 'WInquiryService', 'query', '网上服务-询价查询'),
('WS_LOGOUT', 'WUserService', 'logout', '网上服务-退出登录'),
('WS_WCON_S', 'WConsignService', 'save', '网上服务-临时委托保存'),
('WS_WCON_Q', 'WConsignService', 'query', '网上服务-临时委托查询'),
('WS_CONS_X', 'FosService', 'complexQueryConsign', '网上服务-真实委托复杂查询'),
('WS_VOYA_X', 'FosService', 'complexQueryVoyage', '网上服务-船期复杂查询'),
('WS_BL_X', 'FosService', 'complexQueryBl', '网上服务-提单复杂查询'),
('WS_BILL_X', 'FosService', 'complexQueryBill', '网上服务-对帐单复杂查询'),
('WS_BIIT_Q', 'FosService', 'queryBillItem', '网上服务-对帐单明细查询'),
('WS_TASK_Q', 'FosService', 'queryTask', '网上服务-任务查询'),
('WS_WBLM_S', 'WBlMService', 'save', '网上服务-提单修改申请保存'),
('WS_WBLM_Q', 'WBlMService', 'query', '网上服务-提单修改申请查询'),

('REPT_BUCA', '', 'fconsign.rptdesign', '业务分类汇总统计表(按业务性质)'),
('REPT_BUDE', '', 'business_detail.rptdesign', '业务明细统计表'),
('REPT_ACAR', '', 'account_age_r.rptdesign', '应收账款账龄分析表'),
('REPT_ACAP', '', 'account_age_p.rptdesign', '应付账款账龄分析表'),
('REPT_CUEX', '', 'cust_expense.rptdesign', '客户应收费用统计'),
('REPT_VEEX', '', 'vendor_expense.rptdesign', '供应商应付费用统计'),
('REPT_BUCO', '', 'fconsign_other.rptdesign', '业务分类汇总统计表(其他统计类型)'),
('REPT_PROF', '', 'profit_detail.rptdesign', '利润明细分析表'),
('REPT_BUSI', '', 'business.rptdesign', '业务汇总统计表'),
('REPT_BUEX', '', 'profit.rptdesign', '利润汇总统计表'),
('REPT_SALES', '', 'sales_commission.rptdesign', '业务员提成统计'),
('REPT_WROF', '', 'write_off.rptdesign', '核销统计表'),
('REPT_ARA', '', 'expense_month_r.rptdesign', '应收账款回收情况统计表'),
('REPT_PAY_PLAN', '', 'payment_plan.rptdesign', '付款计划'),
('REPT_PRCH', '', 'profit_charge.rptdesign', '费用单票占利润比例统计'),
('REPT_PROF_SALES', '', 'profit_detail_sales.rptdesign', '业务员利润明细分析表'),
('REPT_PRCO', '', 'profit_commission.rptdesign', '代理费占利润比例统计'),
('REPT_PALI', '', 'packing_list.rptdesign', '出货港发货通知书'),
('REPT_VOCU', '', 'voyage_cust.rptdesign', '船期表'),
('REPT_PACU', '', 'packing_cust.rptdesign', '发货汇总清单-规格'),
('REPT_EXCO', '', 'packing_fee_confirm.rptdesign', '码头费用确认书'),
('REPT_PAHY', '', 'packing_hy.rptdesign', '发货汇总清单-发货方式'),
('REPT_PACBM', '', 'packing_cbm.rptdesign', '发货汇总清单-规格(体积)'),
('REPT_PAPI', '', 'packing_pieces.rptdesign', '发货汇总清单-规格(支数)'),
('REPT_PASL', '', 'packing_seamless.rptdesign', '发货汇总清单-西姆莱斯'),
('REPT_PAIV', '', 'packing_inventory.rptdesign', '盘存表'),
('REPT_SEEX', '', 'settlement_expense.rptdesign', '客户应收费用统计'),
('REPT_PAOD', '', 'packing_overdue.rptdesign', '超期表'),
('REPT_PAPL', '', 'packing_pieces_length.rptdesign', '发货汇总清单-规格(支数总长度)'),
('REPT_PTEU', '', 'profit_teu.rptdesign', '集装箱单箱利润统计表'),
('REPT_PAON', '', 'packing_overdue_now.rptdesign', '即时超期表'),
('REPT_PARE', '', 'packing_recent.rptdesign', '最近预计上船明细表'),
('REPT_BUSI_SALES', '', 'business_sales.rptdesign', '业务员业务量汇总表'),
('REPT_BUDS', '', 'business_detail_sales.rptdesign', '业务明细统计表(业务员)')
;


--
-- 转存表中的数据 `P_FUNCTION`
--

INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('00', 'FOS3.0', 'M', 1),
('0001', '集装箱', 'M', 1),
('000102', '进口整箱', 'M', 1),
('00010201', '委托', 'M', 1),
('0001020101', '查看委托', 'F', 1),
('0001020102', '编辑委托', 'F', 1),
('0001020103', '删除委托', 'F', 1),
('0001020104', '导出', 'F', 1),
('0001020105', '作废委托', 'F', 1),
('0001020113', '解锁', 'F', 1),
('00010202', '单证', 'M', 1),
('0001020201', '查看单证', 'F', 1),
('0001020202', '编辑单证', 'F', 1),
('0001020203', '删除单证', 'F', 1),
('00010203', '费用', 'M', 1),
('0001020301', '应收费用', 'M', 1),
('000102030101', '查看应收费用', 'F', 1),
('000102030102', '编辑应收费用', 'F', 1),
('000102030103', '删除应收费用', 'F', 1),
('0001020302', '应付费用', 'M', 1),
('000102030201', '查看应付费用', 'F', 1),
('000102030202', '编辑应付费用', 'F', 1),
('000102030203', '删除应付费用', 'F', 1),
('0001020304', '业务确认', 'F', 1),
('00010204', '陆运', 'M', 1),
('0001020401', '查看陆运单', 'F', 1),
('0001020402', '编辑陆运单', 'F', 1),
('0001020403', '删除陆运单', 'F', 1),
('0001020404', '导出陆运单', 'F', 1),
('00010205', '仓储', 'M', 1),
('0001020501', '查看仓储单', 'F', 1),
('0001020502', '编辑仓储单', 'F', 1),
('0001020503', '删除仓储单', 'F', 1),
('0001020504', '导出仓储单', 'F', 1),
('00010206', '报关', 'M', 1),
('0001020601', '查看报关单', 'F', 1),
('0001020602', '编辑报关单', 'F', 1),
('0001020603', '删除报关单', 'F', 1),
('0001020604', '导出报关单', 'F', 1),
('00010207', '报检', 'M', 1),
('0001020701', '查看报检单', 'F', 1),
('0001020702', '编辑报检单', 'F', 1),
('0001020703', '删除报检单', 'F', 1),
('0001020704', '导出报检单', 'F', 1),
('000103', '进口分拨', 'M', 1),
('00010301', '委托', 'M', 1),
('0001030101', '查看委托', 'F', 1),
('0001030102', '编辑委托', 'F', 1),
('0001030103', '删除委托', 'F', 1),
('0001030104', '导出', 'F', 1),
('0001030105', '作废委托', 'F', 1),
('0001030113', '解锁', 'F', 1),
('00010302', '单证', 'M', 1),
('0001030201', '查看单证', 'F', 1),
('0001030202', '编辑单证', 'F', 1),
('0001030203', '删除单证', 'F', 1),
('00010303', '费用', 'M', 1),
('0001030301', '应收费用', 'M', 1),
('000103030101', '查看应收费用', 'F', 1),
('000103030102', '编辑应收费用', 'F', 1),
('000103030103', '删除应收费用', 'F', 1),
('0001030302', '应付费用', 'M', 1),
('000103030201', '查看应付费用', 'F', 1),
('000103030202', '编辑应付费用', 'F', 1),
('000103030203', '删除应付费用', 'F', 1),
('0001030304', '业务确认', 'F', 1),
('00010304', '陆运', 'M', 1),
('0001030401', '查看陆运单', 'F', 1),
('0001030402', '编辑陆运单', 'F', 1),
('0001030403', '删除陆运单', 'F', 1),
('0001030404', '导出陆运单', 'F', 1),
('00010305', '仓储', 'M', 1),
('0001030501', '查看仓储单', 'F', 1),
('0001030502', '编辑仓储单', 'F', 1),
('0001030503', '删除仓储单', 'F', 1),
('0001030504', '导出仓储单', 'F', 1),
('00010306', '报关', 'M', 1),
('0001030601', '查看报关单', 'F', 1),
('0001030602', '编辑报关单', 'F', 1),
('0001030603', '删除报关单', 'F', 1),
('0001030604', '导出报关单', 'F', 1),
('00010307', '报检', 'M', 1),
('0001030701', '查看报检单', 'F', 1),
('0001030702', '编辑报检单', 'F', 1),
('0001030703', '删除报检单', 'F', 1),
('0001030704', '导出报检单', 'F', 1),
('00010313', '分拨申请', 'M', 1),
('0001031301', '查看分拨申请', 'F', 1),
('0001031302', '编辑分拨申请', 'F', 1),
('0001031304', '导出报检单', 'F', 1),

('000105', '整箱出口', 'M', 1),
('00010501', '委托', 'M', 1),
('0001050101', '查看委托', 'F', 1),
('0001050102', '编辑委托', 'F', 1),
('0001050103', '删除委托', 'F', 1),
('0001050104', '输出', 'F', 1),
('0001050105', '作废委托', 'F', 1),
('0001050113', '解锁', 'F', 1),
('00010502', '单证', 'M', 1),
('0001050201', '查看单证', 'F', 1),
('0001050202', '编辑单证', 'F', 1),
('0001050203', '删除单证', 'F', 1),
('00010503', '费用', 'M', 1),
('0001050301', '应收费用', 'M', 1),
('000105030101', '查看应收费用', 'F', 1),
('000105030102', '编辑应收费用', 'F', 1),
('000105030103', '删除应收费用', 'F', 1),
('0001050302', '应付费用', 'M', 1),
('000105030201', '查看应付费用', 'F', 1),
('000105030202', '编辑应付费用', 'F', 1),
('000105030203', '删除应付费用', 'F', 1),
('0001050304', '业务确认', 'F', 1),
('00010504', '陆运', 'M', 1),
('0001050401', '查看陆运单', 'F', 1),
('0001050402', '编辑陆运单', 'F', 1),
('0001050403', '删除陆运单', 'F', 1),
('0001050404', '导出陆运单', 'F', 1),
('00010505', '仓储', 'M', 1),
('0001050501', '查看仓储单', 'F', 1),
('0001050502', '编辑仓储单', 'F', 1),
('0001050503', '删除仓储单', 'F', 1),
('0001050504', '导出仓储单', 'F', 1),
('00010506', '报关', 'M', 1),
('0001050601', '查看报关单', 'F', 1),
('0001050602', '编辑报关单', 'F', 1),
('0001050603', '删除报关单', 'F', 1),
('0001050604', '导出报关单', 'F', 1),
('00010507', '报检', 'M', 1),
('0001050701', '查看报检单', 'F', 1),
('0001050702', '编辑报检单', 'F', 1),
('0001050703', '删除报检单', 'F', 1),
('0001050704', '导出报检单', 'F', 1),
('00010508', '提单', 'M', 1),
('0001050801', '查看提单', 'F', 1),
('0001050802', '编辑提单', 'F', 1),
('0001050803', '删除提单', 'F', 1),
('0001050804', '导出提单', 'F', 1),
('00010509', '装箱', 'M', 1),
('0001050901', '查看装箱单', 'F', 1),
('0001050902', '编辑装箱单', 'F', 1),
('0001050903', '删除装箱单', 'F', 1),
('0001050904', '导出装箱单', 'F', 1),
('00010510', '驳船订舱', 'M', 1),
('0001051001', '查看驳船订舱', 'F', 1),
('0001051002', '编辑驳船订舱', 'F', 1),
('0001051003', '删除驳船订舱', 'F', 1),
('0001051004', '导出驳船订舱', 'F', 1),
('00010511', '二程船', 'M', 1),
('0001051101', '查看二程船', 'F', 1),
('0001051102', '编辑二程船', 'F', 1),
('0001051103', '删除二程船', 'F', 1),
('00010512', '铁路运单', 'M', 1),
('0001051201', '查看铁路运单', 'F', 1),
('0001051202', '编辑铁路运单', 'F', 1),
('0001051203', '删除铁路运单', 'F', 1),
('000106', '拼箱出口', 'M', 1),
('00010601', '委托', 'M', 1),
('0001060101', '查看委托', 'F', 1),
('0001060102', '编辑委托', 'F', 1),
('0001060103', '删除委托', 'F', 1),
('0001060104', '输出', 'F', 1),
('0001060105', '作废委托', 'F', 1),
('0001060113', '解锁', 'F', 1),
('00010602', '单证', 'M', 1),
('0001060201', '查看单证', 'F', 1),
('0001060202', '编辑单证', 'F', 1),
('0001060203', '删除单证', 'F', 1),
('00010603', '费用', 'M', 1),
('0001060301', '应收费用', 'M', 1),
('000106030101', '查看应收费用', 'F', 1),
('000106030102', '编辑应收费用', 'F', 1),
('000106030103', '删除应收费用', 'F', 1),
('0001060302', '应付费用', 'M', 1),
('000106030201', '查看应付费用', 'F', 1),
('000106030202', '编辑应付费用', 'F', 1),
('000106030203', '删除应付费用', 'F', 1),
('0001060304', '业务确认', 'F', 1),
('00010604', '陆运', 'M', 1),
('0001060401', '查看陆运单', 'F', 1),
('0001060402', '编辑陆运单', 'F', 1),
('0001060403', '删除陆运单', 'F', 1),
('0001060404', '导出陆运单', 'F', 1),
('00010605', '仓储', 'M', 1),
('0001060501', '查看仓储单', 'F', 1),
('0001060502', '编辑仓储单', 'F', 1),
('0001060503', '删除仓储单', 'F', 1),
('0001060504', '导出仓储单', 'F', 1),
('00010606', '报关', 'M', 1),
('0001060601', '查看报关单', 'F', 1),
('0001060602', '编辑报关单', 'F', 1),
('0001060603', '删除报关单', 'F', 1),
('0001060604', '导出报关单', 'F', 1),
('00010607', '报检', 'M', 1),
('0001060701', '查看报检单', 'F', 1),
('0001060702', '编辑报检单', 'F', 1),
('0001060703', '删除报检单', 'F', 1),
('0001060704', '导出报检单', 'F', 1),
('00010608', '提单', 'M', 1),
('0001060801', '查看提单', 'F', 1),
('0001060802', '编辑提单', 'F', 1),
('0001060803', '删除提单', 'F', 1),
('0001060804', '导出提单', 'F', 1),
('00010609', '装箱', 'M', 1),
('0001060901', '查看装箱单', 'F', 1),
('0001060902', '编辑装箱单', 'F', 1),
('0001060903', '删除装箱单', 'F', 1),
('0001060904', '导出装箱单', 'F', 1),
('00010610', '驳船订舱', 'M', 1),
('0001061001', '查看驳船订舱', 'F', 1),
('0001061002', '编辑驳船订舱', 'F', 1),
('0001061003', '删除驳船订舱', 'F', 1),
('0001061004', '导出驳船订舱', 'F', 1),
('00010611', '二程船', 'M', 1),
('0001061101', '查看二程船', 'F', 1),
('0001061102', '编辑二程船', 'F', 1),
('0001061103', '删除二程船', 'F', 1),
('00010612', '铁路运单', 'M', 1),
('0001061201', '查看铁路运单', 'F', 1),
('0001061202', '编辑铁路运单', 'F', 1),
('0001061203', '删除铁路运单', 'F', 1),

('0002', '散货', 'M', 1),
('000202', '散货进口', 'M', 1),
('00020201', '委托', 'M', 1),
('0002020101', '查看委托', 'F', 1),
('0002020102', '编辑委托', 'F', 1),
('0002020103', '删除委托', 'F', 1),
('0002020104', '输出到货通知', 'F', 1),
('0002020105', '作废委托', 'F', 1),
('0002020109', '新增委托', 'F', 1),
('0002020113', '解锁', 'F', 1),
('00020202', '单证', 'M', 1),
('0002020201', '查看单证', 'F', 1),
('0002020202', '编辑单证', 'F', 1),
('0002020203', '删除单证', 'F', 1),
('00020203', '费用', 'M', 1),
('0002020301', '应收费用', 'M', 1),
('000202030101', '查看应收费用', 'F', 1),
('000202030102', '编辑应收费用', 'F', 1),
('000202030103', '删除应收费用', 'F', 1),
('0002020302', '应付费用', 'M', 1),
('000202030201', '查看应付费用', 'F', 1),
('000202030202', '编辑应付费用', 'F', 1),
('000202030203', '删除应付费用', 'F', 1),
('0002020304', '业务确认', 'F', 1),
('00020204', '陆运', 'M', 1),
('0002020401', '查看陆运单', 'F', 1),
('0002020402', '编辑陆运单', 'F', 1),
('0002020403', '删除陆运单', 'F', 1),
('0002020404', '导出陆运单', 'F', 1),
('00020205', '仓储', 'M', 1),
('0002020501', '查看仓储单', 'F', 1),
('0002020502', '编辑仓储单', 'F', 1),
('0002020503', '删除仓储单', 'F', 1),
('0002020504', '导出仓储单', 'F', 1),
('00020206', '报关', 'M', 1),
('0002020601', '查看报关单', 'F', 1),
('0002020602', '编辑报关单', 'F', 1),
('0002020603', '删除报关单', 'F', 1),
('0002020604', '导出报关单', 'F', 1),
('00020207', '报检', 'M', 1),
('0002020701', '查看报检单', 'F', 1),
('0002020702', '编辑报检单', 'F', 1),
('0002020703', '删除报检单', 'F', 1),
('0002020704', '导出报检单', 'F', 1),
('000203', '散货出口', 'M', 1),
('00020301', '委托', 'M', 1),
('0002030101', '查看委托', 'F', 1),
('0002030102', '编辑委托', 'F', 1),
('0002030103', '删除委托', 'F', 1),
('0002030104', '输出', 'F', 1),
('0002030105', '作废委托', 'F', 1),
('0002030109', '新增委托', 'F', 1),
('0002030113', '解锁', 'F', 1),
('00020302', '单证', 'M', 1),
('0002030201', '查看单证', 'F', 1),
('0002030202', '编辑单证', 'F', 1),
('0002030203', '删除单证', 'F', 1),
('00020303', '费用', 'M', 1),
('0002030301', '应收费用', 'M', 1),
('000203030101', '查看应收费用', 'F', 1),
('000203030102', '编辑应收费用', 'F', 1),
('000203030103', '删除应收费用', 'F', 1),
('0002030302', '应付费用', 'M', 1),
('000203030201', '查看应付费用', 'F', 1),
('000203030202', '编辑应付费用', 'F', 1),
('000203030203', '删除应付费用', 'F', 1),
('0002030304', '业务确认', 'F', 1),
('00020304', '陆运', 'M', 1),
('0002030401', '查看陆运单', 'F', 1),
('0002030402', '编辑陆运单', 'F', 1),
('0002030403', '删除陆运单', 'F', 1),
('0002030404', '导出陆运单', 'F', 1),
('00020305', '仓储', 'M', 1),
('0002030501', '查看仓储单', 'F', 1),
('0002030502', '编辑仓储单', 'F', 1),
('0002030503', '删除仓储单', 'F', 1),
('0002030504', '导出仓储单', 'F', 1),
('00020306', '报关', 'M', 1),
('0002030601', '查看报关单', 'F', 1),
('0002030602', '编辑报关单', 'F', 1),
('0002030603', '删除报关单', 'F', 1),
('0002030604', '导出报关单', 'F', 1),
('00020307', '报检', 'M', 1),
('0002030701', '查看报检单', 'F', 1),
('0002030702', '编辑报检单', 'F', 1),
('0002030703', '删除报检单', 'F', 1),
('0002030704', '导出报检单', 'F', 1),
('00020308', '提单', 'M', 1),
('0002030801', '查看提单', 'F', 1),
('0002030802', '编辑提单', 'F', 1),
('0002030803', '删除提单', 'F', 1),
('0002030804', '导出提单', 'F', 1),
('00020310', '驳船订舱', 'M', 1),
('0002031001', '查看驳船订舱', 'F', 1),
('0002031002', '编辑驳船订舱', 'F', 1),
('0002031003', '删除驳船订舱', 'F', 1),
('0002031004', '导出驳船订舱', 'F', 1),
('00020311', '二程船', 'M', 1),
('0002031101', '查看二程船', 'F', 1),
('0002031102', '编辑二程船', 'F', 1),
('0002031103', '删除二程船', 'F', 1),
('00020312', '铁路运单', 'M', 1),
('0002031201', '查看铁路运单', 'F', 1),
('0002031202', '编辑铁路运单', 'F', 1),
('0002031203', '删除铁路运单', 'F', 1),
('000204', '出口船期', 'M', 1),
('00020401', '查看船期', 'F', 1),
('00020402', '编辑船期', 'F', 1),
('00020403', '删除船期', 'F', 1),
('00020404', '导出船期', 'F', 1),

('0003', '空运', 'M', 1),
('000301', '浏览全部委托', 'M', 1),
('000302', '进口', 'M', 1),
('00030201', '委托', 'M', 1),
('0003020101', '查看委托', 'F', 1),
('0003020102', '编辑委托', 'F', 1),
('0003020103', '删除委托', 'F', 1),
('0003020104', '输出', 'F', 1),
('0003020105', '作废委托', 'F', 1),
('0003020113', '解锁', 'F', 1),
('00030202', '单证', 'M', 1),
('0003020201', '查看单证', 'F', 1),
('0003020202', '编辑单证', 'F', 1),
('0003020203', '删除单证', 'F', 1),
('00030203', '费用', 'M', 1),
('0003020301', '应收费用', 'M', 1),
('000302030101', '查看应收费用', 'F', 1),
('000302030102', '编辑应收费用', 'F', 1),
('000302030103', '删除应收费用', 'F', 1),
('0003020302', '应付费用', 'M', 1),
('000302030201', '查看应付费用', 'F', 1),
('000302030202', '编辑应付费用', 'F', 1),
('000302030203', '删除应付费用', 'F', 1),

('0003020304', '业务确认', 'F', 1),
('00030204', '陆运', 'M', 1),
('0003020401', '查看陆运单', 'F', 1),
('0003020402', '编辑陆运单', 'F', 1),
('0003020403', '删除陆运单', 'F', 1),
('0003020404', '导出陆运单', 'F', 1),
('00030205', '仓储', 'M', 1),
('0003020501', '查看仓储单', 'F', 1),
('0003020502', '编辑仓储单', 'F', 1),
('0003020503', '删除仓储单', 'F', 1),
('0003020504', '导出仓储单', 'F', 1),
('00030206', '报关', 'M', 1),
('0003020601', '查看报关单', 'F', 1),
('0003020602', '编辑报关单', 'F', 1),
('0003020603', '删除报关单', 'F', 1),
('0003020604', '导出报关单', 'F', 1),
('00030207', '报检', 'M', 1),
('0003020701', '查看报检单', 'F', 1),
('0003020702', '编辑报检单', 'F', 1),
('0003020703', '删除报检单', 'F', 1),
('0003020704', '导出报检单', 'F', 1),
('000303', '出口', 'M', 1),
('00030301', '委托', 'M', 1),
('0003030101', '查看委托', 'F', 1),
('0003030102', '编辑委托', 'F', 1),
('0003030103', '删除委托', 'F', 1),
('0003030104', '输出', 'F', 1),
('0003030105', '作废委托', 'F', 1),
('0003030113', '解锁', 'F', 1),
('00030302', '单证', 'M', 1),
('0003030201', '查看单证', 'F', 1),
('0003030202', '编辑单证', 'F', 1),
('0003030203', '删除单证', 'F', 1),
('00030303', '费用', 'M', 1),
('0003030301', '应收费用', 'M', 1),
('000303030101', '查看应收费用', 'F', 1),
('000303030102', '编辑应收费用', 'F', 1),
('000303030103', '删除应收费用', 'F', 1),
('0003030302', '应付费用', 'M', 1),
('000303030201', '查看应付费用', 'F', 1),
('000303030202', '编辑应付费用', 'F', 1),
('000303030203', '删除应付费用', 'F', 1),
('0003030304', '业务确认', 'F', 1),
('00030304', '陆运', 'M', 1),
('0003030401', '查看陆运单', 'F', 1),
('0003030402', '编辑陆运单', 'F', 1),
('0003030403', '删除陆运单', 'F', 1),
('0003030404', '导出陆运单', 'F', 1),
('00030305', '仓储', 'M', 1),
('0003030501', '查看仓储单', 'F', 1),
('0003030502', '编辑仓储单', 'F', 1),
('0003030503', '删除仓储单', 'F', 1),
('0003030504', '导出仓储单', 'F', 1),
('00030306', '报关', 'M', 1),
('0003030601', '查看报关单', 'F', 1),
('0003030602', '编辑报关单', 'F', 1),
('0003030603', '删除报关单', 'F', 1),
('0003030604', '导出报关单', 'F', 1),
('00030307', '报检', 'M', 1),
('0003030701', '查看报检单', 'F', 1),
('0003030702', '编辑报检单', 'F', 1),
('0003030703', '删除报检单', 'F', 1),
('0003030704', '导出报检单', 'F', 1),
('00030308', '提单', 'M', 1),
('0003030801', '查看提单', 'F', 1),
('0003030802', '编辑提单', 'F', 1),
('0003030803', '删除提单', 'F', 1),
('0003030804', '导出提单', 'F', 1),

('0004', '报关', 'M', 1),
('000401', '委托', 'M', 1),
('00040101', '查看委托', 'F', 1),
('00040102', '编辑委托', 'F', 1),
('00040103', '删除委托', 'F', 1),
('00040104', '输出', 'F', 1),
('00040105', '作废委托', 'F', 1),
('00040113', '解锁', 'F', 1),
('000402', '单证', 'M', 1),
('00040201', '查看单证', 'F', 1),
('00040202', '编辑单证', 'F', 1),
('00040203', '删除单证', 'F', 1),
('000403', '费用', 'M', 1),
('00040301', '应收费用', 'M', 1),
('0004030101', '查看应收费用', 'F', 1),
('0004030102', '编辑应收费用', 'F', 1),
('0004030103', '删除应收费用', 'F', 1),
('00040302', '应付费用', 'M', 1),
('0004030201', '查看应付费用', 'F', 1),
('0004030202', '编辑应付费用', 'F', 1),
('0004030203', '删除应付费用', 'F', 1),

('00040304', '业务确认', 'F', 1),
('000406', '报关单', 'M', 1),
('00040601', '查看报关单', 'F', 1),
('00040602', '编辑报关单', 'F', 1),
('00040603', '删除报关单', 'F', 1),
('00040604', '导出报关单', 'F', 1),

('0005', '报检', 'M', 1),
('000501', '委托', 'M', 1),
('00050101', '查看委托', 'F', 1),
('00050102', '编辑委托', 'F', 1),
('00050103', '删除委托', 'F', 1),
('00050104', '输出', 'F', 1),
('00050105', '作废委托', 'F', 1),
('00050113', '解锁', 'F', 1),
('000502', '单证', 'M', 1),
('00050201', '查看单证', 'F', 1),
('00050202', '修改单证', 'F', 1),
('00050203', '删除单证', 'F', 1),
('000503', '费用', 'M', 1),
('00050301', '应收费用', 'M', 1),
('0005030101', '查看应收费用', 'F', 1),
('0005030102', '编辑应收费用', 'F', 1),
('0005030103', '删除应收费用', 'F', 1),
('00050302', '应付费用', 'M', 1),
('0005030201', '查看应付费用', 'F', 1),
('0005030202', '编辑应付费用', 'F', 1),
('0005030203', '删除应付费用', 'F', 1),
('00050304', '业务确认', 'F', 1),
('000507', '报检单', 'M', 1),
('00050701', '查看报检单', 'F', 1),
('00050702', '编辑报检单', 'F', 1),
('00050703', '删除报检单', 'F', 1),
('00050704', '导出报检单', 'F', 1),
('0006', '单证跟踪', 'M', 1),
('000601', '查看单证', 'F', 1),
('000602', '编辑单证', 'F', 1),
('000604', '导出单证', 'F', 1),
('0007', '商务结算', 'M', 1),
('000701', '单票审核', 'M', 1),
('00070101', '查看', 'F', 1),
('00070104', '导出', 'F', 1),
('00070106', '财务审核', 'F', 1),
('00070107', '经理审核', 'F', 1),
('000702', '应收对账单', 'M', 1),
('00070201', '查看', 'F', 1),
('00070202', '编辑', 'F', 1),
('00070203', '删除', 'F', 1),
('00070204', '导出', 'F', 1),
('00070205', '作废', 'F', 1),
('000703', '应收账单', 'M', 1),
('00070301', '查看', 'F', 1),
('00070302', '编辑', 'F', 1),
('00070303', '删除', 'F', 1),
('00070304', '导出', 'F', 1),
('00070305', '作废', 'F', 1),
('00070306', '审核', 'F', 1),
('00070311', '修改税务发票号', 'F', 1),
('000704', '托收单', 'M', 1),
('00070401', '查看', 'F', 1),
('00070402', '编辑', 'F', 1),
('00070403', '删除', 'F', 1),
('00070404', '导出', 'F', 1),
('00070405', '作废', 'F', 1),
('000705', '收款核销', 'M', 1),
('00070501', '查看', 'F', 1),
('00070502', '编辑', 'F', 1),
('00070503', '删除', 'F', 1),
('00070504', '导出', 'F', 1),
('00070505', '作废', 'F', 1),
('00070506', '审核', 'F', 1),
('000706', '应付对账单', 'M', 1),
('00070601', '查看', 'F', 1),
('00070602', '编辑', 'F', 1),
('00070603', '删除', 'F', 1),
('00070604', '导出', 'F', 1),
('00070605', '作废', 'F', 1),
('000707', '应付账单', 'M', 1),
('00070701', '查看', 'F', 1),
('00070702', '编辑', 'F', 1),
('00070703', '删除', 'F', 1),
('00070704', '导出', 'F', 1),
('00070705', '作废', 'F', 1),
('00070706', '审核', 'F', 1),
('000708', '付款申请', 'M', 1),
('00070801', '查看', 'F', 1),
('00070802', '编辑', 'F', 1),
('00070803', '删除', 'F', 1),
('00070804', '导出', 'F', 1),
('00070805', '作废', 'F', 1),
('00070806', '财务审核', 'F', 1),
('00070807', '经理审核', 'F', 1),
('00070810', '核销', 'F', 1),
('000709', '付款核销', 'M', 1),
('00070901', '查看', 'F', 1),
('00070902', '编辑', 'F', 1),
('00070903', '删除', 'F', 1),
('00070904', '导出', 'F', 1),
('00070905', '作废', 'F', 1),
('00070906', '审核', 'F', 1),
('000710', '发票号码维护', 'M', 1),
('00071001', '新增', 'F', 1),
('00071002', '修改', 'F', 1),
('00071003', '删除', 'F', 1),
('00071006', '启用', 'F', 1),
('000711', '汇率设置', 'M', 1),
('00071101', '设置当前汇率', 'F', 1),
('00071102', '查询历史汇率', 'F', 1),
('000712', '会计期设置', 'M', 1),
('000713', '费用管理', 'M', 1),
('00071301', '应收费用', 'M', 1),
('0007130101', '查看应收费用', 'F', 1),
('0007130102', '编辑应收费用', 'F', 1),
('0007130103', '删除应收费用', 'F', 1),
('00071302', '应付费用', 'M', 1),
('0007130201', '查看应付费用', 'F', 1),
('0007130202', '编辑应付费用', 'F', 1),
('0007130203', '删除应付费用', 'F', 1),
('00071304', '业务确认', 'F', 1),
('000714', '利率设置', 'M', 1),
('00071401', '设置当前利率', 'F', 1),
('00071402', '查询历史利率', 'F', 1),
('000715', '财务接口', 'F', 1),
('0008', '统计分析', 'M', 1),
('000801', '业务量汇总表', 'M', 1),
('00080101', '查看', 'F', 1),
('00080104', '导出', 'F', 1),
('000802', '利润汇总表', 'M', 1),
('00080201', '查看', 'F', 1),
('00080204', '导出', 'F', 1),
('000803', '业务明细统计表', 'M', 1),
('00080301', '查看', 'F', 1),
('00080304', '导出', 'F', 1),
('000804', '利润分析表', 'M', 1),
('00080401', '查看', 'F', 1),
('00080404', '导出', 'F', 1),
('000805', '应收账龄分析表', 'M', 1),
('00080501', '查看', 'F', 1),
('00080504', '导出', 'F', 1),
('000806', '应付账龄分析表', 'M', 1),
('00080601', '查看', 'F', 1),
('00080604', '导出', 'F', 1),
('000807', '应收费用统计', 'M', 1),
('00080701', '查看', 'F', 1),
('00080704', '导出', 'F', 1),
('000808', '应付费用统计', 'M', 1),
('00080801', '查看', 'F', 1),
('00080804', '导出', 'F', 1),
('000809', '核销明细统计', 'M', 1),
('00080901', '查看', 'F', 1),
('00080904', '导出', 'F', 1),
('000810', '销售员提成统计', 'M', 1),
('00081001', '查看', 'F', 1),
('00081004', '导出', 'F', 1),
('000811', '应收账款回收情况分析表', 'M', 1),
('00081101', '查看', 'F', 1),
('00081104', '导出', 'F', 1),
('000812', '应付账款回收情况分析表', 'M', 1),
('00081201', '查看', 'F', 1),
('00081204', '导出', 'F', 1),
('000814', '费用占单票利润百分比统计表', 'M', 1),
('00081401', '查看', 'F', 1),
('00081404', '导出', 'F', 1),
('000815', '付款计划', 'M', 1),
('00081501', '查看', 'F', 1),
('00081504', '导出', 'F', 1),
('000816', '业务员销售利润统计', 'M', 1),
('00081601', '查看', 'F', 1),
('00081604', '导出', 'F', 1),
('000817', '集装箱单箱利润统计表', 'M', 1),
('00081701', '查看', 'F', 1),
('00081704', '导出', 'F', 1),
('0009', '客户供应商管理', 'M', 1),
('000901', '客户供应商维护', 'M', 1),
('00090101', '查看', 'F', 1),
('00090102', '编辑', 'F', 1),
('00090103', '删除', 'F', 1),
('00090104', '导出', 'F', 1),
('00090105', '归并', 'F', 1),
('000902', '客户类别维护', 'M', 1),
('00090201', '查看', 'F', 1),
('00090202', '编辑', 'F', 1),
('00090203', '删除', 'F', 1),
('000903', '运价管理', 'M', 1),
('00090301', '查看', 'F', 1),
('00090302', '编辑', 'F', 1),
('00090303', '删除', 'F', 1),
('00090304', '导出', 'F', 1),
('000904', '销售员提成设置', 'M', 1),
('00090401', '查看', 'F', 1),
('00090402', '编辑', 'F', 1),
('00090403', '删除', 'F', 1),
('00090404', '导出', 'F', 1),
('0010', '基础信息', 'M', 1),
('001001', '船名', 'M', 1),
('00100101', '查看', 'F', 1),
('00100102', '编辑', 'F', 1),
('00100103', '删除', 'F', 1),
('001002', '国家', 'M', 1),
('00100201', '查看', 'F', 1),
('00100202', '编辑', 'F', 1),
('00100203', '删除', 'F', 1),
('00100204', '导出', 'F', 1),
('001003', '航线', 'M', 1),
('00100301', '查看', 'F', 1),
('00100302', '编辑', 'F', 1),
('00100303', '删除', 'F', 1),
('001004', '港口', 'M', 1),
('00100401', '查看', 'F', 1),
('00100402', '编辑', 'F', 1),
('00100403', '删除', 'F', 1),
('001005', '空港', 'M', 1),
('00100501', '查看', 'F', 1),
('00100502', '编辑', 'F', 1),
('00100503', '删除', 'F', 1),
('001006', '计费单位', 'M', 1),
('00100601', '查看', 'F', 1),
('00100602', '编辑', 'F', 1),
('00100603', '删除', 'F', 1),
('001007', '包装种类', 'M', 1),
('00100701', '查看', 'F', 1),
('00100702', '编辑', 'F', 1),
('00100703', '删除', 'F', 1),
('001008', '箱类', 'M', 1),
('00100801', '查看', 'F', 1),
('00100802', '编辑', 'F', 1),
('00100803', '删除', 'F', 1),
('001009', '箱型', 'M', 1),
('00100901', '查看', 'F', 1),
('00100902', '编辑', 'F', 1),
('00100903', '删除', 'F', 1),
('001010', '车辆类型', 'M', 1),
('00101001', '查看', 'F', 1),
('00101002', '编辑', 'F', 1),
('00101003', '删除', 'F', 1),
('001011', '货物种类', 'M', 1),
('00101101', '查看', 'F', 1),
('00101102', '编辑', 'F', 1),
('00101103', '删除', 'F', 1),
('001012', '品名', 'M', 1),
('00101201', '查看', 'F', 1),
('00101202', '编辑', 'F', 1),
('00101203', '删除', 'F', 1),
('001013', '贸易条款', 'M', 1),
('00101301', '查看', 'F', 1),
('00101302', '编辑', 'F', 1),
('00101303', '删除', 'F', 1),
('001014', '运输条款', 'M', 1),
('00101401', '查看', 'F', 1),
('00101402', '编辑', 'F', 1),
('00101403', '删除', 'F', 1),
('001015', '贸易方式', 'M', 1),
('00101501', '查看', 'F', 1),
('00101502', '编辑', 'F', 1),
('00101503', '删除', 'F', 1),
('001016', '用途', 'M', 1),
('00101601', '查看', 'F', 1),
('00101602', '编辑', 'F', 1),
('00101603', '删除', 'F', 1),
('001017', '征免性质', 'M', 1),
('00101701', '查看', 'F', 1),
('00101702', '编辑', 'F', 1),
('00101703', '删除', 'F', 1),
('001018', '结汇方式', 'M', 1),
('00101801', '查看', 'F', 1),
('00101802', '编辑', 'F', 1),
('00101803', '删除', 'F', 1),
('001019', '运输方式', 'M', 1),
('00101901', '查看', 'F', 1),
('00101902', '编辑', 'F', 1),
('00101903', '删除', 'F', 1),
('001020', '签单方式', 'M', 1),
('00102001', '查看', 'F', 1),
('00102002', '编辑', 'F', 1),
('00102003', '删除', 'F', 1),
('001021', '结算方式', 'M', 1),
('00102101', '查看', 'F', 1),
('00102102', '编辑', 'F', 1),
('00102103', '删除', 'F', 1),
('001022', '币种', 'M', 1),
('00102201', '查看', 'F', 1),
('00102202', '编辑', 'F', 1),
('00102203', '删除', 'F', 1),
('001023', '费用类别', 'M', 1),
('00102301', '查看', 'F', 1),
('00102302', '编辑', 'F', 1),
('00102303', '删除', 'F', 1),
('001024', '费用项目', 'M', 1),
('00102401', '查看', 'F', 1),
('00102402', '编辑', 'F', 1),
('00102403', '删除', 'F', 1),
('001025', '银行账户', 'M', 1),
('00102501', '查看', 'F', 1),
('00102502', '编辑', 'F', 1),
('00102503', '删除', 'F', 1),
('001026', '单证类型', 'M', 1),
('00102601', '查看', 'F', 1),
('00102602', '编辑', 'F', 1),
('00102603', '删除', 'F', 1),
('001027', '运费条款', 'M', 1),
('00102701', '查看', 'F', 1),
('00102702', '编辑', 'F', 1),
('00102703', '删除', 'F', 1),
('001028', '地点', 'M', 1),
('00102801', '查看', 'F', 1),
('00102802', '编辑', 'F', 1),
('00102803', '删除', 'F', 1),
('0011', '系统管理', 'M', 1),
('001101', '业务分组', 'M', 1),
('00110101', '查看', 'F', 1),
('00110102', '编辑', 'F', 1),
('00110103', '删除', 'F', 1),
('001102', '角色权限', 'M', 1),
('00110201', '查看', 'F', 1),
('00110202', '编辑', 'F', 1),
('00110203', '删除', 'F', 1),
('001103', '用户管理', 'M', 1),
('00110301', '查看', 'F', 1),
('00110302', '编辑', 'F', 1),
('00110303', '删除', 'F', 1),
('001104', '模板管理', 'M', 1),
('00110401', '查看', 'F', 1),
('00110402', '编辑', 'F', 1),
('00110403', '删除', 'F', 1),
('001105', '系统参数', 'M', 1),
('00110501', '查看', 'F', 1),
('00110502', '编辑', 'F', 1),
('00110503', '删除', 'F', 1),

('0013', '加工贸易', 'M', 1),
('001301', '委托', 'M', 1),
('00130101', '查看委托', 'F', 1),
('00130102', '编辑委托', 'F', 1),
('00130103', '删除委托', 'F', 1),
('00130104', '输出', 'F', 1),
('00130105', '作废委托', 'F', 1),
('00130113', '解锁', 'F', 1),
('001302', '单证', 'M', 1),
('00130201', '查看单证', 'F', 1),
('00130202', '修改单证', 'F', 1),
('00130203', '删除单证', 'F', 1),
('001303', '费用', 'M', 1),
('00130301', '应收费用', 'M', 1),
('0013030101', '查看应收费用', 'F', 1),
('0013030102', '编辑应收费用', 'F', 1),
('0013030103', '删除应收费用', 'F', 1),
('00130302', '应付费用', 'M', 1),
('0013030201', '查看应付费用', 'F', 1),
('0013030202', '编辑应付费用', 'F', 1),
('0013030203', '删除应付费用', 'F', 1),
('00130304', '业务确认', 'F', 1),

('0014', '减免税', 'M', 1),
('001401', '委托', 'M', 1),
('00140101', '查看委托', 'F', 1),
('00140102', '编辑委托', 'F', 1),
('00140103', '删除委托', 'F', 1),
('00140104', '输出', 'F', 1),
('00140105', '作废委托', 'F', 1),
('00140113', '解锁', 'F', 1),
('001402', '单证', 'M', 1),
('00140201', '查看单证', 'F', 1),
('00140202', '修改单证', 'F', 1),
('00140203', '删除单证', 'F', 1),
('001403', '费用', 'M', 1),
('00140301', '应收费用', 'M', 1),
('0014030101', '查看应收费用', 'F', 1),
('0014030102', '编辑应收费用', 'F', 1),
('0014030103', '删除应收费用', 'F', 1),
('00140302', '应付费用', 'M', 1),
('0014030201', '查看应付费用', 'F', 1),
('0014030202', '编辑应付费用', 'F', 1),
('0014030203', '删除应付费用', 'F', 1),
('00140304', '业务确认', 'F', 1),

('0015', '企业注册', 'M', 1),
('001501', '委托', 'M', 1),
('00150101', '查看委托', 'F', 1),
('00150102', '编辑委托', 'F', 1),
('00150103', '删除委托', 'F', 1),
('00150104', '输出', 'F', 1),
('00150105', '作废委托', 'F', 1),
('00150113', '解锁', 'F', 1),
('001502', '单证', 'M', 1),
('00150201', '查看单证', 'F', 1),
('00150202', '修改单证', 'F', 1),
('00150203', '删除单证', 'F', 1),
('001503', '费用', 'M', 1),
('00150301', '应收费用', 'M', 1),
('0015030101', '查看应收费用', 'F', 1),
('0015030102', '编辑应收费用', 'F', 1),
('0015030103', '删除应收费用', 'F', 1),
('00150302', '应付费用', 'M', 1),
('0015030201', '查看应付费用', 'F', 1),
('0015030202', '编辑应付费用', 'F', 1),
('0015030203', '删除应付费用', 'F', 1),
('00150304', '业务确认', 'F', 1);




