//报关单
Fos.CudePanel = function(p) {
	this.sel =GSEL;
	
	var  m= getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CUDE;
	
	this.store =  new Ext.data.Store({url:SERVICE_URL,
		baseParams:{A:'CUDE_Q',mt:'xml'},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',
			record:'FCustomsDeclaration',id:'id'},FCustomsDeclaration),
		remoteSort:false,
		sortInfo:{field:'cudeId', direction:'desc'}
	});
	
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
				this.find('name','cudeRefundDate')[0].setValue(r.get('cudeRefundDate'));
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
	{header:C_NO,dataIndex:'cudeId',width:60},
	{header:C_STATUS,dataIndex:'cudeStatus',renderer:getCDST,width:60},	
	/*{header:C_CUSTOM_AGENCY,dataIndex:'cudeVendorName',width:200},
	{header:C_CONVEYANCE_S,dataIndex:'cudeConveyance'},
	{header:C_TRAFFIC_NO,dataIndex:'cudeBlNo'},
	{header:C_DECLARE_DATE,dataIndex:'cudeDeclarDate',renderer:formatDate},*/
	{header:C_PRE_NO,dataIndex:'cudePreNo'},
	{header:C_CUSTOMS_NO,dataIndex:'cudeCustomsNo'},
	{header:C_RECORD_NO,dataIndex:'cudeRecordNo'}
	],defaults:{sortable:true,width:100}});
	
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
			cuenPackageNum:a[i].get('cargPackageNum'),
			cuenCargoNum:a[i].get('cargPackageSNum'),
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
	
	var btnAdd = new Ext.Button({text:C_ADD,
		itemId:'TB_A',
		disabled:NR(m+F_M),
		iconCls:'add',
		scope:this,
		handler:this.addCude
	});
	
	var btnRemove = new Ext.Button({text:C_REMOVE,
		disabled:NR(m+F_R),
		iconCls:'remove',
		scope:this,
		handler:this.removeCude
	});
	
	//报关单列表
	this.grid = new Ext.grid.GridPanel({region:'west',
		width:200,
		title:C_CUSTOM_LIST,
		border:true,
		autoScroll:true,
		collapsible:true,
		store:this.store,
		split:true,
		sm:sm,
		cm:cm,
		tbar:[btnAdd,'-',btnRemove]
	});
	
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm2=new Ext.grid.ColumnModel({columns:[sm2,
		{header:C_ITEM_NO,dataIndex:'cuenNo',width:50,editor:new Ext.form.TextField()},
		{header:C_MANU_NO,dataIndex:'cuenManuNo',width:80,editor:new Ext.form.TextField()},
		{header:C_CARGO_CODE,dataIndex:'cuenCargoNo',width:80,editor:new Ext.form.TextField()},
		{header:C_GOODS_NAME,dataIndex:'cuenCargoNameCn',width:100,editor:new Ext.form.TextField()},
		{header:C_CARGO_NAME_EN,dataIndex:'cuenCargoNameEn',width:100,editor:new Ext.form.TextField()},
		{header:C_SPEC,dataIndex:'cuenCargoSpec',width:100,editor:new Ext.form.TextField()},			
		{header:C_QUANTITY,dataIndex:'cuenCargoNum',width:80,renderer:rateRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,
				allowBlank:false,blankText:'',invalidText:''})
		},				
		{header:C_UNIT,dataIndex:'cuenCargoUnit',width:80,
			editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
	        mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_S()})},
	     {header:C_PACKAGES,dataIndex:'cuenPackageNum',width:80,editor:new Ext.form.NumberField()},	
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
		],
		defaults:{sortable:true,width:100}
	});
	
	var addEntry = function(){
		var r = this.grid.getSelectionModel().getSelected();
		if(r){			
			var rid=GGUID();
			var t = new FCustomsEntry({id:rid,
				cuenId:rid,
				cudeId:r.get('cudeId'),
				consId:r.get('consId'),					
				cuenCargoNameEn:p.get('consCargoNameEn'),
				cuenCargoNameCn:p.get('consCargoNameCn'),
				cuenPackageNum:p.get('consTotalPackages'),				
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
								cuenCargoNameEn:a[i].get('cargNameEn'),
								cuenCargoNameCn:a[i].get('cargNameCn'),
								cuenPackageNum:a[i].get('cargPackageNum'),
								cuenCargoNum:a[i].get('cargPackageSNum'),
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
	
	var entryStore = new Ext.data.Store({reader:new Ext.data.XmlReader({id:'cuenId',
		record:'FCustomsEntry'},FCustomsEntry),
		sortInfo:{field:'cuenId',direction:'ASC'}
	});
	
	this.entryGrid = new Ext.grid.EditorGridPanel({title:C_CUDE_CARGO_LIST,
		colapsable:true,
		border:false,
		autoScroll:true,
		height:200,
		sm:sm2,
		cm:cm2,
		store:entryStore,
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
	
	
	
	
	
	//报关行
	var cboCustomAgency = new Ext.form.ComboBox({fieldLabel:C_CUSTOM_AGENCY,
		itemCls:'required',
		name:'cudeVendorName',
		store:getCS(),
		enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:400,
		displayField:'custCode',
		valueField:'custCode',
		typeAhead:true,mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%',
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
			keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}
	});
	
	//出口口岸
	var txtCudePodEn = new Ext.form.TextField({fieldLabel:p.get('consBizClass')==BC_E?C_PORT_EX:C_PORT_IM,
		itemCls:'required',
		name:p.get('consBizClass')==BC_E?'cudePol':'cudePod',
		anchor:'99%'
	});
	
	//出口口岸英文
	var txtCudePod = new Ext.form.TextField({fieldLabel:(p.get('consBizClass')==BC_E?C_PORT_EX:C_PORT_IM)+C_ENGLISH,
		itemCls:'required',
		name:p.get('consBizClass')==BC_E?'cudePolEn':'cudePodEn',
		anchor:'99%'
	});
	
	//经营单位
	var cboCustomer = new Ext.form.ComboBox({fieldLabel:C_BIZ_COMPANY,
		name:'cudeCustomer',
		itemCls:'required',
		displayField:'custCode',
		valueField:'custNameCn',
		typeAhead:true,
  		store:getCS(),
  		enableKeyEvents:true,
		mode:'local',
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		triggerAction:'all',
		selectOnFocus:true,anchor:'99%',
	     listeners:{scope:this, 	 			     	
	     	select:function(c,r,i){ 	 			     		
	     		c.setValue(r.get('custNameCn'));
	     	},
	     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}}
	});
	
	//可分批
	var txtPartial = new Ext.form.Checkbox({xtype:'checkbox',
		labelSeparator:'',
		boxLabel:C_PARTIAL_FLAG,
		tabIndex:19,
		name:'consPartialFlag',
		checked:p.get('consPartialFlag')=='1'
	});
	
	//可转运
	var txtTrans = new Ext.form.Checkbox({xtype:'checkbox',
		labelSeparator:'',
		boxLabel:C_TANS_FLAG,
		tabIndex:20,
		name:'cudeTransFlag',
		checked:p.get('cudeTransFlag')=='1'
	});

	//大写金额
	var txtTotalAmountCap = new Ext.form.TextField({fieldLabel:C_CAP_AMOUNT,
		name:'cudeTotalAmountCap',
		anchor:'99%'
	});	
	
	
	
	//发货单位、收货单位
	var txtCargoCompany = new Ext.form.TextField({fieldLabel:p.get('consBizClass')==BC_E?C_SHIPPER_COMPANY:C_CONSIGN_COMPANY,
		name:'cudeCargoCompany',
		anchor:'99%'
	});	
	
	//许可证号
	var txtCertificateNo = new Ext.form.TextField({fieldLabel:C_CERTIFICATE_NO,
		name:'cudeCertificateNo',
		anchor:'99%'
	});	
	
	//批准文号
	var txtApprovalNo = new Ext.form.TextField({fieldLabel:C_APPROVAL_NO,
		name:'cudeApprovalNo',
		anchor:'99%'
	});	
	
	//合同协议号
	var txtContractNo = new Ext.form.TextField({fieldLabel:C_CONTRACT_NO_A,
		name:'consContractNo',
		itemCls:'needed',
		anchor:'99%'
	});	
	
	//预录入号
	var txtPreNo = new Ext.form.TextField({fieldLabel:C_PRE_NO,
		name:'cudePreNo',
		anchor:'99%'
	});	
	
	//报关类型
	var cboCudeType = new Ext.form.ComboBox({fieldLabel:C_CUSTOMS_TYPE,
		name:'cudeType',
		value:p.get('cudeType'),
		store:getCustomsType_S(),
		displayField:'cutyName',
		valueField:'cutyName',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%'
	});
	
	//商业发票号
	var txtInvoiceNo = new Ext.form.TextField({fieldLabel:C_COMMERCIAL_INVOICE_NO,
		name:'cudeInvoiceNo',
		anchor:'99%'
	});	
	
	//贸易合同号
	var txtCudeContractNo = new Ext.form.TextField({fieldLabel:C_TRADE_CONTRACT_NO,
		name:'cudeContractNo',
		anchor:'99%'
	});	
	
	//报关联系人
	var txtVendorContact = new Ext.form.TextField({fieldLabel:C_CUDE_CONTACT,
		name:'cudeVendorContact',
		anchor:'99%'
	});	
	
	//备案号
	var txtRecordNo = new Ext.form.TextField({fieldLabel:C_RECORD_NO,
		name:'cudeRecordNo',
		anchor:'99%'
	});	
	
	//运输方式
	var cboTratCode = new Ext.form.ComboBox({fieldLabel:C_TRAT,
		itemCls:'required',
		name:'tratCode',
		store:getTRAT_S(),
		displayField:'tratName',
		valueField:'tratName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});
	
	//贸易方式
	var cboTrtyCode = new Ext.form.ComboBox({fieldLabel:C_TRTY,
		itemCls:'required',
		name:'trtyCode',
		store:getTRTY_S(),
		displayField:'trtyName',
		valueField:'trtyName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});
	
	//运抵国(地区)
	var txtCountry = new Ext.form.TextField({fieldLabel:p.get('consBizClass')==BC_E?C_COD_A:C_COL_A,
		itemCls:'required',
		name:p.get('consBizClass')==BC_E?'cudeDischargeCountry':'cudeLoadCountry',
		anchor:'99%'
	});	
	
	//成交方式
	var txtTrteCode = new Ext.form.ComboBox({fieldLabel:C_CUDE_TRTE,
		name:'trteCode',
		itemCls:'required',
		store:getTRTE_S(),
		displayField:'trteName',
		valueField:'trteName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});	
	
	//成交方式(英文)
	var txtTrteCodeEn = new Ext.form.TextField({fieldLabel:C_CUDE_TRTE+C_ENGLISH,
		name:'trteCodeEn',
		anchor:'99%'
	});	
	
	//件数
	var txtPackageNum = new Ext.form.TextField({fieldLabel:C_PACKAGES,
		name:'cudePackageNum',
		itemCls:'required',
		anchor:'99%'
	});	
	
	//生产厂家
	var txtManu = new Ext.form.TextField({fieldLabel:C_MANUFACTURE,
		name:'cudeManu',
		anchor:'99%'
	});	
	
	//用途
	var cboUssagName = new Ext.form.ComboBox({fieldLabel:C_USAG,
		name:'usagName',
		store:getUSAG_S(),
		displayField:'usagName',
		valueField:'usagName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});	
	
	//海关备案代码
	var txtCustomsCode = new Ext.form.TextField({fieldLabel:C_CUST_CUDE_CODE,
		name:'attr1',
		xtype:'textfield',
		anchor:'99%'
	});	
	
	//商业发票日期
	var dtInvoiceDate = new Ext.form.DateField({fieldLabel:C_COMMERCIAL_INVOICE_DATE,
		name:'cudeInvoiceDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	//合同日期
	var dtContractDate = new Ext.form.DateField({fieldLabel:C_CONTRACT_DATE,
		name:'cudeContractDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	
	//报关联系电话
	var txtCudeTel = new Ext.form.TextField({fieldLabel:C_CUDE_TEL,
		name:'cudeVendorTel',
		anchor:'99%'
	});	
	
	//出口日期
	var dtCudeEntryDate = new Ext.form.DateField({fieldLabel:p.get('consBizClass')==BC_E?C_EX_DATE:C_IM_DATE,
		name:'cudeEntryDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	//运输工具名称号码
	var txtConveyance = new Ext.form.TextField({fieldLabel:C_CONVEYANCE_NAME,
		name:'cudeConveyance',
		anchor:'99%'
	});	
	
	//征免性质
	var cboLetyCode = new Ext.form.ComboBox({fieldLabel:C_LETY,
		name:'letyCode',
		store:getLETY_S(),
		displayField:'letyName',
		valueField:'letyName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});	
	
	//指运港
	var txtPod = new Ext.form.TextField({fieldLabel:p.get('consBizClass')==BC_E?C_POD_A:C_POL,
		itemCls:'required',
		name:p.get('consBizClass')==BC_E?'cudePod':'cudePol',
		anchor:'99%'
	});	
	
	//指运港(英文)
	var txtPodEn = new Ext.form.TextField({fieldLabel:(p.get('consBizClass')==BC_E?C_POD_A:C_POL)+C_ENGLISH,
		name:p.get('consBizClass')==BC_E?'cudePodEn':'cudePolEn',
		anchor:'99%'
	});	
	
	//运费
	var txtFreight = new Ext.form.TextField({fieldLabel:C_FREIGHT,
		name:'cudeFreight',
		anchor:'99%'
	});	
	
	//包装种类
	var txtPackCode = new Ext.form.TextField({fieldLabel:C_PACK,
		name:'packCode',
		itemCls:'required',
		anchor:'99%'
	});	
	
	//包装种类(英文)
	var txtPackCodeEn = new Ext.form.TextField({fieldLabel:C_PACK+C_ENGLISH,
		name:'packCodeEn',
		anchor:'99%'
	});	
	
	//数量
	var txtNum = new Ext.form.TextField({fieldLabel:C_QUANTITY,
		name:'cudeNum',
		anchor:'99%'
	});	
	
	//杂费
	var txtCharge = new Ext.form.TextField({fieldLabel:C_CHARGE,
		name:'cudeCharge',
		anchor:'99%'
	});	
	
	//装船日期(从)
	var dtLoadDateF = new Ext.form.DateField({fieldLabel:C_LOAD_DATE_F,
		name:'cudeShipDateF',
		format:DATEF,
		anchor:'99%'
	});	
	
	//海关编号
	var txtCustomsNo = new Ext.form.TextField({fieldLabel:C_CUSTOMS_NO,
		name:'cudeCustomsNo',
		anchor:'99%'
	});	
	
	//申报日期
	var dtDeclarDate = new Ext.form.DateField({fieldLabel:C_DECLARE_DATE,
		name:'cudeDeclarDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	//提运单号
	var txtBlNo = new Ext.form.TextField({fieldLabel:C_TRAFFIC_NO,
		name:'cudeBlNo',
		xtype:'textfield',
		anchor:'99%'
	});	
	
	//结汇方式
	var cboExseCode = new Ext.form.ComboBox({fieldLabel:C_EXSE,
		itemCls:'required',
		name:'exseCode',
		store:getEXSE_S(),
		displayField:'exseName',
		valueField:'exseName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});	
	
	//征税比例
	var txtLevyPercent = new Ext.form.TextField({fieldLabel:C_LEVY_PERCENT,
		name:'cudeLevyPercent',
		anchor:'99%'
	});	
	
	//结汇方式(英文)
	var txtExseCodeEn = new Ext.form.TextField({fieldLabel:C_EXSE+C_ENGLISH,
		name:'exseCodeEn',
		anchor:'99%'
	});	
	
	//境内货源地
	var txtPlace = new Ext.form.TextField({fieldLabel:p.get('consBizClass')==BC_E?C_ORI_PLACE_D:C_DES_PLACE_D,
		itemCls:'required',
		name:'cudePlace',
		anchor:'99%'
	});	
	
	//境内货源地(英文)
	var txtPlaceEn = new Ext.form.TextField({fieldLabel:(p.get('consBizClass')==BC_E?C_ORI_PLACE_D:C_DES_PLACE_D)+C_ENGLISH,
		itemCls:'required',
		name:'cudePlaceEn',
		anchor:'99%'
	});	
	
	//毛重
	var txtGrossWeight = new Ext.form.TextField({fieldLabel:C_GW_S+C_KGS,
		name:'cudeGrossWeight',
		itemCls:'required',
		anchor:'99%'
	});	
	
	
	//净重
	var txtNetWeight = new Ext.form.TextField({fieldLabel:C_MW_S+C_KGS,
		name:'cudeNetWeight',
		itemCls:'required',
		anchor:'99%'
	});	
	
	//体积
	var txtMeasurement = new Ext.form.TextField({fieldLabel:C_CBM_S,
		name:'cudeMeasurement',
		anchor:'99%'
	});	
	
	//保费
	var txtInsurance = new Ext.form.TextField({fieldLabel:C_INSURANCE_FEE,
		name:'cudeInsurance',
		anchor:'99%'
	});	
	
	//装船日期(到)
	var dtShipDateT = new Ext.form.DateField({fieldLabel:C_LOAD_DATE_T,
		name:'cudeShipDateT',
		xtype:'datefield',
		format:DATEF,
		anchor:'99%'
	});	
	
	//大写件数
	var txtTotalSay = new Ext.form.TextField({fieldLabel:C_PACKAGES_CAP,
		name:'cudeTotalSay',xtype:'textfield',anchor:'99%'
	});
	
	
	//合计金额
	var txtTotalAmount = new Ext.form.TextField({fieldLabel:C_TOTAL_AMOUNT,
		name:'cudeTotalAmount',
		xtype:'numberfield',
		anchor:'99%',
		listeners:{
			scope:this,
			change:function(f,nv,ov){
				txtTotalAmountCap.setValue(N2D(nv));
			}
		}
	});	
		
	var frm = new Ext.FormPanel({padding:5,title:C_CUSTOM_INFO,collapsible:true,            	 
			items:[
			{layout:'column',border:false,items:[
			                                     
			{columnWidth:.4,layout:'form',labelAlign:'right',border:false,items:[txtPreNo]},
   			{columnWidth:.6,layout:'form',labelAlign:'right',border:false,items:[txtCustomsNo]},                     
			                                     
   			{columnWidth:.4,layout:'form',labelAlign:'right',border:false,items:[txtCudePod]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtRecordNo]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[dtCudeEntryDate]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[dtDeclarDate]},
   			
   			{columnWidth:.4,layout:'form',labelAlign:'right',border:false,items:[cboCustomer]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[cboTratCode]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtConveyance]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtBlNo]},
   			
            
   			{columnWidth:.4,layout:'form',labelAlign:'right',border:false,items:[txtCargoCompany]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[cboTrtyCode]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[cboLetyCode]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[p.get('consBizClass')==BC_E?cboExseCode:txtLevyPercent]},
   			
   			{columnWidth:.4,layout:'form',labelAlign:'right',border:false,items:[txtCertificateNo]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtCountry]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtPod]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtPlace]},
   			
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtApprovalNo]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtTrteCode]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtFreight]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtInsurance]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtCharge]},
   			
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtContractNo]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtPackageNum]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtPackCode]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtGrossWeight]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtNetWeight]},
   			
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,
					items:[p.get('consBizClass')=='A'?txtManu:cboUssagName]}, 
			
			{columnWidth:1,layout:'column',labelAlign:'right',border:false,
				items:[   						       
		   			{columnWidth:.5,layout:'form',labelAlign:'right',border:false,
		   				items:[{fieldLabel:C_CONTAINER_NO,name:'cudeContainerNo',xtype:'textarea',anchor:'99%'}]},    			   			
		   			{columnWidth:.5,layout:'form',labelAlign:'right',border:false,
		   						items:[{fieldLabel:C_MARKS_REMARKS,name:'cudeMarks',xtype:'textarea',anchor:'99%'}]}
   				]}
			]}	
		]
	});
	
	
	
	//报送日期
	var dtDocSendDate = new Ext.form.DateField({fieldLabel:C_DOC_SEND_DATE,
		name:'cudeDocSendDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	//放单日期
	var dtDocRecvDate = new Ext.form.DateField({fieldLabel:C_DOC_BACK_DATE,
		name:'cudeDocRecvDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	//是否转关
	var chkTransitedFlag = new Ext.form.Checkbox({
		fieldLabel:C_TRANSITED_FLAG,
		name:'cudeTransitedFlag',
		anchor:'99%'
     });
	
	//报关单份数
	var txtDocNum = new Ext.form.NumberField({fieldLabel:C_CUDE_DOC_NUN,
		name:'cudeDocNum',
		anchor:'99%'
	});	
	
	//报退日期
	var dtRefundDate = new Ext.form.DateField({fieldLabel:C_REFUND_DATE,
		name:'cudeRefundDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	//是否退税
	var chkRefundFlag = new Ext.form.Checkbox({
		fieldLabel:C_REFUND_FLAG,
		name:'cudeRefundFlag',
		anchor:'99%'
     });
	
	
	//C_CUDE_DOC_COLOR
	var cboDocColor = new Ext.form.ComboBox({fieldLabel:C_CUDE_DOC_COLOR,
		name:'cudeDocColor',
		store:DC_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});	
	
	//放行日期
	var dtReleaseDate = new Ext.form.DateField({fieldLabel:C_CUDE_RELEASE_DATE,
		name:'cudeReleaseDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	//结关日期
	var dtCloseDate = new Ext.form.DateField({fieldLabel:C_CONS_CLOSE_DATE,
		name:'cudeCloseDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	//是否查验
	var chkInspectionFlag = new Ext.form.Checkbox({
		fieldLabel:C_INSPECTION_FLAG,
		name:'cudeInspectionFlag',
		anchor:'99%'
     });
	
	//退税单份数
	var txtRefundDocNum = new Ext.form.NumberField({fieldLabel:C_REFUND_DOC_NUN,
		name:'cudeRefundDocNum',
		anchor:'99%'
	});	
	
	//退关日期
	var dtShutoutDate = new Ext.form.DateField({fieldLabel:C_SHUTOUT_DATE,
		name:'cudeShutoutDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	
	//是否开箱
	var chkOpenFlag = new Ext.form.Checkbox({
		fieldLabel:C_CUDE_OPEN_FLAG,
		name:'cudeOpenFlag',
		anchor:'99%'
     });
	
	//税费征收情况
	var txtTaxLevy = new Ext.form.TextArea({fieldLabel:C_CUDE_TAX_LEVY,
		name:'cudeTaxLevy',
		anchor:'99%'
	});	
	
	//备注
	var txtRemail = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'cudeRemarks',
		anchor:'99%'
	});	
	
	//报关员
	var txtDeclarent = new Ext.form.TextField({fieldLabel:C_DECLARENT,
		name:'cudeDeclarent',
		anchor:'99%'
	});	
	
	//免柜期 CUDE_CONTAINER_FREE_DAYS
	var txtContainerFreeDays = new Ext.form.NumberField({fieldLabel:C_CONTAINER_FREE_DAYS,
		name:'cudeContainerFreeDays',
		anchor:'99%'
	});	
	  
	//滞报日期 CUDE_EXPIRE_DECLAR_DATE
	var dtExpireDeclarDate = new Ext.form.DateField({fieldLabel:C_CUDE_EXPIRE_DECLAR_DATE,
		name:'cudeExpireDeclarDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	//滞柜日期 CUDE_EXPIRE_CONTAINER_DATE
	var dtExpireContainerDate = new Ext.form.DateField({fieldLabel:C_CUDE_EXPIRE_CONTAINER_DATE,
		name:'cudeExpireContainerDate',
		format:DATEF,
		anchor:'99%'
	});	
		
	//查验日期 CUDE_INSPECTION_DATE
	var dtInspectionDate = new Ext.form.DateField({fieldLabel:C_CUDE_INSPECTION_DATE,
		name:'cudeInspectionDate',
		format:DATEF,
		anchor:'99%'
	});	
	
	
	var frmRecord = new Ext.FormPanel({title:C_CUDE_RECORD,
		layout:'column',
		layoutConfig:{columns:4},
		padding:5,
		items: [
		        {columnWidth:.25,layout:'form',labelAlign:'right',border:false,items:[cboCustomAgency,dtDocSendDate,dtDocRecvDate,txtContainerFreeDays,chkTransitedFlag,txtDeclarent]},
		        {columnWidth:.25,layout:'form',labelAlign:'right',border:false,items:[txtVendorContact,txtDocNum,dtRefundDate,dtExpireDeclarDate,chkRefundFlag,dtCloseDate]},
		        {columnWidth:.25,layout:'form',labelAlign:'right',border:false,items:[txtCudeTel,cboDocColor,dtReleaseDate,dtExpireContainerDate,chkInspectionFlag]},
		        {columnWidth:.25,layout:'form',labelAlign:'right',border:false,items:[cboCudeType,txtRefundDocNum,dtShutoutDate,dtInspectionDate,chkOpenFlag
			]},
			{columnWidth:1,layout:'column',border:false,items:[
		         {columnWidth:.5,layout:'form',labelAlign:'right',border:false,items:[txtTaxLevy]},
				 {columnWidth:.5,layout:'form',labelAlign:'right',border:false,items:[txtRemail]}
	         ]}
		 ]});
	
	
	
	var consPanel = new Ext.Panel({padding:5,
		title:'商业发票信息',
		collapsible:true,
		layout:'column',
		border:false,
		items:[
		   	{columnWidth:.25,layout:'form',labelAlign:'right',border:false,items:[
				txtCudeContractNo,txtCudePodEn,txtTrteCodeEn,dtLoadDateF
				
			]},
			{columnWidth:.25,layout:'form',labelAlign:'right',border:false,items:[
			    dtContractDate,txtPodEn, txtExseCodeEn,txtPartial
				
				
			]},
			{columnWidth:.25,layout:'form',labelAlign:'right',border : false,items:[
				txtInvoiceNo,txtPlaceEn,txtPackCodeEn,txtTrans
			]},
			{columnWidth:.25,layout:'form',labelAlign:'right',border : false,items:[
			    dtInvoiceDate,txtCustomsCode,txtNum,txtMeasurement
 			]},
			                                     				
			{columnWidth:.5,layout:'form',labelAlign:'right',border : false,items:[txtTotalSay]},
			{columnWidth:.25,layout:'form',labelAlign:'right',border : false,items:[txtTotalAmount]},
			{columnWidth:.25,layout:'form',labelAlign:'right',border : false,items:[txtTotalAmountCap]},
			
			{columnWidth:.5,layout:'form',labelAlign:'right',border:false,items:[
			    {fieldLabel:C_SHIPPER,name:'cudeShipper',xtype:'textarea',anchor:'99%'}
				]},
			{columnWidth:.5,layout:'form',labelAlign:'right',border:false,items:[
				{fieldLabel:C_CONSIGNEE,name:'cudeConsignee',xtype:'textarea',anchor:'99%'}]}
		]
	});
	
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
    
    this.updateToolBar=function(){
    	var b = this.grid.getSelectionModel().getSelected();
    	var s=b.get('cudeStatus');
    	if(b){
    		btnRemove.setDisabled(NR(m+F_R)||s>1);
    		btnSave.setDisabled(NR(m+F_M)||s>1);
    		btnApply.setDisabled(NR(m+F_M)||s!=1);
    		btnPass.setDisabled(NR(m+F_M)||s!=2);
    		btnExit.setDisabled(NR(m+F_M)||s!=3);
    		btnCancelApply.setDisabled(NR(m+F_M)||s!=2);
    		btnCancelPass.setDisabled(NR(m+F_M)||s!=3);
    		btnCancelExit.setDisabled(NR(m+F_M)||s!=4);
		}
    };
    
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
		
		if(a.length>0){
			xml = ATX(a,'FCustomsDeclaration',FCustomsDeclaration);
		}
		
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
	
	
	var btnSave = new Ext.Button({text:C_SAVE,
		disabled:NR(m+F_M),
		iconCls:'save',
		scope:this,
		handler:this.save
	});
	
	var btnApply = new Ext.Button({text:C_APPLY,
		disabled:NR(m+F_M),
		iconCls:'docpass',
		scope:this,
		handler:function(){
			this.updateStatus('2');
		}
	});
	
	var btnCancelApply = new Ext.Button({text:C_CANCEL_APPLY,
		disabled:NR(m+F_M),
		iconCls:'renew',
		scope:this,
		handler:function(){
			this.updateStatus('1');
		}
	});
	
	var btnPass = new Ext.Button({text:C_CUSTOMS_PASSED,
		disabled:NR(m+F_M),
		iconCls:'pass',
		scope:this,
		handler:function(){
			this.updateStatus('3');
		}
	});
	
	var btnCancelPass = new Ext.Button({text:C_CANCEL_PASSED,
		disabled:NR(m+F_M),
		iconCls:'renew',
		scope:this,
		handler:function(){
			this.updateStatus('2');
		}
	});
	
	var btnExit = new Ext.Button({text:C_CUSTOMS_EXIT,
		disabled:NR(m+F_M),
		iconCls:'exit',
		scope:this,
		handler:function(){
			this.updateStatus('4');
		}
	});
			
	var btnCancelExit = new Ext.Button({text:C_CANCEL_EXIT,
		disabled:NR(m+F_M),
		iconCls:'renew',
		scope:this,
		handler:function(){
			this.updateStatus('3');
		}
	});
	
	var btnClose = new Ext.Button({text:C_CUSTOMS_CLOSED,
		disabled:NR(m+F_M),
		iconCls:'done',
		scope:this,
		handler:function(){
			this.updateStatus('5');
		}
	});
			
	var btnCancelClose = new Ext.Button({text:C_CANCEL_CLOSED,
		disabled:NR(m+F_M),
		iconCls:'renew',
		scope:this,
		handler:function(){
			this.updateStatus('3');
		}
	});
	
	var btnExport = new Ext.Button({text:C_EXPORT,
		disabled:NR(m+F_E),
		iconCls:'print',
		scope:this,
		menu: {items: 
			[
		   		{text:C_CUSTOM_BILL,scope:this,handler:this.expCustomsDeclaration},
		   		{text:C_COMMERCIAL_INVOICE,scope:this,handler:this.expCommercialInvoice},
		   		{text:C_CUDE_PACKING_LIST,scope:this,handler:this.expPackingList},
		   		{text:C_TRADE_CONTRACT,scope:this,handler:this.expContract}
	   		]}
	});
	
	var cudeDetailPanel = new Ext.Panel({region:'center',
		autoScroll:true,
		items:[frm,
		       {border:false,layout:'fit',items:this.entryGrid},
		       frmRecord,
		       consPanel,
		       {border:false,layout:'fit',items:expPanel}
		],
		tbar:[btnSave,'-',btnApply,'-',
		      btnCancelApply,'-',btnPass,'-',btnCancelPass,'-',
		      btnExit,'-',btnCancelExit,'-',btnClose,'-',btnCancelClose,'-',btnExport]
    });
	
	Fos.CudePanel.superclass.constructor.call(this, { 
		id: "T_CUDE_" +p.get('id'),
		header:p.get('bizType')==BT_G,
		title:C_SR_CUDE,
		autoScroll:true,		
		layout:'border',		
		items: [this.grid,cudeDetailPanel]
	});
};

Ext.extend(Fos.CudePanel, Ext.Panel);

Fos.CustomsWin = function(p) {
	var panel = new Fos.CudePanel(p);
	Fos.CustomsWin.superclass.constructor.call(this, {title:p.get('consNo')+C_CUSTOM_BILL,
		modal:true,
		width:1000,
        height:600,
        layout:'fit',
        maximizable:true,
        maximized:true,
        plain:false,
        buttonAlign:'right',
        items:panel
   });
};
Ext.extend(Fos.CustomsWin,Ext.Window);
