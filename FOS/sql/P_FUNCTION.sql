delete from P_FUNCTION;

INSERT INTO `P_FUNCTION` (`FUNC_CODE`, `FUNC_NAME`, `FUNC_TYPE`, `ACTIVE`) VALUES
('00', 'FOS', 'M', 1),
('0001', '集装箱', 'M', 1),
('000101', '查看进口全部委托', 'F', 1),
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
('000102030208', '查看应付费用单价金额', 'F', 1),
('000102030209', '修改应付费用成本价', 'F', 1),
('0001020303', '代理费', 'M', 1),
('000102030301', '查看代理费', 'F', 1),
('000102030302', '编辑代理费', 'F', 1),
('000102030303', '删除代理费', 'F', 1),
('000102030308', '查看代理费单价金额', 'F', 1),
('000102030309', '修改代理费成本价', 'F', 1),
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
('000103030208', '查看应付费用单价金额', 'F', 1),
('000103030209', '修改应付费用成本价', 'F', 1),
('0001030303', '代理费', 'M', 1),
('000103030301', '查看代理费', 'F', 1),
('000103030302', '编辑代理费', 'F', 1),
('000103030303', '删除代理费', 'F', 1),
('000103030308', '查看代理费单价金额', 'F', 1),
('000103030309', '修改代理费成本价', 'F', 1),
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
('000104', '浏览出口全部委托', 'M', 1),
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
('000105030208', '查看应付费用单价金额', 'F', 1),
('000105030209', '修改应付费用成本价', 'F', 1),
('0001050303', '代理费', 'M', 1),
('000105030301', '查看代理费', 'F', 1),
('000105030302', '编辑代理费', 'F', 1),
('000105030303', '删除代理费', 'F', 1),
('000105030308', '查看代理费单价金额', 'F', 1),
('000105030309', '修改代理费成本价', 'F', 1),
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
('000106030208', '查看应付费用单价金额', 'F', 1),
('000106030209', '修改应付费用成本价', 'F', 1),
('0001060303', '代理费', 'M', 1),
('000106030301', '查看代理费', 'F', 1),
('000106030302', '编辑代理费', 'F', 1),
('000106030303', '删除代理费', 'F', 1),
('000106030308', '查看代理费单价金额', 'F', 1),
('000106030309', '修改代理费成本价', 'F', 1),
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
('000201', '查看散货所有委托', 'M', 1),
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
('000202030208', '查看应付费用单价金额', 'F', 1),
('000202030209', '修改应付费用成本价', 'F', 1),
('0002020303', '代理费', 'M', 1),
('000202030301', '查看代理费', 'F', 1),
('000202030302', '编辑代理费', 'F', 1),
('000202030303', '删除代理费', 'F', 1),
('000202030308', '查看代理费单价金额', 'F', 1),
('000202030309', '修改代理费成本价', 'F', 1),
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
('000203030208', '查看应付费用单价金额', 'F', 1),
('000203030209', '修改应付费用成本价', 'F', 1),
('0002030303', '代理费', 'M', 1),
('000203030301', '代理费', 'F', 1),
('000203030302', '代理费', 'F', 1),
('000203030303', '代理费', 'F', 1),
('000203030308', '查看代理费单价金额', 'F', 1),
('000203030309', '修改代理费成本价', 'F', 1),
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
('00020412', '配船', 'M', 1),
('0002041201', '查看配船信息', 'F', 1),
('0002041202', '编辑配船信息', 'F', 1),
('0002041203', '删除配船信息', 'F', 1),
('0002041204', '导出配载清单', 'F', 1),
('0002041205', '生成委托', 'F', 1),
('000205', '租船委托', 'M', 1),
('00020501', '查看已配租船委托', 'F', 1),
('00020502', '编辑租船委托', 'F', 1),
('00020503', '删除租船委托', 'F', 1),
('00020504', '导出租船委托', 'F', 1),
('00020505', '生成委托', 'F', 1),
('00020509', '查看待配租船委托', 'F', 1),
('000206', '发货清单', 'M', 1),
('00020601', '查看发货清单', 'F', 1),
('00020602', '编辑发货清单', 'F', 1),
('00020603', '删除发货清单', 'F', 1),
('00020604', '导出出货港发货通知书', 'F', 1),
('00020605', '费用', 'M', 1),
('0002060501', '应收费用', 'M', 1),
('000206050101', '查看应收费用', 'F', 1),
('000206050102', '编辑应收费用', 'F', 1),
('000206050103', '删除应收费用', 'F', 1),
('0002060502', '应付费用', 'M', 1),
('000206050201', '查看应付费用', 'F', 1),
('000206050202', '编辑应付费用', 'F', 1),
('000206050203', '删除应付费用', 'F', 1),
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
('000302030208', '查看应付费用单价金额', 'F', 1),
('000302030209', '修改应付费用成本价', 'F', 1),
('0003020303', '代理费', 'M', 1),
('000302030301', '代理费', 'F', 1),
('000302030302', '代理费', 'F', 1),
('000302030303', '删除代理费', 'F', 1),
('000302030308', '查看代理费单价金额', 'F', 1),
('000302030309', '修改代理费成本价', 'F', 1),
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
('000303030208', '查看应付费用单价金额', 'F', 1),
('000303030209', '修改应付费用成本价', 'F', 1),
('0003030303', '代理费', 'M', 1),
('000303030301', '代理费', 'F', 1),
('000303030302', '代理费', 'F', 1),
('000303030303', '删除代理费', 'F', 1),
('000303030308', '查看代理费单价金额', 'F', 1),
('000303030309', '修改代理费成本价', 'F', 1),
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
('0004030208', '查看应付费用单价金额', 'F', 1),
('0004030209', '修改应付费用成本价', 'F', 1),
('00040303', '代理费', 'M', 1),
('0004030301', '查看代理费', 'F', 1),
('0004030302', '编辑代理费', 'F', 1),
('0004030303', '删除代理费', 'F', 1),
('0004030308', '查看代理费单价金额', 'F', 1),
('0004030309', '修改代理费成本价', 'F', 1),
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
('0005030208', '查看应付费用单价金额', 'F', 1),
('0005030209', '修改应付费用成本价', 'F', 1),
('00050303', '代理费', 'M', 1),
('0005030301', '查看代理费', 'F', 1),
('0005030302', '编辑代理费', 'F', 1),
('0005030303', '删除代理费', 'F', 1),
('0005030308', '查看代理费单价金额', 'F', 1),
('0005030309', '修改代理费成本价', 'F', 1),
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
('0007130208', '查看应付费用单价金额', 'F', 1),
('0007130209', '修改应付费用成本价', 'F', 1),
('00071303', '代理费', 'M', 1),
('0007130301', '代理费', 'F', 1),
('0007130302', '编辑代理费', 'F', 1),
('0007130303', '删除代理费', 'F', 1),
('0007130308', '查看代理费单价金额', 'F', 1),
('0007130309', '修改代理费成本价', 'F', 1),
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