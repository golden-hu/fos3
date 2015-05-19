//报检单列表
Fos.InspGridPanel = function(_consign) {
	var m=getRM(_consign.get('consBizClass'),_consign.get('consBizType'),_consign.get('consShipType'));
	if(_consign.get('consBizType')==BT_G)
		m = m + M3_CUDE;
	else
		m = m + M3_INSP;
	
	var store = GS('INSP_Q','FInspection',FInspection,'inspId','DESC','','','inspId',false);
	
	store.load({params:{consId:_consign.get('consId')}});	
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	var cm=new Ext.grid.ColumnModel({columns:[sm,	
		{header:C_STATUS,dataIndex:'inspStatus',renderer:getINSPST},	
		{header:C_INSP_BILL_NO,dataIndex:'inspNo'},
		{header:C_INSP_AGENCY,dataIndex:'inspVendorName',width:150},
		{header:C_INSP_VENDOR_RN,dataIndex:'inspRefNo',width:150},
		{header:C_INSP_DATE,dataIndex:'inspDate',renderer:formatDate},
		{header:C_CARGO_SAMPLE,dataIndex:'inspCargoSampleFlag',renderer:boolRender,width:100},	
		{header:C_CARGO_SAMPLE_DATE,dataIndex:'inspCargoSampleDate',renderer:formatDate},
		
		{header:C_PACKAGE_CHECK,dataIndex:'inspPackageCheckFlag',renderer:boolRender,width:100},	
		{header:C_PACKAGE_CHECK_DATE,dataIndex:'inspPackageCheckDate',renderer:formatDate},
		
		{header:C_CARGO_SEND,dataIndex:'inspCargoSendFlag',renderer:boolRender,width:100},	
		{header:C_CARGO_SEND_DATE,dataIndex:'inspCargoSendDate',renderer:formatDate},
		
		{header:C_CARGO_CHECK,dataIndex:'inspCargoCheckFlag',renderer:boolRender,width:100},	
		{header:C_CARGO_CHECK_DATE,dataIndex:'inspCargoCheckDate',renderer:formatDate},
		
		{header:C_CERTIFICATION,dataIndex:'inspCertificationFlag',renderer:boolRender,width:100},	
		{header:C_CERTIFICATION_DATE,dataIndex:'inspCertificationDate',renderer:formatDate},
		
		{header:C_CERTIFICATION_CHECK,dataIndex:'inspCertificationCheckFlag',renderer:boolRender,width:100},	
		{header:C_CERTIFICATION_CHECK_DATE,dataIndex:'inspCertificationCheckDate',renderer:formatDate}
		],
		defaults:{sortable:true,width:100}
	});
	    
		
	var btnAdd = new Ext.Button({text:C_ADD,
		itemId:'TB_A',
		disabled:NR(m+F_M),
		iconCls:'add',
		scope:this,
		handler:function(){
			var rid=GGUID();
	    	var r = new FInspection({id:rid,
	    		inspId:rid,
	    		inspVendorId:_consign.get('consInspectionVendor'),
	    		inspVendorName:_consign.get('consInspectionVendorName'),
				consId:_consign.get('consId'),consNo:_consign.get('consNo'),
				inspDate:new Date(),
				inspShipperEn:_consign.get('consShipper'),
				inspConsigneeEn:_consign.get('consConsignee'),					
				inspCargoName:_consign.get('consCargoDesc'),
				inspNum:_consign.get('consCargoGrossWeight'),
				inspPackages:_consign.get('consCargoPackages'),
				inspConveyance:_consign.get('vessName')+' '+_consign.get('voyaName'),
				inspContractNo:_consign.get('consTradeContractNo'),
				inspShippingDate:_consign.get('consLoadDate'),
				inspTradeCountry:getCOUN(_consign.get('consTradeCountry')),
				inspPol:_consign.get('consPolEn'),
				inspPod:_consign.get('consPodEn'),
				inspContainerInfo:_consign.get('consContainersInfo'),
				inspMarks:_consign.get('consCargoMarks'),
				inspCargoSampleFlag:0,
				inspPackageCheckFlag:0,
				inspCargoSendFlag:0,
				inspCargoCheckFlag:0,
				inspCertificationFlag:0,
				inspCertificationCheckFlag:0,
				inspStatus:'0',
				version:'0',
				rowAction:'N'
			});
	    	
	    	var win = new Fos.InspectionWin(store,_consign,r);
			win.show();
	    }
	});
	
	var btnRemove = new Ext.Button({text:C_REMOVE,
		disabled:NR(m+F_R),
		iconCls:'remove',
		scope:this,
		handler:function(){
			var a =sm.getSelections();
	       	if(a.length){
	       		XMG.confirm(SYS,M_R_C,function(btn){
	           	if(btn=='yes'){
	           		var xml = SMTX4R(sm,'FInspection','inspId');
	           		Ext.Ajax.request({
	           			url:SERVICE_URL,
	           			method:'POST',
	           			params:{A:'INSP_S'},
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
		}
	});
	
	//编辑
	var btnEdit = new Ext.Button({text:C_EDIT,
		disabled:NR(m+F_V),
		iconCls:'option',
		handler:function(){
			var r = sm.getSelected();
			if(r){
				var win = new Fos.InspectionWin(store,_consign,r);
				win.show();
			}
			else 
				XMG.alert(SYS,M_NO_DATA_SELECTED);
		}
	});
	
	Fos.InspGridPanel.superclass.constructor.call(this, { 
		title:C_SR_INSP,
		autoScroll:true,		
		store:store,
		sm:sm,
		cm:cm,
		tbar:[btnAdd,'-',btnEdit,'-',btnRemove],
		listeners:{
			rowdblclick: function(grid, rowIndex, event){
				var r = sm.getSelected();
				if(r){
					var win = new Fos.InspectionWin(store,_consign,r);
					win.show();
				}
			}
		}
	});
};

Ext.extend(Fos.InspGridPanel, Ext.grid.GridPanel);


//报检单
Fos.InspectionWin = function(_store,_consign,_insp) {
	var m=getRM(_consign.get('consBizClass'),_consign.get('consBizType'),_consign.get('consShipType'));
	if(_consign.get('consBizType')==BT_G)
		m = m + M3_CUDE;
	else
		m = m + M3_INSP;    
		
	var expPanel = new Fos.SectionExGrid(_consign,'INSP',this);

	//报检公司
	var cboInspectionVendor = new Fos.CustomerLookup({fieldLabel:C_INSP_AGENCY,
		custType:'custInspectionFlag',
		name:'inspVendorName',
		value:_insp.get('inspVendorName'),
		store:getCS(),
		enableKeyEvents:true,
		displayField:'custCode',
		valueField:'custCode',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'97.5%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();					
					_insp.set('inspVendorId','');
					_insp.set('inspVendorName','');
				}
			},
			select:function(c,r,i){
				this.find('name','inspVendorContact')[0].setValue(r.get('custContact'));
				this.find('name','inspVendorTel')[0].setValue(r.get('custTel'));
				_insp.set('inspVendorId',r.get('custId'));
				_insp.set('inspVendorName',r.get('custNameCn'));	
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){LC(f,e,'custInspectionFlag');},buffer:BF}
		}
	});

	var txtInspNo = new Ext.form.TextField({fieldLabel:C_NO,
		name:'inspNo',
		value:_insp.get('inspNo'),
		anchor:'95%'
	});
	
	//报检类型
	var cboInspType = new Ext.form.MultiSelectComboBox({fieldLabel:C_INTY,
		itemCls:'required',
		name:'inspType',
		value:_insp.get('inspType'),
		store:getInspectionType_S(),
		displayField:'intyName',
		valueField:'intyName',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	var txtRefNo = new Ext.form.TextField({fieldLabel:C_INSP_VENDOR_RN,
		name:'inspRefNo',
		value:_insp.get('inspRefNo'),
		anchor:'95%'
	});
	
	var txtContact = new Ext.form.TextField({fieldLabel:C_CONTACT,
		name:'inspVendorContact',
		value:_insp.get('inspVendorContact'),
		anchor:'95%'
	});
	
	var txtTel = new Ext.form.TextField({fieldLabel:C_TEL,
		name:'inspVendorTel',
		value:_insp.get('inspVendorTel'),
		anchor:'95%'
	});
	
	var dtInspDate = new Ext.form.DateField({fieldLabel:C_INSP_DATE,
		name:'inspDate',
		value:_insp.get('inspDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	var txtShipperCn = new Ext.form.TextField({fieldLabel:C_SHIPPER_CN,
		name:'inspShipperCn',
		value:_insp.get('inspShipperCn'),
		anchor:'98.75%'
	});
	
	var txtShipperEn = new Ext.form.TextField({fieldLabel:C_EN,
		name:'inspShipperEn',
		value:_insp.get('inspShipperEn'),
		anchor:'98.75%'
	});
	
	var txtConsigneeCn = new Ext.form.TextField({fieldLabel:C_CONSIGNEE_CN,
		name:'inspConsigneeCn',
		value:_insp.get('inspConsigneeCn'),
		anchor:'98.75%'
	});
	
	var txtConsigneeEn = new Ext.form.TextField({fieldLabel:C_EN,
		name:'inspConsigneeEn',
		value:_insp.get('inspConsigneeEn'),
		anchor:'98.75%'
	});
	
	var txtCargoName = new Ext.form.TextArea({fieldLabel:C_CARGO_NAME_CN_EN,
		name:'inspCargoName',
		value:_insp.get('inspCargoName'),
		anchor:'95%'
	});
	
	var txtHsNo = new Ext.form.TextArea({fieldLabel:C_HS_CODE,
		name:'inspHsNo',
		value:_insp.get('inspHsNo'),
		anchor:'95%'
	});
	
	var txtMadeIn = new Ext.form.TextArea({fieldLabel:C_MADE_IN,
		name:'inspMadeIn',
		value:_insp.get('inspMadeIn'),
		anchor:'95%'
	});
	
	var txtNum = new Ext.form.TextArea({fieldLabel:C_QUANTITY_WEIGHT,
		name:'inspNum',
		value:_insp.get('inspNum'),
		anchor:'95%'
	});
	
	var txtValue = new Ext.form.TextArea({fieldLabel:C_CARGO_VALUE,
		name:'inspValue',
		value:_insp.get('inspValue'),
		anchor:'95%'
	});
	
	var txtPackages = new Ext.form.TextArea({fieldLabel:C_PACK_QUANTITY,
		name:'inspPackages',
		value:_insp.get('inspPackages'),
		anchor:'95%'
	});
	
	var txtConveyance = new Ext.form.TextField({fieldLabel:C_CONVEYANCE,
		name:'inspConveyance',
		value:_insp.get('inspConveyance'),
		anchor:'95%'
	});
	
	var cboTradeType = new Ext.form.ComboBox({fieldLabel:C_TRTY,
		name:'inspTradeType',
		value:_insp.get('inspTradeType'),
		store:getTRTY_S(),
		displayField:'trtyName',
		valueField:'trtyName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	var txtCargoAddress = new Ext.form.TextField({fieldLabel:C_CARGO_ADDRESS,
		name:'inspCargoAddress',
		value:_insp.get('inspCargoAddress'),
		anchor:'95%'
	});
	
	var txtContractNo = new Ext.form.TextField({fieldLabel:C_CONTRACT_NO,
		name:'inspContractNo',
		value:_insp.get('inspContractNo'),
		anchor:'95%'
	});
	
	var txtCreditNo = new Ext.form.TextField({fieldLabel:C_CREDIT_NO,
		name:'inspCreditNo',
		value:_insp.get('inspCreditNo'),
		anchor:'95%'
	});
	
	var cboUsage = new Ext.form.ComboBox({fieldLabel:C_USAG,
		name:'inspUsage',
		value:_insp.get('inspUsage'),
		store:getUSAG_S(),
		displayField:'usagName',
		valueField:'usagName',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	var dtShippingDate = new Ext.form.DateField({fieldLabel:_consign.get('consBizClass')==BC_E?C_CARGO_DELIVERY_DATE:C_CARGO_DISCHARGE_DATE,
		name:'inspShippingDate',
		value:_insp.get('inspShippingDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	var cboTradeCountry = new Ext.form.ComboBox({fieldLabel:_consign.get('consBizClass')==BC_E?C_COUNTRY_TO:C_COUNTRY_FROM,
		name:'inspTradeCountry',
		value:_insp.get('inspTradeCountry'),
		store:getCOUN_S(),
		displayField:'counNameEn',
		valueField:'counNameEn',
		typeAhead:true,
		mode:'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'95%'
	});
	
	var txtCertificateNo = new Ext.form.TextField({fieldLabel:C_CERTIFICATE_NO,
		name:'inspCertificateNo',
		value:_insp.get('inspCertificateNo'),
		anchor:'95%'
	});
	
	
	var txtPol = new Ext.form.TextField({fieldLabel:C_PORT_FROM,
		name:'inspPol',
		value:_insp.get('inspPol'),
		anchor:'95%'
	});
	
	var txtPod = new Ext.form.TextField({fieldLabel:_consign.get('consBizClass')==BC_E?C_PORT_TO:C_PORT_IN,
		name:'inspPod',
		value:_insp.get('inspPod'),
		anchor:'95%'
	});
	
	var txtRegisterNo = new Ext.form.TextField({fieldLabel:C_REGISTER_NO,
		name:'inspRegisterNo',
		value:_insp.get('inspRegisterNo'),
		anchor:'95%'
	});
	
	
	var dtClaimDate = new Ext.form.DateField({fieldLabel:C_CLAIM_DATE,
		name:'inspClaimDate',
		value:_insp.get('inspClaimDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	var txtContainerInfo = new Ext.form.TextArea({fieldLabel:C_CONT_SPEC_NO,
		name:'inspContainerInfo',
		value:_insp.get('inspContainerInfo'),
		anchor:'98.75%'
	});
	
	var txtSpecialTerm = new Ext.form.TextArea({fieldLabel:C_INSP_SPECIAL_TERM,
		name:'inspSpecialTerm',
		value:_insp.get('inspSpecialTerm'),
		anchor:'97.5%'
	});
	
	var txtMarks = new Ext.form.TextArea({fieldLabel:C_MARKS_NO,
		name:'inspMarks',
		value:_insp.get('inspMarks'),
		anchor:'97.5%'
	});
	
	var dtReceiveDate = new Ext.form.DateField({fieldLabel:C_RECEIVE_DATE,
		name:'inspReceiveDate',
		value:_insp.get('inspReceiveDate'),
		format:DATEF,
		anchor:'92%'
	});
	
	var txtReceiver = new Ext.form.TextField({fieldLabel:C_RECEIVER,
		name:'inspReceiver',
		value:_insp.get('inspReceiver'),
		anchor:'95%'
	});
	
	
	var frm = new Ext.Panel({labelAlign:'right',
		labelWidth:60,
		trackResetOnLoad:false,
		layout:'column',
		title:C_INSP_BILL_INFO,
		layoutConfig: {columns:4},
		padding:10,
		autoScroll:true,
		items: [
			{columnWidth:.5,layout:'form',labelWidth:100,border:false,items:[cboInspectionVendor]},
			{columnWidth:.25,layout:'form',border:false,trackResetOnLoad:true,items:[txtInspNo]},
			{columnWidth:.25,layout:'form',border:false,trackResetOnLoad:true,items:[cboInspType]},
			
			{columnWidth:.25,layout:'form',labelWidth:100,border:false,items:[txtRefNo]},
			{columnWidth:.25,layout:'form',border:false,trackResetOnLoad:true,items:[txtContact]},
			{columnWidth:.25,layout:'form',border:false,trackResetOnLoad:true,items:[txtTel]},
			{columnWidth:.25,layout:'form',border:false,items:[dtInspDate]},
			{columnWidth:1,layout:'form',labelWidth:100,border:false,items:[txtShipperCn]},
			{columnWidth:1,layout:'form',labelWidth:100,border:false,items:[txtShipperEn]},
			{columnWidth:1,layout:'form',labelWidth:100,border:false,items:[txtConsigneeCn]},
			{columnWidth:1,layout:'form',labelWidth:100,border:false,items:[txtConsigneeEn]},
						
			{columnWidth:.3,layout: 'form',border :false,labelAlign:'top',items: [txtCargoName]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',items: [txtHsNo]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',items: [txtMadeIn]},
			{columnWidth:.1,layout: 'form',border:false,labelAlign:'top',items: [txtNum]},
            {columnWidth:.1,layout: 'form',border : false,labelAlign:'top',items: [txtValue]},
            {columnWidth:.3,layout: 'form',labelAlign:'top',labelWidth:85,border:false,items: [txtPackages]},
            
			{columnWidth:.34,layout:'form',labelWidth:150,border:false,items:[txtConveyance,txtContractNo,dtShippingDate,txtPol]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[cboTradeType,txtCreditNo,cboTradeCountry,txtPod]},
            {columnWidth:.33,layout:'form',labelWidth:100,border : false,items:[txtCargoAddress,cboUsage,txtCertificateNo,_consign.get('consBizClass')==BC_E?txtRegisterNo:dtClaimDate]},
                                   
            {columnWidth:1,layout:'form',labelWidth:150,border : false,items:[txtContainerInfo]},
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
		value:_insp.get('inspCargoSampleFlag'),
		anchor:'95%',
     	listeners:{
     		scope:this,
     		'check':function(c,checked){
     			if(checked)
     				dtCargoSampleDate.setDisabled(false);
     			else
     				dtCargoSampleDate.setDisabled(true);
     		}
     	}
     });
	
	
	//抽样日期
	var dtCargoSampleDate = new Ext.form.DateField({fieldLabel:C_CARGO_SAMPLE_DATE,
		name:'inspCargoSampleDate',
		value:_insp.get('inspCargoSampleDate'),
		disabled:_insp.get('inspCargoSampleFlag')==0,
		format:DATEF,
		anchor:'95%'
	});
	
	
	//包装查验
	var chkPackageCheckFlag = new Ext.form.Checkbox({
		fieldLabel:C_PACKAGE_CHECK,
		name:'inspPackageCheckFlag',
		value:_insp.get('inspPackageCheckFlag'),		
		anchor:'95%',
     	listeners:{
     		scope:this,
     		'check':function(c,checked){
     			if(checked)
     				dtPackageCheckDate.setDisabled(false);
     			else
     				dtPackageCheckDate.setDisabled(true);
     		}
     	}
     });
	
	//检包日期
	var dtPackageCheckDate = new Ext.form.DateField({fieldLabel:C_PACKAGE_CHECK_DATE,
		name:'inspPackageCheckDate',
		value:_insp.get('inspPackageCheckDate'),
		disabled:_insp.get('inspPackageCheckFlag')==0,
		format:DATEF,
		anchor:'95%'
	});
	
	
	//货物送样
	var chkCargoSendFlag = new Ext.form.Checkbox({
		fieldLabel:C_CARGO_SEND,
		name:'inspCargoSendFlag',
		value:_insp.get('inspCargoSendFlag'),
		anchor:'95%',
     	listeners:{
     		scope:this,
     		'check':function(c,checked){
     			if(checked)
     				dtCargoSendDate.setDisabled(false);
     			else
     				dtCargoSendDate.setDisabled(true);
     		}
     	}
     });
	
	//送样日期
	var dtCargoSendDate = new Ext.form.DateField({fieldLabel:C_CARGO_SEND_DATE,
		name:'inspCargoSendDate',
		value:_insp.get('inspCargoSendDate'),
		disabled:_insp.get('inspCargoSendFlag')==0,
		format:DATEF,
		anchor:'95%'
	});
	
	
	//货物检验
	var chkCargoCheckFlag = new Ext.form.Checkbox({
		fieldLabel:C_CARGO_CHECK,
		name:'inspCargoCheckFlag',
		value:_insp.get('inspCargoCheckFlag'),
		anchor:'95%',
     	listeners:{
     		scope:this,
     		'check':function(c,checked){
     			if(checked)
     				dtCargoCheckDate.setDisabled(false);
     			else
     				dtCargoCheckDate.setDisabled(true);
     		}
     	}
     });
	
	//检验日期
	var dtCargoCheckDate = new Ext.form.DateField({fieldLabel:C_CARGO_CHECK_DATE,
		name:'inspCargoCheckDate',
		value:_insp.get('inspCargoCheckDate'),
		disabled:_insp.get('inspCargoCheckFlag')==0,
		format:DATEF,
		anchor:'95%'
	});
	
	
	//检验出证
	var chkCertificationFlag = new Ext.form.Checkbox({
		fieldLabel:C_CERTIFICATION,
		name:'inspCertificationFlag',
		value:_insp.get('inspCertificationFlag'),
		anchor:'95%',
     	listeners:{
     		scope:this,
     		'check':function(c,checked){
     			if(checked)
     				dtCertificationDate.setDisabled(false);
     			else
     				dtCertificationDate.setDisabled(true);
     		}
     	}
     });
	
	//出证日期
	var dtCertificationDate = new Ext.form.DateField({fieldLabel:C_CERTIFICATION_DATE,
		name:'inspCertificationDate',
		value:_insp.get('inspCertificationDate'),
		disabled:_insp.get('inspCertificationFlag')==0,
		format:DATEF,
		anchor:'95%'
	});
	
	
	//换证查验
	var chkCertificationCheckFlag = new Ext.form.Checkbox({
		fieldLabel:C_CERTIFICATION_CHECK,
		name:'inspCertificationCheckFlag',
		value:_insp.get('inspCertificationCheckFlag'),
		anchor:'95%',
     	listeners:{
     		scope:this,
     		'check':function(c,checked){
     			if(checked)
     				dtCertificationCheckDate.setDisabled(false);
     			else
     				dtCertificationCheckDate.setDisabled(true);
     		}
     	}
     });
	
	//查验日期
	var dtCertificationCheckDate = new Ext.form.DateField({fieldLabel:C_CERTIFICATION_CHECK_DATE,
		name:'inspCertificationCheckDate',
		value:_insp.get('inspCertificationCheckDate'),
		disabled:_insp.get('inspCertificationCheckFlag')==0,
		format:DATEF,
		anchor:'95%'
	});
	
	//委托类型 (熏蒸，消毒，卫生除虫，其它)
	var cboTsType = new Ext.form.ComboBox({fieldLabel:C_TS_TYPE,
		name:'inspTsType',
		value:_insp.get('inspTsType'),
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
		value:_insp.get('inspTsNo'),
		anchor:'95%'
	});
	
	//申请日期
	var dtTsApplyDate = new Ext.form.DateField({fieldLabel:C_APPLY_DATE,
		name:'inspTsApplyDate',
		value:_insp.get('inspTsApplyDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//作业日期
	var dtTsOperationDate = new Ext.form.DateField({fieldLabel:C_OPERATION_DATE,
		name:'inspTsOperationDate',
		value:_insp.get('inspTsOperationDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//完成日期
	var dtTsEndDate = new Ext.form.DateField({fieldLabel:C_OPERATION_END_DATE,
		name:'inspTsEndDate',
		value:_insp.get('inspTsEndDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	var txtTsObject = new Ext.form.TextField({fieldLabel:C_OP_OBJECT,
		name:'inspTsObject',
		value:_insp.get('inspTsObject'),
		anchor:'95%'
	});
	
	var txtTsRemark = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'inspTsRemark',
		value:_insp.get('inspTsRemark'),
		anchor:'95%'
	});
	
	
			
	
	//卫检日期
	var dtCsDate = new Ext.form.DateField({fieldLabel:C_CS_DATE,
		name:'inspCsDate',
		value:_insp.get('inspCsDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//卫检号
	var txtCsNo = new Ext.form.TextField({fieldLabel:C_CS_NO,
		name:'inspCsNo',
		value:_insp.get('inspCsNo'),
		anchor:'95%'
	});
	
	//卫检查验
	var chkCsCheckFlag = new Ext.form.Checkbox({
		fieldLabel:C_CS_CHECK,
		name:'inspCsCheckFlag',
		value:_insp.get('inspCsCheckFlag'),
		anchor:'95%'
     });
	
	var txtCsRemark = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'inspCsRemark',
		value:_insp.get('inspCsRemark'),
		anchor:'95%'
	});
	
	
	
	//申请日期
	var dtClApplyDate = new Ext.form.DateField({fieldLabel:C_APPLY_DATE,
		name:'inspClApplyDate',
		value:_insp.get('inspClApplyDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//检验日期
	var dtClDate = new Ext.form.DateField({fieldLabel:C_CL_DATE,
		name:'inspClDate',
		value:_insp.get('inspClDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//适载编号
	var txtClNo = new Ext.form.TextField({fieldLabel:C_CL_NO,
		name:'inspClNo',
		value:_insp.get('inspClNo'),
		anchor:'95%'
	});
	
	//适载柜号
	var txtClContainerNo = new Ext.form.TextField({fieldLabel:C_CL_CONTAINER_NO,
		name:'inspClContainerNo',
		value:_insp.get('inspClContainerNo'),
		anchor:'95%'
	});
	
	var txtClRemark = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'inspClRemark',
		value:_insp.get('inspClRemark'),
		anchor:'95%'
	});
	
	
	
	
	//申请日期
	var dtLcApplyDate = new Ext.form.DateField({fieldLabel:C_APPLY_DATE,
		name:'inspLcApplyDate',
		value:_insp.get('inspLcApplyDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//委托类型 (监装，监磅，水尺，其它)
	var cboLcType = new Ext.form.ComboBox({fieldLabel:C_LC_TYPE,
		name:'inspLcType',
		value:_insp.get('inspLcType'),
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
		value:_insp.get('inspLcOperationDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	//完成日期
	var dtLcEndDate = new Ext.form.DateField({fieldLabel:C_OPERATION_END_DATE,
		name:'inspLcEndDate',
		value:_insp.get('inspLcEndDate'),
		format:DATEF,
		anchor:'95%'
	});
	
	var txtLcObject = new Ext.form.TextField({fieldLabel:C_OP_OBJECT,
		name:'inspLcObject',
		value:_insp.get('inspLcObject'),
		anchor:'95%'
	});
	
	var txtLcRemark = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		name:'inspLcRemark',
		value:_insp.get('inspLcRemark'),
		anchor:'95%'
	});
	
	
	
	var frmRecord = new Ext.Panel({title:C_INSP_RECORD,
		layout:'column',
		layoutConfig:{columns:4},
		padding:10,
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
		     {columnWidth:.25,layout:'fit',border:false,padding:5,items:[{//检验检疫技术服务
		    	 xtype:'fieldset',
		 		id:'inspTsFlag',
		    	labelAlign:'right',
		    	labelWidth:60,
		    	checkboxToggle:true,
		    	checkboxName:'inspTsFlag',    	
		    	collapsed: _insp.get('inspTsFlag')==0,
		    	title:C_TS,
		    	autoHeight:true,
		    	items:[cboTsType,txtTsNo,dtTsApplyDate,dtTsOperationDate,dtTsEndDate,txtTsObject,txtTsRemark]
		    }]},
		     {columnWidth:.25,layout:'fit',border:false,padding:5,items:[{id:'inspCsFlag',//箱体卫检
		    	 xtype:'fieldset',
		     	labelAlign:'right',
		    	labelWidth:60,
		    	checkboxToggle:true,
		    	checkboxName:'inspCsFlag',
		    	collapsed: _insp.get('inspCsFlag')==0,
		    	title:C_CS,
		    	autoHeight:true,
		    	items:[dtCsDate,txtCsNo,chkCsCheckFlag,txtCsRemark]
		    }]},
		     {columnWidth:.25,layout:'fit',border:false,padding:5,items:[{id:'inspClFlag',//箱体适载
		    	 xtype:'fieldset',
		     	labelAlign:'right',
		    	labelWidth:60,
		    	checkboxToggle:true,
		    	checkboxName:'inspClFlag',
		    	collapsed: _insp.get('inspClFlag')==0,
		    	title:C_CL,
		    	autoHeight:true,
		    	defaultType:'textfield',
		    	items:[dtClApplyDate,dtClDate,txtClNo,txtClContainerNo,txtClRemark]
		    }]},
		     {columnWidth:.25,layout:'fit',border:false,padding:5,items:[{id:'inspLcFlag',//装运前检验
		    	 xtype:'fieldset',
		     	labelAlign:'right',
		    	labelWidth:60,
		    	checkboxToggle:true,
		    	checkboxName:'inspLcFlag',
		    	collapsed: _insp.get('inspLcFlag')==0,
		    	title:C_LC,
		    	autoHeight:true,
		    	items:[dtLcApplyDate,cboLcType,dtLcOperationDate,dtLcEndDate,txtLcObject,txtLcRemark]
		    }]}
		]
	});
		
	
	this.updateStatus=function(s){    	
    	Ext.Ajax.request({scope:this,
    		url:SERVICE_URL,
    		method:'POST',
    		params:{
    			A:'INSP_U',
    			consId:_insp.get('consId'),
    			inspId:_insp.get('inspId'),
    			inspStatus:s
    		},
			success: function(r){
				_insp.set('inspStatus',s);
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(r){
				XMG.alert(SYS,M_F+r.responseText);
			}
		});
    };    
    
    this.updateToolBar=function(){
    	var s = _insp.get('inspStatus');
		btnRemove.setDisabled(NR(m+F_R)||s!=0);
		btnSave.setDisabled(NR(m+F_M)||s!=0);
		btnApply.setDisabled(NR(m+F_M)||s!=0);
		btnPass.setDisabled(NR(m+F_M)||s!=1);
    };
    
	var btnSave = new Ext.Button({text:C_SAVE,
		disabled:NR(m+F_M),
		iconCls:'save',
		scope:this,
		handler:function(){
			saveToRecord(frm,_insp);
			saveToRecord(frmRecord,_insp);
			
			var ts = this.findById('inspTsFlag');
	   	 	if(ts!=undefined&&ts.checkbox)
	   	 		_insp.set('inspTsFlag',this.findById('inspTsFlag').checkbox.dom.checked);
	   	 	
	   	 	var cs = this.findById('inspCsFlag');
		 	if(cs!=undefined&&cs.checkbox)
		 		_insp.set('inspCsFlag',this.findById('inspCsFlag').checkbox.dom.checked);
		 	
		 	var cl = this.findById('inspClFlag');
		 	if(cl!=undefined&&cl.checkbox)
		 		_insp.set('inspClFlag',this.findById('inspClFlag').checkbox.dom.checked);
		 	
		 	var lc = this.findById('inspLcFlag');
		 	if(lc!=undefined&&lc.checkbox)
		 		_insp.set('inspLcFlag',this.findById('inspLcFlag').checkbox.dom.checked);
		 	
		 	
			var xml= RTX(_insp,'FInspection',FInspection);
			
			btnSave.setDisabled(true);
		 	Ext.Ajax.request({scope:this,
		 		url:SERVICE_URL,
		 		method:'POST',
		 		params:{
		 			A:'INSP_S'
		 		},
				success: function(res){										
					var insp = XTR(res.responseXML,'FInspection',FInspection);							
					var ra = _insp.get('rowAction');					
					var f = FInspection.prototype.fields;
					_insp.beginEdit();
	   				for (var i = 0; i < f.keys.length; i++) {
	   					var fn = ''+f.keys[i];
	   					_insp.set(fn,insp.get(fn));
	   				}								
					
					if(ra=='N'){
						_store.add(_insp);
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
		   		{text:C_INSP_BILL,scope:this,handler:function(){
		   			var b = this.inspGrid.getSelectionModel().getSelected();
		   			if(b){
		   				EXPC('INSP','&inspId='+b.get('inspId'));
		   			}
		   		}}
	   		]}
	});
	
	var inspDetailPanel = new Ext.Panel({
		autoScroll:true,
		items:[frm,frmRecord,
		       {border:false,layout:'fit',items:expPanel}
		],
		tbar:[btnSave,'-',btnApply,'-',btnPass,'-',btnExport]
    });
	
    Fos.InspectionWin.superclass.constructor.call(this, {    	
		title:C_SR_INSP,
		modal:true,
		width:1000,
        height:600,
        layout:'fit',
        maximizable:true,
        maximized:true,
        plain:false,
        buttonAlign:'right',
        items:inspDetailPanel
	});
};
Ext.extend(Fos.InspectionWin, Ext.Window);

