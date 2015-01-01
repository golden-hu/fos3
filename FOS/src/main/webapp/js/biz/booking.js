//订舱
Fos.BookTab = function(p) {
	
	this.carg_s = GS('CARG_Q','FCargo',FCargo,'cargId','ASC');
	
	this.cargoGrid = new Fos.CargoGrid(p,this.carg_s,this);	
	
	if(p.get('consBizClass')==BC_I){
		this.hbl_s = GS('BL_Q','FBl',FBl,'blId','ASC');
		this.hblGrid = new Fos.ImpHblGrid(p,this.hbl_s); 
	}
	
	if(p.get('consBizType')==BT_C||p.get('consBizType')==BT_A){
		this.cont_s = GS('CONT_Q','FContainer',FContainer,'contId','ASC');
    	this.contGrid = new Fos.ContainerGrid(p,this.cont_s);    	
    }
	
    if(p.get('rowAction')!='N'){
    	if(p.get('consMasterId')!=p.get('consId')){
    		this.carg_s.load({params:{consMasterId:p.get('consMasterId')}});
			if(p.get('consBizType')==BT_C){
				this.cont_s.load({params:{contMConsId:p.get('consMasterId'),
										  contPreFlag:p.get('consBizClass')==BC_I?'N':'Y'}});
			}
    	}
		else{
			this.carg_s.load({params:{consId:p.get('consId')}});
			if(p.get('consBizType')==BT_C){
				this.cont_s.load({params:{consId:p.get('consId'),
				contPreFlag:p.get('consBizClass')==BC_I?'N':'Y'}
				});
			}
		};
		if(p.get('consBizClass')==BC_I)
				this.hbl_s.load({params:{consId:p.get('consId'),blType:'H/BL'}});
	};
	
    this.save = function(){    	
    	var tb=this.getTopToolbar();
		if(!p.get('custId')){
			XMG.alert(SYS,M_CUST_MUST_PREDEFINED);
			return;
		};
		
		if(this.find('name','deptId')[0].getValue()==''){
			XMG.alert(SYS,M_DEPT_REQIRED,function(){
				this.find('name','deptId')[0].focus();
			},this);
			return;
		};	
		
		if(this.find('name','consSalesRepName')[0].getValue()==''){
			XMG.alert(SYS,M_SALES_REQIRED,function(){
				this.find('name','consSalesRepName')[0].focus();},this);
			return;
		};
		
		if(this.find('name','consOperatorName')[0].getValue()==''){
			XMG.alert(SYS,M_OPERATOR_REQIRED,function(){
				this.find('name','consOperatorName')[0].focus();},this);
			return;
		};
		
		if(p.get('consBizType')==BT_A || p.get('consBizType')==BT_B ||p.get('consBizType')==BT_C){
			if(this.find('name','consPolEn')[0].getValue()==''){
				XMG.alert(SYS,M_POD_REQIRED,function(){
					this.find('name','consPodEn')[0].focus();
				},this);
				return;
			};
			
			if(this.find('name','consPodEn')[0].getValue()==''){
				XMG.alert(SYS,M_POD_REQIRED,function(){
					this.find('name','consPodEn')[0].focus();
				},this);
				return;
			};
			
			if(p.get('consBizClass')==BC_E&&this.find('name','consEtd')[0].getValue()==''){
				XMG.alert(SYS,M_ETD_REQIRED,function(){
					this.find('name','consEtd')[0].focus();
				},this);
				return;
			};
			
			if(p.get('consBizClass')==BC_I && this.find('name','consEta')[0].getValue()==''){
				XMG.alert(SYS,M_ETA_REQIRED,function(){
					this.find('name','consEta')[0].focus();
				},this);
				return;
			};
		}
			
		var f = FConsign.prototype.fields;
		for (var i = 0; i < f.keys.length; i++) {
        	var fn = ''+f.keys[i];
        	var fc = this.find('name',fn);
        	if(fc!=undefined&&fc.length>0){
        		p.set(fn,fc[0].getValue());
        	}
   	 	}
   	 	var df=this.findById('cargDanagerFlag');
   	 	if(df!=undefined&&df.checkbox)
   	 		p.set('cargDanagerFlag',this.findById('cargDanagerFlag').checkbox.dom.checked);
   	 	
   	 	var rf=this.findById('cargReeterFlag');
   	 	if(rf!=undefined&&rf.checkbox)
   	 		p.set('cargReeterFlag',this.findById('cargReeterFlag').checkbox.dom.checked);
   	 	
   	 	var bf=this.findById('cargBigFlag');
   	 	if(bf!=undefined&&bf.checkbox)
   	 	p.set('cargBigFlag',this.findById('cargBigFlag').checkbox.dom.checked);
   	 	   	 	
  	 	var consServiceRequired = '';   	 	
  	 	if(this.find('name','SR_TRAN')[0]) 
  	 		consServiceRequired+=this.find('name','SR_TRAN')[0].getValue()?SR_TRAN:'';
  	 	if(this.find('name','SR_WARE')[0]) 
  	 		consServiceRequired+=this.find('name','SR_WARE')[0].getValue()?SR_WARE:'';
  	 	if(this.find('name','SR_INSP')[0]) 
  	 		consServiceRequired+=this.find('name','SR_INSP')[0].getValue()?SR_INSP:'';
  	 	if(this.find('name','SR_CUDE')[0]) 
  	 		consServiceRequired+=this.find('name','SR_CUDE')[0].getValue()?SR_CUDE:'';
  	 	if(this.find('name','SR_CONT')[0]) 
  	 		consServiceRequired+=this.find('name','SR_CONT')[0].getValue()?SR_CONT:'';
  	 	if(this.find('name','SR_BL')[0]) 
  	 		consServiceRequired+=this.find('name','SR_BL')[0].getValue()?SR_BL:'';
  	 	if(this.find('name','SR_BBOOK')[0]) 
  	 		consServiceRequired+=this.find('name','SR_BBOOK')[0].getValue()?SR_BBOOK:'';
  	 	if(this.find('name','SR_RABL')[0]) 
  	 		consServiceRequired+=this.find('name','SR_RABL')[0].getValue()?SR_RABL:'';
  	 	if(this.find('name','SR_SESH')[0]) 
  	 		consServiceRequired+=this.find('name','SR_SESH')[0].getValue()?SR_SESH:'';
  	 	p.set('consServiceRequired',consServiceRequired);
   	 	
   	 	if(p.get('consBizType')==BT_C){
	   	 	var c =this.cont_s.getModifiedRecords();
	   	 	if(c.length>0){
	   	 		var tc=0;var cif='';var tn=0;	   	 		
	   	 		var ra = this.contGrid.getStore().getRange();
	   	 		for(var i=0;i<ra.length;i++){
	   	 			var ct = ra[i].get('cotyId');
	   	 			var cc=getCOTY(ct);
	   	 			var cl=getCLCODE(ct);
	   	 			var teu=getCTEU(ct);
	   	 			var n = ra[i].get('contNum');
	   	 			tn+=teu*n;
	   	 			cif+=n+'X'+cc+' ';
	   	 			tc=tc+n;
	   	 			if(cl=='FR'||cl=='OT') bf=true;
	   	 			else if(cl=='DG') df=true;
	   	 			else if(cl=='RF') rf=true;
	   	 		}
	   	 		p.set('consTotalContainers',tc);
	   	 		p.set('consContainersInfo',cif);
	   	 		p.set('consContainersTeu',tn);
	   	 	}
   	 	}
   	 	
   	 	p.set('consCargoPackages',''+p.get('consTotalPackages')+p.get('packName'));
 		p.set('consCargoNetWeight',''+p.get('consTotalNetWeight')+(p.get('consBizType')==BT_C?'KGS':'MT'));
 		p.set('consCargoGrossWeight',''+p.get('consTotalGrossWeight')+(p.get('consBizType')==BT_C?'KGS':'MT'));
 		p.set('consCargoMeasurement',''+p.get('consTotalMeasurement')+'CBM');
   	 	
 		var xml = RTX(p,'FConsign',FConsign);
   	 	if(p.get('consBizType')==BT_C){
			var c =this.cont_s.getModifiedRecords();
			if(c.length>0){
				var x = ATX(c,'FContainer',FContainer);
				xml=xml+x;
			};
			if(p.get('consBizClass')==BC_I){
				var cc =this.hbl_s.getModifiedRecords();
				if(cc.length>0){
					var x = ATX(cc,'FBl',FBl);xml=xml+x;
				};
			}
		}
   	 	
   	 	var cargos =this.carg_s.getModifiedRecords();
		if(cargos.length>0){
			var x = ATX(cargos,'FCargo',FCargo);
			xml=xml+x;
		};
		
		tb.getComponent('TB_A').setDisabled(true);
   	 	Ext.Ajax.request({scope:this,url:SERVICE_URL,
   	 		method:'POST',
   	 		params:{A:p.get('wconId')?'WCON_S':'CONS_S'},
			success: function(res){
				tb.getComponent('TB_A').setDisabled(false);
				
				var c = XTR(res.responseXML,'FConsign',FConsign);
				var ra=p.get('rowAction');
				var f = FConsign.prototype.fields;
				
				p.beginEdit();
   				for (var i = 0; i < f.keys.length; i++) {
   					var fn = ''+f.keys[i];
   					p.set(fn,c.get(fn));
   				}
				if(ra=='N'){
					var t = T_MAIN.getComponent('C_'+ p.get('id'));
					var title=getBT(p.get('consBizType'))+getBC(p.get('consBizClass'))+getSHTY(p.get('consShipType'))+'委托【'+p.get("consNo")+'】';
					t.setTitle(title);
					this.find('name','consNo')[0].setValue(p.get('consNo'));
					
					var mn = this.find('name','consMasterNo');
					if(mn && mn.length>0){
						masterNo = mn[0];
						masterNo.setValue(p.get('consMasterNo'));
					}
					p.set('rowAction','M');
				}
				p.endEdit();
				
				if(p.get('consBizType')==BT_A || p.get('consBizType')==BT_B || p.get('consBizType')==BT_C){
					var a = XTRA(res.responseXML,'FCargo',FCargo);
					FOSU(this.carg_s,a,FCargo);
				}
				if(p.get('consBizType')==BT_C){
					var b = XTRA(res.responseXML,'FContainer',FContainer);
					FOSU(this.cont_s,b,FContainer);
				}				
				if(p.get('consBizType')==BT_C&&p.get('consBizClass')==BC_I){
					var c = XTRA(res.responseXML,'FBl',FBl);
					FOSU(this.hbl_s,c,FBl);
				}
				XMG.alert(SYS,M_S);
				Fos.showConsignTabs(p);				
			},
			failure: function(res){
				XMG.alert(SYS,M_F+res.responseText);
				tb.getComponent('TB_A').setDisabled(false);
			},
			xmlData:FOSX(xml)
		});
    };    
    
    var txtConsNo = new Ext.form.TextField({fieldLabel:C_CONS_NO,
		style:'{font-weight:bold;color:green;}',
		readOnly:true,
		tabIndex:1,
		name:'consNo',
		value:p.get('consNo'),
		anchor:'99%'
	});
    
	var cboDept = new Ext.form.ComboBox({fieldLabel:C_DEPT,
		itemCls:'required',
		name:'deptId',
		value:p.get('deptId'),
		editable:false,
		tabIndex:2,
		store:getGROU_S(),
		displayField:'grouName',
		valueField:'grouId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%'
	});
	
	var cboSales = new Ext.form.ComboBox({fieldLabel:C_SALES,
		itemCls:'required',
		tabIndex:3,
		name:'consSalesRepName',
		value:p.get('consSalesRepName'),
		store:getSALE_S(),
		displayField:'userName',
		valueField:'userName',
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
					p.set('consSalesRepId','');
					p.set('consSalesRepName','');
				}
			},
	    	select:function(c,r,i){
	    		p.set('consSalesRepId',r.get('userId'));
	    	}
		}
	});	
	
	var cboOperator = new Ext.form.ComboBox({fieldLabel:C_OPERATOR,
		itemCls:'required',
		tabIndex:4,
		name:'consOperatorName',
		value:p.get('consOperatorName'),
		store:getOP_S(),
		displayField:'userName',
		valueField:'userName',
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
	
	var cboCust = new Ext.form.ComboBox({fieldLabel:(p.get('consBizType')==BT_B)?C_CHARTER:C_BOOKER,
		itemCls:'required',
		tabIndex:5,
		name:'custName',
		value:p.get('custName'),
		store:getCS(),
		enableKeyEvents:true,
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
         			p.set('custName','');
         			p.set('consSalesRepId','');
         		}
         	},
         	select:function(c,r,i){
         		this.find('name','custName')[0].setValue(r.get('custNameCn'));
				this.find('name','custContact')[0].setValue(r.get('custContact'));
				this.find('name','custTel')[0].setValue(r.get('custTel'));
				this.find('name','custFax')[0].setValue(r.get('custFax'));
				this.find('name','custSalesName')[0].store.reload({params:{custId:r.get('custId')}});
				if(r.get('custSalesName')!=""){
					p.set('consSalesRepId',r.get('custSalesId'));
				}
				p.set('custId',r.get('custId'));
				p.set('custSname',r.get('custCode'));
				p.set('custName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
				this.find('name','consShipper')[0].setValue(r.get('custShipper'));
				var attr9=r.get('attr9');
				var attr10=r.get('attr10');
				if(attr9!=''||attr10!=''){
					var html='<table width=100% height=100%>';
					html+='<tr><td valign=top>';
					html+='<br><b>客户特性：</b><br>'+attr9;
					html+='<br><br><b>操作注意事项：</b><br>'+attr10;
					html+='</td></tr></table>';
					var w=new Ext.Window({title:p.get('name'),modal:true,width:400,
	                height:300, autoScroll:true,plain:false,html:html});
	                w.show();
				}
			},
			keydown:{fn:function(f,e){
				LC(f,e,'custBookerFlag');
				},buffer:BF
			}
		}
	});
	
    var txtCustContact = new Ext.form.TextField({fieldLabel:C_CONTACT,
		tabIndex:6,
		name:'custContact',
		value:p.get('custContact'),
		anchor:'99%'
	});
    
    var txtCustTel = new Ext.form.TextField({fieldLabel:C_PHONE,
		tabIndex:7,
		name:'custTel',
		value:p.get('custTel'),
		anchor:'99%'
	});
    
    var txtCustFax = new Ext.form.TextField({fieldLabel:C_FAX,
		tabIndex:8,		
		name:'custFax',
		value:p.get('custFax'),
		anchor:'99%'
	});
    
    var dtConsDate = new Ext.form.DateField({fieldLabel:C_CONS_DATE,
		tabIndex:9,
		name:'consDate',
		value:p.get('consDate'),
		editable:false,
		format:DATEF,anchor:'99%'
	});
    
    var cboCustSales = new Ext.form.ComboBox({fieldLabel:C_CUST_SALES,
		name:'custSalesName',
		value:p.get('custSalesName'),
		tabIndex:10,
		store:getCUCOS(),
		displayField:'cucoName',
		valueField:'cucoName',
		typeAhead: true,
		mode: 'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%'
	});
    
    var txtRefNo = new Ext.form.TextField({fieldLabel:C_REF_NO,
		tabIndex:11,
		name:'consRefNo',
		value:p.get('consRefNo'),
		anchor:'99%'
	});
    
	var txtContractNo = new Ext.form.TextField({fieldLabel:C_CONTRACT_NO,
		tabIndex:12,
		name:'consContractNo',
		value:p.get('consContractNo'),
		anchor:'99%'
	});
	
	var txtCargoSource = new Ext.form.ComboBox({fieldLabel:C_CARGO_SOURCE,
		tabIndex:13,
		name:'consSource',
		value:p.get('consSource'),
		store:SOUR_S,
		xtype:'combo',
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});
	
    var txtCargoClass = new Ext.form.ComboBox({fieldLabel:C_CACL,
		tabIndex:14,
		name:'caclId',
		value:p.get('caclId'),
		store:getCACL_S(),
		xtype:'combo',
		displayField:'caclNameCn',
		valueField:'caclId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
    	listeners:{scope:this,
    		blur:function(f){
    			if(f.getRawValue()==''){
    				f.clearValue();
    				p.set('caclId','');
    			}
    		},
        	select:function(c,r,i){
        		p.set('caclName',r.get('caclNameCn'));
        	}
    	}
    });
    
    var txtPate = new Ext.form.ComboBox({fieldLabel:C_PATE,
		itemCls:'needed',
		tabIndex:15,
		name:'pateId',
		value:p.get('pateId'),
		store:getPATE_S(),
		xtype:'combo',
		displayField:'pateName',
		valueField:'pateId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
    	listeners:{scope:this,
    		blur:function(f){
    			if(f.getRawValue()==''){
    				f.clearValue();
    				p.set('pateId','');
    			}
    		},
        	select:function(c,r,i){
        		p.set('pateName',r.get('pateName'));
        	}
    	}
    }); 
    
    var txtPaidAt = new Ext.form.TextField({fieldLabel:C_PAID_AT,
		tabIndex:16,
		name:'consPaidAt',
		value:p.get('consPaidAt'),
		xtype:'textfield',
		anchor:'99%'
	});
	
	var txtTranTerm = new Ext.form.ComboBox({fieldLabel:C_TTER,
		itemCls:'needed',
		tabIndex:17,
		name:'tranId',
		value:p.get('tranId'),
		store:(p.get('consBizType')==BT_B)?getTTB_S():getTTC_S(),
		xtype:'combo',
		displayField:'tranCode',
		valueField:'tranId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('tranId','');
				}
			},
	    	select:function(c,r,i){
	    		p.set('tranCode',r.get('tranCode'));
	    	}
		}
	});
	
	var txtPartial = {xtype:'checkbox',
		labelSeparator:'',
		boxLabel:C_PARTIAL_FLAG,
		tabIndex:19,
		name:'consPartialFlag',
		checked:p.get('consPartialFlag')=='1'
	};
	
	var txtTrans = {xtype:'checkbox',
		labelSeparator:'',
		boxLabel:C_TANS_FLAG,
		tabIndex:20,
		name:'consTransFlag',
		checked:p.get('consTransFlag')=='1'
	};
    
	var txtShippingLine = new Ext.form.ComboBox({fieldLabel:C_SHLI,
		itemCls:'needed',
		tabIndex:18,
		name:'shliId',
		value:p.get('shliId'),
		store:getSHLI_S(),
		xtype:'combo',
		displayField:'shliName',
		valueField:'shliId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
    	listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('shliId','');
				}
			},
	    	select:function(c,r,i){
	    		p.set('shliCode',r.get('shliCode'));
	    	}
		}
	});
    
    var txtLclType = new Ext.form.ComboBox({fieldLabel:C_LCL_TYPE,
		tabIndex:22,
		name:'consLclType',
		value:p.get('consLclType'),
		disabled:p.get('consShipType')!='LCL',
		store:LCLT_S,
		xtype:'combo',
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});
    
    var txtChargeRemark = new Ext.form.TextField({fieldLabel:C_CHARGE_REMARKS,
		tabIndex:16,
		name:'consChargeRemarks',
		value:p.get('consChargeRemarks'),
		anchor:'99%'
	});
    
    var txtMConsNo = new Ext.form.TextField({fieldLabel:C_M_CONS_NO,
		disabled:true,
		tabIndex:23,
		name:'consMasterNo',
		value:p.get('consMasterNo'),
		anchor:'99%'
	});
	
    var txtBVessel = new Ext.form.TextField({fieldLabel:C_BVESSEL,
		tabIndex:18,
		name:'consBVessel',
		value:p.get('consBVessel'),
		anchor:'99%'
	});
	
	var txtBVoyage = new Ext.form.TextField({fieldLabel:C_BVOYAGE,
		tabIndex:19,
		name:'consBVoyage',
		value:p.get('consBVoyage'),
		anchor:'99%'
	});
	
	var txtBPod = new Ext.form.TextField({fieldLabel:C_BPOT,
		tabIndex:20,
		name:'consBPodEn',
		value:p.get('consBPodEn'),
		anchor:'99%'
	});
	
	var txtDeliveryDate = new Ext.form.DateField({fieldLabel:C_DELIVERY_DATE,
		tabIndex:14,
		name:'consDeliveryDate',
		value:p.get('consDeliveryDate'),
		format:DATEF,
		anchor:'99%'
	});
	
	var t111=[];
	var t112=[];
	var t113=[];
	var t114=[];
	
	if(p.get('consBizClass')==BC_I){//进口
		t111=[txtConsNo,cboCust,dtConsDate,txtCargoSource,txtTranTerm];
		t112=[cboDept,txtCustContact,cboCustSales,txtDeliveryDate,txtBVessel];
		t113=[cboSales,txtCustTel,txtRefNo,txtPate,txtBVoyage];
		t114=[cboOperator,txtCustFax,txtContractNo,txtPaidAt,txtBPod];
		
		if(p.get('consBizType')==BT_A){//空运
			t112=[cboDept,txtCustContact,cboCustSales,txtDeliveryDate];
			t113=[cboSales,txtCustTel,txtRefNo,txtPate];
			t114=[cboOperator,txtCustFax,txtContractNo,txtPaidAt];
		}
	}
	else{
		t111=[txtConsNo,cboCust,dtConsDate,txtCargoSource,txtTranTerm];
		t112=[cboDept,txtCustContact,cboCustSales,txtCargoClass,txtShippingLine];
		t113=[cboSales,txtCustTel,txtRefNo,txtPate,txtPartial];
		t114=[cboOperator,txtCustFax,txtContractNo,txtPaidAt,txtTrans];
		
		if(p.get('consShipType')==ST_L){//拼箱
			t112=[cboDept,txtCustContact,cboCustSales,txtCargoClass,txtShippingLine,txtLclType];
			t113=[cboSales,txtCustTel,txtRefNo,txtPate,txtChargeRemark,txtMConsNo];
		}
		else if(p.get('consBizType')==BT_A){//空运
			t112=[cboDept,txtCustContact,cboCustSales,txtCargoClass];
			t113=[cboSales,txtCustTel,txtRefNo,txtPate];
			t114=[cboOperator,txtCustFax,txtContractNo,txtPaidAt];
		}
	};
	
	var t11={layout:'column',title:C_CONS_INFO,collapsible:true,border:false,padding:5,
    	items:[{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:t111},
          	{columnWidth:.25,layout:'form',labelWidth:70,border:false,items:t112},
          	{columnWidth:.25,layout: 'form',labelWidth:70,border:false,items:t113},
			{columnWidth:.25,layout: 'form',labelWidth:70,border:false,items:t114}
		]};
	
	var CreateSR=function(t,n,c,idx){
		return {columnWidth:.1,
			layout:'form',
			border:false,
			labelWidth:0,
			labelSeparator:'',
			hideLabels:true,
           	items: [
           	    {boxLabel:t,
           	    tabIndex:idx,
           	    name:n,
           	    checked:p.get('consServiceRequired').indexOf(c)!=-1,
           	    xtype:'checkbox',
           	    anchor:'100%'}
           	 ]
		};
	};
	
	var s1={columnWidth:.1,layout:'form',border:false,
			items: [
			        {text:C_SERVICE_REQUIRED,
			        	style:'{font-size:12px;}',
			        	xtype:'label',anchor:'100%'}
			       ]};
	var s2=CreateSR(C_SR_TRAN,'SR_TRAN',SR_TRAN,25);
	var s3=CreateSR(C_SR_WARE,'SR_WARE',SR_WARE,26);
 	var s4=CreateSR(C_SR_CONT,'SR_CONT',SR_CONT,27);
 	var s5=CreateSR(C_SR_BL,'SR_BL',SR_BL,28);
 	var s6=CreateSR(C_SR_INSP,'SR_INSP',SR_INSP,29);
 	var s7=CreateSR(C_SR_CUDE,'SR_CUDE',SR_CUDE,30);
 	var s8=CreateSR(C_SR_BBOOK,'SR_BBOOK',SR_BBOOK,31);
 	var s9=CreateSR(C_SR_SESH,'SR_SESH',SR_SESH,32);
 	var s10=CreateSR(C_SR_RABL,'SR_RABL',SR_RABL,33);
 	
 	var srTab=[s1,s2,s3,s6,s7,s10];
 	
 	if(p.get('consBizType')==BT_B&&p.get('consBizClass')==BC_E){
 		srTab=[s1,s2,s3,s5,s6,s7,s8,s9,s10];
 	}
 	else if(p.get('consBizType')==BT_A){
 		srTab=[s1,s2,s3,s5,s6,s7];
 	}
 	else if(p.get('consBizType')==BT_C&&p.get('consBizClass')==BC_E){
 		srTab=[s1,s2,s3,s4,s5,s6,s7,s8,s9,s10];
 	}
 	
	var t12={layout:'column',frame:true,height:35,border:false,items:srTab};
	
    var vt='';
    if(p.get('consBizType')==BT_C) 
    	vt=1;
    else if(p.get('consBizType')==BT_B) 
    	vt=2;
    
    //船名
	var cboVessel = new Ext.form.ComboBox({fieldLabel:C_VESS,
		itemCls:'needed',
		tabIndex:34,
		name:'vessName',
		value:p.get('vessName'),
		store:getVES(),
		enableKeyEvents:true,
		displayField:'vessNameEn',
		valueField:'vessNameEn',
		typeAhead:true,
		mode:'local',
		tpl:vessTpl,
		itemSelector:'div.list-item',
		listWidth:400,
		triggerAction:'all',
		selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
			select:function(c,r,i){
				p.set('vessNameCn',r.get('vessNameCn'));
				var vcn=this.find('name','vessNameCn')[0];
				if(vcn) 
					vcn.setValue(r.get('vessNameCn'));
				
				//装载航次列表
				if(r.get('vessNameEn')){
					var queryParams=[];
					queryParams[queryParams.length]= new QParam({key:'vesselName',value:r.get('vessNameEn'),op:LI});
					voyageStore.baseParams.xml = FOSX(QTX(queryParams));
					voyageStore.load({params:{start:0,limit:C_PS}});
				}
			},
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('vessId','');
					p.set('vessName','');
				}
			},
			keydown:{fn:function(f,e){
				listVessel(f,e,vt);
			},buffer:BF}
		}
	});
	
	var voyageStore = new Ext.data.Store({url:SERVICE_URL+'?A=SHSC_X',
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',
			record:'ShipSchedule',
			idProperty:'id'},ShipSchedule),
		remoteSort:true,
		sortInfo:{field:'shscId', direction:'DESC'}
	});
	
	//航次（海运） 航班（空运）
	var cboVoyage = new Ext.form.ComboBox({fieldLabel:p.get('consBizType')==BT_A?C_FLIGHT:C_VOYA,
		itemCls:'needed',
		tabIndex:35,
		name:'voyaName',
		value:p.get('voyaName'),
		store:voyageStore,
		displayField:'voyage',
		valueField:'voyage',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
		listeners:{scope:this,
			select:function(c,r,i){
				if(cboHarbour)
					cboHarbour.setValue(getPortArea(r.get('portArea')));
				
				var harbourOpenTime = r.get('loadingTime');
				harbourOpenTime = harbourOpenTime.replace('T',' ');
				p.set('harbourOpenTime',harbourOpenTime);
				if(dtHarbourOpenTime)
					dtHarbourOpenTime.setValue(harbourOpenTime);				
				
				p.set('harbourCloseTime',r.get('cutDate'));
				if(dtHarbourCloseTime)
					dtHarbourCloseTime.setValue(r.get('cutDate'));
			}
		}
	});
	
	//MBL NO
    var txtMblNo = new Ext.form.TextField({fieldLabel:p.get('consBizType')==BT_A?'MAWB No.':C_MBL_NO,
		name:'consMblNo',
		tabIndex:36,
		value:p.get('consMblNo'),
		anchor:'99%'
	});
    
    //HBL NO
    var txtHblNo = new Ext.form.TextField({fieldLabel:p.get('consBizType')==BT_A?'HAWB No.':C_HBL_NO,
		tabIndex:37,
		name:'consHblNo',
		value:p.get('consHblNo'),
		anchor:'99%'
	});
    
	//开航日期（出口） 预计离港日期（进口）
    var dtSailDate = new Ext.form.DateField({fieldLabel:p.get('consBizClass')==BC_E?C_SAIL_DATE:C_ETD,
    	itemCls:p.get('consBizClass')==BC_E?'required':'',
    	tabIndex:38,
    	editable:false,
    	name:'consEtd',
    	value:p.get('consEtd'),
    	format:DATEF,
    	anchor:'99%',
        listeners:{scope:this,
        	change:function(f,nv,ov){
        		if(p.get('consBizClass')==BC_E) 
        			p.set('consSailDate',nv);
        	}
        }
    });
    
    //港区
    var cboHarbour = new Ext.form.ComboBox({fieldLabel:C_HARBOUR,
		tabIndex:p.get('consBizClass')==BC_I?39:40,
		name:'consHarbour',
		value:p.get('consHarbour'),
		store:getHARB_S(),
		xtype:'combo',
		displayField:'placName',
		valueField:'placName',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
			select:function(c,r,i){
				p.set('consHarbourId',r.get('placId'));
			}
		}
	});
    
	//开港时间
    var dtHarbourOpenTime = new Ext.form.TextField({fieldLabel:C_HARBOUR_OPEN_TIME,
    	tabIndex:38,
    	name:'harbourOpenTime',
    	value:p.get('harbourOpenTime'),
    	anchor:'99%'
    });
    
	//截港时间
    var dtHarbourCloseTime = new Ext.form.TextField({fieldLabel:C_HARBOUR_CLOSE_TIME,
    	tabIndex:38,
    	name:'harbourCloseTime',
    	value:p.get('harbourCloseTime'),
    	anchor:'99%'
    });
    
    
	//订舱代理
    var cboBookAgency = new Ext.form.ComboBox({fieldLabel:C_BOOK_AGENCY,
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
		anchor:'99%',
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
				this.find('name','consBookingAgencyContact')[0].store.reload({params:{custId:r.get('custId')}});
			},
        	keydown:{fn:function(f,e){
        		LC(f,e,'custBookingAgencyFlag');},buffer:BF}
		}
	});
    
    //订舱代理联系人
    var cboBookAgencyContact = new Ext.form.ComboBox({fieldLabel:C_BOOK_AGENCY_CONTACT,
		name:'consBookingAgencyContact',
		value:p.get('consBookingAgencyContact'),
		tabIndex:40,
		store:getCUCOS(),
		displayField:'cucoName',
		valueField:'cucoName',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
		listeners:{scope:this,
        	select:function(c,r,i){
        		this.find('name','consBookingAgencyTel')[0].setValue(r.get('cucoTel'));
			}
		}
    });
    
    //订舱代理联系电话
    var txtBookAgencyTel = new Ext.form.TextField({fieldLabel:C_BOOK_AGENCY_TEL,
		name:'consBookingAgencyTel',
		tabIndex:41,
		value:p.get('consBookingAgencyTel'),
		anchor:'99%'
	});
    
   
	//船公司、航空公司
	var cboCarrier = new Ext.form.ComboBox({fieldLabel:p.get('consBizType')==BT_A?C_FLIGHTER:C_CARRIER,
		itemClass:'needed',
		tabIndex:p.get('consBizClass')==BC_I?42:38,
		name:'consCarrierName',
		value:p.get('consCarrierName'),
		store:getCS(),
		enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		displayField:'custCode',
		valueField:'custCode',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consCarrier','');
					p.set('consCarrierName','');
				}
			},
			select:function(c,r,i){
				p.set('consCarrier',r.get('custId'));
				p.set('consCarrierName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){
				LC(f,e,p.get('consBizType')==BT_A?'custAirFlag':'custCarrierFlag');
			},buffer:BF}
		}
	});
	
	//海外代理
	var cboOverseaAgency = new Ext.form.ComboBox({fieldLabel:C_OVERSEA_AGENCY,
		tabIndex:p.get('consBizClass')==BC_I?46:42,
		name:'consOverseaAgencyName',
		value:p.get('consOverseaAgencyName'),
		store:getCS(),
		enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		displayField:'custCode',
		valueField:'custCode',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consOverseaAgency','');
					p.set('consOverseaAgencyName','');
				}
			},
			select:function(c,r,i){
            	p.set('consOverseaAgency',r.get('custId'));
            	p.set('consOverseaAgencyName',r.get('custNameCn'));
            	c.setValue(r.get('custNameCn'));
            	this.find('name','consNotifyParty2')[0].setValue(r.get('custShipper'));
 			},
			keydown:{fn:function(f,e){LC(f,e,'custOverseaAgencyFlag');},buffer:BF}
 		}
	});
	
	//运抵国
	var cboTradeCountry = new Ext.form.ComboBox({fieldLabel:p.get('consBizClass')==BC_E?C_COUNTRY_D:C_COUNTRY_L,
		tabIndex:46,
		disabled:true,
		name:'consTradeCountry',
		value:p.get('consTradeCountry'),
		store:getCOUN_S(),
		displayField:'counNameEn',
		valueField:'counCode',
		typeAhead:true,
		mode:'remote',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%'
	});
	
	//提单备注
	var txtBlRemarks = new Ext.form.TextField({fieldLabel:C_BL_REMARKS,
		tabIndex:50,
		name:'consBlRemarks',
		value:p.get('consBlRemarks'),
		anchor:'99%'
	});
	
	//S/O No.
	var txtSONo = new Ext.form.TextField({fieldLabel:'S/O No.',
		name:'consSoNo',
		tabIndex:54,
		value:p.get('consSoNo'),
		xtype:'textfield',
		anchor:'99%'
	});
	
	//箱公司
	var cboContainerCompany = new Ext.form.ComboBox({fieldLabel:C_CONTAINER,
		tabIndex:p.get('consBizClass')==BC_I?48:58,
		name:'consContainerCompanyName',
		value:p.get('consContainerCompanyName'),
		store:getCS(),
		enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		displayField:'custCode',
		valueField:'custCode',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
		listeners:{scope:this,
        	blur:function(f){
        		if(f.getRawValue()==''){
        			f.clearValue();
        			p.set('consContainerCompany','');
        			p.set('consContainerCompanyName','');
        	}},
        	select:function(c,r,i){
        		p.set('consContainerCompany',r.get('custId'));
        		p.set('consContainerCompanyName',r.get('custNameCn'));
        		c.setValue(r.get('custNameCn'));
        	},
			keydown:{fn:function(f,e){LC(f,e,'custContainerFlag');},buffer:BF}
        }
	});			
	
	
	//装货港
    var cboPol = new Ext.form.ComboBox({fieldLabel:C_POL,
		itemCls:'required',
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
         	keydown:{
         		fn:p.get('consBizType')==BT_A?LAP:LP,buffer:BF
         	}
		}
    });
    
    //卸货港
	var cboPod = new Ext.form.ComboBox({fieldLabel:C_POD,itemCls:'required',
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
	});
	
	//中转港
    var txtPot = new Ext.form.TextField({fieldLabel:C_POT,
		tabIndex:p.get('consBizClass')==BC_I?41:51,
		name:'consPotEn',
		value:p.get('consPotEn'),
		anchor:'99%'
	});
    
    //订舱协议号
    var txtBookingNo = new Ext.form.TextField({fieldLabel:C_BOOKING_CONTRACT_NO,
		name:'consBookingContractNo',
		tabIndex:55,
		value:p.get('consBookingContractNo'),
		anchor:'99%'
	});
    
    //提箱单号
    var txtPackingListNo = new Ext.form.TextField({fieldLabel:C_PACKING_LIST_NO,
		tabIndex:59,
		name:'consPackingListNo',
		value:p.get('consPackingListNo'),
		anchor:'99%'
	});
    
   //装船日期
    var dtLoadDate = new Ext.form.DateField({fieldLabel:C_SHIP_LOAD_DATE,
		tabIndex:40,name:'consLoadDate',
		value:p.get('consLoadDate'),
		format:DATEF,
		anchor:'99%'
	});
    
    //目的港
    var txtDestinationPort = new Ext.form.TextField({fieldLabel:C_DESTINATION_PORT,
		tabIndex:48,
		name:'consDeliveryPlace',
		value:p.get('consDeliveryPlace'),
		anchor:'99%'
	});
    
    //签单方式
    var cboIssueType = new Ext.form.ComboBox({fieldLabel:C_ISTY,
		tabIndex:52,
		name:'istyId',
		value:p.get('istyId'),
		store:getISTY_S(),
		displayField:'istyName',
		valueField:'istyId',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%'
	});
    
    //订舱日期
    var dtBookingDate = new Ext.form.DateField({fieldLabel:C_BOOKING_DATE,
		tabIndex:56,
		name:'consBookingDate',
		value:p.get('consBookingDate'),
		format:DATEF,
		anchor:'99%'
	});
    
    //场站
    var cboCfs = new Ext.form.ComboBox({fieldLabel:C_CFS,
    	tabIndex:p.get('consBizClass')==BC_I?49:60,
    	name:'consCfsName',
    	value:p.get('consCfsName'),
    	store:getCS(),
    	enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		displayField:'custCode',
		valueField:'custNameCn',
		typeAhead:true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%',
    	listeners:{scope:this,
        	blur:function(f){
        		if(f.getRawValue()==''){
        			f.clearValue();
        			p.set('consCfs','');
        			p.set('consCfsName','');
        		}
        	},
         	select:function(c,r,i){
         		p.set('consCfs',r.get('custId'));
         	},
        	keydown:{fn:function(f,e){
        		LC(f,e,'custCfsFlag');
        		},buffer:BF}
         }
    });   
   
    //截关日期
    var dtExpiryDate = new Ext.form.DateField({fieldLabel:C_CUSTOM_EXPIRY_DATE,
    	tabIndex:41,
    	name:'consExpiryDate',
    	value:p.get('consExpiryDate'),
    	format:DATEF,
    	anchor:'99%'
    });
    
    //收货地
    var txtReceiptPlace = new Ext.form.TextField({fieldLabel:C_RECEIPT_PLACE,
    	tabIndex:45,
    	name:'consReceiptPlace',
    	value:p.get('consReceiptPlace'),
    	anchor:'99%'
    });
    
    //目的地
    var txtDestination = new Ext.form.TextField({fieldLabel:C_DESTINATION,
    	tabIndex:49,
    	name:'consDestination',
    	value:p.get('consDestination'),
    	anchor:'99%'
    });
    
    //前程运输
    var txtPrecarriage = new Ext.form.TextField({fieldLabel:C_PRECARRIAGE,
    	tabIndex:53,
    	name:'consPrecarriage',
    	value:p.get('consPrecarriage'),
    	anchor:'99%'
    });
    
    //正本提单分数
    var txtOriginalBlNum = new Ext.form.NumberField({fieldLabel:C_BL_ORI_NUM,
    	name:'consOriginalBlNum',
    	tabIndex:64,
    	value:p.get('consOriginalBlNum'),
    	anchor:'99%'
    });
    
    //换单代理
    var cboDoAgency =  new Ext.form.ComboBox({fieldLabel:C_DO_AGENCY,
		name:'consDoAgencyName',
		tabIndex:47,
		value:p.get('consDoAgencyName'),
		store:getCS(),
		enableKeyEvents:true,
		tpl:custTpl,
		itemSelector:'div.list-item',
		listWidth:C_LW,
		displayField:'custCode',
		valueField:'custCode',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
    	listeners:{scope:this,
        	blur:function(f){
        		if(f.getRawValue()==''){
        			f.clearValue();
        			p.set('consDoAgency','');
        			p.set('consDoAgencyName','');
        			p.set('consDoAgencyAddress','');
        	}},
         	select:function(c,r,i){
         		p.set('consDoAgency',r.get('custId'));
         		p.set('consDoAgencyName',r.get('custNameCn'));
         		p.set('consDoAgencyAddress',r.get('custAddress'));
         		c.setValue(r.get('custNameCn'));
         		txtDoAgencyAddress.setValue(r.get('custAddress'));
         	},
        	keydown:{
        		fn:function(f,e){LC(f,e,'custDoAgencyFlag');},buffer:BF
        	}
    	}
    });
       
    //预计到港日期
    var dtEta = new Ext.form.DateField({fieldLabel:C_ETA,
    	name:'consEta',
    	itemCls:p.get('consBizClass')==BC_I?'required':'',
    	tabIndex:44,
    	value:p.get('consEta'),
    	format:DATEF,
    	anchor:'99%',
        listeners:{scope:this,
        	change:function(f,nv,ov){
        		if(p.get('consBizClass')==BC_I) 
        			p.set('consSailDate',nv);
        	}
        }
    });
        
            
    //中文船名
    var txtVesselNameCn = new Ext.form.TextField({fieldLabel:C_VESS_NAME_CN,
		name:'vessNameCn',
		tabIndex:54,
		value:p.get('vessNameCn'),
		anchor:'99%'
	});
   
    //运输条款
    var cboTransTermCarrier = new Ext.form.ComboBox({fieldLabel:C_TTER,
    	itemCls:'required',
    	tabIndex:58,
    	name:'tranIdCarrier',
    	value:p.get('tranIdCarrier'),
    	store:(p.get('consBizType')==BT_B)?getTTB_S():getTTC_S(),
    	displayField:'tranCode',
    	valueField:'tranId',
    	typeAhead: true,
    	mode: 'local',
    	triggerAction: 'all',
    	selectOnFocus:true,
    	anchor:'99%',
    	listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('tranIdCarrier','');
				}
			},
	    	select:function(c,r,i){
	    		p.set('tranCodeCarrier',r.get('tranCodeCarrier'));
	    	}
		}
    });
    
    //运费条款
    var cboPamentTermP = new Ext.form.ComboBox({fieldLabel:C_PATE,
    	itemCls:'required',
    	tabIndex:59,
    	name:'pateIdP',
    	value:p.get('pateIdP'),
    	store:getPATE_S(),
    	displayField:'pateName',
    	valueField:'pateId',
    	typeAhead: true,
    	mode: 'local',
    	triggerAction: 'all',
    	selectOnFocus:true,
    	anchor:'99%',
    	listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('pateIdP','');
				}
			},
	    	select:function(c,r,i){
	    		p.set('pateNameP',r.get('pateNameP'));
	    	}
		}
    });
        
    //提单件数
    var txtBlPackages = new Ext.form.NumberField({fieldLabel:C_BL_PACKAGES,
    	name:'blCargoPackages',
    	value:p.get('blCargoPackages'),
    	disabled:true,
    	anchor:'99%'
    });
    
    //提单毛重
    var txtBlGrossWeight = new Ext.form.NumberField({fieldLabel:C_BL_GW,
    	name:'blCargoGrossWeight',
    	value:p.get('blCargoGrossWeight'),
    	disabled:true,
    	allowDecimals:true,
    	decimalPrecision:4,
    	anchor:'99%'
    });
    
    //提单净重
	var txtBlNetWeight = new Ext.form.NumberField({fieldLabel:C_BL_NW,
		name:'blCargoNetWeight',
		value:p.get('blCargoNetWeight'),
		disabled:true,
		allowDecimals:true,
		decimalPrecision:4,
		anchor:'99%'
	});
	
	//提单体积
    var txtBlMeasurement = new Ext.form.NumberField({fieldLabel:C_BL_CBM,
    	name:'blCargoMeasurement',
    	value:p.get('blCargoMeasurement'),
    	disabled:true,
    	allowDecimals:true,
    	decimalPrecision:4,
    	anchor:'99%'
    });
    
    //承运人联系人
    var txtCarrierConatct = new Ext.form.TextField({fieldLabel:C_CARRIER_CONTACT,
    	name:'consCarrierContact',
    	value:p.get('consCarrierContact'),
    	anchor:'99%'
    });
    
    //承运人联系电话
    var txtCarrierTel = new Ext.form.TextField({fieldLabel:C_CARRIER_TEL,
    	name:'consCarrierTel',
    	value:p.get('consCarrierTel'),
    	anchor:'99%'
    });
    
    //换单地址
    var txtDoAgencyAddress = new Ext.form.TextField({fieldLabel:C_DO_AGENCY_ADDRESS,
    	name:'consDoAgencyAddress',
    	value:p.get('consDoAgencyAddress'),
    	anchor:'99%'
    });
    
    
    var consThcFlag = new Ext.form.Checkbox({fieldLabel:C_THC_FLAG,
    	name:'consThcFlag',
    	value:p.get('consThcFlag'),
    	anchor:'99%'
    });
    
    var consPressureBoxFlag = new Ext.form.Checkbox({fieldLabel:C_PRESSURE_BOX_FLAG,
    	name:'consPressureBoxFlag',
    	value:p.get('consPressureBoxFlag'),
    	anchor:'99%'
    });
    
    var t131=[];
    var t132=[];
    var t133=[];
    var t134=[];
    
    
    if(p.get('consBizClass')==BC_I){ //进口
		t131=[cboVessel,cboTradeCountry,txtPot,cboOverseaAgency,cboContainerCompany];
		t132=[cboVoyage,cboPol,cboPod,cboDoAgency,cboCfs];
		t133=[txtMblNo,dtEta,txtDoAgencyAddress,cboCarrier,txtCarrierConatct];
		t134=[txtHblNo,dtSailDate,cboHarbour,txtCarrierTel];
		
		if(p.get('consBizType')==BT_A){//空运
			t131=[cboCarrier,cboTradeCountry,cboPod,cboBookAgency];
			t132=[cboVoyage,cboPol,cboHarbour,cboBookAgencyContact];
			t133=[txtMblNo,dtEta,txtPot,txtBookAgencyTel];
			t134=[txtHblNo,dtSailDate,cboOverseaAgency];
		}
		else if(p.get('consBizType')==BT_B){//散货
            t131=[cboVessel,cboTradeCountry,cboCarrier,cboOverseaAgency];
            t132=[cboVoyage,cboPol,cboHarbour];
            t133=[txtMblNo,cboPod,dtEta,cboContainerCompany];
            t134=[txtHblNo,txtPot,dtSailDate];
        }
	}
	else{//出口
		t131=[cboVessel,dtSailDate,cboOverseaAgency,cboTradeCountry,
		      cboCarrier,txtBlRemarks,txtSONo,cboContainerCompany];
		
		t132=[cboVoyage,cboHarbour,cboBookAgency,cboPol,cboPod,txtPot,
		      txtBookingNo,txtPackingListNo];
		
		t133=[txtMblNo,dtHarbourOpenTime,cboBookAgencyContact,dtLoadDate,
		      txtDestinationPort,cboIssueType,dtBookingDate,cboCfs];
		
		t134=[txtHblNo,dtHarbourCloseTime,txtBookAgencyTel,dtEta,txtReceiptPlace,txtDestination,
		      txtPrecarriage,dtExpiryDate,txtOriginalBlNum];
		
		if(p.get('consBizType')==BT_A){//空运
			t131=[cboCarrier,cboTradeCountry,cboPol,cboBookAgency];
			t132=[cboVoyage,cboPod,cboHarbour,txtBookAgencyTel];
			t133=[txtMblNo,dtEta,txtPot,dtExpiryDate];
			t134=[txtHblNo,dtSailDate,cboOverseaAgency];
		}	
		else if(p.get('consBizType')==BT_B){//散货
			t131=[cboVessel,cboCarrier,cboOverseaAgency,cboTradeCountry,txtBlRemarks,
			      txtVesselNameCn,cboTransTermCarrier,txtBlPackages,txtOriginalBlNum];
			t132=[cboVoyage,cboBookAgency,cboPol,cboPod,txtPot,txtBookingNo,
			      cboPamentTermP,txtBlGrossWeight];
			t133=[txtMblNo,cboBookAgencyContact,dtLoadDate,cboHarbour,txtDestinationPort,
			      cboIssueType,dtBookingDate,txtBlNetWeight];
			t134=[dtSailDate,txtBookAgencyTel,dtEta,txtReceiptPlace,txtDestination,
			      txtPrecarriage,dtExpiryDate,txtBlMeasurement];
		}
	};
	
    var t13={layout:'column',title:C_BL_INFO,collapsible:true,border:false,padding:5,
          items:[{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t131},
          	{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t132},
          	{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t133},
          	{columnWidth:.25,layout:'form',labelWidth:80,border:false,items:t134}
		]};

    function saveShipper(shipperT){
    	var cushName = '';
    	if(shipperT==1) 
    		cushName = Ext.getCmp(p.get('consId')+'CONS_SHIPPER').getValue();
    	else if(shipperT==2) 
    		cushName = Ext.getCmp(p.get('consId')+'CONS_CONSIGNEE').getValue();
    	else if(shipperT==3) 
    		cushName = Ext.getCmp(p.get('consId')+'CONS_NOTIFY_PARTY').getValue();
    	else if(shipperT==4) 
    		cushName = Ext.getCmp(p.get('consId')+'CONS_NOTIFY_PARTY2').getValue();
    	    	
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
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
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
    };
    
    function updateShipper(shipperT,cushName){
    	if(shipperT==1) 
    		Ext.getCmp(p.get('consId')+'CONS_SHIPPER').setValue(cushName);
    	else if(shipperT==2) 
    		Ext.getCmp(p.get('consId')+'CONS_CONSIGNEE').setValue(cushName);
    	else if(shipperT==3) 
    		Ext.getCmp(p.get('consId')+'CONS_NOTIFY_PARTY').setValue(cushName);
    	else if(shipperT==4) 
    		Ext.getCmp(p.get('consId')+'CONS_NOTIFY_PARTY2').setValue(cushName);
    };
    
    var bSaveShipper = new Ext.Button({text:'保存',handler:function(){saveShipper(1);}});
    var bSearchShipper = new Ext.Button({text:'选择',handler:function(){selShipper(1);}});
    var bSaveConsignee = new Ext.Button({text:'保存',handler:function(){saveShipper(2);}});
    var bSearchConsignee = new Ext.Button({text:'选择',handler:function(){selShipper(2);}});
    var bSaveNotifyParty = new Ext.Button({text:'保存',handler:function(){saveShipper(3);}});
    var bSearchNotifyParty = new Ext.Button({text:'选择',handler:function(){selShipper(3);}});
    var bSaveNotifyParty2 = new Ext.Button({text:'保存',handler:function(){saveShipper(4);}});
    var bSearchNotifyParty2 = new Ext.Button({text:'选择',handler:function(){selShipper(4);}});
    
    //发货人
    var txtShipper = new Ext.form.TextArea({fieldLabel:C_SHIPPER,
    	id:p.get('consId')+'CONS_SHIPPER',
    	tabIndex:65,
    	name:'consShipper',
    	value:p.get('consShipper'),
    	height:100,
    	anchor:'99%'
    });
    
	//收货人
    var txtConsignee = new Ext.form.TextArea({fieldLabel:C_CONSIGNEE,
    	id:p.get('consId')+'CONS_CONSIGNEE',
    	tabIndex:66,
    	name:'consConsignee',
    	value:p.get('consConsignee'),
		height:100,
		anchor:'99%'
	});
    
    //通知人
    var txtNotifyParty = new Ext.form.TextArea({fieldLabel:C_NOTIFIER,
    	id:p.get('consId')+'CONS_NOTIFY_PARTY',
    	tabIndex:67,
    	name:'consNotifyParty',
    	value:p.get('consNotifyParty'),
		height:100,
		anchor:'99%'
	});
    
    //第二通知人
    var txtNotifyParty2 = new Ext.form.TextArea({fieldLabel:C_OVERSEA_AGENCY,
    	id:p.get('consId')+'CONS_NOTIFY_PARTY2',
    	tabIndex:68,
    	name:'consNotifyParty2',
    	value:p.get('consNotifyParty2'),
		height:100,
		anchor:'99%'
	});
    
    
    var t14={layout:'column',
		title:C_SHIPPER_INFO,
		collapsible:true,
		padding:5,
		border:false,
		items:
		[{columnWidth:.45,layout:'form',border:false,labelWidth:60,
			items:[txtShipper]},
		{columnWidth:.05,border:false,items:[bSaveShipper,bSearchShipper]},
		{columnWidth:.45,layout:'form',border:false,labelWidth:60,
			items:[txtConsignee]},
		{columnWidth:.05,border:false,items:[bSaveConsignee,bSearchConsignee]},
		{columnWidth:.45,layout:'form',border:false,labelWidth:60,
			items:[txtNotifyParty]},
		{columnWidth:.05,border:false,items:[bSaveNotifyParty,bSearchNotifyParty]},
		{columnWidth:.45,layout:'form',border:false,labelWidth:60,
			items:[txtNotifyParty2]},
		{columnWidth:.05,border:false,items:[bSaveNotifyParty2,bSearchNotifyParty2]}
	]};    
    
	var t1={id:'C_B_J_'+p.get('id'),
		title:C_BASE_INFO+'(J)',
		border:false,
		height:670,
		items:(p.get('consBizType')==BT_G||p.get('consBizType')==BT_I)?[t11,t13,t14]:[t11,t12,t13,t14]
	};
           
	//唛头
   	var txtCargoMarks = new Ext.form.TextArea({fieldLabel:C_MARKS,
		tabIndex:58,
		name:'consCargoMarks',
		value:p.get('consCargoMarks'),
		height:100,
		anchor:'99%'
	});
   	
   	//货物描述
    var txtCargoDesc = new Ext.form.TextArea({fieldLabel:C_CARGO_DESC,
		tabIndex:61,
		name:'consCargoDesc',
		value:p.get('consCargoDesc'),
		height:100,
		anchor:'99%'
	});
    
    //英文品名
    var txtCargoNameEn = new Ext.form.TextField({fieldLabel:C_CARGO_NAME_EN,
		tabIndex:61,
		name:'consCargoNameEn',
		value:p.get('consCargoNameEn'),
		anchor:'99%'
	});
    
    //中文品名
    var txtCargoNameCn = new Ext.form.TextArea({fieldLabel:C_CARGO_NAME_CN,
    	tabIndex:61,
    	name:'consCargoNameCn',
		value:p.get('consCargoNameCn'),
		anchor:'99%'
	});
	
    //小计毛重
    var numGrossWeight = new Ext.form.NumberField({fieldLabel:C_GW+((p.get('consBizType')==BT_B)?C_MT:C_KGS),
		tabIndex:61,
		name:'consTotalGrossWeight',
		value:p.get('consTotalGrossWeight'),
		decimalPrecision:4,
		anchor:'99%',
		listeners:{scope:this,
			change:function(f,nv,ov){				
				if(p.get('consBizType')==BT_A)
					recalculateChargeWeight('Carrier');
			}
		}
	});
    
    //小计件数
    var txtTotalPackages = new Ext.form.NumberField({fieldLabel:C_PACKAGES,
		tabIndex:61,
		name:'consTotalPackages',
		value:p.get('consTotalPackages'),
		anchor:'99%',
		listeners:{scope:this,
			change:function(f,nv,ov){	
				p.set('consTotalPackages',nv);
				var pw='SAY TOTAL '+N2EW(nv)+' '+p.get('packName')+' ONLY';
				p.set('consTotalPackagesInWord',pw);
				this.find('name','consTotalPackagesInWord')[0].setValue(pw);				
			}
		}
	});
    
    //包装种类
	var txtPack = new Ext.form.ComboBox({fieldLabel:C_PACK,
		tabIndex:61,
		name:'packName',
		value:p.get('packName'),
		store:getPACK_S(),
		displayField:'packName',
		valueField:'packName',
		typeAhead: true,
		mode: 'local',
		triggerAction: 'all',
		selectOnFocus:true,
		anchor:'99%',
		listeners:{scope:this,
			select:function(c,r,i){
				p.set('packId',r.get('packId'));
				p.set('packName',r.get('packName'));
				var pw='SAY TOTAL '+N2EW(p.get('consTotalPackages'))+' '+r.get('packName')+' ONLY';
				this.find('name','consTotalPackagesInWord')[0].setValue(pw);
				p.set('consTotalPackagesInWord',pw);
			}
		}
	});
	
	//大写件数
	var txtTotalSay = new Ext.form.TextField({fieldLabel:C_PACKAGES_CAP,
		tabIndex:61,
		name:'consTotalPackagesInWord',
		value:p.get('consTotalPackagesInWord'),
		anchor:'99%'
	});
	
	var numNetWeight = new Ext.form.NumberField({fieldLabel:C_NW+((p.get('consBizType')==BT_B)?C_MT:C_KGS),
		tabIndex:61,
		name:'consTotalNetWeight',
		value:p.get('consTotalNetWeight'),
		decimalPrecision:4,
		anchor:'99%'
	});
		
	var numMeasurement = new Ext.form.NumberField({fieldLabel:C_CBM,
		tabIndex:61,
		name:'consTotalMeasurement',
		value:p.get('consTotalMeasurement'),
		decimalPrecision:4,
		anchor:'99%',
		listeners:{scope:this,
			change:function(f,nv,ov){				
			if(p.get('consBizType')==BT_A)
				recalculateChargeWeight('Carrier');
			}
		}
	});
	
	//毛重（客户）
	var numGrossWeightK = new Ext.form.NumberField({fieldLabel:C_GW+C_KGS+'-客户',
		tabIndex:61,
		name:'consTotalGrossWeightCustomer',
    	value:p.get('consTotalGrossWeightCustomer'),
    	decimalPrecision:4,
    	anchor:'99%',
		listeners:{scope:this,
			change:function(f,nv,ov){				
				recalculateChargeWeight('Customer');
			}
		}
	});
	
	var numMeasurementK = new Ext.form.NumberField({fieldLabel:C_CBM+'-客户',
		tabIndex:61,
		name:'consTotalMeasurementCustomer',
		value:p.get('consTotalMeasurementCustomer'),
		decimalPrecision:4,
		anchor:'99%',
		listeners:{scope:this,
			change:function(f,nv,ov){				
				recalculateChargeWeight('Customer');
			}
		}
	});
		
	var numBulkyCarrier = new Ext.form.NumberField({fieldLabel:C_BULKY,
		tabIndex:58,
		name:'consBulkyCarrier',
		value:p.get('consBulkyCarrier'),
		anchor:'99%',
		listeners:{scope:this,
			change:function(f,nv,ov){				
				recalculateChargeWeight('Carrier');
			}
		}
	});
		
	var numBulkyCustomer = new Ext.form.NumberField({fieldLabel:C_BULKY+'-'+C_CUSTOMER,
		tabIndex:58,
		name:'consBulkyCustomer',
		value:p.get('consBulkyCustomer'),
		anchor:'99%',
		listeners:{scope:this,
			change:function(f,nv,ov){				
				recalculateChargeWeight('Customer');
			}
		}
	});
		
	var numChargeWeight = new Ext.form.NumberField({fieldLabel:C_CHARGE_WEIGHT,
		tabIndex:58,
		name:'consTotalChargeWeight',
		value:p.get('consTotalChargeWeight'),
		anchor:'99%'
	});
	
	var numChargeWeightCustomer = new Ext.form.NumberField({fieldLabel:C_CHARGE_WEIGHT+'-'+C_CUSTOMER,
		tabIndex:58,
		name:'consChargeWeightCustomer',
		value:p.get('consChargeWeightCustomer'),
		anchor:'99%'
	});
		
	function recalculateChargeWeight(t){
		var w = 0;
		var v = 0;
		var b = 0;
		
		if(t=='Carrier'){
			w = numGrossWeight.getValue();
			v = numMeasurement.getValue();
			b = numBulkyCarrier.getValue();
		}
		else{
			w = numGrossWeightK.getValue();
			v = numMeasurementK.getValue();
			b = numBulkyCustomer.getValue();
		}
		
		if(w) 
			w = parseFloat(w);
		if(v) 
			v = parseFloat(v);
		if(b) 
			b = parseFloat(b);
		
		var weightC = v/0.006;
		if(w>weightC)
			weightC = w;
		else{
			weightC = w+ (weightC-w)*b/100;
		}
		if(t=='Carrier'){
			numChargeWeight.setValue(weightC);
		}			
		else{
			numChargeWeightCustomer.setValue(weightC);
		}
			
	};
	
	var t31 = {layout:'column',
		padding:5,
		layoutConfig: {columns:5},
		border:false,
		labelWidth:60,
		title:'货物小计',
		collapsible:true,
		items:p.get('consBizType')==BT_A?[//空运
		    {columnWidth:.5,layout:'form',labelWidth:90,border:false,items:[txtCargoMarks]},
		    {columnWidth:.5,layout:'form',labelWidth:90,border:false,items:[txtCargoDesc]},
		    
		    {columnWidth:.5,layout:'form',labelWidth:90,border:false,items:[txtCargoNameEn]},
		    {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numGrossWeight]},           
		    {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numGrossWeightK]},
		    
            {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[txtCargoNameCn]},
            {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numNetWeight]},
            {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numMeasurement]},
            {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numMeasurementK]},
            
            {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[txtTotalPackages]},
            {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[txtPack]},
            {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numBulkyCarrier]},
            {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numBulkyCustomer]},
            
            {columnWidth:.5,layout:'form',labelWidth:90,border:false,items:[txtTotalSay]},
            {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numChargeWeight]},
            {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numChargeWeightCustomer]}            		                            
            ]:
         [
          {columnWidth:.5,layout:'form',labelWidth:90,border:false,items:[txtCargoMarks]},
          {columnWidth:.5,layout:'form',labelWidth:90,border:false,items:[txtCargoDesc]},
          
          {columnWidth:.5,layout:'form',labelWidth:90,border:false,items:[txtCargoNameEn]},
          {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numGrossWeight]},
          {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numMeasurement]},
          
          {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[txtTotalPackages]},
          {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[txtPack]},
          {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[txtCargoNameCn]},
          {columnWidth:.25,layout:'form',labelWidth:90,border:false,items:[numNetWeight]},
          
          {columnWidth:.5,layout:'form',labelWidth:90,border:false,items:[txtTotalSay]}
     ]};
	
	var g11 = new Ext.form.TextField({fieldLabel:C_DANAGER_CLASS,
		name:'cargDanagerClass',
		value:p.get('cargDanagerClass'),
		anchor:'99%'
	});
	
	var g12 = new Ext.form.TextField({fieldLabel:C_IMDG_PAGE,
		name: 'cargImdgPage',
		value:p.get('cargImdgPage'),
		anchor:'99%'
	});
	
	var g13 = new Ext.form.TextField({fieldLabel:C_UN_NO,
		name:'cargUnNo',
		value:p.get('cargUnNo'),
		anchor:'99%'
	});
	
	var g14 = new Ext.form.TextField({fieldLabel:C_SUB_LABEL,
		name:'cargSubLabel',
		value:p.get('cargSubLabel'),
		anchor:'99%'
	});
	
	var g15 = new Ext.form.TextField({fieldLabel:C_EMS_NO,
		name:'cargEmsNo',
		value:p.get('cargEmsNo'),
		anchor:'99%'
	});
	
	var g16 = new Ext.form.TextField({fieldLabel:C_FLASH_POINT,
		name:'cargFlashPoint',
		value:p.get('cargFlashPoint'),
		anchor:'99%'
	});
	
	var g17 = new Ext.form.TextField({fieldLabel:C_MFAG_NO,
		name:'cargMfagNo',
		value:p.get('cargMfagNo'),
		anchor:'99%'
	});
	
	var g18 = new Ext.form.TextField({fieldLabel:C_PKG_GROUP,
		name:'cargPkgGroup',
		value:p.get('cargPkgGroup'),
		anchor:'99%'
	});
	
	var g19 = new Ext.form.TextField({fieldLabel:C_DANAGER_PROPERTY,
		name:'cargDanagerProperty',
		value:p.get('cargDanagerProperty'),
		anchor:'99%'
	});
	
	var g20 = new Ext.form.Checkbox({fieldLabel:C_POLLUTION_FLAG,
		name:'cargPollutionFlag',
		value:p.get('cargPollutionFlag'),
		anchor:'99%'
	});
	
	var g21 = new Ext.form.ComboBox({fieldLabel:C_TEMPERATURE_UNIT,
		name:'cargTemperatureUnit',
		value:p.get('cargTemperatureUnit'),
		editable:false,
		store:TEUN_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		anchor:'99%'
	});
	
	var g22 = new Ext.form.NumberField({fieldLabel:C_TEMPERATURE,
		name:'cargTemperature',
		value:p.get('cargTemperature'),
		anchor:'99%'
	});
	
	var g23 = new Ext.form.NumberField({fieldLabel:C_TEMPERATURE_HIGH,
		name:'cargTemperatureHigh',
		value:p.get('cargTemperatureHigh'),
		anchor:'99%'
	});
	
	var g24 = new Ext.form.NumberField({fieldLabel:C_TEMPERATURE_LOW,
		name:'cargTemperatureLow',
		value:p.get('cargTemperatureLow'),
		anchor:'99%'
	});
	
	var g25 = new Ext.form.TextField({fieldLabel: C_VENT_OUTLET,
		name:'cargVentOutlet',
		value:p.get('cargVentOutlet'),
		anchor:'99%'
	});
	
	var g26 = new Ext.form.NumberField({fieldLabel: C_HUMIDITY,
		name:'cargHumidity',
		value:p.get('cargHumidity'),
		anchor:'99%'
	});
	
	var g27 = new Ext.form.NumberField({fieldLabel:C_LENGTH,
		name:'cargLength',
		value:p.get('cargLength'),
		anchor:'99%'
	});
	
	var g28 = new Ext.form.NumberField({fieldLabel: C_WIDTH,
		name:'cargWidth',
		value:p.get('cargWidth'),
		anchor:'99%'
	});
	
	var g29 = new Ext.form.NumberField({fieldLabel: C_HEIGH,
		name:'cargHigh',
		value:p.get('cargHigh'),
		anchor:'99%'
	});
	
	var t32 = {layout:'column',
		padding:5,
		layoutConfig: {columns:3},
		title:C_CARGO_SPECIAL_INFO,
		border:false,
		collapsible:true,
		items:
 		[{columnWidth:.33,border:false,items: 
	        [{id:'cargDanagerFlag',
	        	xtype:'fieldset',
	        	labelAlign:'right',
	        	labelWidth:80,
	        	checkboxToggle:true,
	        	checkboxName:'cargDanagerFlag',
	        	title:'危险品',
	        	autoHeight:true,
	        	defaultType:'textfield',
	        	collapsed:p.get('cargDanagerFlag')==0,
	        	items:[g11,g12,g13,g14,g15,g16,g17,g18,g19,g20]
	        }]
 		},
		{columnWidth:.34,border:false,items: 
	        [{id:'cargReeterFlag',
	        	xtype:'fieldset',
	        	labelAlign:'right',
	        	labelWidth:80,
	        	checkboxToggle:true,
	        	checkboxName:'cargReeterFlag',
	        	title:'冷藏品',
	        	autoHeight:true,
	        	autoWidth:true,
	        	collapsed:p.get('cargReeterFlag')==0,
	        	items:[g21,g22,g23,g24,g25,g26]
	        }]
 		},
		{columnWidth:.33,border:false,items: 
	       	[{id:'cargBigFlag',
	       		xtype:'fieldset',
	       		labelAlign:'right',
	       		labelWidth:70,
	       		checkboxToggle:true,
	       		checkboxName:'cargBigFlag',
	       		title:'大件货',
	       		autoHeight:true,
	       		collapsed:p.get('cargBigFlag')==0,
	       		items:[g27,g28,g29]
	       	}]
		}]
	};
	
	var t3={id:'C_B_H_'+p.get('id'),
		title:C_CARGO_INFO+'(H)',
		height:720,
		items:[{layout:'fit',border:false,collapsible:true,items:this.cargoGrid},t31,t32]
	};
	
	//服务要求
	var txtServiceSpec = new Ext.form.TextArea({fieldLabel:C_SERVICE_SPEC,
		tabIndex:1,
		name:'consServiceSpec',
		value:p.get('consServiceSpec'),
		anchor:'99%'
	});
	
	//备注
	var txtRemarks = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		tabIndex:2,
		name:'consRemarks',
		value:p.get('consRemarks'),
		anchor:'99%'
	});

	//订舱要求
	var t41={title:C_BOOKING_REQUIREMENT,
		layout:'column',
		padding:5,
		labelWidth:90,
		border:false,
		collapsible:true,
		items:[
	       {columnWidth:.5,layout:'form',border:false,items:[txtServiceSpec]},
	       {columnWidth:.5,layout:'form',border:false,items:[txtRemarks]}
	    ]
	};
	
	//车队
	var cboTrackVendor = new Ext.form.ComboBox({fieldLabel:C_TRACK_VENDOR,
		tabIndex:3,
		name:'consTrackVendorName',
		value:p.get('consTrackVendorName'),
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
		anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consTrackVendor','');
					p.set('consTrackVendorName','');
				}},
			select:function(c,r,i){
				p.set('consTrackVendor',r.get('custId'));
				p.set('consTrackVendorName',r.get('custNameCn'));
				txtTranContact.setValue(r.get('custContact'));
				txtTranTel.setValue(r.get('custTel'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){LC(f,e,'custTrackFlag');},buffer:BF}
		}
	});
	
	//车队联系人
	var txtTranContact = new Ext.form.TextField({fieldLabel:C_TRAN_CONTACT,
		tabIndex:4,
		name:'consTrackContact',
		value:p.get('consTrackContact'),
		anchor:'99%'
	});
	
	//车队联系电话
	var txtTranTel = new Ext.form.TextField({fieldLabel:C_TRAN_TEL,
		tabIndex:5,
		name:'consTrackTel',
		value:p.get('consTrackTel'),
		anchor:'99%'
	});
	
	//装货、送货地址
	var txtLoadAddress = new Ext.form.TextArea({fieldLabel:p.get('consBizClass')==BC_E?C_LOAD_ADDRESS:C_DELIVERY_ADDRESS,
		tabIndex:6,
		name:'consTrackLoadAddress',
		value:p.get('consTrackLoadAddress'),
		anchor:'99%'
	});
	
	//装货要求
	var txtTrackRemarks = new Ext.form.TextArea({fieldLabel:C_REMARKS,
		tabIndex:7,
		name:'consTrackRemarks',
		value:p.get('consTrackRemarks'),
		anchor:'99%'
	});
	
	//装货、提货日期
	var dtLoadDate= new Ext.form.DateField({fieldLabel:p.get('consBizClass')==BC_E?C_LOAD_DATE:C_FETCH_DATE,
		tabIndex:8,
        name:'consTrackLoadDate',
        value:p.get('consTrackLoadDate'),
        format:DATEF,
        anchor:'99%'
	});
	
	//装货、提货时间
	var dtLoadTime= new Ext.form.TimeField({fieldLabel:p.get('consBizClass')==BC_E?C_LOAD_TIME:C_FETCH_TIME,
		tabIndex:8,
        name:'consTrackLoadTime',
        value:p.get('consTrackLoadTime'),
        increment:30,
        anchor:'99%'
	});

	//装货工厂
	var txtLoadFactory = new Ext.form.ComboBox({fieldLabel:C_LOAD_FACTORY,
		name:'consLoadFactory',
		value:p.get('consLoadFactory'),
		xtype:'siteLookup',
		siteType:1,
		consign:p,
    	typeAhead:true,
    	mode:'local',
    	triggerAction: 'all',
    	selectOnFocus:true,
    	anchor:'99%',
    	listWidth:200,
    	pageSize:30,
    	hidden:p.get('consBizClass')!=BC_E,
		listeners:{scope:this,	    			
			select:function(c,r,i){
				txtLoadContact.setValue(r.get('cusiContact'));
				txtLoadTel.setValue(r.get('cusiTel'));
				txtLoadAddress.setValue(r.get('cusiAddress'));
			}
		}
	});
	
	//装货联系人
	var txtLoadContact=new Ext.form.TextField({fieldLabel:C_LOAD_CONTACT,
		tabIndex:4,
		name:'consLoadContact',
    	value:p.get('consLoadContact'),
    	xtype:'textfield',
    	anchor:'99%'
    });
	
	//装货联系电话
	var txtLoadTel = new Ext.form.TextField({fieldLabel:C_LOAD_TEL,
		tabIndex:5,
		name:'consLoadTel',
	    value:p.get('consLoadTel'),
	    xtype:'textfield',
	    anchor:'99%'
	});
	
	var t42 = {title:C_TRAN_REQUIREMENT,
		layout:'column',
		padding:5,
		border:false,
		labelWidth:90,
		collapsible:true,
		items:[{columnWidth:.25,layout:'form',border:false,items:[cboTrackVendor,dtLoadDate]},
		       {columnWidth:.25,layout:'form',border:false,items:[txtTranContact,dtLoadTime]},
		       {columnWidth:.25,layout:'form',border:false,items:[txtTranTel,txtLoadContact]},
		       {columnWidth:.25,layout:'form',border:false,items:[txtLoadFactory,txtLoadTel]},
				
	       {columnWidth:.5,layout:'form',border:false,items:[txtLoadAddress]},
	       {columnWidth:.5,layout:'form',border:false,items:[txtTrackRemarks]}
	    ]
	};
			
	var cboWarehouse = new Ext.form.ComboBox({fieldLabel:C_WAREHOUSE,
		tabIndex:9,
		name:'consWarehouseName',
		value:p.get('consWarehouseName'),
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
		anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consWarehouse','');
					p.set('consWarehouseName','');
			}},
			select:function(c,r,i){
				this.find('name','consWarehouseContact')[0].setValue(r.get('custContact'));
				this.find('name','consWarehouseTel')[0].setValue(r.get('custTel'));
				this.find('name','consWarehouseAddress')[0].setValue(r.get('custAddress'));
				p.set('consWarehouse',r.get('custId'));
				p.set('consWarehouseName',r.get('custNameCn'));
				p.set('consWarehouseFax',r.get('custFax'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){LC(f,e,'custWarehouseFlag');},buffer:BF}
		}
	});
	
	var r10 = new Ext.form.TextField({fieldLabel:C_WARE_CONTACT,
		tabIndex:10,
		name:'consWarehouseContact',
        value:p.get('consWarehouseContact'),
        anchor:'99%'
	});
	
	var r11 = new Ext.form.TextField({fieldLabel:C_WARE_TEL,
		tabIndex:11,
		name:'consWarehouseTel',
        value:p.get('consWarehouseTel'),
        anchor:'99%'
	});
	
	var r12 = new Ext.form.TextArea({fieldLabel:(p.get('consBizType')==BT_B)?C_WARE_REQUIREMENT:
		(p.get('consBizClass')==BC_E?C_CONT_LOAD_REQUIREMENT:C_CONT_DISCHARGE_REQUIREMENT),
	    tabIndex:12,
	    name:'consWarehouseRemarks',
	    value:p.get('consWarehouseRemarks'),
	    anchor:'99%'
	});
	
	var r13 = new Ext.form.TextArea({fieldLabel:C_WARE_ADDRESS,
		tabIndex:13,
	    name:'consWarehouseAddress',
	    value:p.get('consWarehouseAddress'),
	    anchor:'99%'
	});
	
	var txtWarehouseNo = new Ext.form.TextField({fieldLabel:C_IN_WAREHOUSE_NO,
		tabIndex:13,
		xtype:'textfield',
    	name:'consWarehouseNo',
    	value:p.get('consWarehouseNo'),
    	anchor:'99%'
	});
	
	var r14 = {fieldLabel:(p.get('consBizType')==BT_B)?C_WARE_DATE:
	        	(p.get('consBizClass')==BC_E?C_WARE_LOAD_DATE:C_WARE_DIS_DATE),tabIndex:14,
		name:'consContainerLoadDate',
		value:p.get('consContainerLoadDate'),
	    xtype:'datefield',
	    format:DATEF,
	    anchor:'99%'
	};
	
	var txtContainerLoadTime = {fieldLabel:C_ENTER_WAREHOUSE_TIME,
		tabIndex:8,
        name:'consContainerLoadTime',
        value:p.get('consContainerLoadTime'),
        xtype:'timefield',
        increment:30,
        anchor:'99%'
	};

	
	var txtCFS =  {fieldLabel:C_CFS,tabIndex:14,name:'consCfsName',value:p.get('consCfsName'),
	    	store:getCS(),enableKeyEvents:true,
    		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
    		xtype:'combo',displayField:'custCode',valueField:'custCode',
    		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
        	listeners:{scope:this,
         		blur:function(f){
         			if(f.getRawValue()==''){
         				f.clearValue();
         				p.set('consCfs','');
         				p.set('consCfsName','');
         		}},
         		select:function(c,r,i){
         			p.set('consCfs',r.get('custId'));
         			p.set('consCfsName',r.get('custNameCn'));
         			c.setValue(r.get('custNameCn'));
         		},
				keydown:{fn:function(f,e){LC(f,e,'custCfsFlag');},buffer:BF}}};
	
	var wareItems = [];
	wareItems[wareItems.length] = {columnWidth:.5,layout:'form',border:false,items:[cboWarehouse]};
	wareItems[wareItems.length] = {columnWidth:.25,layout:'form',border:false,items:[r10]};
	wareItems[wareItems.length] = {columnWidth:.25,layout:'form',border:false,items:[r11]};
	wareItems[wareItems.length] = {columnWidth:.5,layout:'form',border:false,items:[r12]};
	wareItems[wareItems.length] = {columnWidth:.5,layout:'form',border:false,items:[r13]};	
	wareItems[wareItems.length] = {columnWidth:.25,layout:'form',border:false,items:[r14]};
	wareItems[wareItems.length] = {columnWidth:.25,layout:'form',border:false,items:[txtWarehouseNo]};
	
	if(p.get('consBizType')==BT_C){
		wareItems[wareItems.length] = {columnWidth:.25,layout:'form',border:false,items:[txtCFS]};
		wareItems[wareItems.length] = {columnWidth:.25,layout:'form',border:false,items:[txtContainerLoadTime]};
	}	
	
	var t43 = {title:(p.get('consBizType')==BT_B)?C_SR_WARE:(p.get('consBizClass')==BC_E?C_WARE_LOAD:C_WARE_DIS),
		layout:'column',
		padding:5,
		border:false,
		collapsible:true,
		labelWidth:90,
		items:wareItems
	};
	
	var r15 = {fieldLabel:C_INSP_AGENCY,tabIndex:15,name:'consInspectionVendorName',
		value:p.get('consInspectionVendorName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,
		xtype:'combo',displayField:'custCode',valueField:'custCode',
		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
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
			keydown:{fn:function(f,e){LC(f,e,'custInspectionFlag');},buffer:BF}}};
	
	var r16={fieldLabel:C_CUSTOM_AGENCY,tabIndex:16,name:'consCustomsVendorName',
		value:p.get('consCustomsVendorName'),store:getCS(),enableKeyEvents:true,
		tpl:custTpl,itemSelector:'div.list-item',listWidth:400,
		xtype:'combo',displayField:'custCode',valueField:'custCode',
		typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%',
		listeners:{scope:this,
			blur:function(f){
				if(f.getRawValue()==''){
					f.clearValue();
					p.set('consCustomsVendor','');
					p.set('consCustomsVendorName','');
			}},
			select:function(c,r,i){
				p.set('consCustomsVendor',r.get('custId'));
				this.find('name','consCustomsContact')[0].setValue('custContact');
				this.find('name','consCustomsAddress')[0].setValue('custAddress');
				this.find('name','consCustomsTel')[0].setValue('custTel');
				p.set('consCustomsVendorName',r.get('custNameCn'));
				c.setValue(r.get('custNameCn'));
			},
			keydown:{fn:function(f,e){LC(f,e,'custCustomFlag');},buffer:BF}}};
	
	var r17={fieldLabel:C_SWITCH_BL,tabIndex:17,name:'swithId',value:p.get('swithId'),store:SWIT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	var r18={fieldLabel:C_FUMIGATE_FLAG,tabIndex:18,name:'consFumigateFlag',checked:p.get('consFumigateFlag')=='1',xtype:'checkbox',anchor:'99%'};
	var r19={fieldLabel:C_QUARANTINE_FLAG,tabIndex:19,name:'consQuarantineFlag',checked:p.get('consQuarantineFlag')=='1',xtype:'checkbox',anchor:'99%'};
	var r20={fieldLabel:C_TRANSFERRING_FLAG,tabIndex:20,name:'consTransferringFlag',checked:p.get('consTransferringFlag')=='1',xtype:'checkbox',anchor:'99%'};
	var r21={fieldLabel:C_CUSTOMS_TYPE,tabIndex:21,name:'consCustomsType',value:p.get('consCustomsType'),store:getCustomsType_S(),
			xtype:'combo',displayField:'cutyName',valueField:'cutyId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
    var r22={fieldLabel:C_INV_FLAG,xtype:'checkbox',tabIndex:22,name:'consInvoiceFlag',checked:p.get('consInvoiceFlag')=='1',anchor:'99%'};
    var r23={fieldLabel:C_INSP_FLAG,xtype:'checkbox',tabIndex:23,name:'consInspectionFlag',checked:p.get('consInspectionFlag')=='1',anchor:'99%'};
	
	var cboCudeType={fieldLabel:C_CUDE_TYPE,tabIndex:21,name:'consCudeType',value:p.get('consCudeType'),store:getCustomsType_S(),
			xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};

	var txtCustomsContact={fieldLabel:C_CUSTOMS_CONTACT,name:'consCustomsContact',tabIndex:24,xtype:'textfield',anchor:'99%'};
	var txtCustomsAddress={fieldLabel:C_CUSTOMS_ADDRESS,tabIndex:25,name:'consCustomsAddress',xtype:'textfield',anchor:'99%'};
	var txtCustomsTel={fieldLabel:C_CUSTOMS_TEL,name:'consCustomsTel',tabIndex:26,xtype:'textfield',anchor:'99%'};
	
    var t44={title:C_CUST_OTHER_REQUIREMENT,layout:'column',padding:5,border:false,collapsible:true,items:
		[
		  {columnWidth:.25,layout:'form',border:false,labelWidth:90,items:[r16,r17,r23]},
		  {columnWidth:.25,layout:'form',border:false,labelWidth:90,items:[txtCustomsContact,r15,r18,r22]},
		  {columnWidth:.25,layout:'form',border:false,labelWidth:90,items:[txtCustomsAddress,cboCudeType,r19,consThcFlag]},		
		{columnWidth:.25,layout:'form',border:false,labelWidth:90,items:[txtCustomsTel,r21,r20,consPressureBoxFlag]}
		]};
	
	var r24={fieldLabel:C_BHK_FLAG,tabIndex:24,name:'consBHkFlag',checked:p.get('consBHkFlag')=='1',xtype:'checkbox',anchor:'99%'};
	var r25={fieldLabel:C_BINTERNATIONAL_FLAG,tabIndex:25,name:'consBInternationalFlag',checked:p.get('consBInternationalFlag')=='1',xtype:'checkbox',anchor:'99%'};
	var r26={fieldLabel:C_REMARKS,tabIndex:26,name:'consBRemarks',value:p.get('consWarehouseRemarks'),xtype:'textarea',anchor:'99%'};
	var t45={title:C_BARGE_REQUIREMENT,layout:'column',padding:5,border:false,collapsible:true,items:[
		{columnWidth:.4,layout:'form',border:false,items:[r24,r25]},
		{columnWidth:.6,layout:'form',border:false,items:[r26]}]};
	var t4={id:'C_B_Y_'+p.get('id'),title:C_SERVICE_REQUIREMENT+'(Y)',height:650,
		items:p.get('consBizClass')==BC_E?[t41,t42,t43,t44,t45]:[t41,t42,t43,t44]};
	
	var r27={fieldLabel:C_CARGO_OWNER,tabIndex:1,name:'consCargoOwnerName',value:p.get('consCargoOwnerName'),store:getCS(),enableKeyEvents:true,
    	tpl:custTpl,itemSelector:'div.list-item',listWidth:C_LW,xtype:'combo',displayField:'custCode',valueField:'custNameCn',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%',listWidth:200,pageSize:30,
		listeners:{scope:this,
			blur:function(f){if(f.getRawValue()==''){f.clearValue();p.set('consCargoOwner','');p.set('consCargoOwnerName','');}},
			select:function(c,r,i){p.set('consCargoOwner',r.get('custId'));},
			keydown:function(f,e){LC(f,e,'custBookerFlag');}}};
	var r28={fieldLabel:C_TRTY,tabIndex:5,name:'trtyId',value:p.get('trtyId'),store:getTRTY_S(),xtype:'combo',displayField:'trtyName',valueField:'trtyId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'};
	var r29={fieldLabel:C_TRADE_CONTRACT_NO,tabIndex:2,name:'consTradeContractNo',value:p.get('consTradeContractNo'),xtype:'textfield',anchor:'99%'};
	var r30={fieldLabel:C_INSURANCE_FEE,tabIndex:6,name:'consInsuranceFee',value:p.get('consInsuranceFee'),xtype:'textfield',anchor:'99%'};
	var r31={fieldLabel:C_CREDIT_NO,tabIndex:3,name:'consCreditNo',value:p.get('consCreditNo'),xtype:'textfield',anchor:'99%'};
	var r32={fieldLabel:C_TRTE,tabIndex:4,name:'trteId',value:p.get('trteId'),store:getTRTE_S(),xtype:'combo',displayField:'trteName',valueField:'trteId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'99%'};
	var t51={title:C_TRADE_INFO,layout:'column',padding:5,border:false,collapsible:true,items:[
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r27,r28]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r29,r30]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r31]},
   		{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r32]}]};
	
	
	var r34={fieldLabel:C_SCAC_CODE,tabIndex:8,name:'consScacCode',value:p.get('consScacCode'),xtype:'textfield',anchor:'99%'};
	var r35={fieldLabel:C_BOOK_US_NO,tabIndex:9,name:'consBookingDeclareNoUs',value:p.get('consBookingDeclareNoUs'),xtype:'textfield',anchor:'99%'};
	var r36={fieldLabel:C_US_FULLSHIP,tabIndex:10,name:'consUsFullShip',value:p.get('consUsFullShip'),store:USFU_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'99%'};
	var t52={title:C_AMS_INFO,layout:'column',padding:5,border:false,collapsible:true,items:[    	
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r34]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r35]},
    	{columnWidth:.25,layout:'form',border:false,labelWidth:70,items:[r36]}]};
	var r37={fieldLabel:C_F_SHIPPER,tabIndex:11,name:'consFShipper',value:p.get('consFShipper'),xtype:'textarea',anchor:'99%'};
	var r38={fieldLabel:C_F_CONSIGNEE,tabIndex:12,name:'consFConsignee',value:p.get('consFConsignee'),xtype:'textarea',anchor:'99%'};
	var r39={fieldLabel:C_F_NOTIFY,tabIndex:13,name:'consFNotifyParty',value:p.get('consFNotifyParty'),xtype:'textarea',anchor:'99%'};
	var t53={title:C_FSHIPPER_INFO,layout:'column',padding:5,border:false,collapsible:true,items:[
    	{columnWidth:.34,layout:'form',border:false,labelWidth:70,items:[r37]},
    	{columnWidth:.33,layout:'form',border:false,labelWidth:70,items:[r38]},
    	{columnWidth:.33,layout:'form',border:false,labelWidth:70,items:[r39]}]};
	var r40={fieldLabel:C_EXT_1,tabIndex:14,name:'attr1',value:p.get('attr1'),xtype:'textfield',anchor:'99%'};
	var r41={fieldLabel:C_EXT_3,tabIndex:16,name:'attr3',value:p.get('attr3'),xtype:'textfield',anchor:'99%'};
	var r42={fieldLabel:C_EXT_5,tabIndex:18,name:'attr5',value:p.get('attr5'),xtype:'textfield',anchor:'99%'};
	var r43={fieldLabel:C_EXT_7,tabIndex:20,name:'attr7',value:p.get('attr7'),xtype:'textfield',anchor:'99%'};
	var r44={fieldLabel:C_EXT_9,tabIndex:22,name:'attr9',value:p.get('attr9'),xtype:'textarea',anchor:'99%'};
	var r45={fieldLabel:C_EXT_2,tabIndex:15,name:'attr2',value:p.get('attr2'),xtype:'textfield',anchor:'99%'};
	var r46={fieldLabel:C_EXT_4,tabIndex:17,name:'attr4',value:p.get('attr4'),xtype:'textfield',anchor:'99%'};
	var r47={fieldLabel:C_EXT_6,tabIndex:19,name:'attr6',value:p.get('attr6'),xtype:'textfield',anchor:'99%'};
	var r48={fieldLabel:C_EXT_8,tabIndex:21,name:'attr8',value:p.get('attr8'),xtype:'textfield',anchor:'99%'};
	var r49={fieldLabel:C_EXT_10,tabIndex:23,name:'attr10',value:p.get('attr10'),xtype:'textarea',anchor:'99%'};
	var t54={title:C_OTHER_INFO,layout:'column',padding:5,collapsible:true,border:false,items:[
    	{columnWidth:.5,layout:'form',border:false,labelWidth:70,items:[r40,r41,r42,r43,r44]},
    	{columnWidth:.5,layout:'form',border:false,labelWidth:70,items:[r45,r46,r47,r48,r49]}]};
	
	var t5= {id:'C_B_K_'+p.get('id'),title:C_EXT_INFO+'(K)',height:500,
			items:p.get('consBizClass')==BC_E?[t51,t52,t53,t54]:[t51,t54]};
    var t6={id:'C_B_T_'+p.get('id'),title:C_HBL_INFO+'(T)',height:450,autoScroll:true,
    		layout:'form',deferredRender:false,collapsible:true,items:[this.hblGrid]};
    
    var tabs=[t1,t3,t4,t5];
    
	if(p.get('consBizType')==BT_C){
    	var t2={id:'C_B_X_'+p.get('id'),border:false,title:C_CONT_INFO+'(X)',height:500,
    		layout:'fit',items:[this.contGrid]};
		
		tabs=[t1,t2,t3,t4,t5];
		if(p.get('consBizClass')==BC_I) tabs=[t1,t2,t3,t6,t4,t5];
	};
	
	this.expEmail=function(code,sub){
		var to='';
		var cc='';
		var msg='';
		EXPM(to,cc,sub,msg,code,'consId='+p.get('consId'));
	};
	
	this.expFax=function(code,sub){
        var to=p.get('custFax');
        var cc='';
        var msg='';
        EXPM(to,cc,sub,msg,code,'consId='+p.get('consId'),3);
    };
    this.expExcel=function(c){
    	if(c=='BOOK_C')
    		EXPC(c,'&expeType=R&consId='+p.get('consId'));
    	else
    		EXPC(c,'&consId='+p.get('consId'));
    };
    
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',
			params:{A:'CONS_U',consId:p.get('consId'),consStatus:s},
		success: function(r){
			p.set('consStatus',s);
			this.updateToolBar(s);
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
    
    this.start=function(){
    	this.updateStatus('1');
    };
    
    this.check=function(){
    	this.updateStatus('2');
    };
    
    this.exit=function(){
    	this.updateStatus('3');
    };
    
    this.renew=function(){
    	this.updateStatus('4');
    };
    
    this.quit=function(){
    	XMG.confirm(SYS,M_CONS_QUIT_C,function(btn){
    		if(btn=='yes') this.updateStatus('5');
    	},this);
    };
    
    this.rebook=function(){
    	this.updateStatus('1');
    };
    
    this.cancel=function(){
    	XMG.confirm(SYS,M_CONS_CANCEL_C,
    		function(btn){
    			if(btn=='yes') 
    				this.updateStatus('6');
    		},
    	this);
    };
    
    this.finished = function(){
    	XMG.confirm(SYS,M_CONS_CONFIRMED_F,
    		function(btn){
    			if(btn=='yes') 
    				this.updateStatus('7');
    		},
    	this);
    };
    
    this.cancelFinish = function(btn){
    	this.updateStatus('2');
    };


    this.arrive=function(){
    	XMG.confirm(SYS,M_CONS_ARRIVE_C,function(btn){
    		if(btn=='yes') 
    			this.updateStatus('1');
    		},this);
    };
    
    this.release=function(){
    	XMG.confirm(SYS,M_CONS_RELEASE_C,function(btn){
    		if(btn=='yes') 
    			this.updateStatus('2');
    		},this);
    };
    
    this.releaseCargo=function(){
    	XMG.confirm(SYS,M_CARGO_RELEASE_C,function(btn){
    		if(btn=='yes') 
    			this.updateStatus('3');
    		},this);
    };
    
    this.sendCargo=function(){
    	XMG.confirm(SYS,M_CARGO_SEND_C,function(btn){
    		if(btn=='yes') 
    			this.updateStatus('4');
    		},this);
    };
    
    this.copyFrom=function(){
    	XMG.prompt(SYS,C_CONS_NO,function(b,v){
			if(b=='ok'){
				var sc = new Ext.data.Store({url: SERVICE_URL+'?A='+'CONS_Q',
					reader: new Ext.data.XmlReader({record:'FConsign'}, FConsign)});
				sc.load({params:{consNo:v},callback:function(r,o,s){
					if(s&&r.length>0){
						var c=r[0];
						p.beginEdit();
						var f = FConsign.prototype.fields;
						for (var i = 0; i < f.keys.length; i++) {
							var fn = ''+f.keys[i];
							if(fn=='consDate'||fn=='id'||fn=='consId'||fn=='consNo'||fn=='version'
								||fn=='consStatus'||fn=='consStatusBooking'||fn=='consStatusClearance'
								||fn=='consStatusSwitchBl'||fn=='consStatusSplit'||fn=='consStatusInsp'
								||fn=='consStatusCont'||fn=='consStatusCarg'||fn=='consStatusMbl'
								||fn=='consStatusHbl'||fn=='consStatusBBook'||fn=='consStatusDepa'
								||fn=='consStatusDocs'||fn=='consStatusExp'||fn=='consStatusAud'
								||fn=='consStatusAr'||fn=='consStatusAp'||fn=='consArWriteOffDate'||fn=='consApWriteOffDate'
								||fn=='consStatusInvoR'||fn=='consStatusInvoP'||fn=='consInvoRDate'||fn=='consInvoPDate'
								||fn=='consStatusReassign'||fn=='consStatusInCy'||fn=='consStatusInCfs'
								||fn=='consStatusOnBoard'||fn=='consStatusEir'||fn=='consStatusSendCont'||fn=='consStatusLock'
								||fn=='consReassignFrom'||fn=='consStatusSettlement'||fn=='rowAction'
								||fn=='fconId'||fn=='loliId'||fn=='consMasterFlag'||fn=='consMasterId'
								||fn=='consMergeFlag'||fn=='consMergeId'||fn=='consMergeNo'||fn=='consMasterNo'
								||fn=='consContractNo'||fn=='consTradeContractNo'||fn=='consMblNo'||fn=='consHblNo'
							){}
							else p.set(fn,c.get(fn));
						};
						p.endEdit();
						this.getForm().loadRecord(p);
					}    						
				},scope:this});
			}
		},this);
    };
    
    var locked=p.get('consStatusLock')==1;
    var disable=p.get('editable')==0;
    var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'))+M3_CONS;
    
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
					
					var t = T_MAIN.getComponent('C_'+ p.get('id'));
					var title=getBT(p.get('consBizType'))+getBC(p.get('consBizClass'))+getSHTY(p.get('consShipType'))+'委托【'+p.get("consNo")+'】';
					t.setTitle(title);
					this.find('name','consNo')[0].setValue(p.get('consNo'));
					
					var mn = this.find('name','consMasterNo');
					if(mn && mn.length>0){
						masterNo = mn[0];
						masterNo.setValue(p.get('consMasterNo'));
					}					
					XMG.alert(SYS,M_S);					
				},
				failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
			}
		},this);
    };
    
	this.updateToolBar = function(s){
		var tb=this.getTopToolbar();
		locked=p.get('consStatusLock')==1;
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')==7||p.get('consStatus')==8);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(m+F_M)||locked||disable||s!=0);
    	if(tb.getComponent('TB_C')) tb.getComponent('TB_C').setDisabled(NR(m+F_M)||locked||disable||s!=1);
    	if(tb.getComponent('TB_D')) tb.getComponent('TB_D').setDisabled(NR(m+F_M)||locked||disable||s!=2);
    	if(tb.getComponent('TB_E')) tb.getComponent('TB_E').setDisabled(NR(m+F_M)||locked||disable||s!=2);
    	if(tb.getComponent('TB_F')) tb.getComponent('TB_F').setDisabled(NR(m+F_M)||locked||disable||s==5||s==7||s==8);
    	if(tb.getComponent('TB_G')) tb.getComponent('TB_G').setDisabled(NR(m+F_M)||locked||disable||s<2||s==7||s==8);
    	if(tb.getComponent('TB_H')) tb.getComponent('TB_H').setDisabled(NR(m+F_F)||locked||disable||s!=2);    	
    	
    	if(tb.getComponent('TB_I')) tb.getComponent('TB_I').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')!=0);
    	if(tb.getComponent('TB_J')) tb.getComponent('TB_J').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')!=1);
    	if(tb.getComponent('TB_K')) tb.getComponent('TB_K').setDisabled(NR(m+F_M)||locked||disable||p.get('consStatus')!=2);
    	if(tb.getComponent('TB_L')) tb.getComponent('TB_L').setDisabled(NR(m+F_F)||locked||disable||p.get('consStatus')!=3);  	
    	if(tb.getComponent('TB_U')) tb.getComponent('TB_U').setDisabled(NR(m+F_UL)||locked!=1);
    	if(tb.getComponent('TB_P')) tb.getComponent('TB_P').setDisabled(NR(m+F_M)||p.get('consStatus')==7);
    	if(tb.getComponent('TB_M_CONS_NO')) tb.getComponent('TB_M_CONS_NO').setDisabled(NR(m+F_MIDIFY_CONS_NO)||locked==1||p.get('consStatus')==7||p.get('consStatus')==8);
    };
    
    //保存
	var btnSave = new Ext.Button({text:C_SAVE,
		itemId:'TB_A',
		iconCls:'save',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')==7||p.get('consStatus')==8,
		scope:this,
		handler:this.save
	});
	
	//订舱开始
	var btnStartBooking = new Ext.Button({text:C_BOOK_START,
		itemId:'TB_B',
		iconCls:'save',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=0,
		scope:this,
		handler:this.start
	});
	
	//订舱确认
	var btnBookingConfirm = new Ext.Button({text:C_BOOK_CONFIRM,
		itemId:'TB_C',
		iconCls:'check',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1,
		scope:this,
		handler:this.check
	});
	
	//退关
	var btnExit = new Ext.Button({text:C_BOOK_EXIT,
		itemId:'TB_D',
		iconCls:'exit',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=2,
		scope:this,
		handler:this.exit
	});
	
	//改配
	var btnReassign = new Ext.Button({text:C_BOOK_REASSIGN,
		itemId:'TB_E',
		iconCls:'redo',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=2,
		scope:this,
		handler:this.renew
	});
	
	//退载
	var btnQuit = new Ext.Button({text:C_BOOK_QUIT,
		itemId:'TB_F',
		iconCls:'consCancel',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')==5||p.get('consStatus')==7||p.get('consStatus')==8,
		scope:this,
		handler:this.quit
	});
	
	//重新订舱
	var btnRebook = new Ext.Button({text:C_BOOK_RENEW,
		itemId:'TB_G',
		iconCls:'renew',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')<2||p.get('consStatus')==7||p.get('consStatus')==8,
		scope:this,
		handler:this.rebook
	});
	
	//作废
	var btnCancel = new Ext.Button({text:C_INVALID,
		itemId:'TB_H',
		iconCls:'cancel',
		disabled:NR(m+F_F)||locked||disable||p.get('consStatus')!=2,
		scope:this,
		handler:this.cancel
	});
	
	//另存
	var btnSaveAs = new Ext.Button({text:C_COPY,
		itemId:'TB_N',
		iconCls:'copy',
		disabled:NR(m+F_M),
		scope:this,
		handler:function(){
			Fos.showConsign(Fos.copyConsign(p));
		}
	});
	
	//从...复制
	var btnCopyFrom = new Ext.Button({text:C_COPY_FROM,
		itemId:'TB_O',
		iconCls:'copy',
		disabled:NR(m+F_M)||locked||disable,
		scope:this,
		handler:this.copyFrom
	});
	
	//到港
	var btnArrive = new Ext.Button({text:C_ARRIVE,
		itemId:'TB_I',
		iconCls:'plane',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=0,
		scope:this,
		handler:this.arrive
	});
	
	//换单
	var btnSwitchBl = new Ext.Button({text:C_SWITCH_BL,
		itemId:'TB_J',
		iconCls:'release',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=1,
		scope:this,
		handler:this.release
	});
	
	//放行
	var btnRelease = new Ext.Button({text:C_RELEASE,
		itemId:'TB_K',
		iconCls:'cart',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=2,
		scope:this,
		handler:this.releaseCargo
	});
	
	//送货
	var btnSendCargo = new Ext.Button({text:C_SEND_CARGO,
		itemId:'TB_L',
		iconCls:'cart',
		disabled:NR(m+F_M)||locked||disable||p.get('consStatus')!=3,
		scope:this,
		handler:this.sendCargo
	});
	
	//作废
	var btnInvalid = new Ext.Button({text:C_INVALID,
		itemId:'TB_M',
		iconCls:'cancel',
		disabled:NR(m+F_F)||locked||disable,
		scope:this,
		handler:this.cancel
	});
	
	//解锁
	var btnUnlock = new Ext.Button({text:C_UNLOCK,
		itemId:'TB_U',
		iconCls:'unlock',
		disabled:NR(m+F_UL)||locked!=1,
		scope:this,
		handler:this.unlock
	});
	
	//结单
	var btnFinished = new Ext.Button({text:C_FINISHED,
		itemId:'TB_P',
		iconCls:'ok',
		disabled:NR(m+F_M)||p.get('consStatus')==7,
		scope:this,
		handler:this.finished
	});
	
	//取消结单
	var btnCancelFinished = new Ext.Button({text:C_CANCEL_FINISHED,
		itemId:'TB_Q',
		iconCls:'renew',
		scope:this,
		handler:this.cancelFinish
	});
	
	var btnModifyConsignNo = new Ext.Button({text:C_MODIFY_CONS_NO,
		itemId:'TB_M_CONS_NO',
		iconCls:'option',
		disabled:NR(m+F_MIDIFY_CONS_NO)||locked==1||p.get('consStatus')==7,
		scope:this,
		handler:this.MoidfyConsNo
	});
	
	var exp1=CREATE_E_MENU(M_ARRIVE_ADVICE,function(){this.expExcel('ARAD');},function(){this.expEmail('ARAD',M_ARRIVE_ADVICE);},function(){this.expFax('ARAD',M_ARRIVE_ADVICE);},this);
	var exp2=CREATE_E_MENU(M_BOOK,function(){this.expExcel('CONS_B');},function(){this.expEmail('CONS_B',M_BOOK);},function(){this.expFax('CONS_B',M_BOOK);},this);
	var exp3=CREATE_E_MENU(M_BOOK_CONFIRM,function(){this.expExcel('BOOK_C');},function(){this.expEmail('BOOK_C',M_BOOK_CONFIRM);},function(){this.expFax('BOOK_C',M_BOOK_CONFIRM);},this);
	var exp4=CREATE_E_MENU(M_CONSIGN,function(){this.expExcel('CONS');},function(){this.expEmail('CONS',M_CONSIGN);},function(){this.expFax('CONS',M_CONSIGN);},this);
	var exp5=CREATE_E_MENU(M_BL_ER,function(){this.expExcel('BLER');},function(){this.expEmail('BLER',M_BL_ER);},function(){this.expFax('BLER',M_BL_ER);},this);
	var exp6=CREATE_E_MENU(M_BL_SEAWAY,function(){this.expExcel('SEAW');},function(){this.expEmail('SEAW',M_BL_SEAWAY);},function(){this.expFax('SEAW',M_BL_SEAWAY);},this);
	var exp7=CREATE_E_MENU(M_LOAD_ADVICE,function(){this.expExcel('WARE_INFO');},function(){this.expEmail('WARE_INFO',M_LOAD_ADVICE);},function(){this.expFax('WARE_INFO',M_LOAD_ADVICE);},this);
	var exp8=CREATE_E_MENU(M_SGS_ADVICE,function(){this.expExcel('SGS_INFO');},function(){this.expEmail('SGS_INFO',M_SGS_ADVICE);},function(){this.expFax('SGS_INFO',M_SGS_ADVICE);},this);
	var exp9=CREATE_E_MENU(M_SHIP_ADVICE,function(){this.expExcel('SHIP_INFO');},function(){this.expEmail('SHIP_INFO',M_SHIP_ADVICE);},function(){this.expFax('SHIP_INFO',M_SHIP_ADVICE);},this);
	var exp10=CREATE_E_MENU(M_BUSSINESS_PROCESS,function(){this.expExcel('BUSINESS_PROCESS');},function(){this.expEmail('BUSINESS_PROCESS',M_BUSSINESS_PROCESS);},function(){this.expFax('BUSINESS_PROCESS',M_BUSSINESS_PROCESS);},this);
	var exp11=CREATE_E_MENU(C_BL_CONFIRM,function(){this.expExcel('CONS_B');},function(){this.expEmail('CONS_B',C_BL_CONFIRM);},function(){this.expFax('CONS_B',C_BL_CONFIRM);},this);
	
	var expM=[];
	if(p.get('consBizType')==BT_C) 
		expM=p.get('consBizClass')==BC_I?[exp1,exp10]:[exp2,exp3,exp4,exp5,exp6,exp7,exp8,exp9,exp11];		
	else if(p.get('consBizType')==BT_A){
		expM=p.get('consBizClass')==BC_I?[exp1]:[exp2,exp3,exp5,exp6,exp7];
	}
	else 
		expM=p.get('consBizClass')==BC_I?[exp1]:[exp2,exp3,exp5,exp6];
		
	var b10={text:C_EXPORT,iconCls:'print',disabled:NR(m+F_E),scope:this,menu:{items:expM}};
	
	var tbs=[];
	
	if(p.get('consBizType')==BT_G||p.get('consBizType')==BT_I){
		tbs=[btnSave,'-',btnCancel,'-',btnSaveAs,'-',btnCopyFrom,'-',
		     btnModifyConsignNo,'-',btnUnlock];
	}
	else{
		if(p.get('consBizClass')==BC_I) //进口
			tbs=[btnSave,'-',btnArrive,'-',btnSwitchBl,'-',btnRelease,'-',
			     btnSendCargo,'-',btnInvalid,'-',btnSaveAs,'-',btnCopyFrom,'-',
			     btnModifyConsignNo,'-',b10,'-',btnFinished,'-',btnCancelFinished,'-',btnUnlock];
		else if(p.get('consBizClass')==BC_E) //出口
			tbs=[btnSave,'-',btnStartBooking,'-',btnBookingConfirm,'-',btnExit,'-',
			     btnReassign,'-',btnQuit,'-',btnRebook,'-',btnCancel,'-',btnSaveAs,'-',
			     btnCopyFrom,'-',btnModifyConsignNo,'-',b10,'-',btnFinished,'-',
			     btnCancelFinished,'-',btnUnlock];
	}	
	
	Fos.BookTab.superclass.constructor.call(this, { 
		id: "T_BOOK_"+p.get('id'),
		title:C_CONSIGN,
		header:false,
		autoScroll:true,
		border:false,
		labelAlign:'right',
		bodyStyle:'padding:2px 10px 10px 2px',
		tbar:tbs,		
		items:[
		    {id:'T_BOOK_T_'+p.get('id'),
			xtype:'tabpanel',
			plain:true,
			activeTab:0,
	    	listeners:{scope:this,
	    		tabchange:function(m,a){
	    			a.doLayout();
	    		}
		    },
		    items:tabs
		}]
	});
};
Ext.extend(Fos.BookTab,Ext.FormPanel);

//收发货人选择窗口
Fos.ShipperWin=function(custId,shipperT,fn){
	var bp ={custId:custId,cushType:shipperT};
	
	var store = new Ext.data.Store({url:SERVICE_URL,baseParams:{mt:'json',A:'CUSH_Q'},
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'CCustomerShipper',id:'cushId'},CCustomerShipper),
		remoteSort:true,sortInfo:{field:'cushId', direction:'DESC'}});
	store.load({params:bp});
	
		
	this.selRecord = function(){
		var b =sm.getSelected();
		if(b){
			fn(shipperT,b.get('cushName'));
			this.close();
		}
	};
		    
	this.removeRecord=function(){	
		var a =sm.getSelections();
       	if(a.length){
       		XMG.confirm(SYS,M_R_C,function(btn){
           	if(btn=='yes'){           		
               		var xml = SMTX4R(sm,'CCustomerShipper','cushId');
               		Ext.Ajax.request({url:SERVICE_URL,method:'POST',params:{A:'CUSH_S'},
					success: function(){
               			store.load({params:{custId:custId,cushType:shipperT}});
               			XMG.alert(SYS,M_S);
               		},
					failure: function(r,o){XMG.alert(SYS,M_F+r.responseText);},
					xmlData:FOSX(xml)});
           }});
		}
       	else XMG.alert(SYS,M_R_P);		
	};
	
	 var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:true});
	    var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_FILE_NAME,dataIndex:'cushName',width:200},
		{header:C_CREATE_TIME,width:100,align:'right',renderer:formatDateTime,dataIndex:"createTime"}
		],defaults:{sortable:true,width:100}});

	    
	var panel = new Ext.grid.GridPanel({header:false,
		closable:false,store:store,sm:sm,cm:cm});
	
	Fos.ShipperWin.superclass.constructor.call(this,{buttonAlign:'right',
		title:C_SHIPPER_AND_CONSIGNEE_INFO,layout:'fit',
		width:600,height:400,modal:true,
	  	items:[panel],
	  	buttons:[{text:C_SEL,iconCls:'check',scope:this,handler:this.selRecord},
	  	       {text:C_REMOVE,iconCls:'remove',scope:this,handler:this.removeRecord},
		  	       {text:C_CANCEL,iconCls:'cancel',scope:this,handler:this.close}]
	});
};
Ext.extend(Fos.ShipperWin, Ext.Window);

