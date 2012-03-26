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
('长期客户', '{CC}', 0, 0),
('临时客户', '{CC}', 0, 0);

--
-- 导出表中的数据 `C_VENDOR_CATEGORY`
--

INSERT INTO `C_VENDOR_CATEGORY` (`VECA_NAME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('临时供应商', '{CC}', 0, 0),
('普通供应商', '{CC}', 0, 0),
('签约供应商', '{CC}', 0, 0);

--
-- 导出表中的数据 `G_CARGO_CLASS`
--

INSERT INTO `G_CARGO_CLASS` (`CACL_CODE`, `CACL_NAME_CN`, `CACL_NAME_EN`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('01', '活动物', NULL, 1, '{CC}', 0, 0),
('02', '肉及食用杂碎', NULL, 1, '{CC}', 0, 0),
('03', '鱼及其他水生无脊椎动物', NULL, 1, '{CC}', 0, 0),
('04', '乳；蛋；蜂蜜；其他食用动物产品', NULL, 1, '{CC}', 0, 0),
('05', '其他动物产品', NULL, 1, '{CC}', 0, 0),
('06', '活植物；茎、根；插花、簇叶', NULL, 1, '{CC}', 0, 0),
('07', '食用蔬菜、根及块茎', NULL, 1, '{CC}', 0, 0),
('08', '食用水果及坚果；甜瓜等水果的果皮', NULL, 1, '{CC}', 0, 0),
('09', '咖啡、茶、马黛茶及调味香料', NULL, 1, '{CC}', 0, 0),
('10', '谷物', NULL, 1, '{CC}', 0, 0),
('11', '制粉工业产品；麦芽；淀粉等；面筋', NULL, 1, '{CC}', 0, 0),
('12', '油籽；子仁；工业或药用植物；饲料', NULL, 1, '{CC}', 0, 0),
('13', '虫胶；树胶、树脂及其他植物液、汁', NULL, 1, '{CC}', 0, 0),
('14', '编结用植物材料；其他植物产品', NULL, 1, '{CC}', 0, 0),
('15', '动、植物油、脂、蜡；精制食用油脂', NULL, 1, '{CC}', 0, 0),
('16', '肉、鱼及其他水生无脊椎动物的制品', NULL, 1, '{CC}', 0, 0),
('17', '糖及糖食', NULL, 1, '{CC}', 0, 0),
('18', '可可及可可制品', NULL, 1, '{CC}', 0, 0),
('19', '谷物粉、淀粉等或乳的制品；糕饼', NULL, 1, '{CC}', 0, 0),
('20', '蔬菜、水果等或植物其他部分的制品', NULL, 1, '{CC}', 0, 0),
('21', '杂项食品', NULL, 1, '{CC}', 0, 0),
('22', '饮料、酒及醋', NULL, 1, '{CC}', 0, 0),
('23', '食品工业的残渣及废料；配制的饲料', NULL, 1, '{CC}', 0, 0),
('24', '烟草、烟草及烟草代用品的制品', NULL, 1, '{CC}', 0, 0),
('25', '盐；硫磺；土及石料；石灰及水泥等', NULL, 1, '{CC}', 0, 0),
('26', '矿砂、矿渣及矿灰', NULL, 1, '{CC}', 0, 0),
('27', '矿物燃料、矿物油及其产品；沥青等', NULL, 1, '{CC}', 0, 0),
('28', '无机化学品；贵金属等的化合物', NULL, 1, '{CC}', 0, 0),
('29', '有机化学品', NULL, 1, '{CC}', 0, 0),
('30', '药品', NULL, 1, '{CC}', 0, 0),
('31', '肥料', NULL, 1, '{CC}', 0, 0),
('32', '鞣料；著色料；涂料；油灰；墨水等', NULL, 1, '{CC}', 0, 0),
('33', '精油及香膏；芳香料制品及化妆盥洗品', NULL, 1, '{CC}', 0, 0),
('34', '洗涤剂、润滑剂、人造蜡、塑型膏等', NULL, 1, '{CC}', 0, 0),
('35', '蛋白类物质；改性淀粉；胶；霉', NULL, 1, '{CC}', 0, 0),
('36', '炸药；烟火；引火品；易燃材料制品', NULL, 1, '{CC}', 0, 0),
('37', '照相及电影用品', NULL, 1, '{CC}', 0, 0),
('38', '杂项化学产品', NULL, 1, '{CC}', 0, 0),
('39', '塑料及其制品', NULL, 1, '{CC}', 0, 0),
('40', '橡胶及其制品', NULL, 1, '{CC}', 0, 0),
('41', '生皮（毛皮除外）及皮革', NULL, 1, '{CC}', 0, 0),
('42', '皮革制品；旅行箱包；动物肠线制品', NULL, 1, '{CC}', 0, 0),
('43', '毛皮、人造毛皮及其制品', NULL, 1, '{CC}', 0, 0),
('44', '木及木制品；木炭', NULL, 1, '{CC}', 0, 0),
('45', '软木及软木制品', NULL, 1, '{CC}', 0, 0),
('46', '编结材料制品；篮筐及柳条编结品', NULL, 1, '{CC}', 0, 0),
('47', '木浆等纤维状纤维素浆；废纸及纸板', NULL, 1, '{CC}', 0, 0),
('48', '纸及纸板；纸浆、纸或纸板制品', NULL, 1, '{CC}', 0, 0),
('49', '印刷品；手稿、打字稿及设计图纸', NULL, 1, '{CC}', 0, 0),
('50', '蚕丝', NULL, 1, '{CC}', 0, 0),
('51', '羊毛等动物毛；马毛纱线及其机织物', NULL, 1, '{CC}', 0, 0),
('52', '棉花', NULL, 1, '{CC}', 0, 0),
('53', '其他植物纤维；纸纱线及其机织物', NULL, 1, '{CC}', 0, 0),
('54', '化学纤维长丝', NULL, 1, '{CC}', 0, 0),
('55', '化学纤维短纤', NULL, 1, '{CC}', 0, 0),
('56', '絮胎、毡呢及无纺织物；线绳制品等', NULL, 1, '{CC}', 0, 0),
('57', '地毯及纺织材料的其他铺地制品', NULL, 1, '{CC}', 0, 0),
('58', '特种机织物；簇绒织物；刺绣品等', NULL, 1, '{CC}', 0, 0),
('59', '特种机织物；簇绒织物；刺绣品等', NULL, 1, '{CC}', 0, 0),
('60', '针织物及钩编织物', NULL, 1, '{CC}', 0, 0),
('61', '针织或钩编的服装及衣著附件', NULL, 1, '{CC}', 0, 0),
('62', '非针织或非钩编的服装及衣著附件', NULL, 1, '{CC}', 0, 0),
('63', '其他纺织制品；成套物品；旧纺织品', NULL, 1, '{CC}', 0, 0),
('64', '鞋靴、护腿和类似品及其零件', NULL, 1, '{CC}', 0, 0),
('65', '帽类及其零件', NULL, 1, '{CC}', 0, 0),
('66', '伞、手杖、鞭子、马鞭及其零件', NULL, 1, '{CC}', 0, 0),
('67', '加工羽毛及制品；人造炕@蝗朔　破', NULL, 1, '{CC}', 0, 0),
('68', '矿物材料的制品', NULL, 1, '{CC}', 0, 0),
('69', '陶瓷产品', NULL, 1, '{CC}', 0, 0),
('70', '玻璃及其制品', NULL, 1, '{CC}', 0, 0),
('71', '珠宝、贵金属及制品；仿首饰；硬币', NULL, 1, '{CC}', 0, 0),
('72', '钢铁', NULL, 1, '{CC}', 0, 0),
('73', '钢铁制品', NULL, 1, '{CC}', 0, 0),
('74', '铜及其制品', NULL, 1, '{CC}', 0, 0),
('75', '镍及其制品', NULL, 1, '{CC}', 0, 0),
('76', '铝及其制品', NULL, 1, '{CC}', 0, 0),
('78', '铅及其制品', NULL, 1, '{CC}', 0, 0),
('79', '锌及其制品', NULL, 1, '{CC}', 0, 0),
('80', '锡及其制品', NULL, 1, '{CC}', 0, 0),
('81', '其他贱金属、金属陶瓷及其制品', NULL, 1, '{CC}', 0, 0),
('82', '贱金属器具、利口器、餐具及零件', NULL, 1, '{CC}', 0, 0),
('83', '贱金属杂项制品', NULL, 1, '{CC}', 0, 0),
('84', '核反应堆、锅炉、机械器具及零件', NULL, 1, '{CC}', 0, 0),
('85', '电机、电气、音像设备及其零附件', NULL, 1, '{CC}', 0, 0),
('86', '铁道车辆；轨道装置；信号设备', NULL, 1, '{CC}', 0, 0),
('87', '车辆及其零附件，但铁道车辆除外', NULL, 1, '{CC}', 0, 0),
('88', '航空器、航天器及其零件', NULL, 1, '{CC}', 0, 0),
('89', '船舶及浮动结构体', NULL, 1, '{CC}', 0, 0),
('90', '光学、照相、医疗等设备及零附件', NULL, 1, '{CC}', 0, 0),
('91', '钟表及其零件', NULL, 1, '{CC}', 0, 0),
('92', '乐器及其零件、附件', NULL, 1, '{CC}', 0, 0),
('93', '武器、弹药及其零件、附件', NULL, 1, '{CC}', 0, 0),
('94', '家具；寝具等；灯具；活动房', NULL, 1, '{CC}', 0, 0),
('95', '玩具、游戏或运动用品及其零附件', NULL, 1, '{CC}', 0, 0),
('96', '杂项制品', NULL, 1, '{CC}', 0, 0),
('97', '艺术品、收藏品及古物', NULL, 1, '{CC}', 0, 0),
('98', '特殊交易品及未分类商品', NULL, 1, '{CC}', 0, 0),
('99', '特殊交易品及未分类商品', NULL, 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_CHARGE_CLASS`
--

INSERT INTO `G_CHARGE_CLASS` (`CHCL_CODE`, `CHCL_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('21', '仓储保管-搬运装卸类', 1, '{CC}', 0, 0),
('22', '保税监管类', 1, '{CC}', 0, 0),
('23', '报关报检-报关类', 1, '{CC}', 0, 0),
('24', '报关报检-报检类', 1, '{CC}', 0, 0),
('25', '仓储保管-仓储类', 1, '{CC}', 0, 0),
('26', '运费-干线类', 1, '{CC}', 0, 0),
('27', '港区作业-港区类', 1, '{CC}', 0, 0),
('28', '国外段类', 1, '{CC}', 0, 0),
('29', '集疏港运输类', 1, '{CC}', 0, 0),
('30', '港区作业-集装箱堆场/场站类', 1, '{CC}', 0, 0),
('31', '集装箱管理类', 1, '{CC}', 0, 0),
('32', '运费-佣金补贴分成类', 1, '{CC}', 0, 0),
('33', '增值服务类', 1, '{CC}', 0, 0),
('34', '运费-支线类', 1, '{CC}', 0, 0),
('35', '仓储保管-装拆箱类', 1, '{CC}', 0, 0),
('36', '运费-运费附加费类', 1, '{CC}', 0, 0),
('37', '订舱单证类', 1, '{CC}', 0, 0),
('38', '杂费类', 1, '{CC}', 0, 0),
('39', '定额包干费类', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_CONTAINER_CLASS`
--

INSERT INTO `G_CONTAINER_CLASS` (`COCL_CODE`, `COCL_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('GP', '干货箱', 1, '{CC}', 0, 0),
('HC', '干货高箱', 1, '{CC}', 0, 0),
('HT', '挂衣箱', 1, '{CC}', 0, 0),
('OT', '开顶箱', 1, '{CC}', 0, 0),
('RF', '冷冻箱', 1, '{CC}', 0, 0),
('RH', '冷高箱', 1, '{CC}', 0, 0),
('TK', '油罐箱', 1, '{CC}', 0, 0),
('FR', '框架箱', 1, '{CC}', 0, 0),
('OS', '侧壁全开', 1, '{CC}', 0, 0),
('HH', '半高箱', 1, '{CC}', 0, 0),
('VE', '通风箱', 1, '{CC}', 0, 0),
('BK', '散装货箱', 1, '{CC}', 0, 0),
('PF', '平板箱', 1, '{CC}', 0, 0),
('OH', '超高箱', 1, '{CC}', 0, 0),
('OL', '超长箱', 1, '{CC}', 0, 0),
('OW', '超宽箱', 1, '{CC}', 0, 0),
('TT', '挂衣高箱', 1, '{CC}', 0, 0),
('CH', '尺', 1, '{CC}', 0, 0),
('DG', '危品箱', 1, '{CC}', 0, 0),
('DO', '半开箱', 1, '{CC}', 0, 0),
('H1', '一层挂衣箱', 1, '{CC}', 0, 0),
('H2', '二层挂衣箱', 1, '{CC}', 0, 0),
('H3', '三层挂衣箱', 1, '{CC}', 0, 0),
('H4', '四层挂衣箱', 1, '{CC}', 0, 0),
('OO', '超限箱', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_CONTAINER_TYPE`
--

INSERT INTO `G_CONTAINER_TYPE` (`COTY_CODE`, `COTY_LENGTH`, `COCL_CODE`, `COTY_TEU`, `COTY_ISO_CODE`, `COTY_UN_CODE`, `COTY_TARE_WEIGHT`, `COTY_MAX_WEIGHT`, `COTY_MAX_MEASUREMENT`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('10GP', '10', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('10RF', '10', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20BK', '20', 'BK', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20GP', '20', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20FR', '20', 'FR', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20HC', '20', 'HC', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20HH', '20', 'HH', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20HT', '20', 'HT', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20TT', '20', 'TT', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20OS', '20', 'OS', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20OT', '20', 'OT', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20PF', '20', 'PF', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20RF', '20', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20RH', '20', 'RH', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20TK', '20', 'TK', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20VE', '20', 'VE', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40BK', '40', 'BK', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40GP', '40', 'GP', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40FR', '40', 'FR', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40HC', '40', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40HH', '40', 'HH', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40HT', '40', 'HT', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40TT', '40', 'TT', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40OS', '40', 'OS', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40OT', '40', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40PF', '40', 'PF', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40RF', '40', 'RF', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40RH', '40', 'RH', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40TK', '40', 'TK', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40VE', '40', 'VE', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45FR', '45', 'FR', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45HC', '45', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45HT', '45', 'HT', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45OS', '45', 'OS', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45OT', '45', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45PF', '45', 'PF', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45RF', '45', 'RF', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45RH', '45', 'RH', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45TK', '45', 'TK', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('12GP', '12', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('12RF', '12', 'RF', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45GP', '45', 'GP', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('38GP', '38', 'GP', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('48HC', '48', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('53HC', '53', 'HC', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20OO', '20', 'OO', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40OO', '40', 'OO', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('TEST', '12', 'OT', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45G1', '40', 'OH', NULL, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('10DG', '10', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('10', '40', 'GP', NULL, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 1),
('20DG', '20', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40DG', '40', 'DG', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('12DG', '12', 'DG', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45DG', '45', 'DG', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('10DO', '10', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20DO', '20', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('40DO', '40', 'DO', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('12DO', '12', 'DO', 1, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('45DO', '45', 'DO', 2, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 0),
('20', '40', 'GP', NULL, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 1),
('LDJF', '23', 'GP', 12, NULL, NULL, NULL, NULL, NULL, 1, '{CC}', 0, 1);

--
-- 导出表中的数据 `G_COUNTRY`
--

INSERT INTO `G_COUNTRY` (`COUN_CODE`, `COUN_NAME_CN`, `COUN_NAME_EN`, `COMP_CODE`, `VERSION`) VALUES
('ZW', '津巴布韦', 'ZIMBABWE', '{CC}', 5),
('IR', '伊朗', 'IRAN, ISLAMIC REPUBLIC', '{CC}', 0),
('AD', '安道尔', 'ANDORRA', '{CC}', 0),
('AE', '阿拉伯联合酋长国', 'UNITED ARAB EMIRATES', '{CC}', 0),
('AF', '阿富汗', 'AFGHANISTAN', '{CC}', 1),
('AG', '安提瓜', 'ANTIGUA AND BARBUDA', '{CC}', 0),
('AI', '安圭拉', 'ANGUILLA', '{CC}', 0),
('AL', '阿尔巴尼亚', 'ALBANIA', '{CC}', 1),
('AM', '亚美尼亚', 'ARMENIA', '{CC}', 0),
('AN', '荷属安的列斯', 'NETHERLANDS AN', '{CC}', 1),
('AO', '安哥拉', 'ANGOLA', '{CC}', 0),
('AQ', '南极洲', 'ANTARCTICA', '{CC}', 0),
('AR', '阿根廷', 'ARGENTINA', '{CC}', 0),
('AS', '美属萨摩亚', 'AMERICAN SAMOA', '{CC}', 0),
('AT', '奥地利', 'AUSTRIA', '{CC}', 0),
('AU', '澳大利亚', 'AUSTRALIA', '{CC}', 0),
('AW', '阿鲁巴岛', 'ARUBA', '{CC}', 0),
('AZ', '阿塞拜疆', 'AZERBAIJAN', '{CC}', 0),
('BA', '波-黑', 'BOSNIA-HERCEGOVINA', '{CC}', 0),
('BB', '巴巴多斯', 'BARBADOS', '{CC}', 0),
('BD', '孟加拉', 'BANGLADESH', '{CC}', 0),
('BE', '比利时', 'BELGIUM', '{CC}', 0),
('BF', '布基纳法索', 'BURKINA FASO', '{CC}', 0),
('BG', '保加利亚', 'BULGARIA', '{CC}', 0),
('BH', '巴林', 'BAHRAIN', '{CC}', 0),
('BI', '布隆迪', 'BURUNDI', '{CC}', 0),
('BJ', '贝宁', 'BENIN', '{CC}', 0),
('BM', '百慕大群岛', 'BERMUDA', '{CC}', 0),
('BN', '文莱', 'BRUNEI DARUSSALAM', '{CC}', 0),
('BO', '玻利维亚', 'BOLIVIA', '{CC}', 0),
('BR', '巴西', 'BRAZIL', '{CC}', 0),
('BS', '巴哈马联邦', 'BAHAMAS', '{CC}', 0),
('BT', '不丹', 'BHUTAN', '{CC}', 0),
('BV', '布维岛', 'BOUVET ISLAND', '{CC}', 0),
('BW', '博茨瓦纳', 'BOTSWANA', '{CC}', 0),
('BY', '白俄罗斯', 'BELARUS', '{CC}', 0),
('BZ', '伯利兹', 'BELIZE', '{CC}', 0),
('CA', '加拿大', 'CANADA', '{CC}', 0),
('CC', '可可岛', 'COCOS(KEELING)ISLAND', '{CC}', 0),
('CF', '中非共和国', 'CENTRAL AFRICAN REP.', '{CC}', 0),
('CG', '刚果（布）', 'CONGO', '{CC}', 0),
('CH', '瑞士', 'SWITZERLAND', '{CC}', 0),
('CI', '科特迪瓦', 'COTE D''IVOIRE', '{CC}', 0),
('CK', '库克群岛', 'COOK ISLANDS', '{CC}', 0),
('CL', '智利', 'CHILE', '{CC}', 0),
('CM', '喀麦隆', 'CAMEROON', '{CC}', 0),
('CN', '中国', 'CHINA', '{CC}', 0),
('CO', '哥伦比亚', 'COLOMBIA', '{CC}', 0),
('CR', '哥斯达黎加', 'COSTA RICA', '{CC}', 0),
('CU', '古巴', 'CUBA', '{CC}', 0),
('CV', '佛得角群岛', 'CAPE VERDE', '{CC}', 0),
('CX', '圣诞岛', 'CHRISTMAS ISLANDS', '{CC}', 0),
('CY', '塞浦路斯', 'CYPRUS', '{CC}', 0),
('CZ', '捷克共和国', 'CZECH REPUBLIC', '{CC}', 0),
('DE', '德国', 'GERMANY, FEDERAL REPUB', '{CC}', 0),
('DJ', '吉布提', 'DJIBOUTI', '{CC}', 0),
('DK', '丹麦', 'DENMARK', '{CC}', 0),
('DM', '英属多米尼加', 'DOMINICA', '{CC}', 0),
('DO', '多米尼加共和国', 'DOMINICAN REP.', '{CC}', 0),
('DZ', '阿尔及利亚', 'ALGERIA', '{CC}', 0),
('EC', '厄瓜多尔', 'ECUADOR', '{CC}', 0),
('EE', '爱沙尼亚', 'ESTONIA', '{CC}', 0),
('EG', '埃及', 'EGYPT', '{CC}', 0),
('EH', '西撒哈拉', 'WESTERN SAHARA', '{CC}', 0),
('ER', '厄立特里亚', 'ERITREA', '{CC}', 0),
('ES', '西班牙', 'SPAIN', '{CC}', 0),
('ET', '埃塞俄比亚', 'ETHIOPIA', '{CC}', 0),
('FI', '芬兰', 'FINLAND', '{CC}', 0),
('FJ', '斐济', 'FIJI', '{CC}', 0),
('FK', '福克兰(马尔维纳斯)群岛', 'FALK', '{CC}', 0),
('FM', '密克罗', 'FED STATES MICRONES', '{CC}', 0),
('FO', '丹麦法罗群岛', 'FAEROE ISLANDS', '{CC}', 0),
('FR', '法国', 'FRANCE', '{CC}', 0),
('GA', '加蓬', 'GABON', '{CC}', 0),
('GB', '英国', 'UNITED KINGDOM', '{CC}', 0),
('GD', '格林纳达', 'GRENADA', '{CC}', 0),
('GE', '格鲁吉亚', 'GEORGIA', '{CC}', 0),
('GF', '法属圭亚那', 'FRENCH GUIANA', '{CC}', 0),
('GH', '加纳', 'GHANA', '{CC}', 0),
('GI', '直布罗陀', 'GIBRALTAR', '{CC}', 0),
('GL', '格陵兰', 'GREENLAND', '{CC}', 0),
('GM', '冈比亚', 'GAMBIA', '{CC}', 0),
('GN', '几内亚', 'GUINEA', '{CC}', 0),
('GP', '瓜德罗普岛', 'GUADELOUPE', '{CC}', 0),
('GQ', '赤道几内亚', 'EQUATORIAL GUINE', '{CC}', 0),
('GR', '希腊', 'GREECE', '{CC}', 0),
('GT', '危地马拉', 'GUATEMALA', '{CC}', 0),
('GU', '关岛', 'GUAM', '{CC}', 0),
('GW', '几内亚比绍', 'GUINEA-BISSAU', '{CC}', 0),
('GY', '圭亚那', 'GUYANA', '{CC}', 0),
('HK', '香港', 'HONG KONG', '{CC}', 0),
('HM', '赫德岛和麦克唐纳岛', 'HEARD ISLAND AND MCDONALD ISLAND', '{CC}', 0),
('HN', '洪都拉斯', 'HONDURAS', '{CC}', 0),
('HR', '克罗地亚', 'CROATIA', '{CC}', 0),
('HT', '海地', 'HAITI', '{CC}', 0),
('HU', '匈牙利', 'HUNGARY', '{CC}', 0),
('ID', '印度尼西亚', 'INDONESIA', '{CC}', 0),
('IE', '爱尔兰', 'IRELAND', '{CC}', 0),
('IL', '以色列', 'ISRAEL', '{CC}', 0),
('IN', '印度', 'INDIA', '{CC}', 0),
('IO', '英属印度洋领地', 'BRITISH INDIAN OCEAN TERRITORY', '{CC}', 0),
('IQ', '伊拉克', 'IRAQ', '{CC}', 0),
('IS', '冰岛', 'ICELAND', '{CC}', 0),
('IT', '意大利', 'ITALY', '{CC}', 0),
('JM', '牙买加', 'JAMAICA', '{CC}', 0),
('JO', '约旦', 'JORDAN', '{CC}', 0),
('JP', '日本', 'JAPAN', '{CC}', 0),
('KE', '肯尼亚', 'KENYA', '{CC}', 0),
('KG', '吉尔吉斯斯坦', 'KYRGYZSTAN', '{CC}', 0),
('KH', '柬埔寨', 'CAMBODIA', '{CC}', 0),
('KI', '基里巴斯', 'KIRIBATI', '{CC}', 0),
('KM', '科摩罗', 'COMOROS', '{CC}', 0),
('KN', '尼维斯联邦', 'ST KITTS-NEVIS', '{CC}', 0),
('KP', '朝鲜', 'KOREA, DEM PEOPLE''S RE', '{CC}', 0),
('KR', '韩国', 'KOREA', '{CC}', 0),
('KW', '科威特', 'KUWAIT', '{CC}', 0),
('KY', '开曼群岛', 'CAYMAN ISLANDS', '{CC}', 0),
('KZ', '哈萨克斯坦', 'KAZAKHSTAN', '{CC}', 0),
('LA', '老挝', 'LAO PEOPLE''S DEMOCRATI', '{CC}', 0),
('LB', '黎巴嫩', 'LEBANON', '{CC}', 0),
('LC', '圣卢西亚', 'SAINT LUCIA', '{CC}', 0),
('LI', '列支敦士登', 'LIECHTENSTEIN', '{CC}', 0),
('LK', '斯里兰卡', 'SRI LANKA', '{CC}', 0),
('LR', '利比里亚', 'LIBERIA', '{CC}', 0),
('LS', '莱索托', 'LESOTHO', '{CC}', 0),
('LT', '立陶宛', 'LITHUANIA', '{CC}', 0),
('LU', '卢森堡', 'LUXEMBOURG', '{CC}', 0),
('LV', '拉脱维亚', 'LATVIA', '{CC}', 0),
('LY', '利比亚', 'LYBIAN ARAB JAMAHIRI', '{CC}', 0),
('MA', '摩洛哥', 'MOROCCO', '{CC}', 0),
('MC', '摩纳哥', 'MONACO', '{CC}', 0),
('MD', '摩尔多瓦', 'MOLDOVA', '{CC}', 0),
('MG', '马达加斯加', 'MADAGASCAR', '{CC}', 0),
('MH', '马绍尔群岛', 'MARSHALL ISLANDS', '{CC}', 0),
('MK', '马其顿', 'FRMR YUGOSLAV REP OF', '{CC}', 0),
('ML', '马里', 'MALI', '{CC}', 0),
('MM', '缅甸', 'MYANMAR', '{CC}', 0),
('MN', '蒙古', 'MONGOLIA', '{CC}', 0),
('MO', '澳门', 'MACAU', '{CC}', 0),
('MP', '北马里亚纳群岛', 'NORTHERN MAR', '{CC}', 0),
('MQ', '马提尼克岛', 'MARTINIQUE', '{CC}', 0),
('MR', '毛里塔尼亚', 'MAURITANIA', '{CC}', 0),
('MS', '蒙特色纳岛', 'MONTSERRAT', '{CC}', 0),
('MT', '马耳他', 'MALTA', '{CC}', 0),
('MU', '毛里求斯', 'MAURITIUS', '{CC}', 0),
('MV', '马尔代夫', 'MALDIVES', '{CC}', 0),
('MW', '马拉维', 'MALAWI', '{CC}', 0),
('MX', '墨西哥', 'MEXICO', '{CC}', 0),
('MY', '马来西亚', 'MALAYSIA', '{CC}', 0),
('MZ', '莫桑比克', 'MOZAMBIQUE', '{CC}', 0),
('NA', '纳米比亚', 'NAMIBIA', '{CC}', 0),
('NC', '新喀里多尼亚', 'NEW CALEDONIA', '{CC}', 0),
('NE', '尼日尔', 'NIGER', '{CC}', 0),
('NF', '诺福克岛(英国)', 'NORFOLK ISLAND', '{CC}', 0),
('NG', '尼日利亚', 'NIGERIA', '{CC}', 0),
('NI', '尼加拉瓜', 'NICARAGUA', '{CC}', 0),
('NL', '荷兰', 'NETHERLANDS', '{CC}', 0),
('NO', '挪威', 'NORWAY', '{CC}', 0),
('NP', '尼泊尔', 'NEPAL', '{CC}', 0),
('NR', '瑙鲁', 'NAURU', '{CC}', 0),
('NU', '纽埃', 'NIUE', '{CC}', 0),
('NZ', '新西兰', 'NEW ZEALAND', '{CC}', 0),
('OM', '阿曼', 'OMAN', '{CC}', 0),
('PA', '巴拿马', 'PANAMA', '{CC}', 0),
('PE', '秘鲁', 'PERU', '{CC}', 0),
('PF', '法属波利尼西亚', 'FRENCH POLYN', '{CC}', 0),
('PG', '巴布亚新几内亚', 'PAPUA NEW GU', '{CC}', 0),
('PH', '菲律宾', 'PHILIPPINES', '{CC}', 0),
('PK', '巴基斯坦', 'PAKISTAN', '{CC}', 0),
('PL', '波兰', 'POLAND', '{CC}', 0),
('PM', '圣皮埃尔和密克隆', 'SAINT PIERRE AND MIQUELON', '{CC}', 0),
('PN', '皮特凯恩', 'PITCAIRN', '{CC}', 0),
('PR', '波多黎各', 'PUERTO RICO', '{CC}', 0),
('PT', '葡萄牙', 'PORTUGAL', '{CC}', 0),
('PW', '帛琉(菲律宾东南-群岛)', 'PALAU', '{CC}', 0),
('PY', '巴拉圭', 'PARAGUAY', '{CC}', 0),
('QA', '卡塔尔', 'QATAR', '{CC}', 0),
('RE', '留尼汪', 'REUNION', '{CC}', 0),
('RO', '罗马尼亚', 'ROMANIA', '{CC}', 0),
('RU', '俄罗斯', 'RUSSIAN FEDERATION', '{CC}', 0),
('RW', '卢旺达', 'RWANDA', '{CC}', 0),
('SA', '沙特阿拉伯', 'SAUDI ARABIA', '{CC}', 0),
('SB', '所罗门群岛', 'SOLOMON ISLANDS', '{CC}', 0),
('SC', '塞舌尔', 'SEYCHELLES', '{CC}', 0),
('SD', '苏丹', 'SUDAN', '{CC}', 0),
('SE', '瑞典', 'SWEDEN', '{CC}', 0),
('SG', '新加坡', 'SINGAPORE', '{CC}', 0),
('SH', '圣赫勒拿岛(英国)', 'ST HELENA', '{CC}', 0),
('SI', '斯洛文尼亚', 'SLOVENIA', '{CC}', 0),
('SJ', '斯瓦尔巴岛和扬马延岛', 'SVALARD AND JAN MAYEN', '{CC}', 0),
('SK', '斯洛伐克', 'SLOVAKIA', '{CC}', 0),
('SL', '塞拉利昂', 'SIERRA LEONE', '{CC}', 0),
('SM', '圣马力诺', 'SAN MARINO', '{CC}', 0),
('SN', '塞内加尔', 'SENEGAL', '{CC}', 0),
('SO', '索马里', 'SOMALIA', '{CC}', 0),
('SR', '苏里南', 'SURINAME', '{CC}', 0),
('ST', '圣多美和普林西比', 'SAO TOME AND PRINCIPE', '{CC}', 0),
('SV', '萨尔瓦多', 'EL SALVADOR', '{CC}', 0),
('SY', '叙利亚', 'SYRIAN ARAB REPUBLIC', '{CC}', 0),
('SZ', '斯威士兰', 'SWAZILAND', '{CC}', 0),
('TC', '土克斯及开科斯群岛', 'TURKS & CAICOS ISLAN', '{CC}', 0),
('TD', '乍得', 'CHAD', '{CC}', 0),
('TF', '法属南部领地', 'FRENCH SOUTHERN TERRITORIES', '{CC}', 0),
('TG', '多哥', 'TOGO', '{CC}', 0),
('TH', '泰国', 'THAILAND', '{CC}', 0),
('TJ', '塔吉克斯坦', 'TAJIKISTAN', '{CC}', 0),
('TM', '土库曼司坦', 'TURKMENISTAN', '{CC}', 0),
('TN', '突尼斯', 'TUNISIA', '{CC}', 0),
('TO', '汤加', 'TONGA', '{CC}', 0),
('TR', '土耳其', 'TURKEY', '{CC}', 0),
('TT', '特立尼达和多巴哥', 'TRINIDAD AND TOBAGO', '{CC}', 0),
('TV', '图瓦卢', 'TUVALU', '{CC}', 0),
('TW', '台湾', 'TAIWAN, PROVINCE OF CH', '{CC}', 0),
('TZ', '坦桑尼亚', 'TANZANIA, UNITED R', '{CC}', 0),
('UA', '乌克兰', 'UKRAINE', '{CC}', 0),
('UG', '乌干达', 'UGANDA', '{CC}', 0),
('UM', '美属外岛', 'US MINOR OUTLYING ISLA', '{CC}', 0),
('US', '美国', 'UNITED STATES', '{CC}', 0),
('UY', '乌拉圭', 'URUGUAY', '{CC}', 0),
('UZ', '乌兹别克斯坦', 'UZBEKISTAN', '{CC}', 0),
('VA', '梵蒂冈', 'VATICAN', '{CC}', 0),
('VC', '圣文森特', 'ST VINCENT-GRENADI', '{CC}', 0),
('VE', '委内瑞拉', 'VENEZUELA', '{CC}', 0),
('VG', '英属维尔京岛', 'BR. VIRGIN IS', '{CC}', 0),
('VI', '美属维尔京岛', 'VIRGIN ISLANDS, U.S.', '{CC}', 0),
('VN', '越南', 'VIET NAM', '{CC}', 0),
('VU', '瓦努阿图', 'VANUATU', '{CC}', 0),
('WF', '瓦利斯', 'WALLIS AND FUTUNA IS', '{CC}', 0),
('WS', '萨摩亚', 'SAMOA', '{CC}', 0),
('YE', '也门', 'YEMEN', '{CC}', 0),
('YU', '南斯拉夫', 'YUGOSLAVIA (Fed. R）', '{CC}', 0),
('ZA', '南非', 'SOUTH AFRICA', '{CC}', 0),
('ZM', '赞比亚', 'ZAMBIA', '{CC}', 0),
('ZR', '扎伊尔', 'ZAIRE', '{CC}', 0),
('CD', '民主刚果', 'Congo,DR', '{CC}', 0),
('CS', '塞尔维亚和黑山', 'SERBIA AND MONTENEGRO', '{CC}', 0),
('GS', '南乔治亚地区及南桑威奇群岛', 'SOUTH GEORGIA AND THE SOUTH SAND', '{CC}', 0),
('TK', '托克老群岛', 'TOKELAU', '{CC}', 0),
('TL', '东帝汶岛', 'EAST TIMOR', '{CC}', 0),
('XZ', '国际水域设施', 'INSTALLATIONS IN INTERNATIONAL W', '{CC}', 0),
('YT', '马约特', 'MAYOTTE', '{CC}', 0),
('01', '比利时', 'BILISHI', '{CC}', 0);

--
-- 导出表中的数据 `G_CURRENCY`
--

INSERT INTO `G_CURRENCY` (`CURR_CODE`, `CURR_NAME`, `CURR_SYMBOL`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('USD', '美元', '$', 1, '{CC}', 0, 0),
('CNY', '人民币', '￥', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_DOCUMENT_TYPE`
--

INSERT INTO `G_DOCUMENT_TYPE` (`DOTY_CODE`, `DOTY_NAME`, `DOTY_CLASS`, `DOTY_RETURN_FLAG`, `DOTY_BACK_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('FP', '发票', '10', 0, 0, 1, '{CC}', 1, 0),
('PZZS', '品质证书', '11', 0, 0, 1, '{CC}', 1, 0),
('ZLZS', '重量证书', '11', 0, 0, 1, '{CC}', 1, 0),
('SLZS', '数量证书', '11', 0, 0, 1, '{CC}', 1, 0),
('SYWSZS', '兽医卫生证书', '11', 0, 0, 1, '{CC}', 1, 0),
('JKZS', '健康证书', '11', 0, 0, 1, '{CC}', 1, 0),
('WSZS', '卫生证书', '11', 0, 0, 1, '{CC}', 1, 0),
('DWWSZS', '动物卫生证书', '11', 0, 0, 1, '{CC}', 1, 0),
('ZWJYZS', '植物检疫证书', '11', 0, 0, 1, '{CC}', 1, 0),
('XZXDZS', '熏蒸消毒证书', '11', 0, 0, 1, '{CC}', 1, 0),
('CRHWHZPD', '出入货物换证凭单', '11', 0, 0, 1, '{CC}', 1, 0),
('HT', '合同', '10', 0, 0, 1, '{CC}', 1, 0),
('XYZ', '信用证', '10', 0, 0, 1, '{CC}', 1, 0),
('HZPD', '换证凭单', '10', 0, 0, 1, '{CC}', 1, 0),
('ZXD', '装箱单', '10', 0, 0, 1, '{CC}', 1, 0),
('CJD', '厂检单', '10', 0, 0, 1, '{CC}', 1, 0),
('BZXNJGD', '包装性能结果单', '10', 0, 0, 1, '{CC}', 1, 0),
('XKSPWJ', '许可/审批文件', '10', 0, 0, 1, '{CC}', 1, 0),
('XD', '箱单', '12', 0, 0, 1, '{CC}', 1, 0),
('FP', '发票', '12', 0, 0, 1, '{CC}', 1, 0),
('BGWT', '报关委托', '12', 0, 0, 1, '{CC}', 1, 0),
('BJWT', '报检委托(需商检货)', '12', 0, 0, 1, '{CC}', 1, 0),
('FMZBZZM', '非木质包装证明(非木质包装货)', '12', 0, 0, 1, '{CC}', 1, 0),
('HXD', '核销单', '12', 0, 0, 1, '{CC}', 1, 0),
('YPZM', '药品证明(出口货为药品)', '12', 0, 0, 1, '{CC}', 1, 0),
('CZSJ', '场站收据', '12', 0, 0, 1, '{CC}', 1, 0),
('JKBGD', '进口报关单', '30', 0, 0, 1, '{CC}', 1, 0),
('CKBGD', '出口报关单', '30', 0, 0, 1, '{CC}', 1, 0),
('RJHWJYJYZM', '入境货物检验检疫证明', '30', 0, 0, 1, '{CC}', 1, 0),
('JKSD', '进口税单', '30', 0, 0, 1, '{CC}', 1, 0),
('CRJJYJYGGSQD', '出入境检验检疫更改申请单', '30', 0, 0, 1, '{CC}', 1, 0),
('TD', '提单', '30', 0, 0, 1, '{CC}', 1, 0);

--
-- 导出表中的数据 `G_EXCHANGE_SETTLEMENT`
--

INSERT INTO `G_EXCHANGE_SETTLEMENT` (`EXSE_CODE`, `EXSE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '信汇', 1, '{CC}', 0, 0),
('2', '电汇', 1, '{CC}', 0, 0),
('3', '票    汇', 1, '{CC}', 0, 0),
('4', '付款交单', 1, '{CC}', 0, 0),
('5', '承兑交单', 1, '{CC}', 0, 0),
('6', '信 用 证', 1, '{CC}', 0, 0),
('7', '先出后结', 1, '{CC}', 0, 0),
('8', '先结后出', 1, '{CC}', 0, 0),
('9', '其    他', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_ISSUE_TYPE`
--

INSERT INTO `G_ISSUE_TYPE` (`ISTY_CODE`, `ISTY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '正本', 1, '{CC}', 0, 0),
('2', '电放', 1, '{CC}', 0, 0),
('3', 'SEAWAYBILL', 1, '{CC}', 0, 0),
('4', '其它', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_LEVY_TYPE`
--

INSERT INTO `G_LEVY_TYPE` (`LETY_CODE`, `LETY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('101', '一般征税', 1, '{CC}', 0, 0),
('502', '来料加工', 1, '{CC}', 0, 0),
('503', '进料加工', 1, '{CC}', 0, 0),
('601', '中外合资', 1, '{CC}', 0, 0),
('602', '中外合作', 1, '{CC}', 0, 0),
('603', '外资企业', 1, '{CC}', 0, 0),
('789', '鼓励项目', 1, '{CC}', 0, 0),
('799', '自有资金', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_PACKAGE`
--

INSERT INTO `G_PACKAGE` (`PACK_CODE`, `PACK_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('BALES', 'BALES', 1, '{CC}', 0, 0),
('CRATE', 'CRATES', 1, '{CC}', 0, 0),
('W/CS', 'WOODEN CASES', 1, '{CC}', 0, 0),
('S/P', 'SETS/PCS', 1, '{CC}', 0, 0),
('P/CS', 'PLYWOOD CASES', 1, '{CC}', 0, 0),
('GUNNY', 'GUNNY BAG', 1, '{CC}', 0, 0),
('PLT', 'PALLET', 1, '{CC}', 0, 0),
('SKIDS', 'SKIDS', 1, '{CC}', 0, 0),
('PCS', 'PIECES', 1, '{CC}', 0, 0),
('SETS', 'SETS', 1, '{CC}', 0, 0),
('C/DRUM', 'CARDBOARD DRUMS', 1, '{CC}', 0, 0),
('DZS', 'DOZENS', 1, '{CC}', 0, 0),
('RL', 'REEL', 1, '{CC}', 0, 0),
('ENDCAPS', 'CLEAR FLOAT GLASS', 1, '{CC}', 0, 0),
('PLTS', 'PALLETS', 1, '{CC}', 0, 0),
('CASES', 'CASES', 1, '{CC}', 0, 0),
('DRUMS', 'DRUMS', 1, '{CC}', 0, 0),
('PPWOVENB', 'PP WOVEN BAGS', 1, '{CC}', 0, 0),
('IRON DRU', 'IRON DRUMS', 1, '{CC}', 0, 0),
('CLOTH BA', 'CLOTH BALE', 1, '{CC}', 0, 0),
('PLASTIC', 'PLASTIC DRUMS', 1, '{CC}', 0, 0),
('TRAYS', 'TRAYS', 1, '{CC}', 0, 0),
('RACKS', 'RACKS', 1, '{CC}', 0, 0),
('CTNS', 'CARTONS', 1, '{CC}', 0, 0),
('FDRUMS', 'FIBRE DRUMS', 1, '{CC}', 0, 0),
('PALLETS', 'PALLETS', 1, '{CC}', 0, 0),
('ROLLS', 'ROLLS', 1, '{CC}', 0, 0),
('IRON C', 'IRON CRATES', 1, '{CC}', 0, 0),
('BAGS', 'BAGS', 1, '{CC}', 0, 0),
('CNTRS', 'CONTAINERS', 1, '{CC}', 0, 0),
('GUN', 'GUNNY SACKS', 1, '{CC}', 0, 0),
('PRESS PA', 'PRESS PACKED BALES', 1, '{CC}', 0, 0),
('UNPACKED', 'UNPACKED', 1, '{CC}', 0, 0),
('PACKAGES', 'PACKAGES', 1, '{CC}', 0, 0),
('W/BS', 'WOODEN BOXES', 1, '{CC}', 0, 0),
('W/CRS', 'WOODEN CRATES', 1, '{CC}', 0, 0),
('LT', 'LOT', 1, '{CC}', 0, 0),
('BUNDLES', 'BUNDLES', 1, '{CC}', 0, 1),
('PRS', 'PRS', 1, '{CC}', 0, 0),
('W/DRUMS', 'WOODEN DRUMS', 1, '{CC}', 0, 0),
('TINS', 'TINS', 1, '{CC}', 0, 0),
('BIG BAGS', 'BIG BAGS', 1, '{CC}', 0, 0),
('COILS', 'COILS', 1, '{CC}', 0, 0),
('PIECES', 'PIECES', 1, '{CC}', 0, 0),
('PAIRS', 'PAIRS', 1, '{CC}', 0, 0),
('TANK', 'TANK', 1, '{CC}', 0, 0),
('BLDS', 'BLDS', 1, '{CC}', 0, 0),
('UNITS', 'UNITS', 1, '{CC}', 0, 0),
('CANS', 'CANS', 1, '{CC}', 0, 0),
('BOXES', 'BOXES', 1, '{CC}', 0, 0),
('BDLS', 'BUNDLES', 1, '{CC}', 0, 0),
('LOT', 'LOT', 1, '{CC}', 0, 0),
('SACKS', 'SACKS', 1, '{CC}', 0, 0),
('HANGERS', 'HANGERS', 1, '{CC}', 0, 0),
('FIBER DR', 'FIBER DRUMS', 1, '{CC}', 0, 0),
('DOUBLE', 'DOUBLE PP BAGS', 1, '{CC}', 0, 0),
('PLAS', 'PLASTICS DRUMS', 1, '{CC}', 0, 0),
('COM', 'COMPOUND BAGS', 1, '{CC}', 0, 0),
('JUMBOBAG', 'JUMBO BAGS', 1, '{CC}', 0, 0),
('PLASTICB', 'PLASTIC BAGS', 1, '{CC}', 0, 0),
('KINT BAG', 'KINTTING BAG', 1, '{CC}', 0, 0),
('CYL', 'CYL', 1, '{CC}', 0, 0),
('CYLINDER', 'CYLINDERS', 1, '{CC}', 0, 0),
('IRONPALE', 'IRON PALLETS', 1, '{CC}', 0, 0),
('SB.CASES', 'SYNTHETIC BOARD CASES', 1, '{CC}', 0, 0),
('W/P', 'WOODEN PALLETS', 1, '{CC}', 0, 0),
('T/BAGS', 'TOTE BAGS', 1, '{CC}', 0, 0),
('MTS', 'MTS', 1, '{CC}', 0, 0),
('REELS', 'REELS', 1, '{CC}', 0, 0),
('BTL', 'BOTTOLS', 1, '{CC}', 0, 0),
('SUPER', 'SUPER SACKS', 1, '{CC}', 0, 0),
('WDCS', 'WDCS', 1, '{CC}', 0, 0),
('PAPER', 'PAPER BAGS', 1, '{CC}', 0, 0),
('WOVEN BS', 'WOVEN BAGS', 1, '{CC}', 0, 0),
('11111111', 'CARTONS', 1, '{CC}', 0, 1),
('W/BAGS', 'WEAVING BAGS', 1, '{CC}', 0, 0),
('TUBES', 'TUBES', 1, '{CC}', 0, 0),
('BOTTOLS', 'BTLS', 1, '{CC}', 0, 0),
('CARTONS', 'CARTONS', 1, '{CC}', 0, 1),
('DUNDLES', 'DUNDLES', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_PAYMENT_TERM`
--

INSERT INTO `G_PAYMENT_TERM` (`PATE_CODE`, `PATE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('P', 'FREIGHT PREPAID', 1, '{CC}', 0, 0),
('C', 'FREIGHT COLLECT', 1, '{CC}', 0, 0),
('F', 'FREE', 1, '{CC}', 0, 0),
('E', '第三地付款', 1, '{CC}', 0, 0),
('L', '第一程预付/第二程到付', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_PLACE`
--

INSERT INTO `G_PLACE` (`PLAC_CODE`, `PLAC_NAME`, `PLAC_NAME_EN`, `PLAC_TYPE`, `COUN_CODE`, `PLAC_PROVINCE_ID`, `PLAC_PROVINCE_NAME`, `PLAC_CITY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('YSG', '洋山港', 'YANSHAN', 3, 'CN', NULL, NULL, NULL, 1, '{CC}', 0, 0),
('JGL', '军公路码头', 'JUNGONGLU', 3, 'CN', NULL, NULL, NULL, 1, '{CC}', 1, 1),
('JGL', '军公路港务', 'JUNGONGLU', 3, 'CN', NULL, NULL, NULL, 1, '{CC}', 1, 0),
('ZHB', '张华浜港务', 'ZHANGHUABANG', 3, 'CN', NULL, NULL, NULL, 1, '{CC}', 1, 0),
('BSG', '宝山港务', 'BAOSHAN', 3, 'CN', NULL, NULL, NULL, 1, '{CC}', 1, 0),
('LJRQ', '罗泾二期', 'LUOJINGERQI', 3, 'CN', NULL, NULL, NULL, 1, '{CC}', 1, 0),
('SGWC', '上钢五厂', 'SHANGGANGWUCHANG', 3, 'CN', NULL, NULL, NULL, 1, '{CC}', 1, 0),
('TCWX', '拖出维修', 'TUOCHUWEIXIU', 3, 'CN', NULL, NULL, NULL, 1, '{CC}', 2, 0);

--
-- 导出表中的数据 `G_SETTLEMENT_WAY`
--

INSERT INTO `G_SETTLEMENT_WAY` (`SEWA_CODE`, `SEWA_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('DH', '电汇', 1, '{CC}', 0, 0),
('ZP', '支票', 1, '{CC}', 0, 0),
('WHHK', '外汇划款', 1, '{CC}', 0, 0),
('DZLH', '电子联行付款', 1, '{CC}', 0, 0),
('DJPZ', '贷记凭证', 1, '{CC}', 0, 0),
('XJ', '现金', 1, '{CC}', 0, 0),
('SD', '水单', 1, '{CC}', 0, 0),
('ZZ', '转帐', 1, '{CC}', 0, 0),
('TS', '托收', 1, '{CC}', 0, 0),
('NK', '银行内扣', 1, '{CC}', 0, 0),
('BP', '本票', 1, '{CC}', 0, 0),
('HP', '汇票', 1, '{CC}', 0, 0),
('CE', '定舱差额', 1, '{CC}', 0, 0),
('RLC', '入立成', 1, '{CC}', 0, 0),
('QL', '帐务清理', 1, '{CC}', 0, 0);


--
-- 导出表中的数据 `G_SHIPPING_LINE`
--

INSERT INTO `G_SHIPPING_LINE` (`SHLI_CODE`, `SHLI_NAME`, `SHLI_NAME_EN`, `SHLI_BULK_FLAG`, `SHLI_CONT_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('CNKOR', '中国-南韩', 'CN-KOREA', 1, 1, 1, '{CC}', 0, 0),
('CNRUS', '中国一俄罗斯远东', 'CN-RUSSIA', 1, 1, 1, '{CC}', 0, 0),
('CNSEA', '中国一东南亚', 'CN-SOUTHEAST ASIA', 1, 1, 1, '{CC}', 0, 0),
('CNRSP', '中国-红海', 'CN-RED SEA PORT', 1, 1, 1, '{CC}', 0, 0),
('CNPSG', '中国一波斯湾', 'CN-PERSIAN GULF', 1, 1, 1, '{CC}', 0, 0),
('CNAFR', '中国一非洲', 'CN-AFRICA', 1, 1, 1, '{CC}', 0, 0),
('CNMED', '中国一地中海', 'CN-MEDITERRANEAN', 1, 1, 1, '{CC}', 0, 0),
('CNEUR', '中国一欧洲', 'CN-EUROPE', 1, 1, 1, '{CC}', 0, 0),
('CNAUS', '中国一澳新', 'CN-AUSTRALIA,NEW ZEALAND', 1, 1, 1, '{CC}', 0, 0),
('CNUSA', '中国一美国', 'CN-USA', 1, 1, 1, '{CC}', 0, 0),
('CNCAN', '中国一加拿大', 'CN-CANADA', 1, 1, 1, '{CC}', 0, 0),
('CNSAM', '中国一南美洲', 'CN-SOUTH AMERCIA', 1, 1, 1, '{CC}', 0, 0),
('CNCCM', '中国一中美洲,加勒比海', 'CN-CENTRAL AMERICA,CARIBBEAN,MEX', 1, 1, 1, '{CC}', 0, 0),
('CNJAP', '中国-日本', 'CN-JAPAN', 1, 1, 1, '{CC}', 0, 0),
('CNIND', '中国-印巴', 'CN-INDIA', 1, 1, 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_TRADE_TERM`
--

INSERT INTO `G_TRADE_TERM` (`TRTE_CODE`, `TRTE_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', 'CIF', 1, '{CC}', 0, 0),
('2', 'C&F', 1, '{CC}', 0, 0),
('3', 'FOB', 1, '{CC}', 0, 0),
('4', 'C&I ', 1, '{CC}', 0, 0),
('5', '市场价', 1, '{CC}', 0, 0),
('6', '垫仓', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_TRADE_TYPE`
--

INSERT INTO `G_TRADE_TYPE` (`TRTY_CODE`, `TRTY_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('0110', '一般贸易', 1, '{CC}', 0, 0),
('0130', '易货贸易', 1, '{CC}', 0, 0),
('0139', '旅游购物商品', 1, '{CC}', 0, 0),
('0200', '料件放弃', 1, '{CC}', 0, 0),
('0214', '来料加工', 1, '{CC}', 0, 0),
('0245', '来料料件内销', 1, '{CC}', 0, 0),
('0255', '来料深加工', 1, '{CC}', 0, 0),
('0258', '来料余料结转', 1, '{CC}', 0, 0),
('0265', '来料料件复出', 1, '{CC}', 0, 0),
('0300', '来料料件退换', 1, '{CC}', 0, 0),
('0314', '加工专用油', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_TRANS_TERM`
--

INSERT INTO `G_TRANS_TERM` (`TRAN_CODE`, `TRAN_NAME`, `TRAN_BULK_FLAG`, `TRAN_CONT_FLAG`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('CY-CY', '场到场', 1, 1, 1, '{CC}', 0, 0),
('CY-CFS', '场到站', 1, 1, 1, '{CC}', 0, 0),
('CY-Door', '场到门', 1, 1, 1, '{CC}', 0, 0),
('Door-Door', '门到门', 1, 1, 1, '{CC}', 0, 0),
('Door-CY', '门到场', 1, 1, 1, '{CC}', 0, 0),
('Door-CFS', '门到站', 1, 1, 1, '{CC}', 0, 0),
('CFS-Door', '站到门', 1, 1, 1, '{CC}', 0, 0),
('CFS-CY', '站到场', 1, 1, 1, '{CC}', 0, 0),
('CFS-CFS', '站到站', 1, 1, 1, '{CC}', 0, 0),
('FILO', '舱底', 1, 1, 1, '{CC}', 0, 0),
('FIO', 'FIO', 1, 1, 1, '{CC}', 0, 0),
('FLT', '班轮', 1, 1, 1, '{CC}', 0, 0),
('HOOK TO HOOK', 'HTH', 1, NULL, 1, '{CC}', 0, 0),
('FREE IN UNDER HOOK', 'FIUH', 1, NULL, 1, '{CC}', 1, 0),
('HOOK IN LINE OUT', 'HILO', 1, NULL, 1, '{CC}', 0, 0),
('FILO&FIO', 'FILO&FIO', 1, NULL, 1, '{CC}', 0, 0),
('LINER IN LINER OUT', 'LINER IN LINER OUT', 1, NULL, 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_TRANS_TYPE`
--

INSERT INTO `G_TRANS_TYPE` (`TRAT_CODE`, `TRAT_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('1', '监管仓库', 1, '{CC}', 0, 0),
('2', '江海运输', 1, '{CC}', 0, 0),
('3', '铁路运输', 1, '{CC}', 0, 0),
('0', '非保税区', 1, '{CC}', 0, 0),
('4', '汽车运输', 1, '{CC}', 0, 0),
('5', '航空运输', 1, '{CC}', 0, 0),
('6', '邮件运输', 1, '{CC}', 0, 0),
('7', '保税区', 1, '{CC}', 0, 0),
('8', '保税仓库', 1, '{CC}', 0, 0),
('9', '其它运输', 1, '{CC}', 0, 0),
('A', '全部运输', 1, '{CC}', 0, 0),
('W', '物流中心', 1, '{CC}', 0, 0),
('X', '物流园区', 1, '{CC}', 0, 0),
('Y', '保税港区', 1, '{CC}', 0, 0),
('Z', '出口加工', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_UNIT`
--

INSERT INTO `G_UNIT` (`UNIT_CODE`, `UNIT_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('FT', '计费吨', 1, '{CC}', 0, 0),
('40E', '40空箱', 1, '{CC}', 0, 1),
('40F', '40重箱', 1, '{CC}', 0, 1),
('HR', '小时', 1, '{CC}', 0, 1),
('T', '吨', 0, '{CC}', 0, 1),
('KGS', '千克', 1, '{CC}', 0, 0),
('CBM', '立方米', 1, '{CC}', 0, 0),
('LT', '公升', 1, '{CC}', 0, 1),
('KM', '公里', 0, '{CC}', 0, 1),
('20E', '20空箱', 1, '{CC}', 0, 1),
('20F', '20重箱', 1, '{CC}', 0, 1),
('EACH', '票', 1, '{CC}', 0, 0),
('CONT', '箱', 1, '{CC}', 0, 0),
('DAY', '天', 1, '{CC}', 0, 1),
('P', '人', 1, '{CC}', 0, 1),
('C', '摄氏', 1, '{CC}', 0, 1),
('F', '华氏', 1, '{CC}', 0, 1),
('BBBB', 'AAA', 1, '{CC}', 0, 1),
('HP', '马力', 1, '{CC}', 0, 1),
('KW', '千瓦', 1, '{CC}', 0, 1),
('TIME', '次', 1, '{CC}', 0, 1),
('MIN', '分钟', 1, '{CC}', 0, 1),
('40CTN', '大箱型', 1, '{CC}', 0, 1),
('M', '米', 1, '{CC}', 0, 1),
('20CTN', '小箱型', 1, '{CC}', 0, 1),
('TEU', 'TEU', 1, '{CC}', 0, 1),
('大箱', '大箱', 1, '{CC}', 0, 1),
('UNIT     ', '个   ', 1, '{CC}', 0, 1),
('小箱', '小箱', 1, '{CC}', 0, 1),
('kg', '公斤', 1, '{CC}', 0, 1),
('kgs', '公斤', 1, '{CC}', 0, 1),
('CM', '厘米', 1, '{CC}', 0, 1),
('TON', '吨', 1, '{CC}', 0, 0),
('20GP', '标准柜', 1, '{CC}', 0, 1),
('40GP', '大柜', 1, '{CC}', 0, 1),
('BUNDLES', '捆', 1, '{CC}', 0, 0),
('PIECES', '支', 1, '{CC}', 0, 0),
('W/CASE', '木箱', 1, '{CC}', 0, 0),
('MTS', 'MTS', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `G_USAGE`
--

INSERT INTO `G_USAGE` (`USAG_CODE`, `USAG_NAME`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('WMNX', '外贸自营内销', 1, '{CC}', 0, 0),
('TQNX', '特区内销', 1, '{CC}', 0, 0),
('QTNX', '其他内销', 1, '{CC}', 0, 0),
('QYZY', '企业自用', 1, '{CC}', 0, 0),
('JGFX', '加工返销', 1, '{CC}', 0, 0),
('JY', '借用', 1, '{CC}', 0, 0),
('BZJ', '收保证金', 1, '{CC}', 0, 0),
('FREE', '免费提供', 1, '{CC}', 0, 0),
('ZJTG', '作价提供', 1, '{CC}', 0, 0),
('HYGG', '货样广告品', 1, '{CC}', 0, 0),
('QT', '其他', 1, '{CC}', 0, 0),
('YCDJ', '以产顶进', 1, '{CC}', 0, 0);

--
-- 导出表中的数据 `P_SERIAL_RULE`
--

INSERT INTO `P_SERIAL_RULE` (`seru_code`, `seru_name`, `comp_code`, `seru_rule`, `seru_sn_length`, `seru_uniq_suffix`, `seru_loop_period`) VALUES
('consign_no', '委托编号', '{CC}', '<COMP><CONS_TYPE><YY><SN>', 6, '<COMP><CONS_TYPE><YY>', 3),
('invoice_no', '发票编号', '{CC}', '<COMP><YY>I<SN>', 6, '<YY>', 3),
('pr_no', '托收单/付款申请编号', '{CC}', '<RP><CUR><YY>P<SN>', 6, '<YY>', 3),
('voucher_no', '收款单', '{CC}', '<COMP><YY>V<SN>', 6, '<YY>', 3),
('bill_no', '账单', '{CC}', '<COMP><YY>B<SN>', 6, '<YY>', 3),
('tran_no', '陆运联系单号', '{CC}', '<COMP><YY>DY<SN>', 6, '<YY>', 3),
('ware_no', '仓储单号', '{CC}', '<COMP><YY>W<SN>', 6, '<COMP><YY>', 3);

--
-- 导出表中的数据 `P_TEMPLATE`
--

INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('基础数据-国家', 'B', 'xls', 13, 'COUN', NULL, NULL, '国家数据导出模板', 1, NULL, NULL, NULL, NULL, '{CC}', 0, 0),
('基础数据-港口', 'B', 'xls', 14, 'PORT', NULL, NULL, '港口数据导出模板', 1, NULL, NULL, NULL, NULL, '{CC}', 1, 0),
('委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '委托列表导出模板', 1, NULL, NULL, NULL, NULL, '{CC}', 0, 0),
('订舱委托书', 'B', 'xls', 26, 'CONS_B', '订舱委托书', NULL, '订舱委托书模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('订舱确认书', 'B', 'xls', 19, 'BOOK_C', '订舱确认书', NULL, '订舱确认书模板', 1, 1, '2008-09-01 00:00:00', 1, '2008-09-01 00:00:00', '{CC}', 0, 0),
('提单模板', 'B', 'xls', 1, 'BL', '提单模板', NULL, '提单模板', 1, 1, '2008-10-07 00:00:00', 81, '2009-01-17 21:57:11', '{CC}', 3, 0),
('HBL提单', 'B', 'xls', 1, 'BL', '提单模板', NULL, 'HBL提单', 1, 1, '2008-08-21 00:00:00', 3, '2008-10-27 00:00:00', '{CC}', 1, 0),
('电放保函', 'B', 'xls', 22, 'BLER', '电放保函', NULL, '电放保函模板', 1, 1, '2008-09-09 00:00:00', 81, '2009-01-17 21:55:26', '{CC}', 2, 0),
('SEAWAYBILL保函', 'B', 'xls', 23, 'SEAW', 'SEAWAYBILL保函', NULL, 'SEAWAYBILL保函模板', 1, 1, '2008-09-10 00:00:00', 1, '2008-09-10 00:00:00', '{CC}', 0, 0),
('报关单模板', 'B', 'xls', 5, 'INSP', '报检单模板', NULL, NULL, 1, 1, '2008-10-14 00:00:00', 1, '2008-10-20 00:00:00', '{CC}', 1, 1),
('出口报关单模板', 'B', 'xls', 4, 'CUDE', '报关单模板', NULL, '出口报关单模板', 1, 1, '2008-08-24 00:00:00', 1, '2008-08-24 00:00:00', '{CC}', 0, 0),
('出口散货报关单', 'B', 'xls', 4, 'CUDE', '报关单模板', NULL, '出口散货报关单', 1, 3, '2009-02-17 12:27:37', 3, '2009-02-17 12:27:37', '{CC}', 0, 0),
('出口报检单模板', 'B', 'xls', 5, 'INSP', '报检单模板', NULL, '出口报检单套打模板', 1, 1, '2008-08-23 00:00:00', 1, '2008-08-23 00:00:00', '{CC}', 0, 0),
('出入境检验检疫更改申请单', 'B', 'doc', 5, 'INSP', '报检单模板', NULL, '商检更改单', 1, 11, '2008-11-07 00:00:00', 11, '2008-11-07 11:38:27', '{CC}', 1, 0),
('商业发票', 'B', 'xls', 49, 'CUDE_INVOICE', '商业发票模板', NULL, '商业发票', 1, 11, '2008-11-07 00:00:00', 11, '2008-11-07 11:38:27', '{CC}', 1, 0),
('PackingList', 'B', 'xls', 50, 'CUDE_PACKING', 'PACKING LIST', NULL, 'PACKING LIST', 1, 11, '2008-11-07 00:00:00', 11, '2008-11-07 11:38:27', '{CC}', 1, 0),
('装箱单', 'B', 'xls', 8, 'CONT', '装箱单模板', NULL, '装箱单模板', 1, 1, '2008-08-25 00:00:00', 1, '2008-08-25 00:00:00', '{CC}', 0, 0),
('十联单模板', 'B', 'xls', 7, 'CONS', '十联单模板', NULL, '十联单套打模板', 1, 1, '2008-08-26 00:00:00', 1, '2008-08-26 00:00:00', '{CC}', 0, 0),
('门到门装箱通知', 'B', 'xls', 18, 'WARE_INFO', '进仓通知单', NULL, '门到门装箱通知', 1, 1, '2008-08-27 00:00:00', 3, '2008-10-29 10:56:54', '{CC}', 1, 0),
('进仓通知单', 'B', 'xls', 18, 'WARE_INFO', '进仓通知单', NULL, '进仓通知单', 1, 3, '2008-10-29 11:01:36', 3, '2008-10-29 11:01:36', '{CC}', 0, 0),
('代运联系单', 'B', 'xls', 20, 'TRAN', '代运联系单', NULL, '代运联系单模板', 1, 1, '2008-09-02 00:00:00', 1, '2008-09-02 00:00:00', '{CC}', 0, 0),
('仓储联系单', 'B', 'xls', 21, 'WARE', '仓储联系单', NULL, '仓储联系单模板', 1, 1, '2008-09-02 00:00:00', 1, '2008-09-02 00:00:00', '{CC}', 0, 0),
('进口分拨申请', 'B', 'xls', 24, 'SPLI', '进口分拨申请', NULL, '进口分拨申请模板', 1, 1, '2008-09-11 00:00:00', 1, '2008-09-11 00:00:00', '{CC}', 0, 0),
('进口提货单', 'B', 'xls', 25, 'DO', '进口提货单', NULL, '进口提货单标准模板', 1, 1, '2008-09-12 00:00:00', 1, '2008-09-12 00:00:00', '{CC}', 0, 0),
('进口到货通知', 'B', 'xls', 27, 'ARAD', '进口到货通知', NULL, '进口到货通知', 1, 3, '2008-10-29 11:24:45', 3, '2008-10-29 11:24:45', '{CC}', 0, 0),
('进口报关单模板', 'B', 'xls', 4, 'CUDE', '报关单模板', NULL, '进口报关单模板', 1, 1, '2008-08-24 00:00:00', 1, '2008-08-24 00:00:00', '{CC}', 0, 0),
('单证输出模板', 'B', 'xls', 30, 'FDOC_LIST', '单证清单输出模板', NULL, '单证输出模板', 1, 3, '2008-11-27 10:51:37', 3, '2008-11-27 10:51:37', '{CC}', 0, 0),
('散货出口托运单', 'B', 'xls', 26, 'CONS_B', '订舱委托书', NULL, '散货出口托运单', 1, 3, '2009-02-13 00:00:00', 3, '2009-02-13 10:41:33', '{CC}', 1, 0),
('单票审核', 'B', 'xls', 16, 'CONS_AUDIT', '单票审核', NULL, '单票审核导出模板', 1, NULL, NULL, NULL, NULL, '{CC}', 1, 1),
('发票模板', 'B', 'xls', 9, 'INVO', '发票模板', NULL, '发票套打模板', 1, NULL, NULL, NULL, NULL, '{CC}', 0, 0),
('费用确认单', 'B', 'xls', 34, 'EXPE_CONFIRM', '费用确认单', NULL, '费用确认单', 1, 3, '2009-02-16 14:05:57', 3, '2009-02-16 14:05:57', '{CC}', 0, 0),
('对账单', 'B', 'xls', 17, 'BILL', '对账单', NULL, '对账单输出模板', 1, NULL, NULL, NULL, NULL, '{CC}', 0, 0),
('运价表', 'B', 'xls', 32, 'PRSH_LIST', '运价表', NULL, '运价表', 1, 3, '2009-02-19 15:05:02', 3, '2009-02-19 15:05:02', '{CC}', 0, 0),
('发货清单导入模板', 'B', 'xls', 35, 'PALI_IMPORT', '发货清单导入模板', NULL, '发货清单批量导入', 1, 2, '2009-02-24 20:35:22', 2, '2009-02-24 20:35:22', '{CC}', 0, 0),
('账单清单模板', 'B', 'xls', 36, 'INVO_LIST', '账单清单', NULL, '账单清单模板', 1, 3, '2009-03-22 20:50:02', 3, '2009-03-22 20:50:02', '{CC}', 0, 0),
('核销明细', 'B', 'xls', 31, 'VOUC_LIST', '核销明细', NULL, '核销明细', 1, 3, '2008-11-28 13:57:20', 3, '2008-11-28 13:57:20', '{CC}', 0, 0),
('DebitNote模板', 'B', 'xls', 9, 'INVO', '发票模板', NULL, 'DebitNote模板', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0),
('进口付汇联退单申请', 'B', 'xls', 48, 'CUSTOMS_DOC_STAT', '退单申请表', NULL, '进口付汇联退单申请', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0),
('出口收汇联&退税联退单申请', 'B', 'xls', 48, 'CUSTOMS_DOC_STAT', '退单申请表', NULL, '出口收汇联&退税联退单申请', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0),
('加工贸易催核表', 'B', 'xls', 47, 'TRADE_STAT', '退单申请表', NULL, '加工贸易催核表', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0),
('减免税统计表', 'B', 'xls', 46, 'RELIEF_TAX_STAT', '减免税统计表', NULL, '减免税统计表', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0)
;

--
-- 导出表中的数据 `S_EX_RATE`
--

INSERT INTO `S_EX_RATE` (`EXRA_BASE_CURRENCY`, `EXRA_EX_CURRENCY`, `EXRA_START_DATE`, `EXRA_END_DATE`, `EXRA_RATE`, `ACTIVE`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('USD', 'CNY', '2009-02-09', NULL, '6.8340', 1, 2, '2009-02-09 15:14:46', '{CC}', 0, 0),
('CNY', 'USD', '2009-02-09', NULL, '0.1463', 1, 2, '2009-02-09 15:14:46', '{CC}', 0, 0);

--
-- 导出表中的数据 `G_PORT`
--

INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('ALSAR', 'SARANDE', '萨兰达', 0, 1, 'AL', 0, 0, '{CC}'),
('ALSGN', 'SHENGJIN', '圣吉尼', 0, 1, 'AL', 0, 0, '{CC}'),
('ALVLO', 'VALONA', '发罗拉', 0, 1, 'AL', 0, 0, '{CC}'),
('ALDRS', 'DURRES', '都拉斯', 0, 1, 'AL', 0, 0, '{CC}'),
('TIRA', 'TIRANA', '', 0, 1, 'AL', 0, 0, '{CC}'),
('DZANN', 'ANNABA', '安纳巴', 0, 1, 'AL', 0, 0, '{CC}'),
('DZARZ', 'ARZEW', '阿尔泽', 0, 1, 'AL', 0, 0, '{CC}'),
('DZBEN', 'BENISAF', '贝尼萨夫', 0, 1, 'AL', 0, 0, '{CC}'),
('DZBJA', 'BEJAIA', '贝贾亚', 0, 1, 'AL', 0, 0, '{CC}'),
('DZCHE', 'CHERCHELL', '舍尔沙勒', 0, 1, 'AL', 0, 0, '{CC}'),
('DZCOL', 'COLLO', '科洛', 0, 1, 'AL', 0, 0, '{CC}'),
('DZDLS', 'DELLYS', '代利斯', 0, 1, 'AL', 0, 0, '{CC}'),
('DZELD', 'ALGIERS', '阿尔及尔', 0, 1, 'AL', 0, 0, '{CC}'),
('DZSKI', 'SKIKDA', '斯基克达', 0, 1, 'AL', 0, 0, '{CC}'),
('DZTEN', 'TENES', '提奈斯', 0, 1, 'AL', 0, 0, '{CC}'),
('DZWAH', 'ORAN', '瓦赫兰', 0, 1, 'AL', 0, 0, '{CC}'),
('ALDJI', 'DJIDJELLI', '吉杰利', 0, 1, 'AL', 0, 0, '{CC}'),
('ALGER', 'ALGER', '阿尔及尔', 0, 1, 'AL', 0, 0, '{CC}'),
('USPEN', 'PENSACOLA', '彭萨科拉', 0, 1, 'US', 0, 0, '{CC}'),
('USPET', 'PETERSBURG', '彼得斯堡', 0, 1, 'US', 0, 0, '{CC}'),
('USPEV', 'PORT EVERGLADES', '埃弗格雷斯港', 0, 1, 'US', 0, 0, '{CC}'),
('USPHI', 'PHILADELPHIA', '费城', 0, 1, 'US', 0, 0, '{CC}'),
('USPHU', 'PORT HUENEME', '怀尼米港', 0, 1, 'US', 0, 0, '{CC}'),
('USPIS', 'PORT ISABEL(US)', '伊萨贝尔港', 0, 1, 'US', 0, 0, '{CC}'),
('USPLB', 'PALM BEACH', '棕榈滩', 0, 1, 'US', 0, 0, '{CC}'),
('USPLD', 'PORTLAND(US)', '波特兰', 0, 1, 'US', 0, 0, '{CC}'),
('USPLY', 'PLYMOUTH(US)', '普列茅斯', 0, 1, 'US', 0, 0, '{CC}'),
('USPRE', 'PROVIDENCE', '普罗维登斯', 0, 1, 'US', 0, 0, '{CC}'),
('USPRO', 'PORT ROYAL(US)', '罗亚尔港', 0, 1, 'US', 0, 0, '{CC}'),
('USPSH', 'PORTSMOUTH(US)', '朴次茅斯', 0, 1, 'US', 0, 0, '{CC}'),
('USPSJ', 'PORT ST. JOE', '圣乔港', 0, 1, 'US', 0, 0, '{CC}'),
('USPSL', 'PORT SAN LUIS', '圣路易斯港', 0, 1, 'US', 0, 0, '{CC}'),
('USPSU', 'PORT SULPHUR', '萨尔弗港', 0, 1, 'US', 0, 0, '{CC}'),
('USPTO', 'PORT TOWNSEND', '汤森港', 0, 1, 'US', 0, 0, '{CC}'),
('USSAV', 'SAVANNAH(GA.)', '萨凡纳', 0, 1, 'US', 0, 0, '{CC}'),
('USSBA', 'SANTA BARBARA(US)', '圣巴巴拉', 0, 1, 'US', 0, 0, '{CC}'),
('USSDI', 'SAN DIEGO', '圣迭戈', 0, 1, 'US', 0, 0, '{CC}'),
('USSEA', 'SEATTLE,WA', '西雅图', 0, 1, 'US', 0, 0, '{CC}'),
('USSEW', 'SEWARD', '苏厄德', 0, 1, 'US', 0, 0, '{CC}'),
('USROC', 'ROCHESTER(US)', '罗切斯特', 0, 1, 'US', 0, 0, '{CC}'),
('USSAB', 'SABIN', '萨宾', 0, 1, 'US', 0, 0, '{CC}'),
('USSAC', 'SACRAMENTO', '萨克拉门托', 0, 1, 'US', 0, 0, '{CC}'),
('USSFO', 'SAN FRANCISCO', '旧金山', 0, 1, 'US', 0, 0, '{CC}'),
('USSPE', 'SAN PEDRO(U.S.A', '圣佩德罗', 0, 1, 'US', 0, 0, '{CC}'),
('USSPG', 'ST. PETERSBURG', '圣彼得斯堡', 0, 1, 'US', 0, 0, '{CC}'),
('USSPT', 'SEARSPORT', '锡斯波特', 0, 1, 'US', 0, 0, '{CC}'),
('USSTO', 'STOCKTO(US)', '斯托克顿', 0, 1, 'US', 0, 0, '{CC}'),
('USSWH', 'SANDWICH(US)', '桑德威奇', 0, 1, 'US', 0, 0, '{CC}'),
('USTAC', 'TACOMA,WA', '塔科马', 0, 1, 'US', 0, 0, '{CC}'),
('USTAM', 'TAMPA', '坦帕', 0, 1, 'US', 0, 0, '{CC}'),
('USTXC', 'TEXAS CITY', '得克萨斯城', 0, 1, 'US', 0, 0, '{CC}'),
('USVAL', 'VALDEZ', '瓦尔迪兹', 0, 1, 'US', 0, 0, '{CC}'),
('USVAN', 'VANCOUVER(US)', '温哥华', 0, 1, 'US', 0, 0, '{CC}'),
('USWAS', 'WASHINGTON(US)', '华盛顿', 0, 1, 'US', 0, 0, '{CC}'),
('USWIL', 'WILMINGTON(N.C)', '威尔明顿(北卡罗来)', 0, 1, 'US', 0, 0, '{CC}'),
('USWMN', 'WILMINGTON(DEL.', '威尔明顿(特拉华州)', 0, 1, 'US', 0, 0, '{CC}'),
('USWRA', 'WRANGELL', '兰格尔', 0, 1, 'US', 0, 0, '{CC}'),
('USFLR', 'FALL RIVER', '福尔里弗', 0, 1, 'US', 0, 0, '{CC}'),
('USFNA', 'FERNANDINA', '费南迪纳', 0, 1, 'US', 0, 0, '{CC}'),
('USFRE', 'FREEPORT(US)', '弗里波特', 0, 1, 'US', 0, 0, '{CC}'),
('USGAL', 'GALVESTON', '加尔维斯顿', 0, 1, 'US', 0, 0, '{CC}'),
('USGDH', 'GOOD HOPE(US)', '好望角', 0, 1, 'US', 0, 0, '{CC}'),
('USGEO', 'GEORGETOWN(US)', '乔治敦', 0, 1, 'US', 0, 0, '{CC}'),
('USGHN', 'GRAND HAVEN', '格兰德黑文', 0, 1, 'US', 0, 0, '{CC}'),
('USGRH', 'GRAYS HARBOUR', '格雷斯港', 0, 1, 'US', 0, 0, '{CC}'),
('USGUL', 'GULFPORT', '格尔夫波特', 0, 1, 'US', 0, 0, '{CC}'),
('USHMR', 'HOMER', '荷马', 0, 1, 'US', 0, 0, '{CC}'),
('USGLO', 'GLOUCESTER(MASS', '格洛斯特', 0, 1, 'US', 0, 0, '{CC}'),
('USGRB', 'GREEN BAY', '格林贝', 0, 1, 'US', 0, 0, '{CC}'),
('USHOP', 'HOPEWELL', '霍普韦尔', 0, 1, 'US', 0, 0, '{CC}'),
('USHOU', 'HOUSTON', '休斯敦', 0, 1, 'US', 0, 0, '{CC}'),
('USJAC', 'JACKSONVILLE', '杰克逊维尔', 0, 1, 'US', 0, 0, '{CC}'),
('USJUN', 'JUNEAU', '朱诺', 0, 1, 'US', 0, 0, '{CC}'),
('USKEN', 'KENOSHA', '基诺沙', 0, 1, 'US', 0, 0, '{CC}'),
('USKET', 'KETCHIKAN', '凯奇坎', 0, 1, 'US', 0, 0, '{CC}'),
('USLCS', 'LAKE CHARLES', '莱克查尔斯', 0, 1, 'US', 0, 0, '{CC}'),
('USLGB', 'LONG BEACH', '长滩', 0, 1, 'US', 0, 0, '{CC}'),
('USLON', 'LONGVIEW', '隆维尤', 0, 1, 'US', 0, 0, '{CC}'),
('USLOR', 'LORAIN', '洛雷恩', 0, 1, 'US', 0, 0, '{CC}'),
('USLSA', 'LOS ANGELES,CA', '洛杉矶', 0, 1, 'US', 0, 0, '{CC}'),
('USMAN', 'MANITOWOC', '马尼托沃克', 0, 1, 'US', 0, 0, '{CC}'),
('USMIA', 'MIAMI', '迈阿密', 0, 1, 'US', 0, 0, '{CC}'),
('USMOB', 'MOBILE', '莫比尔', 0, 1, 'US', 0, 0, '{CC}'),
('USMON', 'MONROE', '门罗', 0, 1, 'US', 0, 0, '{CC}'),
('USNET', 'NEWPORT(US)', '纽波特', 0, 1, 'US', 0, 0, '{CC}'),
('USNEW', 'NEW CASTLE(US)', '纽卡斯尔', 0, 1, 'US', 0, 0, '{CC}'),
('USNFK', 'NORFOLK(US)', '诺福克', 0, 1, 'US', 0, 0, '{CC}'),
('USNBE', 'NEW BEDFORD', '新贝德福德', 0, 1, 'US', 0, 0, '{CC}'),
('USNDN', 'NEW LONDON(CONN', '新伦敦', 0, 1, 'US', 0, 0, '{CC}'),
('USNHA', 'NEW HAVEN(US)', '纽黑文', 0, 1, 'US', 0, 0, '{CC}'),
('USNOL', 'NEW ORLEANS', '新奥尔良', 0, 1, 'US', 0, 0, '{CC}'),
('USNOM', 'NOME', '诺姆', 0, 1, 'US', 0, 0, '{CC}'),
('USNYK', 'NEW YORK,NY', '纽约', 0, 1, 'US', 0, 0, '{CC}'),
('USOAK', 'OAKLAND,CA', '奥克兰', 0, 1, 'US', 0, 0, '{CC}'),
('USORA', 'ORANGE', '奥兰治', 0, 1, 'US', 0, 0, '{CC}'),
('USPAN', 'PORT ANGELES', '安吉利斯港', 0, 1, 'US', 0, 0, '{CC}'),
('USPAR', 'PORT ARTHUR(US)', '阿瑟港', 0, 1, 'US', 0, 0, '{CC}'),
('USPAS', 'PASCAGOULA', '帕斯卡古拉', 0, 1, 'US', 0, 0, '{CC}'),
('ARCCO', 'CALETA CORDOVA', '科尔多瓦', 0, 1, 'US', 0, 0, '{CC}'),
('PHOEN', 'PHOENIX AZ SDD', '', 0, 1, 'US', 0, 0, '{CC}'),
('UMHON', 'HONOLULU', '火奴鲁鲁', 0, 1, 'US', 0, 0, '{CC}'),
('USALP', 'ALPENA', '阿尔皮纳', 0, 1, 'US', 0, 0, '{CC}'),
('USANA', 'ANACORTES', '阿纳科特斯', 0, 1, 'US', 0, 0, '{CC}'),
('USANC', 'ANCHORAGE', '安科雷奇', 0, 1, 'US', 0, 0, '{CC}'),
('USANN', 'ANNAPOLIS(US)', '安纳波利斯', 0, 1, 'US', 0, 0, '{CC}'),
('USAPA', 'APALACHICOLA', '阿巴拉契科拉', 0, 1, 'US', 0, 0, '{CC}'),
('USABE', 'ABERDEEN(US)', '阿伯丁', 0, 1, 'US', 0, 0, '{CC}'),
('USALB', 'ALBANY(US)', '奥尔巴尼', 0, 1, 'US', 0, 0, '{CC}'),
('USALE', 'ALEXANDRIA(US)', '亚历山德里亚', 0, 1, 'US', 0, 0, '{CC}'),
('USASD', 'ASHLAND', '阿什兰', 0, 1, 'US', 0, 0, '{CC}'),
('USASH', 'ASHTABULA', '阿什塔比拉', 0, 1, 'US', 0, 0, '{CC}'),
('USAST', 'ASTORIA', '阿斯托里亚', 0, 1, 'US', 0, 0, '{CC}'),
('USATO', 'ANTIOCH', '安蒂奥克', 0, 1, 'US', 0, 0, '{CC}'),
('USATR', 'ATRECO', '阿特雷科', 0, 1, 'US', 0, 0, '{CC}'),
('USBAL', 'BALTIMORE(US)', '巴尔的摩', 0, 1, 'US', 0, 0, '{CC}'),
('USBAN', 'BANGOR(ME.)', '班戈', 0, 1, 'US', 0, 0, '{CC}'),
('USBAT', 'BATH', '巴斯', 0, 1, 'US', 0, 0, '{CC}'),
('USBAY', 'BAY ROBERTS', '贝敦', 0, 1, 'US', 0, 0, '{CC}'),
('USBCN', 'BUCHANAN(US)', '布坎南', 0, 1, 'US', 0, 0, '{CC}'),
('USBEA', 'BEAUMONT', '博蒙特', 0, 1, 'US', 0, 0, '{CC}'),
('USBEL', 'BELLINGHAM', '贝灵哈姆', 0, 1, 'US', 0, 0, '{CC}'),
('USBER', 'BERKELEY', '伯克利', 0, 1, 'US', 0, 0, '{CC}'),
('USBOS', 'BOSTON(US)', '波士顿', 0, 1, 'US', 0, 0, '{CC}'),
('USBOY', 'BROOKLYN', '布鲁克林', 0, 1, 'US', 0, 0, '{CC}'),
('USBRE', 'BREMERTON', '布雷默顿', 0, 1, 'US', 0, 0, '{CC}'),
('USBRI', 'BRIDGEPORT', '布里奇波特', 0, 1, 'US', 0, 0, '{CC}'),
('USBRO', 'BROWNSVILLE', '布朗斯维尔', 0, 1, 'US', 0, 0, '{CC}'),
('USBRU', 'BRUNSWICK', '不伦瑞克', 0, 1, 'US', 0, 0, '{CC}'),
('USCAM', 'CAMDEN', '卡姆登', 0, 1, 'US', 0, 0, '{CC}'),
('USCAR', 'CARRABELLE', '卡拉贝尔', 0, 1, 'US', 0, 0, '{CC}'),
('USCGE', 'CAMBRIDGE', '剑桥', 0, 1, 'US', 0, 0, '{CC}'),
('USCHA', 'CHARLESTON', '查尔斯顿', 0, 1, 'US', 0, 0, '{CC}'),
('USCHC', 'CHESAPEAKE CITY', '切萨皮克城', 0, 1, 'US', 0, 0, '{CC}'),
('USCHE', 'CHEBOYGAN', '希博伊甘', 0, 1, 'US', 0, 0, '{CC}'),
('USBTR', 'BATON ROUGE', '巴吞鲁日', 0, 1, 'US', 0, 0, '{CC}'),
('USBUC', 'BUCKSPORT', '巴克斯波特', 0, 1, 'US', 0, 0, '{CC}'),
('USBUF', 'BUFFALO', '布法罗', 0, 1, 'US', 0, 0, '{CC}'),
('USCHI', 'CHICAGO', '芝加哥', 0, 1, 'US', 0, 0, '{CC}'),
('USCHR', 'CHESTER', '切斯特', 0, 1, 'US', 0, 0, '{CC}'),
('USCLE', 'CLEVELAND,OH', '克利夫兰', 0, 1, 'US', 0, 0, '{CC}'),
('USCME', 'CHALMETTE', '沙尔梅特', 0, 1, 'US', 0, 0, '{CC}'),
('USCOC', 'CORPUS CHRISTI', '科珀斯克里斯蒂', 0, 1, 'US', 0, 0, '{CC}'),
('USCOH', 'CONNEAUT HARBOU', '康尼奥特港', 0, 1, 'US', 0, 0, '{CC}'),
('USCOR', 'CORDOVA', '科尔多瓦', 0, 1, 'US', 0, 0, '{CC}'),
('USCRP', 'CHERRY POINT', '切里波因特（樱桃角）', 0, 1, 'US', 0, 0, '{CC}'),
('USCSB', 'COOS BAY', '库斯贝', 0, 1, 'US', 0, 0, '{CC}'),
('USCVT', 'CONVENT', '康文特', 0, 1, 'US', 0, 0, '{CC}'),
('USDUL', 'DULUTH', '德卢斯', 0, 1, 'US', 0, 0, '{CC}'),
('USDVT', 'DAVANT', '达文特', 0, 1, 'US', 0, 0, '{CC}'),
('USERI', 'ERIE', '伊利', 0, 1, 'US', 0, 0, '{CC}'),
('USESO', 'EL SEGUNDO', '埃尔塞贡多', 0, 1, 'US', 0, 0, '{CC}'),
('USEUR', 'EUREKA', '尤里卡', 0, 1, 'US', 0, 0, '{CC}'),
('USEVE', 'EVERETT(WASH.)', '埃弗里特', 0, 1, 'US', 0, 0, '{CC}'),
('USDEB', 'DELAWARE BAY', '德拉华湾', 0, 1, 'US', 0, 0, '{CC}'),
('USDES', 'DESTREHAN', '特斯特汉', 0, 1, 'US', 0, 0, '{CC}'),
('USDET', 'DETROIT', '底特律', 0, 1, 'US', 0, 0, '{CC}'),
('USDON', 'DONALDSONVILLE', '唐纳森维尔', 0, 1, 'US', 0, 0, '{CC}'),
('JMSLM', 'SAVANNA LA MAR', '滨海萨凡纳', 0, 1, 'US', 0, 0, '{CC}'),
('CAMAR', 'CAMARILLO', '', 0, 1, 'US', 0, 0, '{CC}'),
('VERNO', 'VERNON HILLS', '', 0, 1, 'US', 0, 0, '{CC}'),
('CHEL', 'CHELSEA MA (MLB)', '', 0, 1, 'US', 0, 0, '{CC}'),
('GBBER', 'BERWICK', '伯威克', 0, 1, 'US', 0, 0, '{CC}'),
('USDAL', 'DALLAS', '达拉斯', 0, 1, 'US', 0, 0, '{CC}'),
('USAL', 'ALAMEDA', '阿拉米达', 0, 1, 'US', 0, 0, '{CC}'),
('AMAN', 'ANACORTES', '安那柯的斯', 0, 1, 'US', 0, 0, '{CC}'),
('USATL', 'ATLANTA', '亚特兰大', 0, 1, 'US', 0, 0, '{CC}'),
('USALO', 'LAREDO,TX', '拉雷多', 0, 1, 'US', 0, 0, '{CC}'),
('USDEN', 'DENVER,CO', '', 0, 1, 'US', 0, 0, '{CC}'),
('USLOU', 'LOUISVILLE,KY', '', 0, 1, 'US', 0, 0, '{CC}'),
('USSTL', 'ST-LOUIS,MO', '圣陆易斯', 0, 1, 'US', 0, 0, '{CC}'),
('USCIN', 'CINCINNATI,OH', '新新那提', 0, 1, 'US', 0, 0, '{CC}'),
('USKNT', 'KENT,WA', '', 0, 1, 'US', 0, 0, '{CC}'),
('NEWOL', 'NEW ORLEANS,LA', '新奥尔良', 0, 1, 'US', 0, 0, '{CC}'),
('USCPN', 'COMPTON', '', 0, 1, 'US', 0, 0, '{CC}'),
('USCOI', 'CITY OF INDUSTRY', '工业城', 0, 1, 'US', 0, 0, '{CC}'),
('SPRIN', 'SPRINGFIELD', '密苏里洲', 0, 1, 'US', 0, 0, '{CC}'),
('USITN', 'IRVINGTON,NJ', '', 0, 1, 'US', 0, 0, '{CC}'),
('USCOL', 'COLUMBUS,OH', '哥伦布斯', 0, 1, 'US', 0, 0, '{CC}'),
('USKAN', 'KANSAS CITY,MO', '坎萨斯城', 0, 1, 'US', 0, 0, '{CC}'),
('USNAS', 'NASHVILLE,TN', '', 0, 1, 'US', 0, 0, '{CC}'),
('OMAHA', 'OMAHA,NE', '奥马哈', 0, 1, 'US', 0, 0, '{CC}'),
('LAKE', 'SALT LAKE CITY', '盐湖城', 0, 1, 'US', 0, 0, '{CC}'),
('HUNTS', 'HUNTSVILLE(AL)', '阿拉巴马洲', 0, 1, 'US', 0, 0, '{CC}'),
('ST.LO', 'ST.LOUIS(MO)', '密苏里洲', 0, 1, 'US', 0, 0, '{CC}'),
('TUCSO', 'TUCSON(AZ)', '亚利桑那洲', 0, 1, 'US', 0, 0, '{CC}'),
('TUOK', 'TULSA(OK)', '奥克拉马哈洲', 0, 1, 'US', 0, 0, '{CC}'),
('132', 'FORT WORTH', '', 0, 1, 'US', 0, 0, '{CC}'),
('SEA', 'SEATTLE', '西雅图', 0, 1, 'US', 0, 0, '{CC}'),
('USLO', 'LOS ANGELES', '洛杉机', 0, 1, 'US', 0, 0, '{CC}'),
('CALH', 'CALHOUN GA', '', 0, 1, 'US', 0, 0, '{CC}'),
('OXN', 'OXNARD', '奥克兰', 0, 1, 'US', 0, 0, '{CC}'),
('ELIZ', 'ELIZABETH', '伊利沙白港', 0, 1, 'US', 0, 0, '{CC}'),
('EL P', 'EL PASO', '埃尔帕索', 0, 1, 'US', 0, 0, '{CC}'),
('KNOX', 'KNOXVILLE(TN)', '田那西洲', 0, 1, 'US', 0, 0, '{CC}'),
('MINN', 'MINNEAPOLIS(MN)', '缅因洲', 0, 1, 'US', 0, 0, '{CC}'),
('ST.P', 'ST.PAUL(MN)', '缅因洲', 0, 1, 'US', 0, 0, '{CC}'),
('SGA', 'SOUTHGATE', '', 0, 1, 'US', 0, 0, '{CC}'),
('OAAK', 'OAKLAND', '奥克兰', 0, 1, 'US', 0, 0, '{CC}'),
('NPN', 'NEW PORTNEWS', '', 0, 1, 'US', 0, 0, '{CC}'),
('CNEW', 'NEW YORK', '纽约', 0, 1, 'US', 0, 0, '{CC}'),
('AOABZ', 'AMBRIZ', '安布里什', 0, 1, 'AO', 0, 0, '{CC}'),
('AOAMB', 'AMBRIZETE', '安布里泽特', 0, 1, 'AO', 0, 0, '{CC}'),
('AOBEN', 'BENGUELA', '本格拉', 0, 1, 'AO', 0, 0, '{CC}'),
('AOCAB', 'CABINDA', '卡宾达', 0, 1, 'AO', 0, 0, '{CC}'),
('AOLOB', 'LOBITO', '洛比托', 0, 1, 'AO', 0, 0, '{CC}'),
('AOLUA', 'LUANDA', '罗安达', 0, 1, 'AO', 0, 0, '{CC}'),
('AOMOC', 'MOCAMEDES', '木萨米迪什', 0, 1, 'AO', 0, 0, '{CC}'),
('AONRE', 'NOVO REDONDO', '新里东杜', 0, 1, 'AO', 0, 0, '{CC}'),
('ARPDE', 'PUERTO DESEADO', '德塞阿多港', 0, 1, 'AR', 0, 0, '{CC}'),
('ARPMA', 'PUERTO MADRYN', '马德林港', 0, 1, 'AR', 0, 0, '{CC}'),
('ARRGA', 'RIO GALLEGOS', '里奥加耶戈斯', 0, 1, 'AR', 0, 0, '{CC}'),
('ARROS', 'ROSARIO', '罗萨里奥', 0, 1, 'AR', 0, 0, '{CC}'),
('ARSFE', 'SANTA FE', '圣菲', 0, 1, 'AR', 0, 0, '{CC}'),
('ARSLO', 'SAN LORENZO(AR)', '圣洛伦索', 0, 1, 'AR', 0, 0, '{CC}'),
('ARSNS', 'SAN NICOLAS(AR)', '圣尼古拉斯', 0, 1, 'AR', 0, 0, '{CC}'),
('ARSPE', 'SAN PEDRO(AR)', '圣佩德罗', 0, 1, 'AR', 0, 0, '{CC}'),
('ARSSB', 'SAN SEBASTIAN B', '圣塞瓦斯蒂安', 0, 1, 'AR', 0, 0, '{CC}'),
('ARVCO', 'VILLA CONSTITUC', '孔斯蒂图西翁镇', 0, 1, 'AR', 0, 0, '{CC}'),
('ARZAR', 'ZARATE', '萨拉特', 0, 1, 'AR', 0, 0, '{CC}'),
('ACPDR', 'PUERTO DEL ROSAIO', '罗萨里奥港', 0, 1, 'AR', 0, 0, '{CC}'),
('ANSNB', 'SAN NICOLAS BAY', '圣尼古拉斯湾', 0, 1, 'AR', 0, 0, '{CC}'),
('ARBBL', 'BAHIA BLANCA', '布兰卡港', 0, 1, 'AR', 0, 0, '{CC}'),
('ARBNA', 'BUENOS AIRES', '布宜诺斯艾利斯', 0, 1, 'AR', 0, 0, '{CC}'),
('ARCAM', 'CAMPANA', '坎帕纳', 0, 1, 'AR', 0, 0, '{CC}'),
('ARCOR', 'COMODORO RIVADAVIA', '里瓦达维亚', 0, 1, 'AR', 0, 0, '{CC}'),
('ARLPL', 'LA PLATA', '拉普拉塔', 0, 1, 'AR', 0, 0, '{CC}'),
('ARMDP', 'MAR DEL PLATA', '马德普拉塔', 0, 1, 'AR', 0, 0, '{CC}'),
('ARNEC', 'NECOCHEA', '内科切阿', 0, 1, 'AR', 0, 0, '{CC}'),
('ARDES', 'DESEADO', '德塞阿多', 0, 1, 'AR', 0, 0, '{CC}'),
('ARYER', 'YEREVAN', '', 0, 1, 'AR', 0, 0, '{CC}'),
('CHACO', 'CHACO', '', 0, 1, 'AR', 0, 0, '{CC}'),
('VANA', 'VANADZOR', '', 0, 1, 'AM', 0, 0, '{CC}'),
('AUADE', 'ADELAIDE', '阿德莱德', 0, 1, 'AU', 0, 0, '{CC}'),
('AUALB', 'ALBANY(AU)', '奥尔巴尼', 0, 1, 'AU', 0, 0, '{CC}'),
('AUARD', 'ARDROSSAN(AU)', '阿德罗森', 0, 1, 'AU', 0, 0, '{CC}'),
('AUBAI', 'BARROW ISLAND(A', '巴罗岛', 0, 1, 'AU', 0, 0, '{CC}'),
('AUBDG', 'BUNDABERG', '班达伯格', 0, 1, 'AU', 0, 0, '{CC}'),
('AUBLB', 'BELL BAY', '皮尔湾', 0, 1, 'AU', 0, 0, '{CC}'),
('AUBNE', 'BURNIE', '伯尼', 0, 1, 'AU', 0, 0, '{CC}'),
('AUBOW', 'BOWEN', '鲍恩', 0, 1, 'AU', 0, 0, '{CC}'),
('AUBRI', 'BRISBANE', '布里斯班', 0, 1, 'AU', 0, 0, '{CC}'),
('AUBRO', 'BROOME', '布鲁姆', 0, 1, 'AU', 0, 0, '{CC}'),
('AUBTB', 'BOTANY BAY', '博物学家角', 0, 1, 'AU', 0, 0, '{CC}'),
('AUBUN', 'BUNBURY', '班伯里', 0, 1, 'AU', 0, 0, '{CC}'),
('AUBUS', 'BUSSELTON', '巴瑟尔顿', 0, 1, 'AU', 0, 0, '{CC}'),
('AUCA', 'CARNARVON', '卡那封', 0, 1, 'AU', 0, 0, '{CC}'),
('AUDBY', 'COCKATOO', '德比', 0, 1, 'AU', 0, 0, '{CC}'),
('AUDEV', 'DEVONPORT', '德文波特', 0, 1, 'AU', 0, 0, '{CC}'),
('AUDPR', 'DAMPIER', '丹皮尔', 0, 1, 'AU', 0, 0, '{CC}'),
('AUDWN', 'DARWIN', '达尔文', 0, 1, 'AU', 0, 0, '{CC}'),
('AUEDI', 'EDITHBURGH', '伊迪斯堡', 0, 1, 'AU', 0, 0, '{CC}'),
('AUCLT', 'CAPE LAMBERT', '拉姆贝特角', 0, 1, 'AU', 0, 0, '{CC}'),
('AUCNS', 'CAIRNS', '凯恩斯', 0, 1, 'AU', 0, 0, '{CC}'),
('AUCOO', 'COOKTOWN', '库克敦', 0, 1, 'AU', 0, 0, '{CC}'),
('AUCFH', 'COFF''S HARBOUR', '科夫斯港', 0, 1, 'AU', 0, 0, '{CC}'),
('AUEDN', 'EDEN', '伊登', 0, 1, 'AU', 0, 0, '{CC}'),
('AUESP', 'ESPERANCE', '埃斯佩兰斯', 0, 1, 'AU', 0, 0, '{CC}'),
('AUFRE', 'FREMANTLE', '弗里曼特尔', 0, 1, 'AU', 0, 0, '{CC}'),
('AUGEE', 'GEELONG', '吉朗', 0, 1, 'AU', 0, 0, '{CC}'),
('AUGER', 'GERALDTON', '杰拉尔顿', 0, 1, 'AU', 0, 0, '{CC}'),
('AUGET', 'GROOTE EYLANDT', '格鲁特岛', 0, 1, 'AU', 0, 0, '{CC}'),
('AUGLA', 'GLADSTONE(W.A.)', '格拉德斯通', 0, 1, 'AU', 0, 0, '{CC}'),
('AUGLE', 'GLADSTONE(QUE)', '格拉德斯通（东）', 0, 1, 'AU', 0, 0, '{CC}'),
('AUGRA', 'GRAFTON', '格拉夫顿', 0, 1, 'AU', 0, 0, '{CC}'),
('AUHBT', 'HOBART', '霍巴特', 0, 1, 'AU', 0, 0, '{CC}'),
('AUKIN', 'KINGSTON(AU)', '金斯敦', 0, 1, 'AU', 0, 0, '{CC}'),
('AULUC', 'LUCINDA', '卢辛达', 0, 1, 'AU', 0, 0, '{CC}'),
('AUMAR', 'MARYBOROUGH', '马里伯勒', 0, 1, 'AU', 0, 0, '{CC}'),
('AUMEL', 'MELBOURNE', '墨尔本', 0, 1, 'AU', 0, 0, '{CC}'),
('AUNEW', 'NEWCASTLE(N.S.W', '纽卡斯尔', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPAA', 'PORT ALMA', '阿尔马港', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPAD', 'Port Adelaide', '阿德莱德港', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPAL', 'PORT ALFRED(AU)', '艾尔弗雷德港', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPAU', 'PORT AUGUSTA', '奥古斯塔港', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPHE', 'PORT HEDLAND', '黑德兰港', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPLD', 'PORTLAND(AUS)', '波特兰', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPLI', 'PORT LINCOLN', '林肯港', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPMA', 'PORT MACGUARIE', '麦夸里港', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPST', 'PORT STANVAC', '斯坦瓦克港', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPWA', 'PORT WALCOTT', '澳尔科特港', 0, 1, 'AU', 0, 0, '{CC}'),
('AUROC', 'ROCKHAMPTON', '罗克汉普顿', 0, 1, 'AU', 0, 0, '{CC}'),
('AUTHU', 'THURSDAY ISLAND', '星期四岛', 0, 1, 'AU', 0, 0, '{CC}'),
('AUTVD', 'THEVENARD', '泰弗纳德', 0, 1, 'AU', 0, 0, '{CC}'),
('AUWAL', 'WALLAROO', '沃拉鲁', 0, 1, 'AU', 0, 0, '{CC}'),
('AUWDM', 'WYNDHAM', '温德姆', 0, 1, 'AU', 0, 0, '{CC}'),
('AUWHY', 'WHYALLA', '怀阿拉', 0, 1, 'AU', 0, 0, '{CC}'),
('AUURA', 'URANGAN', '尤兰根', 0, 1, 'AU', 0, 0, '{CC}'),
('AUWPA', 'WEIPA', '韦帕', 0, 1, 'AU', 0, 0, '{CC}'),
('AUYSD', 'YAMPI SOUND', '扬皮桑德', 0, 1, 'AU', 0, 0, '{CC}'),
('AEMUI', 'Mubarras lsland', '穆巴腊角', 0, 1, 'AU', 0, 0, '{CC}'),
('AUPER', 'PERTH (AU)', '佩斯', 0, 1, 'AU', 0, 0, '{CC}'),
('AUARG', 'SALZBURG', '萨尔茨堡', 0, 1, 'AU', 0, 0, '{CC}'),
('DAVE', 'DAVENPORT', '', 0, 1, 'AU', 0, 0, '{CC}'),
('SYDE', 'SYDNEY(AU)', '悉尼', 0, 1, 'AU', 0, 0, '{CC}'),
('GRAZ', 'GRAZ', '', 0, 1, 'AU', 0, 0, '{CC}'),
('CANB', 'CANBERRA', '堪培拉', 0, 1, 'AU', 0, 0, '{CC}'),
('ATVIE', 'VIENNA', '维也纳', 0, 1, 'AT', 0, 0, '{CC}'),
('ATSAL', 'SALZBERG', '', 0, 1, 'AT', 0, 0, '{CC}'),
('AIKOR', 'KORLACH', '', 0, 1, 'AT', 0, 0, '{CC}'),
('AIKUF', 'KUFSTEIN', '', 0, 1, 'AT', 0, 0, '{CC}'),
('AILIZ', 'LINZ', '', 0, 1, 'AT', 0, 0, '{CC}'),
('AUFUR', 'FURNITZ', '', 0, 1, 'AT', 0, 0, '{CC}'),
('MESS', 'MESSENDORF', '', 0, 1, 'AT', 0, 0, '{CC}'),
('WEL', 'WELS', '', 0, 1, 'AT', 0, 0, '{CC}'),
('WIEN', 'WIEN-NORDWEST', '', 0, 1, 'AT', 0, 0, '{CC}'),
('WIEF', 'WIEN-FREUDENAU', '', 0, 1, 'AT', 0, 0, '{CC}'),
('VISU', 'VILLACH-SUED', '', 0, 1, 'AT', 0, 0, '{CC}'),
('WOLF', 'WOLFURT', '', 0, 1, 'AT', 0, 0, '{CC}'),
('BABAH', 'BAHRAIN', '巴林', 0, 1, 'BH', 0, 0, '{CC}'),
('BDCNA', 'CHALNA', '查尔钠港', 0, 1, 'BD', 0, 0, '{CC}'),
('BDCTG', 'CHITTAGONG', '吉大港', 0, 1, 'BD', 0, 0, '{CC}'),
('BDKHU', 'KHULNA', '库尔纳', 0, 1, 'BD', 0, 0, '{CC}'),
('BDMON', 'MONGLA', '蒙加拉', 0, 1, 'BD', 0, 0, '{CC}'),
('BADHA', 'DHAKA', '达卡', 0, 1, 'BD', 0, 0, '{CC}'),
('MODCC', 'DACCA', '达卡', 0, 1, 'BD', 0, 0, '{CC}'),
('ICD', 'ICD KAMALAPUR', '', 0, 1, 'BD', 0, 0, '{CC}'),
('BBBTN', 'BRIDGETOWN', '布里奇敦', 0, 1, 'BB', 0, 0, '{CC}'),
('BEANT', 'ANTWERP', '安特卫普', 0, 1, 'BE', 0, 0, '{CC}'),
('BEBRS', 'BRUGES', '布鲁日', 0, 1, 'BE', 0, 0, '{CC}'),
('BEBRU', 'BRUSSELS', '布鲁塞尔', 0, 1, 'BE', 0, 0, '{CC}'),
('BELGE', 'LIEGE', '列日', 0, 1, 'BE', 0, 0, '{CC}'),
('BENIE', 'NIEUWPOORT', '尼乌波特', 0, 1, 'BE', 0, 0, '{CC}'),
('BEOST', 'OSTEND', '奥斯坦德', 0, 1, 'BE', 0, 0, '{CC}'),
('BEZEE', 'ZEEBRUGGE', '泽布吕赫', 0, 1, 'BE', 0, 0, '{CC}'),
('BEGEN', 'GENT', '根特', 0, 1, 'BE', 0, 0, '{CC}'),
('BJCOT', 'COTONOU', '科托努', 0, 1, 'BJ', 0, 0, '{CC}'),
('BJPNO', 'PORTO NOVO(BJ)', '波多诺伏', 0, 1, 'BJ', 0, 0, '{CC}'),
('BMHAM', 'HAMILTON(BM)', '哈密尔顿', 0, 1, 'BM', 0, 0, '{CC}'),
('BMSGE', 'ST. GEORGE''S', '圣乔治', 0, 1, 'BM', 0, 0, '{CC}'),
('GDSGE', 'ST. GEORGE', '圣乔治', 0, 1, 'BM', 0, 0, '{CC}'),
('MXLPZ', 'LA PAZ', '拉巴斯', 0, 1, 'BO', 0, 0, '{CC}'),
('BOGNE', 'GABERONE', '', 0, 1, 'BW', 0, 0, '{CC}'),
('GBE', 'GABORONE', '哈博罗内', 0, 1, 'BW', 0, 0, '{CC}'),
('ARRGR', 'RIO GRANDE(AR)', '里奥格兰德', 0, 1, 'BR', 0, 0, '{CC}'),
('BRAJU', 'ARACAJU', '阿拉卡茹', 0, 1, 'BR', 0, 0, '{CC}'),
('BRATI', 'ARACATI', '阿拉卡蒂', 0, 1, 'BR', 0, 0, '{CC}'),
('BRFLO', 'FLORIANOPOLIS', '弗洛里亚诺波利斯', 0, 1, 'BR', 0, 0, '{CC}'),
('BRFOR', 'FORTALEZA', '福塔莱萨', 0, 1, 'BR', 0, 0, '{CC}'),
('BRIJI', 'ITAJAI', '伊塔雅伊', 0, 1, 'BR', 0, 0, '{CC}'),
('BRBLM', 'BELEM(BR)', '贝伦', 0, 1, 'BR', 0, 0, '{CC}'),
('BRIQI', 'ITAQUI', '伊塔基', 0, 1, 'BR', 0, 0, '{CC}'),
('BRIUS', 'ILHEUS', '伊列乌斯', 0, 1, 'BR', 0, 0, '{CC}'),
('BRNAT', 'NATAL', '纳塔尔', 0, 1, 'BR', 0, 0, '{CC}'),
('BRNIT', 'NITEROI', '尼泰罗伊', 0, 1, 'BR', 0, 0, '{CC}'),
('BRPAL', 'PORTO ALEGRE', '阿雷格里港', 0, 1, 'BR', 0, 0, '{CC}'),
('BRPAR', 'PARANAGUA', '巴拉那瓜', 0, 1, 'BR', 0, 0, '{CC}'),
('BRPBA', 'PARNAIBA', '巴纳伊巴', 0, 1, 'BR', 0, 0, '{CC}'),
('BRMAC', 'MACEIO', '马塞约', 0, 1, 'BR', 0, 0, '{CC}'),
('BRMAN', 'MANAUS', '马瑙斯', 0, 1, 'BR', 0, 0, '{CC}'),
('BRMPA', 'MACAPA', '马卡帕', 0, 1, 'BR', 0, 0, '{CC}'),
('BRJPA', 'JOAO PESSOA', '若昂佩索阿', 0, 1, 'BR', 0, 0, '{CC}'),
('BRPEL', 'PELOTAS', '佩洛塔斯', 0, 1, 'BR', 0, 0, '{CC}'),
('BRRDJ', 'RIO DE JANEIRO', '里约热内卢', 0, 1, 'BR', 0, 0, '{CC}'),
('BRREC', 'RECIFE', '累西腓', 0, 1, 'BR', 0, 0, '{CC}'),
('BRSAL', 'SALVADOR', '萨尔瓦多', 0, 1, 'BR', 0, 0, '{CC}'),
('BRSFS', 'SANTO FRANCISCO DO SUL', '南圣弗兰西斯科', 0, 1, 'BR', 0, 0, '{CC}'),
('BRSPA', 'SAO PAULO', '圣保罗', 0, 1, 'BR', 0, 0, '{CC}'),
('BRSSE', 'SAO SEBASTIAO', '圣塞巴斯蒂昂', 0, 1, 'BR', 0, 0, '{CC}'),
('BRSTA', 'SANTANA', '圣安娜', 0, 1, 'BR', 0, 0, '{CC}'),
('BRSLM', 'SAO LUIZ DE MAR', '圣路易斯', 0, 1, 'BR', 0, 0, '{CC}'),
('BRSTM', 'SANTAREM', '圣塔伦', 0, 1, 'BR', 0, 0, '{CC}'),
('BRSTS', 'SANTOS', '桑托斯', 0, 1, 'BR', 0, 0, '{CC}'),
('BRTUB', 'TUBARAO', '图巴朗', 0, 1, 'BR', 0, 0, '{CC}'),
('BRVIC', 'VICTORIA', '维多利亚', 0, 1, 'BR', 0, 0, '{CC}'),
('BRAN', 'ANTONINA', '安托尼纳', 0, 1, 'BR', 0, 0, '{CC}'),
('BRSFD', 'SAN FRANCISCO DO SUL', '', 0, 1, 'BR', 0, 0, '{CC}'),
('BRSAO', 'SAO FRANCISCO DO SUL', '', 0, 1, 'BR', 0, 0, '{CC}'),
('PECEM', 'PECEM', '', 0, 1, 'BR', 0, 0, '{CC}'),
('BNBSB', 'BANDAR SERI BEGAWAN', '斯里巴加湾港', 0, 1, 'BN', 0, 0, '{CC}'),
('BNKBT', 'KUALA BELAIT', '白拉奕', 0, 1, 'BN', 0, 0, '{CC}'),
('BNSER', 'SERIA', '诗里亚', 0, 1, 'BN', 0, 0, '{CC}'),
('BRBR', 'BRUNEI', '文莱', 0, 1, 'BN', 0, 0, '{CC}'),
('MUA', 'MUARA', '穆阿拉', 0, 1, 'BN', 0, 0, '{CC}'),
('BGBAL', 'BALCHIK', '巴尔奇克', 0, 1, 'BG', 0, 0, '{CC}'),
('BGBGS', 'BOURGAS', '布加斯', 0, 1, 'BG', 0, 0, '{CC}'),
('BGKAV', 'KAVARNA', '卡瓦尔纳', 0, 1, 'BG', 0, 0, '{CC}'),
('BGMIC', 'MICHURIN', '米丘林', 0, 1, 'BG', 0, 0, '{CC}'),
('BGNES', 'NESSEBAR', '纳塞巴尔', 0, 1, 'BG', 0, 0, '{CC}'),
('BGVAR', 'VARNA', '瓦尔纳', 0, 1, 'BG', 0, 0, '{CC}'),
('BUSOF', 'SOFIA', '索非亚', 0, 1, 'BG', 0, 0, '{CC}'),
('BUBUR', 'BURGAS', '布尔加斯', 0, 1, 'BG', 0, 0, '{CC}'),
('PLOV', 'PLOVDIV', '', 0, 1, 'BG', 0, 0, '{CC}'),
('MMAKY', 'AKYAB', '阿恰布', 0, 1, 'MM', 0, 0, '{CC}'),
('MMBSN', 'BASSEIN', '勃生', 0, 1, 'MM', 0, 0, '{CC}'),
('MMMOU', 'MOULMEIN', '毛淡棉', 0, 1, 'MM', 0, 0, '{CC}'),
('BUSI', 'SITTWE', '实兑', 0, 1, 'MM', 0, 0, '{CC}'),
('YAN', 'YANGON', '仰光', 0, 1, 'MM', 0, 0, '{CC}'),
('CMDUA', 'DOUALA', '杜阿拉', 0, 1, 'CM', 0, 0, '{CC}'),
('CO', 'KRIBI', '克里比', 0, 1, 'CM', 0, 0, '{CC}'),
('GNVIC', 'VICTORIA(GN)', '维多利亚', 0, 1, 'CM', 0, 0, '{CC}'),
('CADAL', 'DALHOUSIE', '达尔豪西', 0, 1, 'CA', 0, 0, '{CC}'),
('CADIG', 'DIGBY', '迪格比', 0, 1, 'CA', 0, 0, '{CC}'),
('CADWL', 'DINGWALL(CA)', '丁沃尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CAESQ', 'ESQUIMALT', '埃斯奎莫尔特', 0, 1, 'CA', 0, 0, '{CC}'),
('CAFOR', 'FORESTVILLE', '福雷斯特维尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CAGAS', 'GASPE', '加斯佩', 0, 1, 'CA', 0, 0, '{CC}'),
('CAGBK', 'GRAND BANK', '格兰德班克', 0, 1, 'CA', 0, 0, '{CC}'),
('CAGEO', 'GEORGETOWN(CA)', '乔治敦', 0, 1, 'CA', 0, 0, '{CC}'),
('CAGOD', 'GODERICH', '戈德里奇', 0, 1, 'CA', 0, 0, '{CC}'),
('CAGSB', 'GOOSE BAY', '古斯湾', 0, 1, 'CA', 0, 0, '{CC}'),
('CAHAM', 'HAMILTON(CA)', '哈密尔顿', 0, 1, 'CA', 0, 0, '{CC}'),
('CAHAN', 'HANTSPORT', '汉茨波特', 0, 1, 'CA', 0, 0, '{CC}'),
('CAHCT', 'HEART''S CONTENT', '哈茨康滕特', 0, 1, 'CA', 0, 0, '{CC}'),
('CAHFX', 'HALIFAX', '哈利法克斯', 0, 1, 'CA', 0, 0, '{CC}'),
('CAHGR', 'HARBOUR GRACE', '格雷斯港', 0, 1, 'CA', 0, 0, '{CC}'),
('CAKIN', 'KINGSTON(CA)', '金斯顿', 0, 1, 'CA', 0, 0, '{CC}'),
('CAKIT', 'KITIMAT', '基提马特', 0, 1, 'CA', 0, 0, '{CC}'),
('CALAH', 'LA HAVE', '勒黑夫', 0, 1, 'CA', 0, 0, '{CC}'),
('CALEA', 'LEAMINGTON', '利明顿', 0, 1, 'CA', 0, 0, '{CC}'),
('CALIV', 'LIVERPOOL(CA)', '利物浦', 0, 1, 'CA', 0, 0, '{CC}'),
('CALOC', 'LOCKEPORT', '洛克波特', 0, 1, 'CA', 0, 0, '{CC}'),
('CALOU', 'LOUISBURG', '路易斯堡', 0, 1, 'CA', 0, 0, '{CC}'),
('CALSC', 'LIS COMB', '利斯科姆', 0, 1, 'CA', 0, 0, '{CC}'),
('CALUN', 'LUNENBURG', '卢嫩堡', 0, 1, 'CA', 0, 0, '{CC}'),
('CAMAT', 'MATANE', '马塔讷', 0, 1, 'CA', 0, 0, '{CC}'),
('CAMET', 'METEGHAN', '梅泰根', 0, 1, 'CA', 0, 0, '{CC}'),
('CAMID', 'MIDLAND(ONT.)', '米德兰', 0, 1, 'CA', 0, 0, '{CC}'),
('CAMLS', 'MONT LOUIS', '蒙路易', 0, 1, 'CA', 0, 0, '{CC}'),
('CAMTL', 'MONTREAL', '蒙特利尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CANSY', 'NORTH SYDNEY', '北锡德尼', 0, 1, 'CA', 0, 0, '{CC}'),
('CANWE', 'NEW WESTMINSTER', '新威斯敏斯特', 0, 1, 'CA', 0, 0, '{CC}'),
('CAOAK', 'OAKVILLE(ONT.)', '奥克维尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CAOFS', 'OCEAN FALLS', '福尔斯海', 0, 1, 'CA', 0, 0, '{CC}'),
('CAOSD', 'OWEN SOUND', '欧文桑德', 0, 1, 'CA', 0, 0, '{CC}'),
('CANEW', 'NEWCASTLE(N.B.)', '纽卡斯尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CANGL', 'NEW GLASGOW', '新格拉斯哥', 0, 1, 'CA', 0, 0, '{CC}'),
('CANMO', 'NANAIMO', '纳奈莫', 0, 1, 'CA', 0, 0, '{CC}'),
('CAOSH', 'OSHAWA(ONT.)', '奥沙瓦', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPAD', 'PORT ALFRED(CA)', '艾尔夫雷德港', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPAE', 'PORT ALICE', '艾利斯港', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPAR', 'PARRSBORO', '帕斯博勒', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPAS', 'PASPEBIAC', '帕斯佩比亚克', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPCA', 'PORT CARTIER', '卡提尔港', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPCO', 'PORT COLBORNE(O', '科尔本港', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPCR', 'PORT CREDIT(ONT', '克雷迪特港', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPHA', 'PORT HAWKESBURY', '霍克斯伯里港', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPHO', 'PORT HOPE(ONT.)', '霍普港', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPIC', 'PICTOU', '皮克图', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPME', 'PORT MEDWAY', '梅德韦港', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPOR', 'POWELL RIVER', '鲍威尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPRE', 'PRESCOTT(CA)', '普雷斯科特', 0, 1, 'CA', 0, 0, '{CC}'),
('CAPSD', 'PARRY SOUND', '帕里桑德', 0, 1, 'CA', 0, 0, '{CC}'),
('CAQBC', 'QUEBEC', '魁北克', 0, 1, 'CA', 0, 0, '{CC}'),
('CARDL', 'RIVIERE DU LOUP', '里维耶尔－迪卢', 0, 1, 'CA', 0, 0, '{CC}'),
('AGSJS', 'ST. JOHNS(AG)', '圣约翰斯', 0, 1, 'CA', 0, 0, '{CC}'),
('CASAN', 'ST. ANDREWS(CA)', '圣安德鲁斯', 0, 1, 'CA', 0, 0, '{CC}'),
('CASAR', 'SARNIA(ONT.)', '萨尔尼亚', 0, 1, 'CA', 0, 0, '{CC}'),
('CASDC', 'SHEDIAC', '谢迪艾克', 0, 1, 'CA', 0, 0, '{CC}'),
('CASHE', 'SHELBURNE(N.S.)', '谢尔本', 0, 1, 'CA', 0, 0, '{CC}'),
('CASHI', 'SHIPPEGAN', '希皮根', 0, 1, 'CA', 0, 0, '{CC}'),
('CASPR', 'SPRINGDALE', '斯普林代尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CASRL', 'SORLE', '索雷尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CASSM', 'SAULT STE. MARI', '苏圣马丽', 0, 1, 'CA', 0, 0, '{CC}'),
('CASTH', 'SHEET HARBOUR', '希特港', 0, 1, 'CA', 0, 0, '{CC}'),
('CASTT', 'STEWART', '斯图尔特', 0, 1, 'CA', 0, 0, '{CC}'),
('CASUM', 'SUMMERSIDE', '萨默塞德', 0, 1, 'CA', 0, 0, '{CC}'),
('CASYD', 'SYDNEY(CA)', '悉尼', 0, 1, 'CA', 0, 0, '{CC}'),
('CATAD', 'TADUSSAC', '塔杜萨克', 0, 1, 'CA', 0, 0, '{CC}'),
('CATHO', 'THOROLD', '索罗尔德', 0, 1, 'CA', 0, 0, '{CC}'),
('CATHR', 'THREE RIVERS', '三河城', 0, 1, 'CA', 0, 0, '{CC}'),
('CATWI', 'TWILLINGATE', '特威林盖特', 0, 1, 'CA', 0, 0, '{CC}'),
('CAVCR', 'VANCOUVER,CANADA', '温哥华', 0, 1, 'CA', 0, 0, '{CC}'),
('CAVIC', 'VICTORIA(CA)', '维多利亚', 0, 1, 'CA', 0, 0, '{CC}'),
('CAWEY', 'WEYMOUTH(CA)', '韦默思', 0, 1, 'CA', 0, 0, '{CC}'),
('CAWOO', 'WOODFIBRE', '伍德菲伯', 0, 1, 'CA', 0, 0, '{CC}'),
('CAYAR', 'YARMOUTH(CA)', '雅茅思', 0, 1, 'CA', 0, 0, '{CC}'),
('CAAKL', 'AKLAVIK', '阿克拉维克', 0, 1, 'CA', 0, 0, '{CC}'),
('CAAMH', 'AMHERSTBURG', '阿默斯特堡', 0, 1, 'CA', 0, 0, '{CC}'),
('CAANN', 'ANNAPOLIS(CA)', '安纳波利斯', 0, 1, 'CA', 0, 0, '{CC}'),
('CAARI', 'ARICHAT', '阿里沙特', 0, 1, 'CA', 0, 0, '{CC}'),
('CAAST', 'AMHERST', '阿默斯特', 0, 1, 'CA', 0, 0, '{CC}'),
('CABAT', 'BATHURST', '巴瑟斯特', 0, 1, 'CA', 0, 0, '{CC}'),
('CABOT', 'BOTWOOD', '博特伍德', 0, 1, 'CA', 0, 0, '{CC}'),
('CABRI', 'BRIDGEWATER', '布里奇沃特', 0, 1, 'CA', 0, 0, '{CC}'),
('CABRO', 'BROCKVILLE(ONT.', '布罗克维尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CABRS', 'BAY ROBERTS', '贝罗伯茨', 0, 1, 'CA', 0, 0, '{CC}'),
('CABUC', 'BUCTOUCHE', '巴克图什', 0, 1, 'CA', 0, 0, '{CC}'),
('CACAM', 'CAMPBELLTON', '坎贝尔顿', 0, 1, 'CA', 0, 0, '{CC}'),
('CACAR', 'CARLETON', '卡尔顿', 0, 1, 'CA', 0, 0, '{CC}'),
('CACHA', 'CHARLOTTETOWN(N', '夏洛特敦', 0, 1, 'CA', 0, 0, '{CC}'),
('CACHE', 'CHEMAINUS', '彻梅纳斯', 0, 1, 'CA', 0, 0, '{CC}'),
('CACHI', 'CHICOUTIMI', '希库提米', 0, 1, 'CA', 0, 0, '{CC}'),
('CACHU', 'CHURCHILL(MAN.)', '丘吉尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CACLA', 'CLARENVILLE', '克拉伦维尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CACMX', 'COMOX', '科莫克斯', 0, 1, 'CA', 0, 0, '{CC}'),
('CACOB', 'COBOURG(ONT.)', '科堡', 0, 1, 'CA', 0, 0, '{CC}'),
('CACOL', 'COLLINGWOOD', '科灵伍德', 0, 1, 'CA', 0, 0, '{CC}'),
('CACON', 'CONTRECOEUR', '孔特勒科尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CACOR', 'CORNWALL(ONT.)', '康沃尔', 0, 1, 'CA', 0, 0, '{CC}'),
('CACQT', 'CARAQUET', '卡拉凯特', 0, 1, 'CA', 0, 0, '{CC}'),
('CACRO', 'CROFTON', '克罗夫顿', 0, 1, 'CA', 0, 0, '{CC}'),
('CACSH', 'CANSO HARBOUR', '坎索港', 0, 1, 'CA', 0, 0, '{CC}'),
('CACTM', 'CHATHAM', '查塔姆', 0, 1, 'CA', 0, 0, '{CC}'),
('CACTP', 'CHETICAMP', '谢蒂坎普', 0, 1, 'CA', 0, 0, '{CC}'),
('CACWB', 'COWICHAN BAY', '科威恰湾', 0, 1, 'CA', 0, 0, '{CC}'),
('CABAB', 'BABBECK', '巴德克', 0, 1, 'CA', 0, 0, '{CC}'),
('CABAJ', 'BAJE COMEAU', '贝科莫', 0, 1, 'CA', 0, 0, '{CC}'),
('CAEDM', 'EDMONTON', '埃德蒙顿', 0, 1, 'CA', 0, 0, '{CC}'),
('CACA', 'CALGARY', '卡达加里', 0, 1, 'CA', 0, 0, '{CC}'),
('CASAS', 'SASKATOON', '', 0, 1, 'CA', 0, 0, '{CC}'),
('CATRO', 'TORONTO', '多伦多', 0, 1, 'CA', 0, 0, '{CC}'),
('ADA', 'TORONTO,CANADA', '多伦多', 0, 1, 'CA', 0, 0, '{CC}'),
('CAWEG', 'WINNIPEG', '温尼伯', 0, 1, 'CA', 0, 0, '{CC}'),
('CAREG', 'REGINA', '里贾那', 0, 1, 'CA', 0, 0, '{CC}'),
('MIL', 'MILTON', '', 0, 1, 'CA', 0, 0, '{CC}'),
('GAL', 'GALGARY', '', 0, 1, 'CA', 0, 0, '{CC}'),
('CLACD', 'ANCUD', '安库德', 0, 1, 'CL', 0, 0, '{CC}'),
('CLANT', 'ANTOFAGASTA', '安托法加斯塔', 0, 1, 'CL', 0, 0, '{CC}'),
('CLARI', 'ARICA', '阿里卡', 0, 1, 'CL', 0, 0, '{CC}'),
('CLCAL', 'CALDERA', '卡尔德拉', 0, 1, 'CL', 0, 0, '{CC}'),
('CLCAS', 'CASTRO', '卡斯特罗', 0, 1, 'CL', 0, 0, '{CC}'),
('CLCCA', 'CAL. CLARENCIA', '克拉伦西亚', 0, 1, 'CL', 0, 0, '{CC}'),
('CLCGR', 'CRUZ GRANDE', '克鲁斯格兰德', 0, 1, 'CL', 0, 0, '{CC}'),
('CLCHL', 'CHANARAL', '查尼亚拉尔', 0, 1, 'CL', 0, 0, '{CC}'),
('CLCLA', 'CALDERILLA', '卡尔德里拉', 0, 1, 'CL', 0, 0, '{CC}'),
('CLCOQ', 'COQUIMBO', '科金博', 0, 1, 'CL', 0, 0, '{CC}'),
('CLCOR', 'CORONEL', '科罗内尔', 0, 1, 'CL', 0, 0, '{CC}'),
('CLCRL', 'CORRAL', '科拉尔', 0, 1, 'CL', 0, 0, '{CC}'),
('CLHUA', 'HUASCO', '瓦斯科', 0, 1, 'CL', 0, 0, '{CC}'),
('CLIQU', 'IQUIQUE', '伊基克', 0, 1, 'CL', 0, 0, '{CC}'),
('CLPAR', 'PUNTA ARENAS', '阿雷纳斯角', 0, 1, 'CL', 0, 0, '{CC}'),
('CLPMO', 'PUERTO MONTT', '蒙特港', 0, 1, 'CL', 0, 0, '{CC}'),
('CLSAN', 'SAN ANTONIO', '圣安东尼奥', 0, 1, 'CL', 0, 0, '{CC}'),
('CLTOC', 'TOCOPILLA', '托科皮亚', 0, 1, 'CL', 0, 0, '{CC}'),
('CLTOM', 'TOME', '托梅', 0, 1, 'CL', 0, 0, '{CC}'),
('CLTTL', 'TALTAL', '塔尔塔尔', 0, 1, 'CL', 0, 0, '{CC}'),
('CLTAL', 'TALCAHUANO', '塔尔卡瓦诺', 0, 1, 'CL', 0, 0, '{CC}'),
('CLVDA', 'VALDIVIA', '瓦尔迪维亚', 0, 1, 'CL', 0, 0, '{CC}'),
('CLVAL', 'VALPARAISO', '瓦尔帕莱索', 0, 1, 'CL', 0, 0, '{CC}'),
('ESLCA', 'LA CALERA', '拉卡莱拉', 0, 1, 'CL', 0, 0, '{CC}'),
('CHCPT', 'CONCEPTION', '', 0, 1, 'CL', 0, 0, '{CC}'),
('AEJAL', 'JEBEL ALI', '阿里山', 0, 1, 'CA', 0, 0, '{CC}'),
('CNDLC', 'DALIAN', '大连', 0, 1, 'CA', 0, 0, '{CC}'),
('CNDXG', 'DALIANXINGANG', '大连新港（区）', 0, 1, 'CA', 0, 0, '{CC}'),
('MOMAC', 'MACAU', '澳门', 0, 1, 'CA', 0, 0, '{CC}'),
('CNSHA', 'SHANGHAI', '上海', 0, 1, 'CA', 0, 0, '{CC}'),
('HKHKG', 'HONG KONG', '香港', 0, 1, 'CA', 0, 0, '{CC}'),
('KEELU', 'KEELUNG', '基隆', 0, 1, 'CA', 0, 0, '{CC}'),
('ASHA', 'SHANGHAI, CHINA', '', 0, 1, 'CA', 0, 0, '{CC}'),
('XGG', 'XINGANG', '', 0, 1, 'CA', 0, 0, '{CC}'),
('COBAR', 'BARRANQUILLA', '巴兰基利亚', 0, 1, 'CO', 0, 0, '{CC}'),
('COBUE', 'BUENA VENTURA', '布韦那文图拉', 0, 1, 'CO', 0, 0, '{CC}'),
('COCOV', 'COVENAS', '科韦尼亚斯', 0, 1, 'CO', 0, 0, '{CC}'),
('COCTA', 'CARTAGENA(CO)', '卡塔赫纳', 0, 1, 'CO', 0, 0, '{CC}'),
('CORHA', 'RIO HACHA', '里奥阿查', 0, 1, 'CO', 0, 0, '{CC}'),
('COSMA', 'SANTA MARTA', '圣玛尔塔', 0, 1, 'CO', 0, 0, '{CC}'),
('COTUM', 'TUMACO', '图马科', 0, 1, 'CO', 0, 0, '{CC}'),
('KMFOM', 'FOMBONI', '丰博尼', 0, 1, 'KM', 0, 0, '{CC}'),
('KMMOR', 'MORONI', '莫罗尼', 0, 1, 'KM', 0, 0, '{CC}'),
('KMMUT', 'MUTSAMUDU', '穆察穆杜', 0, 1, 'KM', 0, 0, '{CC}'),
('KMDZA', 'DZAOUDZI', '藻德济', 0, 1, 'KM', 0, 0, '{CC}'),
('CGPNO', 'POINTE NOIRE(CG', '黑角', 0, 1, 'CG', 0, 0, '{CC}'),
('POINT', 'POINTE NOIRE PORT,CONGO', '', 0, 1, 'CG', 0, 0, '{CC}'),
('CRCAL', 'CALDERA(CR)', '卡尔德拉', 0, 1, 'CR', 0, 0, '{CC}'),
('CRGOL', 'GOLFITO', '戈尔菲托', 0, 1, 'CR', 0, 0, '{CC}'),
('CRPLI', 'PORT LIMON', '利蒙港', 0, 1, 'CR', 0, 0, '{CC}'),
('CRPUN', 'PUNTARENAS', '彭塔雷纳斯', 0, 1, 'CR', 0, 0, '{CC}'),
('CRQUE', 'QUEPOS', '克波斯', 0, 1, 'CR', 0, 0, '{CC}'),
('COERA', 'PUERTO CALDERA', '卡尔德拉', 0, 1, 'CR', 0, 0, '{CC}'),
('COCGO', 'CARTAGO', '卡塔果', 0, 1, 'CR', 0, 0, '{CC}'),
('COMON', 'PUERTO LIMON''', '利蒙港', 0, 1, 'CR', 0, 0, '{CC}'),
('CIABI', 'ABIDJAN', '阿比让', 0, 1, 'CI', 0, 0, '{CC}'),
('CIASS', 'ASSINIE', '阿西尼', 0, 1, 'CI', 0, 0, '{CC}'),
('CIFRE', 'FRESCO', '弗雷斯科', 0, 1, 'CI', 0, 0, '{CC}'),
('CIGBM', 'GRAND BASSAM', '大巴萨姆', 0, 1, 'CI', 0, 0, '{CC}'),
('CISAS', 'SASSANDRA', '萨桑德拉', 0, 1, 'CI', 0, 0, '{CC}'),
('CISPE', 'SAN PEDRO(CI)', '圣佩德罗', 0, 1, 'CI', 0, 0, '{CC}'),
('CITAB', 'TABOU', '塔布', 0, 1, 'CI', 0, 0, '{CC}'),
('HRDBV', 'DUBROVNIK', '杜布罗夫尼克', 0, 1, 'HR', 0, 0, '{CC}'),
('HRPUL', 'PULA', '普拉', 0, 1, 'HR', 0, 0, '{CC}'),
('HRRIJ', 'RIJEKA', '里耶卡', 0, 1, 'HR', 0, 0, '{CC}'),
('HRSPL', 'SPLIT', '斯普利特', 0, 1, 'HR', 0, 0, '{CC}'),
('PLO', 'PLOCE', '普洛切', 0, 1, 'HR', 0, 0, '{CC}'),
('CUANT', 'ANTILLA', '安蒂亚', 0, 1, 'CU', 0, 0, '{CC}'),
('CUBAH', 'BAHIA HONDA', '翁达港', 0, 1, 'CU', 0, 0, '{CC}'),
('CUBAN', 'BANES', '巴内斯', 0, 1, 'CU', 0, 0, '{CC}'),
('CUBAR', 'BARACOA', '巴拉科阿', 0, 1, 'CU', 0, 0, '{CC}'),
('CUBGR', 'BOCA GRANDE(CU)', '博卡格兰德', 0, 1, 'CU', 0, 0, '{CC}'),
('CUBOQ', 'BOQUERON', '博克龙', 0, 1, 'CU', 0, 0, '{CC}'),
('CUCAB', 'CABANAS', '卡瓦尼亚斯', 0, 1, 'CU', 0, 0, '{CC}'),
('CUCAI', 'CAIBARIEN', '凯巴连', 0, 1, 'CU', 0, 0, '{CC}'),
('CUCAR', 'CARDENAS', '卡德纳斯', 0, 1, 'CU', 0, 0, '{CC}'),
('CUCAS', 'CASILDA', '卡西尔达', 0, 1, 'CU', 0, 0, '{CC}'),
('CUCIE', 'CIENFUEGOS', '西恩富戈斯', 0, 1, 'CU', 0, 0, '{CC}'),
('CUCMA', 'CAIMANERA', '凯马勒那', 0, 1, 'CU', 0, 0, '{CC}'),
('CUGUA', 'GUAYABAL', '瓜亚瓦尔', 0, 1, 'CU', 0, 0, '{CC}'),
('CUHAV', 'HAVANA', '哈瓦那', 0, 1, 'CU', 0, 0, '{CC}'),
('CUISA', 'ISABELA(CU)', '伊萨贝拉', 0, 1, 'CU', 0, 0, '{CC}'),
('CUJUC', 'JUCARO', '胡卡罗', 0, 1, 'CU', 0, 0, '{CC}'),
('CUMAN', 'MANZANILLO(CU)', '曼萨尼略', 0, 1, 'CU', 0, 0, '{CC}'),
('CUMAR', 'MARIEL', '马里埃尔', 0, 1, 'CU', 0, 0, '{CC}'),
('CUMAT', 'MATANZAS(CU)', '马坦萨斯', 0, 1, 'CU', 0, 0, '{CC}'),
('CUMLA', 'MANOPLA', '马诺普拉', 0, 1, 'CU', 0, 0, '{CC}'),
('CUMLU', 'MEDIA LUNA', '梅迪亚卢纳', 0, 1, 'CU', 0, 0, '{CC}'),
('CUMOA', 'MOA', '莫阿', 0, 1, 'CU', 0, 0, '{CC}'),
('CUMTI', 'MANATI', '马纳蒂', 0, 1, 'CU', 0, 0, '{CC}'),
('CUNGA', 'NUEVA GERONA', '新赫罗纳', 0, 1, 'CU', 0, 0, '{CC}'),
('CUNIC', 'NICARO', '尼卡罗', 0, 1, 'CU', 0, 0, '{CC}'),
('CUNIQ', 'NIQUERO', '尼克罗', 0, 1, 'CU', 0, 0, '{CC}'),
('CUPLN', 'PILON', '皮隆', 0, 1, 'CU', 0, 0, '{CC}'),
('CUPRE', 'PRESTON(CU)', '普雷斯顿', 0, 1, 'CU', 0, 0, '{CC}'),
('CUSAG', 'SAGUALA GRANDE', '大萨瓜', 0, 1, 'CU', 0, 0, '{CC}'),
('CUSCS', 'SANTA CRUZ DEL', '南圣克鲁斯', 0, 1, 'CU', 0, 0, '{CC}'),
('CUSGO', 'SANTIAGO', '圣地亚哥', 0, 1, 'CU', 0, 0, '{CC}'),
('CUSLU', 'SANTA LUCIA', '圣卢西亚', 0, 1, 'CU', 0, 0, '{CC}'),
('CUTDZ', 'TUNAS DE ZAZA', '图纳斯德萨萨', 0, 1, 'CU', 0, 0, '{CC}'),
('CUNUE', 'NUEVITAS', '努埃维塔斯', 0, 1, 'CY', 0, 0, '{CC}'),
('CUPPA', 'PUERTO PADRE', '帕德雷港', 0, 1, 'CY', 0, 0, '{CC}'),
('CYAKR', 'AKROTIRI', '阿克罗蒂里', 0, 1, 'CY', 0, 0, '{CC}'),
('CYFAM', 'FAMAGUSTA', '法马古斯塔', 0, 1, 'CY', 0, 0, '{CC}'),
('CYKYR', 'KYRENIA', '凯里尼亚', 0, 1, 'CY', 0, 0, '{CC}'),
('CYLAR', 'LARNACA', '拉纳卡', 0, 1, 'CY', 0, 0, '{CC}'),
('CYLIM', 'LIMASSOL', '利马索尔', 0, 1, 'CY', 0, 0, '{CC}'),
('CYPPS', 'PAPHOS', '佩福斯', 0, 1, 'CY', 0, 0, '{CC}'),
('CYVAB', 'Vassiliko Bay', '瓦西利科湾', 0, 1, 'CY', 0, 0, '{CC}'),
('CZBRN', 'BRNO', '布尔诺', 0, 1, 'CZ', 0, 0, '{CC}'),
('CZPRA', 'PRAHA', '布拉格', 0, 1, 'CZ', 0, 0, '{CC}'),
('CZPLZ', 'PLZEN', '比尔森', 0, 1, 'CZ', 0, 0, '{CC}'),
('CZBMO', 'BMO', '毕莫', 0, 1, 'CZ', 0, 0, '{CC}'),
('CZOST', 'OSTRAVA', '奥斯萃瓦', 0, 1, 'CZ', 0, 0, '{CC}'),
('CZPAR', 'PARGUE', '', 0, 1, 'CZ', 0, 0, '{CC}'),
('CZPUE', 'PRAGUE', '', 0, 1, 'CZ', 0, 0, '{CC}'),
('CZPIZ', 'PIZEN', '', 0, 1, 'CZ', 0, 0, '{CC}'),
('KPCJN', 'CHONGJIN', '清津', 0, 1, 'KP', 0, 0, '{CC}'),
('KPHAE', 'HAEJU', '海州', 0, 1, 'KP', 0, 0, '{CC}'),
('KPHUN', 'HUNGNAM', '兴南', 0, 1, 'KP', 0, 0, '{CC}'),
('KPCHI', 'NAMPO', '镇南浦', 0, 1, 'KP', 0, 0, '{CC}'),
('KPRAJ', 'RAJIN', '罗津', 0, 1, 'KP', 0, 0, '{CC}'),
('KPSON', 'SONGRIM', '松林', 0, 1, 'KP', 0, 0, '{CC}'),
('KPUNG', 'UNGGI', '雄基', 0, 1, 'KP', 0, 0, '{CC}'),
('KPWON', 'WONSAN', '元山', 0, 1, 'KP', 0, 0, '{CC}'),
('DKHOL', 'HOLBAEK', '霍尔拜克', 0, 1, 'DK', 0, 0, '{CC}'),
('DKHOR', 'HORSENS', '霍森斯', 0, 1, 'DK', 0, 0, '{CC}'),
('DKHSD', 'HADSUND', '海松', 0, 1, 'DK', 0, 0, '{CC}'),
('DKHSV', 'HADERSLEV', '哈泽斯莱乌', 0, 1, 'DK', 0, 0, '{CC}'),
('DKKAL', 'KALUNDBORG', '凯隆堡', 0, 1, 'DK', 0, 0, '{CC}'),
('DKKAR', 'KARREBAEKSMINDE', '卡勒拜克斯明讷', 0, 1, 'DK', 0, 0, '{CC}'),
('DKKOG', 'KOGE', '克厄', 0, 1, 'DK', 0, 0, '{CC}'),
('DKKOL', 'KOLDING', '科灵', 0, 1, 'DK', 0, 0, '{CC}'),
('DKKOR', 'KORSOR', '科瑟', 0, 1, 'DK', 0, 0, '{CC}'),
('DKKYN', 'KYNDBY', '金比', 0, 1, 'DK', 0, 0, '{CC}'),
('DKLEM', 'LEMVIG', '莱姆维', 0, 1, 'DK', 0, 0, '{CC}'),
('DKMAR', 'MARIAGER', '玛丽艾厄', 0, 1, 'DK', 0, 0, '{CC}'),
('DKMID', 'MIDDELFART', '米泽尔法特', 0, 1, 'DK', 0, 0, '{CC}'),
('DKNAE', 'NAESTVED', '奈斯特韦兹', 0, 1, 'DK', 0, 0, '{CC}'),
('DKNKV', 'NAKSKOV', '纳克斯考', 0, 1, 'DK', 0, 0, '{CC}'),
('DKNYB', 'NYBORG', '尼堡', 0, 1, 'DK', 0, 0, '{CC}'),
('DKODE', 'ODENSE', '欧登塞', 0, 1, 'DK', 0, 0, '{CC}'),
('DKRAN', 'RANDERS', '兰讷斯', 0, 1, 'DK', 0, 0, '{CC}'),
('DKROD', 'RODBYHAVN', '勒兹比港', 0, 1, 'DK', 0, 0, '{CC}'),
('DKRUD', 'RUDKOBING', '鲁兹克宾', 0, 1, 'DK', 0, 0, '{CC}'),
('DKSAK', 'SAKSKOBING', '萨克斯克宾', 0, 1, 'DK', 0, 0, '{CC}'),
('DKSKI', 'SKIVE', '斯基沃', 0, 1, 'DK', 0, 0, '{CC}'),
('DKSKN', 'SKAGEN', '斯卡恩', 0, 1, 'DK', 0, 0, '{CC}'),
('DKSON', 'SONDERBORG', '桑德堡', 0, 1, 'DK', 0, 0, '{CC}'),
('DKSTE', 'STEGE', '斯泰厄', 0, 1, 'DK', 0, 0, '{CC}'),
('DKSTU', 'STUBBEKOBING', '斯图伯克宾', 0, 1, 'DK', 0, 0, '{CC}'),
('DKSVA', 'SVANEKE', '斯瓦讷克', 0, 1, 'DK', 0, 0, '{CC}'),
('DKSVE', 'SVENDBORG', '斯文堡', 0, 1, 'DK', 0, 0, '{CC}'),
('DKVEJ', 'VEJLE', '瓦埃勒', 0, 1, 'DK', 0, 0, '{CC}'),
('DKVOR', 'VORDINGBORG', '沃尔丁堡', 0, 1, 'DK', 0, 0, '{CC}'),
('DMPOR', 'PORTSMOUTH(DM)', '朴次茅斯', 0, 1, 'DK', 0, 0, '{CC}'),
('DKAER', 'AEROSKOBING', '埃勒斯克平', 0, 1, 'DK', 0, 0, '{CC}'),
('DKAHS', 'AARHUS', '奥尔胡斯', 0, 1, 'DK', 0, 0, '{CC}'),
('DKBHM', 'BANDHOLM', '班霍尔姆', 0, 1, 'DK', 0, 0, '{CC}'),
('DKBOG', 'BOGENSE', '博恩瑟', 0, 1, 'DK', 0, 0, '{CC}'),
('DKCOP', 'COPENHAGEN', '哥本哈根', 0, 1, 'DK', 0, 0, '{CC}'),
('DKALL', 'ALLINGE', '阿灵厄', 0, 1, 'DK', 0, 0, '{CC}'),
('DKASS', 'ASSENS', '阿森斯', 0, 1, 'DK', 0, 0, '{CC}'),
('DKFLS', 'FAKSE LADEPLADS', '法克瑟莱泽普拉斯', 0, 1, 'DK', 0, 0, '{CC}'),
('DKFRE', 'FREDERICIA', '腓特烈西亚', 0, 1, 'DK', 0, 0, '{CC}'),
('DKFSD', 'FREDERIKSSUND', '腓特烈松', 0, 1, 'DK', 0, 0, '{CC}'),
('DKFSK', 'FREDERIKSVARK', '腓特烈斯韦克', 0, 1, 'DK', 0, 0, '{CC}'),
('DKFSN', 'FREDERIKSHAVN', '腓特烈港', 0, 1, 'DK', 0, 0, '{CC}'),
('DKESB', 'ESBJERG', '埃斯比约', 0, 1, 'DK', 0, 0, '{CC}'),
('DKETD', 'ENSTED', '恩斯坦达', 0, 1, 'DK', 0, 0, '{CC}'),
('DKFAA', 'FAABORG', '福堡', 0, 1, 'DK', 0, 0, '{CC}'),
('DKEBE', 'EBELTOFT', '埃伯尔措夫特', 0, 1, 'DK', 0, 0, '{CC}'),
('DKGUL', 'GULFHAVN', '基尔夫港', 0, 1, 'DK', 0, 0, '{CC}'),
('DKHAS', 'HASLE', '海斯勒', 0, 1, 'DK', 0, 0, '{CC}'),
('DKHIR', 'HIRTSHALS', '希茨海尔斯', 0, 1, 'DK', 0, 0, '{CC}'),
('DKGRE', 'GRENAA', '格雷诺', 0, 1, 'DK', 0, 0, '{CC}'),
('DKHOB', 'HOBRO', '霍布罗', 0, 1, 'DK', 0, 0, '{CC}'),
('DEARH', 'ARHUS', '奥尔胡斯', 0, 1, 'DK', 0, 0, '{CC}'),
('DEAAL', 'AALBORG', '阿尔堡', 0, 1, 'DK', 0, 0, '{CC}'),
('ALB', 'ALBORG', '奥尔堡', 0, 1, 'DK', 0, 0, '{CC}'),
('DMROS', 'ROSEAU', '罗索', 0, 1, 'DM', 0, 0, '{CC}'),
('DOBAR', 'BARAHONA', '巴拉奥纳', 0, 1, 'DM', 0, 0, '{CC}'),
('DOLRO', 'LA ROMANA', '拉罗马纳', 0, 1, 'DM', 0, 0, '{CC}'),
('DOMAN', 'MANZANILLO(DO)', '曼萨尼约', 0, 1, 'DM', 0, 0, '{CC}'),
('DOPPL', 'PUERTO PLATA', '普拉塔港', 0, 1, 'DM', 0, 0, '{CC}'),
('DORHA', 'RIO HAINA', '海纳', 0, 1, 'DM', 0, 0, '{CC}'),
('DOSAM', 'SAMANA', '萨马纳', 0, 1, 'DM', 0, 0, '{CC}'),
('DOSCZ', 'SANCHEZ', '桑切斯', 0, 1, 'DM', 0, 0, '{CC}'),
('DOSDO', 'SANTO DOMINGO', '圣多明各', 0, 1, 'DM', 0, 0, '{CC}'),
('DOSPM', 'SAN PEDRO DE MA', '圣佩得罗德马科里斯', 0, 1, 'DM', 0, 0, '{CC}'),
('DOHAI', 'HAINA', '海纳', 0, 1, 'DM', 0, 0, '{CC}'),
('ECESM', 'ESMERALDAS', '埃斯梅拉达斯', 0, 1, 'EC', 0, 0, '{CC}'),
('ECGYL', 'GUAYAQUIL', '瓜亚基尔', 0, 1, 'EC', 0, 0, '{CC}'),
('ECMTA', 'MANTA', '曼塔', 0, 1, 'EC', 0, 0, '{CC}'),
('AOPAL', 'PORTO ALEXANDRE', '亚历山大港', 0, 1, 'EG', 0, 0, '{CC}'),
('GRALE', 'ALEXANDROUPOLIS', '亚历山德鲁波利斯', 0, 1, 'EG', 0, 0, '{CC}'),
('GRAST', 'ASTAKOS', '阿斯塔科斯', 0, 1, 'EG', 0, 0, '{CC}'),
('EGABZ', 'ABU ZENIMA', '阿布宰尼迈', 0, 1, 'EG', 0, 0, '{CC}'),
('EGADA', 'ADABIYA', '阿代比耶', 0, 1, 'EG', 0, 0, '{CC}'),
('EGALE', 'ALEXANDRIA(EG)', '亚历山德里亚', 0, 1, 'EG', 0, 0, '{CC}'),
('EGDAM', 'DAMIETTA', '杜姆亚特', 0, 1, 'EG', 0, 0, '{CC}'),
('EGKOS', 'KOSSEIR', '库赛尔', 0, 1, 'EG', 0, 0, '{CC}'),
('EGPSA', 'PORT SAID', '塞得港', 0, 1, 'EG', 0, 0, '{CC}'),
('EGSAF', 'SAFAGA', '萨法贾', 0, 1, 'EG', 0, 0, '{CC}'),
('EGSUE', 'SUEZ', '苏伊士', 0, 1, 'EG', 0, 0, '{CC}'),
('EGPSU', 'PORT SUEZ', '苏伊士', 0, 1, 'EG', 0, 0, '{CC}'),
('ADDA', 'ADDABIA PORT', '', 0, 1, 'EG', 0, 0, '{CC}'),
('SOK', 'SOKHNA', '索科哈纳', 0, 1, 'EG', 0, 0, '{CC}'),
('SVACA', 'ACAJUTLA', '阿卡胡特拉', 0, 1, 'SV', 0, 0, '{CC}'),
('SVCUT', 'CUTUCO', '库图科', 0, 1, 'SV', 0, 0, '{CC}'),
('SVLLI', 'LA LIBERTAD(SV)', '拉利贝塔德', 0, 1, 'SV', 0, 0, '{CC}'),
('SVLUN', 'LA UNION(SV)', '拉乌尼翁', 0, 1, 'SV', 0, 0, '{CC}'),
('CAPRR', 'PRINCE RUPERT', '鲁珀特港', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSTO', 'STOCKTON(GB)', '斯托克顿', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSTR', 'STROMNESS', '斯特罗姆内斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSUB', 'SUTTON BRIDGE', '萨顿布里奇', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSWH', 'SANDWICH', '桑德威奇', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSWY', 'STORNOWAY', '斯托诺韦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTAR', 'TARBERT', '塔伯特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSUN', 'SUNDERLAND', '森德兰', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSWA', 'SWANSEA', '斯旺西', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTOT', 'TOTNES', '托特尼斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTRO', 'TROON', '特伦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTRU', 'TRURO', '特鲁罗', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTYD', 'TYNE DOCK', '太恩港', 0, 1, 'GB', 0, 0, '{CC}'),
('GBULL', 'ULLAPOOL', '阿勒浦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWAR', 'WARKWORTH', '沃克沃思', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWAT', 'WATCHET', '沃切特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWBY', 'WHITBY', '惠特比', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWES', 'WESTRAY', '韦斯特雷', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWEY', 'WEYMOUTH(GB)', '韦茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTEI', 'TEIGNMOUTH', '廷茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTHS', 'TMAMES HAVEN', '', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTHU', 'THURSO', '瑟索', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTBY', 'TENBY', '滕比', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTOB', 'TOBERMORY', '托伯莫里', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTOP', 'TOPSHAM', '托普瑟姆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTOR', 'TROQUAY', '托基', 0, 1, 'GB', 0, 0, '{CC}'),
('GBTIL', 'TILBURY', '蒂尔伯里', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWHI', 'WHITSTABLE', '惠特斯特布尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWHN', 'WHITEHAVEN', '怀特黑文', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWIC', 'WICK(SCOT)', '威克', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWIS', 'WISBECH', '威斯贝奇', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWLS', 'WELLS', '韦尔斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWOR', 'WORKINGTON', '沃金顿', 0, 1, 'GB', 0, 0, '{CC}'),
('GBWRP', 'WARREN POINT', '沃伦波因特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBYAR', 'YARMOUTH(GB)', '雅茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBABN', 'ABERDEEN(GB)', '阿伯丁', 0, 1, 'GB', 0, 0, '{CC}'),
('GBABR', 'ABERDOUR', '阿伯道尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBABY', 'ABERDOVEY', '阿伯多维', 0, 1, 'GB', 0, 0, '{CC}'),
('GBAGS', 'ARDGLASS', '阿德格拉斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBALD', 'ALDERNEY', '奥尔德尼', 0, 1, 'GB', 0, 0, '{CC}'),
('GBAML', 'AMLWCH', '阿姆卢赫', 0, 1, 'GB', 0, 0, '{CC}'),
('GBANG', 'ANNALONG', '安纳隆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBANN', 'ANNAN', '安嫩', 0, 1, 'GB', 0, 0, '{CC}'),
('GBANS', 'ANSTRUTHER', '安斯特拉瑟', 0, 1, 'GB', 0, 0, '{CC}'),
('GBAPP', 'APPLEDORE', '阿普尔多尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBARG', 'ARDRISHAIG', '阿德里希格', 0, 1, 'GB', 0, 0, '{CC}'),
('GBARN', 'ARDROSSAN(GB)', '阿德罗森', 0, 1, 'GB', 0, 0, '{CC}'),
('GBAVO', 'AVONMOUTH', '埃文茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBAYR', 'AYR', '艾尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBAE', 'BARNSTAPIE', '巴恩斯特珀尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBAN', 'BANGOR(CO.DOWN)', '班戈', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBGR', 'BANGOR(CAER.)', '班戈', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBHD', 'BURGHEAD', '伯格黑德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBEL', 'BELFAST(GB)', '贝尔法斯特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBOS', 'BOSTON(GB)', '波士顿', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBPT', 'BRIDPORT', '布里德波特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBRD', 'BROMBOROUGH DOC', '布朗巴勒', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBRI', 'BRIGHTLINGSEA', '布赖特灵西', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBRN', 'BRIGHTON(GB)', '布赖顿', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBRW', 'BARROW-IN-FURNESS(GB)', '巴罗-因-弗内斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBLN', 'BRIDLINGTON', '布里德灵顿', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBLY', 'BLYTH', '布莱斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBMS', 'BEAUMARIS', '博马里斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBID', 'BIDEFORD', '比迪福德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBRY', 'BARRY', '巴里', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBTH', 'BARMOUTH', '巴尔默斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBTL', 'BRISTOL', '布里斯托尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBUC', 'BUCKIE', '巴基', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBXM', 'BRIXHAM', '布里克瑟姆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCAE', 'CAERNARFON', '卡那封', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCAM', 'CAMPBELTOWN', '坎贝尔敦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBWR', 'BRIDGWATER', '布里奇沃特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCOE', 'COLERAINE', '科尔雷恩', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCOL', 'COLCHESTER', '科尔切斯特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCOQ', 'CONNAH''S QUAY', '康纳斯基', 0, 1, 'GB', 0, 0, '{CC}');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('GBCOR', 'CORPACH', '科珀赫', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCOS', 'COWES', '考斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCAR', 'CARRICKFERGUS', '卡里克弗格斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCAS', 'CASTLETOWN', '卡斯尔敦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCDF', 'CARDIFF', '加的夫', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCHA', 'CHARLESTOWN(GB)', '查尔斯敦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCRO', 'CROMARTY', '克罗默蒂', 0, 1, 'GB', 0, 0, '{CC}'),
('GBDAR', 'DARTMOUTH', '达特茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBDBR', 'DUNBAR', '邓巴', 0, 1, 'GB', 0, 0, '{CC}'),
('GBDDE', 'DUNDEE', '邓迪', 0, 1, 'GB', 0, 0, '{CC}'),
('GBDIN', 'DINGWALL(GB)', '丁沃尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBDOU', 'DOUGLAS', '道格拉斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBDOV', 'DOVER', '多佛', 0, 1, 'GB', 0, 0, '{CC}'),
('GBDRM', 'DUNDRUM', '邓德拉姆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBDUM', 'DUMFRIES', '邓弗里斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBDUN', 'DUNOON', '达农', 0, 1, 'GB', 0, 0, '{CC}'),
('BHX', 'BIRMINGHAM', '伯明翰', 0, 1, 'GB', 0, 0, '{CC}'),
('GBDAG', 'DAGENHAM', '带根纳姆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLEE', 'LEEDS', '利兹', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMOS', 'MOSTYN', '莫斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBNEW', 'NEWPORT(GB)', '纽波特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBNHN', 'NEWHAVEN', '纽黑文', 0, 1, 'GB', 0, 0, '{CC}'),
('GBNLN', 'NEWLYN', '纽林', 0, 1, 'GB', 0, 0, '{CC}'),
('GBNOR', 'NORWICH', '诺里奇', 0, 1, 'GB', 0, 0, '{CC}'),
('GBNRY', 'NEWRY', '纽里', 0, 1, 'GB', 0, 0, '{CC}'),
('GBNSU', 'N. SUNDERLAND', '北森德兰', 0, 1, 'GB', 0, 0, '{CC}'),
('GBNBH', 'NEWBURGH', '纽堡', 0, 1, 'GB', 0, 0, '{CC}'),
('GBNCE', 'NEWCASTLE(GB)', '纽卡斯尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBNEA', 'NEATH', '尼思', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMTL', 'METHIL', '梅西尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBOBN', 'OBAN', '奥本', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPAD', 'PADSTOW', '帕德斯托', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPAS', 'PORT ASKAIOG', '阿美凯格皮尔港', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPEL', 'PORT ELLEN', '埃伦港', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPLY', 'PLYMOUTH(GB)', '普利茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPMR', 'PENMAENMAWR', '彭迈恩毛尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPOO', 'POOLE', '普尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPRE', 'PRESTON(GB)', '普雷斯顿', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPRH', 'PORTRUSH', '波特拉什', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPRN', 'PENRYN', '彭林', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPEN', 'PENZANCE', '彭赞斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPER', 'PERTH(GB)', '珀斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPET', 'PETERHEAD', '彼得黑德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPLD', 'PORTLAND(GB)', '波特兰', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPTA', 'PORT TALBOT', '塔尔伯特港', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPTE', 'PORTREE', '波特里', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPTH', 'PORTSMOUTH(GB)', '泼次茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPWI', 'PORT WILLIAM', '威廉港', 0, 1, 'GB', 0, 0, '{CC}'),
('GBPWL', 'PWLLHELI', '普尔黑利', 0, 1, 'GB', 0, 0, '{CC}'),
('GBQSY', 'QUEENSFERRY', '昆斯费里', 0, 1, 'GB', 0, 0, '{CC}'),
('GBRAM', 'RAMSGATE', '拉姆斯盖特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBRHM', 'RAINHAM', '雷汉姆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBRHY', 'RHYL', '里尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBROC', 'ROCHESTER(GB)', '罗切斯特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBROS', 'ROSYTH', '罗赛斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBROT', 'ROTHESAY', '罗斯西', 0, 1, 'GB', 0, 0, '{CC}'),
('GBRUN', 'RUNCORN', '朗科恩', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSCA', 'SCARBOROUGH(GB)', '斯卡伯勒', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSCR', 'SCRABSTER', '斯克拉布斯特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSED', 'SOUTHEND', '绍森德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSFD', 'STRANGFORD', '斯特兰福德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSHE', 'ST. HELIER', '圣赫利尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSHM', 'SEAHAM HARBOUR', '锡厄姆港', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSHO', 'SHOREHAM', '肖勒姆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSIV', 'ST. IVES', '圣艾夫斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSLY', 'SCALLOWAY', '斯卡洛韦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSMH', 'ST. MARGARET''S', '圣马格丽茨贝', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSNS', 'SHEERNESS', '希尔内斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSOU', 'SOUTHAMPTON', '南安普顿', 0, 1, 'GB', 0, 0, '{CC}'),
('GBSPP', 'ST. PETER PORT', '圣彼德港', 0, 1, 'GB', 0, 0, '{CC}'),
('GRDRA', 'DRAPETZONA', '德拉佩特佐拉', 0, 1, 'GB', 0, 0, '{CC}'),
('GBELP', 'ELLESMERE PORT', '埃尔斯米尔港', 0, 1, 'GB', 0, 0, '{CC}'),
('GBEXE', 'EXETER', '埃克塞特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBEXM', 'EXMOUTH', '埃克斯茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBEYE', 'EYEMOUTH', '艾茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBFAL', 'FALMOUTH(GB)', '法尔茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBFAW', 'FAWLEY', '福利', 0, 1, 'GB', 0, 0, '{CC}'),
('GBFEL', 'FELIXSTOWE', '弗利克斯托', 0, 1, 'GB', 0, 0, '{CC}'),
('GBFIN', 'FINNART', '芬纳特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBFIS', 'FISHGUARD', '菲什加德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBFLE', 'FLEETWOOD', '弗利特伍德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBFOL', 'FOLKESTONE', '福克斯通', 0, 1, 'GB', 0, 0, '{CC}'),
('GBFOW', 'FOWEY', '福伊', 0, 1, 'GB', 0, 0, '{CC}'),
('GBFRA', 'FRASERBURGH', '弗雷泽堡', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGAI', 'GAINSBOROUGH', '盖恩斯伯勒', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGAN', 'GARLIESTON', '加利斯敦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGAR', 'GARSTON', '加斯顿', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGIR', 'GIRVAN', '格文', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGLA', 'GLASGOW', '格拉斯哥', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGLE', 'GLENARM', '格莱纳姆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGLO', 'GLOUCESTER(GB)', '格洛斯特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGNK', 'GREENOCK', '格里诺克', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGNW', 'GUNNESS WHARF', '冈纳斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGOO', 'GOOLE', '古尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGRA', 'GRANGEMOUTH', '格兰奇茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGRI', 'GRIMSBY', '格里姆斯比', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGRK', 'GOUROCK', '古罗克', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGSD', 'GRAVESEND', '格雷夫森德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBGYA', 'GREAT YARMOUTH', '大雅茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBHAR', 'HARWICH', '哈里奇', 0, 1, 'GB', 0, 0, '{CC}'),
('GBHAY', 'HAYLE', '海尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBHOL', 'HOLYHEAD', '霍利黑德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBINV', 'INVERGORDON', '因弗戈登', 0, 1, 'GB', 0, 0, '{CC}'),
('GBIOG', 'ISLE OF GRAIN', '谷岛', 0, 1, 'GB', 0, 0, '{CC}'),
('GBIPS', 'IPSWICH', '伊普斯威奇', 0, 1, 'GB', 0, 0, '{CC}'),
('GBIRV', 'IRVINE', '欧文', 0, 1, 'GB', 0, 0, '{CC}'),
('GBIVS', 'INVERNESS', '因弗内斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBHPL', 'HARTLEPOOL', '哈特尔浦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBHUL', 'HULL', '赫尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBIMM', 'IMMINGHAM', '伊明赫姆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBKIL', 'KILLINGHOLME', '基林霍尔姆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBKIR', 'KIRKCALDY', '柯科迪', 0, 1, 'GB', 0, 0, '{CC}'),
('GBKOL', 'KYLE OF LOCHALS', '洛哈尔什教区凯尔', 0, 1, 'GB', 0, 0, '{CC}'),
('GBKSL', 'KING''S LYNN', '金斯林', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLAN', 'LANCASTER', '兰开斯特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLDY', 'LONDONDERRY', '伦敦德里', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLEI', 'LEITH', '利斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLOS', 'LOSSIEMOUTH', '洛西茅斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLOW', 'LOWESTOFT', '洛斯托夫特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLWK', 'LERWICK', '勒威克', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLYB', 'LYBSTER', '利布斯特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLYD', 'LYDNEY', '利德尼', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMAC', 'MACDUFF', '麦克达夫', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMAL', 'MALDON', '莫尔登', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMAN', 'MANCHESTER', '曼彻斯特', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMEV', 'MEVAGISSEY', '梅瓦吉西', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMID', 'MIDDLESBROUGH', '米德尔斯伯勒', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMIH', 'MILFORD HAVEN', '米尔福德港', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLMA', 'LOCH MADDY', '洛赫马迪', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLNE', 'LARNE', '拉恩', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLOE', 'LOOE', '卢港', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLON', 'LONDON', '伦敦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLOP', 'LOCHALINE PIER', '洛哈林', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLGS', 'LARGS', '拉格斯', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLIT', 'LITTLEHAMPTON', '利特尔汉普顿', 0, 1, 'GB', 0, 0, '{CC}'),
('GBLIV', 'LIVERPOOL(GB)', '利物浦', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMIN', 'MINEHEAD', '迈恩黑德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMIS', 'MISTLEY', '米斯特利', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMLG', 'MALLAIG', '马莱格', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMLM', 'MILLOM', '米勒姆', 0, 1, 'GB', 0, 0, '{CC}'),
('GBMON', 'MONTROSE', '蒙特罗斯', 0, 1, 'GB', 0, 0, '{CC}'),
('ENAR', 'ARDGLASS', '阿德格拉斯', 0, 1, 'GB', 0, 0, '{CC}'),
('ENARD', 'ARDRISHAIG', '阿德里希格', 0, 1, 'GB', 0, 0, '{CC}'),
('ENARR', 'ARDROSSAN', '阿德罗森', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBU', 'BUDE', '布德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBCA', 'CARNLOUGH', '卡恩拉夫', 0, 1, 'GB', 0, 0, '{CC}'),
('ENBUR', 'BURNIEY', '伯利', 0, 1, 'GB', 0, 0, '{CC}'),
('ENCHA', 'CHADDERTON', '查得顿', 0, 1, 'GB', 0, 0, '{CC}'),
('ENCAD', 'CADIFF', '加的夫', 0, 1, 'GB', 0, 0, '{CC}'),
('ENEDI', 'EDINBURGH', '爱丁堡', 0, 1, 'GB', 0, 0, '{CC}'),
('GBBRA', 'BRADFORD', '布拉德福德', 0, 1, 'GB', 0, 0, '{CC}'),
('GBJAR', 'JARROW', '', 0, 1, 'GB', 0, 0, '{CC}'),
('ENLEI', 'LEICESTER', '列斯特', 0, 1, 'GB', 0, 0, '{CC}'),
('ENNOT', 'NOTTINGHAM', '诺丁汉', 0, 1, 'GB', 0, 0, '{CC}'),
('ENYOR', 'YORK', '纽克', 0, 1, 'GB', 0, 0, '{CC}'),
('ENWIG', 'WIGAM', '维加', 0, 1, 'GB', 0, 0, '{CC}'),
('ENTHA', 'THAMES', '', 0, 1, 'GB', 0, 0, '{CC}'),
('UKABE', 'ABERDEEN', '阿伯丁', 0, 1, 'GB', 0, 0, '{CC}'),
('ENLAN', 'LANARK', '拉纳克', 0, 1, 'GB', 0, 0, '{CC}'),
('ENSHE', 'SHEFFIELD', '谢菲尔德', 0, 1, 'GB', 0, 0, '{CC}'),
('ENYIL', 'TILBURY', '蒂尔伯利', 0, 1, 'GB', 0, 0, '{CC}'),
('ENOLD', 'OLDHAM', '奥尔德姆', 0, 1, 'GB', 0, 0, '{CC}'),
('PCMS', 'PORT SMOUTH', '朴次矛斯', 0, 1, 'GB', 0, 0, '{CC}'),
('ROTH', 'ROTHERHAM', '', 0, 1, 'GB', 0, 0, '{CC}'),
('SAL', 'ST.ALBANS', '', 0, 1, 'GB', 0, 0, '{CC}'),
('GQBAT', 'BATA', '巴塔', 0, 1, 'GQ', 0, 0, '{CC}'),
('ESTIN', 'TALLIN', '塔林', 0, 1, 'ES', 0, 0, '{CC}'),
('ETASB', 'ASSAB', '阿萨布', 0, 1, 'ET', 0, 0, '{CC}'),
('ETMAS', 'MASSAWA', '马萨瓦', 0, 1, 'ET', 0, 0, '{CC}'),
('ADD', 'ADDIS ABABA', '亚的斯阿贝巴', 0, 1, 'ET', 0, 0, '{CC}'),
('FOKLA', 'KLAKSVIG', '克拉克斯维克', 0, 1, 'FO', 0, 0, '{CC}'),
('FOTHO', 'THORSHAVN', '托尔斯港', 0, 1, 'FO', 0, 0, '{CC}'),
('FOTVO', 'TVOROYRI', '特瓦罗伊里', 0, 1, 'FO', 0, 0, '{CC}'),
('FOVES', 'VESTMANHAVN', '韦斯特门港', 0, 1, 'FO', 0, 0, '{CC}'),
('FJELL', 'ELLINGTON', '埃灵顿', 0, 1, 'FJ', 0, 0, '{CC}'),
('FJLAU', 'LAUTOKA', '劳托卡', 0, 1, 'FJ', 0, 0, '{CC}'),
('FJLEV', 'LEVUKA', '累武卡', 0, 1, 'FJ', 0, 0, '{CC}'),
('FJSUV', 'SUVA', '苏瓦', 0, 1, 'FJ', 0, 0, '{CC}'),
('FJSVB', 'SAVUSAVU BAY', '萨武萨武湾', 0, 1, 'FJ', 0, 0, '{CC}'),
('FIDL', 'DLLINGTON', '埃林顿', 0, 1, 'FJ', 0, 0, '{CC}'),
('NLHAN', 'HANSWEERT', '汉斯韦尔特', 0, 1, 'FI', 0, 0, '{CC}'),
('FIHAM', 'HAMINA', '哈米纳', 0, 1, 'FI', 0, 0, '{CC}'),
('FIHAN', 'HANKO', '汉科', 0, 1, 'FI', 0, 0, '{CC}'),
('FIHEL', 'HELSINKI', '赫尔辛基', 0, 1, 'FI', 0, 0, '{CC}'),
('FIKEM', 'KEMI', '凯米', 0, 1, 'FI', 0, 0, '{CC}'),
('FIKOK', 'KOKKOLA', '科科拉', 0, 1, 'FI', 0, 0, '{CC}'),
('FIKOT', 'KOTKA', '科特卡', 0, 1, 'FI', 0, 0, '{CC}'),
('FIKRI', 'KRISTIINA', '克里斯蒂纳', 0, 1, 'FI', 0, 0, '{CC}'),
('FILOV', 'LOVIISA', '洛维萨', 0, 1, 'FI', 0, 0, '{CC}'),
('FIMAR', 'MARIEHAMN', '玛丽港', 0, 1, 'FI', 0, 0, '{CC}'),
('FIMTO', 'MANTYLUOTO', '曼蒂卢奥托', 0, 1, 'FI', 0, 0, '{CC}'),
('FIOUL', 'OULU', '奥鲁', 0, 1, 'FI', 0, 0, '{CC}'),
('FIPIE', 'PIETARSAARI', '皮耶塔尔萨里', 0, 1, 'FI', 0, 0, '{CC}'),
('FIPOR', 'PORKKALA', '波卡拉', 0, 1, 'FI', 0, 0, '{CC}'),
('FIPRI', 'PORI', '波里', 0, 1, 'FI', 0, 0, '{CC}'),
('FIPVO', 'PORVOO', '波尔沃', 0, 1, 'FI', 0, 0, '{CC}'),
('FIRAA', 'RAAHE', '拉赫', 0, 1, 'FI', 0, 0, '{CC}'),
('FIRAU', 'RAUMA', '劳马', 0, 1, 'FI', 0, 0, '{CC}'),
('FITOR', 'TORNIO', '托尔奥尼', 0, 1, 'FI', 0, 0, '{CC}'),
('FITUR', 'TURKU', '图尔库', 0, 1, 'FI', 0, 0, '{CC}'),
('FIUUS', 'UUSIKAUPUNKI', '新考蓬基', 0, 1, 'FI', 0, 0, '{CC}'),
('FLVAS', 'VASSA', '瓦沙', 0, 1, 'FI', 0, 0, '{CC}'),
('ABO', 'ABO', '奥布', 0, 1, 'FI', 0, 0, '{CC}'),
('BJO', 'BJORNEBORG', '比约尔纳博里', 0, 1, 'FI', 0, 0, '{CC}'),
('GAM', 'GAMLAKARLEBY', '旧卡勒比', 0, 1, 'FI', 0, 0, '{CC}'),
('ULE', 'ULEABORG', '乌利堡', 0, 1, 'FI', 0, 0, '{CC}'),
('MAEN', 'MAENTYLUOTO', '', 0, 1, 'FI', 0, 0, '{CC}'),
('FIWAL', 'VALKOM', '瓦尔卡姆', 0, 1, 'FR', 0, 0, '{CC}'),
('FRABB', 'ABBEVILLE', '阿布维尔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRAJA', 'AJACCIO', '阿维克修', 0, 1, 'FR', 0, 0, '{CC}'),
('FRTNC', 'TONNAY CHARENTE', '托内沙朗特', 0, 1, 'FR', 0, 0, '{CC}'),
('FRTOU', 'TOULON', '土伦', 0, 1, 'FR', 0, 0, '{CC}'),
('FRARC', 'ARCACHON', '阿尔卡雄', 0, 1, 'FR', 0, 0, '{CC}'),
('FRATR', 'ANTIFER', '昂蒂弗', 0, 1, 'FR', 0, 0, '{CC}'),
('FRATS', 'ANTIBES', '昂蒂布', 0, 1, 'FR', 0, 0, '{CC}'),
('FRBAY', 'BAYONNE', '巴荣纳', 0, 1, 'FR', 0, 0, '{CC}'),
('FRBLA', 'BLAYE', '布拉伊', 0, 1, 'FR', 0, 0, '{CC}'),
('FRBON', 'BONIFACIO', '博尼法乔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRCNS', 'CANNES', '戛纳', 0, 1, 'FR', 0, 0, '{CC}'),
('FRCON', 'CONCARNEAU', '孔卡尔诺', 0, 1, 'FR', 0, 0, '{CC}'),
('FRCVI', 'CALVI', '卡尔维', 0, 1, 'FR', 0, 0, '{CC}'),
('FRDAH', 'DAHOUET', '达乌埃', 0, 1, 'FR', 0, 0, '{CC}'),
('FRDEA', 'DEAUVILLE', '多维尔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRDIE', 'DIEPPE', '迪耶普', 0, 1, 'FR', 0, 0, '{CC}'),
('FRDKK', 'DUNKIRK', '敦刻尔克', 0, 1, 'FR', 0, 0, '{CC}'),
('FRDON', 'DONGES', '栋日', 0, 1, 'FR', 0, 0, '{CC}'),
('FRDOU', 'DOUAMENEZ', '杜阿梅勒兹', 0, 1, 'FR', 0, 0, '{CC}'),
('FRETA', 'ETAPLES', '埃塔普勒', 0, 1, 'FR', 0, 0, '{CC}'),
('FRBOR', 'BORDEAUX', '波尔多', 0, 1, 'FR', 0, 0, '{CC}'),
('FRBOU', 'BOULOGNE', '布洛涅', 0, 1, 'FR', 0, 0, '{CC}'),
('FRBST', 'BREST', '布雷斯特', 0, 1, 'FR', 0, 0, '{CC}'),
('FRBTA', 'BASTIA', '巴斯蒂亚', 0, 1, 'FR', 0, 0, '{CC}'),
('FRCAL', 'CALAIS', '加来', 0, 1, 'FR', 0, 0, '{CC}'),
('FRCAM', 'CAMARET', '卡马雷', 0, 1, 'FR', 0, 0, '{CC}'),
('FRCAN', 'CAEN-OUISTREHAM', '冈兴威斯特拉', 0, 1, 'FR', 0, 0, '{CC}'),
('FRCBG', 'CHERBOURG', '瑟堡', 0, 1, 'FR', 0, 0, '{CC}'),
('FRCLE', 'CANCALE', '康卡勒', 0, 1, 'FR', 0, 0, '{CC}'),
('FRFEC', 'FECAMP', '费康', 0, 1, 'FR', 0, 0, '{CC}'),
('FRFOS', 'FOS', '福斯', 0, 1, 'FR', 0, 0, '{CC}'),
('FRGLS', 'GRAVELINES', '格拉沃利讷', 0, 1, 'FR', 0, 0, '{CC}'),
('FRGON', 'GONFREVILLE', '贡夫勒维尔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRGRA', 'GRANVILLE', '格兰维尔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRHON', 'HONFLEUR', '翁弗勒尔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRIRO', 'ILE ROUSSE', '伊尔鲁斯', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLAV', 'LAVERA', '拉瓦拉', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLCH', 'LE CHATEAUD''OLERON', '奥来龙堡', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLCI', 'LA CIOTAT', '拉西约塔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLGU', 'LE GUILDO', '勒吉尔多', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLIB', 'LIBOURNE', '利布尔讷', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLNO', 'LA NOUVELLE', '拉努韦勒', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLOR', 'LORIENT', '洛里昂', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLRO', 'LA ROCHELLE', '拉罗谢尔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRMOR', 'MORLAIX', '莫尔莱', 0, 1, 'FR', 0, 0, '{CC}'),
('FRNIC', 'NICE', '尼斯', 0, 1, 'FR', 0, 0, '{CC}'),
('FRNTS', 'NANTES', '南特', 0, 1, 'FR', 0, 0, '{CC}'),
('FRPBF', 'PAIMBOEUF', '潘伯夫', 0, 1, 'FR', 0, 0, '{CC}'),
('FRPDB', 'PORT DE BOUC', '布克港', 0, 1, 'FR', 0, 0, '{CC}'),
('FRPLA', 'PONT L''ABBE', '彭拉贝', 0, 1, 'FR', 0, 0, '{CC}'),
('FRPPI', 'PAIMPOL', '潘波勒', 0, 1, 'FR', 0, 0, '{CC}'),
('FRPRS', 'PARIS', '巴黎', 0, 1, 'FR', 0, 0, '{CC}'),
('FRPVS', 'PORT VENDRES', '旺德尔港', 0, 1, 'FR', 0, 0, '{CC}'),
('FRQUI', 'QUIMPER', '坎佩尔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRROC', 'ROCHEFORT', '罗什福尔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRROU', 'ROUEN', '鲁昂', 0, 1, 'FR', 0, 0, '{CC}'),
('FRSET', 'SETE', '塞特', 0, 1, 'FR', 0, 0, '{CC}'),
('FRSLR', 'ST. LOUIS DU RH', '圣路易罗纳', 0, 1, 'FR', 0, 0, '{CC}'),
('FRSMO', 'ST. MALO', '圣马洛', 0, 1, 'FR', 0, 0, '{CC}'),
('FRSNA', 'ST. NAZAIRE', '圣纳泽尔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRSVC', 'ST. VALERY EN C', '圣瓦勒利', 0, 1, 'FR', 0, 0, '{CC}'),
('FRAR', 'ARCACHON', '阿尔卡雄', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLHA', 'LE HAVRE', '勒阿佛尔', 0, 1, 'FR', 0, 0, '{CC}'),
('FRFSZ', 'FOT SOULTZ', '', 0, 1, 'FR', 0, 0, '{CC}'),
('ES', 'MARSEILLES', '马赛', 0, 1, 'FR', 0, 0, '{CC}'),
('FRCIN', 'CASTELSARRASIN', '', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLLE', 'LILLE', '', 0, 1, 'FR', 0, 0, '{CC}'),
('FRLYO', 'LYON', '里昂', 0, 1, 'FR', 0, 0, '{CC}'),
('FRTRG', 'TRASBOURG', '', 0, 1, 'FR', 0, 0, '{CC}'),
('PAL', 'PALLICE', '帕利斯', 0, 1, 'FR', 0, 0, '{CC}'),
('DU', 'DUNKERQUE', '敦刻尔克', 0, 1, 'FR', 0, 0, '{CC}'),
('BOU', 'BOUCAU', '布科', 0, 1, 'FR', 0, 0, '{CC}'),
('HUN', 'HUNINGUE', '', 0, 1, 'FR', 0, 0, '{CC}'),
('TOU', 'TOULOUSE', '', 0, 1, 'FR', 0, 0, '{CC}'),
('GACLZ', 'CAP LOPEZ', '洛佩斯角', 0, 1, 'GA', 0, 0, '{CC}'),
('GALIB', 'LIBREVILLE', '利伯维尔', 0, 1, 'GA', 0, 0, '{CC}'),
('GAOWE', 'OWENDO', '奥文多', 0, 1, 'GA', 0, 0, '{CC}'),
('GAPGE', 'PORT GENTIL', '谦蒂尔港', 0, 1, 'GA', 0, 0, '{CC}'),
('GALLE', 'LEBREVILLE', '利伯维尔', 0, 1, 'GA', 0, 0, '{CC}'),
('GMBJL', 'BANJUL', '班珠尔', 0, 1, 'GM', 0, 0, '{CC}'),
('GABA', 'BATHURST', '巴瑟斯特', 0, 1, 'GM', 0, 0, '{CC}'),
('GEBUS', 'BATUMI', '巴统', 0, 1, 'GE', 0, 0, '{CC}'),
('GETBI', 'TBILISI', '', 0, 1, 'GE', 0, 0, '{CC}'),
('GEPOT', 'POTI', '波季', 0, 1, 'GE', 0, 0, '{CC}'),
('GEMUN', 'MUNCHEM', '', 0, 1, 'DE', 0, 0, '{CC}'),
('DEBHN', 'BREMERHAVEN', '不来梅港', 0, 1, 'DE', 0, 0, '{CC}'),
('DEBRA', 'BRAKE', '布腊克', 0, 1, 'DE', 0, 0, '{CC}'),
('DEBRE', 'BREMEN', '不来梅', 0, 1, 'DE', 0, 0, '{CC}'),
('DECOL', 'KOLN', '科隆', 0, 1, 'DE', 0, 0, '{CC}'),
('DECUX', 'CUXHAVEN', '库克斯港', 0, 1, 'DE', 0, 0, '{CC}'),
('DEDUI', 'DUISBURG', '杜伊斯堡', 0, 1, 'DE', 0, 0, '{CC}'),
('DEDUS', 'DUSSELDORF', '杜塞尔多夫', 0, 1, 'DE', 0, 0, '{CC}'),
('DEECK', 'ECKERNFORDE', '埃肯弗尔德', 0, 1, 'DE', 0, 0, '{CC}'),
('DEELS', 'ELSFLETH', '埃尔斯费莱特', 0, 1, 'DE', 0, 0, '{CC}'),
('DEEMD', 'EMDEN', '埃姆登', 0, 1, 'DE', 0, 0, '{CC}'),
('DEFLE', 'FLENSBURG', '弗伦斯堡', 0, 1, 'DE', 0, 0, '{CC}'),
('DEFRA', 'FRANKFURT', '法兰克福', 0, 1, 'DE', 0, 0, '{CC}'),
('DEGLU', 'GLUCKSTADT', '格吕克施塔特', 0, 1, 'DE', 0, 0, '{CC}'),
('DEHAM', 'HAMBURG', '汉堡', 0, 1, 'DE', 0, 0, '{CC}'),
('DEHEI', 'HEILIGENHAFEN', '海利根港', 0, 1, 'DE', 0, 0, '{CC}'),
('DEHSM', 'HUSUM(DE)', '胡苏姆', 0, 1, 'DE', 0, 0, '{CC}'),
('DEKIL', 'KIEL', '基尔', 0, 1, 'DE', 0, 0, '{CC}'),
('DEKRE', 'KREFELD', '克雷菲尔德', 0, 1, 'DE', 0, 0, '{CC}'),
('DELAB', 'LABOE', '拉伯', 0, 1, 'DE', 0, 0, '{CC}'),
('DELER', 'LEER', '累尔', 0, 1, 'DE', 0, 0, '{CC}'),
('DELUB', 'LUBECK', '吕贝克', 0, 1, 'DE', 0, 0, '{CC}'),
('DENOR', 'NORDENHAM', '诺登哈姆', 0, 1, 'DE', 0, 0, '{CC}'),
('DENUS', 'NEUSS', '诺伊斯', 0, 1, 'DE', 0, 0, '{CC}'),
('DEPAP', 'PAPENBURG', '帕彭堡', 0, 1, 'DE', 0, 0, '{CC}'),
('DEROS', 'ROSTOCK', '罗斯托克', 0, 1, 'DE', 0, 0, '{CC}'),
('DETON', 'TONNING', '滕宁', 0, 1, 'DE', 0, 0, '{CC}'),
('DEVEG', 'VEGESACK', '弗格萨克', 0, 1, 'DE', 0, 0, '{CC}'),
('DEWIL', 'WILHELMSHAVEN', '威廉港', 0, 1, 'DE', 0, 0, '{CC}'),
('DEWIS', 'WISMAR', '维斯马', 0, 1, 'DE', 0, 0, '{CC}'),
('GEMCH', 'MUNICH', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GEDOR', 'DORTMUND', '多特蒙德', 0, 1, 'DE', 0, 0, '{CC}'),
('GEFRE', 'FREILASSING', '弗赖拉辛', 0, 1, 'DE', 0, 0, '{CC}'),
('GENUR', 'NURNBERG', '纽纶堡', 0, 1, 'DE', 0, 0, '{CC}'),
('GEDUE', 'DUESSELDORF', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GEVIE', 'VIERNHEIM', '维尔海姆', 0, 1, 'DE', 0, 0, '{CC}'),
('GESPR', 'SPROCKHOEVEL', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GESTR', 'STREHLA', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GEBIN', 'BERLIN', '柏林', 0, 1, 'DE', 0, 0, '{CC}'),
('GECNE', 'COLOGNE', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GEVTA', 'VECHTA', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GEWRF', 'WARENDORF', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GEKUE', 'KARLSRHUE', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GEMEN', 'MUENCHEN', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GELEI', 'LEIPZIG', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GEWUP', 'WUPPERTAL', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GESCH', 'SCHWALMSTADT', '', 0, 1, 'DE', 0, 0, '{CC}'),
('HAM', 'HAM', '', 0, 1, 'DE', 0, 0, '{CC}'),
('GRAN', 'GRANKFORT', '', 0, 1, 'DE', 0, 0, '{CC}'),
('HAR', 'HARLSRUHE', '', 0, 1, 'DE', 0, 0, '{CC}'),
('LISS', 'LISSONTORE', '', 0, 1, 'DE', 0, 0, '{CC}'),
('DIET', 'DIETZENBACH', '', 0, 1, 'DE', 0, 0, '{CC}'),
('ESS', 'ESSEN', '', 0, 1, 'DE', 0, 0, '{CC}'),
('DRES', 'DRESDEN', '', 0, 1, 'DE', 0, 0, '{CC}'),
('DD', 'HAMBURG,GERMANY', '汉堡', 0, 1, 'DE', 0, 0, '{CC}'),
('GHACC', 'ACCRA', '阿克拉', 0, 1, 'GH', 0, 0, '{CC}'),
('GHTAK', 'TAKORADI', '塔科拉迪', 0, 1, 'GH', 0, 0, '{CC}'),
('GHTEM', 'TEMA', '特马', 0, 1, 'GH', 0, 0, '{CC}'),
('DESTR', 'STRALSUND', '斯特拉尔松', 0, 1, 'GH', 0, 0, '{CC}'),
('GIGIB', 'GIBRALTAR', '直布罗陀', 0, 1, 'GI', 0, 0, '{CC}'),
('GRATH', 'ATHENS', '雅典', 0, 1, 'GR', 0, 0, '{CC}'),
('GRSAL', 'SALONICA', '萨洛尼卡', 0, 1, 'GR', 0, 0, '{CC}'),
('GRARG', 'ARGOSTOLION', '阿戈斯托利昂', 0, 1, 'GR', 0, 0, '{CC}'),
('GRCAN', 'CANEA', '干尼亚', 0, 1, 'GR', 0, 0, '{CC}'),
('GRCFU', 'CORFU', '科孚', 0, 1, 'GR', 0, 0, '{CC}'),
('GRCOR', 'CORINTH', '科林斯', 0, 1, 'GR', 0, 0, '{CC}'),
('GRELE', 'ELEUSIS', '埃莱夫西斯', 0, 1, 'GR', 0, 0, '{CC}'),
('GRCLS', 'CHALKIS', '哈尔基斯', 0, 1, 'GR', 0, 0, '{CC}'),
('GRIRA', 'IRAKLION', '伊拉克利翁', 0, 1, 'GR', 0, 0, '{CC}'),
('GRITE', 'ITEA', '伊泰阿', 0, 1, 'GR', 0, 0, '{CC}'),
('GRITI', 'ITHAKA ISLAND', '伊萨基', 0, 1, 'GR', 0, 0, '{CC}'),
('GRKAI', 'KALYMNOS ISLAND', '卡利姆诺斯', 0, 1, 'GR', 0, 0, '{CC}'),
('GRKAL', 'KALAMATA', '卡拉迈', 0, 1, 'GR', 0, 0, '{CC}'),
('GRKAV', 'KAVALLA', '卡瓦拉', 0, 1, 'GR', 0, 0, '{CC}'),
('GRKOS', 'KOS ISLAND', '科斯岛', 0, 1, 'GR', 0, 0, '{CC}'),
('GRKOU', 'KOUTALA', '库塔拉', 0, 1, 'GR', 0, 0, '{CC}'),
('GRLAU', 'LAURIUM', '拉夫里翁', 0, 1, 'GR', 0, 0, '{CC}'),
('GRMII', 'MILOS ISLANDS', '米洛斯岛', 0, 1, 'GR', 0, 0, '{CC}'),
('GRMIT', 'MITYLENE', '米提林尼', 0, 1, 'GR', 0, 0, '{CC}'),
('GRPAT', 'PATRAS', '佩特雷', 0, 1, 'GR', 0, 0, '{CC}'),
('GRPIR', 'PIRAEUS', '比雷埃夫斯', 0, 1, 'GR', 0, 0, '{CC}'),
('GRRDI', 'RHODES ISLAND', '罗得', 0, 1, 'GR', 0, 0, '{CC}'),
('GRRET', 'RETHIMNON', '雷西姆农', 0, 1, 'GR', 0, 0, '{CC}'),
('GRSDB', 'SUDA BAY', '苏达湾', 0, 1, 'GR', 0, 0, '{CC}'),
('GRTHE', 'THESSALONIKI', '塞萨洛尼基', 0, 1, 'GR', 0, 0, '{CC}'),
('GRVLS', 'VOLOS', '伏洛斯', 0, 1, 'GR', 0, 0, '{CC}'),
('PHVIL', 'VILLANUEVA(GU)', '维拉努埃瓦', 0, 1, 'GT', 0, 0, '{CC}'),
('CLPBO', 'PUERTO BORIES', '博里奥斯港', 0, 1, 'GT', 0, 0, '{CC}'),
('GTCHA', 'CHAMPERICO', '钱佩里科', 0, 1, 'GT', 0, 0, '{CC}'),
('GTPBA', 'PUERTO BARRIOS', '巴里奥斯港', 0, 1, 'GT', 0, 0, '{CC}'),
('GTPQL', 'PUERTO QUETZAL', '圣何塞', 0, 1, 'GT', 0, 0, '{CC}'),
('GTSTC', 'SANTO TOMAS DE CASTILLA', '圣托马斯', 0, 1, 'GT', 0, 0, '{CC}'),
('GJS.T', 'S.TOMAS DE CASTILLA', '', 0, 1, 'GT', 0, 0, '{CC}'),
('GUZAC', 'ZACAPA', '扎卡帕', 0, 1, 'GT', 0, 0, '{CC}'),
('GWVIC', 'VICTORIA(GW)', '维多利亚', 0, 1, 'GW', 0, 0, '{CC}'),
('GNCON', 'CONAKRY', '科纳克里', 0, 1, 'GN', 0, 0, '{CC}'),
('GWBIS', 'BISSAU', '比绍', 0, 1, 'GN', 0, 0, '{CC}'),
('GWBOL', 'BOLAMA', '博拉多', 0, 1, 'GN', 0, 0, '{CC}'),
('GWCAC', 'CACHEU', '卡谢乌', 0, 1, 'GN', 0, 0, '{CC}'),
('GFCAY', 'CAYANNE', '卡宴', 0, 1, 'GY', 0, 0, '{CC}'),
('GYGEO', 'GEORGETOWN(GY)', '乔治敦', 0, 1, 'GY', 0, 0, '{CC}'),
('HTACA', 'AUX CAYES', '奥凯', 0, 1, 'HT', 0, 0, '{CC}'),
('HTCHA', 'CAP HAITIEN', '海地角', 0, 1, 'HT', 0, 0, '{CC}'),
('HTGON', 'GONAIVES', '戈纳伊夫', 0, 1, 'HT', 0, 0, '{CC}'),
('HTJER', 'JEREMIE', '热雷米', 0, 1, 'HT', 0, 0, '{CC}'),
('HTMIR', 'MIRAGOANE', '米腊关', 0, 1, 'HT', 0, 0, '{CC}'),
('HTPAP', 'PORT AU PRINCE', '太子港', 0, 1, 'HT', 0, 0, '{CC}'),
('HTSMC', 'ST. MARC', '圣马克', 0, 1, 'HT', 0, 0, '{CC}'),
('HOGEN', 'GENDT', '', 0, 1, 'NL', 0, 0, '{CC}'),
('HNAPA', 'AMAPALA', '阿马帕拉', 0, 1, 'HN', 0, 0, '{CC}'),
('HNLCE', 'LA CEIBA', '拉塞瓦', 0, 1, 'HN', 0, 0, '{CC}'),
('HNPCO', 'PUERTO CORTES', '科尔特斯港', 0, 1, 'HN', 0, 0, '{CC}'),
('HNSLO', 'SAN LORENZO(HN)', '圣洛伦索', 0, 1, 'HN', 0, 0, '{CC}'),
('HNTRU', 'TRUJILLO', '特鲁希略', 0, 1, 'HN', 0, 0, '{CC}'),
('HOCHO', 'CHOLOMA', '', 0, 1, 'HN', 0, 0, '{CC}'),
('HOLMA', 'LA LIMA', '拉利马', 0, 1, 'HN', 0, 0, '{CC}'),
('HOTEG', 'TEGUCIGALPA', '', 0, 1, 'HN', 0, 0, '{CC}'),
('SP', 'SAN PEDRO SULA', '', 0, 1, 'HN', 0, 0, '{CC}'),
('HOVIL', 'VILLANUEVA(HO)', '维拉努埃瓦', 0, 1, 'HN', 0, 0, '{CC}'),
('HOBUF', 'BUFALO', '布法罗', 0, 1, 'HN', 0, 0, '{CC}'),
('HUSZE', 'SZEGED', '塞格德', 0, 1, 'HU', 0, 0, '{CC}'),
('HUBUD', 'BUDAPEST', '布达佩斯', 0, 1, 'HU', 0, 0, '{CC}'),
('HUGYO', 'GYOER', '杰尔', 0, 1, 'HU', 0, 0, '{CC}'),
('HUTAT', 'TATA', '塔塔', 0, 1, 'HU', 0, 0, '{CC}'),
('HUDEB', 'DEBRECEN', '', 0, 1, 'HU', 0, 0, '{CC}'),
('GODO', 'GODOLLO', '', 0, 1, 'HU', 0, 0, '{CC}'),
('48', 'CEGLED', '', 0, 1, 'HU', 0, 0, '{CC}'),
('ISAKU', 'AKUREYRI', '阿克雷里', 0, 1, 'IS', 0, 0, '{CC}'),
('ISHAF', 'HAFNARFJORD', '哈布纳菲厄泽', 0, 1, 'IS', 0, 0, '{CC}'),
('ISHUS', 'HUSAVIK', '胡萨维克', 0, 1, 'IS', 0, 0, '{CC}'),
('ISAKR', 'AKRANES', '阿克拉内斯', 0, 1, 'IS', 0, 0, '{CC}'),
('ISISA', 'ISAFJORD', '伊萨菲厄泽', 0, 1, 'IS', 0, 0, '{CC}'),
('ISKEF', 'KEFLAVIK', '凯夫拉维克', 0, 1, 'IS', 0, 0, '{CC}'),
('ISNES', 'NESKAUPSTADUR', '内斯克伊斯塔泽', 0, 1, 'IS', 0, 0, '{CC}'),
('ISREY', 'REYKJAVIK', '雷克雅未克', 0, 1, 'IS', 0, 0, '{CC}'),
('ISSEY', 'SEYDISFJORD', '塞济斯菲厄泽', 0, 1, 'IS', 0, 0, '{CC}'),
('ISSIG', 'SIGLUFJORD', '锡格吕菲厄泽', 0, 1, 'IS', 0, 0, '{CC}'),
('ISVSI', 'VESTMANN ISLAND', '韦斯特曼纳岛', 0, 1, 'IS', 0, 0, '{CC}'),
('IECLA', 'CLARECASTLE', '克莱尔卡斯尔', 0, 1, 'IS', 0, 0, '{CC}'),
('IECLO', 'CLONAKILTY', '克洛纳基尔蒂', 0, 1, 'IS', 0, 0, '{CC}'),
('INMRL', 'MANGROLE', '曼格罗尔', 0, 1, 'IN', 0, 0, '{CC}'),
('INMVI', 'MANDVI', '曼德维', 0, 1, 'IN', 0, 0, '{CC}'),
('INNMA', 'NEW MANGALORE', '新芒格洛尔', 0, 1, 'IN', 0, 0, '{CC}'),
('INPAR', 'PARADIP', '巴拉迪布', 0, 1, 'IN', 0, 0, '{CC}'),
('INPBL', 'PORT BLAIR', '布莱尔港', 0, 1, 'IN', 0, 0, '{CC}'),
('INPJM', 'PANJIM', '潘吉姆', 0, 1, 'IN', 0, 0, '{CC}'),
('INPOK', 'PORT OKHA', '奥卡港', 0, 1, 'IN', 0, 0, '{CC}'),
('INPON', 'PONDICHERRY', '本地治里', 0, 1, 'IN', 0, 0, '{CC}'),
('INQUI', 'QUILON', '奎隆', 0, 1, 'IN', 0, 0, '{CC}'),
('INTEL', 'TELLICHERRY', '代利杰里', 0, 1, 'IN', 0, 0, '{CC}'),
('INTUT', 'TUTICORIN', '杜蒂戈林', 0, 1, 'IN', 0, 0, '{CC}'),
('INVER', 'VERAVAL', '韦拉沃尔', 0, 1, 'IN', 0, 0, '{CC}'),
('INVIS', 'VISAKHAPATNAM', '维沙卡帕特南', 0, 1, 'IN', 0, 0, '{CC}'),
('IDAMP', 'AMPENAN', '安佩南', 0, 1, 'IN', 0, 0, '{CC}'),
('IDDON', 'DONGGALA', '栋加拉', 0, 1, 'IN', 0, 0, '{CC}'),
('INALL', 'ALLEPPEY', '阿勒皮', 0, 1, 'IN', 0, 0, '{CC}'),
('INBED', 'BEDI', '贝迪', 0, 1, 'IN', 0, 0, '{CC}'),
('INBHA', 'BHAVNAGAR', '包纳加尔', 0, 1, 'IN', 0, 0, '{CC}'),
('INBHE', 'BHEEMUNIPATNAM', '比穆尼帕特南', 0, 1, 'IN', 0, 0, '{CC}'),
('INBOM', 'BOMBAY', '孟买', 0, 1, 'IN', 0, 0, '{CC}'),
('INCAL', 'CALCUTTA', '加尔格答', 0, 1, 'IN', 0, 0, '{CC}'),
('INCAM', 'CALINGAPATNAM', '格灵格伯德讷姆', 0, 1, 'IN', 0, 0, '{CC}'),
('INCAN', 'CANNANORE', '坎纳诺尔', 0, 1, 'IN', 0, 0, '{CC}'),
('INCCT', 'CALICUT', '卡利卡特', 0, 1, 'IN', 0, 0, '{CC}'),
('INCOC', 'COCHIN', '科钦', 0, 1, 'IN', 0, 0, '{CC}'),
('INCOL', 'COLACHEL', '科拉歇尔', 0, 1, 'IN', 0, 0, '{CC}'),
('INCUD', 'CUDDALORE', '库达洛尔', 0, 1, 'IN', 0, 0, '{CC}'),
('INDAM', 'DAMAN', '达曼', 0, 1, 'IN', 0, 0, '{CC}'),
('INDIU', 'DIU', '第乌', 0, 1, 'IN', 0, 0, '{CC}'),
('INHDA', 'HALDIA', '哈德雷', 0, 1, 'IN', 0, 0, '{CC}'),
('INKAK', 'KAKINADA', '卡基纳达', 0, 1, 'IN', 0, 0, '{CC}'),
('INKAN', 'KANDLA', '根德拉', 0, 1, 'IN', 0, 0, '{CC}'),
('INKAR', 'KARWAR', '加尔瓦尔', 0, 1, 'IN', 0, 0, '{CC}'),
('INMAD', 'MADRAS', '马德拉斯', 0, 1, 'IN', 0, 0, '{CC}'),
('INMAL', 'MALPE', '马尔佩', 0, 1, 'IN', 0, 0, '{CC}'),
('INMAN', 'MANGALORE', '芒格洛尔', 0, 1, 'IN', 0, 0, '{CC}'),
('INMOR', 'MORMUGAO', '莫尔穆冈', 0, 1, 'IN', 0, 0, '{CC}'),
('INNEW', 'NEW DELHI', '新德里', 0, 1, 'IN', 0, 0, '{CC}'),
('INBE', 'BEYPORE', '贝普尔', 0, 1, 'IN', 0, 0, '{CC}'),
('CHE', 'CHENNAI', '清佘', 0, 1, 'IN', 0, 0, '{CC}'),
('INNHA', 'NHAVA SHEVA', '那瓦西瓦', 0, 1, 'IN', 0, 0, '{CC}'),
('INTOM', 'TUTICOM', '', 0, 1, 'IN', 0, 0, '{CC}'),
('MUMBA', 'MUMBAI,INDIA', '孟买', 0, 1, 'IN', 0, 0, '{CC}'),
('ANRU', 'AMRITSAR', '', 0, 1, 'IN', 0, 0, '{CC}'),
('NSI', 'NSICT/INDIA', '', 0, 1, 'IN', 0, 0, '{CC}'),
('AMD', 'ICD AHMEDABD', '阿默达巴德', 0, 1, 'IN', 0, 0, '{CC}'),
('112', 'BOMBAY PORT', '孟买港', 0, 1, 'IN', 0, 0, '{CC}'),
('VIZ', 'VIZAG', '', 0, 1, 'IN', 0, 0, '{CC}'),
('IDAMI', 'AMBON ISLAND', '安汶', 0, 1, 'ID', 0, 0, '{CC}'),
('IDBAL', 'BALIKPAPAN', '巴厘巴板', 0, 1, 'ID', 0, 0, '{CC}'),
('IDBAN', 'BANJARMASIN', '马辰', 0, 1, 'ID', 0, 0, '{CC}'),
('IDBGI', 'BANYUWANGI', '巴纽旺宣', 0, 1, 'ID', 0, 0, '{CC}'),
('IDBIT', 'BITUNG', '比通', 0, 1, 'ID', 0, 0, '{CC}'),
('IDBLS', 'BENGKALIS', '本卡利斯', 0, 1, 'ID', 0, 0, '{CC}'),
('IDBLU', 'BENGKULU', '明古鲁', 0, 1, 'ID', 0, 0, '{CC}'),
('IDBMA', 'BIMA', '比马', 0, 1, 'ID', 0, 0, '{CC}'),
('IDBLN', 'BELAWAN', '勿拉湾', 0, 1, 'ID', 0, 0, '{CC}'),
('IDBNA', 'BENOA', '伯诺阿', 0, 1, 'ID', 0, 0, '{CC}'),
('IDBSA', 'BAGAN SI API AP', '巴眼牙比', 0, 1, 'ID', 0, 0, '{CC}'),
('IDCIR', 'CIREBON', '井里汶', 0, 1, 'ID', 0, 0, '{CC}'),
('IDDMI', 'DUMAI', '杜迈', 0, 1, 'ID', 0, 0, '{CC}'),
('IDFAK', 'FAK FAK', '法克法克', 0, 1, 'ID', 0, 0, '{CC}'),
('IDJAK', 'JAKARTA', '雅加达', 0, 1, 'ID', 0, 0, '{CC}'),
('IDKAL', 'KALIANGET', '卡利昂厄特', 0, 1, 'ID', 0, 0, '{CC}'),
('IDKET', 'KETAPANG', '吉打邦', 0, 1, 'ID', 0, 0, '{CC}'),
('INBEL', 'BELEKERI', '贝莱克里', 0, 1, 'ID', 0, 0, '{CC}'),
('INCOO', 'COONDAPOOR', '贡达布尔', 0, 1, 'ID', 0, 0, '{CC}'),
('INDJT', 'DJAKARAT', '雅加达', 0, 1, 'ID', 0, 0, '{CC}'),
('IDMEN', 'MENADO', '万鸦老', 0, 1, 'ID', 0, 0, '{CC}'),
('IDMEU', 'MEULABOH', '米拉务', 0, 1, 'ID', 0, 0, '{CC}'),
('IDPAD', 'PADANG', '巴东', 0, 1, 'ID', 0, 0, '{CC}'),
('IDPAL', 'PALEMBANG', '巨港', 0, 1, 'ID', 0, 0, '{CC}'),
('IDPAN', 'PANARUKAN', '巴那鲁干', 0, 1, 'ID', 0, 0, '{CC}'),
('IDPJG', 'PANJANG', '潘姜', 0, 1, 'ID', 0, 0, '{CC}'),
('IDPNK', 'PONTIANAK', '坤甸', 0, 1, 'ID', 0, 0, '{CC}'),
('IDPSU', 'PANGKALAN SUSU', '庞卡兰苏苏', 0, 1, 'ID', 0, 0, '{CC}'),
('IDSAB', 'SABANG(ID)', '沙璜', 0, 1, 'ID', 0, 0, '{CC}'),
('IDSAL', 'SALAWATI', '沙拉瓦蒂', 0, 1, 'ID', 0, 0, '{CC}'),
('IDSBS', 'SAMBAS', '三发', 0, 1, 'ID', 0, 0, '{CC}'),
('IDSEM', 'SEMARANG', '三宝垄', 0, 1, 'ID', 0, 0, '{CC}'),
('IDSOR', 'SORONG', '索龙', 0, 1, 'ID', 0, 0, '{CC}'),
('IDSUR', 'SURABAYA', '泗水', 0, 1, 'ID', 0, 0, '{CC}'),
('IDTAI', 'TARAKAN', '打拉根', 0, 1, 'ID', 0, 0, '{CC}'),
('IDTBN', 'TUBAN', '图班', 0, 1, 'ID', 0, 0, '{CC}'),
('IDTEL', 'TELUKBETUNG', '直落勿洞', 0, 1, 'ID', 0, 0, '{CC}'),
('IDTPR', 'TANJUNG PRIOK', '丹戒不碌', 0, 1, 'ID', 0, 0, '{CC}'),
('IDTUB', 'TANJUNG UBAN', '丹戒乌班', 0, 1, 'ID', 0, 0, '{CC}'),
('INDJA', 'DJAJAPURA', '贾贾普拉', 0, 1, 'ID', 0, 0, '{CC}'),
('INDJU', 'DJUWANA', '朱瓦纳', 0, 1, 'ID', 0, 0, '{CC}'),
('BP', 'BATAM PULAU', '', 0, 1, 'ID', 0, 0, '{CC}'),
('INBAN', 'BANDUNG', '万隆', 0, 1, 'ID', 0, 0, '{CC}'),
('TAN', 'TANJUNG EMAS PORT,SEMARANG', '', 0, 1, 'ID', 0, 0, '{CC}'),
('JK1', 'JAKARTA UTC1', '雅加达(1号码头)', 0, 1, 'ID', 0, 0, '{CC}'),
('JK2', 'JAKARTA UTC2', '雅加达(2号码头)', 0, 1, 'ID', 0, 0, '{CC}'),
('JK3', 'JAKARTA UTC3', '雅加达3号码头', 0, 1, 'ID', 0, 0, '{CC}'),
('UPG', 'UJUNG PANDANG', '乌戎潘当', 0, 1, 'ID', 0, 0, '{CC}'),
('IDJKT', 'IDJKT', '', 0, 1, 'ID', 0, 0, '{CC}'),
('IRABA', 'ABADAN', '阿巴丹', 0, 1, 'IR', 0, 0, '{CC}'),
('IRBAB', 'BANDAR ABBAS', '阿巴斯港', 0, 1, 'IR', 0, 0, '{CC}'),
('IRBKH', 'BANDAR KHOMEINI', '霍梅尼港', 0, 1, 'IR', 0, 0, '{CC}'),
('IRBMA', 'BANDAR SHAHPUR', '沙赫普尔港', 0, 1, 'IR', 0, 0, '{CC}'),
('IRBUS', 'BUSHIRE', '布什尔', 0, 1, 'IR', 0, 0, '{CC}'),
('IRKGI', 'KHARG ISLAND', '哈尔克岛', 0, 1, 'IR', 0, 0, '{CC}'),
('IRKHO', 'KHORRAMSHAHR', '霍拉姆沙赫尔', 0, 1, 'IR', 0, 0, '{CC}'),
('IDPBN', 'PANGKALAN BUN', '庞卡兰布翁', 0, 1, 'IR', 0, 0, '{CC}'),
('IQBAS', 'BASRAH', '巴士拉', 0, 1, 'IQ', 0, 0, '{CC}'),
('IQFAO', 'FAO', '法奥', 0, 1, 'IQ', 0, 0, '{CC}'),
('IQKAA', 'KHOR AL AMAYA', '豪尔艾迈耶', 0, 1, 'IQ', 0, 0, '{CC}'),
('IQUMQ', 'UMM QASR', '乌姆卡萨', 0, 1, 'IQ', 0, 0, '{CC}'),
('KWKAM', 'KHOR AL MUFATTA', '霍尔姆法塔', 0, 1, 'IQ', 0, 0, '{CC}'),
('IQRAS', 'BASRA', '巴士拉', 0, 1, 'IQ', 0, 0, '{CC}'),
('NZWES', 'WESTPORT', '韦斯特皮特', 0, 1, 'IE', 0, 0, '{CC}'),
('IECOK', 'CORK', '科克', 0, 1, 'IE', 0, 0, '{CC}'),
('IEDCN', 'DUNCANNON', '邓坎嫩', 0, 1, 'IE', 0, 0, '{CC}'),
('IEDDK', 'DUNDALK', '邓多克', 0, 1, 'IE', 0, 0, '{CC}'),
('IEDON', 'DONEGAL', '多尼戈尔', 0, 1, 'IE', 0, 0, '{CC}'),
('IEDRO', 'DROGHEDA', '德罗赫达', 0, 1, 'IE', 0, 0, '{CC}'),
('IEDUB', 'DUBLIN', '都柏林', 0, 1, 'IE', 0, 0, '{CC}'),
('IEDUL', 'DUN LAOGHAIRE', '敦劳费尔', 0, 1, 'IE', 0, 0, '{CC}'),
('IEDUN', 'DUNMORE', '邓莫尔', 0, 1, 'IE', 0, 0, '{CC}'),
('IEDVN', 'DUNGARVAN', '邓加文', 0, 1, 'IE', 0, 0, '{CC}'),
('IEFNT', 'FENIT', '费尼特', 0, 1, 'IE', 0, 0, '{CC}'),
('IEFOY', 'FOYNES', '福因斯', 0, 1, 'IE', 0, 0, '{CC}'),
('IEGAL', 'GALWAY', '戈尔韦', 0, 1, 'IE', 0, 0, '{CC}'),
('IEHOW', 'HOWTH', '霍思', 0, 1, 'IE', 0, 0, '{CC}'),
('IEKIN', 'KINSALE', '金塞尔', 0, 1, 'IE', 0, 0, '{CC}'),
('IEKLA', 'KILLALA', '基拉拉', 0, 1, 'IE', 0, 0, '{CC}'),
('IEKSH', 'KILRUSH', '基尔拉什', 0, 1, 'IE', 0, 0, '{CC}'),
('IEKGS', 'KILLYBEGS', '基利贝格斯', 0, 1, 'IE', 0, 0, '{CC}'),
('IELIM', 'LIMERICK', '利默里克', 0, 1, 'IE', 0, 0, '{CC}'),
('IEMOV', 'MOVILLE', '莫维尔', 0, 1, 'IE', 0, 0, '{CC}'),
('IENRS', 'NEW ROSS', '新罗斯', 0, 1, 'IE', 0, 0, '{CC}'),
('IEROS', 'ROSSLARE', '罗斯莱尔', 0, 1, 'IE', 0, 0, '{CC}'),
('IEVAL', 'VALENTIA', '瓦伦西亚', 0, 1, 'IE', 0, 0, '{CC}'),
('IEWAT', 'WATERFORD', '沃特福德', 0, 1, 'IE', 0, 0, '{CC}'),
('IEWIC', 'WICKLOW', '威克洛', 0, 1, 'IE', 0, 0, '{CC}'),
('IEYOU', 'YOUGHAL', '约尔', 0, 1, 'IE', 0, 0, '{CC}'),
('IEARK', 'ARKLOW', '阿克洛', 0, 1, 'IE', 0, 0, '{CC}'),
('IEBAL', 'BALTIMORE(IE)', '巴尔的摩', 0, 1, 'IE', 0, 0, '{CC}'),
('IEBAN', 'BANTRY', '班特里', 0, 1, 'IE', 0, 0, '{CC}'),
('IEBNA', 'BALLINA', '巴利纳', 0, 1, 'IE', 0, 0, '{CC}'),
('IEBUP', 'BURTON PORT', '伯顿波特', 0, 1, 'IE', 0, 0, '{CC}'),
('IECAH', 'CAHIRCIVEEN', '克尔西文', 0, 1, 'IE', 0, 0, '{CC}'),
('IRCOR', 'CORKIRELAND', '科克', 0, 1, 'IE', 0, 0, '{CC}'),
('IRBEL', 'BELFAST(IR)', '贝尔法斯特', 0, 1, 'IE', 0, 0, '{CC}'),
('CAV', 'CAVAN', '', 0, 1, 'IE', 0, 0, '{CC}'),
('ILASD', 'ASHDOD', '阿什杜德', 0, 1, 'IL', 0, 0, '{CC}'),
('ILASH', 'ASHKELON', '阿什克伦', 0, 1, 'IL', 0, 0, '{CC}'),
('ILHFA', 'HAIFA', '海法', 0, 1, 'IL', 0, 0, '{CC}'),
('ITALG', 'ALGHERO', '阿尔盖罗', 0, 1, 'IT', 0, 0, '{CC}'),
('ITBAG', 'BAGNOLI', '巴尼奥利', 0, 1, 'IT', 0, 0, '{CC}'),
('ITBAR', 'BARI', '巴里', 0, 1, 'IT', 0, 0, '{CC}'),
('ITBRI', 'BRINDISI', '布林迪西', 0, 1, 'IT', 0, 0, '{CC}'),
('ITBTA', 'BARLETTA', '巴列塔', 0, 1, 'IT', 0, 0, '{CC}'),
('ITCAG', 'CAGLIARI', '卡利亚里', 0, 1, 'IT', 0, 0, '{CC}'),
('ITANC', 'ANCONA', '安科纳', 0, 1, 'IT', 0, 0, '{CC}'),
('ITANZ', 'ANZIO', '安齐奥', 0, 1, 'IT', 0, 0, '{CC}'),
('ITAUG', 'AUGUSTA', '奥古斯塔', 0, 1, 'IT', 0, 0, '{CC}'),
('ITAVO', 'AVOLA', '阿沃拉', 0, 1, 'IT', 0, 0, '{CC}'),
('ITCAR', 'CARLOFORTE', '卡洛福泰', 0, 1, 'IT', 0, 0, '{CC}'),
('ITCAT', 'CATANIA', '卡塔尼亚', 0, 1, 'IT', 0, 0, '{CC}'),
('ITCDS', 'CAST. DI STABIA', '斯塔比亚海堡', 0, 1, 'IT', 0, 0, '{CC}'),
('ITCHI', 'CHIOGGIA', '基奥贾', 0, 1, 'IT', 0, 0, '{CC}'),
('ITCIV', 'CIVITAVECCHIA', '奇维塔韦基亚', 0, 1, 'IT', 0, 0, '{CC}'),
('ITCRE', 'CROTONE', '克罗托内', 0, 1, 'IT', 0, 0, '{CC}'),
('ITCRO', 'CATANZARO', '卡坦扎罗', 0, 1, 'IT', 0, 0, '{CC}'),
('ITFIU', 'FIUMICINO', '菲乌米奇诺', 0, 1, 'IT', 0, 0, '{CC}'),
('ITFOL', 'FOLLONICA', '福洛尼卡', 0, 1, 'IT', 0, 0, '{CC}'),
('ITGAE', 'GAETA', '加埃塔', 0, 1, 'IT', 0, 0, '{CC}'),
('ITGAI', 'GOLFO ARANCI', '阿兰奇湾城', 0, 1, 'IT', 0, 0, '{CC}'),
('ITGAL', 'GALLIPOLI', '加利波利', 0, 1, 'IT', 0, 0, '{CC}'),
('ITGEL', 'GELA', '杰拉', 0, 1, 'IT', 0, 0, '{CC}'),
('ITGOA', 'GENOA', '热那亚', 0, 1, 'IT', 0, 0, '{CC}'),
('ITIMP', 'IMPERIA', '因佩里亚', 0, 1, 'IT', 0, 0, '{CC}'),
('ITLIC', 'LICATA', '利卡塔', 0, 1, 'IT', 0, 0, '{CC}'),
('ITLMA', 'LA MADDALENA', '拉马达莱那', 0, 1, 'IT', 0, 0, '{CC}'),
('ITMAR', 'MARSALA', '马尔萨拉', 0, 1, 'IT', 0, 0, '{CC}'),
('ITMDC', 'MARINA DI CARRARA', '马里纳迪卡拉拉', 0, 1, 'IT', 0, 0, '{CC}'),
('ITMDV', 'MAZARA DEL VALL', '马扎拉德尔瓦洛', 0, 1, 'IT', 0, 0, '{CC}'),
('ITMES', 'MESSINA', '墨西拿', 0, 1, 'IT', 0, 0, '{CC}'),
('ITMIL', 'MILAZZO', '米拉佐', 0, 1, 'IT', 0, 0, '{CC}'),
('ITMLI', 'MONOPOLI', '莫诺波利', 0, 1, 'IT', 0, 0, '{CC}'),
('ITMOL', 'MOLFETTA', '莫尔费塔', 0, 1, 'IT', 0, 0, '{CC}'),
('ITNAP', 'NAPLES', '那不勒斯', 0, 1, 'IT', 0, 0, '{CC}'),
('ITOLB', 'OLBIA', '奥尔比亚', 0, 1, 'IT', 0, 0, '{CC}'),
('ITORI', 'ORISTANO', '奥里斯塔诺', 0, 1, 'IT', 0, 0, '{CC}'),
('ITPAL', 'PALERMO', '巴勒莫', 0, 1, 'IT', 0, 0, '{CC}'),
('ITPAZ', 'PORTO AZZURRO', '阿祖罗港', 0, 1, 'IT', 0, 0, '{CC}'),
('ITPEM', 'PORTO EMPEDOCLE', '恩佩多克莱港', 0, 1, 'IT', 0, 0, '{CC}'),
('ITPES', 'PESCARA', '佩斯卡拉', 0, 1, 'IT', 0, 0, '{CC}'),
('ITPFO', 'PORTO FERRAIO', '费拉约港', 0, 1, 'IT', 0, 0, '{CC}'),
('ITPIO', 'PIOMBINO', '皮翁比诺', 0, 1, 'IT', 0, 0, '{CC}'),
('ITPOZ', 'POZZUOLI', '波佐利', 0, 1, 'IT', 0, 0, '{CC}'),
('ITPRO', 'PESARO', '佩萨罗', 0, 1, 'IT', 0, 0, '{CC}'),
('ITPSO', 'PORTOSCUSO', '斯库索港', 0, 1, 'IT', 0, 0, '{CC}'),
('ITPTO', 'PORTO TORRES', '托雷斯港', 0, 1, 'IT', 0, 0, '{CC}'),
('ITRAV', 'RAVENNA', '腊万纳', 0, 1, 'IT', 0, 0, '{CC}'),
('ITSAL', 'SALERNO', '萨莱诺', 0, 1, 'IT', 0, 0, '{CC}'),
('ITSAR', 'SARROCH', '萨罗奇', 0, 1, 'IT', 0, 0, '{CC}'),
('ITSAV', 'SAVONA', '萨沃纳', 0, 1, 'IT', 0, 0, '{CC}'),
('ITRMA', 'RIO MARINA', '里奥马里纳', 0, 1, 'IT', 0, 0, '{CC}'),
('ITSPE', 'LA SPEZIA', '拉斯佩齐亚', 0, 1, 'IT', 0, 0, '{CC}'),
('ITSRE', 'SAN REMO', '圣雷莫', 0, 1, 'IT', 0, 0, '{CC}'),
('ITTAL', 'TALAMONE', '塔拉莫内', 0, 1, 'IT', 0, 0, '{CC}'),
('ITTAR', 'TARANTO', '塔兰托', 0, 1, 'IT', 0, 0, '{CC}'),
('ITTDG', 'TORRE DEL GRECO', '托雷德尔格雷科', 0, 1, 'IT', 0, 0, '{CC}'),
('ITTRA', 'TRAPANI', '特拉帕尼', 0, 1, 'IT', 0, 0, '{CC}'),
('ITTRI', 'TRIESTE', '的里雅斯特', 0, 1, 'IT', 0, 0, '{CC}'),
('ITVEN', 'VENICE', '威尼斯', 0, 1, 'IT', 0, 0, '{CC}'),
('DKRON', 'RONNE', '伦讷', 0, 1, 'IT', 0, 0, '{CC}'),
('LEGHO', 'LEGHORN', '莱戈恩', 0, 1, 'IT', 0, 0, '{CC}'),
('ITROM', 'ROMA', '罗马', 0, 1, 'IT', 0, 0, '{CC}'),
('GENOV', 'GENOVA', '热那亚', 0, 1, 'IT', 0, 0, '{CC}'),
('NAPOL', 'NAPOLI', '那波利', 0, 1, 'IT', 0, 0, '{CC}'),
('ITLIV', 'LIVORNO', '里窝那', 0, 1, 'IT', 0, 0, '{CC}'),
('ITMLA', 'MILANO', '米兰', 0, 1, 'IT', 0, 0, '{CC}'),
('ITTOR', 'TORINO', '', 0, 1, 'IT', 0, 0, '{CC}'),
('ITVER', 'VERONA', '', 0, 1, 'IT', 0, 0, '{CC}'),
('ITCMO', 'COMO', '科莫', 0, 1, 'IT', 0, 0, '{CC}'),
('ITGE', 'GENOA PORT,ITALY', '热那亚', 0, 1, 'IT', 0, 0, '{CC}'),
('IT-PO', 'GENOVA PORT-ITALY', '热那亚', 0, 1, 'IT', 0, 0, '{CC}'),
('NOVA', 'GENOVA PORT', '热那亚', 0, 1, 'IT', 0, 0, '{CC}'),
('BIE', 'BIELLA', '', 0, 1, 'IT', 0, 0, '{CC}'),
('FLOR', 'FLORENCE', '', 0, 1, 'IT', 0, 0, '{CC}'),
('TUR', 'TURIN', '', 0, 1, 'IT', 0, 0, '{CC}'),
('PRA', 'PRATO', '普拉托', 0, 1, 'IT', 0, 0, '{CC}'),
('BOLO', 'BOLOGNA', '', 0, 1, 'IT', 0, 0, '{CC}'),
('41', 'VENICE,ITALY', '威尼斯', 0, 1, 'IT', 0, 0, '{CC}'),
('JMRCP', 'ROCKY POINT', '罗基波因特', 0, 1, 'JM', 0, 0, '{CC}'),
('JMBLR', 'BLACK RIVER', '布莱克河', 0, 1, 'JM', 0, 0, '{CC}'),
('JMBLU', 'BLUEFIELDS(JM)', '布卢菲尔兹', 0, 1, 'JM', 0, 0, '{CC}'),
('JMFAL', 'FALMOUTH(JM)', '法尔茅斯', 0, 1, 'JM', 0, 0, '{CC}'),
('JMKIN', 'KINGSTON(JM)', '金斯敦', 0, 1, 'JM', 0, 0, '{CC}'),
('JMLUC', 'LUCEA', '卢西', 0, 1, 'JM', 0, 0, '{CC}'),
('JMMOB', 'MONTEGO BAY', '蒙特哥湾', 0, 1, 'JM', 0, 0, '{CC}'),
('JMORB', 'OCHO RIOS BAY', '奥乔里奥斯湾', 0, 1, 'JM', 0, 0, '{CC}'),
('JMPAN', 'PORT ANTONIO', '安东尼奥港', 0, 1, 'JM', 0, 0, '{CC}'),
('JMPES', 'PORT ESQUIVEL', '埃斯基韦尔港', 0, 1, 'JM', 0, 0, '{CC}'),
('JMPKA', 'PORT KAISER', '凯泽港', 0, 1, 'JM', 0, 0, '{CC}'),
('JMPMO', 'PORT MORANT', '莫兰特港', 0, 1, 'JM', 0, 0, '{CC}'),
('JMPRO', 'PORT ROYAL(JM)', '罗亚尔港', 0, 1, 'JM', 0, 0, '{CC}'),
('JPAIO', 'AIOI', '相生', 0, 1, 'JP', 0, 0, '{CC}'),
('JPAKI', 'AKITA', '秋田', 0, 1, 'JP', 0, 0, '{CC}'),
('JPAKW', 'AKO WAN', '赤穗湾', 0, 1, 'JP', 0, 0, '{CC}'),
('JPAIN', 'AINOURA', '相浦', 0, 1, 'JP', 0, 0, '{CC}'),
('JPAMA', 'AMAGASAKI', '尼崎', 0, 1, 'JP', 0, 0, '{CC}'),
('JPAOM', 'AOMORI', '青森', 0, 1, 'JP', 0, 0, '{CC}'),
('JPATS', 'ATSUMI', '渥美', 0, 1, 'JP', 0, 0, '{CC}'),
('JPCBA', 'CHIBA', '千叶', 0, 1, 'JP', 0, 0, '{CC}'),
('JPCHI', 'CHITA', '知多', 0, 1, 'JP', 0, 0, '{CC}'),
('JPENA', 'ENA', '江名', 0, 1, 'JP', 0, 0, '{CC}'),
('JPETA', 'ETAJIMA', '江田岛', 0, 1, 'JP', 0, 0, '{CC}'),
('JPFKA', 'FUKUOKA', '福冈', 0, 1, 'JP', 0, 0, '{CC}'),
('JPFUK', 'FUKUYAMA', '福山', 0, 1, 'JP', 0, 0, '{CC}'),
('JPFUS', 'FUSHIKI', '伏木', 0, 1, 'JP', 0, 0, '{CC}'),
('JPHAC', 'HACHINOHE', '八户', 0, 1, 'JP', 0, 0, '{CC}'),
('JPHAK', 'HAKODATE', '函馆', 0, 1, 'JP', 0, 0, '{CC}'),
('JPHIA', 'HIAGARI', '日明', 0, 1, 'JP', 0, 0, '{CC}'),
('JPHIT', 'HITACHI', '日立', 0, 1, 'JP', 0, 0, '{CC}'),
('JPHMA', 'HIROSHIMA', '广岛', 0, 1, 'JP', 0, 0, '{CC}'),
('JPHOS', 'HOSOSHIMA', '细岛', 0, 1, 'JP', 0, 0, '{CC}'),
('JPHSU', 'HAMAMATSU', '滨松', 0, 1, 'JP', 0, 0, '{CC}'),
('JPHTA', 'HIROHATA', '广田', 0, 1, 'JP', 0, 0, '{CC}'),
('JPIMA', 'IMABARI', '今治', 0, 1, 'JP', 0, 0, '{CC}'),
('JPINN', 'INNOSHIMA', '因岛', 0, 1, 'JP', 0, 0, '{CC}'),
('JPISH', 'ISHINOMAKI', '石卷', 0, 1, 'JP', 0, 0, '{CC}'),
('JPIWA', 'IWAKUNI', '岩国', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKAG', 'KAGOSHIMA', '鹿儿岛', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKAI', 'KAINAN', '海南', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKAK', 'KAKOGAWA', '加古川', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKAM', 'KAMAISHI', '釜石', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKAW', 'KAWASAKI', '川崎', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKII', 'KIIRE', '喜入', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKIK', 'KIKUMA', '菊间', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKIN', 'KINUURA', '衣浦', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKIS', 'KIMITSU', '君津', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKIT', 'KITAKYUSHU', '北九州', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKMA', 'KASHIMA', '鹿岛', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKOB', 'KOBE', '神户', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKOC', 'KOCHI', '高知', 0, 1, 'JP', 0, 0, '{CC}'),
('JPSHI', 'SHIMONOSEKI', '下关', 0, 1, 'JP', 0, 0, '{CC}'),
('JPSKI', 'SAKAI', '棵', 0, 1, 'JP', 0, 0, '{CC}'),
('JPSSU', 'SHIMOTSU', '下津', 0, 1, 'JP', 0, 0, '{CC}'),
('JPSTA', 'SAKATA', '洒田', 0, 1, 'JP', 0, 0, '{CC}'),
('JPSZU', 'SHIMIZU', '清水', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTAM', 'TAMANO', '玉野', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTAN', 'TANABE', '田边', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTKU', 'TAKAMATSU', '高松', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTMI', 'TSUKUMI', '津久见', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTOA', 'TOKUYAMA', '德山', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTOB', 'TOBATA', '户*', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTOK', 'TOKYO', '东京', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTOM', 'TOMAKOMAI', '苫小牧', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTON', 'TONDA', '富田', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTOS', 'TOYAMA SINKO', '富山新港', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTOY', 'TOYOHASHI', '丰桥', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTSU', 'TSU', '津', 0, 1, 'JP', 0, 0, '{CC}'),
('JPTYA', 'TOYAMA', '富山', 0, 1, 'JP', 0, 0, '{CC}'),
('JPUBE', 'UBE', '宇部', 0, 1, 'JP', 0, 0, '{CC}'),
('JPUNO', 'UNO', '宇野', 0, 1, 'JP', 0, 0, '{CC}'),
('JPWAK', 'WAKKANAI', '稚内', 0, 1, 'JP', 0, 0, '{CC}'),
('JPWKA', 'WAKAYAMA', '和歌山', 0, 1, 'JP', 0, 0, '{CC}'),
('JPWKU', 'WAKAMATSU', '若松', 0, 1, 'JP', 0, 0, '{CC}'),
('JPYAW', 'YAWATA', '八幡', 0, 1, 'JP', 0, 0, '{CC}'),
('JPYCI', 'YOKKAICHI', '四日市', 0, 1, 'JP', 0, 0, '{CC}'),
('JPYKA', 'YOKOSUKA', '横须贺', 0, 1, 'JP', 0, 0, '{CC}'),
('JPYOK', 'YOKOHAMA', '横滨', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKOE', 'KAWANOE', '川之江', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKOK', 'KOKURA', '小仓', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKOM', 'KOMATSUSHIMA', '小松岛', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKON', 'KONOSHIMA', '神岛', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKUD', 'KUDAMATSU', '下松', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKUI', 'KUROSAKI', '黑崎', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKUR', 'KURE', '吴港', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKUS', 'KUSHIRO', '钏路', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKWA', 'KANOKAWA', '鹿川', 0, 1, 'JP', 0, 0, '{CC}'),
('JPKWN', 'KIN WAN', '金湾', 0, 1, 'JP', 0, 0, '{CC}'),
('JPMAI', 'MAIZURU', '舞鹤', 0, 1, 'JP', 0, 0, '{CC}'),
('JPMAK', 'MAKIYAMA', '牧山', 0, 1, 'JP', 0, 0, '{CC}'),
('JPMIZ', 'MIZUSHIMA', '水岛', 0, 1, 'JP', 0, 0, '{CC}'),
('JPMKE', 'MIIKE', '三池', 0, 1, 'JP', 0, 0, '{CC}'),
('JPMKO', 'MIYAKO', '宫古', 0, 1, 'JP', 0, 0, '{CC}'),
('JPMMA', 'MATSUYAMA', '松山', 0, 1, 'JP', 0, 0, '{CC}'),
('JPMOJ', 'MOJI', '门司', 0, 1, 'JP', 0, 0, '{CC}'),
('JPMUR', 'MURORAN', '室兰', 0, 1, 'JP', 0, 0, '{CC}'),
('JPNAG', 'NAGOYA', '名古屋', 0, 1, 'JP', 0, 0, '{CC}'),
('JPNAH', 'NAHA', '那霸', 0, 1, 'JP', 0, 0, '{CC}'),
('JPNAO', 'NAOETSU', '直江津', 0, 1, 'JP', 0, 0, '{CC}'),
('JPNHI', 'NIIGATA', '新泻', 0, 1, 'JP', 0, 0, '{CC}'),
('JPNKI', 'NAGASAKI', '长崎', 0, 1, 'JP', 0, 0, '{CC}'),
('JPNMA', 'NIIHAMA', '新居滨', 0, 1, 'JP', 0, 0, '{CC}'),
('JPOFU', 'OFUNATO', '大船渡', 0, 1, 'JP', 0, 0, '{CC}'),
('JPOIT', 'OITA', '大分', 0, 1, 'JP', 0, 0, '{CC}'),
('JPONA', 'ONAHAMA', '小名滨', 0, 1, 'JP', 0, 0, '{CC}'),
('JPOSK', 'OSAKA', '大阪', 0, 1, 'JP', 0, 0, '{CC}'),
('JPOTA', 'OTARU', '小樽', 0, 1, 'JP', 0, 0, '{CC}'),
('JPSBO', 'SASEBO', '佐世保', 0, 1, 'JP', 0, 0, '{CC}'),
('JPSDE', 'SAKAIDE', '坂出', 0, 1, 'JP', 0, 0, '{CC}'),
('JPSDS', 'SENDAI SI', '川内市', 0, 1, 'JP', 0, 0, '{CC}'),
('JPSEN', 'SENDAI', '仙台', 0, 1, 'JP', 0, 0, '{CC}'),
('JAHAK', 'HAKATA', '博多', 0, 1, 'JP', 0, 0, '{CC}'),
('JAIRY', 'IMABARY', '今治', 0, 1, 'JP', 0, 0, '{CC}'),
('JANAU', 'NAUETSU', '直江津', 0, 1, 'JP', 0, 0, '{CC}'),
('JAMRA', 'MAIZURA', '舞鹤', 0, 1, 'JP', 0, 0, '{CC}'),
('JAPAN', 'OSAKA,JAPAN', '大阪', 0, 1, 'JP', 0, 0, '{CC}'),
('JASAI', 'SAIPN', '塞班', 0, 1, 'JP', 0, 0, '{CC}'),
('SEN', 'SENBOKU', '', 0, 1, 'JP', 0, 0, '{CC}'),
('PTA', 'PTAUR', '小撙', 0, 1, 'JP', 0, 0, '{CC}'),
('KUMO', 'KUMAMOTO', '熊本', 0, 1, 'JP', 0, 0, '{CC}'),
('SAP', 'SAPPORO', '扎幌', 0, 1, 'JP', 0, 0, '{CC}'),
('TSR', 'TSRUGA', '', 0, 1, 'JP', 0, 0, '{CC}'),
('JOAQA', 'AQABA', '亚喀巴', 0, 1, 'JO', 0, 0, '{CC}'),
('AQB', 'AQABA FREEZONE', '亚客巴(F.Z)', 0, 1, 'JO', 0, 0, '{CC}'),
('KHKPS', 'KOMPONG SOM', '磅逊', 0, 1, 'KH', 0, 0, '{CC}'),
('KHPPH', 'PHNOM-PENH', '金边', 0, 1, 'KH', 0, 0, '{CC}'),
('KASIH', 'SIHANOUKEVILLE CAMBODIA', '西哈努克', 0, 1, 'KH', 0, 0, '{CC}'),
('KAKEM', 'KEMPONGSOM', '旁逊', 0, 1, 'KH', 0, 0, '{CC}'),
('KAALM', 'ALMATY', '', 0, 1, 'KA', 0, 0, '{CC}'),
('KELAM', 'LAMU', '拉穆', 0, 1, 'KE', 0, 0, '{CC}'),
('KEMAL', 'MALINDI', '马林迪', 0, 1, 'KE', 0, 0, '{CC}'),
('KEMOM', 'MOMBASA', '蒙巴萨', 0, 1, 'KE', 0, 0, '{CC}'),
('KWKUW', 'KUWAIT', '科威特', 0, 1, 'KW', 0, 0, '{CC}'),
('KWMAA', 'MENA AL AHMADI', '米纳艾哈迈迪', 0, 1, 'KW', 0, 0, '{CC}'),
('KWMAB', 'MENA ABDULLA', '米纳阿卜杜拉', 0, 1, 'KW', 0, 0, '{CC}'),
('KWSHU', 'SHUAIBA', '舒艾拜', 0, 1, 'KW', 0, 0, '{CC}'),
('LVRIX', 'RIGA', '里加', 0, 1, 'LV', 0, 0, '{CC}'),
('LVVHT', 'VENTSPILS', '文茨皮尔斯', 0, 1, 'LV', 0, 0, '{CC}'),
('LBBRT', 'BEIRUT', '贝鲁特', 0, 1, 'LB', 0, 0, '{CC}'),
('LBCHE', 'CHEKKA', '舍卡', 0, 1, 'LB', 0, 0, '{CC}'),
('LBJOU', 'JOUNIEH', '朱尼耶', 0, 1, 'LB', 0, 0, '{CC}'),
('LBSID', 'SIDON', '西顿', 0, 1, 'LB', 0, 0, '{CC}'),
('LBSOU', 'SOUR', '苏尔', 0, 1, 'LB', 0, 0, '{CC}'),
('LBTRI', 'TRIPOLI(LB)', '的黎波里', 0, 1, 'LB', 0, 0, '{CC}'),
('LRBUC', 'BUCHANAN(LR)', '布坎南', 0, 1, 'LR', 0, 0, '{CC}'),
('LRCPA', 'CAPE PALMAS', '帕尔马斯角', 0, 1, 'LR', 0, 0, '{CC}'),
('LRGBA', 'GRAND BASSA', '大巴萨', 0, 1, 'LR', 0, 0, '{CC}'),
('LRRCS', 'RIVER CESS', '里弗塞斯', 0, 1, 'LR', 0, 0, '{CC}'),
('LRMIA', 'MONROVIA', '蒙罗维亚', 0, 1, 'LR', 0, 0, '{CC}'),
('LYBEN', 'BENGHAZI', '班加西', 0, 1, 'LY', 0, 0, '{CC}'),
('LYDER', 'DERNA', '德尔纳', 0, 1, 'LY', 0, 0, '{CC}'),
('LYESR', 'ES SIDER', '锡德尔', 0, 1, 'LY', 0, 0, '{CC}'),
('LYMEB', 'MARSA EL BREGA', '马萨勃利加', 0, 1, 'LY', 0, 0, '{CC}'),
('LYMIS', 'MISURATA', '米苏拉塔区', 0, 1, 'LY', 0, 0, '{CC}'),
('LYRLA', 'RAS LANUF', '拉斯拉努夫', 0, 1, 'LY', 0, 0, '{CC}'),
('LYTOB', 'TOBRUK', '图卜鲁格', 0, 1, 'LY', 0, 0, '{CC}'),
('LYTRI', 'TRIPOLI(LY)', '的黎波里', 0, 1, 'LY', 0, 0, '{CC}'),
('LYZUE', 'ZUETINA', '祖埃提纳', 0, 1, 'LY', 0, 0, '{CC}'),
('LTKLA', 'KLAIPEDA', '克莱佩达', 0, 1, 'LT', 0, 0, '{CC}'),
('LIVIL', 'VILNIUS', '维尔纽斯', 0, 1, 'LT', 0, 0, '{CC}'),
('LIKLA', 'KLAPEIDA', '', 0, 1, 'LT', 0, 0, '{CC}');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('LIKDA', 'KLAPEIDA', '', 0, 1, 'LT', 0, 0, '{CC}'),
('LUXEM', 'LUXEMBOURG', '卢森堡', 0, 1, 'LU', 0, 0, '{CC}'),
('ARDIA', 'DIAMANTE', '迪亚曼泰', 0, 1, 'MG', 0, 0, '{CC}'),
('MGANA', 'ANALALAVA', '阿纳拉拉瓦', 0, 1, 'MG', 0, 0, '{CC}'),
('MGANT', 'ANTSIRANANA', '安齐拉纳纳', 0, 1, 'MG', 0, 0, '{CC}'),
('MGFAR', 'FARAFANGANA', '法拉凡加纳', 0, 1, 'MG', 0, 0, '{CC}'),
('MGAHA', 'ANTALAHA', '安塔拉哈', 0, 1, 'MG', 0, 0, '{CC}'),
('MGFDA', 'Fort Dauphin', '多凡堡', 0, 1, 'MG', 0, 0, '{CC}'),
('MGMAH', 'MAJUNGA', '马任加', 0, 1, 'MG', 0, 0, '{CC}'),
('MGMAR', 'MAROANTSETRA', '马鲁安采特拉', 0, 1, 'MG', 0, 0, '{CC}'),
('MGMBE', 'MOROMBE', '穆龙贝', 0, 1, 'MG', 0, 0, '{CC}'),
('MGMRA', 'MANAKARA', '马纳卡拉', 0, 1, 'MG', 0, 0, '{CC}'),
('MGMRY', 'MANANJARY', '马南扎里', 0, 1, 'MG', 0, 0, '{CC}'),
('MGMVA', 'MORONDAVA', '穆龙达瓦', 0, 1, 'MG', 0, 0, '{CC}'),
('MGNBE', 'NOSY BE', '贝岛', 0, 1, 'MG', 0, 0, '{CC}'),
('MGSAM', 'SAMBAVA', '桑巴瓦', 0, 1, 'MG', 0, 0, '{CC}'),
('MGTOA', 'TOAMASINA', '图阿马西纳', 0, 1, 'MG', 0, 0, '{CC}'),
('MGTOL', 'TOLEARY', '图莱亚尔', 0, 1, 'MG', 0, 0, '{CC}'),
('MGTRO', 'TOLAGNARO', '托拉纳罗', 0, 1, 'MG', 0, 0, '{CC}'),
('MATAM', 'TAMATAVE', '塔马塔夫', 0, 1, 'MG', 0, 0, '{CC}'),
('NOS', 'NOSSI-BE', '诺西比', 0, 1, 'MG', 0, 0, '{CC}'),
('MABLA', 'BLANTYRE', '', 0, 1, 'MA', 0, 0, '{CC}'),
('MALIL', 'LILONGWE', '利朗维', 0, 1, 'MA', 0, 0, '{CC}'),
('MYBGD', 'BAGAN DATOH', '巴眼拿督', 0, 1, 'MY', 0, 0, '{CC}'),
('MYBIN', 'BINATANG', '比那唐', 0, 1, 'MY', 0, 0, '{CC}'),
('MYBTP', 'BATU PAHAT', '巴株巴辖', 0, 1, 'MY', 0, 0, '{CC}'),
('MYBTU', 'BINTULU', '民都鲁', 0, 1, 'MY', 0, 0, '{CC}'),
('MYBUT', 'BUTTERWORTH', '巴特沃思', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKOB', 'KOTA BHARU', '哥打巴鲁', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKOK', 'KOTA KINABALU', '亚庇', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKPA', 'KUALA PAHANG', '瓜拉彭亨', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKRO', 'KUALA ROMPIN', '瓜拉弄宾', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKSE', 'KUALA SELANGOR', '瓜拉雪兰莪', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKSU', 'KUALA SUAI', '瓜拉苏埃', 0, 1, 'MY', 0, 0, '{CC}'),
('MYGEO', 'GEORGETOWN(MY)', '乔治敦', 0, 1, 'MY', 0, 0, '{CC}'),
('MYJOB', 'JOHORE BAHRU', '柔佛巴鲁', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKER', 'KERTEH', '居茶', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKTR', 'KUALA TRENGGANU', '瓜拉丁加奴', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKUA', 'KUANTAN', '关丹', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKUC', 'KUCHING', '古晋', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKUD', 'KUDAT', '古达', 0, 1, 'MY', 0, 0, '{CC}'),
('MYKUN', 'KUNAK', '库纳克', 0, 1, 'MY', 0, 0, '{CC}'),
('MYLAB', 'LABUAN', '拉布安', 0, 1, 'MY', 0, 0, '{CC}'),
('MYLAD', 'LAHAD DATU', '拉哈达图', 0, 1, 'MY', 0, 0, '{CC}'),
('MYLAW', 'LAWAS', '拉瓦斯', 0, 1, 'MY', 0, 0, '{CC}'),
('MYLIM', 'LIMBANG', '林邦', 0, 1, 'MY', 0, 0, '{CC}'),
('MYLUM', 'LUMUT(MY)', '卢穆特', 0, 1, 'MY', 0, 0, '{CC}'),
('MYMEL', 'MELAKA', '马六甲', 0, 1, 'MY', 0, 0, '{CC}'),
('MYPDI', 'PORT DICKSON', '波德申', 0, 1, 'MY', 0, 0, '{CC}'),
('MYPEN', 'PENANG', '槟城', 0, 1, 'MY', 0, 0, '{CC}'),
('MYPKE', 'PORT KELANG', '巴生港', 0, 1, 'MY', 0, 0, '{CC}'),
('MYMIR', 'MIRI', '米里', 0, 1, 'MY', 0, 0, '{CC}'),
('MYPAG', 'PASIR GUDANG', '帕西古当', 0, 1, 'MY', 0, 0, '{CC}'),
('MYPRI', 'PRAI', '布莱', 0, 1, 'MY', 0, 0, '{CC}'),
('MYSAN', 'SANDAKAN', '山打根', 0, 1, 'MY', 0, 0, '{CC}'),
('MYSAR', 'SARIKEI', '泗里奎', 0, 1, 'MY', 0, 0, '{CC}'),
('MYSEM', 'SEMPORNA', '仙本那', 0, 1, 'MY', 0, 0, '{CC}'),
('MYSIB', 'SIBU', '泗务', 0, 1, 'MY', 0, 0, '{CC}'),
('MYTAW', 'TAWAU', '斗湖', 0, 1, 'MY', 0, 0, '{CC}'),
('MYTJM', 'TANJONG MANI', '丹章马尼', 0, 1, 'MY', 0, 0, '{CC}'),
('MYWAB', 'WALLANCE BAY', '哗拉司贝', 0, 1, 'MY', 0, 0, '{CC}'),
('MLXY', 'KUALA LUMPUR CITY LIMIT', '吉隆坡', 0, 1, 'MY', 0, 0, '{CC}'),
('MALE', 'MALE', '马累', 0, 1, 'MV', 0, 0, '{CC}'),
('MABAM', 'BAMAKO', '巴马科', 0, 1, 'ML', 0, 0, '{CC}'),
('MTVAL', 'VALLETTA', '瓦莱塔', 0, 1, 'MT', 0, 0, '{CC}'),
('MTMAL', 'MALTA', '马耳他', 0, 1, 'MT', 0, 0, '{CC}'),
('MUPLO', 'PORT LOUIS', '路易港', 0, 1, 'MU', 0, 0, '{CC}'),
('ARENS', 'ENSENADA(AR)', '恩塞纳达', 0, 1, 'MX', 0, 0, '{CC}'),
('MEMEL', 'MELILLA', '梅利利亚', 0, 1, 'MX', 0, 0, '{CC}'),
('MXACA', 'ACAPULCO', '阿卡普尔科', 0, 1, 'MX', 0, 0, '{CC}'),
('MXALT', 'ALTAMIRA(MX)', '阿尔塔米拉', 0, 1, 'MX', 0, 0, '{CC}'),
('MXALV', 'ALVARADO', '阿尔瓦拉多', 0, 1, 'MX', 0, 0, '{CC}'),
('MXCAM', 'CAMPECHE', '坎佩切', 0, 1, 'MX', 0, 0, '{CC}'),
('MXCAT', 'CAYO ARCAS', '阿卡斯群岛码头', 0, 1, 'MX', 0, 0, '{CC}'),
('MXCDC', 'CIUDAD DEL CARM', '卡门城', 0, 1, 'MX', 0, 0, '{CC}'),
('MXCOA', 'COATZACOALCOS', '夸察夸尔科斯', 0, 1, 'MX', 0, 0, '{CC}'),
('MXENS', 'ENSENADA', '恩塞纳达（墨）', 0, 1, 'MX', 0, 0, '{CC}'),
('MXMIN', 'MINATITLAN', '米纳蒂特兰', 0, 1, 'MX', 0, 0, '{CC}'),
('MXPRO', 'PROGRESS', '普罗格雷索', 0, 1, 'MX', 0, 0, '{CC}'),
('MXSRO', 'SANTA ROSALIA', '圣罗萨利亚', 0, 1, 'MX', 0, 0, '{CC}'),
('MXTOP', 'TOPOLOBAMPO', '托波洛班波', 0, 1, 'MX', 0, 0, '{CC}'),
('MXTUX', 'TUXPAN', '图斯潘', 0, 1, 'MX', 0, 0, '{CC}'),
('MXSAC', 'SALINA CRUZ', '萨利纳克鲁斯', 0, 1, 'MX', 0, 0, '{CC}'),
('MXVER', 'VERACRUZ', '韦拉克鲁斯', 0, 1, 'MX', 0, 0, '{CC}'),
('MEAGU', 'AGUASCALIENTES', '阿瓜斯卡连特斯', 0, 1, 'MX', 0, 0, '{CC}'),
('MECAN', 'CANCUN', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MECEL', 'CELAYA', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MECIU', 'CIUDAD VICTORIA', '维多利亚城', 0, 1, 'MX', 0, 0, '{CC}'),
('MECUE', 'CUERNAVACA', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MECUL', 'CULIACAN', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEDUR', 'DURANGO', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEFRE', 'FRESNILLO', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEGUA', 'GUADALAJARA,MEXICO', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEGTO', 'GUANAJUATO', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEHER', 'HERMOSILLO', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEJUA', 'JUAREZ', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MELEO', 'LEON', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MELOS', 'LOS MOCHIS', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEMAT', 'MATAMOROS', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEMEX', 'MEXICALI', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEMCO', 'MEXICO CITY', '墨西哥城', 0, 1, 'MX', 0, 0, '{CC}'),
('MEMON', 'MONCLOVA', '蒙克洛瓦', 0, 1, 'MX', 0, 0, '{CC}'),
('MEMEY', 'MONTERREY', '蒙特雷', 0, 1, 'MX', 0, 0, '{CC}'),
('MEMOR', 'MORELIA', '莫雷利亚', 0, 1, 'MX', 0, 0, '{CC}'),
('MEMOT', 'MOTUL', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MENOG', 'NOGALES', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MENUE', 'NUEVO LAREDO', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEPRO', 'PROGRESO', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEPUE', 'PUEBLA', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEPTO', 'PUERTO MORELOS', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MEQUE', 'QUERETARO', '克雷塔罗', 0, 1, 'MX', 0, 0, '{CC}'),
('MEREY', 'REYNOSA', '雷诺萨', 0, 1, 'MX', 0, 0, '{CC}'),
('MESAL', 'SALINA CRUZ', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MESLO', 'SALTILLO', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MESAN', 'SAN FRANCISCO(MEXICO)', '圣弗朗西斯科', 0, 1, 'MX', 0, 0, '{CC}'),
('MESSI', 'SAN LUIS POTOSI', '', 0, 1, 'MX', 0, 0, '{CC}'),
('METAM', 'TAMPICO', '坦皮克', 0, 1, 'MX', 0, 0, '{CC}'),
('METIJ', 'TIJUANA', '', 0, 1, 'MX', 0, 0, '{CC}'),
('METOL', 'TOLUCA', '托卢卡', 0, 1, 'MX', 0, 0, '{CC}'),
('TMETO', 'TORREON', '', 0, 1, 'MX', 0, 0, '{CC}'),
('MAME', 'MANZANILLO,MEXICO', '曼萨尼隆', 0, 1, 'MX', 0, 0, '{CC}'),
('CDJ', 'CD JUAREZ', '', 0, 1, 'MX', 0, 0, '{CC}'),
('CECEU', 'CEUTA', '休达', 0, 1, 'MA', 0, 0, '{CC}'),
('MAMOH', 'MOHAMMEDIA', '穆罕默迪耶', 0, 1, 'MA', 0, 0, '{CC}'),
('MARBT', 'RABAT', '拉巴特', 0, 1, 'MA', 0, 0, '{CC}'),
('MASAF', 'SAFI', '萨菲', 0, 1, 'MA', 0, 0, '{CC}'),
('MATAN', 'TANGIER', '丹吉尔', 0, 1, 'MA', 0, 0, '{CC}'),
('MATAR', 'TARFAYA', '塔尔法亚', 0, 1, 'MA', 0, 0, '{CC}'),
('MAAGA', 'AGADIR', '阿加迪尔', 0, 1, 'MA', 0, 0, '{CC}'),
('MACAS', 'CASABLANCA', '卡萨布兰卡', 0, 1, 'MA', 0, 0, '{CC}'),
('MAEJA', 'EL JADIDA', '贾迪达', 0, 1, 'MA', 0, 0, '{CC}'),
('MAESS', 'ESSAOUIRA', '索维拉', 0, 1, 'MA', 0, 0, '{CC}'),
('MAKEN', 'KENITRA', '盖尼特拉', 0, 1, 'MA', 0, 0, '{CC}'),
('MALAR', 'LARACHE', '拉腊什', 0, 1, 'MA', 0, 0, '{CC}'),
('MZANE', 'ANTONIO ENES', '安托尼奥埃尼什', 0, 1, 'MZ', 0, 0, '{CC}'),
('MZBRA', 'BEIRA', '贝拉', 0, 1, 'MZ', 0, 0, '{CC}'),
('MZCDE', 'CHINDE', '欣代', 0, 1, 'MZ', 0, 0, '{CC}'),
('MZIBO', 'IBO', '伊博', 0, 1, 'MZ', 0, 0, '{CC}'),
('MZINH', 'INHAMBANE', '伊尼扬巴内', 0, 1, 'MZ', 0, 0, '{CC}'),
('MZMAP', 'MAPUTO', '马普托', 0, 1, 'MZ', 0, 0, '{CC}'),
('MZMOC', 'MOCIMBOA DA PRAIA', '莫辛布瓦达普拉亚 ', 0, 1, 'MZ', 0, 0, '{CC}'),
('MZMOM', 'MOMA', '莫马', 0, 1, 'MZ', 0, 0, '{CC}'),
('MZMOZ', 'MOZAMBIQUE', '莫桑比克', 0, 1, 'MZ', 0, 0, '{CC}'),
('MZNAC', 'NACALA', '纳卡拉', 0, 1, 'MZ', 0, 0, '{CC}'),
('MZQUE', 'QUELIMANE', '克利马内', 0, 1, 'MZ', 0, 0, '{CC}'),
('MOMUT', 'MUTARE', '', 0, 1, 'MZ', 0, 0, '{CC}'),
('MMMGI', 'MERGUI', '墨吉', 0, 1, 'MM', 0, 0, '{CC}'),
('MMSAN', 'SANDOWAY', '山多威', 0, 1, 'MM', 0, 0, '{CC}'),
('MMTAV', 'TAVOY', '土瓦', 0, 1, 'MM', 0, 0, '{CC}'),
('MMTEN', 'TENASSERIM', '德林达伊', 0, 1, 'MM', 0, 0, '{CC}'),
('NALUD', 'LUDERITZ', '卢德立次', 0, 1, 'NA', 0, 0, '{CC}'),
('NAWVB', 'WALVIS BAY', '鲸湾港', 0, 1, 'NA', 0, 0, '{CC}'),
('NAWAY', 'WAIVIS BAY', '沃尔维斯港', 0, 1, 'NA', 0, 0, '{CC}'),
('KAT', 'KATHMANDU', '加德满都', 0, 1, 'NP', 0, 0, '{CC}'),
('NLAIK', 'AIKMAAR', '阿尔克马', 0, 1, 'NL', 0, 0, '{CC}'),
('NLAMS', 'AMSTERDAM', '阿姆斯特丹', 0, 1, 'NL', 0, 0, '{CC}'),
('NLARN', 'ARNHEM', '阿纳姆', 0, 1, 'NL', 0, 0, '{CC}'),
('NLBRO', 'BROUWERSHAVEN', '布劳沃斯港', 0, 1, 'NL', 0, 0, '{CC}'),
('NLDEL', 'DELFZIJL', '德尔夫寄尔', 0, 1, 'NL', 0, 0, '{CC}'),
('NLDOR', 'DORDRECHT', '多德雷赫特', 0, 1, 'NL', 0, 0, '{CC}'),
('NLGRO', 'GRONINGEN', '格罗宁根', 0, 1, 'NL', 0, 0, '{CC}'),
('NLHAR', 'HARLINGEN', '哈灵根', 0, 1, 'NL', 0, 0, '{CC}'),
('NLHOH', 'HOOK OF HOLLAND', '荷兰角', 0, 1, 'NL', 0, 0, '{CC}'),
('NLMAS', 'MAASSLUIS', '马斯莱斯', 0, 1, 'NL', 0, 0, '{CC}'),
('NLMID', 'MIDDELBURG', '米德尔堡', 0, 1, 'NL', 0, 0, '{CC}'),
('NLROT', 'ROTTERDAM', '鹿特丹', 0, 1, 'NL', 0, 0, '{CC}'),
('NLSCH', 'SCHEVENINGEN', '斯海弗宁恩', 0, 1, 'NL', 0, 0, '{CC}'),
('NLSCM', 'SCHIEDAM', '斯希丹', 0, 1, 'NL', 0, 0, '{CC}'),
('NLSLU', 'SLUISKIL', '斯勒伊斯基尔', 0, 1, 'NL', 0, 0, '{CC}'),
('NLTER', 'TERNEUZEN', '泰尔讷曾', 0, 1, 'NL', 0, 0, '{CC}'),
('NLZAA', 'ZAANDAM', '赞丹', 0, 1, 'NL', 0, 0, '{CC}'),
('NLZIE', 'ZIERIKZEE', '济里克泽', 0, 1, 'NL', 0, 0, '{CC}'),
('NEALK', 'ALKMAAR', '阿尔克岛', 0, 1, 'NL', 0, 0, '{CC}'),
('NLDOT', 'DORDRECHT', '多德雷赫德', 0, 1, 'NL', 0, 0, '{CC}'),
('NLDEN', 'DEN HELDER', '赫尔德', 0, 1, 'NL', 0, 0, '{CC}'),
('ANBAR', 'BARCADERA', '巴尔卡德拉', 0, 1, 'AN', 0, 0, '{CC}'),
('ANKRA', 'KRALENDIJK', '克拉伦代克', 0, 1, 'AN', 0, 0, '{CC}'),
('ANORA', 'ORANJESTAD', '奥拉涅斯塔德', 0, 1, 'AN', 0, 0, '{CC}'),
('ANWIL', 'WILLEMSTAD(AN)', '威廉斯塔德', 0, 1, 'AN', 0, 0, '{CC}'),
('NLWIL', 'WILLEMSTAD(NL)', '威廉斯塔德', 0, 1, 'AN', 0, 0, '{CC}'),
('NCNOA', 'NOUMEA', '努美阿', 0, 1, 'NC', 0, 0, '{CC}'),
('AK', 'AKAROA', '阿卡罗亚', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZLYT', 'LYTTELTON', '利特尔顿', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZMMI', 'MOUNT MAUNGANUI', '芒特芒阿努伊', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZNAP', 'NAPIER', '内皮尔', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZNEL', 'NELSON', '纳尔逊', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZNPL', 'NEW PLYMOUTH', '新普利茅斯', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZBLF', 'BLUFF', '布拉夫', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZDUN', 'DUNEDIN', '达尼丁', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZGIS', 'GISBORNE', '吉斯珀恩', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZGRE', 'GREYMOUTH', '格雷茅斯', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZOPU', 'OPUA', '奥普阿', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZPCH', 'PORT CHALMERS', '查马斯港', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZPIC', 'PICTON', '皮克顿', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZOAM', 'OAMARU', '奥马鲁', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZTAU', 'TAURANGA', '陶朗阿', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZTIM', 'TIMARU', '蒂马鲁', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZWEL', 'WELLINGTON', '惠灵顿', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZWHA', 'WHAHGAREI', '璜加雷', 0, 1, 'NZ', 0, 0, '{CC}'),
('NZCHR', 'CHRISTCHURCH', '克赖斯特撒奇', 0, 1, 'NZ', 0, 0, '{CC}'),
('LAND', 'AUCKLAND', '奥克兰', 0, 1, 'NZ', 0, 0, '{CC}'),
('NCH', 'CHALMERS', '', 0, 1, 'NZ', 0, 0, '{CC}'),
('MARSD', 'MARSDEN POINT', '', 0, 1, 'NZ', 0, 0, '{CC}'),
('NICOR', 'CORINTO', '科林托', 0, 1, 'NI', 0, 0, '{CC}'),
('NISJS', 'SAN JUAN DEL SUR', '南圣胡安', 0, 1, 'NI', 0, 0, '{CC}'),
('NIMAN', 'MANAGUA', '马那瓜', 0, 1, 'NI', 0, 0, '{CC}'),
('NGKOK', 'KOKO', '科科', 0, 1, 'NG', 0, 0, '{CC}'),
('NGLAG', 'LAGOS', '拉各斯', 0, 1, 'NG', 0, 0, '{CC}'),
('NGOKR', 'OKRIKA', '奥克里卡', 0, 1, 'NG', 0, 0, '{CC}'),
('NGPHA', 'PORT HARCOURT', '哈科特港', 0, 1, 'NG', 0, 0, '{CC}'),
('NGSAP', 'SAPELE', '萨佩莱', 0, 1, 'NG', 0, 0, '{CC}'),
('NGWAR', 'WARRI', '瓦里', 0, 1, 'NG', 0, 0, '{CC}'),
('NGAPA', 'APAPA', '阿帕帕', 0, 1, 'NG', 0, 0, '{CC}'),
('NGBON', 'BONNY', '邦尼', 0, 1, 'NG', 0, 0, '{CC}'),
('NGBUR', 'BURUTU', '布鲁图', 0, 1, 'NG', 0, 0, '{CC}'),
('NGCAL', 'CALABAR', '卡拉巴尔', 0, 1, 'NG', 0, 0, '{CC}'),
('NGESC', 'ESCRAVOS', '拉沃斯河', 0, 1, 'NG', 0, 0, '{CC}'),
('NGBU', 'BURUTU', '布鲁图', 0, 1, 'NG', 0, 0, '{CC}'),
('LA', 'LAGOS,NIGERIA', '拉各斯', 0, 1, 'NG', 0, 0, '{CC}'),
('GREEN', 'GREENSBORO', '', 0, 1, 'NF', 0, 0, '{CC}'),
('HAGE', 'HAGERSTOWN', '', 0, 1, 'NF', 0, 0, '{CC}'),
('NOHOR', 'HORTEN', '霍腾', 0, 1, 'NO', 0, 0, '{CC}'),
('NOHOY', 'HOYANGER', '赫扬厄尔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOKLE', 'KLEVEN', '克来文', 0, 1, 'NO', 0, 0, '{CC}'),
('NOKOP', 'KOPERVIK', '科珀维克', 0, 1, 'NO', 0, 0, '{CC}'),
('NOKRA', 'KRAGERO', '克拉格勒', 0, 1, 'NO', 0, 0, '{CC}'),
('NOKRN', 'KRISTIANSUND N.', '克里斯蒂安松（北）', 0, 1, 'NO', 0, 0, '{CC}'),
('NOKRS', 'KRISTIANSAND S.', '克里斯蒂安桑（南）', 0, 1, 'NO', 0, 0, '{CC}'),
('NOKVI', 'KVINESDAL', '克维内斯达尔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOLAN', 'LANGESUND', '朗厄松', 0, 1, 'NO', 0, 0, '{CC}'),
('NOLIL', 'LILLESAND', '利勒桑', 0, 1, 'NO', 0, 0, '{CC}'),
('NOLOD', 'LODINGEN', '勒丁恩', 0, 1, 'NO', 0, 0, '{CC}'),
('NOLVK', 'LARVIK', '拉尔维克', 0, 1, 'NO', 0, 0, '{CC}'),
('NOMDL', 'MANDAL', '曼达尔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOMJN', 'MOSJOEN', '莫舍恩', 0, 1, 'NO', 0, 0, '{CC}'),
('NOMLM', 'MALM', '马尔姆', 0, 1, 'NO', 0, 0, '{CC}'),
('NOMOL', 'MOLDE', '莫尔德', 0, 1, 'NO', 0, 0, '{CC}'),
('NOMOR', 'MO I RANA', '摩城', 0, 1, 'NO', 0, 0, '{CC}'),
('NOMOS', 'MOSS', '莫斯', 0, 1, 'NO', 0, 0, '{CC}'),
('NONAR', 'NARVIK', '纳尔维克', 0, 1, 'NO', 0, 0, '{CC}'),
('NOODD', 'ODDA', '奥达', 0, 1, 'NO', 0, 0, '{CC}'),
('NOPOR', 'PORSGRUNN', '波斯格伦', 0, 1, 'NO', 0, 0, '{CC}'),
('NORIS', 'RISOR', '里瑟尔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOSAN', 'SANDEFGORD', '桑讷菲尤尔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOOSL', 'OSLO', '奥斯陆', 0, 1, 'NO', 0, 0, '{CC}'),
('NOSGN', 'SVELGEN', '斯韦尔根', 0, 1, 'NO', 0, 0, '{CC}'),
('NOSKI', 'SKIEN', '希恩', 0, 1, 'NO', 0, 0, '{CC}'),
('NOSKU', 'SKUDENESHAVN', '斯屈德内斯港', 0, 1, 'NO', 0, 0, '{CC}'),
('NOSAR', 'SARPSBORG', '萨尔普斯堡', 0, 1, 'NO', 0, 0, '{CC}'),
('NOSAU', 'SAUDA', '赛于达', 0, 1, 'NO', 0, 0, '{CC}'),
('NOSNS', 'SANDNES', '桑内斯', 0, 1, 'NO', 0, 0, '{CC}'),
('NOSTA', 'STAVANGER', '斯塔万格', 0, 1, 'NO', 0, 0, '{CC}'),
('NOSTE', 'STEINKJER', '斯泰恩谢尔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOSVK', 'SVELVIK', '斯瓦尔维克', 0, 1, 'NO', 0, 0, '{CC}'),
('NOTHA', 'THAMSHAMN', '塔姆港', 0, 1, 'NO', 0, 0, '{CC}'),
('NOTHM', 'TRONDHEIM', '特隆赫姆', 0, 1, 'NO', 0, 0, '{CC}'),
('NOTON', 'TONSBERG', '滕斯贝格', 0, 1, 'NO', 0, 0, '{CC}'),
('NOTOU', 'TOU', '都港', 0, 1, 'NO', 0, 0, '{CC}'),
('NOTRO', 'TROMSO', '特罗姆瑟', 0, 1, 'NO', 0, 0, '{CC}'),
('NOTVE', 'TVEDESTRAND', '特维德斯特兰德', 0, 1, 'NO', 0, 0, '{CC}'),
('NOVAD', 'VADSO', '瓦德瑟', 0, 1, 'NO', 0, 0, '{CC}'),
('NOVAR', 'VARDO', '沃尔德', 0, 1, 'NO', 0, 0, '{CC}'),
('NRNRI', 'NAURU ISLAND', '瑙鲁岛', 0, 1, 'NO', 0, 0, '{CC}'),
('NOAAL', 'AALESUND', '奥勒松', 0, 1, 'NO', 0, 0, '{CC}'),
('NOARE', 'ARENDAL', '阿伦达尔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOBGN', 'BERGEN', '卑尔根', 0, 1, 'NO', 0, 0, '{CC}'),
('NOBRE', 'BREVIK', '布雷维克', 0, 1, 'NO', 0, 0, '{CC}'),
('NODRA', 'DRAMMEN', '德拉门', 0, 1, 'NO', 0, 0, '{CC}'),
('NOEGE', 'EGERSUND', '艾格松', 0, 1, 'NO', 0, 0, '{CC}'),
('NOEIT', 'EITRHEIM', '艾特尔海姆', 0, 1, 'NO', 0, 0, '{CC}'),
('NOFAR', 'FARSUND', '法尔松德', 0, 1, 'NO', 0, 0, '{CC}'),
('NOFLE', 'FLEKKEFJORD', '弗莱克菲尤尔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOFRE', 'FREDRIKSTAD', '腓特烈斯塔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOHAL', 'HALDEN', '哈尔登', 0, 1, 'NO', 0, 0, '{CC}'),
('NOHAM', 'HAMMERFEST', '哈默菲斯特', 0, 1, 'NO', 0, 0, '{CC}'),
('NOHAR', 'HARSTAD', '哈尔斯塔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOGRI', 'Grimstad', '格里姆斯塔', 0, 1, 'NO', 0, 0, '{CC}'),
('NOHAU', 'HAUGESUND', '海尔格松', 0, 1, 'NO', 0, 0, '{CC}'),
('NOHOL', 'HOLMESTRAND', '霍尔默斯特兰', 0, 1, 'NO', 0, 0, '{CC}'),
('NOAL', 'ALESUND', '奥勒松', 0, 1, 'NO', 0, 0, '{CC}'),
('NOAR', 'ARDALSTANGEN', '阿尔达尔斯坦根', 0, 1, 'NO', 0, 0, '{CC}'),
('OMMAF', 'MINA AL FAHAL', '法赫尔港', 0, 1, 'OM', 0, 0, '{CC}'),
('OMMQS', 'MUSCAT', '米纳卡布斯', 0, 1, 'OM', 0, 0, '{CC}'),
('OMMUT', 'MUTTRAH', '马特拉', 0, 1, 'OM', 0, 0, '{CC}'),
('OMSUL', 'P.S.QABOOS', '卡布斯港', 0, 1, 'OM', 0, 0, '{CC}'),
('AA', 'SULTAN QABOOS', '卡布斯港', 0, 1, 'OM', 0, 0, '{CC}'),
('SHA', 'SHALALA', '', 0, 1, 'OM', 0, 0, '{CC}'),
('PKKAR', 'KARACHI', '卡拉奇', 0, 1, 'PK', 0, 0, '{CC}'),
('PAPAC', 'PANAMA CITY', '巴拿马城', 0, 1, 'PA', 0, 0, '{CC}'),
('PAAGD', 'AGUA DULCE', '阿瓜杜尔塞', 0, 1, 'PA', 0, 0, '{CC}'),
('PABAL', 'BALBOA', '巴尔博亚', 0, 1, 'PA', 0, 0, '{CC}'),
('PACOL', 'COLON', '科隆', 0, 1, 'PA', 0, 0, '{CC}'),
('PACRI', 'CRISTOBAL', '克里斯托瓦尔', 0, 1, 'PA', 0, 0, '{CC}'),
('PAPAN', 'PANAMA', '帕纳马', 0, 1, 'PA', 0, 0, '{CC}'),
('PACOF', 'COLON FREE ZONE', '科隆', 0, 1, 'PA', 0, 0, '{CC}'),
('PAMAN', 'MANZANILLO(PANAMA)', '曼萨尼罗', 0, 1, 'PA', 0, 0, '{CC}'),
('PGLAE', 'LAE', '莱城', 0, 1, 'PG', 0, 0, '{CC}'),
('PGPMO', 'PORT MORESBY', '莫尔兹比港', 0, 1, 'PG', 0, 0, '{CC}'),
('PGRAB', 'RABAUL', '腊包尔', 0, 1, 'PG', 0, 0, '{CC}'),
('PGWEK', 'WEWAK', '威瓦克', 0, 1, 'PG', 0, 0, '{CC}'),
('PYASU', 'ASUNCION', '亚松森', 0, 1, 'PY', 0, 0, '{CC}'),
('PAENC', 'ENCARNACION', '', 0, 1, 'PY', 0, 0, '{CC}'),
('PECAL', 'CALLAO', '卡亚俄', 0, 1, 'PE', 0, 0, '{CC}'),
('PECAZ', 'CERRO AZUL', '塞罗阿苏尔', 0, 1, 'PE', 0, 0, '{CC}'),
('PECHA', 'CHANCAY', '钱凯', 0, 1, 'PE', 0, 0, '{CC}'),
('PECHI', 'CHIMBOTE', '钦博塔', 0, 1, 'PE', 0, 0, '{CC}'),
('PEETN', 'ETEN', '埃腾', 0, 1, 'PE', 0, 0, '{CC}'),
('PEILO', 'ILO', '伊洛', 0, 1, 'PE', 0, 0, '{CC}'),
('PEMAT', 'MATARANI', '马塔拉尼', 0, 1, 'PE', 0, 0, '{CC}'),
('PEPAC', 'PACASMAYO', '帕卡斯马约', 0, 1, 'PE', 0, 0, '{CC}'),
('PEPCO', 'PISCO', '皮斯科', 0, 1, 'PE', 0, 0, '{CC}'),
('PEPTA', 'PAITA', '派塔', 0, 1, 'PE', 0, 0, '{CC}'),
('PESAL', 'SALAVERRY', '萨拉韦里', 0, 1, 'PE', 0, 0, '{CC}'),
('PESJU', 'SAN JUAN(PE)', '圣胡安', 0, 1, 'PE', 0, 0, '{CC}'),
('PEPIM', 'PIMENTEL', '皮门特尔', 0, 1, 'PE', 0, 0, '{CC}'),
('PESNI', 'SAN NICOLAS(PE)', '圣尼古拉斯', 0, 1, 'PE', 0, 0, '{CC}'),
('PETAL', 'TALARA', '塔拉拉', 0, 1, 'PE', 0, 0, '{CC}'),
('PELMA', 'LIMA', '利马', 0, 1, 'PE', 0, 0, '{CC}'),
('ARSFO', 'SAN FERNANDO', '圣弗尔南多', 0, 1, 'PH', 0, 0, '{CC}'),
('PHPSM', 'PORT SANTA MARI', '圣玛丽亚港', 0, 1, 'PH', 0, 0, '{CC}'),
('PHSBC', 'SUBIC', '苏比克', 0, 1, 'PH', 0, 0, '{CC}'),
('PHSCA', 'SAN CARLOS(PH)', '圣卡洛斯', 0, 1, 'PH', 0, 0, '{CC}'),
('PHSCR', 'SANTA CRUZ(LUZO', '圣克鲁斯', 0, 1, 'PH', 0, 0, '{CC}'),
('PHSFE', 'SAN FERNANDO(PH', '圣弗尔南多', 0, 1, 'PH', 0, 0, '{CC}'),
('PHTAB', 'TABACO', '塔瓦科', 0, 1, 'PH', 0, 0, '{CC}'),
('PHTAC', 'TACLOBAN', '塔克洛班', 0, 1, 'PH', 0, 0, '{CC}'),
('PHTDC', 'TANDOC', '坦多哥', 0, 1, 'PH', 0, 0, '{CC}'),
('PHZAM', 'ZAMBOANGA', '三宝颜', 0, 1, 'PH', 0, 0, '{CC}'),
('PHANT', 'ANTIMONAN', '安蒂莫纳', 0, 1, 'PH', 0, 0, '{CC}'),
('PHAPA', 'APARRI', '阿帕里', 0, 1, 'PH', 0, 0, '{CC}'),
('PHBAC', 'BACOLOD', '巴科洛德', 0, 1, 'PH', 0, 0, '{CC}'),
('PHBAT', 'BATANGAS', '八打雁', 0, 1, 'PH', 0, 0, '{CC}'),
('PHBTN', 'BATAAN', '巴丹', 0, 1, 'PH', 0, 0, '{CC}'),
('PHCAP', 'CAPIZ', '卡皮斯', 0, 1, 'PH', 0, 0, '{CC}'),
('PHCDZ', 'CADIZ(PH)', '加的斯', 0, 1, 'PH', 0, 0, '{CC}'),
('PHCEB', 'CEBU', '宿务', 0, 1, 'PH', 0, 0, '{CC}'),
('PHCOT', 'COTABATO', '哥把巴托', 0, 1, 'PH', 0, 0, '{CC}'),
('PHCDO', 'CAGAYAN DE ORO', '卡加延德奥罗', 0, 1, 'PH', 0, 0, '{CC}'),
('PHDAV', 'DAVAO', '达沃', 0, 1, 'PH', 0, 0, '{CC}'),
('PHDGB', 'DINGALAN BAY', '丁阿兰湾', 0, 1, 'PH', 0, 0, '{CC}'),
('PHDGT', 'DINAGAT', '迪纳加特', 0, 1, 'PH', 0, 0, '{CC}'),
('PHDIP', 'DIPOLOG', '第波罗', 0, 1, 'PH', 0, 0, '{CC}'),
('PHDUM', 'DUMAGUETE', '杜马格特', 0, 1, 'PH', 0, 0, '{CC}'),
('PHGUI', 'GUIMARAS ISLAND', '吉马拉斯岛', 0, 1, 'PH', 0, 0, '{CC}'),
('PHILA', 'ISABELA(PH)', '伊萨贝拉', 0, 1, 'PH', 0, 0, '{CC}'),
('PHILI', 'ILIGAN', '伊利甘', 0, 1, 'PH', 0, 0, '{CC}'),
('PHILO', 'ILOILO', '恰朗', 0, 1, 'PH', 0, 0, '{CC}'),
('PHJOL', 'JOLO', '霍洛', 0, 1, 'PH', 0, 0, '{CC}'),
('PHJPA', 'JOSE PANGANIBAN', '何塞庞阿尼班村', 0, 1, 'PH', 0, 0, '{CC}'),
('PHLEG', 'LEGASPI', '黎牙实比', 0, 1, 'PH', 0, 0, '{CC}'),
('PHLUN', 'LA UNION(PH)', '拉乌尼翁', 0, 1, 'PH', 0, 0, '{CC}'),
('PHMAN', 'MANILA', '马尼拉', 0, 1, 'PH', 0, 0, '{CC}'),
('PHMNH', 'MANILA NORTH HA', '马尼拉北港', 0, 1, 'PH', 0, 0, '{CC}'),
('PHPPR', 'PUERTO PRINCESA', '普林塞萨港', 0, 1, 'PH', 0, 0, '{CC}'),
('PHAN', 'ANAKAN', '阿纳根', 0, 1, 'PH', 0, 0, '{CC}'),
('MASO', 'MANILA SOUTH HARBOUR', '马尼拉(南港)', 0, 1, 'PH', 0, 0, '{CC}'),
('PLGDA', 'GDANSK', '格但斯克', 0, 1, 'PL', 0, 0, '{CC}'),
('PLGDY', 'GDYNIA', '格丁尼亚', 0, 1, 'PL', 0, 0, '{CC}'),
('PLHEL', 'HEL', '海尔', 0, 1, 'PL', 0, 0, '{CC}'),
('PLDAR', 'DARLOWO', '达尔沃沃', 0, 1, 'PL', 0, 0, '{CC}'),
('PLKOL', 'KOLOBRZEG', '科沃布热格', 0, 1, 'PL', 0, 0, '{CC}'),
('PLSWI', 'SWINOUJSCIE', '希维诺乌伊希切', 0, 1, 'PL', 0, 0, '{CC}'),
('PLSZC', 'SZCZECIN', '什切青', 0, 1, 'PL', 0, 0, '{CC}'),
('POPOZ', 'POZNAN', '波兹南', 0, 1, 'PL', 0, 0, '{CC}'),
('POKRA', 'KRAKOW', '克拉科夫', 0, 1, 'PL', 0, 0, '{CC}'),
('POWAR', 'WARSZAWA', '华沙', 0, 1, 'PL', 0, 0, '{CC}'),
('POWRO', 'WROCLAW', '弗罗兹瓦夫', 0, 1, 'PL', 0, 0, '{CC}'),
('POKAT', 'KATOWICE', '', 0, 1, 'PL', 0, 0, '{CC}'),
('POGLI', 'POLAND', '波兰', 0, 1, 'PL', 0, 0, '{CC}'),
('POGCE', 'GLIWICE', '', 0, 1, 'PL', 0, 0, '{CC}'),
('POLOD', 'LODZ', '', 0, 1, 'PL', 0, 0, '{CC}'),
('POPRU', 'PRUSZKOW', '', 0, 1, 'PL', 0, 0, '{CC}'),
('CRA', 'CRACOW', '', 0, 1, 'PL', 0, 0, '{CC}'),
('PTBEL', 'BELEM(PT)', '贝伦', 0, 1, 'PT', 0, 0, '{CC}'),
('PTFAR', 'FARO', '法鲁', 0, 1, 'PT', 0, 0, '{CC}'),
('PTFIG', 'FIGUEIRA DO FAZ', '菲盖拉达福实', 0, 1, 'PT', 0, 0, '{CC}'),
('PTLIS', 'LISBON', '里斯本', 0, 1, 'PT', 0, 0, '{CC}'),
('PTLXS', 'LEIXOES', '雷克索斯', 0, 1, 'PT', 0, 0, '{CC}'),
('PTAVE', 'AVEIRO', '阿威罗', 0, 1, 'PT', 0, 0, '{CC}'),
('PTBAR', 'BARREIRO', '巴雷鲁', 0, 1, 'PT', 0, 0, '{CC}'),
('PTOLH', 'OLHAO', '奥良', 0, 1, 'PT', 0, 0, '{CC}'),
('PTOPO', 'OPORTO', '波尔图', 0, 1, 'PT', 0, 0, '{CC}'),
('PTPOR', 'PORTIMAO', '波尔蒂芒', 0, 1, 'PT', 0, 0, '{CC}'),
('PTSBL', 'SETUBAL', '塞图巴尔', 0, 1, 'PT', 0, 0, '{CC}'),
('POLEX', 'LEXOIES', '雷克索斯', 0, 1, 'PT', 0, 0, '{CC}'),
('POPOR', 'PORTO', '波尔图', 0, 1, 'PT', 0, 0, '{CC}'),
('POPRT', 'PORTO PORTUGUESE', '', 0, 1, 'PT', 0, 0, '{CC}'),
('PRAGU', 'AGUADILLA', '阿瓜迪亚', 0, 1, 'PR', 0, 0, '{CC}'),
('PRARE', 'ARECIBO', '阿雷西沃', 0, 1, 'PR', 0, 0, '{CC}'),
('PRFAJ', 'FAJARDO', '法哈多', 0, 1, 'PR', 0, 0, '{CC}'),
('PRGCA', 'GUANICA', '瓜尼卡', 0, 1, 'PR', 0, 0, '{CC}'),
('PRGMA', 'GUAYAMA', '瓜亚马', 0, 1, 'PR', 0, 0, '{CC}'),
('PRGUA', 'GUAYANILLA', '瓜亚尼亚', 0, 1, 'PR', 0, 0, '{CC}'),
('PRMAY', 'MAYAGUEZ', '马亚圭斯', 0, 1, 'PR', 0, 0, '{CC}'),
('PRPON', 'PONCE', '蓬塞', 0, 1, 'PR', 0, 0, '{CC}'),
('DOBCA', 'BOCA CHICA', '博卡奇卡', 0, 1, 'PR', 0, 0, '{CC}'),
('QADOH', 'DOHA', '多哈', 0, 1, 'QA', 0, 0, '{CC}'),
('QAUMS', 'UMM SAID', '乌姆赛义德', 0, 1, 'QA', 0, 0, '{CC}'),
('QAMES', 'MESAIEED', '', 0, 1, 'QA', 0, 0, '{CC}'),
('KRBUS', 'BUSAN', '釜山', 0, 1, 'KR', 0, 0, '{CC}'),
('KRCHG', 'CHANGHANG', '长项', 0, 1, 'KR', 0, 0, '{CC}'),
('KRCHI', 'CHINHAE', '镇海', 0, 1, 'KR', 0, 0, '{CC}'),
('KRCJU', 'CHEJU', '济州', 0, 1, 'KR', 0, 0, '{CC}'),
('KRINC', 'INCHON', '仁川', 0, 1, 'KR', 0, 0, '{CC}'),
('KRKUN', 'KUNSAN', '群山', 0, 1, 'KR', 0, 0, '{CC}'),
('KRMAS', 'MASAN', '马山', 0, 1, 'KR', 0, 0, '{CC}'),
('KRMHO', 'MUKHO', '墨湖', 0, 1, 'KR', 0, 0, '{CC}'),
('KRMOK', 'MOKPO', '木浦', 0, 1, 'KR', 0, 0, '{CC}'),
('KRPOH', 'POHANG', '浦项', 0, 1, 'KR', 0, 0, '{CC}'),
('KRYOS', 'YOSU', '丽水', 0, 1, 'KR', 0, 0, '{CC}'),
('KRSAM', 'SAMCHOK', '三陟', 0, 1, 'KR', 0, 0, '{CC}'),
('KRULS', 'ULSAN', '蔚山', 0, 1, 'KR', 0, 0, '{CC}'),
('KOBU', 'BUSAN,KOREA', '釜山', 0, 1, 'KR', 0, 0, '{CC}'),
('KRPUS', 'PUSAN', '釜山', 0, 1, 'KR', 0, 0, '{CC}'),
('PYI', 'PYING TAEK', '', 0, 1, 'KR', 0, 0, '{CC}'),
('REPDG', 'POINTE DES GALE', '加勒茨角', 0, 1, 'RE', 0, 0, '{CC}'),
('RESDE', 'ST. DENIS', '圣但尼', 0, 1, 'RE', 0, 0, '{CC}'),
('RESLO', 'ST. LOUIS(RE)', '圣路易斯', 0, 1, 'RE', 0, 0, '{CC}'),
('REREU', 'PORT REUNION', '溜尼汪港', 0, 1, 'RE', 0, 0, '{CC}'),
('ROBLA', 'BRAILA', '布勒伊拉', 0, 1, 'RO', 0, 0, '{CC}'),
('ROCON', 'CONSTANZA', '康斯坦萨', 0, 1, 'RO', 0, 0, '{CC}'),
('ROGLZ', 'GALATZ', '加拉茨', 0, 1, 'RO', 0, 0, '{CC}'),
('ROSUL', 'SULINA', '苏利纳', 0, 1, 'RO', 0, 0, '{CC}'),
('ROBUC', 'BUCHAREST', '布加勒斯特', 0, 1, 'RO', 0, 0, '{CC}'),
('CT', 'CONSTANTCIA', '康斯坦察', 0, 1, 'RO', 0, 0, '{CC}'),
('BUCUR', 'BUCURESTI', '', 0, 1, 'RO', 0, 0, '{CC}'),
('UAERD', 'BERDIANSK', '别尔迪扬斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUALE', 'ALEXANDROVSK', '亚历山大罗夫斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUARH', 'ARCHANGEL', '阿尔汉格尔', 0, 1, 'RU', 0, 0, '{CC}'),
('RUDKA', 'DEKASTRY', '德卡斯特莱', 0, 1, 'RU', 0, 0, '{CC}'),
('RUKER', 'KERET', '克烈季', 0, 1, 'RU', 0, 0, '{CC}'),
('RUKGD', 'KALININGRAD', '加里宁格勒', 0, 1, 'RU', 0, 0, '{CC}'),
('RUKHO', 'Kholmsk', '霍尔姆斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUKOR', 'KORSAKOV', '科尔萨科夫', 0, 1, 'RU', 0, 0, '{CC}'),
('RULAZ', 'LAZAREV', '拉扎烈夫', 0, 1, 'RU', 0, 0, '{CC}'),
('RULED', 'ST.PETERSBURG', '圣彼得堡', 0, 1, 'RU', 0, 0, '{CC}'),
('RUMAG', 'MAGADAN', '马加丹', 0, 1, 'RU', 0, 0, '{CC}'),
('RUMAK', 'MAKAROV', '马卡洛夫', 0, 1, 'RU', 0, 0, '{CC}'),
('RUMEZ', 'MESANE', '美晋', 0, 1, 'RU', 0, 0, '{CC}'),
('RUMGO', 'MAGO', '马戈', 0, 1, 'RU', 0, 0, '{CC}'),
('RUMMK', 'MURMANSK', '摩尔曼斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUNEV', 'NEVELSK', '涅韦尔斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUNJK', 'NAKHODKA', '纳雷德卡', 0, 1, 'RU', 0, 0, '{CC}'),
('RUNNM', 'NARYAN MAR', '纳里扬马尔', 0, 1, 'RU', 0, 0, '{CC}'),
('RUNOG', 'NOGLIKI', '诺格利基', 0, 1, 'RU', 0, 0, '{CC}'),
('RUNVS', 'NOVOROSSISK', '新罗西斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUOHA', 'OKHA', '奥哈', 0, 1, 'RU', 0, 0, '{CC}'),
('RUOHO', 'OKHOTSK', '鄂霍次克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUOKT', 'OKTIAABRSKIJ', '十月市', 0, 1, 'RU', 0, 0, '{CC}'),
('RUONG', 'ONEGA', '奥涅加', 0, 1, 'RU', 0, 0, '{CC}'),
('RUPAR', 'PARNU', '派尔努', 0, 1, 'RU', 0, 0, '{CC}'),
('RUPRI', 'PRIMORSK', '普里莫尔斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUPRN', 'PORONAISK', '波罗奈斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUPTK', 'PETROPAVLOVSK', '彼得罗巴浦洛夫斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUROV', 'Rostov', '罗斯托夫', 0, 1, 'RU', 0, 0, '{CC}'),
('RUSHA', 'SHAKHTERSK', '沙赫乔特斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUSOC', 'SOCHI', '索契', 0, 1, 'RU', 0, 0, '{CC}'),
('RUSOG', 'SOVETSKAYA GAVA', '苏维埃港', 0, 1, 'RU', 0, 0, '{CC}'),
('RUSVE', 'SVETLAYA RIVER', '斯伟特拉亚河', 0, 1, 'RU', 0, 0, '{CC}'),
('RUTAG', 'TAGANROG', '塔甘罗格', 0, 1, 'RU', 0, 0, '{CC}'),
('RUTUA', 'TUAPSE', '图阿普谢', 0, 1, 'RU', 0, 0, '{CC}'),
('RUUGL', 'UGLEGORSK', '乌格里哥斯克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUUMB', 'UMBA', '翁巴', 0, 1, 'RU', 0, 0, '{CC}'),
('RUVNN', 'VANINO', '瓦尼诺', 0, 1, 'RU', 0, 0, '{CC}'),
('RUVOS', 'VOSTOCHNY', '东方港', 0, 1, 'RU', 0, 0, '{CC}'),
('RUVVO', 'VLADIVOSTOK', '海参威', 0, 1, 'RU', 0, 0, '{CC}'),
('RUVYG', 'VYBORG', '维堡', 0, 1, 'RU', 0, 0, '{CC}'),
('RUVYS', 'VYSOTSK', '维索茨克', 0, 1, 'RU', 0, 0, '{CC}'),
('RUZHD', 'ZHDANOV', '日丹诺夫', 0, 1, 'RU', 0, 0, '{CC}'),
('RUZRB', 'ZARUBINO', '扎鲁比诺', 0, 1, 'RU', 0, 0, '{CC}'),
('UAKHE', 'KHERSON', '赫尔松', 0, 1, 'RU', 0, 0, '{CC}'),
('UAODS', 'ODESSA', '敖德萨', 0, 1, 'RU', 0, 0, '{CC}'),
('UARNI', 'RENI', '烈尼', 0, 1, 'RU', 0, 0, '{CC}'),
('UAYAL', 'YALTA', '雅尔塔', 0, 1, 'RU', 0, 0, '{CC}'),
('GESUI', 'SUKHUM', '苏呼米', 0, 1, 'RU', 0, 0, '{CC}'),
('EENAJ', 'NARVA JOESUU', '纳尔瓦约埃苏', 0, 1, 'RU', 0, 0, '{CC}'),
('EETLL', 'TALLINN', '塔林', 0, 1, 'RU', 0, 0, '{CC}'),
('RUMOS', 'MOSCOW', '莫斯科', 0, 1, 'RU', 0, 0, '{CC}'),
('EKA', 'EKATERINBURG', '', 0, 1, 'RU', 0, 0, '{CC}'),
('KRA', 'KRASNOYARSK', '', 0, 1, 'RU', 0, 0, '{CC}'),
('NOVO', 'NOVOSIBIRSK', '', 0, 1, 'RU', 0, 0, '{CC}'),
('KHA', 'KHABAROYSK', '', 0, 1, 'RU', 0, 0, '{CC}'),
('OMSK', 'OMSK', '', 0, 1, 'RU', 0, 0, '{CC}'),
('PERM', 'PERM', '彼尔姆', 0, 1, 'RU', 0, 0, '{CC}'),
('CHS', 'CHELYABINSK', '', 0, 1, 'RU', 0, 0, '{CC}'),
('SADAM', 'DAMMAM', '达曼', 0, 1, 'SA', 0, 0, '{CC}'),
('SAGIZ', 'GIZAN', '季赞', 0, 1, 'SA', 0, 0, '{CC}'),
('SAJED', 'JEDDAH', '吉达', 0, 1, 'SA', 0, 0, '{CC}'),
('SAJUB', 'JUBAIL', '朱拜勒', 0, 1, 'SA', 0, 0, '{CC}'),
('SARTA', 'RAS TANURA', '拉斯坦努拉', 0, 1, 'SA', 0, 0, '{CC}'),
('SAYBO', 'YENBO', '延布', 0, 1, 'SA', 0, 0, '{CC}'),
('SARIY', 'RIYADH', '利雅得', 0, 1, 'SA', 0, 0, '{CC}'),
('SNDAK', 'DAKAR', '达喀尔', 0, 1, 'SN', 0, 0, '{CC}'),
('SNKAO', 'KAOLACK', '考拉克', 0, 1, 'SN', 0, 0, '{CC}'),
('SNZIG', 'ZIGHINKOR', '济金绍尔', 0, 1, 'SN', 0, 0, '{CC}'),
('SCPVI', 'PORT VICTORIA(S', '维多利亚港', 0, 1, 'SC', 0, 0, '{CC}'),
('SLFRE', 'FREETOWN', '弗里敦', 0, 1, 'SL', 0, 0, '{CC}'),
('SLPPL', 'PEPLE', '佩佩尔', 0, 1, 'SL', 0, 0, '{CC}'),
('SLSHI', 'SHERBRO ISLAND', '歇尔布罗岛', 0, 1, 'SL', 0, 0, '{CC}'),
('SGJUR', 'JURONG', '裕廊', 0, 1, 'SG', 0, 0, '{CC}'),
('SGPBU', 'PULAU BUKOM', '普劳布科姆', 0, 1, 'SG', 0, 0, '{CC}'),
('SGSEM', 'SEMBAWANG', '森巴旺', 0, 1, 'SG', 0, 0, '{CC}'),
('SGSGP', 'SINGAPORE', '新加坡', 0, 1, 'SG', 0, 0, '{CC}'),
('DKNBG', 'NYKOBING(SJA.)', '尼克宾', 0, 1, 'SG', 0, 0, '{CC}'),
('SLOVE', 'KOPER', '科佩尔', 0, 1, 'SI', 0, 0, '{CC}'),
('SLBRA', 'BRATISLAVA', '', 0, 1, 'SI', 0, 0, '{CC}'),
('LLU', 'LLUBLJANA', '', 0, 1, 'SI', 0, 0, '{CC}'),
('PGKTA', 'KIETA', '基埃塔', 0, 1, 'SB', 0, 0, '{CC}'),
('SBGIZ', 'GIZO', '吉佐', 0, 1, 'SB', 0, 0, '{CC}'),
('SBHON', 'HONIARA', '霍尼亚拉', 0, 1, 'SB', 0, 0, '{CC}'),
('SBYAN', 'YANDINA', '扬迪纳', 0, 1, 'SB', 0, 0, '{CC}'),
('SOBER', 'BERBERA', '柏培拉', 0, 1, 'SO', 0, 0, '{CC}'),
('SOBOS', 'BOSASO', '博萨索', 0, 1, 'SO', 0, 0, '{CC}'),
('SOKIS', 'KISMAYU', '基斯马尤', 0, 1, 'SO', 0, 0, '{CC}'),
('SOMER', 'MERCA', '马尔卡', 0, 1, 'SO', 0, 0, '{CC}'),
('SOMOG', 'MOGADISCIO', '摩加迪沙', 0, 1, 'SO', 0, 0, '{CC}'),
('ZADUR', 'DURBAN', '德班', 0, 1, 'ZA', 0, 0, '{CC}'),
('ZAELN', 'EAST LONDON', '东伦敦', 0, 1, 'ZA', 0, 0, '{CC}'),
('ZAMOB', 'MOSSEL BAY', '莫塞尔贝', 0, 1, 'ZA', 0, 0, '{CC}'),
('ZAPEL', 'PORT ELIZABETH', '伊丽莎白港', 0, 1, 'ZA', 0, 0, '{CC}'),
('SOJOH', 'JOHANNESBURG', '约翰内斯堡', 0, 1, 'ZA', 0, 0, '{CC}'),
('SOHAR', 'HARARE', '哈拉雷', 0, 1, 'ZA', 0, 0, '{CC}'),
('COCAP', 'CAPE TOWN', '开普顿', 0, 1, 'ZA', 0, 0, '{CC}'),
('MAS', 'MASCON', '', 0, 1, 'ZA', 0, 0, '{CC}'),
('ESSAG', 'SAGUNTO', '萨贡托', 0, 1, 'ES', 0, 0, '{CC}'),
('ESSAN', 'SANTANDER', '桑坦德', 0, 1, 'ES', 0, 0, '{CC}'),
('ESSEV', 'SEVILLE', '塞维利亚', 0, 1, 'ES', 0, 0, '{CC}'),
('ESSFE', 'SAN FERNANDO(ES', '圣费尔南多', 0, 1, 'ES', 0, 0, '{CC}'),
('ESSFG', 'SAN FELIU DE GU', '圣费里乌德古绍尔斯', 0, 1, 'ES', 0, 0, '{CC}'),
('ESTAR', 'TARRAGONA', '塔拉戈纳', 0, 1, 'ES', 0, 0, '{CC}'),
('ESVIG', 'VIGO', '维哥', 0, 1, 'ES', 0, 0, '{CC}'),
('ESVIL', 'VILLAGARCIA', '维利亚加西', 0, 1, 'ES', 0, 0, '{CC}'),
('ESVIV', 'VIVERO', '比韦罗', 0, 1, 'ES', 0, 0, '{CC}'),
('ESVAL', 'VALENCIA', '巴伦西亚', 0, 1, 'ES', 0, 0, '{CC}'),
('ESCUL', 'CULLERA', '库列拉', 0, 1, 'ES', 0, 0, '{CC}'),
('ESADR', 'ADRA', '阿德拉', 0, 1, 'ES', 0, 0, '{CC}'),
('ESAGU', 'AGUILAS', '阿吉拉斯', 0, 1, 'ES', 0, 0, '{CC}'),
('ESALC', 'ALCUDIA', '阿尔库迪亚', 0, 1, 'ES', 0, 0, '{CC}'),
('ESALG', 'ALGECIRAS', '阿尔赫西拉斯', 0, 1, 'ES', 0, 0, '{CC}'),
('ESALI', 'ALICANTE', '阿利坎特', 0, 1, 'ES', 0, 0, '{CC}'),
('ESALM', 'ALMERIA', '阿尔梅里亚', 0, 1, 'ES', 0, 0, '{CC}'),
('ESAVI', 'AVILES', '阿维莱斯', 0, 1, 'ES', 0, 0, '{CC}'),
('ESBAE', 'BARBATE', '巴尔瓦特', 0, 1, 'ES', 0, 0, '{CC}'),
('ESBAR', 'BARCELONA', '巴塞罗那', 0, 1, 'ES', 0, 0, '{CC}'),
('ESBIL', 'BILBAO', '毕尔巴鄂', 0, 1, 'ES', 0, 0, '{CC}'),
('ESBNS', 'BLANES', '布拉内斯', 0, 1, 'ES', 0, 0, '{CC}'),
('ESBUR', 'BURRIANA', '布里亚纳', 0, 1, 'ES', 0, 0, '{CC}'),
('ESCAD', 'CADIZ(ES)', '加的斯', 0, 1, 'ES', 0, 0, '{CC}'),
('ESCAR', 'CARTAGENA(ES)', '卡塔赫纳', 0, 1, 'ES', 0, 0, '{CC}'),
('ESCAS', 'CASTELLON', '卡斯特利翁', 0, 1, 'ES', 0, 0, '{CC}'),
('ESCBN', 'CORCUBION', '科尔库维翁', 0, 1, 'ES', 0, 0, '{CC}'),
('ESCOR', 'CORUNNA', '科伦纳', 0, 1, 'ES', 0, 0, '{CC}'),
('ESCUR', 'CASTRO URDIALES', '乌迪亚莱斯堡', 0, 1, 'ES', 0, 0, '{CC}'),
('ESDEN', 'DENIA', '德尼亚', 0, 1, 'ES', 0, 0, '{CC}'),
('ESLUA', 'LUARCA', '卢阿尔卡', 0, 1, 'ES', 0, 0, '{CC}'),
('ESMAH', 'MAHON', '马翁', 0, 1, 'ES', 0, 0, '{CC}'),
('ESHUE', 'HUELVA', '韦尔瓦', 0, 1, 'ES', 0, 0, '{CC}'),
('ESIBI', 'IBIZA', '伊维萨', 0, 1, 'ES', 0, 0, '{CC}'),
('ESJAV', 'JAVEA', '哈韦阿', 0, 1, 'ES', 0, 0, '{CC}'),
('ESGAN', 'GANDIA', '刚迪亚', 0, 1, 'ES', 0, 0, '{CC}'),
('ESGAR', 'GARRUCHA', '加鲁查', 0, 1, 'ES', 0, 0, '{CC}'),
('ESGIJ', 'GIJON', '希洪', 0, 1, 'ES', 0, 0, '{CC}'),
('ESESH', 'ESCOMBRERAS HAR', '埃斯孔布雷阿斯', 0, 1, 'ES', 0, 0, '{CC}'),
('ESMAL', 'MALAGA', '马拉加', 0, 1, 'ES', 0, 0, '{CC}'),
('ESMAR', 'MARIN', '马林', 0, 1, 'ES', 0, 0, '{CC}'),
('ESMAZ', 'MAZARRON', '马萨龙', 0, 1, 'ES', 0, 0, '{CC}'),
('ESMOT', 'MOTRIL', '莫特里尔', 0, 1, 'ES', 0, 0, '{CC}'),
('ESMUR', 'MUROS', '穆罗斯', 0, 1, 'ES', 0, 0, '{CC}'),
('ESPAL', 'PALMA', '帕尔马', 0, 1, 'ES', 0, 0, '{CC}'),
('ESPAS', 'PASAJES', '帕萨赫斯', 0, 1, 'ES', 0, 0, '{CC}'),
('ESPOR', 'PORTUGALETE', '波图加莱特', 0, 1, 'ES', 0, 0, '{CC}'),
('ESROS', 'ROSAS', '罗萨斯', 0, 1, 'ES', 0, 0, '{CC}'),
('ESRDO', 'RIBADEO', '里瓦德奥', 0, 1, 'ES', 0, 0, '{CC}'),
('ESRIB', 'RIBADESELLA', '里瓦德塞利亚', 0, 1, 'ES', 0, 0, '{CC}'),
('SPMAD', 'MADRID', '马德里', 0, 1, 'ES', 0, 0, '{CC}'),
('SPSAB', 'SABADELL', '', 0, 1, 'ES', 0, 0, '{CC}'),
('4555', 'SEVILLA', '塞维利亚', 0, 1, 'ES', 0, 0, '{CC}'),
('LKCOL', 'COLOMBO', '科伦坡', 0, 1, 'LK', 0, 0, '{CC}'),
('LKGAL', 'GALLE', '加勒', 0, 1, 'LK', 0, 0, '{CC}'),
('LKJAF', 'JAFFNA', '贾夫纳', 0, 1, 'LK', 0, 0, '{CC}'),
('LKBAT', 'BATTICALOA', '拜蒂克洛', 0, 1, 'LK', 0, 0, '{CC}'),
('LKMAT', 'MATARA', '马特勒', 0, 1, 'LK', 0, 0, '{CC}'),
('LKNEG', 'NEGOMBO', '尼甘布', 0, 1, 'LK', 0, 0, '{CC}'),
('LKTRI', 'TRINCOMALEE', '亭可马里', 0, 1, 'LK', 0, 0, '{CC}'),
('LKKAL', 'KALUTARA', '卡卢特勒', 0, 1, 'LK', 0, 0, '{CC}'),
('LKKAN', 'KANKESANTURAI', '坎凯桑图赖', 0, 1, 'LK', 0, 0, '{CC}'),
('SDPSU', 'PORT SUDAN', '苏丹港', 0, 1, 'SD', 0, 0, '{CC}'),
('SDSUA', 'SUAKIN', '萨瓦金', 0, 1, 'SD', 0, 0, '{CC}'),
('SEHEL', 'HELSINGBORG', '赫尔辛堡', 0, 1, 'SE', 0, 0, '{CC}'),
('SEHOG', 'HOGANAS', '赫加奈斯', 0, 1, 'SE', 0, 0, '{CC}'),
('SEHOR', 'HORNEFORS', '霍讷福什', 0, 1, 'SE', 0, 0, '{CC}'),
('SEHSD', 'HALMSTAD', '哈尔姆斯塔德', 0, 1, 'SE', 0, 0, '{CC}'),
('SEHSM', 'HUSUM(SE)', '胡苏姆', 0, 1, 'SE', 0, 0, '{CC}'),
('SEJON', 'JONKOPING', '延雪平', 0, 1, 'SE', 0, 0, '{CC}'),
('SEKAA', 'KARLSKRONA', '卡尔斯克鲁纳', 0, 1, 'SE', 0, 0, '{CC}'),
('SEKAD', 'KARLSTAD', '卡尔斯塔德', 0, 1, 'SE', 0, 0, '{CC}'),
('SEKAL', 'KALMAR', '卡尔马', 0, 1, 'SE', 0, 0, '{CC}'),
('SEKLI', 'KLINTEHAMN', '克林特港', 0, 1, 'SE', 0, 0, '{CC}'),
('SEKLX', 'KALIX', '卡利克斯', 0, 1, 'SE', 0, 0, '{CC}'),
('SEKOP', 'KOPING', '雪平', 0, 1, 'SE', 0, 0, '{CC}'),
('SEKRI', 'KRISTINEHAMN', '克里斯蒂娜港', 0, 1, 'SE', 0, 0, '{CC}'),
('SELAN', 'LANDSKRONA', '兰斯克鲁纳', 0, 1, 'SE', 0, 0, '{CC}'),
('SELID', 'LIDKOPING', '利德雪平', 0, 1, 'SE', 0, 0, '{CC}'),
('SELIM', 'LIMHAMN', '利姆港', 0, 1, 'SE', 0, 0, '{CC}'),
('SELJU', 'LJUSNE', '于斯讷', 0, 1, 'SE', 0, 0, '{CC}'),
('SELOM', 'LOMMA', '卢马', 0, 1, 'SE', 0, 0, '{CC}'),
('SELUL', 'LULEA', '吕勒奥', 0, 1, 'SE', 0, 0, '{CC}'),
('SELYS', 'LYSEKIL', '吕瑟希尔', 0, 1, 'SE', 0, 0, '{CC}'),
('SEMAL', 'MALMO', '马尔默', 0, 1, 'SE', 0, 0, '{CC}'),
('SEMAR', 'MARSTRAND', '马斯特兰德', 0, 1, 'SE', 0, 0, '{CC}'),
('SEMOT', 'MOTALA', '穆塔拉', 0, 1, 'SE', 0, 0, '{CC}'),
('SENOR', 'NORRKOPING', '诺尔雪平', 0, 1, 'SE', 0, 0, '{CC}'),
('SENRT', 'NORRSUNDET', '诺尔松德', 0, 1, 'SE', 0, 0, '{CC}'),
('SENYK', 'NYKOPING(SE)', '尼雪平', 0, 1, 'SE', 0, 0, '{CC}'),
('SEORN', 'ORNSKOLDSVIK', '恩舍尔兹维克', 0, 1, 'SE', 0, 0, '{CC}'),
('SEOTT', 'OTTERBACKEN', '乌特拜肯', 0, 1, 'SE', 0, 0, '{CC}'),
('SEOXE', 'OXELOSUND', '乌克瑟勒松德', 0, 1, 'SE', 0, 0, '{CC}'),
('SEPIT', 'PITEA', '皮特奥', 0, 1, 'SE', 0, 0, '{CC}'),
('SERBN', 'RONNEBYHAMN', '尤讷比港', 0, 1, 'SE', 0, 0, '{CC}'),
('SESIM', 'SIMRISHAMN', '锡姆里斯港', 0, 1, 'SE', 0, 0, '{CC}'),
('SESJE', 'SODERTELJE', '南泰利耶', 0, 1, 'SE', 0, 0, '{CC}'),
('SESKA', 'SKELLEFTEA', '谢莱夫特奥', 0, 1, 'SE', 0, 0, '{CC}'),
('SESKO', 'SKOGHALL', '斯库格哈尔', 0, 1, 'SE', 0, 0, '{CC}'),
('SESKU', 'SKUTSKAR', '斯屈特谢尔', 0, 1, 'SE', 0, 0, '{CC}'),
('SESLI', 'SLITE', '斯利特', 0, 1, 'SE', 0, 0, '{CC}'),
('SESOD', 'SODERHAMN', '瑟德港', 0, 1, 'SE', 0, 0, '{CC}'),
('SESOG', 'SODERKOPING', '南雪平', 0, 1, 'SE', 0, 0, '{CC}'),
('SESOL', 'SOLVESBORG', '瑟尔沃斯堡', 0, 1, 'SE', 0, 0, '{CC}'),
('SESTD', 'STROMSTAD', '斯特伦斯塔德', 0, 1, 'SE', 0, 0, '{CC}'),
('SESTO', 'STOCKHOLM', '斯德哥尔摩', 0, 1, 'SE', 0, 0, '{CC}'),
('SESTR', 'STRANGNAS', '斯特兰奈斯', 0, 1, 'SE', 0, 0, '{CC}'),
('SESVL', 'SUNDSVALL', '松兹瓦尔', 0, 1, 'SE', 0, 0, '{CC}'),
('SESVN', 'SANDVIKEN(SE)', '桑德维肯', 0, 1, 'SE', 0, 0, '{CC}'),
('SETRE', 'TRELLEBORG', '特雷勒堡', 0, 1, 'SE', 0, 0, '{CC}'),
('SEUDD', 'UDDEVALLA', '乌德瓦拉', 0, 1, 'SE', 0, 0, '{CC}'),
('SEUME', 'UMEA', '于默奥', 0, 1, 'SE', 0, 0, '{CC}'),
('SEVAL', 'VALDEMARSVIK', '瓦尔德马什维克', 0, 1, 'SE', 0, 0, '{CC}'),
('SEVAR', 'VARBERG', '瓦尔贝里', 0, 1, 'SE', 0, 0, '{CC}'),
('SEAHS', 'AHUS', '奥胡斯', 0, 1, 'SE', 0, 0, '{CC}'),
('SEALA', 'ALA', '阿拉', 0, 1, 'SE', 0, 0, '{CC}'),
('SEARB', 'ARBOGA', '阿尔博加', 0, 1, 'SE', 0, 0, '{CC}'),
('SEBOR', 'BORGHOLM', '博里霍尔姆', 0, 1, 'SE', 0, 0, '{CC}'),
('SEENK', 'ENKOPING', '恩雪平', 0, 1, 'SE', 0, 0, '{CC}'),
('SEFAL', 'FALKENBERG', '法尔肯贝里', 0, 1, 'SE', 0, 0, '{CC}'),
('SEGEF', 'GEFLE', '耶夫勒', 0, 1, 'SE', 0, 0, '{CC}'),
('SEGOT', 'GOTHENBURG', '哥德堡', 0, 1, 'SE', 0, 0, '{CC}'),
('SEHAN', 'HARGSHAMN', '哈里港', 0, 1, 'SE', 0, 0, '{CC}'),
('SEHAP', 'HAPARANDA', '哈帕兰达', 0, 1, 'SE', 0, 0, '{CC}'),
('SEVIS', 'VISBY', '维斯比', 0, 1, 'SE', 0, 0, '{CC}'),
('SEWES', 'WESTERVIK', '韦斯特维克', 0, 1, 'SE', 0, 0, '{CC}'),
('SEWHN', 'WALLHAMN', '瓦尔港', 0, 1, 'SE', 0, 0, '{CC}'),
('SEYST', 'YSTAD', '于斯塔德', 0, 1, 'SE', 0, 0, '{CC}'),
('ALA', 'ALA', '阿拉', 0, 1, 'SE', 0, 0, '{CC}'),
('SW', 'ARBOGA', '阿布罗斯', 0, 1, 'SE', 0, 0, '{CC}'),
('SWEKE', 'EKENAS', '埃克纳斯', 0, 1, 'SE', 0, 0, '{CC}'),
('GLL', 'GAVLE', '', 0, 1, 'SE', 0, 0, '{CC}'),
('BER', 'BERNE', '', 0, 1, 'SW', 0, 0, '{CC}'),
('SWZUR', 'ZURICH', '苏黎士', 0, 1, 'SW', 0, 0, '{CC}'),
('SWBAS', 'BASLE', '巴塞尔', 0, 1, 'SW', 0, 0, '{CC}'),
('GEN', 'GENEVA', '日内瓦', 0, 1, 'SW', 0, 0, '{CC}'),
('SWLAU', 'LAUSANNE', '', 0, 1, 'SW', 0, 0, '{CC}'),
('ST.G', 'ST.GALLEN', '', 0, 1, 'SW', 0, 0, '{CC}'),
('CHIA', 'CHIASSO', '', 0, 1, 'SW', 0, 0, '{CC}'),
('GBS', 'GRABS', '', 0, 1, 'SW', 0, 0, '{CC}'),
('SYBAN', 'BANIYAS', '巴尼亚斯', 0, 1, 'SY', 0, 0, '{CC}'),
('SYLAT', 'LATTAKIA', '拉塔基亚', 0, 1, 'SY', 0, 0, '{CC}'),
('TWHLN', 'HUALIAN', '花莲', 0, 1, 'TW', 0, 0, '{CC}'),
('TWJIL', 'JILONG', '基隆', 0, 1, 'TW', 0, 0, '{CC}'),
('TWPHU', 'PENGHU', '澎湖', 0, 1, 'TW', 0, 0, '{CC}'),
('TWGAO', 'GAOXONG', '高雄', 0, 1, 'TW', 0, 0, '{CC}'),
('TWSUO', 'SUAO', '苏奥', 0, 1, 'TW', 0, 0, '{CC}'),
('TWTNA', 'TAINAN', '台南', 0, 1, 'TW', 0, 0, '{CC}'),
('TWTZH', 'TAIZHONG', '台中', 0, 1, 'TW', 0, 0, '{CC}'),
('TWTAI', 'TAICHUNG', '台中', 0, 1, 'TW', 0, 0, '{CC}'),
('TWKAO', 'KAOHSIUNG', '高雄', 0, 1, 'TW', 0, 0, '{CC}'),
('TAIPE', 'TAIPEI', '台北', 0, 1, 'TW', 0, 0, '{CC}'),
('TZDRS', 'DAR-ES-SALAAM', '达累斯萨拉姆', 0, 1, 'TZ', 0, 0, '{CC}'),
('TZKKI', 'KILWA KIVINJE', '基卢瓦基温杰', 0, 1, 'TZ', 0, 0, '{CC}'),
('TZKMA', 'KILWA MASOKO', '基卢瓦马索科', 0, 1, 'TZ', 0, 0, '{CC}'),
('TZLDI', 'LINDI', '林迪', 0, 1, 'TZ', 0, 0, '{CC}'),
('TZMTW', 'MTWARA', '姆特瓦拉', 0, 1, 'TZ', 0, 0, '{CC}'),
('TZPAN', 'PANGANI', '潘加尼', 0, 1, 'TZ', 0, 0, '{CC}'),
('TZTAN', 'TANGA', '坦噶', 0, 1, 'TZ', 0, 0, '{CC}'),
('TZZAI', 'ZANZIBAR ISLAND', '桑给巴尔岛', 0, 1, 'TZ', 0, 0, '{CC}'),
('THBKK', 'BANGKOK', '曼谷', 0, 1, 'TH', 0, 0, '{CC}'),
('THLCB', 'LAEM CHABANG', '雷查班', 0, 1, 'TH', 0, 0, '{CC}'),
('THPAT', 'PATTANI', '北大年', 0, 1, 'TH', 0, 0, '{CC}'),
('THPHU', 'PHUKET', '普吉', 0, 1, 'TH', 0, 0, '{CC}'),
('LKR', 'LAT KRABANG', '拉特卡拉帮', 0, 1, 'TH', 0, 0, '{CC}'),
('12', 'BANKOK CY PORT', '', 0, 1, 'TH', 0, 0, '{CC}'),
('SCT', 'SCT', '', 0, 1, 'TH', 0, 0, '{CC}'),
('KLO', 'KLONG TOEY', '', 0, 1, 'TH', 0, 0, '{CC}'),
('TGKPE', 'KPEME', '佩梅', 0, 1, 'TG', 0, 0, '{CC}'),
('TGLOM', 'LOME', '洛美', 0, 1, 'TG', 0, 0, '{CC}'),
('TONEI', 'NEIAFU', '内亚富', 0, 1, 'TO', 0, 0, '{CC}'),
('TOKYO', 'NUKUALOFA', '努库阿洛法', 0, 1, 'TO', 0, 0, '{CC}'),
('TOROA', 'ROADTOWN', '', 0, 1, 'TO', 0, 0, '{CC}'),
('TTBRI', 'BRIGHTON(TT)', '布赖顿', 0, 1, 'TT', 0, 0, '{CC}'),
('TTCHA', 'CHAGUARAMAS', '查瓜拉马斯', 0, 1, 'TT', 0, 0, '{CC}'),
('TTGAP', 'GALEOTA POINT', '加莱奥塔角', 0, 1, 'TT', 0, 0, '{CC}'),
('TTPAP', 'POINTE A PIERRE', '皮埃尔角城', 0, 1, 'TT', 0, 0, '{CC}'),
('TTPFN', 'POINT FORTIN', '福廷角', 0, 1, 'TT', 0, 0, '{CC}'),
('TTSCA', 'SCARBOROUGH(TT)', '斯卡伯勒', 0, 1, 'TT', 0, 0, '{CC}'),
('TTSFE', 'SAN FERNANDO(TT', '圣费尔南多', 0, 1, 'TT', 0, 0, '{CC}'),
('TTTEM', 'TEMBLADORA', '滕布拉多腊', 0, 1, 'TT', 0, 0, '{CC}'),
('TTPLY', 'PLYMOUTH(TT)', '普利茅斯', 0, 1, 'TT', 0, 0, '{CC}'),
('TTPOS', 'PORT OF SPAIN', '西班牙港', 0, 1, 'TT', 0, 0, '{CC}'),
('TNGAB', 'GABES', '加贝斯', 0, 1, 'TN', 0, 0, '{CC}'),
('TNLGO', 'LA GOULETTE', '拉古莱特', 0, 1, 'TN', 0, 0, '{CC}'),
('TNLSK', 'LA SKHIRRA', '拉斯基拉', 0, 1, 'TN', 0, 0, '{CC}'),
('TNBIZ', 'BIZERTA', '比塞大', 0, 1, 'TN', 0, 0, '{CC}'),
('TNSFA', 'SFAX', '斯法克斯', 0, 1, 'TN', 0, 0, '{CC}'),
('TNTNS', 'TUNIS', '突尼斯', 0, 1, 'TN', 0, 0, '{CC}'),
('TRANT', 'ANTALYA', '安塔利亚', 0, 1, 'TR', 0, 0, '{CC}'),
('TRBAN', 'BANDIRMA', '班德尔马', 0, 1, 'TR', 0, 0, '{CC}'),
('TRDER', 'DERINCE', '代林杰', 0, 1, 'TR', 0, 0, '{CC}'),
('TRDIK', 'DIKILI', '迪基利', 0, 1, 'TR', 0, 0, '{CC}'),
('TRDIL', 'DILISKELESI', '帝力克里斯', 0, 1, 'TR', 0, 0, '{CC}'),
('TRERE', 'EREGLI', '埃雷利', 0, 1, 'TR', 0, 0, '{CC}'),
('TRFAT', 'FATSA', '法特萨', 0, 1, 'TR', 0, 0, '{CC}'),
('TRFET', 'FETHIYE', '费特希耶', 0, 1, 'TR', 0, 0, '{CC}'),
('TRFIN', 'FINIKE', '菲尼凯', 0, 1, 'TR', 0, 0, '{CC}'),
('TRGEM', 'GEMLIK', '盖姆利克', 0, 1, 'TR', 0, 0, '{CC}'),
('TRGIR', 'GIRESUN', '古雷松', 0, 1, 'TR', 0, 0, '{CC}'),
('TRGOR', 'GORELE', '格雷莱', 0, 1, 'TR', 0, 0, '{CC}'),
('TRHOP', 'HOPA', '霍帕', 0, 1, 'TR', 0, 0, '{CC}'),
('TRINE', 'INEBOLU', '伊内博卢', 0, 1, 'TR', 0, 0, '{CC}'),
('TRISK', 'ISKENDERUN', '伊斯肯德伦', 0, 1, 'TR', 0, 0, '{CC}'),
('TRHAY', 'HAYDARPASA', '海达尔帕夏', 0, 1, 'TR', 0, 0, '{CC}'),
('TRIST', 'TRIST', '伊斯坦布尔', 0, 1, 'TR', 0, 0, '{CC}'),
('TRIZM', 'IZMIR', '伊兹密尔', 0, 1, 'TR', 0, 0, '{CC}'),
('TRORD', 'ORDU', '奥尔杜', 0, 1, 'TR', 0, 0, '{CC}'),
('TRRIZ', 'RIZE', '里泽', 0, 1, 'TR', 0, 0, '{CC}'),
('TRSAM', 'SAMSUN', '萨姆松', 0, 1, 'TR', 0, 0, '{CC}'),
('TRMER', 'MERSIN', '梅尔辛', 0, 1, 'TR', 0, 0, '{CC}'),
('TRTRA', 'TRABZON', '特拉布宗', 0, 1, 'TR', 0, 0, '{CC}'),
('TRZON', 'ZONGULDAK', '宗古尔达克', 0, 1, 'TR', 0, 0, '{CC}'),
('TRALA', 'ALANYA', '阿拉尼亚', 0, 1, 'TR', 0, 0, '{CC}'),
('TRAMA', 'AMASRA', '阿马斯腊', 0, 1, 'TR', 0, 0, '{CC}'),
('TUGEB', 'GEBZE', '', 0, 1, 'TR', 0, 0, '{CC}'),
('TUANK', 'ANKARA', '', 0, 1, 'TR', 0, 0, '{CC}'),
('I', 'ISTANBUL', '', 0, 1, 'TR', 0, 0, '{CC}'),
('AEAJM', 'AJMAN', '阿治曼', 0, 1, 'AE', 0, 0, '{CC}'),
('AEDAS', 'DAS ISLAND', '达斯岛', 0, 1, 'AE', 0, 0, '{CC}'),
('AEFUJ', 'FUJAIRAH', '富查伊拉', 0, 1, 'AE', 0, 0, '{CC}'),
('AEJDA', 'JEBEL DHANNA', '杰贝尔丹那', 0, 1, 'AE', 0, 0, '{CC}'),
('AEKFA', 'KHOR FAKKAN', '豪尔费坎', 0, 1, 'AE', 0, 0, '{CC}'),
('AERAK', 'RAS AL KHAIMAH', '哈伊马角', 0, 1, 'AE', 0, 0, '{CC}'),
('AESJH', 'SHARJAH', '舍尔杰', 0, 1, 'AE', 0, 0, '{CC}'),
('AEUAQ', 'UMM AL QUWAIN', '乌姆盖万', 0, 1, 'AE', 0, 0, '{CC}'),
('AEABD', 'ABU DHABI', '阿布扎比', 0, 1, 'AE', 0, 0, '{CC}'),
('AEDUB', 'DUBAI,UAE', '迪拜', 0, 1, 'AE', 0, 0, '{CC}'),
('UARAS', 'PORT RASHID DUBAI', '迪拜', 0, 1, 'AE', 0, 0, '{CC}'),
('UBI', 'DUBAI', '迪拜', 0, 1, 'AE', 0, 0, '{CC}'),
('UAILK', 'ILYICHEVSK', '伊利乔夫斯克', 0, 1, 'UA', 0, 0, '{CC}'),
('UAUDK', 'UST-DUNAYSK', '乌斯特---多瑙伊斯克', 0, 1, 'UA', 0, 0, '{CC}'),
('URKIE', 'KIEV', '基辅', 0, 1, 'UK', 0, 0, '{CC}'),
('UKDON', 'DONCASTER', '', 0, 1, 'UK', 0, 0, '{CC}'),
('UKLEY', 'LEYLAND', '', 0, 1, 'UK', 0, 0, '{CC}'),
('UKLND', 'LEYLANO', '', 0, 1, 'UK', 0, 0, '{CC}'),
('UKSOO', 'SOOTH SHIELDS', '', 0, 1, 'UK', 0, 0, '{CC}'),
('UYNPA', 'NUEVA PALMIRA', '新帕尔米拉', 0, 1, 'UY', 0, 0, '{CC}'),
('UYPAY', 'PAYSANDU', '派桑杜', 0, 1, 'UY', 0, 0, '{CC}'),
('UYCOL', 'COLONIA', '科洛尼亚', 0, 1, 'UY', 0, 0, '{CC}'),
('UYFBS', 'FRAY BENTOS', '弗赖本托斯', 0, 1, 'UY', 0, 0, '{CC}'),
('UYMON', 'MONTYEVIDEO', '蒙得维的亚', 0, 1, 'UY', 0, 0, '{CC}'),
('ARCON', 'CONCEPCION DEL UNRUGUAY', '孔塞普匈-德尔-乌拉圭', 0, 1, 'UY', 0, 0, '{CC}'),
('MONT', 'MONTEVIDEO', '蒙特维的亚', 0, 1, 'UY', 0, 0, '{CC}'),
('VEAMB', 'AMUAY BAY', '阿穆艾湾', 0, 1, 'VE', 0, 0, '{CC}'),
('VEBJG', 'BAJO GRANDE', '巴霍格兰德', 0, 1, 'VE', 0, 0, '{CC}'),
('VECIB', 'CIUDAD BOLIVAR', '玻利瓦尔城', 0, 1, 'VE', 0, 0, '{CC}'),
('VECNO', 'CARUPANO', '卡鲁帕诺', 0, 1, 'VE', 0, 0, '{CC}'),
('VECTO', 'CARIPITO', '卡里皮托', 0, 1, 'VE', 0, 0, '{CC}'),
('VELGU', 'LA GUAIRA', '拉瓜伊拉', 0, 1, 'VE', 0, 0, '{CC}'),
('VEPAL', 'PALUA', '帕卢亚', 0, 1, 'VE', 0, 0, '{CC}'),
('VEPCA', 'PUERTO CABELLO', '卡贝略港', 0, 1, 'VE', 0, 0, '{CC}'),
('VEPCN', 'PUNTA CARDON', '篷塔卡尔东', 0, 1, 'VE', 0, 0, '{CC}'),
('VEPDH', 'PUERTO DE HIERR', '耶罗港', 0, 1, 'VE', 0, 0, '{CC}'),
('VEPOR', 'PUERTO ORDAZ', '奥尔达斯港', 0, 1, 'VE', 0, 0, '{CC}'),
('VESLO', 'SAN LORENZO(VE)', '圣洛伦索', 0, 1, 'VE', 0, 0, '{CC}'),
('ANCSB', 'CARACAS BAY', '加拉加斯湾', 0, 1, 'VE', 0, 0, '{CC}'),
('VECAR', 'CARACAS', '加拉加斯', 0, 1, 'VE', 0, 0, '{CC}'),
('123', 'LA GUAIRA,VENEZUELA', '拉瓜伊拉', 0, 1, 'VE', 0, 0, '{CC}'),
('VEISL', 'ISLA MAGARITA', '伊斯拉曼哥雷塔', 0, 1, 'VE', 0, 0, '{CC}'),
('VECBO', 'PORT CABELLO', '卡贝略港', 0, 1, 'VE', 0, 0, '{CC}'),
('VNDAN', 'DANANG', '岘港', 0, 1, 'VN', 0, 0, '{CC}'),
('VNHGY', 'HONGAY', '鸿基', 0, 1, 'VN', 0, 0, '{CC}'),
('VNHUE', 'HUE', '顺化', 0, 1, 'VN', 0, 0, '{CC}'),
('VNKYN', 'KWANG YEN', '广义', 0, 1, 'VN', 0, 0, '{CC}'),
('VNMYT', 'MY THO', '美富', 0, 1, 'VN', 0, 0, '{CC}'),
('VNHPG', 'HAIPHONG', '海防', 0, 1, 'VN', 0, 0, '{CC}'),
('VNQUN', 'QUI NHON', '归仁', 0, 1, 'VN', 0, 0, '{CC}'),
('VNVIN', 'VINH', '荣市', 0, 1, 'VN', 0, 0, '{CC}'),
('VNVUT', 'VUNG TAU', '头顿', 0, 1, 'VN', 0, 0, '{CC}'),
('VNNTG', 'NHA TRANG', '芽庄', 0, 1, 'VN', 0, 0, '{CC}'),
('VECA', 'CAMPHA', '锦普', 0, 1, 'VN', 0, 0, '{CC}'),
('HOPO', 'HO CHI MINH CITY', '胡志明市', 0, 1, 'VN', 0, 0, '{CC}'),
('HANO', 'HANOI', '河内', 0, 1, 'VN', 0, 0, '{CC}'),
('VICHR', 'CHRISTIANSTED', '克里斯琴斯特德', 0, 1, 'VI', 0, 0, '{CC}'),
('VIFRE', 'FREDERIKSTED', '弗雷德里克斯特德', 0, 1, 'VI', 0, 0, '{CC}'),
('VISTS', 'ST. THOMAS', '圣托马斯', 0, 1, 'VI', 0, 0, '{CC}'),
('YEADN', 'ADEN', '亚丁', 0, 1, 'YE', 0, 0, '{CC}'),
('YEHOD', 'HODEIDAH', '荷台达', 0, 1, 'YE', 0, 0, '{CC}'),
('YEMOK', 'MOKHA', '穆哈', 0, 1, 'YE', 0, 0, '{CC}'),
('YEMUK', 'MUKALLA', '穆卡拉', 0, 1, 'YE', 0, 0, '{CC}'),
('YUIZO', 'IZOLA', '伊佐拉', 0, 1, 'YU', 0, 0, '{CC}'),
('SIIZO', 'Izola', '伊佐拉', 0, 1, 'YU', 0, 0, '{CC}'),
('HRHVA', 'HVAR', '赫瓦尔', 0, 1, 'YU', 0, 0, '{CC}'),
('HRMAS', 'MASLINICA', '马斯利尼察', 0, 1, 'YU', 0, 0, '{CC}'),
('HRRAS', 'RASA', '拉萨', 0, 1, 'YU', 0, 0, '{CC}'),
('HRROV', 'ROVINJ', '罗维尼', 0, 1, 'YU', 0, 0, '{CC}'),
('HRSIB', 'SIBENIK', '希贝尼克', 0, 1, 'YU', 0, 0, '{CC}'),
('HRSEN', 'SENJ', '塞尼', 0, 1, 'YU', 0, 0, '{CC}');
INSERT INTO `G_PORT` (`PORT_CODE`, `PORT_NAME_EN`, `PORT_NAME_CN`, `PORT_TYPE`, `ACTIVE`, `COUN_CODE`, `VERSION`, `REMOVED`, `COMP_CODE`) VALUES
('HRZAD', 'ZADAR', '扎达尔', 0, 1, 'YU', 0, 0, '{CC}'),
('YUKOT', 'KOTOR', '科托尔', 0, 1, 'YU', 0, 0, '{CC}'),
('YUPIR', 'PIRAN', '皮兰', 0, 1, 'YU', 0, 0, '{CC}'),
('BEO', 'BEOGRADE', '', 0, 1, 'YU', 0, 0, '{CC}'),
('BELG', 'BELGRADE', '', 0, 1, 'YU', 0, 0, '{CC}'),
('ZRMAT', 'MATADI', '马塔迪', 0, 1, 'ZR', 0, 0, '{CC}'),
('ZRBAN', 'BANANA', '巴纳纳', 0, 1, 'ZR', 0, 0, '{CC}'),
('ZRBMA', 'BOMA', '博马', 0, 1, 'ZR', 0, 0, '{CC}'),
('ZIBUL', 'BULAWAYO', '', 0, 1, 'ZI', 0, 0, '{CC}');

INSERT INTO `P_COMPANY_CONFIG` (`COCO_CODE`, `COCO_NAME`, `COCO_VALUE`, `COCO_VALUE_TYPE`, `COCO_VALUE_OPTIONS`, `COCO_GROUP`, `COCO_TYPE`, `COCO_DESC`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('COMPANY_NAME', '公司名称', '{companyname}', 0, NULL, '公司属性', 'A', NULL, '{CC}', 0, 0),
('COMPANY_CONTACT', '公司联系人', '{contact}', 0, NULL, '公司属性', 'A', NULL, '{CC}', 3, 0),
('COMPANY_TEL', '公司电话', '{tel}', 0, NULL, '公司属性', 'A', NULL, '{CC}', 0, 0),
('COMPANY_FAX', '公司传真', '{fax}', 0, NULL, '公司属性', 'A', NULL, '{CC}', 0, 0),
('COMPANY_EMAIL', '公司邮件地址', '{email}', 0, NULL, '公司属性', 'A', NULL, '{CC}', 0, 0),
('COMPANY_URL', '公司网址', '{url}', 0, NULL, '公司属性', 'A', NULL, '{CC}', 0, 0),
('COMPANY_ADDRESS_CN', '公司中文地址', '', 0, NULL, '公司属性', 'A', NULL, '{CC}', 0, 0),
('COMPANY_ADDRESS_EN', '公司英文地址', '', 0, NULL, '公司属性', 'A', NULL, '{CC}', 1, 0),
('COMPANY_NAME_EN', '公司英文名称', '', 0, NULL, '公司属性', 'A', NULL, '{CC}', 0, 0),
('CUSTOMER_DEFAULT_CRDIT_DAYS', '客户缺省信用期（天）', '30', 1, NULL, '客户供应商配置', 'A', '', '{CC}', 0, 0),
('CUSTOMER_DEFAULT_CRDIT_AMOUNT', '客户缺省信用额度（CNY）', '0', 1, NULL, '客户供应商配置', 'A', NULL, '{CC}', 1, 0),
('COMPANY_ZIP', '公司邮编', '', 0, NULL, '公司属性', 'A', NULL, '{CC}', 2, 0),
('BASE_PORT', '本港代码', '', 10, NULL, '业务设置', 'A', '', '{CC}', 4, 0),
('LOCK_CONS_AUDIT', '单票审核是否锁定委托信息', 'Y', 2, NULL, '业务设置', 'A', NULL, '{CC}', 0, 0),
('DEFAULT_DEPT_C', '集装箱业务缺省部门', '', 12, NULL, '业务设置', 'A', '集装箱部', '{CC}', 1, 0),
('DEFAULT_DEPT_B', '散货业务缺省部门', '', 12, NULL, '业务设置', 'A', '散货部', '{CC}', 1, 0),
('DEFAULT_DEPT_G', '报关业务缺省部门', '', 12, NULL, '业务设置', 'A', '报关部', '{CC}', 1, 0),
('DEFAULT_DEPT_I', '报检业务缺省部门', '', 12, NULL, '业务设置', 'A', '报关部', '{CC}', 1, 0),
('DEFAULT_DEPT_A', '空运业务缺省部门', '', 12, NULL, '业务设置', 'A', '空运部', '{CC}', 2, 0),
('FDOC_BL', '提单单证类型', NULL, 13, NULL, '业务设置', 'A', NULL, '{CC}', 0, 0),
('FDOC_CC', '核销单单证类型', NULL, 13, NULL, '业务设置', 'A', '核销单', '{CC}', 1, 0),
('FDOC_AUTO_UPDATE_RELEASABLE', '系统是否自动更新可放核销单、提单', 'Y', 2, NULL, '业务设置', 'A', NULL, '{CC}', 0, 0),
('PASSWORD_EXPIRY_DAYS', '密码有效期（天）', '30', 1, NULL, '系统参数', 'A', NULL, '{CC}', 0, 0),
('PROFIT_ALERT_TYPE', '利润预警类型', '毛利率', 3, '毛利|毛利率', '系统参数', 'A', NULL, '{CC}', 3, 0),
('PROFIT_ALERT_VALUE', '利润预警阀值（利润小于）', '10', 1, NULL, '系统参数', 'A', NULL, '{CC}', 2, 0),
('PROFIT_ALERT_COLOR', '利润预警颜色', '#99CC00', 9, NULL, '系统参数', NULL, NULL, '{CC}', 2, 0),
('CONS_LOCK_DAYS', '开航后多少天锁定业务数据', '30', 1, NULL, '系统参数', 'A', NULL, '{CC}', 0, 0),
('CONS_AR_OVERDUE_DAYS', '最大应收账款天数', '60', 1, NULL, '业务设置', 'A', NULL, '{CC}', 0, 0);

-- 建立公司
insert into P_COMPANY (comp_code, comp_name_cn, comp_name_en,comp_active,comp_start_date,comp_end_date,comp_service_level, comp_email,comp_tel,comp_fax,comp_address, comp_contact,create_time, modify_time) 
values('{CC}','{$companyname}', '', 1, now(), null, 0, '{$email}', '{$tel}', '{$fax}', '', '{$contact}', now(), now()); 

-- 建立用户
insert into P_USER (user_name, user_login_name, user_email, user_password, user_password_modify_date,active,comp_code,version, removed) 
values('admin','admin','{$email}', 'e10adc3949ba59abbe56e057f20f883e',now(),1,'{CC}',0,0);

-- 增加admin角色
insert into P_ROLE (role_name,active,comp_code,version,removed) 
values ('admin', 1, '{CC}',0,0);

-- 给第一个用户admin角色

insert into P_USER_ROLE (user_id, role_id)
values(1, 1);

-- admin费用权限
insert into P_USER_EXPE_PERMISSION (user_id, chcl_id, chcl_name, expe_type, usep_editable, usep_view_all, usep_edit_all, comp_code, version, removed) 
values (1, 0, '所有费用', 'R', 1, 1, 1, '{CC}', 0, 0);

-- 上面是应收, 这是应付
insert into P_USER_EXPE_PERMISSION (user_id, chcl_id, chcl_name, expe_type, usep_editable, usep_view_all, usep_edit_all, comp_code, version, removed) 
values (1, 0, '所有费用', 'P', 1, 1, 1, '{CC}', 0, 0);

-- admin权限初始化
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000102030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010204', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010205', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010206', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010207', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001020704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000103030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010305', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010306', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010307', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001030704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010313', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001031304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000105030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010505', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010506', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010507', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010508', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050801', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050802', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050803', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050804', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010509', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050901', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050902', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050903', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001050904', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010510', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051001', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051002', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051003', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051004', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010511', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010512', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001051203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000106030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010605', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010606', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010607', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010608', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060801', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060802', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060803', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060804', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010609', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060901', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060902', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060903', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001060904', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010610', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061001', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061002', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061003', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061004', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010611', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00010612', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0001061203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020109', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000202030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020204', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020205', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020206', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020207', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002020704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030109', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000203030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020305', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020306', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020307', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030801', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030802', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030803', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002030804', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020310', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031001', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031002', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031003', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031004', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020311', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020312', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002031203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000204', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020412', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041204', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002041205', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000205', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020505', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020509', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00020605', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002060501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0002060502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000206050203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000302030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030204', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030205', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030206', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030207', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003020704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000303030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030305', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030306', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030307', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030801', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030802', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030803', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0003030804', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000402030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040206', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004020604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000403030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00040306', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0004030604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000502030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050207', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005020704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030113', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000503030309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00050307', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0005030704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0006', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070106', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070204', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070205', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070305', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070306', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070311', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070405', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000705', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070505', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070506', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000706', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070605', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000707', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070705', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070706', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000708', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070801', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070802', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070803', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070804', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070805', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070806', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070807', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070810', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000709', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070901', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070902', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070903', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070904', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070905', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00070906', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000710', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071001', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071002', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071003', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071006', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000711', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000712', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000713', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130208', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130209', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130308', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0007130309', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000714', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00071402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000715', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0008', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000801', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000802', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080204', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000803', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000804', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000805', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000806', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000807', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000808', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080801', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080804', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000809', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080901', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00080904', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000810', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081001', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081004', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000811', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000812', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081204', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000814', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000815', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081504', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000816', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081604', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000817', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00081704', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0009', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000901', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000902', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000903', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090304', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '000904', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00090404', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0010', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001001', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001002', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100204', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001003', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001004', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001005', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001006', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001007', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001008', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100801', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100802', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100803', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001009', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100901', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100902', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00100903', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001010', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101001', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101002', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101003', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001011', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001012', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001013', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001014', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001015', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001016', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001017', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001018', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101801', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101802', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101803', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001019', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101901', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101902', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00101903', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001020', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102001', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102002', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102003', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001021', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001022', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001023', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001024', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001025', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102503', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001026', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102601', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102602', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102603', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001027', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102701', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102702', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102703', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001028', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102801', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102802', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00102803', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '0011', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110101', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001102', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110201', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110202', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110203', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001103', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110301', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110302', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110303', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001104', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110401', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110402', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110403', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '001105', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110501', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110502', '{CC}');
insert into P_ROLE_FUNCTION(role_id, func_code, comp_code) values (1, '00110503', '{CC}');

INSERT INTO `P_MESSAGE_TOPIC` (`METO_ID`, `METO_NAME`, `METO_DESC`, `METO_TEMPLATE`, `METO_RULE`, `ACT_NAME`, `TETY_ID`, `ACTIVE`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
(1, '配船通知', '租船部生成委托时通知操作和调度', '大家好 <br><br>操作：{操作} <br><br>船名：{船名} or sub <br>租船人：{租船人} <br>发货人：{发货人} <br>LAYCAN：与客户：{预计船期从}/{预计船期到} 与船公司：{船期从}/{船期到} <br>船公司：{船公司} <br>船代：{船代} <br>计费标准： 与客户{客户计费单位} 与船公司{船公司计费单位} <br>配货：{毛重} {客户计费单位} <br>合同号：{合同号} <br>FOS编号: {委托号} <br>货物明细：{货物描述} <br>装（港区）/卸港 {装货港}({港区})/{卸货港} <br>条款：与船公司{船公司条款} 与客户{客户条款} <br><br>注意事项：{注意事项} <br><br>装船要求：{备注}', 'rowAction=N,consBizType=B,consMasterFlag=1', 'CONS_S', 37, 1, '{CC}', 3, 0),
(2, '核销单超期未退通知', '核销单, 开船超过30天, 但是未退回', '核销单号: {核销单号}, 委托号: {委托号}, 开船超过30天, 状态未退回', NULL, 'QUARTZ_FDOC_ALERT_WRITEOFF', 43, 1, '{CC}', 1, 0),
(3, '业务员超期提示', '查询有客户超期严重的业务员,提示扣他名下所有客户的提单列表', '业务员: {业务员}, 提单号: {提单号}', NULL, 'QUARTZ_CONS_ALERT_SALES_OVERDUE', 45, 1, '{CC}', 0, 0);

