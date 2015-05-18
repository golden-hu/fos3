Fos.CudeConsignPanel = function(p,store) {
    
    var locked=p.get('consStatusLock')==1;
    var disable=p.get('editable')==0;
    var m=getRM(p.get('consBizClass'),BT_G,'')+M3_CONS;
    var m1 = getRM(p.get('consBizClass'),BT_G,'');
        
    //业务号
    var txtConsNo = new Ext.form.TextField({fieldLabel:C_CONS_NO,
		style:'{font-weight:bold;color:green;}',
		disabled:true,
		tabIndex:1,
		name:'consNo',
		value:p.get('consNo'),
		xtype:'textfield',
		anchor:'95%'
	});
		
  //操作
	var cboOperator = new Ext.form.ComboBox({fieldLabel:C_OPERATOR,
		itemCls:'required',
		tabIndex:2,
		name:'consOperatorName',
		value:p.get('consOperatorName'),
     	store:getOP_S(),
     	xtype:'combo',
     	displayField:'userName',
     	valueField:'userId',
     	typeAhead: true,
     	mode: 'local',
     	triggerAction: 'all',
     	selectOnFocus:true,
     	anchor:'95%',
     	editable:false,
     	listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consOperatorId','');
					p.set('consOperatorName','');
				}
			},
			select:function(c,r,i){
				p.set('consOperatorId',r.get('userId'));
			}
		}
	});
	
	//业务员
	var cboSalesRep = new Ext.form.ComboBox({fieldLabel:C_SALES,
		itemCls:'required',
		tabIndex:3,
		name:'consSalesRepName',
		value:p.get('consSalesRepName'),
 		store:getSALE_S(),
 		displayField:'userName',
 		editable:false,
 		valueField:'userName',
 		typeAhead: true,
 		mode: 'local',
 		triggerAction: 'all',
 		selectOnFocus:true,anchor:'95%',
 		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consSalesRepId','');
					p.set('consSalesRepName','');
				}
			},
	    	select:function(c,r,i){
	    		p.set('consSalesRepId',r.get('userId'));
	    	}
		}
	});
	
	//部门
	var cboDept = new Ext.form.ComboBox({fieldLabel:C_DEPT,
		itemCls:'required',
		tabIndex:4,
		name:'deptId',
		value:p.get('deptId'),
		editable:false,
		store:getGROU_S(),
		displayField:'grouName',
		valueField:'grouId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	
    //委托单位
	var cboBooker = new Fos.CustomerLookup({fieldLabel:C_BOOKER,
		custType:'custBookerFlag',
		itemCls:'required',
		tabIndex:5,
		name:'custName',
		value:p.get('custName'),
		store:getCS(),
		enableKeyEvents:true,
		xtype:'combo',
		displayField:'custCode',
		valueField:'custCode',
		typeAhead:true,
		mode:'local',
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%',
     	listeners:{
     		scope:this,
	     	blur:function(f){
	     		if(f.getRawValue()==''){
	     			f.clearValue();
	     			p.set('custId','');
	     			p.set('custName','');
	     		}
	     	},
	     	select:function(c,r,i){
	     		this.find('name','custName')[0].setValue(r.get('custNameCn'));
	     		this.find('name','custContact')[0].setValue(r.get('custContact'));
	     		this.find('name','custTel')[0].setValue(r.get('custTel'));
	     		this.find('name','custFax')[0].setValue(r.get('custFax'));
	     		p.set('custId',r.get('custId'));
	     		p.set('custSname',r.get('custCode'));
	     		p.set('custName',r.get('custNameCn'));
	     		c.setValue(r.get('custNameCn'));
	     	},
	     	keydown:{
	     		fn:function(f,e){
	     			LC(f,e,'custBookerFlag');
	     		},buffer:BF
	     	}
	     }
	});
	
	
	
	//客户联系人
	var txtContact = new Ext.form.TextField({fieldLabel:C_CONTACT,
		tabIndex:6,
		name:'custContact',
		value:p.get('custContact'),
		anchor:'95%'
	});
	
	
	//客户联系电话
	var txtCustTel = new Ext.form.TextField({fieldLabel:C_PHONE,
		tabIndex:7,
		name:'custTel',
		value:p.get('custTel'),
		anchor:'95%'
	});
		
	//客户传真
	var txtCustFax = new Ext.form.TextField({fieldLabel:C_FAX,
		tabIndex:8,
		name:'custFax',
		value:p.get('custFax'),
		anchor:'95%'
	});
	
	
	//职务
	var txtCudeTitle = new Ext.form.TextField({fieldLabel:C_CUDE_TITLE,
		tabIndex:8,
		name:'cudeTite',
		value:p.get('cudeTite'),
		anchor:'95%'
	});
	
	//经营单位
	var cboConsCompany = new Fos.CustomerLookup({fieldLabel:C_BIZ_COMPANY,
		custType:'custBookerFlag',
		tabIndex:9,
		name:'consCompany',
		value:p.get('consCompany'),
  		xtype:'combo',
  		displayField:'custCode',
  		valueField:'custCode',
  		typeAhead:true,
  		store:getCS(),
  		enableKeyEvents:true,
		mode:'local',
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%',
     	listeners:{scope:this, 	 			     	
	     	select:function(c,r,i){ 	 			     		
	     		c.setValue(r.get('custNameCn'));
	     		p.set('consCompany',r.get('custNameCn'));
	     	},
	     	keydown:{
	     		fn:function(f,e){
	     			LC(f,e,'custBookerFlag');
	     		},buffer:BF
	     	}
     	}
	});
		
	//客户业务号
	var txtRefNo = new Ext.form.TextField({fieldLabel:C_REF_NO,
		tabIndex:10,
		name:'consRefNo',
		value:p.get('consRefNo'),
		anchor:'95%'
	});
	
	
	//业务类型
	var cboCudeBizType = new Ext.form.ComboBox({fieldLabel:C_BIZ_TYPE,
		name:'cudeBizType',
		value:p.get('cudeBizType'),
		store:cudeBizTypeStore,
		displayField:'NAME',
		valueField:'NAME',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	
	//合同号
	var txtContractNo = new Ext.form.TextField({fieldLabel:C_CONTRACT_NO,
		tabIndex:12,
		name:'consContractNo',
		value:p.get('consContractNo'),
		anchor:'95%'
	});
	
	//贸易方式
	var cboTrtyName = new Ext.form.ComboBox({fieldLabel:C_TRTY,
		name:'trtyName',
		store:getTRTY_S(),
		displayField:'trtyName',
		valueField:'trtyName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	//结算方式
    var cboSettlementWay = new Ext.form.ComboBox({fieldLabel:C_SEWA,
    		tabIndex:9,
    		name:'sewaName',
    		value:p.get('sewaName'),
    		store:getSEWA_S(),
    		xtype:'combo',
    		displayField:'sewaName',
    		valueField:'sewaName',
    		typeAhead: true,
    		mode:'local',
    		triggerAction:'all',
    		selectOnFocus:true,
    		anchor:'95%'
    });
    
    //结算单位
	var cboSettlementObject = new Fos.CustomerLookup({fieldLabel:C_SETTLE_OBJECT,
		custType:'',
		anchor:"95%",
		name:'settlementObjectName',
		value:p.get('settlementObjectName'),
		store:getCS(),
		displayField:'custNameCn',
		valueField:'custId',
		 typeAhead:true,
		 enableKeyEvents:true,
		 mode:'local',
		 tpl:custTpl,
		 itemSelector:'div.list-item',
		 listWidth:400,
		 triggerAction:'all',
		 selectOnFocus:true,
		 listeners:{scope:this,
			 keydown:{
				 fn:function(f,e){
					 LC(f,e,'');
				 },buffer:500
			},
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('settlementObjectId','');
				}
			},
	    	select:function(c,r,i){
	    		p.set('settlementObjectId',r.get('custId'));
	    	}
		 }
	});
	
    
	//委托项目
	var cboServiceRequired = new Ext.form.MultiSelectComboBox({fieldLabel:'委托项目',
		name:'consServiceRequired',
		value:p.get('consServiceRequired'),
		store:getSEIT_S(),
		displayField:'seitName',
		valueField:'seitName',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'97.5%'
	});
	
	//备注
	var txtRemarks = new Ext.form.TextField({fieldLabel:C_REMARKS,
		tabIndex:26,
		name:'consRemarks',
		value:p.get('consRemarks'),
   		anchor:'97.5%'
   	});
	
	var consPanel = new Ext.Panel({title:'委托信息',
		border:true,
		layout:'column',
		padding:10,
		items:[
		    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
				txtConsNo,cboBooker,cboCudeBizType,txtContractNo
			]},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[             	 	
	      	 	cboOperator,txtContact,cboConsCompany,cboTrtyName
	  	    ]},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
	      		cboSalesRep,txtCustTel,txtRefNo,cboSettlementWay
	  	    ]},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[         	        
	      		cboDept,txtCudeTitle,txtCustFax,cboSettlementObject
	  		]},
	  		{columnWidth:.5,layout:'form',border:false,labelWidth:80,items:[         	        
	  		    cboServiceRequired
   	  		]},
   	  		{columnWidth:.5,layout:'form',border:false,labelWidth:80,items:[         	        
   	  		      txtRemarks
   	  	    ]}
	    ]
	});
	
	//报关行
	var cboCustomsVendor = new Fos.CustomerLookup({fieldLabel:C_CUSTOM_AGENCY,
		custType:'custCustomFlag',
		tabIndex:21,
		name:'consCustomsVendorName',
		value:p.get('consCustomsVendorName'),
		store:getCS(),
		enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:400,
		xtype:'combo',
		displayField:'custCode',
		valueField:'custCode',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%',
   		listeners:{scope:this,
   			blur:function(f){
   				if(f.getRawValue()==''){
   					f.clearValue();
   					p.set('consCustomsVendor','');
   					p.set('consCustomsVendorName','');
   				}
   			},
   			select:function(c,r,i){
   				p.set('consCustomsVendor',r.get('custId'));
   				p.set('consCustomsVendorName',r.get('custNameCn'));
   				var obj = this.find('name','consCustomsContact');
   				if(obj.length>0){
   					var ct = obj[0];
   					ct.setValue(r.get('custContact'));    	   					
   				}
   				var obj2 = this.find('name','consCustomsTel');
   				if(obj2.length>0){
   					var ct = obj2[0];
   					ct.setValue(r.get('custTel'));    	   					
   				}
   				c.setValue(r.get('custNameCn'));
   			},
   			keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}
   		}
	});
	
	
	//报关行联系人
	var txtCustomsContact = new Ext.form.TextField({fieldLabel:C_CUDE_CONTACT,
		tabIndex:22,name:'consCustomsContact',
		value:p.get('consCustomsContact'),
		anchor:'95%'
	});
	
	//报关行联系电话
	var txtCustomsTel = new Ext.form.TextField({fieldLabel:C_CUDE_TEL,
		name:'consCustomsTel',
		value:p.get('consCustomsTel'),
		anchor:'95%'
	});
	
	//委托日期
	var dtConsDate = new Ext.form.DateField({fieldLabel:C_CONS_DATE,
		tabIndex:13,
		name:'consDate',
		value:p.get('consDate'),
  		format:DATEF,
  		anchor:'95%',
  		listeners:{
  			select:function(t,d){
  				txtSailDate.setValue(d);
  			}
  		}
	});
	
	//报关单号
	var txtCustomsDeclearationNo = new Ext.form.TextField({fieldLabel:C_CUSTOMS_DECLEARATION_NO,
		tabIndex:11,
		name:'consCustomsDeclearationNo',
		value:p.get('consCustomsDeclearationNo'),
	    anchor:'95%'
	});
	
	//换单日期
	var dtExchangeSingle = new Ext.form.DateField({fieldLabel:C_EXCHANGE_DATE,
		tabIndex:13,
		name:'consLoadDate',
	    value:p.get('consLoadDate'),
	    format:DATEF,
	    anchor:'95%'
	});
	
	
	//送货日期
	var dtDeliveryDate = new Ext.form.DateField({fieldLabel:C_DELIVERY_DATE,
		tabIndex:13,
		name:'consDeliveryDate',
		value:p.get('consDeliveryDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//申报日期
	var dtCustomsDeclearDate = new Ext.form.DateField({fieldLabel:C_CUSTOMS_DECLEAR_DATE,
		tabIndex:12,
		name:'consCustomsDeclearDate',
		value:p.get('consCustomsDeclearDate'),
		xtype:'datefield',
		format:DATEF,
		anchor:'95%'
	});
	
	//装箱日期用作商检日期
	var dtconsContainerLoadDate = new Ext.form.DateField({fieldLabel:C_DATE_OF_INSPECTION,
		tabIndex:13,
		name:'consContainerLoadDate',
		value:p.get('consContainerLoadDate'),
		format:DATEF,anchor:'95%'
	});
	
	
	//截关日期用作三检日期
	var dtThreeInspection = new Ext.form.DateField({fieldLabel:C_THREE_INSPECTION,
		tabIndex:13,
		name:'consExpiryDate',
		value:p.get('consExpiryDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//装货日期用作海关查验日期
	var dtConsTrackLoadDate = new Ext.form.DateField({fieldLabel:C_CUSTOMS_INSPECTION,
		tabIndex:13,
		name:'consTrackLoadDate',
		value:p.get('consTrackLoadDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//结关日期
	var dtCloseDate = new Ext.form.DateField({fieldLabel:C_CONS_CLOSE_DATE,
		tabIndex:14,
		name:'consCloseDate',
		value:p.get('consCloseDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//危品申报
	var chkCargDangerReportFlag = new Ext.form.Checkbox({
		tabIndex:20,
		labelSeparator:'',
     	name:'cargDangerReportFlag',
     	checked:p.get('cargDangerReportFlag')==1,
     	boxLabel:C_CARGO_DANGER_REPORT
     });
	
	//危品申报日期
	var dtCargDangerReportDate = new Ext.form.DateField({fieldLabel:C_CARGO_DANGER_REPORT_DATE,
		tabIndex:14,
		name:'cargDangerReportDate',
		value:p.get('cargDangerReportDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//货物备案
	var chkCargReportFlag = new Ext.form.Checkbox({
		tabIndex:20,
		labelSeparator:'',
     	name:'cargReportFlag',
     	checked:p.get('cargReportFlag')==1,
     	boxLabel:C_CARGO_REPORT
     });
	
	//货物备案日期
	var dtCargReportDate = new Ext.form.DateField({fieldLabel:C_CARGO_REPORT_DATE,
		tabIndex:14,
		name:'cargReportDate',
		value:p.get('cargReportDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//是否需签发出口退税联
	var chkRequireRelief = new Ext.form.Checkbox({
		tabIndex:20,
		hidden:p.get('consBizClass')=='I',
		labelSeparator:'',
     	name:'consRequireRelief',
     	checked:p.get('consRequireRelief')==1,
     	boxLabel:C_REQUIRE_RELIEF
     });
	
	//是否需签发收汇核销联
	var chkRequireVerification = new Ext.form.Checkbox({
		labelSeparator:'',
		tabIndex:19,
		name:'consRequireVerification',
		checked:p.get('consRequireVerification')==1,
    	boxLabel:p.get('consBizClass')=='I'?C_REQUIRE_VERIFICATION_IMP:C_REQUIRE_VERIFICATION_EXP
    });
	
	var recordPanel = new Ext.Panel({title:'操作记录',
		border:true,
		layout:'column',
		padding:10,
		items:[
		    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
				cboCustomsVendor,txtCustomsDeclearationNo,dtconsContainerLoadDate,chkCargDangerReportFlag,chkRequireRelief
			]},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[             	 	
	      	 	txtCustomsContact,dtExchangeSingle,dtThreeInspection,dtCargDangerReportDate,chkRequireVerification	
	  	    ]},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[      		
	      		txtCustomsTel,dtDeliveryDate,dtConsTrackLoadDate,chkCargReportFlag
	  	    ]},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[         	        
	      		dtConsDate,dtCustomsDeclearDate,dtCloseDate,dtCargReportDate
	  		]}
	    ]
	});
	
	//中英文品名
	var txtCargoNameEn = new Ext.form.TextArea({fieldLabel:C_CARGO_NAME_CN_EN,
		tabIndex:61,
		name:'consCargoNameEn',
		value:p.get('consCargoNameEn'),
		height:100,
		anchor:'97.5%'
	});
	    
	//申报要素
	var txtServiceSpec = new Ext.form.TextArea({fieldLabel:C_CUSTOMS_DECLEAR_ITEMS,
		tabIndex:25,
		name:'consServiceSpec',
   		value:p.get('consServiceSpec'),
   		xtype:'textarea',
   		height:100,
   		anchor:'97.5%'
   	});
		
	//件数
    var txtTotalPackages = new Ext.form.NumberField({fieldLabel:C_PACKAGES,
    	tabIndex:61,
    	name:'consTotalPackages',
    	value:p.get('consTotalPackages'),
    	anchor:'95%'
    });
	
    //毛重
	var numGrossWeight = new Ext.form.NumberField({fieldLabel:C_GW_S,
		name:'consTotalGrossWeight',
		value:p.get('consTotalGrossWeight'),
		decimalPrecision:4,anchor:'95%'
	});
	
	//净重
	var numNetWeight = new Ext.form.NumberField({fieldLabel:C_MW_S,
		name:'consTotalNetWeight',
		value:p.get('consTotalNetWeight'),
		xtype:'numberfield',
		decimalPrecision:4,
		anchor:'95%'
	});
	
	//体积
	var numMeasurement = new Ext.form.NumberField({fieldLabel:C_CBM_S,
		name:'consTotalMeasurement',
		value:p.get('consTotalMeasurement'),
		decimalPrecision:4,
		anchor:'95%'
	});
	
	//HS 编码
	var txtHsCode = new Ext.form.TextField({fieldLabel:C_HS_CODE,
		tabIndex:16,
		name:'cargHsCode',
		value:p.get('cargHsCode'),
		anchor:'95%'
	});
	
	//箱型箱量
	var txtContainersInfo = new Fos.ContainerEditor({fieldLabel:C_CONTAINER_INFO,
		name:'consContainersInfo',
		value:p.get('consContainersInfo'),
		anchor:'95%'
	});
	
	//货物属性
	var cboCargoProperty = new Ext.form.ComboBox({fieldLabel:C_CAPR,
		name:'caprName',
		value:p.get('caprName'),
		store:getCAPR_S(),
		displayField:'caprName',
		valueField:'caprName',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	var cargoPanel = new Ext.Panel({title:'货物信息',
		border:true,
		layout:'column',
		padding:10,
		items:[
		    {columnWidth:.5,layout:'form',labelWidth:80,border:false,items:[
		    	txtCargoNameEn]
		    },
		    {columnWidth:.5,layout:'form',labelWidth:80,border:false,items:[
		    	txtServiceSpec]
		    },
		    
		    {columnWidth:.25,layout:'form',labelWidth:80,border:false,items:[
	 	    	txtTotalPackages,txtContainersInfo]
	 	   	}, 
	 	   	{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:[
	 	    	numMeasurement,txtHsCode]
	 	   	},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[             	 	
	  	    	numGrossWeight,cboCargoProperty
	  	    ]},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
	  	        numNetWeight
	  	    ]}                                       
	    ]
	});
	
	//发货人
	var txtShipper = new Ext.form.TextArea({fieldLabel:C_SHIPPER,
		tabIndex:23,
   		id:p.get('consId')+'CONS_SHIPPER',
   		name:'consShipper',
   		value:p.get('consShipper'),
    	height:100,
    	anchor:'97.5%'
    });
	
	//收货人
	var txtConsignee = new Ext.form.TextArea({fieldLabel:C_CONSIGNEE,
		tabIndex:24,
		name:'consConsignee',
		value:p.get('consConsignee'),
 		id:p.get('consId')+'CONS_CONSIGNEE',
		xtype:'textarea',
		height:100,
		anchor:'97.5%'
	});	
	
	//MB/L NO
    var txtConsMblNo = new Ext.form.TextField({fieldLabel:C_M_BL_NO,
		name:'consMblNo',
		value:p.get('consMblNo'),
		anchor:'95%'
	});
    
    //HB/L NO
    var txtConsHblNo = new Ext.form.TextField({fieldLabel:C_H_BL_NO,
		name:'consHblNo',
		value:p.get('consHblNo'),
		anchor:'95%'
	});
    
    //船名
    var txtVessName = new Ext.form.TextField({fieldLabel:C_VESS,tabIndex:17,
    	name:'vessName',
    	value:p.get('vessName'),
    	anchor:'95%'
    });
    
    //航次
	var txtVoyage = new Ext.form.TextField({fieldLabel:C_VOYA,
		tabIndex:18,
		name:'voyaName',
		value:p.get('voyaName'),
		anchor:'95%'
	});
	
	//开航日期
	var txtSailDate = new Ext.form.DateField({
		fieldLabel:p.get('consBizClass')==BC_I?C_ETA:C_SAIL_DATE,
		tabIndex:19,
		itemCls:'required',
		editable:false,
		name:'consSailDate',
		value:p.get('consSailDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//船名
    var txtVessNameCn = new Ext.form.TextField({fieldLabel:C_VESS_NAME_CN,
    	tabIndex:17,
    	name:'vessNameCn',
    	value:p.get('vessNameCn'),
    	anchor:'95%'
    });
    
    //订舱代理做为船代
    var cboBookAgency = new Fos.CustomerLookup({fieldLabel:C_SHIPPING_AGENCY,
    	custType:'',
    	tabIndex:39,
		name:'consBookingAgencyName',
		value:p.get('consBookingAgencyName'),
		store:getCS(),
		enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		displayField:'custCode',
		valueField:'custCode',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consBookingAgency','');
					p.set('consBookingAgencyName','');
				}
			},
        	select:function(c,r,i){
				p.set('consBookingAgency',r.get('custId'));
				p.set('consBookingAgencySname',r.get('custCode'));
				p.set('consBookingAgencyName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn')); 
			},
        	keydown:{fn:function(f,e){
        		LC(f,e,'');},buffer:BF}
		}
	});
    
	//起运港
	var cboPolEn = new Ext.form.ComboBox({fieldLabel:C_POL,
		itemCls:'needed',
		tabIndex:p.get('consBizClass')==BC_I?39:43,
		name:'consPolEn',
		value:p.get('consPolEn'),
		store:getPS(),
		displayField:p.get('consBizType')==BT_A?'portCode':'portNameEn',
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
        		p.set('consPolCn',r.get('portNameCn'));
        		if(p.get('consBizClass')==BC_I&&this.find('name','consTradeCountry')[0]) {
        			this.find('name','consTradeCountry')[0].setValue(r.get('counCode'));
        		}
        		if(p.get('consBizClass')==BC_E&&this.find('name','consReceiptPlace')[0]) {
        			this.find('name','consReceiptPlace')[0].setValue(r.get('portNameEn'));
        		}
        	},
         	keydown:{fn:p.get('consBizType')==BT_A?LAP:LP,buffer:BF}
        }
	});
	
	//目的港
    var cboPodEn = new Ext.form.ComboBox({fieldLabel:C_POD,
		itemCls:'needed',
		tabIndex:p.get('consBizClass')==BC_I?40:47,
		name:'consPodEn',
		value:p.get('consPodEn'),
		store:getPS(),
		displayField:p.get('consBizType')==BT_A?'portCode':'portNameEn',
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
        		p.set('consPodCn',r.get('portNameCn'));
            	if(p.get('consBizClass')==BC_E&&this.find('name','consTradeCountry')[0]) {
            		this.find('name','consTradeCountry')[0].setValue(r.get('counCode'));
            	}
            	if(this.find('name','consDeliveryPlace')[0]) {
            		this.find('name','consDeliveryPlace')[0].setValue(r.get('portNameEn'));
            	}
            	if(this.find('name','consDestination')[0]) {
            		this.find('name','consDestination')[0].setValue(r.get('portNameEn'));
            	}
            },
         	keydown:{fn:p.get('consBizType')==BT_A?LAP:LP,buffer:BF}
         }
    });
    
    //中转港
    var txtPotEn = new Ext.form.TextField({fieldLabel:C_DESTINATION_PORT,
    	name:'consDeliveryPlace',
    	value:p.get('consDeliveryPlace'),
    	anchor:'95%'
    });
	
	function saveShipper(shipperT){
    	var cushName = '';
    	if(shipperT==1) 
    		cushName = Ext.getCmp(p.get('consId')+'CONS_SHIPPER').getValue();
    	else if(shipperT==2) 
    		cushName = Ext.getCmp(p.get('consId')+'CONS_CONSIGNEE').getValue();
    	    	
    	if(!p.get('custId')){
    		XMG.alert(SYS,M_SELECT_CUST_FIRST);
    		return;
    	}
    	if(cushName!=''){
    		
    		var c = new CCustomerShipper({rowAction:'N',
    			custId:p.get('custId'),
    			cushType:shipperT,
    			cushName:cushName
    		});
    		
    		var xml = RTX(c,'CCustomerShipper',CCustomerShipper);
    		
			Ext.Ajax.request({scope:this,
				url:SERVICE_URL,
				method:'POST',
				params:{A:'CUSH_S'},
				success: function(res){
					XMG.alert(SYS,M_S);
				},
				failure: function(res){
					XMG.alert(SYS,M_F+res.responseText);
				},
				xmlData:FOSX(xml)
			});
    	}
    };
    
    function selShipper(shipperT){
    	if(p.get('custId')){
    		var win = new  Fos.ShipperWin(p.get('custId'),shipperT,updateShipper);
        	win.show();
    	}
    	else
    		XMG.alert(SYS,M_SELECT_CUST_FIRST);
    }
    
    function updateShipper(shipperT,cushName){
    	if(shipperT==1) 
    		cushName = Ext.getCmp(p.get('consId')+'CONS_SHIPPER').setValue(cushName);
    	else if(shipperT==2) 
    		cushName = Ext.getCmp(p.get('consId')+'CONS_CONSIGNEE').setValue(cushName);
    };
    
    var bSaveShipper = new Ext.Button({text:'保存',
    	handler:function(){
    		saveShipper(1);
    	}
    });
    
    var bSearchShipper = new Ext.Button({text:'选择',
    	handler:function(){
    		selShipper(1);
    	}
    });
    
    var bSaveConsignee = new Ext.Button({text:'保存',
    	handler:function(){
    		saveShipper(2);
    	}
    });
    
    var bSearchConsignee = new Ext.Button({text:'选择',
    	handler:function(){
    		selShipper(2);
    	}
    });    
    
    var bookingPanel = new Ext.Panel({title:'订舱信息',
		border:true,
		layout:'column',
		padding:10,
		items:[
		    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[			
	    	   	txtVessName,cboPolEn,txtVessNameCn
			]},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
	  			txtVoyage,cboPodEn,cboBookAgency
	  	    ]},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[      		
	      		txtConsMblNo,txtPotEn
	  	    ]},
	  	    {columnWidth:.25,layout:'form',border:false,labelWidth:80,items:[
	              txtConsHblNo,txtSailDate
	  		]},
	  		 {columnWidth:1,layout:'column',border:false,items:[
		  		{columnWidth:.45,layout:'form',labelWidth:80,border:false,items:[txtShipper]},
		 	 	{columnWidth:.05,border:false,items:[bSaveShipper,bSearchShipper]},
		   	 	{columnWidth:.45,layout:'form',labelWidth:80,border:false,items:[txtConsignee]},
		 		{columnWidth:.05,border:false,items:[bSaveConsignee,bSearchConsignee]}
	   	 	]}
	    ]
	});
	    
    this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,
			url:SERVICE_URL,
			method:'POST',
			params:{A:'CONS_U',
				consId:p.get('consId'),
				consStatus:s
			},
			success: function(r){
				p.set('consStatus',s);
				p.set('version',p.get('version')+1);
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(r){
				XMG.alert(SYS,M_F+r.responseText);
			}
		});
    };
                    		
    
    this.updateToolBar = function(){
		var s = p.get('consStatus'); 
		locked = p.get('consStatusLock')==1;
		if(btnSave) 
			btnSave.setDisabled(NR(m+F_M)||locked||disable);
		
    	if(btnConfirm) 
    		btnConfirm.setDisabled(NR(m+F_M)||locked||disable||s!=0);
    	
    	if(btnCancelConfirm) 
    		btnCancelConfirm.setDisabled(NR(m+F_M)||locked||disable||s!=1);
    	
    	if(btnClose) 
    		btnClose.setDisabled(NR(m+F_M)||locked||disable||s!=1);
    	
    	if(btnInvalid) 
    		btnInvalid.setDisabled(NR(m+F_F)||locked||disable||p.get('consStatus')!=1||p.get('rowAction')=='N');
    	
    	if(btnRemove) 
    		btnRemove.setDisabled(NR(m+F_R)||locked||disable||s!=0||p.get('rowAction')=='N');
    	    	    	
    	if(btnUnlock) 
    		btnUnlock.setDisabled(NR(m+F_UL)||locked!=1);    	
    };
    
	var btnSave = new Ext.Button({text:C_SAVE,
		iconCls:'save',
		disabled:NR(m+F_M)||locked||disable,
		scope:this,
		handler:function(){
	    	if(this.find('name','custName')[0].getValue()==''){
				XMG.alert(SYS,M_CUST_REQIRED,function(){
					this.find('name','custName')[0].focus();
				},this);
				return;
			}
	    	
			if(!p.get('custId')){
				XMG.alert(SYS,M_CUST_MUST_PREDEFINED);
				return;
			}
			
			if(this.find('name','deptId')[0].getValue()==''){
				XMG.alert(SYS,M_DEPT_REQIRED,function(){
					this.find('name','deptId')[0].focus();
					},this);
				return;
			}
			
			if(this.find('name','consSalesRepName')[0].getValue()==''){
				XMG.alert(SYS,M_SALES_REQIRED,function(){
					this.find('name','consSalesRepName')[0].focus();
				},this);
				return;
			}
			
			if(this.find('name','consOperatorName')[0].getValue()==''){
				XMG.alert(SYS,M_OPERATOR_REQIRED,function(){
					this.find('name','consOperatorName')[0].focus();
					},this);
				return;
			}		
			
			if(txtSailDate.getValue()==''){
				XMG.alert(SYS,p.get('consBizClass')==BC_I?M_ETA_REQIRED:M_ETD_REQIRED,
					function(){txtSailDate.focus();},this);
				return;
			};
								
			saveToRecord(consignPanel,p);
	   	 	var xml = RTX(p,'FConsign',FConsign);
	   	 	
	   	 	Ext.Ajax.request({scope:this,
	   	 		url:SERVICE_URL,
	   	 		method:'POST',
	   	 		params:{A:'CONS_S'},
				success: function(res){
					var c = XTR(res.responseXML,'FConsign',FConsign);
					var ra=p.get('rowAction');
					var f = FConsign.prototype.fields;
					p.beginEdit();
	   				for (var i = 0; i < f.keys.length; i++) {
	   					var fn = ''+f.keys[i];
	   					p.set(fn,c.get(fn));
	   				}
					if(ra=='N'){
						var title=(p.get('consBizClass')=='I'?C_IMP:C_EXP)+C_CUSTOMS+'委托【'+p.get("consNo")+'】';
						this.setTitle(title);
						this.find('name','consNo')[0].setValue(p.get('consNo'));
						p.set('rowAction','M');
						store.add(p);
					}
					p.endEdit();
					this.updateToolBar();
					XMG.alert(SYS,M_S);
				},
				failure: function(res){
					XMG.alert(SYS,M_F+res.responseText);
				},
				xmlData:FOSX(xml)
			});
	    }
	});
	
	var btnConfirm = new Ext.Button({text:C_BOOK_CONFIRM,
		iconCls:'check',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=0||p.get('rowAction')=='N',
		scope:this,
		handler:function(){
	    	this.updateStatus('1');
	    }
	});
		
	var btnCancelConfirm = new Ext.Button({text:C_CANCEL_CONFIRM,
		iconCls:'check',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1||p.get('rowAction')=='N',
		scope:this,
		handler:function(){
	    	this.updateStatus('0');
	    }
	});
	
	var btnClose = new Ext.Button({text:C_CONS_CLOSED,
		iconCls:'check',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1,
		scope:this,
		handler:function(){
	    	this.updateStatus('2');
	    }
	});
	
	var btnRemove = new Ext.Button({text:C_REMOVE,
		iconCls:'remove',
		disabled:NR(m+F_R)||locked||disable||p.get('consStatus')!=0||p.get('rowAction')=='N',
		scope:this,
		handler:function(){
	    	if(p.get('consStatus')!='0')
	       		XMG.alert(SYS,M_CONS_CONFIRMED);
	       	else {
	       		XMG.confirm(SYS,M_R_C,function(btn){
	       			if(btn=='yes'){
	       				p.set('rowAction','R');
	               		var xml = RTX4R(p,'FConsign','consId');
	               		Ext.Ajax.request({url:SERVICE_URL,
	               			method:'POST',
	               			params:{A:'CONS_S'},
							success: function(){
								store.remove(p);
								XMG.alert(SYS,M_S,function(){T_MAIN.remove('P_CONS_'+p.get('id'));});
							},
							failure: function(r,o){
								XMG.alert(SYS,M_F+r.responseText);
							},
							xmlData:FOSX(xml)
						});
	               	}
	           });
	       	}
	    }
	});
	
	var btnInvalid = new Ext.Button({text:C_INVALID,
		iconCls:'cancel',
		disabled:NR(m+F_F)||locked||disable||p.get('consStatus')==0||p.get('rowAction')=='N',
		scope:this,
		handler:function(){
	    	XMG.confirm(SYS,M_CONS_CANCEL_C,
        		function(btn){
    	    		if(btn=='yes')
    	    			this.updateStatus('3');
        		},this);
        }
	});
	
	var btnUnlock = new Ext.Button({text:C_UNLOCK,
		iconCls:'unlock',
		disabled:NR(m+F_UL)||locked!=1,
		scope:this,
		handler:function(){
	    	Ext.Ajax.request({scope:this,
	    		url:SERVICE_URL,
	    		method:'POST',
	    		params:{
	    			A:'CONS_U',
	    			consId:p.get('consId'),
	    			consStatusLock:0
	    		},
				success: function(r){
					p.set('consStatusLock',0);
					this.updateToolBar(p.get('consStatus'));
					
					XMG.alert(SYS,M_S);
					var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
							reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});
					sc.load({params:{consId:p.get('consId')},callback:function(r,o,s){
						if(s&&r.length>0){
							var c=r[0];
							p.beginEdit();					
							p.set('version',c.get('version'));
							p.endEdit();
							XMG.alert(SYS,M_S);
						}    						
					},scope:this});				
				},
				failure: function(r){
					XMG.alert(SYS,M_F+r.responseText);
				}
			});
	    }
	});
	
		
	var btnModifyConsignNo = new Ext.Button({text:C_MODIFY_CONS_NO,
		iconCls:'option',
		disabled:NR(m1+F_M)||locked==1||p.get('consStatus')==7||p.get('rowAction')=='N',
		scope:this,
		handler:function(){
	    	XMG.prompt(SYS,C_CONS_NO_NEW,function(b,v){
				if(b=='ok'){
					Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
			    		params:{A:'CONS_MODIFY_NO',consId:p.get('consId'),consNo:v},
					success: function(res){
						var c = XTR(res.responseXML,'FConsign',FConsign);
						
						p.beginEdit();	
						p.set('consNo',v);
						p.set('version',c.get('version'));
						p.endEdit();
											
						var title=(p.get('consBizClass')=='I'?C_IMP:C_EXP)+C_CUSTOMS+'委托【'+p.get("consNo")+'】';
						this.setTitle(title);
						this.find('name','consNo')[0].setValue(p.get('consNo'));
											
						XMG.alert(SYS,M_S);					
					},
					failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
				}
			},this);
	    }
	});
	
	//另存
	var btnSaveAs = new Ext.Button({text:C_COPY,
		iconCls:'copy',
		disabled:NR(m1+F_M)||p.get('rowAction')=='N',
		scope:this,
		handler:function(){
			var c = Fos.copyConsign(p);
			var t = new Fos.CudeConsignPanel(c,store);
    		T_MAIN.add(t);
    		T_MAIN.setActiveTab(t);
		}
	});	
	
	var consignPanel = new Ext.Panel({
		title:C_CONSIGN,
		autoScroll:true,
	    items:[consPanel,recordPanel,cargoPanel,bookingPanel],
		tbar:[btnSave,'-',btnConfirm,'-',btnCancelConfirm,'-',btnClose,'-',
	          btnRemove,'-',btnInvalid,'-',btnUnlock,'-',btnModifyConsignNo,'-',btnSaveAs,'-'
	     ]
		
	});
	
	var items=[];
	items[0] = consignPanel;
	    
	if(p.get('rowAction')!='N'){
		items[items.length] = new Fos.CudeGridPanel(p);
		items[items.length] = new Fos.InspGridPanel(p);
		items[items.length] = new Fos.ExpensePanel(p,'C');
		items[items.length] = new Fos.ConsDocGrid(p);
		items[items.length] = new Fos.AttachTab(p);
	}
	
	
	Fos.CudeConsignPanel.superclass.constructor.call(this, { 
		id: "P_CONS_"+p.get('id'),
		title:C_CUSTOMS+C_CONSIGN+'-'+p.get("consNo"),
		closable:true,
		activeTab:0,
		items:items
	});
};
Ext.extend(Fos.CudeConsignPanel,Ext.TabPanel);