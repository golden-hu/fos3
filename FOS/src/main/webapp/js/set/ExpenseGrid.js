//单票费用列表
Fos.ExpenseGrid = function(_consign,_expeType,frm,store) {	
		
	this.reCalculate = function(){
		if(_expeType=='R') 
			frm.calcR(); 
		else if(_expeType=='P') 
			frm.calcP(); 
		else if(_expeType=='D') 
			frm.calcD(); 
		else 
			frm.calcC();
		frm.reCalculate();
	};
	
	var m=getRM(_consign.get('consBizClass'),_consign.get('consBizType'),_consign.get('consShipType'));
	
	var x=S_AR;
	if(_expeType=='P'||_expeType=='D') 
		x=S_AP; 
	else if(_expeType=='R')  
		x=S_AR; 
	else 
		x=S_AC;
	
	if(frm.f=='C') 
		m=m+M3_EXPE+x; 
	else 
		m=M1_S+S_EXPE+x;
		
	var sm=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
	
	var cols=[sm];
	
	//结算单位
	cols[cols.length] = {header:C_SETTLE_OBJECT,
		width:200,
		dataIndex:"custName",
		align:'left',
		editor:new Fos.CustomerLookup({
			custType:'',
			displayField:'custNameCn',
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
	       				LC(f,e,'');
	       			},buffer:500
       			}
        	}
		}
	)};
	
	//费用名称
	cols[cols.length] = {header:C_CHAR,
		width:80,
		dataIndex:"charName",
		align:'left',
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
	})};
	
	//计费单位
	cols[cols.length] = {header:C_UNIT,
		width:80,
		dataIndex:"unitName",
		align:'left',
		editor:new Ext.form.ComboBox({
			displayField:'unitCode',
			valueField:'unitCode',
			triggerAction:'all',
	        mode:'local',
	        selectOnFocus:true,
	        listClass:'x-combo-list-small',
	        store:getUNIT_C(),
	        listeners:{
		        scope:this,
		        select:function(c,r,i){
		        	var b=this.getSelectionModel().getSelected();
		        	var rec=frm.UN.getById(r.get('unitCode'));
		        	b.set('expeNum',rec?rec.get('N'):1);
	        	}
			}
		})
	};
    
	//数量
	cols[cols.length] = {header:C_QUANTITY,
		width:60,
		align:'right',
		dataIndex:"expeNum",
		renderer:expenseNumRender,
		editor:new Ext.form.NumberField({
			decimalPrecision:4,
			selectOnFocus:true,
			allowBlank:false,
			blankText:'',
			invalidText:''
		})
    };
    
	//单价
	cols[cols.length] = {header:C_UNIT_PRICE,
		width:80,
		dataIndex:"expeUnitPrice",
		renderer:numRender,
		align:'right',
		editor:new Ext.form.NumberField({
			decimalPrecision:2,
			selectOnFocus:true,
			allowBlank:false,
			blankText:'',
			invalidText:''
		})
	};
	
	//币种
	cols[cols.length] = {header:C_CURR,
		dataIndex:'currCode',
		width:50,
		align:'center',
		editor:new Ext.form.ComboBox({
			displayField:'currCode',
			valueField:'currCode',
			triggerAction: 'all',
	        allowBlank:false,
	        blankText:'',
	        invalidText:'',
	        mode:'local',
	        selectOnFocus:true,
	        listClass:'x-combo-list-small',
	        store:getCURR_S()
	     })
	};
	
	//汇率
	cols[cols.length] = {header:C_EX_RATE,
		width:60,
		align:'right',
		dataIndex:"expeExRate",
		renderer:rateRender
	};	
	
	//金额
	cols[cols.length] = {header:C_AMOUNT,
		width:80,
		dataIndex:"expeTotalAmount",
		renderer:numRender,
		align:'right'
	};	
		
	//预付/到付
	cols[cols.length] = {header:C_PPCC,
		dataIndex:'pateCode',
		width:40,
		align:'center',
		editor:new Ext.form.ComboBox({
			displayField:'pateCode',
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
	
	//账单号
	cols[cols.length] = {header:C_INVO_NO,
		align:'left',
		dataIndex:"expeInvoiceNo",
		renderer:frm.f=='C'?'':invoRender
	};
    
	//税务发票号
	cols[cols.length] = {header:C_TAX_NO,align:'left',dataIndex:"expeTaxInvoiceNo"};
    
	//已开票金额
	cols[cols.length] = {header:C_INVOICED_AMOUNT,
		align:'right',
		renderer:numRender,
		dataIndex:"expeInvoiceAmount"
	};   
    
	//已核销金额
	cols[cols.length] = {header:C_WRITEOFFED_AMOUNT,
		align:'right',
		renderer:numRender,
		dataIndex:"expeWriteOffAmount"
	};    
    
	//备注
	cols[cols.length] = {header:C_REMARKS,
		width:100,
		dataIndex:"expeRemarks",
		align:'left',
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
    
	//开票日期
	cols[cols.length] = {header:C_INVO_DATE,
		width:100,
		renderer:formatDate,
		dataIndex:"expeInvoiceDate"
	};
    
	//核销日期
	cols[cols.length] = {header:C_WRITEOFF_DATE,
		renderer:formatDate,
		dataIndex:"expeWriteOffDate"
	};
    
	//创建日期
	cols[cols.length] = {header:C_CREATE_TIME,
		renderer:formatDateTime,
		dataIndex:"createTime"
	};
    
	//修改日期
	cols[cols.length] = {header:C_MODIFY_TIME,
		renderer:formatDateTime,
		dataIndex:"modifyTime"
	};
    
	//佣金比例
	cols[cols.length] = {header:C_COMMISION_RATE,
		width:80,
		dataIndex:"expeCommissionRate",
		renderer:numRender,
		editor:new Ext.form.NumberField({decimalPrecision:2,
			selectOnFocus:true,
			allowBlank:false,
			blankText:'',
			invalidText:''
		})
    };
	
	//佣金
	cols[cols.length] = {header:C_COMMISION,
		width:60,
		dataIndex:"expeCommission",
		renderer:numRender,
		editor:new Ext.form.NumberField({decimalPrecision:2,
			selectOnFocus:true,
			allowBlank:false,
			blankText:'',invalidText:''
		})
    };
    
	cols[cols.length] = {header:C_CREATE_BY,renderer:getUSER,dataIndex:"createBy"};
	cols[cols.length] = {header:C_MODIFY_BY,renderer:getUSER,dataIndex:"expeUpdateBy"};
	cols[cols.length] = {header:C_BILL_BY,renderer:getUSER,dataIndex:"expeInvoiceBy"};
	cols[cols.length] = {header:C_VOUC_BY,renderer:getUSER,dataIndex:"expeWriteOffBy"};
	 
	if(_expeType=='R'){		
		//是否开票
		cols[cols.length] = {header:C_WHETHER_INVOICING,
			dataIndex:'expeInvoiceFlag',
			align:'center',
			width:100,
			renderer:getY_O_N,
	 		editor:new Ext.form.ComboBox({displayField:'NAME',
	 			valueField:'CODE',
	 			store:Y_O_N,
	 			triggerAction:'all',
	 			typeAhead:true,
	            mode:'local',
	            selectOnFocus:true,
	            listeners:{scope:this,
	            	select:function(c,r,i){
	            		var b=this.getSelectionModel().getSelected();
	            		b.set('expeInvoiceTitle',r.get('CODE')==1?b.get('custName'):'');
	            	}
	            }
	 		})
		};
		
		//发票抬头
		cols[cols.length] = {header:C_INVO_TITLE,
			dataIndex:'expeInvoiceTitle',
			align:'center',
			width:100,
			editor:new Ext.form.TextField()
		};
	}
	
	var cm = new Ext.grid.ColumnModel({columns:cols,
		defaults:{sortable:true,width:100,align:'center'}
	});
	
	cm.defaultSortable=true;
	cm.defaultWidth=100;
	
	this.add=function(){
		var unit='EACH';
		var rid=GGUID();
		var e = new SExpense({id:rid,
			expeId:rid,
			consId:_consign.get('consId'),
			consNo:_consign.get('consNo'),
			section:'CONS',
			consSailDate:_consign.get('consSailDate'),
			expeInvoiceTitle:_consign.get('custName'),
    		consMblNo:_consign.get('consMblNo'),
    		consHblNo:_consign.get('consHblNo'),
    		consVessel:_consign.get('vessName'),
    		consVoyage:_consign.get('voyaName'),
    		consBizClass:_consign.get('consBizClass'),
    		consBizType:_consign.get('consBizType'),
    		consShipType:_consign.get('consShipType'),
    		expeStatus:'0',
    		expeBillStatus:'0',
    		expeInvoiceStatus:'0',
    		expeWriteoffStatus:'0',
    		custId:_expeType=='R'?_consign.get('custId'):_consign.get('consBookingAgency'),
    		custName:_expeType=='R'?_consign.get('custName'):_consign.get('consBookingAgencyName'),
    		custSname:_expeType=='R'?_consign.get('custSname'):_consign.get('consBookingAgencySname'),
    		consCustId:_consign.get('custId'),
    		consCustName:_consign.get('custName'),
    		expeType:_expeType,
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
				
				e.set('id',id);
				e.set('expeId',id);
				e.set('rowAction','N');
				e.set('expeType',_expeType=='R'?'P':'R');						
				e.set('custId',_expeType=='P'?_consign.get('custId'):'');
				e.set('custName',_expeType=='P'?_consign.get('custName'):'');
				e.set('custSname',_expeType=='P'?_consign.get('custSname'):'');
				e.set('consCustId',
				e.get('custId'));
				e.set('consCustName',
				e.get('custName'));			    		
				e.set('expeDate',new Date());
				e.set('id',id);
				e.set('expeId',id);
				e.set('version','1');
				e.set('expeInvoiceNo','');
				e.set('expeInvoiceDate','');
				e.set('expeUnitPrice','');
				e.set('expeInvoiceFlag',1);
				e.set('expeInnerPrice','');
				e.set('expeInnerAmount','');
				e.set('expeTotalAmount','');
				e.set('expeCommission',0);
				e.set('expeCommissionRate','');
				e.set('expeRcAmount','');
				e.set('expeWriteOffDate','');
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
				if(_expeType=='R')
					frm.ps.add(e);
				else
					frm.rs.add(e);
			}
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	
	this.copyFrom=function(){
		var win = new Fos.ExCopyWin(_expeType);
		win.addButton({text:C_OK,scope:this,handler:function(){
			var g = win.findById('G_EXP_COPY_FROM');
			var a = g.getSelectionModel().getSelections();
			if(a){
				for(var i=0;i<a.length;i++){
					var r = a[i];
					var rid=GGUID();
					var e = new SExpense({id:rid,
						expeId:rid,
						consId:_consign.get('consId'),
						consNo:_consign.get('consNo'),
						consSailDate:_consign.get('consSailDate'),
			    		consMblNo:_consign.get('consMblNo'),
			    		consHblNo:_consign.get('consHblNo'),
			    		consVessel:_consign.get('vessName'),
			    		consVoyage:_consign.get('voyaName'),
			    		consBizClass:_consign.get('consBizClass'),
			    		consBizType:_consign.get('consBizType'),
			    		consShipType:_consign.get('consShipType'),
			    		expeStatus:'0',expeBillStatus:'0',
			    		expeInvoiceStatus:'0',
			    		expeWriteOffStatus:'0',
			    		custId:r.get('custId'),
			    		custName:r.get('custName'),
			    		custSname:r.get('custSname'),
			    		consCustId:_consign.get('custId'),
			    		consCustName:_consign.get('custName'),
			    		expeInvoiceTitle:r.get('expeInvoiceTitle'),
			    		chclId:r.get('chclId'),
			    		charId:r.get('charId'),
			    		charName:r.get('charName'),
			    		expeType:_expeType,
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
			var win = new Fos.ExalWin(s,_consign);			
			win.show();
		}
		else XMG.alert(SYS,M_NO_DATA_SELECTED);
	};
	var locked=_consign.get('consStatusExp')==1||_consign.get('consStatusAud')!=0;
	
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
			EXPC('EXPE_CONFIRM','&expeIds='+expeIds+'&consId='+_consign.get('consId'));
		}
		else
			EXPC('EXPE_CONFIRM','&expeType='+_expeType+'&consId='+_consign.get('consId'));
	};
	
	//导出费用结算单
	this.expCheck=function(){
		EXPC('EXPE_SETTLEMENT','&aggressive=1&consId='+_consign.get('consId'));
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

		
	var btnAdd = new Ext.Button({itemId:'TB_A',
		text:C_ADD,
		iconCls:'add',
		disabled:NR(m+F_M)||locked,
		scope:this,
		handler:this.add
	});
	
	var btnRemove = new Ext.Button({itemId:'TB_B',
		text:C_REMOVE,
		iconCls:'remove',
		disabled:NR(m+F_R)||locked,
		scope:this,
		handler:this.removeExp
	});
	
	var btnSave = new Ext.Button({itemId:'TB_C',
		text:C_SAVE,
		iconCls:'save',
		disabled:NR(m+F_M)||locked,
		scope:this,
		handler:this.save
	});
	
	var btnCopy = new Ext.Button({itemId:'TB_D',
		text:C_COPY_FROM,
		iconCls:'copy',
		disabled:NR(m+F_M)||locked,
		scope:this,
		handler:this.cp
	});
	
    var btnExport = new Ext.Button({itemId: 'TB_E',
    	text:C_EXPORT,
		iconCls:'print',
		disabled:NR(m+F_M)||locked,
		scope:this,
		menu: {items: [
           {text:C_EXPE_CONFIRM,scope:this,handler:this.expConfirm}, 
           {text:C_EXPE_CHECK,scope:this,handler:this.expCheck}]
		}
    });
    
    var btnAllocate = new Ext.Button({itemId:'TB_F'+'F',
		text:C_ALLOCATION,
		iconCls:'broken',
		disabled:NR(m+F_M)||locked,
		scope:this,
		handler:this.allocate
	});
    
    var btnCopyFrom = new Ext.Button({itemId:'TB_CF',
		text:C_COPY_FROM_OT,
		iconCls:'copy',
		disabled:NR(m+F_M)||locked,
		scope:this,
		handler:this.copyFrom
	});
    
    var btnCopyRP = new Ext.Button({itemId:'TB_CT',
		text:_expeType=='R'?C_COPY_TO_P:C_COPY_TO_R,
		iconCls:'copy',
		disabled:NR(m+F_M)||locked,
		scope:this,
		handler:this.cpTo
	});
    
    var btnInvoice = new Ext.Button({itemId:'TB_I',
		text:C_GEN_INVOICE,
		iconCls:'save',
		scope:this,
		handler:this.genInvoice
	});
    
    this.updateTB=function(){
		var tb=this.getTopToolbar();
		var locked=_consign.get('consStatusExp')==1||_consign.get('consStatusAud')!=0;
		if(tb.getComponent('TB_A')) tb.getComponent('TB_A').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_B')) tb.getComponent('TB_B').setDisabled(NR(m+F_R)||locked);
    	if(tb.getComponent('TB_C')) tb.getComponent('TB_C').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_D')) tb.getComponent('TB_D').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_E')) tb.getComponent('TB_E').setDisabled(NR(m+F_M)||locked);
    	if(tb.getComponent('TB_CF')) tb.getComponent('TB_CF').setDisabled(NR(m+F_M)||locked);
	};
	 
	var topBar = [];
	if(_expeType == 'R'){
		topBar = [btnAdd, '-',btnRemove,'-',btnSave,'-',btnCopy,'-',btnCopyRP,'-',btnCopyFrom,'-',btnInvoice,'-',btnExport];
	}
	else if(_expeType == 'P'){
		topBar = [btnAdd, '-',btnRemove,'-',btnSave,'-',btnCopy,'-',btnCopyRP,'-',btnCopyFrom,'-',btnAllocate,'-',btnExport];
	}
	else if (_expeType == 'D'){
		topBar = [btnAdd,'-',btnRemove,'-',btnSave];
	}
	
	Fos.ExpenseGrid.superclass.constructor.call(this, {id:'G_EXOE_'+_consign.get('consNo')+_expeType,
		border:true,
		autoScroll:true,
		clicksToEdit:1,
		height:200,
	    stripeRows:true,
	    store:store,
	    sm:sm,
	    cm:cm,
	    listeners:{scope:this,
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
	    tbar:topBar
    });
};
Ext.extend(Fos.ExpenseGrid, Ext.grid.EditorGridPanel);