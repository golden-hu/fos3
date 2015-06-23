QParam = Ext.data.Record.create(['key','op','value','orGroup']); 

PBranch = Ext.data.Record.create(['id','branchId','branchName','compCode','version','rowAction']);

PComments = Ext.data.Record.create(['id','commId','objectId','objectType','commBody',
	'commBy','createTime','removed','compCode','version']);

PCompanyBankAccount= Ext.data.Record.create(['id','cobaId','cobaName','cobaBank',
	{name:'cobaAccount',type:'string'},
	'currCode','compCode','active','version','rowAction']);

PGroup = Ext.data.Record.create(['id','grouId','grouName','grouDesc','compCode','active','version','rowAction']);

PRole = Ext.data.Record.create(['id','roleId','roleName','roleDesc','active','compCode','version','rowAction']); 

PGroupUser = Ext.data.Record.create(['id','grusId','grouId','userId','userName','active','compCode','version','rowAction']); 

PUserRole = Ext.data.Record.create(['id','usroId','userId','roleId','roleName','compCode','active','version','rowAction']); 

PFunction = Ext.data.Record.create(['id','funcCode','funcName','funcType','active','compCode']); 

PRoleFunction = Ext.data.Record.create(['id','rofuId','funcCode','roleId','compCode','active','version','rowAction']); 

PTemplate = Ext.data.Record.create(['id',{name:'tempId',type:'int'},'tempName','tempDesc','tempType','tempClass','tempFileName','tetyId','tetyCode','tetyName','active','createBy','createTime','modifyBy','modifyTiem','compCode','version','rowAction']);

PTemplateType = Ext.data.Record.create(['id','tetyId','tetyName','tetyCode','tetyDesc','tetyClass','tetyType','tetyFormFlag','active','version','rowAction']);

PCompanyConfig = Ext.data.Record.create(['id','cocoId','cocoName','cocoCode','cocoDesc','cocoValue','cocoValueType',
	'cocoValueOptions','cocoGroup','cocoType','compCode','version','rowAction']);

PTaskType = Ext.data.Record.create(['id','tatyId','tatyName','tatyDId','tatyDName','tatyOrder','tatyDesc','tatyDateType','tatyDateEstimated',
	'tatyAction','tatyClass','tatyProperty','tatyDefaultOwner','tatyBizType','tatyBizClass','compCode','version','rowAction']);

PActionLog = Ext.data.Record.create(['acloId','acloActName','acloActRemark','acloTable','acloTid',
	'acloTno','acloUserId','acloUserName','acloIp','compCode','createTime']);

PMessage = Ext.data.Record.create(['messId','messType','messTo','messCc','messBcc',
    'messSubject','messBody','messAttachment','messFrom',{name:'messCreateTime',type:'date',dateFormat:'Y-m-d H:i:s'},
    'messSendFlag','messFromUserId','messFromUserName','messToUserId','messToUserName','compCode','rowAction']);

PMessageTopic = Ext.data.Record.create(['metoId','metoName','metoDesc','metoTemplate','metoRule',
	'actName','active','compCode','version','removed','rowAction']);

PMessageSubscribe = Ext.data.Record.create(['mesuId','metoId',
	{name:'mesuMailFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'mesuImFlag',type:'boolean',convert:function(v){return v==1;}},
	{name:'mesuSmFlag',type:'boolean',convert:function(v){return v==1;}},
	'mesuSubscriberType','mesuSubscriberId','mesuSubscriberName','mesuSubscriberEmail',
    'mesuSubscriberMobile','mesuCustomerType','compCode','version','removed','rowAction']);

PUserSetting = Ext.data.Record.create(['usseId','userId','usseName','usseValue']);

PUserExpePermission = Ext.data.Record.create(['usepId','userId','chclId','chclName','expeType',
	{name:'usepEditable',type:'boolean',convert:function(v){return v==1;}},
	{name:'usepViewAll',type:'boolean',convert:function(v){return v==1;}},
	{name:'usepEditAll',type:'boolean',convert:function(v){return v==1;}},
	'compCode','version','rowAction']);

PComments = Ext.data.Record.create(['commId','objectType','objectId','commBody','commBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);

FAttach = Ext.data.Record.create(['attachId','attachName','attachFileName','attachDesc',
  	'consId','consNo','createBy','modifyBy','securityFlag',
  	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
  	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
  	'compCode','version','rowAction']);
                              
WUser = Ext.data.Record.create(['id','wusrId','wusrName','wusrPassword','wusrFirstName','wusrLastName',
	'wusrTitle','wusrDept','wusrMobile','wusrEmail','wusrCompanyName','wusrAddress','wusrCity','wusrProvice',
	'wusrZip','wusrCountry','wusrTel','wusrFax','wusrUrl','wusrStatus','wusrLastLoginTime',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'wusrLastLoginTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'custId','compCode','version','rowAction']);

WInquiry = Ext.data.Record.create(['id','winqId','winqCompany','winqCargoDesc','winqCargoPackages','winqCargoGw','winqCargoMeasurement',
    'winqReceiptPlace','winqDeliveryPlace','winqPol','winqPolEn','winqPod','winqPodEn',
    'tranId','tranCode','pateId','pateName','winqBizType','winqRemarks',
 	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
 	{name:'modiryTime',type:'date',dateFormat:'Y-m-d H:i:s'},
 	'winqStatus','wusrId','wusrFirstName','wusrMobile','wusrCompanyName',
 	'wusrTel','compCode','version','rowAction']);
 	
OAnnouncement = Ext.data.Record.create(['id','annoId','annoTitle','annoType','annoContent','fileName',
	{name:'annoDate',type:'date',dateFormat:'Y-m-d H:i:s'},'createBy',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},'removed',
	'compCode','version','rowAction']); 	

var getTETY_S = function(){
	return getGStore('TETY','PTemplateType',PTemplateType,'tetyId','DESC','');
};

getTETY = function(v){
	var _cs=getTETY_S();
	if(v) 
		return _cs.getById(v)?_cs.getById(v).get('tetyName'):v; 
	else 
		return '';
}; 

var getTEMP_S = function(){
	//return getGStore('TEMP','PTemplate',PTemplate,'tempId','DESC','');
	
	if(Ext.StoreMgr.containsKey('TEMP_S')){return Ext.StoreMgr.get('TEMP_S');}
	else {
		s = GS('TEMP_Q','PTemplate',PTemplate,'tempId','DESC','','TEMP_S','tempId');
    	s.load({params:{active:'1'}});return s;
    }
};

var getTemplates = function(t){	
	var a = getTEMP_S().getRange();
	var c=[];
	for(var i=0;i<a.length;i++){
		if(a[i].get('tetyCode')==t) 
			c[c.length]=[a[i].get('tempId'),a[i].get('tempName')];
	}
	return 	new Ext.data.SimpleStore({id:0,fields:['tempId','tempName'],data:c});
};

var getSALE_S=function(){	
	if(Ext.StoreMgr.containsKey('SALE_S')){return Ext.StoreMgr.get('SALE_S');}
	else {
		s = GS('USER_Q','PUser',PUser,'userLoginName','ASC','','SALE_S','userId');
    	s.load({params:{userSalesFlag:'1',active:'1'}});return s;
    }
};

var getTATY_S=function(){	
	if(Ext.StoreMgr.containsKey('TATY_S')){return Ext.StoreMgr.get('TATY_S');}
	else {
		s = GS('TATY_Q','PTaskType',PTaskType,'tatyId','ASC','','TATY_S','tatyId');
    	s.load({params:{tatyBizType:BT_B,tatyBizClass:BC_E}});return s;
    }
};

var getBizTaskTypeStore = function(bc,bt){	
	if(Ext.StoreMgr.containsKey('TATY_S_'+bc+"_"+bt)){
		return Ext.StoreMgr.get('TATY_S_'+bc+"_"+bt);}
	else {
		s = GS('TATY_Q','PTaskType',PTaskType,'tatyId','ASC','','TATY_S_'+bc+"_"+bt,'tatyId');
    	s.load({params:{tatyBizType:bt,tatyBizClass:bc}});
    	return s;
    }
};

var getOP_S=function(){
	if(Ext.StoreMgr.containsKey('OP_S')){return Ext.StoreMgr.get('OP_S');}
	else {
		s = GS('USER_Q','PUser',PUser,'userLoginName','ASC','','OP_S','userId');
    	s.load({params:{userOperatorFlag:'1',active:'1'}});return s;
    }
};


var getCOCO_S = function(){
	if(Ext.StoreMgr.containsKey('COCO_S')){return Ext.StoreMgr.get('COCO_S');}
	else {
		s = GS('COCO_Q','PCompanyConfig',PCompanyConfig,'cocoCode','DESC','','COCO_S','cocoCode');
    	s.load({callback:function(){getBP();}});return s;
    }
};
var getCFG=function(v){
	var _cs= getCOCO_S();
	return _cs.getById(v)?_cs.getById(v).get('cocoValue'):'';
};
var getCFGD=function(v){
	var _cs= getCOCO_S();
	return _cs.getById(v)?_cs.getById(v).get('cocoDesc'):'';
};

var MESU_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1',C_MESU_TYPE_I],['2',C_MESU_TYPE_E],['3',C_MESU_TYPE_S]]});
getMESU_T = function(v){if(v>=0) return MESU_T_S.getById(v).get('NAME'); else return '';};

var ROLE_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1',C_OPERATOR],['2',C_SALES],['3',C_DISPATCHER]]});
getROLE_T = function(v){if(v>=0) return ROLE_T_S.getById(v).get('NAME'); else return '';};

var TECL_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['A','普通'],['B','套打']]});
getTECL = function(v){if(v) return TECL_S.getById(v).get('NAME'); else return '';};

var ACLO_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
	data:[['FConsign',C_CONSIGN],['FBl',C_SR_BL],['SExpense',C_EXPE],['SInvoice',C_INVO],['SVoucher',C_VOUC_R+'/'+C_VOUC_P],['SPr',C_PR_P]]});
getACLO = function(v){if(v) return ACLO_S.getById(v).get('NAME'); else return '';};

var getFUNC_S = function(){return getGStore('FUNC','PFunction',PFunction,'funcCode','ASC','');};
var getROLE_S = function(){return getGStore('ROLE','PRole',PRole,'roleId','DESC','');};
getROLE = function(v){if(v){var _cs= getROLE_S();return _cs.getById(v)?_cs.getById(v).get('roleName'):v; } else return '';}; 
var getUSER_S = function(){return getGStore('USER','PUser',PUser,'userId','DESC','');};
getUSER = function(v){if(v){var _cs= getUSER_S();return _cs.getById(v)?_cs.getById(v).get('userName'):v; } else return '';}; 
var getGROU_S = function(){return getGStore('GROU','PGroup',PGroup,'grouId','DESC','');};
getGROU = function(v){if(v){var _cs= getGROU_S();return _cs.getById(v)?_cs.getById(v).get('grouName'):v; } else return '';};
var getBRANCH_S = function(){return getGStore('BRANCH','PBranch',PBranch,'branchId','DESC','');};
getBRANCH = function(v){if(v){var _cs= getBRANCH_S();return _cs.getById(v)?_cs.getById(v).get('branchName'):v; } else return '';}; 

var YY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
	data:[['2008','2008年'],
	      ['2009','2009年'],
	      ['2010','2010年'],
	      ['2011','2011年'],
	      ['2012','2012年'],
	      ['2013','2013年'],
	      ['2014','2014年'],
	      ['2015','2015年']]
});

var MM_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
	data:[['01','一月'],['02','二月'],
	      ['03','三月'],['04','四月'],
	      ['05','五月'],['06','六月'],
	      ['07','七月'],['08','八月'],
	      ['09','九月'],['10','十月'],
	      ['11','十一月'],['12','十二月']]
});

var CONF_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME']});

var DATY_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
	data:[['CONS_DATE',C_CONS_DATE],
	      ['CONS_ETA',C_ETD_V],
	      ['CONS_SAIL_DATE',C_SAIL_DATE],
	      ['BASE_TASK_D',C_DEPEND_TASK_DATE]]
});

getDATY = function(v){
	if(v) 
		return DATY_S.getById(v).get('NAME'); 
	else 
		return '';
};

var Y_O_N=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_NOT],['1',C_YES]]});
getY_O_N = function(v){if(v>=0) return Y_O_N.getById(v).get('NAME'); else return '';};

var getArrayStore = function(){
	return new Ext.data.ArrayStore({id:0,fields:['id','CODE']});
};

var String2Store = function(str){	
	var arrStore = new Ext.data.ArrayStore({id:0,fields:['id','CODE']});
	var strArr = str.split(",");
	var dataArr = [];
	for(var i=0;i<strArr.length;i++){
		var r = [i,strArr[i]];
		dataArr[i] = r;
	}
	arrStore.add(dataArr);
	return arrStore;		
};

