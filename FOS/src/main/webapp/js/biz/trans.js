//陆运
Fos.TransTab = function(p) {
	this.tranId=0;
	this.sel =GSEL;
	
	var sumPK = new Ext.form.TextField({name:'tranTotalPackages',readOnly:true,width:100});
	var sumGW = new Ext.form.TextField({name:'tranTotalGrossWeight',readOnly:true,width:100});
	var sumMM = new Ext.form.TextField({name:'tranTotalMeasurement',readOnly:true,width:100});
	
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
				sumGW.setValue(numRender(record.get('tranTotalGrossWeight')));
				sumMM.setValue(numRender(record.get('tranTotalMeasurement')));	
				
				var a = this.taskStore.getRange();
				var ts = this.taskGrid.getStore();
				
				ts.removeAll();
				for(var i=0;i<a.length;i++){
					if(a[i].get('tranId')==this.sel) 
						ts.add(a[i]);
				}				
				var ca = this.cargoStore.getRange();
				var cs = this.cargoGrid.getStore();
				cs.removeAll();
				for(var i=0;i<ca.length;i++){
					if(ca[i].get('tranId')==this.sel) 
						cs.add(ca[i]);
				}
			}
		},
		rowdeselect:function(s,row,r){
			if(this.getForm().isDirty()){
				r.beginEdit();
				this.getForm().updateRecord(r);
				r.endEdit();
			}
		}
	};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_TRAN_NO,dataIndex:'tranNo',width:100},
		{header:C_CONTRACT_NO,dataIndex:'tranContractNo',width:150},
		{header:C_DATE,dataIndex:'tranDate',renderer:formatDate,width:100},
		{header:C_TRACK_VENDOR,dataIndex:'tranVendorName',width:100},
		{header:C_TRAN_CONTACT,dataIndex:'tranVendorContact',width:100},
		{header:C_TRAN_TEL,dataIndex:'tranVendorTel',width:100},
		{header:C_STATUS,dataIndex:'tranStatus',renderer:getTRST,width:100}],defaults:{sortable:true,width:100}
	});
		
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
		],defaults:{sortable:true,width:100}
	});
	
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
			{text:C_REMOVE,iconCls:'remove',scope:this,
				handler:function(){
					FOS_REMOVE(sm2,this.taskGrid.getStore());
				}
			}
		]
	});
	
	var sm3=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm3=new Ext.grid.ColumnModel({columns:[sm2,
		{header:C_MBL_NO,dataIndex:'consMblNo',width:100,editor:new Ext.form.TextField({})},                                         
		{header:C_CATY,dataIndex:'trcaCargoName',width:80,editor:new Ext.form.TextField({})},
		{header:C_PACK,dataIndex:'packId',width:80,renderer:getPACK,
			editor:new Ext.form.ComboBox({displayField:'packName',
				valueField:'packId',
				triggerAction:'all',
	            mode:'local',
	            selectOnFocus:true,
	            listClass:'x-combo-list-small',
	            store:getPACK_S(),
	            listeners:{scope:this,
	            	select:function(c,r,i){
	            		this.cargoGrid.getSelectionModel().getSelected().set('packName',r.get('packName'));
	            	}
				}
			})
		},
		{header:C_PACKAGES,dataIndex:'trcaPackageNum',width:60,
			editor:new Ext.form.NumberField({allowBlank:false})},
		{header:C_GW+'(KGS)',dataIndex:'trcaGrossWeight',width:120,renderer:numRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},	
		{header:C_SIZE+'(CBM)',dataIndex:'trcaMeasurement',width:120,renderer:numRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,allowBlank:false,blankText:'',invalidText:''})},
		{header:C_REMARKS,dataIndex:'trcaRemarks',width:200,editor:new Ext.form.TextField()}
		],
		defaults:{sortable:true,width:100}
	});
	
	this.cargoGrid = new Ext.grid.EditorGridPanel({title:C_CARGO_LIST,
		border:true,
		autoScroll:true,
		sm:sm3,
		cm:cm3,
		store:new Ext.data.Store({reader:new Ext.data.XmlReader({id:'trcaId',
			record:'FTransCargo'},FTransTask),
			pruneModifiedRecords:true,
			sortInfo:{field:'trcaId',direction:'ASC'}
		}),
		listeners:{scope:this,afteredit:function(e){var f=e.field;
    		if(f=='trcaPackageNum'||f=='trcaGrossWeight'||f=='trcaMeasurement'){
    			this.reCalculate();
    		}
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
								if(this.cargoGrid.getStore().findBy(function(rec,id){
									return rec.get('cargId')==a[i].get('cargId');})==-1){
									var t = new FTransCargo({id:GGUID(),
										trcaId:'0',
										tranId:r.get('tranId'),
										consId:r.get('consId'),
										cargId:a[i].get('cargId'),
										trcaCargoName:a[i].get('cargNameEn'),
										packId:a[i].get('packId'),
										packName:a[i].get('packName'),
										trcaPackageNum:a[i].get('cargPackageNum'),
										trcaGrossWeight:a[i].get('cargGrossWeight'),
										trcaMeasurement:a[i].get('cargMeasurement'),
										verson:0
									});
									this.cargoStore.add(t);
									t.set('rowAction','N');
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
			{xtype:'tbtext',text:C_SUM_GW+'(KGS)'},sumGW,'-',
			{xtype:'tbtext',text:C_SUM_CBM+'(CBM)'},sumMM
		]
	});
	
	this.reCalculate=function(){
		var sumP=0;
		var sumG=0;
		var sumM=0;
		var packName = '';
		
		var a=this.cargoGrid.getStore().getRange();
		for(var i=0;i<a.length;i++){
			if(a[i].get('trcaPackageNum')>0) 
				sumP += parseInt(a[i].get('trcaPackageNum'));
			if(a[i].get('trcaGrossWeight')>0)
				sumG += parseFloat(a[i].get('trcaGrossWeight'));
			if(a[i].get('trcaMeasurement')>0)
				sumM += parseFloat(a[i].get('trcaMeasurement'));
			if(packName == '')
				packName =a[i].get('packName');
		}
		sumPK.setValue(sumP);
		sumGW.setValue(sumG);
		sumMM.setValue(sumM);
		var b =this.tranGrid.getSelectionModel().getSelected();
		b.beginEdit();
		b.set('tranTotalPackages',sumP);
		b.set('tranTotalGrossWeight',sumG);
		b.set('tranTotalMeasurement',sumM);
		b.set('packName',packName);
		b.endEdit();
	};
	
	this.addTrans = function(){
		this.tranId=this.tranId-1;
		var b = new FTrans({id:this.tranId,
			tranId:this.tranId,
			consId:p.get('consId'),
			consNo:p.get('consNo'),
			tranDate:new Date(),
			tranExpiryDate:p.get('consExpiryDate'),
			tranVendorId:p.get('consTrackVendor'),
			tranVendorName:p.get('consTrackVendorName'),
			tranVendorContact:p.get('consTrackContact'),
			tranVendorTel:p.get('consTrackTel'),
			tranLoadDate:p.get('consTrackLoadDate'),
			tranLoadAddress:p.get('consTrackLoadAddress'),
			tranContainerCompany:p.get('consContainerCompany'),
			tranRemarks:p.get('consTrackRemarks'),
			tranLoadContact:p.get('custContact'),
			tranLoadTel:p.get('custTel'),
			tranContainerNo:p.get('consTotalContainers'),
			tranVessel:p.get('vessName'),
			tranVoyage:p.get('voyaName'),
			tranSoNo:p.get('consSoNo'),
			consMblNo:p.get('consMblNo'),
			consHblNo:p.get('consHblNo'),
			tranPol:p.get('consPolEn'),
			tranPod:p.get('consPodEn'),
			tranStatus:'0',
			version:'0'
		});    
		this.store.insert(0,b);
		b.set('rowAction','N');
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
    	if(b) 
    		EXPC('TRAN','&tranId='+b.get('tranId'));
    	else 
    		XMG.alert(SYS,M_NO_DATA_SELECTED);
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
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
				params:{A:'TRAN_U',tranId:b.get('tranId'),tranStatus:s},
				success: function(r){
					b.set('tranStatus',s);
					this.updateToolbar();
					XMG.alert(SYS,M_S);
				},
				failure: function(r){
					XMG.alert(SYS,M_F+r.responseText);
				}
			});
		}
    	else 
    		XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	this.start=function(){
		this.updateStatus('1');
	};
	
	this.end=function(){
		this.updateStatus('2');
	};
	
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
	
	var c4={fieldLabel:C_LOAD_PLACE,name:'tranLoadFactory',
			tabIndex:9,
			xtype:'siteLookup',
			consign:p,
			siteType:3,
			typeAhead:true,
			mode:'remote',
			triggerAction:'all',
        	selectOnFocus:true,
        	anchor:'99%',
        	listWidth:200,
        	pageSize:30,
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
	
	var txtDeliveryPlace = {fieldLabel:C_DELIVERY_PLACE,name:'tranDeliveryPlace',
		tabIndex:24,
		xtype:'siteLookup',
		consign:p,
		siteType:2,
		typeAhead:true,
		mode:'remote',
		triggerAction:'all',
    	selectOnFocus:true,
    	anchor:'99%',
    	listWidth:200,
    	pageSize:30,
		listeners:{scope:this,	    			
			select:function(c,r,i){
				this.find('name','tranDeliveryContact')[0].setValue(r.get('cusiContact'));
				this.find('name','tranDeliveryTel')[0].setValue(r.get('cusiTel'));
				this.find('name','tranDeliveryAddress')[0].setValue(r.get('cusiAddress'));
			}
		}
	};
	
	
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
	
	var txtCustomsContact={fieldLabel:C_CUSTOMS_CONTACT,
			name:'tranCustomsContact',
			tabIndex:18,
			xtype:'textfield',
			anchor:'99%'};
	
	var txtCustomsAddress={fieldLabel:C_CUSTOMS_ADDRESS,
			tabIndex:20,
			name:'tranCustomsAddress',
			xtype:'textfield',
			anchor:'99%'};
	
	var txtCustomsTel={fieldLabel:C_CUSTOMS_TEL,
			name:'tranCustomsTel',
			tabIndex:19,
			xtype:'textfield',
			anchor:'99%'};
			
	var f5={fieldLabel:C_TRAN_TYPE,name:'tranType',
			tabIndex:17,
			store:TANT_S,
			xtype:'combo',
			displayField:'NAME',
			valueField:'CODE',
			typeAhead: true,
			mode: 'local',
			triggerAction: 'all',
			selectOnFocus:true,
			anchor:'99%'};
	
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
		tabIndex:23,xtype:'textfield',anchor:'99%'};
	
	var txtHbl={fieldLabel:p.get('consBizType')==BT_A?'HAWB No.':C_HBL_NO,name:'consHblNo',
		tabIndex:24,xtype:'textfield',anchor:'99%'};
	
	txtRemark = new Ext.form.TextArea({fieldLabel:C_REMARKS,tabIndex:25,
		name:'tranRemarks',		
		value:p.get('tranRemarks'),
		anchor:'99%'
	});
	
	var t4={layout:'column',title:C_OTHER_INFO,layoutConfig:{columns:4},padding:5,collapsible:true,
			items:[
				{columnWidth:.25,layout:'form',border : false,
					items:p.get('consBizType')=='A'?[f5,f6,txtComtomsBroker]:[f5,f6,txtComtomsBroker,txtVessel]},
				{columnWidth:.25,layout:'form',border : false,items:[f7,f8,txtCustomsAddress,txtVoyage]},
				{columnWidth:.25,layout:'form',border : false,items:[f9,f10,txtCustomsContact,txtMbl]},
				{columnWidth:.25,layout:'form',border : false,items:[f11,f12,txtCustomsTel,txtHbl]},
				{columnWidth:1,layout:'form',border : false,items:[txtRemark]}
				
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
    
	Fos.TransTab.superclass.constructor.call(this,{id:'T_TRAN_'+p.get('id'),
		title:C_SR_TRAN+'(F4)',
		header:false,
		autoScroll:true,	
		labelAlign:'right',
		labelWidth:90,
		border:true,
		layout:'border',
		tbar:[{text:C_ADD+'(N)',itemId:'TB_A',iconCls:'add',disabled:NR(m+F_M),scope:this,handler:this.addTrans},'-',
			{text:C_REMOVE+'(R)',itemId:'TB_B',iconCls:'remove',disabled:NR(m+F_R),scope:this,handler:this.removeTrans},'-',
			{text:C_SAVE+'(S)',itemId:'TB_C',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.save},'-',
			{text:C_START+'(K)',itemId:'TB_D',iconCls:'save',disabled:NR(m+F_M),scope:this,handler:this.start},'-',
			{text:C_END+'(W)',itemId:'TB_E',iconCls:'check',disabled:NR(m+F_M),scope:this,handler:this.end},'-',
			{text:C_EXPORT+'(E)',iconCls:'print',disabled:NR(m+F_E),scope:this,
				menu: {items:[menu]}}
		  ],
		items:[
		    {layout:'fit',region:'north',title:C_TRAN_LIST,border:false,height:150,collapsible:true,
		    	items:[this.tranGrid]
		    },
			{xtype:'tabpanel',region:'center',plain:true,activeTab:0,
		    	defaults:{bodyStyle:'padding:0px'},autoScroll:true,
				listeners:{scope:this,
					tabchange:function(m,a){a.doLayout();}
		    	},
	        	items:[
	            	{title:C_TRAN_INFO,tabIndex:1,autoScroll:true,items:[t2,t4]},
	            	this.taskGrid,this.cargoGrid,expPanel]
			}]
	});            		
};
Ext.extend(Fos.TransTab, Ext.FormPanel);
