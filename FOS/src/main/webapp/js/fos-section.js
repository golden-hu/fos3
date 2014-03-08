//二程船
Fos.SecondShipTab = function(p) {		
	this.sel = GSEL;
	this.store = GS('SESH_Q','FSecondShip',FSecondShip,'seshId','DESC','','','id',false);
	if(p.get('rowAction')!='N') this.store.load({params:{consId:p.get('consId')}});
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('id')){
				this.sel=record.get('id');
				frm.getForm().reset();
				frm.getForm().loadRecord(record);
			}
		},
		rowdeselect:function(sm,row,record){
			if(this.getForm().isDirty()){
				record.beginEdit();
				frm.getForm().updateRecord(record);
				record.endEdit();
			}
		}
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_BL_NO,dataIndex:'seshBlNo'},
	{header:C_SECOND_CARRIER,dataIndex:'seshCarrier',width:100},
	{header:C_SECOND_VESS,dataIndex:'seshVessel'},
	{header:C_SECOND_VOYA,dataIndex:'seshVoyage'},
	{header:C_POT,dataIndex:'seshPot'},
	{header:C_ETA,dataIndex:'seshEta',renderer:formatDate},
	{header:C_ETD,dataIndex:'seshEtd',renderer:formatDate}
	],defaults:{sortable:true,width:80}});
	this.grid = new Ext.grid.GridPanel({title:C_SECOND_SHIP_LIST,region:'north',autoScroll:true,height:200,store:this.store,sm:sm,cm:cm});
	this.addSesh = function(){
		var r = new FSecondShip({id:GGUID(),seshId:'0',consId:p.get('consId'),
			consNo:p.get('consNo'),seshPot:p.get('consPotEn'),rowAction:'N'});
		this.store.insert(0,r);
		this.grid.getSelectionModel().selectFirstRow();
	};	
	this.removeSesh = function(){
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
			b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
			this.store.remove(b);
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	this.save = function(){
		this.grid.stopEditing();
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
			b.beginEdit();
			frm.getForm().updateRecord(b);
			b.endEdit();
		}		
		var a =this.store.getModifiedRecords();
		var xml = '';
		if(a.length){
			xml = ATX(a,'FSecondShip',FSecondShip);
		};
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'SESH_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FSecondShip',FSecondShip);
				FOSU(this.store,a,FSecondShip);
				XMG.alert(SYS,M_S);
			},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
	};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_SESH;
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nrs',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_SESH_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addSesh();break;
					case Ext.EventObject.R:
						if(!NR(m+F_R)) this.removeSesh();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	
	var frm = new Ext.FormPanel({trackResetOnLoad:true,layout:'column',title:C_SECOND_SHIP_INFO,
		labelAlign:'right',labelWidth:80,padding:5,layoutConfig: {columns:4},items:[
        {columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_BL_NO,name:'seshBlNo',tabIndex:1,xtype:'textfield',anchor:'99%'},
                {fieldLabel:C_POT_AGENCY,name:'seshPotAgency',tabIndex:5,xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_TRANS_NO,name:'seshTransNo',tabIndex:9,xtype:'textfield',anchor:'99%'}]},
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_SECOND_CARRIER,name:'seshCarrier',tabIndex:2,xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_POT,name:'seshPot',tabIndex:6,xtype:'textfield',anchor:'99%'},
                {fieldLabel:C_CUSTOM_SNO,name:'seshSealNo',tabIndex:10,xtype:'textfield',anchor:'99%'}]},
			{columnWidth:.25,layout:'form',border : false,items:[
            	{fieldLabel:C_SECOND_VESS,name:'seshVessel',tabIndex:3,xtype:'textfield',anchor:'99%'},
                {fieldLabel:C_ETA,name:'seshEta',tabIndex:7,xtype:'datefield',format:DATEF,anchor:'99%'}]},
			{columnWidth:.25,layout:'form',border : false,items:[
                {fieldLabel:C_SECOND_VOYA,name:'seshVoyage',tabIndex:4,xtype:'textfield',anchor:'99%'},
                 {fieldLabel:C_ETD,name:'seshEtd',tabIndex:8,xtype:'datefield',format:DATEF,anchor:'99%'}]},
            {columnWidth:.5,layout:'form',border : false,items:[
                {fieldLabel:C_REMARKS,name:'seshRemarks',tabIndex:11,xtype:'textfield',anchor:'99%'}]}
	]});
	
	this.getVendorId=function(){    	
		return '';
	};
	
	this.getVendorName=function(){
		return '';
	};
	var expPanel = new Fos.SectionExGrid(p,'SESH',this);

	Fos.SecondShipTab.superclass.constructor.call(this, { 
	id:'T_SESH_'+p.get('id'),title:C_SECOND_SHIP+'(F11)',layout:'border',
	tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addSesh},'-',
			{text:C_REMOVE+'(R)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeSesh},'-',
			{text:C_SAVE+'(S)',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save}],
			items: [this.grid,
			        {xtype:'tabpanel',activeTab:0,region:'center',items:[frm,expPanel]}
			]
	});
};
Ext.extend(Fos.SecondShipTab, Ext.Panel);

//驳船订舱
Fos.BBookingTab = function(p) {
    this.save=function(){
    	var f = FConsign.prototype.fields;
		for (var i = 0; i < f.keys.length; i++) {
   			var fn = ''+f.keys[i];
   			var fc = this.find('name',fn);
   			if(fc!=undefined&&fc.length>0){p.set(fn,fc[0].getValue());}
		}
		if(p.get('consStatusBBook')==0) p.set('consStatusBBook','1');
		var xml = RTX(p,'FConsign',FConsign);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
			success: function(r){
				var c = XTR(r.responseXML,'FConsign',FConsign);
				p.set('version',c.get('version'));
				this.updateToolBar('1');
				XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)
		});
    };
    this.cancel=function(){this.updateStatus('4');};
    this.renew=function(){this.updateStatus('1');};
    this.check=function(){this.updateStatus('5');};
    this.exit=function(){this.updateStatus('6');};
    this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
			params:{A:'CONS_U',consId:p.get('consId'),consStatus:s},
		success: function(r){p.set('consStatusBBook',s);this.updateToolBar(s);XMG.alert(SYS,M_S);},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
    this.updateToolBar = function(s){  
		var tb=this.getTopToolbar();
		tb.getComponent('TB_S').setDisabled(s>'5');
    	tb.getComponent('TB_C').setDisabled(s>='4');
    	tb.getComponent('TB_F').setDisabled(s!='1');
    	tb.getComponent('TB_N').setDisabled(s!='4');
    	tb.getComponent('TB_Q').setDisabled(s!='5');
    	tb.getComponent('TB_M').setText(C_STATUS_C+getBOST(s));
    };
    this.expExcel=function(){EXPC('BBOOK','&consId='+p.get('consId'));};
	this.expEmail=function(){
		var to='';
		var cc='';
		var sub=C_B_BOOKING_DOC;
		var msg='';
		EXPM(to,cc,sub,msg,'BBOOK','consId='+p.get('consId'));
	};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_BBOOK;
	new Ext.KeyMap(Ext.getDoc(), {
		key:'sfrqte',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_BBOOK_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					case Ext.EventObject.F:
						if(!NR(m+F_R)) this.cancel();break;
					case Ext.EventObject.R:
						if(!NR(m+F_M)) this.renew();break;
					case Ext.EventObject.Q:
						if(!NR(m+F_M)) this.check();break;
					case Ext.EventObject.T:
						if(!NR(m+F_M)) this.exit();break;
					case Ext.EventObject.E:
						if(!NR(m+F_M)) this.expExcel();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	
	this.getVendorId=function(){    
    	return p.get('consBCarrierId');
    };
	this.getVendorName=function(){		
		return p.get('consBCarrier');
	};
	var expPanel = new Fos.SectionExGrid(p,'BBOOK',this);
	
	Fos.BBookingTab.superclass.constructor.call(this, { 
	id:'T_BBOOK_'+p.get('id'),title:C_SR_BBOOK+'(F10)',header:false,deferredRender:false,autoScroll:true,
	labelAlign:'right',labelWidth:70,bodyStyle:'padding:0px 0px 0px',border:false,width:800,
	tbar:[{text:C_SAVE+'(S)',itemId:'TB_S',iconCls:'save',disabled:NR(m+F_M)||p.get('consStatusBBook')>'4',scope:this,handler:this.save},'-',
			{text:C_BOOK_FAILED+'(F)',itemId:'TB_F',iconCls:'cancel',disabled:NR(m+F_M)||p.get('consStatusBBook')!='1',scope:this,handler:this.cancel},'-',
			{text:C_BOOK_RENEW+'(R)',itemId:'TB_N',iconCls:'renew',disabled:NR(m+F_M)||p.get('consStatusBBook')!='4',scope:this,handler:this.renew},'-',
			{text:C_BOOK_CONFIRM+'(Q)',itemId:'TB_C',iconCls:'check',disabled:NR(m+F_M)||p.get('consStatusBBook')>='4',scope:this,handler:this.check},'-',
			{text:C_BOOK_EXIT+'(T)',itemId:'TB_Q',iconCls:'exit',disabled:NR(m+F_M)||p.get('consStatusBBook')!='5',scope:this,handler:this.exit},'-',
			{text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(m+F_E),scope:this,
				menu: {items: [
		   		{text:C_B_BOOKING_DOC,menu:{items:[
		   			{text:'Excel',scope:this,handler:this.expExcel},
		   			{text:C_EMAIL,scope:this,handler:this.expEmail},
		   			{text:C_FAX,scope:this,handler:function(){}}]}}]}
		   	},'->',
			{itemId:'TB_M',disabled:true,text:C_STATUS_C+getBOST(p.get('consStatusBBook'))},'-'
			],
	items: [{
            layout:'column',layoutConfig: {columns:4},deferredRender:false,title:C_BASE_INFO,
            padding:5,collapsible:true,labelWidth:80,
            items:[{columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_CARRIER,name:'consBCarrier',tabIndex:1,
                	value:p.get('consBCarrier'),store:getCS(),enableKeyEvents:true,
                	tpl:custTpl,itemSelector:'div.list-item',listWidth:250,
                	xtype:'combo',displayField:'custCode',valueField:'custCode',
                	typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
                	listeners:{scope:this,
                		blur:function(f){
                			if(f.getRawValue()==''){
                				f.clearValue();
                				p.set('consBCarrierId','');
                				p.set('consBCarrier','');
                			}
                		},
                		select:function(c,r,i){
                			p.set('consBCarrierId',r.get('custId'));
                			p.set('consBCarrier',r.get('custNameCn'));
                			c.setValue(r.get('custNameCn'));
                		},
						keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:BF}}},
                {fieldLabel:C_COUNTRY_D,name:'consBCountryD',disabled:true,
					tabIndex:5,value:p.get('consBCountryD'),store:getCOUN_S(),
					xtype:'combo',displayField:'counNameEn',valueField:'counCode',
					typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'99%'},
                {fieldLabel:C_ETD,name:'consBEtd',tabIndex:9,value:p.get('consBEtd'),xtype:'datefield',format:DATEF,anchor:'99%'},
                {fieldLabel:C_BOOKING_NO,name:'consBBookingNo',tabIndex:13,value:p.get('consBBookingNo'),xtype:'textfield',anchor:'99%'}
                ]
            },
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_VESS,name:'consBVessel',tabIndex:2,value:p.get('consBVessel'),store:getVES(),enableKeyEvents:true,
                	xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',typeAhead: true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
                	listeners:{scope:this,
                	blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consBVesselId','');p.set('consBVessel','');}},
                	select:function(c,r,i){p.set('consBVesselId',r.get('vessId'));},
					keydown:{fn:function(f,e){LV(f,e);},buffer:BF}}},
        		{fieldLabel:C_POD,itemCls:'required',tabIndex:6,name:'consBPodEn',value:p.get('consBPodEn'),store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
					tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
					listeners:{scope:this,
						blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consBPod','');}},
			        	select:function(c,r,i){p.set('consBPod',r.get('portId'));this.find('name','consBCountryD')[0].setValue(r.get('counCode'));},			            	
			         	keydown:{fn:LP,buffer:BF}}},
     			{fieldLabel:C_ETA,name:'consBEta',value:p.get('consBEta'),tabIndex:10,xtype:'datefield',format:DATEF,anchor:'99%'},
     			{fieldLabel:C_BOOKING_DATE,name:'consBBookingDate',tabIndex:11,value:p.get('consStatusBBook')==0?(new Date()):p.get('consBBookingDate'),xtype:'datefield',format:DATEF,anchor:'99%'}]
            },            
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_VOYA,tabIndex:3,name:'consBVoyage',value:p.get('consBVoyage'),xtype:'textfield',anchor:'99%',
                		listeners:{scope:this,select:function(c,r,i){p.set('consBVoyage',r.get('voyaName'));}}},                
                {fieldLabel:C_POT,name:'consBPotEn',tabIndex:7,value:p.get('consBPotEn'),xtype:'textfield',anchor:'99%'},
                {fieldLabel:C_BHK_FLAG,tabIndex:11,name:'consBHkFlag',checked:p.get('consBHkFlag'),xtype:'checkbox',anchor:'50%'},
                {fieldLabel:C_REMARKS,name:'consBRemarks',tabIndex:12,value:p.get('consBRemarks'),xtype:'textfield',anchor:'99%'}
 				]
            },
            {columnWidth:.25,layout: 'form',border : false,
                items: [{fieldLabel:C_POL,name:'consBPol',tabIndex:4,value:p.get('consBPol'),
                	store:getPOL_S(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead:true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
                	listeners:{scope:this,select:function(c,r,i){p.set('consBPolEn',r.get('portNameEn'));}}},
                {fieldLabel:C_DISCHARGE_HARBOUR,name:'consBHarbour',tabIndex:8,value:p.get('consBHarbour'),xtype:'textfield',anchor:'99%'},
                {fieldLabel:C_BINTERNATIONAL_FLAG,tabIndex:12,name:'consBInternationalFlag',checked:p.get('consBInternationalFlag'),xtype:'checkbox',anchor:'50%'}]
            }]
       },{
            layout:'column',layoutConfig: {columns:4},deferredRender:false,labelWidth : 40,labelAlign: 'top',
            title:C_SHIPPER_INFO,collapsible:true,padding:5,
            items:[{columnWidth:.5,layout:'form',border:false,
                items: [{fieldLabel:C_SHIPPER,name:'consBShipper',tabIndex:17,value:p.get('consBShipper'),xtype:'textarea',height:100,anchor:'99%'}]},
                {columnWidth:.5,layout:'form',border:false,
                items:[{fieldLabel:C_CONSIGNEE,name:'consBConsignee',tabIndex:18,value:p.get('consBConsignee'),xtype:'textarea',height:100,anchor:'99%'}]}
                ]
		},{
            layout:'column',layoutConfig: {columns:6},deferredRender:false,labelWidth:80,height:230,labelAlign: 'top',
            title:C_CARGO_INFO,collapsible:true,padding:5,
            items:[{columnWidth:.3,layout: 'form',border : false,
                items: [{fieldLabel:C_MARKS,name:'consCargoMarks',tabIndex:21,value:p.get('consCargoMarks'),xtype:'textarea',height:100,anchor:'99%'}]
              },            
            {columnWidth:.3,layout: 'form',border : false,
                items: [{fieldLabel:C_CARGO_DESC,name:'consCargoDesc',tabIndex:19,value:p.get('consCargoDesc'),xtype:'textarea',height:100,anchor:'99%'}]
            },{columnWidth:.1,layout: 'form',border : false,
                items: [{fieldLabel:C_NUM_PACK,name:'consCargoPackages',tabIndex:20,value:p.get('consCargoPackages'),xtype:'textarea',height:100,anchor:'99%'}]
              },{columnWidth:.1,layout: 'form',border : false,
                items: [{fieldLabel:C_NW,name:'consCargoNetWeight',tabIndex:22,value:p.get('consCargoNetWeight'),xtype:'textarea',height:100,anchor:'99%'}]
              },{columnWidth:.1,layout: 'form',border : false,
                items: [{fieldLabel:C_GW,name:'consCargoGrossWeight',tabIndex:23,value:p.get('consCargoGrossWeight'),xtype:'textarea',height:100,anchor:'99%'}]
              },{columnWidth:.1,layout: 'form',border : false,
                items: [{fieldLabel:C_CBM,name:'consCargoMeasurement',tabIndex:24,value:p.get('consCargoMeasurement'),xtype:'textarea',height:100,anchor:'99%'}]
              },{columnWidth:.60,layout: 'form',border:false,
                items: [{fieldLabel:C_PACKAGES_EN,name:'consTotalPackagesInWord',tabIndex:25,value:p.get('consTotalPackagesInWord'),xtype:'textfield',anchor:'99%'}]
              },{columnWidth:.14,layout: 'form',border:false,
                items: [{fieldLabel:C_SUM_PACK,name:'consTotalPackages',tabIndex:26,value:p.get('consTotalPackages'),xtype:'numberfield',anchor:'99%'}]
              },{columnWidth:.14,layout: 'form',border:false,
                items: [{fieldLabel:C_SUM_GW,name:'consTotalGrossWeight',tabIndex:27,value:p.get('consTotalGrossWeight'),xtype:'numberfield',anchor:'99%'}]
              },{columnWidth:.12,layout: 'form',border:false,
                items: [{fieldLabel:C_SUM_CBM,name:'consTotalMeasurement',tabIndex:28,value:p.get('consTotalMeasurement'),xtype:'numberfield',anchor:'99%'}]
              }]
		},
		expPanel
		]
	});
};    
Ext.extend(Fos.BBookingTab, Ext.FormPanel);

//铁路运单
Fos.RailwayBlTab = function(p) {		
	this.sel = GSEL;
	this.store = GS('RABL_Q','FRailwayBl',FRailwayBl,'rablId','DESC','','','id',false);
	if(p.get('rowAction')!='N') 
		this.store.load({params:{consId:p.get('consId')}});
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('id')){
				this.sel=record.get('id');
				frm.getForm().reset();
				frm.getForm().loadRecord(record);
			}
		},
		rowdeselect:function(sm,row,record){
			if(frm.getForm().isDirty()){
				record.beginEdit();
				frm.getForm().updateRecord(record);
				record.endEdit();
			}
		}
	};
	var soc=new Ext.grid.CheckColumn({header:C_SOC,dataIndex:'rablSocFlag',width:55});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_RABL_NO,dataIndex:'rablNo'},
	{header:C_CONT_NO,dataIndex:'rablContainerNo',width:40},
	{header:C_PACKAGES,dataIndex:'rablPackages'},
	{header:C_GW,dataIndex:'rablGrossWeight'},
	{header:C_TRAN_DATE,dataIndex:'rablEtd',renderer:formatDate},
	soc],defaults:{sortable:true,width:80}});
	
	this.grid = new Ext.grid.GridPanel({title:C_RABL_LIST,region:'north',plugins:[soc],
		height:150,store:this.store,sm:sm,cm:cm});
	this.addRecord = function(){
		var r = new FRailwayBl({id:GGUID(),rablId:'0',consId:p.get('consId'),
			consNo:p.get('consNo'),custId:p.get('custId'),custName:p.get('custName')});
		this.store.insert(0,r);
		r.set('rowAction','N');
		this.grid.getSelectionModel().selectFirstRow();
	};
	this.removeRecord = function(){
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
			b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
			this.store.remove(b);
		}
		else 
			XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.save = function(){
		this.grid.stopEditing();
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
			b.beginEdit();
			frm.getForm().updateRecord(b);
			b.endEdit();
		};
		var xml='';
		var a =this.store.getModifiedRecords();
		if(a.length>0){
			xml = ATX(a,'FRailwayBl',FRailwayBl);
		}			
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'RABL_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FRailwayBl',FRailwayBl);
				FOSU(this.store,a,FRailwayBl);
				XMG.alert(SYS,M_S);
			},
			failure: function(res){
				XMG.alert(SYS,M_F+res.responseText);
			},
			xmlData:FOSX(xml)});
		}
	};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_RABL;
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nrs',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_RABL_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addRecord();break;
					case Ext.EventObject.R:
						if(!NR(m+F_R)) this.removeRecord();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	
	this.getVendorId=function(){
    	return '';
    };
	this.getVendorName=function(){
		return '';
	};
	var expPanel = new Fos.SectionExGrid(p,'RABL',this);

	var frm = new Ext.FormPanel({title:C_RABL_INFO,labelAlign:'right',labelWidth:80,border:true,
		trackResetOnLoad:true,autoScroll:true,
		items:[{layout:'column',title:C_BASE_INFO,layoutConfig: {columns:4},padding:5,collapsible:true,
			items: [
			{columnWidth:.25,layout:'form',border : false,items:[
 				{fieldLabel:C_RABL_NO,name:'rablNo',tabIndex:1,xtype:'textfield',anchor:'99%'},
                 {fieldLabel:C_CONT_NO,name:'rablContainerNo',tabIndex:5,xtype:'textfield',anchor:'99%'},
 				{fieldLabel:C_SEAL_NO+'1',name:'rablSealNo',tabIndex:9,xtype:'textfield',anchor:'99%'},
 				{fieldLabel:C_PACKAGES,name:'rablPackages',tabIndex:13,xtype:'numberfield',anchor:'99%'},
 				{fieldLabel:C_CONT_WEIGHT,name:'rablContainerWeight',tabIndex:17,xtype:'numberfield',anchor:'99%'},
 				{fieldLabel:C_CONT_BACK_PLACE,name:'rablReturnPlace',tabIndex:21,xtype:'textfield',anchor:'99%'}
 				]},				
 			{columnWidth:.25,layout:'form',border : false,items:[
 				{fieldLabel:C_CONTRACT_NO,name:'rablContractNo',tabIndex:2,xtype:'textfield',anchor:'99%'},
 				{fieldLabel:C_COTY,name:'rablContainerType',tabIndex:6,xtype:'combo',displayField:'cotyCode',valueField:'cotyId',triggerAction:'all',
             		mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOTY_S(),anchor:'99%'},
                 {fieldLabel:C_SEAL_NO+'2',name:'rablSealNo2',tabIndex:10,xtype:'textfield',anchor:'99%'},
                 {fieldLabel:C_PACK,name:'packId',tabIndex:14,xtype:'combo',displayField:'packName',valueField:'packId',triggerAction:'all',
             		mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),anchor:'99%'},
             	{fieldLabel:C_INVOICE_PRICE,name:'rablInvoicePrice',tabIndex:18,xtype:'numberfield',anchor:'99%'}
                 ]},
 			{columnWidth:.25,layout:'form',border : false,items:[
             	{fieldLabel:C_TRAN_DATE,name:'rablEtd',tabIndex:3,xtype:'datefield',format:DATEF,anchor:'99%'},
                 {fieldLabel:C_CONT_NO_ORI,name:'rablContainerNoO',tabIndex:7,xtype:'textfield',anchor:'99%'},
                 {fieldLabel:C_HS_CODE,name:'rablHsCode',tabIndex:11,xtype:'textfield',anchor:'99%'},
                 {fieldLabel:C_CARGO_WEIGHT,name:'rablGrossWeight',tabIndex:15,xtype:'numberfield',anchor:'99%'},
                 {fieldLabel:C_CURR,tabIndex:19,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'}
                 ]},
 			{columnWidth:.25,layout:'form',border : false,items:[
                 {fieldLabel:C_BULK_FLAG,name:'rablBulkFlag',tabIndex:4,xtype:'checkbox',anchor:'50%'},
                  {fieldLabel:C_SOC_FLAG,name:'rablSocFlag',tabIndex:8,xtype:'checkbox',anchor:'50%'},
                  {fieldLabel:C_MARKS,name:'rablCargoMarks',tabIndex:12,xtype:'textfield',anchor:'99%'},
                  {fieldLabel:C_CBM,name:'rablMeasurement',tabIndex:16,xtype:'numberfield',anchor:'99%'},
                  {fieldLabel:C_CONT_AGENCY,name:'rablAgencyName',tabIndex:20,xtype:'textfield',anchor:'99%'}
                  ]}
 			]},
 			{layout:'column',title:C_SHIPPER_INFO,layoutConfig:{columns:3},padding:5,collapsible:true,labelAlign:'top',
 			items: [{columnWidth:.33,layout:'form',border : false,items:[
 				{fieldLabel:C_SHIPPER,name:'rablShipper',tabIndex:22,xtype:'textarea',anchor:'99%'},
                 {fieldLabel:C_SHIPPER_NOTES,name:'rablShipperNotes',tabIndex:25,xtype:'textarea',anchor:'99%'},
 				{fieldLabel:C_STATION_T,name:'rablStationT',tabIndex:28,xtype:'textarea',anchor:'99%'},
 				{fieldLabel:C_RA_CHARGE_REMARK,name:'rablChargeRemarks',tabIndex:31,xtype:'textarea',anchor:'99%'}
 				]},				
 			{columnWidth:.33,layout:'form',border : false,items:[
 				{fieldLabel:C_CONSIGNEE,name:'rablConsignee',tabIndex:23,xtype:'textarea',anchor:'99%'},
 				{fieldLabel:C_RA_NOTES,name:'rablRailwayNotes',tabIndex:26,xtype:'textarea',anchor:'99%'},
                 {fieldLabel:C_STATION_D,name:'rablStationD',tabIndex:29,xtype:'textarea',anchor:'99%'},
             	{fieldLabel:C_CARGO_NAME_EN,name:'rablCargoNameEn',tabIndex:32,xtype:'textarea',anchor:'99%'}
                 ]},
 			{columnWidth:.34,layout:'form',border : false,items:[
             	{fieldLabel:C_NOTIFIER,name:'rablNotifyParty',tabIndex:24,xtype:'textarea',anchor:'99%'},
                 {fieldLabel:C_DELIVERY_STATION,name:'rablDeliveryPlace',tabIndex:27,xtype:'textarea',anchor:'99%'},
                 {fieldLabel:C_CONT_DESC,name:'rablContainerDesc',tabIndex:30,xtype:'textarea',anchor:'99%'},
                 {fieldLabel:C_CARGO_NAME_CN,name:'rablCargoNameCn',tabIndex:33,xtype:'textarea',anchor:'99%'}
             ]}
       ]} 
	]});
	
	Fos.RailwayBlTab.superclass.constructor.call(this, { 
	id:'T_RABL_'+p.get('id'),title:C_RABL+'(F12)',layout:'border',	
		tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addRecord},'-',
			{text:C_REMOVE+'(R)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeRecord},'-',
			{text:C_SAVE+'(S)',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save}],
		items:[this.grid,
	        {xtype:'tabpanel',activeTab:0,region:'center',items:[frm,expPanel]}
		]
	});
};
Ext.extend(Fos.RailwayBlTab,Ext.Panel);

