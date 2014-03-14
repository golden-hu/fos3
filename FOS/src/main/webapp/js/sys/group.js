//业务分组
Fos.GroupTab = function(p) {
	var store = GS('GROU_Q','PGroup',PGroup,'grouId','DESC','','S_GROU','grouId',false);
	store.load();
	
	this.save = function(){
		var xml = '';
		var a = store.getModifiedRecords();		
		if(a.length) xml = ATX(a,'PGroup',PGroup);		
		if(xml!=''){
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'GROU_S'},
				success: function(r){
					var a = XTRA(r.responseXML,'PGroup',PGroup);
					FOSU(store,a,PGroup);
					XMG.alert(SYS,M_S);
					getGROU_S().reload();
				},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};	
	this.addGrou=function(){
		var g = new PGroup({id:GGUID(),grouId:GGUID(true),grouName:'',grouDesc:'',active:'1',version:'0',rowAction:'N'});
    	this.grid.stopEditing();store.insert(0,g);this.grid.getSelectionModel().selectFirstRow();this.grid.startEditing(0,1);
	};
	this.removeGrou=function(){FOS_REMOVE(sm,store);};
	this.showUserList = function(){
		var b=sm.getSelected();
		if(b){
			if(b.get('rowAction')=='N')
				XMG.alert(SYS,M_SAVE_FIRST);
			else{
				var win = new Fos.GroupUserWin(b);
				win.show();
			}
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);		
	};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var active = new Ext.grid.CheckColumn({header:C_ACTIVE,dataIndex:'active',sortable:true,width:55});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_NAME,dataIndex:'grouName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_DESC,dataIndex:'grouDesc',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		active],defaults:{sortable:true,width:100}});
	this.grid = new Ext.grid.EditorGridPanel({
		id:'G_GROU',title:C_GROU_LIST,plugins:[active],clicksToEdit:1,border:true,height:500,store:store,sm:sm,cm:cm,
		tbar:[{itemId:'TB_N',text:C_ADD+'(N)',disabled:NR(M1_P+A_GROU+F_M),iconCls:'add',scope:this,handler:this.addGrou}, '-', 		
		{itemId:'TB_R',text:C_REMOVE+'(R)',disabled:NR(M1_P+A_GROU+F_R),iconCls:'remove',scope:this,handler:this.removeGrou},'-', 
		{itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_P+A_GROU+F_M),iconCls:'save',scope:this,handler:this.save},
		{itemId:'TB_U',text:C_USER_LIST,disabled:NR(M1_P+A_GROU+F_M),iconCls:'user',scope:this,handler:this.showUserList}]
	});
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nrs',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_GROU');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		var tb=this.grid.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.N:
		 			if(!tb.getComponent('TB_N').disabled) this.addGrou();break;
		 		case Ext.EventObject.R:
		 			if(!tb.getComponent('TB_R').disabled) this.removeGrou();break;
		 		case Ext.EventObject.S:
		 			if(!tb.getComponent('TB_S').disabled) this.save();break;
				}
		 	}
		},stopEvent:true,scope:this});	
		
	Fos.GroupTab.superclass.constructor.call(this,{id:'T_GROU',title:C_GROU,iconCls:'gen',header:false,
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:80,border:false,width:800,layout:'fit',
	  	items:[{width:400,minSize:200,maxSize:600,layout:'fit',items:[this.grid]}]
	});
};
Ext.extend(Fos.GroupTab, Ext.Panel);

Fos.GroupUserWin = function(group) {	
	var store = GS('GRUS_Q','PGroupUser',PGroupUser,'grusId','DESC','','S_GRUS','grusId',false);
	store.load({params:{grouId:group.get('grouId')}});
	
	this.save = function(){
		var xml = '';
		var a = store.getModifiedRecords();
		if(a.length) 
			xml = ATX(a,'PGroupUser',PGroupUser);
		if(xml!=''){
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'GRUS_S'},
				success: function(r){
					var b = XTRA(r.responseXML,'PGroupUser',PGroupUser);
					FOSU(store,b,PGroupUser);
					XMG.alert(SYS,M_S);
				},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	
	this.removeUser = function(){
		FOS_REMOVE(sm,store);
	};
	
	function addUsers(users){
		var ra = store.getRange();
		for(var i=0;i<users.length;i++){
			var u = users[i];
			var bFind = false;
			
			for(var j=0;j<ra.length;j++){
				if(u.get('userId')==ra[j].get('userId')){
					bFind = true;
					break;
				}
			}
			if(!bFind){
				var ur = new PGroupUser({id:GGUID(),grusId:GGUID(true),
					grouId:group.get('grouId'),userId:u.get('userId')});
				store.add(ur);
				ur.set('rowAction','N');
			}			
		}		
	};
	
	this.addUser = function(){
		var win = new Fos.UserWin(addUsers);
		win.show();
	};	
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var grid = new  Ext.grid.GridPanel({store:store,sm:sm,
    	cm:new Ext.grid.ColumnModel([sm,{header:C_USER_NAME,dataIndex:'userId',renderer:getUSER,width:100}])});
	
	Fos.GroupUserWin.superclass.constructor.call(this,{iconCls:'user',
		title:group.get('grouName')+'-'+C_USER_LIST,modal:true,width:600,
       height:500,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:grid,
       tbar:[
             {itemId:'TB_N',text:C_ADD_TO,disabled:NR(M1_P+A_GROU+F_M),iconCls:'add',scope:this,handler:this.addUser}, '-', 		
             {itemId:'TB_R',text:C_REMOVE,disabled:NR(M1_P+A_GROU+F_R),iconCls:'remove',scope:this,handler:this.removeUser},'-', 
          {itemId:'TB_S',text:C_SAVE,disabled:NR(M1_P+A_GROU+F_M),iconCls:'save',scope:this,handler:this.save}]
       }); 
};
Ext.extend(Fos.GroupUserWin, Ext.Window);


Fos.UserWin = function(fn) {	
	var save = function(){
		var a = sm.getSelections();
		if(a.length>0){
			fn(a);
			this.close();
		}
		else
			XMG.alert(SYS,M_NO_DATA_SELECTED);	
			
	};	
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var grid = new  Ext.grid.GridPanel({store:getUSER_S(),sm:sm,
    	cm:new Ext.grid.ColumnModel([sm,{header:C_USER_NAME,dataIndex:'userName',width:100}])});
	
	Fos.UserWin.superclass.constructor.call(this,{iconCls:'user',
		title:C_USER_LIST,modal:true,width:600,
       height:500,layout:'fit',buttonAlign:'right',items:grid,
       buttons:[
          {text:C_ADD_TO,iconCls:'save',scope:this,handler:save},
          {text:C_CANCEL,iconCls:'close',scope:this,handler:this.close}]
       }); 
};
Ext.extend(Fos.UserWin, Ext.Window);