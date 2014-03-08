
//仓储
Fos.WarehouseTab = function(p) {
	this.wareId=0;
	this.sel =GSEL;
	this.addKeyMap = function(){		
		var map = new Ext.KeyMap(this.el,[
			{key:'a',ctrl:true,fn:this.addWare,scope:this},
			{key:'d',ctrl:true,fn:this.removeWare,scope:this},
         	{key:'s',ctrl:true,fn:this.save,scope:this},
	 		{key:'e',ctrl:true,fn:function(){},scope:this}
	 		]);
    	map.stopEvent = true;
	};	
	this.store = GS('WARE_Q','FWarehouse',FWarehouse,'wareId','DESC','','','id',false);
	this.cargoStore = GS('WACA_Q','FWarehouseCargo',FWarehouseCargo,'wacaId','DESC','','','id',false);
    if(p.get('rowAction')!='N'){
    	this.store.load({params:{consId:p.get('consId')}});
    	this.cargoStore.load({params:{consId:p.get('consId')}});
	}
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('wareId')){
				this.sel=record.get('wareId');
				this.getForm().reset();
				this.getForm().loadRecord(record);
				sumPK.setValue(record.get('wareTotalPackages'));
				sumGW.setValue(record.get('wareTotalGrossWeight'));
				sumMM.setValue(record.get('wareTotalMeasurement'));
				var s = this.cargoGrid.getStore();s.removeAll();
				var a = this.cargoStore.getRange();
				for(var i=0;i<a.length;i++){if(a[i].get('wareId')==this.sel) s.add(a[i]);}
			}},
		rowdeselect:function(sm,row,record){
			if(this.getForm().isDirty()){
				record.beginEdit();this.getForm().updateRecord(record);record.endEdit();
			}			
		}
	};
	var sumPK = new Ext.form.TextField({name:'tranTotalPackages',disabled:true});
	var sumGW = new Ext.form.TextField({name:'tranTotalGrossWeight',disabled:true});
	var sumMM = new Ext.form.TextField({name:'tranTotalMeasurement',disabled:true});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_WARE_NO,dataIndex:'wareNo',width:100},
	{header:C_WARE_TYPE,dataIndex:'wareType',renderer:getWATY,width:150},
	{header:C_WARE_DATE,dataIndex:'wareDate',renderer:formatDate,width:100},
	{header:C_WAREHOUSE,dataIndex:'wareVendorName',width:100},
	{header:C_WARE_ACCEPT_STATUS,dataIndex:'wareAcceptStatus',renderer:getWAST,width:100},
	{header:C_WARE_ACCEPT_TIME,dataIndex:'wareAcceptDate',renderer:formatDate,width:100}],defaults:{sortable:true,width:100}});
	this.wareGrid = new Ext.grid.GridPanel({header:false,border:true,height:150,viewConfig:{forceFit:true},autoScroll:true,
		store:this.store,sm:sm,cm:cm});	
	
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_MARKS,dataIndex:'wacaCargoMarks',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CATY,dataIndex:'wacaCargoName',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_PACKAGES,dataIndex:'wacaPackagesNum',width:80,editor:new Ext.form.NumberField({allowBlank:false,allowDecimals:false,blankText:'',invalidText:''})},	
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.cargoGrid.getSelectionModel().getSelected().set('packName',r.get('packName'));}}})},
	{header:C_GW,dataIndex:'wacaGrossWeight',width:80,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NW,dataIndex:'wacaNetWeight',width:80,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},	
	{header:C_CBM,dataIndex:'wacaMeasurement',width:80,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})}
	],defaults:{sortable:true,width:100}});
	this.cargoGrid = new Ext.grid.EditorGridPanel({title:C_CARGO_LIST,border:false,height:200,autoScroll:true,sm:sm2,cm:cm2,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'wacaId',record:'FWarehouseCargo'},FWarehouseCargo),sortInfo:{field:'wacaId',direction:'ASC'}}),
		listeners:{scope:this,afteredit:function(e){
    		var f=e.field;
    		if(f=='wacaPackagesNum'||f=='wacaGrossWeight'||f=='wacaMeasurement'){
    			this.reCalculate();
    		}
    	}},
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:function(){
			var r = this.wareGrid.getSelectionModel().getSelected();
			if(r){				
				var win = new Fos.CargoLookupWin('CARG_Q',p.get('consId'));
				win.addButton({text:C_OK,scope:this,handler:function(){
					var g = win.findById('G_CARG_LOOKUP');
					var a = g.getSelectionModel().getSelections();
					if(a){
						for(var i=0;i<a.length;i++){
							if(this.cargoGrid.getStore().findBy(function(rec,id){return rec.get('cargId')==a[i].get('cargId');})==-1){
								var rid=GGUID();
								var t = new FWarehouseCargo({id:rid,wacaId:rid,wareId:r.get('wareId'),consId:r.get('consId'),
									cargId:a[i].get('cargId'),wacaCargoName:a[i].get('cargNameEn'),wacaCargoMarks:a[i].get('cargMarks'),
									packId:a[i].get('packId'),packName:getPACK(a[i].get('packId')),wacaPackagesNum:a[i].get('cargPackageNum'),
									wacaGrossWeight:a[i].get('cargGrossWeight'),wacaNetWeight:a[i].get('cargNetWeight'),
									wacaMeasurement:a[i].get('cargMeasurement'),
									trcaRemarks:'',verson:0});
								this.cargoStore.add(t);t.set('rowAction','N');
								this.cargoGrid.getStore().add(t);
							}
						}
    					this.reCalculate();
					}
					win.close();
				}},this);
				win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
				win.show();
			}
			else XMG.alert(SYS,M_NO_DATA_SELECTED);
			}},'-',
			{text:C_REMOVE,iconCls:'remove',scope:this,handler:function(){
				var r = this.cargoGrid.getSelectionModel().getSelections();
				if(r){for(var i=0;i<r.length;i++){r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
				this.cargoGrid.getStore().remove(r[i]);this.reCalculate();}
			}}
		},'->',
		{xtype:'tbtext',text:C_SUM_PACK},sumPK,'-',
		{xtype:'tbtext',text:C_SUM_GW},sumGW,'-',
		{xtype:'tbtext',text:C_SUM_CBM},sumMM
		]
	});
	this.reCalculate=function(){
		var sumP=0,sumG=0,sumM=0;
		var a=this.cargoStore.getRange();		
		for(var i=0;i<a.length;i++){
			if(a[i].get('wacaPackagesNum')>0) sumP=sumP+a[i].get('wacaPackagesNum');
			if(a[i].get('wacaGrossWeight')>0) sumG=sumG+a[i].get('wacaGrossWeight');
			if(a[i].get('wacaMeasurement')>0) sumM=sumM+a[i].get('wacaMeasurement');
		}
		sumPK.setValue(round2(sumP));
		sumGW.setValue(round2(sumG));
		sumMM.setValue(round2(sumM));
		var b =this.wareGrid.getSelectionModel().getSelected();
		b.set('wareTotalPackages',sumP);
		b.set('wareTotalGrossWeight',sumP);
		b.set('wareTotalMeasurement',sumP);
	};
	this.addWare = function(){
		this.wareId=this.wareId-1;
		var b = new FWarehouse({id:this.wareId,wareId:this.wareId,
					consId:p.get('consId'),consNo:p.get('consNo'),
					wareVessel:p.get('vessName'),wareVoyage:p.get('voyaName'),
					wareMblNo:p.get('consMblNo'),
					wareVendorId:p.get('consWarehouse'),wareVendorName:p.get('consWarehouseName'),
					wareVendorContact:p.get('consWarehouseContact'),wareVendorTel:p.get('consWarehouseTel'),wareVendorFax:p.get('consWarehouseFax'),
					wareCustomerContact:p.get('custContact'),wareCustomerTel:p.get('custTel'),wareCustomerFax:p.get('custFax'),
					wareOperator:'',wareOperatorTel:getCFG('COMPANY_TEL'),wareOperatorFax:getCFG('COMPANY_FAX'),
					wareType:'I',wareDate:new Date(),
					wareBookDate:new Date(),wareAcceptDate:new Date(),
					wareTransVendor:p.get('consTrackVendor'),wareTransVendorName:p.get('consTrackVendorName'),wareLoadFlag:0,
					wareTrackNo:'',wareContainerNo:p.get('consContainerNo'),wareRemarks:p.get('consWarehouseRemarks'),
					wareAcceptStatus:0,version:0});
		this.store.insert(0,b);b.set('rowAction','N');
		this.resel=true;
		this.wareGrid.getSelectionModel().selectFirstRow();
	};
	this.removeWare = function(){
		var b =this.wareGrid.getSelectionModel().getSelected();
		if(b){
	    	if(b.get('wareAcceptStatus')!=0) XMG.alert(SYS,M_WARE_CONFIRMED);
	    	else{
	    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
	    		this.store.remove(b);
	    		this.getForm().reset();
	    		var s = this.cargoGrid.getStore();
				var a = s.getRange();
				for(var i=0;i<a.length;i++){
					a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
					this.cargoStore.remove(a[i]);s.remove(a[i]);
				}
	    	}
    	}
		else XMG.alert(SYS,M_R_P);
	};
	this.save = function(){
		this.wareGrid.stopEditing();
		this.cargoGrid.stopEditing();
		var b =this.wareGrid.getSelectionModel().getSelected();
		if(b){
			b.beginEdit();
			this.getForm().updateRecord(b);
			b.endEdit();
		};
		var xml='';
		var a =this.store.getModifiedRecords();
		if(a.length>0){xml = ATX(a,'FWarehouse',FWarehouse);};		
		var cc=[];
		var ca =this.cargoStore.getRange();
		for(var i=0;i<ca.length;i++){
			if(ca[i].dirty) cc[cc.length]=ca[i];
		}
		if(cc.length>0){var x = ATX(cc,'FWarehouseCargo',FWarehouseCargo);xml=xml+x;};
		
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'WARE_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FWarehouse',FWarehouse);
				FOSU(this.store,a,FWarehouse);
				
				var wn = Ext.getCmp('WG_WARE_NO');
				if(wn){
					var b =this.wareGrid.getSelectionModel().getSelected();
					if(b){
						wn.setValue(b.get('wareNo'));
					}
				}
				
				var b = XTRA(res.responseXML,'FWarehouseCargo',FWarehouseCargo);
				FOSU(this.cargoStore,b,FWarehouseCargo);
				XMG.alert(SYS,M_S);
			},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
	};
	this.expExcel=function(){
    	var b =this.wareGrid.getSelectionModel().getSelected();
    	if(b) EXPC('WARE','&wareId='+b.get('wareId'));
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.expEmail=function(){		
		var b =this.wareGrid.getSelectionModel().getSelected();
		if(b){
			var to='';
			var cc='';
			var sub='';
			var msg='';
			EXPM(to,cc,sub,msg,'WARE','wareId='+b.get('wareId'));
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	var updateStatus=function(s){
		var b =this.wareGrid.getSelectionModel().getSelected();
		if(b)
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'WARE_U',wareId:b.get('wareId'),wareStatus:s},
			success: function(r){b.set('wareStatus',s);this.updateToolbar();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
		});
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.start=function(){updateStatus('1');};
	this.end=function(){updateStatus('2');};
	
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_WARE;
	this.updateToolbar=function(){
    	var b = this.wareGrid.getSelectionModel().getSelected();
    	var tb= this.getTopToolbar();
    	var s=b.get('wareStatus');
    	if(b){
	    	tb.getComponent('TB_A').setDisabled(NR(m+F_M));
    		tb.getComponent('TB_B').setDisabled(NR(m+F_R)||s!='0');
    		tb.getComponent('TB_C').setDisabled(NR(m+F_M));
		}
    };
	var menu=CREATE_E_MENU(C_WARE_BILL,this.expExcel,this.expEmail,function(){},this);
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nrse',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_WARE_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addWare();break;
					case Ext.EventObject.R:
						if(!NR(m+F_R)) this.removeWare();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					case Ext.EventObject.E:
						if(!NR(m+F_M)) this.expExcel();break;			
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	
	 this.getVendorId=function(){
	    	var b =this.cargoGrid.getSelectionModel().getSelected();
	    	if(b&&b.get('wareVendorId'))
	    		return b.get('wareVendorId');
	    	else if(this.store.getRange().length>0){
	    		var a = this.store.getRange();
	    		return a[0].get('wareVendorId');
	    	}
	    	else
	    		return p.get('consWarehouse');
	    };
    this.getVendorName=function(){
    	var b =this.cargoGrid.getSelectionModel().getSelected();
    	if(b&&b.get('wareVendorName'))
    		return b.get('wareVendorName');
    	else if(this.store.getRange().length>0){
    		var a = this.store.getRange();
    		return a[0].get('wareVendorName');
    	}
    	else
    		return p.get('consWarehouseName');
    };
    var expPanel = new Fos.SectionExGrid(p,'WARE',this);
	    
	Fos.WarehouseTab.superclass.constructor.call(this,{id:'T_WARE_'+p.get('id'),title:C_SR_WARE+'(F5)',header:false,deferredRender:false,autoScroll:true,	
		labelAlign:'right',labelWidth:90,bodyStyle:'padding:0px 0px 0px',border:true,layout:'border',
	tbar:[{text:C_ADD+'(N)',itemId:'TB_A',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addWare},'-',
			{text:C_REMOVE+'(R)',itemId:'TB_B',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeWare},'-',
			{text:C_SAVE+'(S)',itemId:'TB_C',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save},'-',
			{text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(m+F_E),scope:this,menu:{items:[menu]}}
		],
	items: [{layout:'fit',region:'north',title:C_WARE_LIST,border:false,height:200,collapsible:true,items:[this.wareGrid]},
			{xtype:'tabpanel',region:'center',plain:true,activeTab:0,defaults:{bodyStyle:'padding:0px'},
          		listeners:{scope:this,tabchange:function(m,a){a.doLayout();}},
            	items:[
            {layout:'column',title:C_WARE_INFO,tabIndex:1,layoutConfig:{columns:4},deferredRender:false,collapsible:true,
			items:[{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_WARE_NO,id:'WG_WARE_NO',name:'wareNo',disabled:true,
					tabIndex:5,xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_WAREHOUSE,name:'wareVendorName',tabIndex:9,
					store:getCS(),enableKeyEvents:true,
					tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
					xtype:'combo',displayField:'custCode',valueField:'custCode',
					typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
					listeners:{scope:this,
					blur:function(f){
						if(f.getRawValue()==''){
							f.clearValue();
							var b =this.wareGrid.getSelectionModel().getSelected();
							if(b){
								b.set('wareVendorId','');
								b.set('wareVendorName','');
							}
						}
					},
					select:function(c,r,i){
						this.find('name','wareVendorContact')[0].setValue(r.get('custContact'));
						this.find('name','wareVendorTel')[0].setValue(r.get('custTel'));
						this.find('name','wareVendorFax')[0].setValue(r.get('custFax'));
						var b =this.wareGrid.getSelectionModel().getSelected();
						if(b){
							b.set('wareVendorId',r.get('custId'));
							b.set('wareVendorName',r.get('custNameCn'));
							b.set('wareVendorContact',r.get('custContact'));
							b.set('wareVendorTel',r.get('custTel'));
							c.setValue(r.get('custNameCn'));
						}
					},
					keydown:{fn:function(f,e){LC(f,e,'custWarehouseFlag');},buffer:BF}}},
				{fieldLabel:C_WARE_ACCEPT_STATUS,name:'wareAcceptStatus',tabIndex:17,store:WAST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'},
				{fieldLabel:C_WARE_ACCEPT_TIME,name:'wareAcceptDate',tabIndex:14,xtype:'datefield',format:DATEF,anchor:'99%'},
				{fieldLabel:C_VESS,hidden:p.get('consBizType')==BT_A,name:'wareVessel',tabIndex:5,xtype:'textfield',anchor:'99%'}]},
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_WARE_TYPE,name:'wareType',tabIndex:2,xtype:'textfield',store:WATY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'},
				{fieldLabel:C_WARE_CONTACT,name:'wareVendorContact',tabIndex:6,xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_CUST_CONTACT,name:'wareCustomerContact',tabIndex:10,xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_WARE_OPERATOR,name:'wareOperator',tabIndex:13,store:getUSER_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'},
				{fieldLabel:p.get('consBizType')==BT_A?C_FLIGHT:C_VOYA,name:'wareVoyage',tabIndex:5,xtype:'textfield',anchor:'99%'}]},				
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_WARE_DATE,name:'wareDate',tabIndex:3,xtype:'datefield',format:DATEF,anchor:'99%'},
				{fieldLabel:C_WARE_TEL,name:'wareVendorTel',tabIndex:7,xtype:'textfield',anchor:'99%'},				
				{fieldLabel:C_CUST_TEL,name:'wareCustomerTel',tabIndex:11,xtype:'textfield',anchor:'99%'},				
				{fieldLabel:C_WARE_OPERATOR_TEL,name:'wareOperatorTel',tabIndex:11,xtype:'textfield',anchor:'99%'},	
				{fieldLabel:C_BL_NO,name:'wareMblNo',tabIndex:5,xtype:'textfield',anchor:'99%'}]},				
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_WARE_BOOK_DATE,name:'wareBookDate',tabIndex:4,xtype:'datefield',format:DATEF,anchor:'99%'},
				{fieldLabel:C_WARE_FAX,name:'wareVendorFax',tabIndex:8,xtype:'textfield',anchor:'99%'},				
				{fieldLabel:C_CUST_FAX,name:'wareCustomerFax',tabIndex:12,xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_WARE_OPERATOR_FAX,name:'wareOperatorFax',tabIndex:16,xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_WARE_LOAD_FLAG,name:'wareLoadFlag',tabIndex:20,xtype:'checkbox',anchor:'60%'}]},
          {columnWidth:.5,layout:'form',border : false,items:[
				{fieldLabel:C_TRACK_VENDOR,name:'wareTransVendorName',tabIndex:17,store:getCS(),enableKeyEvents:true,
					tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
					listeners:{scope:this,
					blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('wareTransVendor','');p.set('wareTransVendorName','');}},
					select:function(c,r,i){
						var b =this.wareGrid.getSelectionModel().getSelected();
						if(b){b.set('wareTransVendor',r.get('custId'));}
					},
					keydown:{fn:function(f,e){LC(f,e,'custTrackFlag');},buffer:BF}}}]},
		  {columnWidth:.5,layout:'form',border : false,items:[
				{fieldLabel:C_TRACK_NO,name:'wareTrackNo',tabIndex:18,xtype:'textfield',anchor:'99%'}]},				
           {columnWidth:.5,layout:'form',border : false,items:[
				{fieldLabel:C_CONT_NO,name:'wareContainerNo',tabIndex:19,xtype:'textarea',anchor:'99%'}]},
			{columnWidth:.5,layout:'form',border : false,items:[
				{fieldLabel:C_REMARKS,name:'wareRemarks',tabIndex:20,xtype:'textarea',anchor:'99%'}]}
            ]},           
			this.cargoGrid,expPanel
			]}
		]
	});
};
Ext.extend(Fos.WarehouseTab, Ext.FormPanel);
