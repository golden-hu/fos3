var wl=window.location.href;
var idx=wl.lastIndexOf("/");
SERVICE_URL=wl.substr(0,idx)+'/MainServlet';
SERVER_URL=wl.substr(0,idx)+'/';

Ext.namespace('Fos');
Ext.BLANK_IMAGE_URL = 'ext/resources/images/default/s.gif';
Ext.lib.Ajax.defaultPostHeader += ";charset=utf-8";

var DATEF='Y-m-d';



var C_PS=20;
var C_PS20=20;
var C_PS50=50;
var C_PS100=100;
var GUID=0;

var GSEL=-10000;
var BF=500;
var C_LW=400;
var EQ=1;
var LT=2;
var LE=3;
var GT=4;
var GE=5;
var NE=6;
var LI=7;
var IN=8;

var PPID=1;
var CY=1;
var CFS=9;

var BT_C='C'; //集装箱
var BT_B='B'; //散货
var BT_A='A'; //空运
var BT_G='G'; //报关
var BT_I='I'; //报检

var BT_M = 'M'; //加工贸易
var BT_F = 'F'; //减免税
var BT_R = 'R'; //企业注册
var BT_T='T';//铁运

var ST_F='FCL';
var ST_L='LCL';

var BC_I='I'; //进口
var BC_E='E'; //出口
var BC_D='D'; //内贸


var F_V='01';
var F_M='02';
var F_R='03';
var F_E='04';
var F_F='05'; //作废
var F_A='06'; //财务审核
var F_A2='07';//经理审核
var F_CV='08';
var F_CM='09';
var F_WO='10';
var F_IM='11';
var F_SH='12';
var F_UL='13';
var F_MERGE='05';
var F_MIDIFY_CONS_NO='20';

var M1_C='0001';//集装箱
var M1_B='0002';//散货
var M1_A='0003';//空运
var M1_G='0004';//报关
var M1_I='0005';//报检
var M1_D='0006';//单证
var M1_S='0007';//结算
var M1_T='0008';//统计
var M1_V='0009';//客户供应商
var M1_J='0010';//基础数据
var M1_P='0011';//系统管理
var M1_W='0012';//网上服务
var M1_M='0013';//加工贸易
var M1_F='0014';//减免税
var M1_R='0015';//企业注册
var M1_RT ='0016';//铁运联运
var M1_E='0017';//进境

var M2_TC='01';//进境集装箱
var M2_TB='02';//进境散货

var M2_A='01'; //进口全部
var M2_AE='04';//出口全部

var M2_F='02'; //整箱
var M2_L='03'; //拼箱
var M2_FE='05';//出口整箱
var M2_LE='06';//出口拼箱

var M2_BV='04';//散货船期
var M2_BC='05';//散货租船合同
var M2_BP='06';//散货装货清单
var M2_V='04';
var M2_R='05';
var M2_I='02'; //进口
var M2_E='03'; //出口

var M2_RT='01';//铁路管理
var M2_K='02';//空箱返回管理

var M3_CONS='01';
var M3_DOC='02';
var M3_EXPE='03';
var M3_TRAN='04';
var M3_WARE='05';
var M3_CUDE='06';
var M3_INSP='07';
var M3_BL='08';
var M3_CONT='09';
var M3_BBOOK='10';
var M3_SESH='11';
var M3_RABL='12';
var M3_DO='13';
var M3_ATTACH='14';

var G_VESS='01';
var G_COUN='02';
var G_SHLI='03';
var G_PORT='04';
var G_AIRP='05';
var G_UNIT='06';
var G_PACK='07';
var G_COCL='08';
var G_COTY='09';
var G_VEHT='10';
var G_CACL='11';
var G_CATY='12';
var G_TRTE='13';
var G_TTER='14';
var G_TRTY='15';
var G_USAG='16';
var G_LETY='17';
var G_EXSE='18';
var G_TRAT='19';
var G_ISTY='20';
var G_SEWA='21';
var G_CURR='22';
var G_CHCL='23';
var G_CHAR='24';
var G_COBA='25';
var G_DOTY='26';
var G_PATE='27';
var G_PLAC='28';
var G_CUTY='29';

var S_COAU='01';
var S_BILL_R='02';
var S_INVO_R='03';
var S_PR_R='04';
var S_VOUC_R='05';
var S_BILL_P='06';
var S_INVO_P='07';
var S_PR_P='08';
var S_VOUC_P='09';
var S_INNO='10';
var S_EXRA='11';
var S_GL='12';
var S_EXPE='13';
var S_INRA='14';
var S_EXHI='15';
var S_AR='01';
var S_AP='02';
var S_AC='03';

var V_CUST='01';
var V_CUCA='02';
var V_PRSH='03';
var V_SAQU='04';

var W_WUSR='01';
var W_WINQ='02';
var W_CONS='03';
var W_BL='04';
var W_BILL='05';

var T_BUSI='01';
var T_BUEX='02';
var T_BUDE='03';
var T_PROF='04';
var T_ACAR='05';
var T_ACAP='06';
var T_CUEX='07';
var T_VEEX='08';
var T_WROF='09';
var T_SALES='10';
var T_ARA='11';
var T_APA='12';
var T_PRCO='13';
var T_PRCH='14';
var T_PAY_PLAN='15';
var T_PROF_SALES='16';
var T_PTEU='17';
var T_BUDS='18';

var A_GROU='01';
var A_ROLE='02';
var A_USER='03';
var A_TEMP='04';
var A_COCO='05';


PUser = Ext.data.Record.create(['id','userId','userName','userLoginName',
    'userPassword','userTel','userMobile','userEmail','userMsn','userQq',
	'userDefaultGroup','userDefaultBranch','userDefaultStation','userDefaultRole','userSalesFlag','userOperatorFlag',
	'userSystemUserFlag','userManagerFlag','userNetworkFlag',
	'userGrouViewFlag','userGrouEditFlag','userAllViewFlag','userAllEditFlag',
	{name:'userPasswordModifyDate',type:'date',dateFormat:'Y-m-d'},
	'funcCode','active','compCode','version','rowAction']);
var Cookies = {};
Cookies.set = function(name, value){
     var argv = arguments;
     var argc = arguments.length;
     var expires = (argc > 2) ? argv[2] : null;
     var path = (argc > 3) ? argv[3] : '/';
     var domain = (argc > 4) ? argv[4] : null;
     var secure = (argc > 5) ? argv[5] : false;
     document.cookie = name + "=" + escape (value) +
       ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
       ((path == null) ? "" : ("; path=" + path)) +
       ((domain == null) ? "" : ("; domain=" + domain)) +
       ((secure == true) ? "; secure" : "");
};
Cookies.get = function(name){
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	var j = 0;
	while(i < clen){
		j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return Cookies.getCookieVal(j);
		i = document.cookie.indexOf(" ", i) + 1;
		if(i == 0)
			break;
	}
	return null;
};

Cookies.clear = function(name) {
  if(Cookies.get(name)){
    document.cookie = name + "=" +"; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
};

Cookies.getCookieVal = function(offset){
   var endstr = document.cookie.indexOf(";", offset);
   if(endstr == -1){endstr = document.cookie.length;}
   return unescape(document.cookie.substring(offset, endstr));
};

var isIE = !!document.all;

if(isIE) 
	document.documentElement.addBehavior("#default#userdata");

function  saveUserData(key, value){
    if(isIE){
        with(document.documentElement)
    	try {
    		load(key);
    		setAttribute("value", value);
    		save(key);
    		return  getAttribute("value");
    	}
    	catch (ex){
    		alert(ex.message);
    	}
    }
    else if(window.sessionStorage){
        try{
        	sessionStorage.setItem(key,value);
        } 
        catch (ex){
        	alert(ex);
        }
    }
    else{
    	alert("当前浏览器不支持userdata或者sessionStorage特性");
    }
};

function loadUserData(key){
    if(isIE){
    	with(document.documentElement)
    	try{
    		load(key);
    		return getAttribute("value");
    	}
    	catch (ex){
    		alert(ex.message);
    		return null;
    	}
    }
    else if(window.sessionStorage){
    	try{
    		return sessionStorage.getItem(key);
    	}
    	catch (ex){
    		alert(ex);
    	}
    }
};
function  deleteUserData(key){
    if(isIE){
    	with(document.documentElement)
    	try{
    		load(key);
    		expires = new Date(315532799000).toUTCString();
    		save(key);
    	}
        catch (ex){
        	alert(ex.message);
        }
    }
    else if(window.sessionStorage){
    	try{
    		sessionStorage.removeItem(key);
	    }
	    catch (ex){
	    	alert(ex);
	    }
    }
};

var checkBrowser=function(){
	if(!Ext.isGecko&&!Ext.isIE8&&!Ext.isChrome) 
		alert('您的浏览器版本太低，请升级到Firefox4/IE8/Chrome!');
};

var login = function(f){
	//checkBrowser();	
	var n=f.userLoginName.value;
	var p=f.userPassword.value;
	Ext.Ajax.request({url:SERVICE_URL,method:'POST',
		params:{A:'LOGIN',mt:'JSON',userLoginName:n,userPassword:p},
		success: function(r){
			var user=Ext.util.JSON.decode(r.responseText);
			saveSession('USER_PERM',user.PUser[0].funcCode);
			saveSession('USER_ID',user.PUser[0].userId);
			saveSession('USER_NAME',user.PUser[0].userName);
			saveSession('USER_IS_OPERATOR',user.PUser[0].userOperatorFlag);
			saveSession('USER_IS_SALES',user.PUser[0].userSalesFlag);
			saveSession('USER_ALL_VIEW_FLAG',user.PUser[0].userAllViewFlag);
			saveSession('USER_PASS_CHANGE_DATE',user.PUser[0].userPasswordModifyDate);		
			if(self!=top) 
				top.location='index.jsp';
			else 
				window.location='index.jsp';
		},
		failure: function(r){
			var user=Ext.util.JSON.decode(r.responseText);
			alert(user.FosResponse.msg);
			f.userLoginName.focus();
		}
	});
};

var login_ccn = function(SessionID,AccountID,ProductID,GlobalCompanyID,City){
	//checkBrowser();	
	Ext.Ajax.request({url:SERVICE_URL,method:'POST',
		params:{A:'LOGIN_CCN',mt:'JSON',
				SessionID:SessionID,
				AccountID:AccountID,
				ProductID:ProductID,
				GlobalCompanyID:GlobalCompanyID,
				City:City
			},
		success: function(r){
			var user=Ext.util.JSON.decode(r.responseText);
			saveSession('USER_PERM',user.PUser[0].funcCode);
			saveSession('USER_ID',user.PUser[0].userId);
			saveSession('USER_NAME',user.PUser[0].userName);
			saveSession('USER_IS_OPERATOR',user.PUser[0].userOperatorFlag);
			saveSession('USER_IS_SALES',user.PUser[0].userSalesFlag);
			saveSession('USER_ALL_VIEW_FLAG',user.PUser[0].userAllViewFlag);
			saveSession('USER_PASS_CHANGE_DATE',user.PUser[0].userPasswordModifyDate);	
			if(self!=top) 
				top.location='index.jsp';
			else 
				window.location='index.jsp';
		},
		failure: function(r){
			var user=Ext.util.JSON.decode(r.responseText);
			alert(user.FosResponse.msg);
			f.userLoginName.focus();
		}
	});
};

var loadSession=function(k){
	var p='';
	if(window.sessionStorage) 
		p+=window.sessionStorage.getItem(k);	
	else if(document.all) 
		p=loadUserData(k);
	else 
		p+=Cookies.get(k);
	return p;
};

var saveSession=function(k,v){	 
	if(window.sessionStorage)
		window.sessionStorage.setItem(k,v);
	else if(document.all)
		saveUserData(k,v);
	else
		Cookies.set(k,v);
};

var exit = function(){
	window.open('', '_self', '');
	window.close();
};

var logout = function(){
	window.location=SERVICE_URL+'?A=LOGOUT';
};
