//提单确认
BLTab = function(){	
	var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=WS_BL_X',
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FBl'}, FBl),remoteSort:true,
    	sortInfo:{field:'blId', direction:'DESC'}});
    store.load({params:{custId:CCUST,start:0,limit:20}});
    var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true}); 
	var cm = new Ext.grid.ColumnModel([
    	sm,
    	{header:'业务号',dataIndex:'consNo',width:120},
    	{header:'合同号',dataIndex:'consTradeContractNo',width:80},
		{header:'提单号',dataIndex:'blNo',width:80},
		{header:'提单类型',dataIndex:'blType',width:80},		
		{header:'发货人',dataIndex:'blShipper',width: 80},
		{header:'收货人',dataIndex:'blConsignee',width:100},
		{header:'通知人',dataIndex:'blNotifyParty',width:80},	
		{header:'件数',dataIndex:'blPackages',width:100},
		{header:'毛重',dataIndex:'blGrossWeight',width:100},
		{header:'体积',dataIndex:'blMeasurement',width:100}]);
	cm.defaultSortable=true;
	var re={rowdblclick:function(g,r,e){
		var p = sm.getSelected();
    	if(p){
    		var win = new BlConfirmWin(p);
    		win.show();
    	}
    	else alert(M_NO_DATA_SELECTED);
	}};  
	
	var grid = new Ext.grid.GridPanel({region:'center',store: store,iconCls:'grid',
		header:false,closable:true,cm:cm,sm:sm,loadMask:true,
    	listeners:re,bbar:new Ext.PagingToolbar({pageSize:20,
    		store:store,displayInfo:true,displayMsg:'{0} - {1} of {2}',emptyMsg:'没有记录'})
    	});
    this.search=function(){
   		if(CCUST=='null') return;   		
   		var a=[];
   		a[a.length]={key:'custId',value:CCUST,op:EQ};
    	var consNo=this.find('name','consNo')[0].getValue();
    	if(consNo) a[a.length]={key:'consNo',value:consNo,op:LI};
    	var blNo=this.find('name','blNo')[0].getValue();
    	if(blNo) a[a.length]={key:'blNo',value:blNo,op:LI};    	
    	var consTradeContractNo=this.find('name','consTradeContractNo')[0].getValue();
    	if(consTradeContractNo) a[a.length]={key:'consTradeContractNo',value:consTradeContractNo,op:LI};
    	var vessName=this.find('name','vessName')[0].getValue();
    	if(vessName) a[a.length]={key:'vessName',value:vessName,op:LI};
    	var voyaName=this.find('name','voyaName')[0].getValue();
    	if(voyaName) a[a.length]={key:'voyaName',value:voyaName,op:EQ};
    	var blPol=this.find('name','blPol')[0].getValue();
    	if(blPol) a[a.length]={key:'blPol',value:blPol,op:LI};
    	var blPod=this.find('name','blPod')[0].getValue();
    	if(blPod) a[a.length]={key:'blPod',value:blPod,op:LI};
    	
   		store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	store.reload({params:{start:0,limit:25},callback:function(r){if(r.length==0) alert(M_NOT_FOUND);}});
	};
	this.clear=function(){this.find('name','sf')[0].getForm().reset();};
	
	BLTab.superclass.constructor.call(this, {    
    id:'T_BL',title:'提单确认',iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,layout:'border',
    items:[{region:'north',height:130,layout:'column',name:'sf',xtype:'form',
    		title:'提单查询',layoutConfig:{columns:4},
    	    labelWidth:60,labelAlign:'right',frame:true,collapsible:true,collapsed:false,
    		items:[	        	
    			{columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
					{fieldLabel:C_CONS_NO,name:'consNo',xtype:'textfield',anchor:'95%'},
	     			{fieldLabel:C_TRADE_CONTRACT_NO,name:'consTradeContractNo',xtype:'textfield',anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
    			    {fieldLabel:C_BL_NO,name:'blNo',xtype:'textfield',anchor:'95%'},
    			    {fieldLabel:C_POL,name:'blPol',xtype:'textfield',anchor:'95%'}
	            	]},
	           {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
	     			{fieldLabel:C_VESS,name:'vessName',xtype:'textfield',anchor:'95%'},
	     			{fieldLabel:C_POD,name:'blPod',xtype:'textfield',anchor:'95%'}
	     			]},
	            {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
	            	{fieldLabel:C_VOYA,name:'voyaName',xtype:'textfield',anchor:'95%'}
	            ]}
	    	],
        	buttons:[{text:C_SEARCH,scope:this,handler:this.search},
        	         {text:C_RESET,scope:this,handler:this.clear}
        	]},
	    	grid
	]});
};
Ext.extend(BLTab, Ext.Panel);

BlConfirmWin = function(p) {	
	var html='<table cellspacing="0" cellpadding="0" border="1" width="100%">';
	
		html+='<tr height="120" valign="top">';		
    	html+='<td colspan="6"  width="60%"><b><font size="-1">SHIPPER</font></b><br><font color="#0000ff">';
    	html+=p.get('blShipper');
    	html+='</font></td>';    	
		html+='<td colspan="4" width="40%"><b><font size="-1">B/L NUMBER</font></b><br><font color="#0000ff">';
		html+p.get('blNo');
		html+='</font></td>';		
		html+='</tr>';
		
		html+='<tr height="120" valign="top">';
		html+='<td colspan="6"><b><font size="-1">CONSIGNEE</font></b><br><font color="#0000ff">';
		html+=p.get('blConsignee');
		html+='</font></td> ';
		html+='<td colspan="4">&nbsp;</td>';
		html+='</tr>';
		
		html+='<tr height="120" valign="top">';
		html+='<td colspan="6"><b><font size="-1">NOTIFY PARTY</font></b><br><font color="#0000ff">';
		html+=p.get('blNotifyParty');
		html+='</font></td>';
		html+='<td colspan="4">&nbsp;</td>';
		html+='</tr>';
		
		html+='<tr valign="top">';
		html+='<td colspan="4"><b><font size="-1">PLACE OF RECEIPT</font></b><br><font color="#0000ff">';
		html+=p.get('blReceiptPlace');
		html+='</font></td>';
		html+='<td colspan="2"><b><font size="-1">PRE-CARRIAGE BY</font></b><br><font color="#0000ff">';
		html+=p.get('blPreCarriage');
		html+='</font></td>';
		html+='<td colspan="4">&nbsp;</td>';
		html+='</tr>';
		
		html+='<tr valign="top">';
		html+='<td colspan="2"><b><font size="-1">OCEAN VESSEL</font></b><br><font color="#0000ff">';
		html+=p.get('blVessel');
		html+='</font></td>';
		html+='<td colspan="2"><b><font size="-1">VOY NO.</font></b><br><font color="#0000ff">';
		html+=p.get('blVoyage');
		html+='</font></td>';
		html+='<td colspan="2"><b><font size="-1">PORT OF LOADING</font></b><br><font color="#0000ff">';
		html+=p.get('blPol');
		html+='</font></td>';
		html+='<td colspan="4"><b><font size="-1">NO.OF ORIGINAL B(s)/L</font></b><br><font color="#0000ff">';
		html+=p.get('blOriginalNum');
		html+='</font></td>';
		html+='</tr>';
		
		html+='<tr valign="top">';
		html+='<td colspan="4"><b><font size="-1">PORT OF DISCHARGE</font></b><br><font color="#0000ff">';
		html+=p.get('blPod');
		html+='</font></td>';
		html+='<td colspan="2"><b><font size="-1">PLACE OF DELVIERY</font></b><br><font color="#0000ff">';
		html+=p.get('blDeliveryPlace');
		html+='</font></td>';
		html+='<td colspan="4">&nbsp;</td>';
		html+='</tr>';
		
		html+='</table>';
		
		html+='<table cellspacing="0" cellpadding="0" border="1" bordercolor="#C0C0C0" width="100%">';
		html+='<tr valign="top" height="220" >';
		html+='<td colspan="2"><b><font size="-1">MARKS AND NUMBERS CONTAINER NO.&SEAL NO.</font></b><br><font color="#0000ff">';
		html+=p.get('blMarks');
		html+='</font></td>';
		html+='<td colspan="2"><b><font size="-1">NO. OF CONTAINERS OR PACKAGES</font></b><br><font color="#0000ff">';
		html+=p.get('blPackages');
		html+='</font></td>';
		html+='<td colspan="4"><b><font size="-1">TYPE OR KIND OF CONTAINERS OR PACKAGES - DESCRIPTION OF GOODS</font></b><br><font color="#0000ff">';
		html+=p.get('blCargoDesc');
		html+='</font></td>';
		html+='<td><b><font size="-1">GROSS WEIGHT</font></b><br><font color="#0000ff">';
		html+=p.get('blGrossWeight');
		html+='</font></td>';
		html+='<td><b><font size="-1">MEASUREMENT</font></b><br><font color="#0000ff">';
		html+=p.get('blMeasurement');
		html+='</font></td>';
		html+='</tr>';
		html+='</table>';
	var frm = new Ext.Panel({html:html,padding:10});
	
	this.renew=function(){
    	//if(p.get('blStatus')==1){
	    	var b = new WBlM({wblmId:0,blId:p.get('blId'),blNo:p.get('blNo'),
	    		consId:p.get('consId'),consNo:p.get('consNo'),
	    		custId:p.get('custId'),custName:p.get('custName'),
	    		wblmStatus:0,
	    		compCode:COMP_CODE,wusrId:CUSER,rowAction:'N'});
	       		var win = new BLMWin(b,p);    	
			win.show();
		//}
		//else alert('该提单已确认，不能修改！请和操作员联系。');
	};
	this.record=function(){
		var win = new BLMGrid(p);
		win.show();    	
	};
	BlConfirmWin.superclass.constructor.call(this,{iconCls:'task',title:'提单确认'+p.get('blNo'),
		modal:true,width:900,autoScroll:true,
		height:500,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:frm,
        tbar:[       	
          	{iconCls:'add',text:"提单确认",disabled:p.get('blStatus')>1,scope:this,handler:this.save},'-',
          	{iconCls:'edit',text:"改单申请",scope:this,handler:this.renew},'-',
          	{iconCls:'doc',text:"改单记录",scope:this,handler:this.record}]}); 
};
Ext.extend(BlConfirmWin, Ext.Window);

BLMGrid = function(p) {
	var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=WS_WBLM_Q',
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'WBlM'}, WBlM),remoteSort:true,
    	sortInfo:{field:'wblmId', direction:'DESC'}});
	store.load({params:{mt:'JSON',blId:p.get('blId')},scope:this});	
	var cm=new Ext.grid.ColumnModel([
		{header:'修改项',width:200,dataIndex:"wblmField",renderer:getBLField},
		{header:'原值',dataIndex: 'wblmValueOld',width:120},
		{header:'新值',dataIndex: 'wblmValueNew',width:120},
		{header:'状态',dataIndex: 'wblmStatus',width:120},
		{header:'申请时间',dataIndex: 'createTime',width:120,renderer:formatDate},
		{header:'回复时间',dataIndex: 'replyTime',width:120,renderer:formatDate}
	]);
	cm.defaultSortable = true;
	cm.defaultWidth=100;		
	var gv=new Ext.grid.GridView({
		getRowClass: function(record, index) {			   
            if (record.get('wblmStatus')==1) 
            	return 'green-font-row';
            else if (record.get('taskFinishedFlag')==2) 
            	return 'red-font-row';
            else 
            	return '';
        }});
   	
	var grid=new Ext.grid.GridPanel({border:true,height:400,autoScroll:true,
	    stripeRows:true,store:store,cm:cm, view:gv,
	   	tbar:[{text:C_ADD+'(N)',iconCls:'add',handler:this.add}, '-', 
		{text:C_EDIT+'(M)',iconCls:'edit',handler:this.edit}, '-',
		{text:C_REMOVE+'(R)',iconCls:'remove',handler:this.remove},'-']
    }); 
		
	BLMGrid.superclass.constructor.call(this,{iconCls:'task',title:'改单申请',modal:true,width:800,
       height:400,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:grid}); 
};
Ext.extend(BLMGrid, Ext.Window);

BLMWin = function(b,p) {
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',border:false,items:[
	{fieldLabel:'修改项',tabIndex:1,name:'wblmField',value:p.get('wblmField'),xtype:'combo',store:S_FIELD,displayField:'NAME',
		valueField:'CODE',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
			select:function(c,r,i){
				this.find('name','wblmValueOld')[0].setValue(p.get(r.get('CODE')));
				}
		}},
	{fieldLabel:'原值',tabIndex:1,name:'wblmValueOld',value:p.get('wblmValueOld'),readOnly:true,xtype:'textarea',height:100,anchor:'95%'},
	{fieldLabel:'新值',tabIndex:1,name:'wblmValueNew',value:p.get('wblmValueNew'),xtype:'textarea',height:100,anchor:'95%'},
	{fieldLabel:'修改原因',tabIndex:1,name:'wblmReason',value:p.get('wblmReason'),xtype:'textarea',height:100,anchor:'95%'}
	]});
	this.save=function(){
		b.beginEdit();
		frm.getForm().updateRecord(b);
		b.endEdit();
		if(!b.get('wblmField')){
			alert('修改项不能为空');
			frm.find('name','wblmField')[0].focus();
			return;
		}
		if(!b.get('wblmValueNew')){
			alert('新值不能为空');
			frm.find('name','wblmValueNew')[0].focus();
			return;
		}
		var rj=RTJ(b,WBlM);
		var data=FOSJ({'WBlM':rj});
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'WS_WBLM_S',mt:'JSON'},
			success: function(res){
				var rec=Ext.util.JSON.decode(res.responseText);
				b.set('wblmId',rec.WBlM[0].wblmId);
				alert('保存成功！');
				this.close();
			},
			failure: function(r){
				var user=Ext.util.JSON.decode(r.responseText);
				alert(user.FosResponse.msg);
			},
		jsonData:data});
	};	
	BLMWin.superclass.constructor.call(this,{iconCls:'task',title:'提单修改'+p.get('blNo'),modal:true,width:600,
       height:420,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',
       items:frm,buttons:[
        	{text:"保存",scope:this,handler:this.save},
        	{text:"取消",scope:this,handler:this.close}]
        }); 
};
Ext.extend(BLMWin, Ext.Window);