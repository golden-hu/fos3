Ext.namespace('Fos');
Ext.BLANK_IMAGE_URL = './resources/images/default/s.gif';
Ext.lib.Ajax.defaultPostHeader += ";charset=utf-8"; 
frmValidatePrompt = function(){Ext.Msg.show({title:SYS,msg:M_DATA_NOT_COMPLETE,modal:true,buttons: Ext.Msg.OK});};
var GR=function(){
	var p='';
	if(document.all) p=loadUserData('USER_PERM');
	else if(window.sessionStorage){var v=window.sessionStorage.getItem('USER_PERM');p+=v?v:'';}
	else{var v=Cookies.get('USER_PERM');p+=v?v:'';}
	return p;
};
var NR=function(c){if(c.length==4) return false;var p=GR();return p.indexOf(c+',')==-1?true:false;};
var getCUser=function(){
	var p='';
	if(document.all) p=loadUserData('USER_ID');
	else if(window.sessionStorage) p+=window.sessionStorage.getItem('USER_ID');
	else p+=Cookies.get('USER_ID');
	return p;
};
var getCUserName=function(){
	var p='';
	if(document.all) p=loadUserData('USER_NAME');
	else if(window.sessionStorage) p+=window.sessionStorage.getItem('USER_NAME');
	else p+=Cookies.get('USER_NAME');
	return p;
};
var CUSER_ID=getCUser();
var CUSER_NAME=getCUserName();

Fos.AcloGrid = function() {	
	var store = GS('ACLO_X','PActionLog',PActionLog,'acloId','DESC','','','',true);
	store.load({params:{start:0,limit:25}});
	var c1={header:C_ACT_USER,width:100,dataIndex:"acloUserName"};
	var c2={header:C_ACT_TIME,width:120,dataIndex:"createTime"};
	var c3={header:C_ACT_NAME,width:100,dataIndex:"acloActRemark"};
	var c4={header:C_ACT_TABLE,width:100,dataIndex:"acloTable",renderer:getACLO};	
	var c5={header:C_ACT_TNO,width:70,dataIndex:"acloTno"};
	var c6={header:C_ACT_IP,width:70,dataIndex:"acloIp"};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel([sm,c1,c2,c3,c4,c5,c6]);
	cm.defaultSortable = true;
	cm.defaultWidth=100;
	this.search = function(){var w=new Fos.AcloLW(store);w.show();};
	new Ext.KeyMap(Ext.getDoc(),{
		key:'f',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_ACLO');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		tb=grid.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.S:
		 			if(!tb.items.get('TB_F').disabled) this.search();break;
				}
		 	}
		},stopEvent:true,scope:this});
	Fos.AcloGrid.superclass.constructor.call(this, {id:'G_ACLO',title:C_ACT_LOG,
		border:true,autoScroll:true,stripeRows:true,store:store,sm:sm,cm:cm,loadMask:true,closable:true,
	    bbar:PTB(store,C_PS100),tbar:[{id:'TB_F',text:C_SEARCH+'(F)',iconCls:'search',handler:this.search},
	    	'->',new Ext.PagingToolbar({pageSize:C_PS100,store:store})]});
};
Ext.extend(Fos.AcloGrid, Ext.grid.GridPanel);
Fos.AcloLW = function(store) {
	this.reload=function(){
		var a=[];
		var acloUserId=this.find('name','acloUserId')[0].getValue();
		if(acloUserId) a[a.length]={key:'acloUserId',value:acloUserId,op:EQ};
		var acloTno=this.find('name','acloTno')[0].getValue();
		if(acloTno) a[a.length]={key:'acloTno',value:acloTno,op:EQ};
		var createTime=this.find('name','createTime')[0].getValue();
		var createTime2=this.find('name','createTime2')[0].getValue();
		if(createTime && createTime2){
     		a[a.length]={key:'createTime',value:createTime.format('Y-m-d H:i:s'),op:GE};
     		a[a.length]={key:'createTime',value:createTime2.format('Y-m-d H:i:s'),op:LE};
     	}
     	else if(createTime) a[a.length]={key:'createTime',value:createTime,op:EQ};		
		store.baseParams=a.length>0?{mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))}:{mt:'JSON'};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});this.close();
	};
	var frm = new Ext.form.FormPanel({labelWidth:100,bodyStyle:'padding:5px',
    	items: [{fieldLabel:C_ACT_USER,name:'acloUserId',store:getUSER_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',
			typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
			{fieldLabel:C_ACT_TNO,name:'acloTno',xtype:'textfield',anchor:'95%'},
			{fieldLabel:C_ACT_TIME_F,name:'createTime',xtype:'datefield',format:'Y-m-d H:i:s',anchor:'95%'},
			{fieldLabel:C_ACT_TIME_T,name:'createTime2',xtype:'datefield',format:'Y-m-d H:i:s',anchor:'95%'}
        ]});
    	        
	Fos.AcloLW.superclass.constructor.call(this, {title:C_LOOK_CUST,iconCls:'search',modal:true,width:400,minWidth:300,
        minHeight:200,plain:true,bodyStyle:'padding:0px;',buttonAlign:'right',labelWidth:80,items:frm,
        buttons:[{text:C_OK,scope:this,handler:this.reload},{text:C_CANCEL,scope:this,handler:this.close}]
        }); 
};
Ext.extend(Fos.AcloLW, Ext.Window);

Fos.RoleTab = function() {
	this.sel =GSEL;
	this.reload = false;	
	var store = GS('ROLE_Q','PRole',PRole,'roleId','DESC','','S_ROLE','roleId',false);
    store.load();    
	var us = GS('ROFU_Q','PRoleFunction',PRoleFunction,'funcCode','ASC','','S_ROFU','rofuId',true);
	us.load();
	var re1 = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('roleId')){
				this.sel = record.get('roleId');				
				this.reload = true;this.tree.getRootNode().getUI().toggleCheck(false);this.reload = false;
				this.checkFunction();
			};			
		}
	};
	this.checkFunction=function(){
		var a = us.getRange();
		this.tree.getRootNode().collapse(true);
		for(var i=0;i<a.length;i++){
			if(a[i].get('roleId')==this.sel && a[i].get('rowAction')!='R' && a[i].get('rowAction')!='D'){
				var n=this.tree.getNodeById(a[i].get('funcCode'));				
				if(n){
					this.reload = true;
					if(n.hasChildNodes()) n.expand();
					n.getUI().toggleCheck(true);
					this.reload = false;
				}
			}
		}
	};
	this.save = function(){		
		var xml='';
		var a = store.getModifiedRecords();
		if(a.length) var xml = ATX(a,'PRole',PRole);		
		var ra = us.getModifiedRecords();
		if(ra.length){var x = ATX(ra,'PRoleFunction',PRoleFunction);xml=xml+x;};
		if(xml!=''){
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'ROLE_S'},
				success: function(r){
					var a = XTRA(r.responseXML,'PRole',PRole);FOSU(store,a,PRole);
					var b = XTRA(r.responseXML,'PRoleFunction',PRoleFunction);FOSU(us,b,PRoleFunction);
					XMG.alert(SYS,M_S);getROLE_S().reload();},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,listeners:re1});
	var active = new Ext.grid.CheckColumn({header:C_ACTIVE,dataIndex:'active',sortable:true,width:55});
	var cm=new Ext.grid.ColumnModel([sm,
		{header:C_NAME,dataIndex:'roleName',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_DESC,dataIndex:'roleDesc',width:100,editor:new Ext.form.TextField()},
		active]);
	cm.defaultSortable = true;
	this.addRole=function(){
		var rid=GGUID();
		var r = new PRole({id:rid,roleId:rid,roleName:'',roleDesc:'',active:'1',version:'0',rowAction:'N'});
    	this.grid.stopEditing();store.insert(0,r);sm.selectFirstRow();this.grid.startEditing(0,1);
	};
	this.removeRole=function(){FOS_REMOVE(sm,store);};	
	this.grid = new Ext.grid.EditorGridPanel({
		id:'G_ROLE',title:C_ROLE_LIST,plugins:active,clicksToEdit:1,height:475,store:store,sm:sm,cm:cm,
		tbar:[{id:'TB_N',text:C_ADD+'(N)',disabled:false,iconCls:'add',scope:this,handler:this.addRole}, '-', 		
		{id:'TB_R',text:C_REMOVE+'(R)',disabled:false,iconCls:'remove',handler:this.removeRole},		
		{id:'TB_S',text:C_SAVE+'(S)',disabled:false,iconCls:'save',scope:this,handler:this.save}]
	});	
	new Ext.KeyMap(Ext.getDoc(),{
		key:'nrs',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_ROLE');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		tb=this.grid.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.N:
		 			if(!tb.items.get('TB_N').disabled) this.addRole();break;
		 		case Ext.EventObject.R:
		 			if(!tb.items.get('TB_R').disabled) this.removeRole();break;
		 		case Ext.EventObject.S:
		 			if(!tb.items.get('TB_S').disabled) this.save();break;
				}
		 	}
		},stopEvent:true,scope:this});	
	var bChildCheck=false;
	var nl = {scope:this,
		checkchange:function(n,c){
			if(!this.reload){
				var a = us.getRange();
				b=false;
				for(var i=0;i<a.length;i++){				
					if(a[i].get('roleId')==this.sel && n.id == a[i].get('funcCode')){
						b=true;
						if(c){
							if(a[i].get('rowAction')=='R') a[i].set('rowAction','M');
							if(a[i].get('rowAction')=='D') a[i].set('rowAction','N');
						}
						else a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
						break;
					};
				};
				if(b==false && c){
					var rid=GGUID();
					var rf = new PRoleFunction({id:rid,rofuId:rid,roleId:this.sel,funcCode:n.id});
					us.add(rf);rf.set('rowAction','N');
				};				
				if(c && n.childNodes.length>0){					
					if(!bChildCheck){
					n.expand(true);var cn = n.childNodes;
					for(var i=0;i<cn.length;i++){cn[i].getUI().toggleCheck(true);}}
				}
				if(c && n.parentNode && !n.parentNode.getUI().isChecked()){
					bChildCheck=true;n.parentNode.getUI().toggleCheck(true);bChildCheck=false;
				}
				if(!c && n.childNodes.length>0){
					var cn = n.childNodes;
					for(var i=0;i<cn.length;i++){cn[i].getUI().toggleCheck(false);}
				}
			}
			else{
				if(!c && n.childNodes.length>0){
					var cn = n.childNodes;
					for(var i=0;i<cn.length;i++){cn[i].getUI().toggleCheck(false);}
				}
			}
		}
	};	
	this.tree = createFunctionTree(getFUNC_S(),nl);
	Fos.RoleTab.superclass.constructor.call(this,{id:'T_ROLE',title:C_ROLE_MGT,iconCls:'gen',header:false,deferredRender:false,
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:80,border:false,width:800,layout:'border',
	items: [{title:'',region:'west',split:true,width:300,minSize:200,maxSize:400,layout:'fit',items:[this.grid]},
		{title:'',region:'center',width:400,minSize:200,maxSize:600,layout:'fit',items:[this.tree]}]
	});
};
Ext.extend(Fos.RoleTab, Ext.Panel);

Fos.UserTab = function() {
	this.sel =GSEL;
	this.reload = false;	
	var store = GS('USER_Q','PUser',PUser,'userId','DESC','','S_USER','userId',false);
    store.load();
	var urStore = GS('USRO_Q','PUserRole',PUserRole,'usroId','DESC','','S_USRO','usroId',false);
	var re1 = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('userId')){
				this.sel = record.get('userId');				
				this.reload = true;this.rg.getSelectionModel().clearSelections();this.reload = false;
				this.checkRole();
			};			
		}
	};
	this.checkRole=function(){
		var a = urStore.getRange();
		var ra = this.rg.getStore().getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get('userId')==this.sel){
				for(var j=0;j<ra.length;j++){
					if(ra[j].get('roleId') == a[i].get('roleId') && a[i].get('rowAction')!='D'&& a[i].get('rowAction')!='R'){
						this.reload = true;this.rg.getSelectionModel().selectRecords([ra[j]],true);this.reload = false;
					}
				}
			}
		}
	};
	this.save = function(){
		var xml='';
		var a = store.getModifiedRecords();
		if(a.length) xml = ATX(a,'PUser',PUser);	
		var ra = urStore.getModifiedRecords();
		if(ra.length>0){var x = ATX(ra,'PUserRole',PUserRole);xml=xml+x;};
		if(xml!=''){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'USER_S'},
			success: function(r){				
				var a = XTRA(r.responseXML,'PUser',PUser);FOSU(store,a,PUser);
				var b = XTRA(r.responseXML,'PUserRole',PUserRole);FOSU(urStore,b,PUserRole);
				XMG.alert(SYS,M_S);getUSER_S().reload();getSALE_S().reload();getOP_S().reload();},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,listeners:re1});
	var active =ACTIVE();	
	var cm=new Ext.grid.ColumnModel([sm,
		{header:C_FNAME,dataIndex:'userName',width:60,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_SYS_USER_NAME,dataIndex:'userLoginName',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_TEL,dataIndex:'userTel',width:60,editor:new Ext.form.TextField()},
		{header:C_MOBILE,dataIndex:'userMobile',width:60,editor:new Ext.form.TextField()},
		{header:C_EMAIL,dataIndex:'userEmail',width:60,editor:new Ext.form.TextField()},		
		{header:C_DEFAULT_ROLE,dataIndex:'userDefaultRole',width:80,renderer:getROLE,editor:new Ext.form.ComboBox({displayField:'roleName',valueField:'roleId',triggerAction: 'all',
            allowBlank:false,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getROLE_S()})},
		{header:"Msn",dataIndex:'userMsn',width:60,editor:new Ext.form.TextField()},
		{header:"QQ",dataIndex:'userQq',width:60,editor:new Ext.form.TextField()},
		active]);
	cm.defaultSortable = true;
	this.addUser=function(){
		var uid=GGUID();
		var r = new PUser({id:uid,userId:uid,userName:'',userLoginName:'',userPassword:'123456',userTel:'',userMobile:'',
		userEmail:'',userMsn:'',userQq:'',userDefaultGroup:'',userDefaultRole:'',userSalesFlag:'0',userOperatorFlag:'0',active:'1',version:'0',rowAction:'N'});
    	ug.stopEditing();store.insert(0,r);ug.getSelectionModel().selectFirstRow();ug.startEditing(0,1);
	};
	this.removeUser=function(){FOS_REMOVE(sm,store);};
	var ug = new Ext.grid.EditorGridPanel({
		id:'G_USER',title:C_USER_LIST,plugins:[active],clicksToEdit:1,border:true,height:475,store:store,sm:sm,cm:cm,
		tbar:[{id:'TB_N',text:C_ADD+'(N)',disabled:false,iconCls:'add',scope:this,handler:this.addUser}, '-', 		
		{id:'TB_R',text:C_REMOVE+'(R)',disabled:false,iconCls:'remove',handler:this.removeUser},		
		{id:'TB_S',text:C_SAVE+'(S)',disabled:false,iconCls:'save',scope:this,handler:this.save}]
	});
	new Ext.KeyMap(Ext.getDoc(),{
		key:'nrs',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_USER');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		tb=ug.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.N:
		 			if(!tb.items.get('TB_N').disabled) this.addUser();break;
		 		case Ext.EventObject.R:
		 			if(!tb.items.get('TB_R').disabled) this.removeUser();break;
		 		case Ext.EventObject.S:
		 			if(!tb.items.get('TB_S').disabled) this.save();break;
				}
		 	}
		},stopEvent:true,scope:this});
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.reload==false){
				var a = urStore.getRange();
				b=false;
				for(var i=0;i<a.length;i++){				
					if(a[i].get('userId')==this.sel && record.get('roleId') == a[i].get('roleId')){
						b=true;if(a[i].get('rowAction')=='R') a[i].set('rowAction','M');break;
					};
				};
				if(b==false){
					var ur = new PUserRole({id:GGUID(),usroId:0,userId:this.sel,roleId:record.get('roleId')});
					urStore.add(ur);ur.set('rowAction','N');
				}
			}
		},
		rowdeselect:function(sm,row,record){
			if(this.reload==false){var a = urStore.getRange();
				for(var i=0;i<a.length;i++){				
					if(a[i].get('userId')==this.sel && record.get('roleId') == a[i].get('roleId')){a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');break;};
				};
			}
		}
	};
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false,listeners:re});
    this.rg = new  Ext.grid.GridPanel({id:'G_USRO',title:C_USER_ROLE_LIST,closable:true,border:true,height:475,
    store:getROLE_S(),sm:sm2,cm:new Ext.grid.ColumnModel([sm2,{header:C_ROLE_NAME,dataIndex:'roleName',width:100}])}); 
	
    Fos.UserTab.superclass.constructor.call(this,{id:'T_USER',title:C_USER_MGT,iconCls:'user',header:false,deferredRender:false,
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:80,border:false,width:800,layout:'border',
	items: [{title:'',region:'center',width:400,minSize:200,maxSize:600,layout:'fit',items:[ug]},
		{title:'',region:'east',split:true,width:200,minSize:200,maxSize:400,layout:'fit',items:[this.rg]}]
	});
	urStore.load({callback:function(){ug.getSelectionModel().selectFirstRow();},scope:this});
};
Ext.extend(Fos.UserTab, Ext.Panel);

var showP_COCO = function() {    
	var store = GS('COCO_Q','PCompanyConfig',PCompanyConfig,'cocoId','DESC','cocoGroup','S_COCO','cocoId',false);
	store.load();
	var cm=new Ext.grid.ColumnModel({columns:[
     	new Ext.grid.RowNumberer(),
     	{header:C_COCO_CODE,dataIndex:'cocoCode',width: 80},
 		{header:C_COCO_NAME,dataIndex: 'cocoName',width:150},
 		{header:C_COCO_VALUE,dataIndex:'cocoValue',width:150,editable:true,renderer:function(v,m,r){if(r.get('cocoDesc')) return r.get('cocoDesc'); else return v;}},
 		{header:C_COCO_GROU,dataIndex: 'cocoGroup',width:100}
 	],
 	editors: {
		'text': new Ext.grid.GridEditor(new Ext.form.TextField({})),
		'number': new Ext.grid.GridEditor(new Ext.form.NumberField({})),
		'date': new Ext.grid.GridEditor(new Ext.form.DateField({})),
		'bool':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			store:new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['Y','Yes'],['N','No']]}),displayField:'NAME',valueField:'CODE'})),
		'color':new Ext.grid.GridEditor(new Ext.form.ColorField())
	},
	getCellEditor: function(colIndex, rowIndex) {
		var field = this.getDataIndex(colIndex);
		if (field == 'cocoValue') {
			var rec = store.getAt(rowIndex);
			if(rec.get('cocoValueType')==1) 
				return this.editors['number'];
			else if(rec.get('cocoValueType')==2) 
				return this.editors['bool'];
			else if(rec.get('cocoValueType')==3){
				var a=rec.get('cocoValueOptions').split('|');
				var b=[];
				for(var i=0;i<a.length;i++){
					b[i]=[a[i]];
				}
				var s = new Ext.data.SimpleStore({
			        fields: [{name:'CODE'}],
			        data:b
			    });
				return new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
					store:s,displayField:'CODE',valueField:'CODE'}));
			}
			else if(rec.get('cocoValueType')==9) 
				return this.editors['color'];
			else
				return this.editors['text'];		
		}
		return Ext.grid.ColumnModel.prototype.getCellEditor.call(this, colIndex, rowIndex);
	}
	});
    var sm=new Ext.grid.RowSelectionModel({singleSelect:true});    
	cm.defaultSortable = true;
	this.save=function(){FOS_POST(store,'PCompanyConfig',PCompanyConfig,'COCO_S');};
	new Ext.KeyMap(Ext.getDoc(),{
		key:'s',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_COCO');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		tb=grid.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.S:
		 			if(!tb.items.get('TB_S').disabled) this.save();break;
				}
		 	}
		},stopEvent:true,scope:this});
    this.grid = new  Ext.grid.EditorGridPanel({
    id:'G_COCO',iconCls:'gen',title:C_COCO,header:false,clicksToEdit:2,closable:true,
    store: store,sm:sm,cm:cm,view:new Ext.grid.GroupingView(groupViewCfg),
    tbar:[{id:'TB_S',text:C_SAVE+'(S)',disabled:false,iconCls:'save',handler:this.save}]}); 
    return this.grid;
};