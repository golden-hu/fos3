//财务接口导出
Fos.ExhiWin = function() {
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',items:[
    	{fieldLabel:C_EXHI_TYPE,id:'exhiType',xtype:'combo',store:EXHI_T_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
    	{fieldLabel:C_START_DATE,id:'exhiCheckDateF',xtype:'datefield',format:DATEF,anchor:'90%'},
    	{fieldLabel:C_END_DATE,id:'exhiCheckDateT',xtype:'datefield',format:DATEF,anchor:'90%'}]
    });
    Fos.ExhiWin.superclass.constructor.call(this, {title:C_EXHI_BATCH,modal:true,width:300,
        height:150,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm});
};
Ext.extend(Fos.ExhiWin,Ext.Window);

Fos.ExhiGrid = function() {
	var store = GS('EXHI_Q','TExportHistory',TExportHistory,'exhiId','DESC','','','',true);
	store.load({params:{start:0,limit:C_PS}});
	var cm=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),
	{header:C_BATCH_NO,dataIndex:'exhiId',width:50},
	{header:C_EXHI_TYPE,dataIndex:'exhiType',width:100,renderer:getEXHI_T},
	{header:C_START_DATE,dataIndex:'exhiCheckDateF',width:80},
	{header:C_END_DATE,dataIndex:'exhiCheckDateT',width:80},
	{header:C_EXHI_FILE,dataIndex:'exhiFileName',width:200,renderer:exhiRender},
	{header:C_CREATE_TIME,dataIndex:'createTime',width:80}],defaults:{sortable:true,width:100}});
	this.add=function(){
		var w = new Fos.ExhiWin();
		w.addButton({text:C_OK,handler:function(){
			var exhiType = w.findById('exhiType').getValue();
			var exhiCheckDateF = w.findById('exhiCheckDateF').getValue().format(DATEF);
			var exhiCheckDateT = w.findById('exhiCheckDateT').getValue().format(DATEF);	
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXHI_E',
				exhiType:exhiType,exhiCheckDateF:exhiCheckDateF,exhiCheckDateT:exhiCheckDateT},
				success: function(r){XMG.alert(SYS,M_S);store.reload({params:{start:0,limit:C_PS}});},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
			});
			w.close();
		}},this);
		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
		w.show();
	};
	Fos.ExhiGrid.superclass.constructor.call(this,{
	id:'G_EXHI',title:C_EXHI_BATCH,closable:true,border:false,autoScroll:true,cm:cm,store:store,
	tbar:[{text:C_ADD,disabled:NR(M1_S+S_INNO+F_M),iconCls:'add',scope:this,handler:this.add}],
	bbar:PTB(store,C_PS)});
};
Ext.extend(Fos.ExhiGrid, Ext.grid.GridPanel);