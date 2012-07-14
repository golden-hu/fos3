//陆运
Fos.TransTab = function(p) {
	this.tranId=0;
	this.sel =GSEL;
	var sumPK = new Ext.form.TextField({name:'tranTotalPackages',disabled:true});
	var sumGW = new Ext.form.TextField({name:'tranTotalGrossWeight',disabled:true});
	var sumMM = new Ext.form.TextField({name:'tranTotalMeasurement',disabled:true});	
	this.addKeyMap = function(){
		var map = new Ext.KeyMap(this.el,[
			{key:'a',ctrl:true,fn:function(){this.addTrans();},scope:this},
			{key:'d',ctrl:true,fn:function(){this.removeTrans();},scope:this},
         	{key:'s',ctrl:true,fn:function(){this.save();},scope:this},
	 		{key:'e',ctrl:true,fn:function(){},scope:this}
	 		]);
    	map.stopEvent = true;
	};
	this.store = GS('TRAN_Q','FTrans',FTrans,'tranId','DESC','','','id',false);
	this.taskStore = GS('TRTA_Q','FTransTask',FTransTask,'trtaId','DESC','','','id',false);	
	this.cargoStore = GS('TRCA_Q','FTransCargo',FTransCargo,'trcaId','DESC','','','id',false);
	if(p.get('rowAction')!='N'){
		this.store.load({params:{consId:p.get('consId')}});	
		this.taskStore.load({params:{consId:p.get('consId')}});	
		this.cargoStore.load({params:{consId:p.get('consId')}});
	};
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('tranId')){
				this.sel=record.get('tranId');
				this.getForm().reset();
				this.getForm().loadRecord(record);
				sumPK.setValue(record.get('tranTotalPackages'));
				sumGW.setValue(record.get('tranTotalGrossWeight'));
				sumMM.setValue(record.get('tranTotalMeasurement'));				
				var a = this.taskStore.getRange();
				var ts = this.taskGrid.getStore();
				ts.removeAll();
				for(var i=0;i<a.length;i++){if(a[i].get('tranId')==this.sel) ts.add(a[i]);}				
				var ca = this.cargoStore.getRange();
				var cs = this.cargoGrid.getStore();
				cs.removeAll();
				for(var i=0;i<ca.length;i++){if(ca[i].get('tranId')==this.sel) cs.add(ca[i]);}
			}},
		rowdeselect:function(s,row,r){if(this.getForm().isDirty()){r.beginEdit();this.getForm().updateRecord(r);r.endEdit();}}
	};		
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_TRAN_NO,dataIndex:'tranNo',width:100},
	{header:C_CONTRACT_NO,dataIndex:'tranContractNo',width:150},
	{header:C_DATE,dataIndex:'tranDate',renderer:formatDate,width:100},
	{header:C_TRACK_VENDOR,dataIndex:'tranVendorName',width:100},
	{header:C_TRAN_CONTACT,dataIndex:'tranVendorContact',width:100},
	{header:C_TRAN_TEL,dataIndex:'tranVendorTel',width:100},
	{header:C_STATUS,dataIndex:'tranStatus',renderer:getTRST,width:100}],defaults:{sortable:true,width:100}});
	this.tranGrid = new Ext.grid.GridPanel({header:false,border:true,height:150,
		viewConfig:{forceFit:true},autoScroll:true,store:this.store,sm:sm,cm:cm});
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_COTY,dataIndex:'cotyId',width:100,renderer:getCOTY,
			editor:new Ext.form.ComboBox({displayField:'cotyCode',valueField:'cotyId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOTY_S()})},
	{header:C_CONT_NO,dataIndex:'trtaContainerNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_SEAL_NO,dataIndex:'trtaSealNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},	
	{header:C_ARRIVE_TIME_D,dataIndex:'trtaArriveTimeDemand',width:80,renderer:formatDateTime,editor:new Ext.form.DateField({format:'Y-m-d H:i'})},
	{header:C_ARRIVE_TIME_F,dataIndex:'trtaArriveTime',width:80,renderer:formatDateTime,editor:new Ext.form.DateField({format:'Y-m-d H:i'})},
	{header:C_LOAD_TIME,dataIndex:'trtaLoadTime',width:80,renderer:formatDateTime,editor:new Ext.form.DateField({format:'Y-m-d H:i'})},
	{header:C_LEAVE_TIME,dataIndex:'trtaLeaveTime',width:80,renderer:formatDateTime,editor:new Ext.form.DateField({format:'Y-m-d H:i'})},
	{header:C_BACK_TIME,dataIndex:'trtaBackTime',width:80,renderer:formatDateTime,editor:new Ext.form.DateField({format:'Y-m-d H:i'})},
	{header:C_DRIVER,dataIndex:'trtaDriver',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_DRIVER_TEL,dataIndex:'trtaDriverTel',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_TRACK_NO,dataIndex:'trtaTrackNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_REMARKS,dataIndex:'trtaRemarks',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})}
	],defaults:{sortable:true,width:100}});
	this.taskGrid = new Ext.grid.EditorGridPanel({title:C_TASK_LIST,border:true,height:150,autoScroll:true,sm:sm2,cm:cm2,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'trtaId',record:'FTransTask'},FTransTask),pruneModifiedRecords:true,sortInfo:{field:'trtaId', direction:'ASC'}}),
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:function(){
				var r = this.tranGrid.getSelectionModel().getSelected();
				if(r){
					var rid=GGUID();
					var t = new FTransTask({id:rid,trtaId:rid,tranId:r.get('tranId'),consId:r.get('consId'),cotyId:'',					
					trtaContainerNo:'',trtaSealNo:'',trtaArriveTimeDemand:'',trtaArriveTime:'',
					trtaLoadTime:'',trtaLeaveTime:'',trtaBackTime:'',trtaDriver:'',trtaDriverTel:'',				
					trtaTrackNo:'',trtaRemarks:'',version:0}); 
					this.taskStore.add(t);
					t.set('rowAction','N');
					this.taskGrid.getStore().insert(0,t);
					this.taskGrid.startEditing(0,1);
				}
				else XMG.alert(SYS,M_NO_DATA_SELECTED);
			}},'-',
			{text:C_REMOVE,iconCls:'remove',scope:this,handler:function(){FOS_REMOVE(sm2,this.taskGrid.getStore());}}
		]});
	
	var sm3=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm3=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_MBL_NO,dataIndex:'consMblNo',width:100,editor:new Ext.form.TextField({})},                                         
	{header:C_CATY,dataIndex:'trcaCargoName',width:80,editor:new Ext.form.TextField({})},
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.cargoGrid.getSelectionModel().getSelected().set('packName',r.get('packName'));}}})},
	{header:C_PACKAGES,dataIndex:'trcaPackageNum',width:60,editor:new Ext.form.NumberField({allowBlank:false})},
	{header:C_GW,dataIndex:'trcaGrossWeight',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},	
	{header:C_SIZE,dataIndex:'trcaMeasurement',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_REMARKS,dataIndex:'trcaRemarks',width:100,editor:new Ext.form.TextField()}
	],defaults:{sortable:true,width:100}});
	this.cargoGrid = new Ext.grid.EditorGridPanel({title:C_CARGO_LIST,border:true,autoScroll:true,sm:sm3,cm:cm3,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'trcaId',record:'FTransCargo'},FTransTask),pruneModifiedRecords:true,sortInfo:{field:'trcaId', direction:'ASC'}}),
		listeners:{scope:this,afteredit:function(e){var f=e.field;
    		if(f=='trcaPackageNum'||f=='trcaGrossWeight'||f=='trcaMeasurement'){this.reCalculate();}
    	}},
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:function(){
				var r = this.tranGrid.getSelectionModel().getSelected();
				if(r){
					var win = new Fos.CargoLookupWin('CARG_Q',p.get('consId'));
					win.addButton({text:C_OK,scope:this,handler:function(){
						var g = win.findById('G_CARG_LOOKUP');
						var a = g.getSelectionModel().getSelections();
						if(a){
							for(var i=0;i<a.length;i++){
								if(this.cargoGrid.getStore().findBy(function(rec,id){return rec.get('cargId')==a[i].get('cargId');})==-1){
									var t = new FTransCargo({id:GGUID(),trcaId:'0',tranId:r.get('tranId'),consId:r.get('consId'),
										cargId:a[i].get('cargId'),trcaCargoName:a[i].get('cargNameEn'),
										packId:a[i].get('packId'),packName:getPACK(a[i].get('packId')),trcaPackageNum:a[i].get('cargPackageNum'),
										trcaGrossWeight:a[i].get('cargGrossWeight'),trcaMeasurement:a[i].get('cargMeasurement'),
										trcaRemarks:'',verson:0});
									this.cargoStore.add(t);t.set('rowAction','N');
									this.cargoGrid.getStore().add(t);
								}
							};
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
				if(r.length){
					for(var i=0;i<r.length;i++){
						r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
						this.cargoGrid.getStore().remove(r[i]);this.reCalculate();
					}
				}
				else XMG.alert(SYS,M_R_P);
			}},'->',
			{xtype:'tbtext',text:C_SUM_PACK},sumPK,'-',
			{xtype:'tbtext',text:C_SUM_GW},sumGW,'-',
			{xtype:'tbtext',text:C_SUM_CBM},sumMM
		]
	});
	
	this.reCalculate=function(){
		var sumP=0;var sumG=0;var sumM=0;
		var a=this.cargoGrid.getStore().getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get('trcaPackageNum')>0) sumP+=parseInt(a[i].get('trcaPackageNum'));
			if(a[i].get('trcaGrossWeight')>0)sumG+=parseFloat(a[i].get('trcaGrossWeight'));
			if(a[i].get('trcaMeasurement')>0)sumM+=parseFloat(a[i].get('trcaMeasurement'));
		}
		sumPK.setValue(sumP);
		sumGW.setValue(sumG);
		sumMM.setValue(sumM);
		var b =this.tranGrid.getSelectionModel().getSelected();
		b.beginEdit();
		b.set('tranTotalPackages',sumP);
		b.set('tranTotalGrossWeight',sumG);
		b.set('tranTotalMeasurement',sumM);
		b.endEdit();
	};
	
	this.addTrans = function(){
		this.tranId=this.tranId-1;
		var b = new FTrans({id:this.tranId,tranId:this.tranId,consId:p.get('consId'),consNo:p.get('consNo'),
			tranDate:new Date(),tranExpiryDate:p.get('consExpiryDate'),
			tranVendorId:p.get('consTrackVendor'),tranVendorName:p.get('consTrackVendorName'),
			tranVendorContact:p.get('consTrackContact'),tranVendorTel:p.get('consTrackTel'),
			tranLoadDate:p.get('consTrackLoadDate'),tranLoadAddress:p.get('consTrackLoadAddress'),
			tranContainerCompany:p.get('consContainerCompany'),tranRemarks:p.get('consTrackRemarks'),
			tranLoadContact:p.get('custContact'),tranLoadTel:p.get('custTel'),
			tranContainerNo:p.get('consTotalContainers'),tranVessel:p.get('vessName'),
			tranVoyage:p.get('voyaName'),tranSoNo:p.get('consSoNo'),
			consMblNo:p.get('consMblNo'),consHblNo:p.get('consHblNo'),
			tranPol:p.get('consPolEn'),tranStatus:'0',version:'0'});    
		this.store.insert(0,b);b.set('rowAction','N');
		this.tranGrid.getSelectionModel().selectFirstRow();
	};
	this.removeTrans = function(){
		var b =this.tranGrid.getSelectionModel().getSelected();
		if(b){
	    	if(b.get('tranStatus')!='0') XMG.alert(SYS,M_TRAN_CONFIRMED);
	    	else{
	    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
	    		this.store.remove(b);
	    		var ts = this.taskGrid.getStore();
				var a = ts.getRange();
				for(var i=0;i<a.length;i++){
					a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
					this.taskStore.remove(a[i]);ts.remove(a[i]);
				}
				var cs = this.cargoGrid.getStore();
				var ca = cs.getRange();
				for(var i=0;i<ca.length;i++){
					ca[i].set('rowAction',ca[i].get('rowAction')=='N'?'D':'R');
					this.cargoStore.remove(ca[i]);cs.remove(ca[i]);
				}
				this.getForm().reset();
	    	}
    	}
		else XMG.alert(SYS,M_R_P);
	};
	
	this.save = function(){
		this.taskGrid.stopEditing();
		this.cargoGrid.stopEditing();
		var b =this.tranGrid.getSelectionModel().getSelected();
		if(b){b.beginEdit();this.getForm().updateRecord(b);b.endEdit();};
		
		var xml = '';
		var a =this.store.getModifiedRecords();
		if(a.length>0){
			xml = ATX(a,'FTrans',FTrans);
		}
			
		var cc=[];
		var ca =this.taskStore.getRange();
		for(var i=0;i<ca.length;i++){
			if(ca[i].dirty) cc[cc.length]=ca[i];
		}
		
		if(cc.length>0){
			var x = ATX(cc,'FTransTask',FTransTask);
			xml=xml+x;
		};
		
		var dd=[];
		var da =this.cargoStore.getRange();
		for(var i=0;i<da.length;i++){
			if(da[i].dirty) 
				dd[dd.length]=da[i];
		}
		if(dd.length>0){
			var x = ATX(dd,'FTransCargo',FTransCargo);
			xml=xml+x;
		};
	
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TRAN_S'},
			success: function(r){
				var a = XTRA(r.responseXML,'FTrans',FTrans);FOSU(this.store,a,FTrans);
				var b = XTRA(r.responseXML,'FTransTask',FTransTask);FOSU(this.taskStore,b,FTransTask);
				var c = XTRA(r.responseXML,'FTransCargo',FTransCargo);FOSU(this.cargoStore,c,FTransCargo);
				XMG.alert(SYS,M_S);
			},
			failure:function(r){XMG.alert(SYS,M_F+r.responseText);},
			xmlData:FOSX(xml)});
		}
		else 
			XMG.alert(SYS,M_NC);
	};
		
	this.expExcelTR=function(){
    	var b =this.tranGrid.getSelectionModel().getSelected();
    	if(b) EXPC('TRAN','&tranId='+b.get('tranId'));
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.expEmailTR=function(){		
		var b =this.tranGrid.getSelectionModel().getSelected();
		if(b){
			var to='';
			var cc='';
			var sub='';
			var msg='';
			EXPM(to,cc,sub,msg,'TRAN','tranId='+b.get('tranId'));
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	
	this.updateStatus=function(s){
		var b =this.tranGrid.getSelectionModel().getSelected();
    	if(b){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'TRAN_U',tranId:b.get('tranId'),tranStatus:s},
			success: function(r){b.set('tranStatus',s);this.updateToolbar();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
		});}
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.start=function(){this.updateStatus('1');};
	this.end=function(){this.updateStatus('2');};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_TRAN;	
   
	var c1={fieldLabel:HL(C_TRACK_VENDOR),name:'tranVendorName',tabIndex:1,store:getCS(),enableKeyEvents:true,
			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',
			displayField:'custCode',valueField:'custCode',
			typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
			listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					var b =this.tranGrid.getSelectionModel().getSelected();
					if(b){
						b.set('tranVendorId','');
						b.set('tranVendorName','');
					}
				}
			},
			select:function(c,r,i){
				this.find('name','tranVendorContact')[0].setValue(r.get('custContact'));
				this.find('name','tranVendorTel')[0].setValue(r.get('custTel'));
				this.find('name','tranVendorFax')[0].setValue(r.get('custFax'));
				var b =this.tranGrid.getSelectionModel().getSelected();
				if(b){
					b.set('tranVendorId',r.get('custId'));
					b.set('tranVendorName',r.get('custNameCn'));
					b.set('tranVendorContact',r.get('custContact'));
					b.set('tranVendorTel',r.get('custTel'));
					c.setValue(r.get('custNameCn'));
				}
			},
			keydown:{fn:function(f,e){LC(f,e,'custTrackFlag');},buffer:BF}}};
	var txtLoadTime={fieldLabel:C_LOAD_TIME,name:'tranLoadTime',tabIndex:26,xtype:'timefield',increment:30,anchor:'99%'};
	var c4={fieldLabel:C_LOAD_PLACE,name:'tranLoadFactory',tabIndex:9,xtype:'siteLookup',
			custId:p.get('custId'),siteType:3,typeAhead:true,mode:'remote',triggerAction:'all',
        	selectOnFocus:true,anchor:'99%',listWidth:200,pageSize:30,
    		listeners:{scope:this,	    			
    			select:function(c,r,i){
    				this.find('name','tranLoadContact')[0].setValue(r.get('cusiContact'));
    				this.find('name','tranLoadTel')[0].setValue(r.get('cusiTel'));
    				this.find('name','tranLoadAddress')[0].setValue(r.get('cusiAddress'));
    			}}};
	var txtLoadAddress={fieldLabel:C_LOAD_ADDRESS,name:'tranLoadAddress',tabIndex:13,xtype:'textfield',anchor:'99%'};	
	var c7={fieldLabel:C_DRAW_CY,name:'tranCyDraw',tabIndex:25,xtype:'textfield',anchor:'99%'};	
	var c8={fieldLabel:C_TRAN_CONTACT,name:'tranVendorContact',tabIndex:2,xtype:'textfield',anchor:'99%'};
	var c9={fieldLabel:C_CONTRACT_NO,name:'tranContractNo',tabIndex:6,xtype:'textfield',anchor:'99%'};
	var c10={fieldLabel:C_LOAD_CONTACT,name:'tranLoadContact',tabIndex:10,xtype:'textfield',anchor:'99%'};	
	var c12={fieldLabel:C_OP_TYPE,name:'tranOperationType',tabIndex:17,store:TROT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	var c14={fieldLabel:C_DRAW_DATE,name:'tranDrawDate',tabIndex:26,xtype:'datefield',format:DATEF,anchor:'99%'};
	var c15={fieldLabel:C_TRAN_TEL,name:'tranVendorTel',tabIndex:3,xtype:'textfield',anchor:'99%'};
	var c16={fieldLabel:C_CONS_DATE,name:'tranDate',tabIndex:7,xtype:'datefield',format:DATEF,anchor:'99%'};
	var c17={fieldLabel:C_LOAD_TEL,name:'tranLoadTel',tabIndex:11,xtype:'textfield',anchor:'99%'};
	var c18={fieldLabel:C_CONTAINER,name:'tranContainerCompanyName',tabIndex:15,
			store:getCS(),enableKeyEvents:true,
			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
			xtype:'combo',displayField:'custCode',
			valueField:'custCode',typeAhead: true,mode:'local',
			triggerAction:'all',selectOnFocus:true,anchor:'99%',
			listeners:{scope:this,
				select:function(c,r,i){		
					var b =this.tranGrid.getSelectionModel().getSelected();
					if(b){
						b.set('tranContainerCompany',r.get('custId'));
						b.set('tranContainerCompanyName',r.get('custNameCn'));
						c.setValue(r.get('custNameCn'));
					}
				},
				keydown:{fn:function(f,e){LC(f,e,'custContainerFlag');},buffer:BF}}};
	var c19={fieldLabel:C_MILES,name:'tranHeavyMiles',tabIndex:27,xtype:'numberfield',anchor:'99%'};
	var c20={fieldLabel:p.get('consBizClass')==BC_E?C_POL:C_POD,tabIndex:23,name:'tranPol',xtype:'textfield',anchor:'99%'};
	var c21={fieldLabel:C_BACK_CY,name:'tranCyBack',tabIndex:27,xtype:'textfield',anchor:'99%'};	
	var c22={fieldLabel:C_TRAN_FAX,name:'tranVendorFax',tabIndex:4,xtype:'textfield',anchor:'99%'};
	var c23={fieldLabel:C_TRAN_DATE,name:'tranStartDate',tabIndex:26,xtype:'datefield',format:DATEF,anchor:'99%'};	
	var c25={fieldLabel:C_CONT_INFO,name:'tranContainerInfo',tabIndex:16,xtype:'textfield',allowDecimals:false,anchor:'99%'};
	var c26={fieldLabel:p.get('consBizClass')==BC_E?C_CUSTOM_EXPIRY_DATE:C_ETA,tabIndex:8,name:'tranExpiryDate',xtype:'datefield',format:DATEF,anchor:'99%'};
	var c28={fieldLabel:C_BACK_DATE,name:'tranBackDate',tabIndex:28,xtype:'datefield',format:DATEF,anchor:'99%'};	
	var txtDeliveryAddress={fieldLabel:C_DELIVERY_ADDRESS,name:'tranDeliveryAddress',
			tabIndex:14,xtype:'textfield',anchor:'99%'};
	var txtDeliveryContact={fieldLabel:C_DELIVERY_CONTACT,name:'tranDeliveryContact',
			tabIndex:24,xtype:'textfield',anchor:'99%'};
	var txtDeliveryTel={fieldLabel:C_DELIVERY_TEL,name:'tranDeliveryTel',
			tabIndex:24,xtype:'textfield',anchor:'99%'};
	var txtDeliveryDate={fieldLabel:C_DELIVERY_DATE,name:'tranDeliveryDate',
			tabIndex:24,xtype:'datefield',format:DATEF,anchor:'99%'};
	var txtDeliveryTime={fieldLabel:C_DELIVERY_TIME,name:'tranDeliveryTime',
			tabIndex:24,xtype:'timefield',increment: 30,anchor:'99%'};
	var txtDeliveryPlace={fieldLabel:C_DELIVERY_PLACE,name:'tranDeliveryPlace',tabIndex:24,xtype:'siteLookup',
			custId:p.get('custId'),siteType:2,typeAhead:true,mode:'remote',triggerAction:'all',
        	selectOnFocus:true,anchor:'99%',listWidth:200,pageSize:30,
    		listeners:{scope:this,	    			
    			select:function(c,r,i){
    				this.find('name','tranDeliveryContact')[0].setValue(r.get('cusiContact'));
    				this.find('name','tranDeliveryTel')[0].setValue(r.get('cusiTel'));
    				this.find('name','tranDeliveryAddress')[0].setValue(r.get('cusiAddress'));
    			}}};
	
	var t2={layout:'column',title:C_TRAN_INFO,layoutConfig:{columns:4},padding:5,collapsible:true,
			items:[
			{columnWidth:.25,layout:'form',border:false,items:
				p.get('consBizType')==BT_C?[c1,c9,c4,txtDeliveryPlace,txtDeliveryDate,c20,c7]:
					[c1,c9,c4,txtDeliveryPlace,txtDeliveryDate,c20]
			},
			{columnWidth:.25,layout:'form',border : false,labelWidth:90,items:
				p.get('consBizType')==BT_C?[c8,c16,c10,txtDeliveryAddress,txtDeliveryTime,c12,c14]:
					[c8,c16,c10,txtDeliveryAddress,txtDeliveryTime,c12]
			},
			{columnWidth:.25,layout:'form',border : false,items:
				p.get('consBizType')==BT_C?[c15,c23,c17,txtDeliveryContact,c19,c18,c21]:
					[c15,c23,c17,txtDeliveryContact,c19]
			},
			{columnWidth:.25,layout:'form',border : false,items:
				p.get('consBizType')==BT_C?[c22,txtLoadTime,txtLoadAddress,txtDeliveryTel,c26,c25,c28]:
					[c22,txtLoadTime,txtLoadAddress,txtDeliveryTel,c26]
			}
            ]};
    
	var txtComtomsBroker={fieldLabel:C_CUSTOM_AGENCY,name:'tranCustomsBrokerName',
			tabIndex:17,store:getCS(),enableKeyEvents:true,
			tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',
			displayField:'custCode',valueField:'custCode',typeAhead: true,
			mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',
			listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					var b =this.tranGrid.getSelectionModel().getSelected();
					if(b){
						b.set('tranCustomsBroker','');
						b.set('tranCustomsBrokerName','');
					}
				}
			},
			select:function(c,r,i){
				this.find('name','tranCustomsContact')[0].setValue(r.get('custContact'));
				this.find('name','tranCustomsTel')[0].setValue(r.get('custTel'));
				this.find('name','tranCustomsAddress')[0].setValue(r.get('custAddress'));
				var b =this.tranGrid.getSelectionModel().getSelected();
				if(b){
					b.set('tranCustomsBroker',r.get('custId'));
					b.set('tranCustomsBrokerName',r.get('custNameCn'));
					c.setValue(r.get('custNameCn'));
				}
			},
			keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}};
	var txtCustomsContact={fieldLabel:C_CUSTOMS_CONTACT,name:'tranCustomsContact',tabIndex:18,xtype:'textfield',anchor:'99%'};
	var txtCustomsAddress={fieldLabel:C_CUSTOMS_ADDRESS,tabIndex:20,name:'tranCustomsAddress',xtype:'textfield',anchor:'99%'};
	var txtCustomsTel={fieldLabel:C_CUSTOMS_TEL,name:'tranCustomsTel',tabIndex:19,xtype:'textfield',anchor:'99%'};
	
			
	var f5={fieldLabel:C_TRAN_TYPE,name:'tranType',tabIndex:17,store:TANT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	var f6={fieldLabel:C_PRE_FLAG,name:'tranPreFlag',tabIndex:19,xtype:'checkbox',anchor:'60%'};
	var f7={fieldLabel:C_VEHT,name:'tranVehicleType',tabIndex:17,store:getVEHT_S(),xtype:'combo',displayField:'vehtName',valueField:'vehtId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	var f8={fieldLabel:C_INSP_FLAG,name:'tranInspFlag',tabIndex:19,xtype:'checkbox',anchor:'60%'};
	var f9={fieldLabel:C_IC_FLAG,name:'tranIcFlag',tabIndex:19,xtype:'checkbox',anchor:'60%'};
	var f10={fieldLabel:C_REAL_FLAG,name:'tranRearFlag',tabIndex:19,xtype:'checkbox',anchor:'60%'};
	var f11={fieldLabel:C_IC_DAYS,tabIndex:20,name:'tranIcDays',xtype:'numberfield',anchor:'99%'};
	var f12={fieldLabel:C_CONT_FLAG,name:'tranContFlag',tabIndex:19,xtype:'checkbox',anchor:'60%'};
	
	var txtVessel={fieldLabel:C_VESS,name:'tranVessel',tabIndex:21,xtype:'textfield',anchor:'99%'};
	var txtVoyage={fieldLabel:p.get('consBizType')==BT_A?C_FLIGHT:C_VOYA,name:'tranVoyage',
			tabIndex:22,xtype:'textfield',anchor:'99%'};
	var txtMbl={fieldLabel:p.get('consBizType')==BT_A?'MAWB No.':C_MBL_NO,name:'consMblNo',
			tabIndex:24,xtype:'textfield',anchor:'99%'};
	var txtHbl={fieldLabel:p.get('consBizType')==BT_A?'HAWB No.':C_HBL_NO,name:'consHblNo',
			tabIndex:24,xtype:'textfield',anchor:'99%'};
	
	var t4={layout:'column',title:C_OTHER_INFO,layoutConfig:{columns:4},padding:5,collapsible:true,
			items:[
				{columnWidth:.25,layout:'form',border : false,
					items:p.get('consBizType')=='A'?[f5,f6,txtComtomsBroker]:[f5,f6,txtComtomsBroker,txtVessel]},
				{columnWidth:.25,layout:'form',border : false,items:[f7,f8,txtCustomsAddress,txtVoyage]},
				{columnWidth:.25,layout:'form',border : false,items:[f9,f10,txtCustomsContact,txtMbl]},
				{columnWidth:.25,layout:'form',border : false,items:[f11,f12,txtCustomsTel,txtHbl]}
			]};

	var menu=CREATE_E_MENU(C_TRANS_BILL,this.expExcelTR,this.expEmailTR,function(){},this);	
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nrskwe',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_TRAN_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addTrans();break;
					case Ext.EventObject.R:
						if(!NR(m+F_R)) this.removeTrans();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					case Ext.EventObject.K:
						if(!NR(m+F_M)) this.start();break;
					case Ext.EventObject.W:
						if(!NR(m+F_M)) this.end();break;
					case Ext.EventObject.E:
						if(!NR(m+F_M)) this.expExcelTR();break;					
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	this.updateToolbar=function(){
    	var b = this.tranGrid.getSelectionModel().getSelected();
    	var tb= this.getTopToolbar();
    	var s=b.get('tranStatus');
    	if(b){
	    	tb.getComponent('TB_A').setDisabled(NR(m+F_M));
    		tb.getComponent('TB_B').setDisabled(NR(m+F_R)||s!='0');
    		tb.getComponent('TB_C').setDisabled(NR(m+F_M)||s!='0');
    		tb.getComponent('TB_D').setDisabled(NR(m+F_M)||s!='0');
    		tb.getComponent('TB_E').setDisabled(NR(m+F_M)||s!=1);
		}
    };
    
    this.getVendorId=function(){
    	var b =this.tranGrid.getSelectionModel().getSelected();
    	if(b&&b.get('tranVendorId'))
    		return b.get('tranVendorId');
    	else if(this.store.getRange().length>0){
    		var a = this.store.getRange();
    		return a[0].get('tranVendorId');
    	}
    	else
    		return p.get('consTrackVendor');
    };
    this.getVendorName=function(){
    	var b =this.tranGrid.getSelectionModel().getSelected();
    	if(b&&b.get('tranVendorName'))
    		return b.get('tranVendorName');
    	else if(this.store.getRange().length>0){
    		var a = this.store.getRange();
    		return a[0].get('tranVendorName');
    	}
    	else
    		return p.get('consTrackVendorName');
    };
    var expPanel = new Fos.SectionExGrid(p,'TRAN',this);
    
	Fos.TransTab.superclass.constructor.call(this,{id:'T_TRAN_'+p.get('id'),title:C_SR_TRAN+'(F4)',header:false,autoScroll:true,	
		labelAlign:'right',labelWidth:90,border:true,layout:'border',
		tbar:[{text:C_ADD+'(N)',itemId:'TB_A',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addTrans},'-',
			{text:C_REMOVE+'(R)',itemId:'TB_B',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeTrans},'-',
			{text:C_SAVE+'(S)',itemId:'TB_C',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save},'-',
			{text:C_START+'(K)',itemId:'TB_D',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.start},'-',
			{text:C_END+'(W)',itemId:'TB_E',iconCls:'check',disabled:NR(m+F_M),scope:this,handler:this.end},'-',
			{text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(m+F_E),scope:this,
				menu: {items:[menu]}}
		  ],
	items:[{layout:'fit',region:'north',title:C_TRAN_LIST,border:false,height:150,collapsible:true,items:[this.tranGrid]},
		{xtype:'tabpanel',region:'center',plain:true,activeTab:0,defaults:{bodyStyle:'padding:0px'},autoScroll:true,
        	listeners:{scope:this,tabchange:function(m,a){a.doLayout();}},
        	items:[
            	{title:C_TRAN_INFO,tabIndex:1,autoScroll:true,items:[t2,t4]},
            	this.taskGrid,this.cargoGrid,expPanel]
   	}]});            		
};
Ext.extend(Fos.TransTab, Ext.FormPanel);

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

//装箱
Fos.ContainerTab = function(p) {
	this.sel =GSEL;
	this.store = GS('CONT_Q','FContainer',FContainer,'contId','DESC','','','id',false);
	this.cargoStore = GS('COCA_Q','FContainerCargo',FContainerCargo,'cocaId','DESC','','','id',false);
	if(p.get('rowAction')!='N'){
		this.store.load({params:{consId:p.get('consId'),contPreFlag:'N'},scope:this,callback:function(r,o,sc){if(sc){this.reCalculate();}}});
		this.cargoStore.load({params:{consId:p.get('consId')}});
	}
	var totalPackages = new Ext.form.TextField({width:80,disabled:true});
	var totalGrossWeight = new Ext.form.TextField({width:80,disabled:true});
	var totalMeasurement = new Ext.form.TextField({width:80,disabled:true});
	this.reCalculate = function(){
		var pkg=0;var gw=0;var me=0;
		var a=this.store.getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get('contPackageNum')) pkg=pkg+parseFloat(a[i].get('contPackageNum'));
			if(a[i].get('contGrossWeight')) gw=gw+parseFloat(a[i].get('contGrossWeight'));
			if(a[i].get('contMeasurement')) me=me+parseFloat(a[i].get('contMeasurement'));			
		}
		totalPackages.setValue(round2(pkg)); 
		totalGrossWeight.setValue(round2(gw));
		totalMeasurement.setValue(round2(me));
	};
	this.calContainer = function(){		
		var pkg=0;var gw=0;var me=0;
		var a=this.cargoGrid.getStore().getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get('cocaPackageNum')>0) pkg=pkg+parseFloat(a[i].get('cocaPackageNum'));
			if(a[i].get('cocaGrossWeight')>0) gw=gw+parseFloat(a[i].get('cocaGrossWeight'));
			if(a[i].get('cocaMeasurement')>0) me=me+parseFloat(a[i].get('cocaMeasurement'));			
		}
		var r = this.grid.getSelectionModel().getSelected();		
		if(pkg>0) r.set('contPackageNum',round2(pkg)); 
		if(gw>0) r.set('contGrossWeight',round2(gw));
		if(me>0) r.set('contMeasurement',round2(me));
	};
	this.autoShip=function(){
		
	};
	var re = {scope:this,
		rowselect:function(sm,row,record){
			if(this.sel!=record.get('contId')){
				this.sel=record.get('contId');
				var s = this.cargoGrid.getStore();s.removeAll();
				var a = this.cargoStore.getRange();
				for(var i=0;i<a.length;i++){if(a[i].get('contId')==this.sel && a[i].get('rowAction')!='D' && a[i].get('rowAction')!='R') s.add(a[i]);}
			}}
	};		
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re});	
	var soc = new Ext.grid.CheckColumn({header: "SOC",dataIndex:'contSocFlag',width:55});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_CONT_NO,dataIndex:'contNo',width:100,validator:checkContainerNo,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',
		invalidText:'集装箱编码格式不正确，请重新输入！'})},
	{header:C_SEAL_NO,dataIndex:'contSealNo',width:100,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_COTY,dataIndex:'cotyCode',width:60,renderer:getCOTY,
		editor:new Ext.form.ComboBox({displayField:'cotyCode',valueField:'cotyCode',triggerAction:'all',
        mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOTY_S(),
        listeners:{scope:this,
        	select:function(c,r,i){
        		this.grid.getSelectionModel().getSelected().set('cotyId',r.get('cotyId'));
        		}
		}})},
	{header:C_FL,dataIndex:'contFl',width:40,
		editor:new Ext.form.ComboBox({displayField:'CODE',valueField:'CODE',triggerAction: 'all',
        mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:FL_S})},
    soc,
	{header:C_CARGO_NAME_EN,dataIndex:'contCargoNameEn',width:100,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_PACKAGES,dataIndex:'contPackageNum',width:60,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packId',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.grid.getSelectionModel().getSelected().set('packName',r.get('packName'));}}})},
	{header:C_GW,dataIndex:'contGrossWeight',width:60,renderer:rateRender,editor:new Ext.form.TextField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CBM,dataIndex:'contMeasurement',width:60,renderer:rateRender,editor:new Ext.form.TextField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CONT_LOAD_ADDRESS,dataIndex:'contAddress',width:150,editor:new Ext.form.TextField()},
	{header:C_REMARKS,dataIndex:'contRemarks',width:100,editor:new Ext.form.TextField()}],defaults:{sortable:true,width:100}});
	this.grid = new Ext.grid.EditorGridPanel({region:'north',height:200,title:C_CONT_LIST,plugins:soc,autoScroll:true,clicksToEdit:1,height:200,
		store:this.store,sm:sm,cm:cm,listeners:{scope:this,
    	afteredit:function(e){var f=e.field;if(f=='contPackageNum'||f=='contGrossWeight'||f=='contMeasurement'){this.reCalculate();}}}
    });	
	
	
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_MBL_NO,dataIndex:'consMblNo',width:80,editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_MARKS,dataIndex:'cocaMarks',width:80,editor:new Ext.form.TextField({})},	
	{header:C_CARGO_NAME_EN,dataIndex:'cocaCargoName',width:80,editor:new Ext.form.TextField({})},	
	{header:C_PACKAGES,dataIndex:'cocaPackageNum',width:60,editor:new Ext.form.NumberField({allowBlank:false})},
	{header:C_PACK,dataIndex:'packName',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',valueField:'packName',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getPACK_S(),
            listeners:{scope:this,select:function(c,r,i){this.cargoGrid.getSelectionModel().getSelected().set('packName',r.get('packName'));}}})},
	{header:C_GW,dataIndex:'cocaGrossWeight',width:60,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},	
	{header:C_CBM,dataIndex:'cocaMeasurement',width:80,renderer:rateRender,editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CONS_NO,dataIndex:'consNo',width:120},   	
   	{header:C_HBL_NO,dataIndex:'consHblNo',width:120},
   	{header:C_BOOKER,dataIndex:'consCustName',width:120}
	],defaults:{sortable:true,width:120}});
	this.addCargo=function(){
		var r = this.grid.getSelectionModel().getSelected();
		if(r){
			var win = new Fos.CargoLookupWin(p.get('consShipType')=='FCL'?'CARG_Q':'CARG_MID_Q',p.get('consId'));
			win.addButton({text:C_OK,scope:this,handler:function(){
				var g = win.findById('G_CARG_LOOKUP');
				var a = g.getSelectionModel().getSelections();
				if(a){
					for(var i=0;i<a.length;i++){
						if(this.cargoGrid.getStore().findBy(function(rec,id){return rec.get('cargId')==a[i].get('cargId');})==-1){
							var rid=GGUID();
							var t = new FContainerCargo({id:rid,cocaId:rid,
								contId:r.get('contId'),
								consId:a[i].get('consId'),
								consNo:a[i].get('consNo'),
								cargId:a[i].get('cargId'),
								consMblNo:a[i].get('consMblNo'),
								consHblNo:a[i].get('consHblNo'),
								consCustName:a[i].get('custName'),
								cocaMarks:a[i].get('cargMarks'),
								cocaCargoName:a[i].get('cargNameEn'),
								packId:a[i].get('packId'),
								packName:a[i].get('packName'),
								cocaPackageNum:a[i].get('cargPackageNum'),
								cocaGrossWeight:a[i].get('cargGrossWeight'),
								cocaMeasurement:a[i].get('cargMeasurement'),
								compCode:'',verson:0});
							this.cargoStore.add(t);t.set('rowAction','N');
							this.cargoGrid.getStore().add(t);								
							if(a[i].get('cargReeterFlag')) 
								r.set('cargTemperature',a[i].get('cargTemperature'));
							if(a[i].get('cargDanagerFlag')){
								r.set('cargDanagerClass',a[i].get('cargDanagerClass'));
								r.set('cargUnNo',a[i].get('cargUnNo'));
								r.set('cargImdgPage',a[i].get('cargImdgPage'));
								r.set('cargFlashPoint',a[i].get('cargFlashPoint'));
							}								
						}
					}
					this.calContainer();
					this.reCalculate();
				}
				win.close();
			}},this);
			win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
			win.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.removeCargo=function(){
		var r = this.cargoGrid.getSelectionModel().getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){
				r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');				
				this.cargoGrid.getStore().remove(r[i]);
			};
			this.calContainer();
			this.reCalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.cargoGrid = new Ext.grid.EditorGridPanel({title:C_CONT_SHIP_LIST,autoScroll:true,sm:sm2,cm:cm2,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'cocaId',record:'FContainerCargo'},FContainerCargo),sortInfo:{field:'cocaId',direction:'ASC'}}),
		listeners:{scope:this,afteredit:function(e){
    		var f=e.field;
    		if(f=='cocaPackageNum'||f=='cocaGrossWeight'||f=='cocaMeasurement'){
    			this.calContainer();this.reCalculate();}}},
		tbar:[
			{text:C_ADD+'(A)',iconCls:'add',scope:this,handler:this.addCargo},'-',
		{text:C_REMOVE+'(D)',iconCls:'remove',scope:this,handler:this.removeCargo},'-'
	]});
	this.addCont = function(){
		var rid=GGUID();
		var c = new FContainer({id:rid,contId:rid,consId:p.get('consId'),consNo:p.get('consNo'),
		contPreFlag:'N',contPartOfFlag:'N',
		consMblNo:p.get('consMblNo'),consHblNo:p.get('consHblNo'),contMConsId:p.get('consId'),contNum:1,
		contVessel:p.get('vessName'),contVoyage:p.get('voyaName'),contPol:p.get('consPolEn'),contPod:p.get('consPodEn'),contDeliveryPlace:p.get('consDeliveryPlace'),
		contMConsNo:p.get('consNo'),contMMblNo:p.get('consMblNo'),contHBlNo:p.get('consHblNo'),
		contNo:'',contSealNo:'',cotyId:'',contFl:'FCL',packId:p.get('packId'),packName:p.get('packName'),
		contPackageNum:'',
		contCargoNameEn:p.get('consCargoNameEn'),contCargoNameCn:p.get('consCargoNameCn'),
		contGrossWeight:'',contMeasurement:'',contSocFlag:'0',contLoadDate:p.get('consContainerLoadDate'),
		contRemarks:'',version:'0',rowAction:'N'});
       	this.store.insert(0,c);
       	this.grid.getSelectionModel().selectFirstRow();
       	this.grid.startEditing(0,1);
	};
	this.removeCont=function(){
    	var b =this.grid.getSelectionModel().getSelected();
		if(b){
    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
    		this.store.remove(b);
    		var s = this.cargoGrid.getStore();
			var a = s.getRange();
			for(var i=0;i<a.length;i++){
				a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
				this.cargoStore.remove(a[i]);s.remove(a[i]);
			}
			this.reCalculate();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.save=function(){
		this.grid.stopEditing();
		this.cargoGrid.stopEditing();
		var a =this.store.getModifiedRecords();
		if(a.length){
			for(var i=0;i<a.length;i++){
				if(checkContainerNo(a[i].get('contNo')) == false){
					XMG.alert(SYS,'集装箱编码格式不正确，请重新输入！');
					return;
				}
			}
			var xml = ATX(a,'FContainer',FContainer);
			var cc=getDirty(this.cargoStore);
			if(cc.length>0){
				var x = ATX(cc,'FContainerCargo',FContainerCargo);
				xml = xml+x;
			};		
			if(xml!=''){
			 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONT_S'},
				success: function(res){	
					var c = XTR(res.responseXML,'FConsign',FConsign);
					var f = FConsign.prototype.fields;
					p.beginEdit();
	   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};
					p.endEdit();
					
					var a = XTRA(res.responseXML,'FContainerCargo',FContainerCargo);
					FOSU(this.cargoStore,a,FContainerCargo);
					var b = XTRA(res.responseXML,'FContainer',FContainer);
					FOSU(this.store,b,FContainer);
					XMG.alert(SYS,M_S);
				},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);},
				xmlData:FOSX(xml)});
			}
		}
		else XMG.alert(SYS,M_NC);
	};
	this.expExcel=function(){
		var b = this.grid.getSelectionModel().getSelected();
		if(b){
			b.beginEdit();this.getForm().updateRecord(b);b.endEdit();
			if(b.dirty){XMG.alert(SYS,M_DIRTY_PROMPT);return;}
			else EXPC('CONT','&contId='+b.get('contId'));
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	this.expEmail=function(){		
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
			var to=p.get('custEmail');
			var cc='';
			var sub='';
			var msg='';
			EXPM(to,cc,sub,msg,'CONT','contId='+b.get('contId'));
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CONT;
	var menu=CREATE_E_MENU(C_CONT_BILL,this.expExcel,this.expEmail,function(){},this);
	new Ext.KeyMap(Ext.getDoc(), {
			key:'nrsead',ctrl:true,
			handler: function(k, e) {
			 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
			 	if(tc&&tc==T_MAIN.getActiveTab()){
				 	var te=tc.getComponent('T_CONT_'+p.get('id'));
				 	if(te==tc.getActiveTab())
				 	{
				 		switch(k) {
						case Ext.EventObject.N:
							if(!NR(m+F_M)) this.addCont();break;
						case Ext.EventObject.R:
							if(!NR(m+F_R)) this.removeCont();break;
						case Ext.EventObject.S:
							if(!NR(m+F_M)) this.save();break;
						case Ext.EventObject.E:
							if(!NR(m+F_M)) this.expExcel();break;
						case Ext.EventObject.A:
							if(!NR(m+F_M)) this.addCargo();break;
						case Ext.EventObject.D:
							if(!NR(m+F_R)) this.removeCargo();break;
						}
				 	}
			 	}
			},stopEvent:true,scope:this});
	
	this.getVendorId=function(){    	
    	return p.get('consCfs');
    };
	this.getVendorName=function(){		
		return p.get('consCfsName');
	};
	var expPanel = new Fos.SectionExGrid(p,'CONT',this);
	
	Fos.ContainerTab.superclass.constructor.call(this, { 
	id:'T_CONT_'+p.get('id'),title:C_SR_CONT+'(F6)',border:true,autoScroll:true,header:false,deferredRender:false,autoScroll:true,	
	labelAlign:'right',labelWidth:80,bodyStyle:'padding:0px 0px 10px',border:true,layout:'border',
    tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addCont},'-',
		{text:C_REMOVE+'(R)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeCont}, '-', 
		{text:C_SAVE+'(S)',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save},'-',
		{text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(m+F_E),scope:this,menu:{items:[menu]}},'->',
		{xtype:'tbtext',text:C_SUM_PACK},totalPackages,'-',
		{xtype:'tbtext',text:C_SUM_GW},totalGrossWeight,'-',
		{xtype:'tbtext',text:C_SUM_CBM},totalMeasurement],
	items: [this.grid,
		{xtype:'tabpanel',activeTab:0,region:'center',border:false,items:[this.cargoGrid,expPanel]
	}]});
};
Ext.extend(Fos.ContainerTab, Ext.FormPanel);

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

//报检单
Fos.InspectionTab = function(p) {
	this.sel=GSEL;
	this.store = GS('INSP_Q','FInspection',FInspection,'inspId','DESC','','','inspId',false);
	this.store.load({params:{consId:p.get('consId')}});	
	var re = {scope:this,
		rowselect:function(sm,row,r){
			if(this.sel!=r.get('id')){
				this.sel=r.get('id');
				frm.getForm().reset();
				frm.getForm().loadRecord(r);
				this.updateToolBar();
			}
		},
		rowdeselect:function(sm,row,r){
			if(frm.getForm().isDirty()){
				r.beginEdit();
				frm.getForm().updateRecord(r);
				r.endEdit();
			}
		}
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_INSP_BILL_NO,dataIndex:'inspNo'},
	{header:C_INSP_AGENCY,dataIndex:'inspVendorName',width:150},
	{header:C_INSP_VENDOR_RN,dataIndex:'inspRefNo',width:150},
	{header:C_INSP_DATE,dataIndex:'inspDate',renderer:formatDate},
	{header:C_STATUS,dataIndex:'inspStatus',renderer:getINSPST}
	],defaults:{sortable:true,width:100}});
	
	this.inspGrid=new Ext.grid.GridPanel({title:C_INSP_BILL_LIST,region:'north',
		autoScroll:true,height:150,store:this.store,sm:sm,cm:cm});
    this.addInsp = function(){
		var rid=GGUID();
    	var b = new FInspection({id:rid,inspId:rid,
    		inspVendorId:p.get('consInspectionVendor'),
    		inspVendorName:p.get('consInspectionVendorName'),
			consId:p.get('consId'),consNo:p.get('consNo'),
			inspDate:new Date(),
			inspShipperEn:p.get('consShipper'),
			inspConsigneeEn:p.get('consConsignee'),					
			inspCargoName:p.get('consCargoDesc'),
			inspNum:p.get('consCargoGrossWeight'),
			inspPackages:p.get('consCargoPackages'),
			inspConveyance:p.get('vessName')+' '+p.get('voyaName'),
			inspContractNo:p.get('consTradeContractNo'),
			inspShippingDate:p.get('consLoadDate'),
			inspTradeCountry:getCOUN(p.get('consTradeCountry')),
			inspPol:p.get('consPolEn'),
			inspPod:p.get('consPodEn'),
			inspContainerInfo:p.get('consContainersInfo'),
			inspMarks:p.get('consCargoMarks'),
			inspStatus:'0',version:'0',rowAction:'N'});
      	this.store.insert(0,b);
      	b.set('rowAction','N');
		this.inspGrid.getSelectionModel().selectFirstRow();
    };
	this.removeInsp = function(){
		var b =this.inspGrid.getSelectionModel().getSelected();
		if(b){
	    	if(b.get('inspStatus')!=0) 
	    		XMG.alert(SYS,M_INSP_CONFIRMED);
	    	else{
	    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
	    		this.store.remove(b);
	    		frm.getForm().reset();
	    	}
    	}
	};
	this.save = function(){
		this.inspGrid.stopEditing();		
		var b =this.inspGrid.getSelectionModel().getSelected();
		if(b){b.beginEdit();
		frm.getForm().updateRecord(b);
		b.endEdit();};
		var xml='';
		var a =this.store.getModifiedRecords();
		if(a.length>0){xml = ATX(a,'FInspection',FInspection);};		
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'INSP_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FInspection',FInspection);
				FOSU(this.store,a,FInspection);
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
		}
	};
	this.expExcel=function(){
		var b = this.inspGrid.getSelectionModel().getSelected();
		if(b){
			EXPC('INSP','&inspId='+b.get('inspId'));
		}
	};
	this.expEmail=function(){
		var b = this.inspGrid.getSelectionModel().getSelected();
		if(b){
				var to='',cc='',sub=C_INSP_BILL;
				var msg='';
				EXPM(to,cc,sub,msg,'INSP','inspId='+b.get('inspId'));
		}
	};
	this.updateStatus=function(s){
    	var b = this.inspGrid.getSelectionModel().getSelected();
    	if(b){
	    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
	    		params:{A:'INSP_U',consId:b.get('consId'),inspId:b.get('inspId'),inspStatus:s},
				success: function(r){
					b.set('inspStatus',s);
					this.updateToolBar();
					XMG.alert(SYS,M_S);
				},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
			});
		}
    };
    var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_INSP;
    this.updateToolBar=function(){
    	var b = this.inspGrid.getSelectionModel().getSelected();
    	var tb= this.getTopToolbar();
    	var s=b.get('inspStatus');
    	if(b){
    		tb.getComponent('TB_B').setDisabled(NR(m+F_R)||s!=0);
    		tb.getComponent('TB_C').setDisabled(NR(m+F_M)||s!=0);
    		tb.getComponent('TB_D').setDisabled(NR(m+F_M)||s!=0);
    		tb.getComponent('TB_E').setDisabled(NR(m+F_M)||s!=1);
		}
    };
    new Ext.KeyMap(Ext.getDoc(), {
		key:'nrsbwe',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_INSP_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addInsp();break;
					case Ext.EventObject.R:
						if(!NR(m+F_R)) this.removeInsp();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					case Ext.EventObject.B:
						if(!NR(m+F_M)) this.updateStatus('1');break;
					case Ext.EventObject.W:
						if(!NR(m+F_M)) this.updateStatus('2');break;
					case Ext.EventObject.E:
						if(!NR(m+F_M)) this.expExcel();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	
    this.getVendorId=function(){
    	var b =this.inspGrid.getSelectionModel().getSelected();
    	if(b&&b.get('inspVendorId'))
    		return b.get('inspVendorId');
    	else if(this.store.getRange().length>0){
    		var a = this.store.getRange();
    		return a[0].get('inspVendorId');
    	}
    	else
    		return p.get('consInspectionVendor');
    };
	this.getVendorName=function(){
		var b =this.inspGrid.getSelectionModel().getSelected();
		if(b&&b.get('inspVendorName'))
			return b.get('inspVendorName');
		else if(this.store.getRange().length>0){
			var a = this.store.getRange();
			return a[0].get('inspVendorName');
		}
		else
			return p.get('consInspectionVendorName');
	};
	var expPanel = new Fos.SectionExGrid(p,'INSP',this);

	var frm = new Ext.FormPanel({labelAlign:'right',labelWidth:60,trackResetOnLoad:false,
		layout:'column',title:C_INSP_BILL_INFO,layoutConfig: {columns:4},
		padding:5,autoScroll:true,
		items: [
				{columnWidth:.5,layout:'form',labelWidth:100,border:false,items:[
					{fieldLabel:C_INSP_AGENCY,name:'inspVendorName',store:getCS(),enableKeyEvents:true,
					xtype:'combo',displayField:'custCode',valueField:'custCode',typeAhead:true,
					mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
						listeners:{scope:this,
						blur:function(f){
							if(f.getRawValue()==''){
								f.clearValue();
								var b =this.inspGrid.getSelectionModel().getSelected();
								if(b){
									b.set('inspVendorId','');
									b.set('inspVendorName','');
								}
							}
						},
						select:function(c,r,i){
							this.find('name','inspVendorContact')[0].setValue(r.get('custContact'));
							this.find('name','inspVendorTel')[0].setValue(r.get('custTel'));
							var b =this.inspGrid.getSelectionModel().getSelected();
							if(b){
								b.set('inspVendorId',r.get('custId'));
								b.set('inspVendorName',r.get('custNameCn'));								
							}
							c.setValue(r.get('custNameCn'));
						},
						keydown:{fn:function(f,e){LC(f,e,'custInspectionFlag');},buffer:BF}}}]},
				{columnWidth:.5,layout:'form',border:false,trackResetOnLoad:true,items:[
					{fieldLabel:C_NO,name:'inspNo',xtype:'textfield',anchor:'99%'}]},
				{columnWidth:.25,layout:'form',labelWidth:100,border:false,items:[
					{fieldLabel:C_INSP_VENDOR_RN,name:'inspRefNo',xtype:'textfield',anchor:'99%'}]},
				{columnWidth:.25,layout:'form',border:false,trackResetOnLoad:true,items:[
					{fieldLabel:C_CONTACT,name:'inspVendorContact',xtype:'textfield',anchor:'99%'}]},
				{columnWidth:.25,layout:'form',border:false,trackResetOnLoad:true,items:[
					{fieldLabel:C_TEL,name:'inspVendorTel',xtype:'textfield',anchor:'99%'}]},
				{columnWidth:.25,layout:'form',border:false,items:[
					{fieldLabel:C_INSP_DATE,name:'inspDate',xtype:'datefield',format:DATEF,anchor:'92%'}]},
				{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[
					{fieldLabel:C_SHIPPER_CN,name:'inspShipperCn',xtype:'textfield',anchor:'99%'}]},
				{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[
					{fieldLabel:C_EN,name:'inspShipperEn',xtype:'textfield',anchor:'99%'}]},
				{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[
					{fieldLabel:C_CONSIGNEE_CN,name:'inspConsigneeCn',xtype:'textfield',anchor:'99%'}]},
				{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[
					{fieldLabel:C_EN,name:'inspConsigneeEn',xtype:'textfield',anchor:'99%'}]},
							
				{columnWidth:.3,layout: 'form',border :false,labelAlign:'top',
	                items: [{fieldLabel:C_CARGO_NAME_CN_EN,name:'inspCargoName',xtype:'textarea',anchor:'99%'}]},
				{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
	                items: [{fieldLabel:C_HS_CODE,name:'inspHsNo',xtype:'textarea',anchor:'99%'}]},
				{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
	                items: [{fieldLabel:C_MADE_IN,name:'inspMadeIn',xtype:'textarea',anchor:'99%'}]},
				{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
	                items: [{fieldLabel:C_QUANTITY_WEIGHT,name:'inspNum',xtype:'textarea',anchor:'99%'}]},
	            {columnWidth:.1,layout: 'form',border : false,labelAlign:'top',
	                items: [{fieldLabel:C_CARGO_VALUE,name:'inspValue',xtype:'textarea',anchor:'99%'}]},
	            {columnWidth:.3,layout: 'form',labelAlign:'top',labelWidth:85,border:false,
	                items: [{fieldLabel:C_PACK_QUANTITY,name:'inspPackages',xtype:'textarea',anchor:'99%'}]},
	            
				{columnWidth:.33,layout:'form',labelWidth:100,border:false,items:[
					{fieldLabel:C_CONVEYANCE,name:'inspConveyance',xtype:'textfield',anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:C_TRTY,name:'inspTradeType',store:getTRTY_S(),xtype:'combo',displayField:'trtyName',valueField:'trtyName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:C_CARGO_ADDRESS,name:'inspCargoAddress',xtype:'textfield',anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,trackResetOnLoad:true,items:[
					{fieldLabel:C_CONTRACT_NO,name:'inspContractNo',xtype:'textfield',anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:C_CREDIT_NO,name:'inspCreditNo',xtype:'textfield',anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:C_USAG,name:'inspUsage',store:getUSAG_S(),xtype:'combo',displayField:'usagName',valueField:'usagName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:p.get('consBizClass')==BC_E?C_CARGO_DELIVERY_DATE:C_CARGO_DISCHARGE_DATE,name:'inspShippingDate',xtype:'datefield',format:DATEF,anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:p.get('consBizClass')==BC_E?C_COUNTRY_TO:C_COUNTRY_FROM,
							name:'inspTradeCountry',store:getCOUN_S(),xtype:'combo',
							displayField:'counNameEn',valueField:'counNameEn',typeAhead:true,
							mode:'remote',triggerAction: 'all',selectOnFocus:true,anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:C_CERTIFICATE_NO,name:'inspCertificateNo',xtype:'textfield',anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:C_PORT_FROM,name:'inspPol',xtype:'textfield',anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:p.get('consBizClass')==BC_E?C_PORT_TO:C_PORT_IN,name:'inspPod',xtype:'textfield',anchor:'99%'}]},
	            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[
					p.get('consBizClass')==BC_E?{fieldLabel:C_REGISTER_NO,name:'inspRegisterNo',xtype:'textfield',anchor:'99%'}:
					{fieldLabel:C_CLAIM_DATE,name:'inspClaimDate',xtype:'datefield',format:DATEF,anchor:'99%'}]},
	            {columnWidth:.99,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:C_CONT_SPEC_NO,name:'inspContainerInfo',xtype:'textfield',anchor:'99%'}]},
	            {columnWidth:.50,layout:'form',labelWidth:100,border : false,labelAlign:'top',items:[
					{fieldLabel:C_INSP_SPECIAL_TERM,name:'inspSpecialTerm',xtype:'textarea',anchor:'99%'}]},
	            {columnWidth:.50,layout:'form',labelWidth:100,border : false,labelAlign:'top',items:[
					{fieldLabel:C_MARKS_NO,name:'inspMarks',xtype:'textarea',anchor:'99%'}]},
	            {columnWidth:.25,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:C_RECEIVE_DATE,name:'inspReceiveDate',xtype:'datefield',format:DATEF,anchor:'92%'}]},
	            {columnWidth:.25,layout:'form',labelWidth:100,border : false,items:[
					{fieldLabel:C_RECEIVER,name:'inspReceiver',xtype:'textfield',anchor:'99%'}]}
	            ]}
	);
	
    Fos.InspectionTab.superclass.constructor.call(this, { 
	id:'T_INSP_'+p.get('id'),title:C_SR_INSP+'(F8)',layout:'border',autoScroll:true,
	tbar:[{text:C_ADD+'(N)',itemId:'TB_A',disabled:NR(m+F_M),iconCls:'add',scope:this,handler:this.addInsp},'-',
	{text:C_REMOVE+'(R)',itemId:'TB_B',disabled:NR(m+F_R),iconCls:'remove',scope:this,handler:this.removeInsp},'-',
	{text:C_SAVE+'(S)',itemId:'TB_C',disabled:NR(m+F_M),iconCls:'save',scope:this,handler:this.save},'-',
	{text:C_APPLY+'(B)',itemId:'TB_D',disabled:NR(m+F_M),iconCls:'docpass',scope:this,handler:function(){this.updateStatus('1');}},'-',
	{text:C_END+'(W)',itemId:'TB_E',disabled:NR(m+F_M),iconCls:'pass',scope:this,handler:function(){this.updateStatus('2');}},'-',	
	{text:C_EXPORT+'(E)',disabled:NR(m+F_E),iconCls:'print',scope:this,
				menu: {items: [
		   		{text:C_INSP_BILL,menu:{items:[
		   			{text:'Excel',scope:this,handler:this.expExcel},
		   			{text:C_EMAIL,scope:this,handler:this.expEmail},
		   			{text:C_FAX,scope:this,handler:function(){}}]}}
		   		]}},'->'
	],
	items: [this.inspGrid,
	        {xtype:'tabpanel',activeTab:0,region:'center',items:[frm,expPanel]}
		]
	});
};
Ext.extend(Fos.InspectionTab, Ext.Panel);

Fos.InspectionWin = function(p) {
	var panel = new Fos.InspectionTab(p);
	Fos.InspectionWin.superclass.constructor.call(this, {title:p.get('consNo')+C_INSP_BILL,modal:true,width:900,
        height:565,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:panel});
};
Ext.extend(Fos.InspectionWin,Ext.Window);

//报关单
Fos.CustomsTab = function(p) {
	this.sel =GSEL;
	this.store = GS('CUDE_Q','FCustomsDeclaration',FCustomsDeclaration,'cudeId','DESC','','','cudeId',false);
	this.store.load({params:{consId:p.get('consId')}});	
	this.entryStore = GS('CUEN_Q','FCustomsEntry',FCustomsEntry,'cuenId','DESC','','S_CUEN','cuenId');
	this.entryStore.load({params:{consId:p.get('consId')}});	
	
	var re = {scope:this,
		rowselect:function(sm,row,r){
			if(this.sel!=r.get('cudeId')){
				this.sel=r.get('cudeId');
				frm.getForm().reset();
				frm.getForm().loadRecord(r);			
				this.find('name','cudeCustomsNo')[0].setValue(r.get('cudeCustomsNo'));
				this.find('name','cudeDocNum')[0].setValue(r.get('cudeDocNum'));
				this.find('name','cudeDocSendDate')[0].setValue(r.get('cudeDocSendDate'));
				this.find('name','cudeDocRecvDate')[0].setValue(r.get('cudeDocRecvDate'));
				this.find('name','cudeTransitedFlag')[0].setValue(r.get('cudeTransitedFlag'));
				this.find('name','cudeRefuncDate')[0].setValue(r.get('cudeRefuncDate'));
				this.find('name','cudeRefundFlag')[0].setValue(r.get('cudeRefundFlag'));
				this.find('name','cudeDocColor')[0].setValue(r.get('cudeDocColor'));
				this.find('name','cudeReleaseDate')[0].setValue(r.get('cudeReleaseDate'));
				this.find('name','cudeInspectionFlag')[0].setValue(r.get('cudeInspectionFlag'));
				this.find('name','cudeRefundDocNum')[0].setValue(r.get('cudeRefundDocNum'));
				this.find('name','cudeShutoutDate')[0].setValue(r.get('cudeShutoutDate'));
				this.find('name','cudeOpenFlag')[0].setValue(r.get('cudeOpenFlag'));
				this.find('name','cudeTaxLevy')[0].setValue(r.get('cudeTaxLevy'));
				this.find('name','cudeRemarks')[0].setValue(r.get('cudeRemarks'));
				this.find('name','cudeDeclarent')[0].setValue(r.get('cudeDeclarent'));
				var s = this.entryGrid.getStore();
				s.removeAll();
				var a = this.entryStore.getRange();
				for(var i=0;i<a.length;i++){
					if(a[i].get('cudeId')==this.sel && a[i].get('rowAction')!='D' && a[i].get('rowAction')!='R') 
						s.add(a[i]);
				};
				this.updateToolBar();
			}
		},
		rowdeselect:function(sm,row,r){
			if(frm.getForm().isDirty()){
				r.beginEdit();
				frm.getForm().updateRecord(r);
				r.endEdit();
			}
			if(frmRecord.getForm().isDirty()){
				r.beginEdit();
				frmRecord.getForm().updateRecord(r);
				r.endEdit();
			}
		}
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_STATUS,dataIndex:'cudeStatus',renderer:getCDST,width:60},
	{header:C_NO,dataIndex:'cudeId',width:60},
	{header:C_CUSTOM_AGENCY,dataIndex:'cudeVendorName',width:200},
	{header:C_CONVEYANCE_S,dataIndex:'cudeConveyance'},
	{header:C_TRAFFIC_NO,dataIndex:'cudeBlNo'},
	{header:C_DECLARE_DATE,dataIndex:'cudeDeclarDate',renderer:formatDate},
	{header:C_PRE_NO,dataIndex:'cudePreNo'},
	{header:C_CUSTOMS_NO,dataIndex:'cudeCustomsNo'},
	{header:C_RECORD_NO,dataIndex:'cudeRecordNo'}
	],defaults:{sortable:true,width:100}});
	
	this.grid = new Ext.grid.GridPanel({region:'north',height:150,title:C_CUSTOM_LIST,border:true,
		autoScroll:true,collapsible:true,store:this.store,sm:sm,cm:cm});
	
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
	{header:C_ITEM_NO,dataIndex:'cuenNo',width:50,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_MANU_NO,dataIndex:'cuenManuNo',width:80,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CARGO_CODE,dataIndex:'cuenCargoNo',width:80,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_GOODS_NAME,dataIndex:'cuenCargoNameCn',width:100,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CARGO_NAME_EN,dataIndex:'cuenCargoNameEn',width:100,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_SPEC,dataIndex:'cuenCargoSpec',width:100,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_QUANTITY,dataIndex:'cuenCargoNum',width:80,renderer:rateRender,
		editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_UNIT,dataIndex:'cuenCargoUnit',width:80,
		editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
        mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_S()})},
	{header:p.get('consBizClass')==BC_I?C_COL_A:C_COUNTRY_DESTINATION,dataIndex:'cuenCountry',renderer:getCOUN,
		editor:new Ext.form.ComboBox({displayField:'counNameCn',valueField:'counNameCn',triggerAction: 'all',
    	mode:'remote',selectOnFocus:true,listClass:'x-combo-list-small',store:getCOUN_S()})},
	{header:C_UNIT_PRICE,dataIndex:'cuenUnitPrice',width:80,align:'right',
    	renderer:rateRender,editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_TOTAL_PRICE,dataIndex:'cuenTotalPrice',width:80,align:'right',
    	renderer:rateRender,editor:new Ext.form.NumberField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_CURRENCY,dataIndex:'currCode',width:60,editor:new Ext.form.TextField()},
	{header:C_LEVY,dataIndex:'cuenLevyType',width:80,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})},
	{header:C_VERSION,dataIndex:'cuenVersion',width:80,editor:new Ext.form.TextField()},
	{header:C_GW+(C_KGS),dataIndex:'cuenCargoGrossWeight',renderer:numRender,
		editor:new Ext.form.NumberField({decimalPrecision:2,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_NW+(C_KGS),dataIndex:'cuenCargoNetWeight',renderer:numRender,
		editor:new Ext.form.NumberField({decimalPrecision:2,invalidText:''})},
	{header:C_CBM,dataIndex:'cuenCargoMeasurement',renderer:numRender,
		editor:new Ext.form.NumberField({decimalPrecision:2,allowBlank:false,blankText:'',invalidText:''})},
	{header:C_REMARKS,dataIndex:'cuenRemarks',width:150,
		editor:new Ext.form.TextField({allowBlank:false,blankText:'',invalidText:''})}
	],defaults:{sortable:true,width:100}});
	
	var addEntry = function(){
		var r = this.grid.getSelectionModel().getSelected();
		if(r){			
			var rid=GGUID();
			var t = new FCustomsEntry({id:rid,cuenId:rid,cudeId:r.get('cudeId'),
				consId:r.get('consId'),					
				cuenCargoNameEn:p.get('consCargoNameEn'),
				cuenCargoNameCn:p.get('consCargoNameCn'),
				cuenCargoNum:p.get('consTotalPackages'),
				cuenCargoUnit:p.get('packName'),
				cuenCargoGrossWeight:p.get('consTotalGrossWeight'),
				cuenCargoNetWeight:p.get('consTotalNetWeight'),
				cuenCargoMeasurement:p.get('consTotalMeasurement'),
				cuenVersion:1,
				currCode:'USD',
				version:0});
			this.entryStore.add(t);
			t.set('rowAction','N');
			this.entryGrid.getStore().insert(0,t);
			this.entryGrid.startEditing(0,1);
		}
	};
	
	var loadEntry = function(){
		var r = this.grid.getSelectionModel().getSelected();
		if(r){
			var win = new Fos.CargoLookupWin('CARG_Q',p.get('consId'));
			win.addButton({text:C_OK,scope:this,handler:function(){
				var g = win.findById('G_CARG_LOOKUP');
				var a = g.getSelectionModel().getSelections();
				if(a){
					for(var i=0;i<a.length;i++){
							var rid=GGUID();
							var t = new FCustomsEntry({id:rid,cuenId:rid,
								cudeId:r.get('cudeId'),
								consId:r.get('consId'),
								cuenCargoNo:a[i].get('cargNo'),
								cuenManuNo:a[i].get('cargManuNo'),
								cuenNo:a[i].get('cargNameEn'),
								cuenCargoNameEn:a[i].get('cargNameEn'),
								cuenCargoNameCn:a[i].get('cargNameCn'),
								cuenCargoNum:a[i].get('cargPackageNum'),
								cuenCargoUnit:a[i].get('unitName'),
								packCode:a[i].get('packName'),
								cuenCargoGrossWeight:a[i].get('cargGrossWeight'),
								cuenCargoNetWeight:a[i].get('cargNetWeight'),
								cuenCargoMeasurement:a[i].get('cargMeasurement'),
								cuenVersion:1,
								currCode:'USD',
								version:0});
							this.entryStore.add(t);
							t.set('rowAction','N');
							this.entryGrid.getStore().insert(0,t);
							this.entryGrid.startEditing(0,1);
					}
					//this.reCalculate();
				}
				win.close();
			}			
			},this);
			win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
			win.show();			
		}
		else
			XMG.alert(SYS,M_SELECT_CUSTOMS_BILL);
	};
	var removeEntry = function(){
		var r = this.entryGrid.getSelectionModel().getSelections();
		for(var i=0;i<r.length;i++){
			r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');				
			this.entryGrid.getStore().remove(r[i]);
		}
	};
	
	this.entryGrid = new Ext.grid.EditorGridPanel({title:C_CUDE_CARGO_LIST,colapsable:true,
		border:false,autoScroll:true,height:200,sm:sm2,cm:cm2,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'cuenId',record:'FCustomsEntry'},FCustomsEntry),sortInfo:{field:'cuenId',direction:'ASC'}}),
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:addEntry},'-',
		      {text:C_LOAD_ENTRY,iconCls:'add',scope:this,handler:loadEntry},'-',
			  {text:C_REMOVE,iconCls:'remove',scope:this,handler:removeEntry}],
			  listeners:{scope:this,
				  afteredit:function(e){
					var f=e.field;
					var r=e.record;
			    	if(f=='cuenCargoNum'){
			    		r.set('cuenCargoNum',e.value);
			    		r.set('cuenTotalPrice',round2(e.value*r.get('cuenUnitPrice')));
			    	}
			    	else if(f=='cuenUnitPrice'){
			    		r.set('cuenUnitPrice',e.value);
			    		r.set('cuenTotalPrice',round2(e.value*r.get('cuenCargoNum')));
			    	}
				  }
			  }
	});	
	var newCude=function(){
		var rid=GGUID();
		var b = new FCustomsDeclaration({id:rid,cudeId:rid,cudeNo:'',
			consId:p.get('consId'),
			consNo:p.get('consNo'),
			consMasterId:p.get('consMasterId'),
			consMasterNo:p.get('consMasterNo'),
			cudeVendorId:p.get('consCustomsVendor'),
			cudeVendorName:p.get('consCustomsVendorName'),
			consContractNo:p.get('consContractNo'),
			cudeCreateDate:new Date(),			
			consBizClass:p.get('consBizClass'),			
			cudeCustomer:p.get('custName'),
			cudeShipper:p.get('consShipper'),
			cudeConsignee:p.get('consConsignee'),
			cudeEntryDate:p.get('consLoadDate'),
			cudeDeclarDate:new Date(),
			cudeGrossWeight:p.get('consBizType')==BT_B?p.get('consTotalGrossWeight')*1000:p.get('consTotalGrossWeight'),
			cudeNetWeight:p.get('consBizType')==BT_B?p.get('consTotalNetWeight')*1000:p.get('consTotalNetWeight'),
			cudePlace:p.get('consPolCn'),
			cudePlaceEn:p.get('consPolEn'),			
			cudePackageNum:p.get('consTotalPackages'),
			packCodeEn:p.get('packName'),
			cudeTotalSay:p.get('consTotalPackagesInWord'),			
			cudeConveyance:p.get('vessName')+' '+p.get('voyaName'),
			cudeBlNo:p.get('consMblNo'),
			cudeTransFlag:p.get('consTransFlag'),
			cudePartialFlag:p.get('consPartialFlag'),
			cudeContractNo:p.get('consTradeContractNo'),
			cudeLoadCountry:p.get('consBizClass')==BC_I?getCOUN(p.get('consTradeCountry')):'CHINA',
			cudeDischargeCountry:p.get('consBizClass')==BC_E?getCOUN(p.get('consTradeCountry')):'CHINA',
			cudePol:p.get('consPolCn'),
			cudePolEn:p.get('consPolEn'),
			cudePod:p.get('consPodCn'),
			cudePodEn:p.get('consPodEn'),			
			cudeContainerNo:p.get('consContainerNo'),
			cudeStatus:'1',
			cudeDocStatus:'0',
			version:'0'});
		return b;
	};
	this.addCude = function(){
		var r=newCude();
		this.store.insert(0,r);
		r.set('rowAction','N');
		this.grid.getSelectionModel().selectFirstRow();
	};
	this.addCudeByCargo=function(b){
		var r=newCude();
		this.store.insert(0,r);
		r.set('rowAction','N');
		r.set('cudeGrossWeight',p.get('consBizType')==BT_B?b.get('cargGrossWeight')*1000:b.get('cargGrossWeight'));
		r.set('cudeNetWeight',p.get('consBizType')==BT_B?b.get('cargNetWeight')*1000:b.get('cargNetWeight'));
		r.set('cudePackageNum',b.get('cargPackageNum'));
		r.set('packCode',b.get('packName'));
		this.grid.getSelectionModel().selectFirstRow();		
		var rid=GGUID();
		var t = new FCustomsEntry({id:rid,
			cuenId:rid,
			cuenNo:'1',
			cudeId:r.get('cudeId'),
			consId:r.get('consId'),
			cuenCargoNo:b.get('cargNo'),
			cuenManuNo:b.get('cargManuNo'),
			cuenCargoNameCn:b.get('cargNameCn'),
			cuenCargoSpec:b.get('cargSpec'),
			cuenCargoNum:b.get('cargNetWeight'),
			cuenCargoUnit:b.get('unitName'),
			cuenCountry:'',
			cuenUnitPrice:'',
			cuenTotalPrice:'',
			currCode:'USD',
			cuenLevyType:'',
			cuenRemarks:'',version:'0'});
		this.entryStore.add(t);
		t.set('rowAction','N');
		this.entryGrid.getStore().insert(0,t);
	};
	this.removeCude = function(){
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
	    	if(b.get('cudeStatus')!='1') 
	    		XMG.alert(SYS,M_CUDE_CONFIRMED);
	    	else{
	    		b.set('rowAction',b.get('rowAction')=='N'?'D':'R');
	    		this.store.remove(b);
	    		frm.getForm().reset();
	    		var s = this.entryGrid.getStore();
				var a = s.getRange();
				for(var i=0;i<a.length;i++){
					a[i].set('rowAction',a[i].get('rowAction')=='N'?'D':'R');
					s.remove(a[i]);
					this.entryStore.remove(a[i]);
				}
	    	}
    	}
		else
			XMG.alert(SYS,M_SELECT_CUSTOMS_BILL);
	};	
	
	this.updateStatus=function(s){
    	var b = this.grid.getSelectionModel().getSelected();
    	if(b){
	    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
	    		params:{A:'CUDE_U',consId:b.get('consId'),cudeId:b.get('cudeId'),cudeStatus:s},
				success: function(r){
					b.set('cudeStatus',s);
					this.updateToolBar();
					XMG.alert(SYS,M_S);
				},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);}
			});
		}
    	else
			XMG.alert(SYS,M_SELECT_CUSTOMS_BILL);
    };
    var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CUDE;
    this.updateToolBar=function(){
    	var b = this.grid.getSelectionModel().getSelected();
    	var tb= this.getTopToolbar();
    	var s=b.get('cudeStatus');
    	if(b){
    		tb.getComponent('TB_B').setDisabled(NR(m+F_R)||s>1);
    		tb.getComponent('TB_C').setDisabled(NR(m+F_M)||s>1);
    		tb.getComponent('TB_D').setDisabled(NR(m+F_M)||s!=1);
    		tb.getComponent('TB_E').setDisabled(NR(m+F_M)||s!=2);
    		tb.getComponent('TB_F').setDisabled(NR(m+F_M)||s!=3);
		}
    };
    new Ext.KeyMap(Ext.getDoc(), {
		key:'ndsbpte',ctrl:true,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_CUDE_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addCude();break;
					case Ext.EventObject.D:
						if(!NR(m+F_R)) this.removeCude();break;
					case Ext.EventObject.S:
						if(!NR(m+F_M)) this.save();break;
					case Ext.EventObject.B:
						if(!NR(m+F_M)) this.updateStatus('2');break;
					case Ext.EventObject.P:
						if(!NR(m+F_M)) this.updateStatus('3');break;
					case Ext.EventObject.T:
						if(!NR(m+F_M)) this.updateStatus('4');break;
					case Ext.EventObject.E:
						if(!NR(m+F_M)) this.expExcel();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	this.save = function(){
		this.grid.stopEditing();
		this.entryGrid.stopEditing();
		var b =this.grid.getSelectionModel().getSelected();
		if(b){
			b.beginEdit();
			var fs = b.fields;
	        fs.each(function(f){
	            var field = frm.getForm().findField(f.name);
	            if(field){
	                b.set(f.name, field.getValue());
	            }
	            else{
	            	field = frmRecord.getForm().findField(f.name);
		            if(field){
		                b.set(f.name, field.getValue());
		            }
	            }
	        }, this);
	        b.endEdit();
        }		
		var xml='';
		var a =this.store.getModifiedRecords();
		for(var i=0;i<a.length;i++){
                if(a[i].get('rowAction')!='R'&&a[i].get('rowAction')!='D'){
                	if(a[i].get('cudeVendorId')==''){
                		XMG.alert(SYS,M_CUDE_VENDOR_REQIRED);
                		return;
                	}
                	if(p.get('consBizClass')==BC_E && a[i].get('cudePol')==''){
                		XMG.alert(SYS,C_PORT_EX_REQIRED);
                		return;
                	}
                	if(p.get('consBizClass')==BC_I && a[i].get('cudePod')==''){
                		XMG.alert(SYS,C_PORT_IM_REQIRED);
                		return;
                	}
                	if(a[i].get('cudeCustomer')==''){
                		XMG.alert(SYS,C_BIZ_COMPANY_REQIRED);
                		return;
                	}
                	if(a[i].get('tratCode')==''){
                		XMG.alert(SYS,C_TRAT_REQIRED);
                		return;
                	}
                	if(a[i].get('trtyCode')==''){
                		XMG.alert(SYS,C_TRTY_REQIRED);
                		return;
                	}
                	if(p.get('consBizClass')==BC_E && a[i].get('cudeDischargeCountry')==''){
                		XMG.alert(SYS,C_COD_A_REQIRED);
                		return;
                	}
                	if(p.get('consBizClass')==BC_I && a[i].get('cudeLoadCountry')==''){
                		XMG.alert(SYS,C_COL_A_REQIRED);
                		return;
                	}
                	if(a[i].get('trteCode')==''){
                		XMG.alert(SYS,C_CUDE_TRTE_REQIRED);
                		return;
                	}
                	if(a[i].get('cudePackageNum')==''){
                		XMG.alert(SYS,C_PACKAGES_REQIRED);
                		return;
                	}
                	if(p.get('consBizClass')==BC_E && a[i].get('cudePod')==''){
                		XMG.alert(SYS,C_POD_A_REQIRED);
                		return;
                	}
                	if(p.get('consBizClass')==BC_I && a[i].get('cudePol')==''){
                		XMG.alert(SYS,C_POL_REQIRED);
                		return;
                	}
                	if(a[i].get('packCode')==''){
                		XMG.alert(SYS,C_PACK_REQIRED);
                		return;
                	}
                	if(p.get('consBizClass')==BC_E&&a[i].get('exseCode')==''){
                		XMG.alert(SYS,C_EXSE_REQIRED);
                		return;
                	}
                	if(a[i].get('cudePlace')==''){
                		XMG.alert(SYS,p.get('consBizClass')==BC_E?C_ORI_PLACE_D_REQIRED:C_DES_PLACE_D_REQIRED);
                		return;
                	}
                	if(a[i].get('cudeGrossWeight')==''){
                		XMG.alert(SYS,C_GW_S_REQIRED);
                		return;
                	}
                	if(a[i].get('cudeNetWeight')==''){
                		XMG.alert(SYS,C_MW_S_REQIRED);
                		return;
                	}
               }
            }
		if(a.length>0){xml = ATX(a,'FCustomsDeclaration',FCustomsDeclaration);};
		
		var cc=[];
		var ca =this.entryStore.getRange();
		for(var i=0;i<ca.length;i++){
			if(ca[i].dirty) 
				cc[cc.length]=ca[i];
		}
		if(cc.length>0){
			var x = ATX(cc,'FCustomsEntry',FCustomsEntry);
			xml=xml+x;
		};		
		
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CUDE_S'},
			success: function(res){
				var a = XTRA(res.responseXML,'FCustomsEntry',FCustomsEntry);
				var fields = FCustomsEntry.prototype.fields;
				var sa=this.entryStore.getRange();
				for(i=0;i<sa.length;i++){
					for(var j=0;j<a.length;j++){	
						if(sa[i].get('id')==a[j].get('id')){
							for(var k = 0;k < fields.length;k++){
								var f = fields.items[k];
								var fn=f.name;
								sa[i].set(fn,a[j].get(fn));
							}
							break;
						}
					}
				}
				this.entryStore.suspendEvents();
				this.entryStore.commitChanges();
				this.entryStore.resumeEvents();
				var b = XTRA(res.responseXML,'FCustomsDeclaration',FCustomsDeclaration);
				FOSU(this.store,b,FCustomsDeclaration);
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
		}
	};
	
	this.getVendorId=function(){
    	var b =this.grid.getSelectionModel().getSelected();
    	if(b&&b.get('cudeVendorId'))
    		return b.get('cudeVendorId');
    	else if(this.store.getRange().length>0){
    		var a = this.store.getRange();
    		return a[0].get('cudeVendorId');
    	}
    	else
    		return p.get('consCustomsVendor');
    };
	this.getVendorName=function(){
		var b =this.grid.getSelectionModel().getSelected();
		if(b&&b.get('cudeVendorName'))
			return b.get('cudeVendorName');
		else if(this.store.getRange().length>0){
			var a = this.store.getRange();
			return a[0].get('cudeVendorName');
		}
		else
			return p.get('consCustomsVendorName');
	};
	var expPanel = new Fos.SectionExGrid(p,'INSP',this);	
	
	var txtPartial={xtype:'checkbox',labelSeparator:'',boxLabel:C_PARTIAL_FLAG,tabIndex:19,name:'consPartialFlag',checked:p.get('consPartialFlag')=='1'};
	var txtTrans={xtype:'checkbox',labelSeparator:'',boxLabel:C_TANS_FLAG,tabIndex:20,name:'cudeTransFlag',checked:p.get('cudeTransFlag')=='1'};

	var txtTotalAmountCap = new Ext.form.TextField({fieldLabel:C_CAP_AMOUNT,
		name:'cudeTotalAmountCap',anchor:'99%'});	
	var txtTotalSay = new Ext.form.TextField({fieldLabel:C_PACKAGES_CAP,
		name:'cudeTotalSay',xtype:'textfield',anchor:'99%'});
	var frm = new Ext.FormPanel({title:C_CUSTOM_INFO,height:350,autoScroll:true,
		labelAlign:'right',labelWidth:100,trackResetOnLoad:false,items:[
       	 {padding:5,title:C_CUSTOM_INFO,collapsible:true,            	 
			items:[
			{layout:'column',border:false,items:[
			{columnWidth:.25,layout:'form',border:false,items:[
				{fieldLabel:C_CUSTOM_AGENCY,itemCls:'required',name:'cudeVendorName',
				store:getCS(),enableKeyEvents:true,
				tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
				xtype:'combo',displayField:'custCode',valueField:'custCode',
				typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
					listeners:{scope:this,
					blur:function(f){
						if(f.getRawValue()==''){
							f.clearValue();
							var b =this.grid.getSelectionModel().getSelected();
							if(b){
								b.set('cudeVendorId','');
								b.set('cudeVendorName','');
							}
						}
					},
					select:function(c,r,i){
						this.find('name','cudeVendorContact')[0].setValue(r.get('custContact'));
						this.find('name','cudeVendorTel')[0].setValue(r.get('custTel'));
						var b =this.grid.getSelectionModel().getSelected();
						if(b){
							b.set('cudeVendorId',r.get('custId'));
							b.set('cudeVendorName',r.get('custNameCn'));
						}
						c.setValue(r.get('custNameCn'));
					},
					keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}},
				{fieldLabel:p.get('consBizClass')==BC_E?C_PORT_EX:C_PORT_IM,itemCls:'required',
						name:p.get('consBizClass')==BC_E?'cudePol':'cudePod',xtype:'textfield',anchor:'99%'},
				{fieldLabel:(p.get('consBizClass')==BC_E?C_PORT_EX:C_PORT_IM)+C_ENGLISH,itemCls:'required',
						name:p.get('consBizClass')==BC_E?'cudePolEn':'cudePodEn',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_BIZ_COMPANY,name:'cudeCustomer',itemCls:'required',
							xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,
	 			     		store:getCS(),enableKeyEvents:true,
	 	 					mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,triggerAction:'all',
	 	 					selectOnFocus:true,anchor:'99%',
	 	 			     	listeners:{scope:this, 	 			     	
	 	 			     	select:function(c,r,i){ 	 			     		
	 	 			     		c.setValue(r.get('custNameCn'));
	 	 			     	},
	 	 			     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}},	
				{fieldLabel:p.get('consBizClass')==BC_E?C_SHIPPER_COMPANY:C_CONSIGN_COMPANY,name:'cudeCargoCompany',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_CERTIFICATE_NO,name:'cudeCertificateNo',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_APPROVAL_NO,name:'cudeApprovalNo',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_CONTRACT_NO_A,name:'consContractNo',itemCls:'needed',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_PRE_NO,name:'cudePreNo',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_CUSTOMS_TYPE,name:'cudeType',xtype:'combo',value:p.get('cudeType'),
					store:getCustomsType_S(),displayField:'cutyName',valueField:'cutyName',typeAhead: true,
					mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'99%'},
				{fieldLabel:C_COMMERCIAL_INVOICE_NO,name:'cudeInvoiceNo',xtype:'textfield',anchor:'99%'},
				txtPartial
				]},
			{columnWidth:.25,layout:'form',border:false,items:[
				{fieldLabel:C_CUDE_CONTACT,name:'cudeVendorContact',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_RECORD_NO,name:'cudeRecordNo',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_TRAT,itemCls:'required',name:'tratCode',store:getTRAT_S(),xtype:'combo',displayField:'tratName',valueField:'tratName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'},
				{fieldLabel:C_TRTY,itemCls:'required',name:'trtyCode',store:getTRTY_S(),xtype:'combo',displayField:'trtyName',valueField:'trtyName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'},
				{fieldLabel:p.get('consBizClass')==BC_E?C_COD_A:C_COL_A,itemCls:'required',
					name:p.get('consBizClass')==BC_E?'cudeDischargeCountry':'cudeLoadCountry',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_CUDE_TRTE,name:'trteCode',itemCls:'required',store:getTRTE_S(),
					xtype:'combo',displayField:'trteName',valueField:'trteName',typeAhead:true,
					mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'},
				{fieldLabel:C_CUDE_TRTE+C_ENGLISH,name:'trteCodeEn',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_PACKAGES,name:'cudePackageNum',itemCls:'required',xtype:'textfield',anchor:'99%'},
				p.get('consBizClass')=='A'?{fieldLabel:C_MANUFACTURE,name:'cudeManu',xtype:'textfield',anchor:'99%'}:{fieldLabel:'用途',name:'usagName',store:getUSAG_S(),xtype:'combo',displayField:'usagName',valueField:'usagName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'},
				{fieldLabel:C_CUST_CUDE_CODE,name:'attr1',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_COMMERCIAL_INVOICE_DATE,name:'cudeInvoiceDate',xtype:'datefield',format:DATEF,anchor:'99%'},
				txtTrans
				]},
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_CUDE_TEL,name:'cudeVendorTel',xtype:'textfield',anchor:'99%'},
				{fieldLabel:p.get('consBizClass')==BC_E?C_EX_DATE:C_IM_DATE,name:'cudeEntryDate',xtype:'datefield',format:DATEF,anchor:'99%'},
				{fieldLabel:C_CONVEYANCE_NAME,name:'cudeConveyance',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_LETY,name:'letyCode',store:getLETY_S(),xtype:'combo',displayField:'letyName',valueField:'letyName',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'},
				{fieldLabel:p.get('consBizClass')==BC_E?C_POD_A:C_POL,itemCls:'required',
					name:p.get('consBizClass')==BC_E?'cudePod':'cudePol',xtype:'textfield',anchor:'99%'},
				{fieldLabel:(p.get('consBizClass')==BC_E?C_POD_A:C_POL)+C_ENGLISH,itemCls:'required',
					name:p.get('consBizClass')==BC_E?'cudePodEn':'cudePolEn',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_FREIGHT,name:'cudeFreight',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_PACK,name:'packCode',itemCls:'required',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_PACK+C_ENGLISH,name:'packCodeEn',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_CHARGE,name:'cudeCharge',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_LOAD_DATE_F,name:'cudeShipDateF',xtype:'datefield',format:DATEF,anchor:'99%'},
				{fieldLabel:C_TRADE_CONTRACT_NO,name:'cudeContractNo',xtype:'textfield',anchor:'99%'}
				]},
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_CUSTOMS_NO,name:'cudeCustomsNo',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_DECLARE_DATE,name:'cudeDeclarDate',xtype:'datefield',format:DATEF,anchor:'99%'},
				{fieldLabel:C_TRAFFIC_NO,name:'cudeBlNo',xtype:'textfield',anchor:'99%'},
				p.get('consBizClass')==BC_E?{fieldLabel:C_EXSE,itemCls:'required',name:'exseCode',
					store:getEXSE_S(),xtype:'combo',displayField:'exseName',valueField:'exseName',
					typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'}:
				{fieldLabel:C_LEVY_PERCENT,name:'cudeLevyPercent',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_EXSE+C_ENGLISH,name:'exseCodeEn',xtype:'textfield',anchor:'99%'},
				{fieldLabel:p.get('consBizClass')==BC_E?C_ORI_PLACE_D:C_DES_PLACE_D,
					itemCls:'required',name:'cudePlace',xtype:'textfield',anchor:'99%'},
				{fieldLabel:(p.get('consBizClass')==BC_E?C_ORI_PLACE_D:C_DES_PLACE_D)+C_ENGLISH,
					itemCls:'required',name:'cudePlaceEn',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_INSURANCE_FEE,name:'cudeInsurance',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_GW_S+C_KGS,name:'cudeGrossWeight',itemCls:'required',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_MW_S+C_KGS,name:'cudeNetWeight',itemCls:'required',xtype:'textfield',anchor:'99%'},
				{fieldLabel:C_LOAD_DATE_T,name:'cudeShipDateT',xtype:'datefield',format:DATEF,anchor:'99%'},
				{fieldLabel:C_CONTRACT_DATE,name:'cudeContractDate',xtype:'datefield',format:DATEF,anchor:'99%'}
				]},				
				{columnWidth:.5,layout:'form',border : false,items:[
				     txtTotalSay
				]},
				{columnWidth:.25,layout:'form',border : false,items:[
 					{fieldLabel:C_TOTAL_AMOUNT,name:'cudeTotalAmount',xtype:'numberfield',anchor:'99%',listeners:{
 						scope:this,
 						change:function(f,nv,ov){
 							txtTotalAmountCap.setValue(N2D(nv));
 						}
 					}}  
 				]},
				{columnWidth:.25,layout:'form',border : false,items:[
				     txtTotalAmountCap   
   				]}
			]},				
			{layout:'column',border:false,items:[
				{columnWidth:.5,layout:'form',border:false,items:[
					{fieldLabel:C_CONTAINER_NO,name:'cudeContainerNo',xtype:'textarea',anchor:'99%'}]},
				{columnWidth:.5,layout:'form',border:false,items:[
					{fieldLabel:C_MARKS_REMARKS,name:'cudeMarks',xtype:'textarea',anchor:'99%'}]},
				{columnWidth:.5,layout:'form',border:false,items:[
					{fieldLabel:C_SHIPPER,name:'cudeShipper',xtype:'textarea',anchor:'99%'}]},
				{columnWidth:.5,layout:'form',border:false,items:[
					{fieldLabel:C_CONSIGNEE,name:'cudeConsignee',xtype:'textarea',anchor:'99%'}]}
			]}			
			]},
			this.entryGrid
		]});
	
	var frmRecord = new Ext.FormPanel({title:C_CUDE_RECORD,layout:'column',layoutConfig:{columns:4},padding:5,items: [
		{columnWidth:.25,layout:'form',border:false,items:[
			{fieldLabel:C_DOC_SEND_DATE,name:'cudeDocSendDate',xtype:'datefield',format:DATEF,anchor:'99%'},
			{fieldLabel:C_DOC_BACK_DATE,name:'cudeDocRecvDate',xtype:'datefield',format:DATEF,anchor:'99%'},
            {fieldLabel:C_TRANSITED_FLAG,name:'cudeTransitedFlag',xtype:'checkbox',anchor:'99%'}
			]},
         {columnWidth:.25,layout:'form',border:false,items:[
            {fieldLabel:C_CUDE_DOC_NUN,name:'cudeDocNum',xtype:'numberfield',anchor:'99%'},
			{fieldLabel:C_REFUNC_DATE,name:'cudeRefuncDate',xtype:'datefield',format:DATEF,anchor:'99%'},
            {fieldLabel:C_REFUND_FLAG,name:'cudeRefundFlag',xtype:'checkbox',anchor:'99%'}
			]},
         {columnWidth:.25,layout:'form',border:false,items:[
			{fieldLabel:C_CUDE_DOC_COLOR,name:'cudeDocColor',xtype:'combo',store:DC_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'},
			{fieldLabel:C_CUDE_RELEASE_DATE,name:'cudeReleaseDate',xtype:'datefield',format:DATEF,anchor:'99%'},
            {fieldLabel:C_INSPECTION_FLAG,name:'cudeInspectionFlag',xtype:'checkbox',anchor:'99%'}
			]},
         {columnWidth:.25,layout:'form',border:false,items:[
            {fieldLabel:C_REFUND_DOC_NUN,name:'cudeRefundDocNum',xtype:'numberfield',anchor:'99%'},
			{fieldLabel:C_SHUTOUT_DATE,name:'cudeShutoutDate',xtype:'datefield',format:DATEF,anchor:'99%'},
            {fieldLabel:C_CUDE_OPEN_FLAG,name:'cudeOpenFlag',xtype:'checkbox',anchor:'99%'}
			]},
         {columnWidth:.5,layout:'form',border:false,items:[
        	 {fieldLabel:C_CUDE_TAX_LEVY,name:'cudeTaxLevy',xtype:'textarea',anchor:'99%'}
        	 ]},
		 {columnWidth:.5,layout:'form',border:false,items:[
		     {fieldLabel:C_REMARKS,name:'cudeRemarks',xtype:'textarea',anchor:'99%'}
		     ]},
		 {columnWidth:.25,layout:'form',border:false,items:[
		     {fieldLabel:C_DECLARENT,name:'cudeDeclarent',xtype:'textfield',anchor:'99%'}
		     ]}
		 ]});
	
	
	this.expCustomsDeclaration=function(){
		var b = this.grid.getSelectionModel().getSelected();
		if(b){
			EXPC('CUDE','&cudeId='+b.get('cudeId'));
		}
		else
			XMG.alert(SYS,M_SELECT_CUSTOMS_BILL);
	};
	this.expCommercialInvoice=function(){
		var b = this.grid.getSelectionModel().getSelected();
		if(b){
			EXPC('CUDE_INVOICE','&cudeId='+b.get('cudeId'));
		}
		else
			XMG.alert(SYS,M_SELECT_CUSTOMS_BILL);
	};
	this.expPackingList=function(){
		var b = this.grid.getSelectionModel().getSelected();
		if(b){
			EXPC('CUDE_PACKING','&cudeId='+b.get('cudeId'));
		}
		else
			XMG.alert(SYS,M_SELECT_CUSTOMS_BILL);
	};
	this.expContract=function(){
		var b = this.grid.getSelectionModel().getSelected();
		if(b){
			EXPC('CUDE_CONTRACT','&cudeId='+b.get('cudeId'));
		}
		else
			XMG.alert(SYS,M_SELECT_CUSTOMS_BILL);
	};
	
	Fos.CustomsTab.superclass.constructor.call(this, { 
	id: "T_CUDE_" +p.get('id'),title:C_SR_CUDE+'(F9)',autoScroll:true,layout:'border',
	tbar:[{text:C_ADD+'(N)',itemId:'TB_A',disabled:NR(m+F_M),iconCls:'add',scope:this,handler:this.addCude},'-',	      
	{text:C_REMOVE+'(D)',itemId:'TB_B',disabled:NR(m+F_R),iconCls:'remove',scope:this,handler:this.removeCude},'-',
	{text:C_SAVE+'(S)',itemId:'TB_C',disabled:NR(m+F_M),iconCls:'save',scope:this,handler:this.save},'-',
	{text:C_APPLY+'(B)',itemId:'TB_D',disabled:NR(m+F_M),iconCls:'docpass',scope:this,handler:function(){this.updateStatus('2');}},'-',
	{text:C_CUSTOMS_PASSED+'(P)',itemId:'TB_E',disabled:NR(m+F_M),iconCls:'pass',scope:this,handler:function(){this.updateStatus('3');}},'-',
	{text:C_CUSTOMS_EXIT+'(T)',itemId:'TB_F',disabled:NR(m+F_M),iconCls:'exit',scope:this,handler:function(){this.updateStatus('4');}},'-',
	{text:C_EXPORT+'(E)',disabled:NR(m+F_E),iconCls:'print',scope:this,
				menu: {items: 
				[
			   		{text:C_CUSTOM_BILL,scope:this,handler:this.expCustomsDeclaration},
			   		{text:C_COMMERCIAL_INVOICE,scope:this,handler:this.expCommercialInvoice},
			   		{text:C_CUDE_PACKING_LIST,scope:this,handler:this.expPackingList},
			   		{text:C_TRADE_CONTRACT,scope:this,handler:this.expContract}
		   		]}},'->'],
	items: [this.grid,
        {xtype:'tabpanel',region:'center',activeTab:0,
			listeners:{scope:this,tabchange:function(m,a){a.doLayout();}},
			items:[frm,frmRecord,expPanel]
		}]
	});
};
Ext.extend(Fos.CustomsTab, Ext.Panel);

Fos.CustomsWin = function(p) {
	var panel = new Fos.CustomsTab(p);
	Fos.CustomsWin.superclass.constructor.call(this, {title:p.get('consNo')+C_CUSTOM_BILL,modal:true,width:1000,
        height:600,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:panel});
};
Ext.extend(Fos.CustomsWin,Ext.Window);

//提单
Fos.BLGrid = function(p){
	this.sel = GSEL;	
	this.store = new Ext.data.GroupingStore({
   		url: SERVICE_URL+'?A=BL_Q',
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FBl'}, FBl),remoteSort:true,
    	sortInfo:{field:'blId', direction:'DESC'},
    	groupField:'blMBlNo'});    	
	if(p.get('rowAction')!='N'){
		if(p.get('consBizType')==BT_B&&p.get('consMasterFlag')==1)
			this.store.load({params:{mt:'JSON',consMasterId:p.get('consMasterId')}});	
		else
			this.store.load({params:{mt:'JSON',consId:p.get('consId')}});	
	}
    this.edit=function(){
    	var b = sm.getSelected();
    	if(b){
    		var win = new Fos.BlWin(p,b,this.store);    	
			win.show();
    	}
    	else XMG.alert(SYS,M_NO_DATA_SELECTED);
    };
	var re = {scope:this,
		rowdblclick: function(grid, rowIndex, event){
			var b=grid.getSelectionModel().getSelected();
			var win = new Fos.BlWin(p,b,this.store);    	
			win.show();
			}
	};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false,scope:this}); 
	var mf =CHKCLM(C_BL_MERGE,'blMergeFlag');
	var sf =CHKCLM(C_BL_SPLIT,'blSplitFlag');
	var maf =CHKCLM(C_BL_MASTER,'blMasterFlag');
	var cm=new Ext.grid.ColumnModel({columns:[sm,maf,mf,sf,
	{header:C_BL_TYPE,dataIndex:'blType',width:80},
	{header:C_BL_NO,dataIndex:'blNo'},
	{header:C_M_BL_NO,dataIndex:'blMBlNo'},
	{header:C_CONS_NO,dataIndex:'consNo'},
	{header:C_CONTRACT_NO,dataIndex:'consTradeContractNo'},
	{header:C_BL_PACKAGES,width:80,dataIndex:"cargPackages",align:'right',render:rateRender,css:'font-weight:bold;'},
	{header:C_BL_GW,width:80,dataIndex:"cargGrossWeight",align:'right',renderer:rateRender,css:'font-weight:bold;'},
	{header:C_BL_CBM,width:80,dataIndex:"cargMeasurement",renderer:rateRender,align:'right',css:'font-weight:bold;'},
	{header:C_ISTY,dataIndex:'istyId',renderer:getISTY},
	{header:C_ISSUE_PLACE,dataIndex:'blIssuePlace'},
	{header:C_ISSUE_DATE,dataIndex:'blIssueDate',renderer:formatDate},
	{header:C_DOC_ORI_NUM,dataIndex:'blOriginalNum'},
	{header:C_STATUS,dataIndex:'blStatus',renderer:getBLST},
	{header:C_CREATE_BY,dataIndex:'createBy',renderer:getUSER},
	{header:C_BILL_DATE,dataIndex:'createTime',renderer:formatDateTime},
	{header:C_MODIFY_BY,dataIndex:'modifyBy',renderer:getUSER},
	{header:C_MODIFY_DATE,dataIndex:'modifyTime',renderer:formatDateTime}
	],defaults:{sortable:true,width:80}});	
	var newBl = function(t){
		var rid=GGUID();
		var bl = new FBl({id:rid,blId:rid,
		consId:p.get('consId'),
		consNo:p.get('consNo'),
		blType:t,
		blNo:t=='MB/L'?(p.get('consMblNo').indexOf('/')>0?'':p.get('consMblNo')):p.get('consHblNo'),
		mblNo:p.get('consMblNo'),		
		consBizClass:p.get('consBizClass'),
		consBizType:p.get('consBizType'),
		consShipType:p.get('consShipType'),
		custId:p.get('custId'),custName:p.get('custName'),
		consTradeContractNo:p.get('consTradeContractNo'),consChargeRemarks:p.get('consChargeRemarks'),
		blShipper:p.get('consShipper'),blConsignee:p.get('consConsignee'),blNotifyParty:p.get('consNotifyParty'),
		blNotifyParty2:p.get('consNotifyParty2'),blOverseaAgency:p.get('consNotifyParty2'),
		blPrecarriage:'',blCarrier:p.get('consCarrier'),blCarrierName:p.get('consCarrierName'),blVessel:p.get('vessName'),
		blVoyage:p.get('voyaName'),blPol:p.get('consPolEn'),blPod:p.get('consPodEn')+','+p.get('consTradeCountry'),blPot:p.get('consPotEn'),
		blLoadDate:p.get('consLoadDate'),blEtd:p.get('consEtd'),blEta:p.get('consEta'),
		blReceiptPlace:p.get('consReceiptPlace'),blDeliveryPlace:p.get('consDeliveryPlace'),
		blContainerNo:p.get('consContainerNo'),
		blPackages:p.get('consCargoPackages'),
		consMasterId:p.get('consMasterId'),consMasterNo:p.get('consMasterNo'),
		cargPackages:p.get('consTotalPackages'),cargGrossWeight:p.get('consTotalGrossWeight'),
		cargNetWeigth:p.get('consTotalNetWeight'),cargMeasurement:p.get('consTotalMeasurement'),
		fconId:p.get('fconId'),fconContractNo:p.get('consContractNo'),
		unitId:p.get('unitId'),unitName:p.get('unitCode'),
		packId:p.get('packId'),packName:p.get('packName'),
		blMergeFlag:0,blSplitFlag:0,blMasterFlag:1,
		blCargoDesc:p.get('consCargoDesc'),blGrossWeight:p.get('consCargoGrossWeight'),
		blMeasurement:p.get('consCargoMeasurement'),
		blTotalSay:'SAY TOTAL '+N2EW(p.get('consTotalPackages'))+' ('+p.get('consTotalPackages')+') '+getPACK(p.get('packId'))+' ONLY',
		blPaymentTerm:p.get('pateName'),blPaidAt:p.get('consPaidAt'),blMarks:p.get('consCargoMarks'),
		blTransTerm:getTRAN(p.get('tranId')),blContainerInfo:p.get('consContainersInfo'),istyId:p.get('istyId'),
		blOriginalNum:N2EW(p.get('consOriginalBlNum')),blStatus:'1',version:'0',rowAction:'N'});
		return bl;
	};
	var reloadCons=function(){
		var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
		reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});					
		sc.load({params:{consId:p.get('consId')},callback:function(r,o,s){
			if(s&&r.length>0){
				var c=r[0];
				p.beginEdit();
				p.set('blCargoPackages',c.get('blCargoPackages'));
				p.set('blCargoGrossWeight',c.get('blCargoGrossWeight'));
				p.set('blCargoNetWeight',c.get('blCargoNetWeight'));
				p.set('blCargoMeasurement',c.get('blCargoMeasurement'));
				p.set('version',c.get('version'));	
				p.endEdit();
				var tc = T_MAIN.getComponent('C_'+p.get("id"));
				var t=tc.getComponent('T_BOOK_'+p.get("id"));
				t.find('name','blCargoPackages')[0].setValue(p.get('blCargoPackages'));
				t.find('name','blCargoGrossWeight')[0].setValue(p.get('blCargoGrossWeight'));
				t.find('name','blCargoNetWeight')[0].setValue(p.get('blCargoNetWeight'));
				t.find('name','blCargoMeasurement')[0].setValue(p.get('blCargoMeasurement'));
				XMG.alert(SYS,M_S);
			}    						
		},scope:this});
	};
	this.addMBl = function(){
		var b = newBl('MB/L');
		var win = new Fos.BlWin(p,b,this.store);    	
		win.show();
	};
	this.addHBl = function(t){
		var b = newBl('HB/L');
		var win = new Fos.BlWin(p,b,this.store);    	
		win.show();
	};
	this.merge=function(){
		var a=sm.getSelections();
		if(a.length<2){
			XMG.alert(SYS,M_NOT_LT_TWO_BL);
			return;
		}
		for(var i=0;i<a.length;i++){
			if(a[i].get('blMergeFlag')==1){XMG.alert(SYS,M_BL_MERGED);return;}
		}		
		var xml=ATX(a,'FBl',FBl);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_M'},
			success: function(res){
				if(p.get('consBizType')==BT_B&&p.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:p.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:p.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
	};
	this.cancelMerge=function(){
		var r=sm.getSelected();
		if(r.get('blMergeFlag')!=1||r.get('blMasterFlag')!=1){XMG.alert(SYS,M_SEL_BL_MERGED);return;}
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_M_C',blId:r.get('blId')},
			success: function(res){
				if(p.get('consBizType')==BT_B&&p.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:p.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:p.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);}});
	};
	this.split=function(){
		var r=sm.getSelected();
		if(r.get('blMergeFlag')==1||r.get('blSplitFlag')==1){XMG.alert(SYS,M_BL_MERGED);return;}
		var w = new Fos.NumWin(C_SPLIT_NUM);			
		w.addButton({text:C_OK},function(){
			var n = w.findById('NUM').getValue();
			var a=[];
			for(var i=0;i<n;i++){
				var rid=GGUID();
				var bl=r.copy(rid);
				bl.set('id',rid);
				bl.set('blSplitFlag',1);
				bl.set('blMBlId',r.get('blId'));
				bl.set('blMBlNo',r.get('blNo'));
				bl.set('blMasterFlag',0);
				bl.set('blNo',r.get('blNo')+'-'+(i+1));
				bl.set('rowAction','N');
				
				if(i>0){
					bl.set('blPackages','');
					bl.set('blGrossWeight','');
					bl.set('blNetWeight','');
					bl.set('blMeasurement','');
					bl.set('cargPackages','');
					bl.set('cargGrossWeight','');
					bl.set('cargNetWeight','');
					bl.set('cargMeasurement','');
				}
				a[i]=bl;
			}
			r.set('blSplitFlag',1);
			r.set('blMasterFlag',1);
			r.set('blMBlId',r.get('blId'));
			r.set('blMBlNo',r.get('blNo'));
			a[a.length]=r;
			var xml=ATX(a,'FBl',FBl);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_S'},
			success: function(res){
				if(p.get('consBizType')==BT_B&&p.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:p.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:p.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
			w.close();
		},this);
		w.addButton({text:C_CANCEL},function(){w.close();},this);
		w.show();
	};
	this.cancelSplit=function(){
		var r=sm.getSelected();
		if(r.get('blSplitFlag')!=1||r.get('blMasterFlag')!=1){XMG.alert(SYS,M_SEL_BL_SPLIT);return;}
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_SP_C',blId:r.get('blId')},
			success: function(res){
				if(p.get('consBizType')==BT_B&&p.get('consMasterFlag')==1)
					this.store.reload({params:{mt:'JSON',consMasterId:p.get('consMasterId')}});
				else
					this.store.reload({params:{mt:'JSON',consId:p.get('consId')}});
				reloadCons();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);}});
	};
	this.addBlByCargo = function(t,c){
		var bl = newBl(t);
		this.store.insert(0,bl);
		bl.set('blNo','');		
		bl.set('blMarks',c.get('cargMarks'));
		bl.set('blPackages',''+c.get('cargPackageNum')+c.get('packName'));
		bl.set('blMeasurement',''+c.get('cargMeasurement')+'CBM');
		bl.set('blGrossWeight',''+c.get('cargGrossWeight')+(p.get('consBizType')=='C'?'KGS':'MT'));
		bl.set('cargPackages',c.get('cargPackageNum'));
		bl.set('cargGrossWeight',c.get('cargGrossWeight'));
		bl.set('cargMeasurement',c.get('cargMeasurement'));
		bl.set('cargNetWeight',c.get('cargNetWeight'));
		bl.set('unitId',c.get('unitId'));
		bl.set('unitName',c.get('unitName'));
		bl.set('packId',c.get('packId'));
		bl.set('packName',c.get('packName'));
		bl.set('rowAction','N');
		bl.set('blTotalSay','SAY TOTAL '+N2EW(c.get('cargPackageNum'))+' ('+p.get('consTotalPackages')+') '+c.get('packName')+'ONLY');
		showBlWin(p,bl,store);
	};
	this.removeBl = function(){
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var b = false;
               	for(var i=0;i<a.length;i++){if(a[i].get('blStatus')!=1){b=true;break;}}
               	if(b) XMG.alert(SYS,M_BL_CONFIRMED);
               	else {
               		var xml = SMTX4R(sm,'FBl','blId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,params:{A:'BL_S'},
					success: function(){
						sm.each(function(R){this.store.remove(R);},this);
						reloadCons();
						XMG.alert(SYS,M_S);
					},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
               	}
           }},this);
		}
       	else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};	

	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_BL;
	new Ext.KeyMap(Ext.getDoc(), {
		key:'nhdebucv',ctrl:true,scope:this,
		handler: function(k, e) {
		 	var tc = T_MAIN.getComponent('C_'+p.get("id"));
		 	if(tc&&tc==T_MAIN.getActiveTab()){
			 	var te=tc.getComponent('T_BL_'+p.get('id'));
			 	if(te==tc.getActiveTab())
			 	{
			 		switch(k) {
					case Ext.EventObject.N:
						if(!NR(m+F_M)) this.addMBl();break;
					case Ext.EventObject.H:
						if(!NR(m+F_M)) this.addHBl();break;
					case Ext.EventObject.D:
						if(!NR(m+F_R)) this.removeBl();break;
					case Ext.EventObject.E:
						if(!NR(m+F_R)) this.edit();break;
					case Ext.EventObject.B:
						if(!NR(m+F_M)) this.merge();break;
					case Ext.EventObject.U:
						if(!NR(m+F_M)) this.cancelMerge();break;
					case Ext.EventObject.C:
						if(!NR(m+F_M)) this.split();break;
					case Ext.EventObject.V:
						if(!NR(m+F_M)) this.cancelSplit();break;
					}
			 	}
		 	}
		},stopEvent:true,scope:this});
	var gv=new Ext.grid.GroupingView({showGroupName:false,enableNoGroups:true,hideGroupedColumn:true,
		groupTextTpl: '{text}',
		getRowClass: function(record, index) {			   
            if (record.get('blMasterFlag')==1) return 'pin-bg-row';
            else return '';
        }});
	Fos.BLGrid.superclass.constructor.call(this, {header:false,region:'north',height:250,
		autoScroll:true,listeners:re,
	store:this.store,sm:sm,cm:cm,view:gv,
	tbar:[{text:C_ADD+'(N)',iconCls:'add',disabled:NR(m+F_M)||p.get('rowAction')=='N',scope:this,
		   	menu: new Ext.menu.Menu({items: [
		   		{text:p.get('consBizType')==BT_A?'MAWB(M)':'MB/L(N)',scope:this,handler:this.addMBl},
		   		{text:p.get('consBizType')==BT_A?'HAWB(H)':'HB/L(H)',scope:this,handler:this.addHBl}]})
			},'-',
			{text:C_REMOVE+'(D)',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeBl},'-',
			{text:C_EDIT+'(E)',iconCls:'option',disabled:NR(m+F_M),scope:this,handler:this.edit},'-',
			{text:C_BL_MERGE+'(B)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.merge},'-',
			{text:C_BL_MERGE_C+'(U)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.cancelMerge},'-',
			{text:C_BL_SPLIT+'(C)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.split},'-',
			{text:C_BL_SPLIT_C+'(V)',iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.cancelSplit},'-'
		   	]});
};
Ext.extend(Fos.BLGrid, Ext.grid.GridPanel);

//提单标签页
Fos.BLTab = function(p) {
	this.grid = new Fos.BLGrid(p);
	
	this.getVendorId=function(){
    	return '';
    };
	this.getVendorName=function(){
		return '';
	};
	var expPanel = new Fos.SectionExGrid(p,'BL',this);	
	
	Fos.BLTab.superclass.constructor.call(this, { 
		id: "T_BL_" +p.get('id'),title:C_SR_BL+'(F7)',layout:'border',
		items: [this.grid,
	        {region:'center',header:false,layout:'fit',items:[expPanel]
			}]
	});
};
Ext.extend(Fos.BLTab, Ext.Panel);

//提单窗口
Fos.BlWin = function(p,b,store) {
	this.copyFrom=function(){		
		XMG.prompt(SYS,C_BL_NO,function(btn,v){
			if(btn=='ok'){
				var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'BL_Q',
					reader: new Ext.data.XmlReader({record:'FBl'}, FBl)});
				sc.load({params:{blNo:v},callback:function(r,o,s){
					if(s&&r.length>0){
						var c=r[0];
						b.beginEdit();
						var f = FBl.prototype.fields;
						for (var i = 0; i < f.keys.length; i++) {
							var fn = ''+f.keys[i];
							if(fn=='blId'||fn=='id'||fn=='blNo'||fn=='consId'||fn=='consNo'||fn=='version'
								||fn=='consBizClass'||fn=='consBizType'||fn=='consShipType'
								||fn=='consTradeContractNo'||fn=='consChargeRemarks'||fn=='custId'
								||fn=='custName'||fn=='blStatus'||fn=='removed'){}
							else b.set(fn,c.get(fn));
						};
						b.endEdit();
						this.getForm().loadRecord(b);
					}    						
				},scope:this});
			}
		},this);
    };
	this.save = function(){			
		if(this.find('name','blNo')[0].getValue()==''){
			XMG.alert(SYS,M_BL_REQIRED,function(){this.find('name','blNo')[0].focus();},this);return;};
		b.beginEdit();		
		var fs = b.fields;
        fs.each(function(f){
            var field = frm.getForm().findField(f.name);
            if(field){
                b.set(f.name, field.getValue());
            }
        }, this);
        
		b.endEdit();		
		var xml = RTX(b,'FBl',FBl);
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'BL_S'},
			success: function(res){				
				var c = XTR(res.responseXML,'FBl',FBl);
				var f = FBl.prototype.fields;
				b.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];b.set(fn,c.get(fn));};   				
				b.set('rowAction','M');
				b.endEdit();
				if(ac='N') store.add(b);
				var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
					reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});
				sc.load({params:{consId:p.get('consId')},callback:function(r,o,s){
					if(s&&r.length>0){
						var c=r[0];
						p.beginEdit();
						p.set('blCargoPackages',c.get('blCargoPackages'));
						p.set('blCargoGrossWeight',c.get('blCargoGrossWeight'));
						p.set('blCargoNetWeight',c.get('blCargoNetWeight'));
						p.set('blCargoMeasurement',c.get('blCargoMeasurement'));
						p.set('version',c.get('version'));	
						p.endEdit();
						var tc = T_MAIN.getComponent('C_'+p.get("id"));
						var t=tc.getComponent('T_BOOK_'+p.get("id"));
						var blcp=t.find('name','blCargoPackages');
						if(blcp[0]) blcp[0].setValue(p.get('blCargoPackages'));
						var blcg=t.find('name','blCargoGrossWeight');
						if(blcg[0]) blcg[0].setValue(p.get('blCargoGrossWeight'));
						var blcn=t.find('name','blCargoNetWeight');
						if(blcn[0]) blcn[0].setValue(p.get('blCargoGrossWeight'));
						var blcm=t.find('name','blCargoMeasurement');
						if(blcm[0]) blcm[0].setValue(p.get('blCargoMeasurement'));
						XMG.alert(SYS,M_S);
					}    						
				},scope:this});
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)});
	};
	
	this.updateStatus=function(s){
		Ext.Ajax.request({url:SERVICE_URL,method:'POST',scope:this,
			params:{A:'BL_U',blId:b.get('blId'),consId:p.get('consId'),blStatus:s,
				blType:b.get('blType')},
			success: function(r){
				b.set('blStatus',s);
				b.set('version',b.get('version')+1);
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
    
	this.check = function(){
		this.updateStatus(2);
	};
	this.uncheck = function(){
		this.updateStatus(1);
	};
	this.printOffical = function(){
		this.updateStatus(3);
	};
	this.release = function(){
		this.updateStatus(4);
	};
	
	this.expExcel=function(){
		EXPC('BL','&blId='+b.get('blId'));
	};
	this.expExcel1=function(){
		EXPC('FBL_MANIFEST','&blId='+b.get('blId'));
	};
	this.expEmail=function(){
				var to='';
				var cc='';
				var sub='';
				var msg='';
				EXPM(to,cc,sub,msg,'BL','blId='+b.get('blId'));
	};		
	this.genCons = function(){EXPC('CONS_B_BL','&blId='+b.get('blId'));};
	
	this.saveShipper = function(shipperT){
    	var cushName = '';
    	if(shipperT==1) 
    		cushName = this.find('name','blShipper')[0].getValue();
    	else if(shipperT==2) 
    		cushName = this.find('name','blConsignee')[0].getValue();
    	else if(shipperT==3) 
    		cushName = this.find('name','blNotifyParty')[0].getValue();
    	else if(shipperT==4) 
    		cushName = this.find('name','blOverseaAgency')[0].getValue();
    	    	
    	if(cushName!=''){    		
    		var c = new CCustomerShipper({rowAction:'N',custId:p.get('custId'),cushType:shipperT,cushName:cushName});
    		var xml = RTX(c,'CCustomerShipper',CCustomerShipper);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
				params:{A:'CUSH_S'},
				success: function(res){XMG.alert(SYS,M_S);},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
				xmlData:FOSX(xml)
			});
    	}
    };
    
    this.selShipper = function(shipperT){
		var win = new  Fos.ShipperWin(p.get('custId'),shipperT,updateShipper);
    	win.show();
    };
    
   updateShipper = function(shipperT,cushName){
    	if(shipperT==1) 
    		cushName = frm.find('name','blShipper')[0].setValue(cushName);
    	else if(shipperT==2) 
    		cushName = frm.find('name','blConsignee')[0].setValue(cushName);
    	else if(shipperT==3) 
    		cushName = frm.find('name','blNotifyParty')[0].setValue(cushName);
    	else if(shipperT==4) 
    		cushName = frm.find('name','blOverseaAgency')[0].setValue(cushName);
    };
    
    var bSaveShipper = new Ext.Button({text:'保存',scope:this,handler:function(){this.saveShipper(1);}});
    var bSearchShipper = new Ext.Button({text:'选择',scope:this,handler:function(){this.selShipper(1);}});
    var bSaveConsignee = new Ext.Button({text:'保存',scope:this,handler:function(){this.saveShipper(2);}});
    var bSearchConsignee = new Ext.Button({text:'选择',scope:this,handler:function(){this.selShipper(2);}});
    var bSaveNotifyParty = new Ext.Button({text:'保存',scope:this,handler:function(){this.saveShipper(3);}});
    var bSearchNotifyParty = new Ext.Button({text:'选择',scope:this,handler:function(){this.selShipper(3);}});
    var bSaveNotifyParty2 = new Ext.Button({text:'保存',scope:this,handler:function(){this.saveShipper(4);}});
    var bSearchNotifyParty2 = new Ext.Button({text:'选择',scope:this,handler:function(){this.selShipper(4);}});
    

	var t2={layout:'column',title:C_BL_INFO,layoutConfig: {columns:4},deferredRender:false,collapsible:true,
			items: [{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_BL_NO,name:'blNo',itemCls:'required',tabIndex:1,
					value:b.get('blNo'),xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_CARRIER,name:'blCarrierName',tabIndex:5,store:getCS(),enableKeyEvents:true,
					tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
					xtype:'combo',displayField:'custCode',valueField:'custCode',
					typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
					listeners:{scope:this,
					blur:function(f){
						if(f.getRawValue()==''){
							f.clearValue();
							b.set('blCarrier','');
							b.set('blCarrierName','');
						}
					},
					select:function(c,r,i){						
						b.set('blCarrier',r.get('custId'));
						b.set('blCarrierName',r.get('custNameCn'));
						c.setValue(r.get('custNameCn'));
					},
					keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:BF}}},
                {fieldLabel:C_RECEIPT_PLACE,name:'blReceiptPlace',value:b.get('blReceiptPlace'),tabIndex:9,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_POT,name:'blPot',value:b.get('blPot'),tabIndex:13,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_PACKAGES,name:'cargPackages',value:b.get('cargPackages'),tabIndex:17,xtype:'numberfield',anchor:'90%',
					listeners:{scope:this,change:function(f,nv,ov){
						b.set('blPackages',''+nv+b.get('packName'));
						this.find('name','blPackages')[0].setValue(b.get('blPackages'));
						b.set('blTotalSay','SAY TOTAL '+N2EW(nv)+' '+b.get('packName')+' ONLY');
						this.find('name','blTotalSay')[0].setValue(b.get('blTotalSay'));
					}}
				}
				]},
			{columnWidth:.25,layout:'form',border : false,items:[
				{fieldLabel:C_PRECARRIAGE,name:'blPrecarriage',value:b.get('blPrecarriage'),tabIndex:2,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_VESS,name:'blVessel',value:b.get('blVessel'),tabIndex:6,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_POL,name:'blPol',value:b.get('blPol'),tabIndex:10,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_BL_SHIP_DATE,name:'blLoadDate',value:b.get('blLoadDate'),tabIndex:14,xtype:'datefield',format:DATEF,anchor:'90%'},
                {fieldLabel:C_PACK,tabIndex:18,name:'packId',value:b.get('packId'),xtype:'combo',store:getPACK_S(),displayField:'packName',valueField:'packId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
					listeners:{scope:this,select:function(c,r,i){
						b.set('packName',r.get('packName'));
						b.set('blTotalSay','SAY TOTAL '+N2EW(b.get('blPackages'))+' '+b.get('packName')+' ONLY');
						this.find('name','blTotalSay')[0].setValue(b.get('blTotalSay'));
						}}}]},
			{columnWidth:.25,layout:'form',border : false,items:[
            	{fieldLabel:C_BL_PATE,name:'blPaymentTerm',value:b.get('blPaymentTerm'),tabIndex:3,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_VOYA,name:'blVoyage',value:b.get('blVoyage'),tabIndex:7,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_POD,name:'blPod',value:b.get('blPod'),tabIndex:11,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_SAIL_DATE,name:'blEtd',value:b.get('blEtd'),tabIndex:15,xtype:'datefield',format:DATEF,anchor:'90%'},
                {fieldLabel:C_GW,name:'cargGrossWeight',value:b.get('cargGrossWeight'),tabIndex:19,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'90%',
                	listeners:{scope:this,change:function(f,nv,ov){
						b.set('blGrossWeight',''+nv+(p.get('consBizType')=='C'?'KGS':'MT'));
						this.find('name','blGrossWeight')[0].setValue(b.get('blGrossWeight'));
					}}
                }]},
			{columnWidth:.25,layout:'form',border : false,items:[
                {fieldLabel:C_PAID_AT,name:'blPaidAt',value:b.get('blPaidAt'),tabIndex:4,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_TTER,name:'blTransTerm',value:b.get('blTransTerm'),tabIndex:8,xtype:'textfield',anchor:'90%'},
				{fieldLabel:C_DELIVERY_STATION,name:'blDeliveryPlace',value:b.get('blDeliveryPlace'),tabIndex:12,xtype:'textfield',anchor:'90%'},
                {fieldLabel:C_ETA,name:'blEta',value:b.get('blEta'),tabIndex:16,xtype:'datefield',format:DATEF,anchor:'90%'},
                {fieldLabel:C_CBM,name:'cargMeasurement',value:b.get('cargMeasurement'),tabIndex:19,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'90%',
                	listeners:{scope:this,change:function(f,nv,ov){
						b.set('blMeasurement',''+nv+('CBM'));
						this.find('name','blMeasurement')[0].setValue(b.get('blMeasurement'));
					}}
                }]},
			
			{columnWidth:.45,layout:'form',border:false,
                items: [{fieldLabel:C_SHIPPER,name:'blShipper',value:b.get('blShipper'),tabIndex:17,xtype:'textarea',height:100,anchor:'99%'}]},
            {columnWidth:.05,border:false,items:[bSaveShipper,bSearchShipper]},
            {columnWidth:.45,layout:'form',border:false,
                items:[{fieldLabel:C_CONSIGNEE,name:'blConsignee',value:b.get('blConsignee'),tabIndex:18,xtype:'textarea',height:100,anchor:'99%'}]},
            {columnWidth:.05,border:false,items:[bSaveConsignee,bSearchConsignee]},
            {columnWidth:.45,layout:'form',border:false,
                items: [{fieldLabel:C_NOTIFIER,name:'blNotifyParty',value:b.get('blNotifyParty'),tabIndex:19,xtype:'textarea',height:100,anchor:'99%'}]},
            {columnWidth:.05,border:false,items:[bSaveNotifyParty,bSearchNotifyParty]},
            {columnWidth:.45,layout: 'form',border : false,
                items: [{fieldLabel:C_OVERSEA_AGENCY,name:'blOverseaAgency',value:b.get('blOverseaAgency'),tabIndex:20,xtype:'textarea',height:100,anchor:'99%'}]},			
            {columnWidth:.05,border:false,items:[bSaveNotifyParty2,bSearchNotifyParty2]},
            
            {columnWidth:.3,layout: 'form',border :false,labelAlign:'top',
                items: [{fieldLabel:C_MARKS,name:'blMarks',value:b.get('blMarks'),tabIndex:21,xtype:'textarea',height:100,anchor:'99%'}]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_NUM_PACK,name:'blPackages',value:b.get('blPackages'),tabIndex:22,xtype:'textarea',height:100,anchor:'99%'}]},
			{columnWidth:.4,layout: 'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_CATY,name:'blCargoDesc',value:b.get('blCargoDesc'),tabIndex:23,xtype:'textarea',height:100,anchor:'99%'}]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',
                items: [{fieldLabel:C_GW_S,name:'blGrossWeight',value:b.get('blGrossWeight'),tabIndex:24,xtype:'textarea',height:100,anchor:'99%'}]},
            {columnWidth:.1,layout: 'form',border : false,labelAlign:'top',
                items: [{fieldLabel:C_CBM_S,name:'blMeasurement',value:b.get('blMeasurement'),tabIndex:25,xtype:'textarea',height:100,anchor:'99%'}]},
            {columnWidth:.90,layout: 'form',labelAlign: 'left',labelWidth:85,border : false,
                items: [{fieldLabel:C_TOTAL_SAY,name:'blTotalSay',value:b.get('blTotalSay'),tabIndex:26,xtype:'textfield',anchor:'99%'}]},
            {columnWidth:.90,layout: 'form',labelAlign: 'left',labelWidth:85,border : false,
                items: [{fieldLabel:C_CONTAINER_NO,name:'blContainerNo',value:b.get('blContainerNo'),tabIndex:27,xtype:'textfield',anchor:'99%'}]},
            ]};
	var t3={layout:'column',title:C_ISSUE_INFO,layoutConfig: {columns:4},deferredRender:false,collapsible:true,height:200,
			items: [
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_ISTY,name:'istyId',value:b.get('istyId'),
						store:getISTY_S(),tabIndex:50,xtype:'combo',
						displayField:'istyName',valueField:'istyId',
						typeAhead: true,mode: 'local',triggerAction: 'all',
						selectOnFocus:true,anchor:'99%',
						listeners:{scope:this,select:function(c,r,i){
							if(i==0)
								this.find('name','blOriginalNum')[0].setValue("THREE");
							else if(i==1)
								this.find('name','blOriginalNum')[0].setValue("ONE");
						}}}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_ISSUE_BY,name:'blIssueBy',value:b.get('blIssueBy'),tabIndex:51,xtype:'textfield',anchor:'99%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_ISSUE_PLACE,name:'blIssuePlace',value:b.get('blIssuePlace'),tabIndex:52,xtype:'textfield',anchor:'99%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_ISSUE_DATE,name:'blIssueDate',value:b.get('blIssueDate'),tabIndex:53,xtype:'datefield',format:DATEF,anchor:'99%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_CLEAN_FLAG,name:'blCleanFlag',value:b.get('blCleanFlag'),xtype:'checkbox',labelSeparator:'',anchor:'99%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_THIRD_PLACE,name:'blThirdPlaceFlag',value:b.get('blThirdPlaceFlag'),xtype:'checkbox',labelSeparator:'',anchor:'99%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_ADVANCED_FLAG,name:'blAdvancedFlag',value:b.get('blAdvancedFlag'),xtype:'checkbox',labelSeparator:'',anchor:'99%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_BL_BACK_FLAG,name:'blBackFlag',value:b.get('blBackFlag'),xtype:'checkbox',labelSeparator:'',anchor:'99%'}]},
				{columnWidth:.25,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_DOC_ORI_NUM,name:'blOriginalNum',value:b.get('blOriginalNum'),tabIndex:54,xtype:'textfield',anchor:'99%'}]},
				{columnWidth:.5,layout:'form',labelWidth:80,border : false,items:[
					{fieldLabel:C_REMARKS,name:'blRemarks',value:b.get('blRemarks'),tabIndex:55,xtype:'textarea',anchor:'99%'}]}
				]};			
	var t4={layout:'column',title:C_BASE_INFO,layoutConfig: {columns:4},bodyStyle:'padding:2px 2px 2px',deferredRender:false,collapsible:true,
			items: [
			{columnWidth:.5,layout:'form',border:false,labelAlign:'top',items: [
				{fieldLabel:"Shipper's Name and Address",name:'blShipper',value:b.get('blShipper'),
					tabIndex:1,xtype:'textarea',height:100,anchor:'99%'},
				{fieldLabel:"Consignee's Name and Address",name:'blConsignee',value:b.get('blConsignee'),
					tabIndex:2,xtype:'textarea',height:100,anchor:'99%'}				
			]},
			{columnWidth:.5,layout:'form',border:false,labelAlign:'top',items: [                
                {fieldLabel:"Accounting Information",name:'blAccountingInfo',value:b.get('blAccountingInfo'),
                	tabIndex:4,xtype:'textarea',height:100,anchor:'99%'},
                {fieldLabel: 'Also Notify',name:'blNotifyParty2',value:b.get('blNotifyParty2'),
                	tabIndex:5,xtype:'textarea',height:100,anchor:'99%'}    	
            ]},            
        	{columnWidth:.25,layout:'form',border : false,labelAlign:'top',items:[
        		{fieldLabel:'MAWB No.',name:'mblNo',value:b.get('mblNo'),
        			tabIndex:6,xtype:'textfield',anchor:'99%'},	            	
    			{fieldLabel:'Declared Value for Customs',name:'blDvCustoms',value:b.get('blDvCustoms'),
                	tabIndex:11,xtype:'textfield',anchor:'99%'},
            	{fieldLabel:'Flight',name:'blVoyage',value:b.get('blVoyage'),
                	tabIndex:22,xtype:'textfield',anchor:'99%'}
            ]},
            {columnWidth:.25,layout:'form',border : false,labelAlign:'top',items:[
                {fieldLabel:'HAWB No.',name:'blNo',value:b.get('blNo'),
                	tabIndex:6,xtype:'textfield',anchor:'99%'},
            	{fieldLabel:'Declared Value for Carriage',name:'blDvCarriage',value:b.get('blDvCarriage'),
        			tabIndex:10,xtype:'textfield',anchor:'99%'},
    			{fieldLabel:'Date',name:'blEtd',value:b.get('blEtd'),
                	tabIndex:23,xtype:'datefield',format:DATEF,anchor:'99%'}	
            ]},
            {columnWidth:.25,layout:'form',border : false,labelAlign:'top',items:[	          	
              	{fieldLabel:"Agent IATA Code",name:'blAgentIataCode',value:b.get('blAgentIataCode'),
        			tabIndex:8,xtype:'textfield',anchor:'99%'},
    			{fieldLabel:'Air Port of Departure',name:'blPol',value:b.get('blPol'),
	              	tabIndex:7,xtype:'textfield',anchor:'99%'},
              	{fieldLabel:'Amount of Insurance',name:'blAmountInsurance',value:b.get('blAmountInsurance'),
                	tabIndex:24,xtype:'textfield',anchor:'99%'}
	          ]},
	          {columnWidth:.25,layout:'form',border : false,labelAlign:'top',items:[
	          	{fieldLabel:'Account No.',name:'blAccountNo',value:b.get('blAccountNo'),
	              	tabIndex:9,xtype:'textfield',anchor:'99%'},
              	{fieldLabel:'Air Port of Destination',name:'blPod',value:b.get('blPod'),
              		tabIndex:21,xtype:'textfield',anchor:'99%'},
          		{fieldLabel:'T/S Remarks',name:'blTsRemarks',value:b.get('blTsRemarks'),
                	tabIndex:25,xtype:'textfield',anchor:'99%'}
	          ]},                                   
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'To',name:'blToFirst',value:b.get('blToFirst'),tabIndex:12,xtype:'textfield',anchor:'99%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'By First Carrier',name:'blByFirst',value:b.get('blByFirst'),tabIndex:13,xtype:'textfield',anchor:'99%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'To',name:'blToSecond',value:b.get('blToSecond'),tabIndex:14,xtype:'textfield',anchor:'99%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'By',name:'blBySecond',value:b.get('blBySecond'),tabIndex:15,xtype:'textfield',anchor:'99%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'To',name:'blToThird',value:b.get('blToThird'),tabIndex:16,xtype:'textfield',anchor:'99%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'By',name:'blByThird',value:b.get('blByThird'),tabIndex:17,xtype:'textfield',anchor:'99%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Currency',name:'currCode',value:b.get('currCode'),
            	tabIndex:18,value:p.get('currCode'),store:getCURR_S(),xtype:'combo',
            	displayField:'currCode',valueField:'currCode',typeAhead: true,mode:'local',
            	triggerAction: 'all',selectOnFocus:true,anchor:'99%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Weight/VAL',name:'blWeightPayment',value:b.get('blWeightPayment'),
            	tabIndex:19,xtype:'textfield',anchor:'99%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Other',name:'blOtherPayment',value:b.get('blOtherPayment'),
            	tabIndex:20,xtype:'textfield',anchor:'99%'}
            ]},            
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:"Issuing Carrier's Agent Name",name:'blNotifyParty',value:b.get('blNotifyParty'),
                	tabIndex:3,xtype:'textarea',height:100,anchor:'99%'}                        
             ]},
            {columnWidth:.5,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:"Handling information and Others",name:'blHandlingInfo',
                value:b.get('blHandlingInfo'),tabIndex:26,xtype:'textarea',height:100,anchor:'99%'}
             ]}
          ]};
    var t5={layout:'column',title:C_CARGO_INFO,layoutConfig: {columns:4},deferredRender:false,collapsible:true,
			items: [
			 {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'No of Packages',name:'blPackages',value:b.get('blPackages'),
            	tabIndex:27,xtype:'numberfield',anchor:'99%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Gross Weight',name:'blGrossWeight',value:b.get('blGrossWeight'),
            	tabIndex:28,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'99%'}
            ]},            
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Rate Class',name:'blRateClass',value:b.get('blRateClass'),
            	tabIndex:29,xtype:'textfield',anchor:'99%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Chargeable Weight',name:'blChargeWeight',value:b.get('blChargeWeight'),
            	tabIndex:30,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'99%'}
            ]},
            {columnWidth:.1,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Rate',name:'blChargeRate',value:b.get('blChargeRate'),
            	tabIndex:31,xtype:'numberfield',allowDecimals:true,decimalPrecision:4,anchor:'99%'}
            ]},
            {columnWidth:.2,layout:'form',border : false,labelAlign:'top',items:[
            {fieldLabel:'Total',name:'blTotalCharge',value:b.get('blTotalCharge'),
            	tabIndex:32,xtype:'numberfield',anchor:'99%'}
            ]},
			{columnWidth:.99,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:"Description of Goods",name:'blCargoDesc',value:b.get('blCargoDesc'),
                tabIndex:33,xtype:'textarea',height:100,anchor:'99%'}]}
			]};
	var t6={layout:'column',title:C_EXPE_INFO,layoutConfig: {columns:2},deferredRender:false,collapsible:true,
			items: [
			{columnWidth:.6,layout:'column',layoutConfig: {columns:2},labelWidth:180,border:false,items:[            	
            	{columnWidth:.7,layout:'form',border:false,items:[
            		{html:SP(26)+'Prepaid:',xtype:'label',anchor:'99%'},
            		{fieldLabel:'Weight Charge',name:'blWeightChargePp',value:b.get('blWeightChargePp'),tabIndex:34,xtype:'numberfield',anchor:'99%'},
            		{fieldLabel:'Valuation Charge',name:'blValuationChargePp',value:b.get('blValuationChargePp'),tabIndex:36,xtype:'numberfield',anchor:'99%'},
            		{fieldLabel:'Tax',name:'blTaxPp',value:b.get('blTaxPp'),tabIndex:38,xtype:'numberfield',anchor:'99%'},
            		{fieldLabel:'Total Other Charges Due Agent',name:'blOtherDaPp',value:b.get('blOtherDaPp'),tabIndex:40,xtype:'numberfield',anchor:'99%'},
            		{fieldLabel:'Total Other Charges Due Carrier',name:'blOtherDcPp',value:b.get('blOtherDcPp'),tabIndex:42,xtype:'numberfield',anchor:'99%'},
            		{fieldLabel:'Total',name:'blTotalPp',value:b.get('blTotalPp'),tabIndex:44,xtype:'numberfield',anchor:'99%'}]},
            	{columnWidth:.3,layout:'form',border:false,hideLabels:true,items:[
            		{text:'Collect:',xtype:'label',anchor:'99%'},
            		{name:'blWeightChargeCc',value:b.get('blWeightChargeCc'),tabIndex:35,xtype:'numberfield',anchor:'99%'},
            		{name:'blValuationChargeCc',value:b.get('blValuationChargeCc'),tabIndex:37,xtype:'numberfield',anchor:'99%'},
            		{name:'blTaxCc',value:b.get('blTaxCc'),tabIndex:39,xtype:'numberfield',anchor:'99%'},
            		{name:'blOtherDaCc',value:b.get('blOtherDaCc'),tabIndex:41,xtype:'numberfield',anchor:'99%'},
            		{name:'blOtherDcCc',value:b.get('blOtherDcCc'),tabIndex:43,xtype:'numberfield',anchor:'99%'},
            		{name:'blTotalCc',value:b.get('blTotalCc'),tabIndex:45,xtype:'numberfield',anchor:'99%'}]}            		
            ]},           
			{columnWidth:.4,layout:'form',border:false,labelAlign:'top',
                items: [{fieldLabel:"Other Charges",name:'consChargeRemarks',value:b.get('consChargeRemarks'),tabIndex:46,xtype:'textarea',height:100,anchor:'99%'}]}
			]};
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_BL;
	
	this.updateToolBar = function(s){
		var tb=frm.getTopToolbar();
		if(tb.getComponent('TB_SAVE')) 
			tb.getComponent('TB_SAVE').setDisabled(NR(m+F_M)||b.get('blStatus')>1);
    	if(tb.getComponent('TB_CONFIRM')) 
    		tb.getComponent('TB_CONFIRM').setDisabled(NR(m+F_M)||b.get('blStatus')>1);
    	if(tb.getComponent('TB_CANCEL')) 
    		tb.getComponent('TB_CANCEL').setDisabled(NR(m+F_M)||b.get('blStatus')!=2);
    	if(tb.getComponent('TB_PRINT_OFFICIAL')) 
    		tb.getComponent('TB_PRINT_OFFICIAL').setDisabled(NR(m+F_M)||b.get('blStatus')!=2);  	
    	if(tb.getComponent('TB_RELEASE')) 
    		tb.getComponent('TB_RELEASE').setDisabled(NR(m+F_M)||b.get('blStatus')!=3);
    	tb.getComponent('TB_M').setText(C_STATUS+'：'+getBLST(b.get('blStatus')));
    };
    var txtStatus={itemId:'TB_M',disabled:true,text:C_STATUS+'：'+getBLST(b.get('blStatus'))};
    
	var frm = new Ext.form.FormPanel({labelWidth:60,bodyStyle:'padding:5px',height:650,autoScroll:true,
		tbar:[
			{text:C_SAVE,itemId:'TB_SAVE',iconCls:'save',disabled:NR(m+F_M)||b.get('blStatus')>1,scope:this,handler:this.save},'-',
			{text:C_CONFIRM,itemId:'TB_CONFIRM',iconCls:'check',disabled:NR(m+F_M)||b.get('blStatus')>1,scope:this,handler:this.check},'-',
			{text:C_CANCEL_CONFIRM,itemId:'TB_CANCEL',iconCls:'renew',disabled:NR(m+F_M)||b.get('blStatus')!=2,scope:this,handler:this.uncheck},'-',
			{text:C_PRINT_OFFICIAL,itemId:'TB_PRINT_OFFICIAL',disabled:NR(m+F_M)||b.get('blStatus')!=2,iconCls:'star',scope:this,handler:this.printOffical},'-',
			{text:C_BL_RELEASE,itemId:'TB_RELEASE',disabled:NR(m+F_M)||b.get('blStatus')!=2,iconCls:'release',scope:this,handler:this.release},'-',
			{text:C_COPY_FROM,iconCls:'copy',disabled:NR(m+F_M),scope:this,handler:this.copyFrom},'-',			
			{text:C_EXPORT,iconCls:'print',disabled:NR(m+F_E),scope:this,
				menu: {items: [
		   		{text:C_BL_CONFIRM,menu:{items:[
		   			{text:'Excel',scope:this,handler:this.expExcel},
		   			{text:C_EMAIL,scope:this,handler:this.expEmail}
		   		]}},
		   		{text:M_BOOK,scope:this,handler:this.genCons},
		   		{text:M_CONSIGN,scope:this,handler:this.expExcel1}
		   		]}},'->',txtStatus
		   	],		   	
            items:{xtype:'tabpanel',plain:true,activeTab:0,defaults:{bodyStyle:'padding:10px'},height:650,
            items:p.get('consBizType')==BT_A?[t4,t5,t6,t3]:[t2,t3]}
    });
    Fos.BlWin.superclass.constructor.call(this, {title:C_BL_INFO,modal:true,
    	width:1000,height:600,autoScroll:true,maximizable:true,layout:'fit',
        plain:false,bodyStyle:'padding:2px;',items:frm});
};
Ext.extend(Fos.BlWin, Ext.Window);
