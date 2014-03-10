var wl=window.location.href;
var idx=wl.lastIndexOf("/");
SERVICE_URL=wl.substr(0,idx)+'/WSServlet';
SERVER_URL=wl.substr(0,idx)+'/';
var COMP_CODE='JAH';

var formatDate = function(v){return v ? v.dateFormat('Y-m-d') : '';};
var formatDateTime = function(v){return v ? v.dateFormat('Y-m-d H:i') : '';};
FTask= Ext.data.Record.create(['id',
   	'taskId','tatyId','tatyName','tatyDId','tatyDName','consId',
   	'consNo','consMasterId','consMasterNo','taskOwner','taskOwnerName',
   	{name:'taskEstimatedDate',type:'date',dateFormat:'Y-m-d'},
   	{name:'taskFinishedDate',type:'date',dateFormat:'Y-m-d'},
   	'taskFinishedFlag','tatyBizType','tatyBizClass',
   	'active','compCode','version','rowAction']);

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

Ext.grid.CheckColumn = function(config){
	this.addEvents({click:true});
	Ext.grid.CheckColumn.superclass.constructor.call(this);
	Ext.apply(this,config,{
		init:function(grid){
			this.grid = grid;
			this.grid.on('render', function(){var view = this.grid.getView();view.mainBody.on('mousedown', this.onMouseDown,this);},this);
		},
		onMouseDown:function(e, t){
			if(t.className && t.className.indexOf('x-grid3-cc-'+this.id) != -1){
			e.stopEvent();
			var index = this.grid.getView().findRowIndex(t);
			var record = this.grid.store.getAt(index);
			record.set(this.dataIndex,record.data[this.dataIndex]==1?0:1);
			this.fireEvent('click', this, e, record);
		}},
		renderer:function(v, p, record){
			p.css += ' x-grid3-check-col-td';
			return '<div class="x-grid3-check-col'+(v==1?'-on':'')+' x-grid3-cc-'+this.id+'">&#160;</div>';
		}
	});
	if(!this.id){this.id = Ext.id();};
	this.renderer = this.renderer.createDelegate(this);
};
Ext.extend(Ext.grid.CheckColumn, Ext.util.Observable);
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

RegWin = function() {
	var frm = new Ext.form.FormPanel({labelWidth:70,bodyStyle:'padding:5px',labelAlign:'right',labelSeparator:'',items:[
    	{fieldLabel:'用户名:'+'<font color="#FF0000">*</font>',name:'wusrName',xtype:'textfield',anchor:'99%'},
    	{fieldLabel:'密码:'+'<font color="#FF0000">*</font>',name:'wusrPassword',xtype:'textfield',inputType:'password',anchor:'99%'},    	
    	{fieldLabel:'Email:'+'<font color="#FF0000">*</font>',name:'wusrEmail',xtype:'textfield',vtype:'email',vtypeText:'邮件地址不合法！·',anchor:'99%'},
    	{fieldLabel:'公司名称:'+'<font color="#FF0000">*</font>',name:'wusrCompanyName',xtype:'textfield',anchor:'99%'},    	
    	{fieldLabel:'电话:'+'<font color="#FF0000">*</font>',name:'wusrTel',xtype:'textfield',anchor:'99%'},
    	{fieldLabel:'传真',name:'wusrFax',xtype:'textfield',anchor:'99%'},
    	{fieldLabel:'姓名',name:'wusrFirstName',xtype:'textfield',anchor:'99%'},
    	{fieldLabel:'职务',name:'wusrTitle',xtype:'textfield',anchor:'99%'},
    	{fieldLabel:'部门',name:'wusrDept',xtype:'textfield',anchor:'99%'},
    	{fieldLabel:'手机号码',name:'wusrMobile',xtype:'textfield',anchor:'99%'},
    	{fieldLabel:'地址',name:'wusrAddress',xtype:'textfield',anchor:'99%'}
    	]});
    	
	this.reg = function(){	
		var r=new WUser({});
		r.beginEdit();
		frm.getForm().updateRecord(r);
		r.set('compCode',COMP_CODE);
		r.set('rowAction','N');
		r.endEdit();
		if(!r.get('wusrName')){
			alert('用户名不能为空');
			frm.find('name','wusrName')[0].focus();
			return;
		}
		if(!r.get('wusrPassword')){
			alert('密码不能为空');
			frm.find('name','wusrPassword')[0].focus();
			return;
		}
		if(!r.get('wusrEmail')){
			alert('Email不能为空');
			frm.find('name','wusrEmail')[0].focus();
			return;
		}
		if(!r.get('wusrCompanyName')){
			alert('公司名称不能为空');
			frm.find('name','wusrCompanyName')[0].focus();
			return;
		}
		if(!r.get('wusrTel')){
			alert('联系电话不能为空');
			frm.find('name','wusrTel')[0].focus();
			return;
		}		
			
		Ext.Ajax.request({url:SERVICE_URL,
			method:'POST',
			scope:this,
			params:{A:'WS_REG',mt:'json',
				wusrName:r.get('wusrName'),
				wusrPassword:r.get('wusrPassword'),
				wusrFirstName:r.get('wusrFirstName'),
				wusrTitle:r.get('wusrTitle'),
				wusrDept:r.get('wusrDept'),
				wusrEmail:r.get('wusrEmail'),
				wusrCompanyName:r.get('wusrCompanyName'),
				wusrTel:r.get('wusrTel'),
				wusrMobile:r.get('wusrMobile'),
				compCode:COMP_CODE},
			success: function(r){
				var user=Ext.util.JSON.decode(r.responseText);
				saveSession('WUSER_ID',user.WUser[0].wusrId);
				saveSession('WCUST_ID',user.WUser[0].custId);				
				CUSER=user.WUser[0].wusrId;
				alert('注册成功！');
				this.close();
			},
			failure: function(r){
				var user=Ext.util.JSON.decode(r.responseText);
				alert(user.FosResponse.msg);
			}
			});
	};	
    RegWin.superclass.constructor.call(this, {title:'用户注册',modal:true,width:300,
        height:370,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm,
        buttons:[{text:"注册",scope:this,handler:this.reg},{text:"取消",scope:this,handler:this.close}]
        }); 
};
Ext.extend(RegWin,Ext.Window);

var reg = function(f){	
	var wusrName=f.wusrName.value;
	var wusrPassword=f.wusrPassword.value;
	var wusrEmail=f.wusrEmail.value;
	var wusrCompanyName=f.wusrCompanyName.value;
	var wusrTel=f.wusrTel.value;
	var wusrMobile=f.wusrMobile.value;
	var wusrFirstName=f.wusrFirstName.value;
	var wusrTitle=f.wusrTitle.value;
	var wusrDept=f.wusrDept.value;
	
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
	if(!wusrFirstName){
		alert('姓名不能为空');
		f.wusrFirstName.focus();
		return;
	}
	
	Ext.Ajax.request({url:SERVICE_URL,method:'POST',
		params:{A:'WS_REG',mt:'JSON',
			wusrName:wusrName,wusrPassword:wusrPassword,
			wusrEmail:wusrEmail,wusrCompanyName:wusrCompanyName,
			wusrTel:wusrTel,wusrMobile:wusrMobile,
			wusrFirstName:wusrFirstName,wusrTitle:wusrTitle,
			wusrDept:wusrDept,
			compCode:COMP_CODE
		},
		success: function(r){
			var user=Ext.util.JSON.decode(r.responseText);
			saveSession('WUSER_ID',user.WUser[0].wusrId);
			saveSession('WCUST_ID',user.WUser[0].custId);			
			CUSER=user.WUser[0].wusrId;
			alert('注册成功！');
			if(self!=top) 
				top.location='ws.jsp';
			else 
				window.location='ws.jsp';
		},
		failure: function(r){
			var user=Ext.util.JSON.decode(r.responseText);
			alert(user.FosResponse.msg);}
		});	
};

var showRegWin = function(){
	var win = new RegWin();
	win.show();
	
	/*if(self!=top) 
		top.location='ws-reg.html';
	else 
		window.location='ws-reg.html';	*/
	//window.open('ws-reg.html','','height=360,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
};

var showTaskWin = function(f){
	var consNo=f.consNo.value;
	if(!consNo){
		alert('业务号不能为空！');
		f.consNo.focus();
		return;
	}
	var win = new TaskWin(consNo);
	win.show();
	
};

TaskWin = function(consNo) {	
	var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=TASK_Q',
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FTask'}, FTask),remoteSort:true,
    	sortInfo:{field:'tatyOrder', direction:'ASC'}});
	
	store.load({params:{consNo:consNo},scope:this});	
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var c1={header:'操作任务',width:200,dataIndex:"tatyName"};
	var c2={header:'预计完成日期',dataIndex: 'taskEstimatedDate',width:120,renderer:formatDate};
	var c3={header:'实际完成日期',dataIndex: 'taskFinishedDate',width:120,renderer:formatDate};
	var ff=new Ext.grid.CheckColumn({header:'已完成',dataIndex:'taskFinishedFlag',width:55});
	
	var cm=new Ext.grid.ColumnModel({columns:[sm,c1,c2,ff,c3],defaults:{sortable:true,width:100}});
	
	
	var grid=new Ext.grid.GridPanel({id:'G_TASK',	border:true,height:400,autoScroll:true,
		plugins:[ff],
	    stripeRows:true,store:store,sm:sm,cm:cm
		});	
	TaskWin.superclass.constructor.call(this,{iconCls:'task',
		title:'单票状态 - '+consNo,modal:true,width:600,
       height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:grid}); 
};
Ext.extend(TaskWin, Ext.Window);

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

var exit = function(){window.open('', '_self', '');window.close();};
var logout = function(){window.location=SERVICE_URL+'?A=LOGOUT';};