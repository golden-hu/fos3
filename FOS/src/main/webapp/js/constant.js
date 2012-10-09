﻿var wl=window.location.href;
var idx=wl.lastIndexOf("/");
SERVICE_URL=wl.substr(0,idx)+'/MainServlet';
SERVER_URL=wl.substr(0,idx)+'/';

PUser = Ext.data.Record.create(['id','userId','userName','userLoginName',
    'userPassword','userTel','userMobile','userEmail','userMsn','userQq',
	'userDefaultGroup','userDefaultBranch','userDefaultStation','userDefaultRole','userSalesFlag','userOperatorFlag',
	'userSystemUserFlag','userManagerFlag',
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
if(isIE) document.documentElement.addBehavior("#default#userdata");
function  saveUserData(key, value){
    var ex; 
    if(isIE){
        with(document.documentElement)
        	try {load(key);setAttribute("value", value);save(key);return  getAttribute("value");}
        	catch (ex){alert(ex.message);}
    }
    else if(window.sessionStorage){
        try{sessionStorage.setItem(key,value);} catch (ex){alert(ex);}
    }else{alert("当前浏览器不支持userdata或者sessionStorage特性");}
};

function loadUserData(key){
    var ex; 
    if(isIE){with(document.documentElement)try{load(key);return getAttribute("value");}catch (ex){alert(ex.message);return null;}
    }else if(window.sessionStorage){try{return sessionStorage.getItem(key);}catch (ex){alert(ex);}}
};
function  deleteUserData(key){
    var ex; 
    if(isIE){with(document.documentElement)try{load(key);expires = new Date(315532799000).toUTCString();save(key);}
        catch (ex){alert(ex.message);}
    }
    else if(window.sessionStorage){try{sessionStorage.removeItem(key);}catch (ex){alert(ex);}}};
var checkBrowser=function(){if(!Ext.isGecko&&!Ext.isIE8&&!Ext.isChrome) alert('您的浏览器版本太低，请升级到Firefox4/IE8/Chrome!');};
var login = function(f){
	//checkBrowser();	
	var n=f.userLoginName.value;
	var p=f.userPassword.value;
	Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'LOGIN',mt:'JSON',userLoginName:n,userPassword:p},
	success: function(r){
		var user=Ext.util.JSON.decode(r.responseText);
		saveSession('USER_PERM',user.PUser[0].funcCode);
		saveSession('USER_ID',user.PUser[0].userId);
		saveSession('USER_NAME',user.PUser[0].userName);
		saveSession('USER_IS_OPERATOR',user.PUser[0].userOperatorFlag);
		saveSession('USER_IS_SALES',user.PUser[0].userSalesFlag);
		saveSession('USER_ALL_VIEW_FLAG',user.PUser[0].userAllViewFlag);
		saveSession('USER_PASS_CHANGE_DATE',user.PUser[0].userPasswordModifyDate);		
		if(self!=top) top.location='index.jsp';
		else window.location='index.jsp';
	},
	failure: function(r){
		var user=Ext.util.JSON.decode(r.responseText);
		alert(user.FosResponse.msg);
		f.userLoginName.focus();}
	});
};
var loadSession=function(k){
	var p='';
	if(document.all) p=loadUserData(k);
	else if(window.sessionStorage) p+=window.sessionStorage.getItem(k);
	else p+=Cookies.get(k);
	return p;
};
var saveSession=function(k,v){
	if(document.all)
		saveUserData(k,v);
	else if(window.sessionStorage)
		window.sessionStorage.setItem(k,v);
	else
		Cookies.set(k,v);
};
var exit = function(){window.open('', '_self', '');window.close();};
var logout = function(){window.location=SERVICE_URL+'?A=LOGOUT';};
