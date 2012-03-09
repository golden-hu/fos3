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
('长期客户', 'SUT', 0, 0),
('临时客户', 'SUT', 0, 0);

--
-- 导出表中的数据 `C_VENDOR_CATEGORY`
--

INSERT INTO `C_VENDOR_CATEGORY` (`VECA_NAME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('临时供应商', 'SUT', 0, 0),
('普通供应商', 'SUT', 0, 0),
('签约供应商', 'SUT', 0, 0);

--
-- 导出表中的数据 `G_CARGO_CLASS`
--

INSERT INTO `G_CARGO_CLASS` (`CACL_CODE`, `CACL_NAME_CN`, `CACL_NAME_EN`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('01', '活动物', NULL, 1, 'SUT', 0, 0),
('02', '肉及食用杂碎', NULL, 1, 'SUT', 0, 0),
('03', '鱼及其他水生无脊椎动物', NULL, 1, 'SUT', 0, 0),
('04', '乳；蛋；蜂蜜；其他食用动物产品', NULL, 1, 'SUT', 0, 0),
('05', '其他动物产品', NULL, 1, 'SUT', 0, 0),
('06', '活植物；茎、根；插花、簇叶', NULL, 1, 'SUT', 0, 0),
('07', '食用蔬菜、根及块茎', NULL, 1, 'SUT', 0, 0),
('08', '食用水果及坚果；甜瓜等水果的果皮', NULL, 1, 'SUT', 0, 0),
('09', '咖啡、茶、马黛茶及调味香料', NULL, 1, 'SUT', 0, 0),
('10', '谷物', NULL, 1, 'SUT', 0, 0),
('11', '制粉工业产品；麦芽；淀粉等；面筋', NULL, 1, 'SUT', 0, 0),
('12', '油籽；子仁；工业或药用植物；饲料', NULL, 1, 'SUT', 0, 0),
('13', '虫胶；树胶、树脂及其他植物液、汁', NULL, 1, 'SUT', 0, 0),
('14', '编结用植物材料；其他植物产品', NULL, 1, 'SUT', 0, 0),
('15', '动、植物油、脂、蜡；精制食用油脂', NULL, 1, 'SUT', 0, 0),
('16', '肉、鱼及其他水生无脊椎动物的制品', NULL, 1, 'SUT', 0, 0),
('17', '糖及糖食', NULL, 1, 'SUT', 0, 0),
('18', '可可及可可制品', NULL, 1, 'SUT', 0, 0),
('19', '谷物粉、淀粉等或乳的制品；糕饼', NULL, 1, 'SUT', 0, 0),
('20', '蔬菜、水果等或植物其他部分的制品', NULL, 1, 'SUT', 0, 0),
('21', '杂项食品', NULL, 1, 'SUT', 0, 0),
('22', '饮料、酒及醋', NULL, 1, 'SUT', 0, 0),
('23', '食品工业的残渣及废料；配制的饲料', NULL, 1, 'SUT', 0, 0),
('24', '烟草、烟草及烟草代用品的制品', NULL, 1, 'SUT', 0, 0),
('25', '盐；硫磺；土及石料；石灰及水泥等', NULL, 1, 'SUT', 0, 0),
('26', '矿砂、矿渣及矿灰', NULL, 1, 'SUT', 0, 0),
('27', '矿物燃料、矿物油及其产品；沥青等', NULL, 1, 'SUT', 0, 0),
('28', '无机化学品；贵金属等的化合物', NULL, 1, 'SUT', 0, 0),
('29', '有机化学品', NULL, 1, 'SUT', 0, 0),
('30', '药品', NULL, 1, 'SUT', 0, 0),
('31', '肥料', NULL, 1, 'SUT', 0, 0),
('32', '鞣料；著色料；涂料；油灰；墨水等', NULL, 1, 'SUT', 0, 0),
('33', '精油及香膏；芳香料制品及化妆盥洗品', NULL, 1, 'SUT', 0, 0),
('34', '洗涤剂、润滑剂、人造蜡、塑型膏等', NULL, 1, 'SUT', 0, 0),
('35', '蛋白类物质；改性淀粉；胶；霉', NULL, 1, 'SUT', 0, 0),
('36', '炸药；烟火；引火品；易燃材料制品', NULL, 1, 'SUT', 0, 0),
('37', '照相及电影用品', NULL, 1, 'SUT', 0, 0),
('38', '杂项化学产品', NULL, 1, 'SUT', 0, 0),
('39', '塑料及其制品', NULL, 1, 'SUT', 0, 0),
('40', '橡胶及其制品', NULL, 1, 'SUT', 0, 0),
('41', '生皮（毛皮除外）及皮革', NULL, 1, 'SUT', 0, 0),
('42', '皮革制品；旅行箱包；动物肠线制品', NULL, 1, 'SUT', 0, 0),
('43', '毛皮、人造毛皮及其制品', NULL, 1, 'SUT', 0, 0),
('44', '木及木制品；木炭', NULL, 1, 'SUT', 0, 0),
('45', '软木及软木制品', NULL, 1, 'SUT', 0, 0),
('46', '编结材料制品；篮筐及柳条编结品', NULL, 1, 'SUT', 0, 0),
('47', '木浆等纤维状纤维素浆；废纸及纸板', NULL, 1, 'SUT', 0, 0),
('48', '纸及纸板；纸浆、纸或纸板制品', NULL, 1, 'SUT', 0, 0),
('49', '印刷品；手稿、打字稿及设计图纸', NULL, 1, 'SUT', 0, 0),
('50', '蚕丝', NULL, 1, 'SUT', 0, 0),
('51', '羊毛等动物毛；马毛纱线及其机织物', NULL, 1, 'SUT', 0, 0),
('52', '棉花', NULL, 1, 'SUT', 0, 0),
('53', '其他植物纤维；纸纱线及其机织物', NULL, 1, 'SUT', 0, 0),
('54', '化学纤维长丝', NULL, 1, 'SUT', 0, 0),
('55', '化学纤维短纤', NULL, 1, 'SUT', 0, 0),
('56', '絮胎、毡呢及无纺织物；线绳制品等', NULL, 1, 'SUT', 0, 0),
('57', '地毯及纺织材料的其他铺地制品', NULL, 1, 'SUT', 0, 0),
('58', '特种机织物；簇绒织物；刺绣品等', NULL, 1, 'SUT', 0, 0),
('59', '特种机织物；簇绒织物；刺绣品等', NULL, 1, 'SUT', 0, 0),
('60', '针织物及钩编织物', NULL, 1, 'SUT', 0, 0),
('61', '针织或钩编的服装及衣著附件', NULL, 1, 'SUT', 0, 0),
('62', '非针织或非钩编的服装及衣著附件', NULL, 1, 'SUT', 0, 0),
('63', '其他纺织制品；成套物品；旧纺织品', NULL, 1, 'SUT', 0, 0),
('64', '鞋靴、护腿和类似品及其零件', NULL, 1, 'SUT', 0, 0),
('65', '帽类及其零件', NULL, 1, 'SUT', 0, 0),
('66', '伞、手杖、鞭子、马鞭及其零件', NULL, 1, 'SUT', 0, 0),
('67', '加工羽毛及制品；人造炕@蝗朔　破', NULL, 1, 'SUT', 0, 0),
('68', '矿物材料的制品', NULL, 1, 'SUT', 0, 0),
('69', '陶瓷产品', NULL, 1, 'SUT', 0, 0),
('70', '玻璃及其制品', NULL, 1, 'SUT', 0, 0),
('71', '珠宝、贵金属及制品；仿首饰；硬币', NULL, 1, 'SUT', 0, 0),
('72', '钢铁', NULL, 1, 'SUT', 0, 0),
('73', '钢铁制品', NULL, 1, 'SUT', 0, 0),
('74', '铜及其制品', NULL, 1, 'SUT', 0, 0),
('75', '镍及其制品', NULL, 1, 'SUT', 0, 0),
('76', '铝及其制品', NULL, 1, 'SUT', 0, 0),
('78', '铅及其制品', NULL, 1, 'SUT', 0, 0),
('79', '锌及其制品', NULL, 1, 'SUT', 0, 0),
('80', '锡及其制品', NULL, 1, 'SUT', 0, 0),
('81', '其他贱金属、金属陶瓷及其制品', NULL, 1, 'SUT', 0, 0),
('82', '贱金属器具、利口器、餐具及零件', NULL, 1, 'SUT', 0, 0),
('83', '贱金属杂项制品', NULL, 1, 'SUT', 0, 0),
('84', '核反应堆、锅炉、机械器具及零件', NULL, 1, 'SUT', 0, 0),
('85', '电机、电气、音像设备及其零附件', NULL, 1, 'SUT', 0, 0),
('86', '铁道车辆；轨道装置；信号设备', NULL, 1, 'SUT', 0, 0),
('87', '车辆及其零附件，但铁道车辆除外', NULL, 1, 'SUT', 0, 0),
('88', '航空器、航天器及其零件', NULL, 1, 'SUT', 0, 0),
('89', '船舶及浮动结构体', NULL, 1, 'SUT', 0, 0),
('90', '光学、照相、医疗等设备及零附件', NULL, 1, 'SUT', 0, 0),
('91', '钟表及其零件', NULL, 1, 'SUT', 0, 0),
('92', '乐器及其零件、附件', NULL, 1, 'SUT', 0, 0),
('93', '武器、弹药及其零件、附件', NULL, 1, 'SUT', 0, 0),
('94', '家具；寝具等；灯具；活动房', NULL, 1, 'SUT', 0, 0),
('95', '玩具、游戏或运动用品及其零附件', NULL, 1, 'SUT', 0, 0),
('96', '杂项制品', NULL, 1, 'SUT', 0, 0),
('97', '艺术品、收藏品及古物', NULL, 1, 'SUT', 0, 0),
('98', '特殊交易品及未分类商品', NULL, 1, 'SUT', 0, 0),
('99', '特殊交易品及未分类商品', NULL, 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_CHARGE_CLASS`
--

INSERT INTO `G_CHARGE_CLASS` (`CHCL_CODE`, `CHCL_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('21', '仓储保管-搬运装卸类', 1, 'SUT', 0, 0),
('22', '保税监管类', 1, 'SUT', 0, 0),
('23', '报关报检-报关类', 1, 'SUT', 0, 0),
('24', '报关报检-报检类', 1, 'SUT', 0, 0),
('25', '仓储保管-仓储类', 1, 'SUT', 0, 0),
('26', '运费-干线类', 1, 'SUT', 0, 0),
('27', '港区作业-港区类', 1, 'SUT', 0, 0),
('28', '国外段类', 1, 'SUT', 0, 0),
('29', '集疏港运输类', 1, 'SUT', 0, 0),
('30', '港区作业-集装箱堆场/场站类', 1, 'SUT', 0, 0),
('31', '集装箱管理类', 1, 'SUT', 0, 0),
('32', '运费-佣金补贴分成类', 1, 'SUT', 0, 0),
('33', '增值服务类', 1, 'SUT', 0, 0),
('34', '运费-支线类', 1, 'SUT', 0, 0),
('35', '仓储保管-装拆箱类', 1, 'SUT', 0, 0),
('36', '运费-运费附加费类', 1, 'SUT', 0, 0),
('37', '订舱单证类', 1, 'SUT', 0, 0),
('38', '杂费类', 1, 'SUT', 0, 0),
('39', '定额包干费类', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_CONTAINER_CLASS`
--

INSERT INTO `G_CONTAINER_CLASS` (`COCL_CODE`, `COCL_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('GP', '干货箱', 1, 'SUT', 0, 0),
('HC', '干货高箱', 1, 'SUT', 0, 0),
('HT', '挂衣箱', 1, 'SUT', 0, 0),
('OT', '开顶箱', 1, 'SUT', 0, 0),
('RF', '冷冻箱', 1, 'SUT', 0, 0),
('RH', '冷高箱', 1, 'SUT', 0, 0),
('TK', '油罐箱', 1, 'SUT', 0, 0),
('FR', '框架箱', 1, 'SUT', 0, 0),
('OS', '侧壁全开', 1, 'SUT', 0, 0),
('HH', '半高箱', 1, 'SUT', 0, 0),
('VE', '通风箱', 1, 'SUT', 0, 0),
('BK', '散装货箱', 1, 'SUT', 0, 0),
('PF', '平板箱', 1, 'SUT', 0, 0),
('OH', '超高箱', 1, 'SUT', 0, 0),
('OL', '超长箱', 1, 'SUT', 0, 0),
('OW', '超宽箱', 1, 'SUT', 0, 0),
('TT', '挂衣高箱', 1, 'SUT', 0, 0),
('CH', '尺', 1, 'SUT', 0, 0),
('DG', '危品箱', 1, 'SUT', 0, 0),
('DO', '半开箱', 1, 'SUT', 0, 0),
('H1', '一层挂衣箱', 1, 'SUT', 0, 0),
('H2', '二层挂衣箱', 1, 'SUT', 0, 0),
('H3', '三层挂衣箱', 1, 'SUT', 0, 0),
('H4', '四层挂衣箱', 1, 'SUT', 0, 0),
('OO', '超限箱', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_CONTAINER_TYPE`
--

INSERT INTO `G_CONTAINER_TYPE` (`COTY_CODE`, `COTY_LENGTH`, `COCL_CODE`, `COTY_TEU`, `COTY_ISO_CODE`, `COTY_UN_CODE`, `COTY_TARE_WEIGHT`, `COTY_MAX_WEIGHT`, `COTY_MAX_MEASUREMENT`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('10GP', '10', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('10RF', '10', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20BK', '20', 'BK', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20GP', '20', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20FR', '20', 'FR', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20HC', '20', 'HC', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20HH', '20', 'HH', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20HT', '20', 'HT', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20TT', '20', 'TT', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20OS', '20', 'OS', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20OT', '20', 'OT', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20PF', '20', 'PF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20RF', '20', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20RH', '20', 'RH', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20TK', '20', 'TK', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20VE', '20', 'VE', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40BK', '40', 'BK', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40GP', '40', 'GP', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40FR', '40', 'FR', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40HC', '40', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40HH', '40', 'HH', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40HT', '40', 'HT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40TT', '40', 'TT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40OS', '40', 'OS', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40OT', '40', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40PF', '40', 'PF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40RF', '40', 'RF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40RH', '40', 'RH', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40TK', '40', 'TK', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40VE', '40', 'VE', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45FR', '45', 'FR', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45HC', '45', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45HT', '45', 'HT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45OS', '45', 'OS', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45OT', '45', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45PF', '45', 'PF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45RF', '45', 'RF', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45RH', '45', 'RH', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45TK', '45', 'TK', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('12GP', '12', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('12RF', '12', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45GP', '45', 'GP', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('38GP', '38', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('48HC', '48', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('53HC', '53', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20OO', '20', 'OO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40OO', '40', 'OO', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('TEST', '12', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45G1', '40', 'OH', NULL, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('10DG', '10', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('10', '40', 'GP', NULL, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 1),
('20DG', '20', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40DG', '40', 'DG', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('12DG', '12', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45DG', '45', 'DG', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('10DO', '10', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20DO', '20', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('40DO', '40', 'DO', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('12DO', '12', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('45DO', '45', 'DO', 2, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 0),
('20', '40', 'GP', NULL, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 1),
('LDJF', '23', 'GP', 12, NULL, NULL, NULL, NULL, NULL, 1, 'SUT', 0, 1);

--
-- 导出表中的数据 `G_COUNTRY`
--

INSERT INTO `G_COUNTRY` (`COUN_CODE`, `COUN_NAME_CN`, `COUN_NAME_EN`, `COMP_CODE`, `VERSION`) VALUES
('ZW', '津巴布韦', 'ZIMBABWE', 'SUT', 5),
('IR', '伊朗', 'IRAN, ISLAMIC REPUBLIC', 'SUT', 0),
('AD', '安道尔', 'ANDORRA', 'SUT', 0),
('AE', '阿拉伯联合酋长国', 'UNITED ARAB EMIRATES', 'SUT', 0),
('AF', '阿富汗', 'AFGHANISTAN', 'SUT', 1),
('AG', '安提瓜', 'ANTIGUA AND BARBUDA', 'SUT', 0),
('AI', '安圭拉', 'ANGUILLA', 'SUT', 0),
('AL', '阿尔巴尼亚', 'ALBANIA', 'SUT', 1),
('AM', '亚美尼亚', 'ARMENIA', 'SUT', 0),
('AN', '荷属安的列斯', 'NETHERLANDS AN', 'SUT', 1),
('AO', '安哥拉', 'ANGOLA', 'SUT', 0),
('AQ', '南极洲', 'ANTARCTICA', 'SUT', 0),
('AR', '阿根廷', 'ARGENTINA', 'SUT', 0),
('AS', '美属萨摩亚', 'AMERICAN SAMOA', 'SUT', 0),
('AT', '奥地利', 'AUSTRIA', 'SUT', 0),
('AU', '澳大利亚', 'AUSTRALIA', 'SUT', 0),
('AW', '阿鲁巴岛', 'ARUBA', 'SUT', 0),
('AZ', '阿塞拜疆', 'AZERBAIJAN', 'SUT', 0),
('BA', '波-黑', 'BOSNIA-HERCEGOVINA', 'SUT', 0),
('BB', '巴巴多斯', 'BARBADOS', 'SUT', 0),
('BD', '孟加拉', 'BANGLADESH', 'SUT', 0),
('BE', '比利时', 'BELGIUM', 'SUT', 0),
('BF', '布基纳法索', 'BURKINA FASO', 'SUT', 0),
('BG', '保加利亚', 'BULGARIA', 'SUT', 0),
('BH', '巴林', 'BAHRAIN', 'SUT', 0),
('BI', '布隆迪', 'BURUNDI', 'SUT', 0),
('BJ', '贝宁', 'BENIN', 'SUT', 0),
('BM', '百慕大群岛', 'BERMUDA', 'SUT', 0),
('BN', '文莱', 'BRUNEI DARUSSALAM', 'SUT', 0),
('BO', '玻利维亚', 'BOLIVIA', 'SUT', 0),
('BR', '巴西', 'BRAZIL', 'SUT', 0),
('BS', '巴哈马联邦', 'BAHAMAS', 'SUT', 0),
('BT', '不丹', 'BHUTAN', 'SUT', 0),
('BV', '布维岛', 'BOUVET ISLAND', 'SUT', 0),
('BW', '博茨瓦纳', 'BOTSWANA', 'SUT', 0),
('BY', '白俄罗斯', 'BELARUS', 'SUT', 0),
('BZ', '伯利兹', 'BELIZE', 'SUT', 0),
('CA', '加拿大', 'CANADA', 'SUT', 0),
('CC', '可可岛', 'COCOS(KEELING)ISLAND', 'SUT', 0),
('CF', '中非共和国', 'CENTRAL AFRICAN REP.', 'SUT', 0),
('CG', '刚果（布）', 'CONGO', 'SUT', 0),
('CH', '瑞士', 'SWITZERLAND', 'SUT', 0),
('CI', '科特迪瓦', 'COTE D''IVOIRE', 'SUT', 0),
('CK', '库克群岛', 'COOK ISLANDS', 'SUT', 0),
('CL', '智利', 'CHILE', 'SUT', 0),
('CM', '喀麦隆', 'CAMEROON', 'SUT', 0),
('CN', '中国', 'CHINA', 'SUT', 0),
('CO', '哥伦比亚', 'COLOMBIA', 'SUT', 0),
('CR', '哥斯达黎加', 'COSTA RICA', 'SUT', 0),
('CU', '古巴', 'CUBA', 'SUT', 0),
('CV', '佛得角群岛', 'CAPE VERDE', 'SUT', 0),
('CX', '圣诞岛', 'CHRISTMAS ISLANDS', 'SUT', 0),
('CY', '塞浦路斯', 'CYPRUS', 'SUT', 0),
('CZ', '捷克共和国', 'CZECH REPUBLIC', 'SUT', 0),
('DE', '德国', 'GERMANY, FEDERAL REPUB', 'SUT', 0),
('DJ', '吉布提', 'DJIBOUTI', 'SUT', 0),
('DK', '丹麦', 'DENMARK', 'SUT', 0),
('DM', '英属多米尼加', 'DOMINICA', 'SUT', 0),
('DO', '多米尼加共和国', 'DOMINICAN REP.', 'SUT', 0),
('DZ', '阿尔及利亚', 'ALGERIA', 'SUT', 0),
('EC', '厄瓜多尔', 'ECUADOR', 'SUT', 0),
('EE', '爱沙尼亚', 'ESTONIA', 'SUT', 0),
('EG', '埃及', 'EGYPT', 'SUT', 0),
('EH', '西撒哈拉', 'WESTERN SAHARA', 'SUT', 0),
('ER', '厄立特里亚', 'ERITREA', 'SUT', 0),
('ES', '西班牙', 'SPAIN', 'SUT', 0),
('ET', '埃塞俄比亚', 'ETHIOPIA', 'SUT', 0),
('FI', '芬兰', 'FINLAND', 'SUT', 0),
('FJ', '斐济', 'FIJI', 'SUT', 0),
('FK', '福克兰(马尔维纳斯)群岛', 'FALK', 'SUT', 0),
('FM', '密克罗', 'FED STATES MICRONES', 'SUT', 0),
('FO', '丹麦法罗群岛', 'FAEROE ISLANDS', 'SUT', 0),
('FR', '法国', 'FRANCE', 'SUT', 0),
('GA', '加蓬', 'GABON', 'SUT', 0),
('GB', '英国', 'UNITED KINGDOM', 'SUT', 0),
('GD', '格林纳达', 'GRENADA', 'SUT', 0),
('GE', '格鲁吉亚', 'GEORGIA', 'SUT', 0),
('GF', '法属圭亚那', 'FRENCH GUIANA', 'SUT', 0),
('GH', '加纳', 'GHANA', 'SUT', 0),
('GI', '直布罗陀', 'GIBRALTAR', 'SUT', 0),
('GL', '格陵兰', 'GREENLAND', 'SUT', 0),
('GM', '冈比亚', 'GAMBIA', 'SUT', 0),
('GN', '几内亚', 'GUINEA', 'SUT', 0),
('GP', '瓜德罗普岛', 'GUADELOUPE', 'SUT', 0),
('GQ', '赤道几内亚', 'EQUATORIAL GUINE', 'SUT', 0),
('GR', '希腊', 'GREECE', 'SUT', 0),
('GT', '危地马拉', 'GUATEMALA', 'SUT', 0),
('GU', '关岛', 'GUAM', 'SUT', 0),
('GW', '几内亚比绍', 'GUINEA-BISSAU', 'SUT', 0),
('GY', '圭亚那', 'GUYANA', 'SUT', 0),
('HK', '香港', 'HONG KONG', 'SUT', 0),
('HM', '赫德岛和麦克唐纳岛', 'HEARD ISLAND AND MCDONALD ISLAND', 'SUT', 0),
('HN', '洪都拉斯', 'HONDURAS', 'SUT', 0),
('HR', '克罗地亚', 'CROATIA', 'SUT', 0),
('HT', '海地', 'HAITI', 'SUT', 0),
('HU', '匈牙利', 'HUNGARY', 'SUT', 0),
('ID', '印度尼西亚', 'INDONESIA', 'SUT', 0),
('IE', '爱尔兰', 'IRELAND', 'SUT', 0),
('IL', '以色列', 'ISRAEL', 'SUT', 0),
('IN', '印度', 'INDIA', 'SUT', 0),
('IO', '英属印度洋领地', 'BRITISH INDIAN OCEAN TERRITORY', 'SUT', 0),
('IQ', '伊拉克', 'IRAQ', 'SUT', 0),
('IS', '冰岛', 'ICELAND', 'SUT', 0),
('IT', '意大利', 'ITALY', 'SUT', 0),
('JM', '牙买加', 'JAMAICA', 'SUT', 0),
('JO', '约旦', 'JORDAN', 'SUT', 0),
('JP', '日本', 'JAPAN', 'SUT', 0),
('KE', '肯尼亚', 'KENYA', 'SUT', 0),
('KG', '吉尔吉斯斯坦', 'KYRGYZSTAN', 'SUT', 0),
('KH', '柬埔寨', 'CAMBODIA', 'SUT', 0),
('KI', '基里巴斯', 'KIRIBATI', 'SUT', 0),
('KM', '科摩罗', 'COMOROS', 'SUT', 0),
('KN', '尼维斯联邦', 'ST KITTS-NEVIS', 'SUT', 0),
('KP', '朝鲜', 'KOREA, DEM PEOPLE''S RE', 'SUT', 0),
('KR', '韩国', 'KOREA', 'SUT', 0),
('KW', '科威特', 'KUWAIT', 'SUT', 0),
('KY', '开曼群岛', 'CAYMAN ISLANDS', 'SUT', 0),
('KZ', '哈萨克斯坦', 'KAZAKHSTAN', 'SUT', 0),
('LA', '老挝', 'LAO PEOPLE''S DEMOCRATI', 'SUT', 0),
('LB', '黎巴嫩', 'LEBANON', 'SUT', 0),
('LC', '圣卢西亚', 'SAINT LUCIA', 'SUT', 0),
('LI', '列支敦士登', 'LIECHTENSTEIN', 'SUT', 0),
('LK', '斯里兰卡', 'SRI LANKA', 'SUT', 0),
('LR', '利比里亚', 'LIBERIA', 'SUT', 0),
('LS', '莱索托', 'LESOTHO', 'SUT', 0),
('LT', '立陶宛', 'LITHUANIA', 'SUT', 0),
('LU', '卢森堡', 'LUXEMBOURG', 'SUT', 0),
('LV', '拉脱维亚', 'LATVIA', 'SUT', 0),
('LY', '利比亚', 'LYBIAN ARAB JAMAHIRI', 'SUT', 0),
('MA', '摩洛哥', 'MOROCCO', 'SUT', 0),
('MC', '摩纳哥', 'MONACO', 'SUT', 0),
('MD', '摩尔多瓦', 'MOLDOVA', 'SUT', 0),
('MG', '马达加斯加', 'MADAGASCAR', 'SUT', 0),
('MH', '马绍尔群岛', 'MARSHALL ISLANDS', 'SUT', 0),
('MK', '马其顿', 'FRMR YUGOSLAV REP OF', 'SUT', 0),
('ML', '马里', 'MALI', 'SUT', 0),
('MM', '缅甸', 'MYANMAR', 'SUT', 0),
('MN', '蒙古', 'MONGOLIA', 'SUT', 0),
('MO', '澳门', 'MACAU', 'SUT', 0),
('MP', '北马里亚纳群岛', 'NORTHERN MAR', 'SUT', 0),
('MQ', '马提尼克岛', 'MARTINIQUE', 'SUT', 0),
('MR', '毛里塔尼亚', 'MAURITANIA', 'SUT', 0),
('MS', '蒙特色纳岛', 'MONTSERRAT', 'SUT', 0),
('MT', '马耳他', 'MALTA', 'SUT', 0),
('MU', '毛里求斯', 'MAURITIUS', 'SUT', 0),
('MV', '马尔代夫', 'MALDIVES', 'SUT', 0),
('MW', '马拉维', 'MALAWI', 'SUT', 0),
('MX', '墨西哥', 'MEXICO', 'SUT', 0),
('MY', '马来西亚', 'MALAYSIA', 'SUT', 0),
('MZ', '莫桑比克', 'MOZAMBIQUE', 'SUT', 0),
('NA', '纳米比亚', 'NAMIBIA', 'SUT', 0),
('NC', '新喀里多尼亚', 'NEW CALEDONIA', 'SUT', 0),
('NE', '尼日尔', 'NIGER', 'SUT', 0),
('NF', '诺福克岛(英国)', 'NORFOLK ISLAND', 'SUT', 0),
('NG', '尼日利亚', 'NIGERIA', 'SUT', 0),
('NI', '尼加拉瓜', 'NICARAGUA', 'SUT', 0),
('NL', '荷兰', 'NETHERLANDS', 'SUT', 0),
('NO', '挪威', 'NORWAY', 'SUT', 0),
('NP', '尼泊尔', 'NEPAL', 'SUT', 0),
('NR', '瑙鲁', 'NAURU', 'SUT', 0),
('NU', '纽埃', 'NIUE', 'SUT', 0),
('NZ', '新西兰', 'NEW ZEALAND', 'SUT', 0),
('OM', '阿曼', 'OMAN', 'SUT', 0),
('PA', '巴拿马', 'PANAMA', 'SUT', 0),
('PE', '秘鲁', 'PERU', 'SUT', 0),
('PF', '法属波利尼西亚', 'FRENCH POLYN', 'SUT', 0),
('PG', '巴布亚新几内亚', 'PAPUA NEW GU', 'SUT', 0),
('PH', '菲律宾', 'PHILIPPINES', 'SUT', 0),
('PK', '巴基斯坦', 'PAKISTAN', 'SUT', 0),
('PL', '波兰', 'POLAND', 'SUT', 0),
('PM', '圣皮埃尔和密克隆', 'SAINT PIERRE AND MIQUELON', 'SUT', 0),
('PN', '皮特凯恩', 'PITCAIRN', 'SUT', 0),
('PR', '波多黎各', 'PUERTO RICO', 'SUT', 0),
('PT', '葡萄牙', 'PORTUGAL', 'SUT', 0),
('PW', '帛琉(菲律宾东南-群岛)', 'PALAU', 'SUT', 0),
('PY', '巴拉圭', 'PARAGUAY', 'SUT', 0),
('QA', '卡塔尔', 'QATAR', 'SUT', 0),
('RE', '留尼汪', 'REUNION', 'SUT', 0),
('RO', '罗马尼亚', 'ROMANIA', 'SUT', 0),
('RU', '俄罗斯', 'RUSSIAN FEDERATION', 'SUT', 0),
('RW', '卢旺达', 'RWANDA', 'SUT', 0),
('SA', '沙特阿拉伯', 'SAUDI ARABIA', 'SUT', 0),
('SB', '所罗门群岛', 'SOLOMON ISLANDS', 'SUT', 0),
('SC', '塞舌尔', 'SEYCHELLES', 'SUT', 0),
('SD', '苏丹', 'SUDAN', 'SUT', 0),
('SE', '瑞典', 'SWEDEN', 'SUT', 0),
('SG', '新加坡', 'SINGAPORE', 'SUT', 0),
('SH', '圣赫勒拿岛(英国)', 'ST HELENA', 'SUT', 0),
('SI', '斯洛文尼亚', 'SLOVENIA', 'SUT', 0),
('SJ', '斯瓦尔巴岛和扬马延岛', 'SVALARD AND JAN MAYEN', 'SUT', 0),
('SK', '斯洛伐克', 'SLOVAKIA', 'SUT', 0),
('SL', '塞拉利昂', 'SIERRA LEONE', 'SUT', 0),
('SM', '圣马力诺', 'SAN MARINO', 'SUT', 0),
('SN', '塞内加尔', 'SENEGAL', 'SUT', 0),
('SO', '索马里', 'SOMALIA', 'SUT', 0),
('SR', '苏里南', 'SURINAME', 'SUT', 0),
('ST', '圣多美和普林西比', 'SAO TOME AND PRINCIPE', 'SUT', 0),
('SV', '萨尔瓦多', 'EL SALVADOR', 'SUT', 0),
('SY', '叙利亚', 'SYRIAN ARAB REPUBLIC', 'SUT', 0),
('SZ', '斯威士兰', 'SWAZILAND', 'SUT', 0),
('TC', '土克斯及开科斯群岛', 'TURKS & CAICOS ISLAN', 'SUT', 0),
('TD', '乍得', 'CHAD', 'SUT', 0),
('TF', '法属南部领地', 'FRENCH SOUTHERN TERRITORIES', 'SUT', 0),
('TG', '多哥', 'TOGO', 'SUT', 0),
('TH', '泰国', 'THAILAND', 'SUT', 0),
('TJ', '塔吉克斯坦', 'TAJIKISTAN', 'SUT', 0),
('TM', '土库曼司坦', 'TURKMENISTAN', 'SUT', 0),
('TN', '突尼斯', 'TUNISIA', 'SUT', 0),
('TO', '汤加', 'TONGA', 'SUT', 0),
('TR', '土耳其', 'TURKEY', 'SUT', 0),
('TT', '特立尼达和多巴哥', 'TRINIDAD AND TOBAGO', 'SUT', 0),
('TV', '图瓦卢', 'TUVALU', 'SUT', 0),
('TW', '台湾', 'TAIWAN, PROVINCE OF CH', 'SUT', 0),
('TZ', '坦桑尼亚', 'TANZANIA, UNITED R', 'SUT', 0),
('UA', '乌克兰', 'UKRAINE', 'SUT', 0),
('UG', '乌干达', 'UGANDA', 'SUT', 0),
('UM', '美属外岛', 'US MINOR OUTLYING ISLA', 'SUT', 0),
('US', '美国', 'UNITED STATES', 'SUT', 0),
('UY', '乌拉圭', 'URUGUAY', 'SUT', 0),
('UZ', '乌兹别克斯坦', 'UZBEKISTAN', 'SUT', 0),
('VA', '梵蒂冈', 'VATICAN', 'SUT', 0),
('VC', '圣文森特', 'ST VINCENT-GRENADI', 'SUT', 0),
('VE', '委内瑞拉', 'VENEZUELA', 'SUT', 0),
('VG', '英属维尔京岛', 'BR. VIRGIN IS', 'SUT', 0),
('VI', '美属维尔京岛', 'VIRGIN ISLANDS, U.S.', 'SUT', 0),
('VN', '越南', 'VIET NAM', 'SUT', 0),
('VU', '瓦努阿图', 'VANUATU', 'SUT', 0),
('WF', '瓦利斯', 'WALLIS AND FUTUNA IS', 'SUT', 0),
('WS', '萨摩亚', 'SAMOA', 'SUT', 0),
('YE', '也门', 'YEMEN', 'SUT', 0),
('YU', '南斯拉夫', 'YUGOSLAVIA (Fed. R）', 'SUT', 0),
('ZA', '南非', 'SOUTH AFRICA', 'SUT', 0),
('ZM', '赞比亚', 'ZAMBIA', 'SUT', 0),
('ZR', '扎伊尔', 'ZAIRE', 'SUT', 0),
('CD', '民主刚果', 'Congo,DR', 'SUT', 0),
('CS', '塞尔维亚和黑山', 'SERBIA AND MONTENEGRO', 'SUT', 0),
('GS', '南乔治亚地区及南桑威奇群岛', 'SOUTH GEORGIA AND THE SOUTH SAND', 'SUT', 0),
('TK', '托克老群岛', 'TOKELAU', 'SUT', 0),
('TL', '东帝汶岛', 'EAST TIMOR', 'SUT', 0),
('XZ', '国际水域设施', 'INSTALLATIONS IN INTERNATIONAL W', 'SUT', 0),
('YT', '马约特', 'MAYOTTE', 'SUT', 0),
('01', '比利时', 'BILISHI', 'SUT', 0);

--
-- 导出表中的数据 `G_CURRENCY`
--

INSERT INTO `G_CURRENCY` (`CURR_CODE`, `CURR_NAME`, `CURR_SYMBOL`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('USD', '美元', '$', 1, 'SUT', 0, 0),
('CNY', '人民币', '￥', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_DOCUMENT_TYPE`
--

INSERT INTO `G_DOCUMENT_TYPE` (`DOTY_CODE`, `DOTY_NAME`, `DOTY_CLASS`, `DOTY_RETURN_FLAG`, `DOTY_BACK_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('FP', '发票', '10', 0, 0, 1, 'SUT', 1, 0),
('PZZS', '品质证书', '11', 0, 0, 1, 'SUT', 1, 0),
('ZLZS', '重量证书', '11', 0, 0, 1, 'SUT', 1, 0),
('SLZS', '数量证书', '11', 0, 0, 1, 'SUT', 1, 0),
('SYWSZS', '兽医卫生证书', '11', 0, 0, 1, 'SUT', 1, 0),
('JKZS', '健康证书', '11', 0, 0, 1, 'SUT', 1, 0),
('WSZS', '卫生证书', '11', 0, 0, 1, 'SUT', 1, 0),
('DWWSZS', '动物卫生证书', '11', 0, 0, 1, 'SUT', 1, 0),
('ZWJYZS', '植物检疫证书', '11', 0, 0, 1, 'SUT', 1, 0),
('XZXDZS', '熏蒸消毒证书', '11', 0, 0, 1, 'SUT', 1, 0),
('CRHWHZPD', '出入货物换证凭单', '11', 0, 0, 1, 'SUT', 1, 0),
('HT', '合同', '10', 0, 0, 1, 'SUT', 1, 0),
('XYZ', '信用证', '10', 0, 0, 1, 'SUT', 1, 0),
('HZPD', '换证凭单', '10', 0, 0, 1, 'SUT', 1, 0),
('ZXD', '装箱单', '10', 0, 0, 1, 'SUT', 1, 0),
('CJD', '厂检单', '10', 0, 0, 1, 'SUT', 1, 0),
('BZXNJGD', '包装性能结果单', '10', 0, 0, 1, 'SUT', 1, 0),
('XKSPWJ', '许可/审批文件', '10', 0, 0, 1, 'SUT', 1, 0),
('XD', '箱单', '12', 0, 0, 1, 'SUT', 1, 0),
('FP', '发票', '12', 0, 0, 1, 'SUT', 1, 0),
('BGWT', '报关委托', '12', 0, 0, 1, 'SUT', 1, 0),
('BJWT', '报检委托(需商检货)', '12', 0, 0, 1, 'SUT', 1, 0),
('FMZBZZM', '非木质包装证明(非木质包装货)', '12', 0, 0, 1, 'SUT', 1, 0),
('HXD', '核销单', '12', 0, 0, 1, 'SUT', 1, 0),
('YPZM', '药品证明(出口货为药品)', '12', 0, 0, 1, 'SUT', 1, 0),
('CZSJ', '场站收据', '12', 0, 0, 1, 'SUT', 1, 0),
('JKBGD', '进口报关单', '30', 0, 0, 1, 'SUT', 1, 0),
('CKBGD', '出口报关单', '30', 0, 0, 1, 'SUT', 1, 0),
('RJHWJYJYZM', '入境货物检验检疫证明', '30', 0, 0, 1, 'SUT', 1, 0),
('JKSD', '进口税单', '30', 0, 0, 1, 'SUT', 1, 0),
('CRJJYJYGGSQD', '出入境检验检疫更改申请单', '30', 0, 0, 1, 'SUT', 1, 0),
('TD', '提单', '30', 0, 0, 1, 'SUT', 1, 0);

--
-- 导出表中的数据 `G_EXCHANGE_SETTLEMENT`
--

INSERT INTO `G_EXCHANGE_SETTLEMENT` (`EXSE_CODE`, `EXSE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '信汇', 1, 'SUT', 0, 0),
('2', '电汇', 1, 'SUT', 0, 0),
('3', '票    汇', 1, 'SUT', 0, 0),
('4', '付款交单', 1, 'SUT', 0, 0),
('5', '承兑交单', 1, 'SUT', 0, 0),
('6', '信 用 证', 1, 'SUT', 0, 0),
('7', '先出后结', 1, 'SUT', 0, 0),
('8', '先结后出', 1, 'SUT', 0, 0),
('9', '其    他', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_ISSUE_TYPE`
--

INSERT INTO `G_ISSUE_TYPE` (`ISTY_CODE`, `ISTY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '正本', 1, 'SUT', 0, 0),
('2', '电放', 1, 'SUT', 0, 0),
('3', 'SEAWAYBILL', 1, 'SUT', 0, 0),
('4', '其它', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_LEVY_TYPE`
--

INSERT INTO `G_LEVY_TYPE` (`LETY_CODE`, `LETY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('101', '一般征税', 1, 'SUT', 0, 0),
('502', '来料加工', 1, 'SUT', 0, 0),
('503', '进料加工', 1, 'SUT', 0, 0),
('601', '中外合资', 1, 'SUT', 0, 0),
('602', '中外合作', 1, 'SUT', 0, 0),
('603', '外资企业', 1, 'SUT', 0, 0),
('789', '鼓励项目', 1, 'SUT', 0, 0),
('799', '自有资金', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_PACKAGE`
--

INSERT INTO `G_PACKAGE` (`PACK_CODE`, `PACK_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('BALES', 'BALES', 1, 'SUT', 0, 0),
('CRATE', 'CRATES', 1, 'SUT', 0, 0),
('W/CS', 'WOODEN CASES', 1, 'SUT', 0, 0),
('S/P', 'SETS/PCS', 1, 'SUT', 0, 0),
('P/CS', 'PLYWOOD CASES', 1, 'SUT', 0, 0),
('GUNNY', 'GUNNY BAG', 1, 'SUT', 0, 0),
('PLT', 'PALLET', 1, 'SUT', 0, 0),
('SKIDS', 'SKIDS', 1, 'SUT', 0, 0),
('PCS', 'PIECES', 1, 'SUT', 0, 0),
('SETS', 'SETS', 1, 'SUT', 0, 0),
('C/DRUM', 'CARDBOARD DRUMS', 1, 'SUT', 0, 0),
('DZS', 'DOZENS', 1, 'SUT', 0, 0),
('RL', 'REEL', 1, 'SUT', 0, 0),
('ENDCAPS', 'CLEAR FLOAT GLASS', 1, 'SUT', 0, 0),
('PLTS', 'PALLETS', 1, 'SUT', 0, 0),
('CASES', 'CASES', 1, 'SUT', 0, 0),
('DRUMS', 'DRUMS', 1, 'SUT', 0, 0),
('PPWOVENB', 'PP WOVEN BAGS', 1, 'SUT', 0, 0),
('IRON DRU', 'IRON DRUMS', 1, 'SUT', 0, 0),
('CLOTH BA', 'CLOTH BALE', 1, 'SUT', 0, 0),
('PLASTIC', 'PLASTIC DRUMS', 1, 'SUT', 0, 0),
('TRAYS', 'TRAYS', 1, 'SUT', 0, 0),
('RACKS', 'RACKS', 1, 'SUT', 0, 0),
('CTNS', 'CARTONS', 1, 'SUT', 0, 0),
('FDRUMS', 'FIBRE DRUMS', 1, 'SUT', 0, 0),
('PALLETS', 'PALLETS', 1, 'SUT', 0, 0),
('ROLLS', 'ROLLS', 1, 'SUT', 0, 0),
('IRON C', 'IRON CRATES', 1, 'SUT', 0, 0),
('BAGS', 'BAGS', 1, 'SUT', 0, 0),
('CNTRS', 'CONTAINERS', 1, 'SUT', 0, 0),
('GUN', 'GUNNY SACKS', 1, 'SUT', 0, 0),
('PRESS PA', 'PRESS PACKED BALES', 1, 'SUT', 0, 0),
('UNPACKED', 'UNPACKED', 1, 'SUT', 0, 0),
('PACKAGES', 'PACKAGES', 1, 'SUT', 0, 0),
('W/BS', 'WOODEN BOXES', 1, 'SUT', 0, 0),
('W/CRS', 'WOODEN CRATES', 1, 'SUT', 0, 0),
('LT', 'LOT', 1, 'SUT', 0, 0),
('BUNDLES', 'BUNDLES', 1, 'SUT', 0, 1),
('PRS', 'PRS', 1, 'SUT', 0, 0),
('W/DRUMS', 'WOODEN DRUMS', 1, 'SUT', 0, 0),
('TINS', 'TINS', 1, 'SUT', 0, 0),
('BIG BAGS', 'BIG BAGS', 1, 'SUT', 0, 0),
('COILS', 'COILS', 1, 'SUT', 0, 0),
('PIECES', 'PIECES', 1, 'SUT', 0, 0),
('PAIRS', 'PAIRS', 1, 'SUT', 0, 0),
('TANK', 'TANK', 1, 'SUT', 0, 0),
('BLDS', 'BLDS', 1, 'SUT', 0, 0),
('UNITS', 'UNITS', 1, 'SUT', 0, 0),
('CANS', 'CANS', 1, 'SUT', 0, 0),
('BOXES', 'BOXES', 1, 'SUT', 0, 0),
('BDLS', 'BUNDLES', 1, 'SUT', 0, 0),
('LOT', 'LOT', 1, 'SUT', 0, 0),
('SACKS', 'SACKS', 1, 'SUT', 0, 0),
('HANGERS', 'HANGERS', 1, 'SUT', 0, 0),
('FIBER DR', 'FIBER DRUMS', 1, 'SUT', 0, 0),
('DOUBLE', 'DOUBLE PP BAGS', 1, 'SUT', 0, 0),
('PLAS', 'PLASTICS DRUMS', 1, 'SUT', 0, 0),
('COM', 'COMPOUND BAGS', 1, 'SUT', 0, 0),
('JUMBOBAG', 'JUMBO BAGS', 1, 'SUT', 0, 0),
('PLASTICB', 'PLASTIC BAGS', 1, 'SUT', 0, 0),
('KINT BAG', 'KINTTING BAG', 1, 'SUT', 0, 0),
('CYL', 'CYL', 1, 'SUT', 0, 0),
('CYLINDER', 'CYLINDERS', 1, 'SUT', 0, 0),
('IRONPALE', 'IRON PALLETS', 1, 'SUT', 0, 0),
('SB.CASES', 'SYNTHETIC BOARD CASES', 1, 'SUT', 0, 0),
('W/P', 'WOODEN PALLETS', 1, 'SUT', 0, 0),
('T/BAGS', 'TOTE BAGS', 1, 'SUT', 0, 0),
('MTS', 'MTS', 1, 'SUT', 0, 0),
('REELS', 'REELS', 1, 'SUT', 0, 0),
('BTL', 'BOTTOLS', 1, 'SUT', 0, 0),
('SUPER', 'SUPER SACKS', 1, 'SUT', 0, 0),
('WDCS', 'WDCS', 1, 'SUT', 0, 0),
('PAPER', 'PAPER BAGS', 1, 'SUT', 0, 0),
('WOVEN BS', 'WOVEN BAGS', 1, 'SUT', 0, 0),
('11111111', 'CARTONS', 1, 'SUT', 0, 1),
('W/BAGS', 'WEAVING BAGS', 1, 'SUT', 0, 0),
('TUBES', 'TUBES', 1, 'SUT', 0, 0),
('BOTTOLS', 'BTLS', 1, 'SUT', 0, 0),
('CARTONS', 'CARTONS', 1, 'SUT', 0, 1),
('DUNDLES', 'DUNDLES', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_PAYMENT_TERM`
--

INSERT INTO `G_PAYMENT_TERM` (`PATE_CODE`, `PATE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('P', 'FREIGHT PREPAID', 1, 'SUT', 0, 0),
('C', 'FREIGHT COLLECT', 1, 'SUT', 0, 0),
('F', 'FREE', 1, 'SUT', 0, 0),
('E', '第三地付款', 1, 'SUT', 0, 0),
('L', '第一程预付/第二程到付', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_PLACE`
--

INSERT INTO `G_PLACE` (`PLAC_CODE`, `PLAC_NAME`, `PLAC_NAME_EN`, `PLAC_TYPE`, `COUN_CODE`, `PLAC_PROVINCE_ID`, `PLAC_PROVINCE_NAME`, `PLAC_CITY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('YSG', '洋山港', 'YANSHAN', 3, 'CN', NULL, NULL, NULL, 1, 'SUT', 0, 0),
('JGL', '军公路码头', 'JUNGONGLU', 3, 'CN', NULL, NULL, NULL, 1, 'SUT', 1, 1),
('JGL', '军公路港务', 'JUNGONGLU', 3, 'CN', NULL, NULL, NULL, 1, 'SUT', 1, 0),
('ZHB', '张华浜港务', 'ZHANGHUABANG', 3, 'CN', NULL, NULL, NULL, 1, 'SUT', 1, 0),
('BSG', '宝山港务', 'BAOSHAN', 3, 'CN', NULL, NULL, NULL, 1, 'SUT', 1, 0),
('LJRQ', '罗泾二期', 'LUOJINGERQI', 3, 'CN', NULL, NULL, NULL, 1, 'SUT', 1, 0),
('SGWC', '上钢五厂', 'SHANGGANGWUCHANG', 3, 'CN', NULL, NULL, NULL, 1, 'SUT', 1, 0),
('TCWX', '拖出维修', 'TUOCHUWEIXIU', 3, 'CN', NULL, NULL, NULL, 1, 'SUT', 2, 0);

--
-- 导出表中的数据 `G_SETTLEMENT_WAY`
--

INSERT INTO `G_SETTLEMENT_WAY` (`SEWA_CODE`, `SEWA_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('DH', '电汇', 1, 'SUT', 0, 0),
('ZP', '支票', 1, 'SUT', 0, 0),
('WHHK', '外汇划款', 1, 'SUT', 0, 0),
('DZLH', '电子联行付款', 1, 'SUT', 0, 0),
('DJPZ', '贷记凭证', 1, 'SUT', 0, 0),
('XJ', '现金', 1, 'SUT', 0, 0),
('SD', '水单', 1, 'SUT', 0, 0),
('ZZ', '转帐', 1, 'SUT', 0, 0),
('TS', '托收', 1, 'SUT', 0, 0),
('NK', '银行内扣', 1, 'SUT', 0, 0),
('BP', '本票', 1, 'SUT', 0, 0),
('HP', '汇票', 1, 'SUT', 0, 0),
('CE', '定舱差额', 1, 'SUT', 0, 0),
('RLC', '入立成', 1, 'SUT', 0, 0),
('QL', '帐务清理', 1, 'SUT', 0, 0);


--
-- 导出表中的数据 `G_SHIPPING_LINE`
--

INSERT INTO `G_SHIPPING_LINE` (`SHLI_CODE`, `SHLI_NAME`, `SHLI_NAME_EN`, `SHLI_BULK_FLAG`, `SHLI_CONT_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('CNKOR', '中国-南韩', 'CN-KOREA', 1, 1, 1, 'SUT', 0, 0),
('CNRUS', '中国一俄罗斯远东', 'CN-RUSSIA', 1, 1, 1, 'SUT', 0, 0),
('CNSEA', '中国一东南亚', 'CN-SOUTHEAST ASIA', 1, 1, 1, 'SUT', 0, 0),
('CNRSP', '中国-红海', 'CN-RED SEA PORT', 1, 1, 1, 'SUT', 0, 0),
('CNPSG', '中国一波斯湾', 'CN-PERSIAN GULF', 1, 1, 1, 'SUT', 0, 0),
('CNAFR', '中国一非洲', 'CN-AFRICA', 1, 1, 1, 'SUT', 0, 0),
('CNMED', '中国一地中海', 'CN-MEDITERRANEAN', 1, 1, 1, 'SUT', 0, 0),
('CNEUR', '中国一欧洲', 'CN-EUROPE', 1, 1, 1, 'SUT', 0, 0),
('CNAUS', '中国一澳新', 'CN-AUSTRALIA,NEW ZEALAND', 1, 1, 1, 'SUT', 0, 0),
('CNUSA', '中国一美国', 'CN-USA', 1, 1, 1, 'SUT', 0, 0),
('CNCAN', '中国一加拿大', 'CN-CANADA', 1, 1, 1, 'SUT', 0, 0),
('CNSAM', '中国一南美洲', 'CN-SOUTH AMERCIA', 1, 1, 1, 'SUT', 0, 0),
('CNCCM', '中国一中美洲,加勒比海', 'CN-CENTRAL AMERICA,CARIBBEAN,MEX', 1, 1, 1, 'SUT', 0, 0),
('CNJAP', '中国-日本', 'CN-JAPAN', 1, 1, 1, 'SUT', 0, 0),
('CNIND', '中国-印巴', 'CN-INDIA', 1, 1, 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_TRADE_TERM`
--

INSERT INTO `G_TRADE_TERM` (`TRTE_CODE`, `TRTE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', 'CIF', 1, 'SUT', 0, 0),
('2', 'C&F', 1, 'SUT', 0, 0),
('3', 'FOB', 1, 'SUT', 0, 0),
('4', 'C&I ', 1, 'SUT', 0, 0),
('5', '市场价', 1, 'SUT', 0, 0),
('6', '垫仓', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_TRADE_TYPE`
--

INSERT INTO `G_TRADE_TYPE` (`TRTY_CODE`, `TRTY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('0110', '一般贸易', 1, 'SUT', 0, 0),
('0130', '易货贸易', 1, 'SUT', 0, 0),
('0139', '旅游购物商品', 1, 'SUT', 0, 0),
('0200', '料件放弃', 1, 'SUT', 0, 0),
('0214', '来料加工', 1, 'SUT', 0, 0),
('0245', '来料料件内销', 1, 'SUT', 0, 0),
('0255', '来料深加工', 1, 'SUT', 0, 0),
('0258', '来料余料结转', 1, 'SUT', 0, 0),
('0265', '来料料件复出', 1, 'SUT', 0, 0),
('0300', '来料料件退换', 1, 'SUT', 0, 0),
('0314', '加工专用油', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_TRANS_TERM`
--

INSERT INTO `G_TRANS_TERM` (`TRAN_CODE`, `TRAN_NAME`, `TRAN_BULK_FLAG`, `TRAN_CONT_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('CY-CY', '场到场', 1, 1, 1, 'SUT', 0, 0),
('CY-CFS', '场到站', 1, 1, 1, 'SUT', 0, 0),
('CY-Door', '场到门', 1, 1, 1, 'SUT', 0, 0),
('Door-Door', '门到门', 1, 1, 1, 'SUT', 0, 0),
('Door-CY', '门到场', 1, 1, 1, 'SUT', 0, 0),
('Door-CFS', '门到站', 1, 1, 1, 'SUT', 0, 0),
('CFS-Door', '站到门', 1, 1, 1, 'SUT', 0, 0),
('CFS-CY', '站到场', 1, 1, 1, 'SUT', 0, 0),
('CFS-CFS', '站到站', 1, 1, 1, 'SUT', 0, 0),
('FILO', '舱底', 1, 1, 1, 'SUT', 0, 0),
('FIO', 'FIO', 1, 1, 1, 'SUT', 0, 0),
('FLT', '班轮', 1, 1, 1, 'SUT', 0, 0),
('HOOK TO HOOK', 'HTH', 1, NULL, 1, 'SUT', 0, 0),
('FREE IN UNDER HOOK', 'FIUH', 1, NULL, 1, 'SUT', 1, 0),
('HOOK IN LINE OUT', 'HILO', 1, NULL, 1, 'SUT', 0, 0),
('FILO&FIO', 'FILO&FIO', 1, NULL, 1, 'SUT', 0, 0),
('LINER IN LINER OUT', 'LINER IN LINER OUT', 1, NULL, 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_TRANS_TYPE`
--

INSERT INTO `G_TRANS_TYPE` (`TRAT_CODE`, `TRAT_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '监管仓库', 1, 'SUT', 0, 0),
('2', '江海运输', 1, 'SUT', 0, 0),
('3', '铁路运输', 1, 'SUT', 0, 0),
('0', '非保税区', 1, 'SUT', 0, 0),
('4', '汽车运输', 1, 'SUT', 0, 0),
('5', '航空运输', 1, 'SUT', 0, 0),
('6', '邮件运输', 1, 'SUT', 0, 0),
('7', '保税区', 1, 'SUT', 0, 0),
('8', '保税仓库', 1, 'SUT', 0, 0),
('9', '其它运输', 1, 'SUT', 0, 0),
('A', '全部运输', 1, 'SUT', 0, 0),
('W', '物流中心', 1, 'SUT', 0, 0),
('X', '物流园区', 1, 'SUT', 0, 0),
('Y', '保税港区', 1, 'SUT', 0, 0),
('Z', '出口加工', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_UNIT`
--

INSERT INTO `G_UNIT` (`UNIT_CODE`, `UNIT_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('FT', '计费吨', 1, 'SUT', 0, 0),
('40E', '40空箱', 1, 'SUT', 0, 1),
('40F', '40重箱', 1, 'SUT', 0, 1),
('HR', '小时', 1, 'SUT', 0, 1),
('T', '吨', 0, 'SUT', 0, 1),
('KGS', '千克', 1, 'SUT', 0, 0),
('CBM', '立方米', 1, 'SUT', 0, 0),
('LT', '公升', 1, 'SUT', 0, 1),
('KM', '公里', 0, 'SUT', 0, 1),
('20E', '20空箱', 1, 'SUT', 0, 1),
('20F', '20重箱', 1, 'SUT', 0, 1),
('EACH', '票', 1, 'SUT', 0, 0),
('CONT', '箱', 1, 'SUT', 0, 0),
('DAY', '天', 1, 'SUT', 0, 1),
('P', '人', 1, 'SUT', 0, 1),
('C', '摄氏', 1, 'SUT', 0, 1),
('F', '华氏', 1, 'SUT', 0, 1),
('BBBB', 'AAA', 1, 'SUT', 0, 1),
('HP', '马力', 1, 'SUT', 0, 1),
('KW', '千瓦', 1, 'SUT', 0, 1),
('TIME', '次', 1, 'SUT', 0, 1),
('MIN', '分钟', 1, 'SUT', 0, 1),
('40CTN', '大箱型', 1, 'SUT', 0, 1),
('M', '米', 1, 'SUT', 0, 1),
('20CTN', '小箱型', 1, 'SUT', 0, 1),
('TEU', 'TEU', 1, 'SUT', 0, 1),
('大箱', '大箱', 1, 'SUT', 0, 1),
('UNIT     ', '个   ', 1, 'SUT', 0, 1),
('小箱', '小箱', 1, 'SUT', 0, 1),
('kg', '公斤', 1, 'SUT', 0, 1),
('kgs', '公斤', 1, 'SUT', 0, 1),
('CM', '厘米', 1, 'SUT', 0, 1),
('TON', '吨', 1, 'SUT', 0, 0),
('20GP', '标准柜', 1, 'SUT', 0, 1),
('40GP', '大柜', 1, 'SUT', 0, 1),
('BUNDLES', '捆', 1, 'SUT', 0, 0),
('PIECES', '支', 1, 'SUT', 0, 0),
('W/CASE', '木箱', 1, 'SUT', 0, 0),
('MTS', 'MTS', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `G_USAGE`
--

INSERT INTO `G_USAGE` (`USAG_CODE`, `USAG_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('WMNX', '外贸自营内销', 1, 'SUT', 0, 0),
('TQNX', '特区内销', 1, 'SUT', 0, 0),
('QTNX', '其他内销', 1, 'SUT', 0, 0),
('QYZY', '企业自用', 1, 'SUT', 0, 0),
('JGFX', '加工返销', 1, 'SUT', 0, 0),
('JY', '借用', 1, 'SUT', 0, 0),
('BZJ', '收保证金', 1, 'SUT', 0, 0),
('FREE', '免费提供', 1, 'SUT', 0, 0),
('ZJTG', '作价提供', 1, 'SUT', 0, 0),
('HYGG', '货样广告品', 1, 'SUT', 0, 0),
('QT', '其他', 1, 'SUT', 0, 0),
('YCDJ', '以产顶进', 1, 'SUT', 0, 0);

--
-- 导出表中的数据 `P_SERIAL_RULE`
--

INSERT INTO `P_SERIAL_RULE` (`seru_code`, `seru_name`, `comp_code`, `seru_rule`, `seru_sn_length`, `seru_uniq_suffix`, `seru_loop_period`) VALUES
('consign_no', '委托编号', 'SUT', '<COMP><CONS_TYPE><YY><SN>', 6, '<COMP><CONS_TYPE><YY>', 3),
('invoice_no', '发票编号', 'SUT', '<COMP><YY>I<SN>', 6, '<YY>', 3),
('pr_no', '托收单/付款申请编号', 'SUT', '<RP><CUR><YY>P<SN>', 6, '<YY>', 3),
('voucher_no', '收款单', 'SUT', '<COMP><YY>V<SN>', 6, '<YY>', 3),
('bill_no', '账单', 'SUT', '<COMP><YY>B<SN>', 6, '<YY>', 3),
('tran_no', '陆运联系单号', 'SUT', '<COMP><YY>DY<SN>', 6, '<YY>', 3),
('ware_no', '仓储单号', 'SUT', '<COMP><YY>W<SN>', 6, '<COMP><YY>', 3);

--
-- 导出表中的数据 `P_TEMPLATE`
--

INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('人民币发票', 'B', 'xls', 10, 'INVOR', NULL, NULL, '人民币发票套打模板', 1, NULL, NULL, NULL, NULL, 'SUT', 1, 0),
('基础数据-国家', 'B', 'xls', 13, 'COUN', NULL, NULL, '国家数据导出模板', 1, NULL, NULL, NULL, NULL, 'SUT', 0, 0),
('基础数据-港口', 'B', 'xls', 14, 'PORT', NULL, NULL, '港口数据导出模板', 1, NULL, NULL, NULL, NULL, 'SUT', 1, 0),
('委托列表', 'B', 'xls', 15, NULL, NULL, NULL, '委托列表导出模板', 1, NULL, NULL, NULL, NULL, 'SUT', 1, 1),
('委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '委托列表导出模板', 1, NULL, NULL, NULL, NULL, 'SUT', 0, 0),
('单票审核', 'B', 'xls', 16, 'CONS_AUDIT', '单票审核', NULL, '单票审核导出模板', 1, NULL, NULL, NULL, NULL, 'SUT', 1, 1),
('单票审核', 'B', 'xls', 16, 'CONS_AUDIT', '单票审核', NULL, '单票审核导出模板', 1, NULL, NULL, NULL, NULL, 'SUT', 0, 0),
(' 测试', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '测试', 1, NULL, NULL, NULL, NULL, 'SUT', 1, 1),
('发票模板', 'B', 'xls', 9, 'INVO', '发票模板', NULL, '发票套打模板', 1, NULL, NULL, NULL, NULL, 'SUT', 0, 0),
('对账单', 'B', 'xls', 17, 'BILL', '对账单', NULL, '对账单输出模板', 1, NULL, NULL, NULL, NULL, 'SUT', 0, 0),
('HBL提单', 'B', 'xls', 1, 'BL', '提单模板', NULL, 'HBL提单', 1, 1, '2008-08-21 00:00:00', 3, '2008-10-27 00:00:00', 'SUT', 1, 0),
('出口报检单模板', 'B', 'xls', 5, 'INSP', '报检单模板', NULL, '出口报检单套打模板', 1, 1, '2008-08-23 00:00:00', 1, '2008-08-23 00:00:00', 'SUT', 0, 0),
('出口报关单模板', 'B', 'xls', 4, 'CUDE', '报关单模板', NULL, '出口报关单模板', 1, 1, '2008-08-24 00:00:00', 1, '2008-08-24 00:00:00', 'SUT', 0, 0),
('装箱单', 'B', 'xls', 8, 'CONT', '装箱单模板', NULL, '装箱单模板', 1, 1, '2008-08-25 00:00:00', 1, '2008-08-25 00:00:00', 'SUT', 0, 0),
('十联单模板', 'B', 'xls', 7, 'CONS', '十联单模板', NULL, '十联单套打模板', 1, 1, '2008-08-26 00:00:00', 1, '2008-08-26 00:00:00', 'SUT', 0, 0),
('门到门装箱通知', 'B', 'doc', 18, 'WARE_INFO', '进仓通知', NULL, '门到门装箱通知', 1, 1, '2008-08-27 00:00:00', 3, '2008-10-29 10:56:54', 'SUT', 1, 0),
('订舱确认书', 'B', 'xls', 19, 'BOOK_C', '订舱确认书', NULL, '订舱确认书模板', 1, 1, '2008-09-01 00:00:00', 1, '2008-09-01 00:00:00', 'SUT', 0, 0),
('代运联系单', 'B', 'xls', 20, 'TRAN', '代运联系单', NULL, '代运联系单模板', 1, 1, '2008-09-02 00:00:00', 1, '2008-09-02 00:00:00', 'SUT', 0, 0),
('仓储联系单', 'B', 'xls', 21, 'WARE', '仓储联系单', NULL, '仓储联系单模板', 1, 1, '2008-09-02 00:00:00', 1, '2008-09-02 00:00:00', 'SUT', 0, 0),
('电放保函', 'B', 'xls', 22, 'BLER', '电放保函', NULL, '电放保函模板', 1, 1, '2008-09-09 00:00:00', 81, '2009-01-17 21:55:26', 'SUT', 2, 0),
('SEAWAYBILL保函', 'B', 'xls', 23, 'SEAW', 'SEAWAYBILL保函', NULL, 'SEAWAYBILL保函模板', 1, 1, '2008-09-10 00:00:00', 1, '2008-09-10 00:00:00', 'SUT', 0, 0),
('进口分拨申请', 'B', 'xls', 24, 'SPLI', '进口分拨申请', NULL, '进口分拨申请模板', 1, 1, '2008-09-11 00:00:00', 1, '2008-09-11 00:00:00', 'SUT', 0, 0),
('进口提货单', 'B', 'xls', 25, 'DO', '进口提货单', NULL, '进口提货单标准模板', 1, 1, '2008-09-12 00:00:00', 1, '2008-09-12 00:00:00', 'SUT', 0, 0),
('提单模板', 'B', 'doc', 1, 'BL', '提单模板', NULL, '提单模板xx', 1, 1, '2008-10-07 00:00:00', 81, '2009-01-17 21:57:11', 'SUT', 3, 0),
('订舱委托书', 'B', 'xls', 26, 'CONS_B', '订舱委托书', NULL, '订舱委托书模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', 'SUT', 0, 0),
('报关单模板', 'B', 'xls', 5, 'INSP', '报检单模板', NULL, NULL, 1, 1, '2008-10-14 00:00:00', 1, '2008-10-20 00:00:00', 'SUT', 1, 1),
('仓库装箱通知', 'B', 'doc', 18, 'WARE_INFO', '装箱通知单', NULL, '仓库装箱通知', 1, 3, '2008-10-29 11:01:36', 3, '2008-10-29 11:01:36', 'SUT', 0, 0),
('进口到货通知', 'B', 'doc', 27, 'ARAD', '进口到货通知', NULL, '进口到货通知', 1, 3, '2008-10-29 11:24:45', 3, '2008-10-29 11:24:45', 'SUT', 0, 0),
('出入境检验检疫更改申请单', 'B', 'doc', 5, 'INSP', '报检单模板', NULL, '商检更改单', 1, 11, '2008-11-07 00:00:00', 11, '2008-11-07 11:38:27', 'SUT', 1, 0),
('单证输出模板', 'B', 'xls', 30, 'FDOC_LIST', '单证清单输出模板', NULL, '单证输出模板', 1, 3, '2008-11-27 10:51:37', 3, '2008-11-27 10:51:37', 'SUT', 0, 0),
('核销明细', 'B', 'xls', 31, 'VOUC_LIST', '核销明细', NULL, '核销明细', 1, 3, '2008-11-28 13:57:20', 3, '2008-11-28 13:57:20', 'SUT', 0, 0),
('运价表', 'B', 'xls', 32, 'PRSH_LIST', '运价表', NULL, '运价表', 1, 3, '2008-12-02 15:51:34', 3, '2008-12-02 15:51:34', 'SUT', 0, 0),
('配载清单', 'B', 'xls', 33, 'LOLI', '配载清单', NULL, '航次配载清单', 1, 3, '2009-01-02 23:24:28', 3, '2009-01-02 23:24:28', 'SUT', 0, 0),
('散货出口托运单', 'B', 'xls', 26, 'CONS_B', '订舱委托书', NULL, '散货出口托运单', 1, 3, '2009-02-13 00:00:00', 3, '2009-02-13 10:41:33', 'SUT', 1, 0),
('HYUNDAI BL', 'B', 'xls', 1, 'BL', '提单模板', NULL, 'HYUNDAI 提单模板', 1, 3, '2009-02-13 11:56:48', 3, '2009-02-13 11:56:48', 'SUT', 0, 0),
('费用确认单', 'B', 'xls', 34, 'EXPE_CONFIRM', '费用确认单', NULL, '费用确认单', 1, 3, '2009-02-16 14:05:57', 3, '2009-02-16 14:05:57', 'SUT', 0, 0),
('Nationality Of Ocean Vessel BL', 'B', 'xls', 1, 'BL', '提单模板', NULL, 'Nationality Of Ocean Vessel BL', 1, 3, '2009-02-17 11:07:49', 3, '2009-02-17 11:07:49', 'SUT', 0, 0),
('出口散货报关单', 'B', 'xls', 4, 'CUDE', '报关单模板', NULL, '出口散货报关单', 1, 3, '2009-02-17 12:27:37', 3, '2009-02-17 12:27:37', 'SUT', 0, 0),
('运价表', 'B', 'xls', 32, 'PRSH_LIST', '运价表', NULL, '运价表', 1, 3, '2009-02-19 15:05:02', 3, '2009-02-19 15:05:02', 'SUT', 0, 0),
('发货清单导入模板', 'B', 'xls', 35, 'PALI_IMPORT', '发货清单导入模板', NULL, '发货清单批量导入', 1, 2, '2009-02-24 20:35:22', 2, '2009-02-24 20:35:22', 'SUT', 0, 0),
('账单清单模板', 'B', 'xls', 36, 'INVO_LIST', '账单清单', NULL, '账单清单模板', 1, 3, '2009-03-22 20:50:02', 3, '2009-03-22 20:50:02', 'SUT', 0, 0),
('DebitNote模板', 'B', 'xls', 9, 'INVO', '发票模板', NULL, 'DebitNote模板', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', 'SUT', 0, 0);

--
-- 导出表中的数据 `S_EX_RATE`
--

INSERT INTO `S_EX_RATE` (`EXRA_BASE_CURRENCY`, `EXRA_EX_CURRENCY`, `EXRA_START_DATE`, `EXRA_END_DATE`, `EXRA_RATE`, `ACTIVE`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('USD', 'CNY', '2009-02-09', NULL, '6.8340', 1, 2, '2009-02-09 15:14:46', 'SUT', 0, 0),
('CNY', 'USD', '2009-02-09', NULL, '0.1463', 1, 2, '2009-02-09 15:14:46', 'SUT', 0, 0);

--
-- 导出表中的数据 `G_PORT`
--

INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('ALSAR', 'SARANDE', '萨兰达', 0, 1, 'AL', 0, 0, 'SUT'),
('ALSGN', 'SHENGJIN', '圣吉尼', 0, 1, 'AL', 0, 0, 'SUT'),
('ALVLO', 'VALONA', '发罗拉', 0, 1, 'AL', 0, 0, 'SUT'),
('ALDRS', 'DURRES', '都拉斯', 0, 1, 'AL', 0, 0, 'SUT'),
('TIRA', 'TIRANA', '', 0, 1, 'AL', 0, 0, 'SUT'),
('DZANN', 'ANNABA', '安纳巴', 0, 1, 'AL', 0, 0, 'SUT'),
('DZARZ', 'ARZEW', '阿尔泽', 0, 1, 'AL', 0, 0, 'SUT'),
('DZBEN', 'BENISAF', '贝尼萨夫', 0, 1, 'AL', 0, 0, 'SUT'),
('DZBJA', 'BEJAIA', '贝贾亚', 0, 1, 'AL', 0, 0, 'SUT'),
('DZCHE', 'CHERCHELL', '舍尔沙勒', 0, 1, 'AL', 0, 0, 'SUT'),
('DZCOL', 'COLLO', '科洛', 0, 1, 'AL', 0, 0, 'SUT'),
('DZDLS', 'DELLYS', '代利斯', 0, 1, 'AL', 0, 0, 'SUT'),
('DZELD', 'ALGIERS', '阿尔及尔', 0, 1, 'AL', 0, 0, 'SUT'),
('DZSKI', 'SKIKDA', '斯基克达', 0, 1, 'AL', 0, 0, 'SUT'),
('DZTEN', 'TENES', '提奈斯', 0, 1, 'AL', 0, 0, 'SUT'),
('DZWAH', 'ORAN', '瓦赫兰', 0, 1, 'AL', 0, 0, 'SUT'),
('ALDJI', 'DJIDJELLI', '吉杰利', 0, 1, 'AL', 0, 0, 'SUT'),
('ALGER', 'ALGER', '阿尔及尔', 0, 1, 'AL', 0, 0, 'SUT'),
('USPEN', 'PENSACOLA', '彭萨科拉', 0, 1, 'US', 0, 0, 'SUT'),
('USPET', 'PETERSBURG', '彼得斯堡', 0, 1, 'US', 0, 0, 'SUT'),
('USPEV', 'PORT EVERGLADES', '埃弗格雷斯港', 0, 1, 'US', 0, 0, 'SUT'),
('USPHI', 'PHILADELPHIA', '费城', 0, 1, 'US', 0, 0, 'SUT'),
('USPHU', 'PORT HUENEME', '怀尼米港', 0, 1, 'US', 0, 0, 'SUT'),
('USPIS', 'PORT ISABEL(US)', '伊萨贝尔港', 0, 1, 'US', 0, 0, 'SUT'),
('USPLB', 'PALM BEACH', '棕榈滩', 0, 1, 'US', 0, 0, 'SUT'),
('USPLD', 'PORTLAND(US)', '波特兰', 0, 1, 'US', 0, 0, 'SUT'),
('USPLY', 'PLYMOUTH(US)', '普列茅斯', 0, 1, 'US', 0, 0, 'SUT'),
('USPRE', 'PROVIDENCE', '普罗维登斯', 0, 1, 'US', 0, 0, 'SUT'),
('USPRO', 'PORT ROYAL(US)', '罗亚尔港', 0, 1, 'US', 0, 0, 'SUT'),
('USPSH', 'PORTSMOUTH(US)', '朴次茅斯', 0, 1, 'US', 0, 0, 'SUT'),
('USPSJ', 'PORT ST. JOE', '圣乔港', 0, 1, 'US', 0, 0, 'SUT'),
('USPSL', 'PORT SAN LUIS', '圣路易斯港', 0, 1, 'US', 0, 0, 'SUT'),
('USPSU', 'PORT SULPHUR', '萨尔弗港', 0, 1, 'US', 0, 0, 'SUT'),
('USPTO', 'PORT TOWNSEND', '汤森港', 0, 1, 'US', 0, 0, 'SUT'),
('USSAV', 'SAVANNAH(GA.)', '萨凡纳', 0, 1, 'US', 0, 0, 'SUT'),
('USSBA', 'SANTA BARBARA(US)', '圣巴巴拉', 0, 1, 'US', 0, 0, 'SUT'),
('USSDI', 'SAN DIEGO', '圣迭戈', 0, 1, 'US', 0, 0, 'SUT'),
('USSEA', 'SEATTLE,WA', '西雅图', 0, 1, 'US', 0, 0, 'SUT'),
('USSEW', 'SEWARD', '苏厄德', 0, 1, 'US', 0, 0, 'SUT'),
('USROC', 'ROCHESTER(US)', '罗切斯特', 0, 1, 'US', 0, 0, 'SUT'),
('USSAB', 'SABIN', '萨宾', 0, 1, 'US', 0, 0, 'SUT'),
('USSAC', 'SACRAMENTO', '萨克拉门托', 0, 1, 'US', 0, 0, 'SUT'),
('USSFO', 'SAN FRANCISCO', '旧金山', 0, 1, 'US', 0, 0, 'SUT'),
('USSPE', 'SAN PEDRO(U.S.A', '圣佩德罗', 0, 1, 'US', 0, 0, 'SUT'),
('USSPG', 'ST. PETERSBURG', '圣彼得斯堡', 0, 1, 'US', 0, 0, 'SUT'),
('USSPT', 'SEARSPORT', '锡斯波特', 0, 1, 'US', 0, 0, 'SUT'),
('USSTO', 'STOCKTO(US)', '斯托克顿', 0, 1, 'US', 0, 0, 'SUT'),
('USSWH', 'SANDWICH(US)', '桑德威奇', 0, 1, 'US', 0, 0, 'SUT'),
('USTAC', 'TACOMA,WA', '塔科马', 0, 1, 'US', 0, 0, 'SUT'),
('USTAM', 'TAMPA', '坦帕', 0, 1, 'US', 0, 0, 'SUT'),
('USTXC', 'TEXAS CITY', '得克萨斯城', 0, 1, 'US', 0, 0, 'SUT'),
('USVAL', 'VALDEZ', '瓦尔迪兹', 0, 1, 'US', 0, 0, 'SUT'),
('USVAN', 'VANCOUVER(US)', '温哥华', 0, 1, 'US', 0, 0, 'SUT'),
('USWAS', 'WASHINGTON(US)', '华盛顿', 0, 1, 'US', 0, 0, 'SUT'),
('USWIL', 'WILMINGTON(N.C)', '威尔明顿(北卡罗来)', 0, 1, 'US', 0, 0, 'SUT'),
('USWMN', 'WILMINGTON(DEL.', '威尔明顿(特拉华州)', 0, 1, 'US', 0, 0, 'SUT'),
('USWRA', 'WRANGELL', '兰格尔', 0, 1, 'US', 0, 0, 'SUT'),
('USFLR', 'FALL RIVER', '福尔里弗', 0, 1, 'US', 0, 0, 'SUT'),
('USFNA', 'FERNANDINA', '费南迪纳', 0, 1, 'US', 0, 0, 'SUT'),
('USFRE', 'FREEPORT(US)', '弗里波特', 0, 1, 'US', 0, 0, 'SUT'),
('USGAL', 'GALVESTON', '加尔维斯顿', 0, 1, 'US', 0, 0, 'SUT'),
('USGDH', 'GOOD HOPE(US)', '好望角', 0, 1, 'US', 0, 0, 'SUT'),
('USGEO', 'GEORGETOWN(US)', '乔治敦', 0, 1, 'US', 0, 0, 'SUT'),
('USGHN', 'GRAND HAVEN', '格兰德黑文', 0, 1, 'US', 0, 0, 'SUT'),
('USGRH', 'GRAYS HARBOUR', '格雷斯港', 0, 1, 'US', 0, 0, 'SUT'),
('USGUL', 'GULFPORT', '格尔夫波特', 0, 1, 'US', 0, 0, 'SUT'),
('USHMR', 'HOMER', '荷马', 0, 1, 'US', 0, 0, 'SUT'),
('USGLO', 'GLOUCESTER(MASS', '格洛斯特', 0, 1, 'US', 0, 0, 'SUT'),
('USGRB', 'GREEN BAY', '格林贝', 0, 1, 'US', 0, 0, 'SUT'),
('USHOP', 'HOPEWELL', '霍普韦尔', 0, 1, 'US', 0, 0, 'SUT'),
('USHOU', 'HOUSTON', '休斯敦', 0, 1, 'US', 0, 0, 'SUT'),
('USJAC', 'JACKSONVILLE', '杰克逊维尔', 0, 1, 'US', 0, 0, 'SUT'),
('USJUN', 'JUNEAU', '朱诺', 0, 1, 'US', 0, 0, 'SUT'),
('USKEN', 'KENOSHA', '基诺沙', 0, 1, 'US', 0, 0, 'SUT'),
('USKET', 'KETCHIKAN', '凯奇坎', 0, 1, 'US', 0, 0, 'SUT'),
('USLCS', 'LAKE CHARLES', '莱克查尔斯', 0, 1, 'US', 0, 0, 'SUT'),
('USLGB', 'LONG BEACH', '长滩', 0, 1, 'US', 0, 0, 'SUT'),
('USLON', 'LONGVIEW', '隆维尤', 0, 1, 'US', 0, 0, 'SUT'),
('USLOR', 'LORAIN', '洛雷恩', 0, 1, 'US', 0, 0, 'SUT'),
('USLSA', 'LOS ANGELES,CA', '洛杉矶', 0, 1, 'US', 0, 0, 'SUT'),
('USMAN', 'MANITOWOC', '马尼托沃克', 0, 1, 'US', 0, 0, 'SUT'),
('USMIA', 'MIAMI', '迈阿密', 0, 1, 'US', 0, 0, 'SUT'),
('USMOB', 'MOBILE', '莫比尔', 0, 1, 'US', 0, 0, 'SUT'),
('USMON', 'MONROE', '门罗', 0, 1, 'US', 0, 0, 'SUT'),
('USNET', 'NEWPORT(US)', '纽波特', 0, 1, 'US', 0, 0, 'SUT'),
('USNEW', 'NEW CASTLE(US)', '纽卡斯尔', 0, 1, 'US', 0, 0, 'SUT'),
('USNFK', 'NORFOLK(US)', '诺福克', 0, 1, 'US', 0, 0, 'SUT'),
('USNBE', 'NEW BEDFORD', '新贝德福德', 0, 1, 'US', 0, 0, 'SUT'),
('USNDN', 'NEW LONDON(CONN', '新伦敦', 0, 1, 'US', 0, 0, 'SUT'),
('USNHA', 'NEW HAVEN(US)', '纽黑文', 0, 1, 'US', 0, 0, 'SUT'),
('USNOL', 'NEW ORLEANS', '新奥尔良', 0, 1, 'US', 0, 0, 'SUT'),
('USNOM', 'NOME', '诺姆', 0, 1, 'US', 0, 0, 'SUT'),
('USNYK', 'NEW YORK,NY', '纽约', 0, 1, 'US', 0, 0, 'SUT'),
('USOAK', 'OAKLAND,CA', '奥克兰', 0, 1, 'US', 0, 0, 'SUT'),
('USORA', 'ORANGE', '奥兰治', 0, 1, 'US', 0, 0, 'SUT'),
('USPAN', 'PORT ANGELES', '安吉利斯港', 0, 1, 'US', 0, 0, 'SUT'),
('USPAR', 'PORT ARTHUR(US)', '阿瑟港', 0, 1, 'US', 0, 0, 'SUT'),
('USPAS', 'PASCAGOULA', '帕斯卡古拉', 0, 1, 'US', 0, 0, 'SUT'),
('ARCCO', 'CALETA CORDOVA', '科尔多瓦', 0, 1, 'US', 0, 0, 'SUT'),
('PHOEN', 'PHOENIX AZ SDD', '', 0, 1, 'US', 0, 0, 'SUT'),
('UMHON', 'HONOLULU', '火奴鲁鲁', 0, 1, 'US', 0, 0, 'SUT'),
('USALP', 'ALPENA', '阿尔皮纳', 0, 1, 'US', 0, 0, 'SUT'),
('USANA', 'ANACORTES', '阿纳科特斯', 0, 1, 'US', 0, 0, 'SUT'),
('USANC', 'ANCHORAGE', '安科雷奇', 0, 1, 'US', 0, 0, 'SUT'),
('USANN', 'ANNAPOLIS(US)', '安纳波利斯', 0, 1, 'US', 0, 0, 'SUT'),
('USAPA', 'APALACHICOLA', '阿巴拉契科拉', 0, 1, 'US', 0, 0, 'SUT'),
('USABE', 'ABERDEEN(US)', '阿伯丁', 0, 1, 'US', 0, 0, 'SUT'),
('USALB', 'ALBANY(US)', '奥尔巴尼', 0, 1, 'US', 0, 0, 'SUT'),
('USALE', 'ALEXANDRIA(US)', '亚历山德里亚', 0, 1, 'US', 0, 0, 'SUT'),
('USASD', 'ASHLAND', '阿什兰', 0, 1, 'US', 0, 0, 'SUT'),
('USASH', 'ASHTABULA', '阿什塔比拉', 0, 1, 'US', 0, 0, 'SUT'),
('USAST', 'ASTORIA', '阿斯托里亚', 0, 1, 'US', 0, 0, 'SUT'),
('USATO', 'ANTIOCH', '安蒂奥克', 0, 1, 'US', 0, 0, 'SUT'),
('USATR', 'ATRECO', '阿特雷科', 0, 1, 'US', 0, 0, 'SUT'),
('USBAL', 'BALTIMORE(US)', '巴尔的摩', 0, 1, 'US', 0, 0, 'SUT'),
('USBAN', 'BANGOR(ME.)', '班戈', 0, 1, 'US', 0, 0, 'SUT'),
('USBAT', 'BATH', '巴斯', 0, 1, 'US', 0, 0, 'SUT'),
('USBAY', 'BAY ROBERTS', '贝敦', 0, 1, 'US', 0, 0, 'SUT'),
('USBCN', 'BUCHANAN(US)', '布坎南', 0, 1, 'US', 0, 0, 'SUT'),
('USBEA', 'BEAUMONT', '博蒙特', 0, 1, 'US', 0, 0, 'SUT'),
('USBEL', 'BELLINGHAM', '贝灵哈姆', 0, 1, 'US', 0, 0, 'SUT'),
('USBER', 'BERKELEY', '伯克利', 0, 1, 'US', 0, 0, 'SUT'),
('USBOS', 'BOSTON(US)', '波士顿', 0, 1, 'US', 0, 0, 'SUT'),
('USBOY', 'BROOKLYN', '布鲁克林', 0, 1, 'US', 0, 0, 'SUT'),
('USBRE', 'BREMERTON', '布雷默顿', 0, 1, 'US', 0, 0, 'SUT'),
('USBRI', 'BRIDGEPORT', '布里奇波特', 0, 1, 'US', 0, 0, 'SUT'),
('USBRO', 'BROWNSVILLE', '布朗斯维尔', 0, 1, 'US', 0, 0, 'SUT'),
('USBRU', 'BRUNSWICK', '不伦瑞克', 0, 1, 'US', 0, 0, 'SUT'),
('USCAM', 'CAMDEN', '卡姆登', 0, 1, 'US', 0, 0, 'SUT'),
('USCAR', 'CARRABELLE', '卡拉贝尔', 0, 1, 'US', 0, 0, 'SUT'),
('USCGE', 'CAMBRIDGE', '剑桥', 0, 1, 'US', 0, 0, 'SUT'),
('USCHA', 'CHARLESTON', '查尔斯顿', 0, 1, 'US', 0, 0, 'SUT'),
('USCHC', 'CHESAPEAKE CITY', '切萨皮克城', 0, 1, 'US', 0, 0, 'SUT'),
('USCHE', 'CHEBOYGAN', '希博伊甘', 0, 1, 'US', 0, 0, 'SUT'),
('USBTR', 'BATON ROUGE', '巴吞鲁日', 0, 1, 'US', 0, 0, 'SUT'),
('USBUC', 'BUCKSPORT', '巴克斯波特', 0, 1, 'US', 0, 0, 'SUT'),
('USBUF', 'BUFFALO', '布法罗', 0, 1, 'US', 0, 0, 'SUT'),
('USCHI', 'CHICAGO', '芝加哥', 0, 1, 'US', 0, 0, 'SUT'),
('USCHR', 'CHESTER', '切斯特', 0, 1, 'US', 0, 0, 'SUT'),
('USCLE', 'CLEVELAND,OH', '克利夫兰', 0, 1, 'US', 0, 0, 'SUT'),
('USCME', 'CHALMETTE', '沙尔梅特', 0, 1, 'US', 0, 0, 'SUT'),
('USCOC', 'CORPUS CHRISTI', '科珀斯克里斯蒂', 0, 1, 'US', 0, 0, 'SUT'),
('USCOH', 'CONNEAUT HARBOU', '康尼奥特港', 0, 1, 'US', 0, 0, 'SUT'),
('USCOR', 'CORDOVA', '科尔多瓦', 0, 1, 'US', 0, 0, 'SUT'),
('USCRP', 'CHERRY POINT', '切里波因特（樱桃角）', 0, 1, 'US', 0, 0, 'SUT'),
('USCSB', 'COOS BAY', '库斯贝', 0, 1, 'US', 0, 0, 'SUT'),
('USCVT', 'CONVENT', '康文特', 0, 1, 'US', 0, 0, 'SUT'),
('USDUL', 'DULUTH', '德卢斯', 0, 1, 'US', 0, 0, 'SUT'),
('USDVT', 'DAVANT', '达文特', 0, 1, 'US', 0, 0, 'SUT'),
('USERI', 'ERIE', '伊利', 0, 1, 'US', 0, 0, 'SUT'),
('USESO', 'EL SEGUNDO', '埃尔塞贡多', 0, 1, 'US', 0, 0, 'SUT'),
('USEUR', 'EUREKA', '尤里卡', 0, 1, 'US', 0, 0, 'SUT'),
('USEVE', 'EVERETT(WASH.)', '埃弗里特', 0, 1, 'US', 0, 0, 'SUT'),
('USDEB', 'DELAWARE BAY', '德拉华湾', 0, 1, 'US', 0, 0, 'SUT'),
('USDES', 'DESTREHAN', '特斯特汉', 0, 1, 'US', 0, 0, 'SUT'),
('USDET', 'DETROIT', '底特律', 0, 1, 'US', 0, 0, 'SUT'),
('USDON', 'DONALDSONVILLE', '唐纳森维尔', 0, 1, 'US', 0, 0, 'SUT'),
('JMSLM', 'SAVANNA LA MAR', '滨海萨凡纳', 0, 1, 'US', 0, 0, 'SUT'),
('CAMAR', 'CAMARILLO', '', 0, 1, 'US', 0, 0, 'SUT'),
('VERNO', 'VERNON HILLS', '', 0, 1, 'US', 0, 0, 'SUT'),
('CHEL', 'CHELSEA MA (MLB)', '', 0, 1, 'US', 0, 0, 'SUT'),
('GBBER', 'BERWICK', '伯威克', 0, 1, 'US', 0, 0, 'SUT'),
('USDAL', 'DALLAS', '达拉斯', 0, 1, 'US', 0, 0, 'SUT'),
('USAL', 'ALAMEDA', '阿拉米达', 0, 1, 'US', 0, 0, 'SUT'),
('AMAN', 'ANACORTES', '安那柯的斯', 0, 1, 'US', 0, 0, 'SUT'),
('USATL', 'ATLANTA', '亚特兰大', 0, 1, 'US', 0, 0, 'SUT'),
('USALO', 'LAREDO,TX', '拉雷多', 0, 1, 'US', 0, 0, 'SUT'),
('USDEN', 'DENVER,CO', '', 0, 1, 'US', 0, 0, 'SUT'),
('USLOU', 'LOUISVILLE,KY', '', 0, 1, 'US', 0, 0, 'SUT'),
('USSTL', 'ST-LOUIS,MO', '圣陆易斯', 0, 1, 'US', 0, 0, 'SUT'),
('USCIN', 'CINCINNATI,OH', '新新那提', 0, 1, 'US', 0, 0, 'SUT'),
('USKNT', 'KENT,WA', '', 0, 1, 'US', 0, 0, 'SUT'),
('NEWOL', 'NEW ORLEANS,LA', '新奥尔良', 0, 1, 'US', 0, 0, 'SUT'),
('USCPN', 'COMPTON', '', 0, 1, 'US', 0, 0, 'SUT'),
('USCOI', 'CITY OF INDUSTRY', '工业城', 0, 1, 'US', 0, 0, 'SUT'),
('SPRIN', 'SPRINGFIELD', '密苏里洲', 0, 1, 'US', 0, 0, 'SUT'),
('USITN', 'IRVINGTON,NJ', '', 0, 1, 'US', 0, 0, 'SUT'),
('USCOL', 'COLUMBUS,OH', '哥伦布斯', 0, 1, 'US', 0, 0, 'SUT'),
('USKAN', 'KANSAS CITY,MO', '坎萨斯城', 0, 1, 'US', 0, 0, 'SUT'),
('USNAS', 'NASHVILLE,TN', '', 0, 1, 'US', 0, 0, 'SUT'),
('OMAHA', 'OMAHA,NE', '奥马哈', 0, 1, 'US', 0, 0, 'SUT'),
('LAKE', 'SALT LAKE CITY', '盐湖城', 0, 1, 'US', 0, 0, 'SUT'),
('HUNTS', 'HUNTSVILLE(AL)', '阿拉巴马洲', 0, 1, 'US', 0, 0, 'SUT'),
('ST.LO', 'ST.LOUIS(MO)', '密苏里洲', 0, 1, 'US', 0, 0, 'SUT'),
('TUCSO', 'TUCSON(AZ)', '亚利桑那洲', 0, 1, 'US', 0, 0, 'SUT'),
('TUOK', 'TULSA(OK)', '奥克拉马哈洲', 0, 1, 'US', 0, 0, 'SUT'),
('132', 'FORT WORTH', '', 0, 1, 'US', 0, 0, 'SUT'),
('SEA', 'SEATTLE', '西雅图', 0, 1, 'US', 0, 0, 'SUT'),
('USLO', 'LOS ANGELES', '洛杉机', 0, 1, 'US', 0, 0, 'SUT'),
('CALH', 'CALHOUN GA', '', 0, 1, 'US', 0, 0, 'SUT'),
('OXN', 'OXNARD', '奥克兰', 0, 1, 'US', 0, 0, 'SUT'),
('ELIZ', 'ELIZABETH', '伊利沙白港', 0, 1, 'US', 0, 0, 'SUT'),
('EL P', 'EL PASO', '埃尔帕索', 0, 1, 'US', 0, 0, 'SUT'),
('KNOX', 'KNOXVILLE(TN)', '田那西洲', 0, 1, 'US', 0, 0, 'SUT'),
('MINN', 'MINNEAPOLIS(MN)', '缅因洲', 0, 1, 'US', 0, 0, 'SUT'),
('ST.P', 'ST.PAUL(MN)', '缅因洲', 0, 1, 'US', 0, 0, 'SUT'),
('SGA', 'SOUTHGATE', '', 0, 1, 'US', 0, 0, 'SUT'),
('OAAK', 'OAKLAND', '奥克兰', 0, 1, 'US', 0, 0, 'SUT'),
('NPN', 'NEW PORTNEWS', '', 0, 1, 'US', 0, 0, 'SUT'),
('CNEW', 'NEW YORK', '纽约', 0, 1, 'US', 0, 0, 'SUT'),
('AOABZ', 'AMBRIZ', '安布里什', 0, 1, 'AO', 0, 0, 'SUT'),
('AOAMB', 'AMBRIZETE', '安布里泽特', 0, 1, 'AO', 0, 0, 'SUT'),
('AOBEN', 'BENGUELA', '本格拉', 0, 1, 'AO', 0, 0, 'SUT'),
('AOCAB', 'CABINDA', '卡宾达', 0, 1, 'AO', 0, 0, 'SUT'),
('AOLOB', 'LOBITO', '洛比托', 0, 1, 'AO', 0, 0, 'SUT'),
('AOLUA', 'LUANDA', '罗安达', 0, 1, 'AO', 0, 0, 'SUT'),
('AOMOC', 'MOCAMEDES', '木萨米迪什', 0, 1, 'AO', 0, 0, 'SUT'),
('AONRE', 'NOVO REDONDO', '新里东杜', 0, 1, 'AO', 0, 0, 'SUT'),
('ARPDE', 'PUERTO DESEADO', '德塞阿多港', 0, 1, 'AR', 0, 0, 'SUT'),
('ARPMA', 'PUERTO MADRYN', '马德林港', 0, 1, 'AR', 0, 0, 'SUT'),
('ARRGA', 'RIO GALLEGOS', '里奥加耶戈斯', 0, 1, 'AR', 0, 0, 'SUT'),
('ARROS', 'ROSARIO', '罗萨里奥', 0, 1, 'AR', 0, 0, 'SUT'),
('ARSFE', 'SANTA FE', '圣菲', 0, 1, 'AR', 0, 0, 'SUT'),
('ARSLO', 'SAN LORENZO(AR)', '圣洛伦索', 0, 1, 'AR', 0, 0, 'SUT'),
('ARSNS', 'SAN NICOLAS(AR)', '圣尼古拉斯', 0, 1, 'AR', 0, 0, 'SUT'),
('ARSPE', 'SAN PEDRO(AR)', '圣佩德罗', 0, 1, 'AR', 0, 0, 'SUT'),
('ARSSB', 'SAN SEBASTIAN B', '圣塞瓦斯蒂安', 0, 1, 'AR', 0, 0, 'SUT'),
('ARVCO', 'VILLA CONSTITUC', '孔斯蒂图西翁镇', 0, 1, 'AR', 0, 0, 'SUT'),
('ARZAR', 'ZARATE', '萨拉特', 0, 1, 'AR', 0, 0, 'SUT'),
('ACPDR', 'PUERTO DEL ROSAIO', '罗萨里奥港', 0, 1, 'AR', 0, 0, 'SUT'),
('ANSNB', 'SAN NICOLAS BAY', '圣尼古拉斯湾', 0, 1, 'AR', 0, 0, 'SUT'),
('ARBBL', 'BAHIA BLANCA', '布兰卡港', 0, 1, 'AR', 0, 0, 'SUT'),
('ARBNA', 'BUENOS AIRES', '布宜诺斯艾利斯', 0, 1, 'AR', 0, 0, 'SUT'),
('ARCAM', 'CAMPANA', '坎帕纳', 0, 1, 'AR', 0, 0, 'SUT'),
('ARCOR', 'COMODORO RIVADAVIA', '里瓦达维亚', 0, 1, 'AR', 0, 0, 'SUT'),
('ARLPL', 'LA PLATA', '拉普拉塔', 0, 1, 'AR', 0, 0, 'SUT'),
('ARMDP', 'MAR DEL PLATA', '马德普拉塔', 0, 1, 'AR', 0, 0, 'SUT'),
('ARNEC', 'NECOCHEA', '内科切阿', 0, 1, 'AR', 0, 0, 'SUT'),
('ARDES', 'DESEADO', '德塞阿多', 0, 1, 'AR', 0, 0, 'SUT'),
('ARYER', 'YEREVAN', '', 0, 1, 'AR', 0, 0, 'SUT'),
('CHACO', 'CHACO', '', 0, 1, 'AR', 0, 0, 'SUT'),
('VANA', 'VANADZOR', '', 0, 1, 'AM', 0, 0, 'SUT'),
('AUADE', 'ADELAIDE', '阿德莱德', 0, 1, 'AU', 0, 0, 'SUT'),
('AUALB', 'ALBANY(AU)', '奥尔巴尼', 0, 1, 'AU', 0, 0, 'SUT'),
('AUARD', 'ARDROSSAN(AU)', '阿德罗森', 0, 1, 'AU', 0, 0, 'SUT'),
('AUBAI', 'BARROW ISLAND(A', '巴罗岛', 0, 1, 'AU', 0, 0, 'SUT'),
('AUBDG', 'BUNDABERG', '班达伯格', 0, 1, 'AU', 0, 0, 'SUT'),
('AUBLB', 'BELL BAY', '皮尔湾', 0, 1, 'AU', 0, 0, 'SUT'),
('AUBNE', 'BURNIE', '伯尼', 0, 1, 'AU', 0, 0, 'SUT'),
('AUBOW', 'BOWEN', '鲍恩', 0, 1, 'AU', 0, 0, 'SUT'),
('AUBRI', 'BRISBANE', '布里斯班', 0, 1, 'AU', 0, 0, 'SUT'),
('AUBRO', 'BROOME', '布鲁姆', 0, 1, 'AU', 0, 0, 'SUT'),
('AUBTB', 'BOTANY BAY', '博物学家角', 0, 1, 'AU', 0, 0, 'SUT'),
('AUBUN', 'BUNBURY', '班伯里', 0, 1, 'AU', 0, 0, 'SUT'),
('AUBUS', 'BUSSELTON', '巴瑟尔顿', 0, 1, 'AU', 0, 0, 'SUT'),
('AUCA', 'CARNARVON', '卡那封', 0, 1, 'AU', 0, 0, 'SUT'),
('AUDBY', 'COCKATOO', '德比', 0, 1, 'AU', 0, 0, 'SUT'),
('AUDEV', 'DEVONPORT', '德文波特', 0, 1, 'AU', 0, 0, 'SUT'),
('AUDPR', 'DAMPIER', '丹皮尔', 0, 1, 'AU', 0, 0, 'SUT'),
('AUDWN', 'DARWIN', '达尔文', 0, 1, 'AU', 0, 0, 'SUT'),
('AUEDI', 'EDITHBURGH', '伊迪斯堡', 0, 1, 'AU', 0, 0, 'SUT'),
('AUCLT', 'CAPE LAMBERT', '拉姆贝特角', 0, 1, 'AU', 0, 0, 'SUT'),
('AUCNS', 'CAIRNS', '凯恩斯', 0, 1, 'AU', 0, 0, 'SUT'),
('AUCOO', 'COOKTOWN', '库克敦', 0, 1, 'AU', 0, 0, 'SUT'),
('AUCFH', 'COFF''S HARBOUR', '科夫斯港', 0, 1, 'AU', 0, 0, 'SUT'),
('AUEDN', 'EDEN', '伊登', 0, 1, 'AU', 0, 0, 'SUT'),
('AUESP', 'ESPERANCE', '埃斯佩兰斯', 0, 1, 'AU', 0, 0, 'SUT'),
('AUFRE', 'FREMANTLE', '弗里曼特尔', 0, 1, 'AU', 0, 0, 'SUT'),
('AUGEE', 'GEELONG', '吉朗', 0, 1, 'AU', 0, 0, 'SUT'),
('AUGER', 'GERALDTON', '杰拉尔顿', 0, 1, 'AU', 0, 0, 'SUT'),
('AUGET', 'GROOTE EYLANDT', '格鲁特岛', 0, 1, 'AU', 0, 0, 'SUT'),
('AUGLA', 'GLADSTONE(W.A.)', '格拉德斯通', 0, 1, 'AU', 0, 0, 'SUT'),
('AUGLE', 'GLADSTONE(QUE)', '格拉德斯通（东）', 0, 1, 'AU', 0, 0, 'SUT'),
('AUGRA', 'GRAFTON', '格拉夫顿', 0, 1, 'AU', 0, 0, 'SUT'),
('AUHBT', 'HOBART', '霍巴特', 0, 1, 'AU', 0, 0, 'SUT'),
('AUKIN', 'KINGSTON(AU)', '金斯敦', 0, 1, 'AU', 0, 0, 'SUT'),
('AULUC', 'LUCINDA', '卢辛达', 0, 1, 'AU', 0, 0, 'SUT'),
('AUMAR', 'MARYBOROUGH', '马里伯勒', 0, 1, 'AU', 0, 0, 'SUT'),
('AUMEL', 'MELBOURNE', '墨尔本', 0, 1, 'AU', 0, 0, 'SUT'),
('AUNEW', 'NEWCASTLE(N.S.W', '纽卡斯尔', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPAA', 'PORT ALMA', '阿尔马港', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPAD', 'Port Adelaide', '阿德莱德港', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPAL', 'PORT ALFRED(AU)', '艾尔弗雷德港', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPAU', 'PORT AUGUSTA', '奥古斯塔港', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPHE', 'PORT HEDLAND', '黑德兰港', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPLD', 'PORTLAND(AUS)', '波特兰', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPLI', 'PORT LINCOLN', '林肯港', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPMA', 'PORT MACGUARIE', '麦夸里港', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPST', 'PORT STANVAC', '斯坦瓦克港', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPWA', 'PORT WALCOTT', '澳尔科特港', 0, 1, 'AU', 0, 0, 'SUT'),
('AUROC', 'ROCKHAMPTON', '罗克汉普顿', 0, 1, 'AU', 0, 0, 'SUT'),
('AUTHU', 'THURSDAY ISLAND', '星期四岛', 0, 1, 'AU', 0, 0, 'SUT'),
('AUTVD', 'THEVENARD', '泰弗纳德', 0, 1, 'AU', 0, 0, 'SUT'),
('AUWAL', 'WALLAROO', '沃拉鲁', 0, 1, 'AU', 0, 0, 'SUT'),
('AUWDM', 'WYNDHAM', '温德姆', 0, 1, 'AU', 0, 0, 'SUT'),
('AUWHY', 'WHYALLA', '怀阿拉', 0, 1, 'AU', 0, 0, 'SUT'),
('AUURA', 'URANGAN', '尤兰根', 0, 1, 'AU', 0, 0, 'SUT'),
('AUWPA', 'WEIPA', '韦帕', 0, 1, 'AU', 0, 0, 'SUT'),
('AUYSD', 'YAMPI SOUND', '扬皮桑德', 0, 1, 'AU', 0, 0, 'SUT'),
('AEMUI', 'Mubarras lsland', '穆巴腊角', 0, 1, 'AU', 0, 0, 'SUT'),
('AUPER', 'PERTH (AU)', '佩斯', 0, 1, 'AU', 0, 0, 'SUT'),
('AUARG', 'SALZBURG', '萨尔茨堡', 0, 1, 'AU', 0, 0, 'SUT'),
('DAVE', 'DAVENPORT', '', 0, 1, 'AU', 0, 0, 'SUT'),
('SYDE', 'SYDNEY(AU)', '悉尼', 0, 1, 'AU', 0, 0, 'SUT'),
('GRAZ', 'GRAZ', '', 0, 1, 'AU', 0, 0, 'SUT'),
('CANB', 'CANBERRA', '堪培拉', 0, 1, 'AU', 0, 0, 'SUT'),
('ATVIE', 'VIENNA', '维也纳', 0, 1, 'AT', 0, 0, 'SUT'),
('ATSAL', 'SALZBERG', '', 0, 1, 'AT', 0, 0, 'SUT'),
('AIKOR', 'KORLACH', '', 0, 1, 'AT', 0, 0, 'SUT'),
('AIKUF', 'KUFSTEIN', '', 0, 1, 'AT', 0, 0, 'SUT'),
('AILIZ', 'LINZ', '', 0, 1, 'AT', 0, 0, 'SUT'),
('AUFUR', 'FURNITZ', '', 0, 1, 'AT', 0, 0, 'SUT'),
('MESS', 'MESSENDORF', '', 0, 1, 'AT', 0, 0, 'SUT'),
('WEL', 'WELS', '', 0, 1, 'AT', 0, 0, 'SUT'),
('WIEN', 'WIEN-NORDWEST', '', 0, 1, 'AT', 0, 0, 'SUT'),
('WIEF', 'WIEN-FREUDENAU', '', 0, 1, 'AT', 0, 0, 'SUT'),
('VISU', 'VILLACH-SUED', '', 0, 1, 'AT', 0, 0, 'SUT'),
('WOLF', 'WOLFURT', '', 0, 1, 'AT', 0, 0, 'SUT'),
('BABAH', 'BAHRAIN', '巴林', 0, 1, 'BH', 0, 0, 'SUT'),
('BDCNA', 'CHALNA', '查尔钠港', 0, 1, 'BD', 0, 0, 'SUT'),
('BDCTG', 'CHITTAGONG', '吉大港', 0, 1, 'BD', 0, 0, 'SUT'),
('BDKHU', 'KHULNA', '库尔纳', 0, 1, 'BD', 0, 0, 'SUT'),
('BDMON', 'MONGLA', '蒙加拉', 0, 1, 'BD', 0, 0, 'SUT'),
('BADHA', 'DHAKA', '达卡', 0, 1, 'BD', 0, 0, 'SUT'),
('MODCC', 'DACCA', '达卡', 0, 1, 'BD', 0, 0, 'SUT'),
('ICD', 'ICD KAMALAPUR', '', 0, 1, 'BD', 0, 0, 'SUT'),
('BBBTN', 'BRIDGETOWN', '布里奇敦', 0, 1, 'BB', 0, 0, 'SUT'),
('BEANT', 'ANTWERP', '安特卫普', 0, 1, 'BE', 0, 0, 'SUT'),
('BEBRS', 'BRUGES', '布鲁日', 0, 1, 'BE', 0, 0, 'SUT'),
('BEBRU', 'BRUSSELS', '布鲁塞尔', 0, 1, 'BE', 0, 0, 'SUT'),
('BELGE', 'LIEGE', '列日', 0, 1, 'BE', 0, 0, 'SUT'),
('BENIE', 'NIEUWPOORT', '尼乌波特', 0, 1, 'BE', 0, 0, 'SUT'),
('BEOST', 'OSTEND', '奥斯坦德', 0, 1, 'BE', 0, 0, 'SUT'),
('BEZEE', 'ZEEBRUGGE', '泽布吕赫', 0, 1, 'BE', 0, 0, 'SUT'),
('BEGEN', 'GENT', '根特', 0, 1, 'BE', 0, 0, 'SUT'),
('BJCOT', 'COTONOU', '科托努', 0, 1, 'BJ', 0, 0, 'SUT'),
('BJPNO', 'PORTO NOVO(BJ)', '波多诺伏', 0, 1, 'BJ', 0, 0, 'SUT'),
('BMHAM', 'HAMILTON(BM)', '哈密尔顿', 0, 1, 'BM', 0, 0, 'SUT'),
('BMSGE', 'ST. GEORGE''S', '圣乔治', 0, 1, 'BM', 0, 0, 'SUT'),
('GDSGE', 'ST. GEORGE', '圣乔治', 0, 1, 'BM', 0, 0, 'SUT'),
('MXLPZ', 'LA PAZ', '拉巴斯', 0, 1, 'BO', 0, 0, 'SUT'),
('BOGNE', 'GABERONE', '', 0, 1, 'BW', 0, 0, 'SUT'),
('GBE', 'GABORONE', '哈博罗内', 0, 1, 'BW', 0, 0, 'SUT'),
('ARRGR', 'RIO GRANDE(AR)', '里奥格兰德', 0, 1, 'BR', 0, 0, 'SUT'),
('BRAJU', 'ARACAJU', '阿拉卡茹', 0, 1, 'BR', 0, 0, 'SUT'),
('BRATI', 'ARACATI', '阿拉卡蒂', 0, 1, 'BR', 0, 0, 'SUT'),
('BRFLO', 'FLORIANOPOLIS', '弗洛里亚诺波利斯', 0, 1, 'BR', 0, 0, 'SUT'),
('BRFOR', 'FORTALEZA', '福塔莱萨', 0, 1, 'BR', 0, 0, 'SUT'),
('BRIJI', 'ITAJAI', '伊塔雅伊', 0, 1, 'BR', 0, 0, 'SUT'),
('BRBLM', 'BELEM(BR)', '贝伦', 0, 1, 'BR', 0, 0, 'SUT'),
('BRIQI', 'ITAQUI', '伊塔基', 0, 1, 'BR', 0, 0, 'SUT'),
('BRIUS', 'ILHEUS', '伊列乌斯', 0, 1, 'BR', 0, 0, 'SUT'),
('BRNAT', 'NATAL', '纳塔尔', 0, 1, 'BR', 0, 0, 'SUT'),
('BRNIT', 'NITEROI', '尼泰罗伊', 0, 1, 'BR', 0, 0, 'SUT'),
('BRPAL', 'PORTO ALEGRE', '阿雷格里港', 0, 1, 'BR', 0, 0, 'SUT'),
('BRPAR', 'PARANAGUA', '巴拉那瓜', 0, 1, 'BR', 0, 0, 'SUT'),
('BRPBA', 'PARNAIBA', '巴纳伊巴', 0, 1, 'BR', 0, 0, 'SUT'),
('BRMAC', 'MACEIO', '马塞约', 0, 1, 'BR', 0, 0, 'SUT'),
('BRMAN', 'MANAUS', '马瑙斯', 0, 1, 'BR', 0, 0, 'SUT'),
('BRMPA', 'MACAPA', '马卡帕', 0, 1, 'BR', 0, 0, 'SUT'),
('BRJPA', 'JOAO PESSOA', '若昂佩索阿', 0, 1, 'BR', 0, 0, 'SUT'),
('BRPEL', 'PELOTAS', '佩洛塔斯', 0, 1, 'BR', 0, 0, 'SUT'),
('BRRDJ', 'RIO DE JANEIRO', '里约热内卢', 0, 1, 'BR', 0, 0, 'SUT'),
('BRREC', 'RECIFE', '累西腓', 0, 1, 'BR', 0, 0, 'SUT'),
('BRSAL', 'SALVADOR', '萨尔瓦多', 0, 1, 'BR', 0, 0, 'SUT'),
('BRSFS', 'SANTO FRANCISCO DO SUL', '南圣弗兰西斯科', 0, 1, 'BR', 0, 0, 'SUT'),
('BRSPA', 'SAO PAULO', '圣保罗', 0, 1, 'BR', 0, 0, 'SUT'),
('BRSSE', 'SAO SEBASTIAO', '圣塞巴斯蒂昂', 0, 1, 'BR', 0, 0, 'SUT'),
('BRSTA', 'SANTANA', '圣安娜', 0, 1, 'BR', 0, 0, 'SUT'),
('BRSLM', 'SAO LUIZ DE MAR', '圣路易斯', 0, 1, 'BR', 0, 0, 'SUT'),
('BRSTM', 'SANTAREM', '圣塔伦', 0, 1, 'BR', 0, 0, 'SUT'),
('BRSTS', 'SANTOS', '桑托斯', 0, 1, 'BR', 0, 0, 'SUT'),
('BRTUB', 'TUBARAO', '图巴朗', 0, 1, 'BR', 0, 0, 'SUT'),
('BRVIC', 'VICTORIA', '维多利亚', 0, 1, 'BR', 0, 0, 'SUT'),
('BRAN', 'ANTONINA', '安托尼纳', 0, 1, 'BR', 0, 0, 'SUT'),
('BRSFD', 'SAN FRANCISCO DO SUL', '', 0, 1, 'BR', 0, 0, 'SUT'),
('BRSAO', 'SAO FRANCISCO DO SUL', '', 0, 1, 'BR', 0, 0, 'SUT'),
('PECEM', 'PECEM', '', 0, 1, 'BR', 0, 0, 'SUT'),
('BNBSB', 'BANDAR SERI BEGAWAN', '斯里巴加湾港', 0, 1, 'BN', 0, 0, 'SUT'),
('BNKBT', 'KUALA BELAIT', '白拉奕', 0, 1, 'BN', 0, 0, 'SUT'),
('BNSER', 'SERIA', '诗里亚', 0, 1, 'BN', 0, 0, 'SUT'),
('BRBR', 'BRUNEI', '文莱', 0, 1, 'BN', 0, 0, 'SUT'),
('MUA', 'MUARA', '穆阿拉', 0, 1, 'BN', 0, 0, 'SUT'),
('BGBAL', 'BALCHIK', '巴尔奇克', 0, 1, 'BG', 0, 0, 'SUT'),
('BGBGS', 'BOURGAS', '布加斯', 0, 1, 'BG', 0, 0, 'SUT'),
('BGKAV', 'KAVARNA', '卡瓦尔纳', 0, 1, 'BG', 0, 0, 'SUT'),
('BGMIC', 'MICHURIN', '米丘林', 0, 1, 'BG', 0, 0, 'SUT'),
('BGNES', 'NESSEBAR', '纳塞巴尔', 0, 1, 'BG', 0, 0, 'SUT'),
('BGVAR', 'VARNA', '瓦尔纳', 0, 1, 'BG', 0, 0, 'SUT'),
('BUSOF', 'SOFIA', '索非亚', 0, 1, 'BG', 0, 0, 'SUT'),
('BUBUR', 'BURGAS', '布尔加斯', 0, 1, 'BG', 0, 0, 'SUT'),
('PLOV', 'PLOVDIV', '', 0, 1, 'BG', 0, 0, 'SUT'),
('MMAKY', 'AKYAB', '阿恰布', 0, 1, 'MM', 0, 0, 'SUT'),
('MMBSN', 'BASSEIN', '勃生', 0, 1, 'MM', 0, 0, 'SUT'),
('MMMOU', 'MOULMEIN', '毛淡棉', 0, 1, 'MM', 0, 0, 'SUT'),
('BUSI', 'SITTWE', '实兑', 0, 1, 'MM', 0, 0, 'SUT'),
('YAN', 'YANGON', '仰光', 0, 1, 'MM', 0, 0, 'SUT'),
('CMDUA', 'DOUALA', '杜阿拉', 0, 1, 'CM', 0, 0, 'SUT'),
('CO', 'KRIBI', '克里比', 0, 1, 'CM', 0, 0, 'SUT'),
('GNVIC', 'VICTORIA(GN)', '维多利亚', 0, 1, 'CM', 0, 0, 'SUT'),
('CADAL', 'DALHOUSIE', '达尔豪西', 0, 1, 'CA', 0, 0, 'SUT'),
('CADIG', 'DIGBY', '迪格比', 0, 1, 'CA', 0, 0, 'SUT'),
('CADWL', 'DINGWALL(CA)', '丁沃尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CAESQ', 'ESQUIMALT', '埃斯奎莫尔特', 0, 1, 'CA', 0, 0, 'SUT'),
('CAFOR', 'FORESTVILLE', '福雷斯特维尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CAGAS', 'GASPE', '加斯佩', 0, 1, 'CA', 0, 0, 'SUT'),
('CAGBK', 'GRAND BANK', '格兰德班克', 0, 1, 'CA', 0, 0, 'SUT'),
('CAGEO', 'GEORGETOWN(CA)', '乔治敦', 0, 1, 'CA', 0, 0, 'SUT'),
('CAGOD', 'GODERICH', '戈德里奇', 0, 1, 'CA', 0, 0, 'SUT'),
('CAGSB', 'GOOSE BAY', '古斯湾', 0, 1, 'CA', 0, 0, 'SUT'),
('CAHAM', 'HAMILTON(CA)', '哈密尔顿', 0, 1, 'CA', 0, 0, 'SUT'),
('CAHAN', 'HANTSPORT', '汉茨波特', 0, 1, 'CA', 0, 0, 'SUT'),
('CAHCT', 'HEART''S CONTENT', '哈茨康滕特', 0, 1, 'CA', 0, 0, 'SUT'),
('CAHFX', 'HALIFAX', '哈利法克斯', 0, 1, 'CA', 0, 0, 'SUT'),
('CAHGR', 'HARBOUR GRACE', '格雷斯港', 0, 1, 'CA', 0, 0, 'SUT'),
('CAKIN', 'KINGSTON(CA)', '金斯顿', 0, 1, 'CA', 0, 0, 'SUT'),
('CAKIT', 'KITIMAT', '基提马特', 0, 1, 'CA', 0, 0, 'SUT'),
('CALAH', 'LA HAVE', '勒黑夫', 0, 1, 'CA', 0, 0, 'SUT'),
('CALEA', 'LEAMINGTON', '利明顿', 0, 1, 'CA', 0, 0, 'SUT'),
('CALIV', 'LIVERPOOL(CA)', '利物浦', 0, 1, 'CA', 0, 0, 'SUT'),
('CALOC', 'LOCKEPORT', '洛克波特', 0, 1, 'CA', 0, 0, 'SUT'),
('CALOU', 'LOUISBURG', '路易斯堡', 0, 1, 'CA', 0, 0, 'SUT'),
('CALSC', 'LIS COMB', '利斯科姆', 0, 1, 'CA', 0, 0, 'SUT'),
('CALUN', 'LUNENBURG', '卢嫩堡', 0, 1, 'CA', 0, 0, 'SUT'),
('CAMAT', 'MATANE', '马塔讷', 0, 1, 'CA', 0, 0, 'SUT'),
('CAMET', 'METEGHAN', '梅泰根', 0, 1, 'CA', 0, 0, 'SUT'),
('CAMID', 'MIDLAND(ONT.)', '米德兰', 0, 1, 'CA', 0, 0, 'SUT'),
('CAMLS', 'MONT LOUIS', '蒙路易', 0, 1, 'CA', 0, 0, 'SUT'),
('CAMTL', 'MONTREAL', '蒙特利尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CANSY', 'NORTH SYDNEY', '北锡德尼', 0, 1, 'CA', 0, 0, 'SUT'),
('CANWE', 'NEW WESTMINSTER', '新威斯敏斯特', 0, 1, 'CA', 0, 0, 'SUT'),
('CAOAK', 'OAKVILLE(ONT.)', '奥克维尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CAOFS', 'OCEAN FALLS', '福尔斯海', 0, 1, 'CA', 0, 0, 'SUT'),
('CAOSD', 'OWEN SOUND', '欧文桑德', 0, 1, 'CA', 0, 0, 'SUT'),
('CANEW', 'NEWCASTLE(N.B.)', '纽卡斯尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CANGL', 'NEW GLASGOW', '新格拉斯哥', 0, 1, 'CA', 0, 0, 'SUT'),
('CANMO', 'NANAIMO', '纳奈莫', 0, 1, 'CA', 0, 0, 'SUT'),
('CAOSH', 'OSHAWA(ONT.)', '奥沙瓦', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPAD', 'PORT ALFRED(CA)', '艾尔夫雷德港', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPAE', 'PORT ALICE', '艾利斯港', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPAR', 'PARRSBORO', '帕斯博勒', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPAS', 'PASPEBIAC', '帕斯佩比亚克', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPCA', 'PORT CARTIER', '卡提尔港', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPCO', 'PORT COLBORNE(O', '科尔本港', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPCR', 'PORT CREDIT(ONT', '克雷迪特港', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPHA', 'PORT HAWKESBURY', '霍克斯伯里港', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPHO', 'PORT HOPE(ONT.)', '霍普港', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPIC', 'PICTOU', '皮克图', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPME', 'PORT MEDWAY', '梅德韦港', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPOR', 'POWELL RIVER', '鲍威尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPRE', 'PRESCOTT(CA)', '普雷斯科特', 0, 1, 'CA', 0, 0, 'SUT'),
('CAPSD', 'PARRY SOUND', '帕里桑德', 0, 1, 'CA', 0, 0, 'SUT'),
('CAQBC', 'QUEBEC', '魁北克', 0, 1, 'CA', 0, 0, 'SUT'),
('CARDL', 'RIVIERE DU LOUP', '里维耶尔－迪卢', 0, 1, 'CA', 0, 0, 'SUT'),
('AGSJS', 'ST. JOHNS(AG)', '圣约翰斯', 0, 1, 'CA', 0, 0, 'SUT'),
('CASAN', 'ST. ANDREWS(CA)', '圣安德鲁斯', 0, 1, 'CA', 0, 0, 'SUT'),
('CASAR', 'SARNIA(ONT.)', '萨尔尼亚', 0, 1, 'CA', 0, 0, 'SUT'),
('CASDC', 'SHEDIAC', '谢迪艾克', 0, 1, 'CA', 0, 0, 'SUT'),
('CASHE', 'SHELBURNE(N.S.)', '谢尔本', 0, 1, 'CA', 0, 0, 'SUT'),
('CASHI', 'SHIPPEGAN', '希皮根', 0, 1, 'CA', 0, 0, 'SUT'),
('CASPR', 'SPRINGDALE', '斯普林代尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CASRL', 'SORLE', '索雷尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CASSM', 'SAULT STE. MARI', '苏圣马丽', 0, 1, 'CA', 0, 0, 'SUT'),
('CASTH', 'SHEET HARBOUR', '希特港', 0, 1, 'CA', 0, 0, 'SUT'),
('CASTT', 'STEWART', '斯图尔特', 0, 1, 'CA', 0, 0, 'SUT'),
('CASUM', 'SUMMERSIDE', '萨默塞德', 0, 1, 'CA', 0, 0, 'SUT'),
('CASYD', 'SYDNEY(CA)', '悉尼', 0, 1, 'CA', 0, 0, 'SUT'),
('CATAD', 'TADUSSAC', '塔杜萨克', 0, 1, 'CA', 0, 0, 'SUT'),
('CATHO', 'THOROLD', '索罗尔德', 0, 1, 'CA', 0, 0, 'SUT'),
('CATHR', 'THREE RIVERS', '三河城', 0, 1, 'CA', 0, 0, 'SUT'),
('CATWI', 'TWILLINGATE', '特威林盖特', 0, 1, 'CA', 0, 0, 'SUT'),
('CAVCR', 'VANCOUVER,CANADA', '温哥华', 0, 1, 'CA', 0, 0, 'SUT'),
('CAVIC', 'VICTORIA(CA)', '维多利亚', 0, 1, 'CA', 0, 0, 'SUT'),
('CAWEY', 'WEYMOUTH(CA)', '韦默思', 0, 1, 'CA', 0, 0, 'SUT'),
('CAWOO', 'WOODFIBRE', '伍德菲伯', 0, 1, 'CA', 0, 0, 'SUT'),
('CAYAR', 'YARMOUTH(CA)', '雅茅思', 0, 1, 'CA', 0, 0, 'SUT'),
('CAAKL', 'AKLAVIK', '阿克拉维克', 0, 1, 'CA', 0, 0, 'SUT'),
('CAAMH', 'AMHERSTBURG', '阿默斯特堡', 0, 1, 'CA', 0, 0, 'SUT'),
('CAANN', 'ANNAPOLIS(CA)', '安纳波利斯', 0, 1, 'CA', 0, 0, 'SUT'),
('CAARI', 'ARICHAT', '阿里沙特', 0, 1, 'CA', 0, 0, 'SUT'),
('CAAST', 'AMHERST', '阿默斯特', 0, 1, 'CA', 0, 0, 'SUT'),
('CABAT', 'BATHURST', '巴瑟斯特', 0, 1, 'CA', 0, 0, 'SUT'),
('CABOT', 'BOTWOOD', '博特伍德', 0, 1, 'CA', 0, 0, 'SUT'),
('CABRI', 'BRIDGEWATER', '布里奇沃特', 0, 1, 'CA', 0, 0, 'SUT'),
('CABRO', 'BROCKVILLE(ONT.', '布罗克维尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CABRS', 'BAY ROBERTS', '贝罗伯茨', 0, 1, 'CA', 0, 0, 'SUT'),
('CABUC', 'BUCTOUCHE', '巴克图什', 0, 1, 'CA', 0, 0, 'SUT'),
('CACAM', 'CAMPBELLTON', '坎贝尔顿', 0, 1, 'CA', 0, 0, 'SUT'),
('CACAR', 'CARLETON', '卡尔顿', 0, 1, 'CA', 0, 0, 'SUT'),
('CACHA', 'CHARLOTTETOWN(N', '夏洛特敦', 0, 1, 'CA', 0, 0, 'SUT'),
('CACHE', 'CHEMAINUS', '彻梅纳斯', 0, 1, 'CA', 0, 0, 'SUT'),
('CACHI', 'CHICOUTIMI', '希库提米', 0, 1, 'CA', 0, 0, 'SUT'),
('CACHU', 'CHURCHILL(MAN.)', '丘吉尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CACLA', 'CLARENVILLE', '克拉伦维尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CACMX', 'COMOX', '科莫克斯', 0, 1, 'CA', 0, 0, 'SUT'),
('CACOB', 'COBOURG(ONT.)', '科堡', 0, 1, 'CA', 0, 0, 'SUT'),
('CACOL', 'COLLINGWOOD', '科灵伍德', 0, 1, 'CA', 0, 0, 'SUT'),
('CACON', 'CONTRECOEUR', '孔特勒科尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CACOR', 'CORNWALL(ONT.)', '康沃尔', 0, 1, 'CA', 0, 0, 'SUT'),
('CACQT', 'CARAQUET', '卡拉凯特', 0, 1, 'CA', 0, 0, 'SUT'),
('CACRO', 'CROFTON', '克罗夫顿', 0, 1, 'CA', 0, 0, 'SUT'),
('CACSH', 'CANSO HARBOUR', '坎索港', 0, 1, 'CA', 0, 0, 'SUT'),
('CACTM', 'CHATHAM', '查塔姆', 0, 1, 'CA', 0, 0, 'SUT'),
('CACTP', 'CHETICAMP', '谢蒂坎普', 0, 1, 'CA', 0, 0, 'SUT'),
('CACWB', 'COWICHAN BAY', '科威恰湾', 0, 1, 'CA', 0, 0, 'SUT'),
('CABAB', 'BABBECK', '巴德克', 0, 1, 'CA', 0, 0, 'SUT'),
('CABAJ', 'BAJE COMEAU', '贝科莫', 0, 1, 'CA', 0, 0, 'SUT'),
('CAEDM', 'EDMONTON', '埃德蒙顿', 0, 1, 'CA', 0, 0, 'SUT'),
('CACA', 'CALGARY', '卡达加里', 0, 1, 'CA', 0, 0, 'SUT'),
('CASAS', 'SASKATOON', '', 0, 1, 'CA', 0, 0, 'SUT'),
('CATRO', 'TORONTO', '多伦多', 0, 1, 'CA', 0, 0, 'SUT'),
('ADA', 'TORONTO,CANADA', '多伦多', 0, 1, 'CA', 0, 0, 'SUT'),
('CAWEG', 'WINNIPEG', '温尼伯', 0, 1, 'CA', 0, 0, 'SUT'),
('CAREG', 'REGINA', '里贾那', 0, 1, 'CA', 0, 0, 'SUT'),
('MIL', 'MILTON', '', 0, 1, 'CA', 0, 0, 'SUT'),
('GAL', 'GALGARY', '', 0, 1, 'CA', 0, 0, 'SUT'),
('CLACD', 'ANCUD', '安库德', 0, 1, 'CL', 0, 0, 'SUT'),
('CLANT', 'ANTOFAGASTA', '安托法加斯塔', 0, 1, 'CL', 0, 0, 'SUT'),
('CLARI', 'ARICA', '阿里卡', 0, 1, 'CL', 0, 0, 'SUT'),
('CLCAL', 'CALDERA', '卡尔德拉', 0, 1, 'CL', 0, 0, 'SUT'),
('CLCAS', 'CASTRO', '卡斯特罗', 0, 1, 'CL', 0, 0, 'SUT'),
('CLCCA', 'CAL. CLARENCIA', '克拉伦西亚', 0, 1, 'CL', 0, 0, 'SUT'),
('CLCGR', 'CRUZ GRANDE', '克鲁斯格兰德', 0, 1, 'CL', 0, 0, 'SUT'),
('CLCHL', 'CHANARAL', '查尼亚拉尔', 0, 1, 'CL', 0, 0, 'SUT'),
('CLCLA', 'CALDERILLA', '卡尔德里拉', 0, 1, 'CL', 0, 0, 'SUT'),
('CLCOQ', 'COQUIMBO', '科金博', 0, 1, 'CL', 0, 0, 'SUT'),
('CLCOR', 'CORONEL', '科罗内尔', 0, 1, 'CL', 0, 0, 'SUT'),
('CLCRL', 'CORRAL', '科拉尔', 0, 1, 'CL', 0, 0, 'SUT'),
('CLHUA', 'HUASCO', '瓦斯科', 0, 1, 'CL', 0, 0, 'SUT'),
('CLIQU', 'IQUIQUE', '伊基克', 0, 1, 'CL', 0, 0, 'SUT'),
('CLPAR', 'PUNTA ARENAS', '阿雷纳斯角', 0, 1, 'CL', 0, 0, 'SUT'),
('CLPMO', 'PUERTO MONTT', '蒙特港', 0, 1, 'CL', 0, 0, 'SUT'),
('CLSAN', 'SAN ANTONIO', '圣安东尼奥', 0, 1, 'CL', 0, 0, 'SUT'),
('CLTOC', 'TOCOPILLA', '托科皮亚', 0, 1, 'CL', 0, 0, 'SUT'),
('CLTOM', 'TOME', '托梅', 0, 1, 'CL', 0, 0, 'SUT'),
('CLTTL', 'TALTAL', '塔尔塔尔', 0, 1, 'CL', 0, 0, 'SUT'),
('CLTAL', 'TALCAHUANO', '塔尔卡瓦诺', 0, 1, 'CL', 0, 0, 'SUT'),
('CLVDA', 'VALDIVIA', '瓦尔迪维亚', 0, 1, 'CL', 0, 0, 'SUT'),
('CLVAL', 'VALPARAISO', '瓦尔帕莱索', 0, 1, 'CL', 0, 0, 'SUT'),
('ESLCA', 'LA CALERA', '拉卡莱拉', 0, 1, 'CL', 0, 0, 'SUT'),
('CHCPT', 'CONCEPTION', '', 0, 1, 'CL', 0, 0, 'SUT'),
('AEJAL', 'JEBEL ALI', '阿里山', 0, 1, 'CA', 0, 0, 'SUT'),
('CNDLC', 'DALIAN', '大连', 0, 1, 'CA', 0, 0, 'SUT'),
('CNDXG', 'DALIANXINGANG', '大连新港（区）', 0, 1, 'CA', 0, 0, 'SUT'),
('MOMAC', 'MACAU', '澳门', 0, 1, 'CA', 0, 0, 'SUT'),
('CNSHA', 'SHANGHAI', '上海', 0, 1, 'CA', 0, 0, 'SUT'),
('HKHKG', 'HONG KONG', '香港', 0, 1, 'CA', 0, 0, 'SUT'),
('KEELU', 'KEELUNG', '基隆', 0, 1, 'CA', 0, 0, 'SUT'),
('ASHA', 'SHANGHAI, CHINA', '', 0, 1, 'CA', 0, 0, 'SUT'),
('XGG', 'XINGANG', '', 0, 1, 'CA', 0, 0, 'SUT'),
('COBAR', 'BARRANQUILLA', '巴兰基利亚', 0, 1, 'CO', 0, 0, 'SUT'),
('COBUE', 'BUENA VENTURA', '布韦那文图拉', 0, 1, 'CO', 0, 0, 'SUT'),
('COCOV', 'COVENAS', '科韦尼亚斯', 0, 1, 'CO', 0, 0, 'SUT'),
('COCTA', 'CARTAGENA(CO)', '卡塔赫纳', 0, 1, 'CO', 0, 0, 'SUT'),
('CORHA', 'RIO HACHA', '里奥阿查', 0, 1, 'CO', 0, 0, 'SUT'),
('COSMA', 'SANTA MARTA', '圣玛尔塔', 0, 1, 'CO', 0, 0, 'SUT'),
('COTUM', 'TUMACO', '图马科', 0, 1, 'CO', 0, 0, 'SUT'),
('KMFOM', 'FOMBONI', '丰博尼', 0, 1, 'KM', 0, 0, 'SUT'),
('KMMOR', 'MORONI', '莫罗尼', 0, 1, 'KM', 0, 0, 'SUT'),
('KMMUT', 'MUTSAMUDU', '穆察穆杜', 0, 1, 'KM', 0, 0, 'SUT'),
('KMDZA', 'DZAOUDZI', '藻德济', 0, 1, 'KM', 0, 0, 'SUT'),
('CGPNO', 'POINTE NOIRE(CG', '黑角', 0, 1, 'CG', 0, 0, 'SUT'),
('POINT', 'POINTE NOIRE PORT,CONGO', '', 0, 1, 'CG', 0, 0, 'SUT'),
('CRCAL', 'CALDERA(CR)', '卡尔德拉', 0, 1, 'CR', 0, 0, 'SUT'),
('CRGOL', 'GOLFITO', '戈尔菲托', 0, 1, 'CR', 0, 0, 'SUT'),
('CRPLI', 'PORT LIMON', '利蒙港', 0, 1, 'CR', 0, 0, 'SUT'),
('CRPUN', 'PUNTARENAS', '彭塔雷纳斯', 0, 1, 'CR', 0, 0, 'SUT'),
('CRQUE', 'QUEPOS', '克波斯', 0, 1, 'CR', 0, 0, 'SUT'),
('COERA', 'PUERTO CALDERA', '卡尔德拉', 0, 1, 'CR', 0, 0, 'SUT'),
('COCGO', 'CARTAGO', '卡塔果', 0, 1, 'CR', 0, 0, 'SUT'),
('COMON', 'PUERTO LIMON''', '利蒙港', 0, 1, 'CR', 0, 0, 'SUT'),
('CIABI', 'ABIDJAN', '阿比让', 0, 1, 'CI', 0, 0, 'SUT'),
('CIASS', 'ASSINIE', '阿西尼', 0, 1, 'CI', 0, 0, 'SUT'),
('CIFRE', 'FRESCO', '弗雷斯科', 0, 1, 'CI', 0, 0, 'SUT'),
('CIGBM', 'GRAND BASSAM', '大巴萨姆', 0, 1, 'CI', 0, 0, 'SUT'),
('CISAS', 'SASSANDRA', '萨桑德拉', 0, 1, 'CI', 0, 0, 'SUT'),
('CISPE', 'SAN PEDRO(CI)', '圣佩德罗', 0, 1, 'CI', 0, 0, 'SUT'),
('CITAB', 'TABOU', '塔布', 0, 1, 'CI', 0, 0, 'SUT'),
('HRDBV', 'DUBROVNIK', '杜布罗夫尼克', 0, 1, 'HR', 0, 0, 'SUT'),
('HRPUL', 'PULA', '普拉', 0, 1, 'HR', 0, 0, 'SUT'),
('HRRIJ', 'RIJEKA', '里耶卡', 0, 1, 'HR', 0, 0, 'SUT'),
('HRSPL', 'SPLIT', '斯普利特', 0, 1, 'HR', 0, 0, 'SUT'),
('PLO', 'PLOCE', '普洛切', 0, 1, 'HR', 0, 0, 'SUT'),
('CUANT', 'ANTILLA', '安蒂亚', 0, 1, 'CU', 0, 0, 'SUT'),
('CUBAH', 'BAHIA HONDA', '翁达港', 0, 1, 'CU', 0, 0, 'SUT'),
('CUBAN', 'BANES', '巴内斯', 0, 1, 'CU', 0, 0, 'SUT'),
('CUBAR', 'BARACOA', '巴拉科阿', 0, 1, 'CU', 0, 0, 'SUT'),
('CUBGR', 'BOCA GRANDE(CU)', '博卡格兰德', 0, 1, 'CU', 0, 0, 'SUT'),
('CUBOQ', 'BOQUERON', '博克龙', 0, 1, 'CU', 0, 0, 'SUT'),
('CUCAB', 'CABANAS', '卡瓦尼亚斯', 0, 1, 'CU', 0, 0, 'SUT'),
('CUCAI', 'CAIBARIEN', '凯巴连', 0, 1, 'CU', 0, 0, 'SUT'),
('CUCAR', 'CARDENAS', '卡德纳斯', 0, 1, 'CU', 0, 0, 'SUT'),
('CUCAS', 'CASILDA', '卡西尔达', 0, 1, 'CU', 0, 0, 'SUT'),
('CUCIE', 'CIENFUEGOS', '西恩富戈斯', 0, 1, 'CU', 0, 0, 'SUT'),
('CUCMA', 'CAIMANERA', '凯马勒那', 0, 1, 'CU', 0, 0, 'SUT'),
('CUGUA', 'GUAYABAL', '瓜亚瓦尔', 0, 1, 'CU', 0, 0, 'SUT'),
('CUHAV', 'HAVANA', '哈瓦那', 0, 1, 'CU', 0, 0, 'SUT'),
('CUISA', 'ISABELA(CU)', '伊萨贝拉', 0, 1, 'CU', 0, 0, 'SUT'),
('CUJUC', 'JUCARO', '胡卡罗', 0, 1, 'CU', 0, 0, 'SUT'),
('CUMAN', 'MANZANILLO(CU)', '曼萨尼略', 0, 1, 'CU', 0, 0, 'SUT'),
('CUMAR', 'MARIEL', '马里埃尔', 0, 1, 'CU', 0, 0, 'SUT'),
('CUMAT', 'MATANZAS(CU)', '马坦萨斯', 0, 1, 'CU', 0, 0, 'SUT'),
('CUMLA', 'MANOPLA', '马诺普拉', 0, 1, 'CU', 0, 0, 'SUT'),
('CUMLU', 'MEDIA LUNA', '梅迪亚卢纳', 0, 1, 'CU', 0, 0, 'SUT'),
('CUMOA', 'MOA', '莫阿', 0, 1, 'CU', 0, 0, 'SUT'),
('CUMTI', 'MANATI', '马纳蒂', 0, 1, 'CU', 0, 0, 'SUT'),
('CUNGA', 'NUEVA GERONA', '新赫罗纳', 0, 1, 'CU', 0, 0, 'SUT'),
('CUNIC', 'NICARO', '尼卡罗', 0, 1, 'CU', 0, 0, 'SUT'),
('CUNIQ', 'NIQUERO', '尼克罗', 0, 1, 'CU', 0, 0, 'SUT'),
('CUPLN', 'PILON', '皮隆', 0, 1, 'CU', 0, 0, 'SUT'),
('CUPRE', 'PRESTON(CU)', '普雷斯顿', 0, 1, 'CU', 0, 0, 'SUT'),
('CUSAG', 'SAGUALA GRANDE', '大萨瓜', 0, 1, 'CU', 0, 0, 'SUT'),
('CUSCS', 'SANTA CRUZ DEL', '南圣克鲁斯', 0, 1, 'CU', 0, 0, 'SUT'),
('CUSGO', 'SANTIAGO', '圣地亚哥', 0, 1, 'CU', 0, 0, 'SUT'),
('CUSLU', 'SANTA LUCIA', '圣卢西亚', 0, 1, 'CU', 0, 0, 'SUT'),
('CUTDZ', 'TUNAS DE ZAZA', '图纳斯德萨萨', 0, 1, 'CU', 0, 0, 'SUT'),
('CUNUE', 'NUEVITAS', '努埃维塔斯', 0, 1, 'CY', 0, 0, 'SUT'),
('CUPPA', 'PUERTO PADRE', '帕德雷港', 0, 1, 'CY', 0, 0, 'SUT'),
('CYAKR', 'AKROTIRI', '阿克罗蒂里', 0, 1, 'CY', 0, 0, 'SUT'),
('CYFAM', 'FAMAGUSTA', '法马古斯塔', 0, 1, 'CY', 0, 0, 'SUT'),
('CYKYR', 'KYRENIA', '凯里尼亚', 0, 1, 'CY', 0, 0, 'SUT'),
('CYLAR', 'LARNACA', '拉纳卡', 0, 1, 'CY', 0, 0, 'SUT'),
('CYLIM', 'LIMASSOL', '利马索尔', 0, 1, 'CY', 0, 0, 'SUT'),
('CYPPS', 'PAPHOS', '佩福斯', 0, 1, 'CY', 0, 0, 'SUT'),
('CYVAB', 'Vassiliko Bay', '瓦西利科湾', 0, 1, 'CY', 0, 0, 'SUT'),
('CZBRN', 'BRNO', '布尔诺', 0, 1, 'CZ', 0, 0, 'SUT'),
('CZPRA', 'PRAHA', '布拉格', 0, 1, 'CZ', 0, 0, 'SUT'),
('CZPLZ', 'PLZEN', '比尔森', 0, 1, 'CZ', 0, 0, 'SUT'),
('CZBMO', 'BMO', '毕莫', 0, 1, 'CZ', 0, 0, 'SUT'),
('CZOST', 'OSTRAVA', '奥斯萃瓦', 0, 1, 'CZ', 0, 0, 'SUT'),
('CZPAR', 'PARGUE', '', 0, 1, 'CZ', 0, 0, 'SUT'),
('CZPUE', 'PRAGUE', '', 0, 1, 'CZ', 0, 0, 'SUT'),
('CZPIZ', 'PIZEN', '', 0, 1, 'CZ', 0, 0, 'SUT'),
('KPCJN', 'CHONGJIN', '清津', 0, 1, 'KP', 0, 0, 'SUT'),
('KPHAE', 'HAEJU', '海州', 0, 1, 'KP', 0, 0, 'SUT'),
('KPHUN', 'HUNGNAM', '兴南', 0, 1, 'KP', 0, 0, 'SUT'),
('KPCHI', 'NAMPO', '镇南浦', 0, 1, 'KP', 0, 0, 'SUT'),
('KPRAJ', 'RAJIN', '罗津', 0, 1, 'KP', 0, 0, 'SUT'),
('KPSON', 'SONGRIM', '松林', 0, 1, 'KP', 0, 0, 'SUT'),
('KPUNG', 'UNGGI', '雄基', 0, 1, 'KP', 0, 0, 'SUT'),
('KPWON', 'WONSAN', '元山', 0, 1, 'KP', 0, 0, 'SUT'),
('DKHOL', 'HOLBAEK', '霍尔拜克', 0, 1, 'DK', 0, 0, 'SUT'),
('DKHOR', 'HORSENS', '霍森斯', 0, 1, 'DK', 0, 0, 'SUT'),
('DKHSD', 'HADSUND', '海松', 0, 1, 'DK', 0, 0, 'SUT'),
('DKHSV', 'HADERSLEV', '哈泽斯莱乌', 0, 1, 'DK', 0, 0, 'SUT'),
('DKKAL', 'KALUNDBORG', '凯隆堡', 0, 1, 'DK', 0, 0, 'SUT'),
('DKKAR', 'KARREBAEKSMINDE', '卡勒拜克斯明讷', 0, 1, 'DK', 0, 0, 'SUT'),
('DKKOG', 'KOGE', '克厄', 0, 1, 'DK', 0, 0, 'SUT'),
('DKKOL', 'KOLDING', '科灵', 0, 1, 'DK', 0, 0, 'SUT'),
('DKKOR', 'KORSOR', '科瑟', 0, 1, 'DK', 0, 0, 'SUT'),
('DKKYN', 'KYNDBY', '金比', 0, 1, 'DK', 0, 0, 'SUT'),
('DKLEM', 'LEMVIG', '莱姆维', 0, 1, 'DK', 0, 0, 'SUT'),
('DKMAR', 'MARIAGER', '玛丽艾厄', 0, 1, 'DK', 0, 0, 'SUT'),
('DKMID', 'MIDDELFART', '米泽尔法特', 0, 1, 'DK', 0, 0, 'SUT'),
('DKNAE', 'NAESTVED', '奈斯特韦兹', 0, 1, 'DK', 0, 0, 'SUT'),
('DKNKV', 'NAKSKOV', '纳克斯考', 0, 1, 'DK', 0, 0, 'SUT'),
('DKNYB', 'NYBORG', '尼堡', 0, 1, 'DK', 0, 0, 'SUT'),
('DKODE', 'ODENSE', '欧登塞', 0, 1, 'DK', 0, 0, 'SUT'),
('DKRAN', 'RANDERS', '兰讷斯', 0, 1, 'DK', 0, 0, 'SUT'),
('DKROD', 'RODBYHAVN', '勒兹比港', 0, 1, 'DK', 0, 0, 'SUT'),
('DKRUD', 'RUDKOBING', '鲁兹克宾', 0, 1, 'DK', 0, 0, 'SUT'),
('DKSAK', 'SAKSKOBING', '萨克斯克宾', 0, 1, 'DK', 0, 0, 'SUT'),
('DKSKI', 'SKIVE', '斯基沃', 0, 1, 'DK', 0, 0, 'SUT'),
('DKSKN', 'SKAGEN', '斯卡恩', 0, 1, 'DK', 0, 0, 'SUT'),
('DKSON', 'SONDERBORG', '桑德堡', 0, 1, 'DK', 0, 0, 'SUT'),
('DKSTE', 'STEGE', '斯泰厄', 0, 1, 'DK', 0, 0, 'SUT'),
('DKSTU', 'STUBBEKOBING', '斯图伯克宾', 0, 1, 'DK', 0, 0, 'SUT'),
('DKSVA', 'SVANEKE', '斯瓦讷克', 0, 1, 'DK', 0, 0, 'SUT'),
('DKSVE', 'SVENDBORG', '斯文堡', 0, 1, 'DK', 0, 0, 'SUT'),
('DKVEJ', 'VEJLE', '瓦埃勒', 0, 1, 'DK', 0, 0, 'SUT'),
('DKVOR', 'VORDINGBORG', '沃尔丁堡', 0, 1, 'DK', 0, 0, 'SUT'),
('DMPOR', 'PORTSMOUTH(DM)', '朴次茅斯', 0, 1, 'DK', 0, 0, 'SUT'),
('DKAER', 'AEROSKOBING', '埃勒斯克平', 0, 1, 'DK', 0, 0, 'SUT'),
('DKAHS', 'AARHUS', '奥尔胡斯', 0, 1, 'DK', 0, 0, 'SUT'),
('DKBHM', 'BANDHOLM', '班霍尔姆', 0, 1, 'DK', 0, 0, 'SUT'),
('DKBOG', 'BOGENSE', '博恩瑟', 0, 1, 'DK', 0, 0, 'SUT'),
('DKCOP', 'COPENHAGEN', '哥本哈根', 0, 1, 'DK', 0, 0, 'SUT'),
('DKALL', 'ALLINGE', '阿灵厄', 0, 1, 'DK', 0, 0, 'SUT'),
('DKASS', 'ASSENS', '阿森斯', 0, 1, 'DK', 0, 0, 'SUT'),
('DKFLS', 'FAKSE LADEPLADS', '法克瑟莱泽普拉斯', 0, 1, 'DK', 0, 0, 'SUT'),
('DKFRE', 'FREDERICIA', '腓特烈西亚', 0, 1, 'DK', 0, 0, 'SUT'),
('DKFSD', 'FREDERIKSSUND', '腓特烈松', 0, 1, 'DK', 0, 0, 'SUT'),
('DKFSK', 'FREDERIKSVARK', '腓特烈斯韦克', 0, 1, 'DK', 0, 0, 'SUT'),
('DKFSN', 'FREDERIKSHAVN', '腓特烈港', 0, 1, 'DK', 0, 0, 'SUT'),
('DKESB', 'ESBJERG', '埃斯比约', 0, 1, 'DK', 0, 0, 'SUT'),
('DKETD', 'ENSTED', '恩斯坦达', 0, 1, 'DK', 0, 0, 'SUT'),
('DKFAA', 'FAABORG', '福堡', 0, 1, 'DK', 0, 0, 'SUT'),
('DKEBE', 'EBELTOFT', '埃伯尔措夫特', 0, 1, 'DK', 0, 0, 'SUT'),
('DKGUL', 'GULFHAVN', '基尔夫港', 0, 1, 'DK', 0, 0, 'SUT'),
('DKHAS', 'HASLE', '海斯勒', 0, 1, 'DK', 0, 0, 'SUT'),
('DKHIR', 'HIRTSHALS', '希茨海尔斯', 0, 1, 'DK', 0, 0, 'SUT'),
('DKGRE', 'GRENAA', '格雷诺', 0, 1, 'DK', 0, 0, 'SUT'),
('DKHOB', 'HOBRO', '霍布罗', 0, 1, 'DK', 0, 0, 'SUT'),
('DEARH', 'ARHUS', '奥尔胡斯', 0, 1, 'DK', 0, 0, 'SUT'),
('DEAAL', 'AALBORG', '阿尔堡', 0, 1, 'DK', 0, 0, 'SUT'),
('ALB', 'ALBORG', '奥尔堡', 0, 1, 'DK', 0, 0, 'SUT'),
('DMROS', 'ROSEAU', '罗索', 0, 1, 'DM', 0, 0, 'SUT'),
('DOBAR', 'BARAHONA', '巴拉奥纳', 0, 1, 'DM', 0, 0, 'SUT'),
('DOLRO', 'LA ROMANA', '拉罗马纳', 0, 1, 'DM', 0, 0, 'SUT'),
('DOMAN', 'MANZANILLO(DO)', '曼萨尼约', 0, 1, 'DM', 0, 0, 'SUT'),
('DOPPL', 'PUERTO PLATA', '普拉塔港', 0, 1, 'DM', 0, 0, 'SUT'),
('DORHA', 'RIO HAINA', '海纳', 0, 1, 'DM', 0, 0, 'SUT'),
('DOSAM', 'SAMANA', '萨马纳', 0, 1, 'DM', 0, 0, 'SUT'),
('DOSCZ', 'SANCHEZ', '桑切斯', 0, 1, 'DM', 0, 0, 'SUT'),
('DOSDO', 'SANTO DOMINGO', '圣多明各', 0, 1, 'DM', 0, 0, 'SUT'),
('DOSPM', 'SAN PEDRO DE MA', '圣佩得罗德马科里斯', 0, 1, 'DM', 0, 0, 'SUT'),
('DOHAI', 'HAINA', '海纳', 0, 1, 'DM', 0, 0, 'SUT'),
('ECESM', 'ESMERALDAS', '埃斯梅拉达斯', 0, 1, 'EC', 0, 0, 'SUT'),
('ECGYL', 'GUAYAQUIL', '瓜亚基尔', 0, 1, 'EC', 0, 0, 'SUT'),
('ECMTA', 'MANTA', '曼塔', 0, 1, 'EC', 0, 0, 'SUT'),
('AOPAL', 'PORTO ALEXANDRE', '亚历山大港', 0, 1, 'EG', 0, 0, 'SUT'),
('GRALE', 'ALEXANDROUPOLIS', '亚历山德鲁波利斯', 0, 1, 'EG', 0, 0, 'SUT'),
('GRAST', 'ASTAKOS', '阿斯塔科斯', 0, 1, 'EG', 0, 0, 'SUT'),
('EGABZ', 'ABU ZENIMA', '阿布宰尼迈', 0, 1, 'EG', 0, 0, 'SUT'),
('EGADA', 'ADABIYA', '阿代比耶', 0, 1, 'EG', 0, 0, 'SUT'),
('EGALE', 'ALEXANDRIA(EG)', '亚历山德里亚', 0, 1, 'EG', 0, 0, 'SUT'),
('EGDAM', 'DAMIETTA', '杜姆亚特', 0, 1, 'EG', 0, 0, 'SUT'),
('EGKOS', 'KOSSEIR', '库赛尔', 0, 1, 'EG', 0, 0, 'SUT'),
('EGPSA', 'PORT SAID', '塞得港', 0, 1, 'EG', 0, 0, 'SUT'),
('EGSAF', 'SAFAGA', '萨法贾', 0, 1, 'EG', 0, 0, 'SUT'),
('EGSUE', 'SUEZ', '苏伊士', 0, 1, 'EG', 0, 0, 'SUT'),
('EGPSU', 'PORT SUEZ', '苏伊士', 0, 1, 'EG', 0, 0, 'SUT'),
('ADDA', 'ADDABIA PORT', '', 0, 1, 'EG', 0, 0, 'SUT'),
('SOK', 'SOKHNA', '索科哈纳', 0, 1, 'EG', 0, 0, 'SUT'),
('SVACA', 'ACAJUTLA', '阿卡胡特拉', 0, 1, 'SV', 0, 0, 'SUT'),
('SVCUT', 'CUTUCO', '库图科', 0, 1, 'SV', 0, 0, 'SUT'),
('SVLLI', 'LA LIBERTAD(SV)', '拉利贝塔德', 0, 1, 'SV', 0, 0, 'SUT'),
('SVLUN', 'LA UNION(SV)', '拉乌尼翁', 0, 1, 'SV', 0, 0, 'SUT'),
('CAPRR', 'PRINCE RUPERT', '鲁珀特港', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSTO', 'STOCKTON(GB)', '斯托克顿', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSTR', 'STROMNESS', '斯特罗姆内斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSUB', 'SUTTON BRIDGE', '萨顿布里奇', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSWH', 'SANDWICH', '桑德威奇', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSWY', 'STORNOWAY', '斯托诺韦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTAR', 'TARBERT', '塔伯特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSUN', 'SUNDERLAND', '森德兰', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSWA', 'SWANSEA', '斯旺西', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTOT', 'TOTNES', '托特尼斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTRO', 'TROON', '特伦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTRU', 'TRURO', '特鲁罗', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTYD', 'TYNE DOCK', '太恩港', 0, 1, 'GB', 0, 0, 'SUT'),
('GBULL', 'ULLAPOOL', '阿勒浦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWAR', 'WARKWORTH', '沃克沃思', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWAT', 'WATCHET', '沃切特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWBY', 'WHITBY', '惠特比', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWES', 'WESTRAY', '韦斯特雷', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWEY', 'WEYMOUTH(GB)', '韦茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTEI', 'TEIGNMOUTH', '廷茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTHS', 'TMAMES HAVEN', '', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTHU', 'THURSO', '瑟索', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTBY', 'TENBY', '滕比', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTOB', 'TOBERMORY', '托伯莫里', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTOP', 'TOPSHAM', '托普瑟姆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTOR', 'TROQUAY', '托基', 0, 1, 'GB', 0, 0, 'SUT'),
('GBTIL', 'TILBURY', '蒂尔伯里', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWHI', 'WHITSTABLE', '惠特斯特布尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWHN', 'WHITEHAVEN', '怀特黑文', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWIC', 'WICK(SCOT)', '威克', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWIS', 'WISBECH', '威斯贝奇', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWLS', 'WELLS', '韦尔斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWOR', 'WORKINGTON', '沃金顿', 0, 1, 'GB', 0, 0, 'SUT'),
('GBWRP', 'WARREN POINT', '沃伦波因特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBYAR', 'YARMOUTH(GB)', '雅茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBABN', 'ABERDEEN(GB)', '阿伯丁', 0, 1, 'GB', 0, 0, 'SUT'),
('GBABR', 'ABERDOUR', '阿伯道尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBABY', 'ABERDOVEY', '阿伯多维', 0, 1, 'GB', 0, 0, 'SUT'),
('GBAGS', 'ARDGLASS', '阿德格拉斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBALD', 'ALDERNEY', '奥尔德尼', 0, 1, 'GB', 0, 0, 'SUT'),
('GBAML', 'AMLWCH', '阿姆卢赫', 0, 1, 'GB', 0, 0, 'SUT'),
('GBANG', 'ANNALONG', '安纳隆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBANN', 'ANNAN', '安嫩', 0, 1, 'GB', 0, 0, 'SUT'),
('GBANS', 'ANSTRUTHER', '安斯特拉瑟', 0, 1, 'GB', 0, 0, 'SUT'),
('GBAPP', 'APPLEDORE', '阿普尔多尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBARG', 'ARDRISHAIG', '阿德里希格', 0, 1, 'GB', 0, 0, 'SUT'),
('GBARN', 'ARDROSSAN(GB)', '阿德罗森', 0, 1, 'GB', 0, 0, 'SUT'),
('GBAVO', 'AVONMOUTH', '埃文茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBAYR', 'AYR', '艾尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBAE', 'BARNSTAPIE', '巴恩斯特珀尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBAN', 'BANGOR(CO.DOWN)', '班戈', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBGR', 'BANGOR(CAER.)', '班戈', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBHD', 'BURGHEAD', '伯格黑德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBEL', 'BELFAST(GB)', '贝尔法斯特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBOS', 'BOSTON(GB)', '波士顿', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBPT', 'BRIDPORT', '布里德波特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBRD', 'BROMBOROUGH DOC', '布朗巴勒', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBRI', 'BRIGHTLINGSEA', '布赖特灵西', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBRN', 'BRIGHTON(GB)', '布赖顿', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBRW', 'BARROW-IN-FURNESS(GB)', '巴罗-因-弗内斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBLN', 'BRIDLINGTON', '布里德灵顿', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBLY', 'BLYTH', '布莱斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBMS', 'BEAUMARIS', '博马里斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBID', 'BIDEFORD', '比迪福德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBRY', 'BARRY', '巴里', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBTH', 'BARMOUTH', '巴尔默斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBTL', 'BRISTOL', '布里斯托尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBUC', 'BUCKIE', '巴基', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBXM', 'BRIXHAM', '布里克瑟姆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCAE', 'CAERNARFON', '卡那封', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCAM', 'CAMPBELTOWN', '坎贝尔敦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBWR', 'BRIDGWATER', '布里奇沃特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCOE', 'COLERAINE', '科尔雷恩', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCOL', 'COLCHESTER', '科尔切斯特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCOQ', 'CONNAH''S QUAY', '康纳斯基', 0, 1, 'GB', 0, 0, 'SUT');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('GBCOR', 'CORPACH', '科珀赫', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCOS', 'COWES', '考斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCAR', 'CARRICKFERGUS', '卡里克弗格斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCAS', 'CASTLETOWN', '卡斯尔敦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCDF', 'CARDIFF', '加的夫', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCHA', 'CHARLESTOWN(GB)', '查尔斯敦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCRO', 'CROMARTY', '克罗默蒂', 0, 1, 'GB', 0, 0, 'SUT'),
('GBDAR', 'DARTMOUTH', '达特茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBDBR', 'DUNBAR', '邓巴', 0, 1, 'GB', 0, 0, 'SUT'),
('GBDDE', 'DUNDEE', '邓迪', 0, 1, 'GB', 0, 0, 'SUT'),
('GBDIN', 'DINGWALL(GB)', '丁沃尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBDOU', 'DOUGLAS', '道格拉斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBDOV', 'DOVER', '多佛', 0, 1, 'GB', 0, 0, 'SUT'),
('GBDRM', 'DUNDRUM', '邓德拉姆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBDUM', 'DUMFRIES', '邓弗里斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBDUN', 'DUNOON', '达农', 0, 1, 'GB', 0, 0, 'SUT'),
('BHX', 'BIRMINGHAM', '伯明翰', 0, 1, 'GB', 0, 0, 'SUT'),
('GBDAG', 'DAGENHAM', '带根纳姆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLEE', 'LEEDS', '利兹', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMOS', 'MOSTYN', '莫斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBNEW', 'NEWPORT(GB)', '纽波特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBNHN', 'NEWHAVEN', '纽黑文', 0, 1, 'GB', 0, 0, 'SUT'),
('GBNLN', 'NEWLYN', '纽林', 0, 1, 'GB', 0, 0, 'SUT'),
('GBNOR', 'NORWICH', '诺里奇', 0, 1, 'GB', 0, 0, 'SUT'),
('GBNRY', 'NEWRY', '纽里', 0, 1, 'GB', 0, 0, 'SUT'),
('GBNSU', 'N. SUNDERLAND', '北森德兰', 0, 1, 'GB', 0, 0, 'SUT'),
('GBNBH', 'NEWBURGH', '纽堡', 0, 1, 'GB', 0, 0, 'SUT'),
('GBNCE', 'NEWCASTLE(GB)', '纽卡斯尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBNEA', 'NEATH', '尼思', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMTL', 'METHIL', '梅西尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBOBN', 'OBAN', '奥本', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPAD', 'PADSTOW', '帕德斯托', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPAS', 'PORT ASKAIOG', '阿美凯格皮尔港', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPEL', 'PORT ELLEN', '埃伦港', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPLY', 'PLYMOUTH(GB)', '普利茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPMR', 'PENMAENMAWR', '彭迈恩毛尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPOO', 'POOLE', '普尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPRE', 'PRESTON(GB)', '普雷斯顿', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPRH', 'PORTRUSH', '波特拉什', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPRN', 'PENRYN', '彭林', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPEN', 'PENZANCE', '彭赞斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPER', 'PERTH(GB)', '珀斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPET', 'PETERHEAD', '彼得黑德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPLD', 'PORTLAND(GB)', '波特兰', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPTA', 'PORT TALBOT', '塔尔伯特港', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPTE', 'PORTREE', '波特里', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPTH', 'PORTSMOUTH(GB)', '泼次茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPWI', 'PORT WILLIAM', '威廉港', 0, 1, 'GB', 0, 0, 'SUT'),
('GBPWL', 'PWLLHELI', '普尔黑利', 0, 1, 'GB', 0, 0, 'SUT'),
('GBQSY', 'QUEENSFERRY', '昆斯费里', 0, 1, 'GB', 0, 0, 'SUT'),
('GBRAM', 'RAMSGATE', '拉姆斯盖特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBRHM', 'RAINHAM', '雷汉姆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBRHY', 'RHYL', '里尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBROC', 'ROCHESTER(GB)', '罗切斯特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBROS', 'ROSYTH', '罗赛斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBROT', 'ROTHESAY', '罗斯西', 0, 1, 'GB', 0, 0, 'SUT'),
('GBRUN', 'RUNCORN', '朗科恩', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSCA', 'SCARBOROUGH(GB)', '斯卡伯勒', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSCR', 'SCRABSTER', '斯克拉布斯特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSED', 'SOUTHEND', '绍森德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSFD', 'STRANGFORD', '斯特兰福德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSHE', 'ST. HELIER', '圣赫利尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSHM', 'SEAHAM HARBOUR', '锡厄姆港', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSHO', 'SHOREHAM', '肖勒姆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSIV', 'ST. IVES', '圣艾夫斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSLY', 'SCALLOWAY', '斯卡洛韦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSMH', 'ST. MARGARET''S', '圣马格丽茨贝', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSNS', 'SHEERNESS', '希尔内斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSOU', 'SOUTHAMPTON', '南安普顿', 0, 1, 'GB', 0, 0, 'SUT'),
('GBSPP', 'ST. PETER PORT', '圣彼德港', 0, 1, 'GB', 0, 0, 'SUT'),
('GRDRA', 'DRAPETZONA', '德拉佩特佐拉', 0, 1, 'GB', 0, 0, 'SUT'),
('GBELP', 'ELLESMERE PORT', '埃尔斯米尔港', 0, 1, 'GB', 0, 0, 'SUT'),
('GBEXE', 'EXETER', '埃克塞特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBEXM', 'EXMOUTH', '埃克斯茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBEYE', 'EYEMOUTH', '艾茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBFAL', 'FALMOUTH(GB)', '法尔茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBFAW', 'FAWLEY', '福利', 0, 1, 'GB', 0, 0, 'SUT'),
('GBFEL', 'FELIXSTOWE', '弗利克斯托', 0, 1, 'GB', 0, 0, 'SUT'),
('GBFIN', 'FINNART', '芬纳特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBFIS', 'FISHGUARD', '菲什加德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBFLE', 'FLEETWOOD', '弗利特伍德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBFOL', 'FOLKESTONE', '福克斯通', 0, 1, 'GB', 0, 0, 'SUT'),
('GBFOW', 'FOWEY', '福伊', 0, 1, 'GB', 0, 0, 'SUT'),
('GBFRA', 'FRASERBURGH', '弗雷泽堡', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGAI', 'GAINSBOROUGH', '盖恩斯伯勒', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGAN', 'GARLIESTON', '加利斯敦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGAR', 'GARSTON', '加斯顿', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGIR', 'GIRVAN', '格文', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGLA', 'GLASGOW', '格拉斯哥', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGLE', 'GLENARM', '格莱纳姆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGLO', 'GLOUCESTER(GB)', '格洛斯特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGNK', 'GREENOCK', '格里诺克', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGNW', 'GUNNESS WHARF', '冈纳斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGOO', 'GOOLE', '古尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGRA', 'GRANGEMOUTH', '格兰奇茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGRI', 'GRIMSBY', '格里姆斯比', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGRK', 'GOUROCK', '古罗克', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGSD', 'GRAVESEND', '格雷夫森德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBGYA', 'GREAT YARMOUTH', '大雅茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBHAR', 'HARWICH', '哈里奇', 0, 1, 'GB', 0, 0, 'SUT'),
('GBHAY', 'HAYLE', '海尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBHOL', 'HOLYHEAD', '霍利黑德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBINV', 'INVERGORDON', '因弗戈登', 0, 1, 'GB', 0, 0, 'SUT'),
('GBIOG', 'ISLE OF GRAIN', '谷岛', 0, 1, 'GB', 0, 0, 'SUT'),
('GBIPS', 'IPSWICH', '伊普斯威奇', 0, 1, 'GB', 0, 0, 'SUT'),
('GBIRV', 'IRVINE', '欧文', 0, 1, 'GB', 0, 0, 'SUT'),
('GBIVS', 'INVERNESS', '因弗内斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBHPL', 'HARTLEPOOL', '哈特尔浦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBHUL', 'HULL', '赫尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBIMM', 'IMMINGHAM', '伊明赫姆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBKIL', 'KILLINGHOLME', '基林霍尔姆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBKIR', 'KIRKCALDY', '柯科迪', 0, 1, 'GB', 0, 0, 'SUT'),
('GBKOL', 'KYLE OF LOCHALS', '洛哈尔什教区凯尔', 0, 1, 'GB', 0, 0, 'SUT'),
('GBKSL', 'KING''S LYNN', '金斯林', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLAN', 'LANCASTER', '兰开斯特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLDY', 'LONDONDERRY', '伦敦德里', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLEI', 'LEITH', '利斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLOS', 'LOSSIEMOUTH', '洛西茅斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLOW', 'LOWESTOFT', '洛斯托夫特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLWK', 'LERWICK', '勒威克', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLYB', 'LYBSTER', '利布斯特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLYD', 'LYDNEY', '利德尼', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMAC', 'MACDUFF', '麦克达夫', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMAL', 'MALDON', '莫尔登', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMAN', 'MANCHESTER', '曼彻斯特', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMEV', 'MEVAGISSEY', '梅瓦吉西', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMID', 'MIDDLESBROUGH', '米德尔斯伯勒', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMIH', 'MILFORD HAVEN', '米尔福德港', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLMA', 'LOCH MADDY', '洛赫马迪', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLNE', 'LARNE', '拉恩', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLOE', 'LOOE', '卢港', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLON', 'LONDON', '伦敦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLOP', 'LOCHALINE PIER', '洛哈林', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLGS', 'LARGS', '拉格斯', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLIT', 'LITTLEHAMPTON', '利特尔汉普顿', 0, 1, 'GB', 0, 0, 'SUT'),
('GBLIV', 'LIVERPOOL(GB)', '利物浦', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMIN', 'MINEHEAD', '迈恩黑德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMIS', 'MISTLEY', '米斯特利', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMLG', 'MALLAIG', '马莱格', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMLM', 'MILLOM', '米勒姆', 0, 1, 'GB', 0, 0, 'SUT'),
('GBMON', 'MONTROSE', '蒙特罗斯', 0, 1, 'GB', 0, 0, 'SUT'),
('ENAR', 'ARDGLASS', '阿德格拉斯', 0, 1, 'GB', 0, 0, 'SUT'),
('ENARD', 'ARDRISHAIG', '阿德里希格', 0, 1, 'GB', 0, 0, 'SUT'),
('ENARR', 'ARDROSSAN', '阿德罗森', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBU', 'BUDE', '布德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBCA', 'CARNLOUGH', '卡恩拉夫', 0, 1, 'GB', 0, 0, 'SUT'),
('ENBUR', 'BURNIEY', '伯利', 0, 1, 'GB', 0, 0, 'SUT'),
('ENCHA', 'CHADDERTON', '查得顿', 0, 1, 'GB', 0, 0, 'SUT'),
('ENCAD', 'CADIFF', '加的夫', 0, 1, 'GB', 0, 0, 'SUT'),
('ENEDI', 'EDINBURGH', '爱丁堡', 0, 1, 'GB', 0, 0, 'SUT'),
('GBBRA', 'BRADFORD', '布拉德福德', 0, 1, 'GB', 0, 0, 'SUT'),
('GBJAR', 'JARROW', '', 0, 1, 'GB', 0, 0, 'SUT'),
('ENLEI', 'LEICESTER', '列斯特', 0, 1, 'GB', 0, 0, 'SUT'),
('ENNOT', 'NOTTINGHAM', '诺丁汉', 0, 1, 'GB', 0, 0, 'SUT'),
('ENYOR', 'YORK', '纽克', 0, 1, 'GB', 0, 0, 'SUT'),
('ENWIG', 'WIGAM', '维加', 0, 1, 'GB', 0, 0, 'SUT'),
('ENTHA', 'THAMES', '', 0, 1, 'GB', 0, 0, 'SUT'),
('UKABE', 'ABERDEEN', '阿伯丁', 0, 1, 'GB', 0, 0, 'SUT'),
('ENLAN', 'LANARK', '拉纳克', 0, 1, 'GB', 0, 0, 'SUT'),
('ENSHE', 'SHEFFIELD', '谢菲尔德', 0, 1, 'GB', 0, 0, 'SUT'),
('ENYIL', 'TILBURY', '蒂尔伯利', 0, 1, 'GB', 0, 0, 'SUT'),
('ENOLD', 'OLDHAM', '奥尔德姆', 0, 1, 'GB', 0, 0, 'SUT'),
('PCMS', 'PORT SMOUTH', '朴次矛斯', 0, 1, 'GB', 0, 0, 'SUT'),
('ROTH', 'ROTHERHAM', '', 0, 1, 'GB', 0, 0, 'SUT'),
('SAL', 'ST.ALBANS', '', 0, 1, 'GB', 0, 0, 'SUT'),
('GQBAT', 'BATA', '巴塔', 0, 1, 'GQ', 0, 0, 'SUT'),
('ESTIN', 'TALLIN', '塔林', 0, 1, 'ES', 0, 0, 'SUT'),
('ETASB', 'ASSAB', '阿萨布', 0, 1, 'ET', 0, 0, 'SUT'),
('ETMAS', 'MASSAWA', '马萨瓦', 0, 1, 'ET', 0, 0, 'SUT'),
('ADD', 'ADDIS ABABA', '亚的斯阿贝巴', 0, 1, 'ET', 0, 0, 'SUT'),
('FOKLA', 'KLAKSVIG', '克拉克斯维克', 0, 1, 'FO', 0, 0, 'SUT'),
('FOTHO', 'THORSHAVN', '托尔斯港', 0, 1, 'FO', 0, 0, 'SUT'),
('FOTVO', 'TVOROYRI', '特瓦罗伊里', 0, 1, 'FO', 0, 0, 'SUT'),
('FOVES', 'VESTMANHAVN', '韦斯特门港', 0, 1, 'FO', 0, 0, 'SUT'),
('FJELL', 'ELLINGTON', '埃灵顿', 0, 1, 'FJ', 0, 0, 'SUT'),
('FJLAU', 'LAUTOKA', '劳托卡', 0, 1, 'FJ', 0, 0, 'SUT'),
('FJLEV', 'LEVUKA', '累武卡', 0, 1, 'FJ', 0, 0, 'SUT'),
('FJSUV', 'SUVA', '苏瓦', 0, 1, 'FJ', 0, 0, 'SUT'),
('FJSVB', 'SAVUSAVU BAY', '萨武萨武湾', 0, 1, 'FJ', 0, 0, 'SUT'),
('FIDL', 'DLLINGTON', '埃林顿', 0, 1, 'FJ', 0, 0, 'SUT'),
('NLHAN', 'HANSWEERT', '汉斯韦尔特', 0, 1, 'FI', 0, 0, 'SUT'),
('FIHAM', 'HAMINA', '哈米纳', 0, 1, 'FI', 0, 0, 'SUT'),
('FIHAN', 'HANKO', '汉科', 0, 1, 'FI', 0, 0, 'SUT'),
('FIHEL', 'HELSINKI', '赫尔辛基', 0, 1, 'FI', 0, 0, 'SUT'),
('FIKEM', 'KEMI', '凯米', 0, 1, 'FI', 0, 0, 'SUT'),
('FIKOK', 'KOKKOLA', '科科拉', 0, 1, 'FI', 0, 0, 'SUT'),
('FIKOT', 'KOTKA', '科特卡', 0, 1, 'FI', 0, 0, 'SUT'),
('FIKRI', 'KRISTIINA', '克里斯蒂纳', 0, 1, 'FI', 0, 0, 'SUT'),
('FILOV', 'LOVIISA', '洛维萨', 0, 1, 'FI', 0, 0, 'SUT'),
('FIMAR', 'MARIEHAMN', '玛丽港', 0, 1, 'FI', 0, 0, 'SUT'),
('FIMTO', 'MANTYLUOTO', '曼蒂卢奥托', 0, 1, 'FI', 0, 0, 'SUT'),
('FIOUL', 'OULU', '奥鲁', 0, 1, 'FI', 0, 0, 'SUT'),
('FIPIE', 'PIETARSAARI', '皮耶塔尔萨里', 0, 1, 'FI', 0, 0, 'SUT'),
('FIPOR', 'PORKKALA', '波卡拉', 0, 1, 'FI', 0, 0, 'SUT'),
('FIPRI', 'PORI', '波里', 0, 1, 'FI', 0, 0, 'SUT'),
('FIPVO', 'PORVOO', '波尔沃', 0, 1, 'FI', 0, 0, 'SUT'),
('FIRAA', 'RAAHE', '拉赫', 0, 1, 'FI', 0, 0, 'SUT'),
('FIRAU', 'RAUMA', '劳马', 0, 1, 'FI', 0, 0, 'SUT'),
('FITOR', 'TORNIO', '托尔奥尼', 0, 1, 'FI', 0, 0, 'SUT'),
('FITUR', 'TURKU', '图尔库', 0, 1, 'FI', 0, 0, 'SUT'),
('FIUUS', 'UUSIKAUPUNKI', '新考蓬基', 0, 1, 'FI', 0, 0, 'SUT'),
('FLVAS', 'VASSA', '瓦沙', 0, 1, 'FI', 0, 0, 'SUT'),
('ABO', 'ABO', '奥布', 0, 1, 'FI', 0, 0, 'SUT'),
('BJO', 'BJORNEBORG', '比约尔纳博里', 0, 1, 'FI', 0, 0, 'SUT'),
('GAM', 'GAMLAKARLEBY', '旧卡勒比', 0, 1, 'FI', 0, 0, 'SUT'),
('ULE', 'ULEABORG', '乌利堡', 0, 1, 'FI', 0, 0, 'SUT'),
('MAEN', 'MAENTYLUOTO', '', 0, 1, 'FI', 0, 0, 'SUT'),
('FIWAL', 'VALKOM', '瓦尔卡姆', 0, 1, 'FR', 0, 0, 'SUT'),
('FRABB', 'ABBEVILLE', '阿布维尔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRAJA', 'AJACCIO', '阿维克修', 0, 1, 'FR', 0, 0, 'SUT'),
('FRTNC', 'TONNAY CHARENTE', '托内沙朗特', 0, 1, 'FR', 0, 0, 'SUT'),
('FRTOU', 'TOULON', '土伦', 0, 1, 'FR', 0, 0, 'SUT'),
('FRARC', 'ARCACHON', '阿尔卡雄', 0, 1, 'FR', 0, 0, 'SUT'),
('FRATR', 'ANTIFER', '昂蒂弗', 0, 1, 'FR', 0, 0, 'SUT'),
('FRATS', 'ANTIBES', '昂蒂布', 0, 1, 'FR', 0, 0, 'SUT'),
('FRBAY', 'BAYONNE', '巴荣纳', 0, 1, 'FR', 0, 0, 'SUT'),
('FRBLA', 'BLAYE', '布拉伊', 0, 1, 'FR', 0, 0, 'SUT'),
('FRBON', 'BONIFACIO', '博尼法乔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRCNS', 'CANNES', '戛纳', 0, 1, 'FR', 0, 0, 'SUT'),
('FRCON', 'CONCARNEAU', '孔卡尔诺', 0, 1, 'FR', 0, 0, 'SUT'),
('FRCVI', 'CALVI', '卡尔维', 0, 1, 'FR', 0, 0, 'SUT'),
('FRDAH', 'DAHOUET', '达乌埃', 0, 1, 'FR', 0, 0, 'SUT'),
('FRDEA', 'DEAUVILLE', '多维尔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRDIE', 'DIEPPE', '迪耶普', 0, 1, 'FR', 0, 0, 'SUT'),
('FRDKK', 'DUNKIRK', '敦刻尔克', 0, 1, 'FR', 0, 0, 'SUT'),
('FRDON', 'DONGES', '栋日', 0, 1, 'FR', 0, 0, 'SUT'),
('FRDOU', 'DOUAMENEZ', '杜阿梅勒兹', 0, 1, 'FR', 0, 0, 'SUT'),
('FRETA', 'ETAPLES', '埃塔普勒', 0, 1, 'FR', 0, 0, 'SUT'),
('FRBOR', 'BORDEAUX', '波尔多', 0, 1, 'FR', 0, 0, 'SUT'),
('FRBOU', 'BOULOGNE', '布洛涅', 0, 1, 'FR', 0, 0, 'SUT'),
('FRBST', 'BREST', '布雷斯特', 0, 1, 'FR', 0, 0, 'SUT'),
('FRBTA', 'BASTIA', '巴斯蒂亚', 0, 1, 'FR', 0, 0, 'SUT'),
('FRCAL', 'CALAIS', '加来', 0, 1, 'FR', 0, 0, 'SUT'),
('FRCAM', 'CAMARET', '卡马雷', 0, 1, 'FR', 0, 0, 'SUT'),
('FRCAN', 'CAEN-OUISTREHAM', '冈兴威斯特拉', 0, 1, 'FR', 0, 0, 'SUT'),
('FRCBG', 'CHERBOURG', '瑟堡', 0, 1, 'FR', 0, 0, 'SUT'),
('FRCLE', 'CANCALE', '康卡勒', 0, 1, 'FR', 0, 0, 'SUT'),
('FRFEC', 'FECAMP', '费康', 0, 1, 'FR', 0, 0, 'SUT'),
('FRFOS', 'FOS', '福斯', 0, 1, 'FR', 0, 0, 'SUT'),
('FRGLS', 'GRAVELINES', '格拉沃利讷', 0, 1, 'FR', 0, 0, 'SUT'),
('FRGON', 'GONFREVILLE', '贡夫勒维尔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRGRA', 'GRANVILLE', '格兰维尔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRHON', 'HONFLEUR', '翁弗勒尔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRIRO', 'ILE ROUSSE', '伊尔鲁斯', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLAV', 'LAVERA', '拉瓦拉', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLCH', 'LE CHATEAUD''OLERON', '奥来龙堡', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLCI', 'LA CIOTAT', '拉西约塔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLGU', 'LE GUILDO', '勒吉尔多', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLIB', 'LIBOURNE', '利布尔讷', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLNO', 'LA NOUVELLE', '拉努韦勒', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLOR', 'LORIENT', '洛里昂', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLRO', 'LA ROCHELLE', '拉罗谢尔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRMOR', 'MORLAIX', '莫尔莱', 0, 1, 'FR', 0, 0, 'SUT'),
('FRNIC', 'NICE', '尼斯', 0, 1, 'FR', 0, 0, 'SUT'),
('FRNTS', 'NANTES', '南特', 0, 1, 'FR', 0, 0, 'SUT'),
('FRPBF', 'PAIMBOEUF', '潘伯夫', 0, 1, 'FR', 0, 0, 'SUT'),
('FRPDB', 'PORT DE BOUC', '布克港', 0, 1, 'FR', 0, 0, 'SUT'),
('FRPLA', 'PONT L''ABBE', '彭拉贝', 0, 1, 'FR', 0, 0, 'SUT'),
('FRPPI', 'PAIMPOL', '潘波勒', 0, 1, 'FR', 0, 0, 'SUT'),
('FRPRS', 'PARIS', '巴黎', 0, 1, 'FR', 0, 0, 'SUT'),
('FRPVS', 'PORT VENDRES', '旺德尔港', 0, 1, 'FR', 0, 0, 'SUT'),
('FRQUI', 'QUIMPER', '坎佩尔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRROC', 'ROCHEFORT', '罗什福尔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRROU', 'ROUEN', '鲁昂', 0, 1, 'FR', 0, 0, 'SUT'),
('FRSET', 'SETE', '塞特', 0, 1, 'FR', 0, 0, 'SUT'),
('FRSLR', 'ST. LOUIS DU RH', '圣路易罗纳', 0, 1, 'FR', 0, 0, 'SUT'),
('FRSMO', 'ST. MALO', '圣马洛', 0, 1, 'FR', 0, 0, 'SUT'),
('FRSNA', 'ST. NAZAIRE', '圣纳泽尔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRSVC', 'ST. VALERY EN C', '圣瓦勒利', 0, 1, 'FR', 0, 0, 'SUT'),
('FRAR', 'ARCACHON', '阿尔卡雄', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLHA', 'LE HAVRE', '勒阿佛尔', 0, 1, 'FR', 0, 0, 'SUT'),
('FRFSZ', 'FOT SOULTZ', '', 0, 1, 'FR', 0, 0, 'SUT'),
('ES', 'MARSEILLES', '马赛', 0, 1, 'FR', 0, 0, 'SUT'),
('FRCIN', 'CASTELSARRASIN', '', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLLE', 'LILLE', '', 0, 1, 'FR', 0, 0, 'SUT'),
('FRLYO', 'LYON', '里昂', 0, 1, 'FR', 0, 0, 'SUT'),
('FRTRG', 'TRASBOURG', '', 0, 1, 'FR', 0, 0, 'SUT'),
('PAL', 'PALLICE', '帕利斯', 0, 1, 'FR', 0, 0, 'SUT'),
('DU', 'DUNKERQUE', '敦刻尔克', 0, 1, 'FR', 0, 0, 'SUT'),
('BOU', 'BOUCAU', '布科', 0, 1, 'FR', 0, 0, 'SUT'),
('HUN', 'HUNINGUE', '', 0, 1, 'FR', 0, 0, 'SUT'),
('TOU', 'TOULOUSE', '', 0, 1, 'FR', 0, 0, 'SUT'),
('GACLZ', 'CAP LOPEZ', '洛佩斯角', 0, 1, 'GA', 0, 0, 'SUT'),
('GALIB', 'LIBREVILLE', '利伯维尔', 0, 1, 'GA', 0, 0, 'SUT'),
('GAOWE', 'OWENDO', '奥文多', 0, 1, 'GA', 0, 0, 'SUT'),
('GAPGE', 'PORT GENTIL', '谦蒂尔港', 0, 1, 'GA', 0, 0, 'SUT'),
('GALLE', 'LEBREVILLE', '利伯维尔', 0, 1, 'GA', 0, 0, 'SUT'),
('GMBJL', 'BANJUL', '班珠尔', 0, 1, 'GM', 0, 0, 'SUT'),
('GABA', 'BATHURST', '巴瑟斯特', 0, 1, 'GM', 0, 0, 'SUT'),
('GEBUS', 'BATUMI', '巴统', 0, 1, 'GE', 0, 0, 'SUT'),
('GETBI', 'TBILISI', '', 0, 1, 'GE', 0, 0, 'SUT'),
('GEPOT', 'POTI', '波季', 0, 1, 'GE', 0, 0, 'SUT'),
('GEMUN', 'MUNCHEM', '', 0, 1, 'DE', 0, 0, 'SUT'),
('DEBHN', 'BREMERHAVEN', '不来梅港', 0, 1, 'DE', 0, 0, 'SUT'),
('DEBRA', 'BRAKE', '布腊克', 0, 1, 'DE', 0, 0, 'SUT'),
('DEBRE', 'BREMEN', '不来梅', 0, 1, 'DE', 0, 0, 'SUT'),
('DECOL', 'KOLN', '科隆', 0, 1, 'DE', 0, 0, 'SUT'),
('DECUX', 'CUXHAVEN', '库克斯港', 0, 1, 'DE', 0, 0, 'SUT'),
('DEDUI', 'DUISBURG', '杜伊斯堡', 0, 1, 'DE', 0, 0, 'SUT'),
('DEDUS', 'DUSSELDORF', '杜塞尔多夫', 0, 1, 'DE', 0, 0, 'SUT'),
('DEECK', 'ECKERNFORDE', '埃肯弗尔德', 0, 1, 'DE', 0, 0, 'SUT'),
('DEELS', 'ELSFLETH', '埃尔斯费莱特', 0, 1, 'DE', 0, 0, 'SUT'),
('DEEMD', 'EMDEN', '埃姆登', 0, 1, 'DE', 0, 0, 'SUT'),
('DEFLE', 'FLENSBURG', '弗伦斯堡', 0, 1, 'DE', 0, 0, 'SUT'),
('DEFRA', 'FRANKFURT', '法兰克福', 0, 1, 'DE', 0, 0, 'SUT'),
('DEGLU', 'GLUCKSTADT', '格吕克施塔特', 0, 1, 'DE', 0, 0, 'SUT'),
('DEHAM', 'HAMBURG', '汉堡', 0, 1, 'DE', 0, 0, 'SUT'),
('DEHEI', 'HEILIGENHAFEN', '海利根港', 0, 1, 'DE', 0, 0, 'SUT'),
('DEHSM', 'HUSUM(DE)', '胡苏姆', 0, 1, 'DE', 0, 0, 'SUT'),
('DEKIL', 'KIEL', '基尔', 0, 1, 'DE', 0, 0, 'SUT'),
('DEKRE', 'KREFELD', '克雷菲尔德', 0, 1, 'DE', 0, 0, 'SUT'),
('DELAB', 'LABOE', '拉伯', 0, 1, 'DE', 0, 0, 'SUT'),
('DELER', 'LEER', '累尔', 0, 1, 'DE', 0, 0, 'SUT'),
('DELUB', 'LUBECK', '吕贝克', 0, 1, 'DE', 0, 0, 'SUT'),
('DENOR', 'NORDENHAM', '诺登哈姆', 0, 1, 'DE', 0, 0, 'SUT'),
('DENUS', 'NEUSS', '诺伊斯', 0, 1, 'DE', 0, 0, 'SUT'),
('DEPAP', 'PAPENBURG', '帕彭堡', 0, 1, 'DE', 0, 0, 'SUT'),
('DEROS', 'ROSTOCK', '罗斯托克', 0, 1, 'DE', 0, 0, 'SUT'),
('DETON', 'TONNING', '滕宁', 0, 1, 'DE', 0, 0, 'SUT'),
('DEVEG', 'VEGESACK', '弗格萨克', 0, 1, 'DE', 0, 0, 'SUT'),
('DEWIL', 'WILHELMSHAVEN', '威廉港', 0, 1, 'DE', 0, 0, 'SUT'),
('DEWIS', 'WISMAR', '维斯马', 0, 1, 'DE', 0, 0, 'SUT'),
('GEMCH', 'MUNICH', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GEDOR', 'DORTMUND', '多特蒙德', 0, 1, 'DE', 0, 0, 'SUT'),
('GEFRE', 'FREILASSING', '弗赖拉辛', 0, 1, 'DE', 0, 0, 'SUT'),
('GENUR', 'NURNBERG', '纽纶堡', 0, 1, 'DE', 0, 0, 'SUT'),
('GEDUE', 'DUESSELDORF', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GEVIE', 'VIERNHEIM', '维尔海姆', 0, 1, 'DE', 0, 0, 'SUT'),
('GESPR', 'SPROCKHOEVEL', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GESTR', 'STREHLA', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GEBIN', 'BERLIN', '柏林', 0, 1, 'DE', 0, 0, 'SUT'),
('GECNE', 'COLOGNE', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GEVTA', 'VECHTA', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GEWRF', 'WARENDORF', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GEKUE', 'KARLSRHUE', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GEMEN', 'MUENCHEN', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GELEI', 'LEIPZIG', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GEWUP', 'WUPPERTAL', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GESCH', 'SCHWALMSTADT', '', 0, 1, 'DE', 0, 0, 'SUT'),
('HAM', 'HAM', '', 0, 1, 'DE', 0, 0, 'SUT'),
('GRAN', 'GRANKFORT', '', 0, 1, 'DE', 0, 0, 'SUT'),
('HAR', 'HARLSRUHE', '', 0, 1, 'DE', 0, 0, 'SUT'),
('LISS', 'LISSONTORE', '', 0, 1, 'DE', 0, 0, 'SUT'),
('DIET', 'DIETZENBACH', '', 0, 1, 'DE', 0, 0, 'SUT'),
('ESS', 'ESSEN', '', 0, 1, 'DE', 0, 0, 'SUT'),
('DRES', 'DRESDEN', '', 0, 1, 'DE', 0, 0, 'SUT'),
('DD', 'HAMBURG,GERMANY', '汉堡', 0, 1, 'DE', 0, 0, 'SUT'),
('GHACC', 'ACCRA', '阿克拉', 0, 1, 'GH', 0, 0, 'SUT'),
('GHTAK', 'TAKORADI', '塔科拉迪', 0, 1, 'GH', 0, 0, 'SUT'),
('GHTEM', 'TEMA', '特马', 0, 1, 'GH', 0, 0, 'SUT'),
('DESTR', 'STRALSUND', '斯特拉尔松', 0, 1, 'GH', 0, 0, 'SUT'),
('GIGIB', 'GIBRALTAR', '直布罗陀', 0, 1, 'GI', 0, 0, 'SUT'),
('GRATH', 'ATHENS', '雅典', 0, 1, 'GR', 0, 0, 'SUT'),
('GRSAL', 'SALONICA', '萨洛尼卡', 0, 1, 'GR', 0, 0, 'SUT'),
('GRARG', 'ARGOSTOLION', '阿戈斯托利昂', 0, 1, 'GR', 0, 0, 'SUT'),
('GRCAN', 'CANEA', '干尼亚', 0, 1, 'GR', 0, 0, 'SUT'),
('GRCFU', 'CORFU', '科孚', 0, 1, 'GR', 0, 0, 'SUT'),
('GRCOR', 'CORINTH', '科林斯', 0, 1, 'GR', 0, 0, 'SUT'),
('GRELE', 'ELEUSIS', '埃莱夫西斯', 0, 1, 'GR', 0, 0, 'SUT'),
('GRCLS', 'CHALKIS', '哈尔基斯', 0, 1, 'GR', 0, 0, 'SUT'),
('GRIRA', 'IRAKLION', '伊拉克利翁', 0, 1, 'GR', 0, 0, 'SUT'),
('GRITE', 'ITEA', '伊泰阿', 0, 1, 'GR', 0, 0, 'SUT'),
('GRITI', 'ITHAKA ISLAND', '伊萨基', 0, 1, 'GR', 0, 0, 'SUT'),
('GRKAI', 'KALYMNOS ISLAND', '卡利姆诺斯', 0, 1, 'GR', 0, 0, 'SUT'),
('GRKAL', 'KALAMATA', '卡拉迈', 0, 1, 'GR', 0, 0, 'SUT'),
('GRKAV', 'KAVALLA', '卡瓦拉', 0, 1, 'GR', 0, 0, 'SUT'),
('GRKOS', 'KOS ISLAND', '科斯岛', 0, 1, 'GR', 0, 0, 'SUT'),
('GRKOU', 'KOUTALA', '库塔拉', 0, 1, 'GR', 0, 0, 'SUT'),
('GRLAU', 'LAURIUM', '拉夫里翁', 0, 1, 'GR', 0, 0, 'SUT'),
('GRMII', 'MILOS ISLANDS', '米洛斯岛', 0, 1, 'GR', 0, 0, 'SUT'),
('GRMIT', 'MITYLENE', '米提林尼', 0, 1, 'GR', 0, 0, 'SUT'),
('GRPAT', 'PATRAS', '佩特雷', 0, 1, 'GR', 0, 0, 'SUT'),
('GRPIR', 'PIRAEUS', '比雷埃夫斯', 0, 1, 'GR', 0, 0, 'SUT'),
('GRRDI', 'RHODES ISLAND', '罗得', 0, 1, 'GR', 0, 0, 'SUT'),
('GRRET', 'RETHIMNON', '雷西姆农', 0, 1, 'GR', 0, 0, 'SUT'),
('GRSDB', 'SUDA BAY', '苏达湾', 0, 1, 'GR', 0, 0, 'SUT'),
('GRTHE', 'THESSALONIKI', '塞萨洛尼基', 0, 1, 'GR', 0, 0, 'SUT'),
('GRVLS', 'VOLOS', '伏洛斯', 0, 1, 'GR', 0, 0, 'SUT'),
('PHVIL', 'VILLANUEVA(GU)', '维拉努埃瓦', 0, 1, 'GT', 0, 0, 'SUT'),
('CLPBO', 'PUERTO BORIES', '博里奥斯港', 0, 1, 'GT', 0, 0, 'SUT'),
('GTCHA', 'CHAMPERICO', '钱佩里科', 0, 1, 'GT', 0, 0, 'SUT'),
('GTPBA', 'PUERTO BARRIOS', '巴里奥斯港', 0, 1, 'GT', 0, 0, 'SUT'),
('GTPQL', 'PUERTO QUETZAL', '圣何塞', 0, 1, 'GT', 0, 0, 'SUT'),
('GTSTC', 'SANTO TOMAS DE CASTILLA', '圣托马斯', 0, 1, 'GT', 0, 0, 'SUT'),
('GJS.T', 'S.TOMAS DE CASTILLA', '', 0, 1, 'GT', 0, 0, 'SUT'),
('GUZAC', 'ZACAPA', '扎卡帕', 0, 1, 'GT', 0, 0, 'SUT'),
('GWVIC', 'VICTORIA(GW)', '维多利亚', 0, 1, 'GW', 0, 0, 'SUT'),
('GNCON', 'CONAKRY', '科纳克里', 0, 1, 'GN', 0, 0, 'SUT'),
('GWBIS', 'BISSAU', '比绍', 0, 1, 'GN', 0, 0, 'SUT'),
('GWBOL', 'BOLAMA', '博拉多', 0, 1, 'GN', 0, 0, 'SUT'),
('GWCAC', 'CACHEU', '卡谢乌', 0, 1, 'GN', 0, 0, 'SUT'),
('GFCAY', 'CAYANNE', '卡宴', 0, 1, 'GY', 0, 0, 'SUT'),
('GYGEO', 'GEORGETOWN(GY)', '乔治敦', 0, 1, 'GY', 0, 0, 'SUT'),
('HTACA', 'AUX CAYES', '奥凯', 0, 1, 'HT', 0, 0, 'SUT'),
('HTCHA', 'CAP HAITIEN', '海地角', 0, 1, 'HT', 0, 0, 'SUT'),
('HTGON', 'GONAIVES', '戈纳伊夫', 0, 1, 'HT', 0, 0, 'SUT'),
('HTJER', 'JEREMIE', '热雷米', 0, 1, 'HT', 0, 0, 'SUT'),
('HTMIR', 'MIRAGOANE', '米腊关', 0, 1, 'HT', 0, 0, 'SUT'),
('HTPAP', 'PORT AU PRINCE', '太子港', 0, 1, 'HT', 0, 0, 'SUT'),
('HTSMC', 'ST. MARC', '圣马克', 0, 1, 'HT', 0, 0, 'SUT'),
('HOGEN', 'GENDT', '', 0, 1, 'NL', 0, 0, 'SUT'),
('HNAPA', 'AMAPALA', '阿马帕拉', 0, 1, 'HN', 0, 0, 'SUT'),
('HNLCE', 'LA CEIBA', '拉塞瓦', 0, 1, 'HN', 0, 0, 'SUT'),
('HNPCO', 'PUERTO CORTES', '科尔特斯港', 0, 1, 'HN', 0, 0, 'SUT'),
('HNSLO', 'SAN LORENZO(HN)', '圣洛伦索', 0, 1, 'HN', 0, 0, 'SUT'),
('HNTRU', 'TRUJILLO', '特鲁希略', 0, 1, 'HN', 0, 0, 'SUT'),
('HOCHO', 'CHOLOMA', '', 0, 1, 'HN', 0, 0, 'SUT'),
('HOLMA', 'LA LIMA', '拉利马', 0, 1, 'HN', 0, 0, 'SUT'),
('HOTEG', 'TEGUCIGALPA', '', 0, 1, 'HN', 0, 0, 'SUT'),
('SP', 'SAN PEDRO SULA', '', 0, 1, 'HN', 0, 0, 'SUT'),
('HOVIL', 'VILLANUEVA(HO)', '维拉努埃瓦', 0, 1, 'HN', 0, 0, 'SUT'),
('HOBUF', 'BUFALO', '布法罗', 0, 1, 'HN', 0, 0, 'SUT'),
('HUSZE', 'SZEGED', '塞格德', 0, 1, 'HU', 0, 0, 'SUT'),
('HUBUD', 'BUDAPEST', '布达佩斯', 0, 1, 'HU', 0, 0, 'SUT'),
('HUGYO', 'GYOER', '杰尔', 0, 1, 'HU', 0, 0, 'SUT'),
('HUTAT', 'TATA', '塔塔', 0, 1, 'HU', 0, 0, 'SUT'),
('HUDEB', 'DEBRECEN', '', 0, 1, 'HU', 0, 0, 'SUT'),
('GODO', 'GODOLLO', '', 0, 1, 'HU', 0, 0, 'SUT'),
('48', 'CEGLED', '', 0, 1, 'HU', 0, 0, 'SUT'),
('ISAKU', 'AKUREYRI', '阿克雷里', 0, 1, 'IS', 0, 0, 'SUT'),
('ISHAF', 'HAFNARFJORD', '哈布纳菲厄泽', 0, 1, 'IS', 0, 0, 'SUT'),
('ISHUS', 'HUSAVIK', '胡萨维克', 0, 1, 'IS', 0, 0, 'SUT'),
('ISAKR', 'AKRANES', '阿克拉内斯', 0, 1, 'IS', 0, 0, 'SUT'),
('ISISA', 'ISAFJORD', '伊萨菲厄泽', 0, 1, 'IS', 0, 0, 'SUT'),
('ISKEF', 'KEFLAVIK', '凯夫拉维克', 0, 1, 'IS', 0, 0, 'SUT'),
('ISNES', 'NESKAUPSTADUR', '内斯克伊斯塔泽', 0, 1, 'IS', 0, 0, 'SUT'),
('ISREY', 'REYKJAVIK', '雷克雅未克', 0, 1, 'IS', 0, 0, 'SUT'),
('ISSEY', 'SEYDISFJORD', '塞济斯菲厄泽', 0, 1, 'IS', 0, 0, 'SUT'),
('ISSIG', 'SIGLUFJORD', '锡格吕菲厄泽', 0, 1, 'IS', 0, 0, 'SUT'),
('ISVSI', 'VESTMANN ISLAND', '韦斯特曼纳岛', 0, 1, 'IS', 0, 0, 'SUT'),
('IECLA', 'CLARECASTLE', '克莱尔卡斯尔', 0, 1, 'IS', 0, 0, 'SUT'),
('IECLO', 'CLONAKILTY', '克洛纳基尔蒂', 0, 1, 'IS', 0, 0, 'SUT'),
('INMRL', 'MANGROLE', '曼格罗尔', 0, 1, 'IN', 0, 0, 'SUT'),
('INMVI', 'MANDVI', '曼德维', 0, 1, 'IN', 0, 0, 'SUT'),
('INNMA', 'NEW MANGALORE', '新芒格洛尔', 0, 1, 'IN', 0, 0, 'SUT'),
('INPAR', 'PARADIP', '巴拉迪布', 0, 1, 'IN', 0, 0, 'SUT'),
('INPBL', 'PORT BLAIR', '布莱尔港', 0, 1, 'IN', 0, 0, 'SUT'),
('INPJM', 'PANJIM', '潘吉姆', 0, 1, 'IN', 0, 0, 'SUT'),
('INPOK', 'PORT OKHA', '奥卡港', 0, 1, 'IN', 0, 0, 'SUT'),
('INPON', 'PONDICHERRY', '本地治里', 0, 1, 'IN', 0, 0, 'SUT'),
('INQUI', 'QUILON', '奎隆', 0, 1, 'IN', 0, 0, 'SUT'),
('INTEL', 'TELLICHERRY', '代利杰里', 0, 1, 'IN', 0, 0, 'SUT'),
('INTUT', 'TUTICORIN', '杜蒂戈林', 0, 1, 'IN', 0, 0, 'SUT'),
('INVER', 'VERAVAL', '韦拉沃尔', 0, 1, 'IN', 0, 0, 'SUT'),
('INVIS', 'VISAKHAPATNAM', '维沙卡帕特南', 0, 1, 'IN', 0, 0, 'SUT'),
('IDAMP', 'AMPENAN', '安佩南', 0, 1, 'IN', 0, 0, 'SUT'),
('IDDON', 'DONGGALA', '栋加拉', 0, 1, 'IN', 0, 0, 'SUT'),
('INALL', 'ALLEPPEY', '阿勒皮', 0, 1, 'IN', 0, 0, 'SUT'),
('INBED', 'BEDI', '贝迪', 0, 1, 'IN', 0, 0, 'SUT'),
('INBHA', 'BHAVNAGAR', '包纳加尔', 0, 1, 'IN', 0, 0, 'SUT'),
('INBHE', 'BHEEMUNIPATNAM', '比穆尼帕特南', 0, 1, 'IN', 0, 0, 'SUT'),
('INBOM', 'BOMBAY', '孟买', 0, 1, 'IN', 0, 0, 'SUT'),
('INCAL', 'CALCUTTA', '加尔格答', 0, 1, 'IN', 0, 0, 'SUT'),
('INCAM', 'CALINGAPATNAM', '格灵格伯德讷姆', 0, 1, 'IN', 0, 0, 'SUT'),
('INCAN', 'CANNANORE', '坎纳诺尔', 0, 1, 'IN', 0, 0, 'SUT'),
('INCCT', 'CALICUT', '卡利卡特', 0, 1, 'IN', 0, 0, 'SUT'),
('INCOC', 'COCHIN', '科钦', 0, 1, 'IN', 0, 0, 'SUT'),
('INCOL', 'COLACHEL', '科拉歇尔', 0, 1, 'IN', 0, 0, 'SUT'),
('INCUD', 'CUDDALORE', '库达洛尔', 0, 1, 'IN', 0, 0, 'SUT'),
('INDAM', 'DAMAN', '达曼', 0, 1, 'IN', 0, 0, 'SUT'),
('INDIU', 'DIU', '第乌', 0, 1, 'IN', 0, 0, 'SUT'),
('INHDA', 'HALDIA', '哈德雷', 0, 1, 'IN', 0, 0, 'SUT'),
('INKAK', 'KAKINADA', '卡基纳达', 0, 1, 'IN', 0, 0, 'SUT'),
('INKAN', 'KANDLA', '根德拉', 0, 1, 'IN', 0, 0, 'SUT'),
('INKAR', 'KARWAR', '加尔瓦尔', 0, 1, 'IN', 0, 0, 'SUT'),
('INMAD', 'MADRAS', '马德拉斯', 0, 1, 'IN', 0, 0, 'SUT'),
('INMAL', 'MALPE', '马尔佩', 0, 1, 'IN', 0, 0, 'SUT'),
('INMAN', 'MANGALORE', '芒格洛尔', 0, 1, 'IN', 0, 0, 'SUT'),
('INMOR', 'MORMUGAO', '莫尔穆冈', 0, 1, 'IN', 0, 0, 'SUT'),
('INNEW', 'NEW DELHI', '新德里', 0, 1, 'IN', 0, 0, 'SUT'),
('INBE', 'BEYPORE', '贝普尔', 0, 1, 'IN', 0, 0, 'SUT'),
('CHE', 'CHENNAI', '清佘', 0, 1, 'IN', 0, 0, 'SUT'),
('INNHA', 'NHAVA SHEVA', '那瓦西瓦', 0, 1, 'IN', 0, 0, 'SUT'),
('INTOM', 'TUTICOM', '', 0, 1, 'IN', 0, 0, 'SUT'),
('MUMBA', 'MUMBAI,INDIA', '孟买', 0, 1, 'IN', 0, 0, 'SUT'),
('ANRU', 'AMRITSAR', '', 0, 1, 'IN', 0, 0, 'SUT'),
('NSI', 'NSICT/INDIA', '', 0, 1, 'IN', 0, 0, 'SUT'),
('AMD', 'ICD AHMEDABD', '阿默达巴德', 0, 1, 'IN', 0, 0, 'SUT'),
('112', 'BOMBAY PORT', '孟买港', 0, 1, 'IN', 0, 0, 'SUT'),
('VIZ', 'VIZAG', '', 0, 1, 'IN', 0, 0, 'SUT'),
('IDAMI', 'AMBON ISLAND', '安汶', 0, 1, 'ID', 0, 0, 'SUT'),
('IDBAL', 'BALIKPAPAN', '巴厘巴板', 0, 1, 'ID', 0, 0, 'SUT'),
('IDBAN', 'BANJARMASIN', '马辰', 0, 1, 'ID', 0, 0, 'SUT'),
('IDBGI', 'BANYUWANGI', '巴纽旺宣', 0, 1, 'ID', 0, 0, 'SUT'),
('IDBIT', 'BITUNG', '比通', 0, 1, 'ID', 0, 0, 'SUT'),
('IDBLS', 'BENGKALIS', '本卡利斯', 0, 1, 'ID', 0, 0, 'SUT'),
('IDBLU', 'BENGKULU', '明古鲁', 0, 1, 'ID', 0, 0, 'SUT'),
('IDBMA', 'BIMA', '比马', 0, 1, 'ID', 0, 0, 'SUT'),
('IDBLN', 'BELAWAN', '勿拉湾', 0, 1, 'ID', 0, 0, 'SUT'),
('IDBNA', 'BENOA', '伯诺阿', 0, 1, 'ID', 0, 0, 'SUT'),
('IDBSA', 'BAGAN SI API AP', '巴眼牙比', 0, 1, 'ID', 0, 0, 'SUT'),
('IDCIR', 'CIREBON', '井里汶', 0, 1, 'ID', 0, 0, 'SUT'),
('IDDMI', 'DUMAI', '杜迈', 0, 1, 'ID', 0, 0, 'SUT'),
('IDFAK', 'FAK FAK', '法克法克', 0, 1, 'ID', 0, 0, 'SUT'),
('IDJAK', 'JAKARTA', '雅加达', 0, 1, 'ID', 0, 0, 'SUT'),
('IDKAL', 'KALIANGET', '卡利昂厄特', 0, 1, 'ID', 0, 0, 'SUT'),
('IDKET', 'KETAPANG', '吉打邦', 0, 1, 'ID', 0, 0, 'SUT'),
('INBEL', 'BELEKERI', '贝莱克里', 0, 1, 'ID', 0, 0, 'SUT'),
('INCOO', 'COONDAPOOR', '贡达布尔', 0, 1, 'ID', 0, 0, 'SUT'),
('INDJT', 'DJAKARAT', '雅加达', 0, 1, 'ID', 0, 0, 'SUT'),
('IDMEN', 'MENADO', '万鸦老', 0, 1, 'ID', 0, 0, 'SUT'),
('IDMEU', 'MEULABOH', '米拉务', 0, 1, 'ID', 0, 0, 'SUT'),
('IDPAD', 'PADANG', '巴东', 0, 1, 'ID', 0, 0, 'SUT'),
('IDPAL', 'PALEMBANG', '巨港', 0, 1, 'ID', 0, 0, 'SUT'),
('IDPAN', 'PANARUKAN', '巴那鲁干', 0, 1, 'ID', 0, 0, 'SUT'),
('IDPJG', 'PANJANG', '潘姜', 0, 1, 'ID', 0, 0, 'SUT'),
('IDPNK', 'PONTIANAK', '坤甸', 0, 1, 'ID', 0, 0, 'SUT'),
('IDPSU', 'PANGKALAN SUSU', '庞卡兰苏苏', 0, 1, 'ID', 0, 0, 'SUT'),
('IDSAB', 'SABANG(ID)', '沙璜', 0, 1, 'ID', 0, 0, 'SUT'),
('IDSAL', 'SALAWATI', '沙拉瓦蒂', 0, 1, 'ID', 0, 0, 'SUT'),
('IDSBS', 'SAMBAS', '三发', 0, 1, 'ID', 0, 0, 'SUT'),
('IDSEM', 'SEMARANG', '三宝垄', 0, 1, 'ID', 0, 0, 'SUT'),
('IDSOR', 'SORONG', '索龙', 0, 1, 'ID', 0, 0, 'SUT'),
('IDSUR', 'SURABAYA', '泗水', 0, 1, 'ID', 0, 0, 'SUT'),
('IDTAI', 'TARAKAN', '打拉根', 0, 1, 'ID', 0, 0, 'SUT'),
('IDTBN', 'TUBAN', '图班', 0, 1, 'ID', 0, 0, 'SUT'),
('IDTEL', 'TELUKBETUNG', '直落勿洞', 0, 1, 'ID', 0, 0, 'SUT'),
('IDTPR', 'TANJUNG PRIOK', '丹戒不碌', 0, 1, 'ID', 0, 0, 'SUT'),
('IDTUB', 'TANJUNG UBAN', '丹戒乌班', 0, 1, 'ID', 0, 0, 'SUT'),
('INDJA', 'DJAJAPURA', '贾贾普拉', 0, 1, 'ID', 0, 0, 'SUT'),
('INDJU', 'DJUWANA', '朱瓦纳', 0, 1, 'ID', 0, 0, 'SUT'),
('BP', 'BATAM PULAU', '', 0, 1, 'ID', 0, 0, 'SUT'),
('INBAN', 'BANDUNG', '万隆', 0, 1, 'ID', 0, 0, 'SUT'),
('TAN', 'TANJUNG EMAS PORT,SEMARANG', '', 0, 1, 'ID', 0, 0, 'SUT'),
('JK1', 'JAKARTA UTC1', '雅加达(1号码头)', 0, 1, 'ID', 0, 0, 'SUT'),
('JK2', 'JAKARTA UTC2', '雅加达(2号码头)', 0, 1, 'ID', 0, 0, 'SUT'),
('JK3', 'JAKARTA UTC3', '雅加达3号码头', 0, 1, 'ID', 0, 0, 'SUT'),
('UPG', 'UJUNG PANDANG', '乌戎潘当', 0, 1, 'ID', 0, 0, 'SUT'),
('IDJKT', 'IDJKT', '', 0, 1, 'ID', 0, 0, 'SUT'),
('IRABA', 'ABADAN', '阿巴丹', 0, 1, 'IR', 0, 0, 'SUT'),
('IRBAB', 'BANDAR ABBAS', '阿巴斯港', 0, 1, 'IR', 0, 0, 'SUT'),
('IRBKH', 'BANDAR KHOMEINI', '霍梅尼港', 0, 1, 'IR', 0, 0, 'SUT'),
('IRBMA', 'BANDAR SHAHPUR', '沙赫普尔港', 0, 1, 'IR', 0, 0, 'SUT'),
('IRBUS', 'BUSHIRE', '布什尔', 0, 1, 'IR', 0, 0, 'SUT'),
('IRKGI', 'KHARG ISLAND', '哈尔克岛', 0, 1, 'IR', 0, 0, 'SUT'),
('IRKHO', 'KHORRAMSHAHR', '霍拉姆沙赫尔', 0, 1, 'IR', 0, 0, 'SUT'),
('IDPBN', 'PANGKALAN BUN', '庞卡兰布翁', 0, 1, 'IR', 0, 0, 'SUT'),
('IQBAS', 'BASRAH', '巴士拉', 0, 1, 'IQ', 0, 0, 'SUT'),
('IQFAO', 'FAO', '法奥', 0, 1, 'IQ', 0, 0, 'SUT'),
('IQKAA', 'KHOR AL AMAYA', '豪尔艾迈耶', 0, 1, 'IQ', 0, 0, 'SUT'),
('IQUMQ', 'UMM QASR', '乌姆卡萨', 0, 1, 'IQ', 0, 0, 'SUT'),
('KWKAM', 'KHOR AL MUFATTA', '霍尔姆法塔', 0, 1, 'IQ', 0, 0, 'SUT'),
('IQRAS', 'BASRA', '巴士拉', 0, 1, 'IQ', 0, 0, 'SUT'),
('NZWES', 'WESTPORT', '韦斯特皮特', 0, 1, 'IE', 0, 0, 'SUT'),
('IECOK', 'CORK', '科克', 0, 1, 'IE', 0, 0, 'SUT'),
('IEDCN', 'DUNCANNON', '邓坎嫩', 0, 1, 'IE', 0, 0, 'SUT'),
('IEDDK', 'DUNDALK', '邓多克', 0, 1, 'IE', 0, 0, 'SUT'),
('IEDON', 'DONEGAL', '多尼戈尔', 0, 1, 'IE', 0, 0, 'SUT'),
('IEDRO', 'DROGHEDA', '德罗赫达', 0, 1, 'IE', 0, 0, 'SUT'),
('IEDUB', 'DUBLIN', '都柏林', 0, 1, 'IE', 0, 0, 'SUT'),
('IEDUL', 'DUN LAOGHAIRE', '敦劳费尔', 0, 1, 'IE', 0, 0, 'SUT'),
('IEDUN', 'DUNMORE', '邓莫尔', 0, 1, 'IE', 0, 0, 'SUT'),
('IEDVN', 'DUNGARVAN', '邓加文', 0, 1, 'IE', 0, 0, 'SUT'),
('IEFNT', 'FENIT', '费尼特', 0, 1, 'IE', 0, 0, 'SUT'),
('IEFOY', 'FOYNES', '福因斯', 0, 1, 'IE', 0, 0, 'SUT'),
('IEGAL', 'GALWAY', '戈尔韦', 0, 1, 'IE', 0, 0, 'SUT'),
('IEHOW', 'HOWTH', '霍思', 0, 1, 'IE', 0, 0, 'SUT'),
('IEKIN', 'KINSALE', '金塞尔', 0, 1, 'IE', 0, 0, 'SUT'),
('IEKLA', 'KILLALA', '基拉拉', 0, 1, 'IE', 0, 0, 'SUT'),
('IEKSH', 'KILRUSH', '基尔拉什', 0, 1, 'IE', 0, 0, 'SUT'),
('IEKGS', 'KILLYBEGS', '基利贝格斯', 0, 1, 'IE', 0, 0, 'SUT'),
('IELIM', 'LIMERICK', '利默里克', 0, 1, 'IE', 0, 0, 'SUT'),
('IEMOV', 'MOVILLE', '莫维尔', 0, 1, 'IE', 0, 0, 'SUT'),
('IENRS', 'NEW ROSS', '新罗斯', 0, 1, 'IE', 0, 0, 'SUT'),
('IEROS', 'ROSSLARE', '罗斯莱尔', 0, 1, 'IE', 0, 0, 'SUT'),
('IEVAL', 'VALENTIA', '瓦伦西亚', 0, 1, 'IE', 0, 0, 'SUT'),
('IEWAT', 'WATERFORD', '沃特福德', 0, 1, 'IE', 0, 0, 'SUT'),
('IEWIC', 'WICKLOW', '威克洛', 0, 1, 'IE', 0, 0, 'SUT'),
('IEYOU', 'YOUGHAL', '约尔', 0, 1, 'IE', 0, 0, 'SUT'),
('IEARK', 'ARKLOW', '阿克洛', 0, 1, 'IE', 0, 0, 'SUT'),
('IEBAL', 'BALTIMORE(IE)', '巴尔的摩', 0, 1, 'IE', 0, 0, 'SUT'),
('IEBAN', 'BANTRY', '班特里', 0, 1, 'IE', 0, 0, 'SUT'),
('IEBNA', 'BALLINA', '巴利纳', 0, 1, 'IE', 0, 0, 'SUT'),
('IEBUP', 'BURTON PORT', '伯顿波特', 0, 1, 'IE', 0, 0, 'SUT'),
('IECAH', 'CAHIRCIVEEN', '克尔西文', 0, 1, 'IE', 0, 0, 'SUT'),
('IRCOR', 'CORKIRELAND', '科克', 0, 1, 'IE', 0, 0, 'SUT'),
('IRBEL', 'BELFAST(IR)', '贝尔法斯特', 0, 1, 'IE', 0, 0, 'SUT'),
('CAV', 'CAVAN', '', 0, 1, 'IE', 0, 0, 'SUT'),
('ILASD', 'ASHDOD', '阿什杜德', 0, 1, 'IL', 0, 0, 'SUT'),
('ILASH', 'ASHKELON', '阿什克伦', 0, 1, 'IL', 0, 0, 'SUT'),
('ILHFA', 'HAIFA', '海法', 0, 1, 'IL', 0, 0, 'SUT'),
('ITALG', 'ALGHERO', '阿尔盖罗', 0, 1, 'IT', 0, 0, 'SUT'),
('ITBAG', 'BAGNOLI', '巴尼奥利', 0, 1, 'IT', 0, 0, 'SUT'),
('ITBAR', 'BARI', '巴里', 0, 1, 'IT', 0, 0, 'SUT'),
('ITBRI', 'BRINDISI', '布林迪西', 0, 1, 'IT', 0, 0, 'SUT'),
('ITBTA', 'BARLETTA', '巴列塔', 0, 1, 'IT', 0, 0, 'SUT'),
('ITCAG', 'CAGLIARI', '卡利亚里', 0, 1, 'IT', 0, 0, 'SUT'),
('ITANC', 'ANCONA', '安科纳', 0, 1, 'IT', 0, 0, 'SUT'),
('ITANZ', 'ANZIO', '安齐奥', 0, 1, 'IT', 0, 0, 'SUT'),
('ITAUG', 'AUGUSTA', '奥古斯塔', 0, 1, 'IT', 0, 0, 'SUT'),
('ITAVO', 'AVOLA', '阿沃拉', 0, 1, 'IT', 0, 0, 'SUT'),
('ITCAR', 'CARLOFORTE', '卡洛福泰', 0, 1, 'IT', 0, 0, 'SUT'),
('ITCAT', 'CATANIA', '卡塔尼亚', 0, 1, 'IT', 0, 0, 'SUT'),
('ITCDS', 'CAST. DI STABIA', '斯塔比亚海堡', 0, 1, 'IT', 0, 0, 'SUT'),
('ITCHI', 'CHIOGGIA', '基奥贾', 0, 1, 'IT', 0, 0, 'SUT'),
('ITCIV', 'CIVITAVECCHIA', '奇维塔韦基亚', 0, 1, 'IT', 0, 0, 'SUT'),
('ITCRE', 'CROTONE', '克罗托内', 0, 1, 'IT', 0, 0, 'SUT'),
('ITCRO', 'CATANZARO', '卡坦扎罗', 0, 1, 'IT', 0, 0, 'SUT'),
('ITFIU', 'FIUMICINO', '菲乌米奇诺', 0, 1, 'IT', 0, 0, 'SUT'),
('ITFOL', 'FOLLONICA', '福洛尼卡', 0, 1, 'IT', 0, 0, 'SUT'),
('ITGAE', 'GAETA', '加埃塔', 0, 1, 'IT', 0, 0, 'SUT'),
('ITGAI', 'GOLFO ARANCI', '阿兰奇湾城', 0, 1, 'IT', 0, 0, 'SUT'),
('ITGAL', 'GALLIPOLI', '加利波利', 0, 1, 'IT', 0, 0, 'SUT'),
('ITGEL', 'GELA', '杰拉', 0, 1, 'IT', 0, 0, 'SUT'),
('ITGOA', 'GENOA', '热那亚', 0, 1, 'IT', 0, 0, 'SUT'),
('ITIMP', 'IMPERIA', '因佩里亚', 0, 1, 'IT', 0, 0, 'SUT'),
('ITLIC', 'LICATA', '利卡塔', 0, 1, 'IT', 0, 0, 'SUT'),
('ITLMA', 'LA MADDALENA', '拉马达莱那', 0, 1, 'IT', 0, 0, 'SUT'),
('ITMAR', 'MARSALA', '马尔萨拉', 0, 1, 'IT', 0, 0, 'SUT'),
('ITMDC', 'MARINA DI CARRARA', '马里纳迪卡拉拉', 0, 1, 'IT', 0, 0, 'SUT'),
('ITMDV', 'MAZARA DEL VALL', '马扎拉德尔瓦洛', 0, 1, 'IT', 0, 0, 'SUT'),
('ITMES', 'MESSINA', '墨西拿', 0, 1, 'IT', 0, 0, 'SUT'),
('ITMIL', 'MILAZZO', '米拉佐', 0, 1, 'IT', 0, 0, 'SUT'),
('ITMLI', 'MONOPOLI', '莫诺波利', 0, 1, 'IT', 0, 0, 'SUT'),
('ITMOL', 'MOLFETTA', '莫尔费塔', 0, 1, 'IT', 0, 0, 'SUT'),
('ITNAP', 'NAPLES', '那不勒斯', 0, 1, 'IT', 0, 0, 'SUT'),
('ITOLB', 'OLBIA', '奥尔比亚', 0, 1, 'IT', 0, 0, 'SUT'),
('ITORI', 'ORISTANO', '奥里斯塔诺', 0, 1, 'IT', 0, 0, 'SUT'),
('ITPAL', 'PALERMO', '巴勒莫', 0, 1, 'IT', 0, 0, 'SUT'),
('ITPAZ', 'PORTO AZZURRO', '阿祖罗港', 0, 1, 'IT', 0, 0, 'SUT'),
('ITPEM', 'PORTO EMPEDOCLE', '恩佩多克莱港', 0, 1, 'IT', 0, 0, 'SUT'),
('ITPES', 'PESCARA', '佩斯卡拉', 0, 1, 'IT', 0, 0, 'SUT'),
('ITPFO', 'PORTO FERRAIO', '费拉约港', 0, 1, 'IT', 0, 0, 'SUT'),
('ITPIO', 'PIOMBINO', '皮翁比诺', 0, 1, 'IT', 0, 0, 'SUT'),
('ITPOZ', 'POZZUOLI', '波佐利', 0, 1, 'IT', 0, 0, 'SUT'),
('ITPRO', 'PESARO', '佩萨罗', 0, 1, 'IT', 0, 0, 'SUT'),
('ITPSO', 'PORTOSCUSO', '斯库索港', 0, 1, 'IT', 0, 0, 'SUT'),
('ITPTO', 'PORTO TORRES', '托雷斯港', 0, 1, 'IT', 0, 0, 'SUT'),
('ITRAV', 'RAVENNA', '腊万纳', 0, 1, 'IT', 0, 0, 'SUT'),
('ITSAL', 'SALERNO', '萨莱诺', 0, 1, 'IT', 0, 0, 'SUT'),
('ITSAR', 'SARROCH', '萨罗奇', 0, 1, 'IT', 0, 0, 'SUT'),
('ITSAV', 'SAVONA', '萨沃纳', 0, 1, 'IT', 0, 0, 'SUT'),
('ITRMA', 'RIO MARINA', '里奥马里纳', 0, 1, 'IT', 0, 0, 'SUT'),
('ITSPE', 'LA SPEZIA', '拉斯佩齐亚', 0, 1, 'IT', 0, 0, 'SUT'),
('ITSRE', 'SAN REMO', '圣雷莫', 0, 1, 'IT', 0, 0, 'SUT'),
('ITTAL', 'TALAMONE', '塔拉莫内', 0, 1, 'IT', 0, 0, 'SUT'),
('ITTAR', 'TARANTO', '塔兰托', 0, 1, 'IT', 0, 0, 'SUT'),
('ITTDG', 'TORRE DEL GRECO', '托雷德尔格雷科', 0, 1, 'IT', 0, 0, 'SUT'),
('ITTRA', 'TRAPANI', '特拉帕尼', 0, 1, 'IT', 0, 0, 'SUT'),
('ITTRI', 'TRIESTE', '的里雅斯特', 0, 1, 'IT', 0, 0, 'SUT'),
('ITVEN', 'VENICE', '威尼斯', 0, 1, 'IT', 0, 0, 'SUT'),
('DKRON', 'RONNE', '伦讷', 0, 1, 'IT', 0, 0, 'SUT'),
('LEGHO', 'LEGHORN', '莱戈恩', 0, 1, 'IT', 0, 0, 'SUT'),
('ITROM', 'ROMA', '罗马', 0, 1, 'IT', 0, 0, 'SUT'),
('GENOV', 'GENOVA', '热那亚', 0, 1, 'IT', 0, 0, 'SUT'),
('NAPOL', 'NAPOLI', '那波利', 0, 1, 'IT', 0, 0, 'SUT'),
('ITLIV', 'LIVORNO', '里窝那', 0, 1, 'IT', 0, 0, 'SUT'),
('ITMLA', 'MILANO', '米兰', 0, 1, 'IT', 0, 0, 'SUT'),
('ITTOR', 'TORINO', '', 0, 1, 'IT', 0, 0, 'SUT'),
('ITVER', 'VERONA', '', 0, 1, 'IT', 0, 0, 'SUT'),
('ITCMO', 'COMO', '科莫', 0, 1, 'IT', 0, 0, 'SUT'),
('ITGE', 'GENOA PORT,ITALY', '热那亚', 0, 1, 'IT', 0, 0, 'SUT'),
('IT-PO', 'GENOVA PORT-ITALY', '热那亚', 0, 1, 'IT', 0, 0, 'SUT'),
('NOVA', 'GENOVA PORT', '热那亚', 0, 1, 'IT', 0, 0, 'SUT'),
('BIE', 'BIELLA', '', 0, 1, 'IT', 0, 0, 'SUT'),
('FLOR', 'FLORENCE', '', 0, 1, 'IT', 0, 0, 'SUT'),
('TUR', 'TURIN', '', 0, 1, 'IT', 0, 0, 'SUT'),
('PRA', 'PRATO', '普拉托', 0, 1, 'IT', 0, 0, 'SUT'),
('BOLO', 'BOLOGNA', '', 0, 1, 'IT', 0, 0, 'SUT'),
('41', 'VENICE,ITALY', '威尼斯', 0, 1, 'IT', 0, 0, 'SUT'),
('JMRCP', 'ROCKY POINT', '罗基波因特', 0, 1, 'JM', 0, 0, 'SUT'),
('JMBLR', 'BLACK RIVER', '布莱克河', 0, 1, 'JM', 0, 0, 'SUT'),
('JMBLU', 'BLUEFIELDS(JM)', '布卢菲尔兹', 0, 1, 'JM', 0, 0, 'SUT'),
('JMFAL', 'FALMOUTH(JM)', '法尔茅斯', 0, 1, 'JM', 0, 0, 'SUT'),
('JMKIN', 'KINGSTON(JM)', '金斯敦', 0, 1, 'JM', 0, 0, 'SUT'),
('JMLUC', 'LUCEA', '卢西', 0, 1, 'JM', 0, 0, 'SUT'),
('JMMOB', 'MONTEGO BAY', '蒙特哥湾', 0, 1, 'JM', 0, 0, 'SUT'),
('JMORB', 'OCHO RIOS BAY', '奥乔里奥斯湾', 0, 1, 'JM', 0, 0, 'SUT'),
('JMPAN', 'PORT ANTONIO', '安东尼奥港', 0, 1, 'JM', 0, 0, 'SUT'),
('JMPES', 'PORT ESQUIVEL', '埃斯基韦尔港', 0, 1, 'JM', 0, 0, 'SUT'),
('JMPKA', 'PORT KAISER', '凯泽港', 0, 1, 'JM', 0, 0, 'SUT'),
('JMPMO', 'PORT MORANT', '莫兰特港', 0, 1, 'JM', 0, 0, 'SUT'),
('JMPRO', 'PORT ROYAL(JM)', '罗亚尔港', 0, 1, 'JM', 0, 0, 'SUT'),
('JPAIO', 'AIOI', '相生', 0, 1, 'JP', 0, 0, 'SUT'),
('JPAKI', 'AKITA', '秋田', 0, 1, 'JP', 0, 0, 'SUT'),
('JPAKW', 'AKO WAN', '赤穗湾', 0, 1, 'JP', 0, 0, 'SUT'),
('JPAIN', 'AINOURA', '相浦', 0, 1, 'JP', 0, 0, 'SUT'),
('JPAMA', 'AMAGASAKI', '尼崎', 0, 1, 'JP', 0, 0, 'SUT'),
('JPAOM', 'AOMORI', '青森', 0, 1, 'JP', 0, 0, 'SUT'),
('JPATS', 'ATSUMI', '渥美', 0, 1, 'JP', 0, 0, 'SUT'),
('JPCBA', 'CHIBA', '千叶', 0, 1, 'JP', 0, 0, 'SUT'),
('JPCHI', 'CHITA', '知多', 0, 1, 'JP', 0, 0, 'SUT'),
('JPENA', 'ENA', '江名', 0, 1, 'JP', 0, 0, 'SUT'),
('JPETA', 'ETAJIMA', '江田岛', 0, 1, 'JP', 0, 0, 'SUT'),
('JPFKA', 'FUKUOKA', '福冈', 0, 1, 'JP', 0, 0, 'SUT'),
('JPFUK', 'FUKUYAMA', '福山', 0, 1, 'JP', 0, 0, 'SUT'),
('JPFUS', 'FUSHIKI', '伏木', 0, 1, 'JP', 0, 0, 'SUT'),
('JPHAC', 'HACHINOHE', '八户', 0, 1, 'JP', 0, 0, 'SUT'),
('JPHAK', 'HAKODATE', '函馆', 0, 1, 'JP', 0, 0, 'SUT'),
('JPHIA', 'HIAGARI', '日明', 0, 1, 'JP', 0, 0, 'SUT'),
('JPHIT', 'HITACHI', '日立', 0, 1, 'JP', 0, 0, 'SUT'),
('JPHMA', 'HIROSHIMA', '广岛', 0, 1, 'JP', 0, 0, 'SUT'),
('JPHOS', 'HOSOSHIMA', '细岛', 0, 1, 'JP', 0, 0, 'SUT'),
('JPHSU', 'HAMAMATSU', '滨松', 0, 1, 'JP', 0, 0, 'SUT'),
('JPHTA', 'HIROHATA', '广田', 0, 1, 'JP', 0, 0, 'SUT'),
('JPIMA', 'IMABARI', '今治', 0, 1, 'JP', 0, 0, 'SUT'),
('JPINN', 'INNOSHIMA', '因岛', 0, 1, 'JP', 0, 0, 'SUT'),
('JPISH', 'ISHINOMAKI', '石卷', 0, 1, 'JP', 0, 0, 'SUT'),
('JPIWA', 'IWAKUNI', '岩国', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKAG', 'KAGOSHIMA', '鹿儿岛', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKAI', 'KAINAN', '海南', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKAK', 'KAKOGAWA', '加古川', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKAM', 'KAMAISHI', '釜石', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKAW', 'KAWASAKI', '川崎', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKII', 'KIIRE', '喜入', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKIK', 'KIKUMA', '菊间', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKIN', 'KINUURA', '衣浦', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKIS', 'KIMITSU', '君津', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKIT', 'KITAKYUSHU', '北九州', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKMA', 'KASHIMA', '鹿岛', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKOB', 'KOBE', '神户', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKOC', 'KOCHI', '高知', 0, 1, 'JP', 0, 0, 'SUT'),
('JPSHI', 'SHIMONOSEKI', '下关', 0, 1, 'JP', 0, 0, 'SUT'),
('JPSKI', 'SAKAI', '棵', 0, 1, 'JP', 0, 0, 'SUT'),
('JPSSU', 'SHIMOTSU', '下津', 0, 1, 'JP', 0, 0, 'SUT'),
('JPSTA', 'SAKATA', '洒田', 0, 1, 'JP', 0, 0, 'SUT'),
('JPSZU', 'SHIMIZU', '清水', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTAM', 'TAMANO', '玉野', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTAN', 'TANABE', '田边', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTKU', 'TAKAMATSU', '高松', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTMI', 'TSUKUMI', '津久见', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTOA', 'TOKUYAMA', '德山', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTOB', 'TOBATA', '户*', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTOK', 'TOKYO', '东京', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTOM', 'TOMAKOMAI', '苫小牧', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTON', 'TONDA', '富田', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTOS', 'TOYAMA SINKO', '富山新港', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTOY', 'TOYOHASHI', '丰桥', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTSU', 'TSU', '津', 0, 1, 'JP', 0, 0, 'SUT'),
('JPTYA', 'TOYAMA', '富山', 0, 1, 'JP', 0, 0, 'SUT'),
('JPUBE', 'UBE', '宇部', 0, 1, 'JP', 0, 0, 'SUT'),
('JPUNO', 'UNO', '宇野', 0, 1, 'JP', 0, 0, 'SUT'),
('JPWAK', 'WAKKANAI', '稚内', 0, 1, 'JP', 0, 0, 'SUT'),
('JPWKA', 'WAKAYAMA', '和歌山', 0, 1, 'JP', 0, 0, 'SUT'),
('JPWKU', 'WAKAMATSU', '若松', 0, 1, 'JP', 0, 0, 'SUT'),
('JPYAW', 'YAWATA', '八幡', 0, 1, 'JP', 0, 0, 'SUT'),
('JPYCI', 'YOKKAICHI', '四日市', 0, 1, 'JP', 0, 0, 'SUT'),
('JPYKA', 'YOKOSUKA', '横须贺', 0, 1, 'JP', 0, 0, 'SUT'),
('JPYOK', 'YOKOHAMA', '横滨', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKOE', 'KAWANOE', '川之江', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKOK', 'KOKURA', '小仓', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKOM', 'KOMATSUSHIMA', '小松岛', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKON', 'KONOSHIMA', '神岛', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKUD', 'KUDAMATSU', '下松', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKUI', 'KUROSAKI', '黑崎', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKUR', 'KURE', '吴港', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKUS', 'KUSHIRO', '钏路', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKWA', 'KANOKAWA', '鹿川', 0, 1, 'JP', 0, 0, 'SUT'),
('JPKWN', 'KIN WAN', '金湾', 0, 1, 'JP', 0, 0, 'SUT'),
('JPMAI', 'MAIZURU', '舞鹤', 0, 1, 'JP', 0, 0, 'SUT'),
('JPMAK', 'MAKIYAMA', '牧山', 0, 1, 'JP', 0, 0, 'SUT'),
('JPMIZ', 'MIZUSHIMA', '水岛', 0, 1, 'JP', 0, 0, 'SUT'),
('JPMKE', 'MIIKE', '三池', 0, 1, 'JP', 0, 0, 'SUT'),
('JPMKO', 'MIYAKO', '宫古', 0, 1, 'JP', 0, 0, 'SUT'),
('JPMMA', 'MATSUYAMA', '松山', 0, 1, 'JP', 0, 0, 'SUT'),
('JPMOJ', 'MOJI', '门司', 0, 1, 'JP', 0, 0, 'SUT'),
('JPMUR', 'MURORAN', '室兰', 0, 1, 'JP', 0, 0, 'SUT'),
('JPNAG', 'NAGOYA', '名古屋', 0, 1, 'JP', 0, 0, 'SUT'),
('JPNAH', 'NAHA', '那霸', 0, 1, 'JP', 0, 0, 'SUT'),
('JPNAO', 'NAOETSU', '直江津', 0, 1, 'JP', 0, 0, 'SUT'),
('JPNHI', 'NIIGATA', '新泻', 0, 1, 'JP', 0, 0, 'SUT'),
('JPNKI', 'NAGASAKI', '长崎', 0, 1, 'JP', 0, 0, 'SUT'),
('JPNMA', 'NIIHAMA', '新居滨', 0, 1, 'JP', 0, 0, 'SUT'),
('JPOFU', 'OFUNATO', '大船渡', 0, 1, 'JP', 0, 0, 'SUT'),
('JPOIT', 'OITA', '大分', 0, 1, 'JP', 0, 0, 'SUT'),
('JPONA', 'ONAHAMA', '小名滨', 0, 1, 'JP', 0, 0, 'SUT'),
('JPOSK', 'OSAKA', '大阪', 0, 1, 'JP', 0, 0, 'SUT'),
('JPOTA', 'OTARU', '小樽', 0, 1, 'JP', 0, 0, 'SUT'),
('JPSBO', 'SASEBO', '佐世保', 0, 1, 'JP', 0, 0, 'SUT'),
('JPSDE', 'SAKAIDE', '坂出', 0, 1, 'JP', 0, 0, 'SUT'),
('JPSDS', 'SENDAI SI', '川内市', 0, 1, 'JP', 0, 0, 'SUT'),
('JPSEN', 'SENDAI', '仙台', 0, 1, 'JP', 0, 0, 'SUT'),
('JAHAK', 'HAKATA', '博多', 0, 1, 'JP', 0, 0, 'SUT'),
('JAIRY', 'IMABARY', '今治', 0, 1, 'JP', 0, 0, 'SUT'),
('JANAU', 'NAUETSU', '直江津', 0, 1, 'JP', 0, 0, 'SUT'),
('JAMRA', 'MAIZURA', '舞鹤', 0, 1, 'JP', 0, 0, 'SUT'),
('JAPAN', 'OSAKA,JAPAN', '大阪', 0, 1, 'JP', 0, 0, 'SUT'),
('JASAI', 'SAIPN', '塞班', 0, 1, 'JP', 0, 0, 'SUT'),
('SEN', 'SENBOKU', '', 0, 1, 'JP', 0, 0, 'SUT'),
('PTA', 'PTAUR', '小撙', 0, 1, 'JP', 0, 0, 'SUT'),
('KUMO', 'KUMAMOTO', '熊本', 0, 1, 'JP', 0, 0, 'SUT'),
('SAP', 'SAPPORO', '扎幌', 0, 1, 'JP', 0, 0, 'SUT'),
('TSR', 'TSRUGA', '', 0, 1, 'JP', 0, 0, 'SUT'),
('JOAQA', 'AQABA', '亚喀巴', 0, 1, 'JO', 0, 0, 'SUT'),
('AQB', 'AQABA FREEZONE', '亚客巴(F.Z)', 0, 1, 'JO', 0, 0, 'SUT'),
('KHKPS', 'KOMPONG SOM', '磅逊', 0, 1, 'KH', 0, 0, 'SUT'),
('KHPPH', 'PHNOM-PENH', '金边', 0, 1, 'KH', 0, 0, 'SUT'),
('KASIH', 'SIHANOUKEVILLE CAMBODIA', '西哈努克', 0, 1, 'KH', 0, 0, 'SUT'),
('KAKEM', 'KEMPONGSOM', '旁逊', 0, 1, 'KH', 0, 0, 'SUT'),
('KAALM', 'ALMATY', '', 0, 1, 'KA', 0, 0, 'SUT'),
('KELAM', 'LAMU', '拉穆', 0, 1, 'KE', 0, 0, 'SUT'),
('KEMAL', 'MALINDI', '马林迪', 0, 1, 'KE', 0, 0, 'SUT'),
('KEMOM', 'MOMBASA', '蒙巴萨', 0, 1, 'KE', 0, 0, 'SUT'),
('KWKUW', 'KUWAIT', '科威特', 0, 1, 'KW', 0, 0, 'SUT'),
('KWMAA', 'MENA AL AHMADI', '米纳艾哈迈迪', 0, 1, 'KW', 0, 0, 'SUT'),
('KWMAB', 'MENA ABDULLA', '米纳阿卜杜拉', 0, 1, 'KW', 0, 0, 'SUT'),
('KWSHU', 'SHUAIBA', '舒艾拜', 0, 1, 'KW', 0, 0, 'SUT'),
('LVRIX', 'RIGA', '里加', 0, 1, 'LV', 0, 0, 'SUT'),
('LVVHT', 'VENTSPILS', '文茨皮尔斯', 0, 1, 'LV', 0, 0, 'SUT'),
('LBBRT', 'BEIRUT', '贝鲁特', 0, 1, 'LB', 0, 0, 'SUT'),
('LBCHE', 'CHEKKA', '舍卡', 0, 1, 'LB', 0, 0, 'SUT'),
('LBJOU', 'JOUNIEH', '朱尼耶', 0, 1, 'LB', 0, 0, 'SUT'),
('LBSID', 'SIDON', '西顿', 0, 1, 'LB', 0, 0, 'SUT'),
('LBSOU', 'SOUR', '苏尔', 0, 1, 'LB', 0, 0, 'SUT'),
('LBTRI', 'TRIPOLI(LB)', '的黎波里', 0, 1, 'LB', 0, 0, 'SUT'),
('LRBUC', 'BUCHANAN(LR)', '布坎南', 0, 1, 'LR', 0, 0, 'SUT'),
('LRCPA', 'CAPE PALMAS', '帕尔马斯角', 0, 1, 'LR', 0, 0, 'SUT'),
('LRGBA', 'GRAND BASSA', '大巴萨', 0, 1, 'LR', 0, 0, 'SUT'),
('LRRCS', 'RIVER CESS', '里弗塞斯', 0, 1, 'LR', 0, 0, 'SUT'),
('LRMIA', 'MONROVIA', '蒙罗维亚', 0, 1, 'LR', 0, 0, 'SUT'),
('LYBEN', 'BENGHAZI', '班加西', 0, 1, 'LY', 0, 0, 'SUT'),
('LYDER', 'DERNA', '德尔纳', 0, 1, 'LY', 0, 0, 'SUT'),
('LYESR', 'ES SIDER', '锡德尔', 0, 1, 'LY', 0, 0, 'SUT'),
('LYMEB', 'MARSA EL BREGA', '马萨勃利加', 0, 1, 'LY', 0, 0, 'SUT'),
('LYMIS', 'MISURATA', '米苏拉塔区', 0, 1, 'LY', 0, 0, 'SUT'),
('LYRLA', 'RAS LANUF', '拉斯拉努夫', 0, 1, 'LY', 0, 0, 'SUT'),
('LYTOB', 'TOBRUK', '图卜鲁格', 0, 1, 'LY', 0, 0, 'SUT'),
('LYTRI', 'TRIPOLI(LY)', '的黎波里', 0, 1, 'LY', 0, 0, 'SUT'),
('LYZUE', 'ZUETINA', '祖埃提纳', 0, 1, 'LY', 0, 0, 'SUT'),
('LTKLA', 'KLAIPEDA', '克莱佩达', 0, 1, 'LT', 0, 0, 'SUT'),
('LIVIL', 'VILNIUS', '维尔纽斯', 0, 1, 'LT', 0, 0, 'SUT'),
('LIKLA', 'KLAPEIDA', '', 0, 1, 'LT', 0, 0, 'SUT');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('LIKDA', 'KLAPEIDA', '', 0, 1, 'LT', 0, 0, 'SUT'),
('LUXEM', 'LUXEMBOURG', '卢森堡', 0, 1, 'LU', 0, 0, 'SUT'),
('ARDIA', 'DIAMANTE', '迪亚曼泰', 0, 1, 'MG', 0, 0, 'SUT'),
('MGANA', 'ANALALAVA', '阿纳拉拉瓦', 0, 1, 'MG', 0, 0, 'SUT'),
('MGANT', 'ANTSIRANANA', '安齐拉纳纳', 0, 1, 'MG', 0, 0, 'SUT'),
('MGFAR', 'FARAFANGANA', '法拉凡加纳', 0, 1, 'MG', 0, 0, 'SUT'),
('MGAHA', 'ANTALAHA', '安塔拉哈', 0, 1, 'MG', 0, 0, 'SUT'),
('MGFDA', 'Fort Dauphin', '多凡堡', 0, 1, 'MG', 0, 0, 'SUT'),
('MGMAH', 'MAJUNGA', '马任加', 0, 1, 'MG', 0, 0, 'SUT'),
('MGMAR', 'MAROANTSETRA', '马鲁安采特拉', 0, 1, 'MG', 0, 0, 'SUT'),
('MGMBE', 'MOROMBE', '穆龙贝', 0, 1, 'MG', 0, 0, 'SUT'),
('MGMRA', 'MANAKARA', '马纳卡拉', 0, 1, 'MG', 0, 0, 'SUT'),
('MGMRY', 'MANANJARY', '马南扎里', 0, 1, 'MG', 0, 0, 'SUT'),
('MGMVA', 'MORONDAVA', '穆龙达瓦', 0, 1, 'MG', 0, 0, 'SUT'),
('MGNBE', 'NOSY BE', '贝岛', 0, 1, 'MG', 0, 0, 'SUT'),
('MGSAM', 'SAMBAVA', '桑巴瓦', 0, 1, 'MG', 0, 0, 'SUT'),
('MGTOA', 'TOAMASINA', '图阿马西纳', 0, 1, 'MG', 0, 0, 'SUT'),
('MGTOL', 'TOLEARY', '图莱亚尔', 0, 1, 'MG', 0, 0, 'SUT'),
('MGTRO', 'TOLAGNARO', '托拉纳罗', 0, 1, 'MG', 0, 0, 'SUT'),
('MATAM', 'TAMATAVE', '塔马塔夫', 0, 1, 'MG', 0, 0, 'SUT'),
('NOS', 'NOSSI-BE', '诺西比', 0, 1, 'MG', 0, 0, 'SUT'),
('MABLA', 'BLANTYRE', '', 0, 1, 'MA', 0, 0, 'SUT'),
('MALIL', 'LILONGWE', '利朗维', 0, 1, 'MA', 0, 0, 'SUT'),
('MYBGD', 'BAGAN DATOH', '巴眼拿督', 0, 1, 'MY', 0, 0, 'SUT'),
('MYBIN', 'BINATANG', '比那唐', 0, 1, 'MY', 0, 0, 'SUT'),
('MYBTP', 'BATU PAHAT', '巴株巴辖', 0, 1, 'MY', 0, 0, 'SUT'),
('MYBTU', 'BINTULU', '民都鲁', 0, 1, 'MY', 0, 0, 'SUT'),
('MYBUT', 'BUTTERWORTH', '巴特沃思', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKOB', 'KOTA BHARU', '哥打巴鲁', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKOK', 'KOTA KINABALU', '亚庇', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKPA', 'KUALA PAHANG', '瓜拉彭亨', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKRO', 'KUALA ROMPIN', '瓜拉弄宾', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKSE', 'KUALA SELANGOR', '瓜拉雪兰莪', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKSU', 'KUALA SUAI', '瓜拉苏埃', 0, 1, 'MY', 0, 0, 'SUT'),
('MYGEO', 'GEORGETOWN(MY)', '乔治敦', 0, 1, 'MY', 0, 0, 'SUT'),
('MYJOB', 'JOHORE BAHRU', '柔佛巴鲁', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKER', 'KERTEH', '居茶', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKTR', 'KUALA TRENGGANU', '瓜拉丁加奴', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKUA', 'KUANTAN', '关丹', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKUC', 'KUCHING', '古晋', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKUD', 'KUDAT', '古达', 0, 1, 'MY', 0, 0, 'SUT'),
('MYKUN', 'KUNAK', '库纳克', 0, 1, 'MY', 0, 0, 'SUT'),
('MYLAB', 'LABUAN', '拉布安', 0, 1, 'MY', 0, 0, 'SUT'),
('MYLAD', 'LAHAD DATU', '拉哈达图', 0, 1, 'MY', 0, 0, 'SUT'),
('MYLAW', 'LAWAS', '拉瓦斯', 0, 1, 'MY', 0, 0, 'SUT'),
('MYLIM', 'LIMBANG', '林邦', 0, 1, 'MY', 0, 0, 'SUT'),
('MYLUM', 'LUMUT(MY)', '卢穆特', 0, 1, 'MY', 0, 0, 'SUT'),
('MYMEL', 'MELAKA', '马六甲', 0, 1, 'MY', 0, 0, 'SUT'),
('MYPDI', 'PORT DICKSON', '波德申', 0, 1, 'MY', 0, 0, 'SUT'),
('MYPEN', 'PENANG', '槟城', 0, 1, 'MY', 0, 0, 'SUT'),
('MYPKE', 'PORT KELANG', '巴生港', 0, 1, 'MY', 0, 0, 'SUT'),
('MYMIR', 'MIRI', '米里', 0, 1, 'MY', 0, 0, 'SUT'),
('MYPAG', 'PASIR GUDANG', '帕西古当', 0, 1, 'MY', 0, 0, 'SUT'),
('MYPRI', 'PRAI', '布莱', 0, 1, 'MY', 0, 0, 'SUT'),
('MYSAN', 'SANDAKAN', '山打根', 0, 1, 'MY', 0, 0, 'SUT'),
('MYSAR', 'SARIKEI', '泗里奎', 0, 1, 'MY', 0, 0, 'SUT'),
('MYSEM', 'SEMPORNA', '仙本那', 0, 1, 'MY', 0, 0, 'SUT'),
('MYSIB', 'SIBU', '泗务', 0, 1, 'MY', 0, 0, 'SUT'),
('MYTAW', 'TAWAU', '斗湖', 0, 1, 'MY', 0, 0, 'SUT'),
('MYTJM', 'TANJONG MANI', '丹章马尼', 0, 1, 'MY', 0, 0, 'SUT'),
('MYWAB', 'WALLANCE BAY', '哗拉司贝', 0, 1, 'MY', 0, 0, 'SUT'),
('MLXY', 'KUALA LUMPUR CITY LIMIT', '吉隆坡', 0, 1, 'MY', 0, 0, 'SUT'),
('MALE', 'MALE', '马累', 0, 1, 'MV', 0, 0, 'SUT'),
('MABAM', 'BAMAKO', '巴马科', 0, 1, 'ML', 0, 0, 'SUT'),
('MTVAL', 'VALLETTA', '瓦莱塔', 0, 1, 'MT', 0, 0, 'SUT'),
('MTMAL', 'MALTA', '马耳他', 0, 1, 'MT', 0, 0, 'SUT'),
('MUPLO', 'PORT LOUIS', '路易港', 0, 1, 'MU', 0, 0, 'SUT'),
('ARENS', 'ENSENADA(AR)', '恩塞纳达', 0, 1, 'MX', 0, 0, 'SUT'),
('MEMEL', 'MELILLA', '梅利利亚', 0, 1, 'MX', 0, 0, 'SUT'),
('MXACA', 'ACAPULCO', '阿卡普尔科', 0, 1, 'MX', 0, 0, 'SUT'),
('MXALT', 'ALTAMIRA(MX)', '阿尔塔米拉', 0, 1, 'MX', 0, 0, 'SUT'),
('MXALV', 'ALVARADO', '阿尔瓦拉多', 0, 1, 'MX', 0, 0, 'SUT'),
('MXCAM', 'CAMPECHE', '坎佩切', 0, 1, 'MX', 0, 0, 'SUT'),
('MXCAT', 'CAYO ARCAS', '阿卡斯群岛码头', 0, 1, 'MX', 0, 0, 'SUT'),
('MXCDC', 'CIUDAD DEL CARM', '卡门城', 0, 1, 'MX', 0, 0, 'SUT'),
('MXCOA', 'COATZACOALCOS', '夸察夸尔科斯', 0, 1, 'MX', 0, 0, 'SUT'),
('MXENS', 'ENSENADA', '恩塞纳达（墨）', 0, 1, 'MX', 0, 0, 'SUT'),
('MXMIN', 'MINATITLAN', '米纳蒂特兰', 0, 1, 'MX', 0, 0, 'SUT'),
('MXPRO', 'PROGRESS', '普罗格雷索', 0, 1, 'MX', 0, 0, 'SUT'),
('MXSRO', 'SANTA ROSALIA', '圣罗萨利亚', 0, 1, 'MX', 0, 0, 'SUT'),
('MXTOP', 'TOPOLOBAMPO', '托波洛班波', 0, 1, 'MX', 0, 0, 'SUT'),
('MXTUX', 'TUXPAN', '图斯潘', 0, 1, 'MX', 0, 0, 'SUT'),
('MXSAC', 'SALINA CRUZ', '萨利纳克鲁斯', 0, 1, 'MX', 0, 0, 'SUT'),
('MXVER', 'VERACRUZ', '韦拉克鲁斯', 0, 1, 'MX', 0, 0, 'SUT'),
('MEAGU', 'AGUASCALIENTES', '阿瓜斯卡连特斯', 0, 1, 'MX', 0, 0, 'SUT'),
('MECAN', 'CANCUN', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MECEL', 'CELAYA', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MECIU', 'CIUDAD VICTORIA', '维多利亚城', 0, 1, 'MX', 0, 0, 'SUT'),
('MECUE', 'CUERNAVACA', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MECUL', 'CULIACAN', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEDUR', 'DURANGO', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEFRE', 'FRESNILLO', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEGUA', 'GUADALAJARA,MEXICO', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEGTO', 'GUANAJUATO', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEHER', 'HERMOSILLO', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEJUA', 'JUAREZ', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MELEO', 'LEON', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MELOS', 'LOS MOCHIS', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEMAT', 'MATAMOROS', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEMEX', 'MEXICALI', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEMCO', 'MEXICO CITY', '墨西哥城', 0, 1, 'MX', 0, 0, 'SUT'),
('MEMON', 'MONCLOVA', '蒙克洛瓦', 0, 1, 'MX', 0, 0, 'SUT'),
('MEMEY', 'MONTERREY', '蒙特雷', 0, 1, 'MX', 0, 0, 'SUT'),
('MEMOR', 'MORELIA', '莫雷利亚', 0, 1, 'MX', 0, 0, 'SUT'),
('MEMOT', 'MOTUL', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MENOG', 'NOGALES', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MENUE', 'NUEVO LAREDO', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEPRO', 'PROGRESO', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEPUE', 'PUEBLA', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEPTO', 'PUERTO MORELOS', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MEQUE', 'QUERETARO', '克雷塔罗', 0, 1, 'MX', 0, 0, 'SUT'),
('MEREY', 'REYNOSA', '雷诺萨', 0, 1, 'MX', 0, 0, 'SUT'),
('MESAL', 'SALINA CRUZ', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MESLO', 'SALTILLO', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MESAN', 'SAN FRANCISCO(MEXICO)', '圣弗朗西斯科', 0, 1, 'MX', 0, 0, 'SUT'),
('MESSI', 'SAN LUIS POTOSI', '', 0, 1, 'MX', 0, 0, 'SUT'),
('METAM', 'TAMPICO', '坦皮克', 0, 1, 'MX', 0, 0, 'SUT'),
('METIJ', 'TIJUANA', '', 0, 1, 'MX', 0, 0, 'SUT'),
('METOL', 'TOLUCA', '托卢卡', 0, 1, 'MX', 0, 0, 'SUT'),
('TMETO', 'TORREON', '', 0, 1, 'MX', 0, 0, 'SUT'),
('MAME', 'MANZANILLO,MEXICO', '曼萨尼隆', 0, 1, 'MX', 0, 0, 'SUT'),
('CDJ', 'CD JUAREZ', '', 0, 1, 'MX', 0, 0, 'SUT'),
('CECEU', 'CEUTA', '休达', 0, 1, 'MA', 0, 0, 'SUT'),
('MAMOH', 'MOHAMMEDIA', '穆罕默迪耶', 0, 1, 'MA', 0, 0, 'SUT'),
('MARBT', 'RABAT', '拉巴特', 0, 1, 'MA', 0, 0, 'SUT'),
('MASAF', 'SAFI', '萨菲', 0, 1, 'MA', 0, 0, 'SUT'),
('MATAN', 'TANGIER', '丹吉尔', 0, 1, 'MA', 0, 0, 'SUT'),
('MATAR', 'TARFAYA', '塔尔法亚', 0, 1, 'MA', 0, 0, 'SUT'),
('MAAGA', 'AGADIR', '阿加迪尔', 0, 1, 'MA', 0, 0, 'SUT'),
('MACAS', 'CASABLANCA', '卡萨布兰卡', 0, 1, 'MA', 0, 0, 'SUT'),
('MAEJA', 'EL JADIDA', '贾迪达', 0, 1, 'MA', 0, 0, 'SUT'),
('MAESS', 'ESSAOUIRA', '索维拉', 0, 1, 'MA', 0, 0, 'SUT'),
('MAKEN', 'KENITRA', '盖尼特拉', 0, 1, 'MA', 0, 0, 'SUT'),
('MALAR', 'LARACHE', '拉腊什', 0, 1, 'MA', 0, 0, 'SUT'),
('MZANE', 'ANTONIO ENES', '安托尼奥埃尼什', 0, 1, 'MZ', 0, 0, 'SUT'),
('MZBRA', 'BEIRA', '贝拉', 0, 1, 'MZ', 0, 0, 'SUT'),
('MZCDE', 'CHINDE', '欣代', 0, 1, 'MZ', 0, 0, 'SUT'),
('MZIBO', 'IBO', '伊博', 0, 1, 'MZ', 0, 0, 'SUT'),
('MZINH', 'INHAMBANE', '伊尼扬巴内', 0, 1, 'MZ', 0, 0, 'SUT'),
('MZMAP', 'MAPUTO', '马普托', 0, 1, 'MZ', 0, 0, 'SUT'),
('MZMOC', 'MOCIMBOA DA PRAIA', '莫辛布瓦达普拉亚 ', 0, 1, 'MZ', 0, 0, 'SUT'),
('MZMOM', 'MOMA', '莫马', 0, 1, 'MZ', 0, 0, 'SUT'),
('MZMOZ', 'MOZAMBIQUE', '莫桑比克', 0, 1, 'MZ', 0, 0, 'SUT'),
('MZNAC', 'NACALA', '纳卡拉', 0, 1, 'MZ', 0, 0, 'SUT'),
('MZQUE', 'QUELIMANE', '克利马内', 0, 1, 'MZ', 0, 0, 'SUT'),
('MOMUT', 'MUTARE', '', 0, 1, 'MZ', 0, 0, 'SUT'),
('MMMGI', 'MERGUI', '墨吉', 0, 1, 'MM', 0, 0, 'SUT'),
('MMSAN', 'SANDOWAY', '山多威', 0, 1, 'MM', 0, 0, 'SUT'),
('MMTAV', 'TAVOY', '土瓦', 0, 1, 'MM', 0, 0, 'SUT'),
('MMTEN', 'TENASSERIM', '德林达伊', 0, 1, 'MM', 0, 0, 'SUT'),
('NALUD', 'LUDERITZ', '卢德立次', 0, 1, 'NA', 0, 0, 'SUT'),
('NAWVB', 'WALVIS BAY', '鲸湾港', 0, 1, 'NA', 0, 0, 'SUT'),
('NAWAY', 'WAIVIS BAY', '沃尔维斯港', 0, 1, 'NA', 0, 0, 'SUT'),
('KAT', 'KATHMANDU', '加德满都', 0, 1, 'NP', 0, 0, 'SUT'),
('NLAIK', 'AIKMAAR', '阿尔克马', 0, 1, 'NL', 0, 0, 'SUT'),
('NLAMS', 'AMSTERDAM', '阿姆斯特丹', 0, 1, 'NL', 0, 0, 'SUT'),
('NLARN', 'ARNHEM', '阿纳姆', 0, 1, 'NL', 0, 0, 'SUT'),
('NLBRO', 'BROUWERSHAVEN', '布劳沃斯港', 0, 1, 'NL', 0, 0, 'SUT'),
('NLDEL', 'DELFZIJL', '德尔夫寄尔', 0, 1, 'NL', 0, 0, 'SUT'),
('NLDOR', 'DORDRECHT', '多德雷赫特', 0, 1, 'NL', 0, 0, 'SUT'),
('NLGRO', 'GRONINGEN', '格罗宁根', 0, 1, 'NL', 0, 0, 'SUT'),
('NLHAR', 'HARLINGEN', '哈灵根', 0, 1, 'NL', 0, 0, 'SUT'),
('NLHOH', 'HOOK OF HOLLAND', '荷兰角', 0, 1, 'NL', 0, 0, 'SUT'),
('NLMAS', 'MAASSLUIS', '马斯莱斯', 0, 1, 'NL', 0, 0, 'SUT'),
('NLMID', 'MIDDELBURG', '米德尔堡', 0, 1, 'NL', 0, 0, 'SUT'),
('NLROT', 'ROTTERDAM', '鹿特丹', 0, 1, 'NL', 0, 0, 'SUT'),
('NLSCH', 'SCHEVENINGEN', '斯海弗宁恩', 0, 1, 'NL', 0, 0, 'SUT'),
('NLSCM', 'SCHIEDAM', '斯希丹', 0, 1, 'NL', 0, 0, 'SUT'),
('NLSLU', 'SLUISKIL', '斯勒伊斯基尔', 0, 1, 'NL', 0, 0, 'SUT'),
('NLTER', 'TERNEUZEN', '泰尔讷曾', 0, 1, 'NL', 0, 0, 'SUT'),
('NLZAA', 'ZAANDAM', '赞丹', 0, 1, 'NL', 0, 0, 'SUT'),
('NLZIE', 'ZIERIKZEE', '济里克泽', 0, 1, 'NL', 0, 0, 'SUT'),
('NEALK', 'ALKMAAR', '阿尔克岛', 0, 1, 'NL', 0, 0, 'SUT'),
('NLDOT', 'DORDRECHT', '多德雷赫德', 0, 1, 'NL', 0, 0, 'SUT'),
('NLDEN', 'DEN HELDER', '赫尔德', 0, 1, 'NL', 0, 0, 'SUT'),
('ANBAR', 'BARCADERA', '巴尔卡德拉', 0, 1, 'AN', 0, 0, 'SUT'),
('ANKRA', 'KRALENDIJK', '克拉伦代克', 0, 1, 'AN', 0, 0, 'SUT'),
('ANORA', 'ORANJESTAD', '奥拉涅斯塔德', 0, 1, 'AN', 0, 0, 'SUT'),
('ANWIL', 'WILLEMSTAD(AN)', '威廉斯塔德', 0, 1, 'AN', 0, 0, 'SUT'),
('NLWIL', 'WILLEMSTAD(NL)', '威廉斯塔德', 0, 1, 'AN', 0, 0, 'SUT'),
('NCNOA', 'NOUMEA', '努美阿', 0, 1, 'NC', 0, 0, 'SUT'),
('AK', 'AKAROA', '阿卡罗亚', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZLYT', 'LYTTELTON', '利特尔顿', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZMMI', 'MOUNT MAUNGANUI', '芒特芒阿努伊', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZNAP', 'NAPIER', '内皮尔', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZNEL', 'NELSON', '纳尔逊', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZNPL', 'NEW PLYMOUTH', '新普利茅斯', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZBLF', 'BLUFF', '布拉夫', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZDUN', 'DUNEDIN', '达尼丁', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZGIS', 'GISBORNE', '吉斯珀恩', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZGRE', 'GREYMOUTH', '格雷茅斯', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZOPU', 'OPUA', '奥普阿', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZPCH', 'PORT CHALMERS', '查马斯港', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZPIC', 'PICTON', '皮克顿', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZOAM', 'OAMARU', '奥马鲁', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZTAU', 'TAURANGA', '陶朗阿', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZTIM', 'TIMARU', '蒂马鲁', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZWEL', 'WELLINGTON', '惠灵顿', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZWHA', 'WHAHGAREI', '璜加雷', 0, 1, 'NZ', 0, 0, 'SUT'),
('NZCHR', 'CHRISTCHURCH', '克赖斯特撒奇', 0, 1, 'NZ', 0, 0, 'SUT'),
('LAND', 'AUCKLAND', '奥克兰', 0, 1, 'NZ', 0, 0, 'SUT'),
('NCH', 'CHALMERS', '', 0, 1, 'NZ', 0, 0, 'SUT'),
('MARSD', 'MARSDEN POINT', '', 0, 1, 'NZ', 0, 0, 'SUT'),
('NICOR', 'CORINTO', '科林托', 0, 1, 'NI', 0, 0, 'SUT'),
('NISJS', 'SAN JUAN DEL SUR', '南圣胡安', 0, 1, 'NI', 0, 0, 'SUT'),
('NIMAN', 'MANAGUA', '马那瓜', 0, 1, 'NI', 0, 0, 'SUT'),
('NGKOK', 'KOKO', '科科', 0, 1, 'NG', 0, 0, 'SUT'),
('NGLAG', 'LAGOS', '拉各斯', 0, 1, 'NG', 0, 0, 'SUT'),
('NGOKR', 'OKRIKA', '奥克里卡', 0, 1, 'NG', 0, 0, 'SUT'),
('NGPHA', 'PORT HARCOURT', '哈科特港', 0, 1, 'NG', 0, 0, 'SUT'),
('NGSAP', 'SAPELE', '萨佩莱', 0, 1, 'NG', 0, 0, 'SUT'),
('NGWAR', 'WARRI', '瓦里', 0, 1, 'NG', 0, 0, 'SUT'),
('NGAPA', 'APAPA', '阿帕帕', 0, 1, 'NG', 0, 0, 'SUT'),
('NGBON', 'BONNY', '邦尼', 0, 1, 'NG', 0, 0, 'SUT'),
('NGBUR', 'BURUTU', '布鲁图', 0, 1, 'NG', 0, 0, 'SUT'),
('NGCAL', 'CALABAR', '卡拉巴尔', 0, 1, 'NG', 0, 0, 'SUT'),
('NGESC', 'ESCRAVOS', '拉沃斯河', 0, 1, 'NG', 0, 0, 'SUT'),
('NGBU', 'BURUTU', '布鲁图', 0, 1, 'NG', 0, 0, 'SUT'),
('LA', 'LAGOS,NIGERIA', '拉各斯', 0, 1, 'NG', 0, 0, 'SUT'),
('GREEN', 'GREENSBORO', '', 0, 1, 'NF', 0, 0, 'SUT'),
('HAGE', 'HAGERSTOWN', '', 0, 1, 'NF', 0, 0, 'SUT'),
('NOHOR', 'HORTEN', '霍腾', 0, 1, 'NO', 0, 0, 'SUT'),
('NOHOY', 'HOYANGER', '赫扬厄尔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOKLE', 'KLEVEN', '克来文', 0, 1, 'NO', 0, 0, 'SUT'),
('NOKOP', 'KOPERVIK', '科珀维克', 0, 1, 'NO', 0, 0, 'SUT'),
('NOKRA', 'KRAGERO', '克拉格勒', 0, 1, 'NO', 0, 0, 'SUT'),
('NOKRN', 'KRISTIANSUND N.', '克里斯蒂安松（北）', 0, 1, 'NO', 0, 0, 'SUT'),
('NOKRS', 'KRISTIANSAND S.', '克里斯蒂安桑（南）', 0, 1, 'NO', 0, 0, 'SUT'),
('NOKVI', 'KVINESDAL', '克维内斯达尔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOLAN', 'LANGESUND', '朗厄松', 0, 1, 'NO', 0, 0, 'SUT'),
('NOLIL', 'LILLESAND', '利勒桑', 0, 1, 'NO', 0, 0, 'SUT'),
('NOLOD', 'LODINGEN', '勒丁恩', 0, 1, 'NO', 0, 0, 'SUT'),
('NOLVK', 'LARVIK', '拉尔维克', 0, 1, 'NO', 0, 0, 'SUT'),
('NOMDL', 'MANDAL', '曼达尔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOMJN', 'MOSJOEN', '莫舍恩', 0, 1, 'NO', 0, 0, 'SUT'),
('NOMLM', 'MALM', '马尔姆', 0, 1, 'NO', 0, 0, 'SUT'),
('NOMOL', 'MOLDE', '莫尔德', 0, 1, 'NO', 0, 0, 'SUT'),
('NOMOR', 'MO I RANA', '摩城', 0, 1, 'NO', 0, 0, 'SUT'),
('NOMOS', 'MOSS', '莫斯', 0, 1, 'NO', 0, 0, 'SUT'),
('NONAR', 'NARVIK', '纳尔维克', 0, 1, 'NO', 0, 0, 'SUT'),
('NOODD', 'ODDA', '奥达', 0, 1, 'NO', 0, 0, 'SUT'),
('NOPOR', 'PORSGRUNN', '波斯格伦', 0, 1, 'NO', 0, 0, 'SUT'),
('NORIS', 'RISOR', '里瑟尔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOSAN', 'SANDEFGORD', '桑讷菲尤尔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOOSL', 'OSLO', '奥斯陆', 0, 1, 'NO', 0, 0, 'SUT'),
('NOSGN', 'SVELGEN', '斯韦尔根', 0, 1, 'NO', 0, 0, 'SUT'),
('NOSKI', 'SKIEN', '希恩', 0, 1, 'NO', 0, 0, 'SUT'),
('NOSKU', 'SKUDENESHAVN', '斯屈德内斯港', 0, 1, 'NO', 0, 0, 'SUT'),
('NOSAR', 'SARPSBORG', '萨尔普斯堡', 0, 1, 'NO', 0, 0, 'SUT'),
('NOSAU', 'SAUDA', '赛于达', 0, 1, 'NO', 0, 0, 'SUT'),
('NOSNS', 'SANDNES', '桑内斯', 0, 1, 'NO', 0, 0, 'SUT'),
('NOSTA', 'STAVANGER', '斯塔万格', 0, 1, 'NO', 0, 0, 'SUT'),
('NOSTE', 'STEINKJER', '斯泰恩谢尔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOSVK', 'SVELVIK', '斯瓦尔维克', 0, 1, 'NO', 0, 0, 'SUT'),
('NOTHA', 'THAMSHAMN', '塔姆港', 0, 1, 'NO', 0, 0, 'SUT'),
('NOTHM', 'TRONDHEIM', '特隆赫姆', 0, 1, 'NO', 0, 0, 'SUT'),
('NOTON', 'TONSBERG', '滕斯贝格', 0, 1, 'NO', 0, 0, 'SUT'),
('NOTOU', 'TOU', '都港', 0, 1, 'NO', 0, 0, 'SUT'),
('NOTRO', 'TROMSO', '特罗姆瑟', 0, 1, 'NO', 0, 0, 'SUT'),
('NOTVE', 'TVEDESTRAND', '特维德斯特兰德', 0, 1, 'NO', 0, 0, 'SUT'),
('NOVAD', 'VADSO', '瓦德瑟', 0, 1, 'NO', 0, 0, 'SUT'),
('NOVAR', 'VARDO', '沃尔德', 0, 1, 'NO', 0, 0, 'SUT'),
('NRNRI', 'NAURU ISLAND', '瑙鲁岛', 0, 1, 'NO', 0, 0, 'SUT'),
('NOAAL', 'AALESUND', '奥勒松', 0, 1, 'NO', 0, 0, 'SUT'),
('NOARE', 'ARENDAL', '阿伦达尔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOBGN', 'BERGEN', '卑尔根', 0, 1, 'NO', 0, 0, 'SUT'),
('NOBRE', 'BREVIK', '布雷维克', 0, 1, 'NO', 0, 0, 'SUT'),
('NODRA', 'DRAMMEN', '德拉门', 0, 1, 'NO', 0, 0, 'SUT'),
('NOEGE', 'EGERSUND', '艾格松', 0, 1, 'NO', 0, 0, 'SUT'),
('NOEIT', 'EITRHEIM', '艾特尔海姆', 0, 1, 'NO', 0, 0, 'SUT'),
('NOFAR', 'FARSUND', '法尔松德', 0, 1, 'NO', 0, 0, 'SUT'),
('NOFLE', 'FLEKKEFJORD', '弗莱克菲尤尔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOFRE', 'FREDRIKSTAD', '腓特烈斯塔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOHAL', 'HALDEN', '哈尔登', 0, 1, 'NO', 0, 0, 'SUT'),
('NOHAM', 'HAMMERFEST', '哈默菲斯特', 0, 1, 'NO', 0, 0, 'SUT'),
('NOHAR', 'HARSTAD', '哈尔斯塔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOGRI', 'Grimstad', '格里姆斯塔', 0, 1, 'NO', 0, 0, 'SUT'),
('NOHAU', 'HAUGESUND', '海尔格松', 0, 1, 'NO', 0, 0, 'SUT'),
('NOHOL', 'HOLMESTRAND', '霍尔默斯特兰', 0, 1, 'NO', 0, 0, 'SUT'),
('NOAL', 'ALESUND', '奥勒松', 0, 1, 'NO', 0, 0, 'SUT'),
('NOAR', 'ARDALSTANGEN', '阿尔达尔斯坦根', 0, 1, 'NO', 0, 0, 'SUT'),
('OMMAF', 'MINA AL FAHAL', '法赫尔港', 0, 1, 'OM', 0, 0, 'SUT'),
('OMMQS', 'MUSCAT', '米纳卡布斯', 0, 1, 'OM', 0, 0, 'SUT'),
('OMMUT', 'MUTTRAH', '马特拉', 0, 1, 'OM', 0, 0, 'SUT'),
('OMSUL', 'P.S.QABOOS', '卡布斯港', 0, 1, 'OM', 0, 0, 'SUT'),
('AA', 'SULTAN QABOOS', '卡布斯港', 0, 1, 'OM', 0, 0, 'SUT'),
('SHA', 'SHALALA', '', 0, 1, 'OM', 0, 0, 'SUT'),
('PKKAR', 'KARACHI', '卡拉奇', 0, 1, 'PK', 0, 0, 'SUT'),
('PAPAC', 'PANAMA CITY', '巴拿马城', 0, 1, 'PA', 0, 0, 'SUT'),
('PAAGD', 'AGUA DULCE', '阿瓜杜尔塞', 0, 1, 'PA', 0, 0, 'SUT'),
('PABAL', 'BALBOA', '巴尔博亚', 0, 1, 'PA', 0, 0, 'SUT'),
('PACOL', 'COLON', '科隆', 0, 1, 'PA', 0, 0, 'SUT'),
('PACRI', 'CRISTOBAL', '克里斯托瓦尔', 0, 1, 'PA', 0, 0, 'SUT'),
('PAPAN', 'PANAMA', '帕纳马', 0, 1, 'PA', 0, 0, 'SUT'),
('PACOF', 'COLON FREE ZONE', '科隆', 0, 1, 'PA', 0, 0, 'SUT'),
('PAMAN', 'MANZANILLO(PANAMA)', '曼萨尼罗', 0, 1, 'PA', 0, 0, 'SUT'),
('PGLAE', 'LAE', '莱城', 0, 1, 'PG', 0, 0, 'SUT'),
('PGPMO', 'PORT MORESBY', '莫尔兹比港', 0, 1, 'PG', 0, 0, 'SUT'),
('PGRAB', 'RABAUL', '腊包尔', 0, 1, 'PG', 0, 0, 'SUT'),
('PGWEK', 'WEWAK', '威瓦克', 0, 1, 'PG', 0, 0, 'SUT'),
('PYASU', 'ASUNCION', '亚松森', 0, 1, 'PY', 0, 0, 'SUT'),
('PAENC', 'ENCARNACION', '', 0, 1, 'PY', 0, 0, 'SUT'),
('PECAL', 'CALLAO', '卡亚俄', 0, 1, 'PE', 0, 0, 'SUT'),
('PECAZ', 'CERRO AZUL', '塞罗阿苏尔', 0, 1, 'PE', 0, 0, 'SUT'),
('PECHA', 'CHANCAY', '钱凯', 0, 1, 'PE', 0, 0, 'SUT'),
('PECHI', 'CHIMBOTE', '钦博塔', 0, 1, 'PE', 0, 0, 'SUT'),
('PEETN', 'ETEN', '埃腾', 0, 1, 'PE', 0, 0, 'SUT'),
('PEILO', 'ILO', '伊洛', 0, 1, 'PE', 0, 0, 'SUT'),
('PEMAT', 'MATARANI', '马塔拉尼', 0, 1, 'PE', 0, 0, 'SUT'),
('PEPAC', 'PACASMAYO', '帕卡斯马约', 0, 1, 'PE', 0, 0, 'SUT'),
('PEPCO', 'PISCO', '皮斯科', 0, 1, 'PE', 0, 0, 'SUT'),
('PEPTA', 'PAITA', '派塔', 0, 1, 'PE', 0, 0, 'SUT'),
('PESAL', 'SALAVERRY', '萨拉韦里', 0, 1, 'PE', 0, 0, 'SUT'),
('PESJU', 'SAN JUAN(PE)', '圣胡安', 0, 1, 'PE', 0, 0, 'SUT'),
('PEPIM', 'PIMENTEL', '皮门特尔', 0, 1, 'PE', 0, 0, 'SUT'),
('PESNI', 'SAN NICOLAS(PE)', '圣尼古拉斯', 0, 1, 'PE', 0, 0, 'SUT'),
('PETAL', 'TALARA', '塔拉拉', 0, 1, 'PE', 0, 0, 'SUT'),
('PELMA', 'LIMA', '利马', 0, 1, 'PE', 0, 0, 'SUT'),
('ARSFO', 'SAN FERNANDO', '圣弗尔南多', 0, 1, 'PH', 0, 0, 'SUT'),
('PHPSM', 'PORT SANTA MARI', '圣玛丽亚港', 0, 1, 'PH', 0, 0, 'SUT'),
('PHSBC', 'SUBIC', '苏比克', 0, 1, 'PH', 0, 0, 'SUT'),
('PHSCA', 'SAN CARLOS(PH)', '圣卡洛斯', 0, 1, 'PH', 0, 0, 'SUT'),
('PHSCR', 'SANTA CRUZ(LUZO', '圣克鲁斯', 0, 1, 'PH', 0, 0, 'SUT'),
('PHSFE', 'SAN FERNANDO(PH', '圣弗尔南多', 0, 1, 'PH', 0, 0, 'SUT'),
('PHTAB', 'TABACO', '塔瓦科', 0, 1, 'PH', 0, 0, 'SUT'),
('PHTAC', 'TACLOBAN', '塔克洛班', 0, 1, 'PH', 0, 0, 'SUT'),
('PHTDC', 'TANDOC', '坦多哥', 0, 1, 'PH', 0, 0, 'SUT'),
('PHZAM', 'ZAMBOANGA', '三宝颜', 0, 1, 'PH', 0, 0, 'SUT'),
('PHANT', 'ANTIMONAN', '安蒂莫纳', 0, 1, 'PH', 0, 0, 'SUT'),
('PHAPA', 'APARRI', '阿帕里', 0, 1, 'PH', 0, 0, 'SUT'),
('PHBAC', 'BACOLOD', '巴科洛德', 0, 1, 'PH', 0, 0, 'SUT'),
('PHBAT', 'BATANGAS', '八打雁', 0, 1, 'PH', 0, 0, 'SUT'),
('PHBTN', 'BATAAN', '巴丹', 0, 1, 'PH', 0, 0, 'SUT'),
('PHCAP', 'CAPIZ', '卡皮斯', 0, 1, 'PH', 0, 0, 'SUT'),
('PHCDZ', 'CADIZ(PH)', '加的斯', 0, 1, 'PH', 0, 0, 'SUT'),
('PHCEB', 'CEBU', '宿务', 0, 1, 'PH', 0, 0, 'SUT'),
('PHCOT', 'COTABATO', '哥把巴托', 0, 1, 'PH', 0, 0, 'SUT'),
('PHCDO', 'CAGAYAN DE ORO', '卡加延德奥罗', 0, 1, 'PH', 0, 0, 'SUT'),
('PHDAV', 'DAVAO', '达沃', 0, 1, 'PH', 0, 0, 'SUT'),
('PHDGB', 'DINGALAN BAY', '丁阿兰湾', 0, 1, 'PH', 0, 0, 'SUT'),
('PHDGT', 'DINAGAT', '迪纳加特', 0, 1, 'PH', 0, 0, 'SUT'),
('PHDIP', 'DIPOLOG', '第波罗', 0, 1, 'PH', 0, 0, 'SUT'),
('PHDUM', 'DUMAGUETE', '杜马格特', 0, 1, 'PH', 0, 0, 'SUT'),
('PHGUI', 'GUIMARAS ISLAND', '吉马拉斯岛', 0, 1, 'PH', 0, 0, 'SUT'),
('PHILA', 'ISABELA(PH)', '伊萨贝拉', 0, 1, 'PH', 0, 0, 'SUT'),
('PHILI', 'ILIGAN', '伊利甘', 0, 1, 'PH', 0, 0, 'SUT'),
('PHILO', 'ILOILO', '恰朗', 0, 1, 'PH', 0, 0, 'SUT'),
('PHJOL', 'JOLO', '霍洛', 0, 1, 'PH', 0, 0, 'SUT'),
('PHJPA', 'JOSE PANGANIBAN', '何塞庞阿尼班村', 0, 1, 'PH', 0, 0, 'SUT'),
('PHLEG', 'LEGASPI', '黎牙实比', 0, 1, 'PH', 0, 0, 'SUT'),
('PHLUN', 'LA UNION(PH)', '拉乌尼翁', 0, 1, 'PH', 0, 0, 'SUT'),
('PHMAN', 'MANILA', '马尼拉', 0, 1, 'PH', 0, 0, 'SUT'),
('PHMNH', 'MANILA NORTH HA', '马尼拉北港', 0, 1, 'PH', 0, 0, 'SUT'),
('PHPPR', 'PUERTO PRINCESA', '普林塞萨港', 0, 1, 'PH', 0, 0, 'SUT'),
('PHAN', 'ANAKAN', '阿纳根', 0, 1, 'PH', 0, 0, 'SUT'),
('MASO', 'MANILA SOUTH HARBOUR', '马尼拉(南港)', 0, 1, 'PH', 0, 0, 'SUT'),
('PLGDA', 'GDANSK', '格但斯克', 0, 1, 'PL', 0, 0, 'SUT'),
('PLGDY', 'GDYNIA', '格丁尼亚', 0, 1, 'PL', 0, 0, 'SUT'),
('PLHEL', 'HEL', '海尔', 0, 1, 'PL', 0, 0, 'SUT'),
('PLDAR', 'DARLOWO', '达尔沃沃', 0, 1, 'PL', 0, 0, 'SUT'),
('PLKOL', 'KOLOBRZEG', '科沃布热格', 0, 1, 'PL', 0, 0, 'SUT'),
('PLSWI', 'SWINOUJSCIE', '希维诺乌伊希切', 0, 1, 'PL', 0, 0, 'SUT'),
('PLSZC', 'SZCZECIN', '什切青', 0, 1, 'PL', 0, 0, 'SUT'),
('POPOZ', 'POZNAN', '波兹南', 0, 1, 'PL', 0, 0, 'SUT'),
('POKRA', 'KRAKOW', '克拉科夫', 0, 1, 'PL', 0, 0, 'SUT'),
('POWAR', 'WARSZAWA', '华沙', 0, 1, 'PL', 0, 0, 'SUT'),
('POWRO', 'WROCLAW', '弗罗兹瓦夫', 0, 1, 'PL', 0, 0, 'SUT'),
('POKAT', 'KATOWICE', '', 0, 1, 'PL', 0, 0, 'SUT'),
('POGLI', 'POLAND', '波兰', 0, 1, 'PL', 0, 0, 'SUT'),
('POGCE', 'GLIWICE', '', 0, 1, 'PL', 0, 0, 'SUT'),
('POLOD', 'LODZ', '', 0, 1, 'PL', 0, 0, 'SUT'),
('POPRU', 'PRUSZKOW', '', 0, 1, 'PL', 0, 0, 'SUT'),
('CRA', 'CRACOW', '', 0, 1, 'PL', 0, 0, 'SUT'),
('PTBEL', 'BELEM(PT)', '贝伦', 0, 1, 'PT', 0, 0, 'SUT'),
('PTFAR', 'FARO', '法鲁', 0, 1, 'PT', 0, 0, 'SUT'),
('PTFIG', 'FIGUEIRA DO FAZ', '菲盖拉达福实', 0, 1, 'PT', 0, 0, 'SUT'),
('PTLIS', 'LISBON', '里斯本', 0, 1, 'PT', 0, 0, 'SUT'),
('PTLXS', 'LEIXOES', '雷克索斯', 0, 1, 'PT', 0, 0, 'SUT'),
('PTAVE', 'AVEIRO', '阿威罗', 0, 1, 'PT', 0, 0, 'SUT'),
('PTBAR', 'BARREIRO', '巴雷鲁', 0, 1, 'PT', 0, 0, 'SUT'),
('PTOLH', 'OLHAO', '奥良', 0, 1, 'PT', 0, 0, 'SUT'),
('PTOPO', 'OPORTO', '波尔图', 0, 1, 'PT', 0, 0, 'SUT'),
('PTPOR', 'PORTIMAO', '波尔蒂芒', 0, 1, 'PT', 0, 0, 'SUT'),
('PTSBL', 'SETUBAL', '塞图巴尔', 0, 1, 'PT', 0, 0, 'SUT'),
('POLEX', 'LEXOIES', '雷克索斯', 0, 1, 'PT', 0, 0, 'SUT'),
('POPOR', 'PORTO', '波尔图', 0, 1, 'PT', 0, 0, 'SUT'),
('POPRT', 'PORTO PORTUGUESE', '', 0, 1, 'PT', 0, 0, 'SUT'),
('PRAGU', 'AGUADILLA', '阿瓜迪亚', 0, 1, 'PR', 0, 0, 'SUT'),
('PRARE', 'ARECIBO', '阿雷西沃', 0, 1, 'PR', 0, 0, 'SUT'),
('PRFAJ', 'FAJARDO', '法哈多', 0, 1, 'PR', 0, 0, 'SUT'),
('PRGCA', 'GUANICA', '瓜尼卡', 0, 1, 'PR', 0, 0, 'SUT'),
('PRGMA', 'GUAYAMA', '瓜亚马', 0, 1, 'PR', 0, 0, 'SUT'),
('PRGUA', 'GUAYANILLA', '瓜亚尼亚', 0, 1, 'PR', 0, 0, 'SUT'),
('PRMAY', 'MAYAGUEZ', '马亚圭斯', 0, 1, 'PR', 0, 0, 'SUT'),
('PRPON', 'PONCE', '蓬塞', 0, 1, 'PR', 0, 0, 'SUT'),
('DOBCA', 'BOCA CHICA', '博卡奇卡', 0, 1, 'PR', 0, 0, 'SUT'),
('QADOH', 'DOHA', '多哈', 0, 1, 'QA', 0, 0, 'SUT'),
('QAUMS', 'UMM SAID', '乌姆赛义德', 0, 1, 'QA', 0, 0, 'SUT'),
('QAMES', 'MESAIEED', '', 0, 1, 'QA', 0, 0, 'SUT'),
('KRBUS', 'BUSAN', '釜山', 0, 1, 'KR', 0, 0, 'SUT'),
('KRCHG', 'CHANGHANG', '长项', 0, 1, 'KR', 0, 0, 'SUT'),
('KRCHI', 'CHINHAE', '镇海', 0, 1, 'KR', 0, 0, 'SUT'),
('KRCJU', 'CHEJU', '济州', 0, 1, 'KR', 0, 0, 'SUT'),
('KRINC', 'INCHON', '仁川', 0, 1, 'KR', 0, 0, 'SUT'),
('KRKUN', 'KUNSAN', '群山', 0, 1, 'KR', 0, 0, 'SUT'),
('KRMAS', 'MASAN', '马山', 0, 1, 'KR', 0, 0, 'SUT'),
('KRMHO', 'MUKHO', '墨湖', 0, 1, 'KR', 0, 0, 'SUT'),
('KRMOK', 'MOKPO', '木浦', 0, 1, 'KR', 0, 0, 'SUT'),
('KRPOH', 'POHANG', '浦项', 0, 1, 'KR', 0, 0, 'SUT'),
('KRYOS', 'YOSU', '丽水', 0, 1, 'KR', 0, 0, 'SUT'),
('KRSAM', 'SAMCHOK', '三陟', 0, 1, 'KR', 0, 0, 'SUT'),
('KRULS', 'ULSAN', '蔚山', 0, 1, 'KR', 0, 0, 'SUT'),
('KOBU', 'BUSAN,KOREA', '釜山', 0, 1, 'KR', 0, 0, 'SUT'),
('KRPUS', 'PUSAN', '釜山', 0, 1, 'KR', 0, 0, 'SUT'),
('PYI', 'PYING TAEK', '', 0, 1, 'KR', 0, 0, 'SUT'),
('REPDG', 'POINTE DES GALE', '加勒茨角', 0, 1, 'RE', 0, 0, 'SUT'),
('RESDE', 'ST. DENIS', '圣但尼', 0, 1, 'RE', 0, 0, 'SUT'),
('RESLO', 'ST. LOUIS(RE)', '圣路易斯', 0, 1, 'RE', 0, 0, 'SUT'),
('REREU', 'PORT REUNION', '溜尼汪港', 0, 1, 'RE', 0, 0, 'SUT'),
('ROBLA', 'BRAILA', '布勒伊拉', 0, 1, 'RO', 0, 0, 'SUT'),
('ROCON', 'CONSTANZA', '康斯坦萨', 0, 1, 'RO', 0, 0, 'SUT'),
('ROGLZ', 'GALATZ', '加拉茨', 0, 1, 'RO', 0, 0, 'SUT'),
('ROSUL', 'SULINA', '苏利纳', 0, 1, 'RO', 0, 0, 'SUT'),
('ROBUC', 'BUCHAREST', '布加勒斯特', 0, 1, 'RO', 0, 0, 'SUT'),
('CT', 'CONSTANTCIA', '康斯坦察', 0, 1, 'RO', 0, 0, 'SUT'),
('BUCUR', 'BUCURESTI', '', 0, 1, 'RO', 0, 0, 'SUT'),
('UAERD', 'BERDIANSK', '别尔迪扬斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUALE', 'ALEXANDROVSK', '亚历山大罗夫斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUARH', 'ARCHANGEL', '阿尔汉格尔', 0, 1, 'RU', 0, 0, 'SUT'),
('RUDKA', 'DEKASTRY', '德卡斯特莱', 0, 1, 'RU', 0, 0, 'SUT'),
('RUKER', 'KERET', '克烈季', 0, 1, 'RU', 0, 0, 'SUT'),
('RUKGD', 'KALININGRAD', '加里宁格勒', 0, 1, 'RU', 0, 0, 'SUT'),
('RUKHO', 'Kholmsk', '霍尔姆斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUKOR', 'KORSAKOV', '科尔萨科夫', 0, 1, 'RU', 0, 0, 'SUT'),
('RULAZ', 'LAZAREV', '拉扎烈夫', 0, 1, 'RU', 0, 0, 'SUT'),
('RULED', 'ST.PETERSBURG', '圣彼得堡', 0, 1, 'RU', 0, 0, 'SUT'),
('RUMAG', 'MAGADAN', '马加丹', 0, 1, 'RU', 0, 0, 'SUT'),
('RUMAK', 'MAKAROV', '马卡洛夫', 0, 1, 'RU', 0, 0, 'SUT'),
('RUMEZ', 'MESANE', '美晋', 0, 1, 'RU', 0, 0, 'SUT'),
('RUMGO', 'MAGO', '马戈', 0, 1, 'RU', 0, 0, 'SUT'),
('RUMMK', 'MURMANSK', '摩尔曼斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUNEV', 'NEVELSK', '涅韦尔斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUNJK', 'NAKHODKA', '纳雷德卡', 0, 1, 'RU', 0, 0, 'SUT'),
('RUNNM', 'NARYAN MAR', '纳里扬马尔', 0, 1, 'RU', 0, 0, 'SUT'),
('RUNOG', 'NOGLIKI', '诺格利基', 0, 1, 'RU', 0, 0, 'SUT'),
('RUNVS', 'NOVOROSSISK', '新罗西斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUOHA', 'OKHA', '奥哈', 0, 1, 'RU', 0, 0, 'SUT'),
('RUOHO', 'OKHOTSK', '鄂霍次克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUOKT', 'OKTIAABRSKIJ', '十月市', 0, 1, 'RU', 0, 0, 'SUT'),
('RUONG', 'ONEGA', '奥涅加', 0, 1, 'RU', 0, 0, 'SUT'),
('RUPAR', 'PARNU', '派尔努', 0, 1, 'RU', 0, 0, 'SUT'),
('RUPRI', 'PRIMORSK', '普里莫尔斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUPRN', 'PORONAISK', '波罗奈斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUPTK', 'PETROPAVLOVSK', '彼得罗巴浦洛夫斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUROV', 'Rostov', '罗斯托夫', 0, 1, 'RU', 0, 0, 'SUT'),
('RUSHA', 'SHAKHTERSK', '沙赫乔特斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUSOC', 'SOCHI', '索契', 0, 1, 'RU', 0, 0, 'SUT'),
('RUSOG', 'SOVETSKAYA GAVA', '苏维埃港', 0, 1, 'RU', 0, 0, 'SUT'),
('RUSVE', 'SVETLAYA RIVER', '斯伟特拉亚河', 0, 1, 'RU', 0, 0, 'SUT'),
('RUTAG', 'TAGANROG', '塔甘罗格', 0, 1, 'RU', 0, 0, 'SUT'),
('RUTUA', 'TUAPSE', '图阿普谢', 0, 1, 'RU', 0, 0, 'SUT'),
('RUUGL', 'UGLEGORSK', '乌格里哥斯克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUUMB', 'UMBA', '翁巴', 0, 1, 'RU', 0, 0, 'SUT'),
('RUVNN', 'VANINO', '瓦尼诺', 0, 1, 'RU', 0, 0, 'SUT'),
('RUVOS', 'VOSTOCHNY', '东方港', 0, 1, 'RU', 0, 0, 'SUT'),
('RUVVO', 'VLADIVOSTOK', '海参威', 0, 1, 'RU', 0, 0, 'SUT'),
('RUVYG', 'VYBORG', '维堡', 0, 1, 'RU', 0, 0, 'SUT'),
('RUVYS', 'VYSOTSK', '维索茨克', 0, 1, 'RU', 0, 0, 'SUT'),
('RUZHD', 'ZHDANOV', '日丹诺夫', 0, 1, 'RU', 0, 0, 'SUT'),
('RUZRB', 'ZARUBINO', '扎鲁比诺', 0, 1, 'RU', 0, 0, 'SUT'),
('UAKHE', 'KHERSON', '赫尔松', 0, 1, 'RU', 0, 0, 'SUT'),
('UAODS', 'ODESSA', '敖德萨', 0, 1, 'RU', 0, 0, 'SUT'),
('UARNI', 'RENI', '烈尼', 0, 1, 'RU', 0, 0, 'SUT'),
('UAYAL', 'YALTA', '雅尔塔', 0, 1, 'RU', 0, 0, 'SUT'),
('GESUI', 'SUKHUM', '苏呼米', 0, 1, 'RU', 0, 0, 'SUT'),
('EENAJ', 'NARVA JOESUU', '纳尔瓦约埃苏', 0, 1, 'RU', 0, 0, 'SUT'),
('EETLL', 'TALLINN', '塔林', 0, 1, 'RU', 0, 0, 'SUT'),
('RUMOS', 'MOSCOW', '莫斯科', 0, 1, 'RU', 0, 0, 'SUT'),
('EKA', 'EKATERINBURG', '', 0, 1, 'RU', 0, 0, 'SUT'),
('KRA', 'KRASNOYARSK', '', 0, 1, 'RU', 0, 0, 'SUT'),
('NOVO', 'NOVOSIBIRSK', '', 0, 1, 'RU', 0, 0, 'SUT'),
('KHA', 'KHABAROYSK', '', 0, 1, 'RU', 0, 0, 'SUT'),
('OMSK', 'OMSK', '', 0, 1, 'RU', 0, 0, 'SUT'),
('PERM', 'PERM', '彼尔姆', 0, 1, 'RU', 0, 0, 'SUT'),
('CHS', 'CHELYABINSK', '', 0, 1, 'RU', 0, 0, 'SUT'),
('SADAM', 'DAMMAM', '达曼', 0, 1, 'SA', 0, 0, 'SUT'),
('SAGIZ', 'GIZAN', '季赞', 0, 1, 'SA', 0, 0, 'SUT'),
('SAJED', 'JEDDAH', '吉达', 0, 1, 'SA', 0, 0, 'SUT'),
('SAJUB', 'JUBAIL', '朱拜勒', 0, 1, 'SA', 0, 0, 'SUT'),
('SARTA', 'RAS TANURA', '拉斯坦努拉', 0, 1, 'SA', 0, 0, 'SUT'),
('SAYBO', 'YENBO', '延布', 0, 1, 'SA', 0, 0, 'SUT'),
('SARIY', 'RIYADH', '利雅得', 0, 1, 'SA', 0, 0, 'SUT'),
('SNDAK', 'DAKAR', '达喀尔', 0, 1, 'SN', 0, 0, 'SUT'),
('SNKAO', 'KAOLACK', '考拉克', 0, 1, 'SN', 0, 0, 'SUT'),
('SNZIG', 'ZIGHINKOR', '济金绍尔', 0, 1, 'SN', 0, 0, 'SUT'),
('SCPVI', 'PORT VICTORIA(S', '维多利亚港', 0, 1, 'SC', 0, 0, 'SUT'),
('SLFRE', 'FREETOWN', '弗里敦', 0, 1, 'SL', 0, 0, 'SUT'),
('SLPPL', 'PEPLE', '佩佩尔', 0, 1, 'SL', 0, 0, 'SUT'),
('SLSHI', 'SHERBRO ISLAND', '歇尔布罗岛', 0, 1, 'SL', 0, 0, 'SUT'),
('SGJUR', 'JURONG', '裕廊', 0, 1, 'SG', 0, 0, 'SUT'),
('SGPBU', 'PULAU BUKOM', '普劳布科姆', 0, 1, 'SG', 0, 0, 'SUT'),
('SGSEM', 'SEMBAWANG', '森巴旺', 0, 1, 'SG', 0, 0, 'SUT'),
('SGSGP', 'SINGAPORE', '新加坡', 0, 1, 'SG', 0, 0, 'SUT'),
('DKNBG', 'NYKOBING(SJA.)', '尼克宾', 0, 1, 'SG', 0, 0, 'SUT'),
('SLOVE', 'KOPER', '科佩尔', 0, 1, 'SI', 0, 0, 'SUT'),
('SLBRA', 'BRATISLAVA', '', 0, 1, 'SI', 0, 0, 'SUT'),
('LLU', 'LLUBLJANA', '', 0, 1, 'SI', 0, 0, 'SUT'),
('PGKTA', 'KIETA', '基埃塔', 0, 1, 'SB', 0, 0, 'SUT'),
('SBGIZ', 'GIZO', '吉佐', 0, 1, 'SB', 0, 0, 'SUT'),
('SBHON', 'HONIARA', '霍尼亚拉', 0, 1, 'SB', 0, 0, 'SUT'),
('SBYAN', 'YANDINA', '扬迪纳', 0, 1, 'SB', 0, 0, 'SUT'),
('SOBER', 'BERBERA', '柏培拉', 0, 1, 'SO', 0, 0, 'SUT'),
('SOBOS', 'BOSASO', '博萨索', 0, 1, 'SO', 0, 0, 'SUT'),
('SOKIS', 'KISMAYU', '基斯马尤', 0, 1, 'SO', 0, 0, 'SUT'),
('SOMER', 'MERCA', '马尔卡', 0, 1, 'SO', 0, 0, 'SUT'),
('SOMOG', 'MOGADISCIO', '摩加迪沙', 0, 1, 'SO', 0, 0, 'SUT'),
('ZADUR', 'DURBAN', '德班', 0, 1, 'ZA', 0, 0, 'SUT'),
('ZAELN', 'EAST LONDON', '东伦敦', 0, 1, 'ZA', 0, 0, 'SUT'),
('ZAMOB', 'MOSSEL BAY', '莫塞尔贝', 0, 1, 'ZA', 0, 0, 'SUT'),
('ZAPEL', 'PORT ELIZABETH', '伊丽莎白港', 0, 1, 'ZA', 0, 0, 'SUT'),
('SOJOH', 'JOHANNESBURG', '约翰内斯堡', 0, 1, 'ZA', 0, 0, 'SUT'),
('SOHAR', 'HARARE', '哈拉雷', 0, 1, 'ZA', 0, 0, 'SUT'),
('COCAP', 'CAPE TOWN', '开普顿', 0, 1, 'ZA', 0, 0, 'SUT'),
('MAS', 'MASCON', '', 0, 1, 'ZA', 0, 0, 'SUT'),
('ESSAG', 'SAGUNTO', '萨贡托', 0, 1, 'ES', 0, 0, 'SUT'),
('ESSAN', 'SANTANDER', '桑坦德', 0, 1, 'ES', 0, 0, 'SUT'),
('ESSEV', 'SEVILLE', '塞维利亚', 0, 1, 'ES', 0, 0, 'SUT'),
('ESSFE', 'SAN FERNANDO(ES', '圣费尔南多', 0, 1, 'ES', 0, 0, 'SUT'),
('ESSFG', 'SAN FELIU DE GU', '圣费里乌德古绍尔斯', 0, 1, 'ES', 0, 0, 'SUT'),
('ESTAR', 'TARRAGONA', '塔拉戈纳', 0, 1, 'ES', 0, 0, 'SUT'),
('ESVIG', 'VIGO', '维哥', 0, 1, 'ES', 0, 0, 'SUT'),
('ESVIL', 'VILLAGARCIA', '维利亚加西', 0, 1, 'ES', 0, 0, 'SUT'),
('ESVIV', 'VIVERO', '比韦罗', 0, 1, 'ES', 0, 0, 'SUT'),
('ESVAL', 'VALENCIA', '巴伦西亚', 0, 1, 'ES', 0, 0, 'SUT'),
('ESCUL', 'CULLERA', '库列拉', 0, 1, 'ES', 0, 0, 'SUT'),
('ESADR', 'ADRA', '阿德拉', 0, 1, 'ES', 0, 0, 'SUT'),
('ESAGU', 'AGUILAS', '阿吉拉斯', 0, 1, 'ES', 0, 0, 'SUT'),
('ESALC', 'ALCUDIA', '阿尔库迪亚', 0, 1, 'ES', 0, 0, 'SUT'),
('ESALG', 'ALGECIRAS', '阿尔赫西拉斯', 0, 1, 'ES', 0, 0, 'SUT'),
('ESALI', 'ALICANTE', '阿利坎特', 0, 1, 'ES', 0, 0, 'SUT'),
('ESALM', 'ALMERIA', '阿尔梅里亚', 0, 1, 'ES', 0, 0, 'SUT'),
('ESAVI', 'AVILES', '阿维莱斯', 0, 1, 'ES', 0, 0, 'SUT'),
('ESBAE', 'BARBATE', '巴尔瓦特', 0, 1, 'ES', 0, 0, 'SUT'),
('ESBAR', 'BARCELONA', '巴塞罗那', 0, 1, 'ES', 0, 0, 'SUT'),
('ESBIL', 'BILBAO', '毕尔巴鄂', 0, 1, 'ES', 0, 0, 'SUT'),
('ESBNS', 'BLANES', '布拉内斯', 0, 1, 'ES', 0, 0, 'SUT'),
('ESBUR', 'BURRIANA', '布里亚纳', 0, 1, 'ES', 0, 0, 'SUT'),
('ESCAD', 'CADIZ(ES)', '加的斯', 0, 1, 'ES', 0, 0, 'SUT'),
('ESCAR', 'CARTAGENA(ES)', '卡塔赫纳', 0, 1, 'ES', 0, 0, 'SUT'),
('ESCAS', 'CASTELLON', '卡斯特利翁', 0, 1, 'ES', 0, 0, 'SUT'),
('ESCBN', 'CORCUBION', '科尔库维翁', 0, 1, 'ES', 0, 0, 'SUT'),
('ESCOR', 'CORUNNA', '科伦纳', 0, 1, 'ES', 0, 0, 'SUT'),
('ESCUR', 'CASTRO URDIALES', '乌迪亚莱斯堡', 0, 1, 'ES', 0, 0, 'SUT'),
('ESDEN', 'DENIA', '德尼亚', 0, 1, 'ES', 0, 0, 'SUT'),
('ESLUA', 'LUARCA', '卢阿尔卡', 0, 1, 'ES', 0, 0, 'SUT'),
('ESMAH', 'MAHON', '马翁', 0, 1, 'ES', 0, 0, 'SUT'),
('ESHUE', 'HUELVA', '韦尔瓦', 0, 1, 'ES', 0, 0, 'SUT'),
('ESIBI', 'IBIZA', '伊维萨', 0, 1, 'ES', 0, 0, 'SUT'),
('ESJAV', 'JAVEA', '哈韦阿', 0, 1, 'ES', 0, 0, 'SUT'),
('ESGAN', 'GANDIA', '刚迪亚', 0, 1, 'ES', 0, 0, 'SUT'),
('ESGAR', 'GARRUCHA', '加鲁查', 0, 1, 'ES', 0, 0, 'SUT'),
('ESGIJ', 'GIJON', '希洪', 0, 1, 'ES', 0, 0, 'SUT'),
('ESESH', 'ESCOMBRERAS HAR', '埃斯孔布雷阿斯', 0, 1, 'ES', 0, 0, 'SUT'),
('ESMAL', 'MALAGA', '马拉加', 0, 1, 'ES', 0, 0, 'SUT'),
('ESMAR', 'MARIN', '马林', 0, 1, 'ES', 0, 0, 'SUT'),
('ESMAZ', 'MAZARRON', '马萨龙', 0, 1, 'ES', 0, 0, 'SUT'),
('ESMOT', 'MOTRIL', '莫特里尔', 0, 1, 'ES', 0, 0, 'SUT'),
('ESMUR', 'MUROS', '穆罗斯', 0, 1, 'ES', 0, 0, 'SUT'),
('ESPAL', 'PALMA', '帕尔马', 0, 1, 'ES', 0, 0, 'SUT'),
('ESPAS', 'PASAJES', '帕萨赫斯', 0, 1, 'ES', 0, 0, 'SUT'),
('ESPOR', 'PORTUGALETE', '波图加莱特', 0, 1, 'ES', 0, 0, 'SUT'),
('ESROS', 'ROSAS', '罗萨斯', 0, 1, 'ES', 0, 0, 'SUT'),
('ESRDO', 'RIBADEO', '里瓦德奥', 0, 1, 'ES', 0, 0, 'SUT'),
('ESRIB', 'RIBADESELLA', '里瓦德塞利亚', 0, 1, 'ES', 0, 0, 'SUT'),
('SPMAD', 'MADRID', '马德里', 0, 1, 'ES', 0, 0, 'SUT'),
('SPSAB', 'SABADELL', '', 0, 1, 'ES', 0, 0, 'SUT'),
('4555', 'SEVILLA', '塞维利亚', 0, 1, 'ES', 0, 0, 'SUT'),
('LKCOL', 'COLOMBO', '科伦坡', 0, 1, 'LK', 0, 0, 'SUT'),
('LKGAL', 'GALLE', '加勒', 0, 1, 'LK', 0, 0, 'SUT'),
('LKJAF', 'JAFFNA', '贾夫纳', 0, 1, 'LK', 0, 0, 'SUT'),
('LKBAT', 'BATTICALOA', '拜蒂克洛', 0, 1, 'LK', 0, 0, 'SUT'),
('LKMAT', 'MATARA', '马特勒', 0, 1, 'LK', 0, 0, 'SUT'),
('LKNEG', 'NEGOMBO', '尼甘布', 0, 1, 'LK', 0, 0, 'SUT'),
('LKTRI', 'TRINCOMALEE', '亭可马里', 0, 1, 'LK', 0, 0, 'SUT'),
('LKKAL', 'KALUTARA', '卡卢特勒', 0, 1, 'LK', 0, 0, 'SUT'),
('LKKAN', 'KANKESANTURAI', '坎凯桑图赖', 0, 1, 'LK', 0, 0, 'SUT'),
('SDPSU', 'PORT SUDAN', '苏丹港', 0, 1, 'SD', 0, 0, 'SUT'),
('SDSUA', 'SUAKIN', '萨瓦金', 0, 1, 'SD', 0, 0, 'SUT'),
('SEHEL', 'HELSINGBORG', '赫尔辛堡', 0, 1, 'SE', 0, 0, 'SUT'),
('SEHOG', 'HOGANAS', '赫加奈斯', 0, 1, 'SE', 0, 0, 'SUT'),
('SEHOR', 'HORNEFORS', '霍讷福什', 0, 1, 'SE', 0, 0, 'SUT'),
('SEHSD', 'HALMSTAD', '哈尔姆斯塔德', 0, 1, 'SE', 0, 0, 'SUT'),
('SEHSM', 'HUSUM(SE)', '胡苏姆', 0, 1, 'SE', 0, 0, 'SUT'),
('SEJON', 'JONKOPING', '延雪平', 0, 1, 'SE', 0, 0, 'SUT'),
('SEKAA', 'KARLSKRONA', '卡尔斯克鲁纳', 0, 1, 'SE', 0, 0, 'SUT'),
('SEKAD', 'KARLSTAD', '卡尔斯塔德', 0, 1, 'SE', 0, 0, 'SUT'),
('SEKAL', 'KALMAR', '卡尔马', 0, 1, 'SE', 0, 0, 'SUT'),
('SEKLI', 'KLINTEHAMN', '克林特港', 0, 1, 'SE', 0, 0, 'SUT'),
('SEKLX', 'KALIX', '卡利克斯', 0, 1, 'SE', 0, 0, 'SUT'),
('SEKOP', 'KOPING', '雪平', 0, 1, 'SE', 0, 0, 'SUT'),
('SEKRI', 'KRISTINEHAMN', '克里斯蒂娜港', 0, 1, 'SE', 0, 0, 'SUT'),
('SELAN', 'LANDSKRONA', '兰斯克鲁纳', 0, 1, 'SE', 0, 0, 'SUT'),
('SELID', 'LIDKOPING', '利德雪平', 0, 1, 'SE', 0, 0, 'SUT'),
('SELIM', 'LIMHAMN', '利姆港', 0, 1, 'SE', 0, 0, 'SUT'),
('SELJU', 'LJUSNE', '于斯讷', 0, 1, 'SE', 0, 0, 'SUT'),
('SELOM', 'LOMMA', '卢马', 0, 1, 'SE', 0, 0, 'SUT'),
('SELUL', 'LULEA', '吕勒奥', 0, 1, 'SE', 0, 0, 'SUT'),
('SELYS', 'LYSEKIL', '吕瑟希尔', 0, 1, 'SE', 0, 0, 'SUT'),
('SEMAL', 'MALMO', '马尔默', 0, 1, 'SE', 0, 0, 'SUT'),
('SEMAR', 'MARSTRAND', '马斯特兰德', 0, 1, 'SE', 0, 0, 'SUT'),
('SEMOT', 'MOTALA', '穆塔拉', 0, 1, 'SE', 0, 0, 'SUT'),
('SENOR', 'NORRKOPING', '诺尔雪平', 0, 1, 'SE', 0, 0, 'SUT'),
('SENRT', 'NORRSUNDET', '诺尔松德', 0, 1, 'SE', 0, 0, 'SUT'),
('SENYK', 'NYKOPING(SE)', '尼雪平', 0, 1, 'SE', 0, 0, 'SUT'),
('SEORN', 'ORNSKOLDSVIK', '恩舍尔兹维克', 0, 1, 'SE', 0, 0, 'SUT'),
('SEOTT', 'OTTERBACKEN', '乌特拜肯', 0, 1, 'SE', 0, 0, 'SUT'),
('SEOXE', 'OXELOSUND', '乌克瑟勒松德', 0, 1, 'SE', 0, 0, 'SUT'),
('SEPIT', 'PITEA', '皮特奥', 0, 1, 'SE', 0, 0, 'SUT'),
('SERBN', 'RONNEBYHAMN', '尤讷比港', 0, 1, 'SE', 0, 0, 'SUT'),
('SESIM', 'SIMRISHAMN', '锡姆里斯港', 0, 1, 'SE', 0, 0, 'SUT'),
('SESJE', 'SODERTELJE', '南泰利耶', 0, 1, 'SE', 0, 0, 'SUT'),
('SESKA', 'SKELLEFTEA', '谢莱夫特奥', 0, 1, 'SE', 0, 0, 'SUT'),
('SESKO', 'SKOGHALL', '斯库格哈尔', 0, 1, 'SE', 0, 0, 'SUT'),
('SESKU', 'SKUTSKAR', '斯屈特谢尔', 0, 1, 'SE', 0, 0, 'SUT'),
('SESLI', 'SLITE', '斯利特', 0, 1, 'SE', 0, 0, 'SUT'),
('SESOD', 'SODERHAMN', '瑟德港', 0, 1, 'SE', 0, 0, 'SUT'),
('SESOG', 'SODERKOPING', '南雪平', 0, 1, 'SE', 0, 0, 'SUT'),
('SESOL', 'SOLVESBORG', '瑟尔沃斯堡', 0, 1, 'SE', 0, 0, 'SUT'),
('SESTD', 'STROMSTAD', '斯特伦斯塔德', 0, 1, 'SE', 0, 0, 'SUT'),
('SESTO', 'STOCKHOLM', '斯德哥尔摩', 0, 1, 'SE', 0, 0, 'SUT'),
('SESTR', 'STRANGNAS', '斯特兰奈斯', 0, 1, 'SE', 0, 0, 'SUT'),
('SESVL', 'SUNDSVALL', '松兹瓦尔', 0, 1, 'SE', 0, 0, 'SUT'),
('SESVN', 'SANDVIKEN(SE)', '桑德维肯', 0, 1, 'SE', 0, 0, 'SUT'),
('SETRE', 'TRELLEBORG', '特雷勒堡', 0, 1, 'SE', 0, 0, 'SUT'),
('SEUDD', 'UDDEVALLA', '乌德瓦拉', 0, 1, 'SE', 0, 0, 'SUT'),
('SEUME', 'UMEA', '于默奥', 0, 1, 'SE', 0, 0, 'SUT'),
('SEVAL', 'VALDEMARSVIK', '瓦尔德马什维克', 0, 1, 'SE', 0, 0, 'SUT'),
('SEVAR', 'VARBERG', '瓦尔贝里', 0, 1, 'SE', 0, 0, 'SUT'),
('SEAHS', 'AHUS', '奥胡斯', 0, 1, 'SE', 0, 0, 'SUT'),
('SEALA', 'ALA', '阿拉', 0, 1, 'SE', 0, 0, 'SUT'),
('SEARB', 'ARBOGA', '阿尔博加', 0, 1, 'SE', 0, 0, 'SUT'),
('SEBOR', 'BORGHOLM', '博里霍尔姆', 0, 1, 'SE', 0, 0, 'SUT'),
('SEENK', 'ENKOPING', '恩雪平', 0, 1, 'SE', 0, 0, 'SUT'),
('SEFAL', 'FALKENBERG', '法尔肯贝里', 0, 1, 'SE', 0, 0, 'SUT'),
('SEGEF', 'GEFLE', '耶夫勒', 0, 1, 'SE', 0, 0, 'SUT'),
('SEGOT', 'GOTHENBURG', '哥德堡', 0, 1, 'SE', 0, 0, 'SUT'),
('SEHAN', 'HARGSHAMN', '哈里港', 0, 1, 'SE', 0, 0, 'SUT'),
('SEHAP', 'HAPARANDA', '哈帕兰达', 0, 1, 'SE', 0, 0, 'SUT'),
('SEVIS', 'VISBY', '维斯比', 0, 1, 'SE', 0, 0, 'SUT'),
('SEWES', 'WESTERVIK', '韦斯特维克', 0, 1, 'SE', 0, 0, 'SUT'),
('SEWHN', 'WALLHAMN', '瓦尔港', 0, 1, 'SE', 0, 0, 'SUT'),
('SEYST', 'YSTAD', '于斯塔德', 0, 1, 'SE', 0, 0, 'SUT'),
('ALA', 'ALA', '阿拉', 0, 1, 'SE', 0, 0, 'SUT'),
('SW', 'ARBOGA', '阿布罗斯', 0, 1, 'SE', 0, 0, 'SUT'),
('SWEKE', 'EKENAS', '埃克纳斯', 0, 1, 'SE', 0, 0, 'SUT'),
('GLL', 'GAVLE', '', 0, 1, 'SE', 0, 0, 'SUT'),
('BER', 'BERNE', '', 0, 1, 'SW', 0, 0, 'SUT'),
('SWZUR', 'ZURICH', '苏黎士', 0, 1, 'SW', 0, 0, 'SUT'),
('SWBAS', 'BASLE', '巴塞尔', 0, 1, 'SW', 0, 0, 'SUT'),
('GEN', 'GENEVA', '日内瓦', 0, 1, 'SW', 0, 0, 'SUT'),
('SWLAU', 'LAUSANNE', '', 0, 1, 'SW', 0, 0, 'SUT'),
('ST.G', 'ST.GALLEN', '', 0, 1, 'SW', 0, 0, 'SUT'),
('CHIA', 'CHIASSO', '', 0, 1, 'SW', 0, 0, 'SUT'),
('GBS', 'GRABS', '', 0, 1, 'SW', 0, 0, 'SUT'),
('SYBAN', 'BANIYAS', '巴尼亚斯', 0, 1, 'SY', 0, 0, 'SUT'),
('SYLAT', 'LATTAKIA', '拉塔基亚', 0, 1, 'SY', 0, 0, 'SUT'),
('TWHLN', 'HUALIAN', '花莲', 0, 1, 'TW', 0, 0, 'SUT'),
('TWJIL', 'JILONG', '基隆', 0, 1, 'TW', 0, 0, 'SUT'),
('TWPHU', 'PENGHU', '澎湖', 0, 1, 'TW', 0, 0, 'SUT'),
('TWGAO', 'GAOXONG', '高雄', 0, 1, 'TW', 0, 0, 'SUT'),
('TWSUO', 'SUAO', '苏奥', 0, 1, 'TW', 0, 0, 'SUT'),
('TWTNA', 'TAINAN', '台南', 0, 1, 'TW', 0, 0, 'SUT'),
('TWTZH', 'TAIZHONG', '台中', 0, 1, 'TW', 0, 0, 'SUT'),
('TWTAI', 'TAICHUNG', '台中', 0, 1, 'TW', 0, 0, 'SUT'),
('TWKAO', 'KAOHSIUNG', '高雄', 0, 1, 'TW', 0, 0, 'SUT'),
('TAIPE', 'TAIPEI', '台北', 0, 1, 'TW', 0, 0, 'SUT'),
('TZDRS', 'DAR-ES-SALAAM', '达累斯萨拉姆', 0, 1, 'TZ', 0, 0, 'SUT'),
('TZKKI', 'KILWA KIVINJE', '基卢瓦基温杰', 0, 1, 'TZ', 0, 0, 'SUT'),
('TZKMA', 'KILWA MASOKO', '基卢瓦马索科', 0, 1, 'TZ', 0, 0, 'SUT'),
('TZLDI', 'LINDI', '林迪', 0, 1, 'TZ', 0, 0, 'SUT'),
('TZMTW', 'MTWARA', '姆特瓦拉', 0, 1, 'TZ', 0, 0, 'SUT'),
('TZPAN', 'PANGANI', '潘加尼', 0, 1, 'TZ', 0, 0, 'SUT'),
('TZTAN', 'TANGA', '坦噶', 0, 1, 'TZ', 0, 0, 'SUT'),
('TZZAI', 'ZANZIBAR ISLAND', '桑给巴尔岛', 0, 1, 'TZ', 0, 0, 'SUT'),
('THBKK', 'BANGKOK', '曼谷', 0, 1, 'TH', 0, 0, 'SUT'),
('THLCB', 'LAEM CHABANG', '雷查班', 0, 1, 'TH', 0, 0, 'SUT'),
('THPAT', 'PATTANI', '北大年', 0, 1, 'TH', 0, 0, 'SUT'),
('THPHU', 'PHUKET', '普吉', 0, 1, 'TH', 0, 0, 'SUT'),
('LKR', 'LAT KRABANG', '拉特卡拉帮', 0, 1, 'TH', 0, 0, 'SUT'),
('12', 'BANKOK CY PORT', '', 0, 1, 'TH', 0, 0, 'SUT'),
('SCT', 'SCT', '', 0, 1, 'TH', 0, 0, 'SUT'),
('KLO', 'KLONG TOEY', '', 0, 1, 'TH', 0, 0, 'SUT'),
('TGKPE', 'KPEME', '佩梅', 0, 1, 'TG', 0, 0, 'SUT'),
('TGLOM', 'LOME', '洛美', 0, 1, 'TG', 0, 0, 'SUT'),
('TONEI', 'NEIAFU', '内亚富', 0, 1, 'TO', 0, 0, 'SUT'),
('TOKYO', 'NUKUALOFA', '努库阿洛法', 0, 1, 'TO', 0, 0, 'SUT'),
('TOROA', 'ROADTOWN', '', 0, 1, 'TO', 0, 0, 'SUT'),
('TTBRI', 'BRIGHTON(TT)', '布赖顿', 0, 1, 'TT', 0, 0, 'SUT'),
('TTCHA', 'CHAGUARAMAS', '查瓜拉马斯', 0, 1, 'TT', 0, 0, 'SUT'),
('TTGAP', 'GALEOTA POINT', '加莱奥塔角', 0, 1, 'TT', 0, 0, 'SUT'),
('TTPAP', 'POINTE A PIERRE', '皮埃尔角城', 0, 1, 'TT', 0, 0, 'SUT'),
('TTPFN', 'POINT FORTIN', '福廷角', 0, 1, 'TT', 0, 0, 'SUT'),
('TTSCA', 'SCARBOROUGH(TT)', '斯卡伯勒', 0, 1, 'TT', 0, 0, 'SUT'),
('TTSFE', 'SAN FERNANDO(TT', '圣费尔南多', 0, 1, 'TT', 0, 0, 'SUT'),
('TTTEM', 'TEMBLADORA', '滕布拉多腊', 0, 1, 'TT', 0, 0, 'SUT'),
('TTPLY', 'PLYMOUTH(TT)', '普利茅斯', 0, 1, 'TT', 0, 0, 'SUT'),
('TTPOS', 'PORT OF SPAIN', '西班牙港', 0, 1, 'TT', 0, 0, 'SUT'),
('TNGAB', 'GABES', '加贝斯', 0, 1, 'TN', 0, 0, 'SUT'),
('TNLGO', 'LA GOULETTE', '拉古莱特', 0, 1, 'TN', 0, 0, 'SUT'),
('TNLSK', 'LA SKHIRRA', '拉斯基拉', 0, 1, 'TN', 0, 0, 'SUT'),
('TNBIZ', 'BIZERTA', '比塞大', 0, 1, 'TN', 0, 0, 'SUT'),
('TNSFA', 'SFAX', '斯法克斯', 0, 1, 'TN', 0, 0, 'SUT'),
('TNTNS', 'TUNIS', '突尼斯', 0, 1, 'TN', 0, 0, 'SUT'),
('TRANT', 'ANTALYA', '安塔利亚', 0, 1, 'TR', 0, 0, 'SUT'),
('TRBAN', 'BANDIRMA', '班德尔马', 0, 1, 'TR', 0, 0, 'SUT'),
('TRDER', 'DERINCE', '代林杰', 0, 1, 'TR', 0, 0, 'SUT'),
('TRDIK', 'DIKILI', '迪基利', 0, 1, 'TR', 0, 0, 'SUT'),
('TRDIL', 'DILISKELESI', '帝力克里斯', 0, 1, 'TR', 0, 0, 'SUT'),
('TRERE', 'EREGLI', '埃雷利', 0, 1, 'TR', 0, 0, 'SUT'),
('TRFAT', 'FATSA', '法特萨', 0, 1, 'TR', 0, 0, 'SUT'),
('TRFET', 'FETHIYE', '费特希耶', 0, 1, 'TR', 0, 0, 'SUT'),
('TRFIN', 'FINIKE', '菲尼凯', 0, 1, 'TR', 0, 0, 'SUT'),
('TRGEM', 'GEMLIK', '盖姆利克', 0, 1, 'TR', 0, 0, 'SUT'),
('TRGIR', 'GIRESUN', '古雷松', 0, 1, 'TR', 0, 0, 'SUT'),
('TRGOR', 'GORELE', '格雷莱', 0, 1, 'TR', 0, 0, 'SUT'),
('TRHOP', 'HOPA', '霍帕', 0, 1, 'TR', 0, 0, 'SUT'),
('TRINE', 'INEBOLU', '伊内博卢', 0, 1, 'TR', 0, 0, 'SUT'),
('TRISK', 'ISKENDERUN', '伊斯肯德伦', 0, 1, 'TR', 0, 0, 'SUT'),
('TRHAY', 'HAYDARPASA', '海达尔帕夏', 0, 1, 'TR', 0, 0, 'SUT'),
('TRIST', 'TRIST', '伊斯坦布尔', 0, 1, 'TR', 0, 0, 'SUT'),
('TRIZM', 'IZMIR', '伊兹密尔', 0, 1, 'TR', 0, 0, 'SUT'),
('TRORD', 'ORDU', '奥尔杜', 0, 1, 'TR', 0, 0, 'SUT'),
('TRRIZ', 'RIZE', '里泽', 0, 1, 'TR', 0, 0, 'SUT'),
('TRSAM', 'SAMSUN', '萨姆松', 0, 1, 'TR', 0, 0, 'SUT'),
('TRMER', 'MERSIN', '梅尔辛', 0, 1, 'TR', 0, 0, 'SUT'),
('TRTRA', 'TRABZON', '特拉布宗', 0, 1, 'TR', 0, 0, 'SUT'),
('TRZON', 'ZONGULDAK', '宗古尔达克', 0, 1, 'TR', 0, 0, 'SUT'),
('TRALA', 'ALANYA', '阿拉尼亚', 0, 1, 'TR', 0, 0, 'SUT'),
('TRAMA', 'AMASRA', '阿马斯腊', 0, 1, 'TR', 0, 0, 'SUT'),
('TUGEB', 'GEBZE', '', 0, 1, 'TR', 0, 0, 'SUT'),
('TUANK', 'ANKARA', '', 0, 1, 'TR', 0, 0, 'SUT'),
('I', 'ISTANBUL', '', 0, 1, 'TR', 0, 0, 'SUT'),
('AEAJM', 'AJMAN', '阿治曼', 0, 1, 'AE', 0, 0, 'SUT'),
('AEDAS', 'DAS ISLAND', '达斯岛', 0, 1, 'AE', 0, 0, 'SUT'),
('AEFUJ', 'FUJAIRAH', '富查伊拉', 0, 1, 'AE', 0, 0, 'SUT'),
('AEJDA', 'JEBEL DHANNA', '杰贝尔丹那', 0, 1, 'AE', 0, 0, 'SUT'),
('AEKFA', 'KHOR FAKKAN', '豪尔费坎', 0, 1, 'AE', 0, 0, 'SUT'),
('AERAK', 'RAS AL KHAIMAH', '哈伊马角', 0, 1, 'AE', 0, 0, 'SUT'),
('AESJH', 'SHARJAH', '舍尔杰', 0, 1, 'AE', 0, 0, 'SUT'),
('AEUAQ', 'UMM AL QUWAIN', '乌姆盖万', 0, 1, 'AE', 0, 0, 'SUT'),
('AEABD', 'ABU DHABI', '阿布扎比', 0, 1, 'AE', 0, 0, 'SUT'),
('AEDUB', 'DUBAI,UAE', '迪拜', 0, 1, 'AE', 0, 0, 'SUT'),
('UARAS', 'PORT RASHID DUBAI', '迪拜', 0, 1, 'AE', 0, 0, 'SUT'),
('UBI', 'DUBAI', '迪拜', 0, 1, 'AE', 0, 0, 'SUT'),
('UAILK', 'ILYICHEVSK', '伊利乔夫斯克', 0, 1, 'UA', 0, 0, 'SUT'),
('UAUDK', 'UST-DUNAYSK', '乌斯特---多瑙伊斯克', 0, 1, 'UA', 0, 0, 'SUT'),
('URKIE', 'KIEV', '基辅', 0, 1, 'UK', 0, 0, 'SUT'),
('UKDON', 'DONCASTER', '', 0, 1, 'UK', 0, 0, 'SUT'),
('UKLEY', 'LEYLAND', '', 0, 1, 'UK', 0, 0, 'SUT'),
('UKLND', 'LEYLANO', '', 0, 1, 'UK', 0, 0, 'SUT'),
('UKSOO', 'SOOTH SHIELDS', '', 0, 1, 'UK', 0, 0, 'SUT'),
('UYNPA', 'NUEVA PALMIRA', '新帕尔米拉', 0, 1, 'UY', 0, 0, 'SUT'),
('UYPAY', 'PAYSANDU', '派桑杜', 0, 1, 'UY', 0, 0, 'SUT'),
('UYCOL', 'COLONIA', '科洛尼亚', 0, 1, 'UY', 0, 0, 'SUT'),
('UYFBS', 'FRAY BENTOS', '弗赖本托斯', 0, 1, 'UY', 0, 0, 'SUT'),
('UYMON', 'MONTYEVIDEO', '蒙得维的亚', 0, 1, 'UY', 0, 0, 'SUT'),
('ARCON', 'CONCEPCION DEL UNRUGUAY', '孔塞普匈-德尔-乌拉圭', 0, 1, 'UY', 0, 0, 'SUT'),
('MONT', 'MONTEVIDEO', '蒙特维的亚', 0, 1, 'UY', 0, 0, 'SUT'),
('VEAMB', 'AMUAY BAY', '阿穆艾湾', 0, 1, 'VE', 0, 0, 'SUT'),
('VEBJG', 'BAJO GRANDE', '巴霍格兰德', 0, 1, 'VE', 0, 0, 'SUT'),
('VECIB', 'CIUDAD BOLIVAR', '玻利瓦尔城', 0, 1, 'VE', 0, 0, 'SUT'),
('VECNO', 'CARUPANO', '卡鲁帕诺', 0, 1, 'VE', 0, 0, 'SUT'),
('VECTO', 'CARIPITO', '卡里皮托', 0, 1, 'VE', 0, 0, 'SUT'),
('VELGU', 'LA GUAIRA', '拉瓜伊拉', 0, 1, 'VE', 0, 0, 'SUT'),
('VEPAL', 'PALUA', '帕卢亚', 0, 1, 'VE', 0, 0, 'SUT'),
('VEPCA', 'PUERTO CABELLO', '卡贝略港', 0, 1, 'VE', 0, 0, 'SUT'),
('VEPCN', 'PUNTA CARDON', '篷塔卡尔东', 0, 1, 'VE', 0, 0, 'SUT'),
('VEPDH', 'PUERTO DE HIERR', '耶罗港', 0, 1, 'VE', 0, 0, 'SUT'),
('VEPOR', 'PUERTO ORDAZ', '奥尔达斯港', 0, 1, 'VE', 0, 0, 'SUT'),
('VESLO', 'SAN LORENZO(VE)', '圣洛伦索', 0, 1, 'VE', 0, 0, 'SUT'),
('ANCSB', 'CARACAS BAY', '加拉加斯湾', 0, 1, 'VE', 0, 0, 'SUT'),
('VECAR', 'CARACAS', '加拉加斯', 0, 1, 'VE', 0, 0, 'SUT'),
('123', 'LA GUAIRA,VENEZUELA', '拉瓜伊拉', 0, 1, 'VE', 0, 0, 'SUT'),
('VEISL', 'ISLA MAGARITA', '伊斯拉曼哥雷塔', 0, 1, 'VE', 0, 0, 'SUT'),
('VECBO', 'PORT CABELLO', '卡贝略港', 0, 1, 'VE', 0, 0, 'SUT'),
('VNDAN', 'DANANG', '岘港', 0, 1, 'VN', 0, 0, 'SUT'),
('VNHGY', 'HONGAY', '鸿基', 0, 1, 'VN', 0, 0, 'SUT'),
('VNHUE', 'HUE', '顺化', 0, 1, 'VN', 0, 0, 'SUT'),
('VNKYN', 'KWANG YEN', '广义', 0, 1, 'VN', 0, 0, 'SUT'),
('VNMYT', 'MY THO', '美富', 0, 1, 'VN', 0, 0, 'SUT'),
('VNHPG', 'HAIPHONG', '海防', 0, 1, 'VN', 0, 0, 'SUT'),
('VNQUN', 'QUI NHON', '归仁', 0, 1, 'VN', 0, 0, 'SUT'),
('VNVIN', 'VINH', '荣市', 0, 1, 'VN', 0, 0, 'SUT'),
('VNVUT', 'VUNG TAU', '头顿', 0, 1, 'VN', 0, 0, 'SUT'),
('VNNTG', 'NHA TRANG', '芽庄', 0, 1, 'VN', 0, 0, 'SUT'),
('VECA', 'CAMPHA', '锦普', 0, 1, 'VN', 0, 0, 'SUT'),
('HOPO', 'HO CHI MINH CITY', '胡志明市', 0, 1, 'VN', 0, 0, 'SUT'),
('HANO', 'HANOI', '河内', 0, 1, 'VN', 0, 0, 'SUT'),
('VICHR', 'CHRISTIANSTED', '克里斯琴斯特德', 0, 1, 'VI', 0, 0, 'SUT'),
('VIFRE', 'FREDERIKSTED', '弗雷德里克斯特德', 0, 1, 'VI', 0, 0, 'SUT'),
('VISTS', 'ST. THOMAS', '圣托马斯', 0, 1, 'VI', 0, 0, 'SUT'),
('YEADN', 'ADEN', '亚丁', 0, 1, 'YE', 0, 0, 'SUT'),
('YEHOD', 'HODEIDAH', '荷台达', 0, 1, 'YE', 0, 0, 'SUT'),
('YEMOK', 'MOKHA', '穆哈', 0, 1, 'YE', 0, 0, 'SUT'),
('YEMUK', 'MUKALLA', '穆卡拉', 0, 1, 'YE', 0, 0, 'SUT'),
('YUIZO', 'IZOLA', '伊佐拉', 0, 1, 'YU', 0, 0, 'SUT'),
('SIIZO', 'Izola', '伊佐拉', 0, 1, 'YU', 0, 0, 'SUT'),
('HRHVA', 'HVAR', '赫瓦尔', 0, 1, 'YU', 0, 0, 'SUT'),
('HRMAS', 'MASLINICA', '马斯利尼察', 0, 1, 'YU', 0, 0, 'SUT'),
('HRRAS', 'RASA', '拉萨', 0, 1, 'YU', 0, 0, 'SUT'),
('HRROV', 'ROVINJ', '罗维尼', 0, 1, 'YU', 0, 0, 'SUT'),
('HRSIB', 'SIBENIK', '希贝尼克', 0, 1, 'YU', 0, 0, 'SUT'),
('HRSEN', 'SENJ', '塞尼', 0, 1, 'YU', 0, 0, 'SUT');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('HRZAD', 'ZADAR', '扎达尔', 0, 1, 'YU', 0, 0, 'SUT'),
('YUKOT', 'KOTOR', '科托尔', 0, 1, 'YU', 0, 0, 'SUT'),
('YUPIR', 'PIRAN', '皮兰', 0, 1, 'YU', 0, 0, 'SUT'),
('BEO', 'BEOGRADE', '', 0, 1, 'YU', 0, 0, 'SUT'),
('BELG', 'BELGRADE', '', 0, 1, 'YU', 0, 0, 'SUT'),
('ZRMAT', 'MATADI', '马塔迪', 0, 1, 'ZR', 0, 0, 'SUT'),
('ZRBAN', 'BANANA', '巴纳纳', 0, 1, 'ZR', 0, 0, 'SUT'),
('ZRBMA', 'BOMA', '博马', 0, 1, 'ZR', 0, 0, 'SUT'),
('ZIBUL', 'BULAWAYO', '', 0, 1, 'ZI', 0, 0, 'SUT');

INSERT INTO `P_COMPANY_CONFIG` (`COCO_CODE`, `COCO_NAME`, `COCO_VALUE`, `COCO_VALUE_TYPE`, `COCO_VALUE_OPTIONS`, `COCO_GROUP`, `COCO_TYPE`, `COCO_DESC`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('COMPANY_NAME', '公司名称', '{companyname}', 0, NULL, '公司属性', 'A', NULL, 'SUT', 0, 0),
('COMPANY_CONTACT', '公司联系人', '{contact}', 0, NULL, '公司属性', 'A', NULL, 'SUT', 3, 0),
('COMPANY_TEL', '公司电话', '{tel}', 0, NULL, '公司属性', 'A', NULL, 'SUT', 0, 0),
('COMPANY_FAX', '公司传真', '{fax}', 0, NULL, '公司属性', 'A', NULL, 'SUT', 0, 0),
('COMPANY_EMAIL', '公司邮件地址', '{email}', 0, NULL, '公司属性', 'A', NULL, 'SUT', 0, 0),
('COMPANY_URL', '公司网址', '{url}', 0, NULL, '公司属性', 'A', NULL, 'SUT', 0, 0),
('COMPANY_ADDRESS_CN', '公司中文地址', '', 0, NULL, '公司属性', 'A', NULL, 'SUT', 0, 0),
('COMPANY_ADDRESS_EN', '公司英文地址', '', 0, NULL, '公司属性', 'A', NULL, 'SUT', 1, 0),
('COMPANY_NAME_EN', '公司英文名称', '', 0, NULL, '公司属性', 'A', NULL, 'SUT', 0, 0),
('CUSTOMER_DEFAULT_CRDIT_DAYS', '客户缺省信用期（天）', '30', 1, NULL, '客户供应商配置', 'A', '', 'SUT', 0, 0),
('CUSTOMER_DEFAULT_CRDIT_AMOUNT', '客户缺省信用额度（CNY）', '0', 1, NULL, '客户供应商配置', 'A', NULL, 'SUT', 1, 0),
('COMPANY_ZIP', '公司邮编', '', 0, NULL, '公司属性', 'A', NULL, 'SUT', 2, 0),
('BASE_PORT', '本港代码', '', 10, NULL, '业务设置', 'A', '', 'SUT', 4, 0),
('LOCK_CONS_AUDIT', '单票审核是否锁定委托信息', 'Y', 2, NULL, '业务设置', 'A', NULL, 'SUT', 0, 0),
('DEFAULT_DEPT_C', '集装箱业务缺省部门', '', 12, NULL, '业务设置', 'A', '集装箱部', 'SUT', 1, 0),
('DEFAULT_DEPT_B', '散货业务缺省部门', '', 12, NULL, '业务设置', 'A', '散货部', 'SUT', 1, 0),
('DEFAULT_DEPT_G', '报关业务缺省部门', '', 12, NULL, '业务设置', 'A', '报关部', 'SUT', 1, 0),
('DEFAULT_DEPT_I', '报检业务缺省部门', '', 12, NULL, '业务设置', 'A', '报关部', 'SUT', 1, 0),
('DEFAULT_DEPT_A', '空运业务缺省部门', '', 12, NULL, '业务设置', 'A', '空运部', 'SUT', 2, 0),
('FDOC_BL', '提单单证类型', NULL, 13, NULL, '业务设置', 'A', NULL, 'SUT', 0, 0),
('FDOC_CC', '核销单单证类型', NULL, 13, NULL, '业务设置', 'A', '核销单', 'SUT', 1, 0),
('FDOC_AUTO_UPDATE_RELEASABLE', '系统是否自动更新可放核销单、提单', 'Y', 2, NULL, '业务设置', 'A', NULL, 'SUT', 0, 0),
('PASSWORD_EXPIRY_DAYS', '密码有效期（天）', '30', 1, NULL, '系统参数', 'A', NULL, 'SUT', 0, 0),
('PROFIT_ALERT_TYPE', '利润预警类型', '毛利率', 3, '毛利|毛利率', '系统参数', 'A', NULL, 'SUT', 3, 0),
('PROFIT_ALERT_VALUE', '利润预警阀值（利润小于）', '10', 1, NULL, '系统参数', 'A', NULL, 'SUT', 2, 0),
('PROFIT_ALERT_COLOR', '利润预警颜色', '#99CC00', 9, NULL, '系统参数', NULL, NULL, 'SUT', 2, 0),
('CONS_LOCK_DAYS', '开航后多少天锁定业务数据', '30', 1, NULL, '系统参数', 'A', NULL, 'SUT', 0, 0),
('CONS_AR_OVERDUE_DAYS', '最大应收账款天数', '60', 1, NULL, '业务设置', 'A', NULL, 'SUT', 0, 0);

-- 建立公司
insert into P_COMPANY (comp_code, comp_name_cn, comp_name_en,comp_active,comp_start_date,comp_end_date,comp_service_level, comp_email,comp_tel,comp_fax,comp_address, comp_contact,create_time, modify_time) 
values('SUT','{$companyname}', '', 1, now(), null, 0, '{$email}', '{$tel}', '{$fax}', '', '{$contact}', now(), now()); 

-- 建立用户
insert into P_USER (user_name, user_login_name, user_email, user_password, user_password_modify_date,active,comp_code,version, removed) 
values('admin','admin','{$email}', 'e10adc3949ba59abbe56e057f20f883e',now(),1,'SUT',0,0);

-- 增加admin角色
insert into P_ROLE (role_name,active,comp_code,version,removed) 
values ('admin', 1, 'SUT',0,0);

-- 给第一个用户admin角色

insert into P_USER_ROLE (user_id, role_id)
values(1, 1);

-- admin费用权限
insert into P_USER_EXPE_PERMISSION (user_id, chcl_id, chcl_name, expe_type, usep_editable, usep_view_all, usep_edit_all, comp_code, version, removed) 
values (1, 0, '所有费用', 'R', 1, 1, 1, 'SUT', 0, 0);

-- 上面是应收, 这是应付
insert into P_USER_EXPE_PERMISSION (user_id, chcl_id, chcl_name, expe_type, usep_editable, usep_view_all, usep_edit_all, comp_code, version, removed) 
values (1, 0, '所有费用', 'P', 1, 1, 1, 'SUT', 0, 0);

-- admin权限初始化
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010204', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010205', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010206', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010207', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010305', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010306', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010307', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010313', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010505', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010506', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010507', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010508', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050801', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050802', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050803', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050804', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010509', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050901', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050902', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050903', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050904', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010510', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051001', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051002', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051003', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051004', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010511', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010512', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010605', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010606', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010607', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010608', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060801', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060802', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060803', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060804', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010609', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060901', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060902', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060903', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060904', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010610', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061001', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061002', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061003', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061004', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010611', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010612', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020109', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020204', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020205', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020206', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020207', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030109', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020305', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020306', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020307', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030801', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030802', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030803', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030804', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020310', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031001', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031002', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031003', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031004', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020311', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020312', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000204', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020412', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041204', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041205', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000205', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020505', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020509', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020605', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002060501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002060502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030204', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030205', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030206', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030207', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030305', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030306', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030307', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030801', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030802', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030803', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030804', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040206', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040306', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050207', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030113', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050307', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0006', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070106', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070204', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070205', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070305', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070306', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070311', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070405', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000705', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070505', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070506', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000706', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070605', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000707', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070705', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070706', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000708', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070801', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070802', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070803', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070804', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070805', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070806', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070807', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070810', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000709', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070901', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070902', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070903', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070904', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070905', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070906', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000710', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071001', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071002', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071003', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071006', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000711', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000712', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000713', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130208', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130209', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130308', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130309', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000714', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000715', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0008', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000801', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000802', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080204', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000803', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000804', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000805', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000806', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000807', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000808', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080801', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080804', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000809', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080901', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080904', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000810', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081001', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081004', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000811', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000812', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081204', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000814', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000815', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081504', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000816', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081604', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000817', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081704', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0009', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000901', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000902', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000903', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090304', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000904', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090404', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0010', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001001', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001002', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100204', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001003', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001004', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001005', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001006', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001007', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001008', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100801', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100802', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100803', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001009', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100901', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100902', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100903', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001010', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101001', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101002', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101003', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001011', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001012', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001013', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001014', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001015', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001016', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001017', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001018', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101801', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101802', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101803', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001019', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101901', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101902', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101903', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001020', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102001', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102002', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102003', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001021', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001022', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001023', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001024', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001025', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102503', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001026', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102601', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102602', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102603', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001027', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102701', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102702', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102703', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001028', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102801', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102802', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102803', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0011', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110101', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001102', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110201', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110202', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110203', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001103', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110301', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110302', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110303', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001104', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110401', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110402', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110403', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001105', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110501', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110502', 'SUT');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110503', 'SUT');

INSERT INTO `P_MESSAGE_TOPIC` (`METO_ID`, `METO_NAME`, `METO_DESC`, `METO_TEMPLATE`, `METO_RULE`, `ACT_NAME`, `TETY_ID`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
(1, '配船通知', '租船部生成委托时通知操作和调度', '大家好 <br><br>操作：{操作} <br><br>船名：{船名} or sub <br>租船人：{租船人} <br>发货人：{发货人} <br>LAYCAN：与客户：{预计船期从}/{预计船期到} 与船公司：{船期从}/{船期到} <br>船公司：{船公司} <br>船代：{船代} <br>计费标准： 与客户{客户计费单位} 与船公司{船公司计费单位} <br>配货：{毛重} {客户计费单位} <br>合同号：{合同号} <br>FOS编号: {委托号} <br>货物明细：{货物描述} <br>装（港区）/卸港 {装货港}({港区})/{卸货港} <br>条款：与船公司{船公司条款} 与客户{客户条款} <br><br>注意事项：{注意事项} <br><br>装船要求：{备注}', 'rowAction=N,consBizType=B,consMasterFlag=1', 'CONS_S', 37, 1, 'SUT', 3, 0),
(2, '核销单超期未退通知', '核销单, 开船超过30天, 但是未退回', '核销单号: {核销单号}, 委托号: {委托号}, 开船超过30天, 状态未退回', NULL, 'QUARTZ_FDOC_ALERT_WRITEOFF', 43, 1, 'SUT', 1, 0),
(3, '业务员超期提示', '查询有客户超期严重的业务员,提示扣他名下所有客户的提单列表', '业务员: {业务员}, 提单号: {提单号}', NULL, 'QUARTZ_CONS_ALERT_SALES_OVERDUE', 45, 1, 'SUT', 0, 0);
