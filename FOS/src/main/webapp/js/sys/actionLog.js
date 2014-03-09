//操作日志
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