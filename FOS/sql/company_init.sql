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
-- 导出表中的数据 `G_CUSTOMS_TYPE`
--

INSERT INTO `G_CUSTOMS_TYPE` (`CUTY_CODE`, `CUTY_NAME`,`COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('KD','口地', '{CC}', 0, 0),
('SA','属岸','{CC}', 0, 0);
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
('ware_no', '仓储单号', '{CC}', '<COMP><YY>W<SN>', 6, '<COMP><YY>', 3),
('ws_consign_no', '网上订舱编号', '{CC}', '<COMP>W<YY><SN>', 6, '<COMP>W<YY>', 3);
--
-- 导出表中的数据 `P_TEMPLATE`
--

INSERT INTO `P_TEMPLATE` (`TEMP_NAME`, `TEMP_CLASS`, `TEMP_TYPE`, `TETY_ID`, `TETY_CODE`, `TETY_NAME`, `TEMP_FILE_NAME`, `TEMP_DESC`, `ACTIVE`, `CREATE_BY`, `CREATE_TIME`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('进口业务流程表', 'B', 'xls', 53, 'BUSINESS_PROCESS', '业务流程表', NULL, '进口业务流程表', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0),
('基础数据-国家', 'B', 'xls', 13, 'COUN', NULL, NULL, '国家数据导出模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('基础数据-港口', 'B', 'xls', 14, 'PORT', NULL, NULL, '港口数据导出模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '委托列表导出模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('报关委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '报关委托列表', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('报检委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '报检委托列表', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('加工贸易列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '加工贸易列表', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('产地证列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '产地证列表', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
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
('贸易合同', 'B', 'xls', 51, 'CUDE_CONTRACT', '贸易合同模板', NULL, '贸易合同', 1, 11, '2008-11-07 00:00:00', 11, '2008-11-07 11:38:27', '{CC}', 1, 0),
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
('单票审核', 'B', 'xls', 16, 'CONS_AUDIT', '单票审核', NULL, '单票审核导出模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('发票模板', 'B', 'xls', 9, 'INVO', '发票模板', NULL, '发票套打模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('费用确认单', 'B', 'xls', 34, 'EXPE_CONFIRM', '费用确认单', NULL, '费用确认单', 1, 3, '2009-02-16 14:05:57', 3, '2009-02-16 14:05:57', '{CC}', 0, 0),
('费用结算单', 'B', 'xls', 52, 'EXPE_SETTLEMENT', '费用结算单', NULL, '费用结算单', 1, 3, '2009-02-16 14:05:57', 3, '2009-02-16 14:05:57', '{CC}', 0, 0),
('对账单', 'B', 'xls', 17, 'BILL', '对账单', NULL, '对账单输出模板', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('运价表', 'B', 'xls', 32, 'PRSH_LIST', '运价表', NULL, '运价表', 1, 3, '2009-02-19 15:05:02', 3, '2009-02-19 15:05:02', '{CC}', 0, 0),
('发货清单导入模板', 'B', 'xls', 35, 'PALI_IMPORT', '发货清单导入模板', NULL, '发货清单批量导入', 1, 2, '2009-02-24 20:35:22', 2, '2009-02-24 20:35:22', '{CC}', 0, 0),
('账单清单模板', 'B', 'xls', 36, 'INVO_LIST', '账单清单', NULL, '账单清单模板', 1, 3, '2009-03-22 20:50:02', 3, '2009-03-22 20:50:02', '{CC}', 0, 0),
('核销明细', 'B', 'xls', 31, 'VOUC_LIST', '核销明细', NULL, '核销明细', 1, 3, '2008-11-28 13:57:20', 3, '2008-11-28 13:57:20', '{CC}', 0, 0),
('DebitNote模板', 'B', 'xls', 9, 'INVO', '发票模板', NULL, 'DebitNote模板', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0),
('进口付汇联退单申请', 'B', 'xls', 48, 'CUSTOMS_DOC_STAT', '退单申请表', NULL, '进口付汇联退单申请', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0),
('出口收汇联&退税联退单申请', 'B', 'xls', 48, 'CUSTOMS_DOC_STAT', '退单申请表', NULL, '出口收汇联&退税联退单申请', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0),
('加工贸易催核表', 'B', 'xls', 47, 'TRADE_STAT', '退单申请表', NULL, '加工贸易催核表', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0),
('报关委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '报关委托列表', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('报检委托列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '报检委托列表', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('加工贸易列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '加工贸易列表', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('产地证列表', 'B', 'xls', 15, 'CONS_LIST', '委托列表', NULL, '产地证列表', 1, 1, '2008-10-10 00:00:00', 1, '2008-10-10 00:00:00', '{CC}', 0, 0),
('减免税统计表', 'B', 'xls', 46, 'RELIEF_TAX_STAT', '减免税统计表', NULL, '减免税统计表', 1, 86, '2009-03-22 23:08:50', 86, '2009-03-22 23:08:50', '{CC}', 0, 0)

;

--
-- 导出表中的数据 `S_EX_RATE`
--

INSERT INTO `S_EX_RATE` (`EXRA_BASE_CURRENCY`, `EXRA_EX_CURRENCY`, `EXRA_START_DATE`, `EXRA_END_DATE`, `EXRA_RATE`, `ACTIVE`, `MODIFY_BY`, `MODIFY_TIME`, `COMP_CODE`, `VERSION`, `REMOVED`) VALUES
('USD', 'CNY', '2009-02-09', NULL, '6.8340', 1, 2, '2009-02-09 15:14:46', '{CC}', 0, 0),
('CNY', 'USD', '2009-02-09', NULL, '0.1463', 1, 2, '2009-02-09 15:14:46', '{CC}', 0, 0);


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
('CONS_AR_OVERDUE_DAYS', '最大应收账款天数', '60', 1, NULL, '业务设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_CE', '整箱出口业务类型代码', 'CE', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_CI', '整箱进口业务类型代码', 'CI', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_PE', '拼箱出口业务类型代码', 'PE', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_PI', '进口分拨业务类型代码', 'PI', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_BE', '散货出口业务类型代码', 'BE', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_BI', '散货进口业务类型代码', 'BI', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_AE', '空运出口业务类型代码', 'AE', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_AI', '空运进口业务类型代码', 'AI', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_GE', '出口报关业务类型代码', 'GE', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_GI', '进口报关业务类型代码', 'GI', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_IE', '出口报检业务类型代码', 'IE', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_II', '进口报检业务类型代码', 'II', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_MH', '加工贸易业务类型代码', 'M', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_FH', '减免税业务类型代码', 'F', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0),
('BIZ_TYPE_CODE_RH', '企业注册业务类型代码', 'R', 0, NULL, '业务类型设置', 'A', NULL, '{CC}', 0, 0)
;

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

