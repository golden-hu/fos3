//报检委托
Fos.InspectionConsignPanel = function(p,store) {    
    var locked=p.get('consStatusLock')==1;
    var disable=p.get('editable')==0;
    var m=getRM(p.get('consBizClass'),BT_I,'')+M3_CONS;   
    var m1 =getRM(p.get('consBizClass'),BT_I,'');
    
    var txtConsNo = new Ext.form.TextField({fieldLabel:C_CONS_NO,
    	style:'{font-weight:bold;color:green;}',
    	disabled:true,
    	tabIndex:1,
		name:'consNo',
		value:p.get('consNo'),
		xtype:'textfield',
		anchor:'99%'
	});
    
    var cboBooker = new Ext.form.ComboBox({fieldLabel:C_BOOKER,
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
		anchor:'99%',
     	listeners:{scope:this,
	     	blur:function(f){
	     		if(f.getRawValue()==''){
	     			f.clearValue();
	     			p.set('custId','');
	     			p.set('custName','');}},
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
	     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}
     	}
    });
    
    var cboBizCompany = new Ext.form.ComboBox({fieldLabel:C_BIZ_COMPANY,
    	tabIndex:9,
    	name:'consCompany',
    	value:p.get('consCompany'),
  		xtype:'combo',
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
		selectOnFocus:true,
		anchor:'99%',
     	listeners:{scope:this, 	 			     	
	     	select:function(c,r,i){ 	 	
	     		p.set('consCompany',r.get('custNameCn'));
	     		c.setValue(r.get('custNameCn'));
	     	},
	     	keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:BF}
		}
    });
    
    var dtConsDate = new Ext.form.DateField({fieldLabel:C_CONS_DATE,
		tabIndex:13,
		name:'consDate',
		value:p.get('consDate'),
  		format:DATEF,
  		anchor:'99%',
  		listeners:{
  			select:function(t,d){
  				txtSailDate.setValue(d);
  			}
  		}
	});
    
    var txtVerificationNo = new Ext.form.TextField({fieldLabel:C_VERIFICATION_NO,
    	tabIndex:21,
    	name:'consVerificationNo',
    	value:p.get('consVerificationNo'),
	    xtype:'textfield',
	    anchor:'99%'
    });
    
    var cboInspectionVendor = new Ext.form.ComboBox({fieldLabel:C_INSP_AGENCY,
    	tabIndex:25,
    	name:'consInspectionVendorName',
		value:p.get('consInspectionVendorName'),
		store:getCS(),
		enableKeyEvents:true,
   		tpl:custTpl,
   		itemSelector:'div.list-item',
   		listWidth:C_LW,
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
   					p.set('consInspectionVendor','');
   					p.set('consInspectionVendorName','');
   			}},
   			select:function(c,r,i){
   				p.set('consInspectionVendor',r.get('custId'));
   				p.set('consInspectionVendorName',r.get('custNameCn'));
   			c.setValue(r.get('custNameCn'));
   			},
   			keydown:{fn:function(f,e){LC(f,e,'custInspectionFlag');},buffer:BF}
   		}
    });
    	
    
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
     	anchor:'99%',
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
    
    var txtContact = new Ext.form.TextField({fieldLabel:C_CONTACT,
		tabIndex:6,
		name:'custContact',
		value:p.get('custContact'),
		anchor:'99%'
	});
    
    var txtRefNo = new Ext.form.TextField({fieldLabel:C_REF_NO,
		tabIndex:10,
		name:'consRefNo',
		value:p.get('consRefNo'),
		anchor:'99%'
	});
    
    var dtCloseDate = new Ext.form.DateField({fieldLabel:C_CONS_CLOSE_DATE,
		tabIndex:14,
		name:'consCloseDate',
		value:p.get('consCloseDate'),
		format:DATEF,
		anchor:'99%'
	});
    
	//将美线仓单申报号在此用作申请号
    var txtApplicationNo = new Ext.form.TextField({fieldLabel:C_APPLICATION_NO,
    	tabIndex:26,
    	name:'consBookingDeclareNoUs',
    	value:p.get('consBookingDeclareNoUs'),
		xtype:'textfield',
		anchor:'99%'
	});
    
    var cboSalesRep = new Ext.form.ComboBox({fieldLabel:C_SALES,
		itemCls:'required',
		tabIndex:3,
		name:'consSalesRepName',
		value:p.get('consSalesRepName'),
 		store:getSALE_S(),
 		displayField:'userName',
 		valueField:'userName',
 		editable:false,
 		typeAhead: true,
 		mode: 'local',
 		triggerAction: 'all',
 		selectOnFocus:true,anchor:'99%',
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
    
    var txtCustTel = new Ext.form.TextField({fieldLabel:C_PHONE,
		tabIndex:7,
		name:'custTel',
		value:p.get('custTel'),
		anchor:'99%'
	});
    
    var txtInspectionNo = new Ext.form.TextField({fieldLabel:C_INSPECTION_NO,
    	tabIndex:11,
    	name:'consCustomsDeclearationNo',
    	value:p.get('consCustomsDeclearationNo'),
	    xtype:'textfield',
	    anchor:'99%'
	});
    
	//将attr1用作我司发票号
    var txtMyCompanyInvoice = new Ext.form.TextField({fieldLabel:C_MYCOMPANY_INVOICE,
    	tabIndex:23,name:'attr2',
    	value:p.get('attr2'),
		xtype:'textfield',
		anchor:'99%'
	});
    
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
		anchor:'99%'
	});
    
    var txtCustFax = new Ext.form.TextField({fieldLabel:C_FAX,
		tabIndex:8,
		name:'custFax',
		value:p.get('custFax'),
		anchor:'99%'
	});
    
    var dtCustomsDeclearDate = new Ext.form.DateField({fieldLabel:C_INSPECTION_DATE,
		tabIndex:12,
		name:'consCustomsDeclearDate',
		value:p.get('consCustomsDeclearDate'),
		xtype:'datefield',
		format:DATEF,
		anchor:'99%'
	});
    
    var txtHsCode = new Ext.form.TextField({fieldLabel:C_HS_CODE,
		tabIndex:16,
		name:'cargHsCode',
		value:p.get('cargHsCode'),
		anchor:'99%'
	});
    
    var txtContractNo = new Ext.form.TextField({fieldLabel:C_CONTRACT_NO,
    	tabIndex:24,
    	name:'consContractNo',
    	value:p.get('consContractNo'),
		xtype:'textfield',
		anchor:'99%'
	});
    
    
	//将贸易合同号在此用作商检发票号    
    var txtInvoiceNo = new Ext.form.TextField({fieldLabel:C_COMMODITY_NO,
    	tabIndex:27,
    	name:'consTradeContractNo',
    	value:p.get('consTradeContractNo'),
		xtype:'textfield',
		anchor:'99%'
    });
    
    var txtCertNo = new Ext.form.TextField({fieldLabel:C_CERT,
    	tabIndex:23,
    	name:'consCertNo',
    	value:p.get('consCertNo'),
		xtype:'textfield',
		anchor:'33%'
	});
    
    var txtRemarks = new Ext.form.TextField({fieldLabel:C_REMARKS,
    	tabIndex:25,
    	name:'consRemarks',
    	value:p.get('consRemarks'),
 		xtype:'textarea',
 		height:150,
 		anchor:'99%'
 	});
    
    //船名
	var txtVessName = {fieldLabel:C_VESS,
		tabIndex:17,
    	name:'vessName',
    	value:p.get('vessName'),
    	xtype:'textfield',
    	anchor:'99%'
    };
	
	//航次
	var txtVoyage={fieldLabel:C_VOYA,
		tabIndex:18,
		name:'voyaName',
		value:p.get('voyaName'),
		xtype:'textfield',
		anchor:'99%'
	};
	
	//开航日期
	var txtSailDate=new Ext.form.DateField({fieldLabel:p.get('consBizClass')==BC_I?C_ETA:C_SAIL_DATE,
		tabIndex:19,
		itemCls:'required',
		editable:false,
		name:'consSailDate',
		value:p.get('consSailDate'),
		xtype:'datefield',
		format:DATEF,anchor:'99%'
	});
	
	//MB/L No.
  	var txtConsMblNo = {fieldLabel:C_M_BL_NO,
  		name:'consMblNo',
  		value:p.get('consMblNo'),
  		xtype:'textfield',
  		anchor:'99%'
  	};
  	
  	//HB/L No.
    var txtConsHblNo = {fieldLabel:C_H_BL_NO,
    	name:'consHblNo',
    	value:p.get('consHblNo'),
    	xtype:'textfield',
    	anchor:'99%'
    };
    
    //装货港
	var cboPolEn = {fieldLabel:C_POL,itemCls:'needed',
		tabIndex:p.get('consBizClass')==BC_I?39:43,
		name:'consPolEn',
		value:p.get('consPolEn'),
		store:getPS(),
		xtype:'combo',
		displayField:p.get('consBizType')==BT_A?'portCode':'portNameEn',
		valueField:'portNameEn',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%',
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
         	keydown:{fn:p.get('consBizType')==BT_A?LAP:LP,buffer:BF}}
	};
	
	//卸货港
    var cboPodEn = {fieldLabel:C_POD,
    	itemCls:'needed',
    	tabIndex:p.get('consBizClass')==BC_I?40:47,
    	name:'consPodEn',
		value:p.get('consPodEn'),
		store:getPS(),
		xtype:'combo',
		displayField:p.get('consBizType')==BT_A?'portCode':'portNameEn',
		valueField:'portNameEn',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%',
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
    };
    
    var txtPotEn = {fieldLabel:C_DESTINATION_PORT,
    	name:'consDeliveryPlace',
    	value:p.get('consDeliveryPlace'),
    	xtype:'textfield',
    	anchor:'99%'
    };
    
    var txtCargoNameEn = {columnWidth:.5,
    	layout:'form',
    	labelWidth:70,
    	border:false,
		items:[{fieldLabel:C_CARGO_NAME_CN_EN,
			tabIndex:61,
			name:'consCargoNameEn',
			value:p.get('consCargoNameEn'),
			xtype:'textarea',
			anchor:'99.5%'
		}			
		]
    };
	
    var txtTotalPackages = {fieldLabel:C_PACKAGES,
    	tabIndex:61,name:'consTotalPackages',
    	value:p.get('consTotalPackages'),
    	xtype:'numberfield',
    	anchor:'99%'
    };
	
	var numGrossWeight = {fieldLabel:C_GW_S,
		name:'consTotalGrossWeight',
		value:p.get('consTotalGrossWeight'),
		xtype:'numberfield',
		decimalPrecision:4,
		anchor:'99%'
	};
	
	var numNetWeight = {fieldLabel:C_MW_S,
		name:'consTotalNetWeight',value:p.get('consTotalNetWeight'),
		xtype:'numberfield',decimalPrecision:4,anchor:'99%'};
	
	var numMeasurement = {fieldLabel:C_CBM_S,
		name:'consTotalMeasurement',value:p.get('consTotalMeasurement'),
		xtype:'numberfield',decimalPrecision:4,anchor:'99%'};  
	
	
	this.save = function(){
    	if(this.find('name','custName')[0].getValue()==''){
			XMG.alert(SYS,M_CUST_REQIRED,function(){this.find('name','custName')[0].focus();},this);
			return;
		}
		if(!p.get('custId')){
			XMG.alert(SYS,M_CUST_MUST_PREDEFINED);
			return;
		}
		if(this.find('name','deptId')[0].getValue()==''){
			XMG.alert(SYS,M_DEPT_REQIRED,function(){this.find('name','deptId')[0].focus();},this);
			return;
		}
		if(this.find('name','consSalesRepName')[0].getValue()==''){
			XMG.alert(SYS,M_SALES_REQIRED,function(){this.find('name','consSalesRepName')[0].focus();},this);
			return;
		}
		if(this.find('name','consOperatorName')[0].getValue()==''){
			XMG.alert(SYS,M_OPERATOR_REQIRED,function(){this.find('name','consOperatorName')[0].focus();},this);
			return;
		}
		
		if(txtSailDate.getValue()==''){
			XMG.alert(SYS,p.get('consBizClass')==BC_I?M_ETA_REQIRED:M_ETD_REQIRED,
				function(){txtSailDate.focus();},this);
			return;
		};
		
		var f = FConsign.prototype.fields;
		for (var i = 0; i < f.keys.length; i++) {
        	var fn = ''+f.keys[i];
        	var fc = this.find('name',fn);
        	if(fc!=undefined&&fc.length>0){
        		p.set(fn,fc[0].getValue());
        	}
   	 	}    	 	
   	 	var xml = RTX(p,'FConsign',FConsign);
   	 	
   	 	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
			success: function(res){
				var c = XTR(res.responseXML,'FConsign',FConsign);
				var ra=p.get('rowAction');
				var f = FConsign.prototype.fields;
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {var fn = ''+f.keys[i];p.set(fn,c.get(fn));};   				
				if(ra=='N'){
					var title=C_CONSIGN+'-'+p.get("consNo");
					this.setTitle(title);
					this.find('name','consNo')[0].setValue(p.get('consNo'));
					p.set('rowAction','M');
					store.add(p);
				}
				p.endEdit();
				this.updateToolBar();
				XMG.alert(SYS,M_S);
			},
			failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
			xmlData:FOSX(xml)
		});
    };    
    
    this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
			params:{A:'CONS_U',consId:p.get('consId'),consStatus:s},
		success: function(r){
			p.set('consStatus',s);
			p.set('version',p.get('version')+1);
			this.updateToolBar();
			XMG.alert(SYS,M_S);
		},
		failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
        
    this.check=function(){
    	this.updateStatus('1');
    };
    
    this.cancelCheck=function(){
    	this.updateStatus('0');
    };
    
    this.finish=function(){
    	this.updateStatus('2');
    };
    
    this.cancel=function(){
    	XMG.confirm(SYS,M_CONS_CANCEL_C,function(btn)
    		{if(btn=='yes')
    			this.updateStatus('3');
    		},this);
    };
    		
    this.del=function(){
    	if(p.get('consStatus')!='0')
       		XMG.alert(SYS,M_CONS_CONFIRMED);
       	else {
       		XMG.confirm(SYS,M_R_C,function(btn){
       			if(btn=='yes'){
       				p.set('rowAction','R');
               		var xml = RTX4R(p,'FConsign','consId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CONS_S'},
						success: function(){
							store.remove(p);
							XMG.alert(SYS,M_S,function(){T_MAIN.remove('P_CONS_'+p.get('id'));});
						},
						failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
						xmlData:FOSX(xml)
					});
               	}
           });
       	}
    };
    
    this.unlock=function(){
    	Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
    		params:{A:'CONS_U',consId:p.get('consId'),consStatusLock:0},
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
		failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
    };
    
    this.showExp=function(){
    	var win = new Fos.ExWin(p);
    	win.show();
    };
    
    this.showDoc=function(){
    	var win = new Fos.DocWin(p);
    	win.show();
    };
    
    this.showAttach=function(){
    	var win = new Fos.AttachWin(p);
    	win.show();
    };
    
    this.showInsp = function(){
    	var win = new Fos.InspectionWin(p);
    	win.show();    	
    };
    
    this.MoidfyConsNo=function(){
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
										
					var title=C_CONSIGN+'-'+p.get("consNo");
					this.setTitle(title);
					this.find('name','consNo')[0].setValue(p.get('consNo'));
										
					XMG.alert(SYS,M_S);					
				},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
			}
		},this);
    };
    
	var btnSave = new Ext.Button({text:C_SAVE,
		itemId:'TB_S',
		iconCls:'save',
		disabled:NR(m+F_M)||locked||disable,
		scope:this,
		handler:this.save
	});
	
	var btnConfirm = new Ext.Button({text:C_BOOK_CONFIRM,
		itemId:'TB_C',
		iconCls:'check',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=0||p.get('rowAction')=='N',
		scope:this,
		handler:this.check
	});
	
	var btnCancelConfirm = new Ext.Button({text:C_CANCEL_CONFIRM,
		itemId:'TB_CC',
		iconCls:'check',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1||p.get('rowAction')=='N',
		scope:this,
		handler:this.cancelCheck
	});
	
	var btnConsClose = new Ext.Button({text:C_CONS_CLOSED,
		itemId:'TB_F',
		iconCls:'check',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1,
		scope:this,
		handler:this.finish
	});
	
	var btnRemove = new Ext.Button({text:C_REMOVE,
		itemId:'TB_R',
		iconCls:'remove',
  	  	disabled:NR(m+F_R)||locked||disable||p.get('consStatus')!=0||p.get('rowAction')=='N',
  	  	scope:this,
  	  	handler:this.del
  	});
	
	var btnInvalid = new Ext.Button({text:C_INVALID,
		itemId:'TB_M',
		iconCls:'cancel',
		disabled:NR(m+F_F)||locked||disable||p.get('consStatus')!=1||p.get('rowAction')=='N',
		scope:this,
		handler:this.cancel
	});
	
	var btnUnlock = new Ext.Button({text:C_UNLOCK,
		itemId:'TB_U',
		iconCls:'unlock',
		disabled:NR(m+F_UL)||locked!=1,
		scope:this,
		handler:this.unlock
	});
	
	var btnInspBill = new Ext.Button({text:C_INSP_BILL,
		itemId:'TB_INSP',
		iconCls:'dollar',
		disabled:NR(m1+'07')||p.get('rowAction')=='N',
		scope:this,
		handler:this.showInsp
	});
	
	var btnExpe = new Ext.Button({text:C_EXPE,
		itemId:'TB_EXP',
		iconCls:'dollar',
		disabled:NR(m1+M3_EXPE)||p.get('rowAction')=='N',
		scope:this,
		handler:this.showExp
	});
	
	var btnDoc = new Ext.Button({text:C_DOC,
		itemId:'TB_DOC',
		iconCls:'doc',
		disabled:NR(m1+M3_DOC)||p.get('rowAction')=='N',
		scope:this,
		handler:this.showDoc
	});
	
	var btnAttach = new Ext.Button({text:C_ATTACH,
		itemId:'TB_ATT',
		iconCls:'attach',
		disabled:NR(m1+F_M)||p.get('rowAction')=='N',
		scope:this,
		handler:this.showAttach
	});	
	
	var btnModifyConsignNo = new Ext.Button({text:C_MODIFY_CONS_NO,
		iconCls:'option',
		disabled:NR(m1+F_M)||locked==1||p.get('consStatus')==7||p.get('rowAction')=='N',
		scope:this,
		handler:this.MoidfyConsNo
	});
	
	//另存
	var btnSaveAs = new Ext.Button({text:C_COPY,
		iconCls:'copy',
		disabled:NR(m1+F_M)||p.get('rowAction')=='N',
		scope:this,
		handler:function(){
			var c = Fos.copyConsign(p);
			var t = new Fos.InspectionConsignPanel(c,store);
    		T_MAIN.add(t);
    		T_MAIN.setActiveTab(t);
		}
	});
	
	this.updateToolBar = function(){
		var tb=this.getTopToolbar();
		var s = p.get('consStatus');
		locked=p.get('consStatusLock')==1;
		if(tb.getComponent('TB_S')) tb.getComponent('TB_S').setDisabled(NR(m+F_M)||locked||disable);
    	if(tb.getComponent('TB_C')) tb.getComponent('TB_C').setDisabled(NR(m+F_M)||locked||disable||s!=0);
    	if(tb.getComponent('TB_CC')) tb.getComponent('TB_CC').setDisabled(NR(m+F_M)||locked||disable||s!=1);
    	if(tb.getComponent('TB_F')) tb.getComponent('TB_F').setDisabled(NR(m+F_M)||locked||disable||s!=1);
    	if(tb.getComponent('TB_R')) tb.getComponent('TB_R').setDisabled(NR(m+F_R)||locked||disable||s!=0||p.get('rowAction')=='N');
    	if(tb.getComponent('TB_M')) tb.getComponent('TB_M').setDisabled(NR(m+F_F)||locked||disable||p.get('consStatus')!=1||p.get('rowAction')=='N');
    	if(tb.getComponent('TB_INSP')) tb.getComponent('TB_INSP').setDisabled(p.get('rowAction')=='N');
    	if(tb.getComponent('TB_EXP')) tb.getComponent('TB_EXP').setDisabled(NR(m+M3_EXPE));
    	if(tb.getComponent('TB_DOC')) tb.getComponent('TB_DOC').setDisabled(NR(m+M3_DOC));
    	if(tb.getComponent('TB_ATT')) tb.getComponent('TB_ATT').setDisabled(NR(m+F_M));
    	if(tb.getComponent('TB_S_ATT')) tb.getComponent('TB_S_ATT').setDisabled(NR(m1+M3_ATTACH));
    	if(tb.getComponent('TB_U')) tb.getComponent('TB_U').setDisabled(NR(m+F_UL)||locked!=1);
    };
	
    
    
	Fos.InspectionConsignPanel.superclass.constructor.call(this, { 
		id: "P_CONS_"+p.get('id'),
		title:C_INSPECTION+C_CONSIGN+'-'+p.get("consNo"),
		header:false,
		closable:true,
		autoScroll:true,
		padding:5,
		border:false,
		labelAlign:'right',
		layout:'column',
	    items:[
    		{columnWidth:.25,layout:'form',border:false,labelWidth:70,
    			items:[
    			 	txtConsNo,cboBooker,cboBizCompany,dtConsDate,
    			 	txtVessName,cboPolEn,txtVerificationNo,cboInspectionVendor
 			    ]
    		}, 			    
         	{columnWidth:.25,layout:'form',border:false,labelWidth:70,
    			items:[
			    	cboOperator,txtContact,txtRefNo,dtCloseDate,
			    	txtVoyage,cboPodEn,txtApplicationNo
				]
    		},
     	    {columnWidth:.25,layout:'form',border:false,labelWidth:70,
     	    	items:[
     	    		cboSalesRep,txtCustTel, txtInspectionNo,txtMyCompanyInvoice,
	      			txtConsMblNo,txtPotEn,txtSailDate
	     	    ]
    		},
     	    {columnWidth:.25,layout:'form',border:false,labelWidth:70,
    			items:[
					cboDept,txtCustFax,dtCustomsDeclearDate,txtHsCode,
	         		txtConsHblNo,txtContractNo,txtInvoiceNo
         		]
    		},
         		
     		{columnWidth:.75,layout:'form',labelWidth:70,border:false,
    			items:[txtCertNo]
    		},
    		
     	    {columnWidth:.5,layout:'form',labelWidth:70,border:false,
    			items:[txtCargoNameEn]
     	    },
         	   
         	{columnWidth:.25,layout:'form',labelWidth:70,border:false,
     	    	items:[txtTotalPackages,numGrossWeight]
         	}, 
         	{columnWidth:.25,layout:'form',labelWidth:70,border:false,
         		items:[numMeasurement,numNetWeight]
         	},
         	   
     	    {columnWidth:.99,layout:'form',labelWidth:70,border:false,
         		items:[
	     	    	
	     	    ]
         	}
        ],
		tbar:[btnSave,'-',btnConfirm,'-',btnCancelConfirm,'-',btnConsClose,'-',btnRemove,'-',
		      btnInvalid,'-',btnUnlock,'-',btnModifyConsignNo,'-',btnSaveAs,'->',
		      btnInspBill,'-',btnExpe,'-',btnDoc,'-',btnAttach,'-'
		]
	});
};
Ext.extend(Fos.InspectionConsignPanel,Ext.FormPanel);