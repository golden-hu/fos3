var checkLogin=function(fn){	
	if(CUSER!='null'&&CUSER!=0)	
		return 1;
	else{
		var w=new LoginWin(fn);
		w.show();
		return 0;
	}	
};

var logout=function(){
	//top.window.close();
	window.location=SERVICE_URL+'?A=WS_LOGOUT';
};

LoginWin = function() {
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_WS_USR_NAME,name:'wusrName',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_USR_PASS,name:'wusrPassword',xtype:'textfield',inputType:'password',anchor:'90%',enableKeyEvents:true,listeners:{scope:this,
				keydown:function(f,e){if(e.getKey()==Ext.EventManager.ENTER){alert(e.getKey());this.login();}}
	        	}}
    	]});    	
	this.login = function(){	
		var wusrName=frm.find('name','wusrName')[0].getValue();
		var wusrPassword=frm.find('name','wusrPassword')[0].getValue();	
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,
			params:{A:'WS_LOGIN',
				mt:'JSON',
				wusrName:wusrName,
				wusrPassword:wusrPassword
			},
			success: function(r){
				var user=Ext.util.JSON.decode(r.responseText);
				saveSession('WUSER_ID',user.WUser[0].wusrId);
				saveSession('WCUST_ID',user.WUser[0].custId);				
				CUSER=user.WUser[0].wusrId;
				CCUST=user.WUser[0].custId;
				this.close();
			},
			failure: function(r){
				var user=Ext.util.JSON.decode(r.responseText);
				alert(user.FosResponse.msg);
				frm.find('name','wusrName')[0].focus();
			}
		});
	};
	this.reg=function(){
		var w= new RegWin();
		w.show();
	};
    LoginWin.superclass.constructor.call(this, {title:'用户登录',modal:true,width:300,closable:false,
        height:130,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm,
        buttons:[{text:"登录",scope:this,handler:this.login},{text:"注册新用户",scope:this,handler:this.reg}]
        }); 
};

Ext.extend(LoginWin,Ext.Window);

RegWin = function() {
	var frm = new Ext.form.FormPanel({labelWidth:80,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_WS_USR_NAME,itemCls:'required',name:'wusrName',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_USR_PASS,itemCls:'required',name:'wusrPassword',xtype:'textfield',inputType:'password',anchor:'90%'},    	
    	{fieldLabel:C_WS_EMAIL,itemCls:'required',name:'wusrEmail',xtype:'textfield',vtype:'email',vtypeText:'邮件地址不合法！·',anchor:'90%'},
    	{fieldLabel:C_WS_COMPANY,itemCls:'required',name:'wusrCompanyName',xtype:'textfield',anchor:'90%'},    	
    	{fieldLabel:C_WS_TEL,itemCls:'required',name:'wusrTel',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_FAX,name:'wusrFax',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_FIRST_NAME,name:'wusrFirstName',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_TITLE,name:'wusrTitle',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_DEPT,name:'wusrDept',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_MOBILE,name:'wusrMobile',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_ADDRESS,name:'wusrAddress',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_CITY,name:'wusrCity',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_PROVINCE,name:'wusrProvince',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_ZIP,name:'wusrZip',xtype:'textfield',anchor:'90%'},
    	{fieldLabel:C_WS_URL,name:'wusrUrl',xtype:'textfield',anchor:'90%'}
    	]});
    	
	this.reg = function(){	
		var r=new WUser({});
		r.beginEdit();
		frm.getForm().updateRecord(r);
		r.set('compCode',COMP_CODE);
		r.set('rowAction','N');r.endEdit();
		if(!r.get('wusrName')){
			alert('用户名不能为空');frm.find('name','wusrName')[0].focus();
			return;
		}
		if(!r.get('wusrPassword')){alert('密码不能为空');
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
		var rj=RTJ(r,WUser);
		var data=FOSJ({'WUser':rj});
		
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'WS_REG',mt:'JSON'},
			success: function(r){
				var user=Ext.util.JSON.decode(r.responseText);
				saveSession('WUSER_ID',user.WUser[0].wusrId);
				saveSession('WCUST_ID',user.WUser[0].custId);
				
				CUSER=user.WUser[0].wusrId;
				alert('注册成功！');
			},
			failure: function(r){
				var user=Ext.util.JSON.decode(r.responseText);
				alert(user.FosResponse.msg);
			},
		jsonData:data});
	};	
    RegWin.superclass.constructor.call(this, {title:'用户注册',modal:true,width:400,
        height:470,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm,
        buttons:[{text:"注册",scope:this,handler:this.reg},{text:"取消",scope:this,handler:this.close}]
        }); 
};
Ext.extend(RegWin,Ext.Window);

TaskWin = function(consId) {
	var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=WS_TASK_Q',
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FTask'}, FTask),remoteSort:true,
    	sortInfo:{field:'tatyOrder', direction:'DESC'}});
	store.load({params:{mt:'JSON',consId:consId},scope:this});
	var c1={header:C_TASK_NAME,width:200,dataIndex:"tatyName"};
	var c2={header:C_TASK_ESTIMATED_DATE,dataIndex: 'taskEstimatedDate',width:120,renderer:formatDate};
	var c3={header:C_TASK_FINISHED_DATE,dataIndex: 'taskFinishedDate',width:120,renderer:formatDate};
	var ff=CHKCLM(C_FINISHED,'taskFinishedFlag',60);
	var cm=new Ext.grid.ColumnModel([c1,c2,ff,c3]);
	cm.defaultSortable = true;
	cm.defaultWidth=100;		
	var gv=new Ext.grid.GridView({
		getRowClass: function(record, index) {			   
            if (record.get('taskFinishedFlag')) return 'green-font-row';
            else if (record.get('taskFinishedFlag')==0&&getElapsed(record.get('taskEstimatedDate'))>=0) return 'red-font-row';
            else return '';
        }});
	var grid=new Ext.grid.GridPanel({id:'G_TASK',border:true,height:400,autoScroll:true,plugins:[ff],
	    stripeRows:true,store:store,cm:cm, view:gv});	
		
	TaskWin.superclass.constructor.call(this,{iconCls:'task',title:'单票状态',modal:true,width:600,
       height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:grid}); 
};
Ext.extend(TaskWin, Ext.Window);

VoyaTab = function(){
	var shliStore=new Ext.data.Store({url:SERVICE_URL+'?A=SHLI_Q',
		reader: new Ext.data.XmlReader({record:'GShippingLine'},GShippingLine),sortInfo:{field:'shliId',direction:'ASC'}});
	shliStore.load();	
	var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=WS_VOYA_X',
    	reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'GVoyage'}, GVoyage),remoteSort:true,
    	sortInfo:{field:'voyaId', direction:'DESC'}});
    //store.load({params:{start:0,limit:20}});
	var cm = new Ext.grid.ColumnModel([
    	new Ext.grid.RowNumberer(),
		{header:C_VESS,dataIndex:'vessName',width:120},
        {header:C_VESS_NAME_CN,dataIndex:'vessNameCn',width:80},
		{header:C_VOYA,dataIndex:'voyaName',width:80},
		{header:C_SHLI,dataIndex:'shliName',width:100},
		{header:C_HARBOUR,dataIndex: 'voyaHarbourName',width:100},
		{header:C_CARRIER,dataIndex: 'voyaCarrierName',width:100},
		{header:C_ETA_V,dataIndex:'voyaEta',width:90,renderer:formatDate},
		{header:C_ETA_T,dataIndex: 'voyaEtaT',width:90},
		{header:C_ETD_V,dataIndex:'voyaEtd',width:90,renderer:formatDate},
		{header:C_ETD_T,dataIndex: 'voyaEtdT',width:90},
		{header:C_BERTHING_DATE,dataIndex:'voyaBerthingDate',width:90,renderer:formatDate},
		{header:C_BERTHING_DATE_T,dataIndex: 'voyaBerthingDateT',width:90},		
		{header:C_SAIL_DATE_V,dataIndex:'voyaSailDate',width:90,renderer:formatDate},
		{header:C_SAIL_DATE_T,dataIndex: 'voyaSailDateT',width:90},		
        {header:C_LOAD_DATE_F,dataIndex: 'voyaLoadDateF',width:90,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
        {header:C_LOAD_DATE_T,dataIndex: 'voyaLoadDateT',width:90,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})},
		{header:C_VOYA_PORTS,dataIndex: 'voyaPorts',width:100}]);
	cm.defaultSortable=true;	
	var grid=new Ext.grid.GridPanel({region:'center',store: store,iconCls:'grid',height:350,header:false,closable:true,cm:cm,loadMask:true,
    	bbar:new Ext.PagingToolbar({pageSize:20,store:store,displayInfo:true,displayMsg:'{0} - {1} of {2}',emptyMsg:'没有记录'})
    	});
    this.search=function(){
   		var a=[];
    	var vessName=this.find('name','vessName')[0].getValue();
   		if(vessName) a[a.length]={key:'vessName',value:vessName,op:LI};
   		var voyaName=this.find('name','voyaName')[0].getValue();
   		if(voyaName) a[a.length]={key:'voyaName',value:voyaName,op:EQ};
   		var voyaCarrier=this.find('name','voyaCarrier')[0].getValue();        		
   		if(voyaCarrier) a[a.length]={key:'voyaCarrier',value:voyaCarrier,op:EQ};
   		var shliId=this.find('name','shliId')[0].getValue();        		
   		if(shliId) a[a.length]={key:'shliId',value:shliId,op:EQ};
   		var voyaEta=this.find('name','voyaEta')[0].getValue();
   		var voyaEta2=this.find('name','voyaEta2')[0].getValue();
   		if(voyaEta && voyaEta2){
   			a[a.length]={key:'voyaEta',value:voyaEta.format(DATEF),op:GE};
   			a[a.length]={key:'voyaEta',value:voyaEta2.format(DATEF),op:LE};
   		}
   		else if(voyaEta) a[a.length]={key:'voyaEta',value:voyaEta.format(DATEF),op:EQ};   		
     	var voyaBerthingDate=this.find('name','voyaBerthingDate')[0].getValue();
     	var voyaBerthingDate2=this.find('name','voyaBerthingDate2')[0].getValue();
     	if(voyaBerthingDate && voyaBerthingDate2){
   			a[a.length]={key:'voyaBerthingDate',value:voyaBerthingDate.format(DATEF),op:GE};
   			a[a.length]={key:'voyaBerthingDate',value:voyaBerthingDate2.format(DATEF),op:LE};
   		}
   		else if(voyaBerthingDate) a[a.length]={key:'voyaBerthingDate',value:voyaBerthingDate.format(DATEF),op:EQ};
     	
     	var voyaEtd=this.find('name','voyaEtd')[0].getValue();
     	var voyaEtd2=this.find('name','voyaEtd2')[0].getValue();
     	if(voyaEtd && voyaEtd2){
   			a[a.length]={key:'voyaEtd',value:voyaEtd.format(DATEF),op:GE};
   			a[a.length]={key:'voyaEtd',value:voyaEtd2.format(DATEF),op:LE};
   		}
   		else if(voyaEtd) a[a.length]={key:'voyaEtd',value:voyaEtd.format(DATEF),op:EQ};
   		
   		var voyaSailDate=this.find('name','voyaSailDate')[0].getValue();
   		var voyaSailDate2=this.find('name','voyaSailDate2')[0].getValue();
   		if(voyaSailDate && voyaSailDate2){
   			a[a.length]={key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:GE};
   			a[a.length]={key:'voyaSailDate',value:voyaSailDate2.format(DATEF),op:LE};
   		}
   		else if(voyaSailDate) a[a.length]={key:'voyaSailDate',value:voyaSailDate.format(DATEF),op:EQ};   		
   		
   		if(a.length>0){
   			store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
   	     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) alert(M_NOT_FOUND);}});
   		}
   		else
   			store.load({params:{start:0,limit:20}});
	};
	this.clear=function(){this.find('name','sf')[0].getForm().reset();};
	
	VoyaTab.superclass.constructor.call(this, {    
    id:'T_VOYA',title:'船期查询',iconCls:'stats',closable:true,layout:'border',
    items:[{region:'north',height:150,layout:'column',name:'sf',xtype:'form',title:'船期查询',
    	layoutConfig:{columns:4},labelWidth:60,labelAlign:'right',frame:true,deferredRender:false,collapsible:true,collapsed:false,items:[	        	
    			{columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
					{fieldLabel:C_VESS,tabIndex:1,name:'vessName',xtype:'textfield',anchor:'95%'},
	     			{fieldLabel:C_ETA_V,tabIndex:3,name:'voyaEta',xtype:'datefield',format:DATEF,anchor:'95%'},
	     			{fieldLabel:C_SAIL_DATE_V,tabIndex:3,name:'voyaSailDate',xtype:'datefield',format:DATEF,anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
    			    {fieldLabel:C_VOYA,tabIndex:2,name:'voyaName',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaEta2',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaSailDate2',xtype:'datefield',format:DATEF,anchor:'95%'}]},
	           {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
	           		{fieldLabel:C_CARRIER,tabIndex:5,name:'voyaCarrier',xtype:'textfield',anchor:'95%'},
	     			{fieldLabel:C_ETD_V,tabIndex:3,name:'voyaEtd',xtype:'datefield',format:DATEF,anchor:'95%'},
	     			{fieldLabel:C_BERTHING_DATE,tabIndex:3,name:'voyaBerthingDate',xtype:'datefield',format:DATEF,anchor:'95%'}]},
	            {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
	            	{fieldLabel:C_SHLI,tabIndex:6,name:'shliId',store:shliStore,xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaEtd2',xtype:'datefield',format:DATEF,anchor:'95%'},
	            	{fieldLabel:C_TO,name:'voyaBerthingDate2',xtype:'datefield',format:DATEF,anchor:'95%'}],
	            	buttons:[{text:C_SEARCH,scope:this,handler:this.search},{text:C_RESET,scope:this,handler:this.clear}]
	            	}
	    	]},grid
	]});
};
Ext.extend(VoyaTab, Ext.Panel);