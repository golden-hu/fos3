//发票号码管理
Fos.InvoNoGrid = function() {
	var store = GS('INNO_Q','SInvoiceNo',SInvoiceNo,'innoId','DESC','','S_INNO','id',false);
	store.load();
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	new Ext.grid.RowNumberer(),
	{header:C_INNO_PREFIX,dataIndex:'innoPrefix',editor:new Ext.form.TextField()},
	{header:C_INNO_START,dataIndex:'innoStartNo',editor:new Ext.form.NumberField()},
	{header:C_INNO_END,dataIndex:'innoEndNo',editor:new Ext.form.NumberField()},
	{header:C_INNO_NEXT,dataIndex:'innoNextNo',editor:new Ext.form.NumberField()},
	{header:C_ACTIVE,dataIndex:'active',renderer:function(v){return v==1?'Y':'N';}},
	{header:C_ACTIVE_DATE,dataIndex:'innoStartDate',renderer:formatDate,width:80}],defaults:{sortable:true,width:80}});
	this.active=function(){
		var b =sm.getSelected();
		if(b){
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'INNO_U',innoId:b.get('innoId')},
			success: function(r){store.reload();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});			
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	Fos.InvoNoGrid.superclass.constructor.call(this,{
	id:'G_INNO',title:C_INNO_MGT,closable:true,
		border:false,height:200,autoScroll:true,sm:sm,cm:cm,store:store,sortInfo:{field:'innoId',direction:'DESC'},
		tbar:[{text:C_ADD,disabled:NR(M1_S+S_INNO+F_M),iconCls:'add',scope:this,handler:function(){				
				var r = new SInvoiceNo({id:GGUID(),innoId:0,innoPrefix:'',innoStartNo:'',innoEndNo:'',innoNextNo:'',
				innoStartDate:'',active:'0',version:'0'});
				store.insert(0,r);r.set('rowAction','N');sm.selectFirstRow();this.startEditing(0,1);
			}},'-',
			{text:C_REMOVE,disabled:NR(M1_S+S_INNO+F_R),iconCls:'remove',scope:this,handler:function(){FOS_REMOVE(sm,store);}},'-',
			{text:C_SAVE,disabled:NR(M1_S+S_INNO+F_M),iconCls:'save',handler:function(){FOS_POST(store,'SInvoiceNo',SInvoiceNo,'INNO_S');}},'-',
			{text:C_ACTIVE,disabled:NR(M1_S+S_INNO+F_A),iconCls:'check',scope:this,handler:this.active}
		]
	});
};
Ext.extend(Fos.InvoNoGrid, Ext.grid.EditorGridPanel);

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

//客户余额
Fos.BalaGrid = function() {
	var store = GS('BALA_Q','SBalance',SBalance,'balaId','DESC','','','',false);
	store.load({params:{start:0,limit:C_PS}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var cm=new Ext.grid.ColumnModel({columns:[new Ext.grid.RowNumberer(),sm,
	{header:C_CUST_NAME,dataIndex:'custName',width:200},
	{header:C_CUST_SNAME,dataIndex:'custSname',width:120},
	{header:C_CURR,dataIndex:'currCode',width:80},
	{header:C_BALANCE,dataIndex:'balaAmount',width:80,renderer:numRender},
	{header:C_REMARKS,dataIndex:'remarks',editor:new Ext.form.TextField(),width:80}
	],defaults:{sortable:true,width:100}});
	this.list=function(){
        var b = sm.getSelected();
        if(b){var frm = new Fos.BaliWin(b);frm.show();}
        else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	var rowCtxEvents = {rowdblclick: this.list};
	
	this.save=function(){
		var a = store.getModifiedRecords();		
		if(a.length){			
			var x = ATX(a,'SBalance',SBalance);
			if(x!=''){
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BALA_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'SBalance',SBalance);
						FOSU(store,a,SBalance);
						XMG.alert(SYS,M_S);
					},
					failure: function(res){
						XMG.alert(SYS,M_F+res.responseText);
					},
					xmlData:FOSX(x)
				});
			}
		}
		else 
			XMG.alert(SYS,M_NC);
	};	
	
	Fos.BalaGrid.superclass.constructor.call(this,{
	id:'G_BALA',title:C_CUST_BALANCE,closable:true,border:false,autoScroll:true,
	cm:cm,sm:sm,store:store,clicksToEdit:1,
	listeners:rowCtxEvents,tbar:[
	    {text:C_BALA_LIST,iconCls:'grid',scope:this,handler:this.list},
	    {text:C_SAVE,iconCls:'save',scope:this,handler:this.save}
	],
	bbar:PTB(store,C_PS)});
};
Ext.extend(Fos.BalaGrid, Ext.grid.EditorGridPanel);

//客户余额明细
Fos.BaliWin = function(b){
    var store = GS('VOUC_X','SVoucher',SVoucher,'voucDate','DESC','voucDate','S_VOUC','id',true);
    var a=[];
    a[0]={key:'voucFixAmount',value:0,op:NE};
    a[1]={key:'custId',value:b.get('custId'),op:EQ};
    a[2]={key:'currCode',value:b.get('currCode'),op:EQ};
    store.baseParams = {mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
    store.load({params:{start:0,limit:C_PS}}); 
    
    var cm=new Ext.grid.ColumnModel({columns:[
        new Ext.grid.RowNumberer(),
        {header:C_VOUC_NO,width:100,dataIndex:"voucNo"},
        {header:C_DATE,dataIndex:"voucDate",renderer:formatDate},
        {header:C_CHAR_TYPE,dataIndex:"voucType",renderer:function(v){return v=='R'?C_R:C_P;}},        
        {header:C_CURR,width:60,dataIndex:"currCode"},
        {header:C_FIX_AMOUNT,align:'right',renderer:numRender,dataIndex:"voucFixAmount"},
        {header:C_INVO_NO,dataIndex:"voucInvoiceNo"},
        {header:C_TAX_NO,dataIndex:"voucTaxInvoiceNo"},
        {header:C_REMARKS,dataIndex:"voucRemarks"}
        ],defaults:{sortable:true,width:80}});
    var g=new Ext.grid.GridPanel({store:store,autoScroll:true,cm:cm,stripeRows:true});
    Fos.BaliWin.superclass.constructor.call(this, {title:C_FIX_LIST,modal:true,width:600,
        height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'fit',items:g}); 
};
Ext.extend(Fos.BaliWin,Ext.Window);





