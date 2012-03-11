-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2009 年 04 月 07 日 09:14
-- 服务器版本: 5.0.67
-- PHP 版本: 5.2.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `public_test`
--

--
-- 导出表中的数据 `C_CUSTOMER_CATEGORY`
--

INSERT INTO `C_CUSTOMER_CATEGORY` (`CUCA_NAME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('长期客户', 'HXRC', 0, 0),
('临时客户', 'HXRC', 0, 0);

--
-- 导出表中的数据 `C_VENDOR_CATEGORY`
--

INSERT INTO `C_VENDOR_CATEGORY` (`VECA_NAME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('临时供应商', 'HXRC', 0, 0),
('普通供应商', 'HXRC', 0, 0),
('签约供应商', 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_CARGO_CLASS`
--

INSERT INTO `G_CARGO_CLASS` (`CACL_CODE`, `CACL_NAME_CN`, `CACL_NAME_EN`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('01', '活动物', NULL, 1, 'HXRC', 0, 0),
('02', '肉及食用杂碎', NULL, 1, 'HXRC', 0, 0),
('03', '鱼及其他水生无脊椎动物', NULL, 1, 'HXRC', 0, 0),
('04', '乳；蛋；蜂蜜；其他食用动物产品', NULL, 1, 'HXRC', 0, 0),
('05', '其他动物产品', NULL, 1, 'HXRC', 0, 0),
('06', '活植物；茎、根；插花、簇叶', NULL, 1, 'HXRC', 0, 0),
('07', '食用蔬菜、根及块茎', NULL, 1, 'HXRC', 0, 0),
('08', '食用水果及坚果；甜瓜等水果的果皮', NULL, 1, 'HXRC', 0, 0),
('09', '咖啡、茶、马黛茶及调味香料', NULL, 1, 'HXRC', 0, 0),
('10', '谷物', NULL, 1, 'HXRC', 0, 0),
('11', '制粉工业产品；麦芽；淀粉等；面筋', NULL, 1, 'HXRC', 0, 0),
('12', '油籽；子仁；工业或药用植物；饲料', NULL, 1, 'HXRC', 0, 0),
('13', '虫胶；树胶、树脂及其他植物液、汁', NULL, 1, 'HXRC', 0, 0),
('14', '编结用植物材料；其他植物产品', NULL, 1, 'HXRC', 0, 0),
('15', '动、植物油、脂、蜡；精制食用油脂', NULL, 1, 'HXRC', 0, 0),
('16', '肉、鱼及其他水生无脊椎动物的制品', NULL, 1, 'HXRC', 0, 0),
('17', '糖及糖食', NULL, 1, 'HXRC', 0, 0),
('18', '可可及可可制品', NULL, 1, 'HXRC', 0, 0),
('19', '谷物粉、淀粉等或乳的制品；糕饼', NULL, 1, 'HXRC', 0, 0),
('20', '蔬菜、水果等或植物其他部分的制品', NULL, 1, 'HXRC', 0, 0),
('21', '杂项食品', NULL, 1, 'HXRC', 0, 0),
('22', '饮料、酒及醋', NULL, 1, 'HXRC', 0, 0),
('23', '食品工业的残渣及废料；配制的饲料', NULL, 1, 'HXRC', 0, 0),
('24', '烟草、烟草及烟草代用品的制品', NULL, 1, 'HXRC', 0, 0),
('25', '盐；硫磺；土及石料；石灰及水泥等', NULL, 1, 'HXRC', 0, 0),
('26', '矿砂、矿渣及矿灰', NULL, 1, 'HXRC', 0, 0),
('27', '矿物燃料、矿物油及其产品；沥青等', NULL, 1, 'HXRC', 0, 0),
('28', '无机化学品；贵金属等的化合物', NULL, 1, 'HXRC', 0, 0),
('29', '有机化学品', NULL, 1, 'HXRC', 0, 0),
('30', '药品', NULL, 1, 'HXRC', 0, 0),
('31', '肥料', NULL, 1, 'HXRC', 0, 0),
('32', '鞣料；著色料；涂料；油灰；墨水等', NULL, 1, 'HXRC', 0, 0),
('33', '精油及香膏；芳香料制品及化妆盥洗品', NULL, 1, 'HXRC', 0, 0),
('34', '洗涤剂、润滑剂、人造蜡、塑型膏等', NULL, 1, 'HXRC', 0, 0),
('35', '蛋白类物质；改性淀粉；胶；霉', NULL, 1, 'HXRC', 0, 0),
('36', '炸药；烟火；引火品；易燃材料制品', NULL, 1, 'HXRC', 0, 0),
('37', '照相及电影用品', NULL, 1, 'HXRC', 0, 0),
('38', '杂项化学产品', NULL, 1, 'HXRC', 0, 0),
('39', '塑料及其制品', NULL, 1, 'HXRC', 0, 0),
('40', '橡胶及其制品', NULL, 1, 'HXRC', 0, 0),
('41', '生皮（毛皮除外）及皮革', NULL, 1, 'HXRC', 0, 0),
('42', '皮革制品；旅行箱包；动物肠线制品', NULL, 1, 'HXRC', 0, 0),
('43', '毛皮、人造毛皮及其制品', NULL, 1, 'HXRC', 0, 0),
('44', '木及木制品；木炭', NULL, 1, 'HXRC', 0, 0),
('45', '软木及软木制品', NULL, 1, 'HXRC', 0, 0),
('46', '编结材料制品；篮筐及柳条编结品', NULL, 1, 'HXRC', 0, 0),
('47', '木浆等纤维状纤维素浆；废纸及纸板', NULL, 1, 'HXRC', 0, 0),
('48', '纸及纸板；纸浆、纸或纸板制品', NULL, 1, 'HXRC', 0, 0),
('49', '印刷品；手稿、打字稿及设计图纸', NULL, 1, 'HXRC', 0, 0),
('50', '蚕丝', NULL, 1, 'HXRC', 0, 0),
('51', '羊毛等动物毛；马毛纱线及其机织物', NULL, 1, 'HXRC', 0, 0),
('52', '棉花', NULL, 1, 'HXRC', 0, 0),
('53', '其他植物纤维；纸纱线及其机织物', NULL, 1, 'HXRC', 0, 0),
('54', '化学纤维长丝', NULL, 1, 'HXRC', 0, 0),
('55', '化学纤维短纤', NULL, 1, 'HXRC', 0, 0),
('56', '絮胎、毡呢及无纺织物；线绳制品等', NULL, 1, 'HXRC', 0, 0),
('57', '地毯及纺织材料的其他铺地制品', NULL, 1, 'HXRC', 0, 0),
('58', '特种机织物；簇绒织物；刺绣品等', NULL, 1, 'HXRC', 0, 0),
('59', '特种机织物；簇绒织物；刺绣品等', NULL, 1, 'HXRC', 0, 0),
('60', '针织物及钩编织物', NULL, 1, 'HXRC', 0, 0),
('61', '针织或钩编的服装及衣著附件', NULL, 1, 'HXRC', 0, 0),
('62', '非针织或非钩编的服装及衣著附件', NULL, 1, 'HXRC', 0, 0),
('63', '其他纺织制品；成套物品；旧纺织品', NULL, 1, 'HXRC', 0, 0),
('64', '鞋靴、护腿和类似品及其零件', NULL, 1, 'HXRC', 0, 0),
('65', '帽类及其零件', NULL, 1, 'HXRC', 0, 0),
('66', '伞、手杖、鞭子、马鞭及其零件', NULL, 1, 'HXRC', 0, 0),
('67', '加工羽毛及制品；人造炕@蝗朔　破', NULL, 1, 'HXRC', 0, 0),
('68', '矿物材料的制品', NULL, 1, 'HXRC', 0, 0),
('69', '陶瓷产品', NULL, 1, 'HXRC', 0, 0),
('70', '玻璃及其制品', NULL, 1, 'HXRC', 0, 0),
('71', '珠宝、贵金属及制品；仿首饰；硬币', NULL, 1, 'HXRC', 0, 0),
('72', '钢铁', NULL, 1, 'HXRC', 0, 0),
('73', '钢铁制品', NULL, 1, 'HXRC', 0, 0),
('74', '铜及其制品', NULL, 1, 'HXRC', 0, 0),
('75', '镍及其制品', NULL, 1, 'HXRC', 0, 0),
('76', '铝及其制品', NULL, 1, 'HXRC', 0, 0),
('78', '铅及其制品', NULL, 1, 'HXRC', 0, 0),
('79', '锌及其制品', NULL, 1, 'HXRC', 0, 0),
('80', '锡及其制品', NULL, 1, 'HXRC', 0, 0),
('81', '其他贱金属、金属陶瓷及其制品', NULL, 1, 'HXRC', 0, 0),
('82', '贱金属器具、利口器、餐具及零件', NULL, 1, 'HXRC', 0, 0),
('83', '贱金属杂项制品', NULL, 1, 'HXRC', 0, 0),
('84', '核反应堆、锅炉、机械器具及零件', NULL, 1, 'HXRC', 0, 0),
('85', '电机、电气、音像设备及其零附件', NULL, 1, 'HXRC', 0, 0),
('86', '铁道车辆；轨道装置；信号设备', NULL, 1, 'HXRC', 0, 0),
('87', '车辆及其零附件，但铁道车辆除外', NULL, 1, 'HXRC', 0, 0),
('88', '航空器、航天器及其零件', NULL, 1, 'HXRC', 0, 0),
('89', '船舶及浮动结构体', NULL, 1, 'HXRC', 0, 0),
('90', '光学、照相、医疗等设备及零附件', NULL, 1, 'HXRC', 0, 0),
('91', '钟表及其零件', NULL, 1, 'HXRC', 0, 0),
('92', '乐器及其零件、附件', NULL, 1, 'HXRC', 0, 0),
('93', '武器、弹药及其零件、附件', NULL, 1, 'HXRC', 0, 0),
('94', '家具；寝具等；灯具；活动房', NULL, 1, 'HXRC', 0, 0),
('95', '玩具、游戏或运动用品及其零附件', NULL, 1, 'HXRC', 0, 0),
('96', '杂项制品', NULL, 1, 'HXRC', 0, 0),
('97', '艺术品、收藏品及古物', NULL, 1, 'HXRC', 0, 0),
('98', '特殊交易品及未分类商品', NULL, 1, 'HXRC', 0, 0),
('99', '特殊交易品及未分类商品', NULL, 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_CHARGE_CLASS`
--

INSERT INTO `G_CHARGE_CLASS` (`CHCL_CODE`, `CHCL_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('21', '仓储保管-搬运装卸类', 1, 'HXRC', 0, 0),
('22', '保税监管类', 1, 'HXRC', 0, 0),
('23', '报关报检-报关类', 1, 'HXRC', 0, 0),
('24', '报关报检-报检类', 1, 'HXRC', 0, 0),
('25', '仓储保管-仓储类', 1, 'HXRC', 0, 0),
('26', '运费-干线类', 1, 'HXRC', 0, 0),
('27', '港区作业-港区类', 1, 'HXRC', 0, 0),
('28', '国外段类', 1, 'HXRC', 0, 0),
('29', '集疏港运输类', 1, 'HXRC', 0, 0),
('30', '港区作业-集装箱堆场/场站类', 1, 'HXRC', 0, 0),
('31', '集装箱管理类', 1, 'HXRC', 0, 0),
('32', '运费-佣金补贴分成类', 1, 'HXRC', 0, 0),
('33', '增值服务类', 1, 'HXRC', 0, 0),
('34', '运费-支线类', 1, 'HXRC', 0, 0),
('35', '仓储保管-装拆箱类', 1, 'HXRC', 0, 0),
('36', '运费-运费附加费类', 1, 'HXRC', 0, 0),
('37', '订舱单证类', 1, 'HXRC', 0, 0),
('38', '杂费类', 1, 'HXRC', 0, 0),
('39', '定额包干费类', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_CONTAINER_CLASS`
--

INSERT INTO `G_CONTAINER_CLASS` (`COCL_CODE`, `COCL_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('GP', '干货箱', 1, 'HXRC', 0, 0),
('HC', '干货高箱', 1, 'HXRC', 0, 0),
('HT', '挂衣箱', 1, 'HXRC', 0, 0),
('OT', '开顶箱', 1, 'HXRC', 0, 0),
('RF', '冷冻箱', 1, 'HXRC', 0, 0),
('RH', '冷高箱', 1, 'HXRC', 0, 0),
('TK', '油罐箱', 1, 'HXRC', 0, 0),
('FR', '框架箱', 1, 'HXRC', 0, 0),
('OS', '侧壁全开', 1, 'HXRC', 0, 0),
('HH', '半高箱', 1, 'HXRC', 0, 0),
('VE', '通风箱', 1, 'HXRC', 0, 0),
('BK', '散装货箱', 1, 'HXRC', 0, 0),
('PF', '平板箱', 1, 'HXRC', 0, 0),
('OH', '超高箱', 1, 'HXRC', 0, 0),
('OL', '超长箱', 1, 'HXRC', 0, 0),
('OW', '超宽箱', 1, 'HXRC', 0, 0),
('TT', '挂衣高箱', 1, 'HXRC', 0, 0),
('CH', '尺', 1, 'HXRC', 0, 0),
('DG', '危品箱', 1, 'HXRC', 0, 0),
('DO', '半开箱', 1, 'HXRC', 0, 0),
('H1', '一层挂衣箱', 1, 'HXRC', 0, 0),
('H2', '二层挂衣箱', 1, 'HXRC', 0, 0),
('H3', '三层挂衣箱', 1, 'HXRC', 0, 0),
('H4', '四层挂衣箱', 1, 'HXRC', 0, 0),
('OO', '超限箱', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_CONTAINER_TYPE`
--

INSERT INTO `G_CONTAINER_TYPE` (`COTY_CODE`, `COTY_LENGTH`, `COCL_CODE`, `COTY_TEU`, `COTY_ISO_CODE`, `COTY_UN_CODE`, `COTY_TARE_WEIGHT`, `COTY_MAX_WEIGHT`, `COTY_MAX_MEASUREMENT`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('10GP', '10', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('10RF', '10', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20BK', '20', 'BK', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20GP', '20', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20FR', '20', 'FR', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20HC', '20', 'HC', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20HH', '20', 'HH', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20HT', '20', 'HT', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20TT', '20', 'TT', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20OS', '20', 'OS', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20OT', '20', 'OT', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20PF', '20', 'PF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20RF', '20', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20RH', '20', 'RH', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20TK', '20', 'TK', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20VE', '20', 'VE', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40BK', '40', 'BK', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40GP', '40', 'GP', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40FR', '40', 'FR', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40HC', '40', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40HH', '40', 'HH', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40HT', '40', 'HT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40TT', '40', 'TT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40OS', '40', 'OS', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40OT', '40', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40PF', '40', 'PF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40RF', '40', 'RF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40RH', '40', 'RH', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40TK', '40', 'TK', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40VE', '40', 'VE', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45FR', '45', 'FR', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45HC', '45', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45HT', '45', 'HT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45OS', '45', 'OS', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45OT', '45', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45PF', '45', 'PF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45RF', '45', 'RF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45RH', '45', 'RH', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45TK', '45', 'TK', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('12GP', '12', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('12RF', '12', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45GP', '45', 'GP', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('38GP', '38', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('48HC', '48', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('53HC', '53', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20OO', '20', 'OO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40OO', '40', 'OO', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('TEST', '12', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45G1', '40', 'OH', NULL, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('10DG', '10', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('10', '40', 'GP', NULL, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 1),
('20DG', '20', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40DG', '40', 'DG', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('12DG', '12', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45DG', '45', 'DG', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('10DO', '10', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20DO', '20', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('40DO', '40', 'DO', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('12DO', '12', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('45DO', '45', 'DO', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('20', '40', 'GP', NULL, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 1),
('LDJF', '23', 'GP', 12, NULL, NULL, NULL, NULL, NULL, 1, 'HXRC', 0, 1);

--
-- 导出表中的数据 `G_COUNTRY`
--

INSERT INTO `G_COUNTRY` (`COUN_CODE`, `COUN_NAME_CN`, `COUN_NAME_EN`, `COMP_CODE`, `VERSION`) VALUES
('ZW', '津巴布韦', 'ZIMBABWE', 'HXRC', 5),
('IR', '伊朗', 'IRAN, ISLAMIC REPUBLIC', 'HXRC', 0),
('AD', '安道尔', 'ANDORRA', 'HXRC', 0),
('AE', '阿拉伯联合酋长国', 'UNITED ARAB EMIRATES', 'HXRC', 0),
('AF', '阿富汗', 'AFGHANISTAN', 'HXRC', 1),
('AG', '安提瓜', 'ANTIGUA AND BARBUDA', 'HXRC', 0),
('AI', '安圭拉', 'ANGUILLA', 'HXRC', 0),
('AL', '阿尔巴尼亚', 'ALBANIA', 'HXRC', 1),
('AM', '亚美尼亚', 'ARMENIA', 'HXRC', 0),
('AN', '荷属安的列斯', 'NETHERLANDS AN', 'HXRC', 1),
('AO', '安哥拉', 'ANGOLA', 'HXRC', 0),
('AQ', '南极洲', 'ANTARCTICA', 'HXRC', 0),
('AR', '阿根廷', 'ARGENTINA', 'HXRC', 0),
('AS', '美属萨摩亚', 'AMERICAN SAMOA', 'HXRC', 0),
('AT', '奥地利', 'AUSTRIA', 'HXRC', 0),
('AU', '澳大利亚', 'AUSTRALIA', 'HXRC', 0),
('AW', '阿鲁巴岛', 'ARUBA', 'HXRC', 0),
('AZ', '阿塞拜疆', 'AZERBAIJAN', 'HXRC', 0),
('BA', '波-黑', 'BOSNIA-HERCEGOVINA', 'HXRC', 0),
('BB', '巴巴多斯', 'BARBADOS', 'HXRC', 0),
('BD', '孟加拉', 'BANGLADESH', 'HXRC', 0),
('BE', '比利时', 'BELGIUM', 'HXRC', 0),
('BF', '布基纳法索', 'BURKINA FASO', 'HXRC', 0),
('BG', '保加利亚', 'BULGARIA', 'HXRC', 0),
('BH', '巴林', 'BAHRAIN', 'HXRC', 0),
('BI', '布隆迪', 'BURUNDI', 'HXRC', 0),
('BJ', '贝宁', 'BENIN', 'HXRC', 0),
('BM', '百慕大群岛', 'BERMUDA', 'HXRC', 0),
('BN', '文莱', 'BRUNEI DARUSSALAM', 'HXRC', 0),
('BO', '玻利维亚', 'BOLIVIA', 'HXRC', 0),
('BR', '巴西', 'BRAZIL', 'HXRC', 0),
('BS', '巴哈马联邦', 'BAHAMAS', 'HXRC', 0),
('BT', '不丹', 'BHUTAN', 'HXRC', 0),
('BV', '布维岛', 'BOUVET ISLAND', 'HXRC', 0),
('BW', '博茨瓦纳', 'BOTSWANA', 'HXRC', 0),
('BY', '白俄罗斯', 'BELARUS', 'HXRC', 0),
('BZ', '伯利兹', 'BELIZE', 'HXRC', 0),
('CA', '加拿大', 'CANADA', 'HXRC', 0),
('CC', '可可岛', 'COCOS(KEELING)ISLAND', 'HXRC', 0),
('CF', '中非共和国', 'CENTRAL AFRICAN REP.', 'HXRC', 0),
('CG', '刚果（布）', 'CONGO', 'HXRC', 0),
('CH', '瑞士', 'SWITZERLAND', 'HXRC', 0),
('CI', '科特迪瓦', 'COTE D''IVOIRE', 'HXRC', 0),
('CK', '库克群岛', 'COOK ISLANDS', 'HXRC', 0),
('CL', '智利', 'CHILE', 'HXRC', 0),
('CM', '喀麦隆', 'CAMEROON', 'HXRC', 0),
('CN', '中国', 'CHINA', 'HXRC', 0),
('CO', '哥伦比亚', 'COLOMBIA', 'HXRC', 0),
('CR', '哥斯达黎加', 'COSTA RICA', 'HXRC', 0),
('CU', '古巴', 'CUBA', 'HXRC', 0),
('CV', '佛得角群岛', 'CAPE VERDE', 'HXRC', 0),
('CX', '圣诞岛', 'CHRISTMAS ISLANDS', 'HXRC', 0),
('CY', '塞浦路斯', 'CYPRUS', 'HXRC', 0),
('CZ', '捷克共和国', 'CZECH REPUBLIC', 'HXRC', 0),
('DE', '德国', 'GERMANY, FEDERAL REPUB', 'HXRC', 0),
('DJ', '吉布提', 'DJIBOUTI', 'HXRC', 0),
('DK', '丹麦', 'DENMARK', 'HXRC', 0),
('DM', '英属多米尼加', 'DOMINICA', 'HXRC', 0),
('DO', '多米尼加共和国', 'DOMINICAN REP.', 'HXRC', 0),
('DZ', '阿尔及利亚', 'ALGERIA', 'HXRC', 0),
('EC', '厄瓜多尔', 'ECUADOR', 'HXRC', 0),
('EE', '爱沙尼亚', 'ESTONIA', 'HXRC', 0),
('EG', '埃及', 'EGYPT', 'HXRC', 0),
('EH', '西撒哈拉', 'WESTERN SAHARA', 'HXRC', 0),
('ER', '厄立特里亚', 'ERITREA', 'HXRC', 0),
('ES', '西班牙', 'SPAIN', 'HXRC', 0),
('ET', '埃塞俄比亚', 'ETHIOPIA', 'HXRC', 0),
('FI', '芬兰', 'FINLAND', 'HXRC', 0),
('FJ', '斐济', 'FIJI', 'HXRC', 0),
('FK', '福克兰(马尔维纳斯)群岛', 'FALK', 'HXRC', 0),
('FM', '密克罗', 'FED STATES MICRONES', 'HXRC', 0),
('FO', '丹麦法罗群岛', 'FAEROE ISLANDS', 'HXRC', 0),
('FR', '法国', 'FRANCE', 'HXRC', 0),
('GA', '加蓬', 'GABON', 'HXRC', 0),
('GB', '英国', 'UNITED KINGDOM', 'HXRC', 0),
('GD', '格林纳达', 'GRENADA', 'HXRC', 0),
('GE', '格鲁吉亚', 'GEORGIA', 'HXRC', 0),
('GF', '法属圭亚那', 'FRENCH GUIANA', 'HXRC', 0),
('GH', '加纳', 'GHANA', 'HXRC', 0),
('GI', '直布罗陀', 'GIBRALTAR', 'HXRC', 0),
('GL', '格陵兰', 'GREENLAND', 'HXRC', 0),
('GM', '冈比亚', 'GAMBIA', 'HXRC', 0),
('GN', '几内亚', 'GUINEA', 'HXRC', 0),
('GP', '瓜德罗普岛', 'GUADELOUPE', 'HXRC', 0),
('GQ', '赤道几内亚', 'EQUATORIAL GUINE', 'HXRC', 0),
('GR', '希腊', 'GREECE', 'HXRC', 0),
('GT', '危地马拉', 'GUATEMALA', 'HXRC', 0),
('GU', '关岛', 'GUAM', 'HXRC', 0),
('GW', '几内亚比绍', 'GUINEA-BISSAU', 'HXRC', 0),
('GY', '圭亚那', 'GUYANA', 'HXRC', 0),
('HK', '香港', 'HONG KONG', 'HXRC', 0),
('HM', '赫德岛和麦克唐纳岛', 'HEARD ISLAND AND MCDONALD ISLAND', 'HXRC', 0),
('HN', '洪都拉斯', 'HONDURAS', 'HXRC', 0),
('HR', '克罗地亚', 'CROATIA', 'HXRC', 0),
('HT', '海地', 'HAITI', 'HXRC', 0),
('HU', '匈牙利', 'HUNGARY', 'HXRC', 0),
('ID', '印度尼西亚', 'INDONESIA', 'HXRC', 0),
('IE', '爱尔兰', 'IRELAND', 'HXRC', 0),
('IL', '以色列', 'ISRAEL', 'HXRC', 0),
('IN', '印度', 'INDIA', 'HXRC', 0),
('IO', '英属印度洋领地', 'BRITISH INDIAN OCEAN TERRITORY', 'HXRC', 0),
('IQ', '伊拉克', 'IRAQ', 'HXRC', 0),
('IS', '冰岛', 'ICELAND', 'HXRC', 0),
('IT', '意大利', 'ITALY', 'HXRC', 0),
('JM', '牙买加', 'JAMAICA', 'HXRC', 0),
('JO', '约旦', 'JORDAN', 'HXRC', 0),
('JP', '日本', 'JAPAN', 'HXRC', 0),
('KE', '肯尼亚', 'KENYA', 'HXRC', 0),
('KG', '吉尔吉斯斯坦', 'KYRGYZSTAN', 'HXRC', 0),
('KH', '柬埔寨', 'CAMBODIA', 'HXRC', 0),
('KI', '基里巴斯', 'KIRIBATI', 'HXRC', 0),
('KM', '科摩罗', 'COMOROS', 'HXRC', 0),
('KN', '尼维斯联邦', 'ST KITTS-NEVIS', 'HXRC', 0),
('KP', '朝鲜', 'KOREA, DEM PEOPLE''S RE', 'HXRC', 0),
('KR', '韩国', 'KOREA', 'HXRC', 0),
('KW', '科威特', 'KUWAIT', 'HXRC', 0),
('KY', '开曼群岛', 'CAYMAN ISLANDS', 'HXRC', 0),
('KZ', '哈萨克斯坦', 'KAZAKHSTAN', 'HXRC', 0),
('LA', '老挝', 'LAO PEOPLE''S DEMOCRATI', 'HXRC', 0),
('LB', '黎巴嫩', 'LEBANON', 'HXRC', 0),
('LC', '圣卢西亚', 'SAINT LUCIA', 'HXRC', 0),
('LI', '列支敦士登', 'LIECHTENSTEIN', 'HXRC', 0),
('LK', '斯里兰卡', 'SRI LANKA', 'HXRC', 0),
('LR', '利比里亚', 'LIBERIA', 'HXRC', 0),
('LS', '莱索托', 'LESOTHO', 'HXRC', 0),
('LT', '立陶宛', 'LITHUANIA', 'HXRC', 0),
('LU', '卢森堡', 'LUXEMBOURG', 'HXRC', 0),
('LV', '拉脱维亚', 'LATVIA', 'HXRC', 0),
('LY', '利比亚', 'LYBIAN ARAB JAMAHIRI', 'HXRC', 0),
('MA', '摩洛哥', 'MOROCCO', 'HXRC', 0),
('MC', '摩纳哥', 'MONACO', 'HXRC', 0),
('MD', '摩尔多瓦', 'MOLDOVA', 'HXRC', 0),
('MG', '马达加斯加', 'MADAGASCAR', 'HXRC', 0),
('MH', '马绍尔群岛', 'MARSHALL ISLANDS', 'HXRC', 0),
('MK', '马其顿', 'FRMR YUGOSLAV REP OF', 'HXRC', 0),
('ML', '马里', 'MALI', 'HXRC', 0),
('MM', '缅甸', 'MYANMAR', 'HXRC', 0),
('MN', '蒙古', 'MONGOLIA', 'HXRC', 0),
('MO', '澳门', 'MACAU', 'HXRC', 0),
('MP', '北马里亚纳群岛', 'NORTHERN MAR', 'HXRC', 0),
('MQ', '马提尼克岛', 'MARTINIQUE', 'HXRC', 0),
('MR', '毛里塔尼亚', 'MAURITANIA', 'HXRC', 0),
('MS', '蒙特色纳岛', 'MONTSERRAT', 'HXRC', 0),
('MT', '马耳他', 'MALTA', 'HXRC', 0),
('MU', '毛里求斯', 'MAURITIUS', 'HXRC', 0),
('MV', '马尔代夫', 'MALDIVES', 'HXRC', 0),
('MW', '马拉维', 'MALAWI', 'HXRC', 0),
('MX', '墨西哥', 'MEXICO', 'HXRC', 0),
('MY', '马来西亚', 'MALAYSIA', 'HXRC', 0),
('MZ', '莫桑比克', 'MOZAMBIQUE', 'HXRC', 0),
('NA', '纳米比亚', 'NAMIBIA', 'HXRC', 0),
('NC', '新喀里多尼亚', 'NEW CALEDONIA', 'HXRC', 0),
('NE', '尼日尔', 'NIGER', 'HXRC', 0),
('NF', '诺福克岛(英国)', 'NORFOLK ISLAND', 'HXRC', 0),
('NG', '尼日利亚', 'NIGERIA', 'HXRC', 0),
('NI', '尼加拉瓜', 'NICARAGUA', 'HXRC', 0),
('NL', '荷兰', 'NETHERLANDS', 'HXRC', 0),
('NO', '挪威', 'NORWAY', 'HXRC', 0),
('NP', '尼泊尔', 'NEPAL', 'HXRC', 0),
('NR', '瑙鲁', 'NAURU', 'HXRC', 0),
('NU', '纽埃', 'NIUE', 'HXRC', 0),
('NZ', '新西兰', 'NEW ZEALAND', 'HXRC', 0),
('OM', '阿曼', 'OMAN', 'HXRC', 0),
('PA', '巴拿马', 'PANAMA', 'HXRC', 0),
('PE', '秘鲁', 'PERU', 'HXRC', 0),
('PF', '法属波利尼西亚', 'FRENCH POLYN', 'HXRC', 0),
('PG', '巴布亚新几内亚', 'PAPUA NEW GU', 'HXRC', 0),
('PH', '菲律宾', 'PHILIPPINES', 'HXRC', 0),
('PK', '巴基斯坦', 'PAKISTAN', 'HXRC', 0),
('PL', '波兰', 'POLAND', 'HXRC', 0),
('PM', '圣皮埃尔和密克隆', 'SAINT PIERRE AND MIQUELON', 'HXRC', 0),
('PN', '皮特凯恩', 'PITCAIRN', 'HXRC', 0),
('PR', '波多黎各', 'PUERTO RICO', 'HXRC', 0),
('PT', '葡萄牙', 'PORTUGAL', 'HXRC', 0),
('PW', '帛琉(菲律宾东南-群岛)', 'PALAU', 'HXRC', 0),
('PY', '巴拉圭', 'PARAGUAY', 'HXRC', 0),
('QA', '卡塔尔', 'QATAR', 'HXRC', 0),
('RE', '留尼汪', 'REUNION', 'HXRC', 0),
('RO', '罗马尼亚', 'ROMANIA', 'HXRC', 0),
('RU', '俄罗斯', 'RUSSIAN FEDERATION', 'HXRC', 0),
('RW', '卢旺达', 'RWANDA', 'HXRC', 0),
('SA', '沙特阿拉伯', 'SAUDI ARABIA', 'HXRC', 0),
('SB', '所罗门群岛', 'SOLOMON ISLANDS', 'HXRC', 0),
('SC', '塞舌尔', 'SEYCHELLES', 'HXRC', 0),
('SD', '苏丹', 'SUDAN', 'HXRC', 0),
('SE', '瑞典', 'SWEDEN', 'HXRC', 0),
('SG', '新加坡', 'SINGAPORE', 'HXRC', 0),
('SH', '圣赫勒拿岛(英国)', 'ST HELENA', 'HXRC', 0),
('SI', '斯洛文尼亚', 'SLOVENIA', 'HXRC', 0),
('SJ', '斯瓦尔巴岛和扬马延岛', 'SVALARD AND JAN MAYEN', 'HXRC', 0),
('SK', '斯洛伐克', 'SLOVAKIA', 'HXRC', 0),
('SL', '塞拉利昂', 'SIERRA LEONE', 'HXRC', 0),
('SM', '圣马力诺', 'SAN MARINO', 'HXRC', 0),
('SN', '塞内加尔', 'SENEGAL', 'HXRC', 0),
('SO', '索马里', 'SOMALIA', 'HXRC', 0),
('SR', '苏里南', 'SURINAME', 'HXRC', 0),
('ST', '圣多美和普林西比', 'SAO TOME AND PRINCIPE', 'HXRC', 0),
('SV', '萨尔瓦多', 'EL SALVADOR', 'HXRC', 0),
('SY', '叙利亚', 'SYRIAN ARAB REPUBLIC', 'HXRC', 0),
('SZ', '斯威士兰', 'SWAZILAND', 'HXRC', 0),
('TC', '土克斯及开科斯群岛', 'TURKS & CAICOS ISLAN', 'HXRC', 0),
('TD', '乍得', 'CHAD', 'HXRC', 0),
('TF', '法属南部领地', 'FRENCH SOUTHERN TERRITORIES', 'HXRC', 0),
('TG', '多哥', 'TOGO', 'HXRC', 0),
('TH', '泰国', 'THAILAND', 'HXRC', 0),
('TJ', '塔吉克斯坦', 'TAJIKISTAN', 'HXRC', 0),
('TM', '土库曼司坦', 'TURKMENISTAN', 'HXRC', 0),
('TN', '突尼斯', 'TUNISIA', 'HXRC', 0),
('TO', '汤加', 'TONGA', 'HXRC', 0),
('TR', '土耳其', 'TURKEY', 'HXRC', 0),
('TT', '特立尼达和多巴哥', 'TRINIDAD AND TOBAGO', 'HXRC', 0),
('TV', '图瓦卢', 'TUVALU', 'HXRC', 0),
('TW', '台湾', 'TAIWAN, PROVINCE OF CH', 'HXRC', 0),
('TZ', '坦桑尼亚', 'TANZANIA, UNITED R', 'HXRC', 0),
('UA', '乌克兰', 'UKRAINE', 'HXRC', 0),
('UG', '乌干达', 'UGANDA', 'HXRC', 0),
('UM', '美属外岛', 'US MINOR OUTLYING ISLA', 'HXRC', 0),
('US', '美国', 'UNITED STATES', 'HXRC', 0),
('UY', '乌拉圭', 'URUGUAY', 'HXRC', 0),
('UZ', '乌兹别克斯坦', 'UZBEKISTAN', 'HXRC', 0),
('VA', '梵蒂冈', 'VATICAN', 'HXRC', 0),
('VC', '圣文森特', 'ST VINCENT-GRENADI', 'HXRC', 0),
('VE', '委内瑞拉', 'VENEZUELA', 'HXRC', 0),
('VG', '英属维尔京岛', 'BR. VIRGIN IS', 'HXRC', 0),
('VI', '美属维尔京岛', 'VIRGIN ISLANDS, U.S.', 'HXRC', 0),
('VN', '越南', 'VIET NAM', 'HXRC', 0),
('VU', '瓦努阿图', 'VANUATU', 'HXRC', 0),
('WF', '瓦利斯', 'WALLIS AND FUTUNA IS', 'HXRC', 0),
('WS', '萨摩亚', 'SAMOA', 'HXRC', 0),
('YE', '也门', 'YEMEN', 'HXRC', 0),
('YU', '南斯拉夫', 'YUGOSLAVIA (Fed. R）', 'HXRC', 0),
('ZA', '南非', 'SOUTH AFRICA', 'HXRC', 0),
('ZM', '赞比亚', 'ZAMBIA', 'HXRC', 0),
('ZR', '扎伊尔', 'ZAIRE', 'HXRC', 0),
('CD', '民主刚果', 'Congo,DR', 'HXRC', 0),
('CS', '塞尔维亚和黑山', 'SERBIA AND MONTENEGRO', 'HXRC', 0),
('GS', '南乔治亚地区及南桑威奇群岛', 'SOUTH GEORGIA AND THE SOUTH SAND', 'HXRC', 0),
('TK', '托克老群岛', 'TOKELAU', 'HXRC', 0),
('TL', '东帝汶岛', 'EAST TIMOR', 'HXRC', 0),
('XZ', '国际水域设施', 'INSTALLATIONS IN INTERNATIONAL W', 'HXRC', 0),
('YT', '马约特', 'MAYOTTE', 'HXRC', 0),
('01', '比利时', 'BILISHI', 'HXRC', 0);

--
-- 导出表中的数据 `G_CURRENCY`
--

INSERT INTO `G_CURRENCY` (`CURR_CODE`, `CURR_NAME`, `CURR_SYMBOL`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('USD', '美元', '$', 1, 'HXRC', 0, 0),
('CNY', '人民币', '￥', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_DOCUMENT_TYPE`
--

INSERT INTO `G_DOCUMENT_TYPE` (`DOTY_CODE`, `DOTY_NAME`, `DOTY_CLASS`, `DOTY_RETURN_FLAG`, `DOTY_BACK_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('FP', '发票', '10', 0, 0, 1, 'HXRC', 1, 0),
('PZZS', '品质证书', '11', 0, 0, 1, 'HXRC', 1, 0),
('ZLZS', '重量证书', '11', 0, 0, 1, 'HXRC', 1, 0),
('SLZS', '数量证书', '11', 0, 0, 1, 'HXRC', 1, 0),
('SYWSZS', '兽医卫生证书', '11', 0, 0, 1, 'HXRC', 1, 0),
('JKZS', '健康证书', '11', 0, 0, 1, 'HXRC', 1, 0),
('WSZS', '卫生证书', '11', 0, 0, 1, 'HXRC', 1, 0),
('DWWSZS', '动物卫生证书', '11', 0, 0, 1, 'HXRC', 1, 0),
('ZWJYZS', '植物检疫证书', '11', 0, 0, 1, 'HXRC', 1, 0),
('XZXDZS', '熏蒸消毒证书', '11', 0, 0, 1, 'HXRC', 1, 0),
('CRHWHZPD', '出入货物换证凭单', '11', 0, 0, 1, 'HXRC', 1, 0),
('HT', '合同', '10', 0, 0, 1, 'HXRC', 1, 0),
('XYZ', '信用证', '10', 0, 0, 1, 'HXRC', 1, 0),
('HZPD', '换证凭单', '10', 0, 0, 1, 'HXRC', 1, 0),
('ZXD', '装箱单', '10', 0, 0, 1, 'HXRC', 1, 0),
('CJD', '厂检单', '10', 0, 0, 1, 'HXRC', 1, 0),
('BZXNJGD', '包装性能结果单', '10', 0, 0, 1, 'HXRC', 1, 0),
('XKSPWJ', '许可/审批文件', '10', 0, 0, 1, 'HXRC', 1, 0),
('XD', '箱单', '12', 0, 0, 1, 'HXRC', 1, 0),
('FP', '发票', '12', 0, 0, 1, 'HXRC', 1, 0),
('BGWT', '报关委托', '12', 0, 0, 1, 'HXRC', 1, 0),
('BJWT', '报检委托(需商检货)', '12', 0, 0, 1, 'HXRC', 1, 0),
('FMZBZZM', '非木质包装证明(非木质包装货)', '12', 0, 0, 1, 'HXRC', 1, 0),
('HXD', '核销单', '12', 0, 0, 1, 'HXRC', 1, 0),
('YPZM', '药品证明(出口货为药品)', '12', 0, 0, 1, 'HXRC', 1, 0),
('CZSJ', '场站收据', '12', 0, 0, 1, 'HXRC', 1, 0),
('JKBGD', '进口报关单', '30', 0, 0, 1, 'HXRC', 1, 0),
('CKBGD', '出口报关单', '30', 0, 0, 1, 'HXRC', 1, 0),
('RJHWJYJYZM', '入境货物检验检疫证明', '30', 0, 0, 1, 'HXRC', 1, 0),
('JKSD', '进口税单', '30', 0, 0, 1, 'HXRC', 1, 0),
('CRJJYJYGGSQD', '出入境检验检疫更改申请单', '30', 0, 0, 1, 'HXRC', 1, 0),
('TD', '提单', '30', 0, 0, 1, 'HXRC', 1, 0);

--
-- 导出表中的数据 `G_EXCHANGE_SETTLEMENT`
--

INSERT INTO `G_EXCHANGE_SETTLEMENT` (`EXSE_CODE`, `EXSE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '信汇', 1, 'HXRC', 0, 0),
('2', '电汇', 1, 'HXRC', 0, 0),
('3', '票    汇', 1, 'HXRC', 0, 0),
('4', '付款交单', 1, 'HXRC', 0, 0),
('5', '承兑交单', 1, 'HXRC', 0, 0),
('6', '信 用 证', 1, 'HXRC', 0, 0),
('7', '先出后结', 1, 'HXRC', 0, 0),
('8', '先结后出', 1, 'HXRC', 0, 0),
('9', '其    他', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_ISSUE_TYPE`
--

INSERT INTO `G_ISSUE_TYPE` (`ISTY_CODE`, `ISTY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '正本', 1, 'HXRC', 0, 0),
('2', '电放', 1, 'HXRC', 0, 0),
('3', 'SEAWAYBILL', 1, 'HXRC', 0, 0),
('4', '其它', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_LEVY_TYPE`
--

INSERT INTO `G_LEVY_TYPE` (`LETY_CODE`, `LETY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('101', '一般征税', 1, 'HXRC', 0, 0),
('502', '来料加工', 1, 'HXRC', 0, 0),
('503', '进料加工', 1, 'HXRC', 0, 0),
('601', '中外合资', 1, 'HXRC', 0, 0),
('602', '中外合作', 1, 'HXRC', 0, 0),
('603', '外资企业', 1, 'HXRC', 0, 0),
('789', '鼓励项目', 1, 'HXRC', 0, 0),
('799', '自有资金', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_PACKAGE`
--

INSERT INTO `G_PACKAGE` (`PACK_CODE`, `PACK_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('BALES', 'BALES', 1, 'HXRC', 0, 0),
('CRATE', 'CRATES', 1, 'HXRC', 0, 0),
('W/CS', 'WOODEN CASES', 1, 'HXRC', 0, 0),
('S/P', 'SETS/PCS', 1, 'HXRC', 0, 0),
('P/CS', 'PLYWOOD CASES', 1, 'HXRC', 0, 0),
('GUNNY', 'GUNNY BAG', 1, 'HXRC', 0, 0),
('PLT', 'PALLET', 1, 'HXRC', 0, 0),
('SKIDS', 'SKIDS', 1, 'HXRC', 0, 0),
('PCS', 'PIECES', 1, 'HXRC', 0, 0),
('SETS', 'SETS', 1, 'HXRC', 0, 0),
('C/DRUM', 'CARDBOARD DRUMS', 1, 'HXRC', 0, 0),
('DZS', 'DOZENS', 1, 'HXRC', 0, 0),
('RL', 'REEL', 1, 'HXRC', 0, 0),
('ENDCAPS', 'CLEAR FLOAT GLASS', 1, 'HXRC', 0, 0),
('PLTS', 'PALLETS', 1, 'HXRC', 0, 0),
('CASES', 'CASES', 1, 'HXRC', 0, 0),
('DRUMS', 'DRUMS', 1, 'HXRC', 0, 0),
('PPWOVENB', 'PP WOVEN BAGS', 1, 'HXRC', 0, 0),
('IRON DRU', 'IRON DRUMS', 1, 'HXRC', 0, 0),
('CLOTH BA', 'CLOTH BALE', 1, 'HXRC', 0, 0),
('PLASTIC', 'PLASTIC DRUMS', 1, 'HXRC', 0, 0),
('TRAYS', 'TRAYS', 1, 'HXRC', 0, 0),
('RACKS', 'RACKS', 1, 'HXRC', 0, 0),
('CTNS', 'CARTONS', 1, 'HXRC', 0, 0),
('FDRUMS', 'FIBRE DRUMS', 1, 'HXRC', 0, 0),
('PALLETS', 'PALLETS', 1, 'HXRC', 0, 0),
('ROLLS', 'ROLLS', 1, 'HXRC', 0, 0),
('IRON C', 'IRON CRATES', 1, 'HXRC', 0, 0),
('BAGS', 'BAGS', 1, 'HXRC', 0, 0),
('CNTRS', 'CONTAINERS', 1, 'HXRC', 0, 0),
('GUN', 'GUNNY SACKS', 1, 'HXRC', 0, 0),
('PRESS PA', 'PRESS PACKED BALES', 1, 'HXRC', 0, 0),
('UNPACKED', 'UNPACKED', 1, 'HXRC', 0, 0),
('PACKAGES', 'PACKAGES', 1, 'HXRC', 0, 0),
('W/BS', 'WOODEN BOXES', 1, 'HXRC', 0, 0),
('W/CRS', 'WOODEN CRATES', 1, 'HXRC', 0, 0),
('LT', 'LOT', 1, 'HXRC', 0, 0),
('BUNDLES', 'BUNDLES', 1, 'HXRC', 0, 1),
('PRS', 'PRS', 1, 'HXRC', 0, 0),
('W/DRUMS', 'WOODEN DRUMS', 1, 'HXRC', 0, 0),
('TINS', 'TINS', 1, 'HXRC', 0, 0),
('BIG BAGS', 'BIG BAGS', 1, 'HXRC', 0, 0),
('COILS', 'COILS', 1, 'HXRC', 0, 0),
('PIECES', 'PIECES', 1, 'HXRC', 0, 0),
('PAIRS', 'PAIRS', 1, 'HXRC', 0, 0),
('TANK', 'TANK', 1, 'HXRC', 0, 0),
('BLDS', 'BLDS', 1, 'HXRC', 0, 0),
('UNITS', 'UNITS', 1, 'HXRC', 0, 0),
('CANS', 'CANS', 1, 'HXRC', 0, 0),
('BOXES', 'BOXES', 1, 'HXRC', 0, 0),
('BDLS', 'BUNDLES', 1, 'HXRC', 0, 0),
('LOT', 'LOT', 1, 'HXRC', 0, 0),
('SACKS', 'SACKS', 1, 'HXRC', 0, 0),
('HANGERS', 'HANGERS', 1, 'HXRC', 0, 0),
('FIBER DR', 'FIBER DRUMS', 1, 'HXRC', 0, 0),
('DOUBLE', 'DOUBLE PP BAGS', 1, 'HXRC', 0, 0),
('PLAS', 'PLASTICS DRUMS', 1, 'HXRC', 0, 0),
('COM', 'COMPOUND BAGS', 1, 'HXRC', 0, 0),
('JUMBOBAG', 'JUMBO BAGS', 1, 'HXRC', 0, 0),
('PLASTICB', 'PLASTIC BAGS', 1, 'HXRC', 0, 0),
('KINT BAG', 'KINTTING BAG', 1, 'HXRC', 0, 0),
('CYL', 'CYL', 1, 'HXRC', 0, 0),
('CYLINDER', 'CYLINDERS', 1, 'HXRC', 0, 0),
('IRONPALE', 'IRON PALLETS', 1, 'HXRC', 0, 0),
('SB.CASES', 'SYNTHETIC BOARD CASES', 1, 'HXRC', 0, 0),
('W/P', 'WOODEN PALLETS', 1, 'HXRC', 0, 0),
('T/BAGS', 'TOTE BAGS', 1, 'HXRC', 0, 0),
('MTS', 'MTS', 1, 'HXRC', 0, 0),
('REELS', 'REELS', 1, 'HXRC', 0, 0),
('BTL', 'BOTTOLS', 1, 'HXRC', 0, 0),
('SUPER', 'SUPER SACKS', 1, 'HXRC', 0, 0),
('WDCS', 'WDCS', 1, 'HXRC', 0, 0),
('PAPER', 'PAPER BAGS', 1, 'HXRC', 0, 0),
('WOVEN BS', 'WOVEN BAGS', 1, 'HXRC', 0, 0),
('11111111', 'CARTONS', 1, 'HXRC', 0, 1),
('W/BAGS', 'WEAVING BAGS', 1, 'HXRC', 0, 0),
('TUBES', 'TUBES', 1, 'HXRC', 0, 0),
('BOTTOLS', 'BTLS', 1, 'HXRC', 0, 0),
('CARTONS', 'CARTONS', 1, 'HXRC', 0, 1),
('DUNDLES', 'DUNDLES', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_PAYMENT_TERM`
--

INSERT INTO `G_PAYMENT_TERM` (`PATE_CODE`, `PATE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('P', 'FREIGHT PREPAID', 1, 'HXRC', 0, 0),
('C', 'FREIGHT COLLECT', 1, 'HXRC', 0, 0),
('F', 'FREE', 1, 'HXRC', 0, 0),
('E', '第三地付款', 1, 'HXRC', 0, 0),
('L', '第一程预付/第二程到付', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_PLACE`
--

INSERT INTO `G_PLACE` (`PLAC_CODE`, `PLAC_NAME`, `PLAC_NAME_EN`, `PLAC_TYPE`, `COUN_CODE`, `PLAC_PROVINCE_ID`, `PLAC_PROVINCE_NAME`, `PLAC_CITY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('YSG', '洋山港', 'YANSHAN', 3, 'CN', NULL, NULL, NULL, 1, 'HXRC', 0, 0),
('JGL', '军公路码头', 'JUNGONGLU', 3, 'CN', NULL, NULL, NULL, 1, 'HXRC', 1, 1),
('JGL', '军公路港务', 'JUNGONGLU', 3, 'CN', NULL, NULL, NULL, 1, 'HXRC', 1, 0),
('ZHB', '张华浜港务', 'ZHANGHUABANG', 3, 'CN', NULL, NULL, NULL, 1, 'HXRC', 1, 0),
('BSG', '宝山港务', 'BAOSHAN', 3, 'CN', NULL, NULL, NULL, 1, 'HXRC', 1, 0),
('LJRQ', '罗泾二期', 'LUOJINGERQI', 3, 'CN', NULL, NULL, NULL, 1, 'HXRC', 1, 0),
('SGWC', '上钢五厂', 'SHANGGANGWUCHANG', 3, 'CN', NULL, NULL, NULL, 1, 'HXRC', 1, 0),
('TCWX', '拖出维修', 'TUOCHUWEIXIU', 3, 'CN', NULL, NULL, NULL, 1, 'HXRC', 2, 0);

--
-- 导出表中的数据 `G_SETTLEMENT_WAY`
--

INSERT INTO `G_SETTLEMENT_WAY` (`SEWA_CODE`, `SEWA_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('DH', '电汇', 1, 'HXRC', 0, 0),
('ZP', '支票', 1, 'HXRC', 0, 0),
('WHHK', '外汇划款', 1, 'HXRC', 0, 0),
('DZLH', '电子联行付款', 1, 'HXRC', 0, 0),
('DJPZ', '贷记凭证', 1, 'HXRC', 0, 0),
('XJ', '现金', 1, 'HXRC', 0, 0),
('SD', '水单', 1, 'HXRC', 0, 0),
('ZZ', '转帐', 1, 'HXRC', 0, 0),
('TS', '托收', 1, 'HXRC', 0, 0),
('NK', '银行内扣', 1, 'HXRC', 0, 0),
('BP', '本票', 1, 'HXRC', 0, 0),
('HP', '汇票', 1, 'HXRC', 0, 0),
('CE', '定舱差额', 1, 'HXRC', 0, 0),
('RLC', '入立成', 1, 'HXRC', 0, 0),
('QL', '帐务清理', 1, 'HXRC', 0, 0);


--
-- 导出表中的数据 `G_SHIPPING_LINE`
--

INSERT INTO `G_SHIPPING_LINE` (`SHLI_CODE`, `SHLI_NAME`, `SHLI_NAME_EN`, `SHLI_BULK_FLAG`, `SHLI_CONT_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('CNKOR', '中国-南韩', 'CN-KOREA', 1, 1, 1, 'HXRC', 0, 0),
('CNRUS', '中国一俄罗斯远东', 'CN-RUSSIA', 1, 1, 1, 'HXRC', 0, 0),
('CNSEA', '中国一东南亚', 'CN-SOUTHEAST ASIA', 1, 1, 1, 'HXRC', 0, 0),
('CNRSP', '中国-红海', 'CN-RED SEA PORT', 1, 1, 1, 'HXRC', 0, 0),
('CNPSG', '中国一波斯湾', 'CN-PERSIAN GULF', 1, 1, 1, 'HXRC', 0, 0),
('CNAFR', '中国一非洲', 'CN-AFRICA', 1, 1, 1, 'HXRC', 0, 0),
('CNMED', '中国一地中海', 'CN-MEDITERRANEAN', 1, 1, 1, 'HXRC', 0, 0),
('CNEUR', '中国一欧洲', 'CN-EUROPE', 1, 1, 1, 'HXRC', 0, 0),
('CNAUS', '中国一澳新', 'CN-AUSTRALIA,NEW ZEALAND', 1, 1, 1, 'HXRC', 0, 0),
('CNUSA', '中国一美国', 'CN-USA', 1, 1, 1, 'HXRC', 0, 0),
('CNCAN', '中国一加拿大', 'CN-CANADA', 1, 1, 1, 'HXRC', 0, 0),
('CNSAM', '中国一南美洲', 'CN-SOUTH AMERCIA', 1, 1, 1, 'HXRC', 0, 0),
('CNCCM', '中国一中美洲,加勒比海', 'CN-CENTRAL AMERICA,CARIBBEAN,MEX', 1, 1, 1, 'HXRC', 0, 0),
('CNJAP', '中国-日本', 'CN-JAPAN', 1, 1, 1, 'HXRC', 0, 0),
('CNIND', '中国-印巴', 'CN-INDIA', 1, 1, 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_TRADE_TERM`
--

INSERT INTO `G_TRADE_TERM` (`TRTE_CODE`, `TRTE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', 'CIF', 1, 'HXRC', 0, 0),
('2', 'C&F', 1, 'HXRC', 0, 0),
('3', 'FOB', 1, 'HXRC', 0, 0),
('4', 'C&I ', 1, 'HXRC', 0, 0),
('5', '市场价', 1, 'HXRC', 0, 0),
('6', '垫仓', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_TRADE_TYPE`
--

INSERT INTO `G_TRADE_TYPE` (`TRTY_CODE`, `TRTY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('0110', '一般贸易', 1, 'HXRC', 0, 0),
('0130', '易货贸易', 1, 'HXRC', 0, 0),
('0139', '旅游购物商品', 1, 'HXRC', 0, 0),
('0200', '料件放弃', 1, 'HXRC', 0, 0),
('0214', '来料加工', 1, 'HXRC', 0, 0),
('0245', '来料料件内销', 1, 'HXRC', 0, 0),
('0255', '来料深加工', 1, 'HXRC', 0, 0),
('0258', '来料余料结转', 1, 'HXRC', 0, 0),
('0265', '来料料件复出', 1, 'HXRC', 0, 0),
('0300', '来料料件退换', 1, 'HXRC', 0, 0),
('0314', '加工专用油', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_TRANS_TERM`
--

INSERT INTO `G_TRANS_TERM` (`TRAN_CODE`, `TRAN_NAME`, `TRAN_BULK_FLAG`, `TRAN_CONT_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('CY-CY', '场到场', 1, 1, 1, 'HXRC', 0, 0),
('CY-CFS', '场到站', 1, 1, 1, 'HXRC', 0, 0),
('CY-Door', '场到门', 1, 1, 1, 'HXRC', 0, 0),
('Door-Door', '门到门', 1, 1, 1, 'HXRC', 0, 0),
('Door-CY', '门到场', 1, 1, 1, 'HXRC', 0, 0),
('Door-CFS', '门到站', 1, 1, 1, 'HXRC', 0, 0),
('CFS-Door', '站到门', 1, 1, 1, 'HXRC', 0, 0),
('CFS-CY', '站到场', 1, 1, 1, 'HXRC', 0, 0),
('CFS-CFS', '站到站', 1, 1, 1, 'HXRC', 0, 0),
('FILO', '舱底', 1, 1, 1, 'HXRC', 0, 0),
('FIO', 'FIO', 1, 1, 1, 'HXRC', 0, 0),
('FLT', '班轮', 1, 1, 1, 'HXRC', 0, 0),
('HOOK TO HOOK', 'HTH', 1, NULL, 1, 'HXRC', 0, 0),
('FREE IN UNDER HOOK', 'FIUH', 1, NULL, 1, 'HXRC', 1, 0),
('HOOK IN LINE OUT', 'HILO', 1, NULL, 1, 'HXRC', 0, 0),
('FILO&FIO', 'FILO&FIO', 1, NULL, 1, 'HXRC', 0, 0),
('LINER IN LINER OUT', 'LINER IN LINER OUT', 1, NULL, 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_TRANS_TYPE`
--

INSERT INTO `G_TRANS_TYPE` (`TRAT_CODE`, `TRAT_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '监管仓库', 1, 'HXRC', 0, 0),
('2', '江海运输', 1, 'HXRC', 0, 0),
('3', '铁路运输', 1, 'HXRC', 0, 0),
('0', '非保税区', 1, 'HXRC', 0, 0),
('4', '汽车运输', 1, 'HXRC', 0, 0),
('5', '航空运输', 1, 'HXRC', 0, 0),
('6', '邮件运输', 1, 'HXRC', 0, 0),
('7', '保税区', 1, 'HXRC', 0, 0),
('8', '保税仓库', 1, 'HXRC', 0, 0),
('9', '其它运输', 1, 'HXRC', 0, 0),
('A', '全部运输', 1, 'HXRC', 0, 0),
('W', '物流中心', 1, 'HXRC', 0, 0),
('X', '物流园区', 1, 'HXRC', 0, 0),
('Y', '保税港区', 1, 'HXRC', 0, 0),
('Z', '出口加工', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_UNIT`
--

INSERT INTO `G_UNIT` (`UNIT_CODE`, `UNIT_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('FT', '计费吨', 1, 'HXRC', 0, 0),
('40E', '40空箱', 1, 'HXRC', 0, 1),
('40F', '40重箱', 1, 'HXRC', 0, 1),
('HR', '小时', 1, 'HXRC', 0, 1),
('T', '吨', 0, 'HXRC', 0, 1),
('KGS', '千克', 1, 'HXRC', 0, 0),
('CBM', '立方米', 1, 'HXRC', 0, 0),
('LT', '公升', 1, 'HXRC', 0, 1),
('KM', '公里', 0, 'HXRC', 0, 1),
('20E', '20空箱', 1, 'HXRC', 0, 1),
('20F', '20重箱', 1, 'HXRC', 0, 1),
('EACH', '票', 1, 'HXRC', 0, 0),
('CONT', '箱', 1, 'HXRC', 0, 0),
('DAY', '天', 1, 'HXRC', 0, 1),
('P', '人', 1, 'HXRC', 0, 1),
('C', '摄氏', 1, 'HXRC', 0, 1),
('F', '华氏', 1, 'HXRC', 0, 1),
('BBBB', 'AAA', 1, 'HXRC', 0, 1),
('HP', '马力', 1, 'HXRC', 0, 1),
('KW', '千瓦', 1, 'HXRC', 0, 1),
('TIME', '次', 1, 'HXRC', 0, 1),
('MIN', '分钟', 1, 'HXRC', 0, 1),
('40CTN', '大箱型', 1, 'HXRC', 0, 1),
('M', '米', 1, 'HXRC', 0, 1),
('20CTN', '小箱型', 1, 'HXRC', 0, 1),
('TEU', 'TEU', 1, 'HXRC', 0, 1),
('大箱', '大箱', 1, 'HXRC', 0, 1),
('UNIT     ', '个   ', 1, 'HXRC', 0, 1),
('小箱', '小箱', 1, 'HXRC', 0, 1),
('kg', '公斤', 1, 'HXRC', 0, 1),
('kgs', '公斤', 1, 'HXRC', 0, 1),
('CM', '厘米', 1, 'HXRC', 0, 1),
('TON', '吨', 1, 'HXRC', 0, 0),
('20GP', '标准柜', 1, 'HXRC', 0, 1),
('40GP', '大柜', 1, 'HXRC', 0, 1),
('BUNDLES', '捆', 1, 'HXRC', 0, 0),
('PIECES', '支', 1, 'HXRC', 0, 0),
('W/CASE', '木箱', 1, 'HXRC', 0, 0),
('MTS', 'MTS', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_USAGE`
--

INSERT INTO `G_USAGE` (`USAG_CODE`, `USAG_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('WMNX', '外贸自营内销', 1, 'HXRC', 0, 0),
('TQNX', '特区内销', 1, 'HXRC', 0, 0),
('QTNX', '其他内销', 1, 'HXRC', 0, 0),
('QYZY', '企业自用', 1, 'HXRC', 0, 0),
('JGFX', '加工返销', 1, 'HXRC', 0, 0),
('JY', '借用', 1, 'HXRC', 0, 0),
('BZJ', '收保证金', 1, 'HXRC', 0, 0),
('FREE', '免费提供', 1, 'HXRC', 0, 0),
('ZJTG', '作价提供', 1, 'HXRC', 0, 0),
('HYGG', '货样广告品', 1, 'HXRC', 0, 0),
('QT', '其他', 1, 'HXRC', 0, 0),
('YCDJ', '以产顶进', 1, 'HXRC', 0, 0);

--
-- 导出表中的数据 `P_SERIAL_RULE`
--

INSERT INTO `P_SERIAL_RULE` (`seru_code`, `seru_name`, `comp_code`, `seru_rule`, `seru_sn_length`, `seru_uniq_suffix`, `seru_loop_period`) VALUES
('consign_no', '委托编号', 'HXRC', '<COMP><CONS_TYPE><YY><SN>', 6, '<COMP><CONS_TYPE><YY>', 3),
('invoice_no', '发票编号', 'HXRC', '<COMP><YY>I<SN>', 6, '<YY>', 3),
('pr_no', '托收单/付款申请编号', 'HXRC', '<RP><CUR><YY>P<SN>', 6, '<YY>', 3),
('voucher_no', '收款单', 'HXRC', '<COMP><YY>V<SN>', 6, '<YY>', 3),
('bill_no', '账单', 'HXRC', '<COMP><YY>B<SN>', 6, '<YY>', 3),
('tran_no', '陆运联系单号', 'HXRC', '<COMP><YY>DY<SN>', 6, '<YY>', 3),
('ware_no', '仓储单号', 'HXRC', '<COMP><YY>W<SN>', 6, '<COMP><YY>', 3);

--
-- 导出表中的数据 `P_TEMPLATE`
--

INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('人民币发票', 'B', 'xls', 10, 'INVOR', NULL, NULL, '人民币发票套打模板', 1, NULL, NULL, NULL, NULL, 'HXRC', 1, 0),
('基础数据-国家', 'B', 'xls', 13, 'COUN', NULL, NULL, '国家数据导出模板', 1, NULL, NULL, NULL, NULL, 'HXRC', 0, 0),
('基础数据-港口', 'B', 'xls', 14, 'PORT', NULL, NULL, '港口数据导出模板', 1, NULL, NULL, NULL, NULL, 'HXRC', 1, 0),
('委托列表', 'B', 'xls', 15, NULL, NULL, NULL, '委托列表导出模板', 1, NULL, NULL, NULL, NULL, 'HXRC', 1, 1),
('委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '委托列表导出模板', 1, NULL, NULL, NULL, NULL, 'HXRC', 0, 0),
('单票审核', 'B', 'xls', 16, 'CONS_AUDIT', '单票审核', NULL, '单票审核导出模板', 1, NULL, NULL, NULL, NULL, 'HXRC', 1, 1),
('单票审核', 'B', 'xls', 16, 'CONS_AUDIT', '单票审核', NULL, '单票审核导出模板', 1, NULL, NULL, NULL, NULL, 'HXRC', 0, 0),
(' 测试', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '测试', 1, NULL, NULL, NULL, NULL, 'HXRC', 1, 1),
('发票模板', 'B', 'xls', 9, 'INVO', '发票模板', NULL, '发票套打模板', 1, NULL, NULL, NULL, NULL, 'HXRC', 0, 0),
('对账单', 'B', 'xls', 17, 'BILL', '对账单', NULL, '对账单输出模板', 1, NULL, NULL, NULL, NULL, 'HXRC', 0, 0),
('HBL提单', 'B', 'xls', 1, 'BL', '提单模板', NULL, 'HBL提单', 1, 1, '2008-08-21 00:00:00', 3, '2008-10-27 00:00:00', 'HXRC', 1, 0),
('出口报检单模板', 'B', 'xls', 5, 'INSP', '报检单模板', NULL, '出口报检单套打模板', 1, 1, '2008-08-23 00:00:00', 1, '2008-08-23 00:00:00', 'HXRC', 0, 0),
('出口报关单模板', 'B', 'xls', 4, 'CUDE', '报关单模板', NULL, '出口报关单模板', 1, 1, '2008-08-24 00:00:00', 1, '2008-08-24 00:00:00', 'HXRC', 0, 0),
('装箱单', 'B', 'xls', 8, 'CONT', '装箱单模板', NULL, '装箱单模板', 1, 1, '2008-08-25 00:00:00', 1, '2008-08-25 00:00:00', 'HXRC', 0, 0),
('十联单模板', 'B', 'xls', 7, 'CONS', '十联单模板', NULL, '十联单套打模板', 1, 1, '2008-08-26 00:00:00', 1, '2008-08-26 00:00:00', 'HXRC', 0, 0),
('门到门装箱通知', 'B', 'doc', 18, 'WARE_INFO', '进仓通知', NULL, '门到门装箱通知', 1, 1, '2008-08-27 00:00:00', 3, '2008-10-29 10:56:54', 'HXRC', 1, 0),
('订舱确认书', 'B', 'xls', 19, 'BOOK_C', '订舱确认书', NULL, '订舱确认书模板', 1, 1, '2008-09-01 00:00:00', 1, '2008-09-01 00:00:00', 'HXRC', 0, 0),
('代运联系单', 'B', 'xls', 20, 'TRAN', '代运联系单', NULL, '代运联系单模板', 1, 1, '2008-09-02 00:00:00', 1, '2008-09-02 00:00:00', 'HXRC', 0, 0),
('仓储联系单', 'B', 'xls', 21, 'WARE', '仓储联系单', NULL, '仓储联系单模板', 1, 1, '2008-09-02 00:00:00', 1, '2008-09-02 00:00:00', 'HXRC', 0, 0),
('电放保函', 'B', 'xls', 22, 'BLER', '电放保函', NULL, '电放保函模板', 1, 1, '2008-09-09 00:00:00', 81, '2009-01-17 21:55:26', 'HXRC', 2, 0),
('SEAWAYBILL保函', 'B', 'xls', 23, 'SEAW', 'SEAWAYBILL保函', NULL, 'SEAWAYBILL保函模板', 1, 1, '2008-09-10 00:00:00', 1, '2008-09-10 00:00:00', 'HXRC', 0, 0),
('进口分拨申请', 'B', 'xls', 24, 'SPLI', '进口分拨申请', NULL, '进口分拨申请模板', 1, 1, '2008-09-11 00:00:00', 1, '2008-09-11 00:00:00', 'HXRC', 0, 0),
('进口提货单', 'B', 'xls', 25, 'DO', '进口提货单', NULL, '进口提货单标准模板', 1, 1, '2008-09-12 00:00:00', 1, '2008-09-12 00:00:00', 'HXRC', 0, 0),
('提单模板', 'B', 'doc', 1, 'BL', '提单模板', NULL, '提单模板xx', 1, 1, '2008-10-07 00:00:00', 81, '2009-01-17 21:57:11', 'HXRC', 3, 0),
('订舱委托书', 'B', 'xls', 26, 'CONS_B', '订舱委托书', NULL, '订舱委托书模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', 'HXRC', 0, 0),
('报关单模板', 'B', 'xls', 5, 'INSP', '报检单模板', NULL, NULL, 1, 1, '2008-10-14 00:00:00', 1, '2008-10-20 00:00:00', 'HXRC', 1, 1),
('仓库装箱通知', 'B', 'doc', 18, 'WARE_INFO', '装箱通知单', NULL, '仓库装箱通知', 1, 3, '2008-10-29 11:01:36', 3, '2008-10-29 11:01:36', 'HXRC', 0, 0),
('进口到货通知', 'B', 'doc', 27, 'ARAD', '进口到货通知', NULL, '进口到货通知', 1, 3, '2008-10-29 11:24:45', 3, '2008-10-29 11:24:45', 'HXRC', 0, 0),
('出入境检验检疫更改申请单', 'B', 'doc', 5, 'INSP', '报检单模板', NULL, '商检更改单', 1, 11, '2008-11-07 00:00:00', 11, '2008-11-07 11:38:27', 'HXRC', 1, 0),
('单证输出模板', 'B', 'xls', 30, 'FDOC_LIST', '单证清单输出模板', NULL, '单证输出模板', 1, 3, '2008-11-27 10:51:37', 3, '2008-11-27 10:51:37', 'HXRC', 0, 0),
('核销明细', 'B', 'xls', 31, 'VOUC_LIST', '核销明细', NULL, '核销明细', 1, 3, '2008-11-28 13:57:20', 3, '2008-11-28 13:57:20', 'HXRC', 0, 0),
('运价表', 'B', 'xls', 32, 'PRSH_LIST', '运价表', NULL, '运价表', 1, 3, '2008-12-02 15:51:34', 3, '2008-12-02 15:51:34', 'HXRC', 0, 0),
('配载清单', 'B', 'xls', 33, 'LOLI', '配载清单', NULL, '航次配载清单', 1, 3, '2009-01-02 23:24:28', 3, '2009-01-02 23:24:28', 'HXRC', 0, 0),
('散货出口托运单', 'B', 'xls', 26, 'CONS_B', '订舱委托书', NULL, '散货出口托运单', 1, 3, '2009-02-13 00:00:00', 3, '2009-02-13 10:41:33', 'HXRC', 1, 0),
('HYUNDAI BL', 'B', 'xls', 1, 'BL', '提单模板', NULL, 'HYUNDAI 提单模板', 1, 3, '2009-02-13 11:56:48', 3, '2009-02-13 11:56:48', 'HXRC', 0, 0),
('费用确认单', 'B', 'xls', 34, 'EXPE_CONFIRM', '费用确认单', NULL, '费用确认单', 1, 3, '2009-02-16 14:05:57', 3, '2009-02-16 14:05:57', 'HXRC', 0, 0),
('Nationality Of Ocean Vessel BL', 'B', 'xls', 1, 'BL', '提单模板', NULL, 'Nationality Of Ocean Vessel BL', 1, 3, '2009-02-17 11:07:49', 3, '2009-02-17 11:07:49', 'HXRC', 0, 0),
('出口散货报关单', 'B', 'xls', 4, 'CUDE', '报关单模板', NULL, '出口散货报关单', 1, 3, '2009-02-17 12:27:37', 3, '2009-02-17 12:27:37', 'HXRC', 0, 0),
('运价表', 'B', 'xls', 32, 'PRSH_LIST', '运价表', NULL, '运价表', 1, 3, '2009-02-19 15:05:02', 3, '2009-02-19 15:05:02', 'HXRC', 0, 0),
('发货清单导入模板', 'B', 'xls', 35, 'PALI_IMPORT', '发货清单导入模板', NULL, '发货清单批量导入', 1, 2, '2009-02-24 20:35:22', 2, '2009-02-24 20:35:22', 'HXRC', 0, 0),
('账单清单模板', 'B', 'xls', 36, 'INVO_LIST', '账单清单', NULL, '账单清单模板', 1, 3, '2009-03-22 20:50:02', 3, '2009-03-22 20:50:02', 'HXRC', 0, 0),
('DebitNote模板', 'B', 'xls', 9, 'INVO', '发票模板', NULL, 'DebitNote模板', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', 'HXRC', 0, 0);

--
-- 导出表中的数据 `S_EX_RATE`
--

INSERT INTO `S_EX_RATE` (`EXRA_BASE_CURRENCY`, `EXRA_EX_CURRENCY`, `EXRA_START_DATE`, `EXRA_END_DATE`, `EXRA_RATE`, `ACTIVE`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('USD', 'CNY', '2009-02-09', NULL, '6.8340', 1, 2, '2009-02-09 15:14:46', 'HXRC', 0, 0),
('CNY', 'USD', '2009-02-09', NULL, '0.1463', 1, 2, '2009-02-09 15:14:46', 'HXRC', 0, 0);

--
-- 导出表中的数据 `G_PORT`
--

INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('ALSAR', 'SARANDE', '萨兰达', 0, 1, 'AL', 0, 0, 'HXRC'),
('ALSGN', 'SHENGJIN', '圣吉尼', 0, 1, 'AL', 0, 0, 'HXRC'),
('ALVLO', 'VALONA', '发罗拉', 0, 1, 'AL', 0, 0, 'HXRC'),
('ALDRS', 'DURRES', '都拉斯', 0, 1, 'AL', 0, 0, 'HXRC'),
('TIRA', 'TIRANA', '', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZANN', 'ANNABA', '安纳巴', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZARZ', 'ARZEW', '阿尔泽', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZBEN', 'BENISAF', '贝尼萨夫', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZBJA', 'BEJAIA', '贝贾亚', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZCHE', 'CHERCHELL', '舍尔沙勒', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZCOL', 'COLLO', '科洛', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZDLS', 'DELLYS', '代利斯', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZELD', 'ALGIERS', '阿尔及尔', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZSKI', 'SKIKDA', '斯基克达', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZTEN', 'TENES', '提奈斯', 0, 1, 'AL', 0, 0, 'HXRC'),
('DZWAH', 'ORAN', '瓦赫兰', 0, 1, 'AL', 0, 0, 'HXRC'),
('ALDJI', 'DJIDJELLI', '吉杰利', 0, 1, 'AL', 0, 0, 'HXRC'),
('ALGER', 'ALGER', '阿尔及尔', 0, 1, 'AL', 0, 0, 'HXRC'),
('USPEN', 'PENSACOLA', '彭萨科拉', 0, 1, 'US', 0, 0, 'HXRC'),
('USPET', 'PETERSBURG', '彼得斯堡', 0, 1, 'US', 0, 0, 'HXRC'),
('USPEV', 'PORT EVERGLADES', '埃弗格雷斯港', 0, 1, 'US', 0, 0, 'HXRC'),
('USPHI', 'PHILADELPHIA', '费城', 0, 1, 'US', 0, 0, 'HXRC'),
('USPHU', 'PORT HUENEME', '怀尼米港', 0, 1, 'US', 0, 0, 'HXRC'),
('USPIS', 'PORT ISABEL(US)', '伊萨贝尔港', 0, 1, 'US', 0, 0, 'HXRC'),
('USPLB', 'PALM BEACH', '棕榈滩', 0, 1, 'US', 0, 0, 'HXRC'),
('USPLD', 'PORTLAND(US)', '波特兰', 0, 1, 'US', 0, 0, 'HXRC'),
('USPLY', 'PLYMOUTH(US)', '普列茅斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USPRE', 'PROVIDENCE', '普罗维登斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USPRO', 'PORT ROYAL(US)', '罗亚尔港', 0, 1, 'US', 0, 0, 'HXRC'),
('USPSH', 'PORTSMOUTH(US)', '朴次茅斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USPSJ', 'PORT ST. JOE', '圣乔港', 0, 1, 'US', 0, 0, 'HXRC'),
('USPSL', 'PORT SAN LUIS', '圣路易斯港', 0, 1, 'US', 0, 0, 'HXRC'),
('USPSU', 'PORT SULPHUR', '萨尔弗港', 0, 1, 'US', 0, 0, 'HXRC'),
('USPTO', 'PORT TOWNSEND', '汤森港', 0, 1, 'US', 0, 0, 'HXRC'),
('USSAV', 'SAVANNAH(GA.)', '萨凡纳', 0, 1, 'US', 0, 0, 'HXRC'),
('USSBA', 'SANTA BARBARA(US)', '圣巴巴拉', 0, 1, 'US', 0, 0, 'HXRC'),
('USSDI', 'SAN DIEGO', '圣迭戈', 0, 1, 'US', 0, 0, 'HXRC'),
('USSEA', 'SEATTLE,WA', '西雅图', 0, 1, 'US', 0, 0, 'HXRC'),
('USSEW', 'SEWARD', '苏厄德', 0, 1, 'US', 0, 0, 'HXRC'),
('USROC', 'ROCHESTER(US)', '罗切斯特', 0, 1, 'US', 0, 0, 'HXRC'),
('USSAB', 'SABIN', '萨宾', 0, 1, 'US', 0, 0, 'HXRC'),
('USSAC', 'SACRAMENTO', '萨克拉门托', 0, 1, 'US', 0, 0, 'HXRC'),
('USSFO', 'SAN FRANCISCO', '旧金山', 0, 1, 'US', 0, 0, 'HXRC'),
('USSPE', 'SAN PEDRO(U.S.A', '圣佩德罗', 0, 1, 'US', 0, 0, 'HXRC'),
('USSPG', 'ST. PETERSBURG', '圣彼得斯堡', 0, 1, 'US', 0, 0, 'HXRC'),
('USSPT', 'SEARSPORT', '锡斯波特', 0, 1, 'US', 0, 0, 'HXRC'),
('USSTO', 'STOCKTO(US)', '斯托克顿', 0, 1, 'US', 0, 0, 'HXRC'),
('USSWH', 'SANDWICH(US)', '桑德威奇', 0, 1, 'US', 0, 0, 'HXRC'),
('USTAC', 'TACOMA,WA', '塔科马', 0, 1, 'US', 0, 0, 'HXRC'),
('USTAM', 'TAMPA', '坦帕', 0, 1, 'US', 0, 0, 'HXRC'),
('USTXC', 'TEXAS CITY', '得克萨斯城', 0, 1, 'US', 0, 0, 'HXRC'),
('USVAL', 'VALDEZ', '瓦尔迪兹', 0, 1, 'US', 0, 0, 'HXRC'),
('USVAN', 'VANCOUVER(US)', '温哥华', 0, 1, 'US', 0, 0, 'HXRC'),
('USWAS', 'WASHINGTON(US)', '华盛顿', 0, 1, 'US', 0, 0, 'HXRC'),
('USWIL', 'WILMINGTON(N.C)', '威尔明顿(北卡罗来)', 0, 1, 'US', 0, 0, 'HXRC'),
('USWMN', 'WILMINGTON(DEL.', '威尔明顿(特拉华州)', 0, 1, 'US', 0, 0, 'HXRC'),
('USWRA', 'WRANGELL', '兰格尔', 0, 1, 'US', 0, 0, 'HXRC'),
('USFLR', 'FALL RIVER', '福尔里弗', 0, 1, 'US', 0, 0, 'HXRC'),
('USFNA', 'FERNANDINA', '费南迪纳', 0, 1, 'US', 0, 0, 'HXRC'),
('USFRE', 'FREEPORT(US)', '弗里波特', 0, 1, 'US', 0, 0, 'HXRC'),
('USGAL', 'GALVESTON', '加尔维斯顿', 0, 1, 'US', 0, 0, 'HXRC'),
('USGDH', 'GOOD HOPE(US)', '好望角', 0, 1, 'US', 0, 0, 'HXRC'),
('USGEO', 'GEORGETOWN(US)', '乔治敦', 0, 1, 'US', 0, 0, 'HXRC'),
('USGHN', 'GRAND HAVEN', '格兰德黑文', 0, 1, 'US', 0, 0, 'HXRC'),
('USGRH', 'GRAYS HARBOUR', '格雷斯港', 0, 1, 'US', 0, 0, 'HXRC'),
('USGUL', 'GULFPORT', '格尔夫波特', 0, 1, 'US', 0, 0, 'HXRC'),
('USHMR', 'HOMER', '荷马', 0, 1, 'US', 0, 0, 'HXRC'),
('USGLO', 'GLOUCESTER(MASS', '格洛斯特', 0, 1, 'US', 0, 0, 'HXRC'),
('USGRB', 'GREEN BAY', '格林贝', 0, 1, 'US', 0, 0, 'HXRC'),
('USHOP', 'HOPEWELL', '霍普韦尔', 0, 1, 'US', 0, 0, 'HXRC'),
('USHOU', 'HOUSTON', '休斯敦', 0, 1, 'US', 0, 0, 'HXRC'),
('USJAC', 'JACKSONVILLE', '杰克逊维尔', 0, 1, 'US', 0, 0, 'HXRC'),
('USJUN', 'JUNEAU', '朱诺', 0, 1, 'US', 0, 0, 'HXRC'),
('USKEN', 'KENOSHA', '基诺沙', 0, 1, 'US', 0, 0, 'HXRC'),
('USKET', 'KETCHIKAN', '凯奇坎', 0, 1, 'US', 0, 0, 'HXRC'),
('USLCS', 'LAKE CHARLES', '莱克查尔斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USLGB', 'LONG BEACH', '长滩', 0, 1, 'US', 0, 0, 'HXRC'),
('USLON', 'LONGVIEW', '隆维尤', 0, 1, 'US', 0, 0, 'HXRC'),
('USLOR', 'LORAIN', '洛雷恩', 0, 1, 'US', 0, 0, 'HXRC'),
('USLSA', 'LOS ANGELES,CA', '洛杉矶', 0, 1, 'US', 0, 0, 'HXRC'),
('USMAN', 'MANITOWOC', '马尼托沃克', 0, 1, 'US', 0, 0, 'HXRC'),
('USMIA', 'MIAMI', '迈阿密', 0, 1, 'US', 0, 0, 'HXRC'),
('USMOB', 'MOBILE', '莫比尔', 0, 1, 'US', 0, 0, 'HXRC'),
('USMON', 'MONROE', '门罗', 0, 1, 'US', 0, 0, 'HXRC'),
('USNET', 'NEWPORT(US)', '纽波特', 0, 1, 'US', 0, 0, 'HXRC'),
('USNEW', 'NEW CASTLE(US)', '纽卡斯尔', 0, 1, 'US', 0, 0, 'HXRC'),
('USNFK', 'NORFOLK(US)', '诺福克', 0, 1, 'US', 0, 0, 'HXRC'),
('USNBE', 'NEW BEDFORD', '新贝德福德', 0, 1, 'US', 0, 0, 'HXRC'),
('USNDN', 'NEW LONDON(CONN', '新伦敦', 0, 1, 'US', 0, 0, 'HXRC'),
('USNHA', 'NEW HAVEN(US)', '纽黑文', 0, 1, 'US', 0, 0, 'HXRC'),
('USNOL', 'NEW ORLEANS', '新奥尔良', 0, 1, 'US', 0, 0, 'HXRC'),
('USNOM', 'NOME', '诺姆', 0, 1, 'US', 0, 0, 'HXRC'),
('USNYK', 'NEW YORK,NY', '纽约', 0, 1, 'US', 0, 0, 'HXRC'),
('USOAK', 'OAKLAND,CA', '奥克兰', 0, 1, 'US', 0, 0, 'HXRC'),
('USORA', 'ORANGE', '奥兰治', 0, 1, 'US', 0, 0, 'HXRC'),
('USPAN', 'PORT ANGELES', '安吉利斯港', 0, 1, 'US', 0, 0, 'HXRC'),
('USPAR', 'PORT ARTHUR(US)', '阿瑟港', 0, 1, 'US', 0, 0, 'HXRC'),
('USPAS', 'PASCAGOULA', '帕斯卡古拉', 0, 1, 'US', 0, 0, 'HXRC'),
('ARCCO', 'CALETA CORDOVA', '科尔多瓦', 0, 1, 'US', 0, 0, 'HXRC'),
('PHOEN', 'PHOENIX AZ SDD', '', 0, 1, 'US', 0, 0, 'HXRC'),
('UMHON', 'HONOLULU', '火奴鲁鲁', 0, 1, 'US', 0, 0, 'HXRC'),
('USALP', 'ALPENA', '阿尔皮纳', 0, 1, 'US', 0, 0, 'HXRC'),
('USANA', 'ANACORTES', '阿纳科特斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USANC', 'ANCHORAGE', '安科雷奇', 0, 1, 'US', 0, 0, 'HXRC'),
('USANN', 'ANNAPOLIS(US)', '安纳波利斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USAPA', 'APALACHICOLA', '阿巴拉契科拉', 0, 1, 'US', 0, 0, 'HXRC'),
('USABE', 'ABERDEEN(US)', '阿伯丁', 0, 1, 'US', 0, 0, 'HXRC'),
('USALB', 'ALBANY(US)', '奥尔巴尼', 0, 1, 'US', 0, 0, 'HXRC'),
('USALE', 'ALEXANDRIA(US)', '亚历山德里亚', 0, 1, 'US', 0, 0, 'HXRC'),
('USASD', 'ASHLAND', '阿什兰', 0, 1, 'US', 0, 0, 'HXRC'),
('USASH', 'ASHTABULA', '阿什塔比拉', 0, 1, 'US', 0, 0, 'HXRC'),
('USAST', 'ASTORIA', '阿斯托里亚', 0, 1, 'US', 0, 0, 'HXRC'),
('USATO', 'ANTIOCH', '安蒂奥克', 0, 1, 'US', 0, 0, 'HXRC'),
('USATR', 'ATRECO', '阿特雷科', 0, 1, 'US', 0, 0, 'HXRC'),
('USBAL', 'BALTIMORE(US)', '巴尔的摩', 0, 1, 'US', 0, 0, 'HXRC'),
('USBAN', 'BANGOR(ME.)', '班戈', 0, 1, 'US', 0, 0, 'HXRC'),
('USBAT', 'BATH', '巴斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USBAY', 'BAY ROBERTS', '贝敦', 0, 1, 'US', 0, 0, 'HXRC'),
('USBCN', 'BUCHANAN(US)', '布坎南', 0, 1, 'US', 0, 0, 'HXRC'),
('USBEA', 'BEAUMONT', '博蒙特', 0, 1, 'US', 0, 0, 'HXRC'),
('USBEL', 'BELLINGHAM', '贝灵哈姆', 0, 1, 'US', 0, 0, 'HXRC'),
('USBER', 'BERKELEY', '伯克利', 0, 1, 'US', 0, 0, 'HXRC'),
('USBOS', 'BOSTON(US)', '波士顿', 0, 1, 'US', 0, 0, 'HXRC'),
('USBOY', 'BROOKLYN', '布鲁克林', 0, 1, 'US', 0, 0, 'HXRC'),
('USBRE', 'BREMERTON', '布雷默顿', 0, 1, 'US', 0, 0, 'HXRC'),
('USBRI', 'BRIDGEPORT', '布里奇波特', 0, 1, 'US', 0, 0, 'HXRC'),
('USBRO', 'BROWNSVILLE', '布朗斯维尔', 0, 1, 'US', 0, 0, 'HXRC'),
('USBRU', 'BRUNSWICK', '不伦瑞克', 0, 1, 'US', 0, 0, 'HXRC'),
('USCAM', 'CAMDEN', '卡姆登', 0, 1, 'US', 0, 0, 'HXRC'),
('USCAR', 'CARRABELLE', '卡拉贝尔', 0, 1, 'US', 0, 0, 'HXRC'),
('USCGE', 'CAMBRIDGE', '剑桥', 0, 1, 'US', 0, 0, 'HXRC'),
('USCHA', 'CHARLESTON', '查尔斯顿', 0, 1, 'US', 0, 0, 'HXRC'),
('USCHC', 'CHESAPEAKE CITY', '切萨皮克城', 0, 1, 'US', 0, 0, 'HXRC'),
('USCHE', 'CHEBOYGAN', '希博伊甘', 0, 1, 'US', 0, 0, 'HXRC'),
('USBTR', 'BATON ROUGE', '巴吞鲁日', 0, 1, 'US', 0, 0, 'HXRC'),
('USBUC', 'BUCKSPORT', '巴克斯波特', 0, 1, 'US', 0, 0, 'HXRC'),
('USBUF', 'BUFFALO', '布法罗', 0, 1, 'US', 0, 0, 'HXRC'),
('USCHI', 'CHICAGO', '芝加哥', 0, 1, 'US', 0, 0, 'HXRC'),
('USCHR', 'CHESTER', '切斯特', 0, 1, 'US', 0, 0, 'HXRC'),
('USCLE', 'CLEVELAND,OH', '克利夫兰', 0, 1, 'US', 0, 0, 'HXRC'),
('USCME', 'CHALMETTE', '沙尔梅特', 0, 1, 'US', 0, 0, 'HXRC'),
('USCOC', 'CORPUS CHRISTI', '科珀斯克里斯蒂', 0, 1, 'US', 0, 0, 'HXRC'),
('USCOH', 'CONNEAUT HARBOU', '康尼奥特港', 0, 1, 'US', 0, 0, 'HXRC'),
('USCOR', 'CORDOVA', '科尔多瓦', 0, 1, 'US', 0, 0, 'HXRC'),
('USCRP', 'CHERRY POINT', '切里波因特（樱桃角）', 0, 1, 'US', 0, 0, 'HXRC'),
('USCSB', 'COOS BAY', '库斯贝', 0, 1, 'US', 0, 0, 'HXRC'),
('USCVT', 'CONVENT', '康文特', 0, 1, 'US', 0, 0, 'HXRC'),
('USDUL', 'DULUTH', '德卢斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USDVT', 'DAVANT', '达文特', 0, 1, 'US', 0, 0, 'HXRC'),
('USERI', 'ERIE', '伊利', 0, 1, 'US', 0, 0, 'HXRC'),
('USESO', 'EL SEGUNDO', '埃尔塞贡多', 0, 1, 'US', 0, 0, 'HXRC'),
('USEUR', 'EUREKA', '尤里卡', 0, 1, 'US', 0, 0, 'HXRC'),
('USEVE', 'EVERETT(WASH.)', '埃弗里特', 0, 1, 'US', 0, 0, 'HXRC'),
('USDEB', 'DELAWARE BAY', '德拉华湾', 0, 1, 'US', 0, 0, 'HXRC'),
('USDES', 'DESTREHAN', '特斯特汉', 0, 1, 'US', 0, 0, 'HXRC'),
('USDET', 'DETROIT', '底特律', 0, 1, 'US', 0, 0, 'HXRC'),
('USDON', 'DONALDSONVILLE', '唐纳森维尔', 0, 1, 'US', 0, 0, 'HXRC'),
('JMSLM', 'SAVANNA LA MAR', '滨海萨凡纳', 0, 1, 'US', 0, 0, 'HXRC'),
('CAMAR', 'CAMARILLO', '', 0, 1, 'US', 0, 0, 'HXRC'),
('VERNO', 'VERNON HILLS', '', 0, 1, 'US', 0, 0, 'HXRC'),
('CHEL', 'CHELSEA MA (MLB)', '', 0, 1, 'US', 0, 0, 'HXRC'),
('GBBER', 'BERWICK', '伯威克', 0, 1, 'US', 0, 0, 'HXRC'),
('USDAL', 'DALLAS', '达拉斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USAL', 'ALAMEDA', '阿拉米达', 0, 1, 'US', 0, 0, 'HXRC'),
('AMAN', 'ANACORTES', '安那柯的斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USATL', 'ATLANTA', '亚特兰大', 0, 1, 'US', 0, 0, 'HXRC'),
('USALO', 'LAREDO,TX', '拉雷多', 0, 1, 'US', 0, 0, 'HXRC'),
('USDEN', 'DENVER,CO', '', 0, 1, 'US', 0, 0, 'HXRC'),
('USLOU', 'LOUISVILLE,KY', '', 0, 1, 'US', 0, 0, 'HXRC'),
('USSTL', 'ST-LOUIS,MO', '圣陆易斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USCIN', 'CINCINNATI,OH', '新新那提', 0, 1, 'US', 0, 0, 'HXRC'),
('USKNT', 'KENT,WA', '', 0, 1, 'US', 0, 0, 'HXRC'),
('NEWOL', 'NEW ORLEANS,LA', '新奥尔良', 0, 1, 'US', 0, 0, 'HXRC'),
('USCPN', 'COMPTON', '', 0, 1, 'US', 0, 0, 'HXRC'),
('USCOI', 'CITY OF INDUSTRY', '工业城', 0, 1, 'US', 0, 0, 'HXRC'),
('SPRIN', 'SPRINGFIELD', '密苏里洲', 0, 1, 'US', 0, 0, 'HXRC'),
('USITN', 'IRVINGTON,NJ', '', 0, 1, 'US', 0, 0, 'HXRC'),
('USCOL', 'COLUMBUS,OH', '哥伦布斯', 0, 1, 'US', 0, 0, 'HXRC'),
('USKAN', 'KANSAS CITY,MO', '坎萨斯城', 0, 1, 'US', 0, 0, 'HXRC'),
('USNAS', 'NASHVILLE,TN', '', 0, 1, 'US', 0, 0, 'HXRC'),
('OMAHA', 'OMAHA,NE', '奥马哈', 0, 1, 'US', 0, 0, 'HXRC'),
('LAKE', 'SALT LAKE CITY', '盐湖城', 0, 1, 'US', 0, 0, 'HXRC'),
('HUNTS', 'HUNTSVILLE(AL)', '阿拉巴马洲', 0, 1, 'US', 0, 0, 'HXRC'),
('ST.LO', 'ST.LOUIS(MO)', '密苏里洲', 0, 1, 'US', 0, 0, 'HXRC'),
('TUCSO', 'TUCSON(AZ)', '亚利桑那洲', 0, 1, 'US', 0, 0, 'HXRC'),
('TUOK', 'TULSA(OK)', '奥克拉马哈洲', 0, 1, 'US', 0, 0, 'HXRC'),
('132', 'FORT WORTH', '', 0, 1, 'US', 0, 0, 'HXRC'),
('SEA', 'SEATTLE', '西雅图', 0, 1, 'US', 0, 0, 'HXRC'),
('USLO', 'LOS ANGELES', '洛杉机', 0, 1, 'US', 0, 0, 'HXRC'),
('CALH', 'CALHOUN GA', '', 0, 1, 'US', 0, 0, 'HXRC'),
('OXN', 'OXNARD', '奥克兰', 0, 1, 'US', 0, 0, 'HXRC'),
('ELIZ', 'ELIZABETH', '伊利沙白港', 0, 1, 'US', 0, 0, 'HXRC'),
('EL P', 'EL PASO', '埃尔帕索', 0, 1, 'US', 0, 0, 'HXRC'),
('KNOX', 'KNOXVILLE(TN)', '田那西洲', 0, 1, 'US', 0, 0, 'HXRC'),
('MINN', 'MINNEAPOLIS(MN)', '缅因洲', 0, 1, 'US', 0, 0, 'HXRC'),
('ST.P', 'ST.PAUL(MN)', '缅因洲', 0, 1, 'US', 0, 0, 'HXRC'),
('SGA', 'SOUTHGATE', '', 0, 1, 'US', 0, 0, 'HXRC'),
('OAAK', 'OAKLAND', '奥克兰', 0, 1, 'US', 0, 0, 'HXRC'),
('NPN', 'NEW PORTNEWS', '', 0, 1, 'US', 0, 0, 'HXRC'),
('CNEW', 'NEW YORK', '纽约', 0, 1, 'US', 0, 0, 'HXRC'),
('AOABZ', 'AMBRIZ', '安布里什', 0, 1, 'AO', 0, 0, 'HXRC'),
('AOAMB', 'AMBRIZETE', '安布里泽特', 0, 1, 'AO', 0, 0, 'HXRC'),
('AOBEN', 'BENGUELA', '本格拉', 0, 1, 'AO', 0, 0, 'HXRC'),
('AOCAB', 'CABINDA', '卡宾达', 0, 1, 'AO', 0, 0, 'HXRC'),
('AOLOB', 'LOBITO', '洛比托', 0, 1, 'AO', 0, 0, 'HXRC'),
('AOLUA', 'LUANDA', '罗安达', 0, 1, 'AO', 0, 0, 'HXRC'),
('AOMOC', 'MOCAMEDES', '木萨米迪什', 0, 1, 'AO', 0, 0, 'HXRC'),
('AONRE', 'NOVO REDONDO', '新里东杜', 0, 1, 'AO', 0, 0, 'HXRC'),
('ARPDE', 'PUERTO DESEADO', '德塞阿多港', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARPMA', 'PUERTO MADRYN', '马德林港', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARRGA', 'RIO GALLEGOS', '里奥加耶戈斯', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARROS', 'ROSARIO', '罗萨里奥', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARSFE', 'SANTA FE', '圣菲', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARSLO', 'SAN LORENZO(AR)', '圣洛伦索', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARSNS', 'SAN NICOLAS(AR)', '圣尼古拉斯', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARSPE', 'SAN PEDRO(AR)', '圣佩德罗', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARSSB', 'SAN SEBASTIAN B', '圣塞瓦斯蒂安', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARVCO', 'VILLA CONSTITUC', '孔斯蒂图西翁镇', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARZAR', 'ZARATE', '萨拉特', 0, 1, 'AR', 0, 0, 'HXRC'),
('ACPDR', 'PUERTO DEL ROSAIO', '罗萨里奥港', 0, 1, 'AR', 0, 0, 'HXRC'),
('ANSNB', 'SAN NICOLAS BAY', '圣尼古拉斯湾', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARBBL', 'BAHIA BLANCA', '布兰卡港', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARBNA', 'BUENOS AIRES', '布宜诺斯艾利斯', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARCAM', 'CAMPANA', '坎帕纳', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARCOR', 'COMODORO RIVADAVIA', '里瓦达维亚', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARLPL', 'LA PLATA', '拉普拉塔', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARMDP', 'MAR DEL PLATA', '马德普拉塔', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARNEC', 'NECOCHEA', '内科切阿', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARDES', 'DESEADO', '德塞阿多', 0, 1, 'AR', 0, 0, 'HXRC'),
('ARYER', 'YEREVAN', '', 0, 1, 'AR', 0, 0, 'HXRC'),
('CHACO', 'CHACO', '', 0, 1, 'AR', 0, 0, 'HXRC'),
('VANA', 'VANADZOR', '', 0, 1, 'AM', 0, 0, 'HXRC'),
('AUADE', 'ADELAIDE', '阿德莱德', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUALB', 'ALBANY(AU)', '奥尔巴尼', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUARD', 'ARDROSSAN(AU)', '阿德罗森', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUBAI', 'BARROW ISLAND(A', '巴罗岛', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUBDG', 'BUNDABERG', '班达伯格', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUBLB', 'BELL BAY', '皮尔湾', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUBNE', 'BURNIE', '伯尼', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUBOW', 'BOWEN', '鲍恩', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUBRI', 'BRISBANE', '布里斯班', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUBRO', 'BROOME', '布鲁姆', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUBTB', 'BOTANY BAY', '博物学家角', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUBUN', 'BUNBURY', '班伯里', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUBUS', 'BUSSELTON', '巴瑟尔顿', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUCA', 'CARNARVON', '卡那封', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUDBY', 'COCKATOO', '德比', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUDEV', 'DEVONPORT', '德文波特', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUDPR', 'DAMPIER', '丹皮尔', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUDWN', 'DARWIN', '达尔文', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUEDI', 'EDITHBURGH', '伊迪斯堡', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUCLT', 'CAPE LAMBERT', '拉姆贝特角', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUCNS', 'CAIRNS', '凯恩斯', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUCOO', 'COOKTOWN', '库克敦', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUCFH', 'COFF''S HARBOUR', '科夫斯港', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUEDN', 'EDEN', '伊登', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUESP', 'ESPERANCE', '埃斯佩兰斯', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUFRE', 'FREMANTLE', '弗里曼特尔', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUGEE', 'GEELONG', '吉朗', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUGER', 'GERALDTON', '杰拉尔顿', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUGET', 'GROOTE EYLANDT', '格鲁特岛', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUGLA', 'GLADSTONE(W.A.)', '格拉德斯通', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUGLE', 'GLADSTONE(QUE)', '格拉德斯通（东）', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUGRA', 'GRAFTON', '格拉夫顿', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUHBT', 'HOBART', '霍巴特', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUKIN', 'KINGSTON(AU)', '金斯敦', 0, 1, 'AU', 0, 0, 'HXRC'),
('AULUC', 'LUCINDA', '卢辛达', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUMAR', 'MARYBOROUGH', '马里伯勒', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUMEL', 'MELBOURNE', '墨尔本', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUNEW', 'NEWCASTLE(N.S.W', '纽卡斯尔', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPAA', 'PORT ALMA', '阿尔马港', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPAD', 'Port Adelaide', '阿德莱德港', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPAL', 'PORT ALFRED(AU)', '艾尔弗雷德港', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPAU', 'PORT AUGUSTA', '奥古斯塔港', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPHE', 'PORT HEDLAND', '黑德兰港', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPLD', 'PORTLAND(AUS)', '波特兰', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPLI', 'PORT LINCOLN', '林肯港', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPMA', 'PORT MACGUARIE', '麦夸里港', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPST', 'PORT STANVAC', '斯坦瓦克港', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPWA', 'PORT WALCOTT', '澳尔科特港', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUROC', 'ROCKHAMPTON', '罗克汉普顿', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUTHU', 'THURSDAY ISLAND', '星期四岛', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUTVD', 'THEVENARD', '泰弗纳德', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUWAL', 'WALLAROO', '沃拉鲁', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUWDM', 'WYNDHAM', '温德姆', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUWHY', 'WHYALLA', '怀阿拉', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUURA', 'URANGAN', '尤兰根', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUWPA', 'WEIPA', '韦帕', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUYSD', 'YAMPI SOUND', '扬皮桑德', 0, 1, 'AU', 0, 0, 'HXRC'),
('AEMUI', 'Mubarras lsland', '穆巴腊角', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUPER', 'PERTH (AU)', '佩斯', 0, 1, 'AU', 0, 0, 'HXRC'),
('AUARG', 'SALZBURG', '萨尔茨堡', 0, 1, 'AU', 0, 0, 'HXRC'),
('DAVE', 'DAVENPORT', '', 0, 1, 'AU', 0, 0, 'HXRC'),
('SYDE', 'SYDNEY(AU)', '悉尼', 0, 1, 'AU', 0, 0, 'HXRC'),
('GRAZ', 'GRAZ', '', 0, 1, 'AU', 0, 0, 'HXRC'),
('CANB', 'CANBERRA', '堪培拉', 0, 1, 'AU', 0, 0, 'HXRC'),
('ATVIE', 'VIENNA', '维也纳', 0, 1, 'AT', 0, 0, 'HXRC'),
('ATSAL', 'SALZBERG', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('AIKOR', 'KORLACH', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('AIKUF', 'KUFSTEIN', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('AILIZ', 'LINZ', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('AUFUR', 'FURNITZ', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('MESS', 'MESSENDORF', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('WEL', 'WELS', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('WIEN', 'WIEN-NORDWEST', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('WIEF', 'WIEN-FREUDENAU', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('VISU', 'VILLACH-SUED', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('WOLF', 'WOLFURT', '', 0, 1, 'AT', 0, 0, 'HXRC'),
('BABAH', 'BAHRAIN', '巴林', 0, 1, 'BH', 0, 0, 'HXRC'),
('BDCNA', 'CHALNA', '查尔钠港', 0, 1, 'BD', 0, 0, 'HXRC'),
('BDCTG', 'CHITTAGONG', '吉大港', 0, 1, 'BD', 0, 0, 'HXRC'),
('BDKHU', 'KHULNA', '库尔纳', 0, 1, 'BD', 0, 0, 'HXRC'),
('BDMON', 'MONGLA', '蒙加拉', 0, 1, 'BD', 0, 0, 'HXRC'),
('BADHA', 'DHAKA', '达卡', 0, 1, 'BD', 0, 0, 'HXRC'),
('MODCC', 'DACCA', '达卡', 0, 1, 'BD', 0, 0, 'HXRC'),
('ICD', 'ICD KAMALAPUR', '', 0, 1, 'BD', 0, 0, 'HXRC'),
('BBBTN', 'BRIDGETOWN', '布里奇敦', 0, 1, 'BB', 0, 0, 'HXRC'),
('BEANT', 'ANTWERP', '安特卫普', 0, 1, 'BE', 0, 0, 'HXRC'),
('BEBRS', 'BRUGES', '布鲁日', 0, 1, 'BE', 0, 0, 'HXRC'),
('BEBRU', 'BRUSSELS', '布鲁塞尔', 0, 1, 'BE', 0, 0, 'HXRC'),
('BELGE', 'LIEGE', '列日', 0, 1, 'BE', 0, 0, 'HXRC'),
('BENIE', 'NIEUWPOORT', '尼乌波特', 0, 1, 'BE', 0, 0, 'HXRC'),
('BEOST', 'OSTEND', '奥斯坦德', 0, 1, 'BE', 0, 0, 'HXRC'),
('BEZEE', 'ZEEBRUGGE', '泽布吕赫', 0, 1, 'BE', 0, 0, 'HXRC'),
('BEGEN', 'GENT', '根特', 0, 1, 'BE', 0, 0, 'HXRC'),
('BJCOT', 'COTONOU', '科托努', 0, 1, 'BJ', 0, 0, 'HXRC'),
('BJPNO', 'PORTO NOVO(BJ)', '波多诺伏', 0, 1, 'BJ', 0, 0, 'HXRC'),
('BMHAM', 'HAMILTON(BM)', '哈密尔顿', 0, 1, 'BM', 0, 0, 'HXRC'),
('BMSGE', 'ST. GEORGE''S', '圣乔治', 0, 1, 'BM', 0, 0, 'HXRC'),
('GDSGE', 'ST. GEORGE', '圣乔治', 0, 1, 'BM', 0, 0, 'HXRC'),
('MXLPZ', 'LA PAZ', '拉巴斯', 0, 1, 'BO', 0, 0, 'HXRC'),
('BOGNE', 'GABERONE', '', 0, 1, 'BW', 0, 0, 'HXRC'),
('GBE', 'GABORONE', '哈博罗内', 0, 1, 'BW', 0, 0, 'HXRC'),
('ARRGR', 'RIO GRANDE(AR)', '里奥格兰德', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRAJU', 'ARACAJU', '阿拉卡茹', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRATI', 'ARACATI', '阿拉卡蒂', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRFLO', 'FLORIANOPOLIS', '弗洛里亚诺波利斯', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRFOR', 'FORTALEZA', '福塔莱萨', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRIJI', 'ITAJAI', '伊塔雅伊', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRBLM', 'BELEM(BR)', '贝伦', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRIQI', 'ITAQUI', '伊塔基', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRIUS', 'ILHEUS', '伊列乌斯', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRNAT', 'NATAL', '纳塔尔', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRNIT', 'NITEROI', '尼泰罗伊', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRPAL', 'PORTO ALEGRE', '阿雷格里港', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRPAR', 'PARANAGUA', '巴拉那瓜', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRPBA', 'PARNAIBA', '巴纳伊巴', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRMAC', 'MACEIO', '马塞约', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRMAN', 'MANAUS', '马瑙斯', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRMPA', 'MACAPA', '马卡帕', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRJPA', 'JOAO PESSOA', '若昂佩索阿', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRPEL', 'PELOTAS', '佩洛塔斯', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRRDJ', 'RIO DE JANEIRO', '里约热内卢', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRREC', 'RECIFE', '累西腓', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRSAL', 'SALVADOR', '萨尔瓦多', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRSFS', 'SANTO FRANCISCO DO SUL', '南圣弗兰西斯科', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRSPA', 'SAO PAULO', '圣保罗', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRSSE', 'SAO SEBASTIAO', '圣塞巴斯蒂昂', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRSTA', 'SANTANA', '圣安娜', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRSLM', 'SAO LUIZ DE MAR', '圣路易斯', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRSTM', 'SANTAREM', '圣塔伦', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRSTS', 'SANTOS', '桑托斯', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRTUB', 'TUBARAO', '图巴朗', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRVIC', 'VICTORIA', '维多利亚', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRAN', 'ANTONINA', '安托尼纳', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRSFD', 'SAN FRANCISCO DO SUL', '', 0, 1, 'BR', 0, 0, 'HXRC'),
('BRSAO', 'SAO FRANCISCO DO SUL', '', 0, 1, 'BR', 0, 0, 'HXRC'),
('PECEM', 'PECEM', '', 0, 1, 'BR', 0, 0, 'HXRC'),
('BNBSB', 'BANDAR SERI BEGAWAN', '斯里巴加湾港', 0, 1, 'BN', 0, 0, 'HXRC'),
('BNKBT', 'KUALA BELAIT', '白拉奕', 0, 1, 'BN', 0, 0, 'HXRC'),
('BNSER', 'SERIA', '诗里亚', 0, 1, 'BN', 0, 0, 'HXRC'),
('BRBR', 'BRUNEI', '文莱', 0, 1, 'BN', 0, 0, 'HXRC'),
('MUA', 'MUARA', '穆阿拉', 0, 1, 'BN', 0, 0, 'HXRC'),
('BGBAL', 'BALCHIK', '巴尔奇克', 0, 1, 'BG', 0, 0, 'HXRC'),
('BGBGS', 'BOURGAS', '布加斯', 0, 1, 'BG', 0, 0, 'HXRC'),
('BGKAV', 'KAVARNA', '卡瓦尔纳', 0, 1, 'BG', 0, 0, 'HXRC'),
('BGMIC', 'MICHURIN', '米丘林', 0, 1, 'BG', 0, 0, 'HXRC'),
('BGNES', 'NESSEBAR', '纳塞巴尔', 0, 1, 'BG', 0, 0, 'HXRC'),
('BGVAR', 'VARNA', '瓦尔纳', 0, 1, 'BG', 0, 0, 'HXRC'),
('BUSOF', 'SOFIA', '索非亚', 0, 1, 'BG', 0, 0, 'HXRC'),
('BUBUR', 'BURGAS', '布尔加斯', 0, 1, 'BG', 0, 0, 'HXRC'),
('PLOV', 'PLOVDIV', '', 0, 1, 'BG', 0, 0, 'HXRC'),
('MMAKY', 'AKYAB', '阿恰布', 0, 1, 'MM', 0, 0, 'HXRC'),
('MMBSN', 'BASSEIN', '勃生', 0, 1, 'MM', 0, 0, 'HXRC'),
('MMMOU', 'MOULMEIN', '毛淡棉', 0, 1, 'MM', 0, 0, 'HXRC'),
('BUSI', 'SITTWE', '实兑', 0, 1, 'MM', 0, 0, 'HXRC'),
('YAN', 'YANGON', '仰光', 0, 1, 'MM', 0, 0, 'HXRC'),
('CMDUA', 'DOUALA', '杜阿拉', 0, 1, 'CM', 0, 0, 'HXRC'),
('CO', 'KRIBI', '克里比', 0, 1, 'CM', 0, 0, 'HXRC'),
('GNVIC', 'VICTORIA(GN)', '维多利亚', 0, 1, 'CM', 0, 0, 'HXRC'),
('CADAL', 'DALHOUSIE', '达尔豪西', 0, 1, 'CA', 0, 0, 'HXRC'),
('CADIG', 'DIGBY', '迪格比', 0, 1, 'CA', 0, 0, 'HXRC'),
('CADWL', 'DINGWALL(CA)', '丁沃尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAESQ', 'ESQUIMALT', '埃斯奎莫尔特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAFOR', 'FORESTVILLE', '福雷斯特维尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAGAS', 'GASPE', '加斯佩', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAGBK', 'GRAND BANK', '格兰德班克', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAGEO', 'GEORGETOWN(CA)', '乔治敦', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAGOD', 'GODERICH', '戈德里奇', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAGSB', 'GOOSE BAY', '古斯湾', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAHAM', 'HAMILTON(CA)', '哈密尔顿', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAHAN', 'HANTSPORT', '汉茨波特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAHCT', 'HEART''S CONTENT', '哈茨康滕特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAHFX', 'HALIFAX', '哈利法克斯', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAHGR', 'HARBOUR GRACE', '格雷斯港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAKIN', 'KINGSTON(CA)', '金斯顿', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAKIT', 'KITIMAT', '基提马特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CALAH', 'LA HAVE', '勒黑夫', 0, 1, 'CA', 0, 0, 'HXRC'),
('CALEA', 'LEAMINGTON', '利明顿', 0, 1, 'CA', 0, 0, 'HXRC'),
('CALIV', 'LIVERPOOL(CA)', '利物浦', 0, 1, 'CA', 0, 0, 'HXRC'),
('CALOC', 'LOCKEPORT', '洛克波特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CALOU', 'LOUISBURG', '路易斯堡', 0, 1, 'CA', 0, 0, 'HXRC'),
('CALSC', 'LIS COMB', '利斯科姆', 0, 1, 'CA', 0, 0, 'HXRC'),
('CALUN', 'LUNENBURG', '卢嫩堡', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAMAT', 'MATANE', '马塔讷', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAMET', 'METEGHAN', '梅泰根', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAMID', 'MIDLAND(ONT.)', '米德兰', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAMLS', 'MONT LOUIS', '蒙路易', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAMTL', 'MONTREAL', '蒙特利尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CANSY', 'NORTH SYDNEY', '北锡德尼', 0, 1, 'CA', 0, 0, 'HXRC'),
('CANWE', 'NEW WESTMINSTER', '新威斯敏斯特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAOAK', 'OAKVILLE(ONT.)', '奥克维尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAOFS', 'OCEAN FALLS', '福尔斯海', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAOSD', 'OWEN SOUND', '欧文桑德', 0, 1, 'CA', 0, 0, 'HXRC'),
('CANEW', 'NEWCASTLE(N.B.)', '纽卡斯尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CANGL', 'NEW GLASGOW', '新格拉斯哥', 0, 1, 'CA', 0, 0, 'HXRC'),
('CANMO', 'NANAIMO', '纳奈莫', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAOSH', 'OSHAWA(ONT.)', '奥沙瓦', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPAD', 'PORT ALFRED(CA)', '艾尔夫雷德港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPAE', 'PORT ALICE', '艾利斯港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPAR', 'PARRSBORO', '帕斯博勒', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPAS', 'PASPEBIAC', '帕斯佩比亚克', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPCA', 'PORT CARTIER', '卡提尔港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPCO', 'PORT COLBORNE(O', '科尔本港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPCR', 'PORT CREDIT(ONT', '克雷迪特港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPHA', 'PORT HAWKESBURY', '霍克斯伯里港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPHO', 'PORT HOPE(ONT.)', '霍普港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPIC', 'PICTOU', '皮克图', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPME', 'PORT MEDWAY', '梅德韦港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPOR', 'POWELL RIVER', '鲍威尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPRE', 'PRESCOTT(CA)', '普雷斯科特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAPSD', 'PARRY SOUND', '帕里桑德', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAQBC', 'QUEBEC', '魁北克', 0, 1, 'CA', 0, 0, 'HXRC'),
('CARDL', 'RIVIERE DU LOUP', '里维耶尔－迪卢', 0, 1, 'CA', 0, 0, 'HXRC'),
('AGSJS', 'ST. JOHNS(AG)', '圣约翰斯', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASAN', 'ST. ANDREWS(CA)', '圣安德鲁斯', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASAR', 'SARNIA(ONT.)', '萨尔尼亚', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASDC', 'SHEDIAC', '谢迪艾克', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASHE', 'SHELBURNE(N.S.)', '谢尔本', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASHI', 'SHIPPEGAN', '希皮根', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASPR', 'SPRINGDALE', '斯普林代尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASRL', 'SORLE', '索雷尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASSM', 'SAULT STE. MARI', '苏圣马丽', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASTH', 'SHEET HARBOUR', '希特港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASTT', 'STEWART', '斯图尔特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASUM', 'SUMMERSIDE', '萨默塞德', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASYD', 'SYDNEY(CA)', '悉尼', 0, 1, 'CA', 0, 0, 'HXRC'),
('CATAD', 'TADUSSAC', '塔杜萨克', 0, 1, 'CA', 0, 0, 'HXRC'),
('CATHO', 'THOROLD', '索罗尔德', 0, 1, 'CA', 0, 0, 'HXRC'),
('CATHR', 'THREE RIVERS', '三河城', 0, 1, 'CA', 0, 0, 'HXRC'),
('CATWI', 'TWILLINGATE', '特威林盖特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAVCR', 'VANCOUVER,CANADA', '温哥华', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAVIC', 'VICTORIA(CA)', '维多利亚', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAWEY', 'WEYMOUTH(CA)', '韦默思', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAWOO', 'WOODFIBRE', '伍德菲伯', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAYAR', 'YARMOUTH(CA)', '雅茅思', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAAKL', 'AKLAVIK', '阿克拉维克', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAAMH', 'AMHERSTBURG', '阿默斯特堡', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAANN', 'ANNAPOLIS(CA)', '安纳波利斯', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAARI', 'ARICHAT', '阿里沙特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAAST', 'AMHERST', '阿默斯特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CABAT', 'BATHURST', '巴瑟斯特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CABOT', 'BOTWOOD', '博特伍德', 0, 1, 'CA', 0, 0, 'HXRC'),
('CABRI', 'BRIDGEWATER', '布里奇沃特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CABRO', 'BROCKVILLE(ONT.', '布罗克维尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CABRS', 'BAY ROBERTS', '贝罗伯茨', 0, 1, 'CA', 0, 0, 'HXRC'),
('CABUC', 'BUCTOUCHE', '巴克图什', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACAM', 'CAMPBELLTON', '坎贝尔顿', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACAR', 'CARLETON', '卡尔顿', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACHA', 'CHARLOTTETOWN(N', '夏洛特敦', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACHE', 'CHEMAINUS', '彻梅纳斯', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACHI', 'CHICOUTIMI', '希库提米', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACHU', 'CHURCHILL(MAN.)', '丘吉尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACLA', 'CLARENVILLE', '克拉伦维尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACMX', 'COMOX', '科莫克斯', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACOB', 'COBOURG(ONT.)', '科堡', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACOL', 'COLLINGWOOD', '科灵伍德', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACON', 'CONTRECOEUR', '孔特勒科尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACOR', 'CORNWALL(ONT.)', '康沃尔', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACQT', 'CARAQUET', '卡拉凯特', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACRO', 'CROFTON', '克罗夫顿', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACSH', 'CANSO HARBOUR', '坎索港', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACTM', 'CHATHAM', '查塔姆', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACTP', 'CHETICAMP', '谢蒂坎普', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACWB', 'COWICHAN BAY', '科威恰湾', 0, 1, 'CA', 0, 0, 'HXRC'),
('CABAB', 'BABBECK', '巴德克', 0, 1, 'CA', 0, 0, 'HXRC'),
('CABAJ', 'BAJE COMEAU', '贝科莫', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAEDM', 'EDMONTON', '埃德蒙顿', 0, 1, 'CA', 0, 0, 'HXRC'),
('CACA', 'CALGARY', '卡达加里', 0, 1, 'CA', 0, 0, 'HXRC'),
('CASAS', 'SASKATOON', '', 0, 1, 'CA', 0, 0, 'HXRC'),
('CATRO', 'TORONTO', '多伦多', 0, 1, 'CA', 0, 0, 'HXRC'),
('ADA', 'TORONTO,CANADA', '多伦多', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAWEG', 'WINNIPEG', '温尼伯', 0, 1, 'CA', 0, 0, 'HXRC'),
('CAREG', 'REGINA', '里贾那', 0, 1, 'CA', 0, 0, 'HXRC'),
('MIL', 'MILTON', '', 0, 1, 'CA', 0, 0, 'HXRC'),
('GAL', 'GALGARY', '', 0, 1, 'CA', 0, 0, 'HXRC'),
('CLACD', 'ANCUD', '安库德', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLANT', 'ANTOFAGASTA', '安托法加斯塔', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLARI', 'ARICA', '阿里卡', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLCAL', 'CALDERA', '卡尔德拉', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLCAS', 'CASTRO', '卡斯特罗', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLCCA', 'CAL. CLARENCIA', '克拉伦西亚', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLCGR', 'CRUZ GRANDE', '克鲁斯格兰德', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLCHL', 'CHANARAL', '查尼亚拉尔', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLCLA', 'CALDERILLA', '卡尔德里拉', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLCOQ', 'COQUIMBO', '科金博', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLCOR', 'CORONEL', '科罗内尔', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLCRL', 'CORRAL', '科拉尔', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLHUA', 'HUASCO', '瓦斯科', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLIQU', 'IQUIQUE', '伊基克', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLPAR', 'PUNTA ARENAS', '阿雷纳斯角', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLPMO', 'PUERTO MONTT', '蒙特港', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLSAN', 'SAN ANTONIO', '圣安东尼奥', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLTOC', 'TOCOPILLA', '托科皮亚', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLTOM', 'TOME', '托梅', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLTTL', 'TALTAL', '塔尔塔尔', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLTAL', 'TALCAHUANO', '塔尔卡瓦诺', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLVDA', 'VALDIVIA', '瓦尔迪维亚', 0, 1, 'CL', 0, 0, 'HXRC'),
('CLVAL', 'VALPARAISO', '瓦尔帕莱索', 0, 1, 'CL', 0, 0, 'HXRC'),
('ESLCA', 'LA CALERA', '拉卡莱拉', 0, 1, 'CL', 0, 0, 'HXRC'),
('CHCPT', 'CONCEPTION', '', 0, 1, 'CL', 0, 0, 'HXRC'),
('AEJAL', 'JEBEL ALI', '阿里山', 0, 1, 'CA', 0, 0, 'HXRC'),
('CNDLC', 'DALIAN', '大连', 0, 1, 'CA', 0, 0, 'HXRC'),
('CNDXG', 'DALIANXINGANG', '大连新港（区）', 0, 1, 'CA', 0, 0, 'HXRC'),
('MOMAC', 'MACAU', '澳门', 0, 1, 'CA', 0, 0, 'HXRC'),
('CNSHA', 'SHANGHAI', '上海', 0, 1, 'CA', 0, 0, 'HXRC'),
('HKHKG', 'HONG KONG', '香港', 0, 1, 'CA', 0, 0, 'HXRC'),
('KEELU', 'KEELUNG', '基隆', 0, 1, 'CA', 0, 0, 'HXRC'),
('ASHA', 'SHANGHAI, CHINA', '', 0, 1, 'CA', 0, 0, 'HXRC'),
('XGG', 'XINGANG', '', 0, 1, 'CA', 0, 0, 'HXRC'),
('COBAR', 'BARRANQUILLA', '巴兰基利亚', 0, 1, 'CO', 0, 0, 'HXRC'),
('COBUE', 'BUENA VENTURA', '布韦那文图拉', 0, 1, 'CO', 0, 0, 'HXRC'),
('COCOV', 'COVENAS', '科韦尼亚斯', 0, 1, 'CO', 0, 0, 'HXRC'),
('COCTA', 'CARTAGENA(CO)', '卡塔赫纳', 0, 1, 'CO', 0, 0, 'HXRC'),
('CORHA', 'RIO HACHA', '里奥阿查', 0, 1, 'CO', 0, 0, 'HXRC'),
('COSMA', 'SANTA MARTA', '圣玛尔塔', 0, 1, 'CO', 0, 0, 'HXRC'),
('COTUM', 'TUMACO', '图马科', 0, 1, 'CO', 0, 0, 'HXRC'),
('KMFOM', 'FOMBONI', '丰博尼', 0, 1, 'KM', 0, 0, 'HXRC'),
('KMMOR', 'MORONI', '莫罗尼', 0, 1, 'KM', 0, 0, 'HXRC'),
('KMMUT', 'MUTSAMUDU', '穆察穆杜', 0, 1, 'KM', 0, 0, 'HXRC'),
('KMDZA', 'DZAOUDZI', '藻德济', 0, 1, 'KM', 0, 0, 'HXRC'),
('CGPNO', 'POINTE NOIRE(CG', '黑角', 0, 1, 'CG', 0, 0, 'HXRC'),
('POINT', 'POINTE NOIRE PORT,CONGO', '', 0, 1, 'CG', 0, 0, 'HXRC'),
('CRCAL', 'CALDERA(CR)', '卡尔德拉', 0, 1, 'CR', 0, 0, 'HXRC'),
('CRGOL', 'GOLFITO', '戈尔菲托', 0, 1, 'CR', 0, 0, 'HXRC'),
('CRPLI', 'PORT LIMON', '利蒙港', 0, 1, 'CR', 0, 0, 'HXRC'),
('CRPUN', 'PUNTARENAS', '彭塔雷纳斯', 0, 1, 'CR', 0, 0, 'HXRC'),
('CRQUE', 'QUEPOS', '克波斯', 0, 1, 'CR', 0, 0, 'HXRC'),
('COERA', 'PUERTO CALDERA', '卡尔德拉', 0, 1, 'CR', 0, 0, 'HXRC'),
('COCGO', 'CARTAGO', '卡塔果', 0, 1, 'CR', 0, 0, 'HXRC'),
('COMON', 'PUERTO LIMON''', '利蒙港', 0, 1, 'CR', 0, 0, 'HXRC'),
('CIABI', 'ABIDJAN', '阿比让', 0, 1, 'CI', 0, 0, 'HXRC'),
('CIASS', 'ASSINIE', '阿西尼', 0, 1, 'CI', 0, 0, 'HXRC'),
('CIFRE', 'FRESCO', '弗雷斯科', 0, 1, 'CI', 0, 0, 'HXRC'),
('CIGBM', 'GRAND BASSAM', '大巴萨姆', 0, 1, 'CI', 0, 0, 'HXRC'),
('CISAS', 'SASSANDRA', '萨桑德拉', 0, 1, 'CI', 0, 0, 'HXRC'),
('CISPE', 'SAN PEDRO(CI)', '圣佩德罗', 0, 1, 'CI', 0, 0, 'HXRC'),
('CITAB', 'TABOU', '塔布', 0, 1, 'CI', 0, 0, 'HXRC'),
('HRDBV', 'DUBROVNIK', '杜布罗夫尼克', 0, 1, 'HR', 0, 0, 'HXRC'),
('HRPUL', 'PULA', '普拉', 0, 1, 'HR', 0, 0, 'HXRC'),
('HRRIJ', 'RIJEKA', '里耶卡', 0, 1, 'HR', 0, 0, 'HXRC'),
('HRSPL', 'SPLIT', '斯普利特', 0, 1, 'HR', 0, 0, 'HXRC'),
('PLO', 'PLOCE', '普洛切', 0, 1, 'HR', 0, 0, 'HXRC'),
('CUANT', 'ANTILLA', '安蒂亚', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUBAH', 'BAHIA HONDA', '翁达港', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUBAN', 'BANES', '巴内斯', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUBAR', 'BARACOA', '巴拉科阿', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUBGR', 'BOCA GRANDE(CU)', '博卡格兰德', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUBOQ', 'BOQUERON', '博克龙', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUCAB', 'CABANAS', '卡瓦尼亚斯', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUCAI', 'CAIBARIEN', '凯巴连', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUCAR', 'CARDENAS', '卡德纳斯', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUCAS', 'CASILDA', '卡西尔达', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUCIE', 'CIENFUEGOS', '西恩富戈斯', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUCMA', 'CAIMANERA', '凯马勒那', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUGUA', 'GUAYABAL', '瓜亚瓦尔', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUHAV', 'HAVANA', '哈瓦那', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUISA', 'ISABELA(CU)', '伊萨贝拉', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUJUC', 'JUCARO', '胡卡罗', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUMAN', 'MANZANILLO(CU)', '曼萨尼略', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUMAR', 'MARIEL', '马里埃尔', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUMAT', 'MATANZAS(CU)', '马坦萨斯', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUMLA', 'MANOPLA', '马诺普拉', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUMLU', 'MEDIA LUNA', '梅迪亚卢纳', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUMOA', 'MOA', '莫阿', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUMTI', 'MANATI', '马纳蒂', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUNGA', 'NUEVA GERONA', '新赫罗纳', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUNIC', 'NICARO', '尼卡罗', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUNIQ', 'NIQUERO', '尼克罗', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUPLN', 'PILON', '皮隆', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUPRE', 'PRESTON(CU)', '普雷斯顿', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUSAG', 'SAGUALA GRANDE', '大萨瓜', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUSCS', 'SANTA CRUZ DEL', '南圣克鲁斯', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUSGO', 'SANTIAGO', '圣地亚哥', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUSLU', 'SANTA LUCIA', '圣卢西亚', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUTDZ', 'TUNAS DE ZAZA', '图纳斯德萨萨', 0, 1, 'CU', 0, 0, 'HXRC'),
('CUNUE', 'NUEVITAS', '努埃维塔斯', 0, 1, 'CY', 0, 0, 'HXRC'),
('CUPPA', 'PUERTO PADRE', '帕德雷港', 0, 1, 'CY', 0, 0, 'HXRC'),
('CYAKR', 'AKROTIRI', '阿克罗蒂里', 0, 1, 'CY', 0, 0, 'HXRC'),
('CYFAM', 'FAMAGUSTA', '法马古斯塔', 0, 1, 'CY', 0, 0, 'HXRC'),
('CYKYR', 'KYRENIA', '凯里尼亚', 0, 1, 'CY', 0, 0, 'HXRC'),
('CYLAR', 'LARNACA', '拉纳卡', 0, 1, 'CY', 0, 0, 'HXRC'),
('CYLIM', 'LIMASSOL', '利马索尔', 0, 1, 'CY', 0, 0, 'HXRC'),
('CYPPS', 'PAPHOS', '佩福斯', 0, 1, 'CY', 0, 0, 'HXRC'),
('CYVAB', 'Vassiliko Bay', '瓦西利科湾', 0, 1, 'CY', 0, 0, 'HXRC'),
('CZBRN', 'BRNO', '布尔诺', 0, 1, 'CZ', 0, 0, 'HXRC'),
('CZPRA', 'PRAHA', '布拉格', 0, 1, 'CZ', 0, 0, 'HXRC'),
('CZPLZ', 'PLZEN', '比尔森', 0, 1, 'CZ', 0, 0, 'HXRC'),
('CZBMO', 'BMO', '毕莫', 0, 1, 'CZ', 0, 0, 'HXRC'),
('CZOST', 'OSTRAVA', '奥斯萃瓦', 0, 1, 'CZ', 0, 0, 'HXRC'),
('CZPAR', 'PARGUE', '', 0, 1, 'CZ', 0, 0, 'HXRC'),
('CZPUE', 'PRAGUE', '', 0, 1, 'CZ', 0, 0, 'HXRC'),
('CZPIZ', 'PIZEN', '', 0, 1, 'CZ', 0, 0, 'HXRC'),
('KPCJN', 'CHONGJIN', '清津', 0, 1, 'KP', 0, 0, 'HXRC'),
('KPHAE', 'HAEJU', '海州', 0, 1, 'KP', 0, 0, 'HXRC'),
('KPHUN', 'HUNGNAM', '兴南', 0, 1, 'KP', 0, 0, 'HXRC'),
('KPCHI', 'NAMPO', '镇南浦', 0, 1, 'KP', 0, 0, 'HXRC'),
('KPRAJ', 'RAJIN', '罗津', 0, 1, 'KP', 0, 0, 'HXRC'),
('KPSON', 'SONGRIM', '松林', 0, 1, 'KP', 0, 0, 'HXRC'),
('KPUNG', 'UNGGI', '雄基', 0, 1, 'KP', 0, 0, 'HXRC'),
('KPWON', 'WONSAN', '元山', 0, 1, 'KP', 0, 0, 'HXRC'),
('DKHOL', 'HOLBAEK', '霍尔拜克', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKHOR', 'HORSENS', '霍森斯', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKHSD', 'HADSUND', '海松', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKHSV', 'HADERSLEV', '哈泽斯莱乌', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKKAL', 'KALUNDBORG', '凯隆堡', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKKAR', 'KARREBAEKSMINDE', '卡勒拜克斯明讷', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKKOG', 'KOGE', '克厄', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKKOL', 'KOLDING', '科灵', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKKOR', 'KORSOR', '科瑟', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKKYN', 'KYNDBY', '金比', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKLEM', 'LEMVIG', '莱姆维', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKMAR', 'MARIAGER', '玛丽艾厄', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKMID', 'MIDDELFART', '米泽尔法特', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKNAE', 'NAESTVED', '奈斯特韦兹', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKNKV', 'NAKSKOV', '纳克斯考', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKNYB', 'NYBORG', '尼堡', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKODE', 'ODENSE', '欧登塞', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKRAN', 'RANDERS', '兰讷斯', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKROD', 'RODBYHAVN', '勒兹比港', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKRUD', 'RUDKOBING', '鲁兹克宾', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKSAK', 'SAKSKOBING', '萨克斯克宾', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKSKI', 'SKIVE', '斯基沃', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKSKN', 'SKAGEN', '斯卡恩', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKSON', 'SONDERBORG', '桑德堡', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKSTE', 'STEGE', '斯泰厄', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKSTU', 'STUBBEKOBING', '斯图伯克宾', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKSVA', 'SVANEKE', '斯瓦讷克', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKSVE', 'SVENDBORG', '斯文堡', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKVEJ', 'VEJLE', '瓦埃勒', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKVOR', 'VORDINGBORG', '沃尔丁堡', 0, 1, 'DK', 0, 0, 'HXRC'),
('DMPOR', 'PORTSMOUTH(DM)', '朴次茅斯', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKAER', 'AEROSKOBING', '埃勒斯克平', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKAHS', 'AARHUS', '奥尔胡斯', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKBHM', 'BANDHOLM', '班霍尔姆', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKBOG', 'BOGENSE', '博恩瑟', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKCOP', 'COPENHAGEN', '哥本哈根', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKALL', 'ALLINGE', '阿灵厄', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKASS', 'ASSENS', '阿森斯', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKFLS', 'FAKSE LADEPLADS', '法克瑟莱泽普拉斯', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKFRE', 'FREDERICIA', '腓特烈西亚', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKFSD', 'FREDERIKSSUND', '腓特烈松', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKFSK', 'FREDERIKSVARK', '腓特烈斯韦克', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKFSN', 'FREDERIKSHAVN', '腓特烈港', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKESB', 'ESBJERG', '埃斯比约', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKETD', 'ENSTED', '恩斯坦达', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKFAA', 'FAABORG', '福堡', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKEBE', 'EBELTOFT', '埃伯尔措夫特', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKGUL', 'GULFHAVN', '基尔夫港', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKHAS', 'HASLE', '海斯勒', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKHIR', 'HIRTSHALS', '希茨海尔斯', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKGRE', 'GRENAA', '格雷诺', 0, 1, 'DK', 0, 0, 'HXRC'),
('DKHOB', 'HOBRO', '霍布罗', 0, 1, 'DK', 0, 0, 'HXRC'),
('DEARH', 'ARHUS', '奥尔胡斯', 0, 1, 'DK', 0, 0, 'HXRC'),
('DEAAL', 'AALBORG', '阿尔堡', 0, 1, 'DK', 0, 0, 'HXRC'),
('ALB', 'ALBORG', '奥尔堡', 0, 1, 'DK', 0, 0, 'HXRC'),
('DMROS', 'ROSEAU', '罗索', 0, 1, 'DM', 0, 0, 'HXRC'),
('DOBAR', 'BARAHONA', '巴拉奥纳', 0, 1, 'DM', 0, 0, 'HXRC'),
('DOLRO', 'LA ROMANA', '拉罗马纳', 0, 1, 'DM', 0, 0, 'HXRC'),
('DOMAN', 'MANZANILLO(DO)', '曼萨尼约', 0, 1, 'DM', 0, 0, 'HXRC'),
('DOPPL', 'PUERTO PLATA', '普拉塔港', 0, 1, 'DM', 0, 0, 'HXRC'),
('DORHA', 'RIO HAINA', '海纳', 0, 1, 'DM', 0, 0, 'HXRC'),
('DOSAM', 'SAMANA', '萨马纳', 0, 1, 'DM', 0, 0, 'HXRC'),
('DOSCZ', 'SANCHEZ', '桑切斯', 0, 1, 'DM', 0, 0, 'HXRC'),
('DOSDO', 'SANTO DOMINGO', '圣多明各', 0, 1, 'DM', 0, 0, 'HXRC'),
('DOSPM', 'SAN PEDRO DE MA', '圣佩得罗德马科里斯', 0, 1, 'DM', 0, 0, 'HXRC'),
('DOHAI', 'HAINA', '海纳', 0, 1, 'DM', 0, 0, 'HXRC'),
('ECESM', 'ESMERALDAS', '埃斯梅拉达斯', 0, 1, 'EC', 0, 0, 'HXRC'),
('ECGYL', 'GUAYAQUIL', '瓜亚基尔', 0, 1, 'EC', 0, 0, 'HXRC'),
('ECMTA', 'MANTA', '曼塔', 0, 1, 'EC', 0, 0, 'HXRC'),
('AOPAL', 'PORTO ALEXANDRE', '亚历山大港', 0, 1, 'EG', 0, 0, 'HXRC'),
('GRALE', 'ALEXANDROUPOLIS', '亚历山德鲁波利斯', 0, 1, 'EG', 0, 0, 'HXRC'),
('GRAST', 'ASTAKOS', '阿斯塔科斯', 0, 1, 'EG', 0, 0, 'HXRC'),
('EGABZ', 'ABU ZENIMA', '阿布宰尼迈', 0, 1, 'EG', 0, 0, 'HXRC'),
('EGADA', 'ADABIYA', '阿代比耶', 0, 1, 'EG', 0, 0, 'HXRC'),
('EGALE', 'ALEXANDRIA(EG)', '亚历山德里亚', 0, 1, 'EG', 0, 0, 'HXRC'),
('EGDAM', 'DAMIETTA', '杜姆亚特', 0, 1, 'EG', 0, 0, 'HXRC'),
('EGKOS', 'KOSSEIR', '库赛尔', 0, 1, 'EG', 0, 0, 'HXRC'),
('EGPSA', 'PORT SAID', '塞得港', 0, 1, 'EG', 0, 0, 'HXRC'),
('EGSAF', 'SAFAGA', '萨法贾', 0, 1, 'EG', 0, 0, 'HXRC'),
('EGSUE', 'SUEZ', '苏伊士', 0, 1, 'EG', 0, 0, 'HXRC'),
('EGPSU', 'PORT SUEZ', '苏伊士', 0, 1, 'EG', 0, 0, 'HXRC'),
('ADDA', 'ADDABIA PORT', '', 0, 1, 'EG', 0, 0, 'HXRC'),
('SOK', 'SOKHNA', '索科哈纳', 0, 1, 'EG', 0, 0, 'HXRC'),
('SVACA', 'ACAJUTLA', '阿卡胡特拉', 0, 1, 'SV', 0, 0, 'HXRC'),
('SVCUT', 'CUTUCO', '库图科', 0, 1, 'SV', 0, 0, 'HXRC'),
('SVLLI', 'LA LIBERTAD(SV)', '拉利贝塔德', 0, 1, 'SV', 0, 0, 'HXRC'),
('SVLUN', 'LA UNION(SV)', '拉乌尼翁', 0, 1, 'SV', 0, 0, 'HXRC'),
('CAPRR', 'PRINCE RUPERT', '鲁珀特港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSTO', 'STOCKTON(GB)', '斯托克顿', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSTR', 'STROMNESS', '斯特罗姆内斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSUB', 'SUTTON BRIDGE', '萨顿布里奇', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSWH', 'SANDWICH', '桑德威奇', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSWY', 'STORNOWAY', '斯托诺韦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTAR', 'TARBERT', '塔伯特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSUN', 'SUNDERLAND', '森德兰', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSWA', 'SWANSEA', '斯旺西', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTOT', 'TOTNES', '托特尼斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTRO', 'TROON', '特伦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTRU', 'TRURO', '特鲁罗', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTYD', 'TYNE DOCK', '太恩港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBULL', 'ULLAPOOL', '阿勒浦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWAR', 'WARKWORTH', '沃克沃思', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWAT', 'WATCHET', '沃切特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWBY', 'WHITBY', '惠特比', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWES', 'WESTRAY', '韦斯特雷', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWEY', 'WEYMOUTH(GB)', '韦茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTEI', 'TEIGNMOUTH', '廷茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTHS', 'TMAMES HAVEN', '', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTHU', 'THURSO', '瑟索', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTBY', 'TENBY', '滕比', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTOB', 'TOBERMORY', '托伯莫里', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTOP', 'TOPSHAM', '托普瑟姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTOR', 'TROQUAY', '托基', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBTIL', 'TILBURY', '蒂尔伯里', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWHI', 'WHITSTABLE', '惠特斯特布尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWHN', 'WHITEHAVEN', '怀特黑文', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWIC', 'WICK(SCOT)', '威克', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWIS', 'WISBECH', '威斯贝奇', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWLS', 'WELLS', '韦尔斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWOR', 'WORKINGTON', '沃金顿', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBWRP', 'WARREN POINT', '沃伦波因特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBYAR', 'YARMOUTH(GB)', '雅茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBABN', 'ABERDEEN(GB)', '阿伯丁', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBABR', 'ABERDOUR', '阿伯道尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBABY', 'ABERDOVEY', '阿伯多维', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBAGS', 'ARDGLASS', '阿德格拉斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBALD', 'ALDERNEY', '奥尔德尼', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBAML', 'AMLWCH', '阿姆卢赫', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBANG', 'ANNALONG', '安纳隆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBANN', 'ANNAN', '安嫩', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBANS', 'ANSTRUTHER', '安斯特拉瑟', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBAPP', 'APPLEDORE', '阿普尔多尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBARG', 'ARDRISHAIG', '阿德里希格', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBARN', 'ARDROSSAN(GB)', '阿德罗森', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBAVO', 'AVONMOUTH', '埃文茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBAYR', 'AYR', '艾尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBAE', 'BARNSTAPIE', '巴恩斯特珀尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBAN', 'BANGOR(CO.DOWN)', '班戈', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBGR', 'BANGOR(CAER.)', '班戈', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBHD', 'BURGHEAD', '伯格黑德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBEL', 'BELFAST(GB)', '贝尔法斯特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBOS', 'BOSTON(GB)', '波士顿', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBPT', 'BRIDPORT', '布里德波特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBRD', 'BROMBOROUGH DOC', '布朗巴勒', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBRI', 'BRIGHTLINGSEA', '布赖特灵西', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBRN', 'BRIGHTON(GB)', '布赖顿', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBRW', 'BARROW-IN-FURNESS(GB)', '巴罗-因-弗内斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBLN', 'BRIDLINGTON', '布里德灵顿', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBLY', 'BLYTH', '布莱斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBMS', 'BEAUMARIS', '博马里斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBID', 'BIDEFORD', '比迪福德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBRY', 'BARRY', '巴里', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBTH', 'BARMOUTH', '巴尔默斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBTL', 'BRISTOL', '布里斯托尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBUC', 'BUCKIE', '巴基', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBXM', 'BRIXHAM', '布里克瑟姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCAE', 'CAERNARFON', '卡那封', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCAM', 'CAMPBELTOWN', '坎贝尔敦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBWR', 'BRIDGWATER', '布里奇沃特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCOE', 'COLERAINE', '科尔雷恩', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCOL', 'COLCHESTER', '科尔切斯特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCOQ', 'CONNAH''S QUAY', '康纳斯基', 0, 1, 'GB', 0, 0, 'HXRC');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('GBCOR', 'CORPACH', '科珀赫', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCOS', 'COWES', '考斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCAR', 'CARRICKFERGUS', '卡里克弗格斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCAS', 'CASTLETOWN', '卡斯尔敦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCDF', 'CARDIFF', '加的夫', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCHA', 'CHARLESTOWN(GB)', '查尔斯敦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCRO', 'CROMARTY', '克罗默蒂', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBDAR', 'DARTMOUTH', '达特茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBDBR', 'DUNBAR', '邓巴', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBDDE', 'DUNDEE', '邓迪', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBDIN', 'DINGWALL(GB)', '丁沃尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBDOU', 'DOUGLAS', '道格拉斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBDOV', 'DOVER', '多佛', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBDRM', 'DUNDRUM', '邓德拉姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBDUM', 'DUMFRIES', '邓弗里斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBDUN', 'DUNOON', '达农', 0, 1, 'GB', 0, 0, 'HXRC'),
('BHX', 'BIRMINGHAM', '伯明翰', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBDAG', 'DAGENHAM', '带根纳姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLEE', 'LEEDS', '利兹', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMOS', 'MOSTYN', '莫斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBNEW', 'NEWPORT(GB)', '纽波特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBNHN', 'NEWHAVEN', '纽黑文', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBNLN', 'NEWLYN', '纽林', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBNOR', 'NORWICH', '诺里奇', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBNRY', 'NEWRY', '纽里', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBNSU', 'N. SUNDERLAND', '北森德兰', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBNBH', 'NEWBURGH', '纽堡', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBNCE', 'NEWCASTLE(GB)', '纽卡斯尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBNEA', 'NEATH', '尼思', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMTL', 'METHIL', '梅西尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBOBN', 'OBAN', '奥本', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPAD', 'PADSTOW', '帕德斯托', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPAS', 'PORT ASKAIOG', '阿美凯格皮尔港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPEL', 'PORT ELLEN', '埃伦港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPLY', 'PLYMOUTH(GB)', '普利茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPMR', 'PENMAENMAWR', '彭迈恩毛尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPOO', 'POOLE', '普尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPRE', 'PRESTON(GB)', '普雷斯顿', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPRH', 'PORTRUSH', '波特拉什', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPRN', 'PENRYN', '彭林', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPEN', 'PENZANCE', '彭赞斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPER', 'PERTH(GB)', '珀斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPET', 'PETERHEAD', '彼得黑德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPLD', 'PORTLAND(GB)', '波特兰', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPTA', 'PORT TALBOT', '塔尔伯特港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPTE', 'PORTREE', '波特里', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPTH', 'PORTSMOUTH(GB)', '泼次茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPWI', 'PORT WILLIAM', '威廉港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBPWL', 'PWLLHELI', '普尔黑利', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBQSY', 'QUEENSFERRY', '昆斯费里', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBRAM', 'RAMSGATE', '拉姆斯盖特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBRHM', 'RAINHAM', '雷汉姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBRHY', 'RHYL', '里尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBROC', 'ROCHESTER(GB)', '罗切斯特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBROS', 'ROSYTH', '罗赛斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBROT', 'ROTHESAY', '罗斯西', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBRUN', 'RUNCORN', '朗科恩', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSCA', 'SCARBOROUGH(GB)', '斯卡伯勒', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSCR', 'SCRABSTER', '斯克拉布斯特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSED', 'SOUTHEND', '绍森德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSFD', 'STRANGFORD', '斯特兰福德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSHE', 'ST. HELIER', '圣赫利尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSHM', 'SEAHAM HARBOUR', '锡厄姆港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSHO', 'SHOREHAM', '肖勒姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSIV', 'ST. IVES', '圣艾夫斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSLY', 'SCALLOWAY', '斯卡洛韦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSMH', 'ST. MARGARET''S', '圣马格丽茨贝', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSNS', 'SHEERNESS', '希尔内斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSOU', 'SOUTHAMPTON', '南安普顿', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBSPP', 'ST. PETER PORT', '圣彼德港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GRDRA', 'DRAPETZONA', '德拉佩特佐拉', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBELP', 'ELLESMERE PORT', '埃尔斯米尔港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBEXE', 'EXETER', '埃克塞特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBEXM', 'EXMOUTH', '埃克斯茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBEYE', 'EYEMOUTH', '艾茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBFAL', 'FALMOUTH(GB)', '法尔茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBFAW', 'FAWLEY', '福利', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBFEL', 'FELIXSTOWE', '弗利克斯托', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBFIN', 'FINNART', '芬纳特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBFIS', 'FISHGUARD', '菲什加德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBFLE', 'FLEETWOOD', '弗利特伍德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBFOL', 'FOLKESTONE', '福克斯通', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBFOW', 'FOWEY', '福伊', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBFRA', 'FRASERBURGH', '弗雷泽堡', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGAI', 'GAINSBOROUGH', '盖恩斯伯勒', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGAN', 'GARLIESTON', '加利斯敦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGAR', 'GARSTON', '加斯顿', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGIR', 'GIRVAN', '格文', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGLA', 'GLASGOW', '格拉斯哥', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGLE', 'GLENARM', '格莱纳姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGLO', 'GLOUCESTER(GB)', '格洛斯特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGNK', 'GREENOCK', '格里诺克', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGNW', 'GUNNESS WHARF', '冈纳斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGOO', 'GOOLE', '古尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGRA', 'GRANGEMOUTH', '格兰奇茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGRI', 'GRIMSBY', '格里姆斯比', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGRK', 'GOUROCK', '古罗克', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGSD', 'GRAVESEND', '格雷夫森德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBGYA', 'GREAT YARMOUTH', '大雅茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBHAR', 'HARWICH', '哈里奇', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBHAY', 'HAYLE', '海尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBHOL', 'HOLYHEAD', '霍利黑德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBINV', 'INVERGORDON', '因弗戈登', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBIOG', 'ISLE OF GRAIN', '谷岛', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBIPS', 'IPSWICH', '伊普斯威奇', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBIRV', 'IRVINE', '欧文', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBIVS', 'INVERNESS', '因弗内斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBHPL', 'HARTLEPOOL', '哈特尔浦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBHUL', 'HULL', '赫尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBIMM', 'IMMINGHAM', '伊明赫姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBKIL', 'KILLINGHOLME', '基林霍尔姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBKIR', 'KIRKCALDY', '柯科迪', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBKOL', 'KYLE OF LOCHALS', '洛哈尔什教区凯尔', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBKSL', 'KING''S LYNN', '金斯林', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLAN', 'LANCASTER', '兰开斯特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLDY', 'LONDONDERRY', '伦敦德里', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLEI', 'LEITH', '利斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLOS', 'LOSSIEMOUTH', '洛西茅斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLOW', 'LOWESTOFT', '洛斯托夫特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLWK', 'LERWICK', '勒威克', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLYB', 'LYBSTER', '利布斯特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLYD', 'LYDNEY', '利德尼', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMAC', 'MACDUFF', '麦克达夫', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMAL', 'MALDON', '莫尔登', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMAN', 'MANCHESTER', '曼彻斯特', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMEV', 'MEVAGISSEY', '梅瓦吉西', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMID', 'MIDDLESBROUGH', '米德尔斯伯勒', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMIH', 'MILFORD HAVEN', '米尔福德港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLMA', 'LOCH MADDY', '洛赫马迪', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLNE', 'LARNE', '拉恩', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLOE', 'LOOE', '卢港', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLON', 'LONDON', '伦敦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLOP', 'LOCHALINE PIER', '洛哈林', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLGS', 'LARGS', '拉格斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLIT', 'LITTLEHAMPTON', '利特尔汉普顿', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBLIV', 'LIVERPOOL(GB)', '利物浦', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMIN', 'MINEHEAD', '迈恩黑德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMIS', 'MISTLEY', '米斯特利', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMLG', 'MALLAIG', '马莱格', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMLM', 'MILLOM', '米勒姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBMON', 'MONTROSE', '蒙特罗斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENAR', 'ARDGLASS', '阿德格拉斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENARD', 'ARDRISHAIG', '阿德里希格', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENARR', 'ARDROSSAN', '阿德罗森', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBU', 'BUDE', '布德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBCA', 'CARNLOUGH', '卡恩拉夫', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENBUR', 'BURNIEY', '伯利', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENCHA', 'CHADDERTON', '查得顿', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENCAD', 'CADIFF', '加的夫', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENEDI', 'EDINBURGH', '爱丁堡', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBBRA', 'BRADFORD', '布拉德福德', 0, 1, 'GB', 0, 0, 'HXRC'),
('GBJAR', 'JARROW', '', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENLEI', 'LEICESTER', '列斯特', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENNOT', 'NOTTINGHAM', '诺丁汉', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENYOR', 'YORK', '纽克', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENWIG', 'WIGAM', '维加', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENTHA', 'THAMES', '', 0, 1, 'GB', 0, 0, 'HXRC'),
('UKABE', 'ABERDEEN', '阿伯丁', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENLAN', 'LANARK', '拉纳克', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENSHE', 'SHEFFIELD', '谢菲尔德', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENYIL', 'TILBURY', '蒂尔伯利', 0, 1, 'GB', 0, 0, 'HXRC'),
('ENOLD', 'OLDHAM', '奥尔德姆', 0, 1, 'GB', 0, 0, 'HXRC'),
('PCMS', 'PORT SMOUTH', '朴次矛斯', 0, 1, 'GB', 0, 0, 'HXRC'),
('ROTH', 'ROTHERHAM', '', 0, 1, 'GB', 0, 0, 'HXRC'),
('SAL', 'ST.ALBANS', '', 0, 1, 'GB', 0, 0, 'HXRC'),
('GQBAT', 'BATA', '巴塔', 0, 1, 'GQ', 0, 0, 'HXRC'),
('ESTIN', 'TALLIN', '塔林', 0, 1, 'ES', 0, 0, 'HXRC'),
('ETASB', 'ASSAB', '阿萨布', 0, 1, 'ET', 0, 0, 'HXRC'),
('ETMAS', 'MASSAWA', '马萨瓦', 0, 1, 'ET', 0, 0, 'HXRC'),
('ADD', 'ADDIS ABABA', '亚的斯阿贝巴', 0, 1, 'ET', 0, 0, 'HXRC'),
('FOKLA', 'KLAKSVIG', '克拉克斯维克', 0, 1, 'FO', 0, 0, 'HXRC'),
('FOTHO', 'THORSHAVN', '托尔斯港', 0, 1, 'FO', 0, 0, 'HXRC'),
('FOTVO', 'TVOROYRI', '特瓦罗伊里', 0, 1, 'FO', 0, 0, 'HXRC'),
('FOVES', 'VESTMANHAVN', '韦斯特门港', 0, 1, 'FO', 0, 0, 'HXRC'),
('FJELL', 'ELLINGTON', '埃灵顿', 0, 1, 'FJ', 0, 0, 'HXRC'),
('FJLAU', 'LAUTOKA', '劳托卡', 0, 1, 'FJ', 0, 0, 'HXRC'),
('FJLEV', 'LEVUKA', '累武卡', 0, 1, 'FJ', 0, 0, 'HXRC'),
('FJSUV', 'SUVA', '苏瓦', 0, 1, 'FJ', 0, 0, 'HXRC'),
('FJSVB', 'SAVUSAVU BAY', '萨武萨武湾', 0, 1, 'FJ', 0, 0, 'HXRC'),
('FIDL', 'DLLINGTON', '埃林顿', 0, 1, 'FJ', 0, 0, 'HXRC'),
('NLHAN', 'HANSWEERT', '汉斯韦尔特', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIHAM', 'HAMINA', '哈米纳', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIHAN', 'HANKO', '汉科', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIHEL', 'HELSINKI', '赫尔辛基', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIKEM', 'KEMI', '凯米', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIKOK', 'KOKKOLA', '科科拉', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIKOT', 'KOTKA', '科特卡', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIKRI', 'KRISTIINA', '克里斯蒂纳', 0, 1, 'FI', 0, 0, 'HXRC'),
('FILOV', 'LOVIISA', '洛维萨', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIMAR', 'MARIEHAMN', '玛丽港', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIMTO', 'MANTYLUOTO', '曼蒂卢奥托', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIOUL', 'OULU', '奥鲁', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIPIE', 'PIETARSAARI', '皮耶塔尔萨里', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIPOR', 'PORKKALA', '波卡拉', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIPRI', 'PORI', '波里', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIPVO', 'PORVOO', '波尔沃', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIRAA', 'RAAHE', '拉赫', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIRAU', 'RAUMA', '劳马', 0, 1, 'FI', 0, 0, 'HXRC'),
('FITOR', 'TORNIO', '托尔奥尼', 0, 1, 'FI', 0, 0, 'HXRC'),
('FITUR', 'TURKU', '图尔库', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIUUS', 'UUSIKAUPUNKI', '新考蓬基', 0, 1, 'FI', 0, 0, 'HXRC'),
('FLVAS', 'VASSA', '瓦沙', 0, 1, 'FI', 0, 0, 'HXRC'),
('ABO', 'ABO', '奥布', 0, 1, 'FI', 0, 0, 'HXRC'),
('BJO', 'BJORNEBORG', '比约尔纳博里', 0, 1, 'FI', 0, 0, 'HXRC'),
('GAM', 'GAMLAKARLEBY', '旧卡勒比', 0, 1, 'FI', 0, 0, 'HXRC'),
('ULE', 'ULEABORG', '乌利堡', 0, 1, 'FI', 0, 0, 'HXRC'),
('MAEN', 'MAENTYLUOTO', '', 0, 1, 'FI', 0, 0, 'HXRC'),
('FIWAL', 'VALKOM', '瓦尔卡姆', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRABB', 'ABBEVILLE', '阿布维尔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRAJA', 'AJACCIO', '阿维克修', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRTNC', 'TONNAY CHARENTE', '托内沙朗特', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRTOU', 'TOULON', '土伦', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRARC', 'ARCACHON', '阿尔卡雄', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRATR', 'ANTIFER', '昂蒂弗', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRATS', 'ANTIBES', '昂蒂布', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRBAY', 'BAYONNE', '巴荣纳', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRBLA', 'BLAYE', '布拉伊', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRBON', 'BONIFACIO', '博尼法乔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRCNS', 'CANNES', '戛纳', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRCON', 'CONCARNEAU', '孔卡尔诺', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRCVI', 'CALVI', '卡尔维', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRDAH', 'DAHOUET', '达乌埃', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRDEA', 'DEAUVILLE', '多维尔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRDIE', 'DIEPPE', '迪耶普', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRDKK', 'DUNKIRK', '敦刻尔克', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRDON', 'DONGES', '栋日', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRDOU', 'DOUAMENEZ', '杜阿梅勒兹', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRETA', 'ETAPLES', '埃塔普勒', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRBOR', 'BORDEAUX', '波尔多', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRBOU', 'BOULOGNE', '布洛涅', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRBST', 'BREST', '布雷斯特', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRBTA', 'BASTIA', '巴斯蒂亚', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRCAL', 'CALAIS', '加来', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRCAM', 'CAMARET', '卡马雷', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRCAN', 'CAEN-OUISTREHAM', '冈兴威斯特拉', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRCBG', 'CHERBOURG', '瑟堡', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRCLE', 'CANCALE', '康卡勒', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRFEC', 'FECAMP', '费康', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRFOS', 'FOS', '福斯', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRGLS', 'GRAVELINES', '格拉沃利讷', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRGON', 'GONFREVILLE', '贡夫勒维尔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRGRA', 'GRANVILLE', '格兰维尔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRHON', 'HONFLEUR', '翁弗勒尔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRIRO', 'ILE ROUSSE', '伊尔鲁斯', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLAV', 'LAVERA', '拉瓦拉', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLCH', 'LE CHATEAUD''OLERON', '奥来龙堡', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLCI', 'LA CIOTAT', '拉西约塔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLGU', 'LE GUILDO', '勒吉尔多', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLIB', 'LIBOURNE', '利布尔讷', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLNO', 'LA NOUVELLE', '拉努韦勒', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLOR', 'LORIENT', '洛里昂', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLRO', 'LA ROCHELLE', '拉罗谢尔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRMOR', 'MORLAIX', '莫尔莱', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRNIC', 'NICE', '尼斯', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRNTS', 'NANTES', '南特', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRPBF', 'PAIMBOEUF', '潘伯夫', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRPDB', 'PORT DE BOUC', '布克港', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRPLA', 'PONT L''ABBE', '彭拉贝', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRPPI', 'PAIMPOL', '潘波勒', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRPRS', 'PARIS', '巴黎', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRPVS', 'PORT VENDRES', '旺德尔港', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRQUI', 'QUIMPER', '坎佩尔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRROC', 'ROCHEFORT', '罗什福尔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRROU', 'ROUEN', '鲁昂', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRSET', 'SETE', '塞特', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRSLR', 'ST. LOUIS DU RH', '圣路易罗纳', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRSMO', 'ST. MALO', '圣马洛', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRSNA', 'ST. NAZAIRE', '圣纳泽尔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRSVC', 'ST. VALERY EN C', '圣瓦勒利', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRAR', 'ARCACHON', '阿尔卡雄', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLHA', 'LE HAVRE', '勒阿佛尔', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRFSZ', 'FOT SOULTZ', '', 0, 1, 'FR', 0, 0, 'HXRC'),
('ES', 'MARSEILLES', '马赛', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRCIN', 'CASTELSARRASIN', '', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLLE', 'LILLE', '', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRLYO', 'LYON', '里昂', 0, 1, 'FR', 0, 0, 'HXRC'),
('FRTRG', 'TRASBOURG', '', 0, 1, 'FR', 0, 0, 'HXRC'),
('PAL', 'PALLICE', '帕利斯', 0, 1, 'FR', 0, 0, 'HXRC'),
('DU', 'DUNKERQUE', '敦刻尔克', 0, 1, 'FR', 0, 0, 'HXRC'),
('BOU', 'BOUCAU', '布科', 0, 1, 'FR', 0, 0, 'HXRC'),
('HUN', 'HUNINGUE', '', 0, 1, 'FR', 0, 0, 'HXRC'),
('TOU', 'TOULOUSE', '', 0, 1, 'FR', 0, 0, 'HXRC'),
('GACLZ', 'CAP LOPEZ', '洛佩斯角', 0, 1, 'GA', 0, 0, 'HXRC'),
('GALIB', 'LIBREVILLE', '利伯维尔', 0, 1, 'GA', 0, 0, 'HXRC'),
('GAOWE', 'OWENDO', '奥文多', 0, 1, 'GA', 0, 0, 'HXRC'),
('GAPGE', 'PORT GENTIL', '谦蒂尔港', 0, 1, 'GA', 0, 0, 'HXRC'),
('GALLE', 'LEBREVILLE', '利伯维尔', 0, 1, 'GA', 0, 0, 'HXRC'),
('GMBJL', 'BANJUL', '班珠尔', 0, 1, 'GM', 0, 0, 'HXRC'),
('GABA', 'BATHURST', '巴瑟斯特', 0, 1, 'GM', 0, 0, 'HXRC'),
('GEBUS', 'BATUMI', '巴统', 0, 1, 'GE', 0, 0, 'HXRC'),
('GETBI', 'TBILISI', '', 0, 1, 'GE', 0, 0, 'HXRC'),
('GEPOT', 'POTI', '波季', 0, 1, 'GE', 0, 0, 'HXRC'),
('GEMUN', 'MUNCHEM', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEBHN', 'BREMERHAVEN', '不来梅港', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEBRA', 'BRAKE', '布腊克', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEBRE', 'BREMEN', '不来梅', 0, 1, 'DE', 0, 0, 'HXRC'),
('DECOL', 'KOLN', '科隆', 0, 1, 'DE', 0, 0, 'HXRC'),
('DECUX', 'CUXHAVEN', '库克斯港', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEDUI', 'DUISBURG', '杜伊斯堡', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEDUS', 'DUSSELDORF', '杜塞尔多夫', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEECK', 'ECKERNFORDE', '埃肯弗尔德', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEELS', 'ELSFLETH', '埃尔斯费莱特', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEEMD', 'EMDEN', '埃姆登', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEFLE', 'FLENSBURG', '弗伦斯堡', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEFRA', 'FRANKFURT', '法兰克福', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEGLU', 'GLUCKSTADT', '格吕克施塔特', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEHAM', 'HAMBURG', '汉堡', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEHEI', 'HEILIGENHAFEN', '海利根港', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEHSM', 'HUSUM(DE)', '胡苏姆', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEKIL', 'KIEL', '基尔', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEKRE', 'KREFELD', '克雷菲尔德', 0, 1, 'DE', 0, 0, 'HXRC'),
('DELAB', 'LABOE', '拉伯', 0, 1, 'DE', 0, 0, 'HXRC'),
('DELER', 'LEER', '累尔', 0, 1, 'DE', 0, 0, 'HXRC'),
('DELUB', 'LUBECK', '吕贝克', 0, 1, 'DE', 0, 0, 'HXRC'),
('DENOR', 'NORDENHAM', '诺登哈姆', 0, 1, 'DE', 0, 0, 'HXRC'),
('DENUS', 'NEUSS', '诺伊斯', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEPAP', 'PAPENBURG', '帕彭堡', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEROS', 'ROSTOCK', '罗斯托克', 0, 1, 'DE', 0, 0, 'HXRC'),
('DETON', 'TONNING', '滕宁', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEVEG', 'VEGESACK', '弗格萨克', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEWIL', 'WILHELMSHAVEN', '威廉港', 0, 1, 'DE', 0, 0, 'HXRC'),
('DEWIS', 'WISMAR', '维斯马', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEMCH', 'MUNICH', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEDOR', 'DORTMUND', '多特蒙德', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEFRE', 'FREILASSING', '弗赖拉辛', 0, 1, 'DE', 0, 0, 'HXRC'),
('GENUR', 'NURNBERG', '纽纶堡', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEDUE', 'DUESSELDORF', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEVIE', 'VIERNHEIM', '维尔海姆', 0, 1, 'DE', 0, 0, 'HXRC'),
('GESPR', 'SPROCKHOEVEL', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GESTR', 'STREHLA', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEBIN', 'BERLIN', '柏林', 0, 1, 'DE', 0, 0, 'HXRC'),
('GECNE', 'COLOGNE', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEVTA', 'VECHTA', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEWRF', 'WARENDORF', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEKUE', 'KARLSRHUE', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEMEN', 'MUENCHEN', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GELEI', 'LEIPZIG', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GEWUP', 'WUPPERTAL', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GESCH', 'SCHWALMSTADT', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('HAM', 'HAM', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('GRAN', 'GRANKFORT', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('HAR', 'HARLSRUHE', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('LISS', 'LISSONTORE', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('DIET', 'DIETZENBACH', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('ESS', 'ESSEN', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('DRES', 'DRESDEN', '', 0, 1, 'DE', 0, 0, 'HXRC'),
('DD', 'HAMBURG,GERMANY', '汉堡', 0, 1, 'DE', 0, 0, 'HXRC'),
('GHACC', 'ACCRA', '阿克拉', 0, 1, 'GH', 0, 0, 'HXRC'),
('GHTAK', 'TAKORADI', '塔科拉迪', 0, 1, 'GH', 0, 0, 'HXRC'),
('GHTEM', 'TEMA', '特马', 0, 1, 'GH', 0, 0, 'HXRC'),
('DESTR', 'STRALSUND', '斯特拉尔松', 0, 1, 'GH', 0, 0, 'HXRC'),
('GIGIB', 'GIBRALTAR', '直布罗陀', 0, 1, 'GI', 0, 0, 'HXRC'),
('GRATH', 'ATHENS', '雅典', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRSAL', 'SALONICA', '萨洛尼卡', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRARG', 'ARGOSTOLION', '阿戈斯托利昂', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRCAN', 'CANEA', '干尼亚', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRCFU', 'CORFU', '科孚', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRCOR', 'CORINTH', '科林斯', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRELE', 'ELEUSIS', '埃莱夫西斯', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRCLS', 'CHALKIS', '哈尔基斯', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRIRA', 'IRAKLION', '伊拉克利翁', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRITE', 'ITEA', '伊泰阿', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRITI', 'ITHAKA ISLAND', '伊萨基', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRKAI', 'KALYMNOS ISLAND', '卡利姆诺斯', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRKAL', 'KALAMATA', '卡拉迈', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRKAV', 'KAVALLA', '卡瓦拉', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRKOS', 'KOS ISLAND', '科斯岛', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRKOU', 'KOUTALA', '库塔拉', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRLAU', 'LAURIUM', '拉夫里翁', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRMII', 'MILOS ISLANDS', '米洛斯岛', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRMIT', 'MITYLENE', '米提林尼', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRPAT', 'PATRAS', '佩特雷', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRPIR', 'PIRAEUS', '比雷埃夫斯', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRRDI', 'RHODES ISLAND', '罗得', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRRET', 'RETHIMNON', '雷西姆农', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRSDB', 'SUDA BAY', '苏达湾', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRTHE', 'THESSALONIKI', '塞萨洛尼基', 0, 1, 'GR', 0, 0, 'HXRC'),
('GRVLS', 'VOLOS', '伏洛斯', 0, 1, 'GR', 0, 0, 'HXRC'),
('PHVIL', 'VILLANUEVA(GU)', '维拉努埃瓦', 0, 1, 'GT', 0, 0, 'HXRC'),
('CLPBO', 'PUERTO BORIES', '博里奥斯港', 0, 1, 'GT', 0, 0, 'HXRC'),
('GTCHA', 'CHAMPERICO', '钱佩里科', 0, 1, 'GT', 0, 0, 'HXRC'),
('GTPBA', 'PUERTO BARRIOS', '巴里奥斯港', 0, 1, 'GT', 0, 0, 'HXRC'),
('GTPQL', 'PUERTO QUETZAL', '圣何塞', 0, 1, 'GT', 0, 0, 'HXRC'),
('GTSTC', 'SANTO TOMAS DE CASTILLA', '圣托马斯', 0, 1, 'GT', 0, 0, 'HXRC'),
('GJS.T', 'S.TOMAS DE CASTILLA', '', 0, 1, 'GT', 0, 0, 'HXRC'),
('GUZAC', 'ZACAPA', '扎卡帕', 0, 1, 'GT', 0, 0, 'HXRC'),
('GWVIC', 'VICTORIA(GW)', '维多利亚', 0, 1, 'GW', 0, 0, 'HXRC'),
('GNCON', 'CONAKRY', '科纳克里', 0, 1, 'GN', 0, 0, 'HXRC'),
('GWBIS', 'BISSAU', '比绍', 0, 1, 'GN', 0, 0, 'HXRC'),
('GWBOL', 'BOLAMA', '博拉多', 0, 1, 'GN', 0, 0, 'HXRC'),
('GWCAC', 'CACHEU', '卡谢乌', 0, 1, 'GN', 0, 0, 'HXRC'),
('GFCAY', 'CAYANNE', '卡宴', 0, 1, 'GY', 0, 0, 'HXRC'),
('GYGEO', 'GEORGETOWN(GY)', '乔治敦', 0, 1, 'GY', 0, 0, 'HXRC'),
('HTACA', 'AUX CAYES', '奥凯', 0, 1, 'HT', 0, 0, 'HXRC'),
('HTCHA', 'CAP HAITIEN', '海地角', 0, 1, 'HT', 0, 0, 'HXRC'),
('HTGON', 'GONAIVES', '戈纳伊夫', 0, 1, 'HT', 0, 0, 'HXRC'),
('HTJER', 'JEREMIE', '热雷米', 0, 1, 'HT', 0, 0, 'HXRC'),
('HTMIR', 'MIRAGOANE', '米腊关', 0, 1, 'HT', 0, 0, 'HXRC'),
('HTPAP', 'PORT AU PRINCE', '太子港', 0, 1, 'HT', 0, 0, 'HXRC'),
('HTSMC', 'ST. MARC', '圣马克', 0, 1, 'HT', 0, 0, 'HXRC'),
('HOGEN', 'GENDT', '', 0, 1, 'NL', 0, 0, 'HXRC'),
('HNAPA', 'AMAPALA', '阿马帕拉', 0, 1, 'HN', 0, 0, 'HXRC'),
('HNLCE', 'LA CEIBA', '拉塞瓦', 0, 1, 'HN', 0, 0, 'HXRC'),
('HNPCO', 'PUERTO CORTES', '科尔特斯港', 0, 1, 'HN', 0, 0, 'HXRC'),
('HNSLO', 'SAN LORENZO(HN)', '圣洛伦索', 0, 1, 'HN', 0, 0, 'HXRC'),
('HNTRU', 'TRUJILLO', '特鲁希略', 0, 1, 'HN', 0, 0, 'HXRC'),
('HOCHO', 'CHOLOMA', '', 0, 1, 'HN', 0, 0, 'HXRC'),
('HOLMA', 'LA LIMA', '拉利马', 0, 1, 'HN', 0, 0, 'HXRC'),
('HOTEG', 'TEGUCIGALPA', '', 0, 1, 'HN', 0, 0, 'HXRC'),
('SP', 'SAN PEDRO SULA', '', 0, 1, 'HN', 0, 0, 'HXRC'),
('HOVIL', 'VILLANUEVA(HO)', '维拉努埃瓦', 0, 1, 'HN', 0, 0, 'HXRC'),
('HOBUF', 'BUFALO', '布法罗', 0, 1, 'HN', 0, 0, 'HXRC'),
('HUSZE', 'SZEGED', '塞格德', 0, 1, 'HU', 0, 0, 'HXRC'),
('HUBUD', 'BUDAPEST', '布达佩斯', 0, 1, 'HU', 0, 0, 'HXRC'),
('HUGYO', 'GYOER', '杰尔', 0, 1, 'HU', 0, 0, 'HXRC'),
('HUTAT', 'TATA', '塔塔', 0, 1, 'HU', 0, 0, 'HXRC'),
('HUDEB', 'DEBRECEN', '', 0, 1, 'HU', 0, 0, 'HXRC'),
('GODO', 'GODOLLO', '', 0, 1, 'HU', 0, 0, 'HXRC'),
('48', 'CEGLED', '', 0, 1, 'HU', 0, 0, 'HXRC'),
('ISAKU', 'AKUREYRI', '阿克雷里', 0, 1, 'IS', 0, 0, 'HXRC'),
('ISHAF', 'HAFNARFJORD', '哈布纳菲厄泽', 0, 1, 'IS', 0, 0, 'HXRC'),
('ISHUS', 'HUSAVIK', '胡萨维克', 0, 1, 'IS', 0, 0, 'HXRC'),
('ISAKR', 'AKRANES', '阿克拉内斯', 0, 1, 'IS', 0, 0, 'HXRC'),
('ISISA', 'ISAFJORD', '伊萨菲厄泽', 0, 1, 'IS', 0, 0, 'HXRC'),
('ISKEF', 'KEFLAVIK', '凯夫拉维克', 0, 1, 'IS', 0, 0, 'HXRC'),
('ISNES', 'NESKAUPSTADUR', '内斯克伊斯塔泽', 0, 1, 'IS', 0, 0, 'HXRC'),
('ISREY', 'REYKJAVIK', '雷克雅未克', 0, 1, 'IS', 0, 0, 'HXRC'),
('ISSEY', 'SEYDISFJORD', '塞济斯菲厄泽', 0, 1, 'IS', 0, 0, 'HXRC'),
('ISSIG', 'SIGLUFJORD', '锡格吕菲厄泽', 0, 1, 'IS', 0, 0, 'HXRC'),
('ISVSI', 'VESTMANN ISLAND', '韦斯特曼纳岛', 0, 1, 'IS', 0, 0, 'HXRC'),
('IECLA', 'CLARECASTLE', '克莱尔卡斯尔', 0, 1, 'IS', 0, 0, 'HXRC'),
('IECLO', 'CLONAKILTY', '克洛纳基尔蒂', 0, 1, 'IS', 0, 0, 'HXRC'),
('INMRL', 'MANGROLE', '曼格罗尔', 0, 1, 'IN', 0, 0, 'HXRC'),
('INMVI', 'MANDVI', '曼德维', 0, 1, 'IN', 0, 0, 'HXRC'),
('INNMA', 'NEW MANGALORE', '新芒格洛尔', 0, 1, 'IN', 0, 0, 'HXRC'),
('INPAR', 'PARADIP', '巴拉迪布', 0, 1, 'IN', 0, 0, 'HXRC'),
('INPBL', 'PORT BLAIR', '布莱尔港', 0, 1, 'IN', 0, 0, 'HXRC'),
('INPJM', 'PANJIM', '潘吉姆', 0, 1, 'IN', 0, 0, 'HXRC'),
('INPOK', 'PORT OKHA', '奥卡港', 0, 1, 'IN', 0, 0, 'HXRC'),
('INPON', 'PONDICHERRY', '本地治里', 0, 1, 'IN', 0, 0, 'HXRC'),
('INQUI', 'QUILON', '奎隆', 0, 1, 'IN', 0, 0, 'HXRC'),
('INTEL', 'TELLICHERRY', '代利杰里', 0, 1, 'IN', 0, 0, 'HXRC'),
('INTUT', 'TUTICORIN', '杜蒂戈林', 0, 1, 'IN', 0, 0, 'HXRC'),
('INVER', 'VERAVAL', '韦拉沃尔', 0, 1, 'IN', 0, 0, 'HXRC'),
('INVIS', 'VISAKHAPATNAM', '维沙卡帕特南', 0, 1, 'IN', 0, 0, 'HXRC'),
('IDAMP', 'AMPENAN', '安佩南', 0, 1, 'IN', 0, 0, 'HXRC'),
('IDDON', 'DONGGALA', '栋加拉', 0, 1, 'IN', 0, 0, 'HXRC'),
('INALL', 'ALLEPPEY', '阿勒皮', 0, 1, 'IN', 0, 0, 'HXRC'),
('INBED', 'BEDI', '贝迪', 0, 1, 'IN', 0, 0, 'HXRC'),
('INBHA', 'BHAVNAGAR', '包纳加尔', 0, 1, 'IN', 0, 0, 'HXRC'),
('INBHE', 'BHEEMUNIPATNAM', '比穆尼帕特南', 0, 1, 'IN', 0, 0, 'HXRC'),
('INBOM', 'BOMBAY', '孟买', 0, 1, 'IN', 0, 0, 'HXRC'),
('INCAL', 'CALCUTTA', '加尔格答', 0, 1, 'IN', 0, 0, 'HXRC'),
('INCAM', 'CALINGAPATNAM', '格灵格伯德讷姆', 0, 1, 'IN', 0, 0, 'HXRC'),
('INCAN', 'CANNANORE', '坎纳诺尔', 0, 1, 'IN', 0, 0, 'HXRC'),
('INCCT', 'CALICUT', '卡利卡特', 0, 1, 'IN', 0, 0, 'HXRC'),
('INCOC', 'COCHIN', '科钦', 0, 1, 'IN', 0, 0, 'HXRC'),
('INCOL', 'COLACHEL', '科拉歇尔', 0, 1, 'IN', 0, 0, 'HXRC'),
('INCUD', 'CUDDALORE', '库达洛尔', 0, 1, 'IN', 0, 0, 'HXRC'),
('INDAM', 'DAMAN', '达曼', 0, 1, 'IN', 0, 0, 'HXRC'),
('INDIU', 'DIU', '第乌', 0, 1, 'IN', 0, 0, 'HXRC'),
('INHDA', 'HALDIA', '哈德雷', 0, 1, 'IN', 0, 0, 'HXRC'),
('INKAK', 'KAKINADA', '卡基纳达', 0, 1, 'IN', 0, 0, 'HXRC'),
('INKAN', 'KANDLA', '根德拉', 0, 1, 'IN', 0, 0, 'HXRC'),
('INKAR', 'KARWAR', '加尔瓦尔', 0, 1, 'IN', 0, 0, 'HXRC'),
('INMAD', 'MADRAS', '马德拉斯', 0, 1, 'IN', 0, 0, 'HXRC'),
('INMAL', 'MALPE', '马尔佩', 0, 1, 'IN', 0, 0, 'HXRC'),
('INMAN', 'MANGALORE', '芒格洛尔', 0, 1, 'IN', 0, 0, 'HXRC'),
('INMOR', 'MORMUGAO', '莫尔穆冈', 0, 1, 'IN', 0, 0, 'HXRC'),
('INNEW', 'NEW DELHI', '新德里', 0, 1, 'IN', 0, 0, 'HXRC'),
('INBE', 'BEYPORE', '贝普尔', 0, 1, 'IN', 0, 0, 'HXRC'),
('CHE', 'CHENNAI', '清佘', 0, 1, 'IN', 0, 0, 'HXRC'),
('INNHA', 'NHAVA SHEVA', '那瓦西瓦', 0, 1, 'IN', 0, 0, 'HXRC'),
('INTOM', 'TUTICOM', '', 0, 1, 'IN', 0, 0, 'HXRC'),
('MUMBA', 'MUMBAI,INDIA', '孟买', 0, 1, 'IN', 0, 0, 'HXRC'),
('ANRU', 'AMRITSAR', '', 0, 1, 'IN', 0, 0, 'HXRC'),
('NSI', 'NSICT/INDIA', '', 0, 1, 'IN', 0, 0, 'HXRC'),
('AMD', 'ICD AHMEDABD', '阿默达巴德', 0, 1, 'IN', 0, 0, 'HXRC'),
('112', 'BOMBAY PORT', '孟买港', 0, 1, 'IN', 0, 0, 'HXRC'),
('VIZ', 'VIZAG', '', 0, 1, 'IN', 0, 0, 'HXRC'),
('IDAMI', 'AMBON ISLAND', '安汶', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDBAL', 'BALIKPAPAN', '巴厘巴板', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDBAN', 'BANJARMASIN', '马辰', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDBGI', 'BANYUWANGI', '巴纽旺宣', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDBIT', 'BITUNG', '比通', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDBLS', 'BENGKALIS', '本卡利斯', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDBLU', 'BENGKULU', '明古鲁', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDBMA', 'BIMA', '比马', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDBLN', 'BELAWAN', '勿拉湾', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDBNA', 'BENOA', '伯诺阿', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDBSA', 'BAGAN SI API AP', '巴眼牙比', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDCIR', 'CIREBON', '井里汶', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDDMI', 'DUMAI', '杜迈', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDFAK', 'FAK FAK', '法克法克', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDJAK', 'JAKARTA', '雅加达', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDKAL', 'KALIANGET', '卡利昂厄特', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDKET', 'KETAPANG', '吉打邦', 0, 1, 'ID', 0, 0, 'HXRC'),
('INBEL', 'BELEKERI', '贝莱克里', 0, 1, 'ID', 0, 0, 'HXRC'),
('INCOO', 'COONDAPOOR', '贡达布尔', 0, 1, 'ID', 0, 0, 'HXRC'),
('INDJT', 'DJAKARAT', '雅加达', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDMEN', 'MENADO', '万鸦老', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDMEU', 'MEULABOH', '米拉务', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDPAD', 'PADANG', '巴东', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDPAL', 'PALEMBANG', '巨港', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDPAN', 'PANARUKAN', '巴那鲁干', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDPJG', 'PANJANG', '潘姜', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDPNK', 'PONTIANAK', '坤甸', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDPSU', 'PANGKALAN SUSU', '庞卡兰苏苏', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDSAB', 'SABANG(ID)', '沙璜', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDSAL', 'SALAWATI', '沙拉瓦蒂', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDSBS', 'SAMBAS', '三发', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDSEM', 'SEMARANG', '三宝垄', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDSOR', 'SORONG', '索龙', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDSUR', 'SURABAYA', '泗水', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDTAI', 'TARAKAN', '打拉根', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDTBN', 'TUBAN', '图班', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDTEL', 'TELUKBETUNG', '直落勿洞', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDTPR', 'TANJUNG PRIOK', '丹戒不碌', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDTUB', 'TANJUNG UBAN', '丹戒乌班', 0, 1, 'ID', 0, 0, 'HXRC'),
('INDJA', 'DJAJAPURA', '贾贾普拉', 0, 1, 'ID', 0, 0, 'HXRC'),
('INDJU', 'DJUWANA', '朱瓦纳', 0, 1, 'ID', 0, 0, 'HXRC'),
('BP', 'BATAM PULAU', '', 0, 1, 'ID', 0, 0, 'HXRC'),
('INBAN', 'BANDUNG', '万隆', 0, 1, 'ID', 0, 0, 'HXRC'),
('TAN', 'TANJUNG EMAS PORT,SEMARANG', '', 0, 1, 'ID', 0, 0, 'HXRC'),
('JK1', 'JAKARTA UTC1', '雅加达(1号码头)', 0, 1, 'ID', 0, 0, 'HXRC'),
('JK2', 'JAKARTA UTC2', '雅加达(2号码头)', 0, 1, 'ID', 0, 0, 'HXRC'),
('JK3', 'JAKARTA UTC3', '雅加达3号码头', 0, 1, 'ID', 0, 0, 'HXRC'),
('UPG', 'UJUNG PANDANG', '乌戎潘当', 0, 1, 'ID', 0, 0, 'HXRC'),
('IDJKT', 'IDJKT', '', 0, 1, 'ID', 0, 0, 'HXRC'),
('IRABA', 'ABADAN', '阿巴丹', 0, 1, 'IR', 0, 0, 'HXRC'),
('IRBAB', 'BANDAR ABBAS', '阿巴斯港', 0, 1, 'IR', 0, 0, 'HXRC'),
('IRBKH', 'BANDAR KHOMEINI', '霍梅尼港', 0, 1, 'IR', 0, 0, 'HXRC'),
('IRBMA', 'BANDAR SHAHPUR', '沙赫普尔港', 0, 1, 'IR', 0, 0, 'HXRC'),
('IRBUS', 'BUSHIRE', '布什尔', 0, 1, 'IR', 0, 0, 'HXRC'),
('IRKGI', 'KHARG ISLAND', '哈尔克岛', 0, 1, 'IR', 0, 0, 'HXRC'),
('IRKHO', 'KHORRAMSHAHR', '霍拉姆沙赫尔', 0, 1, 'IR', 0, 0, 'HXRC'),
('IDPBN', 'PANGKALAN BUN', '庞卡兰布翁', 0, 1, 'IR', 0, 0, 'HXRC'),
('IQBAS', 'BASRAH', '巴士拉', 0, 1, 'IQ', 0, 0, 'HXRC'),
('IQFAO', 'FAO', '法奥', 0, 1, 'IQ', 0, 0, 'HXRC'),
('IQKAA', 'KHOR AL AMAYA', '豪尔艾迈耶', 0, 1, 'IQ', 0, 0, 'HXRC'),
('IQUMQ', 'UMM QASR', '乌姆卡萨', 0, 1, 'IQ', 0, 0, 'HXRC'),
('KWKAM', 'KHOR AL MUFATTA', '霍尔姆法塔', 0, 1, 'IQ', 0, 0, 'HXRC'),
('IQRAS', 'BASRA', '巴士拉', 0, 1, 'IQ', 0, 0, 'HXRC'),
('NZWES', 'WESTPORT', '韦斯特皮特', 0, 1, 'IE', 0, 0, 'HXRC'),
('IECOK', 'CORK', '科克', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEDCN', 'DUNCANNON', '邓坎嫩', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEDDK', 'DUNDALK', '邓多克', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEDON', 'DONEGAL', '多尼戈尔', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEDRO', 'DROGHEDA', '德罗赫达', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEDUB', 'DUBLIN', '都柏林', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEDUL', 'DUN LAOGHAIRE', '敦劳费尔', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEDUN', 'DUNMORE', '邓莫尔', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEDVN', 'DUNGARVAN', '邓加文', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEFNT', 'FENIT', '费尼特', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEFOY', 'FOYNES', '福因斯', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEGAL', 'GALWAY', '戈尔韦', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEHOW', 'HOWTH', '霍思', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEKIN', 'KINSALE', '金塞尔', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEKLA', 'KILLALA', '基拉拉', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEKSH', 'KILRUSH', '基尔拉什', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEKGS', 'KILLYBEGS', '基利贝格斯', 0, 1, 'IE', 0, 0, 'HXRC'),
('IELIM', 'LIMERICK', '利默里克', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEMOV', 'MOVILLE', '莫维尔', 0, 1, 'IE', 0, 0, 'HXRC'),
('IENRS', 'NEW ROSS', '新罗斯', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEROS', 'ROSSLARE', '罗斯莱尔', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEVAL', 'VALENTIA', '瓦伦西亚', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEWAT', 'WATERFORD', '沃特福德', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEWIC', 'WICKLOW', '威克洛', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEYOU', 'YOUGHAL', '约尔', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEARK', 'ARKLOW', '阿克洛', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEBAL', 'BALTIMORE(IE)', '巴尔的摩', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEBAN', 'BANTRY', '班特里', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEBNA', 'BALLINA', '巴利纳', 0, 1, 'IE', 0, 0, 'HXRC'),
('IEBUP', 'BURTON PORT', '伯顿波特', 0, 1, 'IE', 0, 0, 'HXRC'),
('IECAH', 'CAHIRCIVEEN', '克尔西文', 0, 1, 'IE', 0, 0, 'HXRC'),
('IRCOR', 'CORKIRELAND', '科克', 0, 1, 'IE', 0, 0, 'HXRC'),
('IRBEL', 'BELFAST(IR)', '贝尔法斯特', 0, 1, 'IE', 0, 0, 'HXRC'),
('CAV', 'CAVAN', '', 0, 1, 'IE', 0, 0, 'HXRC'),
('ILASD', 'ASHDOD', '阿什杜德', 0, 1, 'IL', 0, 0, 'HXRC'),
('ILASH', 'ASHKELON', '阿什克伦', 0, 1, 'IL', 0, 0, 'HXRC'),
('ILHFA', 'HAIFA', '海法', 0, 1, 'IL', 0, 0, 'HXRC'),
('ITALG', 'ALGHERO', '阿尔盖罗', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITBAG', 'BAGNOLI', '巴尼奥利', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITBAR', 'BARI', '巴里', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITBRI', 'BRINDISI', '布林迪西', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITBTA', 'BARLETTA', '巴列塔', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITCAG', 'CAGLIARI', '卡利亚里', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITANC', 'ANCONA', '安科纳', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITANZ', 'ANZIO', '安齐奥', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITAUG', 'AUGUSTA', '奥古斯塔', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITAVO', 'AVOLA', '阿沃拉', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITCAR', 'CARLOFORTE', '卡洛福泰', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITCAT', 'CATANIA', '卡塔尼亚', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITCDS', 'CAST. DI STABIA', '斯塔比亚海堡', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITCHI', 'CHIOGGIA', '基奥贾', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITCIV', 'CIVITAVECCHIA', '奇维塔韦基亚', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITCRE', 'CROTONE', '克罗托内', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITCRO', 'CATANZARO', '卡坦扎罗', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITFIU', 'FIUMICINO', '菲乌米奇诺', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITFOL', 'FOLLONICA', '福洛尼卡', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITGAE', 'GAETA', '加埃塔', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITGAI', 'GOLFO ARANCI', '阿兰奇湾城', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITGAL', 'GALLIPOLI', '加利波利', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITGEL', 'GELA', '杰拉', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITGOA', 'GENOA', '热那亚', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITIMP', 'IMPERIA', '因佩里亚', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITLIC', 'LICATA', '利卡塔', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITLMA', 'LA MADDALENA', '拉马达莱那', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITMAR', 'MARSALA', '马尔萨拉', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITMDC', 'MARINA DI CARRARA', '马里纳迪卡拉拉', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITMDV', 'MAZARA DEL VALL', '马扎拉德尔瓦洛', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITMES', 'MESSINA', '墨西拿', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITMIL', 'MILAZZO', '米拉佐', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITMLI', 'MONOPOLI', '莫诺波利', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITMOL', 'MOLFETTA', '莫尔费塔', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITNAP', 'NAPLES', '那不勒斯', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITOLB', 'OLBIA', '奥尔比亚', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITORI', 'ORISTANO', '奥里斯塔诺', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITPAL', 'PALERMO', '巴勒莫', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITPAZ', 'PORTO AZZURRO', '阿祖罗港', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITPEM', 'PORTO EMPEDOCLE', '恩佩多克莱港', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITPES', 'PESCARA', '佩斯卡拉', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITPFO', 'PORTO FERRAIO', '费拉约港', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITPIO', 'PIOMBINO', '皮翁比诺', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITPOZ', 'POZZUOLI', '波佐利', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITPRO', 'PESARO', '佩萨罗', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITPSO', 'PORTOSCUSO', '斯库索港', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITPTO', 'PORTO TORRES', '托雷斯港', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITRAV', 'RAVENNA', '腊万纳', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITSAL', 'SALERNO', '萨莱诺', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITSAR', 'SARROCH', '萨罗奇', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITSAV', 'SAVONA', '萨沃纳', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITRMA', 'RIO MARINA', '里奥马里纳', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITSPE', 'LA SPEZIA', '拉斯佩齐亚', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITSRE', 'SAN REMO', '圣雷莫', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITTAL', 'TALAMONE', '塔拉莫内', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITTAR', 'TARANTO', '塔兰托', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITTDG', 'TORRE DEL GRECO', '托雷德尔格雷科', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITTRA', 'TRAPANI', '特拉帕尼', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITTRI', 'TRIESTE', '的里雅斯特', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITVEN', 'VENICE', '威尼斯', 0, 1, 'IT', 0, 0, 'HXRC'),
('DKRON', 'RONNE', '伦讷', 0, 1, 'IT', 0, 0, 'HXRC'),
('LEGHO', 'LEGHORN', '莱戈恩', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITROM', 'ROMA', '罗马', 0, 1, 'IT', 0, 0, 'HXRC'),
('GENOV', 'GENOVA', '热那亚', 0, 1, 'IT', 0, 0, 'HXRC'),
('NAPOL', 'NAPOLI', '那波利', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITLIV', 'LIVORNO', '里窝那', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITMLA', 'MILANO', '米兰', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITTOR', 'TORINO', '', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITVER', 'VERONA', '', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITCMO', 'COMO', '科莫', 0, 1, 'IT', 0, 0, 'HXRC'),
('ITGE', 'GENOA PORT,ITALY', '热那亚', 0, 1, 'IT', 0, 0, 'HXRC'),
('IT-PO', 'GENOVA PORT-ITALY', '热那亚', 0, 1, 'IT', 0, 0, 'HXRC'),
('NOVA', 'GENOVA PORT', '热那亚', 0, 1, 'IT', 0, 0, 'HXRC'),
('BIE', 'BIELLA', '', 0, 1, 'IT', 0, 0, 'HXRC'),
('FLOR', 'FLORENCE', '', 0, 1, 'IT', 0, 0, 'HXRC'),
('TUR', 'TURIN', '', 0, 1, 'IT', 0, 0, 'HXRC'),
('PRA', 'PRATO', '普拉托', 0, 1, 'IT', 0, 0, 'HXRC'),
('BOLO', 'BOLOGNA', '', 0, 1, 'IT', 0, 0, 'HXRC'),
('41', 'VENICE,ITALY', '威尼斯', 0, 1, 'IT', 0, 0, 'HXRC'),
('JMRCP', 'ROCKY POINT', '罗基波因特', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMBLR', 'BLACK RIVER', '布莱克河', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMBLU', 'BLUEFIELDS(JM)', '布卢菲尔兹', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMFAL', 'FALMOUTH(JM)', '法尔茅斯', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMKIN', 'KINGSTON(JM)', '金斯敦', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMLUC', 'LUCEA', '卢西', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMMOB', 'MONTEGO BAY', '蒙特哥湾', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMORB', 'OCHO RIOS BAY', '奥乔里奥斯湾', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMPAN', 'PORT ANTONIO', '安东尼奥港', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMPES', 'PORT ESQUIVEL', '埃斯基韦尔港', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMPKA', 'PORT KAISER', '凯泽港', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMPMO', 'PORT MORANT', '莫兰特港', 0, 1, 'JM', 0, 0, 'HXRC'),
('JMPRO', 'PORT ROYAL(JM)', '罗亚尔港', 0, 1, 'JM', 0, 0, 'HXRC'),
('JPAIO', 'AIOI', '相生', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPAKI', 'AKITA', '秋田', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPAKW', 'AKO WAN', '赤穗湾', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPAIN', 'AINOURA', '相浦', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPAMA', 'AMAGASAKI', '尼崎', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPAOM', 'AOMORI', '青森', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPATS', 'ATSUMI', '渥美', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPCBA', 'CHIBA', '千叶', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPCHI', 'CHITA', '知多', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPENA', 'ENA', '江名', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPETA', 'ETAJIMA', '江田岛', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPFKA', 'FUKUOKA', '福冈', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPFUK', 'FUKUYAMA', '福山', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPFUS', 'FUSHIKI', '伏木', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPHAC', 'HACHINOHE', '八户', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPHAK', 'HAKODATE', '函馆', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPHIA', 'HIAGARI', '日明', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPHIT', 'HITACHI', '日立', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPHMA', 'HIROSHIMA', '广岛', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPHOS', 'HOSOSHIMA', '细岛', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPHSU', 'HAMAMATSU', '滨松', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPHTA', 'HIROHATA', '广田', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPIMA', 'IMABARI', '今治', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPINN', 'INNOSHIMA', '因岛', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPISH', 'ISHINOMAKI', '石卷', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPIWA', 'IWAKUNI', '岩国', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKAG', 'KAGOSHIMA', '鹿儿岛', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKAI', 'KAINAN', '海南', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKAK', 'KAKOGAWA', '加古川', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKAM', 'KAMAISHI', '釜石', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKAW', 'KAWASAKI', '川崎', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKII', 'KIIRE', '喜入', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKIK', 'KIKUMA', '菊间', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKIN', 'KINUURA', '衣浦', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKIS', 'KIMITSU', '君津', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKIT', 'KITAKYUSHU', '北九州', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKMA', 'KASHIMA', '鹿岛', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKOB', 'KOBE', '神户', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKOC', 'KOCHI', '高知', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPSHI', 'SHIMONOSEKI', '下关', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPSKI', 'SAKAI', '棵', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPSSU', 'SHIMOTSU', '下津', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPSTA', 'SAKATA', '洒田', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPSZU', 'SHIMIZU', '清水', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTAM', 'TAMANO', '玉野', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTAN', 'TANABE', '田边', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTKU', 'TAKAMATSU', '高松', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTMI', 'TSUKUMI', '津久见', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTOA', 'TOKUYAMA', '德山', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTOB', 'TOBATA', '户*', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTOK', 'TOKYO', '东京', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTOM', 'TOMAKOMAI', '苫小牧', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTON', 'TONDA', '富田', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTOS', 'TOYAMA SINKO', '富山新港', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTOY', 'TOYOHASHI', '丰桥', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTSU', 'TSU', '津', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPTYA', 'TOYAMA', '富山', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPUBE', 'UBE', '宇部', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPUNO', 'UNO', '宇野', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPWAK', 'WAKKANAI', '稚内', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPWKA', 'WAKAYAMA', '和歌山', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPWKU', 'WAKAMATSU', '若松', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPYAW', 'YAWATA', '八幡', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPYCI', 'YOKKAICHI', '四日市', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPYKA', 'YOKOSUKA', '横须贺', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPYOK', 'YOKOHAMA', '横滨', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKOE', 'KAWANOE', '川之江', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKOK', 'KOKURA', '小仓', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKOM', 'KOMATSUSHIMA', '小松岛', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKON', 'KONOSHIMA', '神岛', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKUD', 'KUDAMATSU', '下松', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKUI', 'KUROSAKI', '黑崎', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKUR', 'KURE', '吴港', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKUS', 'KUSHIRO', '钏路', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKWA', 'KANOKAWA', '鹿川', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPKWN', 'KIN WAN', '金湾', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPMAI', 'MAIZURU', '舞鹤', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPMAK', 'MAKIYAMA', '牧山', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPMIZ', 'MIZUSHIMA', '水岛', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPMKE', 'MIIKE', '三池', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPMKO', 'MIYAKO', '宫古', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPMMA', 'MATSUYAMA', '松山', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPMOJ', 'MOJI', '门司', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPMUR', 'MURORAN', '室兰', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPNAG', 'NAGOYA', '名古屋', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPNAH', 'NAHA', '那霸', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPNAO', 'NAOETSU', '直江津', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPNHI', 'NIIGATA', '新泻', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPNKI', 'NAGASAKI', '长崎', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPNMA', 'NIIHAMA', '新居滨', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPOFU', 'OFUNATO', '大船渡', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPOIT', 'OITA', '大分', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPONA', 'ONAHAMA', '小名滨', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPOSK', 'OSAKA', '大阪', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPOTA', 'OTARU', '小樽', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPSBO', 'SASEBO', '佐世保', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPSDE', 'SAKAIDE', '坂出', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPSDS', 'SENDAI SI', '川内市', 0, 1, 'JP', 0, 0, 'HXRC'),
('JPSEN', 'SENDAI', '仙台', 0, 1, 'JP', 0, 0, 'HXRC'),
('JAHAK', 'HAKATA', '博多', 0, 1, 'JP', 0, 0, 'HXRC'),
('JAIRY', 'IMABARY', '今治', 0, 1, 'JP', 0, 0, 'HXRC'),
('JANAU', 'NAUETSU', '直江津', 0, 1, 'JP', 0, 0, 'HXRC'),
('JAMRA', 'MAIZURA', '舞鹤', 0, 1, 'JP', 0, 0, 'HXRC'),
('JAPAN', 'OSAKA,JAPAN', '大阪', 0, 1, 'JP', 0, 0, 'HXRC'),
('JASAI', 'SAIPN', '塞班', 0, 1, 'JP', 0, 0, 'HXRC'),
('SEN', 'SENBOKU', '', 0, 1, 'JP', 0, 0, 'HXRC'),
('PTA', 'PTAUR', '小撙', 0, 1, 'JP', 0, 0, 'HXRC'),
('KUMO', 'KUMAMOTO', '熊本', 0, 1, 'JP', 0, 0, 'HXRC'),
('SAP', 'SAPPORO', '扎幌', 0, 1, 'JP', 0, 0, 'HXRC'),
('TSR', 'TSRUGA', '', 0, 1, 'JP', 0, 0, 'HXRC'),
('JOAQA', 'AQABA', '亚喀巴', 0, 1, 'JO', 0, 0, 'HXRC'),
('AQB', 'AQABA FREEZONE', '亚客巴(F.Z)', 0, 1, 'JO', 0, 0, 'HXRC'),
('KHKPS', 'KOMPONG SOM', '磅逊', 0, 1, 'KH', 0, 0, 'HXRC'),
('KHPPH', 'PHNOM-PENH', '金边', 0, 1, 'KH', 0, 0, 'HXRC'),
('KASIH', 'SIHANOUKEVILLE CAMBODIA', '西哈努克', 0, 1, 'KH', 0, 0, 'HXRC'),
('KAKEM', 'KEMPONGSOM', '旁逊', 0, 1, 'KH', 0, 0, 'HXRC'),
('KAALM', 'ALMATY', '', 0, 1, 'KA', 0, 0, 'HXRC'),
('KELAM', 'LAMU', '拉穆', 0, 1, 'KE', 0, 0, 'HXRC'),
('KEMAL', 'MALINDI', '马林迪', 0, 1, 'KE', 0, 0, 'HXRC'),
('KEMOM', 'MOMBASA', '蒙巴萨', 0, 1, 'KE', 0, 0, 'HXRC'),
('KWKUW', 'KUWAIT', '科威特', 0, 1, 'KW', 0, 0, 'HXRC'),
('KWMAA', 'MENA AL AHMADI', '米纳艾哈迈迪', 0, 1, 'KW', 0, 0, 'HXRC'),
('KWMAB', 'MENA ABDULLA', '米纳阿卜杜拉', 0, 1, 'KW', 0, 0, 'HXRC'),
('KWSHU', 'SHUAIBA', '舒艾拜', 0, 1, 'KW', 0, 0, 'HXRC'),
('LVRIX', 'RIGA', '里加', 0, 1, 'LV', 0, 0, 'HXRC'),
('LVVHT', 'VENTSPILS', '文茨皮尔斯', 0, 1, 'LV', 0, 0, 'HXRC'),
('LBBRT', 'BEIRUT', '贝鲁特', 0, 1, 'LB', 0, 0, 'HXRC'),
('LBCHE', 'CHEKKA', '舍卡', 0, 1, 'LB', 0, 0, 'HXRC'),
('LBJOU', 'JOUNIEH', '朱尼耶', 0, 1, 'LB', 0, 0, 'HXRC'),
('LBSID', 'SIDON', '西顿', 0, 1, 'LB', 0, 0, 'HXRC'),
('LBSOU', 'SOUR', '苏尔', 0, 1, 'LB', 0, 0, 'HXRC'),
('LBTRI', 'TRIPOLI(LB)', '的黎波里', 0, 1, 'LB', 0, 0, 'HXRC'),
('LRBUC', 'BUCHANAN(LR)', '布坎南', 0, 1, 'LR', 0, 0, 'HXRC'),
('LRCPA', 'CAPE PALMAS', '帕尔马斯角', 0, 1, 'LR', 0, 0, 'HXRC'),
('LRGBA', 'GRAND BASSA', '大巴萨', 0, 1, 'LR', 0, 0, 'HXRC'),
('LRRCS', 'RIVER CESS', '里弗塞斯', 0, 1, 'LR', 0, 0, 'HXRC'),
('LRMIA', 'MONROVIA', '蒙罗维亚', 0, 1, 'LR', 0, 0, 'HXRC'),
('LYBEN', 'BENGHAZI', '班加西', 0, 1, 'LY', 0, 0, 'HXRC'),
('LYDER', 'DERNA', '德尔纳', 0, 1, 'LY', 0, 0, 'HXRC'),
('LYESR', 'ES SIDER', '锡德尔', 0, 1, 'LY', 0, 0, 'HXRC'),
('LYMEB', 'MARSA EL BREGA', '马萨勃利加', 0, 1, 'LY', 0, 0, 'HXRC'),
('LYMIS', 'MISURATA', '米苏拉塔区', 0, 1, 'LY', 0, 0, 'HXRC'),
('LYRLA', 'RAS LANUF', '拉斯拉努夫', 0, 1, 'LY', 0, 0, 'HXRC'),
('LYTOB', 'TOBRUK', '图卜鲁格', 0, 1, 'LY', 0, 0, 'HXRC'),
('LYTRI', 'TRIPOLI(LY)', '的黎波里', 0, 1, 'LY', 0, 0, 'HXRC'),
('LYZUE', 'ZUETINA', '祖埃提纳', 0, 1, 'LY', 0, 0, 'HXRC'),
('LTKLA', 'KLAIPEDA', '克莱佩达', 0, 1, 'LT', 0, 0, 'HXRC'),
('LIVIL', 'VILNIUS', '维尔纽斯', 0, 1, 'LT', 0, 0, 'HXRC'),
('LIKLA', 'KLAPEIDA', '', 0, 1, 'LT', 0, 0, 'HXRC');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('LIKDA', 'KLAPEIDA', '', 0, 1, 'LT', 0, 0, 'HXRC'),
('LUXEM', 'LUXEMBOURG', '卢森堡', 0, 1, 'LU', 0, 0, 'HXRC'),
('ARDIA', 'DIAMANTE', '迪亚曼泰', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGANA', 'ANALALAVA', '阿纳拉拉瓦', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGANT', 'ANTSIRANANA', '安齐拉纳纳', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGFAR', 'FARAFANGANA', '法拉凡加纳', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGAHA', 'ANTALAHA', '安塔拉哈', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGFDA', 'Fort Dauphin', '多凡堡', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGMAH', 'MAJUNGA', '马任加', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGMAR', 'MAROANTSETRA', '马鲁安采特拉', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGMBE', 'MOROMBE', '穆龙贝', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGMRA', 'MANAKARA', '马纳卡拉', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGMRY', 'MANANJARY', '马南扎里', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGMVA', 'MORONDAVA', '穆龙达瓦', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGNBE', 'NOSY BE', '贝岛', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGSAM', 'SAMBAVA', '桑巴瓦', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGTOA', 'TOAMASINA', '图阿马西纳', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGTOL', 'TOLEARY', '图莱亚尔', 0, 1, 'MG', 0, 0, 'HXRC'),
('MGTRO', 'TOLAGNARO', '托拉纳罗', 0, 1, 'MG', 0, 0, 'HXRC'),
('MATAM', 'TAMATAVE', '塔马塔夫', 0, 1, 'MG', 0, 0, 'HXRC'),
('NOS', 'NOSSI-BE', '诺西比', 0, 1, 'MG', 0, 0, 'HXRC'),
('MABLA', 'BLANTYRE', '', 0, 1, 'MA', 0, 0, 'HXRC'),
('MALIL', 'LILONGWE', '利朗维', 0, 1, 'MA', 0, 0, 'HXRC'),
('MYBGD', 'BAGAN DATOH', '巴眼拿督', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYBIN', 'BINATANG', '比那唐', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYBTP', 'BATU PAHAT', '巴株巴辖', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYBTU', 'BINTULU', '民都鲁', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYBUT', 'BUTTERWORTH', '巴特沃思', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKOB', 'KOTA BHARU', '哥打巴鲁', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKOK', 'KOTA KINABALU', '亚庇', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKPA', 'KUALA PAHANG', '瓜拉彭亨', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKRO', 'KUALA ROMPIN', '瓜拉弄宾', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKSE', 'KUALA SELANGOR', '瓜拉雪兰莪', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKSU', 'KUALA SUAI', '瓜拉苏埃', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYGEO', 'GEORGETOWN(MY)', '乔治敦', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYJOB', 'JOHORE BAHRU', '柔佛巴鲁', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKER', 'KERTEH', '居茶', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKTR', 'KUALA TRENGGANU', '瓜拉丁加奴', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKUA', 'KUANTAN', '关丹', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKUC', 'KUCHING', '古晋', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKUD', 'KUDAT', '古达', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYKUN', 'KUNAK', '库纳克', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYLAB', 'LABUAN', '拉布安', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYLAD', 'LAHAD DATU', '拉哈达图', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYLAW', 'LAWAS', '拉瓦斯', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYLIM', 'LIMBANG', '林邦', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYLUM', 'LUMUT(MY)', '卢穆特', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYMEL', 'MELAKA', '马六甲', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYPDI', 'PORT DICKSON', '波德申', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYPEN', 'PENANG', '槟城', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYPKE', 'PORT KELANG', '巴生港', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYMIR', 'MIRI', '米里', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYPAG', 'PASIR GUDANG', '帕西古当', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYPRI', 'PRAI', '布莱', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYSAN', 'SANDAKAN', '山打根', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYSAR', 'SARIKEI', '泗里奎', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYSEM', 'SEMPORNA', '仙本那', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYSIB', 'SIBU', '泗务', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYTAW', 'TAWAU', '斗湖', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYTJM', 'TANJONG MANI', '丹章马尼', 0, 1, 'MY', 0, 0, 'HXRC'),
('MYWAB', 'WALLANCE BAY', '哗拉司贝', 0, 1, 'MY', 0, 0, 'HXRC'),
('MLXY', 'KUALA LUMPUR CITY LIMIT', '吉隆坡', 0, 1, 'MY', 0, 0, 'HXRC'),
('MALE', 'MALE', '马累', 0, 1, 'MV', 0, 0, 'HXRC'),
('MABAM', 'BAMAKO', '巴马科', 0, 1, 'ML', 0, 0, 'HXRC'),
('MTVAL', 'VALLETTA', '瓦莱塔', 0, 1, 'MT', 0, 0, 'HXRC'),
('MTMAL', 'MALTA', '马耳他', 0, 1, 'MT', 0, 0, 'HXRC'),
('MUPLO', 'PORT LOUIS', '路易港', 0, 1, 'MU', 0, 0, 'HXRC'),
('ARENS', 'ENSENADA(AR)', '恩塞纳达', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEMEL', 'MELILLA', '梅利利亚', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXACA', 'ACAPULCO', '阿卡普尔科', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXALT', 'ALTAMIRA(MX)', '阿尔塔米拉', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXALV', 'ALVARADO', '阿尔瓦拉多', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXCAM', 'CAMPECHE', '坎佩切', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXCAT', 'CAYO ARCAS', '阿卡斯群岛码头', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXCDC', 'CIUDAD DEL CARM', '卡门城', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXCOA', 'COATZACOALCOS', '夸察夸尔科斯', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXENS', 'ENSENADA', '恩塞纳达（墨）', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXMIN', 'MINATITLAN', '米纳蒂特兰', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXPRO', 'PROGRESS', '普罗格雷索', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXSRO', 'SANTA ROSALIA', '圣罗萨利亚', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXTOP', 'TOPOLOBAMPO', '托波洛班波', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXTUX', 'TUXPAN', '图斯潘', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXSAC', 'SALINA CRUZ', '萨利纳克鲁斯', 0, 1, 'MX', 0, 0, 'HXRC'),
('MXVER', 'VERACRUZ', '韦拉克鲁斯', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEAGU', 'AGUASCALIENTES', '阿瓜斯卡连特斯', 0, 1, 'MX', 0, 0, 'HXRC'),
('MECAN', 'CANCUN', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MECEL', 'CELAYA', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MECIU', 'CIUDAD VICTORIA', '维多利亚城', 0, 1, 'MX', 0, 0, 'HXRC'),
('MECUE', 'CUERNAVACA', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MECUL', 'CULIACAN', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEDUR', 'DURANGO', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEFRE', 'FRESNILLO', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEGUA', 'GUADALAJARA,MEXICO', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEGTO', 'GUANAJUATO', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEHER', 'HERMOSILLO', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEJUA', 'JUAREZ', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MELEO', 'LEON', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MELOS', 'LOS MOCHIS', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEMAT', 'MATAMOROS', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEMEX', 'MEXICALI', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEMCO', 'MEXICO CITY', '墨西哥城', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEMON', 'MONCLOVA', '蒙克洛瓦', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEMEY', 'MONTERREY', '蒙特雷', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEMOR', 'MORELIA', '莫雷利亚', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEMOT', 'MOTUL', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MENOG', 'NOGALES', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MENUE', 'NUEVO LAREDO', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEPRO', 'PROGRESO', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEPUE', 'PUEBLA', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEPTO', 'PUERTO MORELOS', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEQUE', 'QUERETARO', '克雷塔罗', 0, 1, 'MX', 0, 0, 'HXRC'),
('MEREY', 'REYNOSA', '雷诺萨', 0, 1, 'MX', 0, 0, 'HXRC'),
('MESAL', 'SALINA CRUZ', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MESLO', 'SALTILLO', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MESAN', 'SAN FRANCISCO(MEXICO)', '圣弗朗西斯科', 0, 1, 'MX', 0, 0, 'HXRC'),
('MESSI', 'SAN LUIS POTOSI', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('METAM', 'TAMPICO', '坦皮克', 0, 1, 'MX', 0, 0, 'HXRC'),
('METIJ', 'TIJUANA', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('METOL', 'TOLUCA', '托卢卡', 0, 1, 'MX', 0, 0, 'HXRC'),
('TMETO', 'TORREON', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('MAME', 'MANZANILLO,MEXICO', '曼萨尼隆', 0, 1, 'MX', 0, 0, 'HXRC'),
('CDJ', 'CD JUAREZ', '', 0, 1, 'MX', 0, 0, 'HXRC'),
('CECEU', 'CEUTA', '休达', 0, 1, 'MA', 0, 0, 'HXRC'),
('MAMOH', 'MOHAMMEDIA', '穆罕默迪耶', 0, 1, 'MA', 0, 0, 'HXRC'),
('MARBT', 'RABAT', '拉巴特', 0, 1, 'MA', 0, 0, 'HXRC'),
('MASAF', 'SAFI', '萨菲', 0, 1, 'MA', 0, 0, 'HXRC'),
('MATAN', 'TANGIER', '丹吉尔', 0, 1, 'MA', 0, 0, 'HXRC'),
('MATAR', 'TARFAYA', '塔尔法亚', 0, 1, 'MA', 0, 0, 'HXRC'),
('MAAGA', 'AGADIR', '阿加迪尔', 0, 1, 'MA', 0, 0, 'HXRC'),
('MACAS', 'CASABLANCA', '卡萨布兰卡', 0, 1, 'MA', 0, 0, 'HXRC'),
('MAEJA', 'EL JADIDA', '贾迪达', 0, 1, 'MA', 0, 0, 'HXRC'),
('MAESS', 'ESSAOUIRA', '索维拉', 0, 1, 'MA', 0, 0, 'HXRC'),
('MAKEN', 'KENITRA', '盖尼特拉', 0, 1, 'MA', 0, 0, 'HXRC'),
('MALAR', 'LARACHE', '拉腊什', 0, 1, 'MA', 0, 0, 'HXRC'),
('MZANE', 'ANTONIO ENES', '安托尼奥埃尼什', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MZBRA', 'BEIRA', '贝拉', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MZCDE', 'CHINDE', '欣代', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MZIBO', 'IBO', '伊博', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MZINH', 'INHAMBANE', '伊尼扬巴内', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MZMAP', 'MAPUTO', '马普托', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MZMOC', 'MOCIMBOA DA PRAIA', '莫辛布瓦达普拉亚 ', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MZMOM', 'MOMA', '莫马', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MZMOZ', 'MOZAMBIQUE', '莫桑比克', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MZNAC', 'NACALA', '纳卡拉', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MZQUE', 'QUELIMANE', '克利马内', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MOMUT', 'MUTARE', '', 0, 1, 'MZ', 0, 0, 'HXRC'),
('MMMGI', 'MERGUI', '墨吉', 0, 1, 'MM', 0, 0, 'HXRC'),
('MMSAN', 'SANDOWAY', '山多威', 0, 1, 'MM', 0, 0, 'HXRC'),
('MMTAV', 'TAVOY', '土瓦', 0, 1, 'MM', 0, 0, 'HXRC'),
('MMTEN', 'TENASSERIM', '德林达伊', 0, 1, 'MM', 0, 0, 'HXRC'),
('NALUD', 'LUDERITZ', '卢德立次', 0, 1, 'NA', 0, 0, 'HXRC'),
('NAWVB', 'WALVIS BAY', '鲸湾港', 0, 1, 'NA', 0, 0, 'HXRC'),
('NAWAY', 'WAIVIS BAY', '沃尔维斯港', 0, 1, 'NA', 0, 0, 'HXRC'),
('KAT', 'KATHMANDU', '加德满都', 0, 1, 'NP', 0, 0, 'HXRC'),
('NLAIK', 'AIKMAAR', '阿尔克马', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLAMS', 'AMSTERDAM', '阿姆斯特丹', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLARN', 'ARNHEM', '阿纳姆', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLBRO', 'BROUWERSHAVEN', '布劳沃斯港', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLDEL', 'DELFZIJL', '德尔夫寄尔', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLDOR', 'DORDRECHT', '多德雷赫特', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLGRO', 'GRONINGEN', '格罗宁根', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLHAR', 'HARLINGEN', '哈灵根', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLHOH', 'HOOK OF HOLLAND', '荷兰角', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLMAS', 'MAASSLUIS', '马斯莱斯', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLMID', 'MIDDELBURG', '米德尔堡', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLROT', 'ROTTERDAM', '鹿特丹', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLSCH', 'SCHEVENINGEN', '斯海弗宁恩', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLSCM', 'SCHIEDAM', '斯希丹', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLSLU', 'SLUISKIL', '斯勒伊斯基尔', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLTER', 'TERNEUZEN', '泰尔讷曾', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLZAA', 'ZAANDAM', '赞丹', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLZIE', 'ZIERIKZEE', '济里克泽', 0, 1, 'NL', 0, 0, 'HXRC'),
('NEALK', 'ALKMAAR', '阿尔克岛', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLDOT', 'DORDRECHT', '多德雷赫德', 0, 1, 'NL', 0, 0, 'HXRC'),
('NLDEN', 'DEN HELDER', '赫尔德', 0, 1, 'NL', 0, 0, 'HXRC'),
('ANBAR', 'BARCADERA', '巴尔卡德拉', 0, 1, 'AN', 0, 0, 'HXRC'),
('ANKRA', 'KRALENDIJK', '克拉伦代克', 0, 1, 'AN', 0, 0, 'HXRC'),
('ANORA', 'ORANJESTAD', '奥拉涅斯塔德', 0, 1, 'AN', 0, 0, 'HXRC'),
('ANWIL', 'WILLEMSTAD(AN)', '威廉斯塔德', 0, 1, 'AN', 0, 0, 'HXRC'),
('NLWIL', 'WILLEMSTAD(NL)', '威廉斯塔德', 0, 1, 'AN', 0, 0, 'HXRC'),
('NCNOA', 'NOUMEA', '努美阿', 0, 1, 'NC', 0, 0, 'HXRC'),
('AK', 'AKAROA', '阿卡罗亚', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZLYT', 'LYTTELTON', '利特尔顿', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZMMI', 'MOUNT MAUNGANUI', '芒特芒阿努伊', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZNAP', 'NAPIER', '内皮尔', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZNEL', 'NELSON', '纳尔逊', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZNPL', 'NEW PLYMOUTH', '新普利茅斯', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZBLF', 'BLUFF', '布拉夫', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZDUN', 'DUNEDIN', '达尼丁', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZGIS', 'GISBORNE', '吉斯珀恩', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZGRE', 'GREYMOUTH', '格雷茅斯', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZOPU', 'OPUA', '奥普阿', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZPCH', 'PORT CHALMERS', '查马斯港', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZPIC', 'PICTON', '皮克顿', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZOAM', 'OAMARU', '奥马鲁', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZTAU', 'TAURANGA', '陶朗阿', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZTIM', 'TIMARU', '蒂马鲁', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZWEL', 'WELLINGTON', '惠灵顿', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZWHA', 'WHAHGAREI', '璜加雷', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NZCHR', 'CHRISTCHURCH', '克赖斯特撒奇', 0, 1, 'NZ', 0, 0, 'HXRC'),
('LAND', 'AUCKLAND', '奥克兰', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NCH', 'CHALMERS', '', 0, 1, 'NZ', 0, 0, 'HXRC'),
('MARSD', 'MARSDEN POINT', '', 0, 1, 'NZ', 0, 0, 'HXRC'),
('NICOR', 'CORINTO', '科林托', 0, 1, 'NI', 0, 0, 'HXRC'),
('NISJS', 'SAN JUAN DEL SUR', '南圣胡安', 0, 1, 'NI', 0, 0, 'HXRC'),
('NIMAN', 'MANAGUA', '马那瓜', 0, 1, 'NI', 0, 0, 'HXRC'),
('NGKOK', 'KOKO', '科科', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGLAG', 'LAGOS', '拉各斯', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGOKR', 'OKRIKA', '奥克里卡', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGPHA', 'PORT HARCOURT', '哈科特港', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGSAP', 'SAPELE', '萨佩莱', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGWAR', 'WARRI', '瓦里', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGAPA', 'APAPA', '阿帕帕', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGBON', 'BONNY', '邦尼', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGBUR', 'BURUTU', '布鲁图', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGCAL', 'CALABAR', '卡拉巴尔', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGESC', 'ESCRAVOS', '拉沃斯河', 0, 1, 'NG', 0, 0, 'HXRC'),
('NGBU', 'BURUTU', '布鲁图', 0, 1, 'NG', 0, 0, 'HXRC'),
('LA', 'LAGOS,NIGERIA', '拉各斯', 0, 1, 'NG', 0, 0, 'HXRC'),
('GREEN', 'GREENSBORO', '', 0, 1, 'NF', 0, 0, 'HXRC'),
('HAGE', 'HAGERSTOWN', '', 0, 1, 'NF', 0, 0, 'HXRC'),
('NOHOR', 'HORTEN', '霍腾', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOHOY', 'HOYANGER', '赫扬厄尔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOKLE', 'KLEVEN', '克来文', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOKOP', 'KOPERVIK', '科珀维克', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOKRA', 'KRAGERO', '克拉格勒', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOKRN', 'KRISTIANSUND N.', '克里斯蒂安松（北）', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOKRS', 'KRISTIANSAND S.', '克里斯蒂安桑（南）', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOKVI', 'KVINESDAL', '克维内斯达尔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOLAN', 'LANGESUND', '朗厄松', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOLIL', 'LILLESAND', '利勒桑', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOLOD', 'LODINGEN', '勒丁恩', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOLVK', 'LARVIK', '拉尔维克', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOMDL', 'MANDAL', '曼达尔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOMJN', 'MOSJOEN', '莫舍恩', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOMLM', 'MALM', '马尔姆', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOMOL', 'MOLDE', '莫尔德', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOMOR', 'MO I RANA', '摩城', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOMOS', 'MOSS', '莫斯', 0, 1, 'NO', 0, 0, 'HXRC'),
('NONAR', 'NARVIK', '纳尔维克', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOODD', 'ODDA', '奥达', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOPOR', 'PORSGRUNN', '波斯格伦', 0, 1, 'NO', 0, 0, 'HXRC'),
('NORIS', 'RISOR', '里瑟尔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOSAN', 'SANDEFGORD', '桑讷菲尤尔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOOSL', 'OSLO', '奥斯陆', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOSGN', 'SVELGEN', '斯韦尔根', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOSKI', 'SKIEN', '希恩', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOSKU', 'SKUDENESHAVN', '斯屈德内斯港', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOSAR', 'SARPSBORG', '萨尔普斯堡', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOSAU', 'SAUDA', '赛于达', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOSNS', 'SANDNES', '桑内斯', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOSTA', 'STAVANGER', '斯塔万格', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOSTE', 'STEINKJER', '斯泰恩谢尔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOSVK', 'SVELVIK', '斯瓦尔维克', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOTHA', 'THAMSHAMN', '塔姆港', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOTHM', 'TRONDHEIM', '特隆赫姆', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOTON', 'TONSBERG', '滕斯贝格', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOTOU', 'TOU', '都港', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOTRO', 'TROMSO', '特罗姆瑟', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOTVE', 'TVEDESTRAND', '特维德斯特兰德', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOVAD', 'VADSO', '瓦德瑟', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOVAR', 'VARDO', '沃尔德', 0, 1, 'NO', 0, 0, 'HXRC'),
('NRNRI', 'NAURU ISLAND', '瑙鲁岛', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOAAL', 'AALESUND', '奥勒松', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOARE', 'ARENDAL', '阿伦达尔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOBGN', 'BERGEN', '卑尔根', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOBRE', 'BREVIK', '布雷维克', 0, 1, 'NO', 0, 0, 'HXRC'),
('NODRA', 'DRAMMEN', '德拉门', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOEGE', 'EGERSUND', '艾格松', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOEIT', 'EITRHEIM', '艾特尔海姆', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOFAR', 'FARSUND', '法尔松德', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOFLE', 'FLEKKEFJORD', '弗莱克菲尤尔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOFRE', 'FREDRIKSTAD', '腓特烈斯塔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOHAL', 'HALDEN', '哈尔登', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOHAM', 'HAMMERFEST', '哈默菲斯特', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOHAR', 'HARSTAD', '哈尔斯塔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOGRI', 'Grimstad', '格里姆斯塔', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOHAU', 'HAUGESUND', '海尔格松', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOHOL', 'HOLMESTRAND', '霍尔默斯特兰', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOAL', 'ALESUND', '奥勒松', 0, 1, 'NO', 0, 0, 'HXRC'),
('NOAR', 'ARDALSTANGEN', '阿尔达尔斯坦根', 0, 1, 'NO', 0, 0, 'HXRC'),
('OMMAF', 'MINA AL FAHAL', '法赫尔港', 0, 1, 'OM', 0, 0, 'HXRC'),
('OMMQS', 'MUSCAT', '米纳卡布斯', 0, 1, 'OM', 0, 0, 'HXRC'),
('OMMUT', 'MUTTRAH', '马特拉', 0, 1, 'OM', 0, 0, 'HXRC'),
('OMSUL', 'P.S.QABOOS', '卡布斯港', 0, 1, 'OM', 0, 0, 'HXRC'),
('AA', 'SULTAN QABOOS', '卡布斯港', 0, 1, 'OM', 0, 0, 'HXRC'),
('SHA', 'SHALALA', '', 0, 1, 'OM', 0, 0, 'HXRC'),
('PKKAR', 'KARACHI', '卡拉奇', 0, 1, 'PK', 0, 0, 'HXRC'),
('PAPAC', 'PANAMA CITY', '巴拿马城', 0, 1, 'PA', 0, 0, 'HXRC'),
('PAAGD', 'AGUA DULCE', '阿瓜杜尔塞', 0, 1, 'PA', 0, 0, 'HXRC'),
('PABAL', 'BALBOA', '巴尔博亚', 0, 1, 'PA', 0, 0, 'HXRC'),
('PACOL', 'COLON', '科隆', 0, 1, 'PA', 0, 0, 'HXRC'),
('PACRI', 'CRISTOBAL', '克里斯托瓦尔', 0, 1, 'PA', 0, 0, 'HXRC'),
('PAPAN', 'PANAMA', '帕纳马', 0, 1, 'PA', 0, 0, 'HXRC'),
('PACOF', 'COLON FREE ZONE', '科隆', 0, 1, 'PA', 0, 0, 'HXRC'),
('PAMAN', 'MANZANILLO(PANAMA)', '曼萨尼罗', 0, 1, 'PA', 0, 0, 'HXRC'),
('PGLAE', 'LAE', '莱城', 0, 1, 'PG', 0, 0, 'HXRC'),
('PGPMO', 'PORT MORESBY', '莫尔兹比港', 0, 1, 'PG', 0, 0, 'HXRC'),
('PGRAB', 'RABAUL', '腊包尔', 0, 1, 'PG', 0, 0, 'HXRC'),
('PGWEK', 'WEWAK', '威瓦克', 0, 1, 'PG', 0, 0, 'HXRC'),
('PYASU', 'ASUNCION', '亚松森', 0, 1, 'PY', 0, 0, 'HXRC'),
('PAENC', 'ENCARNACION', '', 0, 1, 'PY', 0, 0, 'HXRC'),
('PECAL', 'CALLAO', '卡亚俄', 0, 1, 'PE', 0, 0, 'HXRC'),
('PECAZ', 'CERRO AZUL', '塞罗阿苏尔', 0, 1, 'PE', 0, 0, 'HXRC'),
('PECHA', 'CHANCAY', '钱凯', 0, 1, 'PE', 0, 0, 'HXRC'),
('PECHI', 'CHIMBOTE', '钦博塔', 0, 1, 'PE', 0, 0, 'HXRC'),
('PEETN', 'ETEN', '埃腾', 0, 1, 'PE', 0, 0, 'HXRC'),
('PEILO', 'ILO', '伊洛', 0, 1, 'PE', 0, 0, 'HXRC'),
('PEMAT', 'MATARANI', '马塔拉尼', 0, 1, 'PE', 0, 0, 'HXRC'),
('PEPAC', 'PACASMAYO', '帕卡斯马约', 0, 1, 'PE', 0, 0, 'HXRC'),
('PEPCO', 'PISCO', '皮斯科', 0, 1, 'PE', 0, 0, 'HXRC'),
('PEPTA', 'PAITA', '派塔', 0, 1, 'PE', 0, 0, 'HXRC'),
('PESAL', 'SALAVERRY', '萨拉韦里', 0, 1, 'PE', 0, 0, 'HXRC'),
('PESJU', 'SAN JUAN(PE)', '圣胡安', 0, 1, 'PE', 0, 0, 'HXRC'),
('PEPIM', 'PIMENTEL', '皮门特尔', 0, 1, 'PE', 0, 0, 'HXRC'),
('PESNI', 'SAN NICOLAS(PE)', '圣尼古拉斯', 0, 1, 'PE', 0, 0, 'HXRC'),
('PETAL', 'TALARA', '塔拉拉', 0, 1, 'PE', 0, 0, 'HXRC'),
('PELMA', 'LIMA', '利马', 0, 1, 'PE', 0, 0, 'HXRC'),
('ARSFO', 'SAN FERNANDO', '圣弗尔南多', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHPSM', 'PORT SANTA MARI', '圣玛丽亚港', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHSBC', 'SUBIC', '苏比克', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHSCA', 'SAN CARLOS(PH)', '圣卡洛斯', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHSCR', 'SANTA CRUZ(LUZO', '圣克鲁斯', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHSFE', 'SAN FERNANDO(PH', '圣弗尔南多', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHTAB', 'TABACO', '塔瓦科', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHTAC', 'TACLOBAN', '塔克洛班', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHTDC', 'TANDOC', '坦多哥', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHZAM', 'ZAMBOANGA', '三宝颜', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHANT', 'ANTIMONAN', '安蒂莫纳', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHAPA', 'APARRI', '阿帕里', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHBAC', 'BACOLOD', '巴科洛德', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHBAT', 'BATANGAS', '八打雁', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHBTN', 'BATAAN', '巴丹', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHCAP', 'CAPIZ', '卡皮斯', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHCDZ', 'CADIZ(PH)', '加的斯', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHCEB', 'CEBU', '宿务', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHCOT', 'COTABATO', '哥把巴托', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHCDO', 'CAGAYAN DE ORO', '卡加延德奥罗', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHDAV', 'DAVAO', '达沃', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHDGB', 'DINGALAN BAY', '丁阿兰湾', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHDGT', 'DINAGAT', '迪纳加特', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHDIP', 'DIPOLOG', '第波罗', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHDUM', 'DUMAGUETE', '杜马格特', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHGUI', 'GUIMARAS ISLAND', '吉马拉斯岛', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHILA', 'ISABELA(PH)', '伊萨贝拉', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHILI', 'ILIGAN', '伊利甘', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHILO', 'ILOILO', '恰朗', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHJOL', 'JOLO', '霍洛', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHJPA', 'JOSE PANGANIBAN', '何塞庞阿尼班村', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHLEG', 'LEGASPI', '黎牙实比', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHLUN', 'LA UNION(PH)', '拉乌尼翁', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHMAN', 'MANILA', '马尼拉', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHMNH', 'MANILA NORTH HA', '马尼拉北港', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHPPR', 'PUERTO PRINCESA', '普林塞萨港', 0, 1, 'PH', 0, 0, 'HXRC'),
('PHAN', 'ANAKAN', '阿纳根', 0, 1, 'PH', 0, 0, 'HXRC'),
('MASO', 'MANILA SOUTH HARBOUR', '马尼拉(南港)', 0, 1, 'PH', 0, 0, 'HXRC'),
('PLGDA', 'GDANSK', '格但斯克', 0, 1, 'PL', 0, 0, 'HXRC'),
('PLGDY', 'GDYNIA', '格丁尼亚', 0, 1, 'PL', 0, 0, 'HXRC'),
('PLHEL', 'HEL', '海尔', 0, 1, 'PL', 0, 0, 'HXRC'),
('PLDAR', 'DARLOWO', '达尔沃沃', 0, 1, 'PL', 0, 0, 'HXRC'),
('PLKOL', 'KOLOBRZEG', '科沃布热格', 0, 1, 'PL', 0, 0, 'HXRC'),
('PLSWI', 'SWINOUJSCIE', '希维诺乌伊希切', 0, 1, 'PL', 0, 0, 'HXRC'),
('PLSZC', 'SZCZECIN', '什切青', 0, 1, 'PL', 0, 0, 'HXRC'),
('POPOZ', 'POZNAN', '波兹南', 0, 1, 'PL', 0, 0, 'HXRC'),
('POKRA', 'KRAKOW', '克拉科夫', 0, 1, 'PL', 0, 0, 'HXRC'),
('POWAR', 'WARSZAWA', '华沙', 0, 1, 'PL', 0, 0, 'HXRC'),
('POWRO', 'WROCLAW', '弗罗兹瓦夫', 0, 1, 'PL', 0, 0, 'HXRC'),
('POKAT', 'KATOWICE', '', 0, 1, 'PL', 0, 0, 'HXRC'),
('POGLI', 'POLAND', '波兰', 0, 1, 'PL', 0, 0, 'HXRC'),
('POGCE', 'GLIWICE', '', 0, 1, 'PL', 0, 0, 'HXRC'),
('POLOD', 'LODZ', '', 0, 1, 'PL', 0, 0, 'HXRC'),
('POPRU', 'PRUSZKOW', '', 0, 1, 'PL', 0, 0, 'HXRC'),
('CRA', 'CRACOW', '', 0, 1, 'PL', 0, 0, 'HXRC'),
('PTBEL', 'BELEM(PT)', '贝伦', 0, 1, 'PT', 0, 0, 'HXRC'),
('PTFAR', 'FARO', '法鲁', 0, 1, 'PT', 0, 0, 'HXRC'),
('PTFIG', 'FIGUEIRA DO FAZ', '菲盖拉达福实', 0, 1, 'PT', 0, 0, 'HXRC'),
('PTLIS', 'LISBON', '里斯本', 0, 1, 'PT', 0, 0, 'HXRC'),
('PTLXS', 'LEIXOES', '雷克索斯', 0, 1, 'PT', 0, 0, 'HXRC'),
('PTAVE', 'AVEIRO', '阿威罗', 0, 1, 'PT', 0, 0, 'HXRC'),
('PTBAR', 'BARREIRO', '巴雷鲁', 0, 1, 'PT', 0, 0, 'HXRC'),
('PTOLH', 'OLHAO', '奥良', 0, 1, 'PT', 0, 0, 'HXRC'),
('PTOPO', 'OPORTO', '波尔图', 0, 1, 'PT', 0, 0, 'HXRC'),
('PTPOR', 'PORTIMAO', '波尔蒂芒', 0, 1, 'PT', 0, 0, 'HXRC'),
('PTSBL', 'SETUBAL', '塞图巴尔', 0, 1, 'PT', 0, 0, 'HXRC'),
('POLEX', 'LEXOIES', '雷克索斯', 0, 1, 'PT', 0, 0, 'HXRC'),
('POPOR', 'PORTO', '波尔图', 0, 1, 'PT', 0, 0, 'HXRC'),
('POPRT', 'PORTO PORTUGUESE', '', 0, 1, 'PT', 0, 0, 'HXRC'),
('PRAGU', 'AGUADILLA', '阿瓜迪亚', 0, 1, 'PR', 0, 0, 'HXRC'),
('PRARE', 'ARECIBO', '阿雷西沃', 0, 1, 'PR', 0, 0, 'HXRC'),
('PRFAJ', 'FAJARDO', '法哈多', 0, 1, 'PR', 0, 0, 'HXRC'),
('PRGCA', 'GUANICA', '瓜尼卡', 0, 1, 'PR', 0, 0, 'HXRC'),
('PRGMA', 'GUAYAMA', '瓜亚马', 0, 1, 'PR', 0, 0, 'HXRC'),
('PRGUA', 'GUAYANILLA', '瓜亚尼亚', 0, 1, 'PR', 0, 0, 'HXRC'),
('PRMAY', 'MAYAGUEZ', '马亚圭斯', 0, 1, 'PR', 0, 0, 'HXRC'),
('PRPON', 'PONCE', '蓬塞', 0, 1, 'PR', 0, 0, 'HXRC'),
('DOBCA', 'BOCA CHICA', '博卡奇卡', 0, 1, 'PR', 0, 0, 'HXRC'),
('QADOH', 'DOHA', '多哈', 0, 1, 'QA', 0, 0, 'HXRC'),
('QAUMS', 'UMM SAID', '乌姆赛义德', 0, 1, 'QA', 0, 0, 'HXRC'),
('QAMES', 'MESAIEED', '', 0, 1, 'QA', 0, 0, 'HXRC'),
('KRBUS', 'BUSAN', '釜山', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRCHG', 'CHANGHANG', '长项', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRCHI', 'CHINHAE', '镇海', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRCJU', 'CHEJU', '济州', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRINC', 'INCHON', '仁川', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRKUN', 'KUNSAN', '群山', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRMAS', 'MASAN', '马山', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRMHO', 'MUKHO', '墨湖', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRMOK', 'MOKPO', '木浦', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRPOH', 'POHANG', '浦项', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRYOS', 'YOSU', '丽水', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRSAM', 'SAMCHOK', '三陟', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRULS', 'ULSAN', '蔚山', 0, 1, 'KR', 0, 0, 'HXRC'),
('KOBU', 'BUSAN,KOREA', '釜山', 0, 1, 'KR', 0, 0, 'HXRC'),
('KRPUS', 'PUSAN', '釜山', 0, 1, 'KR', 0, 0, 'HXRC'),
('PYI', 'PYING TAEK', '', 0, 1, 'KR', 0, 0, 'HXRC'),
('REPDG', 'POINTE DES GALE', '加勒茨角', 0, 1, 'RE', 0, 0, 'HXRC'),
('RESDE', 'ST. DENIS', '圣但尼', 0, 1, 'RE', 0, 0, 'HXRC'),
('RESLO', 'ST. LOUIS(RE)', '圣路易斯', 0, 1, 'RE', 0, 0, 'HXRC'),
('REREU', 'PORT REUNION', '溜尼汪港', 0, 1, 'RE', 0, 0, 'HXRC'),
('ROBLA', 'BRAILA', '布勒伊拉', 0, 1, 'RO', 0, 0, 'HXRC'),
('ROCON', 'CONSTANZA', '康斯坦萨', 0, 1, 'RO', 0, 0, 'HXRC'),
('ROGLZ', 'GALATZ', '加拉茨', 0, 1, 'RO', 0, 0, 'HXRC'),
('ROSUL', 'SULINA', '苏利纳', 0, 1, 'RO', 0, 0, 'HXRC'),
('ROBUC', 'BUCHAREST', '布加勒斯特', 0, 1, 'RO', 0, 0, 'HXRC'),
('CT', 'CONSTANTCIA', '康斯坦察', 0, 1, 'RO', 0, 0, 'HXRC'),
('BUCUR', 'BUCURESTI', '', 0, 1, 'RO', 0, 0, 'HXRC'),
('UAERD', 'BERDIANSK', '别尔迪扬斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUALE', 'ALEXANDROVSK', '亚历山大罗夫斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUARH', 'ARCHANGEL', '阿尔汉格尔', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUDKA', 'DEKASTRY', '德卡斯特莱', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUKER', 'KERET', '克烈季', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUKGD', 'KALININGRAD', '加里宁格勒', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUKHO', 'Kholmsk', '霍尔姆斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUKOR', 'KORSAKOV', '科尔萨科夫', 0, 1, 'RU', 0, 0, 'HXRC'),
('RULAZ', 'LAZAREV', '拉扎烈夫', 0, 1, 'RU', 0, 0, 'HXRC'),
('RULED', 'ST.PETERSBURG', '圣彼得堡', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUMAG', 'MAGADAN', '马加丹', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUMAK', 'MAKAROV', '马卡洛夫', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUMEZ', 'MESANE', '美晋', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUMGO', 'MAGO', '马戈', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUMMK', 'MURMANSK', '摩尔曼斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUNEV', 'NEVELSK', '涅韦尔斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUNJK', 'NAKHODKA', '纳雷德卡', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUNNM', 'NARYAN MAR', '纳里扬马尔', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUNOG', 'NOGLIKI', '诺格利基', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUNVS', 'NOVOROSSISK', '新罗西斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUOHA', 'OKHA', '奥哈', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUOHO', 'OKHOTSK', '鄂霍次克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUOKT', 'OKTIAABRSKIJ', '十月市', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUONG', 'ONEGA', '奥涅加', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUPAR', 'PARNU', '派尔努', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUPRI', 'PRIMORSK', '普里莫尔斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUPRN', 'PORONAISK', '波罗奈斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUPTK', 'PETROPAVLOVSK', '彼得罗巴浦洛夫斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUROV', 'Rostov', '罗斯托夫', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUSHA', 'SHAKHTERSK', '沙赫乔特斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUSOC', 'SOCHI', '索契', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUSOG', 'SOVETSKAYA GAVA', '苏维埃港', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUSVE', 'SVETLAYA RIVER', '斯伟特拉亚河', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUTAG', 'TAGANROG', '塔甘罗格', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUTUA', 'TUAPSE', '图阿普谢', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUUGL', 'UGLEGORSK', '乌格里哥斯克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUUMB', 'UMBA', '翁巴', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUVNN', 'VANINO', '瓦尼诺', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUVOS', 'VOSTOCHNY', '东方港', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUVVO', 'VLADIVOSTOK', '海参威', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUVYG', 'VYBORG', '维堡', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUVYS', 'VYSOTSK', '维索茨克', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUZHD', 'ZHDANOV', '日丹诺夫', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUZRB', 'ZARUBINO', '扎鲁比诺', 0, 1, 'RU', 0, 0, 'HXRC'),
('UAKHE', 'KHERSON', '赫尔松', 0, 1, 'RU', 0, 0, 'HXRC'),
('UAODS', 'ODESSA', '敖德萨', 0, 1, 'RU', 0, 0, 'HXRC'),
('UARNI', 'RENI', '烈尼', 0, 1, 'RU', 0, 0, 'HXRC'),
('UAYAL', 'YALTA', '雅尔塔', 0, 1, 'RU', 0, 0, 'HXRC'),
('GESUI', 'SUKHUM', '苏呼米', 0, 1, 'RU', 0, 0, 'HXRC'),
('EENAJ', 'NARVA JOESUU', '纳尔瓦约埃苏', 0, 1, 'RU', 0, 0, 'HXRC'),
('EETLL', 'TALLINN', '塔林', 0, 1, 'RU', 0, 0, 'HXRC'),
('RUMOS', 'MOSCOW', '莫斯科', 0, 1, 'RU', 0, 0, 'HXRC'),
('EKA', 'EKATERINBURG', '', 0, 1, 'RU', 0, 0, 'HXRC'),
('KRA', 'KRASNOYARSK', '', 0, 1, 'RU', 0, 0, 'HXRC'),
('NOVO', 'NOVOSIBIRSK', '', 0, 1, 'RU', 0, 0, 'HXRC'),
('KHA', 'KHABAROYSK', '', 0, 1, 'RU', 0, 0, 'HXRC'),
('OMSK', 'OMSK', '', 0, 1, 'RU', 0, 0, 'HXRC'),
('PERM', 'PERM', '彼尔姆', 0, 1, 'RU', 0, 0, 'HXRC'),
('CHS', 'CHELYABINSK', '', 0, 1, 'RU', 0, 0, 'HXRC'),
('SADAM', 'DAMMAM', '达曼', 0, 1, 'SA', 0, 0, 'HXRC'),
('SAGIZ', 'GIZAN', '季赞', 0, 1, 'SA', 0, 0, 'HXRC'),
('SAJED', 'JEDDAH', '吉达', 0, 1, 'SA', 0, 0, 'HXRC'),
('SAJUB', 'JUBAIL', '朱拜勒', 0, 1, 'SA', 0, 0, 'HXRC'),
('SARTA', 'RAS TANURA', '拉斯坦努拉', 0, 1, 'SA', 0, 0, 'HXRC'),
('SAYBO', 'YENBO', '延布', 0, 1, 'SA', 0, 0, 'HXRC'),
('SARIY', 'RIYADH', '利雅得', 0, 1, 'SA', 0, 0, 'HXRC'),
('SNDAK', 'DAKAR', '达喀尔', 0, 1, 'SN', 0, 0, 'HXRC'),
('SNKAO', 'KAOLACK', '考拉克', 0, 1, 'SN', 0, 0, 'HXRC'),
('SNZIG', 'ZIGHINKOR', '济金绍尔', 0, 1, 'SN', 0, 0, 'HXRC'),
('SCPVI', 'PORT VICTORIA(S', '维多利亚港', 0, 1, 'SC', 0, 0, 'HXRC'),
('SLFRE', 'FREETOWN', '弗里敦', 0, 1, 'SL', 0, 0, 'HXRC'),
('SLPPL', 'PEPLE', '佩佩尔', 0, 1, 'SL', 0, 0, 'HXRC'),
('SLSHI', 'SHERBRO ISLAND', '歇尔布罗岛', 0, 1, 'SL', 0, 0, 'HXRC'),
('SGJUR', 'JURONG', '裕廊', 0, 1, 'SG', 0, 0, 'HXRC'),
('SGPBU', 'PULAU BUKOM', '普劳布科姆', 0, 1, 'SG', 0, 0, 'HXRC'),
('SGSEM', 'SEMBAWANG', '森巴旺', 0, 1, 'SG', 0, 0, 'HXRC'),
('SGSGP', 'SINGAPORE', '新加坡', 0, 1, 'SG', 0, 0, 'HXRC'),
('DKNBG', 'NYKOBING(SJA.)', '尼克宾', 0, 1, 'SG', 0, 0, 'HXRC'),
('SLOVE', 'KOPER', '科佩尔', 0, 1, 'SI', 0, 0, 'HXRC'),
('SLBRA', 'BRATISLAVA', '', 0, 1, 'SI', 0, 0, 'HXRC'),
('LLU', 'LLUBLJANA', '', 0, 1, 'SI', 0, 0, 'HXRC'),
('PGKTA', 'KIETA', '基埃塔', 0, 1, 'SB', 0, 0, 'HXRC'),
('SBGIZ', 'GIZO', '吉佐', 0, 1, 'SB', 0, 0, 'HXRC'),
('SBHON', 'HONIARA', '霍尼亚拉', 0, 1, 'SB', 0, 0, 'HXRC'),
('SBYAN', 'YANDINA', '扬迪纳', 0, 1, 'SB', 0, 0, 'HXRC'),
('SOBER', 'BERBERA', '柏培拉', 0, 1, 'SO', 0, 0, 'HXRC'),
('SOBOS', 'BOSASO', '博萨索', 0, 1, 'SO', 0, 0, 'HXRC'),
('SOKIS', 'KISMAYU', '基斯马尤', 0, 1, 'SO', 0, 0, 'HXRC'),
('SOMER', 'MERCA', '马尔卡', 0, 1, 'SO', 0, 0, 'HXRC'),
('SOMOG', 'MOGADISCIO', '摩加迪沙', 0, 1, 'SO', 0, 0, 'HXRC'),
('ZADUR', 'DURBAN', '德班', 0, 1, 'ZA', 0, 0, 'HXRC'),
('ZAELN', 'EAST LONDON', '东伦敦', 0, 1, 'ZA', 0, 0, 'HXRC'),
('ZAMOB', 'MOSSEL BAY', '莫塞尔贝', 0, 1, 'ZA', 0, 0, 'HXRC'),
('ZAPEL', 'PORT ELIZABETH', '伊丽莎白港', 0, 1, 'ZA', 0, 0, 'HXRC'),
('SOJOH', 'JOHANNESBURG', '约翰内斯堡', 0, 1, 'ZA', 0, 0, 'HXRC'),
('SOHAR', 'HARARE', '哈拉雷', 0, 1, 'ZA', 0, 0, 'HXRC'),
('COCAP', 'CAPE TOWN', '开普顿', 0, 1, 'ZA', 0, 0, 'HXRC'),
('MAS', 'MASCON', '', 0, 1, 'ZA', 0, 0, 'HXRC'),
('ESSAG', 'SAGUNTO', '萨贡托', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESSAN', 'SANTANDER', '桑坦德', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESSEV', 'SEVILLE', '塞维利亚', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESSFE', 'SAN FERNANDO(ES', '圣费尔南多', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESSFG', 'SAN FELIU DE GU', '圣费里乌德古绍尔斯', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESTAR', 'TARRAGONA', '塔拉戈纳', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESVIG', 'VIGO', '维哥', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESVIL', 'VILLAGARCIA', '维利亚加西', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESVIV', 'VIVERO', '比韦罗', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESVAL', 'VALENCIA', '巴伦西亚', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESCUL', 'CULLERA', '库列拉', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESADR', 'ADRA', '阿德拉', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESAGU', 'AGUILAS', '阿吉拉斯', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESALC', 'ALCUDIA', '阿尔库迪亚', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESALG', 'ALGECIRAS', '阿尔赫西拉斯', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESALI', 'ALICANTE', '阿利坎特', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESALM', 'ALMERIA', '阿尔梅里亚', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESAVI', 'AVILES', '阿维莱斯', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESBAE', 'BARBATE', '巴尔瓦特', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESBAR', 'BARCELONA', '巴塞罗那', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESBIL', 'BILBAO', '毕尔巴鄂', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESBNS', 'BLANES', '布拉内斯', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESBUR', 'BURRIANA', '布里亚纳', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESCAD', 'CADIZ(ES)', '加的斯', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESCAR', 'CARTAGENA(ES)', '卡塔赫纳', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESCAS', 'CASTELLON', '卡斯特利翁', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESCBN', 'CORCUBION', '科尔库维翁', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESCOR', 'CORUNNA', '科伦纳', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESCUR', 'CASTRO URDIALES', '乌迪亚莱斯堡', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESDEN', 'DENIA', '德尼亚', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESLUA', 'LUARCA', '卢阿尔卡', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESMAH', 'MAHON', '马翁', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESHUE', 'HUELVA', '韦尔瓦', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESIBI', 'IBIZA', '伊维萨', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESJAV', 'JAVEA', '哈韦阿', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESGAN', 'GANDIA', '刚迪亚', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESGAR', 'GARRUCHA', '加鲁查', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESGIJ', 'GIJON', '希洪', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESESH', 'ESCOMBRERAS HAR', '埃斯孔布雷阿斯', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESMAL', 'MALAGA', '马拉加', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESMAR', 'MARIN', '马林', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESMAZ', 'MAZARRON', '马萨龙', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESMOT', 'MOTRIL', '莫特里尔', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESMUR', 'MUROS', '穆罗斯', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESPAL', 'PALMA', '帕尔马', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESPAS', 'PASAJES', '帕萨赫斯', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESPOR', 'PORTUGALETE', '波图加莱特', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESROS', 'ROSAS', '罗萨斯', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESRDO', 'RIBADEO', '里瓦德奥', 0, 1, 'ES', 0, 0, 'HXRC'),
('ESRIB', 'RIBADESELLA', '里瓦德塞利亚', 0, 1, 'ES', 0, 0, 'HXRC'),
('SPMAD', 'MADRID', '马德里', 0, 1, 'ES', 0, 0, 'HXRC'),
('SPSAB', 'SABADELL', '', 0, 1, 'ES', 0, 0, 'HXRC'),
('4555', 'SEVILLA', '塞维利亚', 0, 1, 'ES', 0, 0, 'HXRC'),
('LKCOL', 'COLOMBO', '科伦坡', 0, 1, 'LK', 0, 0, 'HXRC'),
('LKGAL', 'GALLE', '加勒', 0, 1, 'LK', 0, 0, 'HXRC'),
('LKJAF', 'JAFFNA', '贾夫纳', 0, 1, 'LK', 0, 0, 'HXRC'),
('LKBAT', 'BATTICALOA', '拜蒂克洛', 0, 1, 'LK', 0, 0, 'HXRC'),
('LKMAT', 'MATARA', '马特勒', 0, 1, 'LK', 0, 0, 'HXRC'),
('LKNEG', 'NEGOMBO', '尼甘布', 0, 1, 'LK', 0, 0, 'HXRC'),
('LKTRI', 'TRINCOMALEE', '亭可马里', 0, 1, 'LK', 0, 0, 'HXRC'),
('LKKAL', 'KALUTARA', '卡卢特勒', 0, 1, 'LK', 0, 0, 'HXRC'),
('LKKAN', 'KANKESANTURAI', '坎凯桑图赖', 0, 1, 'LK', 0, 0, 'HXRC'),
('SDPSU', 'PORT SUDAN', '苏丹港', 0, 1, 'SD', 0, 0, 'HXRC'),
('SDSUA', 'SUAKIN', '萨瓦金', 0, 1, 'SD', 0, 0, 'HXRC'),
('SEHEL', 'HELSINGBORG', '赫尔辛堡', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEHOG', 'HOGANAS', '赫加奈斯', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEHOR', 'HORNEFORS', '霍讷福什', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEHSD', 'HALMSTAD', '哈尔姆斯塔德', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEHSM', 'HUSUM(SE)', '胡苏姆', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEJON', 'JONKOPING', '延雪平', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEKAA', 'KARLSKRONA', '卡尔斯克鲁纳', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEKAD', 'KARLSTAD', '卡尔斯塔德', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEKAL', 'KALMAR', '卡尔马', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEKLI', 'KLINTEHAMN', '克林特港', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEKLX', 'KALIX', '卡利克斯', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEKOP', 'KOPING', '雪平', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEKRI', 'KRISTINEHAMN', '克里斯蒂娜港', 0, 1, 'SE', 0, 0, 'HXRC'),
('SELAN', 'LANDSKRONA', '兰斯克鲁纳', 0, 1, 'SE', 0, 0, 'HXRC'),
('SELID', 'LIDKOPING', '利德雪平', 0, 1, 'SE', 0, 0, 'HXRC'),
('SELIM', 'LIMHAMN', '利姆港', 0, 1, 'SE', 0, 0, 'HXRC'),
('SELJU', 'LJUSNE', '于斯讷', 0, 1, 'SE', 0, 0, 'HXRC'),
('SELOM', 'LOMMA', '卢马', 0, 1, 'SE', 0, 0, 'HXRC'),
('SELUL', 'LULEA', '吕勒奥', 0, 1, 'SE', 0, 0, 'HXRC'),
('SELYS', 'LYSEKIL', '吕瑟希尔', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEMAL', 'MALMO', '马尔默', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEMAR', 'MARSTRAND', '马斯特兰德', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEMOT', 'MOTALA', '穆塔拉', 0, 1, 'SE', 0, 0, 'HXRC'),
('SENOR', 'NORRKOPING', '诺尔雪平', 0, 1, 'SE', 0, 0, 'HXRC'),
('SENRT', 'NORRSUNDET', '诺尔松德', 0, 1, 'SE', 0, 0, 'HXRC'),
('SENYK', 'NYKOPING(SE)', '尼雪平', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEORN', 'ORNSKOLDSVIK', '恩舍尔兹维克', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEOTT', 'OTTERBACKEN', '乌特拜肯', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEOXE', 'OXELOSUND', '乌克瑟勒松德', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEPIT', 'PITEA', '皮特奥', 0, 1, 'SE', 0, 0, 'HXRC'),
('SERBN', 'RONNEBYHAMN', '尤讷比港', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESIM', 'SIMRISHAMN', '锡姆里斯港', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESJE', 'SODERTELJE', '南泰利耶', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESKA', 'SKELLEFTEA', '谢莱夫特奥', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESKO', 'SKOGHALL', '斯库格哈尔', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESKU', 'SKUTSKAR', '斯屈特谢尔', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESLI', 'SLITE', '斯利特', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESOD', 'SODERHAMN', '瑟德港', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESOG', 'SODERKOPING', '南雪平', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESOL', 'SOLVESBORG', '瑟尔沃斯堡', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESTD', 'STROMSTAD', '斯特伦斯塔德', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESTO', 'STOCKHOLM', '斯德哥尔摩', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESTR', 'STRANGNAS', '斯特兰奈斯', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESVL', 'SUNDSVALL', '松兹瓦尔', 0, 1, 'SE', 0, 0, 'HXRC'),
('SESVN', 'SANDVIKEN(SE)', '桑德维肯', 0, 1, 'SE', 0, 0, 'HXRC'),
('SETRE', 'TRELLEBORG', '特雷勒堡', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEUDD', 'UDDEVALLA', '乌德瓦拉', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEUME', 'UMEA', '于默奥', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEVAL', 'VALDEMARSVIK', '瓦尔德马什维克', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEVAR', 'VARBERG', '瓦尔贝里', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEAHS', 'AHUS', '奥胡斯', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEALA', 'ALA', '阿拉', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEARB', 'ARBOGA', '阿尔博加', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEBOR', 'BORGHOLM', '博里霍尔姆', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEENK', 'ENKOPING', '恩雪平', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEFAL', 'FALKENBERG', '法尔肯贝里', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEGEF', 'GEFLE', '耶夫勒', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEGOT', 'GOTHENBURG', '哥德堡', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEHAN', 'HARGSHAMN', '哈里港', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEHAP', 'HAPARANDA', '哈帕兰达', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEVIS', 'VISBY', '维斯比', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEWES', 'WESTERVIK', '韦斯特维克', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEWHN', 'WALLHAMN', '瓦尔港', 0, 1, 'SE', 0, 0, 'HXRC'),
('SEYST', 'YSTAD', '于斯塔德', 0, 1, 'SE', 0, 0, 'HXRC'),
('ALA', 'ALA', '阿拉', 0, 1, 'SE', 0, 0, 'HXRC'),
('SW', 'ARBOGA', '阿布罗斯', 0, 1, 'SE', 0, 0, 'HXRC'),
('SWEKE', 'EKENAS', '埃克纳斯', 0, 1, 'SE', 0, 0, 'HXRC'),
('GLL', 'GAVLE', '', 0, 1, 'SE', 0, 0, 'HXRC'),
('BER', 'BERNE', '', 0, 1, 'SW', 0, 0, 'HXRC'),
('SWZUR', 'ZURICH', '苏黎士', 0, 1, 'SW', 0, 0, 'HXRC'),
('SWBAS', 'BASLE', '巴塞尔', 0, 1, 'SW', 0, 0, 'HXRC'),
('GEN', 'GENEVA', '日内瓦', 0, 1, 'SW', 0, 0, 'HXRC'),
('SWLAU', 'LAUSANNE', '', 0, 1, 'SW', 0, 0, 'HXRC'),
('ST.G', 'ST.GALLEN', '', 0, 1, 'SW', 0, 0, 'HXRC'),
('CHIA', 'CHIASSO', '', 0, 1, 'SW', 0, 0, 'HXRC'),
('GBS', 'GRABS', '', 0, 1, 'SW', 0, 0, 'HXRC'),
('SYBAN', 'BANIYAS', '巴尼亚斯', 0, 1, 'SY', 0, 0, 'HXRC'),
('SYLAT', 'LATTAKIA', '拉塔基亚', 0, 1, 'SY', 0, 0, 'HXRC'),
('TWHLN', 'HUALIAN', '花莲', 0, 1, 'TW', 0, 0, 'HXRC'),
('TWJIL', 'JILONG', '基隆', 0, 1, 'TW', 0, 0, 'HXRC'),
('TWPHU', 'PENGHU', '澎湖', 0, 1, 'TW', 0, 0, 'HXRC'),
('TWGAO', 'GAOXONG', '高雄', 0, 1, 'TW', 0, 0, 'HXRC'),
('TWSUO', 'SUAO', '苏奥', 0, 1, 'TW', 0, 0, 'HXRC'),
('TWTNA', 'TAINAN', '台南', 0, 1, 'TW', 0, 0, 'HXRC'),
('TWTZH', 'TAIZHONG', '台中', 0, 1, 'TW', 0, 0, 'HXRC'),
('TWTAI', 'TAICHUNG', '台中', 0, 1, 'TW', 0, 0, 'HXRC'),
('TWKAO', 'KAOHSIUNG', '高雄', 0, 1, 'TW', 0, 0, 'HXRC'),
('TAIPE', 'TAIPEI', '台北', 0, 1, 'TW', 0, 0, 'HXRC'),
('TZDRS', 'DAR-ES-SALAAM', '达累斯萨拉姆', 0, 1, 'TZ', 0, 0, 'HXRC'),
('TZKKI', 'KILWA KIVINJE', '基卢瓦基温杰', 0, 1, 'TZ', 0, 0, 'HXRC'),
('TZKMA', 'KILWA MASOKO', '基卢瓦马索科', 0, 1, 'TZ', 0, 0, 'HXRC'),
('TZLDI', 'LINDI', '林迪', 0, 1, 'TZ', 0, 0, 'HXRC'),
('TZMTW', 'MTWARA', '姆特瓦拉', 0, 1, 'TZ', 0, 0, 'HXRC'),
('TZPAN', 'PANGANI', '潘加尼', 0, 1, 'TZ', 0, 0, 'HXRC'),
('TZTAN', 'TANGA', '坦噶', 0, 1, 'TZ', 0, 0, 'HXRC'),
('TZZAI', 'ZANZIBAR ISLAND', '桑给巴尔岛', 0, 1, 'TZ', 0, 0, 'HXRC'),
('THBKK', 'BANGKOK', '曼谷', 0, 1, 'TH', 0, 0, 'HXRC'),
('THLCB', 'LAEM CHABANG', '雷查班', 0, 1, 'TH', 0, 0, 'HXRC'),
('THPAT', 'PATTANI', '北大年', 0, 1, 'TH', 0, 0, 'HXRC'),
('THPHU', 'PHUKET', '普吉', 0, 1, 'TH', 0, 0, 'HXRC'),
('LKR', 'LAT KRABANG', '拉特卡拉帮', 0, 1, 'TH', 0, 0, 'HXRC'),
('12', 'BANKOK CY PORT', '', 0, 1, 'TH', 0, 0, 'HXRC'),
('SCT', 'SCT', '', 0, 1, 'TH', 0, 0, 'HXRC'),
('KLO', 'KLONG TOEY', '', 0, 1, 'TH', 0, 0, 'HXRC'),
('TGKPE', 'KPEME', '佩梅', 0, 1, 'TG', 0, 0, 'HXRC'),
('TGLOM', 'LOME', '洛美', 0, 1, 'TG', 0, 0, 'HXRC'),
('TONEI', 'NEIAFU', '内亚富', 0, 1, 'TO', 0, 0, 'HXRC'),
('TOKYO', 'NUKUALOFA', '努库阿洛法', 0, 1, 'TO', 0, 0, 'HXRC'),
('TOROA', 'ROADTOWN', '', 0, 1, 'TO', 0, 0, 'HXRC'),
('TTBRI', 'BRIGHTON(TT)', '布赖顿', 0, 1, 'TT', 0, 0, 'HXRC'),
('TTCHA', 'CHAGUARAMAS', '查瓜拉马斯', 0, 1, 'TT', 0, 0, 'HXRC'),
('TTGAP', 'GALEOTA POINT', '加莱奥塔角', 0, 1, 'TT', 0, 0, 'HXRC'),
('TTPAP', 'POINTE A PIERRE', '皮埃尔角城', 0, 1, 'TT', 0, 0, 'HXRC'),
('TTPFN', 'POINT FORTIN', '福廷角', 0, 1, 'TT', 0, 0, 'HXRC'),
('TTSCA', 'SCARBOROUGH(TT)', '斯卡伯勒', 0, 1, 'TT', 0, 0, 'HXRC'),
('TTSFE', 'SAN FERNANDO(TT', '圣费尔南多', 0, 1, 'TT', 0, 0, 'HXRC'),
('TTTEM', 'TEMBLADORA', '滕布拉多腊', 0, 1, 'TT', 0, 0, 'HXRC'),
('TTPLY', 'PLYMOUTH(TT)', '普利茅斯', 0, 1, 'TT', 0, 0, 'HXRC'),
('TTPOS', 'PORT OF SPAIN', '西班牙港', 0, 1, 'TT', 0, 0, 'HXRC'),
('TNGAB', 'GABES', '加贝斯', 0, 1, 'TN', 0, 0, 'HXRC'),
('TNLGO', 'LA GOULETTE', '拉古莱特', 0, 1, 'TN', 0, 0, 'HXRC'),
('TNLSK', 'LA SKHIRRA', '拉斯基拉', 0, 1, 'TN', 0, 0, 'HXRC'),
('TNBIZ', 'BIZERTA', '比塞大', 0, 1, 'TN', 0, 0, 'HXRC'),
('TNSFA', 'SFAX', '斯法克斯', 0, 1, 'TN', 0, 0, 'HXRC'),
('TNTNS', 'TUNIS', '突尼斯', 0, 1, 'TN', 0, 0, 'HXRC'),
('TRANT', 'ANTALYA', '安塔利亚', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRBAN', 'BANDIRMA', '班德尔马', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRDER', 'DERINCE', '代林杰', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRDIK', 'DIKILI', '迪基利', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRDIL', 'DILISKELESI', '帝力克里斯', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRERE', 'EREGLI', '埃雷利', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRFAT', 'FATSA', '法特萨', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRFET', 'FETHIYE', '费特希耶', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRFIN', 'FINIKE', '菲尼凯', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRGEM', 'GEMLIK', '盖姆利克', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRGIR', 'GIRESUN', '古雷松', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRGOR', 'GORELE', '格雷莱', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRHOP', 'HOPA', '霍帕', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRINE', 'INEBOLU', '伊内博卢', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRISK', 'ISKENDERUN', '伊斯肯德伦', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRHAY', 'HAYDARPASA', '海达尔帕夏', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRIST', 'TRIST', '伊斯坦布尔', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRIZM', 'IZMIR', '伊兹密尔', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRORD', 'ORDU', '奥尔杜', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRRIZ', 'RIZE', '里泽', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRSAM', 'SAMSUN', '萨姆松', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRMER', 'MERSIN', '梅尔辛', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRTRA', 'TRABZON', '特拉布宗', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRZON', 'ZONGULDAK', '宗古尔达克', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRALA', 'ALANYA', '阿拉尼亚', 0, 1, 'TR', 0, 0, 'HXRC'),
('TRAMA', 'AMASRA', '阿马斯腊', 0, 1, 'TR', 0, 0, 'HXRC'),
('TUGEB', 'GEBZE', '', 0, 1, 'TR', 0, 0, 'HXRC'),
('TUANK', 'ANKARA', '', 0, 1, 'TR', 0, 0, 'HXRC'),
('I', 'ISTANBUL', '', 0, 1, 'TR', 0, 0, 'HXRC'),
('AEAJM', 'AJMAN', '阿治曼', 0, 1, 'AE', 0, 0, 'HXRC'),
('AEDAS', 'DAS ISLAND', '达斯岛', 0, 1, 'AE', 0, 0, 'HXRC'),
('AEFUJ', 'FUJAIRAH', '富查伊拉', 0, 1, 'AE', 0, 0, 'HXRC'),
('AEJDA', 'JEBEL DHANNA', '杰贝尔丹那', 0, 1, 'AE', 0, 0, 'HXRC'),
('AEKFA', 'KHOR FAKKAN', '豪尔费坎', 0, 1, 'AE', 0, 0, 'HXRC'),
('AERAK', 'RAS AL KHAIMAH', '哈伊马角', 0, 1, 'AE', 0, 0, 'HXRC'),
('AESJH', 'SHARJAH', '舍尔杰', 0, 1, 'AE', 0, 0, 'HXRC'),
('AEUAQ', 'UMM AL QUWAIN', '乌姆盖万', 0, 1, 'AE', 0, 0, 'HXRC'),
('AEABD', 'ABU DHABI', '阿布扎比', 0, 1, 'AE', 0, 0, 'HXRC'),
('AEDUB', 'DUBAI,UAE', '迪拜', 0, 1, 'AE', 0, 0, 'HXRC'),
('UARAS', 'PORT RASHID DUBAI', '迪拜', 0, 1, 'AE', 0, 0, 'HXRC'),
('UBI', 'DUBAI', '迪拜', 0, 1, 'AE', 0, 0, 'HXRC'),
('UAILK', 'ILYICHEVSK', '伊利乔夫斯克', 0, 1, 'UA', 0, 0, 'HXRC'),
('UAUDK', 'UST-DUNAYSK', '乌斯特---多瑙伊斯克', 0, 1, 'UA', 0, 0, 'HXRC'),
('URKIE', 'KIEV', '基辅', 0, 1, 'UK', 0, 0, 'HXRC'),
('UKDON', 'DONCASTER', '', 0, 1, 'UK', 0, 0, 'HXRC'),
('UKLEY', 'LEYLAND', '', 0, 1, 'UK', 0, 0, 'HXRC'),
('UKLND', 'LEYLANO', '', 0, 1, 'UK', 0, 0, 'HXRC'),
('UKSOO', 'SOOTH SHIELDS', '', 0, 1, 'UK', 0, 0, 'HXRC'),
('UYNPA', 'NUEVA PALMIRA', '新帕尔米拉', 0, 1, 'UY', 0, 0, 'HXRC'),
('UYPAY', 'PAYSANDU', '派桑杜', 0, 1, 'UY', 0, 0, 'HXRC'),
('UYCOL', 'COLONIA', '科洛尼亚', 0, 1, 'UY', 0, 0, 'HXRC'),
('UYFBS', 'FRAY BENTOS', '弗赖本托斯', 0, 1, 'UY', 0, 0, 'HXRC'),
('UYMON', 'MONTYEVIDEO', '蒙得维的亚', 0, 1, 'UY', 0, 0, 'HXRC'),
('ARCON', 'CONCEPCION DEL UNRUGUAY', '孔塞普匈-德尔-乌拉圭', 0, 1, 'UY', 0, 0, 'HXRC'),
('MONT', 'MONTEVIDEO', '蒙特维的亚', 0, 1, 'UY', 0, 0, 'HXRC'),
('VEAMB', 'AMUAY BAY', '阿穆艾湾', 0, 1, 'VE', 0, 0, 'HXRC'),
('VEBJG', 'BAJO GRANDE', '巴霍格兰德', 0, 1, 'VE', 0, 0, 'HXRC'),
('VECIB', 'CIUDAD BOLIVAR', '玻利瓦尔城', 0, 1, 'VE', 0, 0, 'HXRC'),
('VECNO', 'CARUPANO', '卡鲁帕诺', 0, 1, 'VE', 0, 0, 'HXRC'),
('VECTO', 'CARIPITO', '卡里皮托', 0, 1, 'VE', 0, 0, 'HXRC'),
('VELGU', 'LA GUAIRA', '拉瓜伊拉', 0, 1, 'VE', 0, 0, 'HXRC'),
('VEPAL', 'PALUA', '帕卢亚', 0, 1, 'VE', 0, 0, 'HXRC'),
('VEPCA', 'PUERTO CABELLO', '卡贝略港', 0, 1, 'VE', 0, 0, 'HXRC'),
('VEPCN', 'PUNTA CARDON', '篷塔卡尔东', 0, 1, 'VE', 0, 0, 'HXRC'),
('VEPDH', 'PUERTO DE HIERR', '耶罗港', 0, 1, 'VE', 0, 0, 'HXRC'),
('VEPOR', 'PUERTO ORDAZ', '奥尔达斯港', 0, 1, 'VE', 0, 0, 'HXRC'),
('VESLO', 'SAN LORENZO(VE)', '圣洛伦索', 0, 1, 'VE', 0, 0, 'HXRC'),
('ANCSB', 'CARACAS BAY', '加拉加斯湾', 0, 1, 'VE', 0, 0, 'HXRC'),
('VECAR', 'CARACAS', '加拉加斯', 0, 1, 'VE', 0, 0, 'HXRC'),
('123', 'LA GUAIRA,VENEZUELA', '拉瓜伊拉', 0, 1, 'VE', 0, 0, 'HXRC'),
('VEISL', 'ISLA MAGARITA', '伊斯拉曼哥雷塔', 0, 1, 'VE', 0, 0, 'HXRC'),
('VECBO', 'PORT CABELLO', '卡贝略港', 0, 1, 'VE', 0, 0, 'HXRC'),
('VNDAN', 'DANANG', '岘港', 0, 1, 'VN', 0, 0, 'HXRC'),
('VNHGY', 'HONGAY', '鸿基', 0, 1, 'VN', 0, 0, 'HXRC'),
('VNHUE', 'HUE', '顺化', 0, 1, 'VN', 0, 0, 'HXRC'),
('VNKYN', 'KWANG YEN', '广义', 0, 1, 'VN', 0, 0, 'HXRC'),
('VNMYT', 'MY THO', '美富', 0, 1, 'VN', 0, 0, 'HXRC'),
('VNHPG', 'HAIPHONG', '海防', 0, 1, 'VN', 0, 0, 'HXRC'),
('VNQUN', 'QUI NHON', '归仁', 0, 1, 'VN', 0, 0, 'HXRC'),
('VNVIN', 'VINH', '荣市', 0, 1, 'VN', 0, 0, 'HXRC'),
('VNVUT', 'VUNG TAU', '头顿', 0, 1, 'VN', 0, 0, 'HXRC'),
('VNNTG', 'NHA TRANG', '芽庄', 0, 1, 'VN', 0, 0, 'HXRC'),
('VECA', 'CAMPHA', '锦普', 0, 1, 'VN', 0, 0, 'HXRC'),
('HOPO', 'HO CHI MINH CITY', '胡志明市', 0, 1, 'VN', 0, 0, 'HXRC'),
('HANO', 'HANOI', '河内', 0, 1, 'VN', 0, 0, 'HXRC'),
('VICHR', 'CHRISTIANSTED', '克里斯琴斯特德', 0, 1, 'VI', 0, 0, 'HXRC'),
('VIFRE', 'FREDERIKSTED', '弗雷德里克斯特德', 0, 1, 'VI', 0, 0, 'HXRC'),
('VISTS', 'ST. THOMAS', '圣托马斯', 0, 1, 'VI', 0, 0, 'HXRC'),
('YEADN', 'ADEN', '亚丁', 0, 1, 'YE', 0, 0, 'HXRC'),
('YEHOD', 'HODEIDAH', '荷台达', 0, 1, 'YE', 0, 0, 'HXRC'),
('YEMOK', 'MOKHA', '穆哈', 0, 1, 'YE', 0, 0, 'HXRC'),
('YEMUK', 'MUKALLA', '穆卡拉', 0, 1, 'YE', 0, 0, 'HXRC'),
('YUIZO', 'IZOLA', '伊佐拉', 0, 1, 'YU', 0, 0, 'HXRC'),
('SIIZO', 'Izola', '伊佐拉', 0, 1, 'YU', 0, 0, 'HXRC'),
('HRHVA', 'HVAR', '赫瓦尔', 0, 1, 'YU', 0, 0, 'HXRC'),
('HRMAS', 'MASLINICA', '马斯利尼察', 0, 1, 'YU', 0, 0, 'HXRC'),
('HRRAS', 'RASA', '拉萨', 0, 1, 'YU', 0, 0, 'HXRC'),
('HRROV', 'ROVINJ', '罗维尼', 0, 1, 'YU', 0, 0, 'HXRC'),
('HRSIB', 'SIBENIK', '希贝尼克', 0, 1, 'YU', 0, 0, 'HXRC'),
('HRSEN', 'SENJ', '塞尼', 0, 1, 'YU', 0, 0, 'HXRC');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('HRZAD', 'ZADAR', '扎达尔', 0, 1, 'YU', 0, 0, 'HXRC'),
('YUKOT', 'KOTOR', '科托尔', 0, 1, 'YU', 0, 0, 'HXRC'),
('YUPIR', 'PIRAN', '皮兰', 0, 1, 'YU', 0, 0, 'HXRC'),
('BEO', 'BEOGRADE', '', 0, 1, 'YU', 0, 0, 'HXRC'),
('BELG', 'BELGRADE', '', 0, 1, 'YU', 0, 0, 'HXRC'),
('ZRMAT', 'MATADI', '马塔迪', 0, 1, 'ZR', 0, 0, 'HXRC'),
('ZRBAN', 'BANANA', '巴纳纳', 0, 1, 'ZR', 0, 0, 'HXRC'),
('ZRBMA', 'BOMA', '博马', 0, 1, 'ZR', 0, 0, 'HXRC'),
('ZIBUL', 'BULAWAYO', '', 0, 1, 'ZI', 0, 0, 'HXRC');

INSERT INTO `P_COMPANY_CONFIG` (`COCO_CODE`, `COCO_NAME`, `COCO_VALUE`, `COCO_VALUE_TYPE`, `COCO_VALUE_OPTIONS`, `COCO_GROUP`, `COCO_TYPE`, `COCO_DESC`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('COMPANY_NAME', '公司名称', '{companyname}', 0, NULL, '公司属性', 'A', NULL, 'HXRC', 0, 0),
('COMPANY_CONTACT', '公司联系人', '{contact}', 0, NULL, '公司属性', 'A', NULL, 'HXRC', 3, 0),
('COMPANY_TEL', '公司电话', '{tel}', 0, NULL, '公司属性', 'A', NULL, 'HXRC', 0, 0),
('COMPANY_FAX', '公司传真', '{fax}', 0, NULL, '公司属性', 'A', NULL, 'HXRC', 0, 0),
('COMPANY_EMAIL', '公司邮件地址', '{email}', 0, NULL, '公司属性', 'A', NULL, 'HXRC', 0, 0),
('COMPANY_URL', '公司网址', '{url}', 0, NULL, '公司属性', 'A', NULL, 'HXRC', 0, 0),
('COMPANY_ADDRESS_CN', '公司中文地址', '', 0, NULL, '公司属性', 'A', NULL, 'HXRC', 0, 0),
('COMPANY_ADDRESS_EN', '公司英文地址', '', 0, NULL, '公司属性', 'A', NULL, 'HXRC', 1, 0),
('COMPANY_NAME_EN', '公司英文名称', '', 0, NULL, '公司属性', 'A', NULL, 'HXRC', 0, 0),
('CUSTOMER_DEFAULT_CRDIT_DAYS', '客户缺省信用期（天）', '30', 1, NULL, '客户供应商配置', 'A', '', 'HXRC', 0, 0),
('CUSTOMER_DEFAULT_CRDIT_AMOUNT', '客户缺省信用额度（CNY）', '0', 1, NULL, '客户供应商配置', 'A', NULL, 'HXRC', 1, 0),
('COMPANY_ZIP', '公司邮编', '', 0, NULL, '公司属性', 'A', NULL, 'HXRC', 2, 0),
('BASE_PORT', '本港代码', '', 10, NULL, '业务设置', 'A', '', 'HXRC', 4, 0),
('LOCK_CONS_AUDIT', '单票审核是否锁定委托信息', 'Y', 2, NULL, '业务设置', 'A', NULL, 'HXRC', 0, 0),
('DEFAULT_DEPT_C', '集装箱业务缺省部门', '', 12, NULL, '业务设置', 'A', '集装箱部', 'HXRC', 1, 0),
('DEFAULT_DEPT_B', '散货业务缺省部门', '', 12, NULL, '业务设置', 'A', '散货部', 'HXRC', 1, 0),
('DEFAULT_DEPT_G', '报关业务缺省部门', '', 12, NULL, '业务设置', 'A', '报关部', 'HXRC', 1, 0),
('DEFAULT_DEPT_I', '报检业务缺省部门', '', 12, NULL, '业务设置', 'A', '报关部', 'HXRC', 1, 0),
('DEFAULT_DEPT_A', '空运业务缺省部门', '', 12, NULL, '业务设置', 'A', '空运部', 'HXRC', 2, 0),
('FDOC_BL', '提单单证类型', NULL, 13, NULL, '业务设置', 'A', NULL, 'HXRC', 0, 0),
('FDOC_CC', '核销单单证类型', NULL, 13, NULL, '业务设置', 'A', '核销单', 'HXRC', 1, 0),
('FDOC_AUTO_UPDATE_RELEASABLE', '系统是否自动更新可放核销单、提单', 'Y', 2, NULL, '业务设置', 'A', NULL, 'HXRC', 0, 0),
('PASSWORD_EXPIRY_DAYS', '密码有效期（天）', '30', 1, NULL, '系统参数', 'A', NULL, 'HXRC', 0, 0),
('PROFIT_ALERT_TYPE', '利润预警类型', '毛利率', 3, '毛利|毛利率', '系统参数', 'A', NULL, 'HXRC', 3, 0),
('PROFIT_ALERT_VALUE', '利润预警阀值（利润小于）', '10', 1, NULL, '系统参数', 'A', NULL, 'HXRC', 2, 0),
('PROFIT_ALERT_COLOR', '利润预警颜色', '#99CC00', 9, NULL, '系统参数', NULL, NULL, 'HXRC', 2, 0),
('CONS_LOCK_DAYS', '开航后多少天锁定业务数据', '30', 1, NULL, '系统参数', 'A', NULL, 'HXRC', 0, 0),
('CONS_AR_OVERDUE_DAYS', '最大应收账款天数', '60', 1, NULL, '业务设置', 'A', NULL, 'HXRC', 0, 0);

-- 建立公司
insert into P_COMPANY (comp_code, comp_name_cn, comp_name_en,comp_active,comp_start_date,comp_end_date,comp_service_level, comp_email,comp_tel,comp_fax,comp_address, comp_contact,create_time, modify_time) 
values('HXRC','{$companyname}', '', 1, now(), null, 0, '{$email}', '{$tel}', '{$fax}', '', '{$contact}', now(), now()); 

-- 建立用户
insert into P_USER (user_name, user_login_name, user_email, user_password, user_password_modify_date,active,comp_code,version, removed) 
values('admin','admin','{$email}', 'e10adc3949ba59abbe56e057f20f883e',now(),1,'HXRC',0,0);

-- 增加admin角色
insert into P_ROLE (role_name,active,comp_code,version,removed) 
values ('admin', 1, 'HXRC',0,0);

-- 给第一个用户admin角色

insert into P_USER_ROLE (user_id, role_id)
values(1, 1);

-- admin费用权限
insert into P_USER_EXPE_PERMISSION (user_id, chcl_id, chcl_name, expe_type, usep_editable, usep_view_all, usep_edit_all, comp_code, version, removed) 
values (1, 0, '所有费用', 'R', 1, 1, 1, 'HXRC', 0, 0);

-- 上面是应收, 这是应付
insert into P_USER_EXPE_PERMISSION (user_id, chcl_id, chcl_name, expe_type, usep_editable, usep_view_all, usep_edit_all, comp_code, version, removed) 
values (1, 0, '所有费用', 'P', 1, 1, 1, 'HXRC', 0, 0);

-- admin权限初始化
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010204', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010205', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010206', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010207', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010305', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010306', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010307', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010313', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010505', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010506', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010507', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010508', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050801', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050802', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050803', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050804', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010509', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050901', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050902', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050903', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050904', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010510', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051001', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051002', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051003', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051004', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010511', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010512', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010605', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010606', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010607', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010608', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060801', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060802', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060803', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060804', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010609', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060901', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060902', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060903', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060904', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010610', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061001', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061002', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061003', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061004', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010611', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010612', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020109', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020204', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020205', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020206', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020207', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030109', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020305', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020306', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020307', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030801', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030802', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030803', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030804', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020310', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031001', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031002', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031003', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031004', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020311', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020312', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000204', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020412', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041204', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041205', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000205', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020505', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020509', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020605', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002060501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002060502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030204', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030205', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030206', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030207', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030305', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030306', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030307', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030801', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030802', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030803', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030804', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040206', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040306', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050207', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030113', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050307', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0006', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070106', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070204', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070205', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070305', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070306', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070311', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070405', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000705', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070505', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070506', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000706', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070605', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000707', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070705', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070706', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000708', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070801', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070802', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070803', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070804', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070805', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070806', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070807', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070810', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000709', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070901', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070902', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070903', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070904', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070905', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070906', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000710', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071001', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071002', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071003', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071006', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000711', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000712', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000713', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130208', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130209', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130308', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130309', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000714', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000715', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0008', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000801', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000802', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080204', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000803', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000804', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000805', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000806', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000807', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000808', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080801', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080804', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000809', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080901', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080904', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000810', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081001', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081004', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000811', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000812', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081204', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000814', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000815', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081504', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000816', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081604', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000817', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081704', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0009', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000901', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000902', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000903', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090304', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000904', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090404', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0010', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001001', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001002', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100204', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001003', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001004', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001005', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001006', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001007', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001008', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100801', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100802', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100803', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001009', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100901', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100902', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100903', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001010', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101001', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101002', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101003', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001011', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001012', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001013', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001014', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001015', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001016', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001017', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001018', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101801', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101802', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101803', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001019', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101901', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101902', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101903', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001020', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102001', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102002', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102003', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001021', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001022', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001023', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001024', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001025', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102503', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001026', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102601', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102602', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102603', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001027', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102701', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102702', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102703', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001028', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102801', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102802', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102803', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0011', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110101', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001102', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110201', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110202', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110203', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001103', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110301', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110302', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110303', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001104', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110401', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110402', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110403', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001105', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110501', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110502', 'HXRC');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110503', 'HXRC');

INSERT INTO `P_MESSAGE_TOPIC` (`METO_ID`, `METO_NAME`, `METO_DESC`, `METO_TEMPLATE`, `METO_RULE`, `ACT_NAME`, `TETY_ID`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
(1, '配船通知', '租船部生成委托时通知操作和调度', '大家好 <br><br>操作：{操作} <br><br>船名：{船名} or sub <br>租船人：{租船人} <br>发货人：{发货人} <br>LAYCAN：与客户：{预计船期从}/{预计船期到} 与船公司：{船期从}/{船期到} <br>船公司：{船公司} <br>船代：{船代} <br>计费标准： 与客户{客户计费单位} 与船公司{船公司计费单位} <br>配货：{毛重} {客户计费单位} <br>合同号：{合同号} <br>FOS编号: {委托号} <br>货物明细：{货物描述} <br>装（港区）/卸港 {装货港}({港区})/{卸货港} <br>条款：与船公司{船公司条款} 与客户{客户条款} <br><br>注意事项：{注意事项} <br><br>装船要求：{备注}', 'rowAction=N,consBizType=B,consMasterFlag=1', 'CONS_S', 37, 1, 'HXRC', 3, 0),
(2, '核销单超期未退通知', '核销单, 开船超过30天, 但是未退回', '核销单号: {核销单号}, 委托号: {委托号}, 开船超过30天, 状态未退回', NULL, 'QUARTZ_FDOC_ALERT_WRITEOFF', 43, 1, 'HXRC', 1, 0),
(3, '业务员超期提示', '查询有客户超期严重的业务员,提示扣他名下所有客户的提单列表', '业务员: {业务员}, 提单号: {提单号}', NULL, 'QUARTZ_CONS_ALERT_SALES_OVERDUE', 45, 1, 'HXRC', 0, 0);

