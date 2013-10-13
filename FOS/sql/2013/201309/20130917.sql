ALTER TABLE `F_ATTACH`
	ADD COLUMN `SECURITY_FLAG` TINYINT(1) NULL DEFAULT 0 AFTER `ATTACH_DESC`;

INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('00010214', '重要文件', 'M', 1),
('0001021401', '上传', 'F', 1),
('0001021402', '下载', 'F', 1),
('0001021403', '删除', 'F', 1),
('00010314', '重要文件', 'M', 1),
('0001031401', '上传', 'F', 1),
('0001031402', '下载', 'F', 1),
('0001031403', '删除', 'F', 1),
         
('00010514', '重要文件', 'M', 1),
('0001051401', '上传', 'F', 1),
('0001051402', '下载', 'F', 1),
('0001051403', '删除', 'F', 1),
         
('00010614', '重要文件', 'M', 1),
('0001061401', '上传', 'F', 1),
('0001061402', '下载', 'F', 1),
('0001061403', '删除', 'F', 1),
         
('00020214', '重要文件', 'M', 1),
('0002021401', '上传', 'F', 1),
('0002021402', '下载', 'F', 1),
('0002021403', '删除', 'F', 1),
         
('00020314', '重要文件', 'M', 1),
('0002031401', '上传', 'F', 1),
('0002031402', '下载', 'F', 1),
('0002031403', '删除', 'F', 1),
         
('00030214', '重要文件', 'M', 1),
('0003021401', '上传', 'F', 1),
('0003021402', '下载', 'F', 1),
('0003021403', '删除', 'F', 1),
('00030314', '重要文件', 'M', 1),
('0003031401', '上传', 'F', 1),
('0003031402', '下载', 'F', 1),
('0003031403', '删除', 'F', 1),
         
('000414', '重要文件', 'M', 1),
('00041401', '上传', 'F', 1),
('00041402', '下载', 'F', 1),
('00041403', '删除', 'F', 1),

         
('000514', '重要文件', 'M', 1),
('00051401', '上传', 'F', 1),
('00051402', '下载', 'F', 1),
('00051403', '删除', 'F', 1);


insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010214', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001021401', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001021402', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001021403', 'CX');
                                                                              
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010314', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031401', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031402', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031403', 'CX');
                                                                              
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010514', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051401', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051402', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051403', 'CX');
                                                                              
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010614', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061401', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061402', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061403', 'CX');
                                                                              
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020214', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002021401', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002021402', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002021403', 'CX');
                                                                              
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020314', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031401', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031402', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031403', 'CX');
                                                                              
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030214', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003021401', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003021402', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003021403', 'CX');
                                                                              
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030314', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003031401', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003031402', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003031403', 'CX');
                                                                              
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000414', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00041401', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00041402', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00041403', 'CX');


insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000514', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00051401', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00051402', 'CX');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00051403', 'CX');


INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('0018', '海外业务', 'M', 1),
('001802', '海外业务进口', 'M', 1),
('00180201', '委托', 'M', 1),
('0018020101', '查看委托', 'F', 1),
('0018020102', '编辑委托', 'F', 1),
('0018020103', '删除委托', 'F', 1),
('0018020104', '输出到货通知', 'F', 1),
('0018020105', '作废委托', 'F', 1),
('0018020109', '新增委托', 'F', 1),
('0018020113', '解锁', 'F', 1),
('0018020120', '修改业务号', 'F', 1),
('00180202', '单证', 'M', 1),
('0018020201', '查看单证', 'F', 1),
('0018020202', '编辑单证', 'F', 1),
('0018020203', '删除单证', 'F', 1),
('00180203', '费用', 'M', 1),
('0018020301', '应收费用', 'M', 1),
('001802030101', '查看应收费用', 'F', 1),
('001802030102', '编辑应收费用', 'F', 1),
('001802030103', '删除应收费用', 'F', 1),
('0018020302', '应付费用', 'M', 1),
('001802030201', '查看应付费用', 'F', 1),
('001802030202', '编辑应付费用', 'F', 1),
('001802030203', '删除应付费用', 'F', 1),
('0018020304', '业务确认', 'F', 1),
('00180204', '陆运', 'M', 1),
('0018020401', '查看陆运单', 'F', 1),
('0018020402', '编辑陆运单', 'F', 1),
('0018020403', '删除陆运单', 'F', 1),
('0018020404', '导出陆运单', 'F', 1),
('00180205', '仓储', 'M', 1),
('0018020501', '查看仓储单', 'F', 1),
('0018020502', '编辑仓储单', 'F', 1),
('0018020503', '删除仓储单', 'F', 1),
('0018020504', '导出仓储单', 'F', 1),
('00180206', '报关', 'M', 1),
('0018020601', '查看报关单', 'F', 1),
('0018020602', '编辑报关单', 'F', 1),
('0018020603', '删除报关单', 'F', 1),
('0018020604', '导出报关单', 'F', 1),
('00180207', '报检', 'M', 1),
('0018020701', '查看报检单', 'F', 1),
('0018020702', '编辑报检单', 'F', 1),
('0018020703', '删除报检单', 'F', 1),
('0018020704', '导出报检单', 'F', 1),
('00180214', '重要文件', 'M', 1),
('0018021401', '上传', 'F', 1),
('0018021402', '下载', 'F', 1),
('0018021403', '删除', 'F', 1),
('001803', '海外业务出口', 'M', 1),
('00180301', '委托', 'M', 1),
('0018030101', '查看委托', 'F', 1),
('0018030102', '编辑委托', 'F', 1),
('0018030103', '删除委托', 'F', 1),
('0018030104', '输出', 'F', 1),
('0018030105', '作废委托', 'F', 1),
('0018030109', '新增委托', 'F', 1),
('0018030113', '解锁', 'F', 1),
('0018030120', '修改业务号', 'F', 1),
('00180302', '单证', 'M', 1),
('0018030201', '查看单证', 'F', 1),
('0018030202', '编辑单证', 'F', 1),
('0018030203', '删除单证', 'F', 1),
('00180303', '费用', 'M', 1),
('0018030301', '应收费用', 'M', 1),
('001803030101', '查看应收费用', 'F', 1),
('001803030102', '编辑应收费用', 'F', 1),
('001803030103', '删除应收费用', 'F', 1),
('0018030302', '应付费用', 'M', 1),
('001803030201', '查看应付费用', 'F', 1),
('001803030202', '编辑应付费用', 'F', 1),
('001803030203', '删除应付费用', 'F', 1),
('0018030304', '业务确认', 'F', 1),
('00180304', '陆运', 'M', 1),
('0018030401', '查看陆运单', 'F', 1),
('0018030402', '编辑陆运单', 'F', 1),
('0018030403', '删除陆运单', 'F', 1),
('0018030404', '导出陆运单', 'F', 1),
('00180305', '仓储', 'M', 1),
('0018030501', '查看仓储单', 'F', 1),
('0018030502', '编辑仓储单', 'F', 1),
('0018030503', '删除仓储单', 'F', 1),
('0018030504', '导出仓储单', 'F', 1),
('00180306', '报关', 'M', 1),
('0018030601', '查看报关单', 'F', 1),
('0018030602', '编辑报关单', 'F', 1),
('0018030603', '删除报关单', 'F', 1),
('0018030604', '导出报关单', 'F', 1),
('00180307', '报检', 'M', 1),
('0018030701', '查看报检单', 'F', 1),
('0018030702', '编辑报检单', 'F', 1),
('0018030703', '删除报检单', 'F', 1),
('0018030704', '导出报检单', 'F', 1),
('00180308', '提单', 'M', 1),
('0018030801', '查看提单', 'F', 1),
('0018030802', '编辑提单', 'F', 1),
('0018030803', '删除提单', 'F', 1),
('0018030804', '导出提单', 'F', 1),
('00180310', '驳船订舱', 'M', 1),
('0018031001', '查看驳船订舱', 'F', 1),
('0018031002', '编辑驳船订舱', 'F', 1),
('0018031003', '删除驳船订舱', 'F', 1),
('0018031004', '导出驳船订舱', 'F', 1),
('00180311', '二程船', 'M', 1),
('0018031101', '查看二程船', 'F', 1),
('0018031102', '编辑二程船', 'F', 1),
('0018031103', '删除二程船', 'F', 1),
('00180314', '重要文件', 'M', 1),
('0018031401', '上传', 'F', 1),
('0018031402', '下载', 'F', 1),
('0018031403', '删除', 'F', 1);
