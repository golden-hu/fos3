var wl=window.location.href;
var idx=wl.lastIndexOf("/");
SERVICE_URL=wl.substr(0,idx)+'/WSServlet';
SERVER_URL=wl.substr(0,idx)+'/';
//var COMP_CODE='htst';
var COMP_CODE='WXMQ';

var formatDate = function(v){return v ? v.dateFormat('Y-m-d') : '';};
var formatDateTime = function(v){return v ? v.dateFormat('Y-m-d H:i') : '';};

var RTJ = function(r,rt){
	var f=rt.prototype.fields;	
	if(r.get('rowAction') == ''||r.get('rowAction') == undefined) r.set('rowAction','M');
	var v={};
	for(var i=0;i<f.length;i++){
		var item = f.items[i];
		var n = item.name;
		var ty = item.type;		
		if(n!=undefined && r.get(n)!=undefined && r.get(n)!==''){			
			if(ty==Ext.data.Types.DATE){
				v[n]=r.get(n)?r.get(n).format('Y-m-d H:i:s'):'';
			}
			else if(ty==Ext.data.Types.BOOLEAN){
				v[n]=r.get(n)?'1':'0';
			}
			else{
				v[n]=Ext.util.Format.htmlEncode(r.get(n));
			}
		}
	}
	return v;
};
var FOSJ=function(x){
	return {FosRequest:{data:x}};
};

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
	var wusrPassword2=f.wusrPassword2.value;
	var wusrEmail=f.wusrEmail.value;
	var wusrCompanyName=f.wusrCompanyName.value;
	var wusrTel=f.wusrTel.value;
	var wusrMobile=f.wusrMobile.value;
	var wusrFirstName=f.wusrFirstName.value;
	var wusrTitle=f.wusrTitle.value;
	
	if(!wusrName){
		alert('登录名不能为空！');
		f.wusrName.focus();
		return;
	}
	else if(!wusrPassword){
		alert('登录密码不能为空！');
		f.wusrPassword.focus();
		return;
	}
	else if(wusrPassword!=wusrPassword2){
		alert('两次输入的登录密码不一致！');
		f.wusrPassword.focus();
		return;
	}	
	else if(!wusrFirstName){
		alert('真实姓名不能为空！');
		f.wusrFirstName.focus();
		return;
	}	
	else if(!wusrMobile){
		alert('手机不能为空！');
		f.wusrMobile.focus();
		return;
	}	
	else if(!wusrEmail){
		alert('Email不能为空！');
		f.wusrEmail.focus();
		return;
	}	
	else if(!testEmail(wusrEmail)){
		alert('请输入正确的Email地址！');
		f.wusrEmail.focus();
		return;
	}
	else if(!wusrCompanyName){
		alert('公司名称不能为空！');
		f.wusrCompanyName.focus();
		return;
	}
	else{
		Ext.Ajax.request({url:SERVICE_URL,
			method:'POST',
			params:{A:'WS_REG',mt:'JSON',
				wusrName:wusrName,
				wusrPassword:wusrPassword,
				wusrEmail:wusrEmail,
				wusrCompanyName:wusrCompanyName,
				wusrTel:wusrTel,
				wusrMobile:wusrMobile,
				wusrFirstName:wusrFirstName,
				wusrTitle:wusrTitle,
				compCode:COMP_CODE
			},
			success: function(r){			
				alert('注册成功！');
				if(self!=top) 
					top.location='ws-login.html';
				else 
					window.location='ws-login.html';
			},
			failure: function(r){			
				alert("注册失败！");}
			});	
	}
	
	
};

function showElement(eid,html,x,y){
	var o=document.getElementById(eid);	
	o.innerHTML = html,
	o.style.left=x+'px';
	o.style.top=y+'px';
	o.style.display="block";
}

function hideElement(eid){
	var o=document.getElementById(eid);	
	o.style.display="none";
}

var logout = function(){window.location=SERVICE_URL+'?A=LOGOUT';};


function testEmail(str){  
	var reg = /^([a-zA-Z0-9]+[_|\_|\.|-|\-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|-|\-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	return reg.test(str);
}
