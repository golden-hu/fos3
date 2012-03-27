var wl=window.location.href;
var idx=wl.lastIndexOf("/");
SERVICE_URL=wl.substr(0,idx)+'/WSServlet';
SERVER_URL=wl.substr(0,idx)+'/';

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

WUser = Ext.data.Record.create(['id','wusrId','wusrName','wusrPassword','wusrFirstName','wusrLastName',
    'wusrTitle','wusrDept','wusrMobile','wusrEmail','wusrCompanyName','wusrAddress','wusrCity','wusrProvice',
    'wusrZip','wusrCountry','wusrTel','wusrFax','wusrUrl','wusrStatus','wusrLastLoginTime',
 	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
 	{name:'wusrLastLoginTime',type:'date',dateFormat:'Y-m-d H:i:s'},
 	'custId','compCode','version','rowAction']);
var login = function(f){	
	var wusrName=f.userLoginName.value;
	var wusrPassword=f.userPassword.value;
	Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,
		params:{A:'WS_LOGIN',mt:'JSON',wusrName:wusrName,wusrPassword:wusrPassword},
		success: function(r){
			var user=Ext.util.JSON.decode(r.responseText);
			saveSession('WUSER_ID',user.WUser[0].wusrId);
			saveSession('WCUST_ID',user.WUser[0].custId);			
			if(self!=top) 
				top.location='ws.jsp';
			else 
				window.location='ws.jsp';
		},
		failure: function(r){
			var user=Ext.util.JSON.decode(r.responseText);
			alert(user.FosResponse.msg);
			f.userLoginName.focus();
		}
	});	
};

var reg = function(f){	
	var wusrName=f.wusrName.value;
	var wusrPassword=f.wusrPassword.value;
	var wusrEmail=f.wusrEmail.value;
	var wusrCompanyName=f.wusrCompanyName.value;
	var wusrTel=f.wusrTel.value;
	
	if(!wusrName){
		alert('用户名不能为空');
		f.wusrName.focus();
		return;
	}
	if(!wusrPassword){
		alert('密码不能为空');
		f.wusrPassword.focus();
		return;
	}
	if(!wusrEmail){
		alert('Email不能为空');
		f.wusrEmail.focus();
		return;
	}
	if(!wusrCompanyName){
		alert('公司名称不能为空');
		f.wusrCompanyName.focus();
		return;
	}
	if(!wusrTel){
		alert('联系电话不能为空');
		f.wusrTel.focus();
		return;
	}
			
	var rj=RTJ(r,WUser);
	var data=FOSJ({'WUser':rj});
	Ext.Ajax.request({url:SERVICE_URL,method:'POST',
		params:{A:'WS_REG',mt:'JSON',
			wusrName:wusrName,wusrPassword:wusrPassword,
			wusrEmail:wusrEmail,wusrCompanyName:wusrCompanyName,
			wusrTel:wusrTel
		},
		success: function(r){
			var user=Ext.util.JSON.decode(r.responseText);
			saveSession('WUSER_ID',user.WUser[0].wusrId);
			saveSession('WCUST_ID',user.WUser[0].custId);
			
			CUSER=user.WUser[0].wusrId;
			alert('注册成功！');
		},
		failure: function(r){
			var user=Ext.util.JSON.decode(r.responseText);alert(user.FosResponse.msg);},
	jsonData:data});
	
};

var showRegWin = function(){
	window.open('ws-reg.html','','height=360,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
};

var exit = function(){window.open('', '_self', '');window.close();};
var logout = function(){window.location=SERVICE_URL+'?A=LOGOUT';};
