Fos.ExGrid = function(p,t,frm,store) {
	var expeType = 'R';
	if(t=='P'){
		expeType = 'P';
	}
	else if(t=='D'){
		expeType = 'D';
	}
	else if (t=='C'){
		expeType='P';
	}
	
	this.reCalculate = function(){
		if(t=='R') 
			frm.calcR(); 
		else if(t=='P') 
			frm.calcP(); 
		else 
			frm.calcC();
		frm.reCalculate();
	};
	
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	var x=S_AR;
	if(t=='P'||t=='D') 
		x=S_AP; 
	else if(t=='R')  
		x=S_AR; 
	else 
		x=S_AC;
	if(frm.f=='C') 
		m=m+M3_EXPE+x; 
	else 
		m=M1_S+S_EXPE+x;
	
	var	t1={header:C_SETTLE_OBJECT,
		width:200,
		dataIndex:"custName",
		align:'center',
		editor:new Ext.form.ComboBox({displayField:'custNameCn',
			valueField:'custNameCn',
			triggerAction:'all',
	        mode:'local',
	        tpl:custTpl,
	        itemSelector:'div.list-item',
	        listWidth:450,
	        allowBlank:false,
	        mode:'local',
	        selectOnFocus:true,
	        listClass:'x-combo-list-small',
	        store:getCS(),
	        enableKeyEvents:true,
	        listeners:{scope:this,
	        	select:function(c,r,i){
					var b =this.getSelectionModel().getSelected();
	            	b.set('custId',r.get('custId'));
	            	b.set('custName',r.get('custNameCn'));
	            	b.set('custSname',r.get('custCode'));
	            	if(r.get('custInvoiceHeader')!=""){
		            	b.set('expeInvoiceTitle',r.get('custInvoiceHeader'));
		            }else{
		            	b.set('expeInvoiceTitle',r.get('custNameCn'));
		            }
	        	},
	       		keydown:{
	       			fn:function(f,e){
	       				LC(f,e,t=='R'?'custArFlag':'custApFlag',1);
	       			},buffer:500
       			}
        	}
		}
	)};
	
	
	var t2={header:C_CHAR,width:80,dataIndex:"charName",align:'center',
			editor:new Ext.form.ComboBox({displayField:'charCode',valueField:'charName',
			triggerAction:'all',tpl:charTpl,itemSelector:'div.list-item',listWidth:350,
            allowBlank:false,blankText:'',invalidText:'',mode:'local',
            selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCHAR_S(),
            listeners:{scope:this,
            	select:function(c,r,i){
	            	var b =this.getSelectionModel().getSelected();
	            	b.set('charId',r.get('charId'));
	            	b.set('chclId',r.get('chclId'));
	            	b.set('charNameEn',r.get('charNameEn'));
	            	b.set('charName',r.get('charName'));
	            	b.set('currCode',r.get('currCode'));
	            	b.set('unitId',r.get('unitId'));
	            	b.set('expeExRate',getExRate(r.get('currCode'),'CNY'));
	            	this.reCalculate();
            	}
			}
		}
	)};
	
	
    var t3={header:C_UNIT,width:80,dataIndex:"unitName",align:'center',
			editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_C(),listeners:{
            scope:this,select:function(c,r,i){
            	var b=this.getSelectionModel().getSelected();
            	var rec=frm.UN.getById(r.get('unitCode'));
            	b.set('expeNum',rec?rec.get('N'):1);}}}
			)};
    
    var t4={header:C_QUANTITY,width:60,dataIndex:"expeNum",renderer:expenseNumRender,
			editor:new Ext.form.NumberField({
				decimalPrecision:4,
				selectOnFocus:true,
				allowBlank:false,
				blankText:'',
				invalidText:''}
			)
    };
    
	var t5={header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice",
			renderer:numRender,
			align:'center',
			editor:new Ext.form.NumberField({decimalPrecision:2,
				selectOnFocus:true,
				allowBlank:false,
				blankText:'',
				invalidText:''})
	};
	
	var t6={header:C_CURR,dataIndex:'currCode',width:50,align:'center',
			editor:new Ext.form.ComboBox({displayField:'currCode',
				valueField:'currCode',
				triggerAction: 'all',
	            allowBlank:false,
	            blankText:'',
	            invalidText:'',
	            mode:'local',
	            selectOnFocus:true,
	            listClass:'x-combo-list-small',
	            store:getCURR_S()})
	};
	
	var t7={header:C_EX_RATE,width:60,dataIndex:"expeExRate",renderer:rateRender};	
	
	var t8={header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",renderer:numRender,align:'center'};	
	
	var t9={header:C_COST_PRICE,width:80,dataIndex:"expeInnerPrice",renderer:numRender,
			editor:new Ext.form.NumberField({disabled:NR(m+F_CM),
				decimalPrecision:2,
				selectOnFocus:true,
				allowBlank:false,
				blankText:''})
	};
	
	var t10={header:C_COST_TOTAL,width:80,dataIndex:"expeInnerAmount",renderer:numRender};	
	
	var t11={header:C_PPCC,dataIndex:'pateCode',width:40,align:'center',
			editor:new Ext.form.ComboBox({displayField:'pateCode',
				valueField:'pateCode',
				triggerAction: 'all',
	            mode:'local',
	            selectOnFocus:true,
	            listClass:'x-combo-list-small',
	            store:getPATE_S(),
	            listeners:{scope:this,
	            	select:function(c,r,i){
	            		this.getSelectionModel().getSelected().set('pateId',r.get('pateId'));
	            	}
				}
			})
	};
	
    var t12={header:C_INVO_NO,align:'center',dataIndex:"expeInvoiceNo",renderer:frm.f=='C'?'':invoRender};
    
    var t13={header:C_TAX_NO,align:'center',dataIndex:"expeTaxInvoiceNo"};
    
    var t14={header:C_INVOICED_AMOUNT,renderer:numRender,dataIndex:"expeInvoiceAmount"};   
    
    var t15={header:C_WRITEOFFED_AMOUNT,renderer:numRender,dataIndex:"expeWriteOffAmount"};    
    
    var t16={header:C_REMARKS,width:100,dataIndex:"expeRemarks",align:'center',
    		editor:new Ext.form.TextField({enableKeyEvents:true,
    			listeners:{scope:this,
    				keydown:function(c,e){
    					k = e.getKey();
    					if(k == e.ENTER) 
    						this.add();
    				}
    			}
    		})
    };
    
    var t17={header:C_INVO_DATE,width:100,renderer:formatDate,dataIndex:"expeInvoiceDate"};
    
    var t18={header:C_WRITEOFF_DATE,renderer:formatDate,dataIndex:"expeWriteOffDate"};
    
    var t19={header:C_CREATE_TIME,renderer:formatDateTime,dataIndex:"createTime"};
    
    var t20={header:C_MODIFY_TIME,renderer:formatDateTime,dataIndex:"modifyTime"};
    
    var t21={header:C_COMMISION_RATE,width:80,dataIndex:"expeCommissionRate",renderer:numRender,
			editor:new Ext.form.NumberField({decimalPrecision:2,
				selectOnFocus:true,
				allowBlank:false,
				blankText:'',
				invalidText:''
			})
    };
	
    var t22={header:C_COMMISION,width:60,dataIndex:"expeCommission",renderer:numRender,
			editor:new Ext.form.NumberField({decimalPrecision:2,
				selectOnFocus:true,
				allowBlank:false,
				blankText:'',invalidText:''
			})
    };
    
	 var t23={header:C_CREATE_BY,renderer:getUSER,dataIndex:"createBy"};
	 var t24={header:C_MODIFY_BY,renderer:getUSER,dataIndex:"expeUpdateBy"};
	 var t25={header:C_BILL_BY,renderer:getUSER,dataIndex:"expeInvoiceBy"};
	 var t26={header:C_VOUC_BY,renderer:getUSER,dataIndex:"expeWriteOffBy"};
	 var t27={header:C_INVO_TITLE,dataIndex:'expeInvoiceTitle',align:'center',width:100,editor:new Ext.form.TextField()};
	 var t28={header:C_WHETHER_INVOICING,dataIndex:'expeInvoiceFlag',align:'center',width:100,renderer:getY_O_N,
	 		editor:new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',store:Y_O_N,triggerAction:'all',typeAhead:true,
            mode:'local',selectOnFocus:true,
            listeners:{scope:this,
            	select:function(c,r,i){
            		var b=this.getSelectionModel().getSelected();
            		b.set('expeInvoiceTitle',r.get('CODE')==1?b.get('custName'):'');
            	}
            }})};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cols=[];
	if(t=='R'){
		if(frm.f=='C')
			if(VERSION==1)
				cols=[sm,t1,t28,t27,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t23,t19,t24,t20,t25,t26];
			else 
				cols=[sm,t1,t28,t27,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t17,t23,t19,t24,t20,t25];
		else
			cols=[sm,t1,t28,t27,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t23,t19,t24,t20,t25,t26];
	}
	else{
		if(VERSION==1){
			cols=[sm,t1,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t23,t19,t24,t20,t25,t26];
		}
		else if(NR(m+F_CV)){
			if(frm.f=='C')
				cols=[sm,t1,t2,t3,t4,t5,t6,t21,t22,t9,t10,t11,t7,t16,t12,t13,t17,t19,t20,t25];
			else
				cols=[sm,t1,t2,t3,t4,t5,t6,t21,t22,t9,t10,t11,t7,t16,t12,t13,t14,t15,t17,t18,t19,t20,t25,t26];
		}
		else{
			cols=[sm,t1,t2,t3,t4,t5,t6,t21,t22,t8,t9,t10,t11,t7,t16,t12,t13,t14,t15,t17,t23,t19,t24,t20,t25];
		}
	}
	
	var cm = new Ext.grid.ColumnModel({columns:cols,defaults:{sortable:true,width:100,align:'center'}});
	cm.defaultSortable=true;
	cm.defaultWidth=100;
	
	this.add=function(){
		var unit='EACH';
		var rid=GGUID();
		var e = new SExpense({id:rid,
			expeId:rid,
			consId:p.get('consId'),
			consNo:p.get('consNo'),
			section:'CONS',
			consSailDate:p.get('consSailDate'),
			expeInvoiceTitle:p.get('custName'),
    		consMblNo:p.get('consMblNo'),
    		consHblNo:p.get('consHblNo'),
    		consVessel:p.get('vessName'),
    		consVoyage:p.get('voyaName'),
    		consBizClass:p.get('consBizClass'),
    		consBizType:p.get('consBizType'),
    		consShipType:p.get('consShipType'),
    		expeStatus:'0',
    		expeBillStatus:'0',
    		expeInvoiceStatus:'0',
    		expeWriteOffStatus:'0',
    		custId:t=='R'?p.get('custId'):p.get('consBookingAgency'),
    		custName:t=='R'?p.get('custName'):p.get('consBookingAgencyName'),
    		custSname:t=='R'?p.get('custSname'):p.get('consBookingAgencySname'),
    		consCustId:p.get('custId'),
    		consCustName:p.get('custName'),
    		expeType:expeType,
    		pateId:PPID,
    		pateCode:'P',
    		unitName:unit,
    		currCode:'CNY',
    		expeExRate:'1.0000',    		
    		expeDate:new Date(),
    		expeAllocationFlag:'0',
    		expeAllocatedFlag:'0',
    		expeInvoiceFlag:'1',
    		expeInvoiceAmount:'0',
    		expeWriteOffAmount:'0',
    		expeWriteOffRcAmount:'0',
    		expeInnerAmount:'0',
    		expeRcAmount:'0',
    		expeTotalAmount:'0',
    		expeCommission:0,
    		expeNum:'1',
    		version:'0'});
    	this.stopEditing();
    	store.insert(0,e);
    	e.set('rowAction','N');
    	sm.selectFirstRow();
    	this.startEditing(0, 1);
	};
	
	this.removeExp=function(){
		var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){
				if(r[i].get('expeInvoiceStatus')>0) 
					XMG.alert(SYS,M_REMOVE_EXP_INVOICED);
				else{
					r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
					store.remove(r[i]);
					this.reCalculate();
				}
			}
		}
		else 
			XMG.alert(SYS,M_R_P);
	};
	
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length){
			for(var i=0;i<a.length;i++){
				if(a[i].get('rowAction')!='R'&&a[i].get('rowAction')!='D'){
					if(a[i].get('custId')==''){
						XMG.alert(SYS,M_SETTLE_OBJECT_REQIRED);
						return;
					}
					else if(a[i].get('expeInvoiceFlag')==''&&a[i].get('expeType')=='R'){
						XMG.alert(SYS,C_INVOICE_FLAG_REQUIRED);
						return;
					}
					else if(a[i].get('charId')==''){
						XMG.alert(SYS,M_CHAR_REQIRED);
						return;
					}
					else if(a[i].get('expeNum')==''||a[i].get('expeNum')=='0'){
						XMG.alert(SYS,M_QUANTITY_REQIRED);
						return;
					}
					else if(a[i].get('expeUnitPrice')==''||a[i].get('expeUnitPrice')=='0'){
						XMG.alert(SYS,M_UNIT_PRICE_REQIRED);
						return;
					}
					else if(a[i].get('currCode')==''){
						XMG.alert(SYS,M_CURR_PRICE_REQIRED);
						return;
					}
					else if(a[i].get('pateId')==''){
						XMG.alert(SYS,M_PPCC_REQIRED);
						return;
					}
				}
			}
			var x = ATX(a,'SExpense',SExpense);
			if(x!=''){								
				var tb=this.getTopToolbar();
				tb.getComponent('TB_C').setDisabled(true);
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXPE_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'SExpense',SExpense);
						FOSU(store,a,SExpense);
						XMG.alert(SYS,M_S);
						tb.getComponent('TB_C').setDisabled(false);
					},
					failure: function(res){
						XMG.alert(SYS,M_F+res.responseText);
						tb.getComponent('TB_C').setDisabled(false);
					},
					xmlData:FOSX(x)
				});
			}
		}
		else XMG.alert(SYS,M_NC);
	};
	
	//复制一条费用
	this.cp=function(){
		var r = sm.getSelected();
		if(r){
			var e = new SExpense({});var id=GGUID();
			var f = SExpense.prototype.fields;
			for (var i=0;i<f.keys.length;i++){
				var fn=''+f.keys[i];
				e.set(fn,r.get(fn));
			}
			e.set('expeDate',new Date());
			e.set('id',id);e.set('expeId',id);
			e.set('version','1');
			e.set('expeInvoiceNo','');
			e.set('expeInvoiceDate','');
			e.set('expeUnitPrice','');
			e.set('expeNum','');
			e.set('expeNum2','');
			e.set('expeInnerPrice','');
			e.set('expeInnerAmount','');
			e.set('expeTotalAmount','');
			e.set('expeCommission',0);
			e.set('expeCommissionRate','');
			e.set('expeRcAmount','');
			e.set('expeWriteOffDate','');
			e.set('expeInvoiceFlag',1);
			e.set('expeInvoiceAmount',0);
			e.set('expeWriteOffAmount',0);
			e.set('expeWriteOffRcAmount',0);
			e.set('expeStatus',0);
			e.set('expeBillStatus',0);
			e.set('expeInvoiceStatus',0);
			e.set('expeWriteoffStatus',0);
			e.set('expeAllocationFlag',0);
			e.set('expeAllocatedFlag',0);
			e.set('consIdM','');
			e.set('consNoM','');
			this.stopEditing();
			store.insert(0,e);
			e.set('rowAction','N');
			this.startEditing(0,1);
			this.reCalculate();
		}
		else 
			XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	//复制选中的应收到应付，或者复制选中的应付到应收
	this.cpTo=function(){
		var ea = sm.getSelections();
		if(ea.length>0){			
			for(var i=0;i<ea.length;i++){
				var r = ea[i];
				var id=GGUID();
				var e = new SExpense({id:id,expeId:id});
				
				var f = SExpense.prototype.fields;
				for (var j=0;j<f.keys.length;j++){
					var fn=''+f.keys[j];
					e.set(fn,r.get(fn));
				}				
				e.set('expeType',t=='R'?'P':'R');						
				e.set('custId',t=='P'?p.get('custId'):'');
				e.set('custName',t=='P'?p.get('custName'):'');
				e.set('custSname',t=='P'?p.get('custSname'):'');
				e.set('consCustId',e.get('custId'));
				e.set('consCustName',e.get('custName'));			    		
				e.set('expeDate',new Date());e.set('id',id);e.set('expeId',id);
				e.set('version','1');e.set('expeInvoiceNo','');e.set('expeInvoiceDate','');
				e.set('expeUnitPrice','');e.set('expeInvoiceFlag',1);
				e.set('expeInnerPrice','');e.set('expeInnerAmount','');e.set('expeTotalAmount','');
				e.set('expeCommission',0);e.set('expeCommissionRate','');e.set('expeRcAmount','');
				e.set('expeWriteOffDate','');
				e.set('expeInvoiceAmount',0);e.set('expeWriteOffAmount',0);
				e.set('expeWriteOffRcAmount',0);e.set('expeStatus',0);e.set('expeBillStatus',0);e.set('expeInvoiceStatus',0);
				e.set('expeWriteoffStatus',0);e.set('expeAllocationFlag',0);e.set('expeAllocatedFlag',0);
				e.set('consIdM','');e.set('consNoM','');								
				if(t=='R')
					frm.ps.add(e);
				else
					frm.rs.add(e);
			}
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	this.copyFrom=function(){
		var win = new Fos.ExCopyWin(t);
		win.addButton({text:C_OK,scope:this,handler:function(){
			var g = win.findById('G_EXP_COPY_FROM');
			var a = g.getSelectionModel().getSelections();
			if(a){
				for(var i=0;i<a.length;i++){
					var r = a[i];
					var rid=GGUID();
					var e = new SExpense({id:rid,
						expeId:rid,
						consId:p.get('consId'),
						consNo:p.get('consNo'),
						consSailDate:p.get('consSailDate'),
			    		consMblNo:p.get('consMblNo'),
			    		consHblNo:p.get('consHblNo'),
			    		consVessel:p.get('vessName'),
			    		consVoyage:p.get('voyaName'),
			    		consBizClass:p.get('consBizClass'),
			    		consBizType:p.get('consBizType'),
			    		consShipType:p.get('consShipType'),
			    		expeStatus:'0',expeBillStatus:'0',
			    		expeInvoiceStatus:'0',
			    		expeWriteOffStatus:'0',
			    		custId:r.get('custId'),
			    		custName:r.get('custName'),
			    		custSname:r.get('custSname'),
			    		consCustId:p.get('custId'),
			    		consCustName:p.get('custName'),
			    		chclId:r.get('chclId'),
			    		charId:r.get('charId'),
			    		charName:r.get('charName'),
			    		expeType:t,
			    		pateId:r.get('pateId'),
			    		pateCode:r.get('pateCode'),
			    		unitName:r.get('unitName'),
			    		currCode:r.get('currCode'),
			    		expeUnitPrice:r.get('expeUnitPrice'),
			    		expeCommissionRate:r.get('expeCommissionRate'),
			    		expeCommission:r.get('expeCommission'),
			    		expeInnerPrice:r.get('expeInnerPrice'),
			    		expeExRate:r.get('expeExRate'),
			    		expeRemarks:'',
			    		expeDate:new Date(),
			    		expeAllocationFlag:'0',
			    		expeAllocatedFlag:'0',
			    		expeInvoiceAmount:'0',
			    		expeWriteOffAmount:'0',
			    		expeWriteOffRcAmount:'0',
			    		expeInvoiceFlag:'1',
			    		expeInnerAmount:'0',
			    		expeRcAmount:'0',
			    		expeTotalAmount:r.get('expeTotalAmount'),
			    		expeNum:r.get('expeNum'),
			    		version:'0',
			    		rowAction:'N'});
					store.add(e);
				};
				this.reCalculate();
			}
			win.close();
		}},this);
		win.addButton({text:C_CANCEL,handler : function(){win.close();}},this);
		
		win.show();
	};
	
	this.allocate=function(){
		var a = sm.getSelections();
		if(a.length){			
			var s=GS('EXPE_Q','SExpense',SExpense,'expeId','DESC','','','',false);
			for(var i=0;i<a.length;i++){
				s.add(a);
			}
			var win = new Fos.ExalWin(s,p);			
			win.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	var locked=p.get('consStatusExp')==1||p.get('consStatusAud')!=0;
	
	//导出费用确认单
	this.expConfirm=function(){
		var a = sm.getSelections();
		var expeIds = '';
		if(a.length){
			for(var i=0;i<a.length;i++){
				expeIds += a[i].get('expeId');
				if(i<a.length-1)
					expeIds += ',';
			}
			EXPC('EXPE_CONFIRM','&expeIds='+expeIds+'&consId='+p.get('consId'));
		}
		else
			EXPC('EXPE_CONFIRM','&expeType='+t+'&consId='+p.get('consId'));
	};
	
	//导出费用结算单
	this.expCheck=function(){
		EXPC('EXPE_SETTLEMENT','&aggressive=1&consId='+p.get('consId'));
	};
	
	//生成应收费用账单
	this.genInvoice=function(){
    	var a = sm.getSelections();
    	if(a.length>0){
    		var custId = a[0].get('custId');
			var custName = a[0].get('custName');
			var custSname = a[0].get('custSname');
			var invoTitle = a[0].get('custName');
			
    		for(var j=0;j < a.length;j++){
    			if(a[j].get('rowAction')=='N'){
    				XMG.alert(SYS,M_SAVE_FIRST);
    				return;
    			}
    			else if(a[j].get('expeInvoiceNo').length>0){
    				XMG.alert(SYS,C_INVOCIE_NO_EXISTED);
    				return;
    			}
    			else if(custId!=a[j].get('custId')){
    				XMG.alert(SYS,C_SETTLE_OBJECT_DIFFERENT);
    				return
    			}
    		}
    		
    		var currCode='CNY';
    		for(var i=0;i<a.lenth;i++){
    			if(a[i].get('currCode')!=currCode){
    				currCode = a[i].get('currCode');
    				break;
    			}
    		}
    		if(currCode != a[0].get('currCode')){
    			var w=new Fos.CurrencyWin();
        		w.addButton({text:C_OK,scope:this,handler:function(){
        			currCode = w.findById('currCode').getValue();
        			w.close();
        			var id=GGUID();
        			var e = new SInvoice({invoId:id,
        				id:id,
        				invoNo:'N'+id,
        				custId:custId,
        				custName:custName,
        				custSname:custSname,
        				invoTitle:invoTitle,
        				currCode:currCode,
        				invoType:'R',
        				invoDate:new Date(),
        				invoExRate:getExRate(currCode,'CNY'),
        				invoWriteOffStatus:'0',
        				invoPrFlag:'0',
        				invoUploadFlag:'0',
        				invoStatus:'0',
        				version:'0',
        				rowAction:'N'});
        			var tab = T_MAIN.add(new Fos.InvoiceTab(e,'',a));
        			T_MAIN.setActiveTab(tab);
        		}},this);
        		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
        		w.show();
    		}
    		else{
    			var id=GGUID();
    			var e = new SInvoice({invoId:id,
    				id:id,
    				invoNo:'N'+id,
    				custId:custId,
    				custName:custName,
    				custSname:custSname,
    				invoTitle:invoTitle,
    				currCode:currCode,
    				invoType:'R',
    				invoDate:new Date(),
    				invoExRate:getExRate(currCode,'CNY'),
    				invoWriteOffStatus:'0',
    				invoPrFlag:'0',
    				invoUploadFlag:'0',
    				invoStatus:'0',
    				version:'0',
    				rowAction:'N'});
    			var tab = T_MAIN.add(new Fos.InvoiceTab(e,'',a));
    			T_MAIN.setActiveTab(tab);
    		}
    	}
    	else{
    		XMG.alert(SYS,M_NO_DATA_SELECTED);
    	}
    };   

		
	var b1={itemId:'TB_A',text:C_ADD,iconCls:'add',disabled:NR(m+F_M)||locked,scope:this,handler:this.add};
	var b2={itemId:'TB_B',text:C_REMOVE,iconCls:'remove',disabled:NR(m+F_R)||locked,scope:this,handler:this.removeExp};
	var b3={itemId:'TB_C',text:C_SAVE,iconCls:'save',disabled:NR(m+F_M)||locked,scope:this,handler:this.save};
	var b4={itemId:'TB_D',text:C_COPY_FROM,iconCls:'copy',disabled:NR(m+F_M)||locked,scope:this,handler:this.cp};
    var b5={text:C_EXPORT,iconCls:'print',disabled:NR(m+F_M)||locked,scope:this,menu: {items: [
           {text:C_EXPE_CONFIRM,scope:this,handler:this.expConfirm}, 
           {text:C_EXPE_CHECK,scope:this,handler:this.expCheck}]}};
    var b6={itemId:'TB_F'+'F',text:C_ALLOCATION,iconCls:'broken',disabled:NR(m+F_M)||locked,scope:this,handler:this.allocate};
    
    var b7={itemId:'TB_CF',text:C_COPY_FROM_OT,iconCls:'copy',disabled:NR(m+F_M)||locked,scope:this,handler:this.copyFrom};
    var b8={itemId:'TB_CT',text:t=='R'?C_COPY_TO_P:C_COPY_TO_R,iconCls:'copy',disabled:NR(m+F_M)||locked,scope:this,handler:this.cpTo};
    var b9={itemId:'TB_I',text:C_GEN_INVOICE,iconCls:'save',scope:this,handler:this.genInvoice};
    
    this.updateTB=function(){
		var tb=this.getTopToolbar();
		var locked=p.get('consStatusExp')==1||p.get('consStatusAud')!=0;
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(m+F_R)||locked);
    	if(tb.getComponent('TB_C')) tb.getComponent('TB_C').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_D')) tb.getComponent('TB_D').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_CF')) tb.getComponent('TB_CF').setDisabled(NR(m+F_M)||locked);
	};
	 
	var topBar = [];
	if(expeType == 'R'){
		topBar = [b1, '-',b2,'-',b3,'-',b4,'-',b8,'-',b7,'-',b9,'-',b5];
	}
	else if(expeType == 'P'){
		topBar = [b1, '-',b2,'-',b3,'-',b4,'-',b8,'-',b7,'-',b6,'-',b5];
	}
	else if (expeType == 'D'){
		topBar = [b1,'-',b2,'-',b3];
	}
	
	Fos.ExGrid.superclass.constructor.call(this, {id:'G_EXOE_'+p.get('consNo')+t,
	border:true,autoScroll:true,clicksToEdit:1,height:200,
    stripeRows:true,store:store,sm:sm,cm:cm,listeners:{scope:this,
		beforeedit:function(e){
			e.cancel = e.record.get('editable')==0||e.record.get('expeStatus')>0||e.record.get('expeInvoiceStatus')>0||e.record.get('expeWriteOffStatus')>0;
		},
    	afteredit:function(e){
    		var f=e.field;
    		var r=e.record;
	    	if(f=='expeNum'){
	    		r.set('expeNum',e.value);
	    		r.set('expeTotalAmount',round2(e.value*r.get('expeUnitPrice')-r.get('expeCommission')));
	    		r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*e.value-r.get('expeCommission')));
	    		r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
	    		this.reCalculate();}
	    	if(f=='unitName'){
	            r.set('expeTotalAmount',round2(r.get('expeNum')*r.get('expeUnitPrice')-r.get('expeCommission')));
	    		r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-r.get('expeCommission')));
	    		r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
	    		this.reCalculate();}
			else if(f=='expeUnitPrice'){
				r.set('expeTotalAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
				r.set('expeInnerPrice',e.value);
				r.set('expeInnerAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
				r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
				this.reCalculate();}
			else if(f=='expeInnerPrice'){
				r.set('expeInnerAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
				this.reCalculate();}
			else if(f=='currCode'){
				r.set('expeExRate',getExRate(e.value,'CNY'));
				r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
				this.reCalculate();}
			else if(f=='expeCommission'){
				r.set('expeTotalAmount',round2(r.get('expeUnitPrice')*r.get('expeNum')-e.value));
				r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-e.value));
				r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
				this.reCalculate();}
			else if(f=='expeCommissionRate'){
				r.set('expeCommission',round2(r.get('expeTotalAmount')*e.value/100));			
				r.set('expeTotalAmount',round2(r.get('expeUnitPrice')*r.get('expeNum')-r.get('expeCommission')));
				r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-r.get('expeCommission')));
				r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
				this.reCalculate();
			}
	    }
	},
    tbar:topBar});
};
Ext.extend(Fos.ExGrid, Ext.grid.EditorGridPanel);

Fos.ExCopyWin = function(t) {
	var store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.search = function(){		
		store.load({params:{expeType:t,consNo:txtNo.getValue()}});
	};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[sm,
	       {header:C_SETTLE_OBJECT,width:200,dataIndex:"custSname",align:'left'},
	       {header:C_CHAR,width:80,dataIndex:"charName",align:'center'},
	       {header:C_UNIT,width:60,dataIndex:"unitName",align:'center'},
	       {header:C_QUANTITY,width:60,dataIndex:"expeNum",renderer:rateRender},
	       {header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice",renderer:rateRender},
	       {header:C_CURR,dataIndex:'currCode',width:50,align:'center'},
	       {header:C_EX_RATE,width:60,dataIndex:"expeExRate",renderer:rateRender},
	       {header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",renderer:numRender}	       
	    ],
		defaults:{sortable:true,width:100,align:'right'}});
	cm.defaultSortable=true;cm.defaultWidth=100;			
	
	var txtNo = new Ext.form.TextField({});
	
    var grid = new Ext.grid.GridPanel({id:'G_EXP_COPY_FROM',stripeRows:true,store:store,sm:sm,cm:cm,
    	tbar:[{xtype:'tbtext',text:C_CONS_NO},
    	      txtNo,
    	      {text:C_SEARCH,iconCls:'search',scope:this,handler:this.search}]});
    
    Fos.ExCopyWin.superclass.constructor.call(this, {title:C_COPY_EXPENSE,modal:true,width:800,
        height:400,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:grid});
};
Ext.extend(Fos.ExCopyWin,Ext.Window);


Fos.ExpenseTab = function(p,f){
	this.f=f;
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	if(this.f=='C') 
		m=m+M3_EXPE; 
	else 
		m=M1_S+S_EXPE;	
	
	var c1={fieldLabel:C_BOOKER,name:'custName',value:p.get('custName'),xtype:'textfield',anchor:'95%'};
	var c2={fieldLabel:C_CARRIER,name:'consCarrier',value:p.get('consCarrierName'),xtype:'textfield',anchor:'95%'};
	var c3={fieldLabel:C_POL,name:'consPol',value:p.get('consPolEn'),xtype:'textfield',anchor:'95%'};
	var c4={fieldLabel:C_CONT_NUM,name:'consContainersInfo',value:p.get('consContainersInfo'),xtype:'textfield',anchor:'95%'};
	var c5={fieldLabel:p.get('consBizClass')==BC_E?C_SAIL_DATE:C_ETA,name:'consSailDate',value:p.get('consSailDate'),xtype:'datefield',format:DATEF,anchor:'95%'};
	var c6={fieldLabel:C_TTER,tabIndex:17,name:'tranId',value:p.get('tranId'),store:getTRAN_S(),xtype:'combo',displayField:'tranCode',valueField:'tranId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
	var c7={fieldLabel:C_ACCOUNT,name:'custSname',value:p.get('custSname'),xtype:'textfield',anchor:'95%'};
	
	var b1={fieldLabel:C_CONS_NO,name:'consNo',disabled:true,value:p.get("consNo"),xtype:'textfield',anchor:'95%'};
	var b2={fieldLabel:C_BOOK_AGENCY,name:'consBookingAgencyName',value:p.get('consBookingAgencyName'),xtype:'textfield',anchor:'95%'};
	var b3={fieldLabel:C_POD,name:'consPod',value:p.get('consPodEn'),xtype:'textfield',anchor:'95%'};
	var b4={fieldLabel:C_PACKAGES,name:'consTotalPackages',value:p.get('consTotalPackages'),xtype:'textfield',anchor:'95%'};
	var b5={fieldLabel:C_OPERATOR,name:'consOperatorId',value:getUSER(p.get('consOperatorId')),xtype:'textfield',anchor:'95%'};
	var b6={fieldLabel:C_PATE,tabIndex:15,name:'pateId',value:p.get('pateId'),store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'};
	var pBiz={width:Ext.isIE?document.body.clientWidth-240:'auto',layout:'column',title:C_BIZ_INFO,layoutConfig:{columns:4},deferredRender:true,collapsible:true,items:[
			{columnWidth:.25,layout:'form',border:false,labelWidth:60,
                items:p.get('consBizClass')==BC_E?[c1,c7,c2,c3,c4,c5]:[c1,c7,c3,c4,c5]},
            {columnWidth:.25,layout:'form',border:false,labelWidth:60,
                items:p.get('consBizClass')==BC_E?[b1,b2,b3,b4,b5,b6]:[b1,b3,b4,b5,b6]},
            {columnWidth:.25,layout: 'form',border : false,labelWidth:70,items: [
                {fieldLabel:C_CONS_DATE,name:'consDate',value:p.get('consDate'),xtype:'datefield',format:DATEF,anchor:'95%'},
                {fieldLabel:C_VESS,name:'vessName',value:p.get('vessName'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_MBL_NO,name:'consMblNo',value:p.get('consMblNo'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_GW+(p.get('consBizType')==BT_B?C_MT:C_KGS),name:'consTotalGrossWeight',value:p.get('consTotalGrossWeight'),xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_SALES,name:'consSalesRepId',value:getUSER(p.get('consSalesRepId')),xtype:'textfield',anchor:'95%'},
				{fieldLabel:C_REF_NO,name:'consRefNo',value:p.get('consRefNo'),xtype:'textfield',anchor:'95%'}]},
            {columnWidth:.25,layout: 'form',border : false,labelWidth:70,items:[
                {fieldLabel:C_STATUS,name:'consStatus',value:p.get('consBizClass')==BC_E?getCOST(p.get('consStatus')):getCIST(p.get('consStatus')),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_VOYA,name:'voyaName',value:p.get('voyaName'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_HBL_NO,name:'consHblNo',value:p.get('consHblNo'),xtype:'textfield',anchor:'95%'},
                {fieldLabel:C_CBM,name:'consTotalMeasurement',value:p.get('consTotalMeasurement'),xtype:'textfield',anchor:'95%'},
                c6,
                {fieldLabel:C_REMARKS,name:'consRemarks',value:p.get('consRemarks'),xtype:'textfield',anchor:'95%'}]}
			]};
			
	var PCny = new Ext.form.TextField({width:80,disabled:true});
	var PUsd = new Ext.form.TextField({width:80,disabled:true});
	var PLoc = new Ext.form.TextField({width:80,disabled:true});
	var PRc = new Ext.form.TextField({width:80,disabled:true});
	
	this.store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	var cT={xtype:'tbtext',text:C_SUM_CNY_C};
	var uT={xtype:'tbtext',text:C_SUM_USD_C};
	var lT={xtype:'tbtext',text:C_SUM_LOC_C};	
	var rT={xtype:'tbtext',text:C_SUM_RC};
	
	var sumCnyR = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdR = new Ext.form.TextField({width:80,disabled:true});
	var sumLocR = new Ext.form.TextField({width:80,disabled:true});
	var sumRcR = new Ext.form.TextField({width:80,disabled:true});
	
	this.sumCnyR=0;this.sumUsdR=0;this.sumLocR=0;this.sumRcR=0;
	this.rs=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcR=function(){
		var d=this.rs.getRange();
		this.sumCnyR=0;this.sumUsdR=0;this.sumLocR=0;this.sumRcR=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyR+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdR+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocR+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));			
			this.sumRcR+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		}
		sumCnyR.setValue(round2(this.sumCnyR));
		sumUsdR.setValue(round2(this.sumUsdR));
		sumLocR.setValue(round2(this.sumLocR));
		sumRcR.setValue(round2(this.sumRcR));
	};
	this.rg=new Fos.ExGrid(p,'R',this,this.rs);
	var pR=new Ext.Panel({width:Ext.isIE?document.body.clientWidth-240:'auto',layout:'fit',
			title:C_EXPE_R,collapsible:true,autoscroll:true,border:false,items:[this.rg],
		bbar:[cT,sumCnyR,'-',uT,sumUsdR,'-',lT,sumLocR,'-',rT,sumRcR]
	});		
	var sumCnyP = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdP = new Ext.form.TextField({width:80,disabled:true});
	var sumLocP = new Ext.form.TextField({width:80,disabled:true});
	var sumRcP = new Ext.form.TextField({width:80,disabled:true});
	
	this.sumCnyP=0;this.sumUsdP=0;this.sumLocP=0;this.sumRcP=0;
	this.ps=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcP=function(){
		var d=this.ps.getRange();
		this.sumCnyP=0;this.sumUsdP=0;this.sumLocP=0;this.sumRcP=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyP+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdP+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocP+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumRcP+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		};
		sumCnyP.setValue(round2(this.sumCnyP));
		sumUsdP.setValue(round2(this.sumUsdP));
		sumLocP.setValue(round2(this.sumLocP));
		sumRcP.setValue(round2(this.sumRcP));
	};
	this.pg=new Fos.ExGrid(p,'P',this,this.ps);
	var pP=new Ext.Panel({width:Ext.isIE?document.body.clientWidth-240:'auto',layout:'fit',
		title:C_EXPE_P,collapsible:true,border:false,items:[this.pg],
		bbar:[cT,sumCnyP,'-',uT,sumUsdP,'-',lT,sumLocP,'-',rT,sumRcP]
	});
	
	this.ds=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.dg=new Fos.ExGrid(p,'D',this,this.ds);
	var pD=new Ext.Panel({width:Ext.isIE?800:'auto',layout:'fit',title:C_EXPE_D,collapsible:true,border:false,items:[this.dg]
	});	
	this.reCalculate = function(){		
		PCny.setValue(round2(this.sumCnyR-this.sumCnyP));
		PUsd.setValue(round2(this.sumUsdR-this.sumUsdP));
		PLoc.setValue(round2(this.sumLocR-this.sumLocP));
		PRc.setValue(round2(this.sumRcR-this.sumRcP));		
	};
	
	if(p.get('rowAction')!='N')
		this.store.load({params:{consId:p.get('consId')},callback:function(){
			var a=this.store.getRange();			
			for(var i=0;i<a.length;i++){
				if(a[i].get('expeType')=='R'){
					if(!NR(m+S_AR+F_V))
						this.rs.add(a[i]);
				}
				else if(a[i].get('expeType')=='P'){
				 	if(!NR(m+S_AP+F_V))
						this.ps.add(a[i]);
				}else if(!NR(m+S_AP+F_V)){
						this.ds.add(a[i]);
				}
			}
			this.calcR();
			this.calcP();
			this.reCalculate();			
		},scope:this});
	
	this.UN=new Ext.data.SimpleStore({id:0,fields:['U','N'],data:getUN(p)});	
	
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatusExp:s},
			success: function(r){
				p.beginEdit();
				p.set('consStatusExp',s);
				p.set('version',p.get('version')+1);
				p.endEdit();
			this.updateTB();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
	};
	this.check=function(){this.updateStatus('1');};
	this.unCheck=function(){this.updateStatus('0');};
	this.updateTB=function(){
		var tb=this.getTopToolbar();
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(M1_S+S_EXPE+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(M1_S+S_EXPE+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0);
    	this.rg.updateTB();this.pg.updateTB();
	};	
	this.reSize=function(){
		var bR=pR.collapsed;
		var bP=pP.collapsed;
		if(bR){
			if(!bP) this.pg.setHeight(400);
		}
		else if(bP){
			if(!bR) 
			this.rg.setHeight(400);
		}
		else{this.rg.setHeight(250);this.pg.setHeight(250);}
	};
		
	var tb1={itemId:'TB_A',text:C_EXPE_AUDIT,disabled:NR(m+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0,iconCls:'check',scope:this,handler:this.check};
	var tb2={itemId:'TB_B',text:C_EXPE_UNCHECK,disabled:NR(m+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0,iconCls:'renew',scope:this,handler:this.unCheck};
	var tb3={xtype:'tbtext',text:C_PROFIT_CNY};
	var tb4={xtype:'tbtext',text:C_PROFIT_USD};
	var tb5={xtype:'tbtext',text:C_PROFIT_LOC};
	var tb7={xtype:'tbtext',text:C_PROFIT_RC};	
	
	Fos.ExpenseTab.superclass.constructor.call(this, { 
		id:"T_EXPE_"+p.get('id'),title:C_EXPE+(f=='C'||f=='T'?'(F3)':('-'+p.get("consNo"))),
		header:false,
		autoScroll:true,
		closable:f=='C'||f=='T'?false:true,
		height:900,
		labelAlign:'right',
		bodyStyle:'padding:0px 0px 0px',
		border:true,
		items: f=='T'?[pR,pP]:[pBiz,pR,pP,pD],
		tbar:[tb1,'-',tb2,'-',tb3,PCny,'-',tb4,PUsd,'-',tb5,PLoc,'-','-',tb7,PRc]
	});
};
Ext.extend(Fos.ExpenseTab, Ext.Panel);

Fos.ExWin = function(p) {
	this.f='C';
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	m=m+M3_EXPE;
	
	var PCny = new Ext.form.TextField({width:80,disabled:true});
	var PUsd = new Ext.form.TextField({width:80,disabled:true});
	var PLoc = new Ext.form.TextField({width:80,disabled:true});
	var PRc = new Ext.form.TextField({width:80,disabled:true});
	
	this.store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	var cT={xtype:'tbtext',text:C_SUM_CNY_C};
	var uT={xtype:'tbtext',text:C_SUM_USD_C};
	var lT={xtype:'tbtext',text:C_SUM_LOC_C};	
	var rT={xtype:'tbtext',text:C_SUM_RC};
	
	var sumCnyR = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdR = new Ext.form.TextField({width:80,disabled:true});
	var sumLocR = new Ext.form.TextField({width:80,disabled:true});
	var sumRcR = new Ext.form.TextField({width:80,disabled:true});
	
	this.sumCnyR=0;this.sumUsdR=0;this.sumLocR=0;this.sumRcR=0;
	this.rs=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcR=function(){
		var d=this.rs.getRange();
		this.sumCnyR=0;this.sumUsdR=0;this.sumLocR=0;this.sumRcR=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyR+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdR+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocR+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));			
			this.sumRcR+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		}
		sumCnyR.setValue(round2(this.sumCnyR));
		sumUsdR.setValue(round2(this.sumUsdR));
		sumLocR.setValue(round2(this.sumLocR));
		sumRcR.setValue(round2(this.sumRcR));
	};
	this.rg=new Fos.ExGrid(p,'R',this,this.rs);
	var pR=new Ext.Panel({width:Ext.isIE?document.body.clientWidth-240:'auto',layout:'fit',
			title:C_EXPE_R,collapsible:true,autoscroll:true,border:false,items:[this.rg],
		bbar:[cT,sumCnyR,'-',uT,sumUsdR,'-',lT,sumLocR,'-',rT,sumRcR]
	});		
	var sumCnyP = new Ext.form.TextField({width:80,disabled:true});
	var sumUsdP = new Ext.form.TextField({width:80,disabled:true});
	var sumLocP = new Ext.form.TextField({width:80,disabled:true});
	var sumRcP = new Ext.form.TextField({width:80,disabled:true});
	
	this.sumCnyP=0;this.sumUsdP=0;this.sumLocP=0;this.sumRcP=0;
	this.ps=GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	this.calcP=function(){
		var d=this.ps.getRange();
		this.sumCnyP=0;this.sumUsdP=0;this.sumLocP=0;this.sumRcP=0;
		for(var i=0;i<d.length;i++){
			if(d[i].get('currCode')=='CNY')
				this.sumCnyP+=parseFloat(d[i].get('expeTotalAmount'));
			else if(d[i].get('currCode')=='USD')
				this.sumUsdP+=parseFloat(d[i].get('expeTotalAmount'));
			this.sumLocP+=parseFloat(d[i].get('expeTotalAmount')*d[i].get('expeExRate'));
			this.sumRcP+=parseFloat(d[i].get('expeWriteOffRcAmount'));
		};
		sumCnyP.setValue(round2(this.sumCnyP));
		sumUsdP.setValue(round2(this.sumUsdP));
		sumLocP.setValue(round2(this.sumLocP));
		sumRcP.setValue(round2(this.sumRcP));
	};
	this.pg=new Fos.ExGrid(p,'P',this,this.ps);
	var pP=new Ext.Panel({width:Ext.isIE?document.body.clientWidth-240:'auto',layout:'fit',
		title:C_EXPE_P,collapsible:true,border:false,items:[this.pg],
		bbar:[cT,sumCnyP,'-',uT,sumUsdP,'-',lT,sumLocP,'-',rT,sumRcP]
	});
	
	this.reCalculate = function(){		
		PCny.setValue(round2(this.sumCnyR-this.sumCnyP));
		PUsd.setValue(round2(this.sumUsdR-this.sumUsdP));
		PLoc.setValue(round2(this.sumLocR-this.sumLocP));
		PRc.setValue(round2(this.sumRcR-this.sumRcP));		
	};
	
	if(p.get('rowAction')!='N')
		this.store.load({params:{consId:p.get('consId')},callback:function(){
			var a=this.store.getRange();			
			for(var i=0;i<a.length;i++){
				if(a[i].get('expeType')=='R'){
					if(!NR(m+S_AR+F_V))
						this.rs.add(a[i]);
				}
				else if(!NR(m+S_AP+F_V))
					this.ps.add(a[i]);
			}
			this.calcR();
			this.calcP();
			this.reCalculate();			
		},scope:this});
	
	this.UN=new Ext.data.SimpleStore({id:0,fields:['U','N'],data:getUN(p)});	
	
	this.updateStatus=function(s){
		Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'CONS_U',consId:p.get('consId'),consStatusExp:s},
			success: function(r){
				p.beginEdit();
				p.set('consStatusExp',s);
				p.set('version',p.get('version')+1);
				p.endEdit();
			this.updateTB();XMG.alert(SYS,M_S);},
			failure: function(r){XMG.alert(SYS,M_F+r.responseText);}});
	};
	this.check=function(){this.updateStatus('1');};
	this.unCheck=function(){this.updateStatus('0');};
	this.updateTB=function(){
		var tb=this.getTopToolbar();
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(M1_S+S_EXPE+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(M1_S+S_EXPE+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0);
    	this.rg.updateTB();this.pg.updateTB();
	};	
	
	var tb1={itemId:'TB_A',text:C_EXPE_AUDIT,disabled:NR(m+F_E)||p.get('consStatusExp')==1||p.get('consStatusAud')!=0,iconCls:'check',scope:this,handler:this.check};
	var tb2={itemId:'TB_B',text:C_EXPE_UNCHECK,disabled:NR(m+F_E)||p.get('consStatusAud')!=0||p.get('consStatusExp')==0,iconCls:'renew',scope:this,handler:this.unCheck};
	var tb3={xtype:'tbtext',text:C_PROFIT_CNY};
	var tb4={xtype:'tbtext',text:C_PROFIT_USD};
	var tb5={xtype:'tbtext',text:C_PROFIT_LOC};
	var tb7={xtype:'tbtext',text:C_PROFIT_RC};	
	
	var panel = new Ext.Panel({
		id:"T_EXPE_"+p.get('id'),title:p.get("consNo")+C_EXPE,header:false,autoScroll:true,
				labelAlign:'right',bodyStyle:'padding:0px 0px 0px',border:true,
				items: [pR,pP],
				tbar:[tb1,'-',tb2,'-',tb3,PCny,'-',tb4,PUsd,'-',tb5,PLoc,'-','-',tb7,PRc]
	});
    Fos.ExWin.superclass.constructor.call(this, {title:p.get('consNo')+C_EXPE,modal:true,width:900,
        height:565,layout:'fit',plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',items:panel});
};
Ext.extend(Fos.ExWin,Ext.Window);

//费用分摊
Fos.ExalWin = function(store,p) {
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm=new Ext.grid.ColumnModel({columns:[
			{header:C_CONS_NO,width:120,dataIndex:"consNo",renderer:consRender},
          {header:C_SETTLE_OBJECT,width:120,dataIndex:"custSname"},
          {header:C_CHAR,dataIndex:"charName"},
          {header:C_UNIT,dataIndex:"unitName"},
          {header:C_QUANTITY,dataIndex:"expeNum",align:'right',renderer:rateRender},
          {header:C_UNIT_PRICE,dataIndex:"expeUnitPrice",align:'right',renderer:rateRender},
          {header:C_CURR,dataIndex:'currCode'},
          {header:C_EX_RATE,dataIndex:"expeExRate",align:'right',renderer:rateRender},
          {header:C_AMOUNT,dataIndex:"expeTotalAmount",align:'right',renderer:numRender},
          {header:C_COST_PRICE,dataIndex:"expeInnerPrice",align:'right',renderer:numRender},
          {header:C_COST_TOTAL,dataIndex:"expeInnerAmount",align:'right',renderer:numRender},
          {header:C_PPCC,dataIndex:'pateCode',width:40},
          {header:C_COMMISION_RATE,dataIndex:"expeCommissionRate",align:'right',renderer:rateRender},
          {header:C_COMMISION,dataIndex:"expeCommission",align:'right',renderer:numRender}],defaults:{sortable:true,width:80}});
	var expeGrid = new Ext.grid.GridPanel({region:'north',split:true,collapsible:true,title:C_EXPE_FOR_ALLOCATION,border:true,height:100,
		autoScroll:true,store:store,sm:sm,cm:cm});
	var consS = new Ext.data.Store({url: SERVICE_URL+'?A=CONS_X',baseParams:{mt:'JSON'},
    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FConsign'}, FConsign)});
	var sm2=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm2=new Ext.grid.ColumnModel({columns:[sm,
 		{header:C_CONS_NO,width:120,dataIndex:"consNo",renderer:consRender},
 		{header:C_BOOKER,width:200,dataIndex:"custSname"},
 		{header:C_CONS_DATE,dataIndex:"consDate",renderer:formatDate},	
 		{header:C_PACKAGES,width:60,dataIndex:"consTotalPackages",align:'right',css:'font-weight:bold;'},
 		{header:C_GW,dataIndex:"consTotalGrossWeight",align:'right',css:'font-weight:bold;'},
 		{header:C_CBM,dataIndex:"consTotalMeasurement",align:'right',css:'font-weight:bold;'},
 		{header:C_VESS,dataIndex:"vessName"},
 		{header:C_VOYA,dataIndex:"voyaName"},
 		{header:C_MBL_NO,dataIndex:"consMblNo"},
 		{header:C_HBL_NO,dataIndex:"consHblNo"},
 		{header:C_SAIL_DATE,dataIndex:"consShipDate",renderer:formatDate},	
 		{header:C_POL,width:100,dataIndex:"consPolEn"},
 		{header:C_POD,width:100,dataIndex:"consPodEn"},
 		{header:C_POT,width:100,dataIndex:"consPotEn"},
 		{header:C_CARRIER,width:200,dataIndex:"consCarrierName"},
 		{header:C_BOOK_AGENCY,width:200,dataIndex:"consBookingAgencyName"},
 		{header:C_M_CONS_NO,dataIndex:"consMasterConsNo"},
 		{header:C_REMARKS,dataIndex:"consRemarks"}],defaults:{sortable:true,width:80}});
 	this.impChild=function(){
		var s = new Ext.data.Store({url: SERVICE_URL+'?A=CONS_X',baseParams:{mt:'JSON'},
	    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FConsign'}, FConsign)});
		s.load({params:{consMasterId:p.get('consId')},scope:this,callback:function(r){
			if(r.length){
				for(var i=0;i<r.length;i++){
					if(store.findBy(function(rec,id){return rec.get('consId')==r[i].get('consId');})==-1&&consS.findBy(function(rec,id){return rec.get('consId')==r[i].get('consId');})==-1){
						consS.insert(exalS.getTotalCount(),r[i]);
					}
				}
				this.reCalculate();
			} 
			else XMG.alert(SYS,M_NOT_FOUND);}});
	};
	this.impVoyCons=function(){
		var s = new Ext.data.Store({url: SERVICE_URL+'?A=CONS_X',baseParams:{mt:'JSON'},
	    	reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FConsign'}, FConsign)});
		s.load({params:{vessId:p.get('vessId'),voyaName:p.get('voyaName')},scope:this,callback:function(r){
			if(r.length){
				for(var i=0;i<r.length;i++){
					if(store.findBy(function(rec,id){return rec.get('consId')==r[i].get('consId');})==-1&&consS.findBy(function(rec,id){return rec.get('consId')==r[i].get('consId');})==-1){
						consS.insert(0,r[i]);
					}
				}
				this.reCalculate();
			} 
			else XMG.alert(SYS,M_NOT_FOUND);}});
	};
	var sumC = new Ext.form.TextField({width:120,disabled:true});
	var sumG = new Ext.form.TextField({width:120,disabled:true});
	var sumP = new Ext.form.TextField({width:120,disabled:true});
	var sumM = new Ext.form.TextField({width:120,disabled:true});
	this.c=0;this.g=0;this.p=0;this.m=0;
	this.reCalculate=function(){
		var c=0;var g=0;var p=0;var m=0;
		var a=consS.getRange();
		for(var i=0;i<a.length;i++){
			c=c+1;
			g=g+a[i].get('consTotalGrossWeight');
			p=p+a[i].get('consTotalPackages');
			m=m+a[i].get('consTotalMeasurement');
		}
		sumC.setValue(c);
		sumG.setValue(g);
		sumP.setValue(p);
		sumM.setValue(m);
		this.c=c;this.p=p;this.g=g;this.m=m;
	};
	this.removeCons=function(){
		var r = sm2.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){consS.remove(r[i]);this.reCalculate();}			
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.allocate=function(t){
		var a=store.getRange();
		var r=consS.getRange();
		if(r.length){
			var unitPrice=0;var num=0;var totalAmount=0;var innerPrice=0;var innerAmount=0;var base=0;			
			for(var j=0;j<r.length;j++){
				if(t=='C'){
					num=1;base=this.c;
				}
				else if(t=='G'){
					num=r[j].get('consTotalGrossWeight');base=this.g;
				}
				else if(t=='P'){
					num=r[j].get('consTotalPackages');base=this.p;
				}
				else if(t=='M'){
					num=r[j].get('consTotalMeasurement');base=this.m;
				}
				unitPrice=a[0].get('expeTotalAmount')/base;
				innerPrice=a[0].get('expeInnerAmount')/base;
				totalAmount=unitPrice*num;					
				innerAmount=innerPrice*num;
				var e = new SExpense({});var id=GGUID();
				var f = SExpense.prototype.fields;
				for (var i=0;i<f.keys.length;i++){var fn=''+f.keys[i];e.set(fn,a[0].get(fn));}
				e.set('id',id);e.set('expeId',id);
				e.set('expeUnitPrice',unitPrice);e.set('expeNum',num);e.set('expeTotalAmount',totalAmount);e.set('expeNum2',1);
				e.set('expeInnerPrice',innerPrice);e.set('expeInnerAmount',innerAmount);				
				e.set('consId',r[j].get('consId'));e.set('consNo',r[j].get('consNo'));
				e.set('consMblNo',r[j].get('consMblNo'));e.set('consHblNo',r[j].get('consHblNo'));
				e.set('consVessel',r[j].get('consVessel'));e.set('consVoyage',r[j].get('consVoyage'));
				e.set('consSailDate',r[j].get('consSailDate'));e.set('consBizClass',r[j].get('consBizClass'));
				e.set('consBizType',r[j].get('consBizType'));e.set('consShipType',r[j].get('consShipType'));
				e.set('consCustId',r[j].get('custId'));e.set('consCustName',r[j].get('custName'));
				e.set('version','1');e.set('expeInvoiceNo','');e.set('expeInvoiceDate','');
				e.set('expeInvoiceAmount',0);e.set('expeWriteOffAmount',0);
				e.set('expeWriteOffRcAmount',0);e.set('expeStatus',0);e.set('expeBillStatus',0);e.set('expeInvoiceStatus',0);
				e.set('expeWriteoffStatus',0);e.set('expeAllocationFlag',0);e.set('expeAllocatedFlag',1);
				e.set('expeIdM',p.get('expeId'));e.set('consIdM',p.get('consId'));e.set('consNoM',p.get('consNo'));
				exalS.insert(exalS.getTotalCount(),e);e.set('rowAction','N');
			}			
		}
		else XMG.alert(SYS,C_SEL_ALLOCATION_CONS);
	};
	this.save=function(){
		var a = exalS.getRange();
		if(a.length){			
			var x = ATX(a,'SExpense',SExpense);
			var ra=store.getRange();
			var r=ra[0];
			r.set('expeAllocationFlag',1);r.set('rowAction','M');
			x=x+RTX(r,'SExpense',SExpense);
			Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXPE_S'},
				success: function(res){
					var ra = XTRA(res.responseXML,'SExpense',SExpense);FOSU(exalS,ra,SExpense);
					XMG.alert(SYS,M_S);},
				failure: function(res){XMG.alert(SYS,M_F+res.responseText);},
				xmlData:FOSX(x)
			});
		}
		else XMG.alert(SYS,M_NC);
	};
	var tb1={xtype:'tbtext',text:C_SUM_CONS};
	var tb2={xtype:'tbtext',text:C_SUM_PACK};
	var tb3={xtype:'tbtext',text:C_SUM_GW};
	var tb4={xtype:'tbtext',text:C_SUM_CBM};
 	var consGrid = new Ext.grid.GridPanel({region:'center',collapsible:true,title:C_CONS_FOR_ALLOCATION,border:true,height:100,
		autoScroll:true,store:consS,sm:sm2,cm:cm2,
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:this.addCons},'-',
			{text:C_REMOVE,iconCls:'remove',scope:this,handler:this.removeCons},'-',
			{text:C_IMP_CHILD,iconCls:'save',scope:this,handler:this.impChild},'-',
			{text:C_IMP_VOY_CONS,iconCls:'save',scope:this,handler:this.impVoyCons},'-',
			{text:C_ALLOCATION,iconCls:'copy',scope:this,menu: {items: [
              	{text:C_BY_CONS,iconCls:'copy',disabled:false,scope:this,handler:function(){this.allocate('C');}},
  				{text:C_BY_GW,iconCls:'copy',disabled:false,scope:this,handler:function(){this.allocate('G');}},
  				{text:C_BY_PACK,iconCls:'copy',disabled:false,scope:this,handler:function(){this.allocate('P');}},
  				{text:C_BY_CBM,iconCls:'copy',disabled:false,scope:this,handler:function(){this.allocate('M');}}
              	]}}
			],
		bbar:[tb1,sumC,'-',tb2,sumP,'-',tb3,sumG,'-',tb4,sumM]
 	});
 	
 	this.removeExal=function(){
		var r = sm3.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){exalS.remove(r[i]);this.reCalculate();}			
		}
		else XMG.alert(SYS,M_R_P);
	};
 	var exalS=GS('EXPE_Q','SExpense',SExpense,'expeId','DESC','','','',false);
 	var sm3=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cm3=new Ext.grid.ColumnModel({columns:[sm,
	       {header:C_CONS_NO,width:120,dataIndex:"consNo",renderer:consRender},
          {header:C_SETTLE_OBJECT,width:100,dataIndex:"custSname"},
          {header:C_CHAR,width:80,dataIndex:"charName"},
          {header:C_UNIT,dataIndex:"unitName"},
          {header:C_QUANTITY,dataIndex:"expeNum",align:'right',renderer:rateRender},
          {header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice",align:'right',renderer:rateRender},
          {header:C_CURR,dataIndex:'currCode'},
          {header:C_EX_RATE,dataIndex:"expeExRate",align:'right',renderer:rateRender},
          {header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",align:'right',renderer:numRender},
          {header:C_COST_PRICE,width:80,dataIndex:"expeInnerPrice",align:'right',renderer:numRender},
          {header:C_COST_TOTAL,width:80,dataIndex:"expeInnerAmount",align:'right',renderer:numRender},
          {header:C_PPCC,dataIndex:'pateCode',width:40},
          {header:C_COMMISION_RATE,dataIndex:"expeCommissionRate",align:'right',renderer:rateRender},
          {header:C_COMMISION,dataIndex:"expeCommission",align:'right',renderer:numRender}],defaults:{sortable:true,width:60}});
	var exalGrid = new Ext.grid.GridPanel({region:'south',collapsible:true,split:true,title:C_EXPE_ALLOCATED,border:true,height:200,
		autoScroll:true,store:exalS,sm:sm3,cm:cm3,
		tbar:[{text:C_ADD,iconCls:'add',scope:this,handler:this.addCons},'-',
				{text:C_REMOVE,iconCls:'remove',scope:this,handler:this.removeExal},'-',
				{text:C_SAVE,iconCls:'save',scope:this,handler:this.save}
				]});
	
	Fos.ExalWin.superclass.constructor.call(this, {title:C_EXPE_ALLOCATION,modal:true,width:800,height:600,maximizable:true,
		plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'border',items:[expeGrid,consGrid,exalGrid
		    ]}); 
};
Ext.extend(Fos.ExalWin, Ext.Window);

//业务环节应付费用
Fos.SectionExGrid = function(p,section,parent) {
	var store = GS('EXPE_PERM_Q','SExpense',SExpense,'expeId','DESC','','','',false);
	store.load({params:{consId:p.get('consId'),section:section}});
	
	var m=getRM(p.get('consBizClass'),p.get('consBizType'),p.get('consShipType'));
	m=m+M3_EXPE+S_AP; 
	
	var t1={header:C_SETTLE_OBJECT,width:200,dataIndex:"custName",align:'left',
		editor:new Ext.form.ComboBox({displayField:'custCode',valueField:'custNameCn',triggerAction:'all',
        mode:'local',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,allowBlank:false,blankText:'',
        invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
        store:getCS(),enableKeyEvents:true,
        listeners:{scope:this,
        	select:function(c,r,i){
			var b =this.getSelectionModel().getSelected();
        	b.set('custId',r.get('custId'));
        	b.set('custName',r.get('custNameCn'));
        	b.set('custSname',r.get('custCode'));
        	},
       		keydown:{fn:function(f,e){
       			LC(f,e,'custApFlag',1);
       		},buffer:500}
        }})};
	
	t2={header:C_CHAR,width:80,dataIndex:"charName",align:'center',
			editor:new Ext.form.ComboBox({displayField:'charCode',valueField:'charName',triggerAction:'all',
            tpl:charTpl,itemSelector:'div.list-item',listWidth:300,
            allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',
            store:getCHAR_S(),
            listeners:{scope:this,select:function(c,r,i){
            	var b =this.getSelectionModel().getSelected();
            	b.set('charId',r.get('charId'));
            	b.set('chclId',r.get('chclId'));
            	b.set('charNameEn',r.get('charNameEn'));
            	b.set('currCode',r.get('currCode'));
            	b.set('unitId',r.get('unitId'));
            	b.set('expeExRate',getExRate(r.get('currCode'),'CNY'));
            	}
			}
		})};	
	
    var t3={header:C_UNIT,width:80,dataIndex:"unitName",align:'center',
			editor:new Ext.form.ComboBox({displayField:'unitCode',valueField:'unitCode',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getUNIT_C(),listeners:{
            scope:this,select:function(c,r,i){
            	var b=this.getSelectionModel().getSelected();
            	var rec=frm.UN.getById(r.get('unitCode'));
            	b.set('expeNum',rec?rec.get('N'):1);}}})};
    var t4={header:C_QUANTITY,width:60,dataIndex:"expeNum",renderer:expenseNumRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	var t5={header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice",renderer:expenseNumRender,
			editor:new Ext.form.NumberField({decimalPrecision:4,selectOnFocus:true,allowBlank:false,blankText:'',invalidText:''})};
	var t6={header:C_CURR,dataIndex:'currCode',width:50,align:'center',
			editor:new Ext.form.ComboBox({displayField:'currCode',valueField:'currCode',triggerAction: 'all',
            allowBlank:false,blankText:'',invalidText:'',mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:getCURR_S()})};
	var t7={header:C_EX_RATE,width:60,dataIndex:"expeExRate",renderer:rateRender};	
	var t8={header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",renderer:numRender};	
    var t16={header:C_REMARKS,width:100,dataIndex:"expeRemarks",editor:new Ext.form.TextField({enableKeyEvents:true,
    	listeners:{scope:this,keydown:function(c,e){k = e.getKey();if(k == e.ENTER) this.add();}}})};
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cols=[sm,t1,t2,t3,t4,t5,t6,t7,t8,t16];
		
	var cm=new Ext.grid.ColumnModel({columns:cols,defaults:{sortable:true,width:100,align:'right'}});
	cm.defaultSortable=true;cm.defaultWidth=100;			
	this.add=function(){
		var unit='EACH';var rid=GGUID();
		var e = new SExpense({id:rid,expeId:rid,consId:p.get('consId'),consNo:p.get('consNo'),
			section:section,consSailDate:p.get('consSailDate'),
    		consMblNo:p.get('consMblNo'),consHblNo:p.get('consHblNo'),consVessel:p.get('vessName'),
    		consVoyage:p.get('voyaName'),consBizClass:p.get('consBizClass'),consBizType:p.get('consBizType'),
    		consShipType:p.get('consShipType'),expeStatus:'0',expeBillStatus:'0',
    		expeInvoiceStatus:'0',expeWriteOffStatus:'0',
    		custId:parent.getVendorId(),
    		custName:parent.getVendorName(),
    		consCustId:p.get('custId'),consCustName:p.get('custName'),
    		expeType:'P',pateId:PPID,pateCode:'P',unitName:unit,currCode:'CNY',expeUnitPrice:'',
    		expeCommissionRate:'',expeCommission:'',expeInnerPrice:'',expeExRate:'1.0000',expeRemarks:'',expeDate:new Date(),
    		expeAllocationFlag:'0',expeAllocatedFlag:'0',
    		expeInvoiceAmount:'0',expeWriteOffAmount:'0',expeWriteOffRcAmount:'0',expeInnerAmount:'0',expeRcAmount:'0',
    		expeTotalAmount:'0',expeNum:'1',version:'0'});
    	this.stopEditing();store.insert(0,e);e.set('rowAction','N');sm.selectFirstRow();this.startEditing(0, 1);
	};
	this.removeExp=function(){
		var r = sm.getSelections();
		if(r.length){
			for(var i=0;i<r.length;i++){
				if(r[i].get('expeInvoiceStatus')>0) 
					XMG.alert(SYS,M_REMOVE_EXP_INVOICED);
				else{
					r[i].set('rowAction',r[i].get('rowAction')=='N'?'D':'R');
					store.remove(r[i]);
				}
			}
		}
		else XMG.alert(SYS,M_R_P);
	};
	this.save=function(){
		var a = store.getModifiedRecords();
		if(a.length){
			for(var i=0;i<a.length;i++){
				if(a[i].get('rowAction')!='R'&&a[i].get('rowAction')!='D'){
					if(a[i].get('custId')==''){
						XMG.alert(SYS,M_SETTLE_OBJECT_REQIRED);
						return;
					}
					else if(a[i].get('charId')==''){
						XMG.alert(SYS,M_CHAR_REQIRED);
						return;
					}
					else if(a[i].get('expeNum')==''||a[i].get('expeNum')=='0'){
						XMG.alert(SYS,M_QUANTITY_REQIRED);
						return;
					}
					else if(a[i].get('expeUnitPrice')==''||a[i].get('expeUnitPrice')=='0'){
						XMG.alert(SYS,M_UNIT_PRICE_REQIRED);
						return;
					}
					else if(a[i].get('currCode')==''){
						XMG.alert(SYS,M_CURR_PRICE_REQIRED);
						return;
					}
					else if(a[i].get('pateId')==''){
						XMG.alert(SYS,M_PPCC_REQIRED);
						return;
					}
				}
			}
			var x = ATX(a,'SExpense',SExpense);
			if(x!=''){								
				var tb=this.getTopToolbar();
				tb.getComponent('TB_C').setDisabled(true);
				Ext.Ajax.request({scope:this,url:SERVICE_URL,method:'POST',params:{A:'EXPE_S'},
					success: function(res){
						var a = XTRA(res.responseXML,'SExpense',SExpense);FOSU(store,a,SExpense);
						XMG.alert(SYS,M_S);tb.getComponent('TB_C').setDisabled(false);},
					failure: function(res){XMG.alert(SYS,M_F+res.responseText);tb.getComponent('TB_C').setDisabled(false);},
					xmlData:FOSX(x)
				});
			}
		}
		else XMG.alert(SYS,M_NC);
	};	
	var locked=p.get('consStatusExp')==1||p.get('consStatusAud')!=0;
		
	var b1={itemId:'TB_A',text:C_ADD,iconCls:'add',disabled:NR(m+F_M)||locked,scope:this,handler:this.add};
	var b2={itemId:'TB_B',text:C_REMOVE,iconCls:'remove',disabled:NR(m+F_R)||locked,scope:this,handler:this.removeExp};
	var b3={itemId:'TB_C',text:C_SAVE,iconCls:'save',disabled:NR(m+F_M)||locked,scope:this,handler:this.save};
	
	Fos.SectionExGrid.superclass.constructor.call(this, {title:C_SECTION_AP,
	border:true,autoScroll:true,clicksToEdit:1,height:200,
    stripeRows:true,store:store,sm:sm,cm:cm,listeners:{scope:this,
		beforeedit:function(e){
			e.cancel = e.record.get('editable')==0||e.record.get('expeStatus')>0||e.record.get('expeInvoiceStatus')>0||e.record.get('expeWriteOffStatus')>0;
		},
    	afteredit:function(e){var f=e.field;var r=e.record;
    	if(f=='expeNum'){
    		r.set('expeNum',e.value);
    		r.set('expeTotalAmount',round2(e.value*r.get('expeUnitPrice')-r.get('expeCommission')));
    		r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*e.value-r.get('expeCommission')));
    		r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
		}
    	if(f=='unitName'){    		
            r.set('expeTotalAmount',round2(r.get('expeNum')*r.get('expeUnitPrice')-r.get('expeCommission')));
    		r.set('expeInnerAmount',round2(r.get('expeInnerPrice')*r.get('expeNum')-r.get('expeCommission')));
    		r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
		}
		else if(f=='expeUnitPrice'){
			r.set('expeTotalAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeInnerPrice',e.value);
			r.set('expeInnerAmount',round2(e.value*r.get('expeNum')-r.get('expeCommission')));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
		}		
		else if(f=='currCode'){
			r.set('expeExRate',getExRate(e.value,'CNY'));
			r.set('expeRcAmount',round2(r.get('expeTotalAmount')*r.get('expeExRate')));
		}		
    }},
    tbar:[b1, '-',b2,'-',b3]});
};
Ext.extend(Fos.SectionExGrid, Ext.grid.EditorGridPanel);


//应收应付代垫费用管理
Fos.ExpenseGrid = function(t){
	var store = new Ext.data.GroupingStore({url:SERVICE_URL,
		baseParams:{A:'EXPE_X_S',mt:'xml',expeType:t},
		reader:new Ext.data.XmlReader({totalProperty:'rowCount',
			record:'SExpense',idProperty:'expeId'},SExpense),
		sortInfo:{field:'consNo', direction:'DESC'},remoteSort:true,autoLoad:false});
	
	var consNo = {header:C_CONS_NO,dataIndex:'consNo',width:150};
	
	var t1={header:C_SETTLE_OBJECT,width:200,dataIndex:"custName",align:'center'};		
	var t2={header:C_CHAR,width:80,dataIndex:"charName"};
    var t3={header:C_UNIT,dataIndex:"unitName"};
    var t4={header:C_QUANTITY,width:60,dataIndex:"expeNum",renderer:expenseNumRender};
	var t5={header:C_UNIT_PRICE,dataIndex:"expeUnitPrice",renderer:expenseNumRender};
	var t6={header:C_CURR,dataIndex:'currCode',width:50};
	var t7={header:C_EX_RATE,width:60,dataIndex:"expeExRate",renderer:rateRender};	
	var t8={header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",renderer:numRender};
	var t11={header:C_PPCC,dataIndex:'pateCode',width:40};
    var t12={header:C_INVO_NO,align:'center',dataIndex:"expeInvoiceNo"};
    var t13={header:C_TAX_NO,align:'center',dataIndex:"expeTaxInvoiceNo"};
    var t14={header:C_INVOICED_AMOUNT,renderer:rateRender,dataIndex:"expeInvoiceAmount"};   
    var t15={header:C_WRITEOFFED_AMOUNT,renderer:rateRender,dataIndex:"expeWriteOffAmount"};    
    var t16={header:C_REMARKS,width:100,dataIndex:"expeRemarks"};
    var t17={header:C_INVO_DATE,width:100,renderer:formatDate,dataIndex:"expeInvoiceDate"};
    var t18={header:C_WRITEOFF_DATE,renderer:formatDate,dataIndex:"expeWriteOffDate"};
    var t19={header:C_CREATE_TIME,renderer:formatDateTime,dataIndex:"createTime"};
    var t20={header:C_MODIFY_TIME,renderer:formatDateTime,dataIndex:"modifyTime"};
    var t21={header:C_COMMISION_RATE,width:80,dataIndex:"expeCommissionRate",renderer:rateRender};
	var t22={header:C_COMMISION,width:60,dataIndex:"expeCommission"};
	var t23={header:C_CREATE_BY,renderer:getUSER,dataIndex:"createBy"};
	var t24={header:C_MODIFY_BY,renderer:getUSER,dataIndex:"expeUpdateBy"};
	var t25={header:C_BILL_BY,renderer:getUSER,dataIndex:"expeInvoiceBy"};
	var t26={header:C_VOUC_BY,renderer:getUSER,dataIndex:"expeWriteOffBy"};
	var t27={header:C_INVO_TITLE,dataIndex:'expeInvoiceTitle',align:'center',width:100,editor:new Ext.form.TextField()};
	var t28={header:C_WHETHER_INVOICING,dataIndex:'expeInvoiceFlag',renderer:getY_O_N};
	
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	var cols=[];
	if(t=='R'){
		cols=[sm,consNo,t1,t28,t27,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t23,t19,t24,t20,t25,t26];
	}
	else{
		cols=[sm,consNo,t1,t2,t3,t4,t5,t6,t21,t22,t8,t11,t7,t16,t12,t13,t14,t15,t17,t18,t23,t19,t24,t20,t25,t26];
	}
	var cm=new Ext.grid.ColumnModel({columns:cols,defaults:{sortable:true,width:100,align:'center'}});
	cm.defaultSortable=true;cm.defaultWidth=100;		
	
	var title = "";
	if(t=="R"){
		title=C_EXPE_R;
	}
	else if(t=="P"){
		title=C_EXPE_P;
	}
	else{
		title=C_EXPE_D;
	}
	
	//生成账单
	this.genInvoice=function(){
    	var a = sm.getSelections();
    	if(a.length>0){
    		for(var j=0;j < a.length;j++){
    			if(a[j].get('rowAction')=='N'){
    				XMG.alert(SYS,M_SAVE_FIRST);
    				return;
    			}else if(a[j].get('expeInvoiceNo').length>0){
    				XMG.alert(SYS,C_INVOCIE_NO_EXISTED);
    				return;
    			}else if(a[0].get('custId')!=a[j].get('custId')){
    				XMG.alert(SYS,C_SETTLE_OBJECT_DIFFERENT);
    				return
    			}
    		}
    		var currCode='CNY';
    		for(var i=0;i<a.lenth;i++){
    			if(a[i].get('currCode')!=currCode){
    				currCode = a[i].get('currCode');
    				break;
    			}
    		}
    		if(currCode != a[0].get('currCode')){
    			var w=new Fos.CurrencyWin();
        		w.addButton({text:C_OK,scope:this,handler:function(){
        			currCode = w.findById('currCode').getValue();
        			w.close();
        			var id=GGUID();
        			var e = new SInvoice({invoId:id,
        				id:id,invoNo:'N'+id,
        				custId:a[0].get('custId'),
        				custName:a[0].get('custName'),
        				custSname:a[0].get('custSname'),
        				invoTitle:a[0].get('custName'),
        				currCode:currCode,
        				invoType:t=='P'?'P':'R',
        				invoDate:new Date(),
        				invoExRate:getExRate(currCode,'CNY'),
        				invoWriteOffStatus:'0',
        				invoPrFlag:'0',
        				invoUploadFlag:'0',
        				invoStatus:'0',
        				version:'0',
        				rowAction:'N'});
        			var tab = T_MAIN.add(new Fos.InvoiceTab(e,'',a));
        			T_MAIN.setActiveTab(tab);
        		}},this);
        		w.addButton({text:C_CANCEL,handler:function(){w.close();}},this);
        		w.show();
    		}
    		else{
    			var id=GGUID();
    			var e = new SInvoice({invoId:id,id:id,invoNo:'N'+id,
    				custId:a[0].get('custId'),
    				custName:a[0].get('custName'),
    				custSname:a[0].get('custSname'),
    				invoTitle:a[0].get('custName'),
    				currCode:currCode,
    				invoType:t=='P'?'P':'R',
    				invoDate:new Date(),
    				invoExRate:getExRate(currCode,'CNY'),
    				invoWriteOffStatus:'0',
    				invoPrFlag:'0',
    				invoUploadFlag:'0',
    				invoStatus:'0',
    				version:'0',rowAction:'N'});
    			var tab = T_MAIN.add(new Fos.InvoiceTab(e,'',a));
    			T_MAIN.setActiveTab(tab);
    		}
    	}else{
    		XMG.alert(SYS,M_NO_DATA_SELECTED);
    	}
    };
    
    //生成对帐单
    this.genBill = function(){
    	var r = sm.getSelections();
    	var id = GGUID();
    	if(r.length>0){
    		for(var i=0;i<r.length;i++){
    			if(r[i].get('expeBillStatus')!=0){
    				XMG.alert(SYS,C_BILL_NO_EXISTED);
    				return;
    			}
    		}
    		var e = new SBill({id:id,billId:id,billNo:'N'+id,custId:r[0].get('custId'),custName:r[0].get('custName'),
    			custSname:r[0].get('custSname'),
				billType:t,billDate:new Date(),currCode:'CNY',billStatus:'0',version:'0',rowAction:'N'});
			var tab = T_MAIN.add(new Fos.BillTab(e,r));
			T_MAIN.setActiveTab(tab);
    	}else{
    		XMG.alert(SYS,M_NO_DATA_SELECTED);
    	}
    };
    
	//业务号
	var txtConsNo = new Ext.form.TextField({fieldLabel:C_CONS_NO,
		anchor:"90%",
		name:'consNo'
	});
	
	//结算单位
	var cboCustId = new Ext.form.ComboBox({fieldLabel:C_SETTLE_OBJECT,
		anchor:"90%",
		name:'custId',
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
			 keydown:{fn:function(f,e){LC(f,e,t=='R'?'custArFlag':'custApFlag');},buffer:500}
		 }
	});
	
	//是否开发票
	var cboExpeInvoiceFlag = new Ext.form.ComboBox({fieldLabel:C_WHETHER_INVOICING,
		anchor:"90%",
		name:'expeInvoiceFlag',
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true,
		store:Y_O_N
	});
	
	//账单状态
	var cboExpeInvoiceStatus = new Ext.form.ComboBox({fieldLabel:C_INVO_STATUS_R,
		anchor:"90%",
		name:'expeInvoiceStatus',
		store:INST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true
	});
	
	//核销状态
	var cboExpeWriteoffStatus =new Ext.form.ComboBox({fieldLabel:C_WRITEOFF_STATUS_R,
		anchor:"90%",
		name:'expeWriteoffStatus',
		store:WRST_S,
		displayField:'NAME',
		valueField:'CODE',
		typeAhead: true,
		mode:'local',
		triggerAction:'all',
		selectOnFocus:true
	});
	
	//账单号
	var txtExpeInvoiceNo = new Ext.form.TextField({fieldLabel:C_INVO_NO,
		name:'expeInvoiceNo',
		anchor:"90%"
	});
	
	//币种
	var cboCurrCode = new Ext.form.ComboBox({fieldLabel:C_CURR,
		anchor:"90%",
		name:'currCode',
		displayField:'currCode',
		valueField:'currCode',
		triggerAction: 'all',
        mode:'local',
        selectOnFocus:true,
        store:getCURR_S(),
        typeAhead:true
    });
	
    //账单日期
    var dtExpeInvoiceDate = new Ext.form.DateField({fieldLabel:C_INVO_DATE+C_FROM,
    	anchor:"90%",
    	name:'expeInvoiceDate',
    	format:DATEF
    });
    
    var dtExpeInvoiceDate2 = new Ext.form.DateField({fieldLabel:C_TO,
    	anchor:"90%",
    	name:'expeInvoiceDate2',
    	format:DATEF
    });
    
    //核销单日期
    var dtExpeWriteOffDate = new Ext.form.DateField({fieldLabel:C_WRITEOFF_DATE+C_FROM,anchor:"90%",name:'expeWriteOffDate',format:DATEF});
    var dtExpeWriteOffDate2 = new Ext.form.DateField({fieldLabel:C_TO,anchor:"90%",name:'expeWriteOffDate2',format:DATEF});
    
    var queryParams = [];
    queryParams[queryParams.length] = new QParam({key:'expeType',value:t,op:1});
    
    //查询方法
    this.reload=function(){
     	var a=[];     	
     	var op=1; 
     	//业务号
     	var consNo=txtConsNo.getValue();
 		if(consNo) a[a.length]=new QParam({key:'consNo',value:consNo,op:7});
 		//结算单位
 		var custId=cboCustId.getValue();
 		if(custId) a[a.length]=new QParam({key:'custId',value:custId,op:op});
 		
 		//是否开发票
 		var expeInvoiceFlag=cboExpeInvoiceFlag.getValue();
 		if(expeInvoiceFlag) 
 			a[a.length]=new QParam({key:'expeInvoiceFlag',value:expeInvoiceFlag,op:op});
 		
 		//币种
 		var currCode=cboCurrCode.getValue();
 		if(currCode) a[a.length]=new QParam({key:'currCode',value:currCode,op:op});
 		//账单状态
 		var expeInvoiceStatus=cboExpeInvoiceStatus.getValue();        		
 		if(expeInvoiceStatus) a[a.length]=new QParam({key:'expeInvoiceStatus',value:expeInvoiceStatus,op:op});
 		//核销单状态
 		var expeWriteoffStatus=cboExpeWriteoffStatus.getValue();        		
 		if(expeWriteoffStatus) a[a.length]=new QParam({key:'expeWriteoffStatus',value:expeWriteoffStatus,op:op});
 		//账单号
 		var expeInvoiceNo=txtExpeInvoiceNo.getValue();        		
 		if(expeInvoiceNo) a[a.length]=new QParam({key:'expeInvoiceNo',value:expeInvoiceNo,op:op});
 		//账单日期
 		var expeInvoiceDate=dtExpeInvoiceDate.getValue();
 		var expeInvoiceDate2=dtExpeInvoiceDate2.getValue();
 		if(expeInvoiceDate && expeInvoiceDate2){
 			a[a.length]=new QParam({key:'expeInvoiceDate',value:expeInvoiceDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'expeInvoiceDate',value:expeInvoiceDate2.format(DATEF),op:3});
 		}
 		else if(expeInvoiceDate) a[a.length]=new QParam({key:'expeInvoiceDate',value:expeInvoiceDate,op:op});
 		//核销单日期
 		var expeWriteOffDate=dtExpeWriteOffDate.getValue();
 		var expeWriteOffDate2=dtExpeWriteOffDate2.getValue();
 		if(expeWriteOffDate && expeWriteOffDate2){
 			a[a.length]=new QParam({key:'expeWriteOffDate',value:expeWriteOffDate.format(DATEF),op:5});
 			a[a.length]=new QParam({key:'expeWriteOffDate',value:expeWriteOffDate2.format(DATEF),op:3});
 		}
 		else if(expeWriteOffDate) 
 			a[a.length]=new QParam({key:'expeWriteOffDate',value:expeWriteOffDate,op:op});
   
 		queryParams = a;
 		queryParams[queryParams.length] = new QParam({key:'expeType',value:t,op:op});
 		
     	store.baseParams={A:'EXPE_X_S',mt:'xml',expeType:t,xml:FOSX(QTX(a))};
     	store.reload({params:{start:0,limit:C_PS},
     		callback:function(r){
     			if(r.length==0) 
     				XMG.alert(SYS,M_NOT_FOUND);
     			}
     	});
    };
    
    var exportExpense = function(){
		if(queryParams.length>0){
			var a = queryParams;
			var qa = [];
			for(var i=0;i<a.length;i++){
				qa[i] = {key:a[i].get('key'),op:a[i].get('op'),value:a[i].get('value')};
			}
			EXPC('EXPE_LIST','&mt=JSON&xml='+Ext.util.JSON.encode(FOSJ(QTJ(qa))));
		}
	};
	
	var btnExport = new Ext.Button({text:C_EXPORT,iconCls:'print',
		scope:this,handler:exportExpense});
	
   
    //生成账单按钮
	var genInvoice = new Ext.Button({text:C_GEN_INVOICE,iconCls:'save',
		scope:this,handler:this.genInvoice});
	
	//生成对帐单
	var genBill = new Ext.Button({text:C_GEN_BILL,iconCls:'save',scope:this,
			handler:this.genBill});
	
	 //查询按钮
	var searchButton = {text:C_SEARCH,iconCls:'search',scope:this,handler:this.reload};
	
	var selectPanel = new Ext.Panel({plain:true,height:100,layout:'column',region:'north',
		defaults:{bodyStyle:'padding:10px'},items:[
			{columnWidth:.25,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		    	items:[txtConsNo,dtExpeInvoiceDate,cboExpeInvoiceFlag]
		    },
		    {columnWidth:.25,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		    	items:[cboCustId,dtExpeInvoiceDate2,cboExpeInvoiceStatus]
		    },
		    {columnWidth:.25,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		    	items:[cboCurrCode,dtExpeWriteOffDate,cboExpeWriteoffStatus]
		    },
		    {columnWidth:.25,layout:'form',border:false,labelWidth:80,labelAlign:"right",
		    	items:[txtExpeInvoiceNo,dtExpeWriteOffDate2]
		    }]
		});
	
	this.grid = new Ext.grid.GridPanel({sm:sm,
		cm:cm,
		store:store,
		autoScroll:true,
		header:false,
		layout:'fit',
		view:new Ext.grid.GroupingView(groupViewCfg),
		region:'center',
		tbar:[genInvoice,'-',genBill,'-',searchButton,'-',btnExport],
		bbar:PTB(store,C_PS)
	});

	Fos.ExpenseGrid.superclass.constructor.call(this,{
		id:'EXPENSE_'+t,title:title,closable:true,layout:'border',
		items:[selectPanel,this.grid]
	});
	store.load({params:{start:0,limit:C_PS}});
};
Ext.extend(Fos.ExpenseGrid,Ext.Panel);

//费用查询
Fos.ExSearchWin = function(c,t) {
	this.store = GS('EXPE_X','SExpense',SExpense,'expeId','DESC','','','id',false);
    this.store.load({params:{custId:c,expeType:t,expeBillStatus:'0'}});
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false}); 
	var cm=new Ext.grid.ColumnModel({columns:[sm,
		{header:C_SETTLE_OBJECT,width:180,dataIndex:"custName"},
		{header:C_CONS_NO,width:100,dataIndex:"consNo"},
		{header:C_CHAR,width:80,dataIndex:"charName"},		
		{header:C_QUANTITY,width:60,dataIndex:"expeNum",align:'right'},
		{header:C_UNIT_PRICE,width:80,dataIndex:"expeUnitPrice",align:'right'},
		{header:C_AMOUNT,width:80,dataIndex:"expeTotalAmount",align:'right'},
		{header:C_CURR,dataIndex:'currCode',width:60},	
		{header:C_EX_RATE,width:60,dataIndex:"expeExRate",align:'right'},
		{header:C_UNIT,width:80,dataIndex:"unitName"},
		{header:C_VESS,width:100,dataIndex:"consVessel"},
		{header:C_VOYA,width:80,dataIndex:"consVoyage"},
		{header:C_MBL_NO,width:80,dataIndex:"consMblNo"},
		{header:C_HBL_NO,width:80,dataIndex:"consHblNo"},
		{header:C_INVO_NO,width:100,dataIndex:"expeInvoiceNo"},
		{header:C_INVOICED_AMOUNT,width:100,dataIndex:"expeInvoiceAmount"},
		{header:C_WRITEOFFED_AMOUNT,width:100,dataIndex:"expeWriteOffAmount"},
		{header:C_REMARKS,width:100,dataIndex:"expeRemarks"}
		],defaults:{sortable:true,width:80}});
    this.grid = new Ext.grid.GridPanel({height:340,autoScroll:true,store:this.store,sm:sm,cm:cm,loadMask:true});	
	this.search=function(){
      	var a=[];var op=1;      	
      		a[a.length]={key:'expeType',value:t,op:op};
      		a[a.length]={key:'expeBillStatus',value:'0',op:op};
    		var custId=this.find('name','custId')[0].getValue();
    		if(custId) a[a.length]={key:'t2.custId',value:custId,op:op};
    		var consCustId=this.find('name','consCustId')[0].getValue();
    		if(consCustId) a[a.length]={key:'consCustId',value:consCustId,op:op};
    		var consBizType=this.find('name','consBizType')[0].getValue();        		
    		if(consBizType) a[a.length]={key:'consBizType',value:consBizType,op:op};
    		var consBizClass=this.find('name','consBizClass')[0].getValue();        		
    		if(consBizClass) a[a.length]={key:'consBizClass',value:consBizClass,op:op};
    		var consShipType=this.find('name','consShipType')[0].getValue();        		
    		if(consShipType) a[a.length]={key:'consShipType',value:consShipType,op:op};
    		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();        		
    		if(consSalesRepId) a[a.length]={key:'consSalesRepId',value:consSalesRepId,op:op};      		
    		var consDate=this.find('name','consDate')[0].getValue();
    		var consDate2=this.find('name','consDate2')[0].getValue();
    		if(consDate && consDate2){
    			a[a.length]={key:'consDate',value:consDate.format(DATEF),op:5};
    			a[a.length]={key:'consDate',value:consDate2.format(DATEF),op:3};
    		}
    		else if(consDate) a[a.length]={key:'consDate',value:consDate,op:op};
    		var consEtd=this.find('name','consEtd')[0].getValue();
    		var consEtd2=this.find('name','consEtd2')[0].getValue();
    		if(consEtd && consEtd2){
    			a[a.length]={key:'consEtd',value:consEtd.format(DATEF),op:5};
    			a[a.length]={key:'consEtd',value:consEtd2.format(DATEF),op:3};
    		}
    		else if(consEtd) a[a.length]={key:'consEtd',value:consEtd,op:op};    		
    		var consPod=this.find('name','consPod')[0].getValue();        		
    		if(consPod) a[a.length]={key:'consPod',value:consPod,op:op};
    		var consMblNo=this.find('name','consMblNo')[0].getValue();        		
    		if(consMblNo) a[a.length]={key:'consMblNo',value:consMblNo,op:op};
    		var consRefNo=this.find('name','consRefNo')[0].getValue();        		
    		if(consRefNo) a[a.length]={key:'consRefNo',value:consRefNo,op:op};
    		var vessId=this.find('name','vessId')[0].getValue();        		
    		if(vessId) a[a.length]={key:'vessId',value:vessId,op:op};
    		var consVoyage=this.find('name','consVoyage')[0].getValue();        		
    		if(consVoyage) a[a.length]={key:'consVoyage',value:voyaId,op:op};    		
    		var charId=this.find('name','charId')[0].getValue();        		
    		if(charId) a[a.length]={key:'charId',value:charId,op:op};
    		var currCode=this.find('name','currCode')[0].getValue();        		
    		if(currCode) a[a.length]={key:'currCode',value:currCode,op:op};
    		var expeType=this.find('name','expeType')[0].getValue();        		
    		if(expeType) a[a.length]={key:'expeType',value:expeType,op:op};
    		var expeStatus=this.find('name','expeStatus')[0].getValue();        		
    		if(expeStatus) a[a.length]={key:'expeStatus',value:expeStatus,op:op};
    		var pateId=this.find('name','pateId')[0].getValue();        		
    		if(pateId) a[a.length]={key:'pateId',value:pateId,op:op};
   		this.store.baseParams={mt:'JSON',xml:Ext.util.JSON.encode(FOSJ(QTJ(a)))};
     	this.store.load({callback:function(r){if(r.length==0) XMG.alert(SYS,M_NOT_FOUND);}});
	};
	this.clear=function(){this.form.getForm().reset();};
	this.form = new Ext.FormPanel({title:C_FILTER_BY,layout:'column',name:'sf',xtype:'form',height:160,
				layoutConfig:{columns:4},region:'north',collapsible:true,
				items:[{columnWidth:.25,layout:'form',labelWidth:60,border:false,items:[
	            	{fieldLabel:C_BOOKER,tabIndex:1,name:'consCustId',store:getCS(),enableKeyEvents:true,
	            	xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead: true,mode: 'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
	            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,t=='R'?'custArFlag':'custApFlag');},buffer:500}}},
     				{fieldLabel:C_CHAR,tabIndex:5,name:'charId',store:getCHAR_S(),
	            		xtype:'combo',displayField:'charCode',valueField:'charId',
	            		tpl:charTpl,itemSelector:'div.list-item',
	            		listWidth:300,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
     				{fieldLabel:C_VESS,tabIndex:9,name:'vessId',store:getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessId',typeAhead:true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},     				
     				{fieldLabel:C_CONS_DATE,tabIndex:17,name:'consDate',xtype:'datefield',format:DATEF,anchor:'90%'},     				
     				{fieldLabel:C_SAIL_DATE,tabIndex:19,name:'consEtd',xtype:'datefield',format:DATEF,anchor:'90%'}
     			]},
	        	{columnWidth:.25,layout:'form',labelWidth:60,border:false,items:[
	            	{fieldLabel:C_SETTLE_OBJECT,tabIndex:2,name:'custId',store:getCS(),enableKeyEvents:true,
	             	xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,mode:'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%',
	             	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,t=='R'?'custArFlag':'custApFlag');},buffer:500}}},
					{fieldLabel:C_BIZ_TYPE,tabIndex:7,name:'consBizType',store:BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_VOYA,tabIndex:10,name:'consVoyage',xtype:'textfield',anchor:'90%'},	            	
                	{fieldLabel:C_TO,tabIndex:18,name:'consDate2',xtype:'datefield',format:DATEF,anchor:'90%'},
                	{fieldLabel:C_TO,tabIndex:20,name:'consEtd2',xtype:'datefield',format:DATEF,anchor:'90%'}
	            ]},
    			{columnWidth:.25,layout:'form',labelWidth:60,border:false,items:[
	            	{fieldLabel:C_CURR,tabIndex:3,name:'currCode',store:getCURR_S(),xtype:'combo',displayField:'currCode',valueField:'currCode',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	           		{fieldLabel:C_SHIP_TYPE,tabIndex:7,name:'consShipType',store:SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_BL_NO,tabIndex:11,name:'consMblNo',xtype:'textfield',anchor:'90%'},
	            	{fieldLabel:C_POD,tabIndex:47,name:'consPod',store:getPS(),xtype:'combo',displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%',
              		tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
              		{fieldLabel:C_SALES,tabIndex:13,name:'consSalesRepId',store:getSALE_S(),xtype:'combo',displayField:'userLoginName',valueField:'userId',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'}
	            ]},
    			{columnWidth:.25,layout:'form',labelWidth:70,border:false,items:[
	            	{fieldLabel:C_CHAR_TYPE,tabIndex:4,name:'expeType',store:new Ext.data.SimpleStore({fields:['CODE','NAME'],data:[['','所有'],['R','应收'],['P','应付']]}),xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_BIZ_CLASS,tabIndex:6,name:'consBizClass',store:BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_PATE,tabIndex:8,name:'pateId',store:getPATE_S(),xtype:'combo',displayField:'pateName',valueField:'pateId',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_STATUS,tabIndex:12,name:'expeStatus',store:EXST_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'90%'},
	            	{fieldLabel:C_CUST_CONS_NO,tabIndex:16,name:'consRefNo',xtype:'textfield',anchor:'90%'}	            	
	            ]}
	    	]});        
    Fos.ExSearchWin.superclass.constructor.call(this,{title:C_EXPE_QUERY,modal:true,width:900,
    	height:500,listeners:{maximize:function(w){w.doLayout();}},
        minHeight:200,plain:false,bodyStyle:'padding:0px;',buttonAlign:'right',layout:'border',
        tbar:[{text:C_SEARCH,iconCls:'refresh',scope:this,handler:this.search},'-',
			{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
        items:[this.form,
        {title:'',layout:'fit',region:'center',deferredRender:false,bodyStyle:'padding:0px',items:[this.grid]}]}); 
};
Ext.extend(Fos.ExSearchWin,Ext.Window);
