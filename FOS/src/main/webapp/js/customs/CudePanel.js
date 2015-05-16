//报关单列表
Fos.CudeGridPanel = function(_consign) {
	var  m= getRM(_consign.get('consBizClass'),_consign.get('consBizType'),_consign.get('consShipType'))+M3_CUDE;
	
	var store =  new Ext.data.Store({url:SERVICE_URL,
		baseParams:{A:'CUDE_Q',mt:'xml'},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',
			record:'FCustomsDeclaration',id:'id'},FCustomsDeclaration),
		remoteSort:false,
		sortInfo:{field:'cudeId', direction:'desc'}
	});
	
	store.load({params:{consId:_consign.get('consId')}});	
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	{header:C_NO,dataIndex:'cudeId',width:60},
	{header:C_STATUS,dataIndex:'cudeStatus',renderer:getCDST,width:60},	
	{header:C_CUSTOM_AGENCY,dataIndex:'cudeVendorName',width:200},
	{header:C_PRE_NO,dataIndex:'cudePreNo'},
	{header:C_CUSTOMS_NO,dataIndex:'cudeCustomsNo'},
	{header:C_RECORD_NO,dataIndex:'cudeRecordNo'},
	{header:C_CONVEYANCE_S,dataIndex:'cudeConveyance'},
	{header:C_TRAFFIC_NO,dataIndex:'cudeBlNo'},
	{header:C_CUDE_RELEASE_DATE,dataIndex:'cudeReleaseDate',renderer:formatDate},
	{header:C_CONS_CLOSE_DATE,dataIndex:'cudeCloseDate',renderer:formatDate},
	{header:C_SHUTOUT_DATE,dataIndex:'cudeShutoutDate',renderer:formatDate},
	{header:C_DECLARE_DATE,dataIndex:'cudeDeclarDate',renderer:formatDate},
	{header:C_REFUND_DATE,dataIndex:'cudeRefundDate',renderer:formatDate},
	{header:C_INSPECTION_FLAG,dataIndex:'cudeInspectionFlag',renderer:boolRender,width:100},	
	{header:C_CUDE_INSPECTION_DATE,dataIndex:'cudeInspectionDate',renderer:formatDate}
	],defaults:{sortable:true,width:100}});
	
	var newCude=function(){
		var rid=GGUID();
		var c = new FCustomsDeclaration({id:rid,cudeId:rid,cudeNo:'',
			consId:_consign.get('consId'),
			consNo:_consign.get('consNo'),
			consMasterId:_consign.get('consMasterId'),
			consMasterNo:_consign.get('consMasterNo'),
			cudeVendorId:_consign.get('consCustomsVendor'),
			cudeVendorName:_consign.get('consCustomsVendorName'),
			consContractNo:_consign.get('consContractNo'),
			cudeCreateDate:new Date(),			
			consBizClass:_consign.get('consBizClass'),			
			cudeCustomer:_consign.get('custName'),
			cudeShipper:_consign.get('consShipper'),
			cudeConsignee:_consign.get('consConsignee'),
			cudeEntryDate:_consign.get('consLoadDate'),
			cudeDeclarDate:new Date(),
			cudeGrossWeight:_consign.get('consBizType')==BT_B?_consign.get('consTotalGrossWeight')*1000:_consign.get('consTotalGrossWeight'),
			cudeNetWeight:_consign.get('consBizType')==BT_B?_consign.get('consTotalNetWeight')*1000:_consign.get('consTotalNetWeight'),
			cudePlace:_consign.get('consPolCn'),
			cudePlaceEn:_consign.get('consPolEn'),			
			cudePackageNum:_consign.get('consTotalPackages'),
			packCodeEn:_consign.get('packName'),
			cudeTotalSay:_consign.get('consTotalPackagesInWord'),			
			cudeConveyance:_consign.get('vessName')+' '+_consign.get('voyaName'),
			cudeBlNo:_consign.get('consMblNo'),
			cudeTransFlag:_consign.get('consTransFlag'),
			cudePartialFlag:_consign.get('consPartialFlag'),
			cudeContractNo:_consign.get('consTradeContractNo'),
			cudeLoadCountry:_consign.get('consBizClass')==BC_I?getCOUN(_consign.get('consTradeCountry')):'CHINA',
			cudeDischargeCountry:_consign.get('consBizClass')==BC_E?getCOUN(_consign.get('consTradeCountry')):'CHINA',
			cudePol:_consign.get('consPolCn'),
			cudePolEn:_consign.get('consPolEn'),
			cudePod:_consign.get('consPodCn'),
			cudePodEn:_consign.get('consPodEn'),			
			cudeContainerNo:_consign.get('consContainerNo'),
			cudeStatus:'1',
			cudeDocStatus:'0',
			version:'0',
			rowAction:'N'
		});
		return c;
	};
	
	this.addCude = function(){
		var cude = newCude();
		var win = new Fos.CustomsWin(store,_consign,cude);
		win.show();
	};
	
	this.addCudeByCargo=function(b){
		var r = newCude();
		store.insert(0,r);
		r.set('rowAction','N');
		r.set('cudeGrossWeight',_consign.get('consBizType')==BT_B?b.get('cargGrossWeight')*1000:b.get('cargGrossWeight'));
		r.set('cudeNetWeight',_consign.get('consBizType')==BT_B?b.get('cargNetWeight')*1000:b.get('cargNetWeight'));
		r.set('cudePackageNum',b.get('cargPackageNum'));
		r.set('packCode',b.get('packName'));
		sm.selectFirstRow();		
		
		var rid=GGUID();
		var entry = new FCustomsEntry({id:rid,
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
			cuenRemarks:'',
			version:'0',
			rowAction:'N'
		});
		
		var win = new Fos.CustomsWin(store,_consign,r,entry);
		win.show();
		
	};
	
	this.removeCude = function(){
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){
           		var xml = SMTX4R(sm,'FCustomsDeclaration','cudeId');
           		Ext.Ajax.request({
           			url:SERVICE_URL,
           			method:'POST',
           			params:{A:'CUDE_S'},
					success: function(){
						sm.each(function(p){store.remove(p);});
						XMG.alert(SYS,M_S);
					},
					failure: function(r,o){
						XMG.alert(SYS,M_F+r.responseText);
					},
					xmlData:FOSX(xml)
				});
           }});
		}
       	else 
       		XMG.alert(SYS,M_R_P);
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
	
		
	//编辑
	var btnEdit = new Ext.Button({text:C_EDIT,
		disabled:NR(m+F_V),
		iconCls:'option',
		handler:function(){
			var r = sm.getSelected();
			if(r){
				var win = new Fos.CustomsWin(store,_consign,r);
				win.show();
			}
			else 
				XMG.alert(SYS,M_NO_DATA_SELECTED);
		}
	});
	
	Fos.CudeGridPanel.superclass.constructor.call(this, { 
		id: "T_CUDE_" +_consign.get('id'),
		header:_consign.get('bizType')==BT_G,
		title:C_SR_CUDE,
		autoScroll:true,		
		store:store,
		sm:sm,
		cm:cm,
		tbar:[btnAdd,'-',btnEdit,'-',btnRemove],
		listeners:{
			rowdblclick: function(grid, rowIndex, event){
				var r = sm.getSelected();
				if(r){
					var win = new Fos.CustomsWin(store,_consign,r);
					win.show();
				}
			}
		}
	});
};

Ext.extend(Fos.CudeGridPanel, Ext.grid.GridPanel);


//报关单窗口
Fos.CustomsWin = function(_store,_consign,_cude,_item) {
	
	var  m= getRM(_consign.get('consBizClass'),_consign.get('consBizType'),_consign.get('consShipType'))+M3_CUDE;
		
	entryStore = GS('CUEN_Q','FCustomsEntry',FCustomsEntry,'cuenId','DESC','','S_CUEN','cuenId');
	entryStore.load({params:{cudeId:_cude.get('cudeId')}});	
	
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
	     {header:_consign.get('consBizClass')==BC_I?C_COL_A:C_COUNTRY_DESTINATION,dataIndex:'cuenCountry',renderer:getCOUN,
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
		var rid=GGUID();
		var t = new FCustomsEntry({id:rid,
			cuenId:rid,
			cudeId:_cude.get('cudeId'),
			consId:_consign.get('consId'),					
			cuenCargoNameEn:_consign.get('consCargoNameEn'),
			cuenCargoNameCn:_consign.get('consCargoNameCn'),
			cuenPackageNum:_consign.get('consTotalPackages'),				
			cuenCargoUnit:_consign.get('packName'),
			cuenCargoGrossWeight:_consign.get('consTotalGrossWeight'),
			cuenCargoNetWeight:_consign.get('consTotalNetWeight'),
			cuenCargoMeasurement:_consign.get('consTotalMeasurement'),
			cuenVersion:1,
			currCode:'USD',
			version:0,
			rowAction:'N'
		});
		
		entryStore.insert(0,t);
		entryGrid.startEditing(0,1);
	};
	
	var loadEntry = function(){		
		var win = new Fos.CargoLookupWin('CARG_Q',_consign.get('consId'));
		win.addButton({text:C_OK,scope:this,handler:function(){
			var g = win.findById('G_CARG_LOOKUP');
			var a = g.getSelectionModel().getSelections();
			if(a){
				for(var i=0;i<a.length;i++){
						var rid=GGUID();
						var t = new FCustomsEntry({id:rid,cuenId:rid,
							cudeId:_cude.get('cudeId'),
							consId:_cude.get('consId'),
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
							version:0,
							rowAction:'N'
						});
						entryStore.insert(0,t);
						entryGrid.startEditing(0,1);
				}
			}
			win.close();
		}			
		},this);
		win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
		win.show();	
	};
	
	var removeEntry = function(){
		var r = entryGrid.getSelectionModel().getSelections();
		for(var i=0;i<r.length;i++){
			r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');				
			entryStore.remove(r[i]);
		}
	};
	
	
	//商品列表
	entryGrid = new Ext.grid.EditorGridPanel({title:C_CUDE_CARGO_LIST,
		colapsable:true,
		border:false,
		autoScroll:true,
		height:200,
		sm:sm2,
		cm:cm2,
		clicksToEdit:1,
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
	var cboCustomAgency = new Fos.CustomerLookup({fieldLabel:C_CUSTOM_AGENCY,
		custType:'custCustomFlag',
		name:'cudeVendorName',
		value:_cude.get('cudeVendorName'),
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
		anchor:'95%',
			listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();					
					_cude.set('cudeVendorId','');
					_cude.set('cudeVendorName','');
				}
			},
			select:function(c,r,i){
				this.find('name','cudeVendorContact')[0].setValue(r.get('custContact'));
				this.find('name','cudeVendorTel')[0].setValue(r.get('custTel'));
				_cude.set('cudeVendorId',r.get('custId'));
				_cude.set('cudeVendorName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}
	});
	
	//出口口岸
	var txtCudePodEn = new Ext.form.TextField({fieldLabel:_consign.get('consBizClass')==BC_E?C_PORT_EX:C_PORT_IM,
		name:_consign.get('consBizClass')==BC_E?'cudePol':'cudePod',
		value:_consign.get('consBizClass')==BC_E?_cude.get('cudePol'):_cude.get('cudePod'),
		anchor:'97.5%'
	});
	
	//出口口岸英文
	var txtCudePod = new Ext.form.TextField({fieldLabel:(_consign.get('consBizClass')==BC_E?C_PORT_EX:C_PORT_IM)+C_ENGLISH,
		name:_consign.get('consBizClass')==BC_E?'cudePolEn':'cudePodEn',
		value:_consign.get('consBizClass')==BC_E?_cude.get('cudePolEn'):_cude.get('cudePodEn'),
		anchor:'97.5%'
	});
	
	//经营单位
	var cboCustomer = new Fos.CustomerLookup({fieldLabel:C_BIZ_COMPANY,
		custType:'custBookerFlag',
		name:'cudeCustomer',
		value:_cude.get('cudeCustomer'),
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
		selectOnFocus:true,anchor:'97.5%',
	    listeners:{scope:this, 	 			     	
	     	select:function(c,r,i){ 	 			     		
	     		c.setValue(r.get('custNameCn'));
	     	},
	     	keydown:{fn:function(f,e){
	     		LC(f,e,'custBookerFlag');
	     		},buffer:BF
	     	}
	     }
	});
	
	//可分批
	var txtPartial = new Ext.form.Checkbox({xtype:'checkbox',
		labelSeparator:'',
		boxLabel:C_PARTIAL_FLAG,
		tabIndex:19,
		name:'consPartialFlag',
		value:_cude.get('consPartialFlag'),
		checked:_consign.get('consPartialFlag')=='1'
	});
	
	//可转运
	var txtTrans = new Ext.form.Checkbox({xtype:'checkbox',
		labelSeparator:'',
		boxLabel:C_TANS_FLAG,
		tabIndex:20,
		name:'cudeTransFlag',
		value:_cude.get('cudeTransFlag'),
		checked:_consign.get('cudeTransFlag')=='1'
	});

	//大写金额
	var txtTotalAmountCap = new Ext.form.TextField({fieldLabel:C_CAP_AMOUNT,
		name:'cudeTotalAmountCap',
		value:_cude.get('cudeTotalAmountCap'),
		anchor:'95%'
	});	
	
	
	
	//发货单位、收货单位
	var txtCargoCompany = new Ext.form.TextField({fieldLabel:_consign.get('consBizClass')==BC_E?C_SHIPPER_COMPANY:C_CONSIGN_COMPANY,
		name:'cudeCargoCompany',
		value:_cude.get('cudeCargoCompany'),
		anchor:'97.5%'
	});	
	
	//许可证号
	var txtCertificateNo = new Ext.form.TextField({fieldLabel:C_CERTIFICATE_NO,
		name:'cudeCertificateNo',
		value:_cude.get('cudeCertificateNo'),
		anchor:'97.5%'
	});	
	
	//批准文号
	var txtApprovalNo = new Ext.form.TextField({fieldLabel:C_APPROVAL_NO,
		name:'cudeApprovalNo',
		value:_cude.get('cudeApprovalNo'),
		anchor:'95%'
	});	
	
	//合同协议号
	var txtContractNo = new Ext.form.TextField({fieldLabel:C_CONTRACT_NO_A,
		name:'consContractNo',
		value:_cude.get('consContractNo'),
		anchor:'95%'
	});	
	
	//预录入号
	var txtPreNo = new Ext.form.TextField({fieldLabel:C_PRE_NO,
		name:'cudePreNo',
		value:_cude.get('cudePreNo'),
		anchor:'97.5%'
	});	
	
	//报关类型
	var cboCudeType = new Ext.form.ComboBox({fieldLabel:C_CUSTOMS_TYPE,
		name:'cudeType',
		value:_cude.get('cudeType'),
		store:getCustomsType_S(),
		displayField:'cutyName',
		valueField:'cutyName',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	//商业发票号
	var txtInvoiceNo = new Ext.form.TextField({fieldLabel:C_COMMERCIAL_INVOICE_NO,
		name:'cudeInvoiceNo',
		value:_cude.get('cudeInvoiceNo'),
		anchor:'95%'
	});	
	
	//贸易合同号
	var txtCudeContractNo = new Ext.form.TextField({fieldLabel:C_TRADE_CONTRACT_NO,
		name:'cudeContractNo',
		value:_cude.get('cudeContractNo'),
		anchor:'95%'
	});	
	
	//报关联系人
	var txtVendorContact = new Ext.form.TextField({fieldLabel:C_CUDE_CONTACT,
		name:'cudeVendorContact',
		value:_cude.get('cudeVendorContact'),
		anchor:'95%'
	});	
	
	//备案号
	var txtRecordNo = new Ext.form.TextField({fieldLabel:C_RECORD_NO,
		name:'cudeRecordNo',
		value:_cude.get('cudeRecordNo'),
		anchor:'95%'
	});	
	
	//运输方式
	var cboTratCode = new Ext.form.ComboBox({fieldLabel:C_TRAT,
		name:'tratCode',
		value:_cude.get('tratCode'),
		store:getTRAT_S(),
		displayField:'tratName',
		valueField:'tratName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	//贸易方式
	var cboTrtyCode = new Ext.form.ComboBox({fieldLabel:C_TRTY,
		name:'trtyCode',
		value:_cude.get('trtyCode'),
		store:getTRTY_S(),
		displayField:'trtyName',
		valueField:'trtyName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	//运抵国(地区)
	var txtCountry = new Ext.form.TextField({fieldLabel:_consign.get('consBizClass')==BC_E?C_COD_A:C_COL_A,
		name:_consign.get('consBizClass')==BC_E?'cudeDischargeCountry':'cudeLoadCountry',
		value:_consign.get('consBizClass')==BC_E?_cude.get('cudeDischargeCountry'):_cude.get('cudeLoadCountry'),
		anchor:'95%'
	});	
	
	//成交方式
	var txtTrteCode = new Ext.form.ComboBox({fieldLabel:C_CUDE_TRTE,
		name:'trteCode',
		value:_cude.get('trteCode'),
		store:getTRTE_S(),
		displayField:'trteName',
		valueField:'trteName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});	
	
	//成交方式(英文)
	var txtTrteCodeEn = new Ext.form.TextField({fieldLabel:C_CUDE_TRTE+C_ENGLISH,
		name:'trteCodeEn',
		value:_cude.get('trteCodeEn'),
		anchor:'95%'
	});	
	
	//件数
	var txtPackageNum = new Ext.form.TextField({fieldLabel:C_PACKAGES,
		name:'cudePackageNum',
		value:_cude.get('cudePackageNum'),
		anchor:'95%'
	});	
	
	//生产厂家
	var txtManu = new Ext.form.TextField({fieldLabel:C_MANUFACTURE,
		name:'cudeManu',
		value:_cude.get('cudeManu'),
		anchor:'95%'
	});	
	
	//用途
	var cboUssagName = new Ext.form.ComboBox({fieldLabel:C_USAG,
		name:'usagName',
		value:_cude.get('usagName'),
		store:getUSAG_S(),
		displayField:'usagName',
		valueField:'usagName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});	
	
	//海关备案代码
	var txtCustomsCode = new Ext.form.TextField({fieldLabel:C_CUST_CUDE_CODE,
		name:'attr1',
		value:_cude.get('attr1'),
		xtype:'textfield',
		anchor:'95%'
	});	
	
	//商业发票日期
	var dtInvoiceDate = new Ext.form.DateField({fieldLabel:C_COMMERCIAL_INVOICE_DATE,
		name:'cudeInvoiceDate',
		value:_cude.get('cudeInvoiceDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//合同日期
	var dtContractDate = new Ext.form.DateField({fieldLabel:C_CONTRACT_DATE,
		name:'cudeContractDate',
		value:_cude.get('cudeContractDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	
	//报关联系电话
	var txtCudeTel = new Ext.form.TextField({fieldLabel:C_CUDE_TEL,
		name:'cudeVendorTel',
		value:_cude.get('cudeVendorTel'),
		anchor:'95%'
	});	
	
	//出口日期
	var dtCudeEntryDate = new Ext.form.DateField({fieldLabel:_consign.get('consBizClass')==BC_E?C_EX_DATE:C_IM_DATE,
		name:'cudeEntryDate',
		value:_cude.get('cudeEntryDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//运输工具名称号码
	var txtConveyance = new Ext.form.TextField({fieldLabel:C_CONVEYANCE_NAME,
		name:'cudeConveyance',
		value:_cude.get('cudeConveyance'),
		anchor:'95%'
	});	
	
	//征免性质
	var cboLetyCode = new Ext.form.ComboBox({fieldLabel:C_LETY,
		name:'letyCode',
		value:_cude.get('letyCode'),
		store:getLETY_S(),
		displayField:'letyName',
		valueField:'letyName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});	
	
	//指运港
	var txtPod = new Ext.form.TextField({fieldLabel:_consign.get('consBizClass')==BC_E?C_POD_A:C_POL,
		name:_consign.get('consBizClass')==BC_E?'cudePod':'cudePol',
		value:_consign.get('consBizClass')==BC_E?_cude.get('cudePod'):_cude.get('cudePol'),
		anchor:'95%'
	});	
	
	//指运港(英文)
	var txtPodEn = new Ext.form.TextField({fieldLabel:(_consign.get('consBizClass')==BC_E?C_POD_A:C_POL)+C_ENGLISH,
		name:_consign.get('consBizClass')==BC_E?'cudePodEn':'cudePolEn',
		value:_consign.get('consBizClass')==BC_E?_cude.get('cudePodEn'):_cude.get('cudePolEn'),
		anchor:'95%'
	});	
	
	//运费
	var txtFreight = new Ext.form.TextField({fieldLabel:C_FREIGHT,
		name:'cudeFreight',
		value:_cude.get('cudeFreight'),
		anchor:'95%'
	});	
	
	//包装种类
	var txtPackCode = new Ext.form.TextField({fieldLabel:C_PACK,
		name:'packCode',
		value:_cude.get('packCode'),
		anchor:'95%'
	});	
	
	//包装种类(英文)
	var txtPackCodeEn = new Ext.form.TextField({fieldLabel:C_PACK+C_ENGLISH,
		name:'packCodeEn',
		value:_cude.get('packCodeEn'),
		anchor:'95%'
	});	
	
	//数量
	var txtNum = new Ext.form.TextField({fieldLabel:C_QUANTITY,
		name:'cudeNum',
		value:_cude.get('cudeNum'),
		anchor:'95%'
	});	
	
	//杂费
	var txtCharge = new Ext.form.TextField({fieldLabel:C_CHARGE,
		name:'cudeCharge',
		value:_cude.get('cudeCharge'),
		anchor:'95%'
	});	
	
	//装船日期
	var dtLoadDateF = new Ext.form.DateField({fieldLabel:C_LOAD_DATE,
		name:'cudeShipDateF',
		value:_cude.get('cudeShipDateF'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//海关编号
	var txtCustomsNo = new Ext.form.TextField({fieldLabel:C_CUSTOMS_NO,
		name:'cudeCustomsNo',
		value:_cude.get('cudeCustomsNo'),
		anchor:'97.5%'
	});	
	
	//申报日期
	var dtDeclarDate = new Ext.form.DateField({fieldLabel:C_DECLARE_DATE,
		name:'cudeDeclarDate',
		value:_cude.get('cudeDeclarDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//提运单号
	var txtBlNo = new Ext.form.TextField({fieldLabel:C_TRAFFIC_NO,
		name:'cudeBlNo',
		value:_cude.get('cudeBlNo'),
		xtype:'textfield',
		anchor:'95%'
	});	
	
	//结汇方式
	var cboExseCode = new Ext.form.ComboBox({fieldLabel:C_EXSE,
		name:'exseCode',
		value:_cude.get('exseCode'),
		store:getEXSE_S(),
		displayField:'exseName',
		valueField:'exseName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});	
	
	//征税比例
	var txtLevyPercent = new Ext.form.TextField({fieldLabel:C_LEVY_PERCENT,
		name:'cudeLevyPercent',
		value:_cude.get('cudeLevyPercent'),
		anchor:'95%'
	});	
	
	//结汇方式(英文)
	var txtExseCodeEn = new Ext.form.TextField({fieldLabel:C_EXSE+C_ENGLISH,
		name:'exseCodeEn',
		value:_cude.get('exseCodeEn'),
		anchor:'95%'
	});	
	
	//境内货源地
	var txtPlace = new Ext.form.TextField({fieldLabel:_consign.get('consBizClass')==BC_E?C_ORI_PLACE_D:C_DES_PLACE_D,
		name:'cudePlace',
		value:_cude.get('cudePlace'),
		anchor:'95%'
	});	
	
	//境内货源地(英文)
	var txtPlaceEn = new Ext.form.TextField({fieldLabel:(_consign.get('consBizClass')==BC_E?C_ORI_PLACE_D:C_DES_PLACE_D)+C_ENGLISH,
		name:'cudePlaceEn',
		value:_cude.get('cudePlaceEn'),
		anchor:'95%'
	});	
	
	//毛重
	var txtGrossWeight = new Ext.form.TextField({fieldLabel:C_GW_S+C_KGS,
		name:'cudeGrossWeight',
		value:_cude.get('cudeGrossWeight'),
		anchor:'95%'
	});	
	
	
	//净重
	var txtNetWeight = new Ext.form.TextField({fieldLabel:C_MW_S+C_KGS,
		name:'cudeNetWeight',
		value:_cude.get('cudeNetWeight'),
		anchor:'95%'
	});	
	
	//体积
	var txtMeasurement = new Ext.form.TextField({fieldLabel:C_CBM_S,
		name:'cudeMeasurement',
		value:_cude.get('cudeMeasurement'),
		anchor:'95%'
	});	
	
	//保费
	var txtInsurance = new Ext.form.TextField({fieldLabel:C_INSURANCE_FEE,
		name:'cudeInsurance',
		value:_cude.get('cudeInsurance'),
		anchor:'95%'
	});	
	
		
	//大写件数
	var txtTotalSay = new Ext.form.TextField({fieldLabel:C_PACKAGES_CAP,
		name:'cudeTotalSay',
		value:_cude.get('cudeTotalSay'),
		anchor:'95%'
	});
	
	
	//合计金额
	var txtTotalAmount = new Ext.form.NumberField({fieldLabel:C_TOTAL_AMOUNT,
		name:'cudeTotalAmount',
		value:_cude.get('cudeTotalAmount'),
		anchor:'95%',
		listeners:{
			scope:this,
			change:function(f,nv,ov){
				txtTotalAmountCa_consign.setValue(N2D(nv));
			}
		}
	});	
		
	//委托信息
	var frm = new Ext.Panel({padding:5,
		title:C_CUSTOM_INFO,
		collapsible:true,            	 
			items:[
			{layout:'column',border:false,items:[
			                                     
			{columnWidth:.4,layout:'form',labelAlign:'right',border:false,items:[txtPreNo]},
   			{columnWidth:.4,layout:'form',labelAlign:'right',border:false,items:[txtCustomsNo]},                     
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtRecordNo]},
   			
   			{columnWidth:.4,layout:'form',labelAlign:'right',border:false,items:[txtCudePod]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,
				items:[_consign.get('consBizClass')=='A'?txtManu:cboUssagName]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[dtCudeEntryDate]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[dtDeclarDate]},
   			
   			{columnWidth:.4,layout:'form',labelAlign:'right',border:false,items:[cboCustomer]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[cboTratCode]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtConveyance]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[txtBlNo]},
   			
            
   			{columnWidth:.4,layout:'form',labelAlign:'right',border:false,items:[txtCargoCompany]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[cboTrtyCode]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[cboLetyCode]},
   			{columnWidth:.2,layout:'form',labelAlign:'right',border:false,items:[_consign.get('consBizClass')==BC_E?cboExseCode:txtLevyPercent]},
   			
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
			
			{columnWidth:1,layout:'column',labelAlign:'right',border:false,
				items:[   						       
		   			{columnWidth:.5,layout:'form',labelAlign:'right',border:false,
		   				items:[{fieldLabel:C_CONTAINER_NO,name:'cudeContainerNo',xtype:'textarea',anchor:'95%'}]},    			   			
		   			{columnWidth:.5,layout:'form',labelAlign:'right',border:false,
		   						items:[{fieldLabel:C_MARKS_REMARKS,name:'cudeMarks',xtype:'textarea',anchor:'95%'}]}
   				]}
			]}	
		]
	});
	
	
	
	//报送日期
	var dtDocSendDate = new Ext.form.DateField({fieldLabel:C_DOC_SEND_DATE,
		name:'cudeDocSendDate',
		value:_cude.get('cudeDocSendDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//放单日期
	var dtDocRecvDate = new Ext.form.DateField({fieldLabel:C_DOC_BACK_DATE,
		name:'cudeDocRecvDate',
		value:_cude.get('cudeDocRecvDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//是否转关
	var chkTransitedFlag = new Ext.form.Checkbox({
		fieldLabel:C_TRANSITED_FLAG,
		name:'cudeTransitedFlag',
		value:_cude.get('cudeTransitedFlag'),
		anchor:'95%'
     });
	
	//报关单份数
	var txtDocNum = new Ext.form.NumberField({fieldLabel:C_CUDE_DOC_NUN,
		name:'cudeDocNum',
		value:_cude.get('cudeDocNum'),
		anchor:'95%'
	});	
	
	//报退日期
	var dtRefundDate = new Ext.form.DateField({fieldLabel:C_REFUND_DATE,
		name:'cudeRefundDate',
		value:_cude.get('cudeRefundDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//是否退税
	var chkRefundFlag = new Ext.form.Checkbox({
		fieldLabel:C_REFUND_FLAG,
		name:'cudeRefundFlag',
		value:_cude.get('cudeRefundFlag'),
		anchor:'95%'
     });
	
	
	//C_CUDE_DOC_COLOR
	var cboDocColor = new Ext.form.ComboBox({fieldLabel:C_CUDE_DOC_COLOR,
		name:'cudeDocColor',
		value:_cude.get('cudeDocColor'),
		store:DC_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});	
	
	//放行日期
	var dtReleaseDate = new Ext.form.DateField({fieldLabel:C_CUDE_RELEASE_DATE,
		name:'cudeReleaseDate',
		value:_cude.get('cudeReleaseDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//结关日期
	var dtCloseDate = new Ext.form.DateField({fieldLabel:C_CONS_CLOSE_DATE,
		name:'cudeCloseDate',
		value:_cude.get('cudeCloseDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//是否查验
	var chkInspectionFlag = new Ext.form.Checkbox({
		fieldLabel:C_INSPECTION_FLAG,
		name:'cudeInspectionFlag',
		value:_cude.get('cudeInspectionFlag'),
		anchor:'95%'
     });
	
	//查验类型
	var cboCctyName = new Ext.form.ComboBox({fieldLabel:C_CCTY,
		name:'cctyName',
		value:_cude.get('cctyName'),
		store:getCCTY_S(),
		displayField:'cctyName',
		valueField:'cctyName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});	
	
	//查验日期 CUDE_INSPECTION_DATE
	var dtInspectionDate = new Ext.form.DateField({fieldLabel:C_CUDE_INSPECTION_DATE,
		name:'cudeInspectionDate',
		value:_cude.get('cudeInspectionDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//查验备注
	var txtInspectionRemark = new Ext.form.TextField({fieldLabel:C_INSPECTION_REMARK,
		name:'cudeInspectionRemark',
		value:_cude.get('cudeInspectionRemark'),
		anchor:'95%'
	});	
	
	//退税单份数
	var txtRefundDocNum = new Ext.form.NumberField({fieldLabel:C_REFUND_DOC_NUN,
		name:'cudeRefundDocNum',
		value:_cude.get('cudeRefundDocNum'),
		anchor:'95%'
	});	
	
	//退关日期
	var dtShutoutDate = new Ext.form.DateField({fieldLabel:C_SHUTOUT_DATE,
		name:'cudeShutoutDate',
		value:_cude.get('cudeShutoutDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	
	//是否开箱
	var chkOpenFlag = new Ext.form.Checkbox({
		fieldLabel:C_CUDE_OPEN_FLAG,
		name:'cudeOpenFlag',
		value:_cude.get('cudeOpenFlag'),
		anchor:'95%'
     });
	
	//税费征收情况
	var txtTaxLevy = new Ext.form.TextArea({fieldLabel:C_CUDE_TAX_LEVY,
		name:'cudeTaxLevy',
		value:_cude.get('cudeTaxLevy'),
		anchor:'95%'
	});	
	
	//备注
	var txtRemail = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'cudeRemarks',
		value:_cude.get('cudeRemarks'),
		anchor:'95%'
	});	
	
	//报关员
	var txtDeclarent = new Ext.form.TextField({fieldLabel:C_DECLARENT,
		name:'cudeDeclarent',
		value:_cude.get('cudeDeclarent'),
		anchor:'95%'
	});	
	
	//免柜期 CUDE_CONTAINER_FREE_DAYS
	var txtContainerFreeDays = new Ext.form.NumberField({fieldLabel:C_CONTAINER_FREE_DAYS,
		name:'cudeContainerFreeDays',
		value:_cude.get('cudeContainerFreeDays'),
		anchor:'95%'
	});	
	  
	//滞报日期 CUDE_EXPIRE_DECLAR_DATE
	var dtExpireDeclarDate = new Ext.form.DateField({fieldLabel:C_CUDE_EXPIRE_DECLAR_DATE,
		name:'cudeExpireDeclarDate',
		value:_cude.get('cudeExpireDeclarDate'),
		format:DATEF,
		anchor:'95%'
	});	
	
	//滞柜日期 CUDE_EXPIRE_CONTAINER_DATE
	var dtExpireContainerDate = new Ext.form.DateField({fieldLabel:C_CUDE_EXPIRE_CONTAINER_DATE,
		name:'cudeExpireContainerDate',
		value:_cude.get('cudeExpireContainerDate'),
		format:DATEF,
		anchor:'95%'
	});	
			
	//报关记录
	var frmRecord = new Ext.Panel({title:C_CUDE_RECORD,
		layout:'column',
		layoutConfig:{columns:4},
		padding:5,
		items: [
		        {columnWidth:.25,layout:'form',labelAlign:'right',border:false,
		        	items:[cboCustomAgency,dtDocSendDate,dtDocRecvDate,txtContainerFreeDays,chkInspectionFlag,txtDeclarent]},
		        	
		        {columnWidth:.25,layout:'form',labelAlign:'right',border:false,
		        	items:[txtVendorContact,txtDocNum,dtRefundDate,dtExpireDeclarDate,cboCctyName,chkTransitedFlag]},
		        	
		        {columnWidth:.25,layout:'form',labelAlign:'right',border:false,
		        	items:[txtCudeTel,cboDocColor,dtReleaseDate,dtExpireContainerDate,dtInspectionDate,chkRefundFlag]},
		        	
		        {columnWidth:.25,layout:'form',labelAlign:'right',border:false,
		        	items:[cboCudeType,txtRefundDocNum,dtShutoutDate,dtCloseDate,txtInspectionRemark,chkOpenFlag
			]},
			{columnWidth:1,layout:'column',border:false,items:[
		         {columnWidth:.5,layout:'form',labelAlign:'right',border:false,items:[txtTaxLevy]},
				 {columnWidth:.5,layout:'form',labelAlign:'right',border:false,items:[txtRemail]}
	         ]}
		 ]
	});
	
	
	
	var invoicePanel = new Ext.Panel({padding:5,
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
			    {fieldLabel:C_SHIPPER,name:'cudeShipper',xtype:'textarea',anchor:'95%'}
				]},
			{columnWidth:.5,layout:'form',labelAlign:'right',border:false,items:[
				{fieldLabel:C_CONSIGNEE,name:'cudeConsignee',xtype:'textarea',anchor:'95%'}]}
		]
	});
	
	
    
    this.updateToolBar=function(){
    	var s=_cude.get('cudeStatus');
		btnRemove.setDisabled(NR(m+F_R)||s>1);
		btnSave.setDisabled(NR(m+F_M)||s>1);
		btnApply.setDisabled(NR(m+F_M)||s!=1);
		btnPass.setDisabled(NR(m+F_M)||s!=2);
		btnExit.setDisabled(NR(m+F_M)||s!=3);
		btnCancelApply.setDisabled(NR(m+F_M)||s!=2);
		btnCancelPass.setDisabled(NR(m+F_M)||s!=3);
		btnCancelExit.setDisabled(NR(m+F_M)||s!=4);
    };	
	
	
	var expPanel = new Fos.SectionExGrid(_consign,'INSP',this);	
	
	this.getVendorId=function(){
    	if(_cude.get('cudeVendorId'))
    		return _cude.get('cudeVendorId');
    	else
    		return _consign.get('consCustomsVendor');
    };
    
	this.getVendorName=function(){
		if(_cude.get('cudeVendorName'))
			return _cude.get('cudeVendorName');
		else
			return _consign.get('consCustomsVendorName');
	};
	
	this.updateStatus=function(s){    	
    	Ext.Ajax.request({scope:this,
    		url:SERVICE_URL,
    		method:'POST',
    		params:{
    			A:'CUDE_U',
    			consId:_cude.get('consId'),
    			cudeId:_cude.get('cudeId'),
    			cudeStatus:s
    		},
			success: function(r){
				_cude.set('cudeStatus',s);
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(r){
				XMG.alert(SYS,M_F+r.responseText);
			}
		});
    };
	
	var btnSave = new Ext.Button({text:C_SAVE,
		disabled:NR(m+F_M),
		iconCls:'save',
		scope:this,
		handler:function(){
			entryGrid.stopEditing();
			
			saveToRecord(frm,_cude);
			saveToRecord(frmRecord,_cude);
			saveToRecord(invoicePanel,_cude);			
			
			var xml =  RTX(_cude,'FCustomsDeclaration',FCustomsDeclaration);
			
			var ca = entryStore.getModifiedRecords();
			if(ca.length>0){
				var x = ATX(ca,'FCustomsEntry',FCustomsEntry);
				xml=xml+x;
			};
			
			btnSave.setDisabled(true);
		 	Ext.Ajax.request({scope:this,
		 		url:SERVICE_URL,
		 		method:'POST',
		 		params:{A:'CUDE_S'},
				success: function(res){
					var cude = XTR(res.responseXML,'FCustomsDeclaration',FCustomsDeclaration);		
					
					var ra = _cude.get('rowAction');
					
					var f = FCustomsDeclaration.prototype.fields;
					_cude.beginEdit();
	   				for (var i = 0; i < f.keys.length; i++) {
	   					var fn = ''+f.keys[i];
	   					_cude.set(fn,cude.get(fn));
	   				}					
	   				
					var ea = XTRA(res.responseXML,'FCustomsEntry',FCustomsEntry);
					FOSU(entryStore,ea,FCustomsEntry);											
					
					if(ra=='N'){
						_store.add(_cude);
	   				}

					XMG.alert(SYS,M_S);
					btnSave.setDisabled(false);
				},
				failure: function(res){
					XMG.alert(SYS,M_F+res.responseText);
					btnSave.setDisabled(false);
				},
				xmlData:FOSX(xml)
			});
		}
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
	
	//导出
	var btnExport = new Ext.Button({text:C_EXPORT,
		disabled:NR(m+F_E),
		iconCls:'print',
		scope:this,
		menu: {items: 
			[
		   		{text:C_CUSTOM_BILL,scope:this,handler:function(){
		   			EXPC('CUDE','&cudeId='+_cude.get('cudeId'));
		   		}},
		   		{text:C_COMMERCIAL_INVOICE,scope:this,handler:function(){
		   			EXPC('CUDE_INVOICE','&cudeId='+_cude.get('cudeId'));
		   		}},
		   		{text:C_CUDE_PACKING_LIST,scope:this,handler:function(){
		   			EXPC('CUDE_PACKING','&cudeId='+_cude.get('cudeId'));
		   		}},
		   		{text:C_TRADE_CONTRACT,scope:this,handler:function(){
		   			EXPC('CUDE_CONTRACT','&cudeId='+_cude.get('cudeId'));
		   		}}
	   		]}
	});
	
	var cudeDetailPanel = new Ext.Panel({
		header:false,
		border:false,
		autoScroll:true,
		items:[frm,
		       {border:false,layout:'fit',items:entryGrid},
		       frmRecord,
		       invoicePanel,
		       {border:false,layout:'fit',items:expPanel}
		],
		tbar:[btnSave,'-',btnApply,'-',
		      btnCancelApply,'-',btnPass,'-',btnCancelPass,'-',
		      btnExit,'-',btnCancelExit,'-',btnClose,'-',btnCancelClose,'-',btnExport]
    });
	
	Fos.CustomsWin.superclass.constructor.call(this, {title:_consign.get('consNo')+C_CUSTOM_BILL,
		modal:true,
		width:1000,
        height:600,
        layout:'fit',
        maximizable:true,
        maximized:true,
        plain:false,
        buttonAlign:'right',
        items:cudeDetailPanel
   });
};
Ext.extend(Fos.CustomsWin,Ext.Window);	
