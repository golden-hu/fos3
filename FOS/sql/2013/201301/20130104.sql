ALTER TABLE `S_PR_ITEM`
	ADD COLUMN `PR_AMOUNT_PAID` DECIMAL(12,4) NULL DEFAULT NULL AFTER `PR_AMOUNT`;
	
	
ALTER TABLE `S_INVOICE`
	ADD COLUMN `INVO_AMOUNT_PAID` DECIMAL(12,2) NULL DEFAULT NULL AFTER `INVO_AMOUNT_WRITE_OFF`;

ALTER TABLE `S_EXPENSE`
	ADD COLUMN `EXPE_INVOICE_TITLE` VARCHAR(200) NULL DEFAULT NULL AFTER `EXPE_INVOICE_NO`;

ALTER TABLE `S_INVOICE_ITEM`
	ADD COLUMN `INVO_TITLE` VARCHAR(200) NULL DEFAULT NULL AFTER `VOUC_NO`;
