//网上订舱
WconGrid = function() {	
    var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=WS_WCON_Q',
    	reader:new Ext.data.XmlReader({totalProperty:'rowCount',
    		record:'WConsign'}, WConsign),remoteSort:true,
    	sortInfo:{field:'wconId', direction:'DESC'}});
    
    store.load({params:{start:0,limit:20,wusrId:CUSER}});
    
	var sm = new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm = new Ext.grid.ColumnModel([
    	new Ext.grid.RowNumberer(),sm,
		{header:'订单号',dataIndex:'wconNo',width:120},		
		{header:'委托日期',dataIndex:'consDate',width:80,renderer:formatDateTime},		
		{header:'状态',dataIndex:'consStatus',width:100,renderer:getWCON_ST},
		{header:'装货港',dataIndex:'consPolEn',width: 80},
		{header:'卸货港',dataIndex:'consPodEn',width:100},
		{header:'目的港',dataIndex:'consDestination',width:100},
		{header:'交货地',dataIndex:'consDeliveryPlace',width:80},
		{header:'收货地',dataIndex:'consReceiptPlace',width:100},
		{header:'运输条款',dataIndex:'tranCode',width:100},
		{header:'运费条款',dataIndex:'pateName',width:100},
		{header:C_BT,dataIndex:'consBizType',width:100,renderer:getWS_BT},
		{header:C_BC,dataIndex:'consBizClass',width:100,renderer:getWS_BC},
		{header:C_ST,dataIndex:'consShipType',width:100,renderer:getWS_ST},		
		{header:'件数',dataIndex:'consTotalPackages',width:100},
		{header:'毛重',dataIndex:'consTotalGrossWeight',width:100},
		{header:'体积',dataIndex:'consTotalMeasurement',width:100}]);
	cm.defaultSortable=true;
	
    this.addRecord = function(){
    	var rid=GGUID();
    	var p = new WConsign({wconId:rid,wconNo:'N'+rid,
    		consDate:new Date(),
    		consBizClass:'E',
    		consShipType:'FCL',
    		consServiceRequired:'',
    		consBizType:'C',
    		compCode:COMP_CODE,
    		wusrId:CUSER,
    		rowAction:'N'});
       	var win = new WconWin(p,store);    	
		win.show();
    };
    
    this.editRecord = function(){
    	var p = sm.getSelected();
    	if(p){
    		var win = new WconWin(p,store);
    		win.show();
    	}
    	else 
    		XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
    
	this.removeRecord = function(){
		if (sm.getSelections().length > 0)
        	XMG.confirm(SYS,M_R_C,function(btn){
            	if(btn == 'yes') {
            	var xml =SMTX4R(sm,'WConsign','wconId');
        		Ext.Ajax.request({url:SERVICE_URL,
        			method:'POST',
        			params:{A:'WS_WCON_S',mt:'xml'},
					success: function(){
						sm.each(function(p){
							store.remove(p);
						});
						XMG.alert(SYS,M_S);
					},
					failure: function(r,o){
						XMG.alert(SYS,M_F+r.responseText);
					},
					xmlData:FOSX(xml)});
            	}
        	});
        else 
        	XMG.alert(SYS,'操作失败！');
	};	
	
	var btnAdd = new Ext.Button({text:C_ADD,iconCls:'add',handler:this.addRecord});
	var btnEdit = new Ext.Button({text:C_EDIT,iconCls:'option',handler:this.editRecord});
	var btnRemove = new Ext.Button({text:C_REMOVE,iconCls:'remove',handler:this.removeRecord});
	
    WconGrid.superclass.constructor.call(this, {
	    id:'G_WCON',
	    store: store,
	    iconCls:'grid',
	    width:600,
	    height:300,
	    title:'网上订舱列表',
	    header:false,
	    closable:true,
	    sm:sm,
	    cm:cm,    
	    loadMask:true,
		bbar:new Ext.PagingToolbar({pageSize:20,
			store:store,
			displayInfo:true,displayMsg:'{0} - {1} of {2}',emptyMsg:'没有记录'}),
		tbar:[btnAdd, '-', btnEdit, '-',btnRemove],
		listeners:{scope:this,
			rowdblclick:function(g,r,e){
				this.edit();
			}
		}
    }); 
};
Ext.extend(WconGrid,Ext.grid.GridPanel);


WconWin = function(p,store) {
	
	//发货人
	var txtShipper = new Ext.form.TextArea({fieldLabel:C_SHIPPER,
		itemCls:'required',
		name:'consShipper',
		value:p.get('consShipper'),
		height:100,
		anchor:'95%'
	});
	
	//收货人
	var txtConsignee = new Ext.form.TextArea({fieldLabel:C_CONSIGNEE,
		itemCls:'required',
		name:'consConsignee',
		value:p.get('consConsignee'),
		height:100,
		anchor:'95%'
	});
	
	//通知人
	var txtNotifyParty = new Ext.form.TextArea({fieldLabel:C_NOTIFIER,
		itemCls:'required',
		name:'consNotifyParty',
		value:p.get('consNotifyParty'),
		xtype:'textarea',
		height:100,
		anchor:'95%'
	});
	
	//唛头
	var txtCargoMarks = new Ext.form.TextArea({fieldLabel:C_MARKS,
		itemCls:'required',
		name:'consCargoMarks',
		value:p.get('consCargoMarks'),
		xtype:'textarea',
		height:100,
		anchor:'95%'
	});
	
	//货描
	var txtCargoDesc = new Ext.form.TextArea({fieldLabel:C_CARGO_DESC,
		itemCls:'required',
		name:'consCargoDesc',
		value:p.get('consCargoDesc'),
		xtype:'textarea',
		height:100,
		anchor:'95%'
	});
	
	var cboBizClass = new Ext.form.ComboBox({fieldLabel:C_BC,
		name:'consBizClass',
		value:p.get('consBizClass'),
		store:S_BC,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	var cboBizType = new Ext.form.ComboBox({fieldLabel:C_BT,
		name:'consBizType',
		value:p.get('consBizType'),
		store:S_BT,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	var cboShipType = new Ext.form.ComboBox({fieldLabel:C_ST,
		name:'consShipType',
		value:p.get('consShipType'),
		store:S_ST,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	var cboPol = new Ext.form.ComboBox({fieldLabel:C_POL,
		itemCls:'required',
		name:'consPolEn',
		value:p.get('consPolEn'),
		store:getPS(),
		displayField:'portNameEn',
		valueField:'portNameEn',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%',
		tpl:portTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consPol','');
				}
			},
			select:function(c,r,i){
				p.set('consPol',r.get('portId'));
				this.find('name','consReceiptPlace')[0].setValue(r.get('portNameEn'));
			},
			keydown:{fn:LP,buffer:BF}
		}
	});
	
	var cboPod = new Ext.form.ComboBox({fieldLabel:C_POD,
		itemCls:'required',
		name:'consPodEn',
		value:p.get('consPodEn'),
		store:getPS(),
		xtype:'combo',
		displayField:'portNameEn',
		valueField:'portNameEn',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%',
		tpl:portTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		enableKeyEvents:true,
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consPod','');
				}
			},
			select:function(c,r,i){
				p.set('consPod',r.get('portId'));
				this.find('name','consDeliveryPlace')[0].setValue(r.get('portNameEn'));
			},
			keydown:{fn:LP,buffer:BF}
		}
	});
	
	var txtReceiptPlace = new Ext.form.TextField({fieldLabel:'出发地',
		name:'consReceiptPlace',
		value:p.get('consReceiptPlace'),
		anchor:'95%'
	});
	
	var txtDeliveryPlace = new Ext.form.TextField({fieldLabel:'目的地',
		name:'consDeliveryPlace',
		value:p.get('consDeliveryPlace'),
		xtype:'textfield',
		anchor:'95%'
	});
	
	var cboTranCode = new Ext.form.ComboBox({fieldLabel:'运输条款',
		itemCls:'required',
		tabIndex:17,
		name:'tranCode',
		value:p.get('tranCode'),
		store:tranStore,
		xtype:'combo',
		displayField:'tranCode',
		valueField:'tranCode',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('tranId','');
				}
			},
			select:function(c,r,i){
				p.set('tranId',r.get('tranId'));
			}
		}
	});
	
	var cboPateName = new Ext.form.ComboBox({fieldLabel:'运费条款',
		itemCls:'required',
		tabIndex:17,
		name:'pateName',
		value:p.get('pateName'),
		store:pateStore,
		xtype:'combo',
		displayField:'pateName',
		valueField:'pateName',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus:true,anchor:'95%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('pateId','');
				}
			},
			select:function(c,r,i){
				p.set('pateId',r.get('pateId'));
			}
		}
	});
	
	var txtTotalPackages = new Ext.form.NumberField({fieldLabel:C_PACKAGES,
		name:'consTotalPackages',
		value:p.get('consTotalPackages'),
		anchor:'95%'
	});
	
	var cboPackName = new Ext.form.ComboBox({fieldLabel:'包装种类',
		name:'packName',
		value:p.get('packName'),
		store:packStore,
		displayField:'packName',
		valueField:'packName',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%',
		listeners:{scope:this,
			select:function(c,r,i){
				p.set('packId',r.get('packId'));
			}
		}
	});
	
	var cboGrossWeight = new Ext.form.NumberField({fieldLabel:'货物毛重',
		itemCls:'required',
		name:'consTotalGrossWeight',
		value:p.get('consTotalGrossWeight'),
		anchor:'95%'
	});
	
	var cboMeasurement = new Ext.form.NumberField({fieldLabel:'货物体积',
		name:'consTotalMeasurement',
		value:p.get('ConsTotalMeasurement'),
		anchor:'95%'
	});
	
	var txtRemarks = new Ext.form.TextArea({fieldLabel:'备注',
		name:'consRemarks',
		value:p.get('consRemarks'),
		anchor:'95%'
	});
	
	var txtContainerInfo = new Ext.form.TextArea({fieldLabel:'箱量(如：<br>20GP*3;<br>40GP*1)',
		name:'consContainerInfo',
		value:p.get('consContainerInfo'),
		anchor:'95%'});
	
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',layout:'column',border:false,items:[
		{columnWidth:.6,layout:'form',border:false,defaultType:'textfield',items: [
			txtShipper,txtConsignee,txtNotifyParty,txtCargoMarks,txtCargoDesc
		]},            
		{columnWidth:.4,layout:'form',border:false,items:[            
			cboBizClass,cboBizType,cboShipType,cboPol,cboPod,
			txtReceiptPlace,txtDeliveryPlace,cboTranCode,cboPateName,    	
			txtTotalPackages,cboPackName,cboGrossWeight,cboMeasurement,
			txtRemarks,txtContainerInfo,
			{xtype: 'checkboxgroup',fieldLabel: '延伸服务',itemCls: 'x-check-group-alt',columns: 4,items: [
        		{boxLabel: '拖车', id: 'SR_TRAN',checked:p.get('consServiceRequired').indexOf(SR_TRAN)!=-1},
        		{boxLabel: '仓储', id: 'SR_WARE', checked:p.get('consServiceRequired').indexOf(SR_WARE)!=-1},
        		{boxLabel: '报关', id: 'SR_CUDE',checked:p.get('consServiceRequired').indexOf(SR_CUDE)!=-1},
        		{boxLabel: '报检', id: 'SR_INSP',checked:p.get('consServiceRequired').indexOf(SR_INSP)!=-1}
    			]}
		]}
      ]
	});
	
	this.save = function(){			
		var consServiceRequired = '';
  	 	if(Ext.getCmp('SR_TRAN')) 
  	 		consServiceRequired+=Ext.getCmp('SR_TRAN').getValue()?SR_TRAN:'';
  	 	
  	 	if(Ext.getCmp('SR_WARE')) 
  	 		consServiceRequired+=Ext.getCmp('SR_WARE').getValue()?SR_WARE:'';
  	 	
  	 	if(Ext.getCmp('SR_INSP')) 
  	 		consServiceRequired+=Ext.getCmp('SR_INSP').getValue()?SR_INSP:'';
  	 	
  	 	if(Ext.getCmp('SR_CUDE')) 
  	 		consServiceRequired+=Ext.getCmp('SR_CUDE').getValue()?SR_CUDE:'';
  	 	
  	 	p.set('consServiceRequired',consServiceRequired);		
		p.beginEdit();frm.getForm().updateRecord(p);
		p.endEdit();
		
		if(!p.get('consShipper')){
			alert(C_SHIPPER+'不能为空');
			frm.find('name','consShipper')[0].focus();
			return;
		}
		
		if(!p.get('consConsignee')){
			alert(C_CONSIGNEE+'不能为空');
			frm.find('name','consConsignee')[0].focus();
			return;
		}
		
		if(!p.get('consCargoDesc')){
			alert(C_CARGO_DESC+'不能为空');
			frm.find('name','consCargoDesc')[0].focus();
			return;
		}
		
		if(!p.get('consPolEn')){
			alert('装货港不能为空');
			frm.find('name','consPolEn')[0].focus();
			return;
		}
		
		if(!p.get('consPodEn')){
			alert('卸货港不能为空');
			frm.find('name','consPodEn')[0].focus();
			return;
		}
		
		if(!p.get('tranId')){
			alert('运输条款不能为空');
			frm.find('name','tranId')[0].focus();
			return;
		}
		
		if(!p.get('consCargoDesc')){
			alert('货物描述不能为空');
			frm.find('name','consCargoDesc')[0].focus();
			return;
		}
		
		if(!p.get('consTotalGrossWeight')){
			alert('货物毛重不能为空');
			frm.find('name','consTotalGrossWeight')[0].focus();
			return;
		}
	  	
		var rj=RTJ(p,WConsign);
		var data=FOSJ({'WConsign':rj});
		Ext.Ajax.request({url:SERVICE_URL,
			method:'POST',
			params:{A:'WS_WCON_S',mt:'JSON'},
			success: function(r){
				var res=Ext.util.JSON.decode(r.responseText);
				var o=res.WConsign[0];
				p.set('version',o.version);
				p.set('wconId',o.wconId);
				p.set('wconNo',o.wconNo);
				var ra=p.get('rowAction');
				p.set('rowAction','M');
				if(ra=='N') store.addSorted(p);
				alert('操作成功！');
			},
			failure: function(r){
				var res=Ext.util.JSON.decode(r.responseText);alert(res.FosResponse.msg);},
		jsonData:data});
	};	
	
	
    WconWin.superclass.constructor.call(this, {title:'网上订舱-'+p.get('wconNo'),
    	modal:true,
    	width:800,
        height:600,
        plain:false,
        bodyStyle:'padding:0px;',
        buttonAlign:'right',
        items:frm,
        buttons:[{text:"保存",scope:this,handler:this.save},
                 {text:"取消",scope:this,handler:this.close}]
        }); 
};
Ext.extend(WconWin,Ext.Window);


//单票跟踪
ConsTab = function(){	
	var store = new Ext.data.Store({
   		url: SERVICE_URL+'?A=WS_CONS_X&custId='+CCUST,
    	reader:new Ext.data.XmlReader({totalProperty:'rowCount',record:'FConsign'}, FConsign),
    	remoteSort:true,
    	sortInfo:{field:'consId', direction:'DESC'}});
    store.load({params:{start:0,limit:20}});
    
    var sm = new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var cm = new Ext.grid.ColumnModel([
    	sm,
    	{header:'业务号',dataIndex:'consNo',width:120},
    	{header:'合同号',dataIndex:'consContractNo',width:120},
		{header:'委托日期',dataIndex:'consDate',width:100,renderer:formatDate},
		{header:'开航日期',dataIndex:'consSailDate',width:80,renderer:formatDateTime},
		{header:'船名',dataIndex:'vessName',width: 80},
		{header:'航次',dataIndex:'voyaName',width: 80},
		{header:'MB/L',dataIndex:'consMblNo',width: 80},
		{header:'HB/L',dataIndex:'consHblNo',width: 80},
		{header:'装货港',dataIndex:'consPolEn',width:120},
		{header:'卸货港',dataIndex:'consPodEn',width:120},
		{header:'目的港',dataIndex:'consDeliveryPlace',width:100},		
		{header:'运输条款',dataIndex:'tranCode',width:80},
		{header:'运费条款',dataIndex:'pateName',width:80},
		{header:C_BT,dataIndex:'consBizType',width:80,renderer:getWS_BT},
		{header:C_BC,dataIndex:'consBizClass',width:80,renderer:getWS_BC},
		{header:C_ST,dataIndex:'consShipType',width:80,renderer:getWS_ST},
		{header:'箱信息',dataIndex:'consContainersInfo',width: 80},		
		{header:'件数',dataIndex:'consTotalPackages',width:100},
		{header:'毛重(KGS)',dataIndex:'consTotalGrossWeight',width:100},
		{header:'体积(CBM)',dataIndex:'consTotalMeasurement',width:100}]);
	cm.defaultSortable=true;
		
	var grid = new Ext.grid.GridPanel({store: store,
		iconCls:'grid',
		header:false,
		cm:cm,
		sm:sm,
		loadMask:true,
    	listeners:{rowdblclick:function(g,r,e){
    		var p = sm.getSelected();
        	if(p){
        		var win = new TaskWin(p.get('consId'));
        		win.show();
        	}
        	else 
        		alert(M_NO_DATA_SELECTED);
    	}},
    	bbar:new Ext.PagingToolbar({pageSize:20,store:store,
    		displayInfo:true,displayMsg:'{0} - {1} of {2}',emptyMsg:'没有记录'})
    });
	
    this.search=function(){
   		if(CCUST=='null') 
   			return;   		
   		var a=[];
   		a[a.length] = new QParam({key:'custId',value:CCUST,op:EQ});
   		
    	var consNo=this.find('name','consNo')[0].getValue();
    	if(consNo) 
    		a[a.length] = new QParam({key:'consNo',value:consNo,op:LI});
    	
    	var consContainerNo=this.find('name','consContainerNo')[0].getValue();
    	if(consContainerNo) 
    		a[a.length] = new QParam({key:'consContainerNo',value:consContainerNo,op:LI});
    	
    	var consMblNo=this.find('name','consMblNo')[0].getValue();
    	if(consMblNo) 
    		a[a.length] = new QParam({key:'consMblNo',value:consMblNo,op:LI});
    	
    	var consHblNo=this.find('name','consHblNo')[0].getValue();
    	if(consHblNo) 
    		a[a.length] = new QParam({key:'consHblNo',value:consHblNo,op:LI});
    	
    	var consTradeContractNo=this.find('name','consTradeContractNo')[0].getValue();
    	if(consTradeContractNo) 
    		a[a.length] = new QParam({key:'consTradeContractNo',value:consTradeContractNo,op:LI});
    	
    	var vessName=this.find('name','vessName')[0].getValue();
    	if(vessName) 
    		a[a.length] = new QParam({key:'vessName',value:vessName,op:LI});
    	
    	var voyaName=this.find('name','voyaName')[0].getValue();
    	if(voyaName) 
    		a[a.length] = new QParam({key:'voyaName',value:voyaName,op:EQ});
    	
    	
    	var consPolEn=this.find('name','consPolEn')[0].getValue();
    	if(consPolEn) 
    		a[a.length] = new QParam({key:'consPolEn',value:consPolEn,op:LI});
    	
    	var consPodEn=this.find('name','consPodEn')[0].getValue();
    	if(consPodEn) 
    		a[a.length] = new QParam({key:'consPodEn',value:consPodEn,op:LI});
    	
    	var consDeliveryPlace=this.find('name','consDeliveryPlace')[0].getValue();
    	if(consDeliveryPlace) 
    		a[a.length] = new QParam({key:'consDeliveryPlace',value:consDeliveryPlace,op:LI});
    	
    	
    	var consDate=this.find('name','consDate')[0].getValue();
   		var consDate2=this.find('name','consDate2')[0].getValue();
   		if(consDate && consDate2){
   			a[a.length] = new QParam({key:'consDate',value:consDate.format(DATEF),op:5});
   			a[a.length] = new QParam({key:'consDate',value:consDate2.format(DATEF),op:3});
   		}
   		else if(consDate) 
   			a[a.length] = new QParam({key:'consDate',value:consDate.format(DATEF),op:EQ});
   		
   		var consEtd=this.find('name','consEtd')[0].getValue();
   		var consEtd2=this.find('name','consEtd2')[0].getValue();
   		if(consEtd && consEtd2){
   			a[a.length] = new QParam({key:'consEtd',value:consEtd.format(DATEF),op:5});
   			a[a.length] = new QParam({key:'consEtd',value:consEtd2.format(DATEF),op:3});
   		}
   		else if(consEtd) 
   			a[a.length] = new QParam({key:'consEtd',value:consEtd.format(DATEF),op:EQ});
   		   		
   		store.baseParams.xml=FOSX(QTX(a));
     	store.reload({params:{start:0,limit:20},
     		callback:function(r){
     			if(r.length==0) 
     				alert(M_NOT_FOUND);
     		}
     	});
	};
	
	this.clear=function(){
		searchPanel.getForm().reset();
	};
		
	
	var searchPanel = new Ext.form.FormPanel({region:'north',
    	layout:'column',
    	height:180,
    	title:'单票查询',
    	layoutConfig:{columns:4},
    	labelWidth:60,
    	labelAlign:'right',
    	frame:true,
    	collapsible:true,
    	collapsed:false,
    	buttonAlign:'center',
		items:[	        	
			{columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
				{fieldLabel:C_CONS_NO,name:'consNo',xtype:'textfield',anchor:'95%'},
     			{fieldLabel:C_TRADE_CONTRACT_NO,name:'consTradeContractNo',xtype:'textfield',anchor:'95%'},
     			{fieldLabel:C_POL,name:'consPolEn',xtype:'textfield',anchor:'95%'},
     			{fieldLabel:C_SAIL_DATE,name:'consEtd',xtype:'datefield',format:DATEF,anchor:'95%'}
            ]},
			{columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
			    {fieldLabel:C_CONT_NO,name:'consContainerNo',xtype:'textfield',anchor:'95%'},
            	{fieldLabel:C_VESS,name:'vessName',xtype:'textfield',anchor:'95%'},
            	{fieldLabel:C_POD,name:'consPodEn',xtype:'textfield',anchor:'95%'},
            	{fieldLabel:C_TO,name:'consEtd2',xtype:'datefield',format:DATEF,anchor:'95%'}]},
           {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
           		{fieldLabel:'M/BL No.',name:'consMblNo',xtype:'textfield',anchor:'95%'},
     			{fieldLabel:C_VOYA,name:'voyaName',xtype:'textfield',anchor:'95%'},
     			{fieldLabel:C_CONS_DATE,name:'consDate',xtype:'datefield',format:DATEF,anchor:'95%'}]},
            {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
            	{fieldLabel:'H/BL No.',name:'consHblNo',xtype:'textfield',anchor:'95%'},
            	{fieldLabel:'目的港',name:'consDeliveryPlace',xtype:'textfield',anchor:'95%'},
            	{fieldLabel:C_TO,name:'consDate2',xtype:'datefield',format:DATEF,anchor:'95%'}]
            }],
    	buttons:[{text:C_SEARCH,scope:this,handler:this.search},
    	         {text:C_RESET,scope:this,handler:this.clear}]
    });
	
	
	
	ConsTab.superclass.constructor.call(this, {    
	    id:'T_CONS',
	    title:'单票跟踪',
	    iconCls:'stats',
	    deferredRender:false,
	    closable:true,
	    autoScroll:true,
	    layout:'border',
	    items:[searchPanel,
		{region:'center',layout:'fit',deferredRender:false,items:[grid]}]
	});
};
Ext.extend(ConsTab, Ext.Panel);
