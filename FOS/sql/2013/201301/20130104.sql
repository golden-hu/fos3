ALTER TABLE `S_PR_ITEM`
	ADD COLUMN `PR_AMOUNT_PAID` DECIMAL(12,4) NULL DEFAULT NULL AFTER `PR_AMOUNT`;
	
	
ALTER TABLE `S_INVOICE`
	ADD COLUMN `INVO_AMOUNT_PAID` DECIMAL(12,2) NULL DEFAULT NULL AFTER `INVO_AMOUNT_WRITE_OFF`;

