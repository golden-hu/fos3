ShipSchedule = Ext.data.Record.create(
	['shscId','vesselName','vesselNameCn','voyage','planningUnberthing',
	 'actualUnberthing','planningBerthing','actualBerthing',
	 'planningBerth','actualBerth',
	 'loadingTime','cutDate',
	 'portArea','shippingAgency',
	 'isExport','isLate','cutOff','source','status']);	
	
GCountry = Ext.data.Record.create(['id','counId','counCode','counNameEn','counNameCn','compCode',
	'active','version','rowAction']);
GShippingLine = Ext.data.Record.create(['id','shliId','shliCode','shliName','shliNameEn','shliBulkFlag','shliContFlag','active','compCode','version','rowAction']);
GUnit = Ext.data.Record.create(['id','unitId','unitCode','unitName','active','compCode','version','rowAction']); 
GContainerClass = Ext.data.Record.create(['id','coclId','coclCode','coclName','active','compCode','version','rowAction']); 
GContainerType = Ext.data.Record.create(['id','cotyId','cotyCode','cotyLength','coclCode','cotyTeu','cotyIsoCode','cotyUnCode','cotyTareWeight','cotyMaxWeight','cotyMaxMeasurement','active','compCode','version','rowAction']); 
GPort = Ext.data.Record.create(['id','portId','portCode','portNameEn','portNameCn','counCode','portType','portCnty','portArea','compCode','active','version','rowAction']); 
GPlace = Ext.data.Record.create(['id','placId','placCode','placNameEn','placName','placType','placDesc','counCode','placProvinceId','placProvinceName','placCityId','placCityName','custId','custName','custSname','placAddress','placStation','active','compCode','version','rowAction']); 
GPackage = Ext.data.Record.create(['id','packId','packCode','packName','packNameCn','compCode','active','version','rowAction']); 
GTradeTerm = Ext.data.Record.create(['id','trteId','trteCode','trteName','compCode','active','version','rowAction']); 	
GTransTerm = Ext.data.Record.create(['id','tranId','tranCode','tranName','tranBulkFlag','tranContFlag','compCode','active','version','rowAction']);
GPaymentTerm = Ext.data.Record.create(['id','pateId','pateCode','pateName','compCode','active','version','rowAction']);
GTradeType = Ext.data.Record.create(['id','trtyId','trtyCode','trtyName','compCode','active','version','rowAction']);
GUsage = Ext.data.Record.create(['id','usagId','usagCode','usagName','compCode','active','version','rowAction']);
GLevyType = Ext.data.Record.create(['id','letyId','letyCode','letyName','compCode','active','removed','version','rowAction']);	
GServiceItem = Ext.data.Record.create(['id','seitId','seitName','compCode','active','removed','version','rowAction']);	
GExchangeSettlement = Ext.data.Record.create(['id','exseId','exseCode','exseName','compCode','active','version','rowAction']);	
GTransType = Ext.data.Record.create(['id','tratId','tratCode','tratName','compCode','active','version','rowAction']);	
GIssueType = Ext.data.Record.create(['id','istyId','istyCode','istyName','compCode','active','version','rowAction']);
GSettlementWay = Ext.data.Record.create(['id','sewaId','sewaCode','sewaName','compCode','active','version','rowAction']);
GCurrency = Ext.data.Record.create(['id','currId','currCode','currName','currSymbol','compCode','active','version','rowAction']);
GChargeClass = Ext.data.Record.create(['id','chclId','chclCode','chclName','active','compCode','version','rowAction']);
GCharge = Ext.data.Record.create(['id','charId','charCode','charName','charNameEn','currCode','unitId','chclId','charCnyP','charCnyR','charUsdP','charUsdR','active','compCode','version','rowAction']);
GVessel = Ext.data.Record.create([{name:'id',type:'int'},'vessId','vessCode','vessNameEn','vessNameCn','counCode','vessLiner','vessDesc','vessType','active','compCode','version','rowAction']);
GVoyage = Ext.data.Record.create(
	['id','voyaId','voyaName','vessId','vessName','vessNameCn','voyaClass','voyaType',
	 'voyaCarrier','voyaCarrierName','voyaHarbourId','voyaHarbourName','voyaPorts','shliId','shliName','voyaCarrierLine',
	{name:'voyaQuantity',type:'float'},
	{name:'voyaShippedQuantity',type:'float'},
	{name:'voyaFactQuantity',type:'float'},
	{name:'voyaShipDateF',type:'date',dateFormat:DATEF},
	{name:'voyaShipDateT',type:'date',dateFormat:DATEF},
	{name:'voyaLoadDateF',type:'date',dateFormat:DATEF},
    {name:'voyaLoadDateT',type:'date',dateFormat:DATEF},
	{name:'voyaEtd',type:'date',dateFormat:DATEF},'voyaEtdT',
	{name:'voyaEta',type:'date',dateFormat:DATEF},'voyaEtaT',
	{name:'voyaBerthingDate',type:'date',dateFormat:DATEF},'voyaBerthingDateT',
	{name:'voyaSailDate',type:'date',dateFormat:DATEF},'voyaSailDateT',
	'voyaSailedFlag','voyaShipMapFlag',
	'voyaDispatcherId','voyaDispatcherName','voyaOperatorId','voyaOperatorName',
	'compCode','active','version','rowAction']);
GDocumentType = Ext.data.Record.create(['id','dotyCode','dotyId','dotyName','dotyClass','dotyReturnFlag','dotyBackFlag','compCode','active','version','rowAction']);
GVehicleType = Ext.data.Record.create(['id','vehtId','vehtName','active','compCode','version','rowAction']);
GCargoClass = Ext.data.Record.create(['id','caclId','caclCode','caclNameCn','caclNameEn','active','compCode','version','rowAction']);
GCargoType = Ext.data.Record.create(['id','catyId','caclId','catyCode','catyNameCn','catyNameEn','catyManuNo',
   'catySpec','catyCargoType','catyDanagerFlag','catyDanagerNo','catyDanagerProperty','catyRemarks','active','compCode','version','rowAction']);
GCustomsType = Ext.data.Record.create(['cutyId','cutyCode','cutyName','compCode','active','version','rowAction']);
GInspectionType = Ext.data.Record.create(['intyId','intyCode','intyName','compCode','active','version','rowAction']);

GTrainStation = Ext.data.Record.create(['id','trainId','trainCode','trainNameEn','trainNameCn','counCode','trainType','trainTypeFlag','compCode','active','version','rowAction']); 

var CONT_TYPE_S = new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','货主SOC'],['1','我司SOC'],['2','COC']]});
getCONT_TYPE_S = function(v){if(v>=0)return CONT_TYPE_S.getById(v).get('NAME');else return'';};

var TRANS_S = new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','集装箱'],['1','整车'],['2','零担']]});
getTRANS_S = function(v){if(v>=0)return TRANS_S.getById(v).get('NAME');else return'';};

var getTRAIN_S = function(){
	if(Ext.StoreMgr.containsKey('S_TRAIN')){
		return Ext.StoreMgr.get('S_TRAIN');
	}
	else {
		s = GS('TRAIN_Q','GTrainStation',GTrainStation,'trainCode','ASC','','S_TRAIN','trainId');
		s.load({params:{counCode:'CN',active:'1'},callback:function(){getBTS();}});
		return s;
	}    
};


var ACTION_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['FCONS_S','租船合同保存'],['LOLI_S','配船保存'],['CONS_S','委托保存'],['CONS_U_1','订舱确认']]});
getACTION = function(v){if(v) return ACTION_S.getById(v).get('NAME'); else return '';};

var SHTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['FCL','整箱'],['LCL','拼箱'],['BULK','散货']]});
getSHTY = function(v){if(v) return SHTY_S.getById(v).get('NAME'); else return '';};

var TRACK_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','车皮'],[2,'驳船'],['3','卡车'],['4','不做码头']]});
getTRACK_T = function(v){if(v) return TRACK_T_S.getById(v).get('NAME'); else return '';};

var BT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['C','集装箱'],['B','散货'],['A','空运'],['T','铁运'],
                ['G','报关'],['I','报检'],['K','挂靠'],['M','加工贸易'],['F','减免税'],['R','企业注册'],['O','海外业务']]});
getBT = function(v){if(v) return BT_S.getById(v).get('NAME'); else return '';};

var PLTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','省'],['2','市/县'],['3','港区']]});
getPLTY = function(v){if(v) return PLTY_S.getById(v).get('NAME'); else return '';};

var BC_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['E','出口'],['I','进口'],['T','进境'],['D','内贸'],['R','管理'],['K','空箱返回']]});
getBC = function(v){if(v) return BC_S.getById(v).get('NAME'); else return '';};

var SOUR_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','自揽货'],['1','同行货'],['2','船公司指定货'],['3','海外代理指定货']]});

var INDU_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','化工'],['2','纺织服装'],['3','建筑建材'],['4','汽车'],['5','电子电器'],['6','农林牧副渔'],['7','轻工/日化'],['8','医药卫生'],['9','机械设备制造'],['10','矿冶能源'],['11','食品'],['12','零售流通'],['13','物流'],['14','交通运输企业'],['15','其它']]});	
getINDU = function(v){if(v) return INDU_S.getById(v).get('NAME'); else return '';};

var COPR_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','国有'],['1','合作'],['2','合资'],['3','独资'],['4','集体'],['5','私营'],['6','个体工商户'],['7','其他']]});
getCOPR = function(v){if(v) return COPR_S.getById(v).get('NAME'); else return '';};

var DOCL_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['10','出口报检随附单据'],['11','出口报检需要证单'],['12','出口报关随附单据'],['20','进口报检需要证单'],['21','进口报检需要证单'],['22','进口报关随附单据'],['30','其他单']]});
getDOCL = function(v){if(v) return DOCL_S.getById(v).get('NAME'); else return '';};

var ITTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','当面交接'],['1','快递'],['2','邮件']]});
getITTY = function(v){if(v) return ITTY_S.getById(v).get('NAME'); else return '';};

var TEUN_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['F','F'],['C','C']]});
var USFU_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','全水'],['1','路桥']]});
var TROT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','提箱'],['1','产地装箱'],['2','验货'],['3','转关']]});
var TANT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','拖车'],['1','货车'],['2','水路'],['3','铁路']]});

var FL_S=new Ext.data.SimpleStore({id:0,fields:['CODE'],data:[['FCL'],['LCL']]});
getFL = function(v){if(v) return FL_S.getById(v).get('NAME'); else return '';};
var GEND_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['M','男'],['F','女']]});
getGEND = function(v){if(v) return GEND_S.getById(v).get('NAME'); else return '';};
var TFTY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['xls','xls'],['doc','doc']]});
var DC_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['R','红色'],['G','绿色'],['B','蓝色'],['W','白色']]});
var BIZT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['A','海运货代'],['B','无船承运']]});
var COLE_S=new Ext.data.SimpleStore({id:0,fields:['CODE'],data:[['20'],['40'],['45'],['10'],['53'],['12'],['38'],['48']]});
var SWIT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','无'],['1','商检换单'],['2','厂检换单']]});

var VETY_S = new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','集装箱船'],['2','散杂货船'],['3','驳船']]});
getVETY = function(v){if(v) return VETY_S.getById(v).get('NAME'); else return '';};

var CTST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',S_SHIP_NOT],['1',S_SHIP_PARTY],['2',S_SHIP_ALL]]});
getCTST = function(v){if(v>=0) return CTST_S.getById(v).get('NAME'); else return '';};

var COST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未订舱'],['1','订舱已开始'],['2','订舱已确认'],['3','已退关'],['4','已改配'],['5','已退关'],['6','已作废'],['7','已完成'],['8','已归档']]});
getCOST = function(v){if(v>=0) return COST_S.getById(v).get('NAME'); else return '';};
var CIST_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未到港'],['1','已到港'],['2','已换单'],['3','已放行'],['4','已送货'],['6','已作废'],['7','已完成']]});
getCIST = function(v){if(v>=0) return CIST_S.getById(v).get('NAME'); else return '';};

var TRADE_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','未确认'],['1','已确认'],['2','已完成'],['3','已作废']]});
getTRADE_S = function(v){if(v>=0) return TRADE_S.getById(v).get('NAME'); else return '';};

var getTTB_S = function(){
	var s=GS('TTER','GTransTerm',GTransTerm,'tranId','ASC','');
	var a=getTRAN_S().getRange();
	for(var i=0;i<a.length;i++){
		if(a[i].get('tranBulkFlag')==1) s.add(a[i]);
	}
	return s;
};
var getTTC_S = function(){
	var s=GS('TTER','GTransTerm',GTransTerm,'tranId','ASC','');
	var a=getTRAN_S().getRange();
	for(var i=0;i<a.length;i++){
		if(a[i].get('tranContFlag')==1) s.add(a[i]);
	}
	return s;
};

var getPATE_S = function(){return getGStore('PATE','GPaymentTerm',GPaymentTerm,'pateId','ASC','');};
getPATE = function(v){var _cs= getPATE_S();if(v) return _cs.getById(v)?_cs.getById(v).get('pateName'):v; else return '';};

var getUNIT_S = function(){
	if(Ext.StoreMgr.containsKey('S_UNIT')){return Ext.StoreMgr.get('S_UNIT');}
	else {s = GS('UNIT_Q','GUnit',GUnit,'','','','S_UNIT');s.load({params:{active:'1'}});return s;}    
};
getUNIT = function(v,m,r){var _cs= getUNIT_S();if(v) return _cs.getById(v)?_cs.getById(v).get('unitName'):v; else return '';}; 

var getUNIT_C = function(){
	if(Ext.StoreMgr.containsKey('S_UNIT_C')){return Ext.StoreMgr.get('S_UNIT_C');}
	else {s = GS('UNIT_C','GUnit',GUnit,'','','','S_UNIT_C');s.load({params:{active:'1'}});return s;}    
};
getUNIT = function(v,m,r){var _cs= getUNIT_S();if(v) return _cs.getById(v)?_cs.getById(v).get('unitName'):v; else return '';}; 

function getPS(){return new Ext.data.Store({url: SERVICE_URL+'?A=PORT_Q',
	reader: new Ext.data.XmlReader({record:'GPort'},GPort),
	sortInfo:{field:'portNameEn',direction:'ASC'}});};
	
var getCACL_S = function(){return getGStore('CACL','GCargoClass',GCargoClass,'caclId','DESC','');};
getCACL = function(v){var _cs=getCACL_S();if(v) return _cs.getById(v)?_cs.getById(v).get('caclNameCn'):v; else return '';}; 

var getVEHT_S = function(){return getGStore('VEHT','GVehicleType',GVehicleType,'vehtId','ASC','');};	
getVEHT = function(v){var _cs= getVEHT_S();if(v) return _cs.getById(v)?_cs.getById(v).get('vehtName'):v; else return '';}; 


var getSEWA_S = function(){
	return getGStore('SEWA','GSettlementWay',GSettlementWay,'sewaId','ASC','');
};

getSEWA = function(v){
	var _cs= getSEWA_S();
	if(v) 
		return _cs.getById(v)?_cs.getById(v).get('sewaName'):v; 
	else 
		return '';
}; 

var getISTY_S = function(){return getGStore('ISTY','GIssueType',GIssueType,'istyId','ASC','');};
getISTY = function(v){var _cs= getISTY_S();if(v) return _cs.getById(v)?_cs.getById(v).get('istyName'):v; else return '';};

var getTRAN_S = function(){return getGStore('TTER','GTransTerm',GTransTerm,'tranId','ASC','');};
getTRAN = function(v){var _cs= getTRAN_S();if(v) return _cs.getById(v)?_cs.getById(v).get('tranCode'):v; else return '';};


var getCustomsType_S = function(){
	return getGStore('CUTY','GCustomsType',GCustomsType,'cutyId','ASC','');
};	
getCustomsType = function(v){
	var _cs= getCustomsType_S();
	if(v) 
		return _cs.getById(v)?_cs.getById(v).get('cutyName'):v; 
	else 
		return '';
}; 

var getInspectionType_S = function(){
	return getGStore('INTY','GInspectionType',GInspectionType,'intyId','ASC','');
};	
getInspectionType = function(v){
	var _cs= getInspectionType_S();
	if(v) 
		return _cs.getById(v)?_cs.getById(v).get('intyName'):v; 
	else 
		return '';
}; 

var CUTY_S = new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0','客户自报'],['1','代报']]});
getCUTY = function(v){var _cs= CUTY_S;if(v) return _cs.getById(v)?_cs.getById(v).get('NAME'):v; else return '';}; 

var getCOCL_S = function(){return getGStore('COCL','GContainerClass',GContainerClass,'coclId','ASC','');};
getCOCL = function(v,m,r){var _cs= getCOCL_S();if(v) return _cs.getById(v)?_cs.getById(v).get('coclName'):v; else return '';}; 

var getUSAG_S = function(){return getGStore('USAG','GUsage',GUsage,'usagId','ASC','');};
getUSAG = function(v,m,r){var _cs= getUSAG_S();if(v) return _cs.getById(v)?_cs.getById(v).get('usagName'):v; else return '';}; 

var getCOUN_S = function(){return getGStore('COUN','GCountry',GCountry,'counCode','ASC','');};
getCOUN = function(v,m,r){var _cs= getCOUN_S();if(v) return _cs.getById(v)?_cs.getById(v).get('counNameCn'):v; else return '';}; 

var getPLAC_S = function(){return getGStore('PLAC','GPlace',GPlace,'shliId','ASC','');};
getPLAC = function(v,m,r){var _cs= getPLAC_S();if(v) return _cs.getById(v)?_cs.getById(v).get('placName'):v; else return '';}; 

var getSHLI_S = function(){return getGStore('SHLI','GShippingLine',GShippingLine,'shliId','ASC','');};
getSHLI = function(v,m,r){var _cs= getSHLI_S();if(v) return _cs.getById(v)?_cs.getById(v).get('shliName'):v; else return '';}; 

var getVESS_S = function(){return getGStore('VESS','GVessel',GVessel,'vessId','ASC','');};
getVESS = function(v,m,r){var _cs= getVESS_S();if(v) return _cs.getById(v)?_cs.getById(v).get('vessNameEn'):v; else return '';}; 

var getPOL_S = function(){
	if(Ext.StoreMgr.containsKey('S_POL')){return Ext.StoreMgr.get('S_POL');}
	else {
		s = GS('PORT_Q','GPort',GPort,'portNameEn','ASC','','S_POL','portId');
    	s.load({params:{counCode:'CN',active:'1'},callback:function(){getBP();}});return s;}    
};
var getHARB_S = function(){
	if(Ext.StoreMgr.containsKey('S_HARBOUR')){return Ext.StoreMgr.get('S_HARBOUR');}
	else {
		s = GS('PLAC_Q','GPlace',GPlace,'placName','ASC','','S_HARBOUR','placId');
    	s.load({params:{placType:'3',active:'1'}});return s;}
};

var getPROV_S = function(){
	if(Ext.StoreMgr.containsKey('S_PROV')){return Ext.StoreMgr.get('S_PROV');}
	else {
		s = GS('PLAC_Q','GPlace',GPlace,'placName','ASC','','S_PROV','placId');
    	s.load({params:{placType:'1',active:'1'}});return s;}
};
var getPACK_S = function(){return getGStore('PACK','GPackage',GPackage,'packId','ASC','');};
getPACK = function(v){var _cs= getPACK_S();if(v) return _cs.getById(v)?_cs.getById(v).get('packName'):v; else return '';}; 

var getCOTY_S = function(){return getGStore('COTY','GContainerType',GContainerType,'cotyCode','ASC','cotyId');};
getCOTY = function(v){var _cs= getCOTY_S();if(v) return _cs.getById(v)?_cs.getById(v).get('cotyCode'):v; else return '';};
getCLCODE=function(v){var _cs= getCOTY_S();if(v) return _cs.getById(v)?_cs.getById(v).get('coclCode'):v; else return '';};
getCTEU = function(v){var _cs= getCOTY_S();if(v) return _cs.getById(v)?(_cs.getById(v).get('cotyTeu')?_cs.getById(v).get('cotyTeu'):1):1; else return 1;}; 

var getCHCL_S = function(){return getGStore('CHCL','GChargeClass',GChargeClass,'chclId','ASC','chclId');};
getCHCL = function(v){var _cs= getCHCL_S();if(v) return _cs.getById(v)?_cs.getById(v).get('chclName'):v; else return '';}; 

var getDOTY_S = function(){return getGStore('DOTY','GDocumentType',GDocumentType,'dotyId','ASC','dotyId');};
getDOTY = function(v){var _cs= getDOTY_S();if(v) return _cs.getById(v)?_cs.getById(v).get('dotyName'):v; else return '';}; 

var getTRTY_S = function(){return getGStore('TRTY','GTradeType',GTradeType,'trtyId','ASC','trtyId');};
var getTRAT_S = function(){return getGStore('TRAT','GTransType',GTransType,'tratId','ASC','tratId');};
var getTRTE_S = function(){return getGStore('TRTE','GTradeTerm',GTradeTerm,'trteId','ASC','trteId');};
var getLETY_S = function(){return getGStore('LETY','GLevyType',GLevyType,'letyId','ASC','letyId');};
var getEXSE_S = function(){return getGStore('EXSE','GExchangeSettlement',GExchangeSettlement,'exseId','ASC','exseId');};
var getSEIT_S = function(){return getGStore('SEIT','GServiceItem',GServiceItem,'seitId','ASC','seitId');};

var getTS_S = function(){return getGStore('TRAIN','GTrainStation',GTrainStation,'trainId','DESC','');};
getTS = function(v){if(v){var _cs= getTS_S();return _cs.getById(v)?_cs.getById(v).get('trainNameCn'):v; } else return '';}; 

//口岸
var getBRANCHR_S=function(){	
	if(Ext.StoreMgr.containsKey('BRANCH_S')){return Ext.StoreMgr.get('BRANCH_S');}
	else {
		var s=new Ext.data.Store({storeId:'BRANCH_S',url:SERVICE_URL+'?A=BRANCH_Q',baseParams:{mt:'xml'},
			reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'PBranch',id:'branchId'},PBranch)
			});
		s.load();
		return s;
    }
};

var BASE_PORT='';
var BASE_PORT_NAME='';
var BASE_PORT_NAME_CN = '';

var getBP=function(){
	if(BASE_PORT!='') 
		return BASE_PORT;
	else{
		var bc=getCFG('BASE_PORT');
		var s=getPOL_S();
		var a=s.getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get('portCode')==bc){
				BASE_PORT=a[i].get('portId');
				BASE_PORT_NAME=a[i].get('portNameEn');
				BASE_PORT_NAME_CN=a[i].get('portNameCn');
				break;
			}
		}
		return BASE_PORT;
	}
};


