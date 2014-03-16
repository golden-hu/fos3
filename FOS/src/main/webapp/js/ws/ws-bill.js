//网上对账
BillTab = function(){	
	var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=WS_BILL_X',
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'SBill'}, SBill),remoteSort:true,
    	sortInfo:{field:'billId', direction:'DESC'}});
	
    store.load({params:{custId:CCUST,start:0,limit:20}});
    
    var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true}); 
	var cm = new Ext.grid.ColumnModel([sm,
    	{header:C_STATUS,dataIndex:"billStatus",renderer:getBIST},
		{header:C_BILL_NO,width:100,dataIndex:"billNo"},
		{header:C_AMOUNT,align:'right',renderer:numRender,dataIndex:"billAmount"},	
		{header:C_CURR,width:40,dataIndex:"currCode"},
		{header:C_BILL_DATE,dataIndex:"billDate",renderer:formatDate},
		{header:C_REMARKS,dataIndex:"billRemarks"}]);
	cm.defaultSortable=true;
	
	var re={rowdblclick:function(g,r,e){
		var p = sm.getSelected();
    	if(p){var win = new BillWin(p);win.show();}
    	else alert(M_NO_DATA_SELECTED);
	}};	
	
	var g=new Ext.grid.GridPanel({store: store,
		iconCls:'grid',
		height:395,
		header:false,
		closable:true,
		sm:sm,
		cm:cm,
		loadMask:true,
    	listeners:re,
    	bbar:new Ext.PagingToolbar({pageSize:20,store:store,displayInfo:true,displayMsg:'{0} - {1} of {2}',emptyMsg:'没有记录'})
    	});
	
    this.search=function(){
   		if(CCUST=='null') return;   		
   		var a=[];
   		a[a.length]={key:'custId',value:CCUST,op:EQ};
    	var billNo=this.find('name','billNo')[0].getValue();
    	if(billNo) a[a.length]={key:'billNo',value:billNo,op:LI};
    	var billStatus=this.find('name','billStatus')[0].getValue();
    	if(billStatus) a[a.length]={key:'billStatus',value:blNo,op:EQ};    	
    	
    	var billDate=this.find('name','billDate')[0].getValue();
   		var billDate2=this.find('name','billDate2')[0].getValue();
   		if(billDate && billDate2){
   			a[a.length]={key:'billDate',value:billDate.format(DATEF),op:5};
   			a[a.length]={key:'billDate',value:billDate2.format(DATEF),op:3};
   		}
   		else if(billDate) a[a.length]={key:'billDate',value:billDate,op:op};
   		
   		store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) alert(M_NOT_FOUND);}});
	};
	
	this.clear=function(){
		this.find('name','sf')[0].getForm().reset();
	};
	
	BillTab.superclass.constructor.call(this, {    
    id:'T_BILL',
    title:'网上对账',
    iconCls:'stats',
    deferredRender:false,
    closable:true,
    autoScroll:true,
    items:[
    	{layout:'column',name:'sf',xtype:'form',title:'对账单查询',
    		layoutConfig:{columns:4},labelWidth:60,labelAlign:'right',
    		frame:true,deferredRender:false,collapsible:true,collapsed:false,
    		listeners:{scope:this,
					collapse:function(p){g.setHeight(475);},
					expand:function(p){g.setHeight(395);}},
    		items:[	        	
    			{columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
					{fieldLabel:C_BILL_NO,name:'billNo',xtype:'textfield',anchor:'95%'},
	     			{fieldLabel:C_BILL_DATE,name:'billDate',xtype:'textfield',anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
    			    {fieldLabel:C_STATUS,name:'billStatus',xtype:'textfield',anchor:'95%'},
    			    {fieldLabel:C_TO,name:'billDate2',xtype:'textfield',anchor:'95%'}
	            	]}],
           	buttons:[
           		{text:C_SEARCH,scope:this,handler:this.search},
           		{text:C_RESET,scope:this,handler:this.clear}]
	      },
		{layout:'fit',deferredRender:false,items:[g]}
	]});
};
Ext.extend(BillTab, Ext.Panel);

BillWin = function(p) {
	var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=WS_BIIT_Q',
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'SBillItem'}, SBillItem),remoteSort:true,
    	sortInfo:{field:'biitId', direction:'DESC'}});
	
	store.load({params:{mt:'JSON',billId:p.get('billId')},scope:this});
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel([sm,
		{header:C_SETTLE_OBJECT,width:80,dataIndex:'custSname'},
		{header:C_CHAR,width:80,dataIndex:'charName'},
		{header:C_UNIT,hidden:true,width:60,dataIndex:'unitName'},	
		{header:C_UNIT_PRICE,width:60,align:'right',renderer:numRender,dataIndex:'expeUnitPrice'},
		{header:C_QUANTITY,width:60,dataIndex:'expeNum'},
		{header:C_AMOUNT,hidden:true,width:60,align:'right',renderer:numRender,dataIndex:'expeTotalAmount'},
		{header:C_CURR,width:60,dataIndex:'currCode'},
		{header:C_EX_RATE,width:60,dataIndex:'expeExRate'},
		{header:C_EX_AMOUNT,width:60,align:'right',renderer:numRender,dataIndex:'biitAmount'},
		{header:C_CONS_NO,width:80,dataIndex:"consNo"},
		{header:C_VESS,width:80,dataIndex:"consVessel"},
		{header:C_VOYA,width:80,dataIndex:"consVoyage"},
		{header:C_MBL_NO,width:80,dataIndex:"consMblNo"},
		{header:C_HBL_NO,width:80,dataIndex:"consHblNo"},
		{header:C_REMARKS,width:120,dataIndex:'expeRemarks'}
		]);
	cm.defaultSortable = true;cm.defaultWidth=100;
	var grid = new Ext.grid.GridPanel({autoScroll:true,store:store,sm:sm,cm:cm,height:400});
	
	BillWin.superclass.constructor.call(this,{iconCls:'task',
		title:'对账单'+p.get('billNo'),
		modal:true,width:800,
       height:400,plain:false,
       bodyStyle:'padding:0px;',buttonAlign:'right',
       items: [{region:'north',height:60,
    	   layout:'column',layoutConfig:{columns:4},frame:true,
    	items:[
    	{columnWidth:.25,layout:'form',border:false,labelWidth:60,
        	items:[
        	{fieldLabel:C_BILL_OBJECT,tabIndex:1,name:'custSname',value:p.get('custSname'),xtype:'textfield',anchor:'95%'},
            {fieldLabel:C_BILL_DATE,tabIndex:3,name:'billDate',value:p.get('billDate'),xtype:'datefield',format:DATEF,anchor:'95%'}]
             },
            {columnWidth:.25,layout:'form',border:false,labelWidth:60,
                items: [{fieldLabel:C_BILL_NO,tabIndex:4,name:'billNo',disabled:true,value:p.get('billNo'),xtype:'textfield',anchor:'95%'},                
                {fieldLabel:C_REMARKS,tabIndex:23,name:'billRemarks',value:p.get('billRemarks'),xtype:'textfield',anchor:'95%'}]
            },
            {columnWidth:.25,layout: 'form',border : false,labelWidth:60,
                items: [          
                {fieldLabel:C_SUM_USD,tabIndex:11,name:'billAmountUsd',value:p.get('billAmountUsd'),disabled:true,xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_SUM_LOC,tabIndex:11,name:'billAmount',value:p.get('billAmount'),disabled:true,xtype:'textfield',anchor:'95%'}
                ]
            },
            {columnWidth:.25,layout: 'form',border : false,labelWidth:60,
                items: [{fieldLabel:C_SUM_CNY,tabIndex:11,name:'billAmountCny',value:p.get('billAmountCny'),disabled:true,xtype:'textfield',anchor:'95%'}           	
               ]
            }]
       	},
		{layout:'fit',region:'center',items:grid}
	]}); 
};
Ext.extend(BillWin, Ext.Window);