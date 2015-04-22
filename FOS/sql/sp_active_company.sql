
DELIMITER $$
create procedure sp_active_company(IN compCode VARCHAR(32),IN compName VARCHAR(256),IN accountID VARCHAR(256),IN accountName VARCHAR(256),IN accountEmail VARCHAR(256))
	begin
		declare userId int;
		declare roleId int;
		
		insert into P_COMPANY (COMP_CODE,COMP_NAME_CN,COMP_ACTIVE,COMP_START_DATE) values(compCode,
			compName,1,now());
			
		insert into P_USER (USER_NAME,USER_LOGIN_NAME,USER_EMAIL,USER_PASSWORD,
			USER_PASSWORD_MODIFY_DATE,UUID,ACTIVE,COMP_CODE,VERSION,REMOVED) 
			values(accountName,accountName,accountEmail,'e10adc3949ba59abbe56e057f20f883e',now(),accountID,1,compCode,0,0);
			
		select LAST_INSERT_ID() into userId;
			
		insert into P_ROLE (ROLE_NAME,ACTIVE,COMP_CODE,VERSION,REMOVED) values('系统管理员', 1, compCode,0,0);
		
		select LAST_INSERT_ID() into roleId;
		
		insert into P_USER_ROLE(USER_ID,ROLE_ID) values(userId,roleId);
		
		insert into P_USER_EXPE_PERMISSION (user_id, chcl_id, chcl_name, expe_type, usep_editable, usep_view_all, usep_edit_all, comp_code, version, removed) 
			values (userId, 0, '所有费用', 'R', 1, 1, 1, compCode, 0, 0);

		insert into P_USER_EXPE_PERMISSION (user_id, chcl_id, chcl_name, expe_type, usep_editable, usep_view_all, usep_edit_all, comp_code, version, removed) 
			values (userId, 0, '所有费用', 'P', 1, 1, 1, compCode, 0, 0);

		insert P_ROLE_FUNCTION(ROLE_ID,FUNC_CODE,COMP_CODE) values
		(roleId, '0011', compCode),
		(roleId, '001101', compCode),
		(roleId, '00110101', compCode),
		(roleId, '00110102', compCode),
		(roleId, '00110103', compCode),
		(roleId, '001102', compCode),
		(roleId, '00110201', compCode),
		(roleId, '00110202', compCode),
		(roleId, '00110203', compCode),
		(roleId, '001103', compCode),
		(roleId, '00110301', compCode),
		(roleId, '00110302', compCode),
		(roleId, '00110303', compCode),
		(roleId, '001104', compCode),
		(roleId, '00110401', compCode),
		(roleId, '00110402', compCode),
		(roleId, '00110503', compCode),
		(roleId, '001105', compCode),
		(roleId, '00110501', compCode),
		(roleId, '00110502', compCode),
		(roleId, '00110503', compCode);
		
end
$$
DELIMITER ; 


call sp_active_company('HT','海钛软件','simon','zhouxu.huang@hitisoft.com');
