//邮件订阅
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


Fos.MailWin = function(m,t,mt) {
	var form = new Ext.form.FormPanel({labelWidth:60,id:'F_MAIL',bodyStyle:'padding:5px 5px 0',frame:true,width:800,height:400,
		items: [{layout:'column',layoutConfig:{columns:1},deferredRender:false,items:[
			{columnWidth:1,layout:'form',border:false,items:[
				{fieldLabel:'To',id:'to',value:m.get('messTo'),xtype:'textfield',allowBlank:false,anchor:'90%'},
	            {fieldLabel:'Cc',id:'cc',value:m.get('messCc'),xtype:'textfield',anchor:'90%'},
	            {fieldLabel:'Subject',id:'sub',value:m.get('messSubject'),xtype:'textfield',anchor:'90%'},
	            {fieldLabel:C_TEMP_FILE,disabled:t=='',id:'tempId',store:getTemplates(t),xtype:'combo',displayField:'tempName',valueField:'tempId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
	            	listeners:{scope:this,
	        		render:function(cbx){
	        			if(cbx.store.getCount()){
	        				var r=cbx.store.getAt(0);
	        				 cbx.setValue(r.get('tempId'));
	        			}
	            }}},
	            {layout:'fit',items:[{id:'body',value:m.get('messBody'),xtype:'htmleditor',anchor:'90%'}]}]
	         }]}]
    });
    Fos.MailWin.superclass.constructor.call(this, {title:mt==1?C_SEND_MAIL:C_SEND_FAX,modal:true,plain:true,layout:'fit',width:800,height:400,
    border:true,bodyStyle:'padding:0px;',buttonAlign:'right',items:form}); 
};
Ext.extend(Fos.MailWin, Ext.Window);