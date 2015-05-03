//报检单
Fos.InspectionPanel = function(p) {
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	if(p.get('consBizType')==BT_G)
		m = m + M3_CUDE;
	else
		m = m + M3_INSP;
	
	this.sel=GSEL;
	this.store = GS('INSP_Q','FInspection',FInspection,'inspId','DESC','','','inspId',false);
	
	this.store.load({params:{consId:p.get('consId')}});	
	
	var re = {scope:this,
		rowselect:function(sm,row,r){
			if(this.sel!=r.get('id')){
				this.sel=r.get('id');
				recordToContainer(frm,r);
				recordToContainer(frmRecord,r);
				
				var ts = this.findById('inspTsFlag');
		   	 	if(ts!=undefined && ts.checkbox){		   	 		
		   	 		ts.checkbox.dom.checked = r.get('inspTsFlag');
		   	 	}
		   	 		
		   	 	var cs = this.findById('inspCsFlag');
			 	if(cs!=undefined&&cs.checkbox){
			 		cs.checkbox.dom.checked = r.get('inspCsFlag');
			 	}
			 	
			 	var cl = this.findById('inspClFlag');
			 	if(cl!=undefined&&cl.checkbox){
			 		cl.checkbox.dom.checked = r.get('inspClFlag');
			 	}
			 					 	
			 	var lc = this.findById('inspLcFlag');
			 	if(lc!=undefined&&cl.checkbox){
			 		lc.checkbox.dom.checked = r.get('inspLcFlag');
			 	}			 	
		   	 	
				this.updateToolBar();
			}
		},
		rowdeselect:function(sm,row,r){			
			saveToRecord(frm,r);
			saveToRecord(frmRecord,r);
		}
	};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true,scope:this,listeners:re});
	var cm=new Ext.grid.ColumnModel({columns:[sm,	
	{header:C_STATUS,dataIndex:'inspStatus',renderer:getINSPST},	
	{header:C_INSP_BILL_NO,dataIndex:'inspNo'},
	{header:C_INSP_AGENCY,dataIndex:'inspVendorName',width:150},
	{header:C_INSP_VENDOR_RN,dataIndex:'inspRefNo',width:150},
	{header:C_INSP_DATE,dataIndex:'inspDate',renderer:formatDate},
	
	],defaults:{sortable:true,width:100}});
	
	
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
		
	var btnAdd = new Ext.Button({text:C_ADD,
		itemId:'TB_A',
		disabled:NR(m+F_M),
		iconCls:'add',
		scope:this,
		handler:this.addInsp
	});
	
	var btnRemove = new Ext.Button({text:C_REMOVE,
		disabled:NR(m+F_R),
		iconCls:'remove',
		scope:this,
		handler:this.removeInsp
	});
	
	this.inspGrid=new Ext.grid.GridPanel({title:C_INSP_BILL_LIST,
		region:'west',
		width:200,
		border:true,
		autoScroll:true,
		collapsible:true,
		store:this.store,
		split:true,
		sm:sm,
		cm:cm,
		tbar:[btnAdd,'-',btnRemove]
	});
	
    
	
    	
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

	var cboInspectionVendor = new Ext.form.ComboBox({fieldLabel:C_INSP_AGENCY,
		name:'inspVendorName',
		store:getCS(),
		enableKeyEvents:true,
		xtype:'combo',
		displayField:'custCode',
		valueField:'custCode',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%',
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
			keydown:{fn:function(f,e){LC(f,e,'custInspectionFlag');},buffer:BF}
		}
	});

	var txtInspNo = new Ext.form.TextField({fieldLabel:C_NO,
		name:'inspNo',
		xtype:'textfield',
		anchor:'99%'
	});
	
	var txtRefNo = new Ext.form.TextField({fieldLabel:C_INSP_VENDOR_RN,
		name:'inspRefNo',
		xtype:'textfield',
		anchor:'99%'
	});
	
	var txtContact = new Ext.form.TextField({fieldLabel:C_CONTACT,
		name:'inspVendorContact',
		anchor:'99%'
	});
	
	var txtTel = new Ext.form.TextField({fieldLabel:C_TEL,
		name:'inspVendorTel',
		anchor:'99%'
	});
	
	var dtInspDate = new Ext.form.DateField({fieldLabel:C_INSP_DATE,
		name:'inspDate',
		format:DATEF,
		anchor:'92%'
	});
	
	var txtShipperCn = new Ext.form.TextField({fieldLabel:C_SHIPPER_CN,
		name:'inspShipperCn',
		anchor:'99%'
	});
	
	var txtShipperEn = new Ext.form.TextField({fieldLabel:C_EN,
		name:'inspShipperEn',
		anchor:'99%'
	});
	
	var txtConsigneeCn = new Ext.form.TextField({fieldLabel:C_CONSIGNEE_CN,
		name:'inspConsigneeCn',
		anchor:'99%'
	});
	
	var txtConsigneeEn = new Ext.form.TextField({fieldLabel:C_EN,
		name:'inspConsigneeEn',
		anchor:'99%'
	});
	
	var txtCargoName = new Ext.form.TextArea({fieldLabel:C_CARGO_NAME_CN_EN,
		name:'inspCargoName',
		anchor:'99%'
	});
	
	var txtHsNo = new Ext.form.TextArea({fieldLabel:C_HS_CODE,
		name:'inspHsNo',
		anchor:'99%'
	});
	
	var txtMadeIn = new Ext.form.TextArea({fieldLabel:C_MADE_IN,
		name:'inspMadeIn',
		anchor:'99%'
	});
	
	var txtNum = new Ext.form.TextArea({fieldLabel:C_QUANTITY_WEIGHT,
		name:'inspNum',
		anchor:'99%'
	});
	
	var txtValue = new Ext.form.TextArea({fieldLabel:C_CARGO_VALUE,
		name:'inspValue',
		anchor:'99%'
	});
	
	var txtPackages = new Ext.form.TextArea({fieldLabel:C_PACK_QUANTITY,
		name:'inspPackages',
		xtype:'textarea',
		anchor:'99%'
	});
	
	var txtConveyance = new Ext.form.TextField({fieldLabel:C_CONVEYANCE,
		name:'inspConveyance',
		anchor:'99%'
	});
	
	var cboTradeType = new Ext.form.ComboBox({fieldLabel:C_TRTY,
		name:'inspTradeType',
		store:getTRTY_S(),
		xtype:'combo',
		displayField:'trtyName',
		valueField:'trtyName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});
	
	var txtCargoAddress = new Ext.form.TextField({fieldLabel:C_CARGO_ADDRESS,
		name:'inspCargoAddress',
		anchor:'99%'
	});
	
	var txtContractNo = new Ext.form.TextField({fieldLabel:C_CONTRACT_NO,
		name:'inspContractNo',
		anchor:'99%'
	});
	
	var txtCreditNo = new Ext.form.TextField({fieldLabel:C_CREDIT_NO,
		name:'inspCreditNo',
		anchor:'99%'
	});
	
	var cboUsage = new Ext.form.ComboBox({fieldLabel:C_USAG,
		name:'inspUsage',
		store:getUSAG_S(),
		displayField:'usagName',
		valueField:'usagName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});
	
	var dtShippingDate = new Ext.form.DateField({fieldLabel:p.get('consBizClass')==BC_E?C_CARGO_DELIVERY_DATE:C_CARGO_DISCHARGE_DATE,
		name:'inspShippingDate',
		format:DATEF,
		anchor:'99%'
	});
	
	var cboTradeCountry = new Ext.form.ComboBox({fieldLabel:p.get('consBizClass')==BC_E?C_COUNTRY_TO:C_COUNTRY_FROM,
		name:'inspTradeCountry',
		store:getCOUN_S(),
		displayField:'counNameEn',
		valueField:'counNameEn',
		typeAhead:true,
		mode:'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%'
	});
	
	var txtCertificateNo = new Ext.form.TextField({fieldLabel:C_CERTIFICATE_NO,
		name:'inspCertificateNo',
		anchor:'99%'
	});
	
	
	var txtPol = new Ext.form.TextField({fieldLabel:C_PORT_FROM,
		name:'inspPol',
		anchor:'99%'
	});
	
	var txtPod = new Ext.form.TextField({fieldLabel:p.get('consBizClass')==BC_E?C_PORT_TO:C_PORT_IN,
		name:'inspPod',
		anchor:'99%'
	});
	
	var txtRegisterNo = new Ext.form.TextField({fieldLabel:C_REGISTER_NO,
		name:'inspRegisterNo',
		anchor:'99%'
	});
	
	
	var dtClaimDate = new Ext.form.DateField({fieldLabel:C_CLAIM_DATE,
		name:'inspClaimDate',
		format:DATEF,
		anchor:'99%'
	});
	
	var txtContainerInfo = new Ext.form.TextField({fieldLabel:C_CONT_SPEC_NO,
		name:'inspContainerInfo',
		anchor:'99%'
	});
	
	var txtSpecialTerm = new Ext.form.TextArea({fieldLabel:C_INSP_SPECIAL_TERM,
		name:'inspSpecialTerm',
		anchor:'99%'
	});
	
	var txtMarks = new Ext.form.TextArea({fieldLabel:C_MARKS_NO,
		name:'inspMarks',
		anchor:'99%'
	});
	
	var dtReceiveDate = new Ext.form.DateField({fieldLabel:C_RECEIVE_DATE,
		name:'inspReceiveDate',
		format:DATEF,
		anchor:'92%'
	});
	
	var txtReceiver = new Ext.form.TextField({fieldLabel:C_RECEIVER,
		name:'inspReceiver',
		anchor:'99%'
	});
	
	
	var frm = new Ext.FormPanel({labelAlign:'right',
		labelWidth:60,
		trackResetOnLoad:false,
		layout:'column',
		title:C_INSP_BILL_INFO,
		layoutConfig: {columns:4},
		padding:5,
		autoScroll:true,
		items: [
			{columnWidth:.5,layout:'form',labelWidth:100,border:false,items:[cboInspectionVendor]},
			{columnWidth:.5,layout:'form',border:false,trackResetOnLoad:true,items:[txtInspNo]},
			{columnWidth:.25,layout:'form',labelWidth:100,border:false,items:[txtRefNo]},
			{columnWidth:.25,layout:'form',border:false,trackResetOnLoad:true,items:[txtContact]},
			{columnWidth:.25,layout:'form',border:false,trackResetOnLoad:true,items:[txtTel]},
			{columnWidth:.25,layout:'form',border:false,items:[dtInspDate]},
			{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[txtShipperCn]},
			{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[txtShipperEn]},
			{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[txtConsigneeCn]},
			{columnWidth:.99,layout:'form',labelWidth:100,border:false,items:[txtConsigneeEn]},
						
			{columnWidth:.3,layout: 'form',border :false,labelAlign:'top',items: [txtCargoName]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',items: [txtHsNo]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',items: [txtMadeIn]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',items: [txtNum]},
            {columnWidth:.1,layout: 'form',border : false,labelAlign:'top',items: [txtValue]},
            {columnWidth:.3,layout: 'form',labelAlign:'top',labelWidth:85,border:false,items: [txtPackages]},
            
			{columnWidth:.33,layout:'form',labelWidth:100,border:false,items:[txtConveyance]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[cboTradeType]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[txtCargoAddress]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,trackResetOnLoad:true,items:[txtContractNo]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[txtCreditNo]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[cboUsage]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[dtShippingDate]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[cboTradeCountry]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[txtCertificateNo]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[txtPol]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[txtPod]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[p.get('consBizClass')==BC_E?txtRegisterNo:dtClaimDate]},
            {columnWidth:.99,layout:'form',labelWidth:100,border : false,items:[txtContainerInfo]},
            {columnWidth:.50,layout:'form',labelWidth:100,border : false,labelAlign:'top',items:[txtSpecialTerm]},
            {columnWidth:.50,layout:'form',labelWidth:100,border : false,labelAlign:'top',items:[txtMarks]},
            {columnWidth:.25,layout:'form',labelWidth:100,border : false,items:[dtReceiveDate]},
            {columnWidth:.25,layout:'form',labelWidth:100,border : false,items:[txtReceiver]}
		]
	});
	
	//货物抽样
	var chkCargoSampleFlag = new Ext.form.Checkbox({
		fieldLabel:C_CARGO_SAMPLE,
		name:'inspCargoSampleFlag',
		anchor:'95%'
     });
	
	//包装查验
	var chkPackageCheckFlag = new Ext.form.Checkbox({
		fieldLabel:C_PACKAGE_CHECK,
		name:'inspPackageCheckFlag',
		anchor:'95%'
     });
	
	//货物送样
	var chkCargoSendFlag = new Ext.form.Checkbox({
		fieldLabel:C_CARGO_SEND,
		name:'inspCargoSendFlag',
		anchor:'95%'
     });
	
	//货物检验
	var chkCargoCheckFlag = new Ext.form.Checkbox({
		fieldLabel:C_CARGO_CHECK,
		name:'inspCargoCheckFlag',
		anchor:'95%'
     });
	
	//检验出证
	var chkCertificationFlag = new Ext.form.Checkbox({
		fieldLabel:C_CERTIFICATION,
		name:'inspCertificationFlag',
		anchor:'95%'
     });
	
	//换证查验
	var chkCertificationCheckFlag = new Ext.form.Checkbox({
		fieldLabel:C_CERTIFICATION_CHECK,
		name:'inspCertificationCheckFlag',
		anchor:'95%'
     });
	
	//抽样日期
	var dtCargoSampleDate = new Ext.form.DateField({fieldLabel:C_CARGO_SAMPLE_DATE,
		name:'inspCargoSampleDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//检包日期
	var dtPackageCheckDate = new Ext.form.DateField({fieldLabel:C_PACKAGE_CHECK_DATE,
		name:'inspPackageCheckDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//送样日期
	var dtCargoSendDate = new Ext.form.DateField({fieldLabel:C_CARGO_SEND_DATE,
		name:'inspCargoSendDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//检验日期
	var dtCargoCheckDate = new Ext.form.DateField({fieldLabel:C_CARGO_CHECK_DATE,
		name:'inspCargoCheckDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//出证日期
	var dtCertificationDate = new Ext.form.DateField({fieldLabel:C_CERTIFICATION_DATE,
		name:'inspCertificationDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//查验日期
	var dtCertificationCheckDate = new Ext.form.DateField({fieldLabel:C_CERTIFICATION_CHECK_DATE,
		name:'inspCertificationCheckDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//委托类型 (熏蒸，消毒，卫生除虫，其它)
	var cboTsType = new Ext.form.ComboBox({fieldLabel:C_TS_TYPE,
		name:'inspTsType',
		store:inspTsTypeStore,
		displayField:'NAME',
		valueField:'NAME',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	var txtTsNo = new Ext.form.TextField({fieldLabel:C_TS_NO,
		name:'inspTsNo',
		anchor:'95%'
	});
	
	//申请日期
	var dtTsApplyDate = new Ext.form.DateField({fieldLabel:C_APPLY_DATE,
		name:'inspTsApplyDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//作业日期
	var dtTsOperationDate = new Ext.form.DateField({fieldLabel:C_OPERATION_DATE,
		name:'inspTsOperationDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//完成日期
	var dtTsEndDate = new Ext.form.DateField({fieldLabel:C_OPERATION_END_DATE,
		name:'inspTsEndDate',
		format:DATEF,
		anchor:'95%'
	});
	
	var txtTsObject = new Ext.form.TextField({fieldLabel:C_OP_OBJECT,
		name:'inspTsObject',
		anchor:'95%'
	});
	
	var txtTsRemark = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'inspTsRemark',
		anchor:'95%'
	});
	
	//检验检疫技术服务
	var setTS = new Ext.form.FieldSet({id:'inspTsFlag',
    	labelAlign:'right',
    	labelWidth:60,
    	checkboxToggle:true,
    	checkboxName:'inspTsFlag',
    	title:C_TS,
    	autoHeight:true,
    	defaultType:'textfield',
    	items:[cboTsType,txtTsNo,dtTsApplyDate,dtTsOperationDate,dtTsEndDate,txtTsObject,txtTsRemark]
    });
	
	
	//卫检日期
	var dtCsDate = new Ext.form.DateField({fieldLabel:C_CS_DATE,
		name:'inspCsDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//卫检号
	var txtCsNo = new Ext.form.TextField({fieldLabel:C_CS_NO,
		name:'inspCsNo',
		anchor:'95%'
	});
	
	//卫检查验
	var chkCsCheckFlag = new Ext.form.Checkbox({
		fieldLabel:C_CS_CHECK,
		name:'inspCsCheckFlag',
		anchor:'95%'
     });
	
	var txtCsRemark = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'inspCsRemark',
		anchor:'95%'
	});
	
	//箱体卫检
	var setCS = new Ext.form.FieldSet({id:'inspCsFlag',
    	labelAlign:'right',
    	labelWidth:60,
    	checkboxToggle:true,
    	checkboxName:'inspCsFlag',
    	title:C_CS,
    	autoHeight:true,
    	defaultType:'textfield',
    	items:[dtCsDate,txtCsNo,chkCsCheckFlag,txtCsRemark]
    });
	
	
	//申请日期
	var dtClApplyDate = new Ext.form.DateField({fieldLabel:C_APPLY_DATE,
		name:'inspClApplyDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//检验日期
	var dtClDate = new Ext.form.DateField({fieldLabel:C_CL_DATE,
		name:'inspClDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//适载编号
	var txtClNo = new Ext.form.TextField({fieldLabel:C_CL_NO,
		name:'inspClNo',
		anchor:'95%'
	});
	
	//适载柜号
	var txtClContainerNo = new Ext.form.TextField({fieldLabel:C_CL_CONTAINER_NO,
		name:'inspClContainerNo',
		anchor:'95%'
	});
	
	var txtClRemark = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'inspClRemark',
		anchor:'95%'
	});
	
	//箱体适载
	var setCL = new Ext.form.FieldSet({id:'inspClFlag',
    	labelAlign:'right',
    	labelWidth:60,
    	checkboxToggle:true,
    	checkboxName:'inspClFlag',
    	title:C_CL,
    	autoHeight:true,
    	defaultType:'textfield',
    	items:[dtClApplyDate,dtClDate,txtClNo,txtClContainerNo,txtClRemark]
    });
	
	
	//申请日期
	var dtLcApplyDate = new Ext.form.DateField({fieldLabel:C_APPLY_DATE,
		name:'inspLcApplyDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//委托类型 (监装，监磅，水尺，其它)
	var cboLcType = new Ext.form.ComboBox({fieldLabel:C_LC_TYPE,
		name:'inspLcType',
		store:inspLcTypeStore,
		displayField:'NAME',
		valueField:'NAME',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	//作业日期
	var dtLcOperationDate = new Ext.form.DateField({fieldLabel:C_OPERATION_DATE,
		name:'inspLcOperationDate',
		format:DATEF,
		anchor:'95%'
	});
	
	//完成日期
	var dtLcEndDate = new Ext.form.DateField({fieldLabel:C_OPERATION_END_DATE,
		name:'inspLcEndDate',
		format:DATEF,
		anchor:'95%'
	});
	
	var txtLcObject = new Ext.form.TextField({fieldLabel:C_OP_OBJECT,
		name:'inspLcObject',
		anchor:'95%'
	});
	
	var txtLcRemark = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'inspLcRemark',
		anchor:'95%'
	});
	
	//装运前检验
	var setLC = new Ext.form.FieldSet({id:'inspLcFlag',
    	labelAlign:'right',
    	labelWidth:60,
    	checkboxToggle:true,
    	checkboxName:'inspLcFlag',
    	title:C_LC,
    	autoHeight:true,
    	defaultType:'textfield',
    	items:[dtLcApplyDate,cboLcType,dtLcOperationDate,dtLcEndDate,txtLcObject,txtLcRemark]
    });
	
	
	
	var frmRecord = new Ext.FormPanel({title:C_INSP_RECORD,
		layout:'column',
		layoutConfig:{columns:4},
		padding:5,
		items: [ 
	         {width:260,layout:'column',border:false,
	        	 items:[
			        {columnWidth:.4,layout:'form',labelAlign:'right',labelWidth:60,border:false,
			        	items:[chkCargoSampleFlag,chkPackageCheckFlag,chkCargoSendFlag,
			        	       chkCargoCheckFlag,chkCertificationFlag,chkCertificationCheckFlag]},
			        {columnWidth:.6,layout:'form',labelAlign:'right',labelWidth:60,border:false,
			        		items:[dtCargoSampleDate,dtPackageCheckDate,dtCargoSendDate,
			        		       dtCargoCheckDate,dtCertificationDate,dtCertificationCheckDate]}
		        ]
	         },
		     {columnWidth:.25,layout:'fit',border:false,padding:5,items:[setTS]},
		     {columnWidth:.25,layout:'fit',border:false,padding:5,items:[setCS]},
		     {columnWidth:.25,layout:'fit',border:false,padding:5,items:[setCL]},
		     {columnWidth:.25,layout:'fit',border:false,padding:5,items:[setLC]}
		]
	});
	
	this.save = function(){
		this.inspGrid.stopEditing();		
		var b =this.inspGrid.getSelectionModel().getSelected();
		
		if(b){
			/*b.beginEdit();
			frm.getForm().updateRecord(b);
			frmRecord.getForm.updateRecord(b);
			b.endEdit();*/
			saveToRecord(frm,b);
			saveToRecord(frmRecord,b);
		}
		
		var ts = this.findById('inspTsFlag');
   	 	if(ts!=undefined&&ts.checkbox)
   	 		b.set('inspTsFlag',this.findById('inspTsFlag').checkbox.dom.checked);
   	 	
   	 	var cs = this.findById('inspCsFlag');
	 	if(cs!=undefined&&cs.checkbox)
	 		b.set('inspCsFlag',this.findById('inspCsFlag').checkbox.dom.checked);
	 	
	 	var cl = this.findById('inspClFlag');
	 	if(cl!=undefined&&cl.checkbox)
	 		b.set('inspClFlag',this.findById('inspClFlag').checkbox.dom.checked);
	 	
	 	var lc = this.findById('inspLcFlag');
	 	if(lc!=undefined&&cl.checkbox)
	 		b.set('inspLcFlag',this.findById('inspLcFlag').checkbox.dom.checked);
	 	
	 	
		var xml='';
		var a =this.store.getModifiedRecords();
		if(a.length>0){
			xml = ATX(a,'FInspection',FInspection);
		}
		if(xml!=''){
		 	Ext.Ajax.request({scope:this,
		 		url:SERVICE_URL,
		 		method:'POST',
		 		params:{
		 			A:'INSP_S'
		 		},
				success: function(res){
					var a = XTRA(res.responseXML,'FInspection',FInspection);
					FOSU(this.store,a,FInspection);
					XMG.alert(SYS,M_S);
				},
				failure: function(res){
					XMG.alert(SYS,M_F+res.responseText);
				},
				xmlData:FOSX(xml)
			});
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
	    	Ext.Ajax.request({scope:this,
	    		url:SERVICE_URL,
	    		method:'POST',
	    		params:{
	    			A:'INSP_U',
	    			consId:b.get('consId'),
	    			inspId:b.get('inspId'),
	    			inspStatus:s
	    		},
				success: function(r){
					b.set('inspStatus',s);
					this.updateToolBar();
					XMG.alert(SYS,M_S);
				},
				failure: function(r){
					XMG.alert(SYS,M_F+r.responseText);
				}
			});
		}
    };    
    
    this.updateToolBar=function(){
    	var b = this.inspGrid.getSelectionModel().getSelected();
    	var s=b.get('inspStatus');
    	if(b){
    		btnRemove.setDisabled(NR(m+F_R)||s!=0);
    		btnSave.setDisabled(NR(m+F_M)||s!=0);
    		btnApply.setDisabled(NR(m+F_M)||s!=0);
    		btnPass.setDisabled(NR(m+F_M)||s!=1);
		}
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
			this.updateStatus('1');
		}
	});
	
	var btnPass = new Ext.Button({text:C_END,
		disabled:NR(m+F_M),
		iconCls:'pass',
		scope:this,
		handler:function(){
			this.updateStatus('2');
		}
	});
	
	var btnExport = new Ext.Button({text:C_EXPORT,
		disabled:NR(m+F_E),
		iconCls:'print',
		scope:this,
		menu: {items: 
			[
		   		{text:C_INSP_BILL,scope:this,handler:this.expExcel}
	   		]}
	});
	
	var inspDetailPanel = new Ext.Panel({region:'center',
		autoScroll:true,
		items:[frm,frmRecord,
		       {border:false,layout:'fit',items:expPanel}
		],
		tbar:[btnSave,'-',btnApply,'-',btnPass,'-',btnExport],
		listeners:{
			scope:this,
			'afterlayout':function(){
				setTS.checkbox.dom.checked = false;
				setCS.checkbox.dom.checked = false;	
				setCL.checkbox.dom.checked = false;
				setLC.checkbox.dom.checked = false;
			}
	
		}
    });
	
    Fos.InspectionPanel.superclass.constructor.call(this, { 
		id:'T_INSP_'+p.get('id'),
		title:C_SR_INSP,
		header:p.get('bizType')=='I',
		layout:'border',		
		items: [this.inspGrid,inspDetailPanel]
	});
};
Ext.extend(Fos.InspectionPanel, Ext.Panel);

Fos.InspectionWin = function(p) {
	var panel = new Fos.InspectionPanel(p);
	Fos.InspectionWin.superclass.constructor.call(this, {title:p.get('consNo')+C_INSP_BILL,
		modal:true,
		width:900,
        height:565,
        layout:'fit',
        plain:false,
        maximizable:true,
        maximized:true,
        buttonAlign:'right',
        items:panel
    });
};
Ext.extend(Fos.InspectionWin,Ext.Window);