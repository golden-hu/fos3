ALTER TABLE `C_CUSTOMER`
	ADD COLUMN `CUST_ORG_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `CUST_SALES_NAME`,
	ADD COLUMN `CUST_TAX_NO` VARCHAR(32) NULL DEFAULT NULL AFTER `CUST_ORG_NO`,
	ADD COLUMN `CUST_REG_ADDRESS` VARCHAR(200) NULL DEFAULT NULL AFTER `CUST_TAX_NO`,
	ADD COLUMN `CUST_EX_CODE` VARCHAR(32) NULL DEFAULT NULL AFTER `CUST_REG_ADDRESS`;