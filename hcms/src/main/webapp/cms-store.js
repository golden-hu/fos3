Ext.namespace('HCMS');
HcmsResource = Ext.data.Record.create(['id','no','code','name','type','channeltype',
        'icon','url','lurl','purl','imgflag','movieflag','pno','pcode','pnos','pname','title','summary','body','author','addtime',
        'source','publisher','publishtime','audit','words',
        'keywords','pv','rate','ratenum','comments','auditor',
        'audittime','tempc','templ','tempa','rank',
        'ext','filetype','width','height','size','path','active',
     	'userId','userName','grouId','grouName','createBy',
     	'createByName','modifyBy','modifyByName',
     	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
     	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
     	'compCode','version','rowAction']);
HcmsTemplate = Ext.data.Record.create(['id','tempId','tempName','tempType','tempContent',
	'userId','userName','grouId','grouName',
	'createBy','createByName','modifyBy','modifyByName',
	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	{name:'modifyTime',type:'date',dateFormat:'Y-m-d H:i:s'},
	'compCode','version','rowAction']);
PRole = Ext.data.Record.create(['id','roleId','roleName','roleDesc','active','compCode','version','rowAction']); 
PUserRole = Ext.data.Record.create(['id','usroId','userId','roleId','roleName','compCode','active','version','rowAction']); 
PFunction = Ext.data.Record.create(['id','funcCode','funcName','funcType','active','compCode']); 
PRoleFunction = Ext.data.Record.create(['id','rofuId','funcCode','roleId','compCode','active','version','rowAction']); 
PCompanyConfig = Ext.data.Record.create(['id','cocoId','cocoName','cocoCode','cocoDesc','cocoValue','cocoValueType',
	'cocoValueOptions','cocoGroup','cocoType','compCode','version','rowAction']);
PActionLog = Ext.data.Record.create(['acloId','acloActName','acloActRemark','acloTable','acloTid',
	'acloTno','acloUserId','acloUserName','acloIp','compCode','createTime']);
PGroup = Ext.data.Record.create(['id','grouId','grouName','grouDesc','compCode','active','version','rowAction']);

var ALIGN_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['Left','Left'],['Abs Bottom','Abs Bottom）'],
                  ['Abs Middle','Abs Middle'],['Baseline','Baseline'],['Bottom','Bottom'],
                  ['Middle','Middle'],['Right','Right'],['Text Top','Text Top'],['Top','Top']]});
getALIGN = function(v){if(v>=0) return ALIGN_S.getById(v).get('NAME'); else return ''};
var CHAN_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['C','内容频道'],['L','动态频道']]});
getCHAN_T = function(v){if(v) return CHAN_T_S.getById(v).get('NAME'); else return ''};
var TEMP_T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','频道首页模板'],['2','文章列表页模板'],['3','文章页模板'],['4','共享部件']]});
getTEMP_T = function(v){if(v) return TEMP_T_S.getById(v).get('NAME'); else return ''};
var getTEMP_S=function(){	
	if(Ext.StoreMgr.containsKey('HCMS_TEMP_S')){return Ext.StoreMgr.get('HCMS_TEMP_S');}
	else {
		var s=new Ext.data.Store({storeId:'HCMS_TEMP_S',url:SERVICE_URL+'?A=HCTE_Q',baseParams:{mt:'JSON'},
			reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'HcmsTemplate',id:'tempId'},HcmsTemplate)
			});
		s.load();
		return s;
    }
};

var getGStore=function(c,r,o,s,d,id){
	if(Ext.StoreMgr.containsKey(c+'_S')){return Ext.StoreMgr.get(c+'_S');}
	else {var store = GS(c+'_Q',r,o,s,d,'',c+'_S',id?id:s);store.load({params:{active:'1'}});return store;}
};
var getFUNC_S = function(){return getGStore('FUNC','PFunction',PFunction,'funcCode','ASC','');};
var getROLE_S = function(){return getGStore('ROLE','PRole',PRole,'roleId','DESC','');};
getROLE = function(v){if(v){var _cs= getROLE_S();return _cs.getById(v)?_cs.getById(v).get('roleName'):v; } else return ''}; 
var getUSER_S = function(){return getGStore('USER','PUser',PUser,'userId','DESC','');};
getUSER = function(v){if(v){var _cs= getUSER_S();return _cs.getById(v)?_cs.getById(v).get('userName'):v; } else return ''}; 
var getGROU_S = function(){return getGStore('GROU','PGroup',PGroup,'grouId','DESC','');};
getGROU = function(v){if(v){var _cs= getGROU_S();return _cs.getById(v)?_cs.getById(v).get('grouName'):v; } else return ''}; 

var getCOCO_S = function(){
	if(Ext.StoreMgr.containsKey('COCO_S')){return Ext.StoreMgr.get('COCO_S');}
	else {
		s = GS('COCO_Q','PCompanyConfig',PCompanyConfig,'cocoCode','DESC','','COCO_S','cocoCode');
    	s.load();return s;
    }
};
var ACLO_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['HcmsArticle','文章'],['HcmsTemplate','目录'],['HcmsTemplate','文件'],['HcmsTemplate','模板']]});
getACLO = function(v){if(v) return ACLO_S.getById(v).get('NAME'); else return ''};

function iniStore(){
	Ext.MessageBox.show({title:'Please wait',msg:'初始化数据...',progressText:'Loading...',width:300,progress:true,closable:false});
	//if(!NR(M1_P+A_ROLE+F_V)) 
		getFUNC_S();
	getTEMP_S();
	getCOCO_S();
	getROLE_S();getUSER_S();
	var f = function(v){return function(){if(v == 12){Ext.MessageBox.hide();} else {var i = v/11;Ext.MessageBox.updateProgress(i, Math.round(100*i)+'% completed');}}};
	for(var i=1;i<13;i++){setTimeout(f(i),i*300);}
};

var M1_P='0111';
var A_GROU='01';
var A_ROLE='02';
var A_USER='03';
var A_TEMP='04';
var A_COCO='05';
var F_V='01';
var F_M='02';
var F_R='03';
var F_E='04';
var F_F='05';
var F_A='06';
var F_A2='07';
var F_CV='08';
var F_CM='09';
var F_WO='10';
var F_IM='11';
var F_SH='12';
var F_MERGE='05';