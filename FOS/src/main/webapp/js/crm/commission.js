//销售指标
Fos.SalesQuotaGrid = function() {
	this.saquId=0;	
	var store = GS('SAQU_Q','CSalesQuota',CSalesQuota,'saquId','DESC','','','id',true);
	store.load({params:{start:0,limit:C_PS}});	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_SALES,dataIndex:'saquSalesName',width:100,
			editor:new Ext.form.ComboBox({displayField:'userLoginName',valueField:'userName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getSALE_S(),
            listeners:{scope:this,select:function(c,r,i){
            	var b =this.getSelectionModel().getSelected();b.set('saquSalesId',r.get('userId'));}}})},
	{header:C_YEAR,dataIndex:'saquYear',width:80,editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:YY_S})},
	{header:C_MONTY,dataIndex:'saquMonth',width:80,editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:MM_S})},
	{header:C_BASE_PROFIT,dataIndex:'saquBaseProfit',width:80,editor:new Ext.form.NumberField({decimalPrecision:2})},
	{header:C_COMMISION_RATE,dataIndex:'saquCommissionRate',width:80,editor:new Ext.form.NumberField({decimalPrecision:4})}	
	],defaults:{sortable:true,width:100}});
	var d=new Date();var y=d.format('Y');var m=d.format('m');
	this.add=function(){
		this.saquId=this.saquId-1;
		var t = new CSalesQuota({saquId:this.saquId,saquSalesId:'',saquSalesName:'',saquYear:y,saquMonth:m,
		saquBaseProfit:'',saquCommissionRate:'',version:'0'});
		store.insert(0,t);t.set('rowAction','N');sm.selectFirstRow();this.startEditing(0,1);
	};
	this.remove=function(){FOS_REMOVE(sm,store);};
	this.save=function(){FOS_POST(store,'CSalesQuota',CSalesQuota,'SAQU_S');};
	
	Fos.SalesQuotaGrid.superclass.constructor.call(this,{
	id:'G_SAQU',title:C_SALES_QUOTA,header:false,deferredRender:false,closable:true,
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:store,sortInfo:{field:'fdocId',direction:'DESC'},
		tbar:[
			{itemId:'TB_N',text:C_ADD,disabled:NR(M1_V+V_SAQU+F_M),iconCls:'add',scope:this,handler:this.add},'-',
			{itemId:'TB_R',text:C_REMOVE,disabled:NR(M1_V+V_SAQU+F_R),iconCls:'remove',scope:this,handler:this.remove},'-',
			{itemId:'TB_S',text:C_SAVE,disabled:NR(M1_V+V_SAQU+F_M),iconCls:'save',scope:this,handler:this.save},'->',
		new Ext.PagingToolbar({pageSize:C_PS,store:store})],
		bbar:PTB(store,C_PS)
    });
};
Ext.extend(Fos.SalesQuotaGrid, Ext.grid.EditorGridPanel);

Fos.SalesCommissionGrid = function() {
	var store = GS('SACO_Q','CSalesCommission',CSalesCommission,'sacoId','DESC','','','id',true);
	store.load({params:{start:0,limit:C_PS}});	
	var cs = GS('COMM_Q','CCommission',CCommission,'commId','DESC','','S_COMM','',false);
    cs.load();    
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_SALES,dataIndex:'sacoSalesName',width:100,
			editor:new Ext.form.ComboBox({displayField:'userLoginName',valueField:'userName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getSALE_S(),
            listeners:{scope:this,select:function(c,r,i){
            	var b =this.getSelectionModel().getSelected();b.set('sacoSalesId',r.get('userId'));}}})},	
	{header:C_COMMISSION,dataIndex:'commName',width:80,editor:new Ext.form.ComboBox({xtype:'combo',store:cs,displayField:'commName',valueField:'commName',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,
		listeners:{scope:this,select:function(c,r,i){
	            	var b=sm.getSelected();
	            	if(b){b.set('commId',r.get('commId'));}}}
				})}	
	],defaults:{sortable:true,width:100}});
	this.add=function(){
		var rid=GGUID();
		var t = new CSalesCommission({sacoId:rid,sacoSalesId:'',sacoSalesName:'',commId:'',version:'0'});
		store.insert(0,t);t.set('rowAction','N');sm.selectFirstRow();this.startEditing(0,1);
	};
	this.removeRecords=function(){FOS_REMOVE(sm,store);};
	this.save=function(){FOS_POST(store,'CSalesCommission',CSalesCommission,'SACO_S');};
	
	Fos.SalesCommissionGrid.superclass.constructor.call(this,{
	id:'G_SACO',title:C_SALES_COMMISSION,header:false,deferredRender:false,closable:true,
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:store,sortInfo:{field:'fdocId',direction:'DESC'},
		tbar:[
			{itemId:'TB_N',text:C_ADD,disabled:NR(M1_V+V_SAQU+F_M),iconCls:'add',scope:this,handler:this.add},'-',
			{itemId:'TB_R',text:C_REMOVE,disabled:NR(M1_V+V_SAQU+F_R),iconCls:'remove',scope:this,handler:this.removeRecords},'-',
			{itemId:'TB_S',text:C_SAVE,disabled:NR(M1_V+V_SAQU+F_M),iconCls:'save',scope:this,handler:this.save},'->',
		new Ext.PagingToolbar({pageSize:C_PS,store:store})],
		bbar:PTB(store,C_PS)
    });
};
Ext.extend(Fos.SalesCommissionGrid, Ext.grid.EditorGridPanel);

Fos.CommissionTab = function(p){
	this.sel =GSEL;
	this.reload = false;
	var store = GS('COMM_Q','CCommission',CCommission,'commId','DESC','','S_COMM','',false);
    store.load();
    var itemStore = GS('COIT_Q','CCommissionItem',CCommissionItem,'coitId','DESC','','','',false); 
    itemStore.load();	
	var re = {scope:this,
		rowselect:function(sm,row,r){
			if(this.sel!=r.get('commId')){
				this.sel=r.get('commId');				
				var s = grid2.getStore();s.removeAll();
				var a = itemStore.getRange();
				for(var i=0;i<a.length;i++){if(a[i].get('commId')==this.sel) s.add(a[i]);}
			}
		}
	};	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,listeners:re});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_NAME,dataIndex:'commName',width:250,editor:new Ext.form.TextField()}],defaults:{sortable:true}});
	var grid = new Ext.grid.EditorGridPanel({id:'G_COMM',clicksToEdit:1,border:true,store:store,sm:sm,cm:cm});	
    
	var ss = new Ext.data.Store({baseParams:{mt:'JSON'},
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'CCommissionItem'},CCommissionItem)
		});	 
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
		{header:C_COMMISSION_LOWER,dataIndex:'coitLower',editor:new Ext.form.NumberField()},
		{header:C_COMMISSION_LIMIT,dataIndex:'coitLimit',editor:new Ext.form.NumberField()},
		{header:C_COMMISSION_RATE,dataIndex:'coitRate',editor:new Ext.form.NumberField()}],defaults:{sortable:true,width:80}});
	var grid2 = new Ext.grid.EditorGridPanel({id:'G_COIT',clicksToEdit:1,border:true,store:ss,sm:sm2,cm:cm2});	
	this.save = function(){
		var xml='';
		var a = store.getModifiedRecords();
		if(a.length) xml = ATX(a,'CCommission',CCommission);
		var cc=[];
		var ca =itemStore.getRange();
		for(var i=0;i<ca.length;i++){
			if(ca[i].dirty) cc[cc.length]=ca[i];
		}
		if(cc.length>0){var x = ATX(cc,'CCommissionItem',CCommissionItem);xml=xml+x;};		
		if(xml!=''){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'COMM_S'},
			success: function(r){				
				var a = XTRA(r.responseXML,'CCommission',CCommission);FOSU(store,a,CCommission);
				var b = XTRA(r.responseXML,'CCommissionItem',CCommissionItem);
				FOSU(itemStore,b,CCommissionItem);FOSU(ss,b,CCommissionItem);
				XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
		else XMG.alert(SYS,M_NC);
	};
	this.addComm=function(){
		var rid=GGUID();
		var r = new CCommission({id:rid,commId:rid,commName:'',active:'1',version:'0',rowAction:'N'});
    	grid.stopEditing();store.insert(0,r);grid.getSelectionModel().selectFirstRow();grid.startEditing(0,1);
	};
	this.removeComm=function(){
		var r = grid.getSelectionModel().getSelected();
		if(r){
			r.set('rowAction',r.get('rowAction')=='N'?'D':'R');
				grid.getStore().remove(r);				
				var a=grid2.getStore().getRange();
				for(var i=0;i<a.length;i++){
					a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
					grid2.getStore().remove(a[i]);
				}
			}
	};
	this.addItem=function(){		
		var rid=GGUID();
		var r = new CCommissionItem({id:rid,coitId:rid,commId:this.sel,active:'1',version:'0',rowAction:'N'});
    	grid2.stopEditing();
    	itemStore.add(r);ss.insert(0,r);
    	grid2.getSelectionModel().selectFirstRow();
    	grid2.startEditing(0,1);
	};
	this.removeItem=function(){
		var r = grid2.getSelectionModel().getSelections();
		if(r){
			for(var i=0;i<r.length;i++){
				r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
				grid2.getStore().remove(r[i]);
			}
		}
	};
	Fos.CommissionTab.superclass.constructor.call(this,{id:'T_COMM',title:C_COMMISSION,iconCls:'gen',header:false,deferredRender:false,
	autoScroll:true,labelAlign:'right',closable:true,labelWidth:80,border:false,width:800,layout:'border',
	items: [{title:C_COMMISSION_LIST,region:'center',width:400,minSize:200,maxSize:600,layout:'fit',items:[grid]},
		{title:C_COMMISSION_ITEM,region:'east',split:true,width:400,minSize:200,maxSize:600,layout:'fit',items:[grid2],
				tbar:[
				{text:C_ADD,iconCls:'add',scope:this,scope:this,handler:this.addItem},
				{text:C_REMOVE,disabled:false,iconCls:'remove',scope:this,handler:this.removeItem}]
		}],
	tbar:[		
		{text:C_ADD,iconCls:'add',scope:this,scope:this,handler:this.addComm},
		{text:C_REMOVE,disabled:false,iconCls:'remove',scope:this,handler:this.removeComm},
		{text:C_SAVE,disabled:false,iconCls:'save',scope:this,handler:this.save}
		]});
};
Ext.extend(Fos.CommissionTab, Ext.Panel);
