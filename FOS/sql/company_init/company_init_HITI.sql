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
('长期客户', 'HITI', 0, 0),
('临时客户', 'HITI', 0, 0);

--
-- 导出表中的数据 `C_VENDOR_CATEGORY`
--

INSERT INTO `C_VENDOR_CATEGORY` (`VECA_NAME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('临时供应商', 'HITI', 0, 0),
('普通供应商', 'HITI', 0, 0),
('签约供应商', 'HITI', 0, 0);

--
-- 导出表中的数据 `G_CARGO_CLASS`
--

INSERT INTO `G_CARGO_CLASS` (`CACL_CODE`, `CACL_NAME_CN`, `CACL_NAME_EN`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('01', '活动物', NULL, 1, 'HITI', 0, 0),
('02', '肉及食用杂碎', NULL, 1, 'HITI', 0, 0),
('03', '鱼及其他水生无脊椎动物', NULL, 1, 'HITI', 0, 0),
('04', '乳；蛋；蜂蜜；其他食用动物产品', NULL, 1, 'HITI', 0, 0),
('05', '其他动物产品', NULL, 1, 'HITI', 0, 0),
('06', '活植物；茎、根；插花、簇叶', NULL, 1, 'HITI', 0, 0),
('07', '食用蔬菜、根及块茎', NULL, 1, 'HITI', 0, 0),
('08', '食用水果及坚果；甜瓜等水果的果皮', NULL, 1, 'HITI', 0, 0),
('09', '咖啡、茶、马黛茶及调味香料', NULL, 1, 'HITI', 0, 0),
('10', '谷物', NULL, 1, 'HITI', 0, 0),
('11', '制粉工业产品；麦芽；淀粉等；面筋', NULL, 1, 'HITI', 0, 0),
('12', '油籽；子仁；工业或药用植物；饲料', NULL, 1, 'HITI', 0, 0),
('13', '虫胶；树胶、树脂及其他植物液、汁', NULL, 1, 'HITI', 0, 0),
('14', '编结用植物材料；其他植物产品', NULL, 1, 'HITI', 0, 0),
('15', '动、植物油、脂、蜡；精制食用油脂', NULL, 1, 'HITI', 0, 0),
('16', '肉、鱼及其他水生无脊椎动物的制品', NULL, 1, 'HITI', 0, 0),
('17', '糖及糖食', NULL, 1, 'HITI', 0, 0),
('18', '可可及可可制品', NULL, 1, 'HITI', 0, 0),
('19', '谷物粉、淀粉等或乳的制品；糕饼', NULL, 1, 'HITI', 0, 0),
('20', '蔬菜、水果等或植物其他部分的制品', NULL, 1, 'HITI', 0, 0),
('21', '杂项食品', NULL, 1, 'HITI', 0, 0),
('22', '饮料、酒及醋', NULL, 1, 'HITI', 0, 0),
('23', '食品工业的残渣及废料；配制的饲料', NULL, 1, 'HITI', 0, 0),
('24', '烟草、烟草及烟草代用品的制品', NULL, 1, 'HITI', 0, 0),
('25', '盐；硫磺；土及石料；石灰及水泥等', NULL, 1, 'HITI', 0, 0),
('26', '矿砂、矿渣及矿灰', NULL, 1, 'HITI', 0, 0),
('27', '矿物燃料、矿物油及其产品；沥青等', NULL, 1, 'HITI', 0, 0),
('28', '无机化学品；贵金属等的化合物', NULL, 1, 'HITI', 0, 0),
('29', '有机化学品', NULL, 1, 'HITI', 0, 0),
('30', '药品', NULL, 1, 'HITI', 0, 0),
('31', '肥料', NULL, 1, 'HITI', 0, 0),
('32', '鞣料；著色料；涂料；油灰；墨水等', NULL, 1, 'HITI', 0, 0),
('33', '精油及香膏；芳香料制品及化妆盥洗品', NULL, 1, 'HITI', 0, 0),
('34', '洗涤剂、润滑剂、人造蜡、塑型膏等', NULL, 1, 'HITI', 0, 0),
('35', '蛋白类物质；改性淀粉；胶；霉', NULL, 1, 'HITI', 0, 0),
('36', '炸药；烟火；引火品；易燃材料制品', NULL, 1, 'HITI', 0, 0),
('37', '照相及电影用品', NULL, 1, 'HITI', 0, 0),
('38', '杂项化学产品', NULL, 1, 'HITI', 0, 0),
('39', '塑料及其制品', NULL, 1, 'HITI', 0, 0),
('40', '橡胶及其制品', NULL, 1, 'HITI', 0, 0),
('41', '生皮（毛皮除外）及皮革', NULL, 1, 'HITI', 0, 0),
('42', '皮革制品；旅行箱包；动物肠线制品', NULL, 1, 'HITI', 0, 0),
('43', '毛皮、人造毛皮及其制品', NULL, 1, 'HITI', 0, 0),
('44', '木及木制品；木炭', NULL, 1, 'HITI', 0, 0),
('45', '软木及软木制品', NULL, 1, 'HITI', 0, 0),
('46', '编结材料制品；篮筐及柳条编结品', NULL, 1, 'HITI', 0, 0),
('47', '木浆等纤维状纤维素浆；废纸及纸板', NULL, 1, 'HITI', 0, 0),
('48', '纸及纸板；纸浆、纸或纸板制品', NULL, 1, 'HITI', 0, 0),
('49', '印刷品；手稿、打字稿及设计图纸', NULL, 1, 'HITI', 0, 0),
('50', '蚕丝', NULL, 1, 'HITI', 0, 0),
('51', '羊毛等动物毛；马毛纱线及其机织物', NULL, 1, 'HITI', 0, 0),
('52', '棉花', NULL, 1, 'HITI', 0, 0),
('53', '其他植物纤维；纸纱线及其机织物', NULL, 1, 'HITI', 0, 0),
('54', '化学纤维长丝', NULL, 1, 'HITI', 0, 0),
('55', '化学纤维短纤', NULL, 1, 'HITI', 0, 0),
('56', '絮胎、毡呢及无纺织物；线绳制品等', NULL, 1, 'HITI', 0, 0),
('57', '地毯及纺织材料的其他铺地制品', NULL, 1, 'HITI', 0, 0),
('58', '特种机织物；簇绒织物；刺绣品等', NULL, 1, 'HITI', 0, 0),
('59', '特种机织物；簇绒织物；刺绣品等', NULL, 1, 'HITI', 0, 0),
('60', '针织物及钩编织物', NULL, 1, 'HITI', 0, 0),
('61', '针织或钩编的服装及衣著附件', NULL, 1, 'HITI', 0, 0),
('62', '非针织或非钩编的服装及衣著附件', NULL, 1, 'HITI', 0, 0),
('63', '其他纺织制品；成套物品；旧纺织品', NULL, 1, 'HITI', 0, 0),
('64', '鞋靴、护腿和类似品及其零件', NULL, 1, 'HITI', 0, 0),
('65', '帽类及其零件', NULL, 1, 'HITI', 0, 0),
('66', '伞、手杖、鞭子、马鞭及其零件', NULL, 1, 'HITI', 0, 0),
('67', '加工羽毛及制品；人造炕@蝗朔　破', NULL, 1, 'HITI', 0, 0),
('68', '矿物材料的制品', NULL, 1, 'HITI', 0, 0),
('69', '陶瓷产品', NULL, 1, 'HITI', 0, 0),
('70', '玻璃及其制品', NULL, 1, 'HITI', 0, 0),
('71', '珠宝、贵金属及制品；仿首饰；硬币', NULL, 1, 'HITI', 0, 0),
('72', '钢铁', NULL, 1, 'HITI', 0, 0),
('73', '钢铁制品', NULL, 1, 'HITI', 0, 0),
('74', '铜及其制品', NULL, 1, 'HITI', 0, 0),
('75', '镍及其制品', NULL, 1, 'HITI', 0, 0),
('76', '铝及其制品', NULL, 1, 'HITI', 0, 0),
('78', '铅及其制品', NULL, 1, 'HITI', 0, 0),
('79', '锌及其制品', NULL, 1, 'HITI', 0, 0),
('80', '锡及其制品', NULL, 1, 'HITI', 0, 0),
('81', '其他贱金属、金属陶瓷及其制品', NULL, 1, 'HITI', 0, 0),
('82', '贱金属器具、利口器、餐具及零件', NULL, 1, 'HITI', 0, 0),
('83', '贱金属杂项制品', NULL, 1, 'HITI', 0, 0),
('84', '核反应堆、锅炉、机械器具及零件', NULL, 1, 'HITI', 0, 0),
('85', '电机、电气、音像设备及其零附件', NULL, 1, 'HITI', 0, 0),
('86', '铁道车辆；轨道装置；信号设备', NULL, 1, 'HITI', 0, 0),
('87', '车辆及其零附件，但铁道车辆除外', NULL, 1, 'HITI', 0, 0),
('88', '航空器、航天器及其零件', NULL, 1, 'HITI', 0, 0),
('89', '船舶及浮动结构体', NULL, 1, 'HITI', 0, 0),
('90', '光学、照相、医疗等设备及零附件', NULL, 1, 'HITI', 0, 0),
('91', '钟表及其零件', NULL, 1, 'HITI', 0, 0),
('92', '乐器及其零件、附件', NULL, 1, 'HITI', 0, 0),
('93', '武器、弹药及其零件、附件', NULL, 1, 'HITI', 0, 0),
('94', '家具；寝具等；灯具；活动房', NULL, 1, 'HITI', 0, 0),
('95', '玩具、游戏或运动用品及其零附件', NULL, 1, 'HITI', 0, 0),
('96', '杂项制品', NULL, 1, 'HITI', 0, 0),
('97', '艺术品、收藏品及古物', NULL, 1, 'HITI', 0, 0),
('98', '特殊交易品及未分类商品', NULL, 1, 'HITI', 0, 0),
('99', '特殊交易品及未分类商品', NULL, 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_CHARGE_CLASS`
--

INSERT INTO `G_CHARGE_CLASS` (`CHCL_CODE`, `CHCL_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('21', '仓储保管-搬运装卸类', 1, 'HITI', 0, 0),
('22', '保税监管类', 1, 'HITI', 0, 0),
('23', '报关报检-报关类', 1, 'HITI', 0, 0),
('24', '报关报检-报检类', 1, 'HITI', 0, 0),
('25', '仓储保管-仓储类', 1, 'HITI', 0, 0),
('26', '运费-干线类', 1, 'HITI', 0, 0),
('27', '港区作业-港区类', 1, 'HITI', 0, 0),
('28', '国外段类', 1, 'HITI', 0, 0),
('29', '集疏港运输类', 1, 'HITI', 0, 0),
('30', '港区作业-集装箱堆场/场站类', 1, 'HITI', 0, 0),
('31', '集装箱管理类', 1, 'HITI', 0, 0),
('32', '运费-佣金补贴分成类', 1, 'HITI', 0, 0),
('33', '增值服务类', 1, 'HITI', 0, 0),
('34', '运费-支线类', 1, 'HITI', 0, 0),
('35', '仓储保管-装拆箱类', 1, 'HITI', 0, 0),
('36', '运费-运费附加费类', 1, 'HITI', 0, 0),
('37', '订舱单证类', 1, 'HITI', 0, 0),
('38', '杂费类', 1, 'HITI', 0, 0),
('39', '定额包干费类', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_CONTAINER_CLASS`
--

INSERT INTO `G_CONTAINER_CLASS` (`COCL_CODE`, `COCL_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('GP', '干货箱', 1, 'HITI', 0, 0),
('HC', '干货高箱', 1, 'HITI', 0, 0),
('HT', '挂衣箱', 1, 'HITI', 0, 0),
('OT', '开顶箱', 1, 'HITI', 0, 0),
('RF', '冷冻箱', 1, 'HITI', 0, 0),
('RH', '冷高箱', 1, 'HITI', 0, 0),
('TK', '油罐箱', 1, 'HITI', 0, 0),
('FR', '框架箱', 1, 'HITI', 0, 0),
('OS', '侧壁全开', 1, 'HITI', 0, 0),
('HH', '半高箱', 1, 'HITI', 0, 0),
('VE', '通风箱', 1, 'HITI', 0, 0),
('BK', '散装货箱', 1, 'HITI', 0, 0),
('PF', '平板箱', 1, 'HITI', 0, 0),
('OH', '超高箱', 1, 'HITI', 0, 0),
('OL', '超长箱', 1, 'HITI', 0, 0),
('OW', '超宽箱', 1, 'HITI', 0, 0),
('TT', '挂衣高箱', 1, 'HITI', 0, 0),
('CH', '尺', 1, 'HITI', 0, 0),
('DG', '危品箱', 1, 'HITI', 0, 0),
('DO', '半开箱', 1, 'HITI', 0, 0),
('H1', '一层挂衣箱', 1, 'HITI', 0, 0),
('H2', '二层挂衣箱', 1, 'HITI', 0, 0),
('H3', '三层挂衣箱', 1, 'HITI', 0, 0),
('H4', '四层挂衣箱', 1, 'HITI', 0, 0),
('OO', '超限箱', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_CONTAINER_TYPE`
--

INSERT INTO `G_CONTAINER_TYPE` (`COTY_CODE`, `COTY_LENGTH`, `COCL_CODE`, `COTY_TEU`, `COTY_ISO_CODE`, `COTY_UN_CODE`, `COTY_TARE_WEIGHT`, `COTY_MAX_WEIGHT`, `COTY_MAX_MEASUREMENT`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('10GP', '10', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('10RF', '10', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20BK', '20', 'BK', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20GP', '20', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20FR', '20', 'FR', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20HC', '20', 'HC', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20HH', '20', 'HH', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20HT', '20', 'HT', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20TT', '20', 'TT', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20OS', '20', 'OS', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20OT', '20', 'OT', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20PF', '20', 'PF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20RF', '20', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20RH', '20', 'RH', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20TK', '20', 'TK', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20VE', '20', 'VE', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40BK', '40', 'BK', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40GP', '40', 'GP', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40FR', '40', 'FR', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40HC', '40', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40HH', '40', 'HH', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40HT', '40', 'HT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40TT', '40', 'TT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40OS', '40', 'OS', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40OT', '40', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40PF', '40', 'PF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40RF', '40', 'RF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40RH', '40', 'RH', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40TK', '40', 'TK', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40VE', '40', 'VE', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45FR', '45', 'FR', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45HC', '45', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45HT', '45', 'HT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45OS', '45', 'OS', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45OT', '45', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45PF', '45', 'PF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45RF', '45', 'RF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45RH', '45', 'RH', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45TK', '45', 'TK', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('12GP', '12', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('12RF', '12', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45GP', '45', 'GP', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('38GP', '38', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('48HC', '48', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('53HC', '53', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20OO', '20', 'OO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40OO', '40', 'OO', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('TEST', '12', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45G1', '40', 'OH', NULL, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('10DG', '10', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('10', '40', 'GP', NULL, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 1),
('20DG', '20', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40DG', '40', 'DG', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('12DG', '12', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45DG', '45', 'DG', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('10DO', '10', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20DO', '20', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('40DO', '40', 'DO', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('12DO', '12', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('45DO', '45', 'DO', 2, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 0),
('20', '40', 'GP', NULL, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 1),
('LDJF', '23', 'GP', 12, NULL, NULL, NULL, NULL, NULL, 1, 'HITI', 0, 1);

--
-- 导出表中的数据 `G_COUNTRY`
--

INSERT INTO `G_COUNTRY` (`COUN_CODE`, `COUN_NAME_CN`, `COUN_NAME_EN`, `COMP_CODE`, `VERSION`) VALUES
('ZW', '津巴布韦', 'ZIMBABWE', 'HITI', 5),
('IR', '伊朗', 'IRAN, ISLAMIC REPUBLIC', 'HITI', 0),
('AD', '安道尔', 'ANDORRA', 'HITI', 0),
('AE', '阿拉伯联合酋长国', 'UNITED ARAB EMIRATES', 'HITI', 0),
('AF', '阿富汗', 'AFGHANISTAN', 'HITI', 1),
('AG', '安提瓜', 'ANTIGUA AND BARBUDA', 'HITI', 0),
('AI', '安圭拉', 'ANGUILLA', 'HITI', 0),
('AL', '阿尔巴尼亚', 'ALBANIA', 'HITI', 1),
('AM', '亚美尼亚', 'ARMENIA', 'HITI', 0),
('AN', '荷属安的列斯', 'NETHERLANDS AN', 'HITI', 1),
('AO', '安哥拉', 'ANGOLA', 'HITI', 0),
('AQ', '南极洲', 'ANTARCTICA', 'HITI', 0),
('AR', '阿根廷', 'ARGENTINA', 'HITI', 0),
('AS', '美属萨摩亚', 'AMERICAN SAMOA', 'HITI', 0),
('AT', '奥地利', 'AUSTRIA', 'HITI', 0),
('AU', '澳大利亚', 'AUSTRALIA', 'HITI', 0),
('AW', '阿鲁巴岛', 'ARUBA', 'HITI', 0),
('AZ', '阿塞拜疆', 'AZERBAIJAN', 'HITI', 0),
('BA', '波-黑', 'BOSNIA-HERCEGOVINA', 'HITI', 0),
('BB', '巴巴多斯', 'BARBADOS', 'HITI', 0),
('BD', '孟加拉', 'BANGLADESH', 'HITI', 0),
('BE', '比利时', 'BELGIUM', 'HITI', 0),
('BF', '布基纳法索', 'BURKINA FASO', 'HITI', 0),
('BG', '保加利亚', 'BULGARIA', 'HITI', 0),
('BH', '巴林', 'BAHRAIN', 'HITI', 0),
('BI', '布隆迪', 'BURUNDI', 'HITI', 0),
('BJ', '贝宁', 'BENIN', 'HITI', 0),
('BM', '百慕大群岛', 'BERMUDA', 'HITI', 0),
('BN', '文莱', 'BRUNEI DARUSSALAM', 'HITI', 0),
('BO', '玻利维亚', 'BOLIVIA', 'HITI', 0),
('BR', '巴西', 'BRAZIL', 'HITI', 0),
('BS', '巴哈马联邦', 'BAHAMAS', 'HITI', 0),
('BT', '不丹', 'BHUTAN', 'HITI', 0),
('BV', '布维岛', 'BOUVET ISLAND', 'HITI', 0),
('BW', '博茨瓦纳', 'BOTSWANA', 'HITI', 0),
('BY', '白俄罗斯', 'BELARUS', 'HITI', 0),
('BZ', '伯利兹', 'BELIZE', 'HITI', 0),
('CA', '加拿大', 'CANADA', 'HITI', 0),
('CC', '可可岛', 'COCOS(KEELING)ISLAND', 'HITI', 0),
('CF', '中非共和国', 'CENTRAL AFRICAN REP.', 'HITI', 0),
('CG', '刚果（布）', 'CONGO', 'HITI', 0),
('CH', '瑞士', 'SWITZERLAND', 'HITI', 0),
('CI', '科特迪瓦', 'COTE D''IVOIRE', 'HITI', 0),
('CK', '库克群岛', 'COOK ISLANDS', 'HITI', 0),
('CL', '智利', 'CHILE', 'HITI', 0),
('CM', '喀麦隆', 'CAMEROON', 'HITI', 0),
('CN', '中国', 'CHINA', 'HITI', 0),
('CO', '哥伦比亚', 'COLOMBIA', 'HITI', 0),
('CR', '哥斯达黎加', 'COSTA RICA', 'HITI', 0),
('CU', '古巴', 'CUBA', 'HITI', 0),
('CV', '佛得角群岛', 'CAPE VERDE', 'HITI', 0),
('CX', '圣诞岛', 'CHRISTMAS ISLANDS', 'HITI', 0),
('CY', '塞浦路斯', 'CYPRUS', 'HITI', 0),
('CZ', '捷克共和国', 'CZECH REPUBLIC', 'HITI', 0),
('DE', '德国', 'GERMANY, FEDERAL REPUB', 'HITI', 0),
('DJ', '吉布提', 'DJIBOUTI', 'HITI', 0),
('DK', '丹麦', 'DENMARK', 'HITI', 0),
('DM', '英属多米尼加', 'DOMINICA', 'HITI', 0),
('DO', '多米尼加共和国', 'DOMINICAN REP.', 'HITI', 0),
('DZ', '阿尔及利亚', 'ALGERIA', 'HITI', 0),
('EC', '厄瓜多尔', 'ECUADOR', 'HITI', 0),
('EE', '爱沙尼亚', 'ESTONIA', 'HITI', 0),
('EG', '埃及', 'EGYPT', 'HITI', 0),
('EH', '西撒哈拉', 'WESTERN SAHARA', 'HITI', 0),
('ER', '厄立特里亚', 'ERITREA', 'HITI', 0),
('ES', '西班牙', 'SPAIN', 'HITI', 0),
('ET', '埃塞俄比亚', 'ETHIOPIA', 'HITI', 0),
('FI', '芬兰', 'FINLAND', 'HITI', 0),
('FJ', '斐济', 'FIJI', 'HITI', 0),
('FK', '福克兰(马尔维纳斯)群岛', 'FALK', 'HITI', 0),
('FM', '密克罗', 'FED STATES MICRONES', 'HITI', 0),
('FO', '丹麦法罗群岛', 'FAEROE ISLANDS', 'HITI', 0),
('FR', '法国', 'FRANCE', 'HITI', 0),
('GA', '加蓬', 'GABON', 'HITI', 0),
('GB', '英国', 'UNITED KINGDOM', 'HITI', 0),
('GD', '格林纳达', 'GRENADA', 'HITI', 0),
('GE', '格鲁吉亚', 'GEORGIA', 'HITI', 0),
('GF', '法属圭亚那', 'FRENCH GUIANA', 'HITI', 0),
('GH', '加纳', 'GHANA', 'HITI', 0),
('GI', '直布罗陀', 'GIBRALTAR', 'HITI', 0),
('GL', '格陵兰', 'GREENLAND', 'HITI', 0),
('GM', '冈比亚', 'GAMBIA', 'HITI', 0),
('GN', '几内亚', 'GUINEA', 'HITI', 0),
('GP', '瓜德罗普岛', 'GUADELOUPE', 'HITI', 0),
('GQ', '赤道几内亚', 'EQUATORIAL GUINE', 'HITI', 0),
('GR', '希腊', 'GREECE', 'HITI', 0),
('GT', '危地马拉', 'GUATEMALA', 'HITI', 0),
('GU', '关岛', 'GUAM', 'HITI', 0),
('GW', '几内亚比绍', 'GUINEA-BISSAU', 'HITI', 0),
('GY', '圭亚那', 'GUYANA', 'HITI', 0),
('HK', '香港', 'HONG KONG', 'HITI', 0),
('HM', '赫德岛和麦克唐纳岛', 'HEARD ISLAND AND MCDONALD ISLAND', 'HITI', 0),
('HN', '洪都拉斯', 'HONDURAS', 'HITI', 0),
('HR', '克罗地亚', 'CROATIA', 'HITI', 0),
('HT', '海地', 'HAITI', 'HITI', 0),
('HU', '匈牙利', 'HUNGARY', 'HITI', 0),
('ID', '印度尼西亚', 'INDONESIA', 'HITI', 0),
('IE', '爱尔兰', 'IRELAND', 'HITI', 0),
('IL', '以色列', 'ISRAEL', 'HITI', 0),
('IN', '印度', 'INDIA', 'HITI', 0),
('IO', '英属印度洋领地', 'BRITISH INDIAN OCEAN TERRITORY', 'HITI', 0),
('IQ', '伊拉克', 'IRAQ', 'HITI', 0),
('IS', '冰岛', 'ICELAND', 'HITI', 0),
('IT', '意大利', 'ITALY', 'HITI', 0),
('JM', '牙买加', 'JAMAICA', 'HITI', 0),
('JO', '约旦', 'JORDAN', 'HITI', 0),
('JP', '日本', 'JAPAN', 'HITI', 0),
('KE', '肯尼亚', 'KENYA', 'HITI', 0),
('KG', '吉尔吉斯斯坦', 'KYRGYZSTAN', 'HITI', 0),
('KH', '柬埔寨', 'CAMBODIA', 'HITI', 0),
('KI', '基里巴斯', 'KIRIBATI', 'HITI', 0),
('KM', '科摩罗', 'COMOROS', 'HITI', 0),
('KN', '尼维斯联邦', 'ST KITTS-NEVIS', 'HITI', 0),
('KP', '朝鲜', 'KOREA, DEM PEOPLE''S RE', 'HITI', 0),
('KR', '韩国', 'KOREA', 'HITI', 0),
('KW', '科威特', 'KUWAIT', 'HITI', 0),
('KY', '开曼群岛', 'CAYMAN ISLANDS', 'HITI', 0),
('KZ', '哈萨克斯坦', 'KAZAKHSTAN', 'HITI', 0),
('LA', '老挝', 'LAO PEOPLE''S DEMOCRATI', 'HITI', 0),
('LB', '黎巴嫩', 'LEBANON', 'HITI', 0),
('LC', '圣卢西亚', 'SAINT LUCIA', 'HITI', 0),
('LI', '列支敦士登', 'LIECHTENSTEIN', 'HITI', 0),
('LK', '斯里兰卡', 'SRI LANKA', 'HITI', 0),
('LR', '利比里亚', 'LIBERIA', 'HITI', 0),
('LS', '莱索托', 'LESOTHO', 'HITI', 0),
('LT', '立陶宛', 'LITHUANIA', 'HITI', 0),
('LU', '卢森堡', 'LUXEMBOURG', 'HITI', 0),
('LV', '拉脱维亚', 'LATVIA', 'HITI', 0),
('LY', '利比亚', 'LYBIAN ARAB JAMAHIRI', 'HITI', 0),
('MA', '摩洛哥', 'MOROCCO', 'HITI', 0),
('MC', '摩纳哥', 'MONACO', 'HITI', 0),
('MD', '摩尔多瓦', 'MOLDOVA', 'HITI', 0),
('MG', '马达加斯加', 'MADAGASCAR', 'HITI', 0),
('MH', '马绍尔群岛', 'MARSHALL ISLANDS', 'HITI', 0),
('MK', '马其顿', 'FRMR YUGOSLAV REP OF', 'HITI', 0),
('ML', '马里', 'MALI', 'HITI', 0),
('MM', '缅甸', 'MYANMAR', 'HITI', 0),
('MN', '蒙古', 'MONGOLIA', 'HITI', 0),
('MO', '澳门', 'MACAU', 'HITI', 0),
('MP', '北马里亚纳群岛', 'NORTHERN MAR', 'HITI', 0),
('MQ', '马提尼克岛', 'MARTINIQUE', 'HITI', 0),
('MR', '毛里塔尼亚', 'MAURITANIA', 'HITI', 0),
('MS', '蒙特色纳岛', 'MONTSERRAT', 'HITI', 0),
('MT', '马耳他', 'MALTA', 'HITI', 0),
('MU', '毛里求斯', 'MAURITIUS', 'HITI', 0),
('MV', '马尔代夫', 'MALDIVES', 'HITI', 0),
('MW', '马拉维', 'MALAWI', 'HITI', 0),
('MX', '墨西哥', 'MEXICO', 'HITI', 0),
('MY', '马来西亚', 'MALAYSIA', 'HITI', 0),
('MZ', '莫桑比克', 'MOZAMBIQUE', 'HITI', 0),
('NA', '纳米比亚', 'NAMIBIA', 'HITI', 0),
('NC', '新喀里多尼亚', 'NEW CALEDONIA', 'HITI', 0),
('NE', '尼日尔', 'NIGER', 'HITI', 0),
('NF', '诺福克岛(英国)', 'NORFOLK ISLAND', 'HITI', 0),
('NG', '尼日利亚', 'NIGERIA', 'HITI', 0),
('NI', '尼加拉瓜', 'NICARAGUA', 'HITI', 0),
('NL', '荷兰', 'NETHERLANDS', 'HITI', 0),
('NO', '挪威', 'NORWAY', 'HITI', 0),
('NP', '尼泊尔', 'NEPAL', 'HITI', 0),
('NR', '瑙鲁', 'NAURU', 'HITI', 0),
('NU', '纽埃', 'NIUE', 'HITI', 0),
('NZ', '新西兰', 'NEW ZEALAND', 'HITI', 0),
('OM', '阿曼', 'OMAN', 'HITI', 0),
('PA', '巴拿马', 'PANAMA', 'HITI', 0),
('PE', '秘鲁', 'PERU', 'HITI', 0),
('PF', '法属波利尼西亚', 'FRENCH POLYN', 'HITI', 0),
('PG', '巴布亚新几内亚', 'PAPUA NEW GU', 'HITI', 0),
('PH', '菲律宾', 'PHILIPPINES', 'HITI', 0),
('PK', '巴基斯坦', 'PAKISTAN', 'HITI', 0),
('PL', '波兰', 'POLAND', 'HITI', 0),
('PM', '圣皮埃尔和密克隆', 'SAINT PIERRE AND MIQUELON', 'HITI', 0),
('PN', '皮特凯恩', 'PITCAIRN', 'HITI', 0),
('PR', '波多黎各', 'PUERTO RICO', 'HITI', 0),
('PT', '葡萄牙', 'PORTUGAL', 'HITI', 0),
('PW', '帛琉(菲律宾东南-群岛)', 'PALAU', 'HITI', 0),
('PY', '巴拉圭', 'PARAGUAY', 'HITI', 0),
('QA', '卡塔尔', 'QATAR', 'HITI', 0),
('RE', '留尼汪', 'REUNION', 'HITI', 0),
('RO', '罗马尼亚', 'ROMANIA', 'HITI', 0),
('RU', '俄罗斯', 'RUSSIAN FEDERATION', 'HITI', 0),
('RW', '卢旺达', 'RWANDA', 'HITI', 0),
('SA', '沙特阿拉伯', 'SAUDI ARABIA', 'HITI', 0),
('SB', '所罗门群岛', 'SOLOMON ISLANDS', 'HITI', 0),
('SC', '塞舌尔', 'SEYCHELLES', 'HITI', 0),
('SD', '苏丹', 'SUDAN', 'HITI', 0),
('SE', '瑞典', 'SWEDEN', 'HITI', 0),
('SG', '新加坡', 'SINGAPORE', 'HITI', 0),
('SH', '圣赫勒拿岛(英国)', 'ST HELENA', 'HITI', 0),
('SI', '斯洛文尼亚', 'SLOVENIA', 'HITI', 0),
('SJ', '斯瓦尔巴岛和扬马延岛', 'SVALARD AND JAN MAYEN', 'HITI', 0),
('SK', '斯洛伐克', 'SLOVAKIA', 'HITI', 0),
('SL', '塞拉利昂', 'SIERRA LEONE', 'HITI', 0),
('SM', '圣马力诺', 'SAN MARINO', 'HITI', 0),
('SN', '塞内加尔', 'SENEGAL', 'HITI', 0),
('SO', '索马里', 'SOMALIA', 'HITI', 0),
('SR', '苏里南', 'SURINAME', 'HITI', 0),
('ST', '圣多美和普林西比', 'SAO TOME AND PRINCIPE', 'HITI', 0),
('SV', '萨尔瓦多', 'EL SALVADOR', 'HITI', 0),
('SY', '叙利亚', 'SYRIAN ARAB REPUBLIC', 'HITI', 0),
('SZ', '斯威士兰', 'SWAZILAND', 'HITI', 0),
('TC', '土克斯及开科斯群岛', 'TURKS & CAICOS ISLAN', 'HITI', 0),
('TD', '乍得', 'CHAD', 'HITI', 0),
('TF', '法属南部领地', 'FRENCH SOUTHERN TERRITORIES', 'HITI', 0),
('TG', '多哥', 'TOGO', 'HITI', 0),
('TH', '泰国', 'THAILAND', 'HITI', 0),
('TJ', '塔吉克斯坦', 'TAJIKISTAN', 'HITI', 0),
('TM', '土库曼司坦', 'TURKMENISTAN', 'HITI', 0),
('TN', '突尼斯', 'TUNISIA', 'HITI', 0),
('TO', '汤加', 'TONGA', 'HITI', 0),
('TR', '土耳其', 'TURKEY', 'HITI', 0),
('TT', '特立尼达和多巴哥', 'TRINIDAD AND TOBAGO', 'HITI', 0),
('TV', '图瓦卢', 'TUVALU', 'HITI', 0),
('TW', '台湾', 'TAIWAN, PROVINCE OF CH', 'HITI', 0),
('TZ', '坦桑尼亚', 'TANZANIA, UNITED R', 'HITI', 0),
('UA', '乌克兰', 'UKRAINE', 'HITI', 0),
('UG', '乌干达', 'UGANDA', 'HITI', 0),
('UM', '美属外岛', 'US MINOR OUTLYING ISLA', 'HITI', 0),
('US', '美国', 'UNITED STATES', 'HITI', 0),
('UY', '乌拉圭', 'URUGUAY', 'HITI', 0),
('UZ', '乌兹别克斯坦', 'UZBEKISTAN', 'HITI', 0),
('VA', '梵蒂冈', 'VATICAN', 'HITI', 0),
('VC', '圣文森特', 'ST VINCENT-GRENADI', 'HITI', 0),
('VE', '委内瑞拉', 'VENEZUELA', 'HITI', 0),
('VG', '英属维尔京岛', 'BR. VIRGIN IS', 'HITI', 0),
('VI', '美属维尔京岛', 'VIRGIN ISLANDS, U.S.', 'HITI', 0),
('VN', '越南', 'VIET NAM', 'HITI', 0),
('VU', '瓦努阿图', 'VANUATU', 'HITI', 0),
('WF', '瓦利斯', 'WALLIS AND FUTUNA IS', 'HITI', 0),
('WS', '萨摩亚', 'SAMOA', 'HITI', 0),
('YE', '也门', 'YEMEN', 'HITI', 0),
('YU', '南斯拉夫', 'YUGOSLAVIA (Fed. R）', 'HITI', 0),
('ZA', '南非', 'SOUTH AFRICA', 'HITI', 0),
('ZM', '赞比亚', 'ZAMBIA', 'HITI', 0),
('ZR', '扎伊尔', 'ZAIRE', 'HITI', 0),
('CD', '民主刚果', 'Congo,DR', 'HITI', 0),
('CS', '塞尔维亚和黑山', 'SERBIA AND MONTENEGRO', 'HITI', 0),
('GS', '南乔治亚地区及南桑威奇群岛', 'SOUTH GEORGIA AND THE SOUTH SAND', 'HITI', 0),
('TK', '托克老群岛', 'TOKELAU', 'HITI', 0),
('TL', '东帝汶岛', 'EAST TIMOR', 'HITI', 0),
('XZ', '国际水域设施', 'INSTALLATIONS IN INTERNATIONAL W', 'HITI', 0),
('YT', '马约特', 'MAYOTTE', 'HITI', 0),
('01', '比利时', 'BILISHI', 'HITI', 0);

--
-- 导出表中的数据 `G_CURRENCY`
--

INSERT INTO `G_CURRENCY` (`CURR_CODE`, `CURR_NAME`, `CURR_SYMBOL`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('USD', '美元', '$', 1, 'HITI', 0, 0),
('CNY', '人民币', '￥', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_DOCUMENT_TYPE`
--

INSERT INTO `G_DOCUMENT_TYPE` (`DOTY_CODE`, `DOTY_NAME`, `DOTY_CLASS`, `DOTY_RETURN_FLAG`, `DOTY_BACK_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('FP', '发票', '10', 0, 0, 1, 'HITI', 1, 0),
('PZZS', '品质证书', '11', 0, 0, 1, 'HITI', 1, 0),
('ZLZS', '重量证书', '11', 0, 0, 1, 'HITI', 1, 0),
('SLZS', '数量证书', '11', 0, 0, 1, 'HITI', 1, 0),
('SYWSZS', '兽医卫生证书', '11', 0, 0, 1, 'HITI', 1, 0),
('JKZS', '健康证书', '11', 0, 0, 1, 'HITI', 1, 0),
('WSZS', '卫生证书', '11', 0, 0, 1, 'HITI', 1, 0),
('DWWSZS', '动物卫生证书', '11', 0, 0, 1, 'HITI', 1, 0),
('ZWJYZS', '植物检疫证书', '11', 0, 0, 1, 'HITI', 1, 0),
('XZXDZS', '熏蒸消毒证书', '11', 0, 0, 1, 'HITI', 1, 0),
('CRHWHZPD', '出入货物换证凭单', '11', 0, 0, 1, 'HITI', 1, 0),
('HT', '合同', '10', 0, 0, 1, 'HITI', 1, 0),
('XYZ', '信用证', '10', 0, 0, 1, 'HITI', 1, 0),
('HZPD', '换证凭单', '10', 0, 0, 1, 'HITI', 1, 0),
('ZXD', '装箱单', '10', 0, 0, 1, 'HITI', 1, 0),
('CJD', '厂检单', '10', 0, 0, 1, 'HITI', 1, 0),
('BZXNJGD', '包装性能结果单', '10', 0, 0, 1, 'HITI', 1, 0),
('XKSPWJ', '许可/审批文件', '10', 0, 0, 1, 'HITI', 1, 0),
('XD', '箱单', '12', 0, 0, 1, 'HITI', 1, 0),
('FP', '发票', '12', 0, 0, 1, 'HITI', 1, 0),
('BGWT', '报关委托', '12', 0, 0, 1, 'HITI', 1, 0),
('BJWT', '报检委托(需商检货)', '12', 0, 0, 1, 'HITI', 1, 0),
('FMZBZZM', '非木质包装证明(非木质包装货)', '12', 0, 0, 1, 'HITI', 1, 0),
('HXD', '核销单', '12', 0, 0, 1, 'HITI', 1, 0),
('YPZM', '药品证明(出口货为药品)', '12', 0, 0, 1, 'HITI', 1, 0),
('CZSJ', '场站收据', '12', 0, 0, 1, 'HITI', 1, 0),
('JKBGD', '进口报关单', '30', 0, 0, 1, 'HITI', 1, 0),
('CKBGD', '出口报关单', '30', 0, 0, 1, 'HITI', 1, 0),
('RJHWJYJYZM', '入境货物检验检疫证明', '30', 0, 0, 1, 'HITI', 1, 0),
('JKSD', '进口税单', '30', 0, 0, 1, 'HITI', 1, 0),
('CRJJYJYGGSQD', '出入境检验检疫更改申请单', '30', 0, 0, 1, 'HITI', 1, 0),
('TD', '提单', '30', 0, 0, 1, 'HITI', 1, 0);

--
-- 导出表中的数据 `G_EXCHANGE_SETTLEMENT`
--

INSERT INTO `G_EXCHANGE_SETTLEMENT` (`EXSE_CODE`, `EXSE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '信汇', 1, 'HITI', 0, 0),
('2', '电汇', 1, 'HITI', 0, 0),
('3', '票    汇', 1, 'HITI', 0, 0),
('4', '付款交单', 1, 'HITI', 0, 0),
('5', '承兑交单', 1, 'HITI', 0, 0),
('6', '信 用 证', 1, 'HITI', 0, 0),
('7', '先出后结', 1, 'HITI', 0, 0),
('8', '先结后出', 1, 'HITI', 0, 0),
('9', '其    他', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_ISSUE_TYPE`
--

INSERT INTO `G_ISSUE_TYPE` (`ISTY_CODE`, `ISTY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '正本', 1, 'HITI', 0, 0),
('2', '电放', 1, 'HITI', 0, 0),
('3', 'SEAWAYBILL', 1, 'HITI', 0, 0),
('4', '其它', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_LEVY_TYPE`
--

INSERT INTO `G_LEVY_TYPE` (`LETY_CODE`, `LETY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('101', '一般征税', 1, 'HITI', 0, 0),
('502', '来料加工', 1, 'HITI', 0, 0),
('503', '进料加工', 1, 'HITI', 0, 0),
('601', '中外合资', 1, 'HITI', 0, 0),
('602', '中外合作', 1, 'HITI', 0, 0),
('603', '外资企业', 1, 'HITI', 0, 0),
('789', '鼓励项目', 1, 'HITI', 0, 0),
('799', '自有资金', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_PACKAGE`
--

INSERT INTO `G_PACKAGE` (`PACK_CODE`, `PACK_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('BALES', 'BALES', 1, 'HITI', 0, 0),
('CRATE', 'CRATES', 1, 'HITI', 0, 0),
('W/CS', 'WOODEN CASES', 1, 'HITI', 0, 0),
('S/P', 'SETS/PCS', 1, 'HITI', 0, 0),
('P/CS', 'PLYWOOD CASES', 1, 'HITI', 0, 0),
('GUNNY', 'GUNNY BAG', 1, 'HITI', 0, 0),
('PLT', 'PALLET', 1, 'HITI', 0, 0),
('SKIDS', 'SKIDS', 1, 'HITI', 0, 0),
('PCS', 'PIECES', 1, 'HITI', 0, 0),
('SETS', 'SETS', 1, 'HITI', 0, 0),
('C/DRUM', 'CARDBOARD DRUMS', 1, 'HITI', 0, 0),
('DZS', 'DOZENS', 1, 'HITI', 0, 0),
('RL', 'REEL', 1, 'HITI', 0, 0),
('ENDCAPS', 'CLEAR FLOAT GLASS', 1, 'HITI', 0, 0),
('PLTS', 'PALLETS', 1, 'HITI', 0, 0),
('CASES', 'CASES', 1, 'HITI', 0, 0),
('DRUMS', 'DRUMS', 1, 'HITI', 0, 0),
('PPWOVENB', 'PP WOVEN BAGS', 1, 'HITI', 0, 0),
('IRON DRU', 'IRON DRUMS', 1, 'HITI', 0, 0),
('CLOTH BA', 'CLOTH BALE', 1, 'HITI', 0, 0),
('PLASTIC', 'PLASTIC DRUMS', 1, 'HITI', 0, 0),
('TRAYS', 'TRAYS', 1, 'HITI', 0, 0),
('RACKS', 'RACKS', 1, 'HITI', 0, 0),
('CTNS', 'CARTONS', 1, 'HITI', 0, 0),
('FDRUMS', 'FIBRE DRUMS', 1, 'HITI', 0, 0),
('PALLETS', 'PALLETS', 1, 'HITI', 0, 0),
('ROLLS', 'ROLLS', 1, 'HITI', 0, 0),
('IRON C', 'IRON CRATES', 1, 'HITI', 0, 0),
('BAGS', 'BAGS', 1, 'HITI', 0, 0),
('CNTRS', 'CONTAINERS', 1, 'HITI', 0, 0),
('GUN', 'GUNNY SACKS', 1, 'HITI', 0, 0),
('PRESS PA', 'PRESS PACKED BALES', 1, 'HITI', 0, 0),
('UNPACKED', 'UNPACKED', 1, 'HITI', 0, 0),
('PACKAGES', 'PACKAGES', 1, 'HITI', 0, 0),
('W/BS', 'WOODEN BOXES', 1, 'HITI', 0, 0),
('W/CRS', 'WOODEN CRATES', 1, 'HITI', 0, 0),
('LT', 'LOT', 1, 'HITI', 0, 0),
('BUNDLES', 'BUNDLES', 1, 'HITI', 0, 1),
('PRS', 'PRS', 1, 'HITI', 0, 0),
('W/DRUMS', 'WOODEN DRUMS', 1, 'HITI', 0, 0),
('TINS', 'TINS', 1, 'HITI', 0, 0),
('BIG BAGS', 'BIG BAGS', 1, 'HITI', 0, 0),
('COILS', 'COILS', 1, 'HITI', 0, 0),
('PIECES', 'PIECES', 1, 'HITI', 0, 0),
('PAIRS', 'PAIRS', 1, 'HITI', 0, 0),
('TANK', 'TANK', 1, 'HITI', 0, 0),
('BLDS', 'BLDS', 1, 'HITI', 0, 0),
('UNITS', 'UNITS', 1, 'HITI', 0, 0),
('CANS', 'CANS', 1, 'HITI', 0, 0),
('BOXES', 'BOXES', 1, 'HITI', 0, 0),
('BDLS', 'BUNDLES', 1, 'HITI', 0, 0),
('LOT', 'LOT', 1, 'HITI', 0, 0),
('SACKS', 'SACKS', 1, 'HITI', 0, 0),
('HANGERS', 'HANGERS', 1, 'HITI', 0, 0),
('FIBER DR', 'FIBER DRUMS', 1, 'HITI', 0, 0),
('DOUBLE', 'DOUBLE PP BAGS', 1, 'HITI', 0, 0),
('PLAS', 'PLASTICS DRUMS', 1, 'HITI', 0, 0),
('COM', 'COMPOUND BAGS', 1, 'HITI', 0, 0),
('JUMBOBAG', 'JUMBO BAGS', 1, 'HITI', 0, 0),
('PLASTICB', 'PLASTIC BAGS', 1, 'HITI', 0, 0),
('KINT BAG', 'KINTTING BAG', 1, 'HITI', 0, 0),
('CYL', 'CYL', 1, 'HITI', 0, 0),
('CYLINDER', 'CYLINDERS', 1, 'HITI', 0, 0),
('IRONPALE', 'IRON PALLETS', 1, 'HITI', 0, 0),
('SB.CASES', 'SYNTHETIC BOARD CASES', 1, 'HITI', 0, 0),
('W/P', 'WOODEN PALLETS', 1, 'HITI', 0, 0),
('T/BAGS', 'TOTE BAGS', 1, 'HITI', 0, 0),
('MTS', 'MTS', 1, 'HITI', 0, 0),
('REELS', 'REELS', 1, 'HITI', 0, 0),
('BTL', 'BOTTOLS', 1, 'HITI', 0, 0),
('SUPER', 'SUPER SACKS', 1, 'HITI', 0, 0),
('WDCS', 'WDCS', 1, 'HITI', 0, 0),
('PAPER', 'PAPER BAGS', 1, 'HITI', 0, 0),
('WOVEN BS', 'WOVEN BAGS', 1, 'HITI', 0, 0),
('11111111', 'CARTONS', 1, 'HITI', 0, 1),
('W/BAGS', 'WEAVING BAGS', 1, 'HITI', 0, 0),
('TUBES', 'TUBES', 1, 'HITI', 0, 0),
('BOTTOLS', 'BTLS', 1, 'HITI', 0, 0),
('CARTONS', 'CARTONS', 1, 'HITI', 0, 1),
('DUNDLES', 'DUNDLES', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_PAYMENT_TERM`
--

INSERT INTO `G_PAYMENT_TERM` (`PATE_CODE`, `PATE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('P', 'FREIGHT PREPAID', 1, 'HITI', 0, 0),
('C', 'FREIGHT COLLECT', 1, 'HITI', 0, 0),
('F', 'FREE', 1, 'HITI', 0, 0),
('E', '第三地付款', 1, 'HITI', 0, 0),
('L', '第一程预付/第二程到付', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_PLACE`
--

INSERT INTO `G_PLACE` (`PLAC_CODE`, `PLAC_NAME`, `PLAC_NAME_EN`, `PLAC_TYPE`, `COUN_CODE`, `PLAC_PROVINCE_ID`, `PLAC_PROVINCE_NAME`, `PLAC_CITY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('YSG', '洋山港', 'YANSHAN', 3, 'CN', NULL, NULL, NULL, 1, 'HITI', 0, 0),
('JGL', '军公路码头', 'JUNGONGLU', 3, 'CN', NULL, NULL, NULL, 1, 'HITI', 1, 1),
('JGL', '军公路港务', 'JUNGONGLU', 3, 'CN', NULL, NULL, NULL, 1, 'HITI', 1, 0),
('ZHB', '张华浜港务', 'ZHANGHUABANG', 3, 'CN', NULL, NULL, NULL, 1, 'HITI', 1, 0),
('BSG', '宝山港务', 'BAOSHAN', 3, 'CN', NULL, NULL, NULL, 1, 'HITI', 1, 0),
('LJRQ', '罗泾二期', 'LUOJINGERQI', 3, 'CN', NULL, NULL, NULL, 1, 'HITI', 1, 0),
('SGWC', '上钢五厂', 'SHANGGANGWUCHANG', 3, 'CN', NULL, NULL, NULL, 1, 'HITI', 1, 0),
('TCWX', '拖出维修', 'TUOCHUWEIXIU', 3, 'CN', NULL, NULL, NULL, 1, 'HITI', 2, 0);

--
-- 导出表中的数据 `G_SETTLEMENT_WAY`
--

INSERT INTO `G_SETTLEMENT_WAY` (`SEWA_CODE`, `SEWA_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('DH', '电汇', 1, 'HITI', 0, 0),
('ZP', '支票', 1, 'HITI', 0, 0),
('WHHK', '外汇划款', 1, 'HITI', 0, 0),
('DZLH', '电子联行付款', 1, 'HITI', 0, 0),
('DJPZ', '贷记凭证', 1, 'HITI', 0, 0),
('XJ', '现金', 1, 'HITI', 0, 0),
('SD', '水单', 1, 'HITI', 0, 0),
('ZZ', '转帐', 1, 'HITI', 0, 0),
('TS', '托收', 1, 'HITI', 0, 0),
('NK', '银行内扣', 1, 'HITI', 0, 0),
('BP', '本票', 1, 'HITI', 0, 0),
('HP', '汇票', 1, 'HITI', 0, 0),
('CE', '定舱差额', 1, 'HITI', 0, 0),
('RLC', '入立成', 1, 'HITI', 0, 0),
('QL', '帐务清理', 1, 'HITI', 0, 0);


--
-- 导出表中的数据 `G_SHIPPING_LINE`
--

INSERT INTO `G_SHIPPING_LINE` (`SHLI_CODE`, `SHLI_NAME`, `SHLI_NAME_EN`, `SHLI_BULK_FLAG`, `SHLI_CONT_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('CNKOR', '中国-南韩', 'CN-KOREA', 1, 1, 1, 'HITI', 0, 0),
('CNRUS', '中国一俄罗斯远东', 'CN-RUSSIA', 1, 1, 1, 'HITI', 0, 0),
('CNSEA', '中国一东南亚', 'CN-SOUTHEAST ASIA', 1, 1, 1, 'HITI', 0, 0),
('CNRSP', '中国-红海', 'CN-RED SEA PORT', 1, 1, 1, 'HITI', 0, 0),
('CNPSG', '中国一波斯湾', 'CN-PERSIAN GULF', 1, 1, 1, 'HITI', 0, 0),
('CNAFR', '中国一非洲', 'CN-AFRICA', 1, 1, 1, 'HITI', 0, 0),
('CNMED', '中国一地中海', 'CN-MEDITERRANEAN', 1, 1, 1, 'HITI', 0, 0),
('CNEUR', '中国一欧洲', 'CN-EUROPE', 1, 1, 1, 'HITI', 0, 0),
('CNAUS', '中国一澳新', 'CN-AUSTRALIA,NEW ZEALAND', 1, 1, 1, 'HITI', 0, 0),
('CNUSA', '中国一美国', 'CN-USA', 1, 1, 1, 'HITI', 0, 0),
('CNCAN', '中国一加拿大', 'CN-CANADA', 1, 1, 1, 'HITI', 0, 0),
('CNSAM', '中国一南美洲', 'CN-SOUTH AMERCIA', 1, 1, 1, 'HITI', 0, 0),
('CNCCM', '中国一中美洲,加勒比海', 'CN-CENTRAL AMERICA,CARIBBEAN,MEX', 1, 1, 1, 'HITI', 0, 0),
('CNJAP', '中国-日本', 'CN-JAPAN', 1, 1, 1, 'HITI', 0, 0),
('CNIND', '中国-印巴', 'CN-INDIA', 1, 1, 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_TRADE_TERM`
--

INSERT INTO `G_TRADE_TERM` (`TRTE_CODE`, `TRTE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', 'CIF', 1, 'HITI', 0, 0),
('2', 'C&F', 1, 'HITI', 0, 0),
('3', 'FOB', 1, 'HITI', 0, 0),
('4', 'C&I ', 1, 'HITI', 0, 0),
('5', '市场价', 1, 'HITI', 0, 0),
('6', '垫仓', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_TRADE_TYPE`
--

INSERT INTO `G_TRADE_TYPE` (`TRTY_CODE`, `TRTY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('0110', '一般贸易', 1, 'HITI', 0, 0),
('0130', '易货贸易', 1, 'HITI', 0, 0),
('0139', '旅游购物商品', 1, 'HITI', 0, 0),
('0200', '料件放弃', 1, 'HITI', 0, 0),
('0214', '来料加工', 1, 'HITI', 0, 0),
('0245', '来料料件内销', 1, 'HITI', 0, 0),
('0255', '来料深加工', 1, 'HITI', 0, 0),
('0258', '来料余料结转', 1, 'HITI', 0, 0),
('0265', '来料料件复出', 1, 'HITI', 0, 0),
('0300', '来料料件退换', 1, 'HITI', 0, 0),
('0314', '加工专用油', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_TRANS_TERM`
--

INSERT INTO `G_TRANS_TERM` (`TRAN_CODE`, `TRAN_NAME`, `TRAN_BULK_FLAG`, `TRAN_CONT_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('CY-CY', '场到场', 1, 1, 1, 'HITI', 0, 0),
('CY-CFS', '场到站', 1, 1, 1, 'HITI', 0, 0),
('CY-Door', '场到门', 1, 1, 1, 'HITI', 0, 0),
('Door-Door', '门到门', 1, 1, 1, 'HITI', 0, 0),
('Door-CY', '门到场', 1, 1, 1, 'HITI', 0, 0),
('Door-CFS', '门到站', 1, 1, 1, 'HITI', 0, 0),
('CFS-Door', '站到门', 1, 1, 1, 'HITI', 0, 0),
('CFS-CY', '站到场', 1, 1, 1, 'HITI', 0, 0),
('CFS-CFS', '站到站', 1, 1, 1, 'HITI', 0, 0),
('FILO', '舱底', 1, 1, 1, 'HITI', 0, 0),
('FIO', 'FIO', 1, 1, 1, 'HITI', 0, 0),
('FLT', '班轮', 1, 1, 1, 'HITI', 0, 0),
('HOOK TO HOOK', 'HTH', 1, NULL, 1, 'HITI', 0, 0),
('FREE IN UNDER HOOK', 'FIUH', 1, NULL, 1, 'HITI', 1, 0),
('HOOK IN LINE OUT', 'HILO', 1, NULL, 1, 'HITI', 0, 0),
('FILO&FIO', 'FILO&FIO', 1, NULL, 1, 'HITI', 0, 0),
('LINER IN LINER OUT', 'LINER IN LINER OUT', 1, NULL, 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_TRANS_TYPE`
--

INSERT INTO `G_TRANS_TYPE` (`TRAT_CODE`, `TRAT_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '监管仓库', 1, 'HITI', 0, 0),
('2', '江海运输', 1, 'HITI', 0, 0),
('3', '铁路运输', 1, 'HITI', 0, 0),
('0', '非保税区', 1, 'HITI', 0, 0),
('4', '汽车运输', 1, 'HITI', 0, 0),
('5', '航空运输', 1, 'HITI', 0, 0),
('6', '邮件运输', 1, 'HITI', 0, 0),
('7', '保税区', 1, 'HITI', 0, 0),
('8', '保税仓库', 1, 'HITI', 0, 0),
('9', '其它运输', 1, 'HITI', 0, 0),
('A', '全部运输', 1, 'HITI', 0, 0),
('W', '物流中心', 1, 'HITI', 0, 0),
('X', '物流园区', 1, 'HITI', 0, 0),
('Y', '保税港区', 1, 'HITI', 0, 0),
('Z', '出口加工', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_UNIT`
--

INSERT INTO `G_UNIT` (`UNIT_CODE`, `UNIT_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('FT', '计费吨', 1, 'HITI', 0, 0),
('40E', '40空箱', 1, 'HITI', 0, 1),
('40F', '40重箱', 1, 'HITI', 0, 1),
('HR', '小时', 1, 'HITI', 0, 1),
('T', '吨', 0, 'HITI', 0, 1),
('KGS', '千克', 1, 'HITI', 0, 0),
('CBM', '立方米', 1, 'HITI', 0, 0),
('LT', '公升', 1, 'HITI', 0, 1),
('KM', '公里', 0, 'HITI', 0, 1),
('20E', '20空箱', 1, 'HITI', 0, 1),
('20F', '20重箱', 1, 'HITI', 0, 1),
('EACH', '票', 1, 'HITI', 0, 0),
('CONT', '箱', 1, 'HITI', 0, 0),
('DAY', '天', 1, 'HITI', 0, 1),
('P', '人', 1, 'HITI', 0, 1),
('C', '摄氏', 1, 'HITI', 0, 1),
('F', '华氏', 1, 'HITI', 0, 1),
('BBBB', 'AAA', 1, 'HITI', 0, 1),
('HP', '马力', 1, 'HITI', 0, 1),
('KW', '千瓦', 1, 'HITI', 0, 1),
('TIME', '次', 1, 'HITI', 0, 1),
('MIN', '分钟', 1, 'HITI', 0, 1),
('40CTN', '大箱型', 1, 'HITI', 0, 1),
('M', '米', 1, 'HITI', 0, 1),
('20CTN', '小箱型', 1, 'HITI', 0, 1),
('TEU', 'TEU', 1, 'HITI', 0, 1),
('大箱', '大箱', 1, 'HITI', 0, 1),
('UNIT     ', '个   ', 1, 'HITI', 0, 1),
('小箱', '小箱', 1, 'HITI', 0, 1),
('kg', '公斤', 1, 'HITI', 0, 1),
('kgs', '公斤', 1, 'HITI', 0, 1),
('CM', '厘米', 1, 'HITI', 0, 1),
('TON', '吨', 1, 'HITI', 0, 0),
('20GP', '标准柜', 1, 'HITI', 0, 1),
('40GP', '大柜', 1, 'HITI', 0, 1),
('BUNDLES', '捆', 1, 'HITI', 0, 0),
('PIECES', '支', 1, 'HITI', 0, 0),
('W/CASE', '木箱', 1, 'HITI', 0, 0),
('MTS', 'MTS', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `G_USAGE`
--

INSERT INTO `G_USAGE` (`USAG_CODE`, `USAG_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('WMNX', '外贸自营内销', 1, 'HITI', 0, 0),
('TQNX', '特区内销', 1, 'HITI', 0, 0),
('QTNX', '其他内销', 1, 'HITI', 0, 0),
('QYZY', '企业自用', 1, 'HITI', 0, 0),
('JGFX', '加工返销', 1, 'HITI', 0, 0),
('JY', '借用', 1, 'HITI', 0, 0),
('BZJ', '收保证金', 1, 'HITI', 0, 0),
('FREE', '免费提供', 1, 'HITI', 0, 0),
('ZJTG', '作价提供', 1, 'HITI', 0, 0),
('HYGG', '货样广告品', 1, 'HITI', 0, 0),
('QT', '其他', 1, 'HITI', 0, 0),
('YCDJ', '以产顶进', 1, 'HITI', 0, 0);

--
-- 导出表中的数据 `P_SERIAL_RULE`
--

INSERT INTO `P_SERIAL_RULE` (`seru_code`, `seru_name`, `comp_code`, `seru_rule`, `seru_sn_length`, `seru_uniq_suffix`, `seru_loop_period`) VALUES
('consign_no', '委托编号', 'HITI', '<COMP><CONS_TYPE><YY><SN>', 6, '<COMP><CONS_TYPE><YY>', 3),
('invoice_no', '发票编号', 'HITI', '<COMP><YY>I<SN>', 6, '<YY>', 3),
('pr_no', '托收单/付款申请编号', 'HITI', '<RP><CUR><YY>P<SN>', 6, '<YY>', 3),
('voucher_no', '收款单', 'HITI', '<COMP><YY>V<SN>', 6, '<YY>', 3),
('bill_no', '账单', 'HITI', '<COMP><YY>B<SN>', 6, '<YY>', 3),
('tran_no', '陆运联系单号', 'HITI', '<COMP><YY>DY<SN>', 6, '<YY>', 3),
('ware_no', '仓储单号', 'HITI', '<COMP><YY>W<SN>', 6, '<COMP><YY>', 3);

--
-- 导出表中的数据 `P_TEMPLATE`
--

INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('人民币发票', 'B', 'xls', 10, 'INVOR', NULL, NULL, '人民币发票套打模板', 1, NULL, NULL, NULL, NULL, 'HITI', 1, 0),
('基础数据-国家', 'B', 'xls', 13, 'COUN', NULL, NULL, '国家数据导出模板', 1, NULL, NULL, NULL, NULL, 'HITI', 0, 0),
('基础数据-港口', 'B', 'xls', 14, 'PORT', NULL, NULL, '港口数据导出模板', 1, NULL, NULL, NULL, NULL, 'HITI', 1, 0),
('委托列表', 'B', 'xls', 15, NULL, NULL, NULL, '委托列表导出模板', 1, NULL, NULL, NULL, NULL, 'HITI', 1, 1),
('委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '委托列表导出模板', 1, NULL, NULL, NULL, NULL, 'HITI', 0, 0),
('单票审核', 'B', 'xls', 16, 'CONS_AUDIT', '单票审核', NULL, '单票审核导出模板', 1, NULL, NULL, NULL, NULL, 'HITI', 1, 1),
('单票审核', 'B', 'xls', 16, 'CONS_AUDIT', '单票审核', NULL, '单票审核导出模板', 1, NULL, NULL, NULL, NULL, 'HITI', 0, 0),
(' 测试', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '测试', 1, NULL, NULL, NULL, NULL, 'HITI', 1, 1),
('发票模板', 'B', 'xls', 9, 'INVO', '发票模板', NULL, '发票套打模板', 1, NULL, NULL, NULL, NULL, 'HITI', 0, 0),
('对账单', 'B', 'xls', 17, 'BILL', '对账单', NULL, '对账单输出模板', 1, NULL, NULL, NULL, NULL, 'HITI', 0, 0),
('HBL提单', 'B', 'xls', 1, 'BL', '提单模板', NULL, 'HBL提单', 1, 1, '2008-08-21 00:00:00', 3, '2008-10-27 00:00:00', 'HITI', 1, 0),
('出口报检单模板', 'B', 'xls', 5, 'INSP', '报检单模板', NULL, '出口报检单套打模板', 1, 1, '2008-08-23 00:00:00', 1, '2008-08-23 00:00:00', 'HITI', 0, 0),
('出口报关单模板', 'B', 'xls', 4, 'CUDE', '报关单模板', NULL, '出口报关单模板', 1, 1, '2008-08-24 00:00:00', 1, '2008-08-24 00:00:00', 'HITI', 0, 0),
('装箱单', 'B', 'xls', 8, 'CONT', '装箱单模板', NULL, '装箱单模板', 1, 1, '2008-08-25 00:00:00', 1, '2008-08-25 00:00:00', 'HITI', 0, 0),
('十联单模板', 'B', 'xls', 7, 'CONS', '十联单模板', NULL, '十联单套打模板', 1, 1, '2008-08-26 00:00:00', 1, '2008-08-26 00:00:00', 'HITI', 0, 0),
('门到门装箱通知', 'B', 'doc', 18, 'WARE_INFO', '进仓通知', NULL, '门到门装箱通知', 1, 1, '2008-08-27 00:00:00', 3, '2008-10-29 10:56:54', 'HITI', 1, 0),
('订舱确认书', 'B', 'xls', 19, 'BOOK_C', '订舱确认书', NULL, '订舱确认书模板', 1, 1, '2008-09-01 00:00:00', 1, '2008-09-01 00:00:00', 'HITI', 0, 0),
('代运联系单', 'B', 'xls', 20, 'TRAN', '代运联系单', NULL, '代运联系单模板', 1, 1, '2008-09-02 00:00:00', 1, '2008-09-02 00:00:00', 'HITI', 0, 0),
('仓储联系单', 'B', 'xls', 21, 'WARE', '仓储联系单', NULL, '仓储联系单模板', 1, 1, '2008-09-02 00:00:00', 1, '2008-09-02 00:00:00', 'HITI', 0, 0),
('电放保函', 'B', 'xls', 22, 'BLER', '电放保函', NULL, '电放保函模板', 1, 1, '2008-09-09 00:00:00', 81, '2009-01-17 21:55:26', 'HITI', 2, 0),
('SEAWAYBILL保函', 'B', 'xls', 23, 'SEAW', 'SEAWAYBILL保函', NULL, 'SEAWAYBILL保函模板', 1, 1, '2008-09-10 00:00:00', 1, '2008-09-10 00:00:00', 'HITI', 0, 0),
('进口分拨申请', 'B', 'xls', 24, 'SPLI', '进口分拨申请', NULL, '进口分拨申请模板', 1, 1, '2008-09-11 00:00:00', 1, '2008-09-11 00:00:00', 'HITI', 0, 0),
('进口提货单', 'B', 'xls', 25, 'DO', '进口提货单', NULL, '进口提货单标准模板', 1, 1, '2008-09-12 00:00:00', 1, '2008-09-12 00:00:00', 'HITI', 0, 0),
('提单模板', 'B', 'doc', 1, 'BL', '提单模板', NULL, '提单模板xx', 1, 1, '2008-10-07 00:00:00', 81, '2009-01-17 21:57:11', 'HITI', 3, 0),
('订舱委托书', 'B', 'xls', 26, 'CONS_B', '订舱委托书', NULL, '订舱委托书模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', 'HITI', 0, 0),
('报关单模板', 'B', 'xls', 5, 'INSP', '报检单模板', NULL, NULL, 1, 1, '2008-10-14 00:00:00', 1, '2008-10-20 00:00:00', 'HITI', 1, 1),
('仓库装箱通知', 'B', 'doc', 18, 'WARE_INFO', '装箱通知单', NULL, '仓库装箱通知', 1, 3, '2008-10-29 11:01:36', 3, '2008-10-29 11:01:36', 'HITI', 0, 0),
('进口到货通知', 'B', 'doc', 27, 'ARAD', '进口到货通知', NULL, '进口到货通知', 1, 3, '2008-10-29 11:24:45', 3, '2008-10-29 11:24:45', 'HITI', 0, 0),
('出入境检验检疫更改申请单', 'B', 'doc', 5, 'INSP', '报检单模板', NULL, '商检更改单', 1, 11, '2008-11-07 00:00:00', 11, '2008-11-07 11:38:27', 'HITI', 1, 0),
('单证输出模板', 'B', 'xls', 30, 'FDOC_LIST', '单证清单输出模板', NULL, '单证输出模板', 1, 3, '2008-11-27 10:51:37', 3, '2008-11-27 10:51:37', 'HITI', 0, 0),
('核销明细', 'B', 'xls', 31, 'VOUC_LIST', '核销明细', NULL, '核销明细', 1, 3, '2008-11-28 13:57:20', 3, '2008-11-28 13:57:20', 'HITI', 0, 0),
('运价表', 'B', 'xls', 32, 'PRSH_LIST', '运价表', NULL, '运价表', 1, 3, '2008-12-02 15:51:34', 3, '2008-12-02 15:51:34', 'HITI', 0, 0),
('配载清单', 'B', 'xls', 33, 'LOLI', '配载清单', NULL, '航次配载清单', 1, 3, '2009-01-02 23:24:28', 3, '2009-01-02 23:24:28', 'HITI', 0, 0),
('散货出口托运单', 'B', 'xls', 26, 'CONS_B', '订舱委托书', NULL, '散货出口托运单', 1, 3, '2009-02-13 00:00:00', 3, '2009-02-13 10:41:33', 'HITI', 1, 0),
('HYUNDAI BL', 'B', 'xls', 1, 'BL', '提单模板', NULL, 'HYUNDAI 提单模板', 1, 3, '2009-02-13 11:56:48', 3, '2009-02-13 11:56:48', 'HITI', 0, 0),
('费用确认单', 'B', 'xls', 34, 'EXPE_CONFIRM', '费用确认单', NULL, '费用确认单', 1, 3, '2009-02-16 14:05:57', 3, '2009-02-16 14:05:57', 'HITI', 0, 0),
('Nationality Of Ocean Vessel BL', 'B', 'xls', 1, 'BL', '提单模板', NULL, 'Nationality Of Ocean Vessel BL', 1, 3, '2009-02-17 11:07:49', 3, '2009-02-17 11:07:49', 'HITI', 0, 0),
('出口散货报关单', 'B', 'xls', 4, 'CUDE', '报关单模板', NULL, '出口散货报关单', 1, 3, '2009-02-17 12:27:37', 3, '2009-02-17 12:27:37', 'HITI', 0, 0),
('运价表', 'B', 'xls', 32, 'PRSH_LIST', '运价表', NULL, '运价表', 1, 3, '2009-02-19 15:05:02', 3, '2009-02-19 15:05:02', 'HITI', 0, 0),
('发货清单导入模板', 'B', 'xls', 35, 'PALI_IMPORT', '发货清单导入模板', NULL, '发货清单批量导入', 1, 2, '2009-02-24 20:35:22', 2, '2009-02-24 20:35:22', 'HITI', 0, 0),
('账单清单模板', 'B', 'xls', 36, 'INVO_LIST', '账单清单', NULL, '账单清单模板', 1, 3, '2009-03-22 20:50:02', 3, '2009-03-22 20:50:02', 'HITI', 0, 0),
('DebitNote模板', 'B', 'xls', 9, 'INVO', '发票模板', NULL, 'DebitNote模板', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', 'HITI', 0, 0);

--
-- 导出表中的数据 `S_EX_RATE`
--

INSERT INTO `S_EX_RATE` (`EXRA_BASE_CURRENCY`, `EXRA_EX_CURRENCY`, `EXRA_START_DATE`, `EXRA_END_DATE`, `EXRA_RATE`, `ACTIVE`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('USD', 'CNY', '2009-02-09', NULL, '6.8340', 1, 2, '2009-02-09 15:14:46', 'HITI', 0, 0),
('CNY', 'USD', '2009-02-09', NULL, '0.1463', 1, 2, '2009-02-09 15:14:46', 'HITI', 0, 0);

--
-- 导出表中的数据 `G_PORT`
--

INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('ALSAR', 'SARANDE', '萨兰达', 0, 1, 'AL', 0, 0, 'HITI'),
('ALSGN', 'SHENGJIN', '圣吉尼', 0, 1, 'AL', 0, 0, 'HITI'),
('ALVLO', 'VALONA', '发罗拉', 0, 1, 'AL', 0, 0, 'HITI'),
('ALDRS', 'DURRES', '都拉斯', 0, 1, 'AL', 0, 0, 'HITI'),
('TIRA', 'TIRANA', '', 0, 1, 'AL', 0, 0, 'HITI'),
('DZANN', 'ANNABA', '安纳巴', 0, 1, 'AL', 0, 0, 'HITI'),
('DZARZ', 'ARZEW', '阿尔泽', 0, 1, 'AL', 0, 0, 'HITI'),
('DZBEN', 'BENISAF', '贝尼萨夫', 0, 1, 'AL', 0, 0, 'HITI'),
('DZBJA', 'BEJAIA', '贝贾亚', 0, 1, 'AL', 0, 0, 'HITI'),
('DZCHE', 'CHERCHELL', '舍尔沙勒', 0, 1, 'AL', 0, 0, 'HITI'),
('DZCOL', 'COLLO', '科洛', 0, 1, 'AL', 0, 0, 'HITI'),
('DZDLS', 'DELLYS', '代利斯', 0, 1, 'AL', 0, 0, 'HITI'),
('DZELD', 'ALGIERS', '阿尔及尔', 0, 1, 'AL', 0, 0, 'HITI'),
('DZSKI', 'SKIKDA', '斯基克达', 0, 1, 'AL', 0, 0, 'HITI'),
('DZTEN', 'TENES', '提奈斯', 0, 1, 'AL', 0, 0, 'HITI'),
('DZWAH', 'ORAN', '瓦赫兰', 0, 1, 'AL', 0, 0, 'HITI'),
('ALDJI', 'DJIDJELLI', '吉杰利', 0, 1, 'AL', 0, 0, 'HITI'),
('ALGER', 'ALGER', '阿尔及尔', 0, 1, 'AL', 0, 0, 'HITI'),
('USPEN', 'PENSACOLA', '彭萨科拉', 0, 1, 'US', 0, 0, 'HITI'),
('USPET', 'PETERSBURG', '彼得斯堡', 0, 1, 'US', 0, 0, 'HITI'),
('USPEV', 'PORT EVERGLADES', '埃弗格雷斯港', 0, 1, 'US', 0, 0, 'HITI'),
('USPHI', 'PHILADELPHIA', '费城', 0, 1, 'US', 0, 0, 'HITI'),
('USPHU', 'PORT HUENEME', '怀尼米港', 0, 1, 'US', 0, 0, 'HITI'),
('USPIS', 'PORT ISABEL(US)', '伊萨贝尔港', 0, 1, 'US', 0, 0, 'HITI'),
('USPLB', 'PALM BEACH', '棕榈滩', 0, 1, 'US', 0, 0, 'HITI'),
('USPLD', 'PORTLAND(US)', '波特兰', 0, 1, 'US', 0, 0, 'HITI'),
('USPLY', 'PLYMOUTH(US)', '普列茅斯', 0, 1, 'US', 0, 0, 'HITI'),
('USPRE', 'PROVIDENCE', '普罗维登斯', 0, 1, 'US', 0, 0, 'HITI'),
('USPRO', 'PORT ROYAL(US)', '罗亚尔港', 0, 1, 'US', 0, 0, 'HITI'),
('USPSH', 'PORTSMOUTH(US)', '朴次茅斯', 0, 1, 'US', 0, 0, 'HITI'),
('USPSJ', 'PORT ST. JOE', '圣乔港', 0, 1, 'US', 0, 0, 'HITI'),
('USPSL', 'PORT SAN LUIS', '圣路易斯港', 0, 1, 'US', 0, 0, 'HITI'),
('USPSU', 'PORT SULPHUR', '萨尔弗港', 0, 1, 'US', 0, 0, 'HITI'),
('USPTO', 'PORT TOWNSEND', '汤森港', 0, 1, 'US', 0, 0, 'HITI'),
('USSAV', 'SAVANNAH(GA.)', '萨凡纳', 0, 1, 'US', 0, 0, 'HITI'),
('USSBA', 'SANTA BARBARA(US)', '圣巴巴拉', 0, 1, 'US', 0, 0, 'HITI'),
('USSDI', 'SAN DIEGO', '圣迭戈', 0, 1, 'US', 0, 0, 'HITI'),
('USSEA', 'SEATTLE,WA', '西雅图', 0, 1, 'US', 0, 0, 'HITI'),
('USSEW', 'SEWARD', '苏厄德', 0, 1, 'US', 0, 0, 'HITI'),
('USROC', 'ROCHESTER(US)', '罗切斯特', 0, 1, 'US', 0, 0, 'HITI'),
('USSAB', 'SABIN', '萨宾', 0, 1, 'US', 0, 0, 'HITI'),
('USSAC', 'SACRAMENTO', '萨克拉门托', 0, 1, 'US', 0, 0, 'HITI'),
('USSFO', 'SAN FRANCISCO', '旧金山', 0, 1, 'US', 0, 0, 'HITI'),
('USSPE', 'SAN PEDRO(U.S.A', '圣佩德罗', 0, 1, 'US', 0, 0, 'HITI'),
('USSPG', 'ST. PETERSBURG', '圣彼得斯堡', 0, 1, 'US', 0, 0, 'HITI'),
('USSPT', 'SEARSPORT', '锡斯波特', 0, 1, 'US', 0, 0, 'HITI'),
('USSTO', 'STOCKTO(US)', '斯托克顿', 0, 1, 'US', 0, 0, 'HITI'),
('USSWH', 'SANDWICH(US)', '桑德威奇', 0, 1, 'US', 0, 0, 'HITI'),
('USTAC', 'TACOMA,WA', '塔科马', 0, 1, 'US', 0, 0, 'HITI'),
('USTAM', 'TAMPA', '坦帕', 0, 1, 'US', 0, 0, 'HITI'),
('USTXC', 'TEXAS CITY', '得克萨斯城', 0, 1, 'US', 0, 0, 'HITI'),
('USVAL', 'VALDEZ', '瓦尔迪兹', 0, 1, 'US', 0, 0, 'HITI'),
('USVAN', 'VANCOUVER(US)', '温哥华', 0, 1, 'US', 0, 0, 'HITI'),
('USWAS', 'WASHINGTON(US)', '华盛顿', 0, 1, 'US', 0, 0, 'HITI'),
('USWIL', 'WILMINGTON(N.C)', '威尔明顿(北卡罗来)', 0, 1, 'US', 0, 0, 'HITI'),
('USWMN', 'WILMINGTON(DEL.', '威尔明顿(特拉华州)', 0, 1, 'US', 0, 0, 'HITI'),
('USWRA', 'WRANGELL', '兰格尔', 0, 1, 'US', 0, 0, 'HITI'),
('USFLR', 'FALL RIVER', '福尔里弗', 0, 1, 'US', 0, 0, 'HITI'),
('USFNA', 'FERNANDINA', '费南迪纳', 0, 1, 'US', 0, 0, 'HITI'),
('USFRE', 'FREEPORT(US)', '弗里波特', 0, 1, 'US', 0, 0, 'HITI'),
('USGAL', 'GALVESTON', '加尔维斯顿', 0, 1, 'US', 0, 0, 'HITI'),
('USGDH', 'GOOD HOPE(US)', '好望角', 0, 1, 'US', 0, 0, 'HITI'),
('USGEO', 'GEORGETOWN(US)', '乔治敦', 0, 1, 'US', 0, 0, 'HITI'),
('USGHN', 'GRAND HAVEN', '格兰德黑文', 0, 1, 'US', 0, 0, 'HITI'),
('USGRH', 'GRAYS HARBOUR', '格雷斯港', 0, 1, 'US', 0, 0, 'HITI'),
('USGUL', 'GULFPORT', '格尔夫波特', 0, 1, 'US', 0, 0, 'HITI'),
('USHMR', 'HOMER', '荷马', 0, 1, 'US', 0, 0, 'HITI'),
('USGLO', 'GLOUCESTER(MASS', '格洛斯特', 0, 1, 'US', 0, 0, 'HITI'),
('USGRB', 'GREEN BAY', '格林贝', 0, 1, 'US', 0, 0, 'HITI'),
('USHOP', 'HOPEWELL', '霍普韦尔', 0, 1, 'US', 0, 0, 'HITI'),
('USHOU', 'HOUSTON', '休斯敦', 0, 1, 'US', 0, 0, 'HITI'),
('USJAC', 'JACKSONVILLE', '杰克逊维尔', 0, 1, 'US', 0, 0, 'HITI'),
('USJUN', 'JUNEAU', '朱诺', 0, 1, 'US', 0, 0, 'HITI'),
('USKEN', 'KENOSHA', '基诺沙', 0, 1, 'US', 0, 0, 'HITI'),
('USKET', 'KETCHIKAN', '凯奇坎', 0, 1, 'US', 0, 0, 'HITI'),
('USLCS', 'LAKE CHARLES', '莱克查尔斯', 0, 1, 'US', 0, 0, 'HITI'),
('USLGB', 'LONG BEACH', '长滩', 0, 1, 'US', 0, 0, 'HITI'),
('USLON', 'LONGVIEW', '隆维尤', 0, 1, 'US', 0, 0, 'HITI'),
('USLOR', 'LORAIN', '洛雷恩', 0, 1, 'US', 0, 0, 'HITI'),
('USLSA', 'LOS ANGELES,CA', '洛杉矶', 0, 1, 'US', 0, 0, 'HITI'),
('USMAN', 'MANITOWOC', '马尼托沃克', 0, 1, 'US', 0, 0, 'HITI'),
('USMIA', 'MIAMI', '迈阿密', 0, 1, 'US', 0, 0, 'HITI'),
('USMOB', 'MOBILE', '莫比尔', 0, 1, 'US', 0, 0, 'HITI'),
('USMON', 'MONROE', '门罗', 0, 1, 'US', 0, 0, 'HITI'),
('USNET', 'NEWPORT(US)', '纽波特', 0, 1, 'US', 0, 0, 'HITI'),
('USNEW', 'NEW CASTLE(US)', '纽卡斯尔', 0, 1, 'US', 0, 0, 'HITI'),
('USNFK', 'NORFOLK(US)', '诺福克', 0, 1, 'US', 0, 0, 'HITI'),
('USNBE', 'NEW BEDFORD', '新贝德福德', 0, 1, 'US', 0, 0, 'HITI'),
('USNDN', 'NEW LONDON(CONN', '新伦敦', 0, 1, 'US', 0, 0, 'HITI'),
('USNHA', 'NEW HAVEN(US)', '纽黑文', 0, 1, 'US', 0, 0, 'HITI'),
('USNOL', 'NEW ORLEANS', '新奥尔良', 0, 1, 'US', 0, 0, 'HITI'),
('USNOM', 'NOME', '诺姆', 0, 1, 'US', 0, 0, 'HITI'),
('USNYK', 'NEW YORK,NY', '纽约', 0, 1, 'US', 0, 0, 'HITI'),
('USOAK', 'OAKLAND,CA', '奥克兰', 0, 1, 'US', 0, 0, 'HITI'),
('USORA', 'ORANGE', '奥兰治', 0, 1, 'US', 0, 0, 'HITI'),
('USPAN', 'PORT ANGELES', '安吉利斯港', 0, 1, 'US', 0, 0, 'HITI'),
('USPAR', 'PORT ARTHUR(US)', '阿瑟港', 0, 1, 'US', 0, 0, 'HITI'),
('USPAS', 'PASCAGOULA', '帕斯卡古拉', 0, 1, 'US', 0, 0, 'HITI'),
('ARCCO', 'CALETA CORDOVA', '科尔多瓦', 0, 1, 'US', 0, 0, 'HITI'),
('PHOEN', 'PHOENIX AZ SDD', '', 0, 1, 'US', 0, 0, 'HITI'),
('UMHON', 'HONOLULU', '火奴鲁鲁', 0, 1, 'US', 0, 0, 'HITI'),
('USALP', 'ALPENA', '阿尔皮纳', 0, 1, 'US', 0, 0, 'HITI'),
('USANA', 'ANACORTES', '阿纳科特斯', 0, 1, 'US', 0, 0, 'HITI'),
('USANC', 'ANCHORAGE', '安科雷奇', 0, 1, 'US', 0, 0, 'HITI'),
('USANN', 'ANNAPOLIS(US)', '安纳波利斯', 0, 1, 'US', 0, 0, 'HITI'),
('USAPA', 'APALACHICOLA', '阿巴拉契科拉', 0, 1, 'US', 0, 0, 'HITI'),
('USABE', 'ABERDEEN(US)', '阿伯丁', 0, 1, 'US', 0, 0, 'HITI'),
('USALB', 'ALBANY(US)', '奥尔巴尼', 0, 1, 'US', 0, 0, 'HITI'),
('USALE', 'ALEXANDRIA(US)', '亚历山德里亚', 0, 1, 'US', 0, 0, 'HITI'),
('USASD', 'ASHLAND', '阿什兰', 0, 1, 'US', 0, 0, 'HITI'),
('USASH', 'ASHTABULA', '阿什塔比拉', 0, 1, 'US', 0, 0, 'HITI'),
('USAST', 'ASTORIA', '阿斯托里亚', 0, 1, 'US', 0, 0, 'HITI'),
('USATO', 'ANTIOCH', '安蒂奥克', 0, 1, 'US', 0, 0, 'HITI'),
('USATR', 'ATRECO', '阿特雷科', 0, 1, 'US', 0, 0, 'HITI'),
('USBAL', 'BALTIMORE(US)', '巴尔的摩', 0, 1, 'US', 0, 0, 'HITI'),
('USBAN', 'BANGOR(ME.)', '班戈', 0, 1, 'US', 0, 0, 'HITI'),
('USBAT', 'BATH', '巴斯', 0, 1, 'US', 0, 0, 'HITI'),
('USBAY', 'BAY ROBERTS', '贝敦', 0, 1, 'US', 0, 0, 'HITI'),
('USBCN', 'BUCHANAN(US)', '布坎南', 0, 1, 'US', 0, 0, 'HITI'),
('USBEA', 'BEAUMONT', '博蒙特', 0, 1, 'US', 0, 0, 'HITI'),
('USBEL', 'BELLINGHAM', '贝灵哈姆', 0, 1, 'US', 0, 0, 'HITI'),
('USBER', 'BERKELEY', '伯克利', 0, 1, 'US', 0, 0, 'HITI'),
('USBOS', 'BOSTON(US)', '波士顿', 0, 1, 'US', 0, 0, 'HITI'),
('USBOY', 'BROOKLYN', '布鲁克林', 0, 1, 'US', 0, 0, 'HITI'),
('USBRE', 'BREMERTON', '布雷默顿', 0, 1, 'US', 0, 0, 'HITI'),
('USBRI', 'BRIDGEPORT', '布里奇波特', 0, 1, 'US', 0, 0, 'HITI'),
('USBRO', 'BROWNSVILLE', '布朗斯维尔', 0, 1, 'US', 0, 0, 'HITI'),
('USBRU', 'BRUNSWICK', '不伦瑞克', 0, 1, 'US', 0, 0, 'HITI'),
('USCAM', 'CAMDEN', '卡姆登', 0, 1, 'US', 0, 0, 'HITI'),
('USCAR', 'CARRABELLE', '卡拉贝尔', 0, 1, 'US', 0, 0, 'HITI'),
('USCGE', 'CAMBRIDGE', '剑桥', 0, 1, 'US', 0, 0, 'HITI'),
('USCHA', 'CHARLESTON', '查尔斯顿', 0, 1, 'US', 0, 0, 'HITI'),
('USCHC', 'CHESAPEAKE CITY', '切萨皮克城', 0, 1, 'US', 0, 0, 'HITI'),
('USCHE', 'CHEBOYGAN', '希博伊甘', 0, 1, 'US', 0, 0, 'HITI'),
('USBTR', 'BATON ROUGE', '巴吞鲁日', 0, 1, 'US', 0, 0, 'HITI'),
('USBUC', 'BUCKSPORT', '巴克斯波特', 0, 1, 'US', 0, 0, 'HITI'),
('USBUF', 'BUFFALO', '布法罗', 0, 1, 'US', 0, 0, 'HITI'),
('USCHI', 'CHICAGO', '芝加哥', 0, 1, 'US', 0, 0, 'HITI'),
('USCHR', 'CHESTER', '切斯特', 0, 1, 'US', 0, 0, 'HITI'),
('USCLE', 'CLEVELAND,OH', '克利夫兰', 0, 1, 'US', 0, 0, 'HITI'),
('USCME', 'CHALMETTE', '沙尔梅特', 0, 1, 'US', 0, 0, 'HITI'),
('USCOC', 'CORPUS CHRISTI', '科珀斯克里斯蒂', 0, 1, 'US', 0, 0, 'HITI'),
('USCOH', 'CONNEAUT HARBOU', '康尼奥特港', 0, 1, 'US', 0, 0, 'HITI'),
('USCOR', 'CORDOVA', '科尔多瓦', 0, 1, 'US', 0, 0, 'HITI'),
('USCRP', 'CHERRY POINT', '切里波因特（樱桃角）', 0, 1, 'US', 0, 0, 'HITI'),
('USCSB', 'COOS BAY', '库斯贝', 0, 1, 'US', 0, 0, 'HITI'),
('USCVT', 'CONVENT', '康文特', 0, 1, 'US', 0, 0, 'HITI'),
('USDUL', 'DULUTH', '德卢斯', 0, 1, 'US', 0, 0, 'HITI'),
('USDVT', 'DAVANT', '达文特', 0, 1, 'US', 0, 0, 'HITI'),
('USERI', 'ERIE', '伊利', 0, 1, 'US', 0, 0, 'HITI'),
('USESO', 'EL SEGUNDO', '埃尔塞贡多', 0, 1, 'US', 0, 0, 'HITI'),
('USEUR', 'EUREKA', '尤里卡', 0, 1, 'US', 0, 0, 'HITI'),
('USEVE', 'EVERETT(WASH.)', '埃弗里特', 0, 1, 'US', 0, 0, 'HITI'),
('USDEB', 'DELAWARE BAY', '德拉华湾', 0, 1, 'US', 0, 0, 'HITI'),
('USDES', 'DESTREHAN', '特斯特汉', 0, 1, 'US', 0, 0, 'HITI'),
('USDET', 'DETROIT', '底特律', 0, 1, 'US', 0, 0, 'HITI'),
('USDON', 'DONALDSONVILLE', '唐纳森维尔', 0, 1, 'US', 0, 0, 'HITI'),
('JMSLM', 'SAVANNA LA MAR', '滨海萨凡纳', 0, 1, 'US', 0, 0, 'HITI'),
('CAMAR', 'CAMARILLO', '', 0, 1, 'US', 0, 0, 'HITI'),
('VERNO', 'VERNON HILLS', '', 0, 1, 'US', 0, 0, 'HITI'),
('CHEL', 'CHELSEA MA (MLB)', '', 0, 1, 'US', 0, 0, 'HITI'),
('GBBER', 'BERWICK', '伯威克', 0, 1, 'US', 0, 0, 'HITI'),
('USDAL', 'DALLAS', '达拉斯', 0, 1, 'US', 0, 0, 'HITI'),
('USAL', 'ALAMEDA', '阿拉米达', 0, 1, 'US', 0, 0, 'HITI'),
('AMAN', 'ANACORTES', '安那柯的斯', 0, 1, 'US', 0, 0, 'HITI'),
('USATL', 'ATLANTA', '亚特兰大', 0, 1, 'US', 0, 0, 'HITI'),
('USALO', 'LAREDO,TX', '拉雷多', 0, 1, 'US', 0, 0, 'HITI'),
('USDEN', 'DENVER,CO', '', 0, 1, 'US', 0, 0, 'HITI'),
('USLOU', 'LOUISVILLE,KY', '', 0, 1, 'US', 0, 0, 'HITI'),
('USSTL', 'ST-LOUIS,MO', '圣陆易斯', 0, 1, 'US', 0, 0, 'HITI'),
('USCIN', 'CINCINNATI,OH', '新新那提', 0, 1, 'US', 0, 0, 'HITI'),
('USKNT', 'KENT,WA', '', 0, 1, 'US', 0, 0, 'HITI'),
('NEWOL', 'NEW ORLEANS,LA', '新奥尔良', 0, 1, 'US', 0, 0, 'HITI'),
('USCPN', 'COMPTON', '', 0, 1, 'US', 0, 0, 'HITI'),
('USCOI', 'CITY OF INDUSTRY', '工业城', 0, 1, 'US', 0, 0, 'HITI'),
('SPRIN', 'SPRINGFIELD', '密苏里洲', 0, 1, 'US', 0, 0, 'HITI'),
('USITN', 'IRVINGTON,NJ', '', 0, 1, 'US', 0, 0, 'HITI'),
('USCOL', 'COLUMBUS,OH', '哥伦布斯', 0, 1, 'US', 0, 0, 'HITI'),
('USKAN', 'KANSAS CITY,MO', '坎萨斯城', 0, 1, 'US', 0, 0, 'HITI'),
('USNAS', 'NASHVILLE,TN', '', 0, 1, 'US', 0, 0, 'HITI'),
('OMAHA', 'OMAHA,NE', '奥马哈', 0, 1, 'US', 0, 0, 'HITI'),
('LAKE', 'SALT LAKE CITY', '盐湖城', 0, 1, 'US', 0, 0, 'HITI'),
('HUNTS', 'HUNTSVILLE(AL)', '阿拉巴马洲', 0, 1, 'US', 0, 0, 'HITI'),
('ST.LO', 'ST.LOUIS(MO)', '密苏里洲', 0, 1, 'US', 0, 0, 'HITI'),
('TUCSO', 'TUCSON(AZ)', '亚利桑那洲', 0, 1, 'US', 0, 0, 'HITI'),
('TUOK', 'TULSA(OK)', '奥克拉马哈洲', 0, 1, 'US', 0, 0, 'HITI'),
('132', 'FORT WORTH', '', 0, 1, 'US', 0, 0, 'HITI'),
('SEA', 'SEATTLE', '西雅图', 0, 1, 'US', 0, 0, 'HITI'),
('USLO', 'LOS ANGELES', '洛杉机', 0, 1, 'US', 0, 0, 'HITI'),
('CALH', 'CALHOUN GA', '', 0, 1, 'US', 0, 0, 'HITI'),
('OXN', 'OXNARD', '奥克兰', 0, 1, 'US', 0, 0, 'HITI'),
('ELIZ', 'ELIZABETH', '伊利沙白港', 0, 1, 'US', 0, 0, 'HITI'),
('EL P', 'EL PASO', '埃尔帕索', 0, 1, 'US', 0, 0, 'HITI'),
('KNOX', 'KNOXVILLE(TN)', '田那西洲', 0, 1, 'US', 0, 0, 'HITI'),
('MINN', 'MINNEAPOLIS(MN)', '缅因洲', 0, 1, 'US', 0, 0, 'HITI'),
('ST.P', 'ST.PAUL(MN)', '缅因洲', 0, 1, 'US', 0, 0, 'HITI'),
('SGA', 'SOUTHGATE', '', 0, 1, 'US', 0, 0, 'HITI'),
('OAAK', 'OAKLAND', '奥克兰', 0, 1, 'US', 0, 0, 'HITI'),
('NPN', 'NEW PORTNEWS', '', 0, 1, 'US', 0, 0, 'HITI'),
('CNEW', 'NEW YORK', '纽约', 0, 1, 'US', 0, 0, 'HITI'),
('AOABZ', 'AMBRIZ', '安布里什', 0, 1, 'AO', 0, 0, 'HITI'),
('AOAMB', 'AMBRIZETE', '安布里泽特', 0, 1, 'AO', 0, 0, 'HITI'),
('AOBEN', 'BENGUELA', '本格拉', 0, 1, 'AO', 0, 0, 'HITI'),
('AOCAB', 'CABINDA', '卡宾达', 0, 1, 'AO', 0, 0, 'HITI'),
('AOLOB', 'LOBITO', '洛比托', 0, 1, 'AO', 0, 0, 'HITI'),
('AOLUA', 'LUANDA', '罗安达', 0, 1, 'AO', 0, 0, 'HITI'),
('AOMOC', 'MOCAMEDES', '木萨米迪什', 0, 1, 'AO', 0, 0, 'HITI'),
('AONRE', 'NOVO REDONDO', '新里东杜', 0, 1, 'AO', 0, 0, 'HITI'),
('ARPDE', 'PUERTO DESEADO', '德塞阿多港', 0, 1, 'AR', 0, 0, 'HITI'),
('ARPMA', 'PUERTO MADRYN', '马德林港', 0, 1, 'AR', 0, 0, 'HITI'),
('ARRGA', 'RIO GALLEGOS', '里奥加耶戈斯', 0, 1, 'AR', 0, 0, 'HITI'),
('ARROS', 'ROSARIO', '罗萨里奥', 0, 1, 'AR', 0, 0, 'HITI'),
('ARSFE', 'SANTA FE', '圣菲', 0, 1, 'AR', 0, 0, 'HITI'),
('ARSLO', 'SAN LORENZO(AR)', '圣洛伦索', 0, 1, 'AR', 0, 0, 'HITI'),
('ARSNS', 'SAN NICOLAS(AR)', '圣尼古拉斯', 0, 1, 'AR', 0, 0, 'HITI'),
('ARSPE', 'SAN PEDRO(AR)', '圣佩德罗', 0, 1, 'AR', 0, 0, 'HITI'),
('ARSSB', 'SAN SEBASTIAN B', '圣塞瓦斯蒂安', 0, 1, 'AR', 0, 0, 'HITI'),
('ARVCO', 'VILLA CONSTITUC', '孔斯蒂图西翁镇', 0, 1, 'AR', 0, 0, 'HITI'),
('ARZAR', 'ZARATE', '萨拉特', 0, 1, 'AR', 0, 0, 'HITI'),
('ACPDR', 'PUERTO DEL ROSAIO', '罗萨里奥港', 0, 1, 'AR', 0, 0, 'HITI'),
('ANSNB', 'SAN NICOLAS BAY', '圣尼古拉斯湾', 0, 1, 'AR', 0, 0, 'HITI'),
('ARBBL', 'BAHIA BLANCA', '布兰卡港', 0, 1, 'AR', 0, 0, 'HITI'),
('ARBNA', 'BUENOS AIRES', '布宜诺斯艾利斯', 0, 1, 'AR', 0, 0, 'HITI'),
('ARCAM', 'CAMPANA', '坎帕纳', 0, 1, 'AR', 0, 0, 'HITI'),
('ARCOR', 'COMODORO RIVADAVIA', '里瓦达维亚', 0, 1, 'AR', 0, 0, 'HITI'),
('ARLPL', 'LA PLATA', '拉普拉塔', 0, 1, 'AR', 0, 0, 'HITI'),
('ARMDP', 'MAR DEL PLATA', '马德普拉塔', 0, 1, 'AR', 0, 0, 'HITI'),
('ARNEC', 'NECOCHEA', '内科切阿', 0, 1, 'AR', 0, 0, 'HITI'),
('ARDES', 'DESEADO', '德塞阿多', 0, 1, 'AR', 0, 0, 'HITI'),
('ARYER', 'YEREVAN', '', 0, 1, 'AR', 0, 0, 'HITI'),
('CHACO', 'CHACO', '', 0, 1, 'AR', 0, 0, 'HITI'),
('VANA', 'VANADZOR', '', 0, 1, 'AM', 0, 0, 'HITI'),
('AUADE', 'ADELAIDE', '阿德莱德', 0, 1, 'AU', 0, 0, 'HITI'),
('AUALB', 'ALBANY(AU)', '奥尔巴尼', 0, 1, 'AU', 0, 0, 'HITI'),
('AUARD', 'ARDROSSAN(AU)', '阿德罗森', 0, 1, 'AU', 0, 0, 'HITI'),
('AUBAI', 'BARROW ISLAND(A', '巴罗岛', 0, 1, 'AU', 0, 0, 'HITI'),
('AUBDG', 'BUNDABERG', '班达伯格', 0, 1, 'AU', 0, 0, 'HITI'),
('AUBLB', 'BELL BAY', '皮尔湾', 0, 1, 'AU', 0, 0, 'HITI'),
('AUBNE', 'BURNIE', '伯尼', 0, 1, 'AU', 0, 0, 'HITI'),
('AUBOW', 'BOWEN', '鲍恩', 0, 1, 'AU', 0, 0, 'HITI'),
('AUBRI', 'BRISBANE', '布里斯班', 0, 1, 'AU', 0, 0, 'HITI'),
('AUBRO', 'BROOME', '布鲁姆', 0, 1, 'AU', 0, 0, 'HITI'),
('AUBTB', 'BOTANY BAY', '博物学家角', 0, 1, 'AU', 0, 0, 'HITI'),
('AUBUN', 'BUNBURY', '班伯里', 0, 1, 'AU', 0, 0, 'HITI'),
('AUBUS', 'BUSSELTON', '巴瑟尔顿', 0, 1, 'AU', 0, 0, 'HITI'),
('AUCA', 'CARNARVON', '卡那封', 0, 1, 'AU', 0, 0, 'HITI'),
('AUDBY', 'COCKATOO', '德比', 0, 1, 'AU', 0, 0, 'HITI'),
('AUDEV', 'DEVONPORT', '德文波特', 0, 1, 'AU', 0, 0, 'HITI'),
('AUDPR', 'DAMPIER', '丹皮尔', 0, 1, 'AU', 0, 0, 'HITI'),
('AUDWN', 'DARWIN', '达尔文', 0, 1, 'AU', 0, 0, 'HITI'),
('AUEDI', 'EDITHBURGH', '伊迪斯堡', 0, 1, 'AU', 0, 0, 'HITI'),
('AUCLT', 'CAPE LAMBERT', '拉姆贝特角', 0, 1, 'AU', 0, 0, 'HITI'),
('AUCNS', 'CAIRNS', '凯恩斯', 0, 1, 'AU', 0, 0, 'HITI'),
('AUCOO', 'COOKTOWN', '库克敦', 0, 1, 'AU', 0, 0, 'HITI'),
('AUCFH', 'COFF''S HARBOUR', '科夫斯港', 0, 1, 'AU', 0, 0, 'HITI'),
('AUEDN', 'EDEN', '伊登', 0, 1, 'AU', 0, 0, 'HITI'),
('AUESP', 'ESPERANCE', '埃斯佩兰斯', 0, 1, 'AU', 0, 0, 'HITI'),
('AUFRE', 'FREMANTLE', '弗里曼特尔', 0, 1, 'AU', 0, 0, 'HITI'),
('AUGEE', 'GEELONG', '吉朗', 0, 1, 'AU', 0, 0, 'HITI'),
('AUGER', 'GERALDTON', '杰拉尔顿', 0, 1, 'AU', 0, 0, 'HITI'),
('AUGET', 'GROOTE EYLANDT', '格鲁特岛', 0, 1, 'AU', 0, 0, 'HITI'),
('AUGLA', 'GLADSTONE(W.A.)', '格拉德斯通', 0, 1, 'AU', 0, 0, 'HITI'),
('AUGLE', 'GLADSTONE(QUE)', '格拉德斯通（东）', 0, 1, 'AU', 0, 0, 'HITI'),
('AUGRA', 'GRAFTON', '格拉夫顿', 0, 1, 'AU', 0, 0, 'HITI'),
('AUHBT', 'HOBART', '霍巴特', 0, 1, 'AU', 0, 0, 'HITI'),
('AUKIN', 'KINGSTON(AU)', '金斯敦', 0, 1, 'AU', 0, 0, 'HITI'),
('AULUC', 'LUCINDA', '卢辛达', 0, 1, 'AU', 0, 0, 'HITI'),
('AUMAR', 'MARYBOROUGH', '马里伯勒', 0, 1, 'AU', 0, 0, 'HITI'),
('AUMEL', 'MELBOURNE', '墨尔本', 0, 1, 'AU', 0, 0, 'HITI'),
('AUNEW', 'NEWCASTLE(N.S.W', '纽卡斯尔', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPAA', 'PORT ALMA', '阿尔马港', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPAD', 'Port Adelaide', '阿德莱德港', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPAL', 'PORT ALFRED(AU)', '艾尔弗雷德港', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPAU', 'PORT AUGUSTA', '奥古斯塔港', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPHE', 'PORT HEDLAND', '黑德兰港', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPLD', 'PORTLAND(AUS)', '波特兰', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPLI', 'PORT LINCOLN', '林肯港', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPMA', 'PORT MACGUARIE', '麦夸里港', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPST', 'PORT STANVAC', '斯坦瓦克港', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPWA', 'PORT WALCOTT', '澳尔科特港', 0, 1, 'AU', 0, 0, 'HITI'),
('AUROC', 'ROCKHAMPTON', '罗克汉普顿', 0, 1, 'AU', 0, 0, 'HITI'),
('AUTHU', 'THURSDAY ISLAND', '星期四岛', 0, 1, 'AU', 0, 0, 'HITI'),
('AUTVD', 'THEVENARD', '泰弗纳德', 0, 1, 'AU', 0, 0, 'HITI'),
('AUWAL', 'WALLAROO', '沃拉鲁', 0, 1, 'AU', 0, 0, 'HITI'),
('AUWDM', 'WYNDHAM', '温德姆', 0, 1, 'AU', 0, 0, 'HITI'),
('AUWHY', 'WHYALLA', '怀阿拉', 0, 1, 'AU', 0, 0, 'HITI'),
('AUURA', 'URANGAN', '尤兰根', 0, 1, 'AU', 0, 0, 'HITI'),
('AUWPA', 'WEIPA', '韦帕', 0, 1, 'AU', 0, 0, 'HITI'),
('AUYSD', 'YAMPI SOUND', '扬皮桑德', 0, 1, 'AU', 0, 0, 'HITI'),
('AEMUI', 'Mubarras lsland', '穆巴腊角', 0, 1, 'AU', 0, 0, 'HITI'),
('AUPER', 'PERTH (AU)', '佩斯', 0, 1, 'AU', 0, 0, 'HITI'),
('AUARG', 'SALZBURG', '萨尔茨堡', 0, 1, 'AU', 0, 0, 'HITI'),
('DAVE', 'DAVENPORT', '', 0, 1, 'AU', 0, 0, 'HITI'),
('SYDE', 'SYDNEY(AU)', '悉尼', 0, 1, 'AU', 0, 0, 'HITI'),
('GRAZ', 'GRAZ', '', 0, 1, 'AU', 0, 0, 'HITI'),
('CANB', 'CANBERRA', '堪培拉', 0, 1, 'AU', 0, 0, 'HITI'),
('ATVIE', 'VIENNA', '维也纳', 0, 1, 'AT', 0, 0, 'HITI'),
('ATSAL', 'SALZBERG', '', 0, 1, 'AT', 0, 0, 'HITI'),
('AIKOR', 'KORLACH', '', 0, 1, 'AT', 0, 0, 'HITI'),
('AIKUF', 'KUFSTEIN', '', 0, 1, 'AT', 0, 0, 'HITI'),
('AILIZ', 'LINZ', '', 0, 1, 'AT', 0, 0, 'HITI'),
('AUFUR', 'FURNITZ', '', 0, 1, 'AT', 0, 0, 'HITI'),
('MESS', 'MESSENDORF', '', 0, 1, 'AT', 0, 0, 'HITI'),
('WEL', 'WELS', '', 0, 1, 'AT', 0, 0, 'HITI'),
('WIEN', 'WIEN-NORDWEST', '', 0, 1, 'AT', 0, 0, 'HITI'),
('WIEF', 'WIEN-FREUDENAU', '', 0, 1, 'AT', 0, 0, 'HITI'),
('VISU', 'VILLACH-SUED', '', 0, 1, 'AT', 0, 0, 'HITI'),
('WOLF', 'WOLFURT', '', 0, 1, 'AT', 0, 0, 'HITI'),
('BABAH', 'BAHRAIN', '巴林', 0, 1, 'BH', 0, 0, 'HITI'),
('BDCNA', 'CHALNA', '查尔钠港', 0, 1, 'BD', 0, 0, 'HITI'),
('BDCTG', 'CHITTAGONG', '吉大港', 0, 1, 'BD', 0, 0, 'HITI'),
('BDKHU', 'KHULNA', '库尔纳', 0, 1, 'BD', 0, 0, 'HITI'),
('BDMON', 'MONGLA', '蒙加拉', 0, 1, 'BD', 0, 0, 'HITI'),
('BADHA', 'DHAKA', '达卡', 0, 1, 'BD', 0, 0, 'HITI'),
('MODCC', 'DACCA', '达卡', 0, 1, 'BD', 0, 0, 'HITI'),
('ICD', 'ICD KAMALAPUR', '', 0, 1, 'BD', 0, 0, 'HITI'),
('BBBTN', 'BRIDGETOWN', '布里奇敦', 0, 1, 'BB', 0, 0, 'HITI'),
('BEANT', 'ANTWERP', '安特卫普', 0, 1, 'BE', 0, 0, 'HITI'),
('BEBRS', 'BRUGES', '布鲁日', 0, 1, 'BE', 0, 0, 'HITI'),
('BEBRU', 'BRUSSELS', '布鲁塞尔', 0, 1, 'BE', 0, 0, 'HITI'),
('BELGE', 'LIEGE', '列日', 0, 1, 'BE', 0, 0, 'HITI'),
('BENIE', 'NIEUWPOORT', '尼乌波特', 0, 1, 'BE', 0, 0, 'HITI'),
('BEOST', 'OSTEND', '奥斯坦德', 0, 1, 'BE', 0, 0, 'HITI'),
('BEZEE', 'ZEEBRUGGE', '泽布吕赫', 0, 1, 'BE', 0, 0, 'HITI'),
('BEGEN', 'GENT', '根特', 0, 1, 'BE', 0, 0, 'HITI'),
('BJCOT', 'COTONOU', '科托努', 0, 1, 'BJ', 0, 0, 'HITI'),
('BJPNO', 'PORTO NOVO(BJ)', '波多诺伏', 0, 1, 'BJ', 0, 0, 'HITI'),
('BMHAM', 'HAMILTON(BM)', '哈密尔顿', 0, 1, 'BM', 0, 0, 'HITI'),
('BMSGE', 'ST. GEORGE''S', '圣乔治', 0, 1, 'BM', 0, 0, 'HITI'),
('GDSGE', 'ST. GEORGE', '圣乔治', 0, 1, 'BM', 0, 0, 'HITI'),
('MXLPZ', 'LA PAZ', '拉巴斯', 0, 1, 'BO', 0, 0, 'HITI'),
('BOGNE', 'GABERONE', '', 0, 1, 'BW', 0, 0, 'HITI'),
('GBE', 'GABORONE', '哈博罗内', 0, 1, 'BW', 0, 0, 'HITI'),
('ARRGR', 'RIO GRANDE(AR)', '里奥格兰德', 0, 1, 'BR', 0, 0, 'HITI'),
('BRAJU', 'ARACAJU', '阿拉卡茹', 0, 1, 'BR', 0, 0, 'HITI'),
('BRATI', 'ARACATI', '阿拉卡蒂', 0, 1, 'BR', 0, 0, 'HITI'),
('BRFLO', 'FLORIANOPOLIS', '弗洛里亚诺波利斯', 0, 1, 'BR', 0, 0, 'HITI'),
('BRFOR', 'FORTALEZA', '福塔莱萨', 0, 1, 'BR', 0, 0, 'HITI'),
('BRIJI', 'ITAJAI', '伊塔雅伊', 0, 1, 'BR', 0, 0, 'HITI'),
('BRBLM', 'BELEM(BR)', '贝伦', 0, 1, 'BR', 0, 0, 'HITI'),
('BRIQI', 'ITAQUI', '伊塔基', 0, 1, 'BR', 0, 0, 'HITI'),
('BRIUS', 'ILHEUS', '伊列乌斯', 0, 1, 'BR', 0, 0, 'HITI'),
('BRNAT', 'NATAL', '纳塔尔', 0, 1, 'BR', 0, 0, 'HITI'),
('BRNIT', 'NITEROI', '尼泰罗伊', 0, 1, 'BR', 0, 0, 'HITI'),
('BRPAL', 'PORTO ALEGRE', '阿雷格里港', 0, 1, 'BR', 0, 0, 'HITI'),
('BRPAR', 'PARANAGUA', '巴拉那瓜', 0, 1, 'BR', 0, 0, 'HITI'),
('BRPBA', 'PARNAIBA', '巴纳伊巴', 0, 1, 'BR', 0, 0, 'HITI'),
('BRMAC', 'MACEIO', '马塞约', 0, 1, 'BR', 0, 0, 'HITI'),
('BRMAN', 'MANAUS', '马瑙斯', 0, 1, 'BR', 0, 0, 'HITI'),
('BRMPA', 'MACAPA', '马卡帕', 0, 1, 'BR', 0, 0, 'HITI'),
('BRJPA', 'JOAO PESSOA', '若昂佩索阿', 0, 1, 'BR', 0, 0, 'HITI'),
('BRPEL', 'PELOTAS', '佩洛塔斯', 0, 1, 'BR', 0, 0, 'HITI'),
('BRRDJ', 'RIO DE JANEIRO', '里约热内卢', 0, 1, 'BR', 0, 0, 'HITI'),
('BRREC', 'RECIFE', '累西腓', 0, 1, 'BR', 0, 0, 'HITI'),
('BRSAL', 'SALVADOR', '萨尔瓦多', 0, 1, 'BR', 0, 0, 'HITI'),
('BRSFS', 'SANTO FRANCISCO DO SUL', '南圣弗兰西斯科', 0, 1, 'BR', 0, 0, 'HITI'),
('BRSPA', 'SAO PAULO', '圣保罗', 0, 1, 'BR', 0, 0, 'HITI'),
('BRSSE', 'SAO SEBASTIAO', '圣塞巴斯蒂昂', 0, 1, 'BR', 0, 0, 'HITI'),
('BRSTA', 'SANTANA', '圣安娜', 0, 1, 'BR', 0, 0, 'HITI'),
('BRSLM', 'SAO LUIZ DE MAR', '圣路易斯', 0, 1, 'BR', 0, 0, 'HITI'),
('BRSTM', 'SANTAREM', '圣塔伦', 0, 1, 'BR', 0, 0, 'HITI'),
('BRSTS', 'SANTOS', '桑托斯', 0, 1, 'BR', 0, 0, 'HITI'),
('BRTUB', 'TUBARAO', '图巴朗', 0, 1, 'BR', 0, 0, 'HITI'),
('BRVIC', 'VICTORIA', '维多利亚', 0, 1, 'BR', 0, 0, 'HITI'),
('BRAN', 'ANTONINA', '安托尼纳', 0, 1, 'BR', 0, 0, 'HITI'),
('BRSFD', 'SAN FRANCISCO DO SUL', '', 0, 1, 'BR', 0, 0, 'HITI'),
('BRSAO', 'SAO FRANCISCO DO SUL', '', 0, 1, 'BR', 0, 0, 'HITI'),
('PECEM', 'PECEM', '', 0, 1, 'BR', 0, 0, 'HITI'),
('BNBSB', 'BANDAR SERI BEGAWAN', '斯里巴加湾港', 0, 1, 'BN', 0, 0, 'HITI'),
('BNKBT', 'KUALA BELAIT', '白拉奕', 0, 1, 'BN', 0, 0, 'HITI'),
('BNSER', 'SERIA', '诗里亚', 0, 1, 'BN', 0, 0, 'HITI'),
('BRBR', 'BRUNEI', '文莱', 0, 1, 'BN', 0, 0, 'HITI'),
('MUA', 'MUARA', '穆阿拉', 0, 1, 'BN', 0, 0, 'HITI'),
('BGBAL', 'BALCHIK', '巴尔奇克', 0, 1, 'BG', 0, 0, 'HITI'),
('BGBGS', 'BOURGAS', '布加斯', 0, 1, 'BG', 0, 0, 'HITI'),
('BGKAV', 'KAVARNA', '卡瓦尔纳', 0, 1, 'BG', 0, 0, 'HITI'),
('BGMIC', 'MICHURIN', '米丘林', 0, 1, 'BG', 0, 0, 'HITI'),
('BGNES', 'NESSEBAR', '纳塞巴尔', 0, 1, 'BG', 0, 0, 'HITI'),
('BGVAR', 'VARNA', '瓦尔纳', 0, 1, 'BG', 0, 0, 'HITI'),
('BUSOF', 'SOFIA', '索非亚', 0, 1, 'BG', 0, 0, 'HITI'),
('BUBUR', 'BURGAS', '布尔加斯', 0, 1, 'BG', 0, 0, 'HITI'),
('PLOV', 'PLOVDIV', '', 0, 1, 'BG', 0, 0, 'HITI'),
('MMAKY', 'AKYAB', '阿恰布', 0, 1, 'MM', 0, 0, 'HITI'),
('MMBSN', 'BASSEIN', '勃生', 0, 1, 'MM', 0, 0, 'HITI'),
('MMMOU', 'MOULMEIN', '毛淡棉', 0, 1, 'MM', 0, 0, 'HITI'),
('BUSI', 'SITTWE', '实兑', 0, 1, 'MM', 0, 0, 'HITI'),
('YAN', 'YANGON', '仰光', 0, 1, 'MM', 0, 0, 'HITI'),
('CMDUA', 'DOUALA', '杜阿拉', 0, 1, 'CM', 0, 0, 'HITI'),
('CO', 'KRIBI', '克里比', 0, 1, 'CM', 0, 0, 'HITI'),
('GNVIC', 'VICTORIA(GN)', '维多利亚', 0, 1, 'CM', 0, 0, 'HITI'),
('CADAL', 'DALHOUSIE', '达尔豪西', 0, 1, 'CA', 0, 0, 'HITI'),
('CADIG', 'DIGBY', '迪格比', 0, 1, 'CA', 0, 0, 'HITI'),
('CADWL', 'DINGWALL(CA)', '丁沃尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CAESQ', 'ESQUIMALT', '埃斯奎莫尔特', 0, 1, 'CA', 0, 0, 'HITI'),
('CAFOR', 'FORESTVILLE', '福雷斯特维尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CAGAS', 'GASPE', '加斯佩', 0, 1, 'CA', 0, 0, 'HITI'),
('CAGBK', 'GRAND BANK', '格兰德班克', 0, 1, 'CA', 0, 0, 'HITI'),
('CAGEO', 'GEORGETOWN(CA)', '乔治敦', 0, 1, 'CA', 0, 0, 'HITI'),
('CAGOD', 'GODERICH', '戈德里奇', 0, 1, 'CA', 0, 0, 'HITI'),
('CAGSB', 'GOOSE BAY', '古斯湾', 0, 1, 'CA', 0, 0, 'HITI'),
('CAHAM', 'HAMILTON(CA)', '哈密尔顿', 0, 1, 'CA', 0, 0, 'HITI'),
('CAHAN', 'HANTSPORT', '汉茨波特', 0, 1, 'CA', 0, 0, 'HITI'),
('CAHCT', 'HEART''S CONTENT', '哈茨康滕特', 0, 1, 'CA', 0, 0, 'HITI'),
('CAHFX', 'HALIFAX', '哈利法克斯', 0, 1, 'CA', 0, 0, 'HITI'),
('CAHGR', 'HARBOUR GRACE', '格雷斯港', 0, 1, 'CA', 0, 0, 'HITI'),
('CAKIN', 'KINGSTON(CA)', '金斯顿', 0, 1, 'CA', 0, 0, 'HITI'),
('CAKIT', 'KITIMAT', '基提马特', 0, 1, 'CA', 0, 0, 'HITI'),
('CALAH', 'LA HAVE', '勒黑夫', 0, 1, 'CA', 0, 0, 'HITI'),
('CALEA', 'LEAMINGTON', '利明顿', 0, 1, 'CA', 0, 0, 'HITI'),
('CALIV', 'LIVERPOOL(CA)', '利物浦', 0, 1, 'CA', 0, 0, 'HITI'),
('CALOC', 'LOCKEPORT', '洛克波特', 0, 1, 'CA', 0, 0, 'HITI'),
('CALOU', 'LOUISBURG', '路易斯堡', 0, 1, 'CA', 0, 0, 'HITI'),
('CALSC', 'LIS COMB', '利斯科姆', 0, 1, 'CA', 0, 0, 'HITI'),
('CALUN', 'LUNENBURG', '卢嫩堡', 0, 1, 'CA', 0, 0, 'HITI'),
('CAMAT', 'MATANE', '马塔讷', 0, 1, 'CA', 0, 0, 'HITI'),
('CAMET', 'METEGHAN', '梅泰根', 0, 1, 'CA', 0, 0, 'HITI'),
('CAMID', 'MIDLAND(ONT.)', '米德兰', 0, 1, 'CA', 0, 0, 'HITI'),
('CAMLS', 'MONT LOUIS', '蒙路易', 0, 1, 'CA', 0, 0, 'HITI'),
('CAMTL', 'MONTREAL', '蒙特利尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CANSY', 'NORTH SYDNEY', '北锡德尼', 0, 1, 'CA', 0, 0, 'HITI'),
('CANWE', 'NEW WESTMINSTER', '新威斯敏斯特', 0, 1, 'CA', 0, 0, 'HITI'),
('CAOAK', 'OAKVILLE(ONT.)', '奥克维尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CAOFS', 'OCEAN FALLS', '福尔斯海', 0, 1, 'CA', 0, 0, 'HITI'),
('CAOSD', 'OWEN SOUND', '欧文桑德', 0, 1, 'CA', 0, 0, 'HITI'),
('CANEW', 'NEWCASTLE(N.B.)', '纽卡斯尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CANGL', 'NEW GLASGOW', '新格拉斯哥', 0, 1, 'CA', 0, 0, 'HITI'),
('CANMO', 'NANAIMO', '纳奈莫', 0, 1, 'CA', 0, 0, 'HITI'),
('CAOSH', 'OSHAWA(ONT.)', '奥沙瓦', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPAD', 'PORT ALFRED(CA)', '艾尔夫雷德港', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPAE', 'PORT ALICE', '艾利斯港', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPAR', 'PARRSBORO', '帕斯博勒', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPAS', 'PASPEBIAC', '帕斯佩比亚克', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPCA', 'PORT CARTIER', '卡提尔港', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPCO', 'PORT COLBORNE(O', '科尔本港', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPCR', 'PORT CREDIT(ONT', '克雷迪特港', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPHA', 'PORT HAWKESBURY', '霍克斯伯里港', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPHO', 'PORT HOPE(ONT.)', '霍普港', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPIC', 'PICTOU', '皮克图', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPME', 'PORT MEDWAY', '梅德韦港', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPOR', 'POWELL RIVER', '鲍威尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPRE', 'PRESCOTT(CA)', '普雷斯科特', 0, 1, 'CA', 0, 0, 'HITI'),
('CAPSD', 'PARRY SOUND', '帕里桑德', 0, 1, 'CA', 0, 0, 'HITI'),
('CAQBC', 'QUEBEC', '魁北克', 0, 1, 'CA', 0, 0, 'HITI'),
('CARDL', 'RIVIERE DU LOUP', '里维耶尔－迪卢', 0, 1, 'CA', 0, 0, 'HITI'),
('AGSJS', 'ST. JOHNS(AG)', '圣约翰斯', 0, 1, 'CA', 0, 0, 'HITI'),
('CASAN', 'ST. ANDREWS(CA)', '圣安德鲁斯', 0, 1, 'CA', 0, 0, 'HITI'),
('CASAR', 'SARNIA(ONT.)', '萨尔尼亚', 0, 1, 'CA', 0, 0, 'HITI'),
('CASDC', 'SHEDIAC', '谢迪艾克', 0, 1, 'CA', 0, 0, 'HITI'),
('CASHE', 'SHELBURNE(N.S.)', '谢尔本', 0, 1, 'CA', 0, 0, 'HITI'),
('CASHI', 'SHIPPEGAN', '希皮根', 0, 1, 'CA', 0, 0, 'HITI'),
('CASPR', 'SPRINGDALE', '斯普林代尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CASRL', 'SORLE', '索雷尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CASSM', 'SAULT STE. MARI', '苏圣马丽', 0, 1, 'CA', 0, 0, 'HITI'),
('CASTH', 'SHEET HARBOUR', '希特港', 0, 1, 'CA', 0, 0, 'HITI'),
('CASTT', 'STEWART', '斯图尔特', 0, 1, 'CA', 0, 0, 'HITI'),
('CASUM', 'SUMMERSIDE', '萨默塞德', 0, 1, 'CA', 0, 0, 'HITI'),
('CASYD', 'SYDNEY(CA)', '悉尼', 0, 1, 'CA', 0, 0, 'HITI'),
('CATAD', 'TADUSSAC', '塔杜萨克', 0, 1, 'CA', 0, 0, 'HITI'),
('CATHO', 'THOROLD', '索罗尔德', 0, 1, 'CA', 0, 0, 'HITI'),
('CATHR', 'THREE RIVERS', '三河城', 0, 1, 'CA', 0, 0, 'HITI'),
('CATWI', 'TWILLINGATE', '特威林盖特', 0, 1, 'CA', 0, 0, 'HITI'),
('CAVCR', 'VANCOUVER,CANADA', '温哥华', 0, 1, 'CA', 0, 0, 'HITI'),
('CAVIC', 'VICTORIA(CA)', '维多利亚', 0, 1, 'CA', 0, 0, 'HITI'),
('CAWEY', 'WEYMOUTH(CA)', '韦默思', 0, 1, 'CA', 0, 0, 'HITI'),
('CAWOO', 'WOODFIBRE', '伍德菲伯', 0, 1, 'CA', 0, 0, 'HITI'),
('CAYAR', 'YARMOUTH(CA)', '雅茅思', 0, 1, 'CA', 0, 0, 'HITI'),
('CAAKL', 'AKLAVIK', '阿克拉维克', 0, 1, 'CA', 0, 0, 'HITI'),
('CAAMH', 'AMHERSTBURG', '阿默斯特堡', 0, 1, 'CA', 0, 0, 'HITI'),
('CAANN', 'ANNAPOLIS(CA)', '安纳波利斯', 0, 1, 'CA', 0, 0, 'HITI'),
('CAARI', 'ARICHAT', '阿里沙特', 0, 1, 'CA', 0, 0, 'HITI'),
('CAAST', 'AMHERST', '阿默斯特', 0, 1, 'CA', 0, 0, 'HITI'),
('CABAT', 'BATHURST', '巴瑟斯特', 0, 1, 'CA', 0, 0, 'HITI'),
('CABOT', 'BOTWOOD', '博特伍德', 0, 1, 'CA', 0, 0, 'HITI'),
('CABRI', 'BRIDGEWATER', '布里奇沃特', 0, 1, 'CA', 0, 0, 'HITI'),
('CABRO', 'BROCKVILLE(ONT.', '布罗克维尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CABRS', 'BAY ROBERTS', '贝罗伯茨', 0, 1, 'CA', 0, 0, 'HITI'),
('CABUC', 'BUCTOUCHE', '巴克图什', 0, 1, 'CA', 0, 0, 'HITI'),
('CACAM', 'CAMPBELLTON', '坎贝尔顿', 0, 1, 'CA', 0, 0, 'HITI'),
('CACAR', 'CARLETON', '卡尔顿', 0, 1, 'CA', 0, 0, 'HITI'),
('CACHA', 'CHARLOTTETOWN(N', '夏洛特敦', 0, 1, 'CA', 0, 0, 'HITI'),
('CACHE', 'CHEMAINUS', '彻梅纳斯', 0, 1, 'CA', 0, 0, 'HITI'),
('CACHI', 'CHICOUTIMI', '希库提米', 0, 1, 'CA', 0, 0, 'HITI'),
('CACHU', 'CHURCHILL(MAN.)', '丘吉尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CACLA', 'CLARENVILLE', '克拉伦维尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CACMX', 'COMOX', '科莫克斯', 0, 1, 'CA', 0, 0, 'HITI'),
('CACOB', 'COBOURG(ONT.)', '科堡', 0, 1, 'CA', 0, 0, 'HITI'),
('CACOL', 'COLLINGWOOD', '科灵伍德', 0, 1, 'CA', 0, 0, 'HITI'),
('CACON', 'CONTRECOEUR', '孔特勒科尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CACOR', 'CORNWALL(ONT.)', '康沃尔', 0, 1, 'CA', 0, 0, 'HITI'),
('CACQT', 'CARAQUET', '卡拉凯特', 0, 1, 'CA', 0, 0, 'HITI'),
('CACRO', 'CROFTON', '克罗夫顿', 0, 1, 'CA', 0, 0, 'HITI'),
('CACSH', 'CANSO HARBOUR', '坎索港', 0, 1, 'CA', 0, 0, 'HITI'),
('CACTM', 'CHATHAM', '查塔姆', 0, 1, 'CA', 0, 0, 'HITI'),
('CACTP', 'CHETICAMP', '谢蒂坎普', 0, 1, 'CA', 0, 0, 'HITI'),
('CACWB', 'COWICHAN BAY', '科威恰湾', 0, 1, 'CA', 0, 0, 'HITI'),
('CABAB', 'BABBECK', '巴德克', 0, 1, 'CA', 0, 0, 'HITI'),
('CABAJ', 'BAJE COMEAU', '贝科莫', 0, 1, 'CA', 0, 0, 'HITI'),
('CAEDM', 'EDMONTON', '埃德蒙顿', 0, 1, 'CA', 0, 0, 'HITI'),
('CACA', 'CALGARY', '卡达加里', 0, 1, 'CA', 0, 0, 'HITI'),
('CASAS', 'SASKATOON', '', 0, 1, 'CA', 0, 0, 'HITI'),
('CATRO', 'TORONTO', '多伦多', 0, 1, 'CA', 0, 0, 'HITI'),
('ADA', 'TORONTO,CANADA', '多伦多', 0, 1, 'CA', 0, 0, 'HITI'),
('CAWEG', 'WINNIPEG', '温尼伯', 0, 1, 'CA', 0, 0, 'HITI'),
('CAREG', 'REGINA', '里贾那', 0, 1, 'CA', 0, 0, 'HITI'),
('MIL', 'MILTON', '', 0, 1, 'CA', 0, 0, 'HITI'),
('GAL', 'GALGARY', '', 0, 1, 'CA', 0, 0, 'HITI'),
('CLACD', 'ANCUD', '安库德', 0, 1, 'CL', 0, 0, 'HITI'),
('CLANT', 'ANTOFAGASTA', '安托法加斯塔', 0, 1, 'CL', 0, 0, 'HITI'),
('CLARI', 'ARICA', '阿里卡', 0, 1, 'CL', 0, 0, 'HITI'),
('CLCAL', 'CALDERA', '卡尔德拉', 0, 1, 'CL', 0, 0, 'HITI'),
('CLCAS', 'CASTRO', '卡斯特罗', 0, 1, 'CL', 0, 0, 'HITI'),
('CLCCA', 'CAL. CLARENCIA', '克拉伦西亚', 0, 1, 'CL', 0, 0, 'HITI'),
('CLCGR', 'CRUZ GRANDE', '克鲁斯格兰德', 0, 1, 'CL', 0, 0, 'HITI'),
('CLCHL', 'CHANARAL', '查尼亚拉尔', 0, 1, 'CL', 0, 0, 'HITI'),
('CLCLA', 'CALDERILLA', '卡尔德里拉', 0, 1, 'CL', 0, 0, 'HITI'),
('CLCOQ', 'COQUIMBO', '科金博', 0, 1, 'CL', 0, 0, 'HITI'),
('CLCOR', 'CORONEL', '科罗内尔', 0, 1, 'CL', 0, 0, 'HITI'),
('CLCRL', 'CORRAL', '科拉尔', 0, 1, 'CL', 0, 0, 'HITI'),
('CLHUA', 'HUASCO', '瓦斯科', 0, 1, 'CL', 0, 0, 'HITI'),
('CLIQU', 'IQUIQUE', '伊基克', 0, 1, 'CL', 0, 0, 'HITI'),
('CLPAR', 'PUNTA ARENAS', '阿雷纳斯角', 0, 1, 'CL', 0, 0, 'HITI'),
('CLPMO', 'PUERTO MONTT', '蒙特港', 0, 1, 'CL', 0, 0, 'HITI'),
('CLSAN', 'SAN ANTONIO', '圣安东尼奥', 0, 1, 'CL', 0, 0, 'HITI'),
('CLTOC', 'TOCOPILLA', '托科皮亚', 0, 1, 'CL', 0, 0, 'HITI'),
('CLTOM', 'TOME', '托梅', 0, 1, 'CL', 0, 0, 'HITI'),
('CLTTL', 'TALTAL', '塔尔塔尔', 0, 1, 'CL', 0, 0, 'HITI'),
('CLTAL', 'TALCAHUANO', '塔尔卡瓦诺', 0, 1, 'CL', 0, 0, 'HITI'),
('CLVDA', 'VALDIVIA', '瓦尔迪维亚', 0, 1, 'CL', 0, 0, 'HITI'),
('CLVAL', 'VALPARAISO', '瓦尔帕莱索', 0, 1, 'CL', 0, 0, 'HITI'),
('ESLCA', 'LA CALERA', '拉卡莱拉', 0, 1, 'CL', 0, 0, 'HITI'),
('CHCPT', 'CONCEPTION', '', 0, 1, 'CL', 0, 0, 'HITI'),
('AEJAL', 'JEBEL ALI', '阿里山', 0, 1, 'CA', 0, 0, 'HITI'),
('CNDLC', 'DALIAN', '大连', 0, 1, 'CN', 0, 0, 'HITI'),
('CNDXG', 'DALIANXINGANG', '大连新港（区）', 0, 1, 'CA', 0, 0, 'HITI'),
('MOMAC', 'MACAU', '澳门', 0, 1, 'CA', 0, 0, 'HITI'),
('CNSHA', 'SHANGHAI', '上海', 0, 1, 'CA', 0, 0, 'HITI'),
('HKHKG', 'HONG KONG', '香港', 0, 1, 'CA', 0, 0, 'HITI'),
('KEELU', 'KEELUNG', '基隆', 0, 1, 'CA', 0, 0, 'HITI'),
('ASHA', 'SHANGHAI, CHINA', '', 0, 1, 'CA', 0, 0, 'HITI'),
('XGG', 'XINGANG', '', 0, 1, 'CA', 0, 0, 'HITI'),
('COBAR', 'BARRANQUILLA', '巴兰基利亚', 0, 1, 'CO', 0, 0, 'HITI'),
('COBUE', 'BUENA VENTURA', '布韦那文图拉', 0, 1, 'CO', 0, 0, 'HITI'),
('COCOV', 'COVENAS', '科韦尼亚斯', 0, 1, 'CO', 0, 0, 'HITI'),
('COCTA', 'CARTAGENA(CO)', '卡塔赫纳', 0, 1, 'CO', 0, 0, 'HITI'),
('CORHA', 'RIO HACHA', '里奥阿查', 0, 1, 'CO', 0, 0, 'HITI'),
('COSMA', 'SANTA MARTA', '圣玛尔塔', 0, 1, 'CO', 0, 0, 'HITI'),
('COTUM', 'TUMACO', '图马科', 0, 1, 'CO', 0, 0, 'HITI'),
('KMFOM', 'FOMBONI', '丰博尼', 0, 1, 'KM', 0, 0, 'HITI'),
('KMMOR', 'MORONI', '莫罗尼', 0, 1, 'KM', 0, 0, 'HITI'),
('KMMUT', 'MUTSAMUDU', '穆察穆杜', 0, 1, 'KM', 0, 0, 'HITI'),
('KMDZA', 'DZAOUDZI', '藻德济', 0, 1, 'KM', 0, 0, 'HITI'),
('CGPNO', 'POINTE NOIRE(CG', '黑角', 0, 1, 'CG', 0, 0, 'HITI'),
('POINT', 'POINTE NOIRE PORT,CONGO', '', 0, 1, 'CG', 0, 0, 'HITI'),
('CRCAL', 'CALDERA(CR)', '卡尔德拉', 0, 1, 'CR', 0, 0, 'HITI'),
('CRGOL', 'GOLFITO', '戈尔菲托', 0, 1, 'CR', 0, 0, 'HITI'),
('CRPLI', 'PORT LIMON', '利蒙港', 0, 1, 'CR', 0, 0, 'HITI'),
('CRPUN', 'PUNTARENAS', '彭塔雷纳斯', 0, 1, 'CR', 0, 0, 'HITI'),
('CRQUE', 'QUEPOS', '克波斯', 0, 1, 'CR', 0, 0, 'HITI'),
('COERA', 'PUERTO CALDERA', '卡尔德拉', 0, 1, 'CR', 0, 0, 'HITI'),
('COCGO', 'CARTAGO', '卡塔果', 0, 1, 'CR', 0, 0, 'HITI'),
('COMON', 'PUERTO LIMON''', '利蒙港', 0, 1, 'CR', 0, 0, 'HITI'),
('CIABI', 'ABIDJAN', '阿比让', 0, 1, 'CI', 0, 0, 'HITI'),
('CIASS', 'ASSINIE', '阿西尼', 0, 1, 'CI', 0, 0, 'HITI'),
('CIFRE', 'FRESCO', '弗雷斯科', 0, 1, 'CI', 0, 0, 'HITI'),
('CIGBM', 'GRAND BASSAM', '大巴萨姆', 0, 1, 'CI', 0, 0, 'HITI'),
('CISAS', 'SASSANDRA', '萨桑德拉', 0, 1, 'CI', 0, 0, 'HITI'),
('CISPE', 'SAN PEDRO(CI)', '圣佩德罗', 0, 1, 'CI', 0, 0, 'HITI'),
('CITAB', 'TABOU', '塔布', 0, 1, 'CI', 0, 0, 'HITI'),
('HRDBV', 'DUBROVNIK', '杜布罗夫尼克', 0, 1, 'HR', 0, 0, 'HITI'),
('HRPUL', 'PULA', '普拉', 0, 1, 'HR', 0, 0, 'HITI'),
('HRRIJ', 'RIJEKA', '里耶卡', 0, 1, 'HR', 0, 0, 'HITI'),
('HRSPL', 'SPLIT', '斯普利特', 0, 1, 'HR', 0, 0, 'HITI'),
('PLO', 'PLOCE', '普洛切', 0, 1, 'HR', 0, 0, 'HITI'),
('CUANT', 'ANTILLA', '安蒂亚', 0, 1, 'CU', 0, 0, 'HITI'),
('CUBAH', 'BAHIA HONDA', '翁达港', 0, 1, 'CU', 0, 0, 'HITI'),
('CUBAN', 'BANES', '巴内斯', 0, 1, 'CU', 0, 0, 'HITI'),
('CUBAR', 'BARACOA', '巴拉科阿', 0, 1, 'CU', 0, 0, 'HITI'),
('CUBGR', 'BOCA GRANDE(CU)', '博卡格兰德', 0, 1, 'CU', 0, 0, 'HITI'),
('CUBOQ', 'BOQUERON', '博克龙', 0, 1, 'CU', 0, 0, 'HITI'),
('CUCAB', 'CABANAS', '卡瓦尼亚斯', 0, 1, 'CU', 0, 0, 'HITI'),
('CUCAI', 'CAIBARIEN', '凯巴连', 0, 1, 'CU', 0, 0, 'HITI'),
('CUCAR', 'CARDENAS', '卡德纳斯', 0, 1, 'CU', 0, 0, 'HITI'),
('CUCAS', 'CASILDA', '卡西尔达', 0, 1, 'CU', 0, 0, 'HITI'),
('CUCIE', 'CIENFUEGOS', '西恩富戈斯', 0, 1, 'CU', 0, 0, 'HITI'),
('CUCMA', 'CAIMANERA', '凯马勒那', 0, 1, 'CU', 0, 0, 'HITI'),
('CUGUA', 'GUAYABAL', '瓜亚瓦尔', 0, 1, 'CU', 0, 0, 'HITI'),
('CUHAV', 'HAVANA', '哈瓦那', 0, 1, 'CU', 0, 0, 'HITI'),
('CUISA', 'ISABELA(CU)', '伊萨贝拉', 0, 1, 'CU', 0, 0, 'HITI'),
('CUJUC', 'JUCARO', '胡卡罗', 0, 1, 'CU', 0, 0, 'HITI'),
('CUMAN', 'MANZANILLO(CU)', '曼萨尼略', 0, 1, 'CU', 0, 0, 'HITI'),
('CUMAR', 'MARIEL', '马里埃尔', 0, 1, 'CU', 0, 0, 'HITI'),
('CUMAT', 'MATANZAS(CU)', '马坦萨斯', 0, 1, 'CU', 0, 0, 'HITI'),
('CUMLA', 'MANOPLA', '马诺普拉', 0, 1, 'CU', 0, 0, 'HITI'),
('CUMLU', 'MEDIA LUNA', '梅迪亚卢纳', 0, 1, 'CU', 0, 0, 'HITI'),
('CUMOA', 'MOA', '莫阿', 0, 1, 'CU', 0, 0, 'HITI'),
('CUMTI', 'MANATI', '马纳蒂', 0, 1, 'CU', 0, 0, 'HITI'),
('CUNGA', 'NUEVA GERONA', '新赫罗纳', 0, 1, 'CU', 0, 0, 'HITI'),
('CUNIC', 'NICARO', '尼卡罗', 0, 1, 'CU', 0, 0, 'HITI'),
('CUNIQ', 'NIQUERO', '尼克罗', 0, 1, 'CU', 0, 0, 'HITI'),
('CUPLN', 'PILON', '皮隆', 0, 1, 'CU', 0, 0, 'HITI'),
('CUPRE', 'PRESTON(CU)', '普雷斯顿', 0, 1, 'CU', 0, 0, 'HITI'),
('CUSAG', 'SAGUALA GRANDE', '大萨瓜', 0, 1, 'CU', 0, 0, 'HITI'),
('CUSCS', 'SANTA CRUZ DEL', '南圣克鲁斯', 0, 1, 'CU', 0, 0, 'HITI'),
('CUSGO', 'SANTIAGO', '圣地亚哥', 0, 1, 'CU', 0, 0, 'HITI'),
('CUSLU', 'SANTA LUCIA', '圣卢西亚', 0, 1, 'CU', 0, 0, 'HITI'),
('CUTDZ', 'TUNAS DE ZAZA', '图纳斯德萨萨', 0, 1, 'CU', 0, 0, 'HITI'),
('CUNUE', 'NUEVITAS', '努埃维塔斯', 0, 1, 'CY', 0, 0, 'HITI'),
('CUPPA', 'PUERTO PADRE', '帕德雷港', 0, 1, 'CY', 0, 0, 'HITI'),
('CYAKR', 'AKROTIRI', '阿克罗蒂里', 0, 1, 'CY', 0, 0, 'HITI'),
('CYFAM', 'FAMAGUSTA', '法马古斯塔', 0, 1, 'CY', 0, 0, 'HITI'),
('CYKYR', 'KYRENIA', '凯里尼亚', 0, 1, 'CY', 0, 0, 'HITI'),
('CYLAR', 'LARNACA', '拉纳卡', 0, 1, 'CY', 0, 0, 'HITI'),
('CYLIM', 'LIMASSOL', '利马索尔', 0, 1, 'CY', 0, 0, 'HITI'),
('CYPPS', 'PAPHOS', '佩福斯', 0, 1, 'CY', 0, 0, 'HITI'),
('CYVAB', 'Vassiliko Bay', '瓦西利科湾', 0, 1, 'CY', 0, 0, 'HITI'),
('CZBRN', 'BRNO', '布尔诺', 0, 1, 'CZ', 0, 0, 'HITI'),
('CZPRA', 'PRAHA', '布拉格', 0, 1, 'CZ', 0, 0, 'HITI'),
('CZPLZ', 'PLZEN', '比尔森', 0, 1, 'CZ', 0, 0, 'HITI'),
('CZBMO', 'BMO', '毕莫', 0, 1, 'CZ', 0, 0, 'HITI'),
('CZOST', 'OSTRAVA', '奥斯萃瓦', 0, 1, 'CZ', 0, 0, 'HITI'),
('CZPAR', 'PARGUE', '', 0, 1, 'CZ', 0, 0, 'HITI'),
('CZPUE', 'PRAGUE', '', 0, 1, 'CZ', 0, 0, 'HITI'),
('CZPIZ', 'PIZEN', '', 0, 1, 'CZ', 0, 0, 'HITI'),
('KPCJN', 'CHONGJIN', '清津', 0, 1, 'KP', 0, 0, 'HITI'),
('KPHAE', 'HAEJU', '海州', 0, 1, 'KP', 0, 0, 'HITI'),
('KPHUN', 'HUNGNAM', '兴南', 0, 1, 'KP', 0, 0, 'HITI'),
('KPCHI', 'NAMPO', '镇南浦', 0, 1, 'KP', 0, 0, 'HITI'),
('KPRAJ', 'RAJIN', '罗津', 0, 1, 'KP', 0, 0, 'HITI'),
('KPSON', 'SONGRIM', '松林', 0, 1, 'KP', 0, 0, 'HITI'),
('KPUNG', 'UNGGI', '雄基', 0, 1, 'KP', 0, 0, 'HITI'),
('KPWON', 'WONSAN', '元山', 0, 1, 'KP', 0, 0, 'HITI'),
('DKHOL', 'HOLBAEK', '霍尔拜克', 0, 1, 'DK', 0, 0, 'HITI'),
('DKHOR', 'HORSENS', '霍森斯', 0, 1, 'DK', 0, 0, 'HITI'),
('DKHSD', 'HADSUND', '海松', 0, 1, 'DK', 0, 0, 'HITI'),
('DKHSV', 'HADERSLEV', '哈泽斯莱乌', 0, 1, 'DK', 0, 0, 'HITI'),
('DKKAL', 'KALUNDBORG', '凯隆堡', 0, 1, 'DK', 0, 0, 'HITI'),
('DKKAR', 'KARREBAEKSMINDE', '卡勒拜克斯明讷', 0, 1, 'DK', 0, 0, 'HITI'),
('DKKOG', 'KOGE', '克厄', 0, 1, 'DK', 0, 0, 'HITI'),
('DKKOL', 'KOLDING', '科灵', 0, 1, 'DK', 0, 0, 'HITI'),
('DKKOR', 'KORSOR', '科瑟', 0, 1, 'DK', 0, 0, 'HITI'),
('DKKYN', 'KYNDBY', '金比', 0, 1, 'DK', 0, 0, 'HITI'),
('DKLEM', 'LEMVIG', '莱姆维', 0, 1, 'DK', 0, 0, 'HITI'),
('DKMAR', 'MARIAGER', '玛丽艾厄', 0, 1, 'DK', 0, 0, 'HITI'),
('DKMID', 'MIDDELFART', '米泽尔法特', 0, 1, 'DK', 0, 0, 'HITI'),
('DKNAE', 'NAESTVED', '奈斯特韦兹', 0, 1, 'DK', 0, 0, 'HITI'),
('DKNKV', 'NAKSKOV', '纳克斯考', 0, 1, 'DK', 0, 0, 'HITI'),
('DKNYB', 'NYBORG', '尼堡', 0, 1, 'DK', 0, 0, 'HITI'),
('DKODE', 'ODENSE', '欧登塞', 0, 1, 'DK', 0, 0, 'HITI'),
('DKRAN', 'RANDERS', '兰讷斯', 0, 1, 'DK', 0, 0, 'HITI'),
('DKROD', 'RODBYHAVN', '勒兹比港', 0, 1, 'DK', 0, 0, 'HITI'),
('DKRUD', 'RUDKOBING', '鲁兹克宾', 0, 1, 'DK', 0, 0, 'HITI'),
('DKSAK', 'SAKSKOBING', '萨克斯克宾', 0, 1, 'DK', 0, 0, 'HITI'),
('DKSKI', 'SKIVE', '斯基沃', 0, 1, 'DK', 0, 0, 'HITI'),
('DKSKN', 'SKAGEN', '斯卡恩', 0, 1, 'DK', 0, 0, 'HITI'),
('DKSON', 'SONDERBORG', '桑德堡', 0, 1, 'DK', 0, 0, 'HITI'),
('DKSTE', 'STEGE', '斯泰厄', 0, 1, 'DK', 0, 0, 'HITI'),
('DKSTU', 'STUBBEKOBING', '斯图伯克宾', 0, 1, 'DK', 0, 0, 'HITI'),
('DKSVA', 'SVANEKE', '斯瓦讷克', 0, 1, 'DK', 0, 0, 'HITI'),
('DKSVE', 'SVENDBORG', '斯文堡', 0, 1, 'DK', 0, 0, 'HITI'),
('DKVEJ', 'VEJLE', '瓦埃勒', 0, 1, 'DK', 0, 0, 'HITI'),
('DKVOR', 'VORDINGBORG', '沃尔丁堡', 0, 1, 'DK', 0, 0, 'HITI'),
('DMPOR', 'PORTSMOUTH(DM)', '朴次茅斯', 0, 1, 'DK', 0, 0, 'HITI'),
('DKAER', 'AEROSKOBING', '埃勒斯克平', 0, 1, 'DK', 0, 0, 'HITI'),
('DKAHS', 'AARHUS', '奥尔胡斯', 0, 1, 'DK', 0, 0, 'HITI'),
('DKBHM', 'BANDHOLM', '班霍尔姆', 0, 1, 'DK', 0, 0, 'HITI'),
('DKBOG', 'BOGENSE', '博恩瑟', 0, 1, 'DK', 0, 0, 'HITI'),
('DKCOP', 'COPENHAGEN', '哥本哈根', 0, 1, 'DK', 0, 0, 'HITI'),
('DKALL', 'ALLINGE', '阿灵厄', 0, 1, 'DK', 0, 0, 'HITI'),
('DKASS', 'ASSENS', '阿森斯', 0, 1, 'DK', 0, 0, 'HITI'),
('DKFLS', 'FAKSE LADEPLADS', '法克瑟莱泽普拉斯', 0, 1, 'DK', 0, 0, 'HITI'),
('DKFRE', 'FREDERICIA', '腓特烈西亚', 0, 1, 'DK', 0, 0, 'HITI'),
('DKFSD', 'FREDERIKSSUND', '腓特烈松', 0, 1, 'DK', 0, 0, 'HITI'),
('DKFSK', 'FREDERIKSVARK', '腓特烈斯韦克', 0, 1, 'DK', 0, 0, 'HITI'),
('DKFSN', 'FREDERIKSHAVN', '腓特烈港', 0, 1, 'DK', 0, 0, 'HITI'),
('DKESB', 'ESBJERG', '埃斯比约', 0, 1, 'DK', 0, 0, 'HITI'),
('DKETD', 'ENSTED', '恩斯坦达', 0, 1, 'DK', 0, 0, 'HITI'),
('DKFAA', 'FAABORG', '福堡', 0, 1, 'DK', 0, 0, 'HITI'),
('DKEBE', 'EBELTOFT', '埃伯尔措夫特', 0, 1, 'DK', 0, 0, 'HITI'),
('DKGUL', 'GULFHAVN', '基尔夫港', 0, 1, 'DK', 0, 0, 'HITI'),
('DKHAS', 'HASLE', '海斯勒', 0, 1, 'DK', 0, 0, 'HITI'),
('DKHIR', 'HIRTSHALS', '希茨海尔斯', 0, 1, 'DK', 0, 0, 'HITI'),
('DKGRE', 'GRENAA', '格雷诺', 0, 1, 'DK', 0, 0, 'HITI'),
('DKHOB', 'HOBRO', '霍布罗', 0, 1, 'DK', 0, 0, 'HITI'),
('DEARH', 'ARHUS', '奥尔胡斯', 0, 1, 'DK', 0, 0, 'HITI'),
('DEAAL', 'AALBORG', '阿尔堡', 0, 1, 'DK', 0, 0, 'HITI'),
('ALB', 'ALBORG', '奥尔堡', 0, 1, 'DK', 0, 0, 'HITI'),
('DMROS', 'ROSEAU', '罗索', 0, 1, 'DM', 0, 0, 'HITI'),
('DOBAR', 'BARAHONA', '巴拉奥纳', 0, 1, 'DM', 0, 0, 'HITI'),
('DOLRO', 'LA ROMANA', '拉罗马纳', 0, 1, 'DM', 0, 0, 'HITI'),
('DOMAN', 'MANZANILLO(DO)', '曼萨尼约', 0, 1, 'DM', 0, 0, 'HITI'),
('DOPPL', 'PUERTO PLATA', '普拉塔港', 0, 1, 'DM', 0, 0, 'HITI'),
('DORHA', 'RIO HAINA', '海纳', 0, 1, 'DM', 0, 0, 'HITI'),
('DOSAM', 'SAMANA', '萨马纳', 0, 1, 'DM', 0, 0, 'HITI'),
('DOSCZ', 'SANCHEZ', '桑切斯', 0, 1, 'DM', 0, 0, 'HITI'),
('DOSDO', 'SANTO DOMINGO', '圣多明各', 0, 1, 'DM', 0, 0, 'HITI'),
('DOSPM', 'SAN PEDRO DE MA', '圣佩得罗德马科里斯', 0, 1, 'DM', 0, 0, 'HITI'),
('DOHAI', 'HAINA', '海纳', 0, 1, 'DM', 0, 0, 'HITI'),
('ECESM', 'ESMERALDAS', '埃斯梅拉达斯', 0, 1, 'EC', 0, 0, 'HITI'),
('ECGYL', 'GUAYAQUIL', '瓜亚基尔', 0, 1, 'EC', 0, 0, 'HITI'),
('ECMTA', 'MANTA', '曼塔', 0, 1, 'EC', 0, 0, 'HITI'),
('AOPAL', 'PORTO ALEXANDRE', '亚历山大港', 0, 1, 'EG', 0, 0, 'HITI'),
('GRALE', 'ALEXANDROUPOLIS', '亚历山德鲁波利斯', 0, 1, 'EG', 0, 0, 'HITI'),
('GRAST', 'ASTAKOS', '阿斯塔科斯', 0, 1, 'EG', 0, 0, 'HITI'),
('EGABZ', 'ABU ZENIMA', '阿布宰尼迈', 0, 1, 'EG', 0, 0, 'HITI'),
('EGADA', 'ADABIYA', '阿代比耶', 0, 1, 'EG', 0, 0, 'HITI'),
('EGALE', 'ALEXANDRIA(EG)', '亚历山德里亚', 0, 1, 'EG', 0, 0, 'HITI'),
('EGDAM', 'DAMIETTA', '杜姆亚特', 0, 1, 'EG', 0, 0, 'HITI'),
('EGKOS', 'KOSSEIR', '库赛尔', 0, 1, 'EG', 0, 0, 'HITI'),
('EGPSA', 'PORT SAID', '塞得港', 0, 1, 'EG', 0, 0, 'HITI'),
('EGSAF', 'SAFAGA', '萨法贾', 0, 1, 'EG', 0, 0, 'HITI'),
('EGSUE', 'SUEZ', '苏伊士', 0, 1, 'EG', 0, 0, 'HITI'),
('EGPSU', 'PORT SUEZ', '苏伊士', 0, 1, 'EG', 0, 0, 'HITI'),
('ADDA', 'ADDABIA PORT', '', 0, 1, 'EG', 0, 0, 'HITI'),
('SOK', 'SOKHNA', '索科哈纳', 0, 1, 'EG', 0, 0, 'HITI'),
('SVACA', 'ACAJUTLA', '阿卡胡特拉', 0, 1, 'SV', 0, 0, 'HITI'),
('SVCUT', 'CUTUCO', '库图科', 0, 1, 'SV', 0, 0, 'HITI'),
('SVLLI', 'LA LIBERTAD(SV)', '拉利贝塔德', 0, 1, 'SV', 0, 0, 'HITI'),
('SVLUN', 'LA UNION(SV)', '拉乌尼翁', 0, 1, 'SV', 0, 0, 'HITI'),
('CAPRR', 'PRINCE RUPERT', '鲁珀特港', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSTO', 'STOCKTON(GB)', '斯托克顿', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSTR', 'STROMNESS', '斯特罗姆内斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSUB', 'SUTTON BRIDGE', '萨顿布里奇', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSWH', 'SANDWICH', '桑德威奇', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSWY', 'STORNOWAY', '斯托诺韦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTAR', 'TARBERT', '塔伯特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSUN', 'SUNDERLAND', '森德兰', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSWA', 'SWANSEA', '斯旺西', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTOT', 'TOTNES', '托特尼斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTRO', 'TROON', '特伦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTRU', 'TRURO', '特鲁罗', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTYD', 'TYNE DOCK', '太恩港', 0, 1, 'GB', 0, 0, 'HITI'),
('GBULL', 'ULLAPOOL', '阿勒浦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWAR', 'WARKWORTH', '沃克沃思', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWAT', 'WATCHET', '沃切特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWBY', 'WHITBY', '惠特比', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWES', 'WESTRAY', '韦斯特雷', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWEY', 'WEYMOUTH(GB)', '韦茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTEI', 'TEIGNMOUTH', '廷茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTHS', 'TMAMES HAVEN', '', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTHU', 'THURSO', '瑟索', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTBY', 'TENBY', '滕比', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTOB', 'TOBERMORY', '托伯莫里', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTOP', 'TOPSHAM', '托普瑟姆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTOR', 'TROQUAY', '托基', 0, 1, 'GB', 0, 0, 'HITI'),
('GBTIL', 'TILBURY', '蒂尔伯里', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWHI', 'WHITSTABLE', '惠特斯特布尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWHN', 'WHITEHAVEN', '怀特黑文', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWIC', 'WICK(SCOT)', '威克', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWIS', 'WISBECH', '威斯贝奇', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWLS', 'WELLS', '韦尔斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWOR', 'WORKINGTON', '沃金顿', 0, 1, 'GB', 0, 0, 'HITI'),
('GBWRP', 'WARREN POINT', '沃伦波因特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBYAR', 'YARMOUTH(GB)', '雅茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBABN', 'ABERDEEN(GB)', '阿伯丁', 0, 1, 'GB', 0, 0, 'HITI'),
('GBABR', 'ABERDOUR', '阿伯道尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBABY', 'ABERDOVEY', '阿伯多维', 0, 1, 'GB', 0, 0, 'HITI'),
('GBAGS', 'ARDGLASS', '阿德格拉斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBALD', 'ALDERNEY', '奥尔德尼', 0, 1, 'GB', 0, 0, 'HITI'),
('GBAML', 'AMLWCH', '阿姆卢赫', 0, 1, 'GB', 0, 0, 'HITI'),
('GBANG', 'ANNALONG', '安纳隆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBANN', 'ANNAN', '安嫩', 0, 1, 'GB', 0, 0, 'HITI'),
('GBANS', 'ANSTRUTHER', '安斯特拉瑟', 0, 1, 'GB', 0, 0, 'HITI'),
('GBAPP', 'APPLEDORE', '阿普尔多尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBARG', 'ARDRISHAIG', '阿德里希格', 0, 1, 'GB', 0, 0, 'HITI'),
('GBARN', 'ARDROSSAN(GB)', '阿德罗森', 0, 1, 'GB', 0, 0, 'HITI'),
('GBAVO', 'AVONMOUTH', '埃文茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBAYR', 'AYR', '艾尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBAE', 'BARNSTAPIE', '巴恩斯特珀尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBAN', 'BANGOR(CO.DOWN)', '班戈', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBGR', 'BANGOR(CAER.)', '班戈', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBHD', 'BURGHEAD', '伯格黑德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBEL', 'BELFAST(GB)', '贝尔法斯特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBOS', 'BOSTON(GB)', '波士顿', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBPT', 'BRIDPORT', '布里德波特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBRD', 'BROMBOROUGH DOC', '布朗巴勒', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBRI', 'BRIGHTLINGSEA', '布赖特灵西', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBRN', 'BRIGHTON(GB)', '布赖顿', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBRW', 'BARROW-IN-FURNESS(GB)', '巴罗-因-弗内斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBLN', 'BRIDLINGTON', '布里德灵顿', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBLY', 'BLYTH', '布莱斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBMS', 'BEAUMARIS', '博马里斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBID', 'BIDEFORD', '比迪福德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBRY', 'BARRY', '巴里', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBTH', 'BARMOUTH', '巴尔默斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBTL', 'BRISTOL', '布里斯托尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBUC', 'BUCKIE', '巴基', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBXM', 'BRIXHAM', '布里克瑟姆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCAE', 'CAERNARFON', '卡那封', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCAM', 'CAMPBELTOWN', '坎贝尔敦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBWR', 'BRIDGWATER', '布里奇沃特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCOE', 'COLERAINE', '科尔雷恩', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCOL', 'COLCHESTER', '科尔切斯特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCOQ', 'CONNAH''S QUAY', '康纳斯基', 0, 1, 'GB', 0, 0, 'HITI');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('GBCOR', 'CORPACH', '科珀赫', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCOS', 'COWES', '考斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCAR', 'CARRICKFERGUS', '卡里克弗格斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCAS', 'CASTLETOWN', '卡斯尔敦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCDF', 'CARDIFF', '加的夫', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCHA', 'CHARLESTOWN(GB)', '查尔斯敦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCRO', 'CROMARTY', '克罗默蒂', 0, 1, 'GB', 0, 0, 'HITI'),
('GBDAR', 'DARTMOUTH', '达特茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBDBR', 'DUNBAR', '邓巴', 0, 1, 'GB', 0, 0, 'HITI'),
('GBDDE', 'DUNDEE', '邓迪', 0, 1, 'GB', 0, 0, 'HITI'),
('GBDIN', 'DINGWALL(GB)', '丁沃尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBDOU', 'DOUGLAS', '道格拉斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBDOV', 'DOVER', '多佛', 0, 1, 'GB', 0, 0, 'HITI'),
('GBDRM', 'DUNDRUM', '邓德拉姆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBDUM', 'DUMFRIES', '邓弗里斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBDUN', 'DUNOON', '达农', 0, 1, 'GB', 0, 0, 'HITI'),
('BHX', 'BIRMINGHAM', '伯明翰', 0, 1, 'GB', 0, 0, 'HITI'),
('GBDAG', 'DAGENHAM', '带根纳姆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLEE', 'LEEDS', '利兹', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMOS', 'MOSTYN', '莫斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBNEW', 'NEWPORT(GB)', '纽波特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBNHN', 'NEWHAVEN', '纽黑文', 0, 1, 'GB', 0, 0, 'HITI'),
('GBNLN', 'NEWLYN', '纽林', 0, 1, 'GB', 0, 0, 'HITI'),
('GBNOR', 'NORWICH', '诺里奇', 0, 1, 'GB', 0, 0, 'HITI'),
('GBNRY', 'NEWRY', '纽里', 0, 1, 'GB', 0, 0, 'HITI'),
('GBNSU', 'N. SUNDERLAND', '北森德兰', 0, 1, 'GB', 0, 0, 'HITI'),
('GBNBH', 'NEWBURGH', '纽堡', 0, 1, 'GB', 0, 0, 'HITI'),
('GBNCE', 'NEWCASTLE(GB)', '纽卡斯尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBNEA', 'NEATH', '尼思', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMTL', 'METHIL', '梅西尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBOBN', 'OBAN', '奥本', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPAD', 'PADSTOW', '帕德斯托', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPAS', 'PORT ASKAIOG', '阿美凯格皮尔港', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPEL', 'PORT ELLEN', '埃伦港', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPLY', 'PLYMOUTH(GB)', '普利茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPMR', 'PENMAENMAWR', '彭迈恩毛尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPOO', 'POOLE', '普尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPRE', 'PRESTON(GB)', '普雷斯顿', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPRH', 'PORTRUSH', '波特拉什', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPRN', 'PENRYN', '彭林', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPEN', 'PENZANCE', '彭赞斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPER', 'PERTH(GB)', '珀斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPET', 'PETERHEAD', '彼得黑德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPLD', 'PORTLAND(GB)', '波特兰', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPTA', 'PORT TALBOT', '塔尔伯特港', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPTE', 'PORTREE', '波特里', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPTH', 'PORTSMOUTH(GB)', '泼次茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPWI', 'PORT WILLIAM', '威廉港', 0, 1, 'GB', 0, 0, 'HITI'),
('GBPWL', 'PWLLHELI', '普尔黑利', 0, 1, 'GB', 0, 0, 'HITI'),
('GBQSY', 'QUEENSFERRY', '昆斯费里', 0, 1, 'GB', 0, 0, 'HITI'),
('GBRAM', 'RAMSGATE', '拉姆斯盖特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBRHM', 'RAINHAM', '雷汉姆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBRHY', 'RHYL', '里尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBROC', 'ROCHESTER(GB)', '罗切斯特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBROS', 'ROSYTH', '罗赛斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBROT', 'ROTHESAY', '罗斯西', 0, 1, 'GB', 0, 0, 'HITI'),
('GBRUN', 'RUNCORN', '朗科恩', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSCA', 'SCARBOROUGH(GB)', '斯卡伯勒', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSCR', 'SCRABSTER', '斯克拉布斯特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSED', 'SOUTHEND', '绍森德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSFD', 'STRANGFORD', '斯特兰福德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSHE', 'ST. HELIER', '圣赫利尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSHM', 'SEAHAM HARBOUR', '锡厄姆港', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSHO', 'SHOREHAM', '肖勒姆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSIV', 'ST. IVES', '圣艾夫斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSLY', 'SCALLOWAY', '斯卡洛韦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSMH', 'ST. MARGARET''S', '圣马格丽茨贝', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSNS', 'SHEERNESS', '希尔内斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSOU', 'SOUTHAMPTON', '南安普顿', 0, 1, 'GB', 0, 0, 'HITI'),
('GBSPP', 'ST. PETER PORT', '圣彼德港', 0, 1, 'GB', 0, 0, 'HITI'),
('GRDRA', 'DRAPETZONA', '德拉佩特佐拉', 0, 1, 'GB', 0, 0, 'HITI'),
('GBELP', 'ELLESMERE PORT', '埃尔斯米尔港', 0, 1, 'GB', 0, 0, 'HITI'),
('GBEXE', 'EXETER', '埃克塞特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBEXM', 'EXMOUTH', '埃克斯茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBEYE', 'EYEMOUTH', '艾茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBFAL', 'FALMOUTH(GB)', '法尔茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBFAW', 'FAWLEY', '福利', 0, 1, 'GB', 0, 0, 'HITI'),
('GBFEL', 'FELIXSTOWE', '弗利克斯托', 0, 1, 'GB', 0, 0, 'HITI'),
('GBFIN', 'FINNART', '芬纳特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBFIS', 'FISHGUARD', '菲什加德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBFLE', 'FLEETWOOD', '弗利特伍德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBFOL', 'FOLKESTONE', '福克斯通', 0, 1, 'GB', 0, 0, 'HITI'),
('GBFOW', 'FOWEY', '福伊', 0, 1, 'GB', 0, 0, 'HITI'),
('GBFRA', 'FRASERBURGH', '弗雷泽堡', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGAI', 'GAINSBOROUGH', '盖恩斯伯勒', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGAN', 'GARLIESTON', '加利斯敦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGAR', 'GARSTON', '加斯顿', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGIR', 'GIRVAN', '格文', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGLA', 'GLASGOW', '格拉斯哥', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGLE', 'GLENARM', '格莱纳姆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGLO', 'GLOUCESTER(GB)', '格洛斯特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGNK', 'GREENOCK', '格里诺克', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGNW', 'GUNNESS WHARF', '冈纳斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGOO', 'GOOLE', '古尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGRA', 'GRANGEMOUTH', '格兰奇茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGRI', 'GRIMSBY', '格里姆斯比', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGRK', 'GOUROCK', '古罗克', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGSD', 'GRAVESEND', '格雷夫森德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBGYA', 'GREAT YARMOUTH', '大雅茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBHAR', 'HARWICH', '哈里奇', 0, 1, 'GB', 0, 0, 'HITI'),
('GBHAY', 'HAYLE', '海尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBHOL', 'HOLYHEAD', '霍利黑德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBINV', 'INVERGORDON', '因弗戈登', 0, 1, 'GB', 0, 0, 'HITI'),
('GBIOG', 'ISLE OF GRAIN', '谷岛', 0, 1, 'GB', 0, 0, 'HITI'),
('GBIPS', 'IPSWICH', '伊普斯威奇', 0, 1, 'GB', 0, 0, 'HITI'),
('GBIRV', 'IRVINE', '欧文', 0, 1, 'GB', 0, 0, 'HITI'),
('GBIVS', 'INVERNESS', '因弗内斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBHPL', 'HARTLEPOOL', '哈特尔浦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBHUL', 'HULL', '赫尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBIMM', 'IMMINGHAM', '伊明赫姆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBKIL', 'KILLINGHOLME', '基林霍尔姆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBKIR', 'KIRKCALDY', '柯科迪', 0, 1, 'GB', 0, 0, 'HITI'),
('GBKOL', 'KYLE OF LOCHALS', '洛哈尔什教区凯尔', 0, 1, 'GB', 0, 0, 'HITI'),
('GBKSL', 'KING''S LYNN', '金斯林', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLAN', 'LANCASTER', '兰开斯特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLDY', 'LONDONDERRY', '伦敦德里', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLEI', 'LEITH', '利斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLOS', 'LOSSIEMOUTH', '洛西茅斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLOW', 'LOWESTOFT', '洛斯托夫特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLWK', 'LERWICK', '勒威克', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLYB', 'LYBSTER', '利布斯特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLYD', 'LYDNEY', '利德尼', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMAC', 'MACDUFF', '麦克达夫', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMAL', 'MALDON', '莫尔登', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMAN', 'MANCHESTER', '曼彻斯特', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMEV', 'MEVAGISSEY', '梅瓦吉西', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMID', 'MIDDLESBROUGH', '米德尔斯伯勒', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMIH', 'MILFORD HAVEN', '米尔福德港', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLMA', 'LOCH MADDY', '洛赫马迪', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLNE', 'LARNE', '拉恩', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLOE', 'LOOE', '卢港', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLON', 'LONDON', '伦敦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLOP', 'LOCHALINE PIER', '洛哈林', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLGS', 'LARGS', '拉格斯', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLIT', 'LITTLEHAMPTON', '利特尔汉普顿', 0, 1, 'GB', 0, 0, 'HITI'),
('GBLIV', 'LIVERPOOL(GB)', '利物浦', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMIN', 'MINEHEAD', '迈恩黑德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMIS', 'MISTLEY', '米斯特利', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMLG', 'MALLAIG', '马莱格', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMLM', 'MILLOM', '米勒姆', 0, 1, 'GB', 0, 0, 'HITI'),
('GBMON', 'MONTROSE', '蒙特罗斯', 0, 1, 'GB', 0, 0, 'HITI'),
('ENAR', 'ARDGLASS', '阿德格拉斯', 0, 1, 'GB', 0, 0, 'HITI'),
('ENARD', 'ARDRISHAIG', '阿德里希格', 0, 1, 'GB', 0, 0, 'HITI'),
('ENARR', 'ARDROSSAN', '阿德罗森', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBU', 'BUDE', '布德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBCA', 'CARNLOUGH', '卡恩拉夫', 0, 1, 'GB', 0, 0, 'HITI'),
('ENBUR', 'BURNIEY', '伯利', 0, 1, 'GB', 0, 0, 'HITI'),
('ENCHA', 'CHADDERTON', '查得顿', 0, 1, 'GB', 0, 0, 'HITI'),
('ENCAD', 'CADIFF', '加的夫', 0, 1, 'GB', 0, 0, 'HITI'),
('ENEDI', 'EDINBURGH', '爱丁堡', 0, 1, 'GB', 0, 0, 'HITI'),
('GBBRA', 'BRADFORD', '布拉德福德', 0, 1, 'GB', 0, 0, 'HITI'),
('GBJAR', 'JARROW', '', 0, 1, 'GB', 0, 0, 'HITI'),
('ENLEI', 'LEICESTER', '列斯特', 0, 1, 'GB', 0, 0, 'HITI'),
('ENNOT', 'NOTTINGHAM', '诺丁汉', 0, 1, 'GB', 0, 0, 'HITI'),
('ENYOR', 'YORK', '纽克', 0, 1, 'GB', 0, 0, 'HITI'),
('ENWIG', 'WIGAM', '维加', 0, 1, 'GB', 0, 0, 'HITI'),
('ENTHA', 'THAMES', '', 0, 1, 'GB', 0, 0, 'HITI'),
('UKABE', 'ABERDEEN', '阿伯丁', 0, 1, 'GB', 0, 0, 'HITI'),
('ENLAN', 'LANARK', '拉纳克', 0, 1, 'GB', 0, 0, 'HITI'),
('ENSHE', 'SHEFFIELD', '谢菲尔德', 0, 1, 'GB', 0, 0, 'HITI'),
('ENYIL', 'TILBURY', '蒂尔伯利', 0, 1, 'GB', 0, 0, 'HITI'),
('ENOLD', 'OLDHAM', '奥尔德姆', 0, 1, 'GB', 0, 0, 'HITI'),
('PCMS', 'PORT SMOUTH', '朴次矛斯', 0, 1, 'GB', 0, 0, 'HITI'),
('ROTH', 'ROTHERHAM', '', 0, 1, 'GB', 0, 0, 'HITI'),
('SAL', 'ST.ALBANS', '', 0, 1, 'GB', 0, 0, 'HITI'),
('GQBAT', 'BATA', '巴塔', 0, 1, 'GQ', 0, 0, 'HITI'),
('ESTIN', 'TALLIN', '塔林', 0, 1, 'ES', 0, 0, 'HITI'),
('ETASB', 'ASSAB', '阿萨布', 0, 1, 'ET', 0, 0, 'HITI'),
('ETMAS', 'MASSAWA', '马萨瓦', 0, 1, 'ET', 0, 0, 'HITI'),
('ADD', 'ADDIS ABABA', '亚的斯阿贝巴', 0, 1, 'ET', 0, 0, 'HITI'),
('FOKLA', 'KLAKSVIG', '克拉克斯维克', 0, 1, 'FO', 0, 0, 'HITI'),
('FOTHO', 'THORSHAVN', '托尔斯港', 0, 1, 'FO', 0, 0, 'HITI'),
('FOTVO', 'TVOROYRI', '特瓦罗伊里', 0, 1, 'FO', 0, 0, 'HITI'),
('FOVES', 'VESTMANHAVN', '韦斯特门港', 0, 1, 'FO', 0, 0, 'HITI'),
('FJELL', 'ELLINGTON', '埃灵顿', 0, 1, 'FJ', 0, 0, 'HITI'),
('FJLAU', 'LAUTOKA', '劳托卡', 0, 1, 'FJ', 0, 0, 'HITI'),
('FJLEV', 'LEVUKA', '累武卡', 0, 1, 'FJ', 0, 0, 'HITI'),
('FJSUV', 'SUVA', '苏瓦', 0, 1, 'FJ', 0, 0, 'HITI'),
('FJSVB', 'SAVUSAVU BAY', '萨武萨武湾', 0, 1, 'FJ', 0, 0, 'HITI'),
('FIDL', 'DLLINGTON', '埃林顿', 0, 1, 'FJ', 0, 0, 'HITI'),
('NLHAN', 'HANSWEERT', '汉斯韦尔特', 0, 1, 'FI', 0, 0, 'HITI'),
('FIHAM', 'HAMINA', '哈米纳', 0, 1, 'FI', 0, 0, 'HITI'),
('FIHAN', 'HANKO', '汉科', 0, 1, 'FI', 0, 0, 'HITI'),
('FIHEL', 'HELSINKI', '赫尔辛基', 0, 1, 'FI', 0, 0, 'HITI'),
('FIKEM', 'KEMI', '凯米', 0, 1, 'FI', 0, 0, 'HITI'),
('FIKOK', 'KOKKOLA', '科科拉', 0, 1, 'FI', 0, 0, 'HITI'),
('FIKOT', 'KOTKA', '科特卡', 0, 1, 'FI', 0, 0, 'HITI'),
('FIKRI', 'KRISTIINA', '克里斯蒂纳', 0, 1, 'FI', 0, 0, 'HITI'),
('FILOV', 'LOVIISA', '洛维萨', 0, 1, 'FI', 0, 0, 'HITI'),
('FIMAR', 'MARIEHAMN', '玛丽港', 0, 1, 'FI', 0, 0, 'HITI'),
('FIMTO', 'MANTYLUOTO', '曼蒂卢奥托', 0, 1, 'FI', 0, 0, 'HITI'),
('FIOUL', 'OULU', '奥鲁', 0, 1, 'FI', 0, 0, 'HITI'),
('FIPIE', 'PIETARSAARI', '皮耶塔尔萨里', 0, 1, 'FI', 0, 0, 'HITI'),
('FIPOR', 'PORKKALA', '波卡拉', 0, 1, 'FI', 0, 0, 'HITI'),
('FIPRI', 'PORI', '波里', 0, 1, 'FI', 0, 0, 'HITI'),
('FIPVO', 'PORVOO', '波尔沃', 0, 1, 'FI', 0, 0, 'HITI'),
('FIRAA', 'RAAHE', '拉赫', 0, 1, 'FI', 0, 0, 'HITI'),
('FIRAU', 'RAUMA', '劳马', 0, 1, 'FI', 0, 0, 'HITI'),
('FITOR', 'TORNIO', '托尔奥尼', 0, 1, 'FI', 0, 0, 'HITI'),
('FITUR', 'TURKU', '图尔库', 0, 1, 'FI', 0, 0, 'HITI'),
('FIUUS', 'UUSIKAUPUNKI', '新考蓬基', 0, 1, 'FI', 0, 0, 'HITI'),
('FLVAS', 'VASSA', '瓦沙', 0, 1, 'FI', 0, 0, 'HITI'),
('ABO', 'ABO', '奥布', 0, 1, 'FI', 0, 0, 'HITI'),
('BJO', 'BJORNEBORG', '比约尔纳博里', 0, 1, 'FI', 0, 0, 'HITI'),
('GAM', 'GAMLAKARLEBY', '旧卡勒比', 0, 1, 'FI', 0, 0, 'HITI'),
('ULE', 'ULEABORG', '乌利堡', 0, 1, 'FI', 0, 0, 'HITI'),
('MAEN', 'MAENTYLUOTO', '', 0, 1, 'FI', 0, 0, 'HITI'),
('FIWAL', 'VALKOM', '瓦尔卡姆', 0, 1, 'FR', 0, 0, 'HITI'),
('FRABB', 'ABBEVILLE', '阿布维尔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRAJA', 'AJACCIO', '阿维克修', 0, 1, 'FR', 0, 0, 'HITI'),
('FRTNC', 'TONNAY CHARENTE', '托内沙朗特', 0, 1, 'FR', 0, 0, 'HITI'),
('FRTOU', 'TOULON', '土伦', 0, 1, 'FR', 0, 0, 'HITI'),
('FRARC', 'ARCACHON', '阿尔卡雄', 0, 1, 'FR', 0, 0, 'HITI'),
('FRATR', 'ANTIFER', '昂蒂弗', 0, 1, 'FR', 0, 0, 'HITI'),
('FRATS', 'ANTIBES', '昂蒂布', 0, 1, 'FR', 0, 0, 'HITI'),
('FRBAY', 'BAYONNE', '巴荣纳', 0, 1, 'FR', 0, 0, 'HITI'),
('FRBLA', 'BLAYE', '布拉伊', 0, 1, 'FR', 0, 0, 'HITI'),
('FRBON', 'BONIFACIO', '博尼法乔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRCNS', 'CANNES', '戛纳', 0, 1, 'FR', 0, 0, 'HITI'),
('FRCON', 'CONCARNEAU', '孔卡尔诺', 0, 1, 'FR', 0, 0, 'HITI'),
('FRCVI', 'CALVI', '卡尔维', 0, 1, 'FR', 0, 0, 'HITI'),
('FRDAH', 'DAHOUET', '达乌埃', 0, 1, 'FR', 0, 0, 'HITI'),
('FRDEA', 'DEAUVILLE', '多维尔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRDIE', 'DIEPPE', '迪耶普', 0, 1, 'FR', 0, 0, 'HITI'),
('FRDKK', 'DUNKIRK', '敦刻尔克', 0, 1, 'FR', 0, 0, 'HITI'),
('FRDON', 'DONGES', '栋日', 0, 1, 'FR', 0, 0, 'HITI'),
('FRDOU', 'DOUAMENEZ', '杜阿梅勒兹', 0, 1, 'FR', 0, 0, 'HITI'),
('FRETA', 'ETAPLES', '埃塔普勒', 0, 1, 'FR', 0, 0, 'HITI'),
('FRBOR', 'BORDEAUX', '波尔多', 0, 1, 'FR', 0, 0, 'HITI'),
('FRBOU', 'BOULOGNE', '布洛涅', 0, 1, 'FR', 0, 0, 'HITI'),
('FRBST', 'BREST', '布雷斯特', 0, 1, 'FR', 0, 0, 'HITI'),
('FRBTA', 'BASTIA', '巴斯蒂亚', 0, 1, 'FR', 0, 0, 'HITI'),
('FRCAL', 'CALAIS', '加来', 0, 1, 'FR', 0, 0, 'HITI'),
('FRCAM', 'CAMARET', '卡马雷', 0, 1, 'FR', 0, 0, 'HITI'),
('FRCAN', 'CAEN-OUISTREHAM', '冈兴威斯特拉', 0, 1, 'FR', 0, 0, 'HITI'),
('FRCBG', 'CHERBOURG', '瑟堡', 0, 1, 'FR', 0, 0, 'HITI'),
('FRCLE', 'CANCALE', '康卡勒', 0, 1, 'FR', 0, 0, 'HITI'),
('FRFEC', 'FECAMP', '费康', 0, 1, 'FR', 0, 0, 'HITI'),
('FRFOS', 'FOS', '福斯', 0, 1, 'FR', 0, 0, 'HITI'),
('FRGLS', 'GRAVELINES', '格拉沃利讷', 0, 1, 'FR', 0, 0, 'HITI'),
('FRGON', 'GONFREVILLE', '贡夫勒维尔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRGRA', 'GRANVILLE', '格兰维尔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRHON', 'HONFLEUR', '翁弗勒尔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRIRO', 'ILE ROUSSE', '伊尔鲁斯', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLAV', 'LAVERA', '拉瓦拉', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLCH', 'LE CHATEAUD''OLERON', '奥来龙堡', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLCI', 'LA CIOTAT', '拉西约塔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLGU', 'LE GUILDO', '勒吉尔多', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLIB', 'LIBOURNE', '利布尔讷', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLNO', 'LA NOUVELLE', '拉努韦勒', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLOR', 'LORIENT', '洛里昂', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLRO', 'LA ROCHELLE', '拉罗谢尔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRMOR', 'MORLAIX', '莫尔莱', 0, 1, 'FR', 0, 0, 'HITI'),
('FRNIC', 'NICE', '尼斯', 0, 1, 'FR', 0, 0, 'HITI'),
('FRNTS', 'NANTES', '南特', 0, 1, 'FR', 0, 0, 'HITI'),
('FRPBF', 'PAIMBOEUF', '潘伯夫', 0, 1, 'FR', 0, 0, 'HITI'),
('FRPDB', 'PORT DE BOUC', '布克港', 0, 1, 'FR', 0, 0, 'HITI'),
('FRPLA', 'PONT L''ABBE', '彭拉贝', 0, 1, 'FR', 0, 0, 'HITI'),
('FRPPI', 'PAIMPOL', '潘波勒', 0, 1, 'FR', 0, 0, 'HITI'),
('FRPRS', 'PARIS', '巴黎', 0, 1, 'FR', 0, 0, 'HITI'),
('FRPVS', 'PORT VENDRES', '旺德尔港', 0, 1, 'FR', 0, 0, 'HITI'),
('FRQUI', 'QUIMPER', '坎佩尔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRROC', 'ROCHEFORT', '罗什福尔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRROU', 'ROUEN', '鲁昂', 0, 1, 'FR', 0, 0, 'HITI'),
('FRSET', 'SETE', '塞特', 0, 1, 'FR', 0, 0, 'HITI'),
('FRSLR', 'ST. LOUIS DU RH', '圣路易罗纳', 0, 1, 'FR', 0, 0, 'HITI'),
('FRSMO', 'ST. MALO', '圣马洛', 0, 1, 'FR', 0, 0, 'HITI'),
('FRSNA', 'ST. NAZAIRE', '圣纳泽尔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRSVC', 'ST. VALERY EN C', '圣瓦勒利', 0, 1, 'FR', 0, 0, 'HITI'),
('FRAR', 'ARCACHON', '阿尔卡雄', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLHA', 'LE HAVRE', '勒阿佛尔', 0, 1, 'FR', 0, 0, 'HITI'),
('FRFSZ', 'FOT SOULTZ', '', 0, 1, 'FR', 0, 0, 'HITI'),
('ES', 'MARSEILLES', '马赛', 0, 1, 'FR', 0, 0, 'HITI'),
('FRCIN', 'CASTELSARRASIN', '', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLLE', 'LILLE', '', 0, 1, 'FR', 0, 0, 'HITI'),
('FRLYO', 'LYON', '里昂', 0, 1, 'FR', 0, 0, 'HITI'),
('FRTRG', 'TRASBOURG', '', 0, 1, 'FR', 0, 0, 'HITI'),
('PAL', 'PALLICE', '帕利斯', 0, 1, 'FR', 0, 0, 'HITI'),
('DU', 'DUNKERQUE', '敦刻尔克', 0, 1, 'FR', 0, 0, 'HITI'),
('BOU', 'BOUCAU', '布科', 0, 1, 'FR', 0, 0, 'HITI'),
('HUN', 'HUNINGUE', '', 0, 1, 'FR', 0, 0, 'HITI'),
('TOU', 'TOULOUSE', '', 0, 1, 'FR', 0, 0, 'HITI'),
('GACLZ', 'CAP LOPEZ', '洛佩斯角', 0, 1, 'GA', 0, 0, 'HITI'),
('GALIB', 'LIBREVILLE', '利伯维尔', 0, 1, 'GA', 0, 0, 'HITI'),
('GAOWE', 'OWENDO', '奥文多', 0, 1, 'GA', 0, 0, 'HITI'),
('GAPGE', 'PORT GENTIL', '谦蒂尔港', 0, 1, 'GA', 0, 0, 'HITI'),
('GALLE', 'LEBREVILLE', '利伯维尔', 0, 1, 'GA', 0, 0, 'HITI'),
('GMBJL', 'BANJUL', '班珠尔', 0, 1, 'GM', 0, 0, 'HITI'),
('GABA', 'BATHURST', '巴瑟斯特', 0, 1, 'GM', 0, 0, 'HITI'),
('GEBUS', 'BATUMI', '巴统', 0, 1, 'GE', 0, 0, 'HITI'),
('GETBI', 'TBILISI', '', 0, 1, 'GE', 0, 0, 'HITI'),
('GEPOT', 'POTI', '波季', 0, 1, 'GE', 0, 0, 'HITI'),
('GEMUN', 'MUNCHEM', '', 0, 1, 'DE', 0, 0, 'HITI'),
('DEBHN', 'BREMERHAVEN', '不来梅港', 0, 1, 'DE', 0, 0, 'HITI'),
('DEBRA', 'BRAKE', '布腊克', 0, 1, 'DE', 0, 0, 'HITI'),
('DEBRE', 'BREMEN', '不来梅', 0, 1, 'DE', 0, 0, 'HITI'),
('DECOL', 'KOLN', '科隆', 0, 1, 'DE', 0, 0, 'HITI'),
('DECUX', 'CUXHAVEN', '库克斯港', 0, 1, 'DE', 0, 0, 'HITI'),
('DEDUI', 'DUISBURG', '杜伊斯堡', 0, 1, 'DE', 0, 0, 'HITI'),
('DEDUS', 'DUSSELDORF', '杜塞尔多夫', 0, 1, 'DE', 0, 0, 'HITI'),
('DEECK', 'ECKERNFORDE', '埃肯弗尔德', 0, 1, 'DE', 0, 0, 'HITI'),
('DEELS', 'ELSFLETH', '埃尔斯费莱特', 0, 1, 'DE', 0, 0, 'HITI'),
('DEEMD', 'EMDEN', '埃姆登', 0, 1, 'DE', 0, 0, 'HITI'),
('DEFLE', 'FLENSBURG', '弗伦斯堡', 0, 1, 'DE', 0, 0, 'HITI'),
('DEFRA', 'FRANKFURT', '法兰克福', 0, 1, 'DE', 0, 0, 'HITI'),
('DEGLU', 'GLUCKSTADT', '格吕克施塔特', 0, 1, 'DE', 0, 0, 'HITI'),
('DEHAM', 'HAMBURG', '汉堡', 0, 1, 'DE', 0, 0, 'HITI'),
('DEHEI', 'HEILIGENHAFEN', '海利根港', 0, 1, 'DE', 0, 0, 'HITI'),
('DEHSM', 'HUSUM(DE)', '胡苏姆', 0, 1, 'DE', 0, 0, 'HITI'),
('DEKIL', 'KIEL', '基尔', 0, 1, 'DE', 0, 0, 'HITI'),
('DEKRE', 'KREFELD', '克雷菲尔德', 0, 1, 'DE', 0, 0, 'HITI'),
('DELAB', 'LABOE', '拉伯', 0, 1, 'DE', 0, 0, 'HITI'),
('DELER', 'LEER', '累尔', 0, 1, 'DE', 0, 0, 'HITI'),
('DELUB', 'LUBECK', '吕贝克', 0, 1, 'DE', 0, 0, 'HITI'),
('DENOR', 'NORDENHAM', '诺登哈姆', 0, 1, 'DE', 0, 0, 'HITI'),
('DENUS', 'NEUSS', '诺伊斯', 0, 1, 'DE', 0, 0, 'HITI'),
('DEPAP', 'PAPENBURG', '帕彭堡', 0, 1, 'DE', 0, 0, 'HITI'),
('DEROS', 'ROSTOCK', '罗斯托克', 0, 1, 'DE', 0, 0, 'HITI'),
('DETON', 'TONNING', '滕宁', 0, 1, 'DE', 0, 0, 'HITI'),
('DEVEG', 'VEGESACK', '弗格萨克', 0, 1, 'DE', 0, 0, 'HITI'),
('DEWIL', 'WILHELMSHAVEN', '威廉港', 0, 1, 'DE', 0, 0, 'HITI'),
('DEWIS', 'WISMAR', '维斯马', 0, 1, 'DE', 0, 0, 'HITI'),
('GEMCH', 'MUNICH', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GEDOR', 'DORTMUND', '多特蒙德', 0, 1, 'DE', 0, 0, 'HITI'),
('GEFRE', 'FREILASSING', '弗赖拉辛', 0, 1, 'DE', 0, 0, 'HITI'),
('GENUR', 'NURNBERG', '纽纶堡', 0, 1, 'DE', 0, 0, 'HITI'),
('GEDUE', 'DUESSELDORF', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GEVIE', 'VIERNHEIM', '维尔海姆', 0, 1, 'DE', 0, 0, 'HITI'),
('GESPR', 'SPROCKHOEVEL', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GESTR', 'STREHLA', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GEBIN', 'BERLIN', '柏林', 0, 1, 'DE', 0, 0, 'HITI'),
('GECNE', 'COLOGNE', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GEVTA', 'VECHTA', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GEWRF', 'WARENDORF', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GEKUE', 'KARLSRHUE', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GEMEN', 'MUENCHEN', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GELEI', 'LEIPZIG', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GEWUP', 'WUPPERTAL', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GESCH', 'SCHWALMSTADT', '', 0, 1, 'DE', 0, 0, 'HITI'),
('HAM', 'HAM', '', 0, 1, 'DE', 0, 0, 'HITI'),
('GRAN', 'GRANKFORT', '', 0, 1, 'DE', 0, 0, 'HITI'),
('HAR', 'HARLSRUHE', '', 0, 1, 'DE', 0, 0, 'HITI'),
('LISS', 'LISSONTORE', '', 0, 1, 'DE', 0, 0, 'HITI'),
('DIET', 'DIETZENBACH', '', 0, 1, 'DE', 0, 0, 'HITI'),
('ESS', 'ESSEN', '', 0, 1, 'DE', 0, 0, 'HITI'),
('DRES', 'DRESDEN', '', 0, 1, 'DE', 0, 0, 'HITI'),
('DD', 'HAMBURG,GERMANY', '汉堡', 0, 1, 'DE', 0, 0, 'HITI'),
('GHACC', 'ACCRA', '阿克拉', 0, 1, 'GH', 0, 0, 'HITI'),
('GHTAK', 'TAKORADI', '塔科拉迪', 0, 1, 'GH', 0, 0, 'HITI'),
('GHTEM', 'TEMA', '特马', 0, 1, 'GH', 0, 0, 'HITI'),
('DESTR', 'STRALSUND', '斯特拉尔松', 0, 1, 'GH', 0, 0, 'HITI'),
('GIGIB', 'GIBRALTAR', '直布罗陀', 0, 1, 'GI', 0, 0, 'HITI'),
('GRATH', 'ATHENS', '雅典', 0, 1, 'GR', 0, 0, 'HITI'),
('GRSAL', 'SALONICA', '萨洛尼卡', 0, 1, 'GR', 0, 0, 'HITI'),
('GRARG', 'ARGOSTOLION', '阿戈斯托利昂', 0, 1, 'GR', 0, 0, 'HITI'),
('GRCAN', 'CANEA', '干尼亚', 0, 1, 'GR', 0, 0, 'HITI'),
('GRCFU', 'CORFU', '科孚', 0, 1, 'GR', 0, 0, 'HITI'),
('GRCOR', 'CORINTH', '科林斯', 0, 1, 'GR', 0, 0, 'HITI'),
('GRELE', 'ELEUSIS', '埃莱夫西斯', 0, 1, 'GR', 0, 0, 'HITI'),
('GRCLS', 'CHALKIS', '哈尔基斯', 0, 1, 'GR', 0, 0, 'HITI'),
('GRIRA', 'IRAKLION', '伊拉克利翁', 0, 1, 'GR', 0, 0, 'HITI'),
('GRITE', 'ITEA', '伊泰阿', 0, 1, 'GR', 0, 0, 'HITI'),
('GRITI', 'ITHAKA ISLAND', '伊萨基', 0, 1, 'GR', 0, 0, 'HITI'),
('GRKAI', 'KALYMNOS ISLAND', '卡利姆诺斯', 0, 1, 'GR', 0, 0, 'HITI'),
('GRKAL', 'KALAMATA', '卡拉迈', 0, 1, 'GR', 0, 0, 'HITI'),
('GRKAV', 'KAVALLA', '卡瓦拉', 0, 1, 'GR', 0, 0, 'HITI'),
('GRKOS', 'KOS ISLAND', '科斯岛', 0, 1, 'GR', 0, 0, 'HITI'),
('GRKOU', 'KOUTALA', '库塔拉', 0, 1, 'GR', 0, 0, 'HITI'),
('GRLAU', 'LAURIUM', '拉夫里翁', 0, 1, 'GR', 0, 0, 'HITI'),
('GRMII', 'MILOS ISLANDS', '米洛斯岛', 0, 1, 'GR', 0, 0, 'HITI'),
('GRMIT', 'MITYLENE', '米提林尼', 0, 1, 'GR', 0, 0, 'HITI'),
('GRPAT', 'PATRAS', '佩特雷', 0, 1, 'GR', 0, 0, 'HITI'),
('GRPIR', 'PIRAEUS', '比雷埃夫斯', 0, 1, 'GR', 0, 0, 'HITI'),
('GRRDI', 'RHODES ISLAND', '罗得', 0, 1, 'GR', 0, 0, 'HITI'),
('GRRET', 'RETHIMNON', '雷西姆农', 0, 1, 'GR', 0, 0, 'HITI'),
('GRSDB', 'SUDA BAY', '苏达湾', 0, 1, 'GR', 0, 0, 'HITI'),
('GRTHE', 'THESSALONIKI', '塞萨洛尼基', 0, 1, 'GR', 0, 0, 'HITI'),
('GRVLS', 'VOLOS', '伏洛斯', 0, 1, 'GR', 0, 0, 'HITI'),
('PHVIL', 'VILLANUEVA(GU)', '维拉努埃瓦', 0, 1, 'GT', 0, 0, 'HITI'),
('CLPBO', 'PUERTO BORIES', '博里奥斯港', 0, 1, 'GT', 0, 0, 'HITI'),
('GTCHA', 'CHAMPERICO', '钱佩里科', 0, 1, 'GT', 0, 0, 'HITI'),
('GTPBA', 'PUERTO BARRIOS', '巴里奥斯港', 0, 1, 'GT', 0, 0, 'HITI'),
('GTPQL', 'PUERTO QUETZAL', '圣何塞', 0, 1, 'GT', 0, 0, 'HITI'),
('GTSTC', 'SANTO TOMAS DE CASTILLA', '圣托马斯', 0, 1, 'GT', 0, 0, 'HITI'),
('GJS.T', 'S.TOMAS DE CASTILLA', '', 0, 1, 'GT', 0, 0, 'HITI'),
('GUZAC', 'ZACAPA', '扎卡帕', 0, 1, 'GT', 0, 0, 'HITI'),
('GWVIC', 'VICTORIA(GW)', '维多利亚', 0, 1, 'GW', 0, 0, 'HITI'),
('GNCON', 'CONAKRY', '科纳克里', 0, 1, 'GN', 0, 0, 'HITI'),
('GWBIS', 'BISSAU', '比绍', 0, 1, 'GN', 0, 0, 'HITI'),
('GWBOL', 'BOLAMA', '博拉多', 0, 1, 'GN', 0, 0, 'HITI'),
('GWCAC', 'CACHEU', '卡谢乌', 0, 1, 'GN', 0, 0, 'HITI'),
('GFCAY', 'CAYANNE', '卡宴', 0, 1, 'GY', 0, 0, 'HITI'),
('GYGEO', 'GEORGETOWN(GY)', '乔治敦', 0, 1, 'GY', 0, 0, 'HITI'),
('HTACA', 'AUX CAYES', '奥凯', 0, 1, 'HT', 0, 0, 'HITI'),
('HTCHA', 'CAP HAITIEN', '海地角', 0, 1, 'HT', 0, 0, 'HITI'),
('HTGON', 'GONAIVES', '戈纳伊夫', 0, 1, 'HT', 0, 0, 'HITI'),
('HTJER', 'JEREMIE', '热雷米', 0, 1, 'HT', 0, 0, 'HITI'),
('HTMIR', 'MIRAGOANE', '米腊关', 0, 1, 'HT', 0, 0, 'HITI'),
('HTPAP', 'PORT AU PRINCE', '太子港', 0, 1, 'HT', 0, 0, 'HITI'),
('HTSMC', 'ST. MARC', '圣马克', 0, 1, 'HT', 0, 0, 'HITI'),
('HOGEN', 'GENDT', '', 0, 1, 'NL', 0, 0, 'HITI'),
('HNAPA', 'AMAPALA', '阿马帕拉', 0, 1, 'HN', 0, 0, 'HITI'),
('HNLCE', 'LA CEIBA', '拉塞瓦', 0, 1, 'HN', 0, 0, 'HITI'),
('HNPCO', 'PUERTO CORTES', '科尔特斯港', 0, 1, 'HN', 0, 0, 'HITI'),
('HNSLO', 'SAN LORENZO(HN)', '圣洛伦索', 0, 1, 'HN', 0, 0, 'HITI'),
('HNTRU', 'TRUJILLO', '特鲁希略', 0, 1, 'HN', 0, 0, 'HITI'),
('HOCHO', 'CHOLOMA', '', 0, 1, 'HN', 0, 0, 'HITI'),
('HOLMA', 'LA LIMA', '拉利马', 0, 1, 'HN', 0, 0, 'HITI'),
('HOTEG', 'TEGUCIGALPA', '', 0, 1, 'HN', 0, 0, 'HITI'),
('SP', 'SAN PEDRO SULA', '', 0, 1, 'HN', 0, 0, 'HITI'),
('HOVIL', 'VILLANUEVA(HO)', '维拉努埃瓦', 0, 1, 'HN', 0, 0, 'HITI'),
('HOBUF', 'BUFALO', '布法罗', 0, 1, 'HN', 0, 0, 'HITI'),
('HUSZE', 'SZEGED', '塞格德', 0, 1, 'HU', 0, 0, 'HITI'),
('HUBUD', 'BUDAPEST', '布达佩斯', 0, 1, 'HU', 0, 0, 'HITI'),
('HUGYO', 'GYOER', '杰尔', 0, 1, 'HU', 0, 0, 'HITI'),
('HUTAT', 'TATA', '塔塔', 0, 1, 'HU', 0, 0, 'HITI'),
('HUDEB', 'DEBRECEN', '', 0, 1, 'HU', 0, 0, 'HITI'),
('GODO', 'GODOLLO', '', 0, 1, 'HU', 0, 0, 'HITI'),
('48', 'CEGLED', '', 0, 1, 'HU', 0, 0, 'HITI'),
('ISAKU', 'AKUREYRI', '阿克雷里', 0, 1, 'IS', 0, 0, 'HITI'),
('ISHAF', 'HAFNARFJORD', '哈布纳菲厄泽', 0, 1, 'IS', 0, 0, 'HITI'),
('ISHUS', 'HUSAVIK', '胡萨维克', 0, 1, 'IS', 0, 0, 'HITI'),
('ISAKR', 'AKRANES', '阿克拉内斯', 0, 1, 'IS', 0, 0, 'HITI'),
('ISISA', 'ISAFJORD', '伊萨菲厄泽', 0, 1, 'IS', 0, 0, 'HITI'),
('ISKEF', 'KEFLAVIK', '凯夫拉维克', 0, 1, 'IS', 0, 0, 'HITI'),
('ISNES', 'NESKAUPSTADUR', '内斯克伊斯塔泽', 0, 1, 'IS', 0, 0, 'HITI'),
('ISREY', 'REYKJAVIK', '雷克雅未克', 0, 1, 'IS', 0, 0, 'HITI'),
('ISSEY', 'SEYDISFJORD', '塞济斯菲厄泽', 0, 1, 'IS', 0, 0, 'HITI'),
('ISSIG', 'SIGLUFJORD', '锡格吕菲厄泽', 0, 1, 'IS', 0, 0, 'HITI'),
('ISVSI', 'VESTMANN ISLAND', '韦斯特曼纳岛', 0, 1, 'IS', 0, 0, 'HITI'),
('IECLA', 'CLARECASTLE', '克莱尔卡斯尔', 0, 1, 'IS', 0, 0, 'HITI'),
('IECLO', 'CLONAKILTY', '克洛纳基尔蒂', 0, 1, 'IS', 0, 0, 'HITI'),
('INMRL', 'MANGROLE', '曼格罗尔', 0, 1, 'IN', 0, 0, 'HITI'),
('INMVI', 'MANDVI', '曼德维', 0, 1, 'IN', 0, 0, 'HITI'),
('INNMA', 'NEW MANGALORE', '新芒格洛尔', 0, 1, 'IN', 0, 0, 'HITI'),
('INPAR', 'PARADIP', '巴拉迪布', 0, 1, 'IN', 0, 0, 'HITI'),
('INPBL', 'PORT BLAIR', '布莱尔港', 0, 1, 'IN', 0, 0, 'HITI'),
('INPJM', 'PANJIM', '潘吉姆', 0, 1, 'IN', 0, 0, 'HITI'),
('INPOK', 'PORT OKHA', '奥卡港', 0, 1, 'IN', 0, 0, 'HITI'),
('INPON', 'PONDICHERRY', '本地治里', 0, 1, 'IN', 0, 0, 'HITI'),
('INQUI', 'QUILON', '奎隆', 0, 1, 'IN', 0, 0, 'HITI'),
('INTEL', 'TELLICHERRY', '代利杰里', 0, 1, 'IN', 0, 0, 'HITI'),
('INTUT', 'TUTICORIN', '杜蒂戈林', 0, 1, 'IN', 0, 0, 'HITI'),
('INVER', 'VERAVAL', '韦拉沃尔', 0, 1, 'IN', 0, 0, 'HITI'),
('INVIS', 'VISAKHAPATNAM', '维沙卡帕特南', 0, 1, 'IN', 0, 0, 'HITI'),
('IDAMP', 'AMPENAN', '安佩南', 0, 1, 'IN', 0, 0, 'HITI'),
('IDDON', 'DONGGALA', '栋加拉', 0, 1, 'IN', 0, 0, 'HITI'),
('INALL', 'ALLEPPEY', '阿勒皮', 0, 1, 'IN', 0, 0, 'HITI'),
('INBED', 'BEDI', '贝迪', 0, 1, 'IN', 0, 0, 'HITI'),
('INBHA', 'BHAVNAGAR', '包纳加尔', 0, 1, 'IN', 0, 0, 'HITI'),
('INBHE', 'BHEEMUNIPATNAM', '比穆尼帕特南', 0, 1, 'IN', 0, 0, 'HITI'),
('INBOM', 'BOMBAY', '孟买', 0, 1, 'IN', 0, 0, 'HITI'),
('INCAL', 'CALCUTTA', '加尔格答', 0, 1, 'IN', 0, 0, 'HITI'),
('INCAM', 'CALINGAPATNAM', '格灵格伯德讷姆', 0, 1, 'IN', 0, 0, 'HITI'),
('INCAN', 'CANNANORE', '坎纳诺尔', 0, 1, 'IN', 0, 0, 'HITI'),
('INCCT', 'CALICUT', '卡利卡特', 0, 1, 'IN', 0, 0, 'HITI'),
('INCOC', 'COCHIN', '科钦', 0, 1, 'IN', 0, 0, 'HITI'),
('INCOL', 'COLACHEL', '科拉歇尔', 0, 1, 'IN', 0, 0, 'HITI'),
('INCUD', 'CUDDALORE', '库达洛尔', 0, 1, 'IN', 0, 0, 'HITI'),
('INDAM', 'DAMAN', '达曼', 0, 1, 'IN', 0, 0, 'HITI'),
('INDIU', 'DIU', '第乌', 0, 1, 'IN', 0, 0, 'HITI'),
('INHDA', 'HALDIA', '哈德雷', 0, 1, 'IN', 0, 0, 'HITI'),
('INKAK', 'KAKINADA', '卡基纳达', 0, 1, 'IN', 0, 0, 'HITI'),
('INKAN', 'KANDLA', '根德拉', 0, 1, 'IN', 0, 0, 'HITI'),
('INKAR', 'KARWAR', '加尔瓦尔', 0, 1, 'IN', 0, 0, 'HITI'),
('INMAD', 'MADRAS', '马德拉斯', 0, 1, 'IN', 0, 0, 'HITI'),
('INMAL', 'MALPE', '马尔佩', 0, 1, 'IN', 0, 0, 'HITI'),
('INMAN', 'MANGALORE', '芒格洛尔', 0, 1, 'IN', 0, 0, 'HITI'),
('INMOR', 'MORMUGAO', '莫尔穆冈', 0, 1, 'IN', 0, 0, 'HITI'),
('INNEW', 'NEW DELHI', '新德里', 0, 1, 'IN', 0, 0, 'HITI'),
('INBE', 'BEYPORE', '贝普尔', 0, 1, 'IN', 0, 0, 'HITI'),
('CHE', 'CHENNAI', '清佘', 0, 1, 'IN', 0, 0, 'HITI'),
('INNHA', 'NHAVA SHEVA', '那瓦西瓦', 0, 1, 'IN', 0, 0, 'HITI'),
('INTOM', 'TUTICOM', '', 0, 1, 'IN', 0, 0, 'HITI'),
('MUMBA', 'MUMBAI,INDIA', '孟买', 0, 1, 'IN', 0, 0, 'HITI'),
('ANRU', 'AMRITSAR', '', 0, 1, 'IN', 0, 0, 'HITI'),
('NSI', 'NSICT/INDIA', '', 0, 1, 'IN', 0, 0, 'HITI'),
('AMD', 'ICD AHMEDABD', '阿默达巴德', 0, 1, 'IN', 0, 0, 'HITI'),
('112', 'BOMBAY PORT', '孟买港', 0, 1, 'IN', 0, 0, 'HITI'),
('VIZ', 'VIZAG', '', 0, 1, 'IN', 0, 0, 'HITI'),
('IDAMI', 'AMBON ISLAND', '安汶', 0, 1, 'ID', 0, 0, 'HITI'),
('IDBAL', 'BALIKPAPAN', '巴厘巴板', 0, 1, 'ID', 0, 0, 'HITI'),
('IDBAN', 'BANJARMASIN', '马辰', 0, 1, 'ID', 0, 0, 'HITI'),
('IDBGI', 'BANYUWANGI', '巴纽旺宣', 0, 1, 'ID', 0, 0, 'HITI'),
('IDBIT', 'BITUNG', '比通', 0, 1, 'ID', 0, 0, 'HITI'),
('IDBLS', 'BENGKALIS', '本卡利斯', 0, 1, 'ID', 0, 0, 'HITI'),
('IDBLU', 'BENGKULU', '明古鲁', 0, 1, 'ID', 0, 0, 'HITI'),
('IDBMA', 'BIMA', '比马', 0, 1, 'ID', 0, 0, 'HITI'),
('IDBLN', 'BELAWAN', '勿拉湾', 0, 1, 'ID', 0, 0, 'HITI'),
('IDBNA', 'BENOA', '伯诺阿', 0, 1, 'ID', 0, 0, 'HITI'),
('IDBSA', 'BAGAN SI API AP', '巴眼牙比', 0, 1, 'ID', 0, 0, 'HITI'),
('IDCIR', 'CIREBON', '井里汶', 0, 1, 'ID', 0, 0, 'HITI'),
('IDDMI', 'DUMAI', '杜迈', 0, 1, 'ID', 0, 0, 'HITI'),
('IDFAK', 'FAK FAK', '法克法克', 0, 1, 'ID', 0, 0, 'HITI'),
('IDJAK', 'JAKARTA', '雅加达', 0, 1, 'ID', 0, 0, 'HITI'),
('IDKAL', 'KALIANGET', '卡利昂厄特', 0, 1, 'ID', 0, 0, 'HITI'),
('IDKET', 'KETAPANG', '吉打邦', 0, 1, 'ID', 0, 0, 'HITI'),
('INBEL', 'BELEKERI', '贝莱克里', 0, 1, 'ID', 0, 0, 'HITI'),
('INCOO', 'COONDAPOOR', '贡达布尔', 0, 1, 'ID', 0, 0, 'HITI'),
('INDJT', 'DJAKARAT', '雅加达', 0, 1, 'ID', 0, 0, 'HITI'),
('IDMEN', 'MENADO', '万鸦老', 0, 1, 'ID', 0, 0, 'HITI'),
('IDMEU', 'MEULABOH', '米拉务', 0, 1, 'ID', 0, 0, 'HITI'),
('IDPAD', 'PADANG', '巴东', 0, 1, 'ID', 0, 0, 'HITI'),
('IDPAL', 'PALEMBANG', '巨港', 0, 1, 'ID', 0, 0, 'HITI'),
('IDPAN', 'PANARUKAN', '巴那鲁干', 0, 1, 'ID', 0, 0, 'HITI'),
('IDPJG', 'PANJANG', '潘姜', 0, 1, 'ID', 0, 0, 'HITI'),
('IDPNK', 'PONTIANAK', '坤甸', 0, 1, 'ID', 0, 0, 'HITI'),
('IDPSU', 'PANGKALAN SUSU', '庞卡兰苏苏', 0, 1, 'ID', 0, 0, 'HITI'),
('IDSAB', 'SABANG(ID)', '沙璜', 0, 1, 'ID', 0, 0, 'HITI'),
('IDSAL', 'SALAWATI', '沙拉瓦蒂', 0, 1, 'ID', 0, 0, 'HITI'),
('IDSBS', 'SAMBAS', '三发', 0, 1, 'ID', 0, 0, 'HITI'),
('IDSEM', 'SEMARANG', '三宝垄', 0, 1, 'ID', 0, 0, 'HITI'),
('IDSOR', 'SORONG', '索龙', 0, 1, 'ID', 0, 0, 'HITI'),
('IDSUR', 'SURABAYA', '泗水', 0, 1, 'ID', 0, 0, 'HITI'),
('IDTAI', 'TARAKAN', '打拉根', 0, 1, 'ID', 0, 0, 'HITI'),
('IDTBN', 'TUBAN', '图班', 0, 1, 'ID', 0, 0, 'HITI'),
('IDTEL', 'TELUKBETUNG', '直落勿洞', 0, 1, 'ID', 0, 0, 'HITI'),
('IDTPR', 'TANJUNG PRIOK', '丹戒不碌', 0, 1, 'ID', 0, 0, 'HITI'),
('IDTUB', 'TANJUNG UBAN', '丹戒乌班', 0, 1, 'ID', 0, 0, 'HITI'),
('INDJA', 'DJAJAPURA', '贾贾普拉', 0, 1, 'ID', 0, 0, 'HITI'),
('INDJU', 'DJUWANA', '朱瓦纳', 0, 1, 'ID', 0, 0, 'HITI'),
('BP', 'BATAM PULAU', '', 0, 1, 'ID', 0, 0, 'HITI'),
('INBAN', 'BANDUNG', '万隆', 0, 1, 'ID', 0, 0, 'HITI'),
('TAN', 'TANJUNG EMAS PORT,SEMARANG', '', 0, 1, 'ID', 0, 0, 'HITI'),
('JK1', 'JAKARTA UTC1', '雅加达(1号码头)', 0, 1, 'ID', 0, 0, 'HITI'),
('JK2', 'JAKARTA UTC2', '雅加达(2号码头)', 0, 1, 'ID', 0, 0, 'HITI'),
('JK3', 'JAKARTA UTC3', '雅加达3号码头', 0, 1, 'ID', 0, 0, 'HITI'),
('UPG', 'UJUNG PANDANG', '乌戎潘当', 0, 1, 'ID', 0, 0, 'HITI'),
('IDJKT', 'IDJKT', '', 0, 1, 'ID', 0, 0, 'HITI'),
('IRABA', 'ABADAN', '阿巴丹', 0, 1, 'IR', 0, 0, 'HITI'),
('IRBAB', 'BANDAR ABBAS', '阿巴斯港', 0, 1, 'IR', 0, 0, 'HITI'),
('IRBKH', 'BANDAR KHOMEINI', '霍梅尼港', 0, 1, 'IR', 0, 0, 'HITI'),
('IRBMA', 'BANDAR SHAHPUR', '沙赫普尔港', 0, 1, 'IR', 0, 0, 'HITI'),
('IRBUS', 'BUSHIRE', '布什尔', 0, 1, 'IR', 0, 0, 'HITI'),
('IRKGI', 'KHARG ISLAND', '哈尔克岛', 0, 1, 'IR', 0, 0, 'HITI'),
('IRKHO', 'KHORRAMSHAHR', '霍拉姆沙赫尔', 0, 1, 'IR', 0, 0, 'HITI'),
('IDPBN', 'PANGKALAN BUN', '庞卡兰布翁', 0, 1, 'IR', 0, 0, 'HITI'),
('IQBAS', 'BASRAH', '巴士拉', 0, 1, 'IQ', 0, 0, 'HITI'),
('IQFAO', 'FAO', '法奥', 0, 1, 'IQ', 0, 0, 'HITI'),
('IQKAA', 'KHOR AL AMAYA', '豪尔艾迈耶', 0, 1, 'IQ', 0, 0, 'HITI'),
('IQUMQ', 'UMM QASR', '乌姆卡萨', 0, 1, 'IQ', 0, 0, 'HITI'),
('KWKAM', 'KHOR AL MUFATTA', '霍尔姆法塔', 0, 1, 'IQ', 0, 0, 'HITI'),
('IQRAS', 'BASRA', '巴士拉', 0, 1, 'IQ', 0, 0, 'HITI'),
('NZWES', 'WESTPORT', '韦斯特皮特', 0, 1, 'IE', 0, 0, 'HITI'),
('IECOK', 'CORK', '科克', 0, 1, 'IE', 0, 0, 'HITI'),
('IEDCN', 'DUNCANNON', '邓坎嫩', 0, 1, 'IE', 0, 0, 'HITI'),
('IEDDK', 'DUNDALK', '邓多克', 0, 1, 'IE', 0, 0, 'HITI'),
('IEDON', 'DONEGAL', '多尼戈尔', 0, 1, 'IE', 0, 0, 'HITI'),
('IEDRO', 'DROGHEDA', '德罗赫达', 0, 1, 'IE', 0, 0, 'HITI'),
('IEDUB', 'DUBLIN', '都柏林', 0, 1, 'IE', 0, 0, 'HITI'),
('IEDUL', 'DUN LAOGHAIRE', '敦劳费尔', 0, 1, 'IE', 0, 0, 'HITI'),
('IEDUN', 'DUNMORE', '邓莫尔', 0, 1, 'IE', 0, 0, 'HITI'),
('IEDVN', 'DUNGARVAN', '邓加文', 0, 1, 'IE', 0, 0, 'HITI'),
('IEFNT', 'FENIT', '费尼特', 0, 1, 'IE', 0, 0, 'HITI'),
('IEFOY', 'FOYNES', '福因斯', 0, 1, 'IE', 0, 0, 'HITI'),
('IEGAL', 'GALWAY', '戈尔韦', 0, 1, 'IE', 0, 0, 'HITI'),
('IEHOW', 'HOWTH', '霍思', 0, 1, 'IE', 0, 0, 'HITI'),
('IEKIN', 'KINSALE', '金塞尔', 0, 1, 'IE', 0, 0, 'HITI'),
('IEKLA', 'KILLALA', '基拉拉', 0, 1, 'IE', 0, 0, 'HITI'),
('IEKSH', 'KILRUSH', '基尔拉什', 0, 1, 'IE', 0, 0, 'HITI'),
('IEKGS', 'KILLYBEGS', '基利贝格斯', 0, 1, 'IE', 0, 0, 'HITI'),
('IELIM', 'LIMERICK', '利默里克', 0, 1, 'IE', 0, 0, 'HITI'),
('IEMOV', 'MOVILLE', '莫维尔', 0, 1, 'IE', 0, 0, 'HITI'),
('IENRS', 'NEW ROSS', '新罗斯', 0, 1, 'IE', 0, 0, 'HITI'),
('IEROS', 'ROSSLARE', '罗斯莱尔', 0, 1, 'IE', 0, 0, 'HITI'),
('IEVAL', 'VALENTIA', '瓦伦西亚', 0, 1, 'IE', 0, 0, 'HITI'),
('IEWAT', 'WATERFORD', '沃特福德', 0, 1, 'IE', 0, 0, 'HITI'),
('IEWIC', 'WICKLOW', '威克洛', 0, 1, 'IE', 0, 0, 'HITI'),
('IEYOU', 'YOUGHAL', '约尔', 0, 1, 'IE', 0, 0, 'HITI'),
('IEARK', 'ARKLOW', '阿克洛', 0, 1, 'IE', 0, 0, 'HITI'),
('IEBAL', 'BALTIMORE(IE)', '巴尔的摩', 0, 1, 'IE', 0, 0, 'HITI'),
('IEBAN', 'BANTRY', '班特里', 0, 1, 'IE', 0, 0, 'HITI'),
('IEBNA', 'BALLINA', '巴利纳', 0, 1, 'IE', 0, 0, 'HITI'),
('IEBUP', 'BURTON PORT', '伯顿波特', 0, 1, 'IE', 0, 0, 'HITI'),
('IECAH', 'CAHIRCIVEEN', '克尔西文', 0, 1, 'IE', 0, 0, 'HITI'),
('IRCOR', 'CORKIRELAND', '科克', 0, 1, 'IE', 0, 0, 'HITI'),
('IRBEL', 'BELFAST(IR)', '贝尔法斯特', 0, 1, 'IE', 0, 0, 'HITI'),
('CAV', 'CAVAN', '', 0, 1, 'IE', 0, 0, 'HITI'),
('ILASD', 'ASHDOD', '阿什杜德', 0, 1, 'IL', 0, 0, 'HITI'),
('ILASH', 'ASHKELON', '阿什克伦', 0, 1, 'IL', 0, 0, 'HITI'),
('ILHFA', 'HAIFA', '海法', 0, 1, 'IL', 0, 0, 'HITI'),
('ITALG', 'ALGHERO', '阿尔盖罗', 0, 1, 'IT', 0, 0, 'HITI'),
('ITBAG', 'BAGNOLI', '巴尼奥利', 0, 1, 'IT', 0, 0, 'HITI'),
('ITBAR', 'BARI', '巴里', 0, 1, 'IT', 0, 0, 'HITI'),
('ITBRI', 'BRINDISI', '布林迪西', 0, 1, 'IT', 0, 0, 'HITI'),
('ITBTA', 'BARLETTA', '巴列塔', 0, 1, 'IT', 0, 0, 'HITI'),
('ITCAG', 'CAGLIARI', '卡利亚里', 0, 1, 'IT', 0, 0, 'HITI'),
('ITANC', 'ANCONA', '安科纳', 0, 1, 'IT', 0, 0, 'HITI'),
('ITANZ', 'ANZIO', '安齐奥', 0, 1, 'IT', 0, 0, 'HITI'),
('ITAUG', 'AUGUSTA', '奥古斯塔', 0, 1, 'IT', 0, 0, 'HITI'),
('ITAVO', 'AVOLA', '阿沃拉', 0, 1, 'IT', 0, 0, 'HITI'),
('ITCAR', 'CARLOFORTE', '卡洛福泰', 0, 1, 'IT', 0, 0, 'HITI'),
('ITCAT', 'CATANIA', '卡塔尼亚', 0, 1, 'IT', 0, 0, 'HITI'),
('ITCDS', 'CAST. DI STABIA', '斯塔比亚海堡', 0, 1, 'IT', 0, 0, 'HITI'),
('ITCHI', 'CHIOGGIA', '基奥贾', 0, 1, 'IT', 0, 0, 'HITI'),
('ITCIV', 'CIVITAVECCHIA', '奇维塔韦基亚', 0, 1, 'IT', 0, 0, 'HITI'),
('ITCRE', 'CROTONE', '克罗托内', 0, 1, 'IT', 0, 0, 'HITI'),
('ITCRO', 'CATANZARO', '卡坦扎罗', 0, 1, 'IT', 0, 0, 'HITI'),
('ITFIU', 'FIUMICINO', '菲乌米奇诺', 0, 1, 'IT', 0, 0, 'HITI'),
('ITFOL', 'FOLLONICA', '福洛尼卡', 0, 1, 'IT', 0, 0, 'HITI'),
('ITGAE', 'GAETA', '加埃塔', 0, 1, 'IT', 0, 0, 'HITI'),
('ITGAI', 'GOLFO ARANCI', '阿兰奇湾城', 0, 1, 'IT', 0, 0, 'HITI'),
('ITGAL', 'GALLIPOLI', '加利波利', 0, 1, 'IT', 0, 0, 'HITI'),
('ITGEL', 'GELA', '杰拉', 0, 1, 'IT', 0, 0, 'HITI'),
('ITGOA', 'GENOA', '热那亚', 0, 1, 'IT', 0, 0, 'HITI'),
('ITIMP', 'IMPERIA', '因佩里亚', 0, 1, 'IT', 0, 0, 'HITI'),
('ITLIC', 'LICATA', '利卡塔', 0, 1, 'IT', 0, 0, 'HITI'),
('ITLMA', 'LA MADDALENA', '拉马达莱那', 0, 1, 'IT', 0, 0, 'HITI'),
('ITMAR', 'MARSALA', '马尔萨拉', 0, 1, 'IT', 0, 0, 'HITI'),
('ITMDC', 'MARINA DI CARRARA', '马里纳迪卡拉拉', 0, 1, 'IT', 0, 0, 'HITI'),
('ITMDV', 'MAZARA DEL VALL', '马扎拉德尔瓦洛', 0, 1, 'IT', 0, 0, 'HITI'),
('ITMES', 'MESSINA', '墨西拿', 0, 1, 'IT', 0, 0, 'HITI'),
('ITMIL', 'MILAZZO', '米拉佐', 0, 1, 'IT', 0, 0, 'HITI'),
('ITMLI', 'MONOPOLI', '莫诺波利', 0, 1, 'IT', 0, 0, 'HITI'),
('ITMOL', 'MOLFETTA', '莫尔费塔', 0, 1, 'IT', 0, 0, 'HITI'),
('ITNAP', 'NAPLES', '那不勒斯', 0, 1, 'IT', 0, 0, 'HITI'),
('ITOLB', 'OLBIA', '奥尔比亚', 0, 1, 'IT', 0, 0, 'HITI'),
('ITORI', 'ORISTANO', '奥里斯塔诺', 0, 1, 'IT', 0, 0, 'HITI'),
('ITPAL', 'PALERMO', '巴勒莫', 0, 1, 'IT', 0, 0, 'HITI'),
('ITPAZ', 'PORTO AZZURRO', '阿祖罗港', 0, 1, 'IT', 0, 0, 'HITI'),
('ITPEM', 'PORTO EMPEDOCLE', '恩佩多克莱港', 0, 1, 'IT', 0, 0, 'HITI'),
('ITPES', 'PESCARA', '佩斯卡拉', 0, 1, 'IT', 0, 0, 'HITI'),
('ITPFO', 'PORTO FERRAIO', '费拉约港', 0, 1, 'IT', 0, 0, 'HITI'),
('ITPIO', 'PIOMBINO', '皮翁比诺', 0, 1, 'IT', 0, 0, 'HITI'),
('ITPOZ', 'POZZUOLI', '波佐利', 0, 1, 'IT', 0, 0, 'HITI'),
('ITPRO', 'PESARO', '佩萨罗', 0, 1, 'IT', 0, 0, 'HITI'),
('ITPSO', 'PORTOSCUSO', '斯库索港', 0, 1, 'IT', 0, 0, 'HITI'),
('ITPTO', 'PORTO TORRES', '托雷斯港', 0, 1, 'IT', 0, 0, 'HITI'),
('ITRAV', 'RAVENNA', '腊万纳', 0, 1, 'IT', 0, 0, 'HITI'),
('ITSAL', 'SALERNO', '萨莱诺', 0, 1, 'IT', 0, 0, 'HITI'),
('ITSAR', 'SARROCH', '萨罗奇', 0, 1, 'IT', 0, 0, 'HITI'),
('ITSAV', 'SAVONA', '萨沃纳', 0, 1, 'IT', 0, 0, 'HITI'),
('ITRMA', 'RIO MARINA', '里奥马里纳', 0, 1, 'IT', 0, 0, 'HITI'),
('ITSPE', 'LA SPEZIA', '拉斯佩齐亚', 0, 1, 'IT', 0, 0, 'HITI'),
('ITSRE', 'SAN REMO', '圣雷莫', 0, 1, 'IT', 0, 0, 'HITI'),
('ITTAL', 'TALAMONE', '塔拉莫内', 0, 1, 'IT', 0, 0, 'HITI'),
('ITTAR', 'TARANTO', '塔兰托', 0, 1, 'IT', 0, 0, 'HITI'),
('ITTDG', 'TORRE DEL GRECO', '托雷德尔格雷科', 0, 1, 'IT', 0, 0, 'HITI'),
('ITTRA', 'TRAPANI', '特拉帕尼', 0, 1, 'IT', 0, 0, 'HITI'),
('ITTRI', 'TRIESTE', '的里雅斯特', 0, 1, 'IT', 0, 0, 'HITI'),
('ITVEN', 'VENICE', '威尼斯', 0, 1, 'IT', 0, 0, 'HITI'),
('DKRON', 'RONNE', '伦讷', 0, 1, 'IT', 0, 0, 'HITI'),
('LEGHO', 'LEGHORN', '莱戈恩', 0, 1, 'IT', 0, 0, 'HITI'),
('ITROM', 'ROMA', '罗马', 0, 1, 'IT', 0, 0, 'HITI'),
('GENOV', 'GENOVA', '热那亚', 0, 1, 'IT', 0, 0, 'HITI'),
('NAPOL', 'NAPOLI', '那波利', 0, 1, 'IT', 0, 0, 'HITI'),
('ITLIV', 'LIVORNO', '里窝那', 0, 1, 'IT', 0, 0, 'HITI'),
('ITMLA', 'MILANO', '米兰', 0, 1, 'IT', 0, 0, 'HITI'),
('ITTOR', 'TORINO', '', 0, 1, 'IT', 0, 0, 'HITI'),
('ITVER', 'VERONA', '', 0, 1, 'IT', 0, 0, 'HITI'),
('ITCMO', 'COMO', '科莫', 0, 1, 'IT', 0, 0, 'HITI'),
('ITGE', 'GENOA PORT,ITALY', '热那亚', 0, 1, 'IT', 0, 0, 'HITI'),
('IT-PO', 'GENOVA PORT-ITALY', '热那亚', 0, 1, 'IT', 0, 0, 'HITI'),
('NOVA', 'GENOVA PORT', '热那亚', 0, 1, 'IT', 0, 0, 'HITI'),
('BIE', 'BIELLA', '', 0, 1, 'IT', 0, 0, 'HITI'),
('FLOR', 'FLORENCE', '', 0, 1, 'IT', 0, 0, 'HITI'),
('TUR', 'TURIN', '', 0, 1, 'IT', 0, 0, 'HITI'),
('PRA', 'PRATO', '普拉托', 0, 1, 'IT', 0, 0, 'HITI'),
('BOLO', 'BOLOGNA', '', 0, 1, 'IT', 0, 0, 'HITI'),
('41', 'VENICE,ITALY', '威尼斯', 0, 1, 'IT', 0, 0, 'HITI'),
('JMRCP', 'ROCKY POINT', '罗基波因特', 0, 1, 'JM', 0, 0, 'HITI'),
('JMBLR', 'BLACK RIVER', '布莱克河', 0, 1, 'JM', 0, 0, 'HITI'),
('JMBLU', 'BLUEFIELDS(JM)', '布卢菲尔兹', 0, 1, 'JM', 0, 0, 'HITI'),
('JMFAL', 'FALMOUTH(JM)', '法尔茅斯', 0, 1, 'JM', 0, 0, 'HITI'),
('JMKIN', 'KINGSTON(JM)', '金斯敦', 0, 1, 'JM', 0, 0, 'HITI'),
('JMLUC', 'LUCEA', '卢西', 0, 1, 'JM', 0, 0, 'HITI'),
('JMMOB', 'MONTEGO BAY', '蒙特哥湾', 0, 1, 'JM', 0, 0, 'HITI'),
('JMORB', 'OCHO RIOS BAY', '奥乔里奥斯湾', 0, 1, 'JM', 0, 0, 'HITI'),
('JMPAN', 'PORT ANTONIO', '安东尼奥港', 0, 1, 'JM', 0, 0, 'HITI'),
('JMPES', 'PORT ESQUIVEL', '埃斯基韦尔港', 0, 1, 'JM', 0, 0, 'HITI'),
('JMPKA', 'PORT KAISER', '凯泽港', 0, 1, 'JM', 0, 0, 'HITI'),
('JMPMO', 'PORT MORANT', '莫兰特港', 0, 1, 'JM', 0, 0, 'HITI'),
('JMPRO', 'PORT ROYAL(JM)', '罗亚尔港', 0, 1, 'JM', 0, 0, 'HITI'),
('JPAIO', 'AIOI', '相生', 0, 1, 'JP', 0, 0, 'HITI'),
('JPAKI', 'AKITA', '秋田', 0, 1, 'JP', 0, 0, 'HITI'),
('JPAKW', 'AKO WAN', '赤穗湾', 0, 1, 'JP', 0, 0, 'HITI'),
('JPAIN', 'AINOURA', '相浦', 0, 1, 'JP', 0, 0, 'HITI'),
('JPAMA', 'AMAGASAKI', '尼崎', 0, 1, 'JP', 0, 0, 'HITI'),
('JPAOM', 'AOMORI', '青森', 0, 1, 'JP', 0, 0, 'HITI'),
('JPATS', 'ATSUMI', '渥美', 0, 1, 'JP', 0, 0, 'HITI'),
('JPCBA', 'CHIBA', '千叶', 0, 1, 'JP', 0, 0, 'HITI'),
('JPCHI', 'CHITA', '知多', 0, 1, 'JP', 0, 0, 'HITI'),
('JPENA', 'ENA', '江名', 0, 1, 'JP', 0, 0, 'HITI'),
('JPETA', 'ETAJIMA', '江田岛', 0, 1, 'JP', 0, 0, 'HITI'),
('JPFKA', 'FUKUOKA', '福冈', 0, 1, 'JP', 0, 0, 'HITI'),
('JPFUK', 'FUKUYAMA', '福山', 0, 1, 'JP', 0, 0, 'HITI'),
('JPFUS', 'FUSHIKI', '伏木', 0, 1, 'JP', 0, 0, 'HITI'),
('JPHAC', 'HACHINOHE', '八户', 0, 1, 'JP', 0, 0, 'HITI'),
('JPHAK', 'HAKODATE', '函馆', 0, 1, 'JP', 0, 0, 'HITI'),
('JPHIA', 'HIAGARI', '日明', 0, 1, 'JP', 0, 0, 'HITI'),
('JPHIT', 'HITACHI', '日立', 0, 1, 'JP', 0, 0, 'HITI'),
('JPHMA', 'HIROSHIMA', '广岛', 0, 1, 'JP', 0, 0, 'HITI'),
('JPHOS', 'HOSOSHIMA', '细岛', 0, 1, 'JP', 0, 0, 'HITI'),
('JPHSU', 'HAMAMATSU', '滨松', 0, 1, 'JP', 0, 0, 'HITI'),
('JPHTA', 'HIROHATA', '广田', 0, 1, 'JP', 0, 0, 'HITI'),
('JPIMA', 'IMABARI', '今治', 0, 1, 'JP', 0, 0, 'HITI'),
('JPINN', 'INNOSHIMA', '因岛', 0, 1, 'JP', 0, 0, 'HITI'),
('JPISH', 'ISHINOMAKI', '石卷', 0, 1, 'JP', 0, 0, 'HITI'),
('JPIWA', 'IWAKUNI', '岩国', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKAG', 'KAGOSHIMA', '鹿儿岛', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKAI', 'KAINAN', '海南', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKAK', 'KAKOGAWA', '加古川', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKAM', 'KAMAISHI', '釜石', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKAW', 'KAWASAKI', '川崎', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKII', 'KIIRE', '喜入', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKIK', 'KIKUMA', '菊间', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKIN', 'KINUURA', '衣浦', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKIS', 'KIMITSU', '君津', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKIT', 'KITAKYUSHU', '北九州', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKMA', 'KASHIMA', '鹿岛', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKOB', 'KOBE', '神户', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKOC', 'KOCHI', '高知', 0, 1, 'JP', 0, 0, 'HITI'),
('JPSHI', 'SHIMONOSEKI', '下关', 0, 1, 'JP', 0, 0, 'HITI'),
('JPSKI', 'SAKAI', '棵', 0, 1, 'JP', 0, 0, 'HITI'),
('JPSSU', 'SHIMOTSU', '下津', 0, 1, 'JP', 0, 0, 'HITI'),
('JPSTA', 'SAKATA', '洒田', 0, 1, 'JP', 0, 0, 'HITI'),
('JPSZU', 'SHIMIZU', '清水', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTAM', 'TAMANO', '玉野', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTAN', 'TANABE', '田边', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTKU', 'TAKAMATSU', '高松', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTMI', 'TSUKUMI', '津久见', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTOA', 'TOKUYAMA', '德山', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTOB', 'TOBATA', '户*', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTOK', 'TOKYO', '东京', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTOM', 'TOMAKOMAI', '苫小牧', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTON', 'TONDA', '富田', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTOS', 'TOYAMA SINKO', '富山新港', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTOY', 'TOYOHASHI', '丰桥', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTSU', 'TSU', '津', 0, 1, 'JP', 0, 0, 'HITI'),
('JPTYA', 'TOYAMA', '富山', 0, 1, 'JP', 0, 0, 'HITI'),
('JPUBE', 'UBE', '宇部', 0, 1, 'JP', 0, 0, 'HITI'),
('JPUNO', 'UNO', '宇野', 0, 1, 'JP', 0, 0, 'HITI'),
('JPWAK', 'WAKKANAI', '稚内', 0, 1, 'JP', 0, 0, 'HITI'),
('JPWKA', 'WAKAYAMA', '和歌山', 0, 1, 'JP', 0, 0, 'HITI'),
('JPWKU', 'WAKAMATSU', '若松', 0, 1, 'JP', 0, 0, 'HITI'),
('JPYAW', 'YAWATA', '八幡', 0, 1, 'JP', 0, 0, 'HITI'),
('JPYCI', 'YOKKAICHI', '四日市', 0, 1, 'JP', 0, 0, 'HITI'),
('JPYKA', 'YOKOSUKA', '横须贺', 0, 1, 'JP', 0, 0, 'HITI'),
('JPYOK', 'YOKOHAMA', '横滨', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKOE', 'KAWANOE', '川之江', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKOK', 'KOKURA', '小仓', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKOM', 'KOMATSUSHIMA', '小松岛', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKON', 'KONOSHIMA', '神岛', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKUD', 'KUDAMATSU', '下松', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKUI', 'KUROSAKI', '黑崎', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKUR', 'KURE', '吴港', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKUS', 'KUSHIRO', '钏路', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKWA', 'KANOKAWA', '鹿川', 0, 1, 'JP', 0, 0, 'HITI'),
('JPKWN', 'KIN WAN', '金湾', 0, 1, 'JP', 0, 0, 'HITI'),
('JPMAI', 'MAIZURU', '舞鹤', 0, 1, 'JP', 0, 0, 'HITI'),
('JPMAK', 'MAKIYAMA', '牧山', 0, 1, 'JP', 0, 0, 'HITI'),
('JPMIZ', 'MIZUSHIMA', '水岛', 0, 1, 'JP', 0, 0, 'HITI'),
('JPMKE', 'MIIKE', '三池', 0, 1, 'JP', 0, 0, 'HITI'),
('JPMKO', 'MIYAKO', '宫古', 0, 1, 'JP', 0, 0, 'HITI'),
('JPMMA', 'MATSUYAMA', '松山', 0, 1, 'JP', 0, 0, 'HITI'),
('JPMOJ', 'MOJI', '门司', 0, 1, 'JP', 0, 0, 'HITI'),
('JPMUR', 'MURORAN', '室兰', 0, 1, 'JP', 0, 0, 'HITI'),
('JPNAG', 'NAGOYA', '名古屋', 0, 1, 'JP', 0, 0, 'HITI'),
('JPNAH', 'NAHA', '那霸', 0, 1, 'JP', 0, 0, 'HITI'),
('JPNAO', 'NAOETSU', '直江津', 0, 1, 'JP', 0, 0, 'HITI'),
('JPNHI', 'NIIGATA', '新泻', 0, 1, 'JP', 0, 0, 'HITI'),
('JPNKI', 'NAGASAKI', '长崎', 0, 1, 'JP', 0, 0, 'HITI'),
('JPNMA', 'NIIHAMA', '新居滨', 0, 1, 'JP', 0, 0, 'HITI'),
('JPOFU', 'OFUNATO', '大船渡', 0, 1, 'JP', 0, 0, 'HITI'),
('JPOIT', 'OITA', '大分', 0, 1, 'JP', 0, 0, 'HITI'),
('JPONA', 'ONAHAMA', '小名滨', 0, 1, 'JP', 0, 0, 'HITI'),
('JPOSK', 'OSAKA', '大阪', 0, 1, 'JP', 0, 0, 'HITI'),
('JPOTA', 'OTARU', '小樽', 0, 1, 'JP', 0, 0, 'HITI'),
('JPSBO', 'SASEBO', '佐世保', 0, 1, 'JP', 0, 0, 'HITI'),
('JPSDE', 'SAKAIDE', '坂出', 0, 1, 'JP', 0, 0, 'HITI'),
('JPSDS', 'SENDAI SI', '川内市', 0, 1, 'JP', 0, 0, 'HITI'),
('JPSEN', 'SENDAI', '仙台', 0, 1, 'JP', 0, 0, 'HITI'),
('JAHAK', 'HAKATA', '博多', 0, 1, 'JP', 0, 0, 'HITI'),
('JAIRY', 'IMABARY', '今治', 0, 1, 'JP', 0, 0, 'HITI'),
('JANAU', 'NAUETSU', '直江津', 0, 1, 'JP', 0, 0, 'HITI'),
('JAMRA', 'MAIZURA', '舞鹤', 0, 1, 'JP', 0, 0, 'HITI'),
('JAPAN', 'OSAKA,JAPAN', '大阪', 0, 1, 'JP', 0, 0, 'HITI'),
('JASAI', 'SAIPN', '塞班', 0, 1, 'JP', 0, 0, 'HITI'),
('SEN', 'SENBOKU', '', 0, 1, 'JP', 0, 0, 'HITI'),
('PTA', 'PTAUR', '小撙', 0, 1, 'JP', 0, 0, 'HITI'),
('KUMO', 'KUMAMOTO', '熊本', 0, 1, 'JP', 0, 0, 'HITI'),
('SAP', 'SAPPORO', '扎幌', 0, 1, 'JP', 0, 0, 'HITI'),
('TSR', 'TSRUGA', '', 0, 1, 'JP', 0, 0, 'HITI'),
('JOAQA', 'AQABA', '亚喀巴', 0, 1, 'JO', 0, 0, 'HITI'),
('AQB', 'AQABA FREEZONE', '亚客巴(F.Z)', 0, 1, 'JO', 0, 0, 'HITI'),
('KHKPS', 'KOMPONG SOM', '磅逊', 0, 1, 'KH', 0, 0, 'HITI'),
('KHPPH', 'PHNOM-PENH', '金边', 0, 1, 'KH', 0, 0, 'HITI'),
('KASIH', 'SIHANOUKEVILLE CAMBODIA', '西哈努克', 0, 1, 'KH', 0, 0, 'HITI'),
('KAKEM', 'KEMPONGSOM', '旁逊', 0, 1, 'KH', 0, 0, 'HITI'),
('KAALM', 'ALMATY', '', 0, 1, 'KA', 0, 0, 'HITI'),
('KELAM', 'LAMU', '拉穆', 0, 1, 'KE', 0, 0, 'HITI'),
('KEMAL', 'MALINDI', '马林迪', 0, 1, 'KE', 0, 0, 'HITI'),
('KEMOM', 'MOMBASA', '蒙巴萨', 0, 1, 'KE', 0, 0, 'HITI'),
('KWKUW', 'KUWAIT', '科威特', 0, 1, 'KW', 0, 0, 'HITI'),
('KWMAA', 'MENA AL AHMADI', '米纳艾哈迈迪', 0, 1, 'KW', 0, 0, 'HITI'),
('KWMAB', 'MENA ABDULLA', '米纳阿卜杜拉', 0, 1, 'KW', 0, 0, 'HITI'),
('KWSHU', 'SHUAIBA', '舒艾拜', 0, 1, 'KW', 0, 0, 'HITI'),
('LVRIX', 'RIGA', '里加', 0, 1, 'LV', 0, 0, 'HITI'),
('LVVHT', 'VENTSPILS', '文茨皮尔斯', 0, 1, 'LV', 0, 0, 'HITI'),
('LBBRT', 'BEIRUT', '贝鲁特', 0, 1, 'LB', 0, 0, 'HITI'),
('LBCHE', 'CHEKKA', '舍卡', 0, 1, 'LB', 0, 0, 'HITI'),
('LBJOU', 'JOUNIEH', '朱尼耶', 0, 1, 'LB', 0, 0, 'HITI'),
('LBSID', 'SIDON', '西顿', 0, 1, 'LB', 0, 0, 'HITI'),
('LBSOU', 'SOUR', '苏尔', 0, 1, 'LB', 0, 0, 'HITI'),
('LBTRI', 'TRIPOLI(LB)', '的黎波里', 0, 1, 'LB', 0, 0, 'HITI'),
('LRBUC', 'BUCHANAN(LR)', '布坎南', 0, 1, 'LR', 0, 0, 'HITI'),
('LRCPA', 'CAPE PALMAS', '帕尔马斯角', 0, 1, 'LR', 0, 0, 'HITI'),
('LRGBA', 'GRAND BASSA', '大巴萨', 0, 1, 'LR', 0, 0, 'HITI'),
('LRRCS', 'RIVER CESS', '里弗塞斯', 0, 1, 'LR', 0, 0, 'HITI'),
('LRMIA', 'MONROVIA', '蒙罗维亚', 0, 1, 'LR', 0, 0, 'HITI'),
('LYBEN', 'BENGHAZI', '班加西', 0, 1, 'LY', 0, 0, 'HITI'),
('LYDER', 'DERNA', '德尔纳', 0, 1, 'LY', 0, 0, 'HITI'),
('LYESR', 'ES SIDER', '锡德尔', 0, 1, 'LY', 0, 0, 'HITI'),
('LYMEB', 'MARSA EL BREGA', '马萨勃利加', 0, 1, 'LY', 0, 0, 'HITI'),
('LYMIS', 'MISURATA', '米苏拉塔区', 0, 1, 'LY', 0, 0, 'HITI'),
('LYRLA', 'RAS LANUF', '拉斯拉努夫', 0, 1, 'LY', 0, 0, 'HITI'),
('LYTOB', 'TOBRUK', '图卜鲁格', 0, 1, 'LY', 0, 0, 'HITI'),
('LYTRI', 'TRIPOLI(LY)', '的黎波里', 0, 1, 'LY', 0, 0, 'HITI'),
('LYZUE', 'ZUETINA', '祖埃提纳', 0, 1, 'LY', 0, 0, 'HITI'),
('LTKLA', 'KLAIPEDA', '克莱佩达', 0, 1, 'LT', 0, 0, 'HITI'),
('LIVIL', 'VILNIUS', '维尔纽斯', 0, 1, 'LT', 0, 0, 'HITI'),
('LIKLA', 'KLAPEIDA', '', 0, 1, 'LT', 0, 0, 'HITI');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('LIKDA', 'KLAPEIDA', '', 0, 1, 'LT', 0, 0, 'HITI'),
('LUXEM', 'LUXEMBOURG', '卢森堡', 0, 1, 'LU', 0, 0, 'HITI'),
('ARDIA', 'DIAMANTE', '迪亚曼泰', 0, 1, 'MG', 0, 0, 'HITI'),
('MGANA', 'ANALALAVA', '阿纳拉拉瓦', 0, 1, 'MG', 0, 0, 'HITI'),
('MGANT', 'ANTSIRANANA', '安齐拉纳纳', 0, 1, 'MG', 0, 0, 'HITI'),
('MGFAR', 'FARAFANGANA', '法拉凡加纳', 0, 1, 'MG', 0, 0, 'HITI'),
('MGAHA', 'ANTALAHA', '安塔拉哈', 0, 1, 'MG', 0, 0, 'HITI'),
('MGFDA', 'Fort Dauphin', '多凡堡', 0, 1, 'MG', 0, 0, 'HITI'),
('MGMAH', 'MAJUNGA', '马任加', 0, 1, 'MG', 0, 0, 'HITI'),
('MGMAR', 'MAROANTSETRA', '马鲁安采特拉', 0, 1, 'MG', 0, 0, 'HITI'),
('MGMBE', 'MOROMBE', '穆龙贝', 0, 1, 'MG', 0, 0, 'HITI'),
('MGMRA', 'MANAKARA', '马纳卡拉', 0, 1, 'MG', 0, 0, 'HITI'),
('MGMRY', 'MANANJARY', '马南扎里', 0, 1, 'MG', 0, 0, 'HITI'),
('MGMVA', 'MORONDAVA', '穆龙达瓦', 0, 1, 'MG', 0, 0, 'HITI'),
('MGNBE', 'NOSY BE', '贝岛', 0, 1, 'MG', 0, 0, 'HITI'),
('MGSAM', 'SAMBAVA', '桑巴瓦', 0, 1, 'MG', 0, 0, 'HITI'),
('MGTOA', 'TOAMASINA', '图阿马西纳', 0, 1, 'MG', 0, 0, 'HITI'),
('MGTOL', 'TOLEARY', '图莱亚尔', 0, 1, 'MG', 0, 0, 'HITI'),
('MGTRO', 'TOLAGNARO', '托拉纳罗', 0, 1, 'MG', 0, 0, 'HITI'),
('MATAM', 'TAMATAVE', '塔马塔夫', 0, 1, 'MG', 0, 0, 'HITI'),
('NOS', 'NOSSI-BE', '诺西比', 0, 1, 'MG', 0, 0, 'HITI'),
('MABLA', 'BLANTYRE', '', 0, 1, 'MA', 0, 0, 'HITI'),
('MALIL', 'LILONGWE', '利朗维', 0, 1, 'MA', 0, 0, 'HITI'),
('MYBGD', 'BAGAN DATOH', '巴眼拿督', 0, 1, 'MY', 0, 0, 'HITI'),
('MYBIN', 'BINATANG', '比那唐', 0, 1, 'MY', 0, 0, 'HITI'),
('MYBTP', 'BATU PAHAT', '巴株巴辖', 0, 1, 'MY', 0, 0, 'HITI'),
('MYBTU', 'BINTULU', '民都鲁', 0, 1, 'MY', 0, 0, 'HITI'),
('MYBUT', 'BUTTERWORTH', '巴特沃思', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKOB', 'KOTA BHARU', '哥打巴鲁', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKOK', 'KOTA KINABALU', '亚庇', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKPA', 'KUALA PAHANG', '瓜拉彭亨', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKRO', 'KUALA ROMPIN', '瓜拉弄宾', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKSE', 'KUALA SELANGOR', '瓜拉雪兰莪', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKSU', 'KUALA SUAI', '瓜拉苏埃', 0, 1, 'MY', 0, 0, 'HITI'),
('MYGEO', 'GEORGETOWN(MY)', '乔治敦', 0, 1, 'MY', 0, 0, 'HITI'),
('MYJOB', 'JOHORE BAHRU', '柔佛巴鲁', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKER', 'KERTEH', '居茶', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKTR', 'KUALA TRENGGANU', '瓜拉丁加奴', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKUA', 'KUANTAN', '关丹', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKUC', 'KUCHING', '古晋', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKUD', 'KUDAT', '古达', 0, 1, 'MY', 0, 0, 'HITI'),
('MYKUN', 'KUNAK', '库纳克', 0, 1, 'MY', 0, 0, 'HITI'),
('MYLAB', 'LABUAN', '拉布安', 0, 1, 'MY', 0, 0, 'HITI'),
('MYLAD', 'LAHAD DATU', '拉哈达图', 0, 1, 'MY', 0, 0, 'HITI'),
('MYLAW', 'LAWAS', '拉瓦斯', 0, 1, 'MY', 0, 0, 'HITI'),
('MYLIM', 'LIMBANG', '林邦', 0, 1, 'MY', 0, 0, 'HITI'),
('MYLUM', 'LUMUT(MY)', '卢穆特', 0, 1, 'MY', 0, 0, 'HITI'),
('MYMEL', 'MELAKA', '马六甲', 0, 1, 'MY', 0, 0, 'HITI'),
('MYPDI', 'PORT DICKSON', '波德申', 0, 1, 'MY', 0, 0, 'HITI'),
('MYPEN', 'PENANG', '槟城', 0, 1, 'MY', 0, 0, 'HITI'),
('MYPKE', 'PORT KELANG', '巴生港', 0, 1, 'MY', 0, 0, 'HITI'),
('MYMIR', 'MIRI', '米里', 0, 1, 'MY', 0, 0, 'HITI'),
('MYPAG', 'PASIR GUDANG', '帕西古当', 0, 1, 'MY', 0, 0, 'HITI'),
('MYPRI', 'PRAI', '布莱', 0, 1, 'MY', 0, 0, 'HITI'),
('MYSAN', 'SANDAKAN', '山打根', 0, 1, 'MY', 0, 0, 'HITI'),
('MYSAR', 'SARIKEI', '泗里奎', 0, 1, 'MY', 0, 0, 'HITI'),
('MYSEM', 'SEMPORNA', '仙本那', 0, 1, 'MY', 0, 0, 'HITI'),
('MYSIB', 'SIBU', '泗务', 0, 1, 'MY', 0, 0, 'HITI'),
('MYTAW', 'TAWAU', '斗湖', 0, 1, 'MY', 0, 0, 'HITI'),
('MYTJM', 'TANJONG MANI', '丹章马尼', 0, 1, 'MY', 0, 0, 'HITI'),
('MYWAB', 'WALLANCE BAY', '哗拉司贝', 0, 1, 'MY', 0, 0, 'HITI'),
('MLXY', 'KUALA LUMPUR CITY LIMIT', '吉隆坡', 0, 1, 'MY', 0, 0, 'HITI'),
('MALE', 'MALE', '马累', 0, 1, 'MV', 0, 0, 'HITI'),
('MABAM', 'BAMAKO', '巴马科', 0, 1, 'ML', 0, 0, 'HITI'),
('MTVAL', 'VALLETTA', '瓦莱塔', 0, 1, 'MT', 0, 0, 'HITI'),
('MTMAL', 'MALTA', '马耳他', 0, 1, 'MT', 0, 0, 'HITI'),
('MUPLO', 'PORT LOUIS', '路易港', 0, 1, 'MU', 0, 0, 'HITI'),
('ARENS', 'ENSENADA(AR)', '恩塞纳达', 0, 1, 'MX', 0, 0, 'HITI'),
('MEMEL', 'MELILLA', '梅利利亚', 0, 1, 'MX', 0, 0, 'HITI'),
('MXACA', 'ACAPULCO', '阿卡普尔科', 0, 1, 'MX', 0, 0, 'HITI'),
('MXALT', 'ALTAMIRA(MX)', '阿尔塔米拉', 0, 1, 'MX', 0, 0, 'HITI'),
('MXALV', 'ALVARADO', '阿尔瓦拉多', 0, 1, 'MX', 0, 0, 'HITI'),
('MXCAM', 'CAMPECHE', '坎佩切', 0, 1, 'MX', 0, 0, 'HITI'),
('MXCAT', 'CAYO ARCAS', '阿卡斯群岛码头', 0, 1, 'MX', 0, 0, 'HITI'),
('MXCDC', 'CIUDAD DEL CARM', '卡门城', 0, 1, 'MX', 0, 0, 'HITI'),
('MXCOA', 'COATZACOALCOS', '夸察夸尔科斯', 0, 1, 'MX', 0, 0, 'HITI'),
('MXENS', 'ENSENADA', '恩塞纳达（墨）', 0, 1, 'MX', 0, 0, 'HITI'),
('MXMIN', 'MINATITLAN', '米纳蒂特兰', 0, 1, 'MX', 0, 0, 'HITI'),
('MXPRO', 'PROGRESS', '普罗格雷索', 0, 1, 'MX', 0, 0, 'HITI'),
('MXSRO', 'SANTA ROSALIA', '圣罗萨利亚', 0, 1, 'MX', 0, 0, 'HITI'),
('MXTOP', 'TOPOLOBAMPO', '托波洛班波', 0, 1, 'MX', 0, 0, 'HITI'),
('MXTUX', 'TUXPAN', '图斯潘', 0, 1, 'MX', 0, 0, 'HITI'),
('MXSAC', 'SALINA CRUZ', '萨利纳克鲁斯', 0, 1, 'MX', 0, 0, 'HITI'),
('MXVER', 'VERACRUZ', '韦拉克鲁斯', 0, 1, 'MX', 0, 0, 'HITI'),
('MEAGU', 'AGUASCALIENTES', '阿瓜斯卡连特斯', 0, 1, 'MX', 0, 0, 'HITI'),
('MECAN', 'CANCUN', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MECEL', 'CELAYA', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MECIU', 'CIUDAD VICTORIA', '维多利亚城', 0, 1, 'MX', 0, 0, 'HITI'),
('MECUE', 'CUERNAVACA', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MECUL', 'CULIACAN', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEDUR', 'DURANGO', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEFRE', 'FRESNILLO', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEGUA', 'GUADALAJARA,MEXICO', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEGTO', 'GUANAJUATO', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEHER', 'HERMOSILLO', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEJUA', 'JUAREZ', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MELEO', 'LEON', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MELOS', 'LOS MOCHIS', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEMAT', 'MATAMOROS', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEMEX', 'MEXICALI', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEMCO', 'MEXICO CITY', '墨西哥城', 0, 1, 'MX', 0, 0, 'HITI'),
('MEMON', 'MONCLOVA', '蒙克洛瓦', 0, 1, 'MX', 0, 0, 'HITI'),
('MEMEY', 'MONTERREY', '蒙特雷', 0, 1, 'MX', 0, 0, 'HITI'),
('MEMOR', 'MORELIA', '莫雷利亚', 0, 1, 'MX', 0, 0, 'HITI'),
('MEMOT', 'MOTUL', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MENOG', 'NOGALES', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MENUE', 'NUEVO LAREDO', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEPRO', 'PROGRESO', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEPUE', 'PUEBLA', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEPTO', 'PUERTO MORELOS', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MEQUE', 'QUERETARO', '克雷塔罗', 0, 1, 'MX', 0, 0, 'HITI'),
('MEREY', 'REYNOSA', '雷诺萨', 0, 1, 'MX', 0, 0, 'HITI'),
('MESAL', 'SALINA CRUZ', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MESLO', 'SALTILLO', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MESAN', 'SAN FRANCISCO(MEXICO)', '圣弗朗西斯科', 0, 1, 'MX', 0, 0, 'HITI'),
('MESSI', 'SAN LUIS POTOSI', '', 0, 1, 'MX', 0, 0, 'HITI'),
('METAM', 'TAMPICO', '坦皮克', 0, 1, 'MX', 0, 0, 'HITI'),
('METIJ', 'TIJUANA', '', 0, 1, 'MX', 0, 0, 'HITI'),
('METOL', 'TOLUCA', '托卢卡', 0, 1, 'MX', 0, 0, 'HITI'),
('TMETO', 'TORREON', '', 0, 1, 'MX', 0, 0, 'HITI'),
('MAME', 'MANZANILLO,MEXICO', '曼萨尼隆', 0, 1, 'MX', 0, 0, 'HITI'),
('CDJ', 'CD JUAREZ', '', 0, 1, 'MX', 0, 0, 'HITI'),
('CECEU', 'CEUTA', '休达', 0, 1, 'MA', 0, 0, 'HITI'),
('MAMOH', 'MOHAMMEDIA', '穆罕默迪耶', 0, 1, 'MA', 0, 0, 'HITI'),
('MARBT', 'RABAT', '拉巴特', 0, 1, 'MA', 0, 0, 'HITI'),
('MASAF', 'SAFI', '萨菲', 0, 1, 'MA', 0, 0, 'HITI'),
('MATAN', 'TANGIER', '丹吉尔', 0, 1, 'MA', 0, 0, 'HITI'),
('MATAR', 'TARFAYA', '塔尔法亚', 0, 1, 'MA', 0, 0, 'HITI'),
('MAAGA', 'AGADIR', '阿加迪尔', 0, 1, 'MA', 0, 0, 'HITI'),
('MACAS', 'CASABLANCA', '卡萨布兰卡', 0, 1, 'MA', 0, 0, 'HITI'),
('MAEJA', 'EL JADIDA', '贾迪达', 0, 1, 'MA', 0, 0, 'HITI'),
('MAESS', 'ESSAOUIRA', '索维拉', 0, 1, 'MA', 0, 0, 'HITI'),
('MAKEN', 'KENITRA', '盖尼特拉', 0, 1, 'MA', 0, 0, 'HITI'),
('MALAR', 'LARACHE', '拉腊什', 0, 1, 'MA', 0, 0, 'HITI'),
('MZANE', 'ANTONIO ENES', '安托尼奥埃尼什', 0, 1, 'MZ', 0, 0, 'HITI'),
('MZBRA', 'BEIRA', '贝拉', 0, 1, 'MZ', 0, 0, 'HITI'),
('MZCDE', 'CHINDE', '欣代', 0, 1, 'MZ', 0, 0, 'HITI'),
('MZIBO', 'IBO', '伊博', 0, 1, 'MZ', 0, 0, 'HITI'),
('MZINH', 'INHAMBANE', '伊尼扬巴内', 0, 1, 'MZ', 0, 0, 'HITI'),
('MZMAP', 'MAPUTO', '马普托', 0, 1, 'MZ', 0, 0, 'HITI'),
('MZMOC', 'MOCIMBOA DA PRAIA', '莫辛布瓦达普拉亚 ', 0, 1, 'MZ', 0, 0, 'HITI'),
('MZMOM', 'MOMA', '莫马', 0, 1, 'MZ', 0, 0, 'HITI'),
('MZMOZ', 'MOZAMBIQUE', '莫桑比克', 0, 1, 'MZ', 0, 0, 'HITI'),
('MZNAC', 'NACALA', '纳卡拉', 0, 1, 'MZ', 0, 0, 'HITI'),
('MZQUE', 'QUELIMANE', '克利马内', 0, 1, 'MZ', 0, 0, 'HITI'),
('MOMUT', 'MUTARE', '', 0, 1, 'MZ', 0, 0, 'HITI'),
('MMMGI', 'MERGUI', '墨吉', 0, 1, 'MM', 0, 0, 'HITI'),
('MMSAN', 'SANDOWAY', '山多威', 0, 1, 'MM', 0, 0, 'HITI'),
('MMTAV', 'TAVOY', '土瓦', 0, 1, 'MM', 0, 0, 'HITI'),
('MMTEN', 'TENASSERIM', '德林达伊', 0, 1, 'MM', 0, 0, 'HITI'),
('NALUD', 'LUDERITZ', '卢德立次', 0, 1, 'NA', 0, 0, 'HITI'),
('NAWVB', 'WALVIS BAY', '鲸湾港', 0, 1, 'NA', 0, 0, 'HITI'),
('NAWAY', 'WAIVIS BAY', '沃尔维斯港', 0, 1, 'NA', 0, 0, 'HITI'),
('KAT', 'KATHMANDU', '加德满都', 0, 1, 'NP', 0, 0, 'HITI'),
('NLAIK', 'AIKMAAR', '阿尔克马', 0, 1, 'NL', 0, 0, 'HITI'),
('NLAMS', 'AMSTERDAM', '阿姆斯特丹', 0, 1, 'NL', 0, 0, 'HITI'),
('NLARN', 'ARNHEM', '阿纳姆', 0, 1, 'NL', 0, 0, 'HITI'),
('NLBRO', 'BROUWERSHAVEN', '布劳沃斯港', 0, 1, 'NL', 0, 0, 'HITI'),
('NLDEL', 'DELFZIJL', '德尔夫寄尔', 0, 1, 'NL', 0, 0, 'HITI'),
('NLDOR', 'DORDRECHT', '多德雷赫特', 0, 1, 'NL', 0, 0, 'HITI'),
('NLGRO', 'GRONINGEN', '格罗宁根', 0, 1, 'NL', 0, 0, 'HITI'),
('NLHAR', 'HARLINGEN', '哈灵根', 0, 1, 'NL', 0, 0, 'HITI'),
('NLHOH', 'HOOK OF HOLLAND', '荷兰角', 0, 1, 'NL', 0, 0, 'HITI'),
('NLMAS', 'MAASSLUIS', '马斯莱斯', 0, 1, 'NL', 0, 0, 'HITI'),
('NLMID', 'MIDDELBURG', '米德尔堡', 0, 1, 'NL', 0, 0, 'HITI'),
('NLROT', 'ROTTERDAM', '鹿特丹', 0, 1, 'NL', 0, 0, 'HITI'),
('NLSCH', 'SCHEVENINGEN', '斯海弗宁恩', 0, 1, 'NL', 0, 0, 'HITI'),
('NLSCM', 'SCHIEDAM', '斯希丹', 0, 1, 'NL', 0, 0, 'HITI'),
('NLSLU', 'SLUISKIL', '斯勒伊斯基尔', 0, 1, 'NL', 0, 0, 'HITI'),
('NLTER', 'TERNEUZEN', '泰尔讷曾', 0, 1, 'NL', 0, 0, 'HITI'),
('NLZAA', 'ZAANDAM', '赞丹', 0, 1, 'NL', 0, 0, 'HITI'),
('NLZIE', 'ZIERIKZEE', '济里克泽', 0, 1, 'NL', 0, 0, 'HITI'),
('NEALK', 'ALKMAAR', '阿尔克岛', 0, 1, 'NL', 0, 0, 'HITI'),
('NLDOT', 'DORDRECHT', '多德雷赫德', 0, 1, 'NL', 0, 0, 'HITI'),
('NLDEN', 'DEN HELDER', '赫尔德', 0, 1, 'NL', 0, 0, 'HITI'),
('ANBAR', 'BARCADERA', '巴尔卡德拉', 0, 1, 'AN', 0, 0, 'HITI'),
('ANKRA', 'KRALENDIJK', '克拉伦代克', 0, 1, 'AN', 0, 0, 'HITI'),
('ANORA', 'ORANJESTAD', '奥拉涅斯塔德', 0, 1, 'AN', 0, 0, 'HITI'),
('ANWIL', 'WILLEMSTAD(AN)', '威廉斯塔德', 0, 1, 'AN', 0, 0, 'HITI'),
('NLWIL', 'WILLEMSTAD(NL)', '威廉斯塔德', 0, 1, 'AN', 0, 0, 'HITI'),
('NCNOA', 'NOUMEA', '努美阿', 0, 1, 'NC', 0, 0, 'HITI'),
('AK', 'AKAROA', '阿卡罗亚', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZLYT', 'LYTTELTON', '利特尔顿', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZMMI', 'MOUNT MAUNGANUI', '芒特芒阿努伊', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZNAP', 'NAPIER', '内皮尔', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZNEL', 'NELSON', '纳尔逊', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZNPL', 'NEW PLYMOUTH', '新普利茅斯', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZBLF', 'BLUFF', '布拉夫', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZDUN', 'DUNEDIN', '达尼丁', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZGIS', 'GISBORNE', '吉斯珀恩', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZGRE', 'GREYMOUTH', '格雷茅斯', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZOPU', 'OPUA', '奥普阿', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZPCH', 'PORT CHALMERS', '查马斯港', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZPIC', 'PICTON', '皮克顿', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZOAM', 'OAMARU', '奥马鲁', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZTAU', 'TAURANGA', '陶朗阿', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZTIM', 'TIMARU', '蒂马鲁', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZWEL', 'WELLINGTON', '惠灵顿', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZWHA', 'WHAHGAREI', '璜加雷', 0, 1, 'NZ', 0, 0, 'HITI'),
('NZCHR', 'CHRISTCHURCH', '克赖斯特撒奇', 0, 1, 'NZ', 0, 0, 'HITI'),
('LAND', 'AUCKLAND', '奥克兰', 0, 1, 'NZ', 0, 0, 'HITI'),
('NCH', 'CHALMERS', '', 0, 1, 'NZ', 0, 0, 'HITI'),
('MARSD', 'MARSDEN POINT', '', 0, 1, 'NZ', 0, 0, 'HITI'),
('NICOR', 'CORINTO', '科林托', 0, 1, 'NI', 0, 0, 'HITI'),
('NISJS', 'SAN JUAN DEL SUR', '南圣胡安', 0, 1, 'NI', 0, 0, 'HITI'),
('NIMAN', 'MANAGUA', '马那瓜', 0, 1, 'NI', 0, 0, 'HITI'),
('NGKOK', 'KOKO', '科科', 0, 1, 'NG', 0, 0, 'HITI'),
('NGLAG', 'LAGOS', '拉各斯', 0, 1, 'NG', 0, 0, 'HITI'),
('NGOKR', 'OKRIKA', '奥克里卡', 0, 1, 'NG', 0, 0, 'HITI'),
('NGPHA', 'PORT HARCOURT', '哈科特港', 0, 1, 'NG', 0, 0, 'HITI'),
('NGSAP', 'SAPELE', '萨佩莱', 0, 1, 'NG', 0, 0, 'HITI'),
('NGWAR', 'WARRI', '瓦里', 0, 1, 'NG', 0, 0, 'HITI'),
('NGAPA', 'APAPA', '阿帕帕', 0, 1, 'NG', 0, 0, 'HITI'),
('NGBON', 'BONNY', '邦尼', 0, 1, 'NG', 0, 0, 'HITI'),
('NGBUR', 'BURUTU', '布鲁图', 0, 1, 'NG', 0, 0, 'HITI'),
('NGCAL', 'CALABAR', '卡拉巴尔', 0, 1, 'NG', 0, 0, 'HITI'),
('NGESC', 'ESCRAVOS', '拉沃斯河', 0, 1, 'NG', 0, 0, 'HITI'),
('NGBU', 'BURUTU', '布鲁图', 0, 1, 'NG', 0, 0, 'HITI'),
('LA', 'LAGOS,NIGERIA', '拉各斯', 0, 1, 'NG', 0, 0, 'HITI'),
('GREEN', 'GREENSBORO', '', 0, 1, 'NF', 0, 0, 'HITI'),
('HAGE', 'HAGERSTOWN', '', 0, 1, 'NF', 0, 0, 'HITI'),
('NOHOR', 'HORTEN', '霍腾', 0, 1, 'NO', 0, 0, 'HITI'),
('NOHOY', 'HOYANGER', '赫扬厄尔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOKLE', 'KLEVEN', '克来文', 0, 1, 'NO', 0, 0, 'HITI'),
('NOKOP', 'KOPERVIK', '科珀维克', 0, 1, 'NO', 0, 0, 'HITI'),
('NOKRA', 'KRAGERO', '克拉格勒', 0, 1, 'NO', 0, 0, 'HITI'),
('NOKRN', 'KRISTIANSUND N.', '克里斯蒂安松（北）', 0, 1, 'NO', 0, 0, 'HITI'),
('NOKRS', 'KRISTIANSAND S.', '克里斯蒂安桑（南）', 0, 1, 'NO', 0, 0, 'HITI'),
('NOKVI', 'KVINESDAL', '克维内斯达尔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOLAN', 'LANGESUND', '朗厄松', 0, 1, 'NO', 0, 0, 'HITI'),
('NOLIL', 'LILLESAND', '利勒桑', 0, 1, 'NO', 0, 0, 'HITI'),
('NOLOD', 'LODINGEN', '勒丁恩', 0, 1, 'NO', 0, 0, 'HITI'),
('NOLVK', 'LARVIK', '拉尔维克', 0, 1, 'NO', 0, 0, 'HITI'),
('NOMDL', 'MANDAL', '曼达尔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOMJN', 'MOSJOEN', '莫舍恩', 0, 1, 'NO', 0, 0, 'HITI'),
('NOMLM', 'MALM', '马尔姆', 0, 1, 'NO', 0, 0, 'HITI'),
('NOMOL', 'MOLDE', '莫尔德', 0, 1, 'NO', 0, 0, 'HITI'),
('NOMOR', 'MO I RANA', '摩城', 0, 1, 'NO', 0, 0, 'HITI'),
('NOMOS', 'MOSS', '莫斯', 0, 1, 'NO', 0, 0, 'HITI'),
('NONAR', 'NARVIK', '纳尔维克', 0, 1, 'NO', 0, 0, 'HITI'),
('NOODD', 'ODDA', '奥达', 0, 1, 'NO', 0, 0, 'HITI'),
('NOPOR', 'PORSGRUNN', '波斯格伦', 0, 1, 'NO', 0, 0, 'HITI'),
('NORIS', 'RISOR', '里瑟尔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOSAN', 'SANDEFGORD', '桑讷菲尤尔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOOSL', 'OSLO', '奥斯陆', 0, 1, 'NO', 0, 0, 'HITI'),
('NOSGN', 'SVELGEN', '斯韦尔根', 0, 1, 'NO', 0, 0, 'HITI'),
('NOSKI', 'SKIEN', '希恩', 0, 1, 'NO', 0, 0, 'HITI'),
('NOSKU', 'SKUDENESHAVN', '斯屈德内斯港', 0, 1, 'NO', 0, 0, 'HITI'),
('NOSAR', 'SARPSBORG', '萨尔普斯堡', 0, 1, 'NO', 0, 0, 'HITI'),
('NOSAU', 'SAUDA', '赛于达', 0, 1, 'NO', 0, 0, 'HITI'),
('NOSNS', 'SANDNES', '桑内斯', 0, 1, 'NO', 0, 0, 'HITI'),
('NOSTA', 'STAVANGER', '斯塔万格', 0, 1, 'NO', 0, 0, 'HITI'),
('NOSTE', 'STEINKJER', '斯泰恩谢尔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOSVK', 'SVELVIK', '斯瓦尔维克', 0, 1, 'NO', 0, 0, 'HITI'),
('NOTHA', 'THAMSHAMN', '塔姆港', 0, 1, 'NO', 0, 0, 'HITI'),
('NOTHM', 'TRONDHEIM', '特隆赫姆', 0, 1, 'NO', 0, 0, 'HITI'),
('NOTON', 'TONSBERG', '滕斯贝格', 0, 1, 'NO', 0, 0, 'HITI'),
('NOTOU', 'TOU', '都港', 0, 1, 'NO', 0, 0, 'HITI'),
('NOTRO', 'TROMSO', '特罗姆瑟', 0, 1, 'NO', 0, 0, 'HITI'),
('NOTVE', 'TVEDESTRAND', '特维德斯特兰德', 0, 1, 'NO', 0, 0, 'HITI'),
('NOVAD', 'VADSO', '瓦德瑟', 0, 1, 'NO', 0, 0, 'HITI'),
('NOVAR', 'VARDO', '沃尔德', 0, 1, 'NO', 0, 0, 'HITI'),
('NRNRI', 'NAURU ISLAND', '瑙鲁岛', 0, 1, 'NO', 0, 0, 'HITI'),
('NOAAL', 'AALESUND', '奥勒松', 0, 1, 'NO', 0, 0, 'HITI'),
('NOARE', 'ARENDAL', '阿伦达尔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOBGN', 'BERGEN', '卑尔根', 0, 1, 'NO', 0, 0, 'HITI'),
('NOBRE', 'BREVIK', '布雷维克', 0, 1, 'NO', 0, 0, 'HITI'),
('NODRA', 'DRAMMEN', '德拉门', 0, 1, 'NO', 0, 0, 'HITI'),
('NOEGE', 'EGERSUND', '艾格松', 0, 1, 'NO', 0, 0, 'HITI'),
('NOEIT', 'EITRHEIM', '艾特尔海姆', 0, 1, 'NO', 0, 0, 'HITI'),
('NOFAR', 'FARSUND', '法尔松德', 0, 1, 'NO', 0, 0, 'HITI'),
('NOFLE', 'FLEKKEFJORD', '弗莱克菲尤尔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOFRE', 'FREDRIKSTAD', '腓特烈斯塔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOHAL', 'HALDEN', '哈尔登', 0, 1, 'NO', 0, 0, 'HITI'),
('NOHAM', 'HAMMERFEST', '哈默菲斯特', 0, 1, 'NO', 0, 0, 'HITI'),
('NOHAR', 'HARSTAD', '哈尔斯塔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOGRI', 'Grimstad', '格里姆斯塔', 0, 1, 'NO', 0, 0, 'HITI'),
('NOHAU', 'HAUGESUND', '海尔格松', 0, 1, 'NO', 0, 0, 'HITI'),
('NOHOL', 'HOLMESTRAND', '霍尔默斯特兰', 0, 1, 'NO', 0, 0, 'HITI'),
('NOAL', 'ALESUND', '奥勒松', 0, 1, 'NO', 0, 0, 'HITI'),
('NOAR', 'ARDALSTANGEN', '阿尔达尔斯坦根', 0, 1, 'NO', 0, 0, 'HITI'),
('OMMAF', 'MINA AL FAHAL', '法赫尔港', 0, 1, 'OM', 0, 0, 'HITI'),
('OMMQS', 'MUSCAT', '米纳卡布斯', 0, 1, 'OM', 0, 0, 'HITI'),
('OMMUT', 'MUTTRAH', '马特拉', 0, 1, 'OM', 0, 0, 'HITI'),
('OMSUL', 'P.S.QABOOS', '卡布斯港', 0, 1, 'OM', 0, 0, 'HITI'),
('AA', 'SULTAN QABOOS', '卡布斯港', 0, 1, 'OM', 0, 0, 'HITI'),
('SHA', 'SHALALA', '', 0, 1, 'OM', 0, 0, 'HITI'),
('PKKAR', 'KARACHI', '卡拉奇', 0, 1, 'PK', 0, 0, 'HITI'),
('PAPAC', 'PANAMA CITY', '巴拿马城', 0, 1, 'PA', 0, 0, 'HITI'),
('PAAGD', 'AGUA DULCE', '阿瓜杜尔塞', 0, 1, 'PA', 0, 0, 'HITI'),
('PABAL', 'BALBOA', '巴尔博亚', 0, 1, 'PA', 0, 0, 'HITI'),
('PACOL', 'COLON', '科隆', 0, 1, 'PA', 0, 0, 'HITI'),
('PACRI', 'CRISTOBAL', '克里斯托瓦尔', 0, 1, 'PA', 0, 0, 'HITI'),
('PAPAN', 'PANAMA', '帕纳马', 0, 1, 'PA', 0, 0, 'HITI'),
('PACOF', 'COLON FREE ZONE', '科隆', 0, 1, 'PA', 0, 0, 'HITI'),
('PAMAN', 'MANZANILLO(PANAMA)', '曼萨尼罗', 0, 1, 'PA', 0, 0, 'HITI'),
('PGLAE', 'LAE', '莱城', 0, 1, 'PG', 0, 0, 'HITI'),
('PGPMO', 'PORT MORESBY', '莫尔兹比港', 0, 1, 'PG', 0, 0, 'HITI'),
('PGRAB', 'RABAUL', '腊包尔', 0, 1, 'PG', 0, 0, 'HITI'),
('PGWEK', 'WEWAK', '威瓦克', 0, 1, 'PG', 0, 0, 'HITI'),
('PYASU', 'ASUNCION', '亚松森', 0, 1, 'PY', 0, 0, 'HITI'),
('PAENC', 'ENCARNACION', '', 0, 1, 'PY', 0, 0, 'HITI'),
('PECAL', 'CALLAO', '卡亚俄', 0, 1, 'PE', 0, 0, 'HITI'),
('PECAZ', 'CERRO AZUL', '塞罗阿苏尔', 0, 1, 'PE', 0, 0, 'HITI'),
('PECHA', 'CHANCAY', '钱凯', 0, 1, 'PE', 0, 0, 'HITI'),
('PECHI', 'CHIMBOTE', '钦博塔', 0, 1, 'PE', 0, 0, 'HITI'),
('PEETN', 'ETEN', '埃腾', 0, 1, 'PE', 0, 0, 'HITI'),
('PEILO', 'ILO', '伊洛', 0, 1, 'PE', 0, 0, 'HITI'),
('PEMAT', 'MATARANI', '马塔拉尼', 0, 1, 'PE', 0, 0, 'HITI'),
('PEPAC', 'PACASMAYO', '帕卡斯马约', 0, 1, 'PE', 0, 0, 'HITI'),
('PEPCO', 'PISCO', '皮斯科', 0, 1, 'PE', 0, 0, 'HITI'),
('PEPTA', 'PAITA', '派塔', 0, 1, 'PE', 0, 0, 'HITI'),
('PESAL', 'SALAVERRY', '萨拉韦里', 0, 1, 'PE', 0, 0, 'HITI'),
('PESJU', 'SAN JUAN(PE)', '圣胡安', 0, 1, 'PE', 0, 0, 'HITI'),
('PEPIM', 'PIMENTEL', '皮门特尔', 0, 1, 'PE', 0, 0, 'HITI'),
('PESNI', 'SAN NICOLAS(PE)', '圣尼古拉斯', 0, 1, 'PE', 0, 0, 'HITI'),
('PETAL', 'TALARA', '塔拉拉', 0, 1, 'PE', 0, 0, 'HITI'),
('PELMA', 'LIMA', '利马', 0, 1, 'PE', 0, 0, 'HITI'),
('ARSFO', 'SAN FERNANDO', '圣弗尔南多', 0, 1, 'PH', 0, 0, 'HITI'),
('PHPSM', 'PORT SANTA MARI', '圣玛丽亚港', 0, 1, 'PH', 0, 0, 'HITI'),
('PHSBC', 'SUBIC', '苏比克', 0, 1, 'PH', 0, 0, 'HITI'),
('PHSCA', 'SAN CARLOS(PH)', '圣卡洛斯', 0, 1, 'PH', 0, 0, 'HITI'),
('PHSCR', 'SANTA CRUZ(LUZO', '圣克鲁斯', 0, 1, 'PH', 0, 0, 'HITI'),
('PHSFE', 'SAN FERNANDO(PH', '圣弗尔南多', 0, 1, 'PH', 0, 0, 'HITI'),
('PHTAB', 'TABACO', '塔瓦科', 0, 1, 'PH', 0, 0, 'HITI'),
('PHTAC', 'TACLOBAN', '塔克洛班', 0, 1, 'PH', 0, 0, 'HITI'),
('PHTDC', 'TANDOC', '坦多哥', 0, 1, 'PH', 0, 0, 'HITI'),
('PHZAM', 'ZAMBOANGA', '三宝颜', 0, 1, 'PH', 0, 0, 'HITI'),
('PHANT', 'ANTIMONAN', '安蒂莫纳', 0, 1, 'PH', 0, 0, 'HITI'),
('PHAPA', 'APARRI', '阿帕里', 0, 1, 'PH', 0, 0, 'HITI'),
('PHBAC', 'BACOLOD', '巴科洛德', 0, 1, 'PH', 0, 0, 'HITI'),
('PHBAT', 'BATANGAS', '八打雁', 0, 1, 'PH', 0, 0, 'HITI'),
('PHBTN', 'BATAAN', '巴丹', 0, 1, 'PH', 0, 0, 'HITI'),
('PHCAP', 'CAPIZ', '卡皮斯', 0, 1, 'PH', 0, 0, 'HITI'),
('PHCDZ', 'CADIZ(PH)', '加的斯', 0, 1, 'PH', 0, 0, 'HITI'),
('PHCEB', 'CEBU', '宿务', 0, 1, 'PH', 0, 0, 'HITI'),
('PHCOT', 'COTABATO', '哥把巴托', 0, 1, 'PH', 0, 0, 'HITI'),
('PHCDO', 'CAGAYAN DE ORO', '卡加延德奥罗', 0, 1, 'PH', 0, 0, 'HITI'),
('PHDAV', 'DAVAO', '达沃', 0, 1, 'PH', 0, 0, 'HITI'),
('PHDGB', 'DINGALAN BAY', '丁阿兰湾', 0, 1, 'PH', 0, 0, 'HITI'),
('PHDGT', 'DINAGAT', '迪纳加特', 0, 1, 'PH', 0, 0, 'HITI'),
('PHDIP', 'DIPOLOG', '第波罗', 0, 1, 'PH', 0, 0, 'HITI'),
('PHDUM', 'DUMAGUETE', '杜马格特', 0, 1, 'PH', 0, 0, 'HITI'),
('PHGUI', 'GUIMARAS ISLAND', '吉马拉斯岛', 0, 1, 'PH', 0, 0, 'HITI'),
('PHILA', 'ISABELA(PH)', '伊萨贝拉', 0, 1, 'PH', 0, 0, 'HITI'),
('PHILI', 'ILIGAN', '伊利甘', 0, 1, 'PH', 0, 0, 'HITI'),
('PHILO', 'ILOILO', '恰朗', 0, 1, 'PH', 0, 0, 'HITI'),
('PHJOL', 'JOLO', '霍洛', 0, 1, 'PH', 0, 0, 'HITI'),
('PHJPA', 'JOSE PANGANIBAN', '何塞庞阿尼班村', 0, 1, 'PH', 0, 0, 'HITI'),
('PHLEG', 'LEGASPI', '黎牙实比', 0, 1, 'PH', 0, 0, 'HITI'),
('PHLUN', 'LA UNION(PH)', '拉乌尼翁', 0, 1, 'PH', 0, 0, 'HITI'),
('PHMAN', 'MANILA', '马尼拉', 0, 1, 'PH', 0, 0, 'HITI'),
('PHMNH', 'MANILA NORTH HA', '马尼拉北港', 0, 1, 'PH', 0, 0, 'HITI'),
('PHPPR', 'PUERTO PRINCESA', '普林塞萨港', 0, 1, 'PH', 0, 0, 'HITI'),
('PHAN', 'ANAKAN', '阿纳根', 0, 1, 'PH', 0, 0, 'HITI'),
('MASO', 'MANILA SOUTH HARBOUR', '马尼拉(南港)', 0, 1, 'PH', 0, 0, 'HITI'),
('PLGDA', 'GDANSK', '格但斯克', 0, 1, 'PL', 0, 0, 'HITI'),
('PLGDY', 'GDYNIA', '格丁尼亚', 0, 1, 'PL', 0, 0, 'HITI'),
('PLHEL', 'HEL', '海尔', 0, 1, 'PL', 0, 0, 'HITI'),
('PLDAR', 'DARLOWO', '达尔沃沃', 0, 1, 'PL', 0, 0, 'HITI'),
('PLKOL', 'KOLOBRZEG', '科沃布热格', 0, 1, 'PL', 0, 0, 'HITI'),
('PLSWI', 'SWINOUJSCIE', '希维诺乌伊希切', 0, 1, 'PL', 0, 0, 'HITI'),
('PLSZC', 'SZCZECIN', '什切青', 0, 1, 'PL', 0, 0, 'HITI'),
('POPOZ', 'POZNAN', '波兹南', 0, 1, 'PL', 0, 0, 'HITI'),
('POKRA', 'KRAKOW', '克拉科夫', 0, 1, 'PL', 0, 0, 'HITI'),
('POWAR', 'WARSZAWA', '华沙', 0, 1, 'PL', 0, 0, 'HITI'),
('POWRO', 'WROCLAW', '弗罗兹瓦夫', 0, 1, 'PL', 0, 0, 'HITI'),
('POKAT', 'KATOWICE', '', 0, 1, 'PL', 0, 0, 'HITI'),
('POGLI', 'POLAND', '波兰', 0, 1, 'PL', 0, 0, 'HITI'),
('POGCE', 'GLIWICE', '', 0, 1, 'PL', 0, 0, 'HITI'),
('POLOD', 'LODZ', '', 0, 1, 'PL', 0, 0, 'HITI'),
('POPRU', 'PRUSZKOW', '', 0, 1, 'PL', 0, 0, 'HITI'),
('CRA', 'CRACOW', '', 0, 1, 'PL', 0, 0, 'HITI'),
('PTBEL', 'BELEM(PT)', '贝伦', 0, 1, 'PT', 0, 0, 'HITI'),
('PTFAR', 'FARO', '法鲁', 0, 1, 'PT', 0, 0, 'HITI'),
('PTFIG', 'FIGUEIRA DO FAZ', '菲盖拉达福实', 0, 1, 'PT', 0, 0, 'HITI'),
('PTLIS', 'LISBON', '里斯本', 0, 1, 'PT', 0, 0, 'HITI'),
('PTLXS', 'LEIXOES', '雷克索斯', 0, 1, 'PT', 0, 0, 'HITI'),
('PTAVE', 'AVEIRO', '阿威罗', 0, 1, 'PT', 0, 0, 'HITI'),
('PTBAR', 'BARREIRO', '巴雷鲁', 0, 1, 'PT', 0, 0, 'HITI'),
('PTOLH', 'OLHAO', '奥良', 0, 1, 'PT', 0, 0, 'HITI'),
('PTOPO', 'OPORTO', '波尔图', 0, 1, 'PT', 0, 0, 'HITI'),
('PTPOR', 'PORTIMAO', '波尔蒂芒', 0, 1, 'PT', 0, 0, 'HITI'),
('PTSBL', 'SETUBAL', '塞图巴尔', 0, 1, 'PT', 0, 0, 'HITI'),
('POLEX', 'LEXOIES', '雷克索斯', 0, 1, 'PT', 0, 0, 'HITI'),
('POPOR', 'PORTO', '波尔图', 0, 1, 'PT', 0, 0, 'HITI'),
('POPRT', 'PORTO PORTUGUESE', '', 0, 1, 'PT', 0, 0, 'HITI'),
('PRAGU', 'AGUADILLA', '阿瓜迪亚', 0, 1, 'PR', 0, 0, 'HITI'),
('PRARE', 'ARECIBO', '阿雷西沃', 0, 1, 'PR', 0, 0, 'HITI'),
('PRFAJ', 'FAJARDO', '法哈多', 0, 1, 'PR', 0, 0, 'HITI'),
('PRGCA', 'GUANICA', '瓜尼卡', 0, 1, 'PR', 0, 0, 'HITI'),
('PRGMA', 'GUAYAMA', '瓜亚马', 0, 1, 'PR', 0, 0, 'HITI'),
('PRGUA', 'GUAYANILLA', '瓜亚尼亚', 0, 1, 'PR', 0, 0, 'HITI'),
('PRMAY', 'MAYAGUEZ', '马亚圭斯', 0, 1, 'PR', 0, 0, 'HITI'),
('PRPON', 'PONCE', '蓬塞', 0, 1, 'PR', 0, 0, 'HITI'),
('DOBCA', 'BOCA CHICA', '博卡奇卡', 0, 1, 'PR', 0, 0, 'HITI'),
('QADOH', 'DOHA', '多哈', 0, 1, 'QA', 0, 0, 'HITI'),
('QAUMS', 'UMM SAID', '乌姆赛义德', 0, 1, 'QA', 0, 0, 'HITI'),
('QAMES', 'MESAIEED', '', 0, 1, 'QA', 0, 0, 'HITI'),
('KRBUS', 'BUSAN', '釜山', 0, 1, 'KR', 0, 0, 'HITI'),
('KRCHG', 'CHANGHANG', '长项', 0, 1, 'KR', 0, 0, 'HITI'),
('KRCHI', 'CHINHAE', '镇海', 0, 1, 'KR', 0, 0, 'HITI'),
('KRCJU', 'CHEJU', '济州', 0, 1, 'KR', 0, 0, 'HITI'),
('KRINC', 'INCHON', '仁川', 0, 1, 'KR', 0, 0, 'HITI'),
('KRKUN', 'KUNSAN', '群山', 0, 1, 'KR', 0, 0, 'HITI'),
('KRMAS', 'MASAN', '马山', 0, 1, 'KR', 0, 0, 'HITI'),
('KRMHO', 'MUKHO', '墨湖', 0, 1, 'KR', 0, 0, 'HITI'),
('KRMOK', 'MOKPO', '木浦', 0, 1, 'KR', 0, 0, 'HITI'),
('KRPOH', 'POHANG', '浦项', 0, 1, 'KR', 0, 0, 'HITI'),
('KRYOS', 'YOSU', '丽水', 0, 1, 'KR', 0, 0, 'HITI'),
('KRSAM', 'SAMCHOK', '三陟', 0, 1, 'KR', 0, 0, 'HITI'),
('KRULS', 'ULSAN', '蔚山', 0, 1, 'KR', 0, 0, 'HITI'),
('KOBU', 'BUSAN,KOREA', '釜山', 0, 1, 'KR', 0, 0, 'HITI'),
('KRPUS', 'PUSAN', '釜山', 0, 1, 'KR', 0, 0, 'HITI'),
('PYI', 'PYING TAEK', '', 0, 1, 'KR', 0, 0, 'HITI'),
('REPDG', 'POINTE DES GALE', '加勒茨角', 0, 1, 'RE', 0, 0, 'HITI'),
('RESDE', 'ST. DENIS', '圣但尼', 0, 1, 'RE', 0, 0, 'HITI'),
('RESLO', 'ST. LOUIS(RE)', '圣路易斯', 0, 1, 'RE', 0, 0, 'HITI'),
('REREU', 'PORT REUNION', '溜尼汪港', 0, 1, 'RE', 0, 0, 'HITI'),
('ROBLA', 'BRAILA', '布勒伊拉', 0, 1, 'RO', 0, 0, 'HITI'),
('ROCON', 'CONSTANZA', '康斯坦萨', 0, 1, 'RO', 0, 0, 'HITI'),
('ROGLZ', 'GALATZ', '加拉茨', 0, 1, 'RO', 0, 0, 'HITI'),
('ROSUL', 'SULINA', '苏利纳', 0, 1, 'RO', 0, 0, 'HITI'),
('ROBUC', 'BUCHAREST', '布加勒斯特', 0, 1, 'RO', 0, 0, 'HITI'),
('CT', 'CONSTANTCIA', '康斯坦察', 0, 1, 'RO', 0, 0, 'HITI'),
('BUCUR', 'BUCURESTI', '', 0, 1, 'RO', 0, 0, 'HITI'),
('UAERD', 'BERDIANSK', '别尔迪扬斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUALE', 'ALEXANDROVSK', '亚历山大罗夫斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUARH', 'ARCHANGEL', '阿尔汉格尔', 0, 1, 'RU', 0, 0, 'HITI'),
('RUDKA', 'DEKASTRY', '德卡斯特莱', 0, 1, 'RU', 0, 0, 'HITI'),
('RUKER', 'KERET', '克烈季', 0, 1, 'RU', 0, 0, 'HITI'),
('RUKGD', 'KALININGRAD', '加里宁格勒', 0, 1, 'RU', 0, 0, 'HITI'),
('RUKHO', 'Kholmsk', '霍尔姆斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUKOR', 'KORSAKOV', '科尔萨科夫', 0, 1, 'RU', 0, 0, 'HITI'),
('RULAZ', 'LAZAREV', '拉扎烈夫', 0, 1, 'RU', 0, 0, 'HITI'),
('RULED', 'ST.PETERSBURG', '圣彼得堡', 0, 1, 'RU', 0, 0, 'HITI'),
('RUMAG', 'MAGADAN', '马加丹', 0, 1, 'RU', 0, 0, 'HITI'),
('RUMAK', 'MAKAROV', '马卡洛夫', 0, 1, 'RU', 0, 0, 'HITI'),
('RUMEZ', 'MESANE', '美晋', 0, 1, 'RU', 0, 0, 'HITI'),
('RUMGO', 'MAGO', '马戈', 0, 1, 'RU', 0, 0, 'HITI'),
('RUMMK', 'MURMANSK', '摩尔曼斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUNEV', 'NEVELSK', '涅韦尔斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUNJK', 'NAKHODKA', '纳雷德卡', 0, 1, 'RU', 0, 0, 'HITI'),
('RUNNM', 'NARYAN MAR', '纳里扬马尔', 0, 1, 'RU', 0, 0, 'HITI'),
('RUNOG', 'NOGLIKI', '诺格利基', 0, 1, 'RU', 0, 0, 'HITI'),
('RUNVS', 'NOVOROSSISK', '新罗西斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUOHA', 'OKHA', '奥哈', 0, 1, 'RU', 0, 0, 'HITI'),
('RUOHO', 'OKHOTSK', '鄂霍次克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUOKT', 'OKTIAABRSKIJ', '十月市', 0, 1, 'RU', 0, 0, 'HITI'),
('RUONG', 'ONEGA', '奥涅加', 0, 1, 'RU', 0, 0, 'HITI'),
('RUPAR', 'PARNU', '派尔努', 0, 1, 'RU', 0, 0, 'HITI'),
('RUPRI', 'PRIMORSK', '普里莫尔斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUPRN', 'PORONAISK', '波罗奈斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUPTK', 'PETROPAVLOVSK', '彼得罗巴浦洛夫斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUROV', 'Rostov', '罗斯托夫', 0, 1, 'RU', 0, 0, 'HITI'),
('RUSHA', 'SHAKHTERSK', '沙赫乔特斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUSOC', 'SOCHI', '索契', 0, 1, 'RU', 0, 0, 'HITI'),
('RUSOG', 'SOVETSKAYA GAVA', '苏维埃港', 0, 1, 'RU', 0, 0, 'HITI'),
('RUSVE', 'SVETLAYA RIVER', '斯伟特拉亚河', 0, 1, 'RU', 0, 0, 'HITI'),
('RUTAG', 'TAGANROG', '塔甘罗格', 0, 1, 'RU', 0, 0, 'HITI'),
('RUTUA', 'TUAPSE', '图阿普谢', 0, 1, 'RU', 0, 0, 'HITI'),
('RUUGL', 'UGLEGORSK', '乌格里哥斯克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUUMB', 'UMBA', '翁巴', 0, 1, 'RU', 0, 0, 'HITI'),
('RUVNN', 'VANINO', '瓦尼诺', 0, 1, 'RU', 0, 0, 'HITI'),
('RUVOS', 'VOSTOCHNY', '东方港', 0, 1, 'RU', 0, 0, 'HITI'),
('RUVVO', 'VLADIVOSTOK', '海参威', 0, 1, 'RU', 0, 0, 'HITI'),
('RUVYG', 'VYBORG', '维堡', 0, 1, 'RU', 0, 0, 'HITI'),
('RUVYS', 'VYSOTSK', '维索茨克', 0, 1, 'RU', 0, 0, 'HITI'),
('RUZHD', 'ZHDANOV', '日丹诺夫', 0, 1, 'RU', 0, 0, 'HITI'),
('RUZRB', 'ZARUBINO', '扎鲁比诺', 0, 1, 'RU', 0, 0, 'HITI'),
('UAKHE', 'KHERSON', '赫尔松', 0, 1, 'RU', 0, 0, 'HITI'),
('UAODS', 'ODESSA', '敖德萨', 0, 1, 'RU', 0, 0, 'HITI'),
('UARNI', 'RENI', '烈尼', 0, 1, 'RU', 0, 0, 'HITI'),
('UAYAL', 'YALTA', '雅尔塔', 0, 1, 'RU', 0, 0, 'HITI'),
('GESUI', 'SUKHUM', '苏呼米', 0, 1, 'RU', 0, 0, 'HITI'),
('EENAJ', 'NARVA JOESUU', '纳尔瓦约埃苏', 0, 1, 'RU', 0, 0, 'HITI'),
('EETLL', 'TALLINN', '塔林', 0, 1, 'RU', 0, 0, 'HITI'),
('RUMOS', 'MOSCOW', '莫斯科', 0, 1, 'RU', 0, 0, 'HITI'),
('EKA', 'EKATERINBURG', '', 0, 1, 'RU', 0, 0, 'HITI'),
('KRA', 'KRASNOYARSK', '', 0, 1, 'RU', 0, 0, 'HITI'),
('NOVO', 'NOVOSIBIRSK', '', 0, 1, 'RU', 0, 0, 'HITI'),
('KHA', 'KHABAROYSK', '', 0, 1, 'RU', 0, 0, 'HITI'),
('OMSK', 'OMSK', '', 0, 1, 'RU', 0, 0, 'HITI'),
('PERM', 'PERM', '彼尔姆', 0, 1, 'RU', 0, 0, 'HITI'),
('CHS', 'CHELYABINSK', '', 0, 1, 'RU', 0, 0, 'HITI'),
('SADAM', 'DAMMAM', '达曼', 0, 1, 'SA', 0, 0, 'HITI'),
('SAGIZ', 'GIZAN', '季赞', 0, 1, 'SA', 0, 0, 'HITI'),
('SAJED', 'JEDDAH', '吉达', 0, 1, 'SA', 0, 0, 'HITI'),
('SAJUB', 'JUBAIL', '朱拜勒', 0, 1, 'SA', 0, 0, 'HITI'),
('SARTA', 'RAS TANURA', '拉斯坦努拉', 0, 1, 'SA', 0, 0, 'HITI'),
('SAYBO', 'YENBO', '延布', 0, 1, 'SA', 0, 0, 'HITI'),
('SARIY', 'RIYADH', '利雅得', 0, 1, 'SA', 0, 0, 'HITI'),
('SNDAK', 'DAKAR', '达喀尔', 0, 1, 'SN', 0, 0, 'HITI'),
('SNKAO', 'KAOLACK', '考拉克', 0, 1, 'SN', 0, 0, 'HITI'),
('SNZIG', 'ZIGHINKOR', '济金绍尔', 0, 1, 'SN', 0, 0, 'HITI'),
('SCPVI', 'PORT VICTORIA(S', '维多利亚港', 0, 1, 'SC', 0, 0, 'HITI'),
('SLFRE', 'FREETOWN', '弗里敦', 0, 1, 'SL', 0, 0, 'HITI'),
('SLPPL', 'PEPLE', '佩佩尔', 0, 1, 'SL', 0, 0, 'HITI'),
('SLSHI', 'SHERBRO ISLAND', '歇尔布罗岛', 0, 1, 'SL', 0, 0, 'HITI'),
('SGJUR', 'JURONG', '裕廊', 0, 1, 'SG', 0, 0, 'HITI'),
('SGPBU', 'PULAU BUKOM', '普劳布科姆', 0, 1, 'SG', 0, 0, 'HITI'),
('SGSEM', 'SEMBAWANG', '森巴旺', 0, 1, 'SG', 0, 0, 'HITI'),
('SGSGP', 'SINGAPORE', '新加坡', 0, 1, 'SG', 0, 0, 'HITI'),
('DKNBG', 'NYKOBING(SJA.)', '尼克宾', 0, 1, 'SG', 0, 0, 'HITI'),
('SLOVE', 'KOPER', '科佩尔', 0, 1, 'SI', 0, 0, 'HITI'),
('SLBRA', 'BRATISLAVA', '', 0, 1, 'SI', 0, 0, 'HITI'),
('LLU', 'LLUBLJANA', '', 0, 1, 'SI', 0, 0, 'HITI'),
('PGKTA', 'KIETA', '基埃塔', 0, 1, 'SB', 0, 0, 'HITI'),
('SBGIZ', 'GIZO', '吉佐', 0, 1, 'SB', 0, 0, 'HITI'),
('SBHON', 'HONIARA', '霍尼亚拉', 0, 1, 'SB', 0, 0, 'HITI'),
('SBYAN', 'YANDINA', '扬迪纳', 0, 1, 'SB', 0, 0, 'HITI'),
('SOBER', 'BERBERA', '柏培拉', 0, 1, 'SO', 0, 0, 'HITI'),
('SOBOS', 'BOSASO', '博萨索', 0, 1, 'SO', 0, 0, 'HITI'),
('SOKIS', 'KISMAYU', '基斯马尤', 0, 1, 'SO', 0, 0, 'HITI'),
('SOMER', 'MERCA', '马尔卡', 0, 1, 'SO', 0, 0, 'HITI'),
('SOMOG', 'MOGADISCIO', '摩加迪沙', 0, 1, 'SO', 0, 0, 'HITI'),
('ZADUR', 'DURBAN', '德班', 0, 1, 'ZA', 0, 0, 'HITI'),
('ZAELN', 'EAST LONDON', '东伦敦', 0, 1, 'ZA', 0, 0, 'HITI'),
('ZAMOB', 'MOSSEL BAY', '莫塞尔贝', 0, 1, 'ZA', 0, 0, 'HITI'),
('ZAPEL', 'PORT ELIZABETH', '伊丽莎白港', 0, 1, 'ZA', 0, 0, 'HITI'),
('SOJOH', 'JOHANNESBURG', '约翰内斯堡', 0, 1, 'ZA', 0, 0, 'HITI'),
('SOHAR', 'HARARE', '哈拉雷', 0, 1, 'ZA', 0, 0, 'HITI'),
('COCAP', 'CAPE TOWN', '开普顿', 0, 1, 'ZA', 0, 0, 'HITI'),
('MAS', 'MASCON', '', 0, 1, 'ZA', 0, 0, 'HITI'),
('ESSAG', 'SAGUNTO', '萨贡托', 0, 1, 'ES', 0, 0, 'HITI'),
('ESSAN', 'SANTANDER', '桑坦德', 0, 1, 'ES', 0, 0, 'HITI'),
('ESSEV', 'SEVILLE', '塞维利亚', 0, 1, 'ES', 0, 0, 'HITI'),
('ESSFE', 'SAN FERNANDO(ES', '圣费尔南多', 0, 1, 'ES', 0, 0, 'HITI'),
('ESSFG', 'SAN FELIU DE GU', '圣费里乌德古绍尔斯', 0, 1, 'ES', 0, 0, 'HITI'),
('ESTAR', 'TARRAGONA', '塔拉戈纳', 0, 1, 'ES', 0, 0, 'HITI'),
('ESVIG', 'VIGO', '维哥', 0, 1, 'ES', 0, 0, 'HITI'),
('ESVIL', 'VILLAGARCIA', '维利亚加西', 0, 1, 'ES', 0, 0, 'HITI'),
('ESVIV', 'VIVERO', '比韦罗', 0, 1, 'ES', 0, 0, 'HITI'),
('ESVAL', 'VALENCIA', '巴伦西亚', 0, 1, 'ES', 0, 0, 'HITI'),
('ESCUL', 'CULLERA', '库列拉', 0, 1, 'ES', 0, 0, 'HITI'),
('ESADR', 'ADRA', '阿德拉', 0, 1, 'ES', 0, 0, 'HITI'),
('ESAGU', 'AGUILAS', '阿吉拉斯', 0, 1, 'ES', 0, 0, 'HITI'),
('ESALC', 'ALCUDIA', '阿尔库迪亚', 0, 1, 'ES', 0, 0, 'HITI'),
('ESALG', 'ALGECIRAS', '阿尔赫西拉斯', 0, 1, 'ES', 0, 0, 'HITI'),
('ESALI', 'ALICANTE', '阿利坎特', 0, 1, 'ES', 0, 0, 'HITI'),
('ESALM', 'ALMERIA', '阿尔梅里亚', 0, 1, 'ES', 0, 0, 'HITI'),
('ESAVI', 'AVILES', '阿维莱斯', 0, 1, 'ES', 0, 0, 'HITI'),
('ESBAE', 'BARBATE', '巴尔瓦特', 0, 1, 'ES', 0, 0, 'HITI'),
('ESBAR', 'BARCELONA', '巴塞罗那', 0, 1, 'ES', 0, 0, 'HITI'),
('ESBIL', 'BILBAO', '毕尔巴鄂', 0, 1, 'ES', 0, 0, 'HITI'),
('ESBNS', 'BLANES', '布拉内斯', 0, 1, 'ES', 0, 0, 'HITI'),
('ESBUR', 'BURRIANA', '布里亚纳', 0, 1, 'ES', 0, 0, 'HITI'),
('ESCAD', 'CADIZ(ES)', '加的斯', 0, 1, 'ES', 0, 0, 'HITI'),
('ESCAR', 'CARTAGENA(ES)', '卡塔赫纳', 0, 1, 'ES', 0, 0, 'HITI'),
('ESCAS', 'CASTELLON', '卡斯特利翁', 0, 1, 'ES', 0, 0, 'HITI'),
('ESCBN', 'CORCUBION', '科尔库维翁', 0, 1, 'ES', 0, 0, 'HITI'),
('ESCOR', 'CORUNNA', '科伦纳', 0, 1, 'ES', 0, 0, 'HITI'),
('ESCUR', 'CASTRO URDIALES', '乌迪亚莱斯堡', 0, 1, 'ES', 0, 0, 'HITI'),
('ESDEN', 'DENIA', '德尼亚', 0, 1, 'ES', 0, 0, 'HITI'),
('ESLUA', 'LUARCA', '卢阿尔卡', 0, 1, 'ES', 0, 0, 'HITI'),
('ESMAH', 'MAHON', '马翁', 0, 1, 'ES', 0, 0, 'HITI'),
('ESHUE', 'HUELVA', '韦尔瓦', 0, 1, 'ES', 0, 0, 'HITI'),
('ESIBI', 'IBIZA', '伊维萨', 0, 1, 'ES', 0, 0, 'HITI'),
('ESJAV', 'JAVEA', '哈韦阿', 0, 1, 'ES', 0, 0, 'HITI'),
('ESGAN', 'GANDIA', '刚迪亚', 0, 1, 'ES', 0, 0, 'HITI'),
('ESGAR', 'GARRUCHA', '加鲁查', 0, 1, 'ES', 0, 0, 'HITI'),
('ESGIJ', 'GIJON', '希洪', 0, 1, 'ES', 0, 0, 'HITI'),
('ESESH', 'ESCOMBRERAS HAR', '埃斯孔布雷阿斯', 0, 1, 'ES', 0, 0, 'HITI'),
('ESMAL', 'MALAGA', '马拉加', 0, 1, 'ES', 0, 0, 'HITI'),
('ESMAR', 'MARIN', '马林', 0, 1, 'ES', 0, 0, 'HITI'),
('ESMAZ', 'MAZARRON', '马萨龙', 0, 1, 'ES', 0, 0, 'HITI'),
('ESMOT', 'MOTRIL', '莫特里尔', 0, 1, 'ES', 0, 0, 'HITI'),
('ESMUR', 'MUROS', '穆罗斯', 0, 1, 'ES', 0, 0, 'HITI'),
('ESPAL', 'PALMA', '帕尔马', 0, 1, 'ES', 0, 0, 'HITI'),
('ESPAS', 'PASAJES', '帕萨赫斯', 0, 1, 'ES', 0, 0, 'HITI'),
('ESPOR', 'PORTUGALETE', '波图加莱特', 0, 1, 'ES', 0, 0, 'HITI'),
('ESROS', 'ROSAS', '罗萨斯', 0, 1, 'ES', 0, 0, 'HITI'),
('ESRDO', 'RIBADEO', '里瓦德奥', 0, 1, 'ES', 0, 0, 'HITI'),
('ESRIB', 'RIBADESELLA', '里瓦德塞利亚', 0, 1, 'ES', 0, 0, 'HITI'),
('SPMAD', 'MADRID', '马德里', 0, 1, 'ES', 0, 0, 'HITI'),
('SPSAB', 'SABADELL', '', 0, 1, 'ES', 0, 0, 'HITI'),
('4555', 'SEVILLA', '塞维利亚', 0, 1, 'ES', 0, 0, 'HITI'),
('LKCOL', 'COLOMBO', '科伦坡', 0, 1, 'LK', 0, 0, 'HITI'),
('LKGAL', 'GALLE', '加勒', 0, 1, 'LK', 0, 0, 'HITI'),
('LKJAF', 'JAFFNA', '贾夫纳', 0, 1, 'LK', 0, 0, 'HITI'),
('LKBAT', 'BATTICALOA', '拜蒂克洛', 0, 1, 'LK', 0, 0, 'HITI'),
('LKMAT', 'MATARA', '马特勒', 0, 1, 'LK', 0, 0, 'HITI'),
('LKNEG', 'NEGOMBO', '尼甘布', 0, 1, 'LK', 0, 0, 'HITI'),
('LKTRI', 'TRINCOMALEE', '亭可马里', 0, 1, 'LK', 0, 0, 'HITI'),
('LKKAL', 'KALUTARA', '卡卢特勒', 0, 1, 'LK', 0, 0, 'HITI'),
('LKKAN', 'KANKESANTURAI', '坎凯桑图赖', 0, 1, 'LK', 0, 0, 'HITI'),
('SDPSU', 'PORT SUDAN', '苏丹港', 0, 1, 'SD', 0, 0, 'HITI'),
('SDSUA', 'SUAKIN', '萨瓦金', 0, 1, 'SD', 0, 0, 'HITI'),
('SEHEL', 'HELSINGBORG', '赫尔辛堡', 0, 1, 'SE', 0, 0, 'HITI'),
('SEHOG', 'HOGANAS', '赫加奈斯', 0, 1, 'SE', 0, 0, 'HITI'),
('SEHOR', 'HORNEFORS', '霍讷福什', 0, 1, 'SE', 0, 0, 'HITI'),
('SEHSD', 'HALMSTAD', '哈尔姆斯塔德', 0, 1, 'SE', 0, 0, 'HITI'),
('SEHSM', 'HUSUM(SE)', '胡苏姆', 0, 1, 'SE', 0, 0, 'HITI'),
('SEJON', 'JONKOPING', '延雪平', 0, 1, 'SE', 0, 0, 'HITI'),
('SEKAA', 'KARLSKRONA', '卡尔斯克鲁纳', 0, 1, 'SE', 0, 0, 'HITI'),
('SEKAD', 'KARLSTAD', '卡尔斯塔德', 0, 1, 'SE', 0, 0, 'HITI'),
('SEKAL', 'KALMAR', '卡尔马', 0, 1, 'SE', 0, 0, 'HITI'),
('SEKLI', 'KLINTEHAMN', '克林特港', 0, 1, 'SE', 0, 0, 'HITI'),
('SEKLX', 'KALIX', '卡利克斯', 0, 1, 'SE', 0, 0, 'HITI'),
('SEKOP', 'KOPING', '雪平', 0, 1, 'SE', 0, 0, 'HITI'),
('SEKRI', 'KRISTINEHAMN', '克里斯蒂娜港', 0, 1, 'SE', 0, 0, 'HITI'),
('SELAN', 'LANDSKRONA', '兰斯克鲁纳', 0, 1, 'SE', 0, 0, 'HITI'),
('SELID', 'LIDKOPING', '利德雪平', 0, 1, 'SE', 0, 0, 'HITI'),
('SELIM', 'LIMHAMN', '利姆港', 0, 1, 'SE', 0, 0, 'HITI'),
('SELJU', 'LJUSNE', '于斯讷', 0, 1, 'SE', 0, 0, 'HITI'),
('SELOM', 'LOMMA', '卢马', 0, 1, 'SE', 0, 0, 'HITI'),
('SELUL', 'LULEA', '吕勒奥', 0, 1, 'SE', 0, 0, 'HITI'),
('SELYS', 'LYSEKIL', '吕瑟希尔', 0, 1, 'SE', 0, 0, 'HITI'),
('SEMAL', 'MALMO', '马尔默', 0, 1, 'SE', 0, 0, 'HITI'),
('SEMAR', 'MARSTRAND', '马斯特兰德', 0, 1, 'SE', 0, 0, 'HITI'),
('SEMOT', 'MOTALA', '穆塔拉', 0, 1, 'SE', 0, 0, 'HITI'),
('SENOR', 'NORRKOPING', '诺尔雪平', 0, 1, 'SE', 0, 0, 'HITI'),
('SENRT', 'NORRSUNDET', '诺尔松德', 0, 1, 'SE', 0, 0, 'HITI'),
('SENYK', 'NYKOPING(SE)', '尼雪平', 0, 1, 'SE', 0, 0, 'HITI'),
('SEORN', 'ORNSKOLDSVIK', '恩舍尔兹维克', 0, 1, 'SE', 0, 0, 'HITI'),
('SEOTT', 'OTTERBACKEN', '乌特拜肯', 0, 1, 'SE', 0, 0, 'HITI'),
('SEOXE', 'OXELOSUND', '乌克瑟勒松德', 0, 1, 'SE', 0, 0, 'HITI'),
('SEPIT', 'PITEA', '皮特奥', 0, 1, 'SE', 0, 0, 'HITI'),
('SERBN', 'RONNEBYHAMN', '尤讷比港', 0, 1, 'SE', 0, 0, 'HITI'),
('SESIM', 'SIMRISHAMN', '锡姆里斯港', 0, 1, 'SE', 0, 0, 'HITI'),
('SESJE', 'SODERTELJE', '南泰利耶', 0, 1, 'SE', 0, 0, 'HITI'),
('SESKA', 'SKELLEFTEA', '谢莱夫特奥', 0, 1, 'SE', 0, 0, 'HITI'),
('SESKO', 'SKOGHALL', '斯库格哈尔', 0, 1, 'SE', 0, 0, 'HITI'),
('SESKU', 'SKUTSKAR', '斯屈特谢尔', 0, 1, 'SE', 0, 0, 'HITI'),
('SESLI', 'SLITE', '斯利特', 0, 1, 'SE', 0, 0, 'HITI'),
('SESOD', 'SODERHAMN', '瑟德港', 0, 1, 'SE', 0, 0, 'HITI'),
('SESOG', 'SODERKOPING', '南雪平', 0, 1, 'SE', 0, 0, 'HITI'),
('SESOL', 'SOLVESBORG', '瑟尔沃斯堡', 0, 1, 'SE', 0, 0, 'HITI'),
('SESTD', 'STROMSTAD', '斯特伦斯塔德', 0, 1, 'SE', 0, 0, 'HITI'),
('SESTO', 'STOCKHOLM', '斯德哥尔摩', 0, 1, 'SE', 0, 0, 'HITI'),
('SESTR', 'STRANGNAS', '斯特兰奈斯', 0, 1, 'SE', 0, 0, 'HITI'),
('SESVL', 'SUNDSVALL', '松兹瓦尔', 0, 1, 'SE', 0, 0, 'HITI'),
('SESVN', 'SANDVIKEN(SE)', '桑德维肯', 0, 1, 'SE', 0, 0, 'HITI'),
('SETRE', 'TRELLEBORG', '特雷勒堡', 0, 1, 'SE', 0, 0, 'HITI'),
('SEUDD', 'UDDEVALLA', '乌德瓦拉', 0, 1, 'SE', 0, 0, 'HITI'),
('SEUME', 'UMEA', '于默奥', 0, 1, 'SE', 0, 0, 'HITI'),
('SEVAL', 'VALDEMARSVIK', '瓦尔德马什维克', 0, 1, 'SE', 0, 0, 'HITI'),
('SEVAR', 'VARBERG', '瓦尔贝里', 0, 1, 'SE', 0, 0, 'HITI'),
('SEAHS', 'AHUS', '奥胡斯', 0, 1, 'SE', 0, 0, 'HITI'),
('SEALA', 'ALA', '阿拉', 0, 1, 'SE', 0, 0, 'HITI'),
('SEARB', 'ARBOGA', '阿尔博加', 0, 1, 'SE', 0, 0, 'HITI'),
('SEBOR', 'BORGHOLM', '博里霍尔姆', 0, 1, 'SE', 0, 0, 'HITI'),
('SEENK', 'ENKOPING', '恩雪平', 0, 1, 'SE', 0, 0, 'HITI'),
('SEFAL', 'FALKENBERG', '法尔肯贝里', 0, 1, 'SE', 0, 0, 'HITI'),
('SEGEF', 'GEFLE', '耶夫勒', 0, 1, 'SE', 0, 0, 'HITI'),
('SEGOT', 'GOTHENBURG', '哥德堡', 0, 1, 'SE', 0, 0, 'HITI'),
('SEHAN', 'HARGSHAMN', '哈里港', 0, 1, 'SE', 0, 0, 'HITI'),
('SEHAP', 'HAPARANDA', '哈帕兰达', 0, 1, 'SE', 0, 0, 'HITI'),
('SEVIS', 'VISBY', '维斯比', 0, 1, 'SE', 0, 0, 'HITI'),
('SEWES', 'WESTERVIK', '韦斯特维克', 0, 1, 'SE', 0, 0, 'HITI'),
('SEWHN', 'WALLHAMN', '瓦尔港', 0, 1, 'SE', 0, 0, 'HITI'),
('SEYST', 'YSTAD', '于斯塔德', 0, 1, 'SE', 0, 0, 'HITI'),
('ALA', 'ALA', '阿拉', 0, 1, 'SE', 0, 0, 'HITI'),
('SW', 'ARBOGA', '阿布罗斯', 0, 1, 'SE', 0, 0, 'HITI'),
('SWEKE', 'EKENAS', '埃克纳斯', 0, 1, 'SE', 0, 0, 'HITI'),
('GLL', 'GAVLE', '', 0, 1, 'SE', 0, 0, 'HITI'),
('BER', 'BERNE', '', 0, 1, 'SW', 0, 0, 'HITI'),
('SWZUR', 'ZURICH', '苏黎士', 0, 1, 'SW', 0, 0, 'HITI'),
('SWBAS', 'BASLE', '巴塞尔', 0, 1, 'SW', 0, 0, 'HITI'),
('GEN', 'GENEVA', '日内瓦', 0, 1, 'SW', 0, 0, 'HITI'),
('SWLAU', 'LAUSANNE', '', 0, 1, 'SW', 0, 0, 'HITI'),
('ST.G', 'ST.GALLEN', '', 0, 1, 'SW', 0, 0, 'HITI'),
('CHIA', 'CHIASSO', '', 0, 1, 'SW', 0, 0, 'HITI'),
('GBS', 'GRABS', '', 0, 1, 'SW', 0, 0, 'HITI'),
('SYBAN', 'BANIYAS', '巴尼亚斯', 0, 1, 'SY', 0, 0, 'HITI'),
('SYLAT', 'LATTAKIA', '拉塔基亚', 0, 1, 'SY', 0, 0, 'HITI'),
('TWHLN', 'HUALIAN', '花莲', 0, 1, 'TW', 0, 0, 'HITI'),
('TWJIL', 'JILONG', '基隆', 0, 1, 'TW', 0, 0, 'HITI'),
('TWPHU', 'PENGHU', '澎湖', 0, 1, 'TW', 0, 0, 'HITI'),
('TWGAO', 'GAOXONG', '高雄', 0, 1, 'TW', 0, 0, 'HITI'),
('TWSUO', 'SUAO', '苏奥', 0, 1, 'TW', 0, 0, 'HITI'),
('TWTNA', 'TAINAN', '台南', 0, 1, 'TW', 0, 0, 'HITI'),
('TWTZH', 'TAIZHONG', '台中', 0, 1, 'TW', 0, 0, 'HITI'),
('TWTAI', 'TAICHUNG', '台中', 0, 1, 'TW', 0, 0, 'HITI'),
('TWKAO', 'KAOHSIUNG', '高雄', 0, 1, 'TW', 0, 0, 'HITI'),
('TAIPE', 'TAIPEI', '台北', 0, 1, 'TW', 0, 0, 'HITI'),
('TZDRS', 'DAR-ES-SALAAM', '达累斯萨拉姆', 0, 1, 'TZ', 0, 0, 'HITI'),
('TZKKI', 'KILWA KIVINJE', '基卢瓦基温杰', 0, 1, 'TZ', 0, 0, 'HITI'),
('TZKMA', 'KILWA MASOKO', '基卢瓦马索科', 0, 1, 'TZ', 0, 0, 'HITI'),
('TZLDI', 'LINDI', '林迪', 0, 1, 'TZ', 0, 0, 'HITI'),
('TZMTW', 'MTWARA', '姆特瓦拉', 0, 1, 'TZ', 0, 0, 'HITI'),
('TZPAN', 'PANGANI', '潘加尼', 0, 1, 'TZ', 0, 0, 'HITI'),
('TZTAN', 'TANGA', '坦噶', 0, 1, 'TZ', 0, 0, 'HITI'),
('TZZAI', 'ZANZIBAR ISLAND', '桑给巴尔岛', 0, 1, 'TZ', 0, 0, 'HITI'),
('THBKK', 'BANGKOK', '曼谷', 0, 1, 'TH', 0, 0, 'HITI'),
('THLCB', 'LAEM CHABANG', '雷查班', 0, 1, 'TH', 0, 0, 'HITI'),
('THPAT', 'PATTANI', '北大年', 0, 1, 'TH', 0, 0, 'HITI'),
('THPHU', 'PHUKET', '普吉', 0, 1, 'TH', 0, 0, 'HITI'),
('LKR', 'LAT KRABANG', '拉特卡拉帮', 0, 1, 'TH', 0, 0, 'HITI'),
('12', 'BANKOK CY PORT', '', 0, 1, 'TH', 0, 0, 'HITI'),
('SCT', 'SCT', '', 0, 1, 'TH', 0, 0, 'HITI'),
('KLO', 'KLONG TOEY', '', 0, 1, 'TH', 0, 0, 'HITI'),
('TGKPE', 'KPEME', '佩梅', 0, 1, 'TG', 0, 0, 'HITI'),
('TGLOM', 'LOME', '洛美', 0, 1, 'TG', 0, 0, 'HITI'),
('TONEI', 'NEIAFU', '内亚富', 0, 1, 'TO', 0, 0, 'HITI'),
('TOKYO', 'NUKUALOFA', '努库阿洛法', 0, 1, 'TO', 0, 0, 'HITI'),
('TOROA', 'ROADTOWN', '', 0, 1, 'TO', 0, 0, 'HITI'),
('TTBRI', 'BRIGHTON(TT)', '布赖顿', 0, 1, 'TT', 0, 0, 'HITI'),
('TTCHA', 'CHAGUARAMAS', '查瓜拉马斯', 0, 1, 'TT', 0, 0, 'HITI'),
('TTGAP', 'GALEOTA POINT', '加莱奥塔角', 0, 1, 'TT', 0, 0, 'HITI'),
('TTPAP', 'POINTE A PIERRE', '皮埃尔角城', 0, 1, 'TT', 0, 0, 'HITI'),
('TTPFN', 'POINT FORTIN', '福廷角', 0, 1, 'TT', 0, 0, 'HITI'),
('TTSCA', 'SCARBOROUGH(TT)', '斯卡伯勒', 0, 1, 'TT', 0, 0, 'HITI'),
('TTSFE', 'SAN FERNANDO(TT', '圣费尔南多', 0, 1, 'TT', 0, 0, 'HITI'),
('TTTEM', 'TEMBLADORA', '滕布拉多腊', 0, 1, 'TT', 0, 0, 'HITI'),
('TTPLY', 'PLYMOUTH(TT)', '普利茅斯', 0, 1, 'TT', 0, 0, 'HITI'),
('TTPOS', 'PORT OF SPAIN', '西班牙港', 0, 1, 'TT', 0, 0, 'HITI'),
('TNGAB', 'GABES', '加贝斯', 0, 1, 'TN', 0, 0, 'HITI'),
('TNLGO', 'LA GOULETTE', '拉古莱特', 0, 1, 'TN', 0, 0, 'HITI'),
('TNLSK', 'LA SKHIRRA', '拉斯基拉', 0, 1, 'TN', 0, 0, 'HITI'),
('TNBIZ', 'BIZERTA', '比塞大', 0, 1, 'TN', 0, 0, 'HITI'),
('TNSFA', 'SFAX', '斯法克斯', 0, 1, 'TN', 0, 0, 'HITI'),
('TNTNS', 'TUNIS', '突尼斯', 0, 1, 'TN', 0, 0, 'HITI'),
('TRANT', 'ANTALYA', '安塔利亚', 0, 1, 'TR', 0, 0, 'HITI'),
('TRBAN', 'BANDIRMA', '班德尔马', 0, 1, 'TR', 0, 0, 'HITI'),
('TRDER', 'DERINCE', '代林杰', 0, 1, 'TR', 0, 0, 'HITI'),
('TRDIK', 'DIKILI', '迪基利', 0, 1, 'TR', 0, 0, 'HITI'),
('TRDIL', 'DILISKELESI', '帝力克里斯', 0, 1, 'TR', 0, 0, 'HITI'),
('TRERE', 'EREGLI', '埃雷利', 0, 1, 'TR', 0, 0, 'HITI'),
('TRFAT', 'FATSA', '法特萨', 0, 1, 'TR', 0, 0, 'HITI'),
('TRFET', 'FETHIYE', '费特希耶', 0, 1, 'TR', 0, 0, 'HITI'),
('TRFIN', 'FINIKE', '菲尼凯', 0, 1, 'TR', 0, 0, 'HITI'),
('TRGEM', 'GEMLIK', '盖姆利克', 0, 1, 'TR', 0, 0, 'HITI'),
('TRGIR', 'GIRESUN', '古雷松', 0, 1, 'TR', 0, 0, 'HITI'),
('TRGOR', 'GORELE', '格雷莱', 0, 1, 'TR', 0, 0, 'HITI'),
('TRHOP', 'HOPA', '霍帕', 0, 1, 'TR', 0, 0, 'HITI'),
('TRINE', 'INEBOLU', '伊内博卢', 0, 1, 'TR', 0, 0, 'HITI'),
('TRISK', 'ISKENDERUN', '伊斯肯德伦', 0, 1, 'TR', 0, 0, 'HITI'),
('TRHAY', 'HAYDARPASA', '海达尔帕夏', 0, 1, 'TR', 0, 0, 'HITI'),
('TRIST', 'TRIST', '伊斯坦布尔', 0, 1, 'TR', 0, 0, 'HITI'),
('TRIZM', 'IZMIR', '伊兹密尔', 0, 1, 'TR', 0, 0, 'HITI'),
('TRORD', 'ORDU', '奥尔杜', 0, 1, 'TR', 0, 0, 'HITI'),
('TRRIZ', 'RIZE', '里泽', 0, 1, 'TR', 0, 0, 'HITI'),
('TRSAM', 'SAMSUN', '萨姆松', 0, 1, 'TR', 0, 0, 'HITI'),
('TRMER', 'MERSIN', '梅尔辛', 0, 1, 'TR', 0, 0, 'HITI'),
('TRTRA', 'TRABZON', '特拉布宗', 0, 1, 'TR', 0, 0, 'HITI'),
('TRZON', 'ZONGULDAK', '宗古尔达克', 0, 1, 'TR', 0, 0, 'HITI'),
('TRALA', 'ALANYA', '阿拉尼亚', 0, 1, 'TR', 0, 0, 'HITI'),
('TRAMA', 'AMASRA', '阿马斯腊', 0, 1, 'TR', 0, 0, 'HITI'),
('TUGEB', 'GEBZE', '', 0, 1, 'TR', 0, 0, 'HITI'),
('TUANK', 'ANKARA', '', 0, 1, 'TR', 0, 0, 'HITI'),
('I', 'ISTANBUL', '', 0, 1, 'TR', 0, 0, 'HITI'),
('AEAJM', 'AJMAN', '阿治曼', 0, 1, 'AE', 0, 0, 'HITI'),
('AEDAS', 'DAS ISLAND', '达斯岛', 0, 1, 'AE', 0, 0, 'HITI'),
('AEFUJ', 'FUJAIRAH', '富查伊拉', 0, 1, 'AE', 0, 0, 'HITI'),
('AEJDA', 'JEBEL DHANNA', '杰贝尔丹那', 0, 1, 'AE', 0, 0, 'HITI'),
('AEKFA', 'KHOR FAKKAN', '豪尔费坎', 0, 1, 'AE', 0, 0, 'HITI'),
('AERAK', 'RAS AL KHAIMAH', '哈伊马角', 0, 1, 'AE', 0, 0, 'HITI'),
('AESJH', 'SHARJAH', '舍尔杰', 0, 1, 'AE', 0, 0, 'HITI'),
('AEUAQ', 'UMM AL QUWAIN', '乌姆盖万', 0, 1, 'AE', 0, 0, 'HITI'),
('AEABD', 'ABU DHABI', '阿布扎比', 0, 1, 'AE', 0, 0, 'HITI'),
('AEDUB', 'DUBAI,UAE', '迪拜', 0, 1, 'AE', 0, 0, 'HITI'),
('UARAS', 'PORT RASHID DUBAI', '迪拜', 0, 1, 'AE', 0, 0, 'HITI'),
('UBI', 'DUBAI', '迪拜', 0, 1, 'AE', 0, 0, 'HITI'),
('UAILK', 'ILYICHEVSK', '伊利乔夫斯克', 0, 1, 'UA', 0, 0, 'HITI'),
('UAUDK', 'UST-DUNAYSK', '乌斯特---多瑙伊斯克', 0, 1, 'UA', 0, 0, 'HITI'),
('URKIE', 'KIEV', '基辅', 0, 1, 'UK', 0, 0, 'HITI'),
('UKDON', 'DONCASTER', '', 0, 1, 'UK', 0, 0, 'HITI'),
('UKLEY', 'LEYLAND', '', 0, 1, 'UK', 0, 0, 'HITI'),
('UKLND', 'LEYLANO', '', 0, 1, 'UK', 0, 0, 'HITI'),
('UKSOO', 'SOOTH SHIELDS', '', 0, 1, 'UK', 0, 0, 'HITI'),
('UYNPA', 'NUEVA PALMIRA', '新帕尔米拉', 0, 1, 'UY', 0, 0, 'HITI'),
('UYPAY', 'PAYSANDU', '派桑杜', 0, 1, 'UY', 0, 0, 'HITI'),
('UYCOL', 'COLONIA', '科洛尼亚', 0, 1, 'UY', 0, 0, 'HITI'),
('UYFBS', 'FRAY BENTOS', '弗赖本托斯', 0, 1, 'UY', 0, 0, 'HITI'),
('UYMON', 'MONTYEVIDEO', '蒙得维的亚', 0, 1, 'UY', 0, 0, 'HITI'),
('ARCON', 'CONCEPCION DEL UNRUGUAY', '孔塞普匈-德尔-乌拉圭', 0, 1, 'UY', 0, 0, 'HITI'),
('MONT', 'MONTEVIDEO', '蒙特维的亚', 0, 1, 'UY', 0, 0, 'HITI'),
('VEAMB', 'AMUAY BAY', '阿穆艾湾', 0, 1, 'VE', 0, 0, 'HITI'),
('VEBJG', 'BAJO GRANDE', '巴霍格兰德', 0, 1, 'VE', 0, 0, 'HITI'),
('VECIB', 'CIUDAD BOLIVAR', '玻利瓦尔城', 0, 1, 'VE', 0, 0, 'HITI'),
('VECNO', 'CARUPANO', '卡鲁帕诺', 0, 1, 'VE', 0, 0, 'HITI'),
('VECTO', 'CARIPITO', '卡里皮托', 0, 1, 'VE', 0, 0, 'HITI'),
('VELGU', 'LA GUAIRA', '拉瓜伊拉', 0, 1, 'VE', 0, 0, 'HITI'),
('VEPAL', 'PALUA', '帕卢亚', 0, 1, 'VE', 0, 0, 'HITI'),
('VEPCA', 'PUERTO CABELLO', '卡贝略港', 0, 1, 'VE', 0, 0, 'HITI'),
('VEPCN', 'PUNTA CARDON', '篷塔卡尔东', 0, 1, 'VE', 0, 0, 'HITI'),
('VEPDH', 'PUERTO DE HIERR', '耶罗港', 0, 1, 'VE', 0, 0, 'HITI'),
('VEPOR', 'PUERTO ORDAZ', '奥尔达斯港', 0, 1, 'VE', 0, 0, 'HITI'),
('VESLO', 'SAN LORENZO(VE)', '圣洛伦索', 0, 1, 'VE', 0, 0, 'HITI'),
('ANCSB', 'CARACAS BAY', '加拉加斯湾', 0, 1, 'VE', 0, 0, 'HITI'),
('VECAR', 'CARACAS', '加拉加斯', 0, 1, 'VE', 0, 0, 'HITI'),
('123', 'LA GUAIRA,VENEZUELA', '拉瓜伊拉', 0, 1, 'VE', 0, 0, 'HITI'),
('VEISL', 'ISLA MAGARITA', '伊斯拉曼哥雷塔', 0, 1, 'VE', 0, 0, 'HITI'),
('VECBO', 'PORT CABELLO', '卡贝略港', 0, 1, 'VE', 0, 0, 'HITI'),
('VNDAN', 'DANANG', '岘港', 0, 1, 'VN', 0, 0, 'HITI'),
('VNHGY', 'HONGAY', '鸿基', 0, 1, 'VN', 0, 0, 'HITI'),
('VNHUE', 'HUE', '顺化', 0, 1, 'VN', 0, 0, 'HITI'),
('VNKYN', 'KWANG YEN', '广义', 0, 1, 'VN', 0, 0, 'HITI'),
('VNMYT', 'MY THO', '美富', 0, 1, 'VN', 0, 0, 'HITI'),
('VNHPG', 'HAIPHONG', '海防', 0, 1, 'VN', 0, 0, 'HITI'),
('VNQUN', 'QUI NHON', '归仁', 0, 1, 'VN', 0, 0, 'HITI'),
('VNVIN', 'VINH', '荣市', 0, 1, 'VN', 0, 0, 'HITI'),
('VNVUT', 'VUNG TAU', '头顿', 0, 1, 'VN', 0, 0, 'HITI'),
('VNNTG', 'NHA TRANG', '芽庄', 0, 1, 'VN', 0, 0, 'HITI'),
('VECA', 'CAMPHA', '锦普', 0, 1, 'VN', 0, 0, 'HITI'),
('HOPO', 'HO CHI MINH CITY', '胡志明市', 0, 1, 'VN', 0, 0, 'HITI'),
('HANO', 'HANOI', '河内', 0, 1, 'VN', 0, 0, 'HITI'),
('VICHR', 'CHRISTIANSTED', '克里斯琴斯特德', 0, 1, 'VI', 0, 0, 'HITI'),
('VIFRE', 'FREDERIKSTED', '弗雷德里克斯特德', 0, 1, 'VI', 0, 0, 'HITI'),
('VISTS', 'ST. THOMAS', '圣托马斯', 0, 1, 'VI', 0, 0, 'HITI'),
('YEADN', 'ADEN', '亚丁', 0, 1, 'YE', 0, 0, 'HITI'),
('YEHOD', 'HODEIDAH', '荷台达', 0, 1, 'YE', 0, 0, 'HITI'),
('YEMOK', 'MOKHA', '穆哈', 0, 1, 'YE', 0, 0, 'HITI'),
('YEMUK', 'MUKALLA', '穆卡拉', 0, 1, 'YE', 0, 0, 'HITI'),
('YUIZO', 'IZOLA', '伊佐拉', 0, 1, 'YU', 0, 0, 'HITI'),
('SIIZO', 'Izola', '伊佐拉', 0, 1, 'YU', 0, 0, 'HITI'),
('HRHVA', 'HVAR', '赫瓦尔', 0, 1, 'YU', 0, 0, 'HITI'),
('HRMAS', 'MASLINICA', '马斯利尼察', 0, 1, 'YU', 0, 0, 'HITI'),
('HRRAS', 'RASA', '拉萨', 0, 1, 'YU', 0, 0, 'HITI'),
('HRROV', 'ROVINJ', '罗维尼', 0, 1, 'YU', 0, 0, 'HITI'),
('HRSIB', 'SIBENIK', '希贝尼克', 0, 1, 'YU', 0, 0, 'HITI'),
('HRSEN', 'SENJ', '塞尼', 0, 1, 'YU', 0, 0, 'HITI');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('HRZAD', 'ZADAR', '扎达尔', 0, 1, 'YU', 0, 0, 'HITI'),
('YUKOT', 'KOTOR', '科托尔', 0, 1, 'YU', 0, 0, 'HITI'),
('YUPIR', 'PIRAN', '皮兰', 0, 1, 'YU', 0, 0, 'HITI'),
('BEO', 'BEOGRADE', '', 0, 1, 'YU', 0, 0, 'HITI'),
('BELG', 'BELGRADE', '', 0, 1, 'YU', 0, 0, 'HITI'),
('ZRMAT', 'MATADI', '马塔迪', 0, 1, 'ZR', 0, 0, 'HITI'),
('ZRBAN', 'BANANA', '巴纳纳', 0, 1, 'ZR', 0, 0, 'HITI'),
('ZRBMA', 'BOMA', '博马', 0, 1, 'ZR', 0, 0, 'HITI'),
('ZIBUL', 'BULAWAYO', '', 0, 1, 'ZI', 0, 0, 'HITI');

INSERT INTO `P_COMPANY_CONFIG` (`COCO_CODE`, `COCO_NAME`, `COCO_VALUE`, `COCO_VALUE_TYPE`, `COCO_VALUE_OPTIONS`, `COCO_GROUP`, `COCO_TYPE`, `COCO_DESC`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('COMPANY_NAME', '公司名称', '{companyname}', 0, NULL, '公司属性', 'A', NULL, 'HITI', 0, 0),
('COMPANY_CONTACT', '公司联系人', '{contact}', 0, NULL, '公司属性', 'A', NULL, 'HITI', 3, 0),
('COMPANY_TEL', '公司电话', '{tel}', 0, NULL, '公司属性', 'A', NULL, 'HITI', 0, 0),
('COMPANY_FAX', '公司传真', '{fax}', 0, NULL, '公司属性', 'A', NULL, 'HITI', 0, 0),
('COMPANY_EMAIL', '公司邮件地址', '{email}', 0, NULL, '公司属性', 'A', NULL, 'HITI', 0, 0),
('COMPANY_URL', '公司网址', '{url}', 0, NULL, '公司属性', 'A', NULL, 'HITI', 0, 0),
('COMPANY_ADDRESS_CN', '公司中文地址', '', 0, NULL, '公司属性', 'A', NULL, 'HITI', 0, 0),
('COMPANY_ADDRESS_EN', '公司英文地址', '', 0, NULL, '公司属性', 'A', NULL, 'HITI', 1, 0),
('COMPANY_NAME_EN', '公司英文名称', '', 0, NULL, '公司属性', 'A', NULL, 'HITI', 0, 0),
('CUSTOMER_DEFAULT_CRDIT_DAYS', '客户缺省信用期（天）', '30', 1, NULL, '客户供应商配置', 'A', '', 'HITI', 0, 0),
('CUSTOMER_DEFAULT_CRDIT_AMOUNT', '客户缺省信用额度（CNY）', '0', 1, NULL, '客户供应商配置', 'A', NULL, 'HITI', 1, 0),
('COMPANY_ZIP', '公司邮编', '', 0, NULL, '公司属性', 'A', NULL, 'HITI', 2, 0),
('BASE_PORT', '本港代码', '', 10, NULL, '业务设置', 'A', '', 'HITI', 4, 0),
('LOCK_CONS_AUDIT', '单票审核是否锁定委托信息', 'Y', 2, NULL, '业务设置', 'A', NULL, 'HITI', 0, 0),
('DEFAULT_DEPT_C', '集装箱业务缺省部门', '', 12, NULL, '业务设置', 'A', '集装箱部', 'HITI', 1, 0),
('DEFAULT_DEPT_B', '散货业务缺省部门', '', 12, NULL, '业务设置', 'A', '散货部', 'HITI', 1, 0),
('DEFAULT_DEPT_G', '报关业务缺省部门', '', 12, NULL, '业务设置', 'A', '报关部', 'HITI', 1, 0),
('DEFAULT_DEPT_I', '报检业务缺省部门', '', 12, NULL, '业务设置', 'A', '报关部', 'HITI', 1, 0),
('DEFAULT_DEPT_A', '空运业务缺省部门', '', 12, NULL, '业务设置', 'A', '空运部', 'HITI', 2, 0),
('FDOC_BL', '提单单证类型', NULL, 13, NULL, '业务设置', 'A', NULL, 'HITI', 0, 0),
('FDOC_CC', '核销单单证类型', NULL, 13, NULL, '业务设置', 'A', '核销单', 'HITI', 1, 0),
('FDOC_AUTO_UPDATE_RELEASABLE', '系统是否自动更新可放核销单、提单', 'Y', 2, NULL, '业务设置', 'A', NULL, 'HITI', 0, 0),
('PASSWORD_EXPIRY_DAYS', '密码有效期（天）', '30', 1, NULL, '系统参数', 'A', NULL, 'HITI', 0, 0),
('PROFIT_ALERT_TYPE', '利润预警类型', '毛利率', 3, '毛利|毛利率', '系统参数', 'A', NULL, 'HITI', 3, 0),
('PROFIT_ALERT_VALUE', '利润预警阀值（利润小于）', '10', 1, NULL, '系统参数', 'A', NULL, 'HITI', 2, 0),
('PROFIT_ALERT_COLOR', '利润预警颜色', '#99CC00', 9, NULL, '系统参数', NULL, NULL, 'HITI', 2, 0),
('CONS_LOCK_DAYS', '开航后多少天锁定业务数据', '30', 1, NULL, '系统参数', 'A', NULL, 'HITI', 0, 0),
('CONS_AR_OVERDUE_DAYS', '最大应收账款天数', '60', 1, NULL, '业务设置', 'A', NULL, 'HITI', 0, 0);

-- 建立公司
insert into P_COMPANY (comp_code, comp_name_cn, comp_name_en,comp_active,comp_start_date,comp_end_date,comp_service_level, comp_email,comp_tel,comp_fax,comp_address, comp_contact,create_time, modify_time) 
values('HITI','{$companyname}', '', 1, now(), null, 0, '{$email}', '{$tel}', '{$fax}', '', '{$contact}', now(), now()); 

-- 建立用户
insert into P_USER (user_name, user_login_name, user_email, user_password, user_password_modify_date,active,comp_code,version, removed) 
values('admin','admin','{$email}', 'e10adc3949ba59abbe56e057f20f883e',now(),1,'HITI',0,0);

-- 增加admin角色
insert into P_ROLE (role_name,active,comp_code,version,removed) 
values ('admin', 1, 'HITI',0,0);

-- 给第一个用户admin角色

insert into P_USER_ROLE (user_id, role_id)
values(1, 1);

-- admin费用权限
insert into P_USER_EXPE_PERMISSION (user_id, chcl_id, chcl_name, expe_type, usep_editable, usep_view_all, usep_edit_all, comp_code, version, removed) 
values (1, 0, '所有费用', 'R', 1, 1, 1, 'HITI', 0, 0);

-- 上面是应收, 这是应付
insert into P_USER_EXPE_PERMISSION (user_id, chcl_id, chcl_name, expe_type, usep_editable, usep_view_all, usep_edit_all, comp_code, version, removed) 
values (1, 0, '所有费用', 'P', 1, 1, 1, 'HITI', 0, 0);

-- admin权限初始化
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010204', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010205', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010206', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010207', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010305', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010306', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010307', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010313', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010505', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010506', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010507', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010508', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050801', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050802', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050803', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050804', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010509', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050901', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050902', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050903', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050904', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010510', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051001', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051002', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051003', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051004', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010511', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010512', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010605', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010606', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010607', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010608', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060801', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060802', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060803', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060804', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010609', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060901', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060902', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060903', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060904', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010610', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061001', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061002', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061003', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061004', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010611', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010612', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020109', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020204', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020205', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020206', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020207', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030109', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020305', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020306', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020307', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030801', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030802', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030803', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030804', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020310', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031001', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031002', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031003', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031004', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020311', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020312', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000204', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020412', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041204', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041205', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000205', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020505', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020509', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020605', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002060501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002060502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030204', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030205', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030206', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030207', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030305', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030306', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030307', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030801', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030802', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030803', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030804', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040206', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040306', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050207', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030113', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050307', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0006', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070106', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070204', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070205', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070305', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070306', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070311', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070405', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000705', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070505', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070506', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000706', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070605', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000707', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070705', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070706', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000708', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070801', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070802', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070803', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070804', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070805', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070806', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070807', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070810', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000709', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070901', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070902', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070903', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070904', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070905', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070906', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000710', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071001', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071002', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071003', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071006', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000711', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000712', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000713', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130208', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130209', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130308', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130309', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000714', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000715', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0008', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000801', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000802', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080204', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000803', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000804', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000805', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000806', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000807', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000808', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080801', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080804', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000809', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080901', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080904', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000810', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081001', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081004', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000811', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000812', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081204', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000814', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000815', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081504', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000816', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081604', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000817', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081704', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0009', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000901', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000902', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000903', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090304', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000904', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090404', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0010', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001001', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001002', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100204', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001003', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001004', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001005', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001006', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001007', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001008', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100801', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100802', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100803', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001009', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100901', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100902', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100903', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001010', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101001', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101002', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101003', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001011', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001012', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001013', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001014', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001015', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001016', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001017', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001018', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101801', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101802', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101803', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001019', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101901', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101902', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101903', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001020', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102001', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102002', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102003', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001021', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001022', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001023', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001024', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001025', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102503', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001026', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102601', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102602', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102603', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001027', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102701', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102702', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102703', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001028', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102801', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102802', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102803', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0011', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110101', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001102', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110201', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110202', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110203', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001103', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110301', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110302', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110303', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001104', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110401', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110402', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110403', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001105', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110501', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110502', 'HITI');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110503', 'HITI');

INSERT INTO `P_MESSAGE_TOPIC` (`METO_ID`, `METO_NAME`, `METO_DESC`, `METO_TEMPLATE`, `METO_RULE`, `ACT_NAME`, `TETY_ID`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
(1, '配船通知', '租船部生成委托时通知操作和调度', '大家好 <br><br>操作：{操作} <br><br>船名：{船名} or sub <br>租船人：{租船人} <br>发货人：{发货人} <br>LAYCAN：与客户：{预计船期从}/{预计船期到} 与船公司：{船期从}/{船期到} <br>船公司：{船公司} <br>船代：{船代} <br>计费标准： 与客户{客户计费单位} 与船公司{船公司计费单位} <br>配货：{毛重} {客户计费单位} <br>合同号：{合同号} <br>FOS编号: {委托号} <br>货物明细：{货物描述} <br>装（港区）/卸港 {装货港}({港区})/{卸货港} <br>条款：与船公司{船公司条款} 与客户{客户条款} <br><br>注意事项：{注意事项} <br><br>装船要求：{备注}', 'rowAction=N,consBizType=B,consMasterFlag=1', 'CONS_S', 37, 1, 'HITI', 3, 0),
(2, '核销单超期未退通知', '核销单, 开船超过30天, 但是未退回', '核销单号: {核销单号}, 委托号: {委托号}, 开船超过30天, 状态未退回', NULL, 'QUARTZ_FDOC_ALERT_WRITEOFF', 43, 1, 'HITI', 1, 0),
(3, '业务员超期提示', '查询有客户超期严重的业务员,提示扣他名下所有客户的提单列表', '业务员: {业务员}, 提单号: {提单号}', NULL, 'QUARTZ_CONS_ALERT_SALES_OVERDUE', 45, 1, 'HITI', 0, 0);

