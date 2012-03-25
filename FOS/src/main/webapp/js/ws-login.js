var wl=window.location.href;
var idx=wl.lastIndexOf("/");
SERVICE_URL=wl.substr(0,idx)+'/WSServlet';
SERVER_URL=wl.substr(0,idx)+'/';

WUser = Ext.data.Record.create(['id','wusrId','wusrName','wusrPassword','wusrFirstName','wusrLastName',
    'wusrTitle','wusrDept','wusrMobile','wusrEmail','wusrCompanyName','wusrAddress','wusrCity','wusrProvice',
    'wusrZip','wusrCountry','wusrTel','wusrFax','wusrUrl','wusrStatus','wusrLastLoginTime',
 	{name:'createTime',type:'date',dateFormat:'Y-m-d H:i:s'},
 	{name:'wusrLastLoginTime',type:'date',dateFormat:'Y-m-d H:i:s'},
 	'custId','compCode','version','rowAction']);
var login = function(f){	
	var wusrName=loginForm.userLoginName.value;
	var wusrPassword=loginForm.userPassword.value;
	Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,
		params:{A:'WS_LOGIN',mt:'JSON',wusrName:wusrName,wusrPassword:wusrPassword},
		success: function(r){
			var user=Ext.util.JSON.decode(r.responseText);
			sessionStorage.setItem("WUSER_ID",user.WUser[0].wusrId);
			sessionStorage.setItem("WCUST_ID",user.WUser[0].custId);
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
var exit = function(){window.open('', '_self', '');window.close();};
var logout = function(){window.location=SERVICE_URL+'?A=LOGOUT';};
