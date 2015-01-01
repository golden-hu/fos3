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
		id:'T_INSP_'+p.get('id'),
		title:C_SR_INSP,
		layout:'border',
		autoScroll:true,
		tbar:[{text:C_ADD,itemId:'TB_A',disabled:NR(m+F_M),iconCls:'add',scope:this,handler:this.addInsp},'-',
		{text:C_REMOVE,itemId:'TB_B',disabled:NR(m+F_R),iconCls:'remove',scope:this,handler:this.removeInsp},'-',
		{text:C_SAVE,itemId:'TB_C',disabled:NR(m+F_M),iconCls:'save',scope:this,handler:this.save},'-',
		{text:C_APPLY,itemId:'TB_D',disabled:NR(m+F_M),iconCls:'docpass',scope:this,handler:function(){this.updateStatus('1');}},'-',
		{text:C_END,itemId:'TB_E',disabled:NR(m+F_M),iconCls:'pass',scope:this,handler:function(){this.updateStatus('2');}},'-',	
		{text:C_EXPORT,disabled:NR(m+F_E),iconCls:'print',scope:this,
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
	Fos.InspectionWin.superclass.constructor.call(this, {title:p.get('consNo')+C_INSP_BILL,
		modal:true,
		width:900,
        height:565,
        layout:'fit',
        plain:false,
        buttonAlign:'right',
        items:panel
    });
};
Ext.extend(Fos.InspectionWin,Ext.Window);