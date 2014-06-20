//用户
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
	this.reset = function(){
		var b=sm.getSelected();
		if(b){
			Ext.Ajax.request({url:SERVICE_URL,method:'POST',
				params:{A:'USER_UA',userId:b.get('userId'),newPassword:'123456',newPassword2:'123456'},
				success: function(r){XMG.alert(SYS,C_RESET_PASS_INFO);},
				failure: function(r){XMG.alert(SYS,M_F);},scope:this});
		}
		else XMG.alert(SYS,M_NC);
	};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,listeners:re1});
	var active =ACTIVE();
	var network = CHKCLM(C_NETWORK_ALLOW_ACCESS,'userNetworkFlag',100);
	var sales =CHKCLM(C_SALES,'userSalesFlag');
	var operator = CHKCLM(C_OPERATOR,'userOperatorFlag');
	var systemUser = CHKCLM(C_SYSTEM_USER,'userSystemUserFlag',80);
	var vg=CHKCLM(C_VIEW_GROU_CONS,'userGrouViewFlag',110);
	var eg=CHKCLM(C_EDIT_GROU_CONS,'userGrouEditFlag',110);	
	var va=CHKCLM(C_VIEW_ALL_CONS,'userAllViewFlag',110);
	var ea=CHKCLM(C_EDIT_ALL_CONS,'userAllEditFlag',110);
	var branch={header:C_BRANCH,dataIndex:'userDefaultBranch',editor:new Ext.form.ComboBox({displayField:'branchName',valueField:'branchId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getBRANCH_S()}),hidden:VERSION==2?false:true,renderer:getBRANCH};
    var station={header:C_DEPARTURE_STATION,dataIndex:'userDefaultStation',renderer:getTS,editor:new Ext.form.ComboBox({displayField:'trainNameCn',valueField:'trainId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getTS_S()}),hidden:VERSION==2?false:true};
	
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_FNAME,dataIndex:'userName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_SYS_USER_NAME,dataIndex:'userLoginName',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_DEFAULT_GROU,dataIndex:'userDefaultGroup',width:80,renderer:getGROU,editor:new Ext.form.ComboBox({displayField:'grouName',valueField:'grouId',triggerAction: 'all',
            allowBlank:false,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getGROU_S()})},
            station,branch,systemUser,sales,operator,network,va,ea,vg,eg,          
		{header:C_TEL,dataIndex:'userTel',editor:new Ext.form.TextField()},
		{header:C_MOBILE,dataIndex:'userMobile',editor:new Ext.form.TextField()},
		{header:C_EMAIL,dataIndex:'userEmail',editor:new Ext.form.TextField()},		
		{header:C_DEFAULT_ROLE,dataIndex:'userDefaultRole',width:80,renderer:getROLE,editor:new Ext.form.ComboBox({displayField:'roleName',valueField:'roleId',triggerAction: 'all',
            allowBlank:false,mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getROLE_S()})},
		{header:"Msn",dataIndex:'userMsn',editor:new Ext.form.TextField()},
		{header:"QQ",dataIndex:'userQq',editor:new Ext.form.TextField()},
		active],defaults:{sortable:true,width:60}});
	
	this.addUser=function(){
		var uid=GGUID();
		var r = new PUser({id:uid,userId:uid,userPassword:'123456',userSystemUserFlag:'0',
		userSalesFlag:'0',userOperatorFlag:'0',userNetworkFlag:'1',
		userGrouViewFlag:'0',userGrouEditFlag:'0',userAllViewFlag:'0',userAllEditFlag:'0',
		active:'1',version:'0',rowAction:'N'});
    	ug.stopEditing();
    	store.insert(0,r);
    	ug.getSelectionModel().selectFirstRow();
    	ug.startEditing(0,1);
	};
	this.removeUser=function(){FOS_REMOVE(sm,store);};
	this.expePer=function(){
		var b=sm.getSelected();
		if(b){var w=new Fos.UsepWin(b);w.show();}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	var tbItems = [{itemId:'TB_N',text:C_ADD+'(N)',disabled:NR(M1_P+A_USER+F_M),iconCls:'add',scope:this,handler:this.addUser}, '-', 		
	       		{itemId:'TB_R',text:C_REMOVE+'(R)',disabled:NR(M1_P+A_USER+F_R),iconCls:'remove',handler:this.removeUser},	'-', 		
	    		{itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_P+A_USER+F_M),iconCls:'save',scope:this,handler:this.save},'-', 	
	    		{itemId:'TB_P',text:C_RESET_PASS+'(P)',disabled:NR(M1_P+A_USER+F_M),iconCls:'save',scope:this,handler:this.reset}];
	//if(VERSION==0)
		tbItems[tbItems.length] = {itemId:'TB_E',text:C_EXPE_PERMISSIOM+'(E)',disabled:NR(M1_P+A_USER+F_M),iconCls:'key',scope:this,handler:this.expePer};
	
	var ug = new Ext.grid.EditorGridPanel({id:'G_USER',title:C_USER_LIST,
		clicksToEdit:1,border:true,height:475,store:store,sm:sm,cm:cm,
		plugins:[systemUser,sales,operator,network,va,ea,vg,eg,active],
		tbar:tbItems
	});
	
	new Ext.KeyMap(Ext.getDoc(),{
		key:'nrspe',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_USER');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		var tb=ug.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.N:
		 			if(!tb.getComponent('TB_N').disabled) this.addUser();break;
		 		case Ext.EventObject.R:
		 			if(!tb.getComponent('TB_R').disabled) this.removeUser();break;
		 		case Ext.EventObject.S:
		 			if(!tb.getComponent('TB_S').disabled) this.save();break;
		 		case Ext.EventObject.P:
		 			if(!tb.getComponent('TB_P').disabled) this.reset();break;
		 		case Ext.EventObject.E:
		 			if(!tb.getComponent('TB_E').disabled) this.expePer();break;
				}
		 	}
		},stopEvent:true,scope:this});
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.reload==false){
				var a = urStore.getRange();
				var b=false;
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
			if(this.reload==false){
				var a = urStore.getRange();
				for(var i=0;i<a.length;i++){				
					if(a[i].get('userId')==this.sel && record.get('roleId') == a[i].get('roleId')){
						a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
						break;
					};
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

//用户费用权限设置
Fos.UsepWin = function(c) {	
	
	var store = new Ext.data.GroupingStore({url: SERVICE_URL+'?A='+'USEP_ALL_Q',
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'PUserExpePermission'}, PUserExpePermission),
		groupField:'expeType',sortInfo:{field:'chclId', direction:'ASC'},remoteSort:false});
	store.load({params:{mt:'xml',userId:c.get('userId')},scope:this});
	
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});	
	
	var c1={header:'',width:0,dataIndex:"expeType",renderer:getEXTY};	
	var c2={header:C_CHCL,width:200,dataIndex:"chclName"};
	var ed=CHKCLM(C_EDITABLE,'usepEditable',100);
	var va=CHKCLM(C_VIEW_ALL,'usepViewAll',100);
	var ea=CHKCLM(C_EDIT_ALL,'usepEditAll',100);
	
	var cm=new Ext.grid.ColumnModel({columns:[c1,c2,ed,va,ea],
		defaults:{sortable:true,width:100}
	});
		
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length>0){
			var x = ATX(a,'PUserExpePermission',PUserExpePermission);
			if(x!=''){
				Ext.Ajax.request({scope:this,
					url:SERVICE_URL,
					method:'POST',
					params:{A:'USEP_S'},
					success: function(res){						
						store.load({params:{mt:'xml',userId:c.get('userId')},scope:this});						
						XMG.alert(SYS,M_S);
					},
					failure: function(res){
						XMG.alert(SYS,M_F+res.responseText);
					},
					xmlData:FOSX(x)
				});
			}
		}
		else XMG.alert(SYS,M_NC);
	};
	
	var vc={forceFit:false,groupTextTpl: '{text}'};
	var grid=new Ext.grid.EditorGridPanel({id:'G_USEP',	
		border:true,
		height:380,
		autoScroll:true,
		clicksToEdit:1,
		plugins:[ed,va,ea],
	    stripeRows:true,
	    store:store,
	    sm:sm,
	    cm:cm,
	    view:new Ext.grid.GroupingView(vc),
	    tbar:[
			{text:C_SAVE,iconCls:'save',disabled:false,scope:this,handler:this.save},'-'
			]
	});
	
	Fos.UsepWin.superclass.constructor.call(this,{iconCls:'task',
		title:C_EXPE_PERMISSIOM+'-'+c.get('userName'),
		modal:true,width:600,
       height:400,
       layout:'fit',
       plain:false,
       bodyStyle:'padding:0px;',
       buttonAlign:'right',
       items:grid}); 
};
Ext.extend(Fos.UsepWin, Ext.Window);

var changePass = function(){
	var win = new Fos.PassWin();
	win.show();
};

Fos.PassWin = function() {    
	var frmPass = new Ext.form.FormPanel({labelWidth:80,bodyStyle:'padding:5px',
    	items: [{fieldLabel:C_OLD_PASS,name:'oldPassword',allowBlank:false,xtype:'textfield',inputType:'password',anchor:'90%'},
    	{fieldLabel:C_NEW_PASS,name:'newPassword',allowBlank:false,xtype:'textfield',inputType:'password',anchor:'90%'},
    	{fieldLabel:C_CONFIRM_NEW_PASS,name:'newPassword2',allowBlank:false,xtype:'textfield',inputType:'password',anchor:'90%'}
    	]
    });
    this.changePass=function(){
		var op=frmPass.find('name','oldPassword')[0].getValue();
		var np=frmPass.find('name','newPassword')[0].getValue();
		var np2=frmPass.find('name','newPassword2')[0].getValue();
		if(op==''){
			XMG.alert(SYS,M_OLD_PASS_REQIRED);
			frmPass.find('name','oldPassword')[0].focus();
			return;
		};
		if(np==''){
			XMG.alert(SYS,M_NEW_PASS_REQIRED);
			frmPass.find('name','newPassword')[0].focus();
			return;
		};
		if(np2==''){
			XMG.alert(SYS,M_CONFIRM_NEW_PASS_REQIRED);
			frmPass.find('name','newPassword2')[0].focus();
			return;
		};
		if(np!=np2){
			XMG.alert(SYS,M_NEW_PASS_NOT_EQ);
			frmPass.find('name','newPassword')[0].focus();
			return;
		};
		if(np==op){
			XMG.alert(SYS,M_NEW_PASS_EQ_OLD);
			frmPass.find('name','newPassword')[0].focus();
			return;
		};
		
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',
			params:{A:'USER_U',oldPassword:op,newPassword:np,newPassword2:np2},
			success: function(r){
				XMG.alert(SYS,M_CHANGE_PASS_SUCCESSED);
				this.close();
			},
			failure: function(r){
				XMG.alert(SYS,M_F);
			},
			scope:this
		});
    };
    
    Fos.PassWin.superclass.constructor.call(this, {title:M_CHANGE_PASS,modal:true,width:400,
        Height:300,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:[frmPass],        
        buttons:[{text:C_OK,scope:this,handler:this.changePass},
        	{text:C_CANCEL,scope:this,handler:this.close}]
        }); 
};
Ext.extend(Fos.PassWin,Ext.Window);
