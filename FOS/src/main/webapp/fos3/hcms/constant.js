var wl=window.location.href;
var idx=wl.lastIndexOf("/");
wl=wl.substr(0,idx);;
SERVICE_URL=wl+'/MainServlet';
PREVIEW_URL=wl+'/preview';
SERVER_URL=wl.substr(0,idx)+'/';


PUser = Ext.data.Record.create(['id','userId','userName','userLoginName','userPassword','userTel','userMobile','userEmail','userMsn','userQq',
	'userDefaultGroup','userDefaultRole','userSalesFlag','userOperatorFlag','userManagerFlag',
	'userGroupViewFlag','userGroupEditFlag','userAllViewFlag','userAllEditFlag',
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
        	catch (ex){alert(ex.message)}
    }
    else if(window.sessionStorage){
        try{sessionStorage.setItem(key,value)} catch (ex){alert(ex);}
    }else{alert("当前浏览器不支持userdata或者sessionStorage特性")}
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
    }else if(window.sessionStorage){try{sessionStorage.removeItem(key)}catch (ex){alert(ex);}}};
var checkBrowser=function(){if(Ext.isGecko3||Ext.isIE8){} else XMG.alert(SYS,'您的浏览器版本太低，请升级到Firefox3或IE8!');};
function win_popup(url,h,w,rval) 
{
	window.open(url,"PopUp",'resizable=yes,location=no,scrollbars=yes,toolbar=no,menubar=no,directories=no,status=yes,height='+h+',width='+w);
	if (rval == true)  { return true; }
	if (rval == false) { return false; }
} 
var login = function(){checkBrowser();	
	var n=document.f.userLoginName.value;
	var p=document.f.userPassword.value;
	Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'LOGIN',mt:'JSON',userLoginName:n,userPassword:p,compCode:'JAH'},
	success: function(r){
		var user=Ext.util.JSON.decode(r.responseText);
		if(document.all){
				saveUserData('USER_PERM',user.PUser[0].funcCode);
				saveUserData('USER_ID',user.PUser[0].userId);
				saveUserData('USER_NAME',user.PUser[0].userName);
				saveUserData('USER_PASS_CHANGE_DATE',user.PUser[0].userPasswordModifyDate);
		}
		else if(window.sessionStorage){
			window.sessionStorage.setItem('USER_PERM',user.PUser[0].funcCode);
			window.sessionStorage.setItem('USER_ID',user.PUser[0].userId);
			window.sessionStorage.setItem('USER_NAME',user.PUser[0].userName);
			window.sessionStorage.setItem('USER_PASS_CHANGE_DATE',user.PUser[0].userPasswordModifyDate);
		}
		else{
			Cookies.set('USER_PERM',user.PUser[0].funcCode);
			Cookies.set('USER_ID',user.PUser[0].userId);
			Cookies.set('USER_NAME',user.PUser[0].userName);
			Cookies.set('USER_PASS_CHANGE_DATE',user.PUser[0].userPasswordModifyDate);
		}
		if(self!=top) top.location='index.jsp';
		else window.location='index.jsp';
		//win_popup('index.jsp',600,800,'')
	},
	failure: function(r){
		var user=Ext.util.JSON.decode(r.responseText);
		alert(user.FosResponse.msg);
		document.f.userLoginName.focus();}
	});
};
var exit = function(){window.open('', '_self', '');window.close();};
var logout = function(){window.location=SERVICE_URL+'?A=LOGOUT';};
