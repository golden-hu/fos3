var SYS= 'FOS3.0网上服务系统';
var M_NO_DATA_SELECTED='请先选择一条记录!';
var M_S = '数据保存成功';
var M_F = '数据保存失败';

var C_BC='业务类型';
var C_BT='运输方式';
var C_ST='装运方式';

var C_ADD='新增';
var C_REMOVE='删除';
var C_EDIT='编辑';
var C_SAVE='保存';
var C_REFRESH='刷新';
var C_CONFIRM='确认';
var C_CANCEL_CONFIRM='取消确认';
var C_OK='确定';
var C_CANCEL='取消';
var C_SEARCH='查询';
var C_RESET='重置';
var C_EXPORT='输出';
var C_STATUS='状态';
var C_POD='卸货港';
var C_POL='装货港';
var C_CONS_NO='业务号';
var C_WS_USR_NAME='用户名';
var C_WS_USR_PASS='密码';
var C_WS_EMAIL='电子邮件';
var C_WS_COMPANY='公司名称';
var C_WS_TEL='联系电话';
var C_WS_FAX='传真';
var C_WS_FIRST_NAME='姓名';
var C_WS_TITLE='职位';
var C_WS_DEPT='部门';
var C_WS_MOBILE='手机';
var C_WS_ADDRESS='地址';
var C_WS_CITY='城市';
var C_WS_PROVINCE='省';
var C_WS_ZIP='邮编';
var C_WS_URL='公司网址';

var C_SHIPPER='发货人';
var C_CONSIGNEE='收货人';
var C_NOTIFIER='通知人';
var C_MARKS='唛头';
var C_CARGO_DESC='货物描述';
var C_PACKAGES='件数';
var C_WS_WCON_ACCEPTED='已受理';
var C_WS_WCON_NOT_ACCEPTED='未受理';
var C_TRADE_CONTRACT_NO='贸易合同号';
var C_VESS='船名';
var C_VESS_NAME_CN='中文船名';
var C_VOYA='航次';
var C_VESS_VOYA='船名航次';
var C_CARRIER='船公司';
var C_CONT_NO='箱号';
var C_SAIL_DATE='开航日期';
var C_CONS_DATE='委托日期';
var C_ETD_V='预计开船日期';
var C_ETD_T='预计开船时间';
var C_ETA_V='预计到港日期';
var C_ETA_T='预计到港时间';
var C_BERTHING_DATE='实际到港日期';
var C_BERTHING_DATE_T='实际到港时间';
var C_SAIL_DATE_V='实际开船日期';
var C_SAIL_DATE_T='实际开船时间';
var C_LOAD_DATE_F='装船日期(从)';
var C_LOAD_DATE_T='装船日期(到)';
var C_VOYA_PORTS='挂港';
var C_HARBOUR='港区';
var C_SHLI='航线';
var C_BL_NO='提单号';
var C_TO='至';
var C_BILL_NO='对账单号';
var C_BILL_OBJECT='对账单位';
var C_AMOUNT='金额';
var C_CURR='币种';
var C_BILL_DATE='制单日期';
var C_BILL_BY='制单人';
var C_REMARKS='备注';
var C_TASK_NAME='任务名称';
var C_TASK_ESTIMATED_DATE='预计完成日期';
var C_TASK_FINISHED_DATE='实际完成日期';
var C_FINISHED='已完成';
var C_SETTLE_OBJECT='结算单位';
var C_BILL_INFO='对账单信息';
var C_SUM_CNY='人民币合计';
var C_SUM_USD='美元合计';
var C_SUM_LOC='本位币合计';
var C_EXPE_LINE='费用明细';
var C_UNIT_PRICE='单价';
var C_UNIT='计量单位';
var C_QUANTITY='数量';
var C_UNIT_PRICE='单价';
var C_CHAR='费用名称';
var C_EX_RATE='汇率';
var C_EX_AMOUNT='折算金额';
var C_MBL_NO='M B/L No.';
var C_HBL_NO='H B/L No.';
var M_NOT_FOUND = '没有找到数据！';
var M_R_C = '确认要删除所选记录码?';
var SR_TRAN='B';var SR_WARE='E';var SR_INSP='D';var SR_CUDE='C';
var DATEF='Y-m-d';
var C_LW=400;
var BF=500;var EQ=1;var LT=2;var LE=3;var GT=4;var GE=5;var NE=6;var LI=7;var IN=8;

var portTpl = new Ext.XTemplate('<tpl for="."><div class="list-item"><h3><span>{portCode}</span>{portNameEn}</h3></div></tpl>');

