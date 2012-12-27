Ext.namespace('Fos');
Ext.BLANK_IMAGE_URL = 'js/ext/resources/images/default/s.gif';
Ext.lib.Ajax.defaultPostHeader += ";charset=utf-8"; 
frmValidatePrompt = function(){Ext.Msg.show({title:SYS,msg:M_DATA_NOT_COMPLETE,modal:true,buttons: Ext.Msg.OK});};
var DATEF='Y-m-d';
var GR=function(){return loadSession('USER_PERM');};
var NR=function(c){var p=GR();return p.indexOf(c+',')==-1?true:false;};
var CUSER_ID=loadSession('USER_ID');
var CUSER_NAME=loadSession('USER_NAME');
var USER_IS_SALES=loadSession('USER_IS_SALES');
var USER_ALL_VIEW_FLAG=loadSession('USER_ALL_VIEW_FLAG');
Fos.MsgHistory=function(uid,un){
	var store = GS('MESS_X','PMessage',PMessage,'messId','DESC','','','',false);
	store.load({params:{userId:uid,messSendFlag:1,messType:2,start:0,limit:100}});
	var sm=getCSM();
    var cm=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),
    {header:C_SEND_TIME,dataIndex:'messCreateTime',renderer:formatDateTime,width:120},
	{header:C_SENDER,dataIndex:'messFromUserName'},
	{header:C_RECEIVER,dataIndex:'messToUserName'},
	{header:C_MSG,dataIndex:'messBody',width:200}
	],defaults:{sortable:true,width:80}});
    var grid = new  Ext.grid.GridPanel({id:'G_MESS_H_'+uid,iconCls:'gen',header:false,
    	width:400,height:300,store:store,sm:sm,cm:cm,loadMask:true,
    bbar:PTB(store,100),
    tbar:PTB(store,100)}); 
    Fos.MsgHistory.superclass.constructor.call(this, {id:'W_MSG_H_'+uid,iconCls:'user',title:C_VIEW_MSG_HISTORY+'-'+un,
    	closable:true,width:400,height:300,layout:'fit',maximizable:true,items:grid});    
};
Ext.extend(Fos.MsgHistory, Ext.Window);

Fos.MsgWin = function(uid,un) {
	this.onMsg=function(content,t){
		var msg = '<div style="margin:5px 5px 5px 5px;font-size:12px"><b>{1}</b>说:[{0}]<br>';
		if(t=='S')
			msg+='<div style="margin:5px 5px 5px 5px;font-size:12px">{2}</div>';
		else 
			msg+='<div style="margin:5px 5px 5px 5px;font-size:12px;"><font color="blue">{2}</font</div>';
		var mc = String.format(((msg)), new Date().toLocaleString(),t=='S'?CUSER_NAME:un,content);
		Ext.getCmp("MSG_D").body.insertHtml('beforeEnd', mc);
		Ext.getCmp("MSG_D").body.scroll('b', 10000,{duration: 0.1});		
	};
	this.sendMsg=function(){
		var he=Ext.getCmp('MSG_S');he.syncValue();
		var msg= he.getValue();
		if (msg.trim() == ''){XMG.alert(SYS,M_NO_MSG_SEND);he.focus(true);return}		
		this.onMsg(msg,'S');
		he.reset();
		var m=new PMessage({messId:GGUID(),messType:2,messTo:un,messCc:'',messBcc:'',messSubject:'',messBody:msg,
			messAttachment:'',messFrom:CUSER_NAME,messCreateTime:new Date(),messSendFlag:0,
			messFromUserId:CUSER_ID,messFromUserName:CUSER_NAME,messToUserId:uid,messToUserName:un,rowAction:'N'
		});
		var x = RTX(m,'PMessage',PMessage);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'MESS_S'},
			success: function(res){},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(x)
		});
	};
	this.addKeyMap = function(c){
		var he=this.findById('MSG_S');
		var el=he.getEl();
		var map = new Ext.KeyMap(el,[{key:13,ctrl:true,stopEvent:true,fn:this.sendMsg,scope:this}]);
	};
	Fos.MsgWin.superclass.constructor.call(this, {id:'W_MSG'+uid,iconCls:'user',title:un+C_DIALOG,
		width:600,maximizable:true,height:600,closable:true,
        plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'border',items:[
			{region:'north',id:'MSG_D',split:true,layout:'fit',height:300,autoScroll:true},
			{region:'center',
				layout:'fit',items:[{id:'MSG_S',xtype:'htmleditor',anchor:'95%',height:'300'
				}],
				bbar:['->',{text:C_SEND,iconCls:'save',scope:this,handler:this.sendMsg}]}
		],
		listeners:{scope:this,show:this.addKeyMap}});
};
Ext.extend(Fos.MsgWin, Ext.Window);
Fos.OnlineUserWin = function() {
	var store = GS('USER_L','PUser',PUser,'userId','DESC','','','',false);
    var root=new Ext.tree.TreeNode({text:'Online'});
	var frm = new Ext.tree.TreePanel({id:'im-tree',
        rootVisible:false,
        lines:false,
        autoScroll:true,        
        root:root,
        contextMenu: new Ext.menu.Menu({
            items: [
                    {id: 'SEND_M',text:C_SEND_MSG},
                    {id: 'SEND_F',text:C_SEND_FILE},
                    {id: 'SEND_MA',text:C_SEND_MAIL},
                    '-',
                    {id: 'M_HISTORY',text:C_VIEW_MSG_HISTORY},
                    {id: 'REMOVE',text:C_KICK_OFF}                 
                    ],
            listeners: {
                itemclick: function(item) {
                    switch (item.id) {
                        case 'REMOVE':
                            var n = item.parentMenu.contextNode;
                            if (n.parentNode) {
                                var u= new PUser({userId:n.id});
                                var x = RTX(u,'PUser',PUser);
                        		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'USER_K'},
                        			success: function(res){n.remove();},
                        			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
                        			xmlData:FOSX(x)
                        		});
                            }
                            break;
                        case 'SEND_M':
                            var n = item.parentMenu.contextNode;
                            var w=Ext.getCmp('W_MSG'+n.id);
                            if(w) w.show();
                            else{
                            	var w= new Fos.MsgWin(n.id,n.text);
                            	w.show();
                            }
                            break;
                        case 'M_HISTORY':
                            var n = item.parentMenu.contextNode;
                            var w=Ext.getCmp('W_MSG_H_'+n.id);
                            if(w) w.show();
                            else{
                            	var w= new Fos.MsgHistory(n.id,n.text);
                            	w.show();
                            }
                            break;
                    }
                }
            }
        }),
        listeners: {
	        contextmenu: function(node, e) {
				node.select();
	            var c = node.getOwnerTree().contextMenu;
	            c.contextNode = node;
	            c.showAt(e.getXY());
	        },
	        dblclick :function(node, e) {}
	    }
	});	
	var loadOnlineUser=function(){
		store.load({callback:function(r,o,s){
	    	if(s){
	    		if(root.hasChildNodes()){
	    			var a=root.childNodes;
		    		for(var i=0;i<a.length;i++){
		    			var b=false;
		    			for(var j=0;j<r.length;j++){
		    				if(a[i].id==r[j].get('userId')){b=true;break;}	    				
		    			}
		    			if(b==false) root.removeChild(a[i]);
		    		}
	    		}
	    		if(r.length){
		    		for(var i=0;i<r.length;i++){
		    			if(!root.findChild('id',r[i].get('userId'))&&r[i].get('userId')!=CUSER_ID){
			    			var n=new Ext.tree.TreeNode({text:r[i].get('userName'),id:r[i].get('userId'),
			    				iconCls:'user',leaf:true,listeners:{
			    				click:function(n,e){}}});
			    			root.appendChild(n);
		    			}
		    		}
	    		}
	    	}
	    }});
	};
	var task={run:loadOnlineUser,interval:60000};
	loadOnlineUser();
	this.runner = new Ext.util.TaskRunner();
	this.runner.start(task);
    Fos.OnlineUserWin.superclass.constructor.call(this, {id:'W_MESS',title:C_ONLINE_USER,width:200,
        height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'fit',items:frm,
        closable:true,listeners:{scope:this, destroy:function(c){this.runner.stop(task);}}
    });
};
Ext.extend(Fos.OnlineUserWin, Ext.Window);

Fos.AcloGrid = function() {	
	var store = GS('ACLO_X','PActionLog',PActionLog,'acloId','DESC','','','',true);
	store.load({params:{start:0,limit:25}});
	var c1={header:C_ACT_USER,dataIndex:"acloUserName"};
	var c2={header:C_ACT_TIME,dataIndex:"createTime"};
	var c3={header:C_ACT_NAME,dataIndex:"acloActRemark"};
	var c4={header:C_ACT_TABLE,dataIndex:"acloTable",renderer:getACLO};	
	var c5={header:C_ACT_TNO,width:70,dataIndex:"acloTno"};
	var c6={header:C_ACT_IP,width:70,dataIndex:"acloIp"};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,c1,c2,c3,c4,c5,c6],defaults:{sortable:true,width:100}});
	cm.defaultSortable = true;
	cm.defaultWidth=100;
	this.search = function(){var w=new Fos.AcloLW(store);w.show();};
	new Ext.KeyMap(Ext.getDoc(),{
		key:'f',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_ACLO');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		var tb=grid.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.S:
		 			if(!tb.getComponent('TB_F').disabled) this.search();break;
				}
		 	}
		},stopEvent:true,scope:this});
	Fos.AcloGrid.superclass.constructor.call(this, {id:'G_ACLO',title:C_ACT_LOG,
		border:true,autoScroll:true,stripeRows:true,store:store,sm:sm,cm:cm,loadMask:true,closable:true,
	    bbar:PTB(store,C_PS100),tbar:[{itemId:'TB_F',text:C_SEARCH+'(F)',iconCls:'search',handler:this.search},
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

Fos.RoleTab = function() {
	var store = GS('ROLE_Q','PRole',PRole,'roleId','DESC','','S_ROLE','roleId',false);
    store.load();  
    this.save = function(){		
		var xml='';
		var a = store.getModifiedRecords();
		if(a.length) var xml = ATX(a,'PRole',PRole);		
		if(xml!=''){
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'ROLE_S'},
				success: function(r){
					var a = XTRA(r.responseXML,'PRole',PRole);FOSU(store,a,PRole);
					XMG.alert(SYS,M_S);getROLE_S().reload();},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var active = new Ext.grid.CheckColumn({header:C_ACTIVE,dataIndex:'active',sortable:true,width:55});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_NAME,dataIndex:'roleName',editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
		{header:C_DESC,dataIndex:'roleDesc',editor:new Ext.form.TextField()},
		active],defaults:{sortable:true,width:100}});
	this.addRole=function(){
		var rid=GGUID();
		var r = new PRole({id:rid,roleId:rid,roleName:'',roleDesc:'',active:'1',version:'0',rowAction:'N'});
    	this.grid.stopEditing();store.insert(0,r);sm.selectFirstRow();this.grid.startEditing(0,1);
	};
	this.removeRole=function(){FOS_REMOVE(sm,store);};
	this.setPermission=function(){
		var b=sm.getSelected();
		if(b){
			if(b.get('rowAction')=='N')
				XMG.alert(SYS,M_SAVE_FIRST);
			else{
				var w=new Fos.RoleFuncWin(b);w.show();
			}
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.grid = new Ext.grid.EditorGridPanel({
		plugins:active,clicksToEdit:1,height:475,store:store,sm:sm,cm:cm,
		tbar:[{itemId:'TB_N',text:C_ADD+'(N)',disabled:NR(M1_P+A_ROLE+F_M),iconCls:'add',scope:this,handler:this.addRole},'-',
		{itemId:'TB_R',text:C_REMOVE+'(R)',disabled:NR(M1_P+A_ROLE+F_R),iconCls:'remove',handler:this.removeRole},'-',
		{itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_P+A_ROLE+F_M),iconCls:'save',scope:this,handler:this.save},'-',
		{itemId:'TB_P',text:C_PERMISSION_SET+'(P)',disabled:NR(M1_P+A_ROLE+F_M),iconCls:'key',scope:this,handler:this.setPermission}]
	});	
	new Ext.KeyMap(Ext.getDoc(),{
		key:'nrs',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('T_ROLE');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		var tb=this.grid.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.N:
		 			if(!tb.getComponent('TB_N').disabled) this.addRole();break;
		 		case Ext.EventObject.R:
		 			if(!tb.getComponent('TB_R').disabled) this.removeRole();break;
		 		case Ext.EventObject.S:
		 			if(!tb.getComponent('TB_S').disabled) this.save();break;
				}
		 	}
		},stopEvent:true,scope:this});
	Fos.RoleTab.superclass.constructor.call(this,{id:'T_ROLE',title:C_ROLE_MGT,iconCls:'gen',header:false,deferredRender:false,
		autoScroll:true,labelAlign:'right',closable:true,labelWidth:80,border:false,width:800,layout:'fit',
		items:[this.grid]});
};
Ext.extend(Fos.RoleTab, Ext.Panel);

Fos.RoleFuncWin = function(role) {
	var us = GS('ROFU_Q','PRoleFunction',PRoleFunction,'funcCode','ASC','','S_ROFU','rofuId',true);			
	var funcStore=getFUNC_S();
	var bChildCheck=false;
	this.reload = false;
	var nl = {scope:this,
			checkchange:function(n,c){
				if(!this.reload){
					var a = us.getRange();
					var b=false;
					for(var i=0;i<a.length;i++){				
						if(a[i].get('roleId')==role.get('roleId') && n.id == a[i].get('funcCode')){
							b=true;
							if(c){
								if(a[i].get('rowAction')=='R') a[i].set('rowAction','M');
								if(a[i].get('rowAction')=='D') a[i].set('rowAction','N');
							}
							else a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
							break;
						}
					}
					if(b==false && c){
						var rid=GGUID();
						var rf = new PRoleFunction({id:rid,rofuId:rid,roleId:role.get('roleId'),funcCode:n.id});
						us.add(rf);rf.set('rowAction','N');
					}	
					if(c && n.childNodes.length>0){					
						if(!bChildCheck){
							n.expand(true);
							var cn = n.childNodes;
							for(var i=0;i<cn.length;i++){cn[i].getUI().toggleCheck(true);}
						}
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
	var tree = new Ext.tree.TreePanel({
		animate:true,
		enableDD:false,autoScroll:true,
		containerScroll: true,height:475,title:C_FUNC_PERMISSION,
		selModel:new Ext.tree.MultiSelectionModel(),
		listeners:nl
	});
	var fp = {};
	var maxDep = 0;var root;
	var a = funcStore.getRange();
	for(var i=0;i<a.length;i++){
		var fc=a[i].get('funcCode');
		var n = new Ext.tree.TreeNode({text:a[i].get('funcName'),id:fc,leaf:a[i].get('funcType')=='M'?false:true,
				checked:false,expanded:false});
		if(fc=='00') root=n;
		var dep = fc.length/2;
		maxDep=maxDep>dep?maxDep:dep;
		var na = fp[dep];
		if(na) na[na.length]=n;
		else{na=[];na[0]=n;fp[dep]=na;}
	}
	for(var i=1;i<maxDep;i++){
		var na = fp[i];
		var ca = fp[i+1];
		for(var j=0;j<na.length;j++){
			if(!na[j].isLeaf()) addChiledNode(na[j],ca);
		}
	}
	tree.setRootNode(root);	
	
	us.load({params:{mt:'JSON',roleId:role.get('roleId')},callback:function(ra,o,s){
		if(s&&ra.length>0){
			for(var i=0;i<ra.length;i++){
				var n=tree.getNodeById(ra[i].get('funcCode'));				
				if(n){
					this.reload = true;
					if(n.hasChildNodes()) n.expand();
					n.getUI().toggleCheck(true);
					this.reload = false;
				}
			}
		}
	},scope:this});
	
	this.save = function(){		
		var xml='';
		var a = us.getModifiedRecords();
		if(a.length) var xml = ATX(a,'PRoleFunction',PRoleFunction);
		if(xml!=''){
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'ROFU_S'},
				success: function(r){
					var a = XTRA(r.responseXML,'PRoleFunction',PRoleFunction);FOSU(us,a,PRoleFunction);
					XMG.alert(SYS,M_S);},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	
	Fos.RoleFuncWin.superclass.constructor.call(this,{iconCls:'key',title:C_PERMISSION_SET+'-'+role.get('roleName'),modal:true,width:600,
       height:500,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:tree,
       tbar:[
          {itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_P+A_ROLE+F_M),iconCls:'save',scope:this,handler:this.save}]
       }); 
};
Ext.extend(Fos.RoleFuncWin, Ext.Window);

Fos.UsepWin = function(c) {	
	var store = new Ext.data.GroupingStore({url: SERVICE_URL+'?A='+'USEP_ALL_Q',
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'PUserExpePermission'}, PUserExpePermission),
		groupField:'expeType',sortInfo:{field:'chclId', direction:'ASC'},remoteSort:false});
	store.load({params:{mt:'JSON',userId:c.get('userId')},scope:this});
	
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true});
	var ch=new GChargeClass({chclId:0,chclCode:'C_ALL_CHARGE',chclName:C_ALL_CHARGE});	
	var chclS=GS('CHCL_Q','GChargeClass',GChargeClass,'chclId','ASC','','S_CHCL_E','chclId');
	chclS.load({params:{active:'1'},callback:function(){chclS.insert(0,ch);}});	
	
	var c1={header:'',width:0,dataIndex:"expeType",renderer:getEXTY,editor:
		new Ext.form.ComboBox({xtype:'combo',store:EXTY_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c2={header:C_CHCL,width:200,dataIndex:"chclName",editor:
		new Ext.form.ComboBox({xtype:'combo',store:chclS,displayField:'chclName',valueField:'chclName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
			listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();if(b){b.set('chclId',r.get('chclId'));}}}
				})};
	var ed=CHKCLM(C_EDITABLE,'usepEditable',100);
	var va=CHKCLM(C_VIEW_ALL,'usepViewAll',100);
	var ea=CHKCLM(C_EDIT_ALL,'usepEditAll',100);
	
	var cm=new Ext.grid.ColumnModel({columns:[c1,c2,ed,va,ea],defaults:{sortable:true,width:100}});
	this.addUsep=function(){
		var uid=GGUID();
		var r = new PUserExpePermission({id:uid,usepId:uid,userId:c.get('userId'),chclId:'',chclName:'',
		expeType:'R',version:'0',rowAction:'N'});
    	grid.stopEditing();store.insert(0,r);grid.getSelectionModel().selectFirstRow();grid.startEditing(0,1);
	};
	this.removeUsep=function(){FOS_REMOVE(sm,store);};
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length>0){
			var x = ATX(a,'PUserExpePermission',PUserExpePermission);
			if(x!=''){
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'USEP_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'PUserExpePermission',PUserExpePermission);FOSU(store,a,PUserExpePermission);
						XMG.alert(SYS,M_S);},
					failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
					xmlData:FOSX(x)
				});
			}
		}
		else XMG.alert(SYS,M_NC);
	};
	var vc={forceFit:false,groupTextTpl: '{text}'};
	var grid=new Ext.grid.EditorGridPanel({id:'G_USEP',	border:true,height:380,autoScroll:true,clicksToEdit:1,plugins:[ed,va,ea],
	    stripeRows:true,store:store,sm:sm,cm:cm,view:new Ext.grid.GroupingView(vc),
	    tbar:[
			{text:C_SAVE,iconCls:'save',disabled:false,scope:this,handler:this.save},'-'
			]
		});	
	Fos.UsepWin.superclass.constructor.call(this,{iconCls:'task',title:C_EXPE_PERMISSIOM+'-'+c.get('userName'),modal:true,width:600,
       height:400,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:grid}); 
};
Ext.extend(Fos.UsepWin, Ext.Window);

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
            station,branch,systemUser,sales,operator,va,ea,vg,eg,          
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
		userSalesFlag:'0',userOperatorFlag:'0',
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
		plugins:[systemUser,sales,operator,va,ea,vg,eg,active],
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

var showG_TEMP = function() {    
	this.store = GS('TEMP_Q','PTemplate',PTemplate,'tempId','DESC','','S_TEMP','tempId',true);
    this.store.load();    
    this.upload = function(){
    	var b =grid.getSelectionModel().getSelected();
    	if(b){
			if(b.get('rowAction')!='N'){
	    		var win = new Fos.FileUploadWin(C_TEMP_UP,C_TEMP_FILE_P);
	    		win.addButton({text:C_UPLOAD,handler:function(){
					var f = Fos.FileUploadWin.superclass.findById.call(win,'F_UP');
					if(f.getForm().isValid()){
	                	f.getForm().submit({
	                    	url: SERVICE_URL+'?mt=json&A=TEMP_U&uf=1&tempId='+b.get('tempId'),
	                    	waitMsg:'Uploading...',
	                    	success: function(f, o){
	                    		XMG.alert(SYS,C_UPLOAD_SUCCESS);
	                    		win.close();
	                    	}
	                	});
	            }}});
	            win.addButton({text:C_CANCEL,handler:function(){win.close();}},this);
	    		win.show();
	    	}    	
	    	else{XMG.alert(SYS,M_SAVE_FIRST);}
    	}
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    this.download=function(){
    	var b =grid.getSelectionModel().getSelected();
    	if(b){
	    	var url = SERVICE_URL+'?A='+'TEMP_D&tempId='+b.get('tempId');
	    	window.open(url,'download', 'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no');
    	}
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
	var checkColumn = new Ext.grid.CheckColumn({header:C_ACTIVE,dataIndex:'active',sortable:true,width:55});
    var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
    var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_TEMP_NAME,dataIndex:'tempName',width:200,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_TEMP_DESC,dataIndex:'tempDesc',width:150,editor:new Ext.form.TextField()},
	{header:C_FILE_TYPE,dataIndex:'tempType',width:150,editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
    	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:TFTY_S})},
	{header:C_TEMP_TYPE,dataIndex:'tetyId',width:150,renderer:getTETY,editor:new Ext.form.ComboBox({displayField:'tetyName',valueField:'tetyId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getTETY_S(),
            listeners:{scope:this,select:function(c,r,i){
            	sm.getSelected().set('tetyCode',r.get('tetyCode'));
            	sm.getSelected().set('tetyName',r.get('tetyName'));}}})},
	checkColumn],defaults:{sortable:true,width:100}});
	this.add=function(){
		var p = new PTemplate({id:GGUID(),tempId:'0',tempName:'',tempType:'xls',tempClass:'B',tempDesc:'',tetyId:'',tetyName:'',active:1,version:'0',rowAction:'N'});            
    	grid.stopEditing();this.store.insert(0,p);sm.selectFirstRow();grid.startEditing(0,1);
	};
	this.removeTemp=function(){FOS_REMOVE(sm,store);};
	this.save=function(){grid.stopEditing();FOS_POST(store,'PTemplate',PTemplate,'TEMP_S');};	
	new Ext.KeyMap(Ext.getDoc(),{
		key:'nrsud',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_TEMP');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		var tb=grid.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.N:
		 			if(!tb.getComponent('TB_N').disabled) this.add();break;
		 		case Ext.EventObject.R:
		 			if(!tb.getComponent('TB_R').disabled) this.removeTemp();break;
		 		case Ext.EventObject.S:
		 			if(!tb.getComponent('TB_S').disabled) this.save();break;
		 		case Ext.EventObject.D:
		 			if(!tb.getComponent('TB_D').disabled) this.download();break;
		 		case Ext.EventObject.U:
		 			if(!tb.getComponent('TB_U').disabled) this.upload();break;
				}
		 	}
		},stopEvent:true,scope:this});
    var grid = new  Ext.grid.EditorGridPanel({id:'G_TEMP',iconCls:'gen',title:C_TEMP_MGT,header:false,
	plugins:checkColumn,clicksToEdit:1,closable:true,store:this.store,sm:sm,cm:cm,
	tbar:[{itemId:'TB_N',text:C_ADD+'(N)',disabled:NR(M1_P+A_TEMP+F_M),iconCls:'add',scope:this,handler:this.add},'-',
        {itemId:'TB_R',text:C_REMOVE+'(R)',disabled:NR(M1_P+A_TEMP+F_R),iconCls:'remove',scope:this,handler:this.removeTemp},
        {itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_P+A_TEMP+F_M),iconCls:'save',scope:this,handler:this.save},
        {itemId:'TB_D',text:C_TEMP_DOWNLOAD+'(D)',disabled:NR(M1_P+A_TEMP+F_M),iconCls:'down',scope:this,handler:this.download},
        {itemId:'TB_U',text:C_TEMP_UPLOAD+'(U)',disabled:NR(M1_P+A_TEMP+F_M),iconCls:'up',scope:this,handler:this.upload}
        ]
    });
    return grid;
};

var showP_COCO = function() {    
	var store = GS('COCO_Q','PCompanyConfig',PCompanyConfig,'cocoId','DESC','cocoGroup','S_COCO','cocoId',false);
	store.load();
	var cm=new Ext.grid.ColumnModel({columns:[
     	new Ext.grid.RowNumberer(),
     	{header:C_COCO_CODE,dataIndex:'cocoCode',width:250},
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
		'color':new Ext.grid.GridEditor(new Ext.form.ColorField()),
		'port':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,store:getPOL_S(),displayField:'portNameEn',valueField:'portId',
			listeners:{scope:this,select:function(c,r,i){
        	var b =this.grid.getSelectionModel().getSelected();b.set('cocoDesc',r.get('portNameEn'));}}})),
		'char':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			tpl:charTpl,itemSelector:'div.list-item',listWidth:C_LW,store:getCHAR_S(),displayField:'charCode',valueField:'charId',
			listeners:{scope:this,select:function(c,r,i){
        	var b =this.grid.getSelectionModel().getSelected();
        	b.set('cocoDesc',r.get('charName'));}}})),
    	'grou':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			store:getGROU_S(),displayField:'grouName',valueField:'grouId',
			listeners:{scope:this,select:function(c,r,i){
        	var b =this.grid.getSelectionModel().getSelected();b.set('cocoDesc',r.get('grouName'));}}})),
    	'fdoc':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			store:getDOTY_S(),displayField:'dotyName',valueField:'dotyId',
			listeners:{scope:this,select:function(c,r,i){
        	var b =this.grid.getSelectionModel().getSelected();b.set('cocoDesc',r.get('dotyName'));}}})),
        'dateT':new Ext.grid.GridEditor(new Ext.form.ComboBox({typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,
			store:new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1','系统日期'],['2','开航日期'],['3','委托日期']]}),displayField:'NAME',valueField:'CODE',
			listeners:{scope:this,select:function(c,r,i){
        		var b =sm.getSelected();
        		b.set('cocoDesc',r.get('NAME'));
        	}}}))
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
			else if(rec.get('cocoValueType')==10) 
				return this.editors['port'];
			else if(rec.get('cocoValueType')==11) 
				return this.editors['char'];
			else if(rec.get('cocoValueType')==12) 
				return this.editors['grou'];
			else if(rec.get('cocoValueType')==13) 
				return this.editors['fdoc'];
			else if(rec.get('cocoValueType')==14) 
				return this.editors['dateT'];
			else
				return this.editors['text'];
		}
		return Ext.grid.ColumnModel.prototype.getCellEditor.call(this, colIndex, rowIndex);
	},defaults:{sortable:true,width:100}});
    var sm=new Ext.grid.RowSelectionModel({singleSelect:true});  
	this.save=function(){FOS_POST(store,'PCompanyConfig',PCompanyConfig,'COCO_S');};
	new Ext.KeyMap(Ext.getDoc(),{
		key:'s',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('G_COCO');
		 	if(tc&&tc==T_MAIN.getActiveTab()){
		 		var tb=grid.getTopToolbar();
		 		switch(k) {
		 		case Ext.EventObject.S:
		 			if(!tb.getComponent('TB_S').disabled) this.save();break;
				}
		 	}
		},stopEvent:true,scope:this});
    this.grid = new  Ext.grid.EditorGridPanel({
    id:'G_COCO',iconCls:'gen',title:C_COCO,header:false,clicksToEdit:2,closable:true,
    store: store,sm:sm,cm:cm,view:new Ext.grid.GroupingView(groupViewCfg),
    tbar:[{itemId:'TB_S',text:C_SAVE+'(S)',disabled:NR(M1_P+A_COCO+F_M),iconCls:'save',handler:this.save}]}); 
    return this.grid;
};

Fos.MesuWin = function(T) {
	this.mesuSubscriberId='';
	this.mesuSubscriberName='';
	this.mesuSubscriberEmail='';
	this.mesuMailFlag=new Ext.form.Checkbox({fieldLabel:C_MSG_EMAIL,name:'mesuMailFlag',checked:true,anchor:'90%'});
	this.mesuImFlag=new Ext.form.Checkbox({fieldLabel:C_MSG_INNER,name:'mesuImFlag',checked:false,anchor:'90%'});
	var sub=[];
	var userComb=new Ext.form.ComboBox({fieldLabel:C_MESU_TYPE_I,name:'mesuSubscriberId',store:getUSER_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
			listeners:{scope:this,select:function(c,r,i){
				this.mesuSubscriberId=r.get('userId');
				this.mesuSubscriberName=r.get('userName');
				this.mesuSubscriberEmail=r.get('userEmail');
			}}});
	var custComb=new Ext.form.ComboBox({fieldLabel:C_CUSTOMER,name:'custId',store:getCS(),
		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
      	listeners:{scope:this,select:function(c,r,i){
			this.mesuSubscriberId=r.get('custId');
			this.mesuSubscriberName=r.get('custNameCn');this.mesuSubscriberEmail=r.get('custEmail');
		},				
		keydown:{fn:function(f,e){LC(f,e,'');},buffer:BF}}});
	var roleComb=new Ext.form.ComboBox({fieldLabel:C_MESU_TYPE_S,name:'mesuSubscriberId',store:ROLE_T_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,select:function(c,r,i){
			this.mesuSubscriberId=r.get('CODE');
			this.mesuSubscriberName=r.get('NAME');
		}}});
	if(T==1) sub=[userComb,this.mesuMailFlag,this.mesuImFlag];
	else if(T==2) sub=[custComb,this.mesuMailFlag,this.mesuImFlag];
	else sub=[roleComb,this.mesuMailFlag,this.mesuImFlag];
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:sub});
	Fos.MesuWin.superclass.constructor.call(this, {title:C_MESU_ADD,modal:true,width:300,
        height:150,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.MesuWin,Ext.Window);

Fos.MetoTab = function(p){
	this.sel =GSEL;
	this.reload = false;
	var store = GS('METO_Q','PMessageTopic',PMessageTopic,'metoId','DESC','','S_METO','',false);
    store.load();
    var subStore = GS('MESU_Q','PMessageSubscribe',PMessageSubscribe,'mesuId','DESC','','','',false); 
    subStore.load();
	this.save = function(){
		var xml='';
		var a = store.getModifiedRecords();
		if(a.length) xml = ATX(a,'PMessageTopic',PMessageTopic);
		var cc=[];
		var ca =subStore.getRange();
		for(var i=0;i<ca.length;i++){
			if(ca[i].dirty) cc[cc.length]=ca[i];
		}
		if(cc.length>0){var x = ATX(cc,'PMessageSubscribe',PMessageSubscribe);xml=xml+x;};		
		if(xml!=''){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'METO_S'},
			success: function(r){				
				var a = XTRA(r.responseXML,'PMessageTopic',PMessageTopic);FOSU(store,a,PMessageTopic);
				var b = XTRA(r.responseXML,'PMessageSubscribe',PMessageSubscribe);FOSU(subStore,b,PMessageSubscribe);
				XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	var re = {scope:this,
		rowselect:function(sm,row,r){
			var t=Ext.getCmp('MSG_TEMP');
			t.setValue(r.get('metoTemplate'));
			if(this.sel!=r.get('metoId')){
				this.sel=r.get('metoId');				
				var s = grid2.getStore();s.removeAll();
				var a = subStore.getRange();
				for(var i=0;i<a.length;i++){if(a[i].get('metoId')==this.sel) s.add(a[i]);}
			}
		},
		rowdeselect:function(sm,row,r){
			var t=Ext.getCmp('MSG_TEMP');
			r.set('metoTemplate',t.getValue());
		}
	};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,listeners:re});
	var active =ACTIVE();
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_NAME,dataIndex:'metoName',width:120,editor:new Ext.form.TextField()},
		{header:C_DESC,dataIndex:'metoDesc',width:80,editor:new Ext.form.TextField()},
		active],defaults:{sortable:true,width:100}});
	var grid = new Ext.grid.EditorGridPanel({
		id:'G_METO',plugins:[active],clicksToEdit:1,border:true,store:store,sm:sm,cm:cm});	    
	var ss = GS('MESU_Q','PMessageSubscribe',PMessageSubscribe,'mesuId','DESC','','','',false);
    var mail=CHKCLM(C_MSG_EMAIL,'mesuMailFlag',100);
	var im=CHKCLM(C_MSG_INNER,'mesuImFlag',100);
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
		{header:C_MESU_TYPE,dataIndex:'mesuSubscriberType',renderer:getMESU_T},
		{header:C_MESU_NAME,dataIndex:'mesuSubscriberName'},
		{header:C_MESU_EMAIL,dataIndex:'mesuSubscriberEmail',editor:new Ext.form.TextField()},
		mail,im],defaults:{sortable:true,width:80}});
	var grid2 = new Ext.grid.EditorGridPanel({plugins:[mail,im],
		id:'G_MESU',clicksToEdit:1,border:true,store:ss,sm:sm2,cm:cm2});
	var showSub=function(t){
		var p = sm.getSelected();
		if(p){										
			var w = new Fos.MesuWin(t);
			w.addButton({text:C_OK,handler:function(){
				var mesuSubscriberId = w.mesuSubscriberId;
				var mesuSubscriberName = w.mesuSubscriberName;
				var mesuSubscriberEmail = w.mesuSubscriberEmail;
				var mesuMailFlag=w.mesuMailFlag.getValue()?1:0;
				var mesuImFlag=w.mesuImFlag.getValue()?1:0;
				var rid=GGUID();
				var e = new PMessageSubscribe({id:rid,mesuId:rid,metoId:p.get('metoId'),
					mesuSubscriberType:t,mesuSubscriberName:mesuSubscriberName,
					mesuSubscriberId:mesuSubscriberId,mesuSubscriberEmail:mesuSubscriberEmail,
					mesuMailFlag:mesuMailFlag,mesuImFlag:mesuImFlag,mesuSmFlag:0});
				subStore.add(e);e.set('rowAction','N');
				grid2.getStore().add(e);
				w.close();
			}},this);
			w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
			w.show();
		}
		else XMG.alert(SYS,C_SELECT_METO);
	};
	
	Fos.MetoTab.superclass.constructor.call(this,{id:'T_METO',title:C_MSG_TOPIC,iconCls:'gen',header:false,deferredRender:false,
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:80,border:false,width:800,layout:'border',
	items: [{title:C_MSG_TOPIC_LIST,region:'center',width:200,minSize:200,maxSize:600,layout:'fit',items:[grid]},
		{xtype:'tabpanel',title:C_MSG_TEMP,region:'east',activeTab:0,split:true,width:600,minSize:200,maxSize:600,items:[
			{layout:'fit',title:C_MESU_LIST,items:[grid2],
				tbar:[
				{text:C_ADD,iconCls:'add',scope:this,menu: {items: [
                      {text:C_MESU_TYPE_I,iconCls:'user',disabled:false,scope:this,handler:function(){
                    	  showSub(1);
    				}},
                      {text:C_MESU_TYPE_E,iconCls:'user',disabled:false,scope:this,handler:function(){
    					showSub(2);
    				}},
                      {text:C_MESU_TYPE_S,iconCls:'user',disabled:false,scope:this,handler:function(){
    					showSub(3);
    				}}]}},
				{text:C_REMOVE,disabled:false,iconCls:'remove',scope:this,handler:function(){
    					var r = grid2.getSelectionModel().getSelections();
    					if(r){
    						for(var i=0;i<r.length;i++){
    							r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
    							grid2.getStore().remove(r[i]);
    						}
    					}
				}}]
			},
			{layout:'fit',title:C_MSG_TEMP,items:[{id:'MSG_TEMP',xtype:'htmleditor',anchor:'95%'}]}
		]}],
	tbar:[{text:C_SAVE,disabled:false,iconCls:'save',scope:this,handler:this.save}]});
};
Ext.extend(Fos.MetoTab, Ext.Panel);

Fos.TaskWin = function(p) {	
	var store = GS('TASK_Q','FTask',FTask,'tatyOrder','ASC','','','',true);
	store.load({params:{consId:p.get('consMasterId')},scope:this});
	var ad=new Ext.form.DateField({value:p.get('consEta'),format:DATEF,width:120,disabled:false});
	var sd=new Ext.form.DateField({value:p.get('consSailDate'),format:DATEF,width:120,disabled:false});
	var saveT=function(r){
		r.set('rowAction','M');
		var x=RTX(r,'FTask',FTask);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TASK_S'},
			success: function(res){
				var e = XTR(res.responseXML,'FTask',FTask);
				var fields = FTask.prototype.fields;
				for(var k = 0;k < fields.length;k++){
					var f = fields.items[k];
					var fn=f.name;
					r.set(fn,e.get(fn));
				}},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(x)
		});
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var c1={header:C_TASK_NAME,width:200,dataIndex:"tatyName"};
	var c2={header:C_TASK_DATE_TYPE,dataIndex: 'taskEstimatedDate',width:120,renderer:formatDate};
	var c3={header:C_TASK_FINISHED_DATE,dataIndex: 'taskFinishedDate',width:120,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var ff=CHKCLM(C_FINISHED,'taskFinishedFlag',60);
	ff.on('click',function(c,e,r){
		r.set('taskFinishedDate',r.get('taskFinishedFlag')==1?(new Date()):'');
		saveT(r);
	},this);
	var cm=new Ext.grid.ColumnModel({columns:[sm,c1,c2,ff,c3],defaults:{sortable:true,width:100}});
	this.save=function(){
		p.beginEdit();
		p.set('consEta',ad.getValue());
		p.set('consSailDate',sd.getValue());
		p.endEdit();
		var x = RTX(p,'FConsign',FConsign);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
			success: function(res){
				var c = XTR(res.responseXML,'FConsign',FConsign);
				p.beginEdit();				
				p.set('version',c.get('version'));	
				p.endEdit();
				store.reload({params:{consId:p.get('consMasterId')},scope:this});
				XMG.alert(SYS,M_S);},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(x)
		});
	};	
	this.saveTask=function(e){saveT(e.record);};
	var gv=new Ext.grid.GridView({
		getRowClass: function(record, index) {			   
            if (record.get('taskFinishedFlag')) return 'green-font-row';
            else if (record.get('taskFinishedFlag')==0&&getElapsed(record.get('taskEstimatedDate'))>=0) return 'red-font-row';
            else return '';
        }});
	var grid=new Ext.grid.EditorGridPanel({id:'G_TASK',	border:true,height:400,autoScroll:true,clicksToEdit:1,plugins:[ff],
	    stripeRows:true,store:store,sm:sm,cm:cm, view:gv,
	    listeners:{scope:this,afteredit:this.saveTask},
	    tbar:[{xtype:'tbtext',text:C_ETA_V},ad,'-',
			{xtype:'tbtext',text:C_SAIL_DATE},sd,'-',
			{text:C_SAVE,iconCls:'save',disabled:false,scope:this,handler:this.save},'-'
			]
		});	
	Fos.TaskWin.superclass.constructor.call(this,{iconCls:'task',title:C_TASK_LIST+'-'+p.get('consMasterNo'),modal:true,width:600,
       height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:grid}); 
};
Ext.extend(Fos.TaskWin, Ext.Window);

Fos.TaskPanel = function(p) {	
	var store = GS('TASK_Q','FTask',FTask,'tatyOrder','ASC','','','',true);
	store.load({params:{consId:p.get('consId')},scope:this});
	var ad=new Ext.form.DateField({value:p.get('consEta'),format:DATEF,width:120,disabled:false});
	var sd=new Ext.form.DateField({value:p.get('consSailDate'),format:DATEF,width:120,disabled:false});
	var saveT=function(r){
		r.set('rowAction','M');
		var x=RTX(r,'FTask',FTask);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TASK_S'},
			success: function(res){
				var e = XTR(res.responseXML,'FTask',FTask);
				var fields = FTask.prototype.fields;
				for(var k = 0;k < fields.length;k++){
					var f = fields.items[k];
					var fn=f.name;
					r.set(fn,e.get(fn));
				}},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(x)
		});
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var c1={header:C_TASK_NAME,width:200,dataIndex:"tatyName"};
	var c2={header:C_TASK_DATE_TYPE,dataIndex: 'taskEstimatedDate',width:120,renderer:formatDate};
	var c3={header:C_TASK_FINISHED_DATE,dataIndex: 'taskFinishedDate',width:120,renderer:formatDate,editor:new Ext.form.DateField({format:DATEF})};
	var ff=CHKCLM(C_FINISHED,'taskFinishedFlag',60);
	ff.on('click',function(c,e,r){
		r.set('taskFinishedDate',r.get('taskFinishedFlag')==1?(new Date()):'');
		r.set('rowAction','N');
		saveT(r);
	},this);
	var cm=new Ext.grid.ColumnModel({columns:[sm,c1,c2,ff,c3],defaults:{sortable:true,width:100}});
	this.save=function(){
		p.beginEdit();
		p.set('consEta',ad.getValue());
		p.set('consSailDate',sd.getValue());
		p.set('rowAction','M');
		p.endEdit();
		var x = RTX(p,'FConsign',FConsign);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
			success: function(res){
				var c = XTR(res.responseXML,'FConsign',FConsign);
				p.beginEdit();				
				p.set('version',c.get('version'));	
				p.endEdit();
				store.reload({params:{consId:p.get('consMasterId')},scope:this});
				XMG.alert(SYS,M_S);},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(x)
		});
	};	
	this.saveTask=function(e){saveT(e.record);};
	var gv=new Ext.grid.GridView({
		getRowClass: function(record, index) {			   
            if (record.get('taskFinishedFlag')) return 'green-font-row';
            else if (record.get('taskFinishedFlag')==0&&getElapsed(record.get('taskEstimatedDate'))>=0) return 'red-font-row';
            else return '';
        }});
	Fos.TaskPanel.superclass.constructor.call(this,{iconCls:'task',title:C_TASK_LIST,
		autoScroll:true,clicksToEdit:1,plugins:[ff],
	    stripeRows:true,store:store,sm:sm,cm:cm, view:gv,
	    listeners:{scope:this,afteredit:this.saveTask},
	    tbar:[{xtype:'tbtext',text:C_ETA_V},ad,'-',
			{xtype:'tbtext',text:C_SAIL_DATE},sd,'-',
			{text:C_SAVE,iconCls:'save',scope:this,handler:this.saveTask},'-'
			]
	}); 
};
Ext.extend(Fos.TaskPanel, Ext.grid.EditorGridPanel);

Fos.TatyGrid = function(t,bt,bc) {
	var store = GS('TATY_Q','PTaskType',PTaskType,'tatyId','ASC','','','',true);
	var ss=GS('TATY_Q','PTaskType',PTaskType,'tatyId','ASC','','','',true);
	store.load({params:{tatyBizType:bt,tatyBizClass:bc},callback:function(re,o,s){		
		var sa=store.getRange();
		var ra=[];
		for(var i=0;i<sa.length;i++){
			var rr=new PTaskType({});
			rr.set('tatyId',sa[i].get('tatyId'));
			rr.set('tatyName',sa[i].get('tatyName'));
			ra[i]=rr;			
		}
		ss.add(ra);
		var r=new PTaskType({tatyId:'',tatyName:'   '});
		ss.insert(0,r);
	}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var c0={header:C_TASK_ORDER,width:50,dataIndex:"tatyOrder",editor:new Ext.form.NumberField()};
	var c1={header:C_TASK_NAME,width:100,dataIndex:"tatyName",editor:new Ext.form.TextField()};
	var c2={header:C_TASK_DATE_TYPE,dataIndex: 'tatyDateType',renderer:getDATY,editor:new Ext.form.ComboBox({xtype:'combo',store:DATY_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true})};
	var c3={header:C_TASK_DATE_ESTIMATED,dataIndex:"tatyDateEstimated",align:'right',editor:new Ext.form.NumberField()};
	var c4={header:C_TASK_D,dataIndex: 'tatyDName',editor:new Ext.form.ComboBox({xtype:'combo',store:ss,displayField:'tatyName',valueField:'tatyName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
		listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();
	            	if(b){b.set('tatyDId',r.get('tatyId'));}}}
				})};
	var ac=ACTIVE();
	var cm=new Ext.grid.ColumnModel({columns:[sm,c0,c1,c2,c3,c4,ac],defaults:{sortable:true,width:60}});
	this.add=function(){
		var id=GGUID();
		var e = new PTaskType({id:id,tatyId:id,tatyDateType:'',tatyDateEstimated:'',tatyOrder:'',
    		tatyName:'',tatyDesc:'',tatyAction:'CONS_S',tatyClass:'',tatyProperty:'',tatyDefaultOwner:'',
    		tatyBizType:bt,tatyBizClass:bc,active:'1',version:'0'});
    	this.stopEditing();store.insert(0,e);e.set('rowAction','N');sm.selectFirstRow();this.startEditing(0, 1);
	};
	this.removeTaty=function(){
		var r = sm.getSelections();
		if(r){for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
		store.remove(r[i]);}}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length>0){			
			var x = ATX(a,'PTaskType',PTaskType);
			if(x!=''){
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TATY_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'PTaskType',PTaskType);FOSU(store,a,PTaskType);
						XMG.alert(SYS,M_S);},
					failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
					xmlData:FOSX(x)
				});
			}
		}
		else XMG.alert(SYS,M_NC);
	};	
	Fos.TatyGrid.superclass.constructor.call(this, {id:'G_TATY'+t,title:t,iconCls:'class',
		border:true,autoScroll:true,clicksToEdit:1,plugins:[ac],
	    stripeRows:true,store:store,sm:sm,cm:cm,
	    tbar:[{text:C_ADD,iconCls:'add',disabled:false,scope:this,handler:this.add}, '-', 
			{text:C_REMOVE,iconCls:'remove',disabled:false,scope:this,handler:this.removeTaty},'-',
			{text:C_SAVE,iconCls:'save',disabled:false,scope:this,handler:this.save},'-'
			]
		});
};
Ext.extend(Fos.TatyGrid, Ext.grid.EditorGridPanel);
Fos.TatyTab = function(){	
	var gCE=new Fos.TatyGrid(C_EXP_CONT,BT_C,BC_E);
	var gCI=new Fos.TatyGrid(C_IMP_CONT,BT_C,BC_I);
	var gBE=new Fos.TatyGrid(C_EXP_BULK,BT_B,BC_E);
	var gBI=new Fos.TatyGrid(C_IMP_BULK,BT_B,BC_I);
	
	var gAE=new Fos.TatyGrid(C_EXP_AIR,BT_A,BC_E);
	var gAI=new Fos.TatyGrid(C_IMP_AIR,BT_A,BC_I);
	var gGE=new Fos.TatyGrid(C_EXP_CUDE,BT_G,BC_E);
	var gGI=new Fos.TatyGrid(C_IMP_CUDE,BT_G,BC_I);
	var gIE=new Fos.TatyGrid(C_EXP_INSP,BT_I,BC_E);
	var gII=new Fos.TatyGrid(C_IMP_INSP,BT_I,BC_I);
	
	Fos.TatyTab.superclass.constructor.call(this,{id:'T_TATY',
	title:C_TASK_CFG,iconCls:'class',deferredRender:false,closable:true,activeTab:0,autoScroll:true,
	items:[gBE,gBI,gCE,gCI,gAE,gAI,gGE,gGI,gIE,gII],
	listeners:{scope:this,tabchange:function(m,a){a.doLayout();}}
	});
};
Ext.extend(Fos.TatyTab,Ext.TabPanel);

Fos.TaskList = function(cn,store) {	
	var c1={header:C_TASK_NAME,width:200,dataIndex:"tatyName"};
	var c2={header:C_TASK_DATE_TYPE,dataIndex: 'taskEstimatedDate',width:200,renderer:formatDate};
	var c3={header:C_TASK_FINISHED_DATE,dataIndex: 'taskFinishedDate',width:200,renderer:formatDate};
	var ff=CHKCLM(C_FINISHED,'taskFinishedFlag',60);	
	var list = new Ext.ListView({
    	store: store,
    	emptyText: 'No images to display',
    	reserveScrollOffset: true,
    	columns: [c1,c2,c3,ff]
	});
	Fos.TaskList.superclass.constructor.call(this,{iconCls:'task',title:cn,width:425,
    	height:250,collapsible:true,layout:'fit',items: listView});
};
Ext.extend(Fos.TaskList, Ext.Panel);

var loadTask=function(bc,bt){
	var store = GS('TATY_Q','PTaskType',PTaskType,'tatyId','ASC','','','',true);
	store.load({params:{tatyBizType:bt,tatyBizClass:bc},callback:function(re,o,s){		
		var t=new Fos.TaskTab(bc,bt,store);
		var c='G_TASK_'+bc+'_'+bt;
		T_MAIN.setActiveTab(T_MAIN.getComponent(c)?T_MAIN.getComponent(c):T_MAIN.add(t));
	}});
};
Fos.TaskTab = function(bc,bt) {	
	this.page=1;
	this.totalPage=1;
	
	this.moveFirst=function(){
		this.page=1;
		this.reLoad();
	};
	this.moveNext=function(){
		this.page=this.page+1;
		this.reLoad();
	};
	this.movePrev=function(){
		this.page=this.page-1;
		this.reLoad();
	};
	this.moveLast=function(){
		this.page=this.totalPage;
		this.reLoad();
	};
	
	this.reLoad=function(){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
			params:{A:'CONS_T_X',consMasterFlag:1,mt:'XML',dir:'DESC',consBizClass:bc,consBizType:bt,voyaSailedFlag:0,
				start:((this.page-1)*10),limit:10,sort:'consNo'},
				success: function(res){				
					this.totalPage=Math.ceil(XRC(res.responseXML)/10);					
					var a = XTRA(res.responseXML,'FConsign',FConsign);
					var ta = XTRA(res.responseXML,'FTask',FTask);
					for(var i=0;i<ta.length;i++){
						var cid=ta[i].get('consId');
						for(var j=0;j<a.length;j++){
							if(cid==a[j].get('consId')){
								var d;
								var ed=ta[i].get('taskEstimatedDate');
								ed=ed?ed.format('Y-m-d'):'';							
								var fd=ta[i].get('taskFinishedDate');
								fd=fd?fd.format('Y-m-d'):'';
								var ff=ta[i].get('taskFinishedFlag');
								if(ff==1){
									d=ta[i].get('taskFinishedDate');
									d=d?d.format('Y-m-d'):'';
									d=GL(d);
								}
								else{
									d=ta[i].get('taskEstimatedDate');
									d=d?d.format('Y-m-d'):'';
									if(getElapsed(ta[i].get('taskEstimatedDate'))>=0)
										d=HL(d);
								}
								a[j].set('TATY_'+ta[i].get('tatyId'),d);
								break;
							}
						}
					}
					store.removeAll();
					store.add(a);
					var tb=this.getBottomToolbar();
					if(tb.getComponent('TB_F')) tb.getComponent('TB_F').setDisabled(this.page==1);
					if(tb.getComponent('TB_P')) tb.getComponent('TB_P').setDisabled(this.page==1);
					if(tb.getComponent('TB_N')) tb.getComponent('TB_N').setDisabled(this.page==this.totalPage);
					if(tb.getComponent('TB_L')) tb.getComponent('TB_L').setDisabled(this.page==this.totalPage);
					tb.getComponent('TB_M').setText('Page '+this.page+' of '+this.totalPage);
				},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);}
		});
	};
	
	var ts=getTATY_S();
	var store = new Ext.data.GroupingStore({
   		reader:new Ext.data.ArrayReader({idIndex: 0},FConsign),
   		sortInfo:{field:'consNo', direction:'DESC'},
   		groupField:'voyaName'});
	var ca=ts.getRange();
	var cols=[];
	cols[0]={header:C_VESS,width:100,dataIndex:"vessName"};
    cols[1]={header:C_VOYA,width:80,dataIndex:"voyaName"};
    cols[2]={header:C_CONS_NO,width:120,dataIndex:"consNo"};
    cols[3]={header:bt==BT_B?C_CHARTER:C_BOOKER,width:200,dataIndex:"custName"};
    for(var i=0;i<ca.length;i++){
    	cols[cols.length]={header:ca[i].get('tatyName'),width:100,dataIndex:'TATY_'+ca[i].get('tatyId')};
    }
    var cm=new Ext.grid.ColumnModel(cols);
    var sm=new Ext.grid.RowSelectionModel({singleSelect:true});
	Fos.TaskTab.superclass.constructor.call(this, {
    id:'TASK_B',iconCls:'task',store: store,title:C_TASK_LIST,
	sm:sm,cm:cm,stripeRows:true,closable:true,border:true,autoScroll:true,
	view:new Ext.grid.GroupingView(groupViewCfg),
	bbar:[{itemId:'TB_F',disabled:this.page==1,iconCls:'page-first',scope:this,handler:this.moveFirst},'-',
        {itemId:'TB_P',disabled:this.page==1,iconCls:'page-prev',scope:this,handler:this.movePrev},'-',
        {itemId:'TB_M',text:'Page '+this.page+' of '+this.totalPage},'-',
        {itemId:'TB_N',disabled:this.page==this.totalPage,iconCls:'page-next',scope:this,handler:this.moveNext},'-',
        {itemId:'TB_L',disabled:this.page==this.totalPage,iconCls:'page-last',scope:this,handler:this.moveLast},'-']
    });
	this.reLoad();
	
};
Ext.extend(Fos.TaskTab, Ext.grid.GridPanel);
